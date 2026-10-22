/* Phục vụ cộng đồng: tư vấn tuyển sinh, hoạt động Khoa, hoạt động Công đoàn – hoạt động đã tham gia, đăng ký sự kiện sắp tới,
   TBM/PTK/TK xác nhận tham gia, so sánh với định mức nhiệm vụ khác (NV3), tổng hợp toàn Khoa. */
App.addI18n({
  vi: {
    'sv.sub': 'Ghi nhận giờ tham gia tư vấn tuyển sinh, hoạt động Khoa và Công đoàn; đăng ký sự kiện, xác nhận bởi Trưởng Bộ môn/Lãnh đạo Khoa.',
    'sv.year': 'Năm học', 'sv.cat.tuyen_sinh': 'Tư vấn tuyển sinh', 'sv.cat.khoa': 'Hoạt động Khoa', 'sv.cat.cong_doan': 'Hoạt động Công đoàn',
    'sv.tab.confirm': 'Xác nhận tham gia', 'sv.tab.fac': 'Tổng hợp Khoa',
    'sv.k.conf': 'Giờ đã xác nhận', 'sv.k.pend': 'Giờ chờ xác nhận', 'sv.k.reg': 'Sự kiện đã đăng ký', 'sv.k.norm': 'Định mức nhiệm vụ khác (NV3)',
    'sv.k.std': '≈ {h} giờ chuẩn (÷ 3)', 'sv.k.share': '{p}% định mức NV3',
    'sv.norm.h': 'Giờ phục vụ so với định mức nhiệm vụ khác', 'sv.norm.txt': 'Định mức NV3 = 1.760 − 3 × giờ giảng − 3 × giờ NCKH. Hoạt động phục vụ cộng đồng là một phần của NV3 (cùng sinh hoạt chuyên môn, bồi dưỡng, công tác đoàn thể…).',
    'sv.norm.conv': 'Quy đổi: 1 giờ chuẩn giảng dạy = 3 giờ hành chính.', 'sv.norm.ktv': 'KTV làm việc theo chế độ hành chính 1.760 giờ/năm; giờ phục vụ được ghi nhận như minh chứng hoạt động.',
    'sv.norm.union': 'Giảm định mức NV3 do kiêm nhiệm công đoàn: {h} giờ hành chính',
    'sv.mine': 'Hoạt động của tôi – {c}', 'sv.c.date': 'Ngày', 'sv.c.name': 'Hoạt động', 'sv.c.hours': 'Giờ (hành chính)', 'sv.c.st': 'Xác nhận', 'sv.c.who': 'Cán bộ',
    'sv.c.place': 'Địa điểm', 'sv.c.role': 'Vai trò', 'sv.c.slots': 'Chỉ tiêu', 'sv.c.reg': 'Đã đăng ký',
    'sv.s.ok': 'Đã xác nhận', 'sv.s.wait': 'Chờ xác nhận', 'sv.s.no': 'Từ chối', 'sv.s.regd': 'Đã đăng ký – chờ duyệt',
    'sv.up': 'Sự kiện sắp tới – đăng ký tham gia', 'sv.up.none': 'Chưa có sự kiện sắp tới.', 'sv.reg': 'Đăng ký', 'sv.reg.h': 'Đăng ký tham gia sự kiện',
    'sv.reg.role': 'Vai trò tham gia', 'sv.reg.note': 'Ghi chú (khung giờ có thể tham gia…)', 'sv.reg.ok': 'Đã đăng ký – chờ Trưởng Bộ môn/Lãnh đạo Khoa xác nhận.',
    'sv.reg.cancel': 'Huỷ đăng ký', 'sv.reg.cancelled': 'Đã huỷ đăng ký.', 'sv.reg.full': 'Đã đủ chỉ tiêu',
    'sv.r.tvv': 'Tư vấn viên / báo cáo viên', 'sv.r.tc': 'Hỗ trợ tổ chức', 'sv.r.td': 'Tham dự', 'sv.r.gk': 'Giám khảo / phản biện',
    'sv.none': 'Chưa có hoạt động trong năm học này.',
    'sv.cf.h': 'Hoạt động chờ xác nhận – {s}', 'sv.cf.ok': 'Xác nhận', 'sv.cf.no': 'Từ chối', 'sv.cf.mfa': 'Xác nhận tham gia hoạt động phục vụ cộng đồng',
    'sv.cf.done': 'Đã cập nhật xác nhận và ghi nhật ký.', 'sv.cf.none': 'Không có hoạt động nào chờ xác nhận.', 'sv.cf.kind': 'Loại', 'sv.cf.src': 'Nguồn',
    'sv.cf.past': 'Hoạt động đã diễn ra', 'sv.cf.reg': 'Đăng ký sự kiện', 'sv.cf.all': 'Xác nhận tất cả ({n})',
    'sv.f.h': 'Tổng hợp tham gia phục vụ cộng đồng – Khoa Điện – Điện tử', 'sv.f.dept': 'Tham gia theo bộ môn', 'sv.f.part': 'Người tham gia',
    'sv.f.rate': 'Tỷ lệ cán bộ tham gia', 'sv.f.hrs': 'Giờ đã xác nhận theo loại hoạt động', 'sv.f.top': 'Hoạt động nổi bật', 'sv.f.n': 'Lượt tham gia',
    'sv.f.total': 'Tổng giờ', 'sv.hadm': 'giờ hành chính', 'sv.f.dname': 'Bộ môn', 'sv.f.upreg': 'Đăng ký sự kiện sắp tới', 'sv.f.staff': 'Cán bộ',
    'sv.st.ban_hanh': 'Ban hành', 'sv.st.du_thao': 'Dự thảo', 'sv.st.gia_dinh': 'Giả định', 'sv.st.suy_ra': 'Suy ra', 'sv.nofeat': 'Vai trò này không có chức năng phục vụ cộng đồng.',
  },
  en: {
    'sv.sub': 'Hours spent on admissions counselling, faculty activities and trade-union activities; event sign-up and confirmation by the Head of Department / Faculty leaders.',
    'sv.year': 'Academic year', 'sv.cat.tuyen_sinh': 'Admissions counselling', 'sv.cat.khoa': 'Faculty activities', 'sv.cat.cong_doan': 'Trade union activities',
    'sv.tab.confirm': 'Confirm participation', 'sv.tab.fac': 'Faculty summary',
    'sv.k.conf': 'Confirmed hours', 'sv.k.pend': 'Hours pending', 'sv.k.reg': 'Events registered', 'sv.k.norm': 'Other-duties quota (NV3)',
    'sv.k.std': '≈ {h} standard hours (÷ 3)', 'sv.k.share': '{p}% of the NV3 quota',
    'sv.norm.h': 'Service hours vs the other-duties quota', 'sv.norm.txt': 'NV3 quota = 1,760 − 3 × teaching hours − 3 × research hours. Community service is part of NV3 (together with academic meetings, training, union work…).',
    'sv.norm.conv': 'Conversion: 1 standard teaching hour = 3 office hours.', 'sv.norm.ktv': 'Technicians work 1,760 office hours/year; service hours are recorded as evidence of activity.',
    'sv.norm.union': 'NV3 reduction for trade-union position: {h} office hours',
    'sv.mine': 'My activities – {c}', 'sv.c.date': 'Date', 'sv.c.name': 'Activity', 'sv.c.hours': 'Hours (office)', 'sv.c.st': 'Confirmation', 'sv.c.who': 'Staff',
    'sv.c.place': 'Venue', 'sv.c.role': 'Role', 'sv.c.slots': 'Slots', 'sv.c.reg': 'Registered',
    'sv.s.ok': 'Confirmed', 'sv.s.wait': 'Pending', 'sv.s.no': 'Rejected', 'sv.s.regd': 'Registered – awaiting approval',
    'sv.up': 'Upcoming events – sign up', 'sv.up.none': 'No upcoming events.', 'sv.reg': 'Sign up', 'sv.reg.h': 'Sign up for an event',
    'sv.reg.role': 'Participation role', 'sv.reg.note': 'Note (available time slots…)', 'sv.reg.ok': 'Registered – awaiting confirmation by the Head of Department / Faculty leaders.',
    'sv.reg.cancel': 'Cancel sign-up', 'sv.reg.cancelled': 'Sign-up cancelled.', 'sv.reg.full': 'Full',
    'sv.r.tvv': 'Counsellor / speaker', 'sv.r.tc': 'Organising support', 'sv.r.td': 'Attendee', 'sv.r.gk': 'Judge / reviewer',
    'sv.none': 'No activities in this academic year.',
    'sv.cf.h': 'Activities awaiting confirmation – {s}', 'sv.cf.ok': 'Confirm', 'sv.cf.no': 'Reject', 'sv.cf.mfa': 'Confirm participation in service activities',
    'sv.cf.done': 'Confirmation updated and logged.', 'sv.cf.none': 'Nothing awaiting confirmation.', 'sv.cf.kind': 'Type', 'sv.cf.src': 'Source',
    'sv.cf.past': 'Past activity', 'sv.cf.reg': 'Event sign-up', 'sv.cf.all': 'Confirm all ({n})',
    'sv.f.h': 'Service participation summary – School of Electrical Engineering', 'sv.f.dept': 'Participation by department', 'sv.f.part': 'Participants',
    'sv.f.rate': 'Staff participation rate', 'sv.f.hrs': 'Confirmed hours by activity type', 'sv.f.top': 'Top activities', 'sv.f.n': 'Participations',
    'sv.f.total': 'Total hours', 'sv.hadm': 'office hours', 'sv.f.dname': 'Department', 'sv.f.upreg': 'Upcoming event sign-ups', 'sv.f.staff': 'Staff',
    'sv.st.ban_hanh': 'In force', 'sv.st.du_thao': 'Draft', 'sv.st.gia_dinh': 'Assumption', 'sv.st.suy_ra': 'Derived', 'sv.nofeat': 'This role has no service features.',
  },
});
(function () {
  'use strict';
  const t = App.t, esc = App.esc, D = App.D, C = App.calc;
  const R = D.rules || {}, T = R.teaching || {};
  const CATS = [['tuyen_sinh', 'sv_admission'], ['khoa', 'sv_faculty'], ['cong_doan', 'sv_union']];
  const YEARS = ['2025-2026', '2026-2027'];
  const S = { year: '2025-2026', tab: null };
  const n1 = (x) => App.fmtNum(x, 1);
  const yl = (y) => y.replace('-', '–');
  const CCOL = { tuyen_sinh: '#2E3191', khoa: '#1C9ACC', cong_doan: '#B7791F' };
  /* sự kiện sắp tới (11/2026 – 01/2027) */
  const EVENTS = [
    { id: 'EV-2611-TV', loai: 'tuyen_sinh', ngay: '2026-11-28', gio: 3, slots: 6, vi: 'Tư vấn tuyển sinh trực tuyến 2027 – livestream ngành Kỹ thuật Điện tử – Viễn thông và Kỹ thuật Điều khiển & Tự động hoá', en: 'Online admissions counselling 2027 – livestream on Electronics & Telecommunications and Control & Automation', p_vi: 'Phòng truyền thông, Tòa nhà A2', p_en: 'Media room, Building A2' },
    { id: 'EV-2612-NH', loai: 'tuyen_sinh', ngay: '2026-12-06', gio: 8, slots: 8, vi: 'Ngày hội tư vấn tuyển sinh – hướng nghiệp 2027 (ĐHQG-HCM)', en: 'Admissions & career fair 2027 (VNU-HCM)', p_vi: 'Nhà Văn hoá Sinh viên ĐHQG-HCM', p_en: 'VNU-HCM Student Cultural House' },
    { id: 'EV-2701-OD', loai: 'tuyen_sinh', ngay: '2027-01-10', gio: 6, slots: 10, vi: 'IU Open Day 2027 – tham quan phòng thí nghiệm Khoa Điện – Điện tử', en: 'IU Open Day 2027 – School of EE lab tours', p_vi: 'Khu PTN A2.401–A2.404', p_en: 'Labs A2.401–A2.404' },
    { id: 'EV-2611-SM', loai: 'khoa', ngay: '2026-11-20', gio: 3, slots: 15, vi: 'Seminar doanh nghiệp: Mạng 5G riêng và IoT công nghiệp', en: 'Industry seminar: Private 5G networks and industrial IoT', p_vi: 'Hội trường A2.101', p_en: 'Hall A2.101' },
    { id: 'EV-2612-HN', loai: 'khoa', ngay: '2026-12-12', gio: 6, slots: 10, vi: 'Hội nghị Khoa học Sinh viên cấp Khoa 2026', en: 'Faculty Student Research Conference 2026', p_vi: 'Hội trường A2.101', p_en: 'Hall A2.101' },
    { id: 'EV-2611-HT', loai: 'cong_doan', ngay: '2026-11-22', gio: 5, slots: 20, vi: 'Hội thao Công đoàn Trường ĐHQT 2026', en: 'IU Trade Union Sports Day 2026', p_vi: 'Sân thể thao Khu đô thị ĐHQG-HCM', p_en: 'VNU-HCM sports ground' },
    { id: 'EV-2611-NG', loai: 'cong_doan', ngay: '2026-11-19', gio: 3, slots: 30, vi: 'Mít tinh kỷ niệm Ngày Nhà giáo Việt Nam 20/11', en: 'Vietnamese Teachers\' Day ceremony (20 Nov)', p_vi: 'Hội trường Trường ĐHQT', p_en: 'IU main hall' },
    { id: 'EV-2701-TS', loai: 'cong_doan', ngay: '2027-01-29', gio: 4, slots: 25, vi: 'Chương trình "Tết sum vầy" Xuân Đinh Mùi 2027', en: '"Tết reunion" programme – Lunar New Year 2027', p_vi: 'Sảnh Tòa nhà A1', p_en: 'Building A1 lobby' },
  ];
  const ROLES = ['tvv', 'tc', 'td', 'gk'];
  const yearOf = (iso) => { const d = new Date(iso); const y = d.getFullYear(); return d.getMonth() >= 8 ? y + '-' + (y + 1) : (y - 1) + '-' + y; };
  function stBadge(st) { const k = /gia_dinh/.test(st) ? 'gia_dinh' : /du_thao/.test(st) ? 'du_thao' : /suy_ra/.test(st) ? 'suy_ra' : 'ban_hanh'; return App.ui.badge(t('sv.st.' + k), { ban_hanh: 'ok', du_thao: 'warn', gia_dinh: 'bad', suy_ra: 'info' }[k]); }
  function docsOf(s) { const so = R.sources || {}; return Object.keys(so).filter((k) => String(s || '').indexOf(k) >= 0).map((k) => k + ': ' + so[k].doc).join('\n'); }
  function src(source, st) { return `<div class="small muted" style="margin-top:2px">${t('source')}: <span title="${esc(docsOf(source))}" style="border-bottom:1px dotted #999">${esc(source)}</span> ${st ? stBadge(st) : ''}</div>`; }

  /* --- hoạt động: dữ liệu gốc + ghi đè xác nhận + đăng ký sự kiện (localStorage) --- */
  const conf = () => App.store.get()['sv.conf'] || {};
  const regs = () => App.store.list('sv.reg');
  function activities() {
    const ov = conf();
    const seed = D.service.map((s, i) => { const k = 'SV' + i; const st = ov[k] || s.xac_nhan; return Object.assign({}, s, { key: k, st: st === 'Đã xác nhận' ? 'ok' : st === 'Từ chối' ? 'no' : 'wait', seed: true }); });
    const loc = regs().filter((r) => r.status !== 'huy').map((r) => { const e = EVENTS.find((x) => x.id === r.ev) || {}; return { key: r.id, reg: r, ev: e, ma_cb: r.ma_cb, loai: e.loai, ten: App.L(e), gio: e.gio, ngay: e.ngay, st: r.status === 'ok' ? 'ok' : r.status === 'no' ? 'no' : 'reg' }; });
    return seed.concat(loc);
  }
  const stB = (s) => App.ui.badge(t(s === 'ok' ? 'sv.s.ok' : s === 'no' ? 'sv.s.no' : s === 'reg' ? 'sv.s.regd' : 'sv.s.wait'), s === 'ok' ? 'ok' : s === 'no' ? 'bad' : 'warn');
  const actName = (a) => (a.seed ? a.ten : App.L(a.ev));

  function render(main, params) {
    const u = App.user(), role = u.role;
    const cats = CATS.filter((c) => App.acl.has(c[1])).map((c) => c[0]);
    const tabs = cats.map((c) => ({ k: c, t: t('sv.cat.' + c) }));
    if (['TBM', 'PTK', 'TK'].includes(role)) tabs.push({ k: 'confirm', t: t('sv.tab.confirm') });
    if (['PTK', 'TK'].includes(role)) tabs.push({ k: 'fac', t: t('sv.tab.fac') });
    if (params && params[0] && tabs.some((x) => x.k === params[0])) S.tab = params[0];
    if (!tabs.some((x) => x.k === S.tab)) S.tab = tabs.length ? tabs[0].k : null;
    main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.service')}</div><h1>${t('nav.service')}</h1><p>${t('sv.sub')}</p></div>
      <div class="row no-print"><label>${t('sv.year')}<select data-year>${YEARS.map((y) => `<option value="${y}" ${y === S.year ? 'selected' : ''}>${yl(y)}</option>`).join('')}</select></label></div></div>
      <div data-sum></div><div data-tabs></div><div data-body></div>`;
    main.querySelector('[data-year]').onchange = (e) => { S.year = e.target.value; render(main, []); };
    if (!tabs.length) { main.querySelector('[data-body]').innerHTML = App.ui.empty(t('sv.nofeat')); return; }
    const rerender = () => render(main, []);
    summary(main.querySelector('[data-sum]'), u, cats);
    const body = main.querySelector('[data-body]');
    const show = (k) => { S.tab = k; if (k === 'confirm') confirmView(body, u, rerender); else if (k === 'fac') facView(body); else catView(body, u, k, rerender); };
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, S.tab, show);
    show(S.tab);
  }

  /* --- tổng hợp cá nhân so với định mức NV3 --- */
  function summary(el, u, cats) {
    const mine = activities().filter((a) => a.ma_cb === u.ma_cb && cats.includes(a.loai) && yearOf(a.ngay) === S.year);
    const ok = mine.filter((a) => a.st === 'ok').reduce((s, a) => s + a.gio, 0);
    const wait = mine.filter((a) => a.st === 'wait' || a.st === 'reg').reduce((s, a) => s + a.gio, 0);
    const nreg = mine.filter((a) => a.reg && a.st !== 'no').length;
    const n = C.norm(u);
    const isKTV = n.code === 'KTV';
    const unionRed = (s) => /Công đoàn/i.test(s) ? ((T.reductions || {}).items || []).find((x) => /CT\/PCT CĐ bộ phận/.test(x.position_vi)) : null;
    const ur = (u.kiem_nhiem || []).map(unionRed).find(Boolean);
    const quota = Math.max(1, n.other - (ur ? ur.nv3_reduce_admin_hours : 0));
    const pct = ok / quota * 100;
    const conv = (T.unit_conversion || []).find((x) => x.key === 'teach_hour_to_admin') || {};
    el.innerHTML = `<div class="kpis">${App.ui.kpi(t('sv.k.conf'), n1(ok), t('sv.k.std', { h: n1(ok / 3) }), 'ok')}${App.ui.kpi(t('sv.k.pend'), n1(wait), '', wait ? 'warn' : '')}
        ${App.ui.kpi(t('sv.k.reg'), nreg, '', 'cyan')}${App.ui.kpi(t('sv.k.norm'), App.fmtNum(quota, 0) + ' <small style="font-size:.9rem">' + t('sv.hadm') + '</small>', App.ui.progress(pct, 'cyan') + t('sv.k.share', { p: App.fmtNum(pct, 1) }))}</div>
      <div class="card"><div class="card-h"><h3>${t('sv.norm.h')} – ${esc(yl(S.year))}</h3>${stBadge('suy_ra')}</div>
        <div class="small">${isKTV ? t('sv.norm.ktv') : t('sv.norm.txt')}</div>${src(isKTV ? 'TT20 Điều 3.1' : 'TT20 Điều 3.1; QD1155 Điều 6.3; DT_CDLV2026 Điều 7.a (suy ra)', isKTV ? 'gia_dinh' : 'suy_ra')}
        <div class="small" style="margin-top:4px">${t('sv.norm.conv')}</div>${src(conv.source, conv.status)}
        ${ur ? `<div class="small" style="margin-top:4px">${t('sv.norm.union', { h: ur.nv3_reduce_admin_hours })}</div>${src(ur.source, ur.status)}` : ''}</div>`;
  }

  /* --- từng loại hoạt động --- */
  function catView(el, u, cat, rerender) {
    const mine = activities().filter((a) => a.ma_cb === u.ma_cb && a.loai === cat && yearOf(a.ngay) === S.year).sort((a, b) => (a.ngay < b.ngay ? 1 : -1));
    const myRegs = regs().filter((r) => r.ma_cb === u.ma_cb && r.status !== 'huy');
    const evs = EVENTS.filter((e) => e.loai === cat);
    const count = (id) => regs().filter((r) => r.ev === id && r.status !== 'huy' && r.status !== 'no').length;
    el.innerHTML = `<div class="grid g-1-2"><div class="card"><div class="card-h"><h3>${t('sv.mine', { c: t('sv.cat.' + cat) })}</h3><span class="chip">${n1(mine.filter((a) => a.st === 'ok').reduce((s, a) => s + a.gio, 0))} h</span></div>
        ${App.ui.table([{ t: t('sv.c.date'), f: (a) => App.fmtDate(a.ngay) }, { t: t('sv.c.name'), f: (a) => esc(actName(a)) + (a.reg ? `<div class="small muted">${esc(t('sv.r.' + a.reg.vai_tro))}</div>` : '') },
          { t: t('sv.c.hours'), k: 'gio', cls: 'num' }, { t: t('sv.c.st'), f: (a) => stB(a.st) }], mine, { empty: t('sv.none') })}</div>
      <div class="card"><h3>${t('sv.up')}</h3>${evs.length ? App.ui.table([
          { t: t('sv.c.date'), f: (e) => App.fmtDate(e.ngay) }, { t: t('sv.c.name'), f: (e) => `<b>${esc(App.L(e))}</b><div class="small muted">${esc(App.L(e, 'p'))}</div>` },
          { t: t('sv.c.hours'), k: 'gio', cls: 'num' }, { t: t('sv.c.reg'), f: (e) => count(e.id) + '/' + e.slots, cls: 'num' },
          { t: t('action'), f: (e) => { const r = myRegs.find((x) => x.ev === e.id); return r ? stB(r.status === 'ok' ? 'ok' : r.status === 'no' ? 'no' : 'reg') + (r.status === 'cho' ? ` <button class="linkbtn small" data-cancel="${r.id}">${t('sv.reg.cancel')}</button>` : '')
            : count(e.id) >= e.slots ? App.ui.badge(t('sv.reg.full'), '') : `<button class="btn sm" data-reg="${e.id}">${t('sv.reg')}</button>`; } }], evs) : App.ui.empty(t('sv.up.none'))}</div></div>`;
    el.querySelectorAll('[data-reg]').forEach((b) => (b.onclick = () => register(u, EVENTS.find((e) => e.id === b.dataset.reg), rerender)));
    el.querySelectorAll('[data-cancel]').forEach((b) => (b.onclick = () => {
      const all = regs(); const r = all.find((x) => x.id === b.dataset.cancel); if (!r) return; r.status = 'huy'; App.store.patch('sv.reg', all);
      App.audit('HUY', 'Huỷ đăng ký sự kiện ' + r.ev, u.ma_cb); App.ui.toast(t('sv.reg.cancelled')); rerender();
    }));
  }
  function register(u, e, rerender) {
    const m = App.ui.modal(`<h3>${t('sv.reg.h')}</h3><p><b>${esc(App.L(e))}</b><br><span class="muted small">${App.fmtDate(e.ngay)} · ${esc(App.L(e, 'p'))} · ${e.gio} h</span></p>
      <div class="stack"><label>${t('sv.reg.role')}<select data-r>${ROLES.map((r) => `<option value="${r}">${t('sv.r.' + r)}</option>`).join('')}</select></label>
      <label>${t('sv.reg.note')}<input data-n></label></div>
      <div class="row end" style="margin-top:12px"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('sv.reg')}</button></div>`);
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelector('[data-ok]').onclick = () => {
      const r = { id: App.uid('DK'), ev: e.id, ma_cb: u.ma_cb, vai_tro: m.querySelector('[data-r]').value, ghi_chu: m.querySelector('[data-n]').value.trim(), at: new Date().toISOString(), status: 'cho' };
      App.store.push('sv.reg', r);
      const tbm = App.staffList().find((s) => s.vi_tri === 'TBM' && s.bo_mon === u.bo_mon && s.ma_cb !== u.ma_cb);
      App.notify(tbm ? tbm.ma_cb : 'PTK', 'CB ' + u.ma_cb + ' đăng ký "' + e.vi + '" – chờ xác nhận', '#/service/confirm');
      App.audit('DANG_KY', 'Đăng ký sự kiện ' + e.id + ' (' + e.vi + ')', u.ma_cb);
      App.ui.closeModal(); App.ui.toast(t('sv.reg.ok'), 'ok'); rerender();
    };
  }

  /* --- TBM/PTK/TK xác nhận --- */
  function confirmView(el, u, rerender) {
    const scope = App.acl.scopeOf(u.role);
    const items = activities().filter((a) => (a.st === 'wait' || a.st === 'reg') && a.ma_cb !== u.ma_cb && App.acl.inScope(App.staff(a.ma_cb)))
      .sort((a, b) => (a.ngay < b.ngay ? -1 : 1));
    const label = scope === 'department' ? App.L(App.dept(u.bo_mon)) : App.L(D.org.faculty);
    el.innerHTML = `<div class="card"><div class="card-h"><h3>${t('sv.cf.h', { s: esc(label) })}</h3>${items.length ? `<button class="btn ok sm" data-all>${t('sv.cf.all', { n: items.length })}</button>` : ''}</div>
      ${App.ui.table([{ t: t('sv.c.who'), f: (a) => `<b>${esc(App.name(App.staff(a.ma_cb), { title: true }))}</b><div class="small muted">${esc(App.staff(a.ma_cb).bo_mon || '')}</div>` },
        { t: t('sv.cf.kind'), f: (a) => App.ui.badge(t('sv.cat.' + a.loai), 'info') }, { t: t('sv.c.name'), f: (a) => esc(actName(a)) + (a.reg ? `<div class="small muted">${esc(t('sv.r.' + a.reg.vai_tro))}${a.reg.ghi_chu ? ' · ' + esc(a.reg.ghi_chu) : ''}</div>` : '') },
        { t: t('sv.c.date'), f: (a) => App.fmtDate(a.ngay) }, { t: t('sv.c.hours'), k: 'gio', cls: 'num' }, { t: t('sv.cf.src'), f: (a) => esc(a.reg ? t('sv.cf.reg') : t('sv.cf.past')) },
        { t: t('action'), f: (a) => `<button class="btn ok sm" data-ok="${a.key}">${t('sv.cf.ok')}</button> <button class="btn bad sm" data-no="${a.key}">${t('sv.cf.no')}</button>` }], items, { empty: t('sv.cf.none') })}</div>`;
    const act = async (keys, ok) => {
      if (!App.auth.mfaFresh(300) && !(await App.stepUp(t('sv.cf.mfa')))) return;
      const ov = conf(); const all = regs();
      keys.forEach((k) => {
        const a = items.find((x) => x.key === k); if (!a) return;
        if (a.seed) ov[k] = ok ? 'Đã xác nhận' : 'Từ chối';
        else { const r = all.find((x) => x.id === k); if (r) { r.status = ok ? 'ok' : 'no'; r.by = u.ma_cb; r.luc = new Date().toISOString(); } }
        App.audit(ok ? 'DUYET' : 'TU_CHOI', (ok ? 'Xác nhận' : 'Từ chối') + ' tham gia "' + actName(a) + '" (' + a.gio + ' giờ)', a.ma_cb, 'Xác nhận hoạt động phục vụ cộng đồng');
        App.notify(a.ma_cb, (ok ? 'Đã xác nhận' : 'Từ chối') + ' tham gia: ' + actName(a), '#/service/' + a.loai);
      });
      App.store.patch('sv.conf', ov); App.store.patch('sv.reg', all);
      App.ui.toast(t('sv.cf.done'), 'ok'); S.tab = 'confirm'; rerender();
    };
    el.querySelectorAll('[data-ok]').forEach((b) => (b.onclick = () => act([b.dataset.ok], true)));
    el.querySelectorAll('[data-no]').forEach((b) => (b.onclick = () => act([b.dataset.no], false)));
    const ab = el.querySelector('[data-all]'); if (ab) ab.onclick = () => act(items.map((a) => a.key), true);
  }

  function grouped(labels, series, cols, aria) {
    const W = 560, H = 180, pad = 30, max = Math.max(1, ...series.flat());
    const gw = (W - pad - 10) / labels.length, bw = Math.min(40, (gw - 20) / series.length);
    let s = `<svg viewBox="0 0 ${W} ${H + 30}" class="chart" role="img" aria-label="${esc(aria)}">`;
    for (let g = 0; g <= 4; g++) { const y = H - (H - 14) * g / 4; s += `<line x1="${pad}" x2="${W}" y1="${y}" y2="${y}" class="grid"/><text x="${pad - 4}" y="${y + 4}" class="ax" text-anchor="end">${App.fmtNum(max * g / 4, 0)}</text>`; }
    labels.forEach((l, i) => {
      const x0 = pad + 6 + i * gw + (gw - 12 - bw * series.length) / 2;
      series.forEach((se, k) => { const h = (H - 14) * se[i] / max, x = x0 + k * bw; s += `<rect x="${x}" y="${H - h}" width="${bw - 4}" height="${h}" rx="2" fill="${cols[k]}"><title>${esc(l)}: ${se[i]}</title></rect><text x="${x + (bw - 4) / 2}" y="${H - h - 3}" class="val" text-anchor="middle">${se[i]}</text>`; });
      s += `<text x="${pad + 6 + i * gw + (gw - 12) / 2}" y="${H + 16}" class="ax" text-anchor="middle">${esc(l)}</text>`;
    });
    return s + '</svg>';
  }

  /* --- PTK/TK: tổng hợp toàn Khoa --- */
  function facView(el) {
    const staff = App.staffList().filter((s) => s.loai === 'khoa' && App.acl.inScope(s));
    const ids = staff.map((s) => s.ma_cb);
    const acts = activities().filter((a) => ids.includes(a.ma_cb) && yearOf(a.ngay) === S.year);
    const okA = acts.filter((a) => a.st === 'ok');
    const depts = D.org.departments;
    const cats = CATS.map((c) => c[0]);
    const series = cats.map((c) => depts.map((d) => okA.filter((a) => a.loai === c && App.staff(a.ma_cb).bo_mon === d.code).reduce((s, a) => s + a.gio, 0)));
    const drows = depts.map((d) => { const st = staff.filter((s) => s.bo_mon === d.code); const part = new Set(acts.filter((a) => st.some((s) => s.ma_cb === a.ma_cb) && a.st !== 'no').map((a) => a.ma_cb)).size;
      return { d, n: st.length, part, hrs: okA.filter((a) => App.staff(a.ma_cb).bo_mon === d.code).reduce((s, a) => s + a.gio, 0) }; });
    const top = {};
    acts.filter((a) => a.st !== 'no').forEach((a) => { const k = actName(a); top[k] = top[k] || { name: k, loai: a.loai, n: 0, h: 0 }; top[k].n++; top[k].h += a.st === 'ok' ? a.gio : 0; });
    const tops = Object.values(top).sort((a, b) => b.n - a.n || b.h - a.h).slice(0, 8);
    App.audit('XEM', 'Xem tổng hợp phục vụ cộng đồng toàn Khoa năm học ' + S.year, 'EE', 'Quản lý Khoa');
    el.innerHTML = `<div class="card"><h3>${t('sv.f.h')} – ${esc(yl(S.year))}</h3>
        <div class="row small" style="margin-bottom:4px">${cats.map((c) => `<span><i style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${CCOL[c]}"></i> ${t('sv.cat.' + c)}</span>`).join('')}</div>
        <h4 style="margin:6px 0">${t('sv.f.hrs')}</h4><div style="max-width:640px">${grouped(depts.map((d) => App.L(d)), series, cats.map((c) => CCOL[c]), t('sv.f.hrs'))}</div></div>
      <div class="grid g2"><div class="card"><h3>${t('sv.f.dept')}</h3>${App.ui.table([{ t: t('sv.f.dname'), f: (r) => esc(App.L(r.d)) },
          { t: t('sv.f.staff'), k: 'n', cls: 'num' }, { t: t('sv.f.part'), k: 'part', cls: 'num' }, { t: t('sv.f.rate'), f: (r) => App.fmtNum(r.n ? r.part / r.n * 100 : 0, 0) + '%', cls: 'num' },
          { t: t('sv.f.total'), f: (r) => n1(r.hrs), cls: 'num' }], drows)}
          ${App.ui.chart.hbars(drows.map((r, i) => ({ l: App.L(r.d), v: r.n ? r.part / r.n * 100 : 0, txt: App.fmtNum(r.n ? r.part / r.n * 100 : 0, 0) + '%', c: App.ui.chart.PAL[i] })), { max: 100 })}</div>
        <div class="card"><h3>${t('sv.f.top')}</h3>${App.ui.table([{ t: t('sv.c.name'), f: (r) => esc(r.name) }, { t: t('sv.cf.kind'), f: (r) => App.ui.badge(t('sv.cat.' + r.loai), 'info') },
          { t: t('sv.f.n'), k: 'n', cls: 'num' }, { t: t('sv.f.total'), f: (r) => n1(r.h), cls: 'num' }], tops)}</div></div>`;
  }

  App.page('service', { render });
})();
