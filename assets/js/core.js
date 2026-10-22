/* IU Faculty App – lõi ứng dụng (không phụ thuộc thư viện ngoài)
   App.data   : dữ liệu giả lập (window.IUDATA) + thay đổi lưu ở localStorage
   App.auth   : SSO giả lập + MFA (TOTP RFC 6238 thật bằng WebCrypto / push)
   App.acl    : RBAC theo vai trò + ABAC theo thuộc tính (core_metadata.json)
   App.mask   : che dữ liệu, ẩn danh hoá
   App.audit  : nhật ký kiểm toán bất biến (chuỗi băm)
   App.ui     : tiện ích giao diện, biểu đồ SVG
   App.page() : đăng ký trang; router theo hash #/trang/tham-so                                  */
(function () {
  'use strict';
  const D = window.IUDATA;
  const App = (window.App = { pages: {}, i18n: { vi: {}, en: {} }, D });
  const LS = 'iuapp.v1', SS = 'iuapp.session';

  /* ------------------------------------------------------------- lưu trữ */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { return {}; } },
    set(o) { try { localStorage.setItem(LS, JSON.stringify(o)); } catch (e) { /* bộ nhớ bị chặn */ } },
    patch(k, v) { const o = store.get(); o[k] = v; store.set(o); },
    list(k) { return store.get()[k] || []; },
    push(k, item) { const a = store.list(k); a.push(item); store.patch(k, a); return item; },
  };
  App.store = store;
  App.reset = function () { try { localStorage.removeItem(LS); sessionStorage.removeItem(SS); } catch (e) {} location.hash = '#/login'; location.reload(); };

  /* ------------------------------------------------------------- i18n */
  App.lang = (store.get().lang) || 'vi';
  App.addI18n = function (dict) { for (const l of ['vi', 'en']) Object.assign(App.i18n[l], dict[l] || {}); };
  App.t = function (k, vars) {
    let s = App.i18n[App.lang][k];
    if (s === undefined) s = App.i18n.vi[k];
    if (s === undefined) return k;
    if (vars) for (const v in vars) s = s.split('{' + v + '}').join(vars[v]);
    return s;
  };
  /* L(obj,'name') → obj.name_vi | obj.name_en ; cũng nhận obj.vi/obj.en */
  App.L = function (o, base) {
    if (!o) return '';
    if (base) return o[base + '_' + App.lang] || o[base + '_vi'] || o[base] || '';
    return o[App.lang] || o.vi || '';
  };
  App.setLang = function (l) { App.lang = l; store.patch('lang', l); document.documentElement.lang = l; App.render(); };

  /* ------------------------------------------------------------- tiện ích */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  App.esc = esc;
  App.h = function (html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content; };
  App.fmtDate = function (iso) { if (!iso) return ''; const d = String(iso).slice(0, 10).split('-'); return d.length === 3 ? d[2] + '/' + d[1] + '/' + d[0] : iso; };
  App.fmtDT = function (iso) { if (!iso) return ''; return App.fmtDate(iso) + ' ' + String(iso).slice(11, 16); };
  App.fmtNum = function (n, d) { if (n == null || isNaN(n)) return '–'; return Number(n).toLocaleString(App.lang === 'vi' ? 'vi-VN' : 'en-US', { maximumFractionDigits: d == null ? 1 : d, minimumFractionDigits: 0 }); };
  App.today = new Date(D.meta.today + 'T09:00:00');
  App.now = function () { const n = new Date(); const t = new Date(App.today); t.setHours(n.getHours(), n.getMinutes(), n.getSeconds()); return t; };
  App.localISO = function (d) { d = d || new Date(); const z = (n) => String(n).padStart(2, '0'); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()) + 'T' + z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds()); };
  App.uid = function (p) { return (p || 'ID') + '-' + Date.now().toString(36).toUpperCase() + Math.floor(Math.random() * 1e3); };

  /* ------------------------------------------------------------- dữ liệu */
  const staffById = {};
  D.staff.forEach((s) => (staffById[s.ma_cb] = s));
  App.staff = function (id) {
    const s = staffById[id];
    if (!s) return null;
    const edits = (store.get().profileEdits || {})[id];
    return edits ? Object.assign({}, s, edits) : s;
  };
  App.staffList = function () { return D.staff.map((s) => App.staff(s.ma_cb)); };
  App.dept = function (code) { return D.org.departments.find((d) => d.code === code) || { vi: code || '', en: code || '' }; };
  App.position = function (code) { return (D.positions.positions || []).find((p) => p.code === code); };
  App.process = function (code) { return D.processes.find((p) => p.code === code); };
  App.requests = function () {
    const local = store.list('requests');
    const upd = store.get().requestUpdates || {};
    const seeded = D.requests.map((r) => (upd[r.id] ? Object.assign({}, r, upd[r.id]) : r));
    return seeded.concat(local.map((r) => (upd[r.id] ? Object.assign({}, r, upd[r.id]) : r)));
  };
  App.saveRequest = function (r) {
    if (D.requests.some((x) => x.id === r.id) || store.list('requests').some((x) => x.id === r.id)) {
      const upd = store.get().requestUpdates || {}; upd[r.id] = r; store.patch('requestUpdates', upd);
    } else store.push('requests', r);
  };
  App.metaField = function (key) {
    for (const e of (D.metadata.entities || [])) for (const f of e.fields) if (f.key === key) return Object.assign({ entity: e.key }, f);
    return null;
  };

  /* ------------------------------------------------------------- TOTP (RFC 6238) */
  function b32(s) {
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'; let bits = '', out = [];
    for (const c of s.replace(/=+$/, '')) bits += A.indexOf(c).toString(2).padStart(5, '0');
    for (let i = 0; i + 8 <= bits.length; i += 8) out.push(parseInt(bits.slice(i, i + 8), 2));
    return new Uint8Array(out);
  }
  async function totp(secret, t) {
    const ctr = Math.floor((t || Date.now()) / 30000);
    const buf = new ArrayBuffer(8); const dv = new DataView(buf);
    dv.setUint32(0, Math.floor(ctr / 2 ** 32)); dv.setUint32(4, ctr >>> 0);
    if (!(window.crypto && crypto.subtle)) { /* trình duyệt cũ / file:// không có subtle → mã dự phòng */
      let h = 0; for (const c of secret + ctr) h = (h * 31 + c.charCodeAt(0)) >>> 0; return String(h % 1e6).padStart(6, '0');
    }
    const key = await crypto.subtle.importKey('raw', b32(secret), { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
    const mac = new Uint8Array(await crypto.subtle.sign('HMAC', key, buf));
    const o = mac[19] & 15;
    const code = ((mac[o] & 127) << 24 | mac[o + 1] << 16 | mac[o + 2] << 8 | mac[o + 3]) % 1e6;
    return String(code).padStart(6, '0');
  }
  async function sha256(s) {
    if (!(window.crypto && crypto.subtle)) { let h = 5381; for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0; return h.toString(16).padStart(8, '0').repeat(8); }
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, '0')).join('');
  }
  App.sha256 = sha256;
  App.totp = totp;

  /* ------------------------------------------------------------- xác thực */
  const auth = (App.auth = {
    session: null,
    load() {
      try { auth.session = JSON.parse(sessionStorage.getItem(SS)); } catch (e) { auth.session = null; }
      const rv = auth.session && (store.get()['ac.revoked'] || {})[auth.session.username];   // buộc đăng xuất từ trang Tài khoản
      if (rv && new Date(rv).getTime() > auth.session.loginAt) { auth.session = null; try { sessionStorage.removeItem(SS); } catch (e) {} }
      return auth.session;
    },
    save() { try { sessionStorage.setItem(SS, JSON.stringify(auth.session)); } catch (e) {} },
    account(u) { u = String(u || '').trim().toLowerCase().replace(/@.*$/, ''); return D.accounts.find((a) => a.username === u); },
    checkPassword(acc, pw) {
      const lock = (store.get().locks || {})[acc.username];
      if (lock && lock > Date.now()) return 'locked';
      if (pw !== acc.password) {
        const f = store.get().fails || {}; f[acc.username] = (f[acc.username] || 0) + 1; store.patch('fails', f);
        if (f[acc.username] >= 5) { const l = store.get().locks || {}; l[acc.username] = Date.now() + 5 * 60000; store.patch('locks', l); f[acc.username] = 0; store.patch('fails', f); return 'locked'; }
        return 'bad';
      }
      return 'ok';
    },
    async verifyOtp(acc, code) {
      const now = Date.now();
      for (const dt of [0, -30000, 30000]) if ((await totp(acc.mfa_secret, now + dt)) === String(code).trim()) return true;
      return false;
    },
    start(acc, method) {
      const s = App.staff(acc.ma_cb);
      auth.session = { username: acc.username, ma_cb: acc.ma_cb, roles: acc.roles.slice(), role: acc.roles[0], mfaAt: Date.now(), loginAt: Date.now(), last: Date.now(), method, sid: App.uid('SID') };
      auth.save();
      App.audit('DANG_NHAP', 'Đăng nhập SSO + MFA (' + method + ')', s.ma_cb);
    },
    logout(reason) {
      if (auth.session) App.audit('DANG_XUAT', reason || 'Đăng xuất', auth.session.ma_cb);
      auth.session = null; try { sessionStorage.removeItem(SS); } catch (e) {}
      location.hash = '#/login';
    },
    user() { if (!auth.session) return null; return Object.assign({}, App.staff(auth.session.ma_cb), { roles: auth.session.roles, role: auth.session.role }); },
    mfaFresh(sec) { return auth.session && Date.now() - auth.session.mfaAt < (sec || 300) * 1000; },
    touch() { if (auth.session) { auth.session.last = Date.now(); auth.save(); } },
    IDLE: 15 * 60 * 1000,
  });
  App.user = () => auth.user();
  App.role = () => (auth.session ? auth.session.role : null);
  App.setRole = function (r) { if (auth.session && auth.session.roles.includes(r)) { auth.session.role = r; auth.save(); App.audit('DOI_VAI_TRO', 'Chuyển vai trò hoạt động → ' + r, auth.session.ma_cb); location.hash = '#/home'; App.render(); } };

  /* Xác thực lại MFA (step-up) – trả về Promise<boolean> */
  App.stepUp = function (reasonText) {
    return new Promise((resolve) => {
      const acc = auth.account(auth.session.username);
      const m = App.ui.modal(`<h3>${App.t('mfa.stepup')}</h3><p class="muted">${esc(reasonText || '')}</p>
        <div class="mfa-wrap"><label>${App.t('mfa.code')}<input class="otp" maxlength="6" inputmode="numeric" autocomplete="one-time-code" placeholder="••••••"></label>
        <div class="phone mini" data-phone></div></div><p class="err" hidden></p>
        <div class="row end"><button class="btn ghost" data-x>${App.t('cancel')}</button><button class="btn" data-ok>${App.t('confirm')}</button></div>`);
      App.ui.phone(m.querySelector('[data-phone]'), acc);
      const inp = m.querySelector('.otp'); inp.focus();
      const done = (v) => { App.ui.closeModal(); resolve(v); };
      m.querySelector('[data-x]').onclick = () => done(false);
      const ok = async () => {
        if (await auth.verifyOtp(acc, inp.value)) { auth.session.mfaAt = Date.now(); auth.save(); App.audit('MFA_STEPUP', 'Xác thực lại MFA: ' + (reasonText || ''), auth.session.ma_cb); done(true); }
        else { const e = m.querySelector('.err'); e.hidden = false; e.textContent = App.t('mfa.bad'); App.audit('MFA_LOI', 'Sai mã OTP khi xác thực lại', auth.session.ma_cb); }
      };
      m.querySelector('[data-ok]').onclick = ok;
      inp.onkeydown = (e) => { if (e.key === 'Enter') ok(); };
    });
  };

  /* ------------------------------------------------------------- phân quyền */
  const featuresOf = function (role) {
    const p = App.position(role);
    if (p) return p.features.slice();
    return ({ CVHT: ['eprofile', 'eprocess', 'sv_advisor', 'sv_warning'], CV_TCCB: ['eprofile', 'eprocess', 'directory'], CV_DTDH: ['eprocess', 'sv_warning', 'directory'],
      CV_QLKH: ['eprocess', 'rs_paper', 'rs_project'], BGH: ['dashboard', 'decision', 'eprocess', 'directory'], DPO: ['privacy_admin', 'audit'], ADMIN: ['accounts', 'audit'] })[role] || [];
  };
  const acl = (App.acl = {
    features() { const r = App.role(); const f = featuresOf(r); if (['TK', 'PTK', 'TBM'].includes(r)) f.push('directory'); return f; },
    has(feature) { return acl.features().includes(feature); },
    scopeOf(role) { const r = (D.metadata.roles || []).find((x) => x.code === role); return r ? r.scope : 'self'; },
    /* phạm vi cán bộ mà vai trò hiện tại được xem (ABAC A2/A3) */
    inScope(target) {
      const u = App.user(); if (!u || !target) return false;
      if (u.ma_cb === target.ma_cb) return true;
      const sc = acl.scopeOf(u.role);
      if (sc === 'school') return true;
      if (sc === 'faculty') return target.don_vi === u.don_vi;
      if (sc === 'department') return target.don_vi === u.don_vi && target.bo_mon === u.bo_mon;
      return false;
    },
    /* mức hiển thị một trường của hồ sơ: 'full' | 'masked' | 'none' */
    field(key, target) {
      const u = App.user(); const f = App.metaField(key);
      if (!u || !f) return 'none';
      if (u.role === 'ADMIN') return f.cls === 'CK' ? 'full' : 'none';               // A7
      const self = target && u.ma_cb === target.ma_cb;
      const unlocked = (App._reveal || {})[(target ? target.ma_cb : '') + ':' + key] > Date.now();
      if (self) return (f.cls === 'NC' && !unlocked) ? 'masked' : 'full';            // A1
      if (App.anon && f.cls !== 'CK' && f.cls !== 'NB') return 'none';
      const v = f.view || [];
      if (v.includes('*')) return 'full';
      if (v.includes('staff')) return 'full';
      if (!acl.inScope(target)) return 'none';
      if (!v.includes(u.role)) return 'none';
      if (f.cls === 'NC') return unlocked ? 'full' : 'masked';                       // A6
      if (f.cls === 'CN' && f.mask && !unlocked && u.role !== 'CV_TCCB') return 'masked';
      return 'full';
    },
  });
  App._reveal = {};
  /* mở xem trường che: cần mục đích + step-up MFA, hiệu lực 5 phút, ghi nhật ký */
  App.reveal = async function (target, key, purpose) {
    const f = App.metaField(key);
    const ok = await App.stepUp(App.t('mfa.reveal', { f: App.L(f) }));
    if (!ok) return false;
    App._reveal[target.ma_cb + ':' + key] = Date.now() + 5 * 60000;
    App.audit(f.cls === 'NC' ? 'XEM_NHAY_CAM' : 'XEM_CA_NHAN', 'Mở xem trường "' + f.vi + '" – mục đích: ' + (purpose || 'Tự tra cứu'), target.ma_cb, purpose);
    return true;
  };

  /* ------------------------------------------------------------- che & ẩn danh */
  App.anon = !!store.get().anon;
  App.setAnon = function (v) { App.anon = v; store.patch('anon', v); App.audit('AN_DANH', v ? 'Bật chế độ ẩn danh trình chiếu' : 'Tắt chế độ ẩn danh', auth.session && auth.session.ma_cb); App.render(); };
  App.mask = function (val, code) {
    if (val == null || val === '') return '';
    const s = String(val);
    switch (code) {
      case 'last4': return '•'.repeat(Math.max(0, s.length - 4)) + s.slice(-4);
      case 'last3': return '•'.repeat(Math.max(0, s.length - 3)) + s.slice(-3);
      case 'year_only': return s.slice(0, 4);
      case 'province_only': { const p = s.split(',').map((x) => x.trim()); return p[p.length - 1]; }
      case 'email': { const [a, b] = s.split('@'); return a[0] + '•••@' + b; }
      default: return '••••••';
    }
  };
  /* bí danh ổn định cho một mã cán bộ / MSSV (giả danh hoá, phục vụ trình chiếu) */
  const pseudoCache = {};
  App.pseudo = function (id, prefix) {
    if (pseudoCache[id]) return pseudoCache[id];
    let h = 2166136261; for (const c of String(id) + 'IU-salt-2026') { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
    return (pseudoCache[id] = (prefix || 'CB') + '-' + h.toString(36).toUpperCase().slice(0, 5));
  };
  /* tên hiển thị tôn trọng chế độ ẩn danh */
  App.name = function (s, opts) {
    if (!s) return '';
    const u = App.user();
    if (App.anon && !(u && u.ma_cb === s.ma_cb)) return App.pseudo(s.ma_cb || s.mssv, s.mssv ? 'SV' : 'CB');
    const pre = opts && opts.title ? App.academicPrefix(s) : '';
    return (pre ? pre + ' ' : '') + s.ho_ten;
  };
  App.academicPrefix = function (s) { return [s.hoc_ham === 'PGS' ? 'PGS.' : s.hoc_ham === 'GS' ? 'GS.' : '', s.hoc_vi === 'TS' ? 'TS.' : s.hoc_vi === 'ThS' ? 'ThS.' : s.hoc_vi === 'KS' ? 'KS.' : ''].join(''); };
  App.photo = function (s) {
    const u = App.user();
    if (!s) return 'assets/img/avatar.svg';
    if (App.anon && !(u && u.ma_cb === s.ma_cb)) return 'assets/img/avatar.svg';
    return (s.media && s.media.photo) || s.photo || 'assets/img/avatar.svg';
  };

  /* ------------------------------------------------------------- nhật ký kiểm toán (chuỗi băm) */
  App.audit = function (action, desc, target, purpose) {
    const log = store.list('audit');
    const prev = log.length ? log[log.length - 1].hash : 'GENESIS';
    const e = { luc: App.localISO(), nguoi: auth.session ? auth.session.ma_cb : '-', vai_tro: auth.session ? auth.session.role : '-',
      hanh_dong: action, mo_ta: desc, doi_tuong: target || '', muc_dich: purpose || '', ip: '10.8.0.' + (12 + (log.length % 200)), prev };
    e.hash = 'pending';
    log.push(e); store.patch('audit', log);
    sha256(prev + JSON.stringify([e.luc, e.nguoi, e.hanh_dong, e.mo_ta, e.doi_tuong])).then((h) => {
      const l2 = store.list('audit'); const i = l2.findIndex((x) => x.luc === e.luc && x.hanh_dong === e.hanh_dong && x.hash === 'pending');
      if (i >= 0) { l2[i].hash = h; if (l2[i + 1]) l2[i + 1].prev = h; store.patch('audit', l2); }
    });
  };
  App.auditLog = function () { return D.audit.map((x) => Object.assign({ seeded: true }, x)).concat(store.list('audit')); };

  /* ------------------------------------------------------------- thông báo */
  App.notify = function (to, text, link) { store.push('notes', { id: App.uid('N'), to, text, link, at: new Date().toISOString(), read: false }); };
  App.myNotes = function () { const u = App.user(); return u ? store.list('notes').filter((n) => n.to === u.ma_cb || n.to === u.role) : []; };

  /* ------------------------------------------------------------- UI */
  const ui = (App.ui = {});
  ui.toast = function (msg, kind) {
    let box = document.getElementById('toasts');
    if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
    const t = document.createElement('div'); t.className = 'toast ' + (kind || ''); t.textContent = msg; box.appendChild(t);
    setTimeout(() => t.classList.add('out'), 3200); setTimeout(() => t.remove(), 3800);
  };
  ui.modal = function (html, wide) {
    ui.closeModal();
    const bg = document.createElement('div'); bg.className = 'modal-bg'; bg.id = 'modal';
    bg.innerHTML = `<div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true"><button class="modal-x" aria-label="${App.t('close')}">×</button>${html}</div>`;
    document.body.appendChild(bg);
    bg.querySelector('.modal-x').onclick = ui.closeModal;
    bg.addEventListener('mousedown', (e) => { if (e.target === bg) ui.closeModal(); });
    return bg.querySelector('.modal');
  };
  ui.closeModal = function () { const m = document.getElementById('modal'); if (m) m.remove(); if (ui._phoneTimer) { clearInterval(ui._phoneTimer); ui._phoneTimer = null; } };
  ui.badge = (text, kind) => `<span class="badge ${kind || ''}">${esc(text)}</span>`;
  ui.cls = function (code) {
    const c = (D.metadata.classes || []).find((x) => x.code === code);
    return c ? `<span class="cls cls-${code}" title="${esc(App.L(c, 'desc'))}">${esc(code)}</span>` : '';
  };
  ui.kpi = (label, value, sub, kind) => `<div class="kpi ${kind || ''}"><div class="kpi-l">${esc(label)}</div><div class="kpi-v">${value}</div>${sub ? `<div class="kpi-s">${sub}</div>` : ''}</div>`;
  ui.empty = (t) => `<div class="empty">${esc(t || App.t('empty'))}</div>`;
  ui.table = function (cols, rows, opts) {
    opts = opts || {};
    if (!rows.length) return ui.empty(opts.empty);
    return `<div class="tbl-wrap"><table class="tbl ${opts.cls || ''}"><thead><tr>${cols.map((c) => `<th class="${c.cls || ''}">${esc(c.t)}</th>`).join('')}</tr></thead><tbody>` +
      rows.map((r, i) => `<tr ${opts.rowAttr ? opts.rowAttr(r, i) : ''}>${cols.map((c) => `<td class="${c.cls || ''}">${c.f ? c.f(r, i) : esc(r[c.k])}</td>`).join('')}</tr>`).join('') + '</tbody></table></div>';
  };
  ui.tabs = function (el, tabs, active, onChange) {
    el.innerHTML = `<div class="tabs" role="tablist">${tabs.map((t) => `<button role="tab" class="tab ${t.k === active ? 'on' : ''}" data-k="${t.k}">${esc(t.t)}</button>`).join('')}</div>`;
    el.querySelectorAll('.tab').forEach((b) => (b.onclick = () => { el.querySelectorAll('.tab').forEach((x) => x.classList.toggle('on', x === b)); onChange(b.dataset.k); }));
  };
  ui.progress = (pct, kind) => `<div class="bar ${kind || ''}"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></div>`;
  /* điện thoại giả lập "IU Authenticator" */
  ui.phone = function (el, acc) {
    const draw = async () => {
      if (!el.isConnected) return;
      const code = await totp(acc.mfa_secret);
      const left = 30 - Math.floor((Date.now() / 1000) % 30);
      el.innerHTML = `<div class="phone-top">IU Authenticator</div><div class="phone-acc">${esc(acc.username)}@sim.hcmiu.edu.vn</div>
        <div class="phone-code">${code.slice(0, 3)} ${code.slice(3)}</div><div class="phone-ring"><i style="width:${(left / 30) * 100}%"></i></div>
        <div class="phone-left">${App.t('mfa.left', { s: left })}</div>`;
    };
    draw(); if (ui._phoneTimer) clearInterval(ui._phoneTimer); ui._phoneTimer = setInterval(draw, 1000);
  };

  /* biểu đồ SVG tối giản */
  const chart = (ui.chart = {});
  const PAL = ['#2E3191', '#1C9ACC', '#7A7FD1', '#5BC0E8', '#B7791F', '#2F855A', '#C53030', '#805AD5'];
  chart.PAL = PAL;
  chart.bars = function (items, opts) {
    opts = opts || {}; const W = opts.w || 560, H = opts.h || 220, pad = 34, max = opts.max || Math.max(1, ...items.map((i) => Math.max(i.v, i.ref || 0)));
    const bw = (W - pad - 10) / items.length;
    let s = `<svg viewBox="0 0 ${W} ${H + 40}" class="chart" role="img" aria-label="${esc(opts.label || '')}">`;
    for (let g = 0; g <= 4; g++) { const y = H - (H - 10) * g / 4; s += `<line x1="${pad}" x2="${W}" y1="${y}" y2="${y}" class="grid"/><text x="${pad - 4}" y="${y + 4}" class="ax" text-anchor="end">${App.fmtNum(max * g / 4, 0)}</text>`; }
    items.forEach((it, i) => {
      const x = pad + 6 + i * bw, h = (H - 10) * it.v / max, col = it.c || PAL[0];
      s += `<rect x="${x}" y="${H - h}" width="${Math.max(4, bw - 10)}" height="${h}" rx="3" fill="${col}"><title>${esc(it.l)}: ${App.fmtNum(it.v)}</title></rect>`;
      if (it.ref) { const y = H - (H - 10) * it.ref / max; s += `<line x1="${x - 2}" x2="${x + bw - 8}" y1="${y}" y2="${y}" class="ref"/>`; }
      s += `<text x="${x + (bw - 10) / 2}" y="${H + 14}" class="ax" text-anchor="middle">${esc(String(it.l).slice(0, opts.cut || 10))}</text>`;
      if (opts.values !== false) s += `<text x="${x + (bw - 10) / 2}" y="${H - h - 4}" class="val" text-anchor="middle">${App.fmtNum(it.v, 0)}</text>`;
    });
    return s + '</svg>';
  };
  chart.donut = function (items, opts) {
    opts = opts || {}; const tot = items.reduce((a, b) => a + b.v, 0) || 1; let a0 = -Math.PI / 2; const R = 70, r = 44, C = 90;
    let s = `<div class="donut"><svg viewBox="0 0 180 180" class="chart" role="img" aria-label="${esc(opts.label || '')}">`;
    items.forEach((it, i) => {
      const a1 = a0 + 2 * Math.PI * it.v / tot; const L = a1 - a0 > Math.PI ? 1 : 0;
      const p = (rr, a) => [C + rr * Math.cos(a), C + rr * Math.sin(a)];
      if (it.v > 0) {
        if (it.v === tot) s += `<circle cx="${C}" cy="${C}" r="${(R + r) / 2}" fill="none" stroke="${it.c || PAL[i]}" stroke-width="${R - r}"/>`;
        else s += `<path d="M${p(R, a0)} A${R},${R} 0 ${L} 1 ${p(R, a1)} L${p(r, a1)} A${r},${r} 0 ${L} 0 ${p(r, a0)}Z" fill="${it.c || PAL[i % PAL.length]}"><title>${esc(it.l)}: ${it.v}</title></path>`;
      }
      a0 = a1;
    });
    s += `<text x="90" y="88" text-anchor="middle" class="d-v">${esc(opts.center != null ? opts.center : tot)}</text><text x="90" y="106" text-anchor="middle" class="d-l">${esc(opts.sub || '')}</text></svg><ul class="legend">`;
    items.forEach((it, i) => (s += `<li><i style="background:${it.c || PAL[i % PAL.length]}"></i>${esc(it.l)} <b>${it.v}</b></li>`));
    return s + '</ul></div>';
  };
  chart.line = function (series, labels, opts) {
    opts = opts || {}; const W = opts.w || 560, H = opts.h || 200, pad = 34;
    const all = series.flatMap((s) => s.v.filter((x) => x != null)); const max = opts.max || Math.max(...all, 1), min = opts.min != null ? opts.min : 0;
    const X = (i) => pad + 10 + i * (W - pad - 20) / Math.max(1, labels.length - 1), Y = (v) => H - (H - 14) * (v - min) / (max - min || 1);
    let s = `<svg viewBox="0 0 ${W} ${H + 34}" class="chart" role="img" aria-label="${esc(opts.label || '')}">`;
    for (let g = 0; g <= 4; g++) { const v = min + (max - min) * g / 4; s += `<line x1="${pad}" x2="${W}" y1="${Y(v)}" y2="${Y(v)}" class="grid"/><text x="${pad - 4}" y="${Y(v) + 4}" class="ax" text-anchor="end">${App.fmtNum(v, 1)}</text>`; }
    (opts.refs || []).forEach((r) => (s += `<line x1="${pad}" x2="${W}" y1="${Y(r.v)}" y2="${Y(r.v)}" class="ref" stroke="${r.c || '#C53030'}"/><text x="${W - 4}" y="${Y(r.v) - 4}" class="ax" text-anchor="end" fill="${r.c || '#C53030'}">${esc(r.l)}</text>`));
    labels.forEach((l, i) => (s += `<text x="${X(i)}" y="${H + 16}" class="ax" text-anchor="middle">${esc(l)}</text>`));
    series.forEach((se, k) => {
      const pts = se.v.map((v, i) => (v == null ? null : [X(i), Y(v)])).filter(Boolean);
      s += `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${se.c || PAL[k]}" stroke-width="2.5"/>`;
      se.v.forEach((v, i) => { if (v != null) s += `<circle cx="${X(i)}" cy="${Y(v)}" r="4" fill="${se.c || PAL[k]}"><title>${esc(se.l || '')} ${esc(labels[i])}: ${App.fmtNum(v, 2)}</title></circle>`; });
    });
    return s + '</svg>';
  };
  chart.hbars = function (items, opts) {
    opts = opts || {}; const max = opts.max || Math.max(1, ...items.map((i) => Math.max(i.v, i.ref || 0)));
    return `<div class="hbars">${items.map((it, i) => `<div class="hb"><span class="hb-l" title="${esc(it.l)}">${esc(it.l)}</span><span class="hb-t"><i style="width:${100 * it.v / max}%;background:${it.c || PAL[i % 2]}"></i>${it.ref ? `<b class="hb-ref" style="left:${100 * it.ref / max}%"></b>` : ''}</span><span class="hb-v">${it.txt || App.fmtNum(it.v)}</span></div>`).join('')}</div>`;
  };

  /* ------------------------------------------------------------- router & khung */
  App.page = function (key, def) { App.pages[key] = def; };
  App.go = function (h) { location.hash = h; };
  App.NAV = [
    { k: 'home', icon: 'home', f: null },
    { k: 'decision', icon: 'compass', f: 'decision' },
    { k: 'profile', icon: 'id', f: 'eprofile' },
    { k: 'directory', icon: 'users', f: 'directory' },
    { k: 'processes', icon: 'flow', f: 'eprocess' },
    { k: 'teaching', icon: 'book', f: ['wl_ug', 'wl_pg'] },
    { k: 'research', icon: 'flask', f: ['rs_paper', 'rs_project'] },
    { k: 'students', icon: 'cap', f: ['sv_advisor', 'sv_warning'] },
    { k: 'service', icon: 'heart', f: ['sv_admission', 'sv_faculty', 'sv_union'] },
    { k: 'lab', icon: 'chip', f: 'lab' },
    { k: 'metadata', icon: 'db', f: null },
    { k: 'privacy', icon: 'shield', f: null },
    { k: 'audit', icon: 'log', f: 'audit' },
    { k: 'accounts', icon: 'key', f: 'accounts' },
  ];
  App.canNav = function (n) {
    if (!n.f) return true;
    const fs = Array.isArray(n.f) ? n.f : [n.f];
    return fs.some((f) => acl.has(f));
  };
  const ICON = {
    home: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z', compass: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4 6l-2.5 5.5L8 16l2.5-5.5z',
    id: 'M4 5h16v14H4zM8 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.5 8c.5-2 4.5-2 5 0M13 10h5M13 14h4', users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9c0-4 4-6 7-6s7 2 7 6M17 3a4 4 0 0 1 0 8m2 3c2 1 3 3 3 6',
    flow: 'M4 4h6v6H4zM14 14h6v6h-6zM7 10v4a3 3 0 0 0 3 3h4M17 14v-4a3 3 0 0 0-3-3h-4', book: 'M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-5a3 3 0 0 0-3 3',
    flask: 'M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4A1.5 1.5 0 0 0 20 19l-6-10V3M7 14h10', cap: 'M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6',
    heart: 'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z', chip: 'M7 7h10v10H7zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4',
    db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    shield: 'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM9 12l2 2 4-4', log: 'M6 3h9l4 4v14H6zM9 10h7M9 14h7M9 18h4', key: 'M14 10a4 4 0 1 1-1.2-2.8L21 15v3h-3v-2h-2v-2h-2',
    bell: 'M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0', out: 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10', menu: 'M4 6h16M4 12h16M4 18h16',
  };
  App.icon = (k) => `<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="${ICON[k] || ''}"/></svg>`;

  function shell() {
    const u = App.user();
    const roles = u.roles.map((r) => `<option value="${r}" ${r === u.role ? 'selected' : ''}>${esc(App.roleName(r))}</option>`).join('');
    const unread = App.myNotes().filter((n) => !n.read).length;
    document.getElementById('app').innerHTML = `
      <header class="top">
        <button class="icon-btn menu-btn" aria-label="Menu">${App.icon('menu')}</button>
        <a class="brand" href="#/home"><img src="assets/img/iu-logo.png" alt="IU"><span><b>${App.t('app.name')}</b><small>${App.t('app.school')}</small></span></a>
        <div class="top-r">
          <label class="anon-sw" title="${App.t('anon.tip')}"><input type="checkbox" ${App.anon ? 'checked' : ''} data-anon><span>${App.t('anon.mode')}</span></label>
          <div class="lang"><button data-lang="vi" class="${App.lang === 'vi' ? 'on' : ''}">VI</button><button data-lang="en" class="${App.lang === 'en' ? 'on' : ''}">EN</button></div>
          <button class="icon-btn bell" data-bell aria-label="${App.t('notes')}">${App.icon('bell')}${unread ? `<i class="dot">${unread}</i>` : ''}</button>
          <div class="me"><img src="${App.photo(u)}" alt=""><div><b>${esc(App.name(u, { title: true }))}</b><select data-role aria-label="${App.t('role.active')}">${roles}</select></div></div>
          <button class="icon-btn" data-logout title="${App.t('logout')}">${App.icon('out')}</button>
        </div>
      </header>
      <div class="sim-bar">${App.t('sim.banner')}</div>
      <div class="layout"><nav class="side" aria-label="${App.t('nav')}">${App.NAV.filter(App.canNav).map((n) => `<a href="#/${n.k}" data-nav="${n.k}">${App.icon(n.icon)}<span>${App.t('nav.' + n.k)}</span></a>`).join('')}
        <div class="side-foot"><div>${App.t('session.left')}: <b data-idle></b></div><div>SSO · MFA · RBAC/ABAC</div><a href="#" data-reset>${App.t('reset')}</a></div></nav>
        <main id="main" tabindex="-1"></main></div>`;
    const app = document.getElementById('app');
    app.querySelectorAll('[data-lang]').forEach((b) => (b.onclick = () => App.setLang(b.dataset.lang)));
    app.querySelector('[data-role]').onchange = (e) => App.setRole(e.target.value);
    app.querySelector('[data-logout]').onclick = () => auth.logout();
    app.querySelector('[data-anon]').onchange = (e) => App.setAnon(e.target.checked);
    app.querySelector('[data-reset]').onclick = (e) => { e.preventDefault(); if (confirm(App.t('reset.confirm'))) App.reset(); };
    app.querySelector('.menu-btn').onclick = () => app.querySelector('.side').classList.toggle('open');
    app.querySelector('[data-bell]').onclick = () => {
      const ns = App.myNotes().slice().reverse();
      App.ui.modal(`<h3>${App.t('notes')}</h3>${ns.length ? '<ul class="notes">' + ns.map((n) => `<li><a href="${esc(n.link || '#/home')}" data-close>${esc(n.text)}</a><small>${App.fmtDT(n.at)}</small></li>`).join('') + '</ul>' : ui.empty()}`);
      const all = store.list('notes'); all.forEach((n) => { if (ns.some((x) => x.id === n.id)) n.read = true; }); store.patch('notes', all);
      document.querySelectorAll('[data-close]').forEach((a) => a.addEventListener('click', () => ui.closeModal()));
    };
  }
  App.roleName = function (r) { const p = App.position(r); if (p) return App.L(p); const m = (D.metadata.roles || []).find((x) => x.code === r); return m ? App.L(m) : r; };

  App.render = function () {
    const [, key0, ...params] = (location.hash || '#/home').split('/');
    let key = key0 || 'home';
    auth.load();
    if (!auth.session || key === 'login') {
      if (auth.session && key === 'login') { location.hash = '#/home'; return; }
      document.getElementById('app').innerHTML = '<main id="main" class="login-main"></main>';
      App.pages.login.render(document.getElementById('main'));
      document.title = App.t('app.name') + ' – ' + App.t('login.title');
      return;
    }
    if (Date.now() - auth.session.last > auth.IDLE) { auth.logout('Hết phiên do không hoạt động 15 phút'); return; }
    auth.touch();
    const nav = App.NAV.find((n) => n.k === key);
    if (!App.pages[key] || (nav && !App.canNav(nav))) key = 'home';
    shell();
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('on', a.dataset.nav === key));
    const main = document.getElementById('main');
    main.innerHTML = '';
    try { App.pages[key].render(main, params.map(decodeURIComponent)); }
    catch (e) { console.error(e); main.innerHTML = `<div class="card err-card"><h3>Lỗi hiển thị trang</h3><pre>${esc(e.stack || e)}</pre></div>`; }
    document.title = App.t('nav.' + key) + ' – ' + App.t('app.name');
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  };
  /* đếm ngược phiên */
  setInterval(() => {
    const el = document.querySelector('[data-idle]'); if (!el || !auth.session) return;
    const left = Math.max(0, auth.IDLE - (Date.now() - auth.session.last));
    el.textContent = Math.floor(left / 60000) + ':' + String(Math.floor(left / 1000) % 60).padStart(2, '0');
    if (left <= 0) auth.logout('Hết phiên do không hoạt động 15 phút');
  }, 1000);
  ['click', 'keydown'].forEach((ev) => document.addEventListener(ev, () => auth.touch(), { passive: true }));
  window.addEventListener('hashchange', App.render);
  window.addEventListener('DOMContentLoaded', () => { document.documentElement.lang = App.lang; App.render(); });
})();
