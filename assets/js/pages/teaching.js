/* Khối lượng giảng dạy: giờ chuẩn ĐH/SĐH (KLcs × Hcs + Hlđ + Hns), định mức – giảm trừ theo chức vụ, ước tính tiền dạy thêm giờ
   theo TT 21/2025 (ẩn sau MFA), đối soát cuối năm (QT-ĐHQT-GD-04), bảng quản lý Bộ môn/Khoa, khối lượng hỗ trợ của Trợ giảng/KTV. */
App.addI18n({
  vi: {
    'tc.sub': 'Giờ chuẩn quy đổi từ thời khoá biểu, hướng dẫn luận văn/đồ án; định mức theo học hàm, học vị và chức vụ kiêm nhiệm.',
    'tc.year': 'Năm học', 'tc.term': 'Học kỳ', 'tc.term.all': 'Cả năm', 'tc.term.1': 'HK1', 'tc.term.2': 'HK2', 'tc.term.3': 'HK hè',
    'tc.y.closed': 'đã kết thúc', 'tc.y.open': 'đang diễn ra', 'tc.inprog': 'Năm học {y} đang diễn ra – số liệu tạm tính theo thời khoá biểu đã xếp (HK1), chưa dùng để đối soát.',
    'tc.tab.me': 'Cá nhân', 'tc.tab.dept': 'Bộ môn', 'tc.tab.fac': 'Toàn Khoa', 'tc.tab.school': 'Toàn Trường',
    'tc.k.total': 'Tổng giờ chuẩn', 'tc.k.quota': 'Định mức phải thực hiện', 'tc.k.pct': 'Mức hoàn thành', 'tc.k.ot': 'Giờ vượt định mức',
    'tc.k.ugpg': 'ĐH {a} · SĐH {b}', 'tc.k.otcap': 'tối đa 200 tiết/năm (TT 21/2025)', 'tc.k.base': 'chuẩn {b} × {p}%',
    'tc.ug': 'Đại học', 'tc.pg': 'Sau đại học', 'tc.secs': 'Lớp học phần', 'tc.sups': 'Hướng dẫn luận văn, đồ án, thực tập',
    'tc.c.code': 'Mã HP', 'tc.c.name': 'Học phần', 'tc.c.term': 'HK', 'tc.c.type': 'Loại', 'tc.c.cr': 'TC', 'tc.c.size': 'Sĩ số', 'tc.c.grp': 'Nhóm',
    'tc.c.per': 'Số tiết', 'tc.c.hours': 'Giờ chuẩn', 'tc.c.kind': 'Loại hướng dẫn', 'tc.c.lvl': 'Bậc', 'tc.c.st': 'Người học', 'tc.c.role': 'Vai trò',
    'tc.t.LT': 'Lý thuyết', 'tc.t.TN': 'Thí nghiệm', 'tc.sum': 'Cộng: {h} giờ chuẩn', 'tc.supterm': 'Hướng dẫn luận văn/đồ án được tính theo năm học – chọn "Cả năm" để xem.',
    'tc.sup.KLTN': 'Khoá luận tốt nghiệp ĐH', 'tc.sup.DA': 'Đồ án ĐH', 'tc.sup.TT': 'Thực tập/bài tập lớn', 'tc.sup.LVThS': 'Luận văn thạc sĩ',
    'tc.role.main': 'HD chính', 'tc.role.co': 'HD phụ (chia đôi)',
    'tc.pg.nofeat': 'Vai trò đang hoạt động không có chức năng "Khối lượng giảng dạy – Sau đại học".',
    'tc.pg.ths': 'Giảng viên có học vị Thạc sĩ không có khối lượng giảng dạy sau đại học: không được giảng lý thuyết CTĐT thạc sĩ (trừ ngoại ngữ không chuyên, Triết học, hướng dẫn thực hành/thực tập), không được là người hướng dẫn chính luận văn ThS, chỉ được đồng hướng dẫn tối đa 2 học viên CTĐT ứng dụng.',
    'tc.norm': 'Định mức năm học', 'tc.n.title': 'Chức danh tính định mức', 'tc.n.base': 'Định mức giờ chuẩn giảng dạy', 'tc.n.red': 'Giảm định mức do chức vụ',
    'tc.n.nored': 'Không giữ chức vụ được giảm định mức', 'tc.n.min': 'dạy tối thiểu {p}%', 'tc.n.multi': 'Kiêm nhiều chức vụ: áp dụng mức định mức thấp nhất.',
    'tc.n.quota': 'Định mức phải thực hiện', 'tc.n.res': 'Định mức NCKH', 'tc.n.other': 'Nhiệm vụ khác (NV3)', 'tc.n.year': 'Quỹ thời gian năm học',
    'tc.n.yearv': '44 tuần = 1.760 giờ hành chính', 'tc.n.conv': '1 giờ chuẩn giảng dạy = 3 giờ hành chính', 'tc.n.check': '3 × {a} + 3 × {b} + {c} = {s} giờ hành chính',
    'tc.n.direct': 'Giờ giảng trực tiếp trên lớp/trực tuyến tối thiểu 50% định mức', 'tc.h': 'giờ chuẩn', 'tc.hadm': 'giờ hành chính', 'tc.hrs': 'giờ NCKH',
    'tc.st.ban_hanh': 'Ban hành', 'tc.st.du_thao': 'Dự thảo', 'tc.st.gia_dinh': 'Giả định', 'tc.st.suy_ra': 'Suy ra',
    'tc.formula': 'Cách tính giờ chuẩn', 'tc.f.h': 'Công thức quy đổi giờ chuẩn giảng dạy', 'tc.f.main': '[Giờ chuẩn] = [KLcs] × [Hcs]; [KL tăng thêm] = [KLcs] × [Hlđ]; [KL năng suất] = [KLcs] × [Hns]. Hlđ, Hns mặc định 0. Giờ làm tròn 0,1; hệ số làm tròn 0,0001. KL tăng thêm được cộng vào giờ xét định mức; KL năng suất chỉ dùng tính tiền vượt giờ.',
    'tc.f.act': 'Khối lượng cơ sở (KLcs) và hệ số Hcs theo hoạt động', 'tc.f.size': 'Hệ số lớp đông (Hlđ) và năng suất (Hns) theo sĩ số n', 'tc.f.range': 'Sĩ số',
    'tc.f.lec': 'Giảng lý thuyết, bài tập, thực hành tại lớp', 'tc.f.lab': 'Thí nghiệm, thực tập tại PTN/xưởng', 'tc.f.cap': 'Tổng hệ số quy đổi lớp đông không quá 1,5 (TT 20/2020 Điều 6.1.a) – ứng dụng giới hạn Hcs + Hlđ + Hns ≤ 1,5 × Hcs.',
    'tc.f.gt120': 'Lưu ý: theo văn bản, khi n > 120 thì Hlđ = 0 và Hns = (n − 120)/160 (không cộng dồn) – cần P.TCCB xác nhận.',
    'tc.f.tc': 'Quy ước của ứng dụng: 1 TC lý thuyết = 15 tiết; 1 TC thí nghiệm = 30 tiết; KLcs thí nghiệm = số tiết × 0,5.', 'tc.f.ex': 'Ví dụ từ lớp của bạn',
    'tc.f.unit': 'Đơn vị', 'tc.f.kl': 'KLcs', 'tc.f.act.n': 'Hoạt động',
    'tc.ot': 'Ước tính tiền dạy thêm giờ (TT 21/2025)', 'tc.ot.f': 'Tiền lương 01 tiết = [Tổng lương 12 tháng / Định mức tiết] × [Định mức theo giờ hành chính / 1.760] × [44/52] = Lương 12 tháng × 3 / 1.760 × 44/52. Tiền 01 tiết dạy thêm = 150% × tiền 01 tiết. Tối đa 200 tiết dạy thêm/năm.',
    'tc.ot.per': 'Số tiết dạy thêm (sau giới hạn)', 'tc.ot.raw': 'Vượt định mức thực tế: {h} giờ chuẩn', 'tc.ot.hidden': 'Số tiền là dữ liệu lương – cần xác thực lại MFA để xem (ghi nhật ký).',
    'tc.ot.show': 'Xem ước tính (MFA)', 'tc.ot.hs': 'Hệ số lương', 'tc.ot.lcs': 'Lương cơ sở (đ/tháng)', 'tc.ot.y12': 'Tổng lương 12 tháng (giả định)',
    'tc.ot.p1': 'Tiền lương 01 tiết', 'tc.ot.p15': 'Tiền 01 tiết dạy thêm (150%)', 'tc.ot.sum': 'Tiền dạy thêm giờ ước tính',
    'tc.ot.assume': 'GIẢ ĐỊNH: tổng lương = hệ số lương × lương cơ sở 2.340.000 đ × 12 tháng, chưa gồm phụ cấp chức vụ và phụ cấp khác – sẽ thay bằng dữ liệu bảng lương (P.KHTC) khi tích hợp.',
    'tc.ot.note': 'Phần vượt giờ chỉ được thanh toán sau khi khấu trừ phần chưa hoàn thành NCKH/nhiệm vụ khác (QĐ 593 Điều 15.5.a); nhiệm vụ đã nhận thù lao từ nguồn khác không được quy đổi (TT 21 Điều 3.5). Chi trả sau khi kết thúc năm học.',
    'tc.ot.none': 'Không có giờ vượt định mức trong năm học này.', 'tc.ot.reason': 'Xem ước tính tiền dạy thêm giờ (dữ liệu lương)', 'tc.ot.prov': 'tạm tính',
    'tc.ot.ocr': 'Công thức TT 21 Điều 5.1.b được dựng lại từ bản OCR – cần đối chiếu bản gốc.',
    'tc.rec': 'Đối soát cuối năm', 'tc.rec.btn': 'Xác nhận đối soát cuối năm', 'tc.rec.desc': 'Xác nhận bảng khối lượng năm học {y} theo quy trình QT-ĐHQT-GD-04 (cửa sổ 5 ngày làm việc; có thể khiếu nại từng dòng kèm minh chứng).',
    'tc.rec.notyet': 'Năm học chưa kết thúc – đối soát mở vào tháng 9 (QĐ 593 Điều 19: tổng kết vượt/thiếu định mức tháng 9, truy lĩnh/truy thu từ tháng 10).',
    'tc.rec.done': 'Đã gửi hồ sơ {id}', 'tc.rec.step': 'Bước hiện tại: {s}', 'tc.rec.open': 'Mở hồ sơ', 'tc.rec.dispute': 'Khiếu nại/ghi chú (nếu có)',
    'tc.rec.consent': 'Tôi đã kiểm tra và xác nhận bảng khối lượng nêu trên.', 'tc.rec.need': 'Vui lòng đánh dấu xác nhận.', 'tc.rec.mfa': 'Xác nhận đối soát khối lượng năm học {y}',
    'tc.rec.ok': 'Đã gửi xác nhận đối soát – TBM/Trưởng Khoa sẽ duyệt.', 'tc.rec.local': 'Lưu cục bộ (chưa kết nối mô-đun quy trình).', 'tc.rec.roles': 'Chức vụ kiêm nhiệm',
    'tc.rs.nhap': 'Nháp', 'tc.rs.dang_xu_ly': 'Đang xử lý', 'tc.rs.tra_lai': 'Trả lại', 'tc.rs.hoan_thanh': 'Hoàn thành', 'tc.rs.huy': 'Đã huỷ',
    'tc.m.h': 'Khối lượng giảng dạy – {s}', 'tc.m.n': 'Giảng viên', 'tc.m.met': 'Đạt định mức', 'tc.m.under': 'Dưới 80% định mức', 'tc.m.ot': 'Tổng giờ vượt',
    'tc.m.chart': 'Giờ chuẩn so với định mức (vạch đỏ = định mức)', 'tc.m.dept': 'Bộ môn', 'tc.m.alld': 'Tất cả bộ môn', 'tc.m.title': 'Định mức',
    'tc.m.ok': 'Đạt', 'tc.m.near': 'Gần đạt', 'tc.m.low': 'Thiếu giờ', 'tc.m.over': 'Vượt trần 200', 'tc.m.click': 'Bấm vào một dòng để xem chi tiết (thao tác được ghi nhật ký).',
    'tc.m.csv': 'Xuất bảng khối lượng đơn vị (dữ liệu cá nhân)', 'tc.m.exported': 'Đã xuất CSV và ghi nhật ký.', 'tc.m.detail': 'Chi tiết khối lượng – {n}',
    'tc.tg.h': 'Khối lượng hỗ trợ giảng dạy – Trợ giảng', 'tc.tg.info': 'Trợ giảng không phụ trách lớp học phần riêng. Khối lượng được tính bằng số tiết hỗ trợ các lớp thí nghiệm/thực hành của Bộ môn, so với định mức 180 tiết/năm.',
    'tc.tg.rule': 'Phân công (giả định): lớp thí nghiệm có sĩ số vượt sức chứa PTN ({c} chỗ) phải tách nhóm và được phân công Trợ giảng hỗ trợ toàn bộ số tiết.',
    'tc.tg.secs': 'Lớp thí nghiệm của Bộ môn', 'tc.tg.asg': 'Lớp được phân công', 'tc.tg.per': 'Tiết hỗ trợ', 'tc.tg.norm': 'Định mức Trợ giảng',
    'tc.tg.lect': 'GV phụ trách', 'tc.tg.yes': 'Hỗ trợ', 'tc.tg.no': 'Không', 'tc.tg.unit': 'tiết hỗ trợ giảng dạy',
    'tc.ktv.h': 'Hỗ trợ thí nghiệm – Kỹ thuật viên', 'tc.ktv.info': 'Kỹ thuật viên không có định mức giờ chuẩn giảng dạy; làm việc theo chế độ hành chính (1.760 giờ/năm). Bảng dưới đây ghi nhận giờ chuẩn bị, vận hành thiết bị cho các buổi thí nghiệm tại PTN được giao để minh chứng khối lượng.',
    'tc.ktv.rule': 'Giả định: lớp thí nghiệm của Bộ môn được xếp luân phiên vào các PTN do KTV phụ trách; 1 buổi = 3 tiết; giờ hỗ trợ = số tiết × 50 phút.',
    'tc.ktv.labs': 'PTN được giao', 'tc.ktv.ses': 'Buổi thí nghiệm', 'tc.ktv.hrs': 'Giờ hỗ trợ', 'tc.ktv.share': 'Tỷ trọng trên 1.760 giờ', 'tc.ktv.lab': 'PTN',
    'tc.ktv.bylab': 'Giờ hỗ trợ theo PTN', 'tc.ktv.none': 'Bạn chưa được giao PTN nào.', 'tc.ktv.src': 'KTV không có định mức giờ chuẩn – giả định của ứng dụng',
  },
  en: {
    'tc.sub': 'Standard hours converted from the timetable and thesis/project supervision; quota by academic title, degree and concurrent positions.',
    'tc.year': 'Academic year', 'tc.term': 'Semester', 'tc.term.all': 'Whole year', 'tc.term.1': 'Sem 1', 'tc.term.2': 'Sem 2', 'tc.term.3': 'Summer',
    'tc.y.closed': 'closed', 'tc.y.open': 'in progress', 'tc.inprog': 'Academic year {y} is in progress – provisional figures from the scheduled timetable (Sem 1); not used for reconciliation.',
    'tc.tab.me': 'Personal', 'tc.tab.dept': 'Department', 'tc.tab.fac': 'Whole faculty', 'tc.tab.school': 'Whole university',
    'tc.k.total': 'Total standard hours', 'tc.k.quota': 'Required quota', 'tc.k.pct': 'Completion', 'tc.k.ot': 'Hours above quota',
    'tc.k.ugpg': 'UG {a} · PG {b}', 'tc.k.otcap': 'max 200 periods/year (Circular 21/2025)', 'tc.k.base': 'base {b} × {p}%',
    'tc.ug': 'Undergraduate', 'tc.pg': 'Postgraduate', 'tc.secs': 'Course sections', 'tc.sups': 'Thesis, project and internship supervision',
    'tc.c.code': 'Code', 'tc.c.name': 'Course', 'tc.c.term': 'Sem', 'tc.c.type': 'Type', 'tc.c.cr': 'Cr', 'tc.c.size': 'Size', 'tc.c.grp': 'Group',
    'tc.c.per': 'Periods', 'tc.c.hours': 'Std hours', 'tc.c.kind': 'Supervision type', 'tc.c.lvl': 'Level', 'tc.c.st': 'Student', 'tc.c.role': 'Role',
    'tc.t.LT': 'Lecture', 'tc.t.TN': 'Lab', 'tc.sum': 'Subtotal: {h} standard hours', 'tc.supterm': 'Supervision is counted per academic year – choose "Whole year" to see it.',
    'tc.sup.KLTN': 'UG graduation thesis', 'tc.sup.DA': 'UG project', 'tc.sup.TT': 'Internship / course project', 'tc.sup.LVThS': 'Master thesis',
    'tc.role.main': 'Main supervisor', 'tc.role.co': 'Co-supervisor (half)',
    'tc.pg.nofeat': 'The active role does not have the "Teaching workload – Postgraduate" feature.',
    'tc.pg.ths': 'Lecturers holding a master\'s degree have no postgraduate workload: they may not teach theory courses in master programmes (except non-major languages, Philosophy, practice/internship guidance), may not be the main thesis supervisor and may co-supervise at most 2 applied-track students.',
    'tc.norm': 'Annual quota', 'tc.n.title': 'Quota category', 'tc.n.base': 'Teaching quota (standard hours)', 'tc.n.red': 'Reduction for positions',
    'tc.n.nored': 'No position with a quota reduction', 'tc.n.min': 'teach at least {p}%', 'tc.n.multi': 'Several positions: the lowest quota applies.',
    'tc.n.quota': 'Required quota', 'tc.n.res': 'Research quota', 'tc.n.other': 'Other duties (NV3)', 'tc.n.year': 'Annual working time',
    'tc.n.yearv': '44 weeks = 1,760 office hours', 'tc.n.conv': '1 standard teaching hour = 3 office hours', 'tc.n.check': '3 × {a} + 3 × {b} + {c} = {s} office hours',
    'tc.n.direct': 'Direct in-class/online teaching at least 50% of the quota', 'tc.h': 'std hours', 'tc.hadm': 'office hours', 'tc.hrs': 'research hours',
    'tc.st.ban_hanh': 'In force', 'tc.st.du_thao': 'Draft', 'tc.st.gia_dinh': 'Assumption', 'tc.st.suy_ra': 'Derived',
    'tc.formula': 'How hours are computed', 'tc.f.h': 'Standard teaching hour formula', 'tc.f.main': '[Standard hours] = [KLcs] × [Hcs]; [Extra load] = [KLcs] × [Hlđ]; [Productivity load] = [KLcs] × [Hns]. Hlđ, Hns default to 0. Hours rounded to 0.1; coefficients to 0.0001. Extra load counts towards the quota; productivity load is only used for overtime pay.',
    'tc.f.act': 'Base load (KLcs) and Hcs by activity', 'tc.f.size': 'Large-class (Hlđ) and productivity (Hns) coefficients by class size n', 'tc.f.range': 'Class size',
    'tc.f.lec': 'Lectures, tutorials, in-class practice', 'tc.f.lab': 'Laboratory / workshop practice', 'tc.f.cap': 'Total large-class coefficient may not exceed 1.5 (Circular 20/2020 Art. 6.1.a) – the app caps Hcs + Hlđ + Hns at 1.5 × Hcs.',
    'tc.f.gt120': 'Note: per the text, when n > 120 Hlđ = 0 and Hns = (n − 120)/160 (not cumulative) – to be confirmed by the Personnel Office.',
    'tc.f.tc': 'App convention: 1 lecture credit = 15 periods; 1 lab credit = 30 periods; lab KLcs = periods × 0.5.', 'tc.f.ex': 'Example from your sections',
    'tc.f.unit': 'Unit', 'tc.f.kl': 'KLcs', 'tc.f.act.n': 'Activity',
    'tc.ot': 'Overtime pay estimate (Circular 21/2025)', 'tc.ot.f': 'Pay per period = [12-month salary / quota periods] × [quota in office hours / 1,760] × [44/52] = 12-month salary × 3 / 1,760 × 44/52. Overtime period = 150% × pay per period. At most 200 overtime periods per year.',
    'tc.ot.per': 'Overtime periods (after cap)', 'tc.ot.raw': 'Actual excess: {h} standard hours', 'tc.ot.hidden': 'Amounts are salary data – MFA re-authentication is required to view them (logged).',
    'tc.ot.show': 'Show estimate (MFA)', 'tc.ot.hs': 'Salary coefficient', 'tc.ot.lcs': 'Base salary (VND/month)', 'tc.ot.y12': '12-month salary (assumed)',
    'tc.ot.p1': 'Pay per period', 'tc.ot.p15': 'Pay per overtime period (150%)', 'tc.ot.sum': 'Estimated overtime pay',
    'tc.ot.assume': 'ASSUMPTION: salary = coefficient × base salary 2,340,000 VND × 12 months, excluding position and other allowances – to be replaced by payroll data (Finance Office) once integrated.',
    'tc.ot.note': 'Overtime is paid only after deducting unmet research/other duties (Decision 593 Art. 15.5.a); tasks already paid from other sources are not converted (Circular 21 Art. 3.5). Paid after the academic year ends.',
    'tc.ot.none': 'No hours above quota this academic year.', 'tc.ot.reason': 'View overtime pay estimate (salary data)', 'tc.ot.prov': 'provisional',
    'tc.ot.ocr': 'The Circular 21 Art. 5.1.b formula was rebuilt from an OCR copy – to be checked against the original.',
    'tc.rec': 'Year-end reconciliation', 'tc.rec.btn': 'Confirm year-end reconciliation', 'tc.rec.desc': 'Confirm the {y} workload statement via process QT-ĐHQT-GD-04 (5-working-day window; each line may be disputed with evidence).',
    'tc.rec.notyet': 'The year is not over – reconciliation opens in September (Decision 593 Art. 19: settlement in September, payment/recovery from October).',
    'tc.rec.done': 'Request {id} submitted', 'tc.rec.step': 'Current step: {s}', 'tc.rec.open': 'Open request', 'tc.rec.dispute': 'Dispute / notes (optional)',
    'tc.rec.consent': 'I have checked and confirm the workload statement above.', 'tc.rec.need': 'Please tick the confirmation box.', 'tc.rec.mfa': 'Confirm workload reconciliation for {y}',
    'tc.rec.ok': 'Reconciliation confirmed – the Head of Department/Dean will review it.', 'tc.rec.local': 'Stored locally (process module not connected).', 'tc.rec.roles': 'Concurrent positions',
    'tc.rs.nhap': 'Draft', 'tc.rs.dang_xu_ly': 'In progress', 'tc.rs.tra_lai': 'Returned', 'tc.rs.hoan_thanh': 'Completed', 'tc.rs.huy': 'Cancelled',
    'tc.m.h': 'Teaching workload – {s}', 'tc.m.n': 'Lecturers', 'tc.m.met': 'Quota met', 'tc.m.under': 'Below 80% of quota', 'tc.m.ot': 'Total hours above quota',
    'tc.m.chart': 'Standard hours vs quota (red mark = quota)', 'tc.m.dept': 'Department', 'tc.m.alld': 'All departments', 'tc.m.title': 'Quota code',
    'tc.m.ok': 'Met', 'tc.m.near': 'Nearly met', 'tc.m.low': 'Under-loaded', 'tc.m.over': 'Over 200 cap', 'tc.m.click': 'Click a row for details (the view is logged).',
    'tc.m.csv': 'Export unit workload table (personal data)', 'tc.m.exported': 'CSV exported and logged.', 'tc.m.detail': 'Workload details – {n}',
    'tc.tg.h': 'Teaching support workload – Teaching assistant', 'tc.tg.info': 'Teaching assistants do not own course sections. Their workload is the number of periods supporting the department\'s lab/practice sections, against a quota of 180 periods per year.',
    'tc.tg.rule': 'Assignment (assumption): lab sections larger than the lab capacity ({c} seats) are split and the teaching assistant supports all their periods.',
    'tc.tg.secs': 'Department lab sections', 'tc.tg.asg': 'Assigned sections', 'tc.tg.per': 'Support periods', 'tc.tg.norm': 'TA quota',
    'tc.tg.lect': 'Lecturer', 'tc.tg.yes': 'Support', 'tc.tg.no': 'No', 'tc.tg.unit': 'teaching-support periods',
    'tc.ktv.h': 'Lab support – Technician', 'tc.ktv.info': 'Technicians have no teaching quota; they work office hours (1,760 hours/year). The table records preparation and equipment operation for lab sessions in your labs as evidence of workload.',
    'tc.ktv.rule': 'Assumption: department lab sections rotate across the labs you run; 1 session = 3 periods; support hours = periods × 50 minutes.',
    'tc.ktv.labs': 'Assigned labs', 'tc.ktv.ses': 'Lab sessions', 'tc.ktv.hrs': 'Support hours', 'tc.ktv.share': 'Share of 1,760 hours', 'tc.ktv.lab': 'Lab',
    'tc.ktv.bylab': 'Support hours by lab', 'tc.ktv.none': 'No lab is assigned to you.', 'tc.ktv.src': 'technicians have no teaching quota – app assumption',
  },
});
(function () {
  'use strict';
  const t = App.t, esc = App.esc, D = App.D, C = App.calc;
  const R = D.rules || {}, T = R.teaching || {};
  const YEARS = ['2025-2026', '2026-2027'];
  const LCS = 2340000;
  const S = { year: '2025-2026', term: 'all', tab: 'me', lvl: 'DH', dept: 'all', otUntil: 0, hs: null, lcs: LCS };
  const LECT = ['TK', 'PTK', 'TBM', 'GV'];
  const n1 = (x) => App.fmtNum(x, 1);
  const vnd = (x) => App.fmtNum(Math.round(x), 0) + (App.lang === 'vi' ? ' đ' : ' VND');
  const yl = (y) => y.replace('-', '–');

  /* --- căn cứ & trạng thái văn bản --- */
  function stKey(st) { st = String(st || ''); return /gia_dinh/.test(st) ? 'gia_dinh' : /du_thao/.test(st) ? 'du_thao' : /suy_ra/.test(st) ? 'suy_ra' : 'ban_hanh'; }
  function stBadge(st) { const k = stKey(st); return App.ui.badge(t('tc.st.' + k), { ban_hanh: 'ok', du_thao: 'warn', gia_dinh: 'bad', suy_ra: 'info' }[k]); }
  function docsOf(s) { const so = R.sources || {}; return Object.keys(so).filter((k) => String(s || '').indexOf(k) >= 0).map((k) => k + ': ' + so[k].doc).join('\n'); }
  function src(source, st) { return `<div class="small muted" style="margin-top:2px">${t('source')}: <span title="${esc(docsOf(source))}" style="border-bottom:1px dotted #999">${esc(source)}</span> ${st ? stBadge(st) : ''}</div>`; }
  const nb = (code) => (T.norm_by_title || []).find((x) => x.code === code) || {};
  const conv = (k) => (T.unit_conversion || []).find((x) => x.key === k) || {};
  const cons = (k) => (T.teaching_constraints || []).find((x) => x.key === k) || {};
  const RED_EN = { 'Trưởng Khoa': 'Dean', 'Phó Trưởng Khoa': 'Vice Dean', 'Trưởng Bộ môn': 'Head of Department', 'Cố vấn học tập': 'Academic advisor', 'Phụ trách PTN': 'Lab head' };
  const redLabel = (l) => (App.lang === 'en' ? RED_EN[l] || l : l);
  const reqStatus = (r) => App.ui.badge(t('tc.rs.' + r.trang_thai), r.trang_thai === 'hoan_thanh' ? 'ok' : r.trang_thai === 'tra_lai' ? 'bad' : r.trang_thai === 'nhap' ? '' : 'warn');
  const termOK = (sec) => S.term === 'all' || String(sec.hoc_ky) === S.term;
  const termLbl = (k) => (k === 3 ? t('tc.term.3') : t('tc.term.' + k));
  function csv(name, rows) {
    const s = '﻿' + rows.map((r) => r.map((c) => '"' + String(c == null ? '' : c).replace(/"/g, '""') + '"').join(',')).join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([s], { type: 'text/csv;charset=utf-8' })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* --- bảng lớp học phần & hướng dẫn --- */
  function secTable(secs) {
    return App.ui.table([
      { t: t('tc.c.code'), f: (s) => `<b>${esc(s.ma_hp)}</b>` },
      { t: t('tc.c.name'), f: (s) => `<span style="display:inline-block;min-width:150px">${esc(App.lang === 'en' ? s.ten_en : s.ten_vi)}</span>` },
      { t: t('tc.c.term'), f: (s) => termLbl(s.hoc_ky), cls: 'c' },
      { t: t('tc.c.type'), f: (s) => App.ui.badge(t('tc.t.' + s.loai), s.loai === 'TN' ? 'info' : 'navy') },
      { t: t('tc.c.cr'), k: 'tc', cls: 'num' }, { t: t('tc.c.size'), k: 'si_so', cls: 'num' },
      { t: t('tc.c.per'), k: 'periods', cls: 'num' }, { t: 'KLcs', f: (s) => n1(s.KL), cls: 'num' },
      { t: 'Hcs', f: (s) => App.fmtNum(s.Hcs, 2), cls: 'num' }, { t: 'Hlđ', f: (s) => App.fmtNum(s.Hld, 4), cls: 'num' }, { t: 'Hns', f: (s) => App.fmtNum(s.Hns, 4), cls: 'num' },
      { t: t('tc.c.hours'), f: (s) => `<b>${n1(s.hours)}</b>`, cls: 'num' },
    ], secs);
  }
  function supTable(sups) {
    return App.ui.table([
      { t: t('tc.c.kind'), f: (s) => esc(t('tc.sup.' + s.loai)) }, { t: t('tc.c.st'), f: (s) => esc(App.anon ? App.pseudo(s.sv, 'SV') : s.sv) },
      { t: t('tc.c.role'), f: (s) => esc(s.vai_tro === 'HD phụ' ? t('tc.role.co') : t('tc.role.main')) },
      { t: 'KLcs', k: 'credits', cls: 'num' }, { t: 'Hcs', f: (s) => App.fmtNum(s.Hcs, 2), cls: 'num' }, { t: t('tc.c.hours'), f: (s) => `<b>${n1(s.hours)}</b>`, cls: 'num' },
    ], sups);
  }
  function levelBody(el, s, y, lvl) {
    if (lvl === 'SDH') {
      if (!App.acl.has('wl_pg')) { el.innerHTML = `<div class="notice warn">${t('tc.pg.nofeat')}</div>`; return; }
      if (!y.norm.postgrad) { el.innerHTML = `<div class="notice warn">${t('tc.pg.ths')}${src('THS108 Điều 27.2, Điều 16.2.a, 16.3, 16.5', 'ban_hanh')}</div>`; return; }
    }
    const secs = y.secs.filter((x) => x.bac === lvl && termOK(x));
    const sups = y.sups.filter((x) => x.bac === lvl);
    const hs = secs.reduce((a, b) => a + b.hours, 0), hp = sups.reduce((a, b) => a + b.hours, 0);
    el.innerHTML = `<div class="card-h"><h3>${t('tc.secs')}</h3><span class="chip">${t('tc.sum', { h: n1(hs) })}</span></div>${secTable(secs)}
      <div class="card-h" style="margin-top:14px"><h3>${t('tc.sups')}</h3>${S.term === 'all' ? `<span class="chip">${t('tc.sum', { h: n1(hp) })}</span>` : ''}</div>
      ${S.term === 'all' ? supTable(sups) : `<div class="muted small">${t('tc.supterm')}</div>`}`;
  }

  /* --- thẻ định mức --- */
  function normCard(s, y) {
    const n = y.norm, it = nb(n.code), red = T.reductions || {};
    const yr = T.annual_work_hours || {}, cv = conv('teach_hour_to_admin'), dm = cons('direct_min');
    const resIt = ((R.research || {}).norm_by_title || []).find((x) => x.code === n.code);
    const pct = y.pct;
    return `<div class="card"><div class="card-h"><h3>${t('tc.norm')} ${esc(yl(S.year))}</h3><button class="btn ghost sm" data-formula>${t('tc.formula')}</button></div>
      <div class="fields" style="grid-template-columns:1fr">
        <div class="fld"><div class="k">${t('tc.n.title')}</div><div class="v">${esc(App.L(it, 'title') || n.code)} <span class="chip">${esc(n.code)}</span></div></div>
        <div class="fld"><div class="k">${t('tc.n.base')}</div><div class="v">${n1(n.base)} ${t('tc.h')}</div>${src(String(it.source || '').split(';')[0].replace(/^teach:\s*/, ''), 'du_thao')}</div>
        <div class="fld"><div class="k">${t('tc.n.red')}</div><div class="v">${n.reductions.length ? n.reductions.map((r) => `<div>${esc(redLabel(r.label))}: ${t('tc.n.min', { p: r.pct })}${src(r.source, 'ban_hanh')}</div>`).join('') : `<span class="muted">${t('tc.n.nored')}</span>`}</div>
          ${n.reductions.length > 1 ? `<div class="small">${t('tc.n.multi')}</div>${src('TT20 Điều 4.3; DT_CDLV2026 Điều 8.d', 'ban_hanh')}` : ''}</div>
        <div class="fld"><div class="k">${t('tc.n.quota')}</div><div class="v" style="font-size:1.15rem">${n1(n.teach)} ${t('tc.h')} <span class="muted small">(${t('tc.k.base', { b: n1(n.base), p: n.minPct })})</span></div>
          ${App.ui.progress(pct, pct >= 100 ? 'ok' : pct >= 80 ? 'warn' : 'bad')}<div class="small muted">${n1(y.total)} / ${n1(n.teach)} = ${App.fmtNum(pct, 0)}%</div>${src(red.source, 'ban_hanh')}</div>
        <div class="fld"><div class="k">${t('tc.n.res')}</div><div class="v">${n1(n.research)} ${t('tc.hrs')}</div>${src(resIt ? resIt.source : 'DT_CDLV2026 Điều 6.b', resIt ? resIt.status : 'gia_dinh')}</div>
        <div class="fld"><div class="k">${t('tc.n.other')}</div><div class="v">${n1(n.other)} ${t('tc.hadm')}</div>${src('1760 − 3 × ' + n.base + ' − 3 × ' + n.research, 'suy_ra')}</div>
        <div class="fld"><div class="k">${t('tc.n.year')}</div><div class="v">${t('tc.n.yearv')}</div>${src(yr.source, yr.status)}
          <div class="small" style="margin-top:6px">${t('tc.n.conv')}</div>${src(cv.source, cv.status)}
          <div class="small muted">${t('tc.n.check', { a: n1(n.base), b: n1(n.research), c: n1(n.other), s: App.fmtNum(3 * n.base + 3 * n.research + n.other, 0) })}</div></div>
        <div class="fld"><div class="k">${esc(t('tc.n.direct'))}</div>${src(dm.source, dm.status)}</div>
      </div></div>`;
  }

  /* --- tiền dạy thêm giờ (TT 21/2025) --- */
  function otCard(s, y) {
    const ot = T.overtime_tt21 || {};
    const raw = Math.max(0, y.total - y.norm.teach);
    const shown = S.otUntil > Date.now();
    let body;
    if (!y.overtime) body = `<div class="muted">${t('tc.ot.none')}</div>`;
    else if (!shown) body = `<div class="notice" style="margin:0 0 8px">${t('tc.ot.hidden')}</div><div class="row"><b style="letter-spacing:.1em;font-size:1.2rem">•••••• ${App.lang === 'vi' ? 'đ' : 'VND'}</b><button class="btn cyan sm" data-otshow>${t('tc.ot.show')}</button></div>`;
    else {
      const hs = S.hs != null ? S.hs : Number(s.he_so_luong) || 0;
      const y12 = hs * S.lcs * 12;
      const p1 = y12 * 3 / 1760 * 44 / 52, p15 = p1 * (ot.overtime_rate || 1.5), sum = p15 * y.overtime;
      body = `<div class="row"><label>${t('tc.ot.hs')}<input type="number" step="0.01" min="0" data-hs value="${hs}" style="width:110px"></label>
          <label>${t('tc.ot.lcs')}<input type="number" step="10000" min="0" data-lcs value="${S.lcs}" style="width:150px"></label></div>
        <div class="fields" style="grid-template-columns:1fr 1fr;margin-top:6px">
          <div class="fld"><div class="k">${t('tc.ot.y12')} ${stBadge('gia_dinh')}</div><div class="v">${vnd(y12)}</div></div>
          <div class="fld"><div class="k">${t('tc.ot.p1')}</div><div class="v">${vnd(p1)}</div></div>
          <div class="fld"><div class="k">${t('tc.ot.p15')}</div><div class="v">${vnd(p15)}</div></div>
          <div class="fld"><div class="k">${t('tc.ot.sum')}${S.year !== YEARS[0] ? ' (' + t('tc.ot.prov') + ')' : ''}</div><div class="v" style="font-size:1.2rem;color:var(--navy)">${vnd(sum)}</div></div></div>
        <div class="notice warn small" style="margin:8px 0 0">${t('tc.ot.assume')}</div>`;
    }
    return `<div class="card"><div class="card-h"><h3>${t('tc.ot')}</h3>${App.ui.cls('CN')}</div>
      <div class="small">${esc(t('tc.ot.f'))}</div>${src(ot.source, ot.status)}<div class="small muted">${t('tc.ot.ocr')}</div>
      <div class="fields" style="grid-template-columns:1fr;margin:8px 0"><div class="fld"><div class="k">${t('tc.ot.per')}</div><div class="v" style="font-size:1.15rem">${n1(y.overtime)}</div>
        <div class="small muted">${t('tc.ot.raw', { h: n1(raw) })} · ${t('tc.k.otcap')}</div></div></div>
      ${body}<div class="small muted" style="margin-top:8px">${t('tc.ot.note')}</div>${src('QD593 Điều 15.5.a; TT21 Điều 3.5, 3.7', 'ban_hanh')}</div>`;
  }

  /* --- đối soát cuối năm (QT-ĐHQT-GD-04) --- */
  function myRec(ma_cb, year) {
    return App.requests().filter((r) => r.ma_qt === 'QT-ĐHQT-GD-04' && r.ma_cb === ma_cb &&
      ((r.du_lieu || {}).academic_year ? r.du_lieu.academic_year === year : year === '2025-2026' && String(r.tao_luc) >= '2026-07')).pop();
  }
  function recCard(s) {
    const closed = S.year === YEARS[0];
    const r = myRec(s.ma_cb, S.year);
    const p = App.process('QT-ĐHQT-GD-04') || {};
    let body;
    if (r) {
      const st = (p.tobe_steps || [])[r.buoc_hien_tai];
      body = `<div class="row between"><b>${t('tc.rec.done', { id: esc(r.id) })}</b>${reqStatus(r)}</div>
        ${st && r.trang_thai !== 'hoan_thanh' ? `<div class="small muted">${t('tc.rec.step', { s: esc(App.L(st)) })}</div>` : ''}
        <div class="small muted">${App.fmtDT(r.tao_luc)}${r.local ? ' · ' + t('tc.rec.local') : ''}</div>
        ${App.acl.has('eprocess') ? `<a class="btn ghost sm" style="margin-top:8px" href="#/processes/hs/${encodeURIComponent(r.id)}">${t('tc.rec.open')}</a>` : ''}`;
    } else if (!closed) body = `<div class="muted small">${t('tc.rec.notyet')}</div>${src('QD593 Điều 19.1-19.2', 'ban_hanh')}`;
    else body = `<p class="small">${t('tc.rec.desc', { y: yl(S.year) })}</p><button class="btn" data-rec>${t('tc.rec.btn')}</button>`;
    return `<div class="card"><div class="card-h"><h3>${t('tc.rec')}</h3><span class="chip">QT-ĐHQT-GD-04</span></div>${body}</div>`;
  }
  function openRec(s, y, rerender) {
    const rs = C.yearResearch(s.ma_cb, S.year);
    const m = App.ui.modal(`<h3>${t('tc.rec.btn')} – ${esc(yl(S.year))}</h3>
      <div class="fields" style="grid-template-columns:1fr 1fr">
        <div class="fld"><div class="k">${t('tc.n.quota')}</div><div class="v">${n1(y.norm.teach)}</div></div>
        <div class="fld"><div class="k">${t('tc.k.total')}</div><div class="v">${n1(y.total)} (${t('tc.k.ugpg', { a: n1(y.ug), b: n1(y.pg) })})</div></div>
        <div class="fld"><div class="k">${t('tc.n.res')}</div><div class="v">${n1(rs.total)} / ${n1(rs.norm)}</div></div>
        <div class="fld"><div class="k">${t('tc.rec.roles')}</div><div class="v">${esc((s.kiem_nhiem || []).join('; ') || '–')}</div></div></div>
      <label style="margin-top:10px">${t('tc.rec.dispute')}<textarea data-d rows="3"></textarea></label>
      <label style="flex-direction:row;align-items:center;margin-top:8px"><input type="checkbox" data-c> ${t('tc.rec.consent')}</label><p class="err" hidden></p>
      <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('confirm')}</button></div>`, true);
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelector('[data-ok]').onclick = async () => {
      if (!m.querySelector('[data-c]').checked) { const e = m.querySelector('.err'); e.hidden = false; e.textContent = t('tc.rec.need'); return; }
      const dispute = m.querySelector('[data-d]').value.trim();
      App.ui.closeModal();
      if (!(await App.stepUp(t('tc.rec.mfa', { y: yl(S.year) })))) return;
      const data = { staff_id: s.ma_cb, full_name: s.ho_ten, unit: s.bo_mon, degree: App.academicPrefix(s), academic_year: S.year, norm_hours: y.norm.teach,
        teaching_hours: y.total, ug_hours: y.ug, pg_hours: y.pg, research_hours: rs.total, concurrent_roles: (s.kiem_nhiem || []).join('; '), dispute };
      let rec = null;
      if (App.proc && typeof App.proc.create === 'function') {
        try { rec = App.proc.create('QT-ĐHQT-GD-04', data); } catch (e) { console.warn(e); rec = null; }
      }
      if (!rec || typeof rec !== 'object' || !rec.id) {
        const now = new Date().toISOString().slice(0, 16);
        rec = { id: App.uid('HS'), ma_qt: 'QT-ĐHQT-GD-04', ma_cb: s.ma_cb, tao_luc: now, trang_thai: 'dang_xu_ly', buoc_hien_tai: 2, local: true,
          lich_su: [{ buoc: 0, luc: now, ket_qua: 'Hệ thống tự tính' }, { buoc: 1, luc: now, ket_qua: dispute ? 'Xác nhận kèm khiếu nại' : 'Đồng ý' }], du_lieu: data };
        App.saveRequest(rec);
      }
      const tbm = App.staffList().find((x) => x.vi_tri === 'TBM' && x.bo_mon === s.bo_mon && x.ma_cb !== s.ma_cb);
      App.notify(tbm ? tbm.ma_cb : 'TK', 'CB ' + s.ma_cb + ' xác nhận đối soát khối lượng năm học ' + S.year + (dispute ? ' (có khiếu nại)' : ''), '#/teaching');
      App.audit('KY_XAC_NHAN', 'Xác nhận đối soát khối lượng giảng dạy năm học ' + S.year + ' (' + rec.id + ')', s.ma_cb, 'Đối soát định mức');
      App.ui.toast(t('tc.rec.ok'), 'ok');
      rerender();
    };
  }

  /* --- giải thích công thức --- */
  function formulaModal(y) {
    const f = T.formula || {};
    const acts = (T.activities || []).filter((a) => ['lecture_ug', 'lecture_pg', 'tutorial', 'lab', 'project_ug', 'thesis_ug', 'thesis_master', 'fieldtrip_project'].includes(a.key));
    const coef = (k) => (T.coefficients || []).find((c) => c.key === k) || {};
    const ctab = (c, title) => `<h4 style="margin:12px 0 4px">${esc(title)}</h4>${App.ui.table([
      { t: t('tc.f.range'), f: (r) => r.min + (r.max == null ? '+' : '–' + r.max) }, { t: 'Hlđ', f: (r) => esc(r.Hld) }, { t: 'Hns', f: (r) => esc(r.Hns) }], c.rule || [])}${src(c.source, c.status)}`;
    const hcs = (a) => (a.hours_per_unit != null ? a.hours_per_unit : a.Hcs != null ? a.Hcs : (a.Hcs_rule || []).map((r) => r.Hcs + (r.max_students ? ' (≤' + r.max_students + ')' : ' (≥' + r.min_students + ')')).join(' / '));
    const ex = (y.secs || []).slice().sort((a, b) => (b.Hld + b.Hns) - (a.Hld + a.Hns))[0];
    App.ui.modal(`<h3>${t('tc.f.h')}</h3><div class="notice">${esc(t('tc.f.main'))}${src(f.source, f.status)}</div>
      <h4 style="margin:12px 0 4px">${t('tc.f.act')}</h4>${App.ui.table([
        { t: t('tc.f.act.n'), f: (a) => esc(App.L(a)) }, { t: t('tc.f.unit'), f: (a) => esc(a.unit || '') }, { t: t('tc.f.kl'), f: (a) => `<code>${esc(a.KLcs || '')}</code>` },
        { t: 'Hcs', f: (a) => esc(hcs(a)), cls: 'num' }, { t: t('source'), f: (a) => `<span class="small">${esc(a.source)}</span> ${stBadge(a.status)}` }], acts)}
      ${ctab(coef('class_size_lecture'), t('tc.f.lec'))}${ctab(coef('class_size_lab'), t('tc.f.lab'))}
      <p class="small">${t('tc.f.cap')}</p><p class="small">${t('tc.f.gt120')}</p><p class="small">${t('tc.f.tc')} ${stBadge('gia_dinh')}</p>
      ${ex ? `<h4 style="margin:12px 0 4px">${t('tc.f.ex')}</h4><div class="notice small">${esc(ex.ma_hp)} – ${esc(App.lang === 'en' ? ex.ten_en : ex.ten_vi)} (${t('tc.t.' + ex.loai)}, n = ${ex.si_so}):
        KLcs = ${n1(ex.KL)}; Hcs = ${App.fmtNum(ex.Hcs, 2)}; Hlđ = ${App.fmtNum(ex.Hld, 4)}; Hns = ${App.fmtNum(ex.Hns, 4)} ⇒ ${n1(ex.KL)} × ${App.fmtNum(Math.min(ex.Hcs + ex.Hld + ex.Hns, 1.5 * ex.Hcs), 4)} = <b>${n1(ex.hours)}</b> ${t('tc.h')}</div>` : ''}`, true);
  }

  /* --- khung trang --- */
  function render(main, params) {
    const u = App.user(), role = u.role;
    if (params && ['me', 'unit'].includes(params[0])) S.tab = params[0];
    if (params && params[0] === 'pg') { S.tab = 'me'; S.lvl = 'SDH'; }
    const scope = App.acl.scopeOf(role);
    const mgr = ['TBM', 'PTK', 'TK', 'BGH'].includes(role);
    main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.teaching')}</div><h1>${t('nav.teaching')}</h1><p>${t('tc.sub')}</p></div>
      <div class="row no-print"><label>${t('tc.year')}<select data-year>${YEARS.map((y, i) => `<option value="${y}" ${y === S.year ? 'selected' : ''}>${yl(y)} (${t(i ? 'tc.y.open' : 'tc.y.closed')})</option>`).join('')}</select></label>
        <label>${t('tc.term')}<select data-term>${['all', '1', '2', '3'].map((k) => `<option value="${k}" ${k === S.term ? 'selected' : ''}>${t('tc.term.' + k)}</option>`).join('')}</select></label></div></div>
      ${S.year !== YEARS[0] ? `<div class="notice">${t('tc.inprog', { y: yl(S.year) })}</div>` : ''}<div data-tabs></div><div data-body></div>`;
    main.querySelector('[data-year]').onchange = (e) => { S.year = e.target.value; render(main, []); };
    main.querySelector('[data-term]').onchange = (e) => { S.term = e.target.value; render(main, []); };
    const body = main.querySelector('[data-body]');
    const rerender = () => render(main, []);
    if (role === 'TG') return tgView(body, u);
    if (role === 'KTV') return ktvView(body, u);
    if (!mgr) return personal(body, u, rerender);
    const tabs = [{ k: 'me', t: t('tc.tab.me') }, { k: 'unit', t: t(scope === 'department' ? 'tc.tab.dept' : scope === 'school' ? 'tc.tab.school' : 'tc.tab.fac') }];
    if (role === 'BGH') { S.tab = 'unit'; tabs.shift(); }
    const show = (k) => { S.tab = k; if (k === 'unit') unitView(body, u, true); else personal(body, u, rerender); };
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, S.tab, show);
    show(S.tab);
  }

  function personal(el, u, rerender) {
    const y = C.yearTeaching(u.ma_cb, S.year), n = y.norm;
    const pk = y.pct >= 100 ? 'ok' : y.pct >= 80 ? 'warn' : 'bad';
    el.innerHTML = `<div class="kpis">${App.ui.kpi(t('tc.k.total'), n1(y.total), t('tc.k.ugpg', { a: n1(y.ug), b: n1(y.pg) }))}
        ${App.ui.kpi(t('tc.k.quota'), n1(n.teach), t('tc.k.base', { b: n1(n.base), p: n.minPct }), 'cyan')}
        ${App.ui.kpi(t('tc.k.pct'), App.fmtNum(y.pct, 0) + '%', App.ui.progress(y.pct, pk), pk)}
        ${App.ui.kpi(t('tc.k.ot'), n1(y.overtime), t('tc.k.otcap'), y.overtime ? 'warn' : '')}</div>
      <div class="grid g-2-1"><div><div class="card"><div data-lt></div><div data-lb></div></div></div>
      <div>${normCard(u, y)}${otCard(u, y)}${recCard(u)}</div></div>`;
    const lb = el.querySelector('[data-lb]');
    App.ui.tabs(el.querySelector('[data-lt]'), [{ k: 'DH', t: t('tc.ug') + ' (' + n1(y.ug) + ')' }, { k: 'SDH', t: t('tc.pg') + ' (' + n1(y.pg) + ')' }], S.lvl, (k) => { S.lvl = k; levelBody(lb, u, y, k); });
    levelBody(lb, u, y, S.lvl);
    el.querySelector('[data-formula]').onclick = () => formulaModal(y);
    const sh = el.querySelector('[data-otshow]');
    if (sh) sh.onclick = async () => {
      if (!(await App.stepUp(t('tc.ot.reason')))) return;
      S.otUntil = Date.now() + 5 * 60000;
      App.audit('XEM_CA_NHAN', 'Xem ước tính tiền dạy thêm giờ năm học ' + S.year + ' (hệ số lương × lương cơ sở)', u.ma_cb, 'Tự tra cứu');
      rerender();
    };
    const hsI = el.querySelector('[data-hs]'), lcsI = el.querySelector('[data-lcs]');
    if (hsI) hsI.onchange = () => { S.hs = Math.max(0, Number(hsI.value) || 0); rerender(); };
    if (lcsI) lcsI.onchange = () => { S.lcs = Math.max(0, Number(lcsI.value) || 0); rerender(); };
    const rb = el.querySelector('[data-rec]');
    if (rb) rb.onclick = () => openRec(u, y, rerender);
  }

  /* --- bảng quản lý Bộ môn / Khoa / Trường --- */
  function statusOf(y) {
    if (y.total - y.norm.teach > 200) return ['orange', 'tc.m.over', '#DD6B20'];
    if (y.pct >= 100) return ['ok', 'tc.m.ok', '#2F855A'];
    if (y.pct >= 80) return ['warn', 'tc.m.near', '#B7791F'];
    return ['bad', 'tc.m.low', '#C53030'];
  }
  function unitView(el, u, logView) {
    const scope = App.acl.scopeOf(u.role);
    let staff = App.staffList().filter((s) => s.loai === 'khoa' && LECT.includes(s.vi_tri) && App.acl.inScope(s));
    const depts = [...new Set(staff.map((s) => s.bo_mon))];
    if (S.dept !== 'all' && depts.includes(S.dept) && scope !== 'department') staff = staff.filter((s) => s.bo_mon === S.dept);
    const rows = staff.map((s) => { const y = C.yearTeaching(s.ma_cb, S.year); return { s, y, st: statusOf(y) }; }).sort((a, b) => b.y.pct - a.y.pct);
    if (logView) App.audit('XEM', 'Xem bảng khối lượng giảng dạy ' + (scope === 'department' ? 'Bộ môn ' + u.bo_mon : 'Khoa') + ' năm học ' + S.year, scope === 'department' ? u.bo_mon : 'EE', 'Quản lý khối lượng giảng dạy');
    const met = rows.filter((r) => r.y.pct >= 100).length, under = rows.filter((r) => r.y.pct < 80).length, ot = rows.reduce((a, r) => a + r.y.overtime, 0);
    const label = t(scope === 'department' ? 'tc.tab.dept' : scope === 'school' ? 'tc.tab.school' : 'tc.tab.fac') + (scope === 'department' ? ' ' + App.L(App.dept(u.bo_mon)) : '');
    el.innerHTML = `<div class="kpis">${App.ui.kpi(t('tc.m.n'), rows.length, esc(label))}${App.ui.kpi(t('tc.m.met'), met + '/' + rows.length, rows.length ? Math.round(met / rows.length * 100) + '%' : '', 'ok')}
        ${App.ui.kpi(t('tc.m.under'), under, '', under ? 'bad' : 'ok')}${App.ui.kpi(t('tc.m.ot'), n1(ot), t('tc.h'), 'warn')}</div>
      <div class="card"><div class="card-h"><h3>${t('tc.m.h', { s: esc(label) })} – ${esc(yl(S.year))}</h3><div class="row">
        ${scope !== 'department' && depts.length > 1 ? `<select data-dept aria-label="${t('tc.m.dept')}"><option value="all">${t('tc.m.alld')}</option>${depts.map((d) => `<option value="${d}" ${S.dept === d ? 'selected' : ''}>${esc(App.L(App.dept(d)))}</option>`).join('')}</select>` : ''}
        <button class="btn ghost sm" data-csv>${t('export')}</button></div></div>
        <h4 style="margin:0 0 8px">${t('tc.m.chart')}</h4>${App.ui.chart.hbars(rows.map((r) => ({ l: App.name(r.s), v: r.y.total, ref: r.y.norm.teach, c: r.st[2], txt: App.fmtNum(r.y.pct, 0) + '%' })))}</div>
      <div class="card">${App.ui.table([
          { t: t('tc.m.n'), f: (r) => `<b>${esc(App.name(r.s, { title: true }))}</b>` }, { t: t('tc.m.dept'), f: (r) => esc(r.s.bo_mon) },
          { t: t('tc.m.title'), f: (r) => esc(r.y.norm.code) }, { t: t('tc.ug'), f: (r) => n1(r.y.ug), cls: 'num' }, { t: t('tc.pg'), f: (r) => n1(r.y.pg), cls: 'num' },
          { t: t('total'), f: (r) => `<b>${n1(r.y.total)}</b>`, cls: 'num' }, { t: t('tc.k.quota'), f: (r) => n1(r.y.norm.teach), cls: 'num' },
          { t: '%', f: (r) => App.fmtNum(r.y.pct, 0) + '%', cls: 'num' }, { t: t('tc.k.ot'), f: (r) => n1(r.y.overtime), cls: 'num' },
          { t: t('status'), f: (r) => App.ui.badge(t(r.st[1]), r.st[0]) }], rows, { rowAttr: (r) => `class="click" data-id="${r.s.ma_cb}"` })}
        <div class="small muted" style="margin-top:6px">${t('tc.m.click')}</div></div>`;
    const ds = el.querySelector('[data-dept]');
    if (ds) ds.onchange = () => { S.dept = ds.value; unitView(el, u, false); };
    el.querySelectorAll('tr[data-id]').forEach((tr) => (tr.onclick = () => {
      const r = rows.find((x) => x.s.ma_cb === tr.dataset.id);
      App.audit('XEM', 'Xem chi tiết khối lượng giảng dạy năm học ' + S.year, r.s.ma_cb, 'Quản lý khối lượng giảng dạy');
      const secs = r.y.secs.filter(termOK);
      App.ui.modal(`<h3>${t('tc.m.detail', { n: esc(App.name(r.s, { title: true })) })}</h3>
        <div class="row" style="margin-bottom:8px"><span class="chip">${t('tc.k.total')}: <b>${n1(r.y.total)}</b></span><span class="chip">${t('tc.k.quota')}: <b>${n1(r.y.norm.teach)}</b></span>
        <span class="chip">${t('tc.k.pct')}: <b>${App.fmtNum(r.y.pct, 0)}%</b></span>${r.y.norm.reductions.map((x) => `<span class="chip">${esc(redLabel(x.label))} – ${t('tc.n.min', { p: x.pct })}</span>`).join('')}</div>
        <h4 style="margin:6px 0">${t('tc.secs')}</h4>${secTable(secs)}<h4 style="margin:12px 0 6px">${t('tc.sups')}</h4>${supTable(r.y.sups)}`, true);
    }));
    el.querySelector('[data-csv]').onclick = async () => {
      if (!(await App.stepUp(t('tc.m.csv')))) return;
      csv('khoi_luong_giang_day_' + S.year + '.csv', [['ma_cb', 'ho_ten', 'bo_mon', 'dinh_muc_code', 'gio_DH', 'gio_SDH', 'tong', 'dinh_muc', 'ty_le_%', 'vuot_gio', 'trang_thai']]
        .concat(rows.map((r) => [App.anon ? App.pseudo(r.s.ma_cb, 'CB') : r.s.ma_cb, App.name(r.s), r.s.bo_mon, r.y.norm.code, r.y.ug, r.y.pg, r.y.total, r.y.norm.teach, Math.round(r.y.pct), r.y.overtime, t(r.st[1])])));
      App.audit('XUAT', 'Xuất CSV bảng khối lượng giảng dạy năm học ' + S.year + ' (' + rows.length + ' CB' + (App.anon ? ', ẩn danh' : '') + ')', scope === 'department' ? u.bo_mon : 'EE', 'Quản lý khối lượng giảng dạy');
      App.ui.toast(t('tc.m.exported'), 'ok');
    };
  }

  /* --- Trợ giảng: hỗ trợ lớp thí nghiệm của Bộ môn --- */
  function tgView(el, u) {
    const labs = D.labs.filter((l) => l.bo_mon === u.bo_mon);
    const cap = labs.length ? Math.min(...labs.map((l) => l.suc_chua)) : 24;
    const all = D.teaching.filter((x) => x.loai === 'TN' && x.nam_hoc === S.year && (App.staff(x.ma_cb) || {}).bo_mon === u.bo_mon)
      .map((x) => { const per = C.sectionHours(x).periods; const asg = x.si_so > cap; return Object.assign({}, x, { per, asg, sup: asg ? per : 0 }); });
    const rows = all.filter(termOK);
    const it = nb('TG'), norm = Number(it.teach_hours) || 180;
    const tot = all.reduce((a, b) => a + b.sup, 0), pct = tot / norm * 100;
    const pk = pct >= 100 ? 'ok' : pct >= 80 ? 'warn' : 'bad';
    el.innerHTML = `<div class="notice">${t('tc.tg.info')}${src(it.source, it.status)}</div>
      <div class="kpis">${App.ui.kpi(t('tc.tg.secs'), all.length, esc(App.L(App.dept(u.bo_mon))))}${App.ui.kpi(t('tc.tg.asg'), all.filter((x) => x.asg).length, '', 'cyan')}
        ${App.ui.kpi(t('tc.tg.per'), App.fmtNum(tot, 0) + ' <small style="font-size:.9rem">/ ' + norm + '</small>', App.ui.progress(pct, pk), pk)}
        ${App.ui.kpi(t('tc.tg.norm'), norm, t('tc.tg.unit') + ' · ' + App.fmtNum(pct, 0) + '%')}</div>
      <div class="card"><div class="card-h"><h3>${t('tc.tg.h')} – ${esc(yl(S.year))}</h3>${stBadge('gia_dinh')}</div>
        <p class="small muted">${t('tc.tg.rule', { c: cap })}</p>
        ${App.ui.table([
          { t: t('tc.c.code'), f: (s) => `<b>${esc(s.ma_hp)}</b>` }, { t: t('tc.c.name'), f: (s) => esc(App.lang === 'en' ? s.ten_en : s.ten_vi) },
          { t: t('tc.c.term'), f: (s) => termLbl(s.hoc_ky), cls: 'c' }, { t: t('tc.tg.lect'), f: (s) => esc(App.name(App.staff(s.ma_cb), { title: true })) },
          { t: t('tc.c.grp'), k: 'nhom', cls: 'num' }, { t: t('tc.c.size'), k: 'si_so', cls: 'num' }, { t: t('tc.c.per'), k: 'per', cls: 'num' },
          { t: t('status'), f: (s) => App.ui.badge(s.asg ? t('tc.tg.yes') : t('tc.tg.no'), s.asg ? 'ok' : '') }, { t: t('tc.tg.per'), f: (s) => `<b>${s.sup}</b>`, cls: 'num' }], rows)}</div>`;
  }

  /* --- Kỹ thuật viên: giờ hỗ trợ thí nghiệm tại PTN được giao --- */
  function ktvView(el, u) {
    const labs = D.labs.filter((l) => l.ktv === u.ma_cb);
    if (!labs.length) { el.innerHTML = `<div class="notice">${t('tc.ktv.info')}</div>${App.ui.empty(t('tc.ktv.none'))}`; return; }
    const depts = [...new Set(labs.map((l) => l.bo_mon))];
    const cnt = {};
    const all = D.teaching.filter((x) => x.loai === 'TN' && x.nam_hoc === S.year && depts.includes((App.staff(x.ma_cb) || {}).bo_mon)).map((x) => {
      const d = App.staff(x.ma_cb).bo_mon, ls = labs.filter((l) => l.bo_mon === d); cnt[d] = (cnt[d] || 0) + 1;
      const lab = ls[(cnt[d] - 1) % ls.length]; const per = C.sectionHours(x).periods;
      return Object.assign({}, x, { lab, per, ses: Math.ceil(per / 3), hrs: Math.round(per * 50 / 60 * 10) / 10 });
    });
    const rows = all.filter(termOK);
    const hrs = all.reduce((a, b) => a + b.hrs, 0), ses = all.reduce((a, b) => a + b.ses, 0);
    el.innerHTML = `<div class="notice">${t('tc.ktv.info')}${src('TT20 Điều 3.1 (1.760); ' + t('tc.ktv.src'), 'gia_dinh')}</div>
      <div class="kpis">${App.ui.kpi(t('tc.ktv.labs'), labs.length, esc(labs.map((l) => l.ma).join(', ')))}${App.ui.kpi(t('tc.ktv.ses'), ses, all.length + ' ' + t('tc.secs').toLowerCase(), 'cyan')}
        ${App.ui.kpi(t('tc.ktv.hrs'), n1(hrs), t('tc.hadm'))}${App.ui.kpi(t('tc.ktv.share'), App.fmtNum(hrs / 1760 * 100, 1) + '%', '1.760 ' + t('tc.hadm'))}</div>
      <div class="card"><h3>${t('tc.ktv.bylab')}</h3>${App.ui.chart.hbars(labs.map((l, i) => ({ l: App.L(l, 'ten'), v: all.filter((x) => x.lab === l).reduce((a, b) => a + b.hrs, 0), c: App.ui.chart.PAL[i % 4] })))}</div>
      <div class="card"><div class="card-h"><h3>${t('tc.ktv.h')} – ${esc(yl(S.year))}</h3>${stBadge('gia_dinh')}</div><p class="small muted">${t('tc.ktv.rule')}</p>
        ${App.ui.table([
          { t: t('tc.ktv.lab'), f: (s) => `<span class="chip">${esc(s.lab.ma)}</span>` }, { t: t('tc.c.code'), f: (s) => `<b>${esc(s.ma_hp)}</b>` },
          { t: t('tc.c.name'), f: (s) => esc(App.lang === 'en' ? s.ten_en : s.ten_vi) }, { t: t('tc.c.term'), f: (s) => termLbl(s.hoc_ky), cls: 'c' },
          { t: t('tc.tg.lect'), f: (s) => esc(App.name(App.staff(s.ma_cb), { title: true })) }, { t: t('tc.c.size'), k: 'si_so', cls: 'num' },
          { t: t('tc.c.per'), k: 'per', cls: 'num' }, { t: t('tc.ktv.ses'), k: 'ses', cls: 'num' }, { t: t('tc.ktv.hrs'), f: (s) => `<b>${n1(s.hrs)}</b>`, cls: 'num' }], rows)}</div>`;
  }

  App.page('teaching', { render });
})();
