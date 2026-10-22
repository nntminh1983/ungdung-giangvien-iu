/* Hồ sơ số giảng viên: xem theo quyền từng trường (RBAC/ABAC), che – mở xem có MFA, đề nghị cập nhật, văn bằng ≤ 10 tệp */
App.addI18n({
  vi: {
    'pf.verified': 'Đã xác thực bởi P.TCCB', 'pf.pending': 'Chờ P.TCCB xác thực', 'pf.tab.info': 'Thông tin chung', 'pf.tab.docs': 'Giấy tờ – văn bằng',
    'pf.tab.fin': 'Tài chính – BHXH', 'pf.tab.hist': 'Đề nghị cập nhật', 'pf.update': 'Đề nghị cập nhật', 'pf.cv': 'Xuất lý lịch khoa học',
    'pf.idcard': 'Thẻ căn cước', 'pf.docs': 'Văn bằng – chứng chỉ', 'pf.docs.n': '{n}/10 tệp', 'pf.upload': 'Tải lên văn bằng/chứng chỉ',
    'pf.upload.max': 'Đã đủ 10 tệp – xoá bớt trước khi tải lên.', 'pf.upload.size': 'Tệp quá lớn cho bản demo (tối đa 400 KB).',
    'pf.selfedit': 'Tự cập nhật (hiệu lực ngay)', 'pf.reqedit': 'Cần P.TCCB xác thực', 'pf.ownedit': 'Chỉ đơn vị làm chủ dữ liệu cập nhật',
    'pf.field': 'Trường dữ liệu', 'pf.old': 'Giá trị hiện tại', 'pf.new': 'Giá trị đề nghị', 'pf.evidence': 'Minh chứng (tên tệp)', 'pf.reason': 'Lý do',
    'pf.sent': 'Đã gửi đề nghị tới P.TCCB – SLA 2 ngày làm việc.', 'pf.saved': 'Đã cập nhật và ghi nhật ký.', 'pf.approve': 'Duyệt', 'pf.reject': 'Từ chối',
    'pf.noscope': 'Bạn không có quyền xem hồ sơ cán bộ này (ngoài phạm vi đơn vị).', 'pf.owner': 'Đơn vị làm chủ', 'pf.purpose': 'Mục đích xử lý',
    'pf.watch': 'Ai đã xem hồ sơ của tôi', 'pf.grp.person': 'Nhân thân', 'pf.kiemnhiem': 'Kiêm nhiệm', 'pf.consent': 'Tôi xác nhận thông tin là đúng sự thật.',
    'pf.ofmine': 'Hồ sơ của tôi',
  },
  en: {
    'pf.verified': 'Verified by Personnel Office', 'pf.pending': 'Awaiting verification', 'pf.tab.info': 'General', 'pf.tab.docs': 'ID & diplomas',
    'pf.tab.fin': 'Finance & insurance', 'pf.tab.hist': 'Update requests', 'pf.update': 'Request update', 'pf.cv': 'Export research CV',
    'pf.idcard': 'ID card', 'pf.docs': 'Diplomas & certificates', 'pf.docs.n': '{n}/10 files', 'pf.upload': 'Upload diploma/certificate',
    'pf.upload.max': '10 files already – delete one first.', 'pf.upload.size': 'File too large for the demo (max 400 KB).',
    'pf.selfedit': 'Self-service (immediate)', 'pf.reqedit': 'Needs Personnel Office verification', 'pf.ownedit': 'Only the owning unit can change it',
    'pf.field': 'Field', 'pf.old': 'Current value', 'pf.new': 'Requested value', 'pf.evidence': 'Evidence (file name)', 'pf.reason': 'Reason',
    'pf.sent': 'Request sent to the Personnel Office – SLA 2 working days.', 'pf.saved': 'Updated and logged.', 'pf.approve': 'Approve', 'pf.reject': 'Reject',
    'pf.noscope': 'You are not allowed to view this staff record (outside your unit).', 'pf.owner': 'Owning unit', 'pf.purpose': 'Processing purpose',
    'pf.watch': 'Who viewed my record', 'pf.grp.person': 'Personal', 'pf.kiemnhiem': 'Concurrent roles', 'pf.consent': 'I confirm the information is true.',
    'pf.ofmine': 'My profile',
  },
});
(function () {
  const t = App.t, esc = App.esc;
  const DISPLAY = {
    ngay_sinh: (v) => App.fmtDate(v), gioi_tinh: (v, s) => (App.lang === 'en' ? ({ Nam: 'Male', 'Nữ': 'Female' })[v] || v : v),
    dang_vien: (v) => (v ? t('yes') : t('no')), cong_doan: (v) => (v ? t('yes') : t('no')), ngay_vao_truong: (v) => App.fmtDate(v),
    bo_mon: (v) => App.L(App.dept(v)), don_vi: (v) => (v === 'EE' ? App.L(App.D.org.faculty) : v),
    llct: (v, s) => v + (s.llct_nam ? ' (' + s.llct_nam + ')' : ''), qpan: (v, s) => v + (s.qpan_nam ? ' (' + s.qpan_nam + ')' : ''),
    kiem_nhiem: (v) => (v || []).join('; ') || '–', hoc_ham: (v) => v || '–', chuc_danh: (v, s) => (App.lang === 'en' && s.chuc_danh_en) || v,
    chuc_vu: (v, s) => (App.lang === 'en' && s.chuc_vu_en) || v, he_so_luong: (v) => App.fmtNum(v, 2),
  };
  const SKIP = new Set(['llct_nam', 'qpan_nam', 'photo', 'id_front', 'id_back', 'docs']);
  function fieldHTML(s, f) {
    const lv = App.acl.field(f.key, s);
    let raw = s[f.key];
    let v = raw == null || raw === '' ? '–' : DISPLAY[f.key] ? DISPLAY[f.key](raw, s) : raw;
    let body;
    if (lv === 'none') body = `<div class="v none">${t('noaccess')}</div>`;
    else if (lv === 'masked') body = `<div class="v masked">${esc(App.mask(f.key === 'ngay_sinh' ? raw : v, f.mask || 'hidden'))} <button class="linkbtn small" data-reveal="${f.key}">${t('reveal')}</button></div>`;
    else body = `<div class="v">${esc(v)}</div>`;
    const me = App.user().ma_cb === s.ma_cb;
    const editIco = me && lv !== 'none' && f.edit !== 'system' ? `<button class="linkbtn small" data-edit="${f.key}" title="${esc(f.edit === 'self' ? t('pf.selfedit') : f.edit === 'owner' ? t('pf.ownedit') : t('pf.reqedit'))}">✎</button>` : '';
    return `<div class="fld"><div class="k">${esc(App.L(f))} ${App.ui.cls(f.cls)} ${editIco}</div>${body}</div>`;
  }
  function entityCard(s, key, title) {
    const e = (App.D.metadata.entities || []).find((x) => x.key === key);
    if (!e) return '';
    const fs = e.fields.filter((f) => !SKIP.has(f.key) && s[f.key] !== undefined);
    if (!fs.length) return '';
    return `<div class="card"><div class="card-h"><h3>${esc(title || App.L(e))}</h3><span class="muted small">${t('pf.owner')}: ${esc(e.owner)}</span></div><div class="fields">${fs.map((f) => fieldHTML(s, f)).join('')}</div></div>`;
  }
  function changeReqs() { return App.store.list('changeRequests'); }

  App.page('profile', {
    render(main, params) {
      const u = App.user();
      const id = params[0] || u.ma_cb;
      const s = App.staff(id);
      if (!s || !App.acl.inScope(s)) { main.innerHTML = `<div class="notice bad">${t('pf.noscope')}</div>`; return; }
      const me = u.ma_cb === s.ma_cb;
      if (!me) App.audit('XEM', 'Xem hồ sơ cán bộ', s.ma_cb, 'Thực hiện nhiệm vụ quản lý');
      const verified = s.trang_thai_xac_thuc !== 'cho_xac_thuc';
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.profile')}</div><h1>${me ? t('pf.ofmine') : esc(App.name(s, { title: true }))}</h1></div>
        <div class="row no-print">${me ? `<button class="btn ghost" data-cv>${t('pf.cv')}</button>` : ''}<button class="btn ghost" onclick="print()">${t('print')}</button></div></div>
        <div class="card prof-h"><img class="ph" src="${App.photo(s)}" alt="Ảnh 3x4">
          <div><h2 style="margin:0">${esc(App.name(s, { title: true }))}</h2>
          <div class="muted">${esc(DISPLAY.chuc_vu(s.chuc_vu, s))} · ${esc(s.bo_mon ? App.L(App.dept(s.bo_mon)) : s.don_vi)}</div>
          <div class="row" style="margin-top:8px"><span class="chip">${t('pf.field') === 'Field' ? 'Staff ID' : 'Mã CB'}: <b>${esc(s.ma_cb)}</b></span><span class="chip">${esc(App.anon && !me ? App.mask(s.email, 'email') : s.email)}</span>
          ${(s.kiem_nhiem || []).map((k) => `<span class="chip">${esc(k)}</span>`).join('')}</div></div>
          <div>${App.ui.badge(verified ? t('pf.verified') : t('pf.pending'), verified ? 'ok' : 'warn')}</div></div>
        <div data-tabs></div><div data-body></div>`;
      const body = main.querySelector('[data-body]');
      const tabs = [{ k: 'info', t: t('pf.tab.info') }, { k: 'docs', t: t('pf.tab.docs') }, { k: 'fin', t: t('pf.tab.fin') }, { k: 'hist', t: t('pf.tab.hist') }];
      const show = (k) => {
        if (k === 'info') body.innerHTML = entityCard(s, 'person') + entityCard(s, 'employment') + entityCard(s, 'qualification') + entityCard(s, 'academic');
        if (k === 'fin') body.innerHTML = entityCard(s, 'finance');
        if (k === 'docs') renderDocs(body, s, me);
        if (k === 'hist') renderHist(body, s, me);
        bind(body, s, () => show(k));
      };
      const first = tabs.some((x) => x.k === params[1]) ? params[1] : 'info';
      App.ui.tabs(main.querySelector('[data-tabs]'), tabs, first, show);
      show(first);
      const cvb = main.querySelector('[data-cv]');
      if (cvb) cvb.onclick = () => exportCV(s);
    },
  });

  function bind(body, s, rerender) {
    body.querySelectorAll('[data-reveal]').forEach((b) => (b.onclick = async () => {
      const me = App.user().ma_cb === s.ma_cb;
      let purpose = 'Tự tra cứu';
      if (!me) {
        const ps = App.D.metadata.purposes || [];
        const m = App.ui.modal(`<h3>${t('pf.purpose')}</h3><label>${t('pf.purpose')}<select data-p>${ps.map((p) => `<option>${esc(App.L(p))}</option>`).join('')}</select></label><div class="row end" style="margin-top:12px"><button class="btn" data-ok>${t('confirm')}</button></div>`);
        purpose = await new Promise((res) => (m.querySelector('[data-ok]').onclick = () => res(m.querySelector('[data-p]').value)));
      }
      if (await App.reveal(s, b.dataset.reveal, purpose)) rerender();
    }));
    body.querySelectorAll('[data-edit]').forEach((b) => (b.onclick = () => editField(s, App.metaField(b.dataset.edit), rerender)));
  }

  function editField(s, f, rerender) {
    if (f.edit === 'owner') { App.ui.toast(t('pf.ownedit') + ' (' + f.owner + ')'); return; }
    const cur = s[f.key] == null ? '' : s[f.key];
    const self = f.edit === 'self';
    const m = App.ui.modal(`<h3>${esc(App.L(f))} ${App.ui.cls(f.cls)}</h3><p class="muted small">${self ? t('pf.selfedit') : t('pf.reqedit')} · ${t('pf.owner')}: ${esc(f.owner)}${f.validation ? ' · ' + esc(f.validation) : ''}</p>
      <div class="stack"><label>${t('pf.old')}<input value="${esc(Array.isArray(cur) ? cur.join('; ') : cur)}" disabled></label><label>${t('pf.new')}<input data-v value="${esc(Array.isArray(cur) ? cur.join('; ') : cur)}"></label>
      ${self ? '' : `<label>${t('pf.reason')}<input data-r></label><label>${t('pf.evidence')}<input type="file" data-f accept=".pdf,.jpg,.png"></label>`}
      <label style="flex-direction:row;align-items:center"><input type="checkbox" data-c> ${t('pf.consent')}</label></div><p class="err" hidden></p>
      <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${self ? t('save') : t('send')}</button></div>`);
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelector('[data-ok]').onclick = () => {
      const v = m.querySelector('[data-v]').value.trim();
      const err = m.querySelector('.err');
      if (!m.querySelector('[data-c]').checked) { err.hidden = false; err.textContent = '✓ ' + t('pf.consent'); return; }
      if (f.key === 'dien_thoai' && !/^0\d{9}$/.test(v)) { err.hidden = false; err.textContent = f.validation; return; }
      if (self) {
        const all = App.store.get().profileEdits || {}; all[s.ma_cb] = Object.assign(all[s.ma_cb] || {}, { [f.key]: v }); App.store.patch('profileEdits', all);
        App.audit('SUA', 'Tự cập nhật trường "' + f.vi + '"', s.ma_cb); App.ui.closeModal(); App.ui.toast(t('pf.saved'), 'ok'); rerender();
      } else {
        const fe = m.querySelector('[data-f]').files[0];
        App.store.push('changeRequests', { id: App.uid('YC'), ma_cb: s.ma_cb, field: f.key, old: cur, val: v, reason: m.querySelector('[data-r]').value, file: fe ? fe.name : '', at: new Date().toISOString(), status: 'cho_duyet' });
        App.notify('CV_TCCB', 'Đề nghị cập nhật "' + f.vi + '" của CB ' + s.ma_cb, '#/profile/' + s.ma_cb);
        App.audit('DE_NGHI_SUA', 'Đề nghị cập nhật "' + f.vi + '"', s.ma_cb); App.ui.closeModal(); App.ui.toast(t('pf.sent'), 'ok'); rerender();
      }
    };
  }

  function renderDocs(body, s, me) {
    const lvId = App.acl.field('id_front', s), lvDocs = App.acl.field('docs', s);
    const extra = (App.store.get().uploads || {})[s.ma_cb] || [];
    const docs = (s.docs || []).concat(extra);
    const idHTML = lvId === 'none' ? `<div class="empty">${t('noaccess')}</div>` :
      `<div class="idcards">${['id_front', 'id_back'].map((k) => s.media && s.media[k] ? `<figure style="margin:0"><img src="${s.media[k]}" class="${lvId === 'masked' ? 'blur' : ''}" alt="${k}"><figcaption class="small muted">${esc(App.L(App.metaField(k)))}</figcaption></figure>` : '').join('')}</div>
       ${lvId === 'masked' ? `<button class="btn ghost sm" style="margin-top:8px" data-reveal="id_front">${t('reveal')}</button>` : ''}`;
    body.innerHTML = `<div class="grid g-1-2"><div class="card"><div class="card-h"><h3>${t('pf.idcard')}</h3>${App.ui.cls('CN')}</div>${idHTML}
        <div class="fields" style="margin-top:10px">${['cccd', 'cccd_ngay_cap', 'cccd_noi_cap'].map((k) => fieldHTML(s, App.metaField(k))).join('')}</div></div>
      <div class="card"><div class="card-h"><h3>${t('pf.docs')} <span class="muted small">${t('pf.docs.n', { n: docs.length })}</span></h3>
        ${me ? `<label class="btn ghost sm" style="flex-direction:row">${t('pf.upload')}<input type="file" accept="image/*,.pdf" data-up hidden></label>` : ''}</div>
        ${lvDocs === 'none' ? `<div class="empty">${t('noaccess')}</div>` : `<div class="docs">${docs.map((d, i) => `<button class="doc" data-doc="${i}"><img src="${d.file}" alt="" class="${lvDocs === 'masked' ? 'blur' : ''}"><div><b>${esc(d.title_vi)}</b>${esc(d.issuer || '')} · ${esc(d.year || '')}</div></button>`).join('')}</div>`}
      </div></div>`;
    body.querySelectorAll('[data-doc]').forEach((b) => (b.onclick = () => {
      const d = docs[+b.dataset.doc];
      App.audit('XEM', 'Xem văn bằng "' + d.title_vi + '"', s.ma_cb);
      App.ui.modal(`<h3>${esc(d.title_vi)}</h3><p class="muted">${esc(d.title_en || '')} · ${esc(d.issuer || '')} · ${esc(d.year || '')} · ${esc(d.number || '')} ${d.grade ? '· ' + esc(d.grade) : ''}</p><img src="${d.file}" style="width:100%;border-radius:8px" alt="">`, true);
    }));
    const up = body.querySelector('[data-up]');
    if (up) up.onchange = () => {
      const fl = up.files[0]; if (!fl) return;
      if (docs.length >= 10) return App.ui.toast(t('pf.upload.max'), 'bad');
      if (fl.size > 400 * 1024) return App.ui.toast(t('pf.upload.size'), 'bad');
      const rd = new FileReader();
      rd.onload = () => {
        const all = App.store.get().uploads || {}; all[s.ma_cb] = (all[s.ma_cb] || []).concat([{ kind: 'UP', title_vi: fl.name, title_en: fl.name, issuer: 'Tải lên – chờ xác thực', year: new Date().getFullYear(), number: '', file: fl.type.startsWith('image') ? rd.result : 'assets/img/avatar.svg' }]);
        App.store.patch('uploads', all); App.audit('TAI_LEN', 'Tải lên văn bằng/chứng chỉ ' + fl.name, s.ma_cb); App.notify('CV_TCCB', 'CB ' + s.ma_cb + ' tải lên văn bằng mới – cần xác thực', '#/profile/' + s.ma_cb);
        renderDocs(body, s, me); bind(body, s, () => renderDocs(body, s, me));
      };
      rd.readAsDataURL(fl);
    };
  }

  function renderHist(body, s, me) {
    const u = App.user();
    const reqs = changeReqs().filter((r) => r.ma_cb === s.ma_cb).reverse();
    const canApprove = u.role === 'CV_TCCB';
    const views = App.auditLog().filter((a) => a.doi_tuong === s.ma_cb && a.nguoi !== s.ma_cb).slice(-12).reverse();
    body.innerHTML = `<div class="card"><h3>${t('pf.tab.hist')}</h3>${App.ui.table([
      { t: t('date'), f: (r) => App.fmtDT(r.at) }, { t: t('pf.field'), f: (r) => esc(App.L(App.metaField(r.field))) },
      { t: t('pf.old'), f: (r) => esc(App.mask(r.old, 'last4')) }, { t: t('pf.new'), k: 'val' }, { t: t('pf.evidence'), k: 'file' },
      { t: t('status'), f: (r) => App.ui.badge(r.status === 'cho_duyet' ? t('pf.pending') : r.status === 'da_duyet' ? t('pf.approve') : t('pf.reject'), r.status === 'cho_duyet' ? 'warn' : r.status === 'da_duyet' ? 'ok' : 'bad') },
      { t: t('action'), f: (r) => (canApprove && r.status === 'cho_duyet' ? `<button class="btn ok sm" data-ap="${r.id}">${t('pf.approve')}</button> <button class="btn bad sm" data-rj="${r.id}">${t('pf.reject')}</button>` : '') },
    ], reqs)}</div>
    ${me ? `<div class="card"><h3>${t('pf.watch')}</h3>${App.ui.table([{ t: t('date'), f: (a) => App.fmtDT(a.luc) }, { t: 'CB', f: (a) => esc(App.name(App.staff(a.nguoi) || { ho_ten: a.nguoi, ma_cb: a.nguoi })) }, { t: t('action'), k: 'mo_ta' }, { t: t('pf.purpose'), k: 'muc_dich' }], views)}</div>` : ''}`;
    const act = (id, ok) => App.stepUp('Phê duyệt cập nhật hồ sơ').then((pass) => {
      if (!pass) return;
      const all = changeReqs(); const r = all.find((x) => x.id === id); r.status = ok ? 'da_duyet' : 'tu_choi'; App.store.patch('changeRequests', all);
      if (ok) { const pe = App.store.get().profileEdits || {}; pe[r.ma_cb] = Object.assign(pe[r.ma_cb] || {}, { [r.field]: r.val }); App.store.patch('profileEdits', pe); }
      App.audit(ok ? 'DUYET' : 'TU_CHOI', (ok ? 'Duyệt' : 'Từ chối') + ' cập nhật trường ' + r.field, r.ma_cb);
      App.notify(r.ma_cb, (ok ? 'P.TCCB đã duyệt' : 'P.TCCB từ chối') + ' đề nghị cập nhật ' + r.field, '#/profile');
      renderHist(body, App.staff(s.ma_cb), me);
    });
    body.querySelectorAll('[data-ap]').forEach((b) => (b.onclick = () => act(b.dataset.ap, true)));
    body.querySelectorAll('[data-rj]').forEach((b) => (b.onclick = () => act(b.dataset.rj, false)));
  }

  /* Lý lịch khoa học tự sinh từ Core metadata (mẫu BM6 – không khai lại) */
  function exportCV(s) {
    const papers = App.D.papers.filter((p) => p.ma_cb === s.ma_cb);
    const projects = App.D.projects.filter((p) => p.ma_cb === s.ma_cb);
    App.audit('XUAT', 'Xuất lý lịch khoa học (BM6)', s.ma_cb);
    App.ui.modal(`<div class="row between"><h3>LÝ LỊCH KHOA HỌC (BM6) – tự sinh từ Core metadata</h3><button class="btn sm no-print" onclick="print()">${t('print')}</button></div>
      <div class="prof-h" style="grid-template-columns:90px 1fr"><img class="ph" style="width:90px;height:120px" src="${s.media.photo}" alt=""><div>
      <b style="font-size:1.1rem">${esc(App.academicPrefix(s) + ' ' + s.ho_ten)}</b><div>${esc(s.chuc_danh)} · ${esc(App.L(App.dept(s.bo_mon)))}</div>
      <div class="small muted">Ngày sinh: ${App.fmtDate(s.ngay_sinh)} · Giới tính: ${esc(s.gioi_tinh)} · Email: ${esc(s.email)} · ORCID: ${esc(s.orcid || '–')}</div></div></div>
      <h4 style="margin-top:12px">Quá trình đào tạo</h4><ul>${s.docs.filter((d) => ['DH', 'ThS', 'TS'].includes(d.kind)).map((d) => `<li>${d.year} – ${esc(d.title_vi)}, ${esc(d.field)}, ${esc(d.issuer)} (${esc(d.country)})</li>`).join('')}</ul>
      <h4>Đề tài, dự án</h4><ol>${projects.map((p) => `<li>${esc(p.ten)} – ${esc(p.cap)}; ${esc(p.vai_tro)}; ${App.fmtDate(p.bat_dau)}–${App.fmtDate(p.ket_thuc)}; ${esc(p.trang_thai)}</li>`).join('') || '<li>–</li>'}</ol>
      <h4>Công bố khoa học (${papers.length})</h4><ol class="small">${papers.map((p) => `<li>${esc(p.ten)}. <i>${esc(p.tap_chi)}</i>, ${p.nam}. ${esc(p.xep_hang || p.chi_muc)}. DOI: ${esc(p.doi)}</li>`).join('')}</ol>
      <p class="small muted">Dữ liệu điền tự động từ IU Faculty Data Hub; giảng viên không phải khai lại. Bản in có mã QR xác thực (giả lập).</p>`, true);
  }
})();
