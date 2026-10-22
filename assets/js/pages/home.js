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
  },
});
