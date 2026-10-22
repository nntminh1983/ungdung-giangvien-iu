/* Tổng quan theo vai trò: KPI cá nhân, nhiệm vụ của vị trí việc làm (positions.json), việc cần xử lý, bảng điều khiển Khoa */
App.addI18n({
  vi: {
    'h.hello': 'Xin chào, {n}', 'h.role': 'Vai trò đang hoạt động: {r}', 'h.year': 'Năm học 2025–2026 (đã kết thúc) · HK1/2026–2027 đang diễn ra',
    'h.teach': 'Giờ chuẩn giảng dạy 2025–26', 'h.res': 'Giờ NCKH 2025–26', 'h.req': 'Hồ sơ của tôi đang xử lý', 'h.inbox': 'Việc chờ tôi xử lý',
    'h.adv': 'SV cần chú ý (lớp CVHT)', 'h.eq': 'Thiết bị cần xử lý', 'h.duties': 'Nhiệm vụ theo vị trí việc làm', 'h.kpis': 'Chỉ số theo dõi của vị trí',
    'h.fac': 'Bảng điều khiển Khoa Điện – Điện tử', 'h.staff': 'Cán bộ', 'h.complete': 'Hoàn thành giờ chuẩn', 'h.q12': 'Bài báo Q1/Q2 (2025–26)',
    'h.svwarn': 'SV cảnh báo/nguy cơ', 'h.sla': 'Hồ sơ đúng SLA', 'h.ready': 'Thiết bị sẵn sàng', 'h.quick': 'Thao tác nhanh',
    'h.q.new': 'Tạo hồ sơ quy trình', 'h.q.cv': 'Xem hồ sơ số', 'h.q.wl': 'Đối soát giờ chuẩn', 'h.q.sv': 'Danh sách SV cố vấn', 'h.q.lab': 'Lịch PTN tuần này',
    'h.feature': 'Chức năng', 'h.open': 'Mở', 'h.of': 'của định mức {n}', 'h.none': 'Không có việc chờ', 'h.office': 'Đơn vị: {u}',
    'h.access': 'Phạm vi dữ liệu: {s}', 'scope.self': 'Chỉ hồ sơ của mình', 'scope.department': 'Bộ môn', 'scope.faculty': 'Toàn Khoa', 'scope.school': 'Toàn Trường',
    'scope.lab': 'PTN được giao', 'scope.advisees': 'Lớp cố vấn', 'scope.audit': 'Nhật ký kiểm toán', 'scope.technical': 'Kỹ thuật – không xem dữ liệu nghiệp vụ',
  },
  en: {
    'h.hello': 'Hello, {n}', 'h.role': 'Active role: {r}', 'h.year': 'Academic year 2025–2026 (closed) · Semester 1/2026–2027 in progress',
    'h.teach': 'Teaching hours 2025–26', 'h.res': 'Research hours 2025–26', 'h.req': 'My open requests', 'h.inbox': 'Waiting for me',
    'h.adv': 'Advisees needing attention', 'h.eq': 'Equipment issues', 'h.duties': 'Job-position duties', 'h.kpis': 'Position KPIs',
    'h.fac': 'School of Electrical Engineering dashboard', 'h.staff': 'Staff', 'h.complete': 'Teaching quota met', 'h.q12': 'Q1/Q2 papers (2025–26)',
    'h.svwarn': 'Students at risk', 'h.sla': 'Requests within SLA', 'h.ready': 'Equipment ready', 'h.quick': 'Quick actions',
    'h.q.new': 'Start a request', 'h.q.cv': 'Open e-profile', 'h.q.wl': 'Check workload', 'h.q.sv': 'My advisees', 'h.q.lab': 'Lab schedule',
    'h.feature': 'Feature', 'h.open': 'Open', 'h.of': 'of quota {n}', 'h.none': 'Nothing waiting', 'h.office': 'Unit: {u}',
    'h.access': 'Data scope: {s}', 'scope.self': 'Own record only', 'scope.department': 'Department', 'scope.faculty': 'Whole faculty', 'scope.school': 'Whole university',
    'scope.lab': 'Assigned labs', 'scope.advisees': 'Advisee class', 'scope.audit': 'Audit trail', 'scope.technical': 'Technical – no business data',
  },
});
App.page('home', {
  render(main) {
    const t = App.t, esc = App.esc, D = App.D, u = App.user(), role = u.role, C = App.calc;
    const pos = App.position(role);
    const FEAT_PAGE = { dashboard: 'home', decision: 'decision', lab: 'lab', eprofile: 'profile', eprocess: 'processes', wl_ug: 'teaching', wl_pg: 'teaching',
      rs_paper: 'research', rs_project: 'research', sv_admission: 'service', sv_advisor: 'students', sv_warning: 'students', sv_faculty: 'service', sv_union: 'service' };
    const isKhoa = u.loai === 'khoa';
    const kp = [];
    if (isKhoa && ['GV', 'TBM', 'PTK', 'TK', 'TG'].includes(role) || (isKhoa && u.roles.includes('GV') && role !== 'KTV' && role !== 'NCV')) {
      const y = C.yearTeaching(u.ma_cb, '2025-2026');
      kp.push(App.ui.kpi(t('h.teach'), App.fmtNum(y.total) + ' <small style="font-size:.9rem">/ ' + App.fmtNum(y.norm.teach) + '</small>', App.ui.progress(y.pct, y.pct >= 100 ? 'ok' : y.pct >= 80 ? 'warn' : 'bad'), y.pct >= 100 ? 'ok' : 'warn'));
    }
    if (isKhoa && ['GV', 'TBM', 'PTK', 'TK', 'NCV'].includes(role)) {
      const r = C.yearResearch(u.ma_cb, '2025-2026');
      kp.push(App.ui.kpi(t('h.res'), App.fmtNum(r.total, 0) + ' <small style="font-size:.9rem">/ ' + r.norm + '</small>', App.ui.progress(r.pct, r.pct >= 100 ? 'ok' : 'warn'), r.pct >= 100 ? 'ok' : 'warn'));
    }
    const reqs = App.requests();
    const mine = reqs.filter((r) => r.ma_cb === u.ma_cb && !['hoan_thanh', 'huy'].includes(r.trang_thai));
    kp.push(App.ui.kpi(t('h.req'), mine.length, '', 'cyan'));
    const inbox = App.proc && App.proc.pendingFor ? App.proc.pendingFor(u) : [];
    kp.push(App.ui.kpi(t('h.inbox'), inbox.length, '', inbox.length ? 'warn' : 'ok'));
    if (u.roles.includes('CVHT')) {
      const adv = D.students.filter((s) => s.cvht === u.ma_cb).map((s) => C.risk(C.student(s.mssv)));
      kp.push(App.ui.kpi(t('h.adv'), adv.filter((r) => r.level !== 'green').length + ' / ' + adv.length, '', 'bad'));
    }
    if (role === 'KTV' || role === 'TBM') {
      const labs = D.labs.filter((l) => l.ktv === u.ma_cb || l.phu_trach === u.ma_cb).map((l) => l.ma);
      const bad = D.equipment.filter((e) => labs.includes(e.ptn) && /Hỏng|hiệu chuẩn/.test(e.tinh_trang)).length;
      kp.push(App.ui.kpi(t('h.eq'), bad, '', bad ? 'bad' : 'ok'));
    }
    const scope = App.acl.scopeOf(role);
    let html = `<div class="page-h"><div><div class="crumb">${t('nav.home')}</div><h1>${t('h.hello', { n: esc(App.academicPrefix(u) + ' ' + u.ten) })}</h1>
      <p>${t('h.role', { r: esc(App.roleName(role)) })} · ${t('h.access', { s: t('scope.' + scope) })} · ${t('h.year')}</p></div></div>
      <div class="kpis">${kp.join('')}</div>`;
    // bảng điều khiển Khoa cho TK/PTK/BGH
    if (App.acl.has('dashboard')) {
      const fac = D.staff.filter((s) => s.loai === 'khoa');
      const lect = fac.filter((s) => ['TK', 'PTK', 'TBM', 'GV'].includes(s.vi_tri));
      const done = lect.filter((s) => C.yearTeaching(s.ma_cb, '2025-2026').pct >= 100).length;
      const q12 = D.papers.filter((p) => p.nam_hoc === '2025-2026' && ['Q1', 'Q2'].includes(p.xep_hang)).length;
      const risks = D.students.map((s) => C.risk(C.student(s.mssv)));
      const fin = reqs.filter((r) => r.trang_thai === 'hoan_thanh');
      const ok = fin.filter((r) => App.proc && App.proc.withinSla ? App.proc.withinSla(r) : true).length;
      const ready = D.equipment.filter((e) => /Sẵn sàng|Đang sử dụng/.test(e.tinh_trang)).length;
      const area = u.phu_trach ? ' – ' + (u.phu_trach === 'dao_tao_sv' ? (App.lang === 'vi' ? 'lĩnh vực Đào tạo & Sinh viên' : 'Academic & Student affairs') : (App.lang === 'vi' ? 'lĩnh vực KHCN & Doanh nghiệp' : 'Research & Industry')) : '';
      html += `<div class="card"><div class="card-h"><h3>${t('h.fac')}${esc(area)}</h3><a class="btn ghost sm" href="#/decision">${t('nav.decision')} →</a></div>
        <div class="kpis" style="margin:0">${App.ui.kpi(t('h.staff'), fac.length, lect.length + ' GV')}${App.ui.kpi(t('h.complete'), Math.round(done / lect.length * 100) + '%', done + '/' + lect.length, 'cyan')}
        ${App.ui.kpi(t('h.q12'), q12, '', 'ok')}${App.ui.kpi(t('h.svwarn'), risks.filter((r) => ['red', 'orange'].includes(r.level)).length + '/' + risks.length, '', 'bad')}
        ${App.ui.kpi(t('h.sla'), fin.length ? Math.round(ok / fin.length * 100) + '%' : '–', fin.length + ' HS', 'warn')}${App.ui.kpi(t('h.ready'), Math.round(ready / D.equipment.length * 100) + '%', ready + '/' + D.equipment.length)}</div></div>`;
      if (['TK', 'PTK', 'BGH'].includes(role)) html += '<div data-kpiboard></div>';
    }
    html += `<div class="grid g-2-1"><div>`;
    if (pos) {
      html += `<div class="card"><div class="card-h"><h3>${t('h.duties')} – ${esc(App.L(pos))}</h3><span class="muted small">${esc(pos.bac || '')}</span></div>
        ${App.ui.table([{ t: '#', f: (d, i) => i + 1, cls: 'c' }, { t: App.lang === 'vi' ? 'Nhiệm vụ' : 'Duty', f: (d) => esc(App.L(d)) + `<div class="small muted">${esc(d.source || '')}</div>` },
          { t: t('h.feature'), f: (d) => { const f = (D.positions.features || []).find((x) => x.key === d.feature); const pg = FEAT_PAGE[d.feature]; return f ? `<a href="#/${pg}" class="chip">${esc(App.L(f))}</a>` : ''; } }], pos.duties || [])}</div>`;
    } else {
      html += `<div class="card"><h3>${esc(App.roleName(role))}</h3><p>${t('h.office', { u: esc(u.don_vi) })}</p><p class="muted">${esc(((D.metadata.roles || []).find((r) => r.code === role) || {}).vi || '')}</p></div>`;
    }
    html += `</div><div>`;
    html += `<div class="card"><h3>${t('h.inbox')}</h3>${inbox.length ? '<ul class="notes">' + inbox.slice(0, 8).map((r) => { const p = App.process(r.ma_qt) || {}; return `<li><a href="#/processes/hs/${r.id}">${esc(r.id)} – ${esc(App.L(p, 'name'))}</a><small>${App.fmtDT(r.tao_luc)}</small></li>`; }).join('') + '</ul>' : App.ui.empty(t('h.none'))}</div>`;
    if (pos && pos.kpis) html += `<div class="card"><h3>${t('h.kpis')}</h3><ul class="small" style="padding-left:18px;margin:0">${pos.kpis.map((k) => `<li>${esc(App.L(k))} <span class="muted">(${esc(k.unit || '')})</span></li>`).join('')}</ul></div>`;
    const quick = [['processes', 'h.q.new'], ['profile', 'h.q.cv'], ['teaching', 'h.q.wl'], ['students', 'h.q.sv'], ['lab', 'h.q.lab']].filter(([k]) => App.canNav(App.NAV.find((n) => n.k === k)));
    html += `<div class="card"><h3>${t('h.quick')}</h3><div class="row">${quick.map(([k, l]) => `<a class="btn ghost sm" href="#/${k}">${t(l)}</a>`).join('')}</div></div></div></div>`;
    main.innerHTML = html;
    const kb = main.querySelector('[data-kpiboard]');
    if (kb) App.kpiBoard(kb, u);
  },
});

/* ---------------------------------------------------------------------------------------------
   Bảng KPI theo quý cho Ban chủ nhiệm Khoa (TK: toàn bộ; PTK: lĩnh vực phụ trách; BGH: toàn bộ).
   Quý gần nhất lấy từ dữ liệu thật của ứng dụng khi có; các quý trước là số GIẢ LẬP (seed cố định). */
App.addI18n({
  vi: {
    'kq.title': 'Đánh giá KPI Khoa theo quý – năm 2026', 'kq.sim': 'Số liệu giả lập', 'kq.ytd': 'Mức hoàn thành lũy kế năm',
    'kq.byq': 'Mức hoàn thành trung bình theo quý', 'kq.heat': 'Bảng KPI theo quý (chỉ tiêu dạng số lượng hiển thị lũy kế)', 'kq.kpi': 'Chỉ tiêu', 'kq.target': 'Mục tiêu năm',
    'kq.now': 'Lũy kế / hiện tại', 'kq.done': 'Hoàn thành', 'kq.trend': 'Xu hướng', 'kq.q': 'Quý {q}', 'kq.q4': 'Quý 4 (đang thực hiện)',
    'kq.l1': 'Vượt / đạt (≥ 100%)', 'kq.l2': 'Gần đạt (85–99%)', 'kq.l3': 'Cần cố gắng (70–84%)', 'kq.l4': 'Chưa đạt (< 70%)',
    'kq.detail': 'Chi tiết quý', 'kq.lower': 'càng thấp càng tốt', 'kq.area.all': 'Tất cả lĩnh vực', 'kq.area.dt': 'Đào tạo & Sinh viên', 'kq.area.kh': 'KHCN & Doanh nghiệp',
    'kq.n': '{n} chỉ tiêu', 'kq.focus': 'Cần tập trung', 'kq.good': 'Điểm sáng',
  },
  en: {
    'kq.title': 'Faculty KPIs by quarter – 2026', 'kq.sim': 'Simulated figures', 'kq.ytd': 'Year-to-date completion',
    'kq.byq': 'Average completion by quarter', 'kq.heat': 'Quarterly KPI board (count indicators shown cumulatively)', 'kq.kpi': 'Indicator', 'kq.target': 'Annual target',
    'kq.now': 'YTD / current', 'kq.done': 'Completion', 'kq.trend': 'Trend', 'kq.q': 'Q{q}', 'kq.q4': 'Q4 (in progress)',
    'kq.l1': 'Met / exceeded (≥ 100%)', 'kq.l2': 'Nearly met (85–99%)', 'kq.l3': 'Needs effort (70–84%)', 'kq.l4': 'Not met (< 70%)',
    'kq.detail': 'Quarter detail', 'kq.lower': 'lower is better', 'kq.area.all': 'All areas', 'kq.area.dt': 'Academic & Student affairs', 'kq.area.kh': 'Research & Industry',
    'kq.n': '{n} indicators', 'kq.focus': 'Focus areas', 'kq.good': 'Highlights',
  },
});
App.kpiBoard = function (el, u) {
  const t = App.t, esc = App.esc, D = App.D, C = App.calc, ch = App.ui.chart;
  // giá trị hiện tại từ dữ liệu ứng dụng
  const lect = D.staff.filter((s) => s.loai === 'khoa' && ['TK', 'PTK', 'TBM', 'GV'].includes(s.vi_tri));
  const res = D.staff.filter((s) => s.loai === 'khoa' && ['TK', 'PTK', 'TBM', 'GV', 'NCV'].includes(s.vi_tri));
  const teachAvg = lect.reduce((a, s) => a + Math.min(150, C.yearTeaching(s.ma_cb, '2025-2026').pct), 0) / lect.length;
  const resDone = res.filter((s) => C.yearResearch(s.ma_cb, '2025-2026').pct >= 100).length / res.length * 100;
  const fin = App.requests().filter((r) => r.trang_thai === 'hoan_thanh');
  const sla = fin.length && App.proc && App.proc.withinSla ? fin.filter((r) => App.proc.withinSla(r)).length / fin.length * 100 : 92;
  const ready = D.equipment.filter((e) => /Sẵn sàng|Đang sử dụng/.test(e.tinh_trang)).length / D.equipment.length * 100;
  const q12 = D.papers.filter((p) => p.nam === 2026 && ['Q1', 'Q2'].includes(p.xep_hang)).length;
  // kind: rate (giá trị mỗi quý so với mục tiêu) | count (cộng dồn so với mục tiêu năm); low: càng thấp càng tốt
  const K = [
    { k: 'teach', vi: 'Hoàn thành giờ chuẩn giảng dạy toàn Khoa', en: 'Faculty teaching-hour completion', unit: '%', kind: 'rate', target: 100, area: 'dt', now: teachAvg },
    { k: 'res', vi: 'Tỷ lệ GV/NCV đạt định mức NCKH', en: 'Staff meeting research quota', unit: '%', kind: 'rate', target: 80, area: 'kh', now: resDone },
    { k: 'q12', vi: 'Bài báo Q1/Q2', en: 'Q1/Q2 papers', unit: App.lang === 'vi' ? 'bài' : 'papers', kind: 'count', target: 6, area: 'kh', now: q12 },
    { k: 'proj', vi: 'Đề tài mới được phê duyệt', en: 'New funded projects', unit: App.lang === 'vi' ? 'đề tài' : 'projects', kind: 'count', target: 5, area: 'kh' },
    { k: 'mou', vi: 'Hợp tác doanh nghiệp (MOU/hợp đồng)', en: 'Industry agreements (MOU/contracts)', unit: App.lang === 'vi' ? 'văn bản' : 'agreements', kind: 'count', target: 6, area: 'kh' },
    { k: 'lab', vi: 'Thiết bị PTN sẵn sàng hoạt động', en: 'Lab equipment availability', unit: '%', kind: 'rate', target: 90, area: 'kh', now: ready },
    { k: 'sla', vi: 'Hồ sơ quy trình xử lý đúng hạn (SLA)', en: 'e-Process requests within SLA', unit: '%', kind: 'rate', target: 95, area: 'all', now: sla },
    { k: 'warn', vi: 'SV bị cảnh báo học vụ', en: 'Students under academic warning', unit: '%', kind: 'rate', target: 10, low: true, area: 'dt' },   // 7 SV mẫu không đại diện toàn Khoa → giả lập
    { k: 'ontime', vi: 'Học phần nộp đề thi, điểm đúng hạn', en: 'Courses with exams/grades on time', unit: '%', kind: 'rate', target: 98, area: 'dt' },
    { k: 'adm', vi: 'Tuyển sinh đạt chỉ tiêu', en: 'Admission target achieved', unit: '%', kind: 'rate', target: 100, area: 'dt' },
    { k: 'sat', vi: 'Mức hài lòng của người học', en: 'Student satisfaction', unit: '/5', kind: 'rate', target: 4.0, area: 'dt' },
  ];
  let rnd = 20260422;
  const R = () => ((rnd = (rnd * 1103515245 + 12345) % 2147483648) / 2147483648);
  K.forEach((k) => {
    // Q1–Q3 đã khoá sổ; Q4 tính đến 22/10/2026
    if (k.kind === 'count') {
      const total = k.now != null ? k.now : Math.round(k.target * (0.6 + R() * 0.5));
      const w = [0.22 + R() * 0.1, 0.25 + R() * 0.1, 0.28 + R() * 0.12];
      const s = w.reduce((a, b) => a + b, 0) + 0.12;
      let acc = 0;
      k.q = w.map((x) => { const v = Math.round(total * x / s); acc += v; return v; });
      k.q.push(Math.max(0, total - acc));
    } else {
      const base = k.now != null ? k.now : (k.low ? k.target * (0.8 + R() * 0.5) : k.target * (0.86 + R() * 0.14));
      const step = (k.low ? -1 : 1) * k.target * (0.015 + R() * 0.03);
      k.q = [0, 1, 2, 3].map((i) => {
        const v = base - step * (3 - i) + (R() - 0.5) * k.target * 0.04;
        return Math.round((k.unit === '/5' ? Math.min(5, v) : Math.max(0, Math.min(k.low ? 100 : 130, v))) * 10) / 10;
      });
      if (k.now != null) k.q[3] = Math.round(k.now * 10) / 10;
    }
  });
  const pct = (k, qi) => {
    if (k.kind === 'count') {
      const cum = k.q.slice(0, qi + 1).reduce((a, b) => a + b, 0);
      const tgt = k.target * (qi === 3 ? 0.83 : (qi + 1) / 4);   // Q4 mới qua 22/10 ≈ 83% năm
      return cum / tgt * 100;
    }
    const v = k.q[qi];
    return k.low ? (v <= 0 ? 130 : Math.min(130, k.target / v * 100)) : v / k.target * 100;
  };
  const lvl = (p) => (p >= 100 ? 1 : p >= 85 ? 2 : p >= 70 ? 3 : 4);
  const COL = { 1: ['#E6F4EC', '#2F855A'], 2: ['#E6F4FB', '#0E6E96'], 3: ['#FDF3E1', '#B7791F'], 4: ['#FDECEC', '#C53030'] };
  const areaOf = u.vi_tri === 'PTK' && u.role === 'PTK' ? (u.phu_trach === 'dao_tao_sv' ? 'dt' : 'kh') : 'all';
  let area = areaOf, sel = 3;
  const fmt = (k, v) => (k.unit === '%' ? App.fmtNum(v, 1) + '%' : k.unit === '/5' ? App.fmtNum(v, 2) + '/5' : App.fmtNum(v, 0) + ' ' + k.unit);

  function draw() {
    const ks = K.filter((k) => area === 'all' || k.area === area || k.area === 'all');
    const qAvg = [0, 1, 2, 3].map((qi) => ks.reduce((a, k) => a + Math.min(130, pct(k, qi)), 0) / ks.length);
    const ytd = qAvg[3];
    const dist = [1, 2, 3, 4].map((l) => ks.filter((k) => lvl(pct(k, sel)) === l).length);
    const qLab = (i) => (i === 3 ? t('kq.q4') : t('kq.q', { q: i + 1 }));
    const spark = (k) => {
      const ps = k.q.map((_, i) => Math.min(130, pct(k, i)));
      const pts = ps.map((p, i) => (6 + i * 22) + ',' + (30 - p / 130 * 26).toFixed(1)).join(' ');
      return `<svg viewBox="0 0 80 32" width="80" height="32"><line x1="0" x2="80" y1="${30 - 100 / 130 * 26}" y2="${30 - 100 / 130 * 26}" stroke="#E3E6F0" stroke-dasharray="3 2"/><polyline points="${pts}" fill="none" stroke="#2E3191" stroke-width="2"/>${ps.map((p, i) => `<circle cx="${6 + i * 22}" cy="${(30 - p / 130 * 26).toFixed(1)}" r="2.5" fill="${COL[lvl(p)][1]}"/>`).join('')}</svg>`;
    };
    const ranked = ks.map((k) => ({ k, p: pct(k, sel) })).sort((a, b) => a.p - b.p);
    el.innerHTML = `<div class="card"><div class="card-h"><h3>${t('kq.title')}</h3><div class="row">
        ${u.role === 'PTK' ? '' : `<select data-area aria-label="area"><option value="all">${t('kq.area.all')}</option><option value="dt">${t('kq.area.dt')}</option><option value="kh">${t('kq.area.kh')}</option></select>`}
        ${App.ui.badge(t('kq.sim'), 'warn')}</div></div>
      <div class="grid g3">
        <div><h4>${t('kq.ytd')}</h4>${ch.donut(dist.map((n, i) => ({ l: t('kq.l' + (i + 1)), v: n, c: COL[i + 1][1] })), { center: Math.round(ytd) + '%', sub: 'Q' + (sel + 1) + '/2026', label: t('kq.ytd') })}</div>
        <div><h4>${t('kq.byq')}</h4>${ch.bars(qAvg.map((v, i) => ({ l: 'Q' + (i + 1), v: Math.round(v), c: COL[lvl(v)][1], ref: 100 })), { w: 300, h: 150, max: 130, label: t('kq.byq') })}</div>
        <div><h4>${t('kq.detail')}: ${qLab(sel)}</h4>
          <div class="small" style="font-weight:700;color:var(--bad);margin:4px 0">${t('kq.focus')}</div>
          ${App.ui.chart.hbars(ranked.slice(0, 3).map((r) => ({ l: App.L(r.k), v: Math.min(130, r.p), ref: 100, txt: Math.round(r.p) + '%', c: COL[lvl(r.p)][1] })), { max: 130 })}
          <div class="small" style="font-weight:700;color:var(--ok);margin:10px 0 4px">${t('kq.good')}</div>
          ${App.ui.chart.hbars(ranked.slice(-3).reverse().map((r) => ({ l: App.L(r.k), v: Math.min(130, r.p), ref: 100, txt: Math.round(r.p) + '%', c: COL[lvl(r.p)][1] })), { max: 130 })}</div>
      </div>
      <h4 style="margin-top:14px">${t('kq.heat')} <span class="muted small">· ${t('kq.n', { n: ks.length })}</span></h4>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${t('kq.kpi')}</th><th class="num">${t('kq.target')}</th>
        ${[0, 1, 2, 3].map((i) => `<th class="c" style="cursor:pointer;${i === sel ? 'background:#1C9ACC' : ''}" data-q="${i}">${qLab(i)}</th>`).join('')}
        <th class="c">${t('kq.trend')}</th></tr></thead><tbody>
        ${ks.map((k) => `<tr><td><b>${esc(App.L(k))}</b>${k.low ? ` <span class="muted small">(${t('kq.lower')})</span>` : ''}</td>
          <td class="num">${k.low ? '≤ ' : ''}${fmt(k, k.target)}</td>
          ${k.q.map((v, i) => { const p = pct(k, i); const c = COL[lvl(p)]; const shown = k.kind === 'count' ? k.q.slice(0, i + 1).reduce((a, b) => a + b, 0) : v; return `<td class="c" style="background:${c[0]};color:${c[1]};font-weight:700;${i === sel ? 'outline:2px solid #1C9ACC;outline-offset:-2px' : ''}">${fmt(k, shown)}<div class="small" style="font-weight:600">${Math.round(p)}%</div></td>`; }).join('')}
          <td class="c">${spark(k)}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="row small muted" style="margin-top:8px">${[1, 2, 3, 4].map((l) => `<span class="chip" style="background:${COL[l][0]};color:${COL[l][1]}">${t('kq.l' + l)}</span>`).join('')}</div></div>`;
    const a = el.querySelector('[data-area]');
    if (a) { a.value = area; a.onchange = () => { area = a.value; draw(); }; }
    el.querySelectorAll('[data-q]').forEach((th) => (th.onclick = () => { sel = +th.dataset.q; draw(); }));
  }
  draw();
};
