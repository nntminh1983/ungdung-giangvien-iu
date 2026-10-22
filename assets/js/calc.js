/* Tính toán nghiệp vụ từ rules.json: giờ chuẩn, định mức, giờ NCKH, học vụ – cảnh báo người học.
   Mọi hằng số lấy từ IUDATA.rules; chỗ nào văn bản không quy định thì ghi rõ "giả định". */
(function () {
  'use strict';
  const D = window.IUDATA, R = D.rules || {}, T = R.teaching || {}, RS = R.research || {}, AC = R.academic || {};
  const C = (App.calc = {});
  const num = (x, d) => (x == null || isNaN(x) ? d : Number(x));

  /* ---------------------------------------------------------------- định mức */
  C.normCode = function (s) {
    if (s.vi_tri === 'NCV') return 'NCV';
    if (s.vi_tri === 'TG') return 'TG';
    if (s.hoc_ham === 'GS') return 'GS';
    if (s.hoc_ham === 'PGS') return 'PGS';
    if (s.hoc_vi === 'TS') return 'TS';
    return 'THS';
  };
  C.norm = function (s) {
    if (s.vi_tri === 'KTV') return { code: 'KTV', teach: 0, research: 0, other: 1760, minPct: 100, reductions: [], base: 0, applicable: false };
    const code = C.normCode(s);
    const n = (T.norm_by_title || []).find((x) => x.code === code) || { teach_hours: 270, research_hours: 200, other_admin_hours: 350 };
    const red = [];
    const items = (T.reductions && T.reductions.items) || [];
    const pick = (re) => items.find((x) => re.test(x.position_vi) && x.teach_min_percent != null);
    const add = (it, label) => it && red.push({ label: label || it.position_vi, pct: it.teach_min_percent, source: it.source });
    if (s.vi_tri === 'TK') add(pick(/^Trưởng khoa \(khoa <40/), 'Trưởng Khoa');
    if (s.vi_tri === 'PTK') add(pick(/^Phó trưởng khoa \(khoa <40/), 'Phó Trưởng Khoa');
    if (s.vi_tri === 'TBM') add(pick(/^Trưởng bộ môn/), 'Trưởng Bộ môn');
    (s.kiem_nhiem || []).forEach((k) => {
      if (/^CVHT/.test(k)) add(pick(/Cố vấn học tập/), 'Cố vấn học tập');
      if (/PTN/.test(k)) add(pick(/Trưởng PTN|Bí thư chi bộ/), 'Phụ trách PTN');
    });
    const minPct = red.length ? Math.min(...red.map((r) => r.pct)) : 100;   // kiêm nhiều chức vụ: lấy mức thấp nhất
    const teachBase = num(n.teach_hours, 0);
    return { code, base: teachBase, teach: Math.round(teachBase * minPct / 100 * 10) / 10, research: num(n.research_hours, 0),
      other: num(n.other_admin_hours, 350), minPct, reductions: red, postgrad: n.postgrad_eligible !== false && s.hoc_vi === 'TS', applicable: true,
      source: n.source };
  };

  /* hệ số lớp đông: trả {Hld, Hns} cho sĩ số n */
  C.sizeCoef = function (key, n) {
    const c = (T.coefficients || []).find((x) => x.key === key);
    if (!c || !c.rule) return { Hld: 0, Hns: 0 };
    const r = c.rule.find((x) => n >= x.min && (x.max == null || n <= x.max)) || c.rule[0];
    const ev = (e) => { try { return Math.max(0, Function('n', 'return ' + String(e))(n)); } catch (err) { return 0; } };
    return { Hld: Math.round(ev(r.Hld) * 1e4) / 1e4, Hns: Math.round(ev(r.Hns) * 1e4) / 1e4 };
  };
  const act = (k) => (T.activities || []).find((a) => a.key === k) || {};

  /* giờ chuẩn của một lớp học phần */
  C.sectionHours = function (sec) {
    const lab = sec.loai === 'TN';
    const periods = sec.tc * (lab ? 30 : 15);                 // 1 TC lý thuyết = 15 tiết; 1 TC thí nghiệm = 30 tiết
    let a, KL, Hcs;
    if (sec.bac === 'SDH') { a = act('lecture_pg'); KL = periods; Hcs = num(a.hours_per_unit, 1.5); }
    else if (lab) { a = act('lab'); KL = periods * 0.5; Hcs = 1; }
    else { a = act('lecture_ug'); KL = periods; Hcs = num(a.hours_per_unit, 1); }
    const sc = C.sizeCoef(lab ? 'class_size_lab' : 'class_size_lecture', sec.si_so);
    let mult = Hcs + sc.Hld + sc.Hns;
    const cap = 1.5 * Hcs;                                     // TT20: hệ số quy đổi tối đa 1,5
    if (mult > cap) mult = cap;
    return { periods, KL, Hcs, Hld: sc.Hld, Hns: sc.Hns, hours: Math.round(KL * mult * 10) / 10, activity: a.key || (lab ? 'lab' : 'lecture_ug') };
  };
  C.supHours = function (sv) {
    const map = { KLTN: ['thesis_ug', 10, 1.0], DA: ['project_ug', 2, 0.75], TT: ['fieldtrip_project', 6, 0.25], LVThS: ['thesis_master', 15, 1.1] };
    const [k, cr, defH] = map[sv.loai] || ['thesis_ug', 10, 1];
    const a = act(k);
    let H = a.Hcs != null ? a.Hcs : (a.Hcs_rule ? a.Hcs_rule[0].Hcs : defH);
    if (H == null || isNaN(H)) H = defH;
    let h = cr * H;
    if (sv.vai_tro === 'HD phụ') h = h / 2;
    return { activity: k, credits: cr, Hcs: H, hours: Math.round(h * 10) / 10 };
  };
  C.yearTeaching = function (ma_cb, nam_hoc) {
    const secs = D.teaching.filter((t) => t.ma_cb === ma_cb && t.nam_hoc === nam_hoc).map((t) => Object.assign({}, t, C.sectionHours(t)));
    const sups = D.supervision.filter((t) => t.ma_cb === ma_cb && t.nam_hoc === nam_hoc).map((t) => Object.assign({}, t, C.supHours(t)));
    const ug = secs.filter((s) => s.bac === 'DH').reduce((a, b) => a + b.hours, 0) + sups.filter((s) => s.bac === 'DH').reduce((a, b) => a + b.hours, 0);
    const pg = secs.filter((s) => s.bac === 'SDH').reduce((a, b) => a + b.hours, 0) + sups.filter((s) => s.bac === 'SDH').reduce((a, b) => a + b.hours, 0);
    const n = C.norm(App.staff(ma_cb));
    const total = Math.round((ug + pg) * 10) / 10;
    const ot = (T.overtime_tt21 || {});
    const over = Math.min(num(ot.max_overtime_periods_per_year, 200), Math.max(0, total - n.teach));
    return { secs, sups, ug: Math.round(ug * 10) / 10, pg: Math.round(pg * 10) / 10, total, norm: n, pct: n.teach ? total / n.teach * 100 : 0, overtime: Math.round(over * 10) / 10 };
  };

  /* ---------------------------------------------------------------- NCKH */
  C.paperType = function (p) {
    if (p.loai === 'conf') return 'conf_scopus';
    if (p.xep_hang === 'Q1') return 'paper_q1';
    if (p.xep_hang === 'Q2') return 'paper_q2';
    if (p.xep_hang === 'Q3') return 'paper_q3';
    if (p.xep_hang === 'Q4') return 'paper_q4';
    if (/ĐHQG/.test(p.tap_chi)) return 'paper_vnuhcm_stdj';
    return 'paper_domestic_hdgsnn';
  };
  C.paperHours = function (p) {
    const conv = (RS.conversions || []).find((c) => c.key === C.paperType(p)) || { hours: 0 };
    const N = 2 + (p.dong_tac_gia || []).length;            // giả định: thêm 1 đồng tác giả ngoài Trường
    const main = p.vai_tro !== 'Đồng tác giả';
    const share = main ? 1 / 3 + (2 / 3) / N : (2 / 3) / N;
    return { conv, N, share, hours: Math.round(conv.hours * share * 10) / 10, support: main ? conv.support_vnd || 0 : 0 };
  };
  C.projectHours = function (pr) {
    const tiers = (RS.projects && RS.projects.by_budget_million_vnd) || [];
    const tier = (b) => { const t = tiers.find((x) => b >= x.min && (x.max_exclusive == null ? b <= (x.max_inclusive || 1e9) : b < x.max_exclusive)); return t ? t.hours : 500; };
    const b = pr.kinh_phi_trieu;
    const full = b > 1000 ? 500 + tier(b - 1000) : tier(b);
    const share = pr.vai_tro === 'Chủ nhiệm' ? 0.4 : 0.2;      // giả định tỷ lệ ngày công cá nhân
    return { full, share, hours: Math.round(full * share), counted: pr.trang_thai === 'Đã nghiệm thu' };
  };
  C.yearResearch = function (ma_cb, nam_hoc) {
    const papers = D.papers.filter((p) => p.ma_cb === ma_cb && p.nam_hoc === nam_hoc).map((p) => Object.assign({}, p, C.paperHours(p)));
    const y0 = +nam_hoc.slice(0, 4);
    const projects = D.projects.filter((p) => p.ma_cb === ma_cb).map((p) => Object.assign({}, p, C.projectHours(p)))
      .filter((p) => { const e = new Date(p.ket_thuc); return e >= new Date(y0, 8, 1) && e < new Date(y0 + 1, 8, 1); });
    const n = C.norm(App.staff(ma_cb));
    const total = papers.reduce((a, b) => a + b.hours, 0) + projects.filter((p) => p.counted).reduce((a, b) => a + b.hours, 0);
    return { papers, projects, total: Math.round(total * 10) / 10, norm: n.research, pct: n.research ? total / n.research * 100 : 0 };
  };

  /* ---------------------------------------------------------------- học vụ */
  const GS = (AC.grade_scale && AC.grade_scale.items) || [];
  C.letter = function (s100) { if (s100 == null) return ''; const g = GS.find((x) => s100 >= x.min100); return g ? g.letter : 'F'; };
  C.gpa4 = function (letter) { const g = GS.find((x) => x.letter === letter); return g ? g.gpa4 : null; };
  C.pass = function (letter) { if (letter === 'P') return true; const g = GS.find((x) => x.letter === letter); return g ? g.pass : false; };
  C.classOf = function (g4) {
    const items = (AC.gpa_class && AC.gpa_class.items) || [];
    const it = items.filter((x) => x.min4 != null).sort((a, b) => b.min4 - a.min4).find((x) => g4 >= x.min4);
    return it ? App.L(it) : (App.lang === 'vi' ? 'Yếu' : 'Weak');
  };
  const termOrder = (k) => { const m = /^(\d{4})-\d{4}\/HK(\d)$/.exec(k); return m ? +m[1] * 10 + +m[2] : 0; };
  C.termLabel = (k) => { const m = /^(\d{4})-(\d{4})\/HK(\d)$/.exec(k); if (!m) return k; return (App.lang === 'vi' ? 'HK' + m[3] + ' ' : 'Sem ' + m[3] + ' ') + m[1] + '–' + m[2].slice(2); };
  C.termShort = (k) => { const m = /^(\d{4})-(\d{4})\/HK(\d)$/.exec(k); return m ? 'HK' + m[3] + '/' + m[1].slice(2) + '-' + m[2].slice(2) : k; };

  C.student = function (mssv) {
    const st = D.students.find((s) => s.mssv === mssv);
    const prog = D.curricula[st.nganh];
    const rows = D.transcripts.filter((t) => t.mssv === mssv).map((t) => Object.assign({}, t, { chu: t.tk == null ? t.chu : C.letter(t.tk) }));
    const terms = [...new Set(rows.map((r) => r.ky))].sort((a, b) => termOrder(a) - termOrder(b));
    const best = {};
    const out = [];
    let regIdx = 0;
    terms.forEach((k) => {
      const rs = rows.filter((r) => r.ky === k);
      const graded = rs.filter((r) => r.tk != null && r.tc > 0);
      const reg = graded.reduce((a, b) => a + b.tc, 0);
      const failed = graded.filter((r) => !C.pass(r.chu)).reduce((a, b) => a + b.tc, 0);
      const sem = reg ? graded.reduce((a, b) => a + b.tc * C.gpa4(b.chu), 0) / reg : null;
      const sem100 = reg ? graded.reduce((a, b) => a + b.tc * b.tk, 0) / reg : null;
      graded.forEach((r) => { if (!best[r.ma_hp] || r.tk > best[r.ma_hp].tk) best[r.ma_hp] = r; });
      const bs = Object.values(best);
      const cumCr = bs.reduce((a, b) => a + b.tc, 0);
      const cum = cumCr ? bs.reduce((a, b) => a + b.tc * C.gpa4(b.chu), 0) / cumCr : null;
      const acc = bs.filter((r) => C.pass(r.chu)).reduce((a, b) => a + b.tc, 0);
      const owed = bs.filter((r) => !C.pass(r.chu)).reduce((a, b) => a + b.tc, 0);
      const main = /HK[12]$/.test(k);
      if (main) regIdx++;
      const expected = prog.plan.filter((p) => typeof p.sem === 'number' && p.sem <= regIdx).reduce((a, b) => a + b.cr, 0);
      out.push({ k, rows: rs, reg, failed, sem, sem100, cum, acc, owed, main, regIdx, expected });
    });
    const last = out[out.length - 1] || {};
    const cur = D.current_term.filter((c) => c.mssv === mssv);
    return { st, prog, rows, terms: out, last, cur, best };
  };

  /* Cảnh báo học vụ chính thức (theo quy chế) cho từng học kỳ chính */
  C.officialWarnings = function (S) {
    const w = (AC.warning || [])[0];
    if (!w) return [];
    const c = w.condition || {};
    const Cy = (S.prog.total_credits || 152) / (S.prog.years || 5);
    const res = [];
    let first = true;
    S.terms.filter((t) => t.main).forEach((t) => {
      const reasons = [];
      if (t.reg && t.failed / t.reg > num(c.failed_credit_ratio_gt, 0.5)) reasons.push(App.t('w.failratio', { p: Math.round(t.failed / t.reg * 100) }));
      if (t.owed > num(c.owed_credits_gt, 24)) reasons.push(App.t('w.owed', { n: t.owed }));
      const th = first ? num(c.first_sem_gpa4_lt, 0.8) : num(c.sem_gpa4_lt, 1.0);
      if (t.sem != null && t.sem < th) reasons.push(App.t('w.semgpa', { g: t.sem.toFixed(2), t: th }));
      const yr = Math.min(S.prog.years || 5, Math.floor(t.acc / Cy) + 1);
      const by = c.cum_gpa4_lt_by_year || {};
      const lim = by[String(yr)] != null ? by[String(yr)] : by['4+'];
      if (t.cum != null && lim != null && t.cum < lim) reasons.push(App.t('w.cumgpa', { g: t.cum.toFixed(2), t: lim, y: yr }));
      if (reasons.length) res.push({ k: t.k, reasons });
      first = false;
    });
    return res;
  };

  /* Cảnh báo sớm (nội bộ CVHT) – bổ trợ, không thay quy chế. Ngưỡng là đề xuất, cấu hình được. */
  C.EARLY = { lowSem: 2.0, behindPct: 85, behindCr: 12, dropGpa: 0.5, absPct: 25, midLow: 40, drlWeak: 50, drlLow: 65 };
  C.earlyWarnings = function (S) {
    const E = C.EARLY, out = [];
    const mains = S.terms.filter((t) => t.main && t.sem != null);
    const a = mains[mains.length - 1], b = mains[mains.length - 2];
    if (a && b && a.sem < E.lowSem && b.sem < E.lowSem) out.push({ code: 'E1', sev: 3, t: App.t('e.low2', { a: b.sem.toFixed(2), b: a.sem.toFixed(2), x: E.lowSem }) });
    else if (a && a.sem < E.lowSem) out.push({ code: 'E1', sev: 1, t: App.t('e.low1', { a: a.sem.toFixed(2), x: E.lowSem }) });
    const L = S.last;
    if (L && L.expected) {
      const pct = L.acc / L.expected * 100;
      if (pct < E.behindPct || L.expected - L.acc >= E.behindCr) out.push({ code: 'E2', sev: pct < 70 ? 3 : 2, t: App.t('e.behind', { a: L.acc, e: L.expected, p: Math.round(pct) }) });
    }
    if (a && b && b.sem - a.sem >= E.dropGpa) out.push({ code: 'E3', sev: 2, t: App.t('e.drop', { a: b.sem.toFixed(2), b: a.sem.toFixed(2) }) });
    // học phần bắt buộc chưa đạt chặn môn tiên quyết
    const failedReq = Object.values(S.best).filter((r) => !C.pass(r.chu));
    const blocked = S.prog.plan.filter((p) => (p.pre || []).some((c) => failedReq.some((f) => f.ma_hp === c)));
    if (failedReq.length) out.push({ code: 'E4', sev: failedReq.length >= 3 ? 3 : 2, t: App.t('e.owe', { n: failedReq.length, l: failedReq.slice(0, 6).map((f) => f.ma_hp).join(', ') + (failedReq.length > 6 ? '…' : '') }) + (blocked.length ? ' ' + App.t('e.block', { l: blocked.slice(0, 4).map((p) => p.code).join(', ') }) : '') });
    // học kỳ hiện tại
    const abs = S.cur.filter((c) => c.vang / c.so_buoi * 100 >= E.absPct);
    if (abs.length) out.push({ code: 'E5', sev: abs.length >= 2 ? 3 : 2, t: App.t('e.abs', { x: E.absPct, n: abs.length, l: abs.map((c) => c.ma_hp + ' (' + c.vang + '/' + c.so_buoi + ')').join(', ') }) });
    const mid = S.cur.filter((c) => c.giua_ky < E.midLow);
    if (mid.length) out.push({ code: 'E6', sev: 2, t: App.t('e.mid', { x: E.midLow, n: mid.length, l: mid.map((c) => c.ma_hp + ': ' + c.giua_ky).join(', ') }) });
    const drl = S.st.drl || [];
    const d1 = drl[drl.length - 1], d2 = drl[drl.length - 2];
    if (d1 && d1.diem < E.drlWeak) out.push({ code: 'E7', sev: 2, t: App.t('e.drl', { d: d1.diem }) });
    else if (d1 && d2 && d1.diem < E.drlLow && d2.diem < E.drlLow) out.push({ code: 'E7', sev: 1, t: App.t('e.drl2', { a: d2.diem, b: d1.diem }) });
    if (S.rows.some((r) => /^ENTP/.test(r.ma_hp) && r.chu === 'F')) out.push({ code: 'E8', sev: 2, t: App.t('e.eng') });
    return out;
  };
  C.risk = function (S) {
    const off = C.officialWarnings(S);
    const early = C.earlyWarnings(S);
    const lastMain = S.terms.filter((t) => t.main).slice(-1)[0];
    const offNow = off.some((o) => lastMain && o.k === lastMain.k);
    const score = early.reduce((a, b) => a + b.sev, 0) + (offNow ? 5 : 0);
    const level = offNow ? 'red' : score >= 4 ? 'orange' : score >= 1 ? 'yellow' : 'green';   // đỏ chỉ khi có cảnh báo học vụ chính thức
    return { off, offNow, early, score, level };
  };
  C.riskLabel = (lv) => App.t('risk.' + lv);
})();
