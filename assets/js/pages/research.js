/* Nghiên cứu khoa học: công bố (quy đổi P1–P8, hệ số tác giả, hỗ trợ kinh phí QĐ 1155), đề tài (quy đổi theo kinh phí), so với định mức;
   khai báo công bố, đề nghị hỗ trợ (QT-ĐHQT-KH-02), đồng bộ SCIMAN giả lập; bảng quản lý BM/Khoa/P.QLKH. */
App.addI18n({
  vi: {
    'rs.sub': 'Giờ nghiên cứu khoa học, công bố và đề tài của bạn trong năm học.',
    'rs.detail': 'Chi tiết cách tính', 'rs.d.norm': 'Định mức', 'rs.d.pap': 'Quy đổi công bố', 'rs.d.proj': 'Quy đổi đề tài', 'rs.d.hist': 'Qua các năm', 'rs.c.year': 'Năm',
    'rs.year': 'Năm học', 'rs.tab.me': 'Cá nhân', 'rs.tab.dept': 'Bộ môn', 'rs.tab.fac': 'Toàn Khoa', 'rs.tab.school': 'Toàn Trường',
    'rs.k.total': 'Giờ NCKH', 'rs.k.norm': 'Định mức NCKH', 'rs.k.pct': 'Hoàn thành', 'rs.k.papers': 'Số công bố', 'rs.k.sup': 'Hỗ trợ dự kiến',
    'rs.k.pend': '+{h} giờ chờ xác minh', 'rs.k.q12': '{n} bài Q1/Q2',
    'rs.ids': 'Mã định danh', 'rs.ids.none': 'Chưa có – cập nhật trong Hồ sơ số', 'rs.ids.edit': 'Cập nhật ở Hồ sơ số',
    'rs.new': 'Khai báo công bố mới', 'rs.sync': 'Đồng bộ SCIMAN (giả lập)', 'rs.synced': 'Đồng bộ SCIMAN lúc {d}',
    'rs.sync.ok': 'Đã đồng bộ SCIMAN: {n} công bố khớp DOI, {v} khai báo được xác minh.',
    'rs.papers': 'Công bố khoa học', 'rs.c.title': 'Công trình', 'rs.c.type': 'Loại', 'rs.c.q': 'Xếp hạng', 'rs.c.grp': 'Nhóm quy đổi', 'rs.c.role': 'Vai trò',
    'rs.c.share': 'Hệ số tác giả', 'rs.c.hours': 'Giờ NCKH', 'rs.c.sup': 'Hỗ trợ dự kiến', 'rs.c.req': 'Đề nghị hỗ trợ', 'rs.c.st': 'Trạng thái',
    'rs.t.journal': 'Tạp chí', 'rs.t.conf': 'Hội nghị', 'rs.req.btn': 'Đề nghị hỗ trợ', 'rs.pending': 'Chờ xác minh',
    'rs.share.main': '1/3 + (2/3)/N', 'rs.share.co': '(2/3)/N', 'rs.N': 'N = {n} tác giả',
    'rs.share.note': 'Hệ số tác giả: tác giả chính duy nhất = 1/3 + (2/3)/N; đồng tác giả = (2/3)/N (N = tổng số tác giả).',
    'rs.N.assume': 'Giả định: N = người khai báo + đồng tác giả IU + 1 tác giả ngoài Trường (sẽ lấy chính xác từ Crossref/Scopus khi tích hợp).',
    'rs.sup.note': 'Mức hỗ trợ = hệ số k × 10.000.000 đ × hệ số tác giả; chỉ xét công trình WoS/Scopus có affiliation IU, không dùng để tính định mức NCKH, nộp trong 12 tháng kể từ khi có DOI, xét theo quý và khi GV đã hoàn thành định mức.',
    'rs.projects': 'Đề tài, dự án', 'rs.p.name': 'Đề tài', 'rs.p.lvl': 'Cấp', 'rs.p.role': 'Vai trò', 'rs.p.period': 'Thời gian', 'rs.p.budget': 'Kinh phí (tr.đ)',
    'rs.p.full': 'Giờ quy đổi', 'rs.p.share': 'Tỷ lệ cá nhân', 'rs.p.hours': 'Giờ cá nhân', 'rs.p.count': 'Tính vào năm',
    'rs.p.note': 'Quy đổi theo bậc kinh phí (Bảng 3): <50 tr: 100 · 50–<250: 200 · 250–<500: 300 · 500–<750: 400 · 750–1.000: 500 giờ; trên 1 tỷ = 500 + bậc của phần vượt. Chỉ tính đề tài đã nghiệm thu đạt, kết thúc trong năm học.',
    'rs.p.assume': 'Giả định: giờ cá nhân = 40% (chủ nhiệm) / 20% (thành viên) giờ quy đổi – thay bằng tỷ lệ ngày công thực tế trong thuyết minh.',
    'rs.norm': 'Định mức NCKH năm học', 'rs.n.title': 'Chức danh', 'rs.n.min': 'Kết quả tối thiểu', 'rs.n.minv': 'Tương đương 1 đề tài cấp cơ sở nghiệm thu đạt, hoặc 1 bài báo có ISSN, hoặc 1 báo cáo hội thảo chuyên ngành.',
    'rs.n.conv': '1 giờ NCKH = 3 giờ hành chính', 'rs.n.short': 'Còn thiếu {h} giờ NCKH', 'rs.n.done': 'Đã hoàn thành định mức NCKH',
    'rs.n.sub': 'Bù bằng giờ giảng: 1 tiết giảng bằng tiếng nước ngoài = 2,0 giờ NCKH ⇒ cần khoảng {p} tiết.', 'rs.n.surplus': 'Giờ giảng vượt định mức năm học: {h} giờ chuẩn ⇒ có thể bù tối đa {r} giờ NCKH.',
    'rs.n.carry': 'Giờ NCKH dư chỉ được chuyển sang năm học liền kề 1 lần và không dùng để xét hỗ trợ kinh phí.',
    'rs.n.offset': 'Vượt NCKH được bù phần giảng dạy thiếu (tối đa 50% khối lượng giảng dạy).',
    'rs.st.ban_hanh': 'Ban hành', 'rs.st.du_thao': 'Dự thảo', 'rs.st.gia_dinh': 'Giả định', 'rs.st.suy_ra': 'Suy ra',
    'rs.f.h': 'Khai báo công bố mới', 'rs.f.doi': 'DOI', 'rs.f.title': 'Tên công trình', 'rs.f.journal': 'Tạp chí / Hội nghị', 'rs.f.type': 'Loại công trình',
    'rs.f.q': 'Xếp hạng SCImago', 'rs.f.qnone': 'Chưa xếp hạng / trong nước', 'rs.f.role': 'Vai trò của tôi', 'rs.f.co': 'Đồng tác giả thuộc Khoa (giữ Ctrl để chọn nhiều)',
    'rs.f.year': 'Năm học tính giờ', 'rs.f.err': 'Vui lòng nhập DOI hợp lệ (10.xxxx/…), tên công trình và tạp chí.', 'rs.f.ok': 'Đã lưu khai báo – chờ xác minh qua SCIMAN/P.QLKH.',
    'rs.f.preview': 'Dự kiến: nhóm {g}, {h} giờ quy đổi × hệ số {s} = {x} giờ NCKH',
    'rs.r.h': 'Đề nghị hỗ trợ kinh phí công bố', 'rs.r.cond': 'Tôi cam kết công trình có ghi affiliation Trường ĐH Quốc tế, không dùng để tính định mức NCKH và không sử dụng NSNN do Trường chủ trì.',
    'rs.r.need': 'Vui lòng xác nhận cam kết.', 'rs.r.ok': 'Đã gửi đề nghị hỗ trợ (QT-ĐHQT-KH-02).', 'rs.r.normwarn': 'Lưu ý: bạn chưa hoàn thành định mức NCKH năm học – hồ sơ có thể bị gắn cờ khi xét.',
    'rs.r.amount': 'Mức hỗ trợ dự kiến',
    'rs.m.h': 'NCKH – {s}', 'rs.m.n': 'Cán bộ', 'rs.m.met': 'Đạt định mức', 'rs.m.q12': 'Bài Q1/Q2', 'rs.m.late': 'Đề tài trễ hạn',
    'rs.m.chart': 'Giờ NCKH so với định mức', 'rs.m.quart': 'Công bố theo xếp hạng và năm học', 'rs.m.other': 'Khác',
    'rs.m.conf': 'Hội nghị', 'rs.m.proj': 'Đề tài theo cấp và trạng thái', 'rs.m.lateh': 'Đề tài trễ hạn / quá hạn kết thúc', 'rs.m.pi': 'Chủ nhiệm / thành viên',
    'rs.m.end': 'Kết thúc', 'rs.m.days': 'Quá hạn (ngày)', 'rs.m.csv': 'Xuất bảng NCKH đơn vị (dữ liệu cá nhân)', 'rs.m.exported': 'Đã xuất CSV và ghi nhật ký.',
    'rs.m.npap': 'Số bài', 'rs.m.nproj': 'Đề tài', 'rs.m.dept': 'Bộ môn', 'rs.m.none': 'Không có đề tài trễ hạn.', 'rs.m.click': 'Bấm vào dòng để xem chi tiết.',
    'rs.m.detail': 'Công bố và đề tài – {n}', 'rs.noperson': 'Vai trò này không có khối lượng NCKH cá nhân.', 'rs.none': 'Chưa có công bố trong năm học này.',
    'rs.yes': 'Có', 'rs.no': 'Không', 'rs.hrs': 'giờ NCKH', 'rs.hist': 'Giờ NCKH qua các năm học (vạch đỏ = định mức)', 'rs.hist.p': 'Công bố của tôi theo xếp hạng',
  },
  en: {
    'rs.sub': 'Your research hours, publications and projects this academic year.',
    'rs.detail': 'How it is calculated', 'rs.d.norm': 'Quota', 'rs.d.pap': 'Publication hours', 'rs.d.proj': 'Project hours', 'rs.d.hist': 'By year', 'rs.c.year': 'Year',
    'rs.year': 'Academic year', 'rs.tab.me': 'Personal', 'rs.tab.dept': 'Department', 'rs.tab.fac': 'Whole faculty', 'rs.tab.school': 'Whole university',
    'rs.k.total': 'Research hours', 'rs.k.norm': 'Research quota', 'rs.k.pct': 'Completed', 'rs.k.papers': 'Publications', 'rs.k.sup': 'Estimated support',
    'rs.k.pend': '+{h} hours pending verification', 'rs.k.q12': '{n} Q1/Q2 papers',
    'rs.ids': 'Researcher identifiers', 'rs.ids.none': 'Not set – update it in the e-Profile', 'rs.ids.edit': 'Update in e-Profile',
    'rs.new': 'Declare a new publication', 'rs.sync': 'Sync with SCIMAN (simulated)', 'rs.synced': 'Synced with SCIMAN at {d}',
    'rs.sync.ok': 'SCIMAN sync done: {n} publications matched by DOI, {v} declarations verified.',
    'rs.papers': 'Publications', 'rs.c.title': 'Output', 'rs.c.type': 'Type', 'rs.c.q': 'Rank', 'rs.c.grp': 'Group', 'rs.c.role': 'Role',
    'rs.c.share': 'Author share', 'rs.c.hours': 'Research hrs', 'rs.c.sup': 'Est. support', 'rs.c.req': 'Support request', 'rs.c.st': 'Status',
    'rs.t.journal': 'Journal', 'rs.t.conf': 'Conference', 'rs.req.btn': 'Request support', 'rs.pending': 'Pending verification',
    'rs.share.main': '1/3 + (2/3)/N', 'rs.share.co': '(2/3)/N', 'rs.N': 'N = {n} authors',
    'rs.share.note': 'Author share: sole main author = 1/3 + (2/3)/N; co-author = (2/3)/N (N = total number of authors).',
    'rs.N.assume': 'Assumption: N = declarant + IU co-authors + 1 external author (to be taken from Crossref/Scopus once integrated).',
    'rs.sup.note': 'Support = coefficient k × 10,000,000 VND × author share; only WoS/Scopus outputs with IU affiliation, not used for the research quota, submitted within 12 months of the DOI, reviewed quarterly and only once the quota is met.',
    'rs.projects': 'Research projects', 'rs.p.name': 'Project', 'rs.p.lvl': 'Level', 'rs.p.role': 'Role', 'rs.p.period': 'Period', 'rs.p.budget': 'Budget (M VND)',
    'rs.p.full': 'Converted hrs', 'rs.p.share': 'Personal share', 'rs.p.hours': 'Personal hrs', 'rs.p.count': 'Counted this year',
    'rs.p.note': 'Budget tiers (Table 3): <50M: 100 · 50–<250M: 200 · 250–<500M: 300 · 500–<750M: 400 · 750–1,000M: 500 hours; above 1bn = 500 + tier of the excess. Only accepted projects ending in the academic year are counted.',
    'rs.p.assume': 'Assumption: personal hours = 40% (PI) / 20% (member) of converted hours – to be replaced by the actual person-day ratio in the proposal.',
    'rs.norm': 'Annual research quota', 'rs.n.title': 'Title', 'rs.n.min': 'Minimum output', 'rs.n.minv': 'Equivalent to 1 accepted institutional project, or 1 ISSN paper, or 1 specialised conference paper.',
    'rs.n.conv': '1 research hour = 3 office hours', 'rs.n.short': '{h} research hours short', 'rs.n.done': 'Research quota met',
    'rs.n.sub': 'Teaching can compensate: 1 period taught in a foreign language = 2.0 research hours ⇒ about {p} periods needed.', 'rs.n.surplus': 'Teaching hours above quota this year: {h} ⇒ can compensate up to {r} research hours.',
    'rs.n.carry': 'Surplus research hours carry over once to the next academic year only and cannot be used for funding support.',
    'rs.n.offset': 'Surplus research may offset a teaching shortfall (up to 50% of the teaching load).',
    'rs.st.ban_hanh': 'In force', 'rs.st.du_thao': 'Draft', 'rs.st.gia_dinh': 'Assumption', 'rs.st.suy_ra': 'Derived',
    'rs.f.h': 'Declare a new publication', 'rs.f.doi': 'DOI', 'rs.f.title': 'Title', 'rs.f.journal': 'Journal / Conference', 'rs.f.type': 'Output type',
    'rs.f.q': 'SCImago quartile', 'rs.f.qnone': 'Unranked / domestic', 'rs.f.role': 'My role', 'rs.f.co': 'Faculty co-authors (Ctrl-click for several)',
    'rs.f.year': 'Academic year counted', 'rs.f.err': 'Please enter a valid DOI (10.xxxx/…), a title and the journal.', 'rs.f.ok': 'Declaration saved – awaiting SCIMAN/Research Office verification.',
    'rs.f.preview': 'Expected: group {g}, {h} converted hours × share {s} = {x} research hours',
    'rs.r.h': 'Request publication support', 'rs.r.cond': 'I confirm the output carries the International University affiliation, is not used for the research quota and is not funded by a state-budget project led by IU.',
    'rs.r.need': 'Please confirm the declaration.', 'rs.r.ok': 'Support request submitted (QT-ĐHQT-KH-02).', 'rs.r.normwarn': 'Note: your research quota for the year is not met yet – the request may be flagged.',
    'rs.r.amount': 'Estimated support',
    'rs.m.h': 'Research – {s}', 'rs.m.n': 'Staff', 'rs.m.met': 'Quota met', 'rs.m.q12': 'Q1/Q2 papers', 'rs.m.late': 'Late projects',
    'rs.m.chart': 'Research hours vs quota', 'rs.m.quart': 'Publications by rank and academic year', 'rs.m.other': 'Other',
    'rs.m.conf': 'Conference', 'rs.m.proj': 'Projects by level and status', 'rs.m.lateh': 'Late / overdue projects', 'rs.m.pi': 'PI / member',
    'rs.m.end': 'End date', 'rs.m.days': 'Overdue (days)', 'rs.m.csv': 'Export unit research table (personal data)', 'rs.m.exported': 'CSV exported and logged.',
    'rs.m.npap': 'Papers', 'rs.m.nproj': 'Projects', 'rs.m.dept': 'Department', 'rs.m.none': 'No late projects.', 'rs.m.click': 'Click a row for details.',
    'rs.m.detail': 'Publications and projects – {n}', 'rs.noperson': 'This role has no personal research workload.', 'rs.none': 'No publications in this academic year.',
    'rs.yes': 'Yes', 'rs.no': 'No', 'rs.hrs': 'research hours', 'rs.hist': 'Research hours by academic year (red mark = quota)', 'rs.hist.p': 'My publications by rank',
  },
});
(function () {
  'use strict';
  const t = App.t, esc = App.esc, D = App.D, C = App.calc;
  const R = D.rules || {}, RS = R.research || {}, T = R.teaching || {};
  const YEARS = ['2024-2025', '2025-2026', '2026-2027'];
  const S = { year: '2025-2026', tab: 'me', dept: 'all' };
  const K = ((RS.support_rules || {}).k_vnd) || 10000000;
  const n1 = (x) => App.fmtNum(x, 1);
  const yl = (y) => y.replace('-', '–');
  const vnd = (x) => App.fmtNum(Math.round(x), 0) + (App.lang === 'vi' ? ' đ' : ' VND');
  const EN = { 'Đã xuất bản': 'Published', 'Đã chấp nhận': 'Accepted', 'Không áp dụng': 'N/A', 'Chưa đề nghị': 'Not requested', 'Đang xử lý': 'In progress', 'Đã chi': 'Paid',
    'Chờ xác minh': 'Awaiting verification', 'Đã xác minh (SCIMAN)': 'Verified (SCIMAN)', 'Đang thực hiện': 'Ongoing', 'Trễ hạn': 'Late', 'Chờ nghiệm thu': 'Awaiting acceptance',
    'Đã nghiệm thu': 'Accepted', 'Tác giả chính': 'Main author', 'Đồng tác giả': 'Co-author', 'Tác giả liên hệ': 'Corresponding author', 'Chủ nhiệm': 'Principal investigator',
    'Thành viên chính': 'Key member', 'Thành viên': 'Member', 'Cấp ĐHQG-HCM loại C': 'VNU-HCM type C', 'Cấp ĐHQG-HCM loại B': 'VNU-HCM type B', 'Sở KH&CN TP.HCM': 'HCMC DOST',
    'Hợp tác doanh nghiệp': 'Industry contract', 'Cấp cơ sở (Trường)': 'Institutional (IU)' };
  const VL = (v) => (App.lang === 'en' ? EN[v] || v : v);
  const LECT = ['TK', 'PTK', 'TBM', 'GV'];
  const RSTAFF = LECT.concat(['NCV']);

  function stKey(st) { st = String(st || ''); return /gia_dinh/.test(st) ? 'gia_dinh' : /du_thao/.test(st) ? 'du_thao' : /suy_ra/.test(st) ? 'suy_ra' : 'ban_hanh'; }
  function stBadge(st) { const k = stKey(st); return App.ui.badge(t('rs.st.' + k), { ban_hanh: 'ok', du_thao: 'warn', gia_dinh: 'bad', suy_ra: 'info' }[k]); }
  function docsOf(s) { const so = R.sources || {}; return Object.keys(so).filter((k) => String(s || '').indexOf(k) >= 0).map((k) => k + ': ' + so[k].doc).join('\n'); }
  function src(source, st) { return `<div class="small muted" style="margin-top:2px">${t('source')}: <span title="${esc(docsOf(source))}" style="border-bottom:1px dotted #999">${esc(source)}</span> ${st ? stBadge(st) : ''}</div>`; }
  const bal = (k) => (T.balance_rules || []).find((x) => x.key === k) || {};
  function csv(name, rows) {
    const s = '﻿' + rows.map((r) => r.map((c) => '"' + String(c == null ? '' : c).replace(/"/g, '""') + '"').join(',')).join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([s], { type: 'text/csv;charset=utf-8' })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* --- dữ liệu cá nhân: công bố gốc + khai báo cục bộ + trạng thái hỗ trợ --- */
  const supOv = () => App.store.get()['rs.support'] || {};
  function localPapers() { return App.store.list('rs.papers'); }
  function papersOf(ma_cb, year) {
    const ov = supOv();
    const seed = D.papers.filter((p) => p.ma_cb === ma_cb && p.nam_hoc === year);
    const loc = localPapers().filter((p) => p.ma_cb === ma_cb && p.nam_hoc === year);
    return seed.concat(loc).map((p) => {
      const h = C.paperHours(p);
      const main = p.vai_tro !== 'Đồng tác giả';
      const sk = h.conv.support_k;
      const est = main && sk && p.loai_ok !== false ? sk * K * h.share : 0;
      const req = ov[p.id] ? ov[p.id].status : p.de_nghi_ho_tro;
      const pending = p.local && !p.verified;
      return Object.assign({}, p, h, { est, req, pending, reqId: ov[p.id] ? ov[p.id].reqId : '' });
    });
  }
  function personTotals(ma_cb, year) {
    const y = C.yearResearch(ma_cb, year);
    const ps = papersOf(ma_cb, year);
    const extra = ps.filter((p) => p.local && p.verified).reduce((a, b) => a + b.hours, 0);
    const pend = ps.filter((p) => p.pending).reduce((a, b) => a + b.hours, 0);
    const total = Math.round((y.total + extra) * 10) / 10;
    return { y, ps, total, pend, norm: y.norm, pct: y.norm ? total / y.norm * 100 : 0 };
  }
  function createReq(code, data, step, note) {
    let rec = null;
    if (App.proc && typeof App.proc.create === 'function') { try { rec = App.proc.create(code, data); } catch (e) { console.warn(e); rec = null; } }
    if (!rec || typeof rec !== 'object' || !rec.id) {
      const now = new Date().toISOString().slice(0, 16);
      rec = { id: App.uid('HS'), ma_qt: code, ma_cb: App.user().ma_cb, tao_luc: now, trang_thai: 'dang_xu_ly', buoc_hien_tai: step, local: true,
        lich_su: [{ buoc: 0, luc: now, ket_qua: note || 'Đồng ý' }], du_lieu: data };
      App.saveRequest(rec);
    }
    return rec;
  }

  /* --- khung trang --- */
  function render(main, params) {
    const u = App.user(), role = u.role, scope = App.acl.scopeOf(role);
    if (params && ['me', 'unit'].includes(params[0])) S.tab = params[0];
    const canMe = u.loai === 'khoa' && RSTAFF.includes(u.vi_tri) && ['GV', 'TBM', 'PTK', 'TK', 'NCV'].includes(role);
    const canUnit = ['TBM', 'PTK', 'TK', 'BGH', 'CV_QLKH'].includes(role);
    main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.research')}</div><h1>${t('nav.research')}</h1><p>${t('rs.sub')}</p></div>
      <div class="row no-print"><label>${t('rs.year')}<select data-year>${YEARS.map((y) => `<option value="${y}" ${y === S.year ? 'selected' : ''}>${yl(y)}</option>`).join('')}</select></label></div></div>
      <div data-tabs></div><div data-body></div>`;
    main.querySelector('[data-year]').onchange = (e) => { S.year = e.target.value; render(main, []); };
    const body = main.querySelector('[data-body]');
    const rerender = () => render(main, []);
    if (!canUnit) { if (canMe) personal(body, u, rerender); else body.innerHTML = App.ui.empty(t('rs.noperson')); return; }
    const tabs = [];
    if (canMe) tabs.push({ k: 'me', t: t('rs.tab.me') });
    tabs.push({ k: 'unit', t: t(scope === 'department' ? 'rs.tab.dept' : scope === 'school' ? 'rs.tab.school' : 'rs.tab.fac') });
    if (!tabs.some((x) => x.k === S.tab)) S.tab = tabs[0].k;
    const show = (k) => { S.tab = k; if (k === 'unit') unitView(body, u, true); else personal(body, u, rerender); };
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, S.tab, show);
    show(S.tab);
  }

  /* --- cá nhân (gọn: số liệu chính + danh sách; chi tiết quy đổi trong cửa sổ "Chi tiết cách tính") --- */
  const projBadge = (p) => App.ui.badge(VL(p.trang_thai), p.trang_thai === 'Đã nghiệm thu' ? 'ok' : p.trang_thai === 'Trễ hạn' ? 'bad' : p.trang_thai === 'Chờ nghiệm thu' ? 'warn' : 'info');
  function myProjects(u, P) { return D.projects.filter((p) => p.ma_cb === u.ma_cb).map((p) => Object.assign({}, p, C.projectHours(p), { inYear: P.y.projects.some((x) => x.id === p.id) })); }
  function personal(el, u, rerender) {
    const P = personTotals(u.ma_cb, S.year);
    const pk = P.pct >= 100 ? 'ok' : P.pct >= 60 ? 'warn' : 'bad';
    const q12 = P.ps.filter((p) => ['Q1', 'Q2'].includes(p.xep_hang)).length;
    const supSum = P.ps.reduce((a, b) => a + b.est, 0);
    const sync = (App.store.get()['rs.sync'] || {})[u.ma_cb];
    const projects = myProjects(u, P);
    el.innerHTML = `<div class="kpis">${App.ui.kpi(t('rs.k.total'), n1(P.total), P.pend ? t('rs.k.pend', { h: n1(P.pend) }) : t('rs.hrs'))}
        ${App.ui.kpi(t('rs.k.norm'), n1(P.norm), t('rs.hrs'), 'cyan')}
        ${App.ui.kpi(t('rs.k.pct'), App.fmtNum(P.pct, 0) + '%', App.ui.progress(P.pct, pk), pk)}
        ${App.ui.kpi(t('rs.k.papers'), P.ps.length, t('rs.k.q12', { n: q12 }))}
        ${App.ui.kpi(t('rs.k.sup'), App.fmtNum(supSum / 1e6, 1) + (App.lang === 'vi' ? ' tr.đ' : ' M VND'), '', 'warn')}</div>
      <div class="card"><div class="row between">
        <div class="row"><span class="chip">ORCID: <b>${esc(u.orcid || t('rs.ids.none'))}</b></span><span class="chip">Scopus: <b>${esc(u.scopus_id || t('rs.ids.none'))}</b></span>
          ${App.acl.has('eprofile') ? `<a class="linkbtn small" href="#/profile">${t('rs.ids.edit')}</a>` : ''}</div>
        <div class="row"><button class="btn sm" data-new>${t('rs.new')}</button><button class="btn ghost sm" data-sync>${t('rs.sync')}</button>
          <button class="linkbtn small" data-detail>${t('rs.detail')}</button></div></div>
        ${sync ? `<div class="muted small" style="margin-top:6px">${t('rs.synced', { d: App.fmtDT(sync) })}</div>` : ''}</div>
      <div class="card"><div class="card-h"><h3>${t('rs.papers')} – ${esc(yl(S.year))}</h3></div>
        ${P.ps.length ? App.ui.table([
          { t: t('rs.c.title'), f: (p) => `<div style="min-width:240px"><b>${esc(p.ten)}</b><div class="small muted">${esc(p.tap_chi)}</div>${p.pending ? App.ui.badge(t('rs.pending'), 'warn') : ''}</div>` },
          { t: t('rs.c.year'), f: (p) => esc(p.nam || ''), cls: 'c' },
          { t: t('rs.c.q'), f: (p) => esc(p.xep_hang || (p.loai === 'conf' ? t('rs.t.conf') : '–')), cls: 'c' },
          { t: t('rs.c.hours'), f: (p) => `<b>${n1(p.hours)}</b>`, cls: 'num' },
          { t: t('rs.c.req'), f: (p) => (p.req === 'Chưa đề nghị' && p.est && !p.pending ? `<button class="btn cyan sm" data-req="${esc(p.id)}">${t('rs.req.btn')}</button>`
            : p.req && p.req !== 'Không áp dụng' && p.req !== 'Chưa đề nghị' ? App.ui.badge(VL(p.req), p.req === 'Đã chi' ? 'ok' : p.req === 'Đang xử lý' ? 'warn' : '') : '<span class="muted">–</span>') }], P.ps)
          : App.ui.empty(t('rs.none'))}</div>
      <div class="card"><div class="card-h"><h3>${t('rs.projects')}</h3></div>
        ${App.ui.table([
          { t: t('rs.p.name'), f: (p) => `<b>${esc(p.ten)}</b>` }, { t: t('rs.p.lvl'), f: (p) => esc(VL(p.cap)) },
          { t: t('rs.p.role'), f: (p) => esc(VL(p.vai_tro)) }, { t: t('status'), f: projBadge }], projects)}</div>`;
    el.querySelector('[data-new]').onclick = () => declare(u, rerender);
    el.querySelector('[data-sync]').onclick = () => syncSciman(u, rerender);
    el.querySelector('[data-detail]').onclick = () => detailModal(u, P, projects);
    el.querySelectorAll('[data-req]').forEach((b) => (b.onclick = () => requestSupport(u, P, P.ps.find((p) => p.id === b.dataset.req), rerender)));
  }

  /* --- cửa sổ chi tiết: định mức, quy đổi công bố/đề tài (căn cứ, giả định), lịch sử --- */
  function detailModal(u, P, projects) {
    const n = C.norm(u);
    const m = App.ui.modal(`<h3>${t('rs.detail')} – ${esc(yl(S.year))}</h3><div data-mt></div><div data-mb></div>`, true);
    const mb = m.querySelector('[data-mb]');
    const show = (k) => {
      if (k === 'norm') mb.innerHTML = normCard(u, n, P);
      else if (k === 'pap') mb.innerHTML = (P.ps.length ? App.ui.table([
          { t: t('rs.c.title'), f: (p) => `<div style="min-width:200px"><b>${esc(p.ten)}</b><div class="small muted">${esc(p.tap_chi)} · DOI ${esc(p.doi)}</div></div>` },
          { t: t('rs.c.type'), f: (p) => esc(t('rs.t.' + p.loai)) + `<div class="small muted">${esc(p.chi_muc || '')}</div>` },
          { t: t('rs.c.grp'), f: (p) => `<b>${esc(p.conv.group || '–')}</b><div class="small muted">${App.fmtNum(p.conv.hours || 0, 0)}</div>`, cls: 'c' },
          { t: t('rs.c.role'), f: (p) => esc(VL(p.vai_tro)) },
          { t: t('rs.c.share'), f: (p) => `${App.fmtNum(p.share, 3)}<div class="small muted">${p.vai_tro === 'Đồng tác giả' ? t('rs.share.co') : t('rs.share.main')}; ${t('rs.N', { n: p.N })}</div>`, cls: 'num' },
          { t: t('rs.c.hours'), f: (p) => `<b>${n1(p.hours)}</b>`, cls: 'num' },
          { t: t('rs.c.sup'), f: (p) => (p.est ? vnd(p.est) : '–'), cls: 'num' }], P.ps) : App.ui.empty(t('rs.none'))) +
        `<div class="small" style="margin-top:8px">${t('rs.share.note')}</div>${src((RS.author_share || {}).source, (RS.author_share || {}).status)}
        <div class="small muted">${t('rs.N.assume')} ${stBadge('gia_dinh')}</div>
        <div class="small" style="margin-top:6px">${t('rs.sup.note')}</div>${src((RS.support_rules || {}).source + '; Điều 11 Bảng 4 (k = 10.000.000 đ)', 'ban_hanh')}`;
      else if (k === 'proj') mb.innerHTML = App.ui.table([
          { t: t('rs.p.name'), f: (p) => `<b>${esc(p.ten)}</b><div class="small muted">${esc(p.id)}</div>` },
          { t: t('rs.p.period'), f: (p) => App.fmtDate(p.bat_dau) + ' – ' + App.fmtDate(p.ket_thuc) },
          { t: t('rs.p.budget'), f: (p) => App.fmtNum(p.kinh_phi_trieu, 0), cls: 'num' }, { t: t('rs.p.full'), f: (p) => App.fmtNum(p.full, 0), cls: 'num' },
          { t: t('rs.p.share'), f: (p) => Math.round(p.share * 100) + '%', cls: 'num' }, { t: t('rs.p.hours'), f: (p) => `<b>${App.fmtNum(p.hours, 0)}</b>`, cls: 'num' },
          { t: t('rs.p.count'), f: (p) => App.ui.badge(p.inYear && p.counted ? t('rs.yes') : t('rs.no'), p.inYear && p.counted ? 'ok' : '') }], projects) +
        `<div class="small" style="margin-top:8px">${t('rs.p.note')}</div>${src((RS.projects || {}).source, (RS.projects || {}).status)}
        <div class="small muted">${t('rs.p.assume')} ${stBadge('gia_dinh')}</div>`;
      else mb.innerHTML = `<h4 style="margin:0 0 8px">${t('rs.hist')}</h4>${App.ui.chart.hbars(YEARS.map((y) => { const q = personTotals(u.ma_cb, y); return { l: yl(y), v: q.total, ref: q.norm, txt: n1(q.total) + ' / ' + n1(q.norm), c: q.pct >= 100 ? '#2F855A' : '#1C9ACC' }; }))}
        <h4 style="margin:16px 0 8px">${t('rs.hist.p')}</h4>${App.ui.table([{ t: t('rs.year'), f: (y) => yl(y) }].concat(['Q1', 'Q2', 'Q3', 'Q4'].map((q) => ({ t: q, f: (y) => D.papers.filter((p) => p.ma_cb === u.ma_cb && p.nam_hoc === y && p.xep_hang === q).length, cls: 'num' })))
          .concat([{ t: t('rs.m.conf'), f: (y) => D.papers.filter((p) => p.ma_cb === u.ma_cb && p.nam_hoc === y && p.loai === 'conf').length, cls: 'num' }]), YEARS)}`;
    };
    App.ui.tabs(m.querySelector('[data-mt]'), [{ k: 'norm', t: t('rs.d.norm') }, { k: 'pap', t: t('rs.d.pap') }, { k: 'proj', t: t('rs.d.proj') }, { k: 'hist', t: t('rs.d.hist') }], 'norm', show);
    show('norm');
  }

  function normCard(u, n, P) {
    const isNCV = n.code === 'NCV';
    const it = isNCV ? (T.norm_by_title || []).find((x) => x.code === 'NCV') || {} : (RS.norm_by_title || []).find((x) => x.code === n.code) || {};
    const cv = (T.unit_conversion || []).find((x) => x.key === 'research_hour_to_admin') || {};
    const short = Math.max(0, P.norm - P.total);
    const tt = bal('teach_to_research'), off = bal('research_excess_offsets_teach'), co = bal('research_carry_over');
    let sub = '';
    if (short > 0 && !isNCV && LECT.includes(u.vi_tri)) {
      const yt = C.yearTeaching(u.ma_cb, S.year);
      const ratio = tt.ratio_research_per_period || 2;
      const surplus = Math.max(0, yt.total - yt.norm.teach);
      sub = `<div class="small">${t('rs.n.sub', { p: App.fmtNum(Math.ceil(short / ratio), 0) })}</div>
        <div class="small muted">${t('rs.n.surplus', { h: n1(surplus), r: n1(Math.min(short, surplus * ratio)) })}</div>${src(tt.source, tt.status)}`;
    }
    const pct = P.pct;
    return `<div class="fields" style="grid-template-columns:1fr">
      <div class="fld"><div class="k">${t('rs.n.title')}</div><div class="v">${esc(App.L(it, 'title') || it.title_vi || n.code)} <span class="chip">${esc(n.code)}</span></div></div>
      <div class="fld"><div class="k">${t('rs.k.norm')}</div><div class="v" style="font-size:1.15rem">${n1(P.norm)} ${t('rs.hrs')}</div>
        ${App.ui.progress(pct, pct >= 100 ? 'ok' : pct >= 60 ? 'warn' : 'bad')}<div class="small muted">${n1(P.total)} / ${n1(P.norm)} = ${App.fmtNum(pct, 0)}%</div>
        ${src(it.source || 'QD1155 Điều 6.3 Bảng 1', isNCV ? 'gia_dinh' : it.status)}</div>
      <div class="fld"><div class="k">${short > 0 ? t('rs.n.short', { h: n1(short) }) : t('rs.n.done')}</div>${sub || (short > 0 ? '' : `<div class="small">${t('rs.n.carry')}</div>${src(co.source, co.status)}<div class="small">${t('rs.n.offset')}</div>${src(off.source, off.status)}`)}</div>
      <div class="fld"><div class="k">${t('rs.n.min')}</div><div class="small">${t('rs.n.minv')}</div>${src(RS.minimum_output_source, 'ban_hanh')}</div>
      <div class="fld"><div class="k">${t('rs.n.conv')}</div>${src(cv.source, cv.status)}</div></div>`;
  }

  /* --- khai báo công bố mới --- */
  function declare(u, rerender) {
    const co = App.staffList().filter((s) => s.loai === 'khoa' && s.ma_cb !== u.ma_cb && RSTAFF.concat(['TG']).includes(s.vi_tri));
    const m = App.ui.modal(`<h3>${t('rs.f.h')}</h3><div class="stack">
      <label>${t('rs.f.doi')}<input data-f="doi" placeholder="10.1109/ACCESS.2026.1234567"></label>
      <label>${t('rs.f.title')}<input data-f="ten"></label><label>${t('rs.f.journal')}<input data-f="tap_chi" placeholder="IEEE Access"></label>
      <div class="grid g2"><label>${t('rs.f.type')}<select data-f="loai"><option value="journal">${t('rs.t.journal')}</option><option value="conf">${t('rs.t.conf')} (Scopus)</option></select></label>
        <label>${t('rs.f.q')}<select data-f="xep_hang"><option value="Q1">Q1</option><option value="Q2">Q2</option><option value="Q3">Q3</option><option value="Q4">Q4</option><option value="">${t('rs.f.qnone')}</option></select></label>
        <label>${t('rs.f.role')}<select data-f="vai_tro"><option value="Tác giả chính">${esc(VL('Tác giả chính'))}</option><option value="Tác giả liên hệ">${esc(VL('Tác giả liên hệ'))}</option><option value="Đồng tác giả">${esc(VL('Đồng tác giả'))}</option></select></label>
        <label>${t('rs.f.year')}<select data-f="nam_hoc">${YEARS.map((y) => `<option value="${y}" ${y === S.year ? 'selected' : ''}>${yl(y)}</option>`).join('')}</select></label></div>
      <label>${t('rs.f.co')}<select data-f="co" multiple size="5">${co.map((s) => `<option value="${s.ma_cb}">${esc(App.name(s, { title: true }))} – ${esc(s.bo_mon)}</option>`).join('')}</select></label>
      <div class="notice small" data-prev style="margin:0"></div></div><p class="err" hidden></p>
      <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('save')}</button></div>`, true);
    const val = () => {
      const g = (k) => m.querySelector(`[data-f="${k}"]`);
      return { doi: g('doi').value.trim(), ten: g('ten').value.trim(), tap_chi: g('tap_chi').value.trim(), loai: g('loai').value, xep_hang: g('loai').value === 'conf' ? '' : g('xep_hang').value,
        vai_tro: g('vai_tro').value, nam_hoc: g('nam_hoc').value, dong_tac_gia: [...g('co').selectedOptions].map((o) => o.value) };
    };
    const prev = () => { const p = val(); const h = C.paperHours(p); m.querySelector('[data-prev]').textContent = t('rs.f.preview', { g: h.conv.group || '–', h: h.conv.hours || 0, s: App.fmtNum(h.share, 3), x: n1(h.hours) }); };
    m.querySelectorAll('[data-f]').forEach((x) => (x.onchange = prev)); prev();
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelector('[data-ok]').onclick = () => {
      const p = val();
      if (!/^10\.\d{4,9}\/\S+$/.test(p.doi) || !p.ten || !p.tap_chi) { const e = m.querySelector('.err'); e.hidden = false; e.textContent = t('rs.f.err'); return; }
      const rec = Object.assign(p, { id: App.uid('BB'), ma_cb: u.ma_cb, nam: new Date().getFullYear(), chi_muc: p.loai === 'conf' ? 'Scopus (Hội nghị)' : p.xep_hang ? 'ISI/Scopus' : '',
        trang_thai: 'Chờ xác minh', de_nghi_ho_tro: p.xep_hang || p.loai === 'conf' ? 'Chưa đề nghị' : 'Không áp dụng', local: true, verified: false, at: new Date().toISOString() });
      App.store.push('rs.papers', rec);
      App.audit('SUA', 'Khai báo công bố mới DOI ' + p.doi, u.ma_cb, 'Kê khai khối lượng NCKH');
      App.notify('CV_QLKH', 'CB ' + u.ma_cb + ' khai báo công bố mới (DOI ' + p.doi + ') – chờ xác minh', '#/research');
      App.ui.closeModal(); App.ui.toast(t('rs.f.ok'), 'ok'); S.year = p.nam_hoc; rerender();
    };
  }

  function syncSciman(u, rerender) {
    const all = App.store.list('rs.papers');
    let v = 0;
    all.forEach((p) => { if (p.ma_cb === u.ma_cb && !p.verified && /^10\.\d{4,9}\//.test(p.doi)) { p.verified = true; p.trang_thai = 'Đã xác minh (SCIMAN)'; v++; } });
    App.store.patch('rs.papers', all);
    const s = App.store.get()['rs.sync'] || {}; s[u.ma_cb] = new Date().toISOString(); App.store.patch('rs.sync', s);
    const n = D.papers.filter((p) => p.ma_cb === u.ma_cb).length;
    App.audit('DONG_BO', 'Đồng bộ công bố từ SCIMAN (giả lập): ' + n + ' bản ghi, xác minh ' + v + ' khai báo', u.ma_cb, 'Kê khai khối lượng NCKH');
    App.ui.toast(t('rs.sync.ok', { n, v }), 'ok');
    rerender();
  }

  function requestSupport(u, P, p, rerender) {
    if (!p) return;
    const m = App.ui.modal(`<h3>${t('rs.r.h')}</h3><p><b>${esc(p.ten)}</b><br><span class="muted small">${esc(p.tap_chi)} · DOI ${esc(p.doi)}</span></p>
      <div class="fields" style="grid-template-columns:1fr 1fr"><div class="fld"><div class="k">${t('rs.c.grp')}</div><div class="v">${esc(p.conv.group)} – k = ${esc(p.conv.support_k)}</div></div>
      <div class="fld"><div class="k">${t('rs.c.share')}</div><div class="v">${App.fmtNum(p.share, 3)}</div></div>
      <div class="fld"><div class="k">${t('rs.r.amount')}</div><div class="v" style="color:var(--navy);font-size:1.15rem">${vnd(p.est)}</div><div class="small muted">${esc(p.conv.support_k)} × ${vnd(K)} × ${App.fmtNum(p.share, 3)}</div></div></div>
      ${P.pct < 100 ? `<div class="notice warn small">${t('rs.r.normwarn')}</div>` : ''}
      <label style="flex-direction:row;align-items:flex-start;gap:8px;margin-top:8px"><input type="checkbox" data-c> <span>${t('rs.r.cond')}</span></label>${src('QD1155 Điều 9.1, 10, 11, 14', 'ban_hanh')}<p class="err" hidden></p>
      <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('send')}</button></div>`);
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelector('[data-ok]').onclick = () => {
      if (!m.querySelector('[data-c]').checked) { const e = m.querySelector('.err'); e.hidden = false; e.textContent = t('rs.r.need'); return; }
      const data = { staff_id: u.ma_cb, full_name: u.ho_ten, unit: u.bo_mon, output_type: p.loai === 'conf' ? 'HNQT' : 'bai_bao', doi: p.doi, quartile: p.xep_hang || '',
        author_role: p.vai_tro, iu_authors: 1 + (p.dong_tac_gia || []).length, funding_source: 'khac', support_amount: Math.round(p.est), paper_id: p.id };
      const rec = createReq('QT-ĐHQT-KH-02', data, 2, 'Hệ thống kiểm tra tự động: đạt');
      const ov = supOv(); ov[p.id] = { status: 'Đang xử lý', reqId: rec.id }; App.store.patch('rs.support', ov);
      App.audit('DE_NGHI', 'Đề nghị hỗ trợ công bố DOI ' + p.doi + ' (' + rec.id + ')', u.ma_cb, 'Hỗ trợ kinh phí công bố');
      App.notify('CV_QLKH', 'Đề nghị hỗ trợ công bố ' + rec.id + ' của CB ' + u.ma_cb, '#/research');
      App.ui.closeModal(); App.ui.toast(t('rs.r.ok'), 'ok'); rerender();
    };
  }

  /* biểu đồ cột nhóm (SVG) – nhóm theo nhãn, mỗi chuỗi một màu */
  function grouped(labels, series, aria) {
    const W = 560, H = 200, pad = 30, max = Math.max(1, ...series.flat());
    const gw = (W - pad - 10) / labels.length, bw = Math.min(26, (gw - 12) / series.length);
    let s = `<svg viewBox="0 0 ${W} ${H + 30}" class="chart" role="img" aria-label="${esc(aria)}">`;
    for (let g = 0; g <= 4; g++) { const y = H - (H - 14) * g / 4; s += `<line x1="${pad}" x2="${W}" y1="${y}" y2="${y}" class="grid"/><text x="${pad - 4}" y="${y + 4}" class="ax" text-anchor="end">${App.fmtNum(max * g / 4, 0)}</text>`; }
    labels.forEach((l, i) => {
      const x0 = pad + 6 + i * gw + (gw - 12 - bw * series.length) / 2;
      series.forEach((se, k) => { const h = (H - 14) * se[i] / max, x = x0 + k * bw; s += `<rect x="${x}" y="${H - h}" width="${bw - 3}" height="${h}" rx="2" fill="${App.ui.chart.PAL[k]}"><title>${esc(l)}: ${se[i]}</title></rect><text x="${x + (bw - 3) / 2}" y="${H - h - 3}" class="val" text-anchor="middle">${se[i]}</text>`; });
      s += `<text x="${pad + 6 + i * gw + (gw - 12) / 2}" y="${H + 16}" class="ax" text-anchor="middle">${esc(l)}</text>`;
    });
    return s + '</svg>';
  }

  /* --- quản lý --- */
  function unitView(el, u, logView) {
    const scope = App.acl.scopeOf(u.role);
    let staff = App.staffList().filter((s) => s.loai === 'khoa' && RSTAFF.includes(s.vi_tri) && App.acl.inScope(s));
    const depts = [...new Set(staff.map((s) => s.bo_mon))];
    if (S.dept !== 'all' && depts.includes(S.dept) && scope !== 'department') staff = staff.filter((s) => s.bo_mon === S.dept);
    const ids = staff.map((s) => s.ma_cb);
    if (logView) App.audit('XEM', 'Xem bảng NCKH ' + (scope === 'department' ? 'Bộ môn ' + u.bo_mon : scope === 'school' ? 'toàn Trường' : 'Khoa') + ' năm học ' + S.year, scope === 'department' ? u.bo_mon : 'EE', 'Quản lý KH&CN');
    const rows = staff.map((s) => { const P = personTotals(s.ma_cb, S.year); return { s, P, q12: P.ps.filter((p) => ['Q1', 'Q2'].includes(p.xep_hang)).length, npr: D.projects.filter((p) => p.ma_cb === s.ma_cb).length }; })
      .sort((a, b) => b.P.pct - a.P.pct);
    const met = rows.filter((r) => r.P.pct >= 100).length;
    const projs = D.projects.filter((p) => ids.includes(p.ma_cb));
    const today = App.today;
    const late = projs.filter((p) => p.trang_thai === 'Trễ hạn' || (new Date(p.ket_thuc) < today && p.trang_thai === 'Đang thực hiện'));
    const label = t(scope === 'department' ? 'rs.tab.dept' : scope === 'school' ? 'rs.tab.school' : 'rs.tab.fac') + (scope === 'department' ? ' ' + App.L(App.dept(u.bo_mon)) : '');
    // công bố theo xếp hạng × năm
    const cats = ['Q1', 'Q2', 'Q3', 'Q4', 'conf', 'other'];
    const catOf = (p) => (p.loai === 'conf' ? 'conf' : p.xep_hang || 'other');
    const catL = (c) => (c === 'conf' ? t('rs.m.conf') : c === 'other' ? t('rs.m.other') : c);
    const yrs = ['2024-2025', '2025-2026'];
    const stats = ['Đang thực hiện', 'Trễ hạn', 'Chờ nghiệm thu', 'Đã nghiệm thu'];
    const levels = [...new Set(projs.map((p) => p.cap))];
    const SC = { 'Đang thực hiện': '#1C9ACC', 'Trễ hạn': '#C53030', 'Chờ nghiệm thu': '#B7791F', 'Đã nghiệm thu': '#2F855A' };
    el.innerHTML = `<div class="kpis">${App.ui.kpi(t('rs.m.n'), rows.length, esc(label))}${App.ui.kpi(t('rs.m.met'), met + '/' + rows.length, rows.length ? Math.round(met / rows.length * 100) + '%' : '', 'ok')}
        ${App.ui.kpi(t('rs.m.q12'), rows.reduce((a, r) => a + r.q12, 0), esc(yl(S.year)), 'cyan')}${App.ui.kpi(t('rs.m.late'), late.length, '', late.length ? 'bad' : 'ok')}</div>
      <div class="card"><div class="card-h"><h3>${t('rs.m.h', { s: esc(label) })} – ${esc(yl(S.year))}</h3><div class="row">
        ${scope !== 'department' && depts.length > 1 ? `<select data-dept aria-label="${t('rs.m.dept')}"><option value="all">${t('all')}</option>${depts.map((d) => `<option value="${d}" ${S.dept === d ? 'selected' : ''}>${esc(App.L(App.dept(d)))}</option>`).join('')}</select>` : ''}
        <button class="btn ghost sm" data-csv>${t('export')}</button></div></div>
        <h4 style="margin:0 0 8px">${t('rs.m.chart')}</h4>${App.ui.chart.hbars(rows.map((r) => ({ l: App.name(r.s), v: r.P.total, ref: r.P.norm, c: r.P.pct >= 100 ? '#2F855A' : r.P.pct >= 60 ? '#B7791F' : '#C53030', txt: App.fmtNum(r.P.pct, 0) + '%' })))}</div>
      <div class="card">${App.ui.table([
          { t: t('rs.m.n'), f: (r) => `<b>${esc(App.name(r.s, { title: true }))}</b>` }, { t: t('rs.m.dept'), f: (r) => esc(r.s.bo_mon) },
          { t: t('rs.m.npap'), f: (r) => r.P.ps.length, cls: 'num' }, { t: 'Q1/Q2', f: (r) => r.q12, cls: 'num' }, { t: t('rs.m.nproj'), f: (r) => r.npr, cls: 'num' },
          { t: t('rs.c.hours'), f: (r) => `<b>${n1(r.P.total)}</b>`, cls: 'num' }, { t: t('rs.k.norm'), f: (r) => n1(r.P.norm), cls: 'num' },
          { t: '%', f: (r) => App.ui.badge(App.fmtNum(r.P.pct, 0) + '%', r.P.pct >= 100 ? 'ok' : r.P.pct >= 60 ? 'warn' : 'bad'), cls: 'num' }], rows, { rowAttr: (r) => `class="click" data-id="${r.s.ma_cb}"` })}
        <div class="small muted" style="margin-top:6px">${t('rs.m.click')}</div></div>
      <div class="grid g2"><div class="card"><h3>${t('rs.m.quart')}</h3>
          <div class="row small" style="margin-bottom:4px">${yrs.map((y, i) => `<span><i style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${App.ui.chart.PAL[i]}"></i> ${yl(y)}</span>`).join('')}</div>
          ${grouped(cats.map(catL), yrs.map((y) => cats.map((c) => D.papers.filter((p) => ids.includes(p.ma_cb) && p.nam_hoc === y && catOf(p) === c).length)), t('rs.m.quart'))}</div>
        <div class="card"><h3>${t('rs.m.proj')}</h3>${App.ui.chart.donut(stats.map((s) => ({ l: VL(s), v: projs.filter((p) => p.trang_thai === s).length, c: SC[s] })), { sub: t('rs.m.nproj') })}
          ${App.ui.table([{ t: t('rs.p.lvl'), f: (l) => esc(VL(l)) }].concat(stats.map((s) => ({ t: VL(s), f: (l) => projs.filter((p) => p.cap === l && p.trang_thai === s).length || '·', cls: 'num' }))), levels)}</div></div>
      <div class="card"><h3>${t('rs.m.lateh')}</h3>${App.ui.table([
          { t: t('rs.p.name'), f: (p) => `<b>${esc(p.ten)}</b><div class="small muted">${esc(p.id)}</div>` }, { t: t('rs.m.pi'), f: (p) => esc(App.name(App.staff(p.ma_cb), { title: true })) + `<div class="small muted">${esc(VL(p.vai_tro))}</div>` },
          { t: t('rs.p.lvl'), f: (p) => esc(VL(p.cap)) }, { t: t('rs.m.end'), f: (p) => App.fmtDate(p.ket_thuc) },
          { t: t('rs.m.days'), f: (p) => { const d = Math.floor((today - new Date(p.ket_thuc)) / 864e5); return d > 0 ? d : '–'; }, cls: 'num' },
          { t: t('status'), f: (p) => App.ui.badge(VL(p.trang_thai), 'bad') }], late, { empty: t('rs.m.none') })}</div>`;
    const ds = el.querySelector('[data-dept]');
    if (ds) ds.onchange = () => { S.dept = ds.value; unitView(el, u, false); };
    el.querySelectorAll('tr[data-id]').forEach((tr) => (tr.onclick = () => {
      const r = rows.find((x) => x.s.ma_cb === tr.dataset.id);
      App.audit('XEM', 'Xem danh mục công bố/đề tài năm học ' + S.year, r.s.ma_cb, 'Quản lý KH&CN');
      const prs = D.projects.filter((p) => p.ma_cb === r.s.ma_cb);
      App.ui.modal(`<h3>${t('rs.m.detail', { n: esc(App.name(r.s, { title: true })) })}</h3>${App.ui.table([
        { t: t('rs.c.title'), f: (p) => `<b>${esc(p.ten)}</b><div class="small muted">${esc(p.tap_chi)} · DOI ${esc(p.doi)}</div>` }, { t: t('rs.c.q'), f: (p) => esc(p.xep_hang || '–') },
        { t: t('rs.c.grp'), f: (p) => esc(p.conv.group || '–') }, { t: t('rs.c.role'), f: (p) => esc(VL(p.vai_tro)) }, { t: t('rs.c.hours'), f: (p) => n1(p.hours), cls: 'num' }], r.P.ps, { empty: t('rs.none') })}
        <h4 style="margin:12px 0 6px">${t('rs.projects')}</h4>${App.ui.table([{ t: t('rs.p.name'), k: 'ten' }, { t: t('rs.p.lvl'), f: (p) => esc(VL(p.cap)) }, { t: t('status'), f: (p) => esc(VL(p.trang_thai)) }, { t: t('rs.m.end'), f: (p) => App.fmtDate(p.ket_thuc) }], prs)}`, true);
    }));
    el.querySelector('[data-csv]').onclick = async () => {
      if (!(await App.stepUp(t('rs.m.csv')))) return;
      csv('nckh_' + S.year + '.csv', [['ma_cb', 'ho_ten', 'bo_mon', 'so_bai', 'Q1_Q2', 'de_tai', 'gio_NCKH', 'dinh_muc', 'ty_le_%']]
        .concat(rows.map((r) => [App.anon ? App.pseudo(r.s.ma_cb, 'CB') : r.s.ma_cb, App.name(r.s), r.s.bo_mon, r.P.ps.length, r.q12, r.npr, r.P.total, r.P.norm, Math.round(r.P.pct)])));
      App.audit('XUAT', 'Xuất CSV bảng NCKH năm học ' + S.year + ' (' + rows.length + ' CB' + (App.anon ? ', ẩn danh' : '') + ')', scope === 'department' ? u.bo_mon : 'EE', 'Quản lý KH&CN');
      App.ui.toast(t('rs.m.exported'), 'ok');
    };
  }

  App.page('research', { render });
})();
