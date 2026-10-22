/* Quản lý phòng thí nghiệm (feature lab)
   - TK/PTK: tổng quan, duyệt đề xuất cấp Khoa, ưu tiên đầu tư; TBM: quản lý PTN mình phụ trách (labs[].phu_trach), đề xuất lên Khoa;
     KTV: quản lý PTN được giao (labs[].ktv – ABAC A5): trạng thái thiết bị, bảo trì, duyệt lịch, báo hỏng, lập dự thảo đề xuất.
   - Quy trình: QT-ĐHQT-PTN-01 (đăng ký sử dụng), PTN-02 (mua sắm ≤ 100 triệu), PTN-03 (báo hỏng – sửa chữa). */
(function () {
  const R = [
    ['lb.crumb', 'Phòng thí nghiệm', 'Laboratories'], ['lb.title', 'Quản lý phòng thí nghiệm', 'Laboratory management'],
    ['lb.sub.TK', 'Toàn Khoa: nắm thông tin chung, duyệt đề xuất cấp Khoa, ưu tiên đầu tư, nâng cấp, sửa chữa PTN.', 'Faculty-wide: overview, faculty-level approval of proposals, investment priorities.'],
    ['lb.sub.TBM', 'Trưởng Bộ môn phụ trách PTN: quản lý chung trang thiết bị, duyệt lịch, đề xuất đầu tư cho PTN mình phụ trách.', 'Head of department in charge of labs: equipment, bookings and investment proposals for your labs.'],
    ['lb.sub.KTV', 'Kỹ thuật viên: quản lý thiết bị, lịch sử dụng và an toàn của PTN được giao (ABAC A5).', 'Technician: equipment, bookings and safety of your assigned labs (ABAC A5).'],
    ['lb.sub.other', 'Xem lịch, đăng ký sử dụng PTN và báo sự cố thiết bị.', 'View schedules, book labs and report equipment faults.'],
    ['lb.mine', 'PTN tôi quản lý: {l}', 'Labs I manage: {l}'],
    ['lb.tab.ov', 'Tổng quan', 'Overview'], ['lb.tab.eq', 'Thiết bị', 'Equipment'], ['lb.tab.bk', 'Lịch sử dụng', 'Bookings'], ['lb.tab.pr', 'Báo hỏng & đề xuất', 'Faults & proposals'],
    ['lb.tab.inv', 'Ưu tiên đầu tư', 'Investment priority'], ['lb.tab.safe', 'An toàn PTN', 'Lab safety'],
    ['lb.k.eq', 'Thiết bị (mục / chiếc)', 'Equipment (items / units)'], ['lb.k.ready', 'Sẵn sàng hoạt động', 'Operational'], ['lb.k.broken', 'Hỏng – chờ sửa', 'Broken – awaiting repair'],
    ['lb.k.cal', 'Hiệu chuẩn quá hạn / ≤ 60 ngày', 'Calibration overdue / ≤ 60 days'], ['lb.k.pend', 'Đăng ký chờ duyệt', 'Bookings pending'], ['lb.k.prop', 'Đề xuất đang xử lý', 'Open proposals'],
    ['lb.room', 'Phòng', 'Room'], ['lb.cap', 'Sức chứa', 'Capacity'], ['lb.seats', '{n} chỗ', '{n} seats'], ['lb.mgr', 'Phụ trách (TBM)', 'Head (TBM)'], ['lb.ktv', 'Kỹ thuật viên', 'Technician'],
    ['lb.eqn', 'Thiết bị', 'Equipment'], ['lb.eqn.v', '{i} mục · {u} chiếc', '{i} items · {u} units'], ['lb.readyp', 'Sẵn sàng', 'Ready'], ['lb.util', 'Giờ sử dụng HK (TB/thiết bị)', 'Semester use (avg h/item)'],
    ['lb.week', 'Lịch tuần này', 'This week'], ['lb.hours', '{n} giờ', '{n} h'], ['lb.caldue', 'Hiệu chuẩn ≤ 60 ngày', 'Calibration ≤ 60 days'], ['lb.overdue', 'quá hạn', 'overdue'],
    ['lb.value', 'Giá trị còn lại', 'Remaining value'], ['lb.tr', '{n} tr.đ', 'VND {n}m'], ['lb.mylab', 'Tôi quản lý', 'Managed by me'],
    ['lb.f.lab', 'PTN', 'Lab'], ['lb.f.status', 'Tình trạng', 'Status'], ['lb.f.cal', 'Chỉ thiết bị cần hiệu chuẩn', 'Calibration due only'],
    ['lb.c.code', 'Mã TS', 'Asset'], ['lb.c.name', 'Thiết bị', 'Equipment'], ['lb.c.brand', 'Hãng', 'Brand'], ['lb.c.qty', 'SL', 'Qty'], ['lb.c.year', 'Năm mua', 'Bought'],
    ['lb.c.cost', 'Nguyên giá (tr.đ/chiếc)', 'Unit cost (VND m)'], ['lb.c.dep', 'Còn lại', 'Remaining'], ['lb.c.val', 'Giá trị còn lại (tr.đ)', 'Remaining value (VND m)'],
    ['lb.c.hrs', 'Giờ SD/HK', 'Hours/sem'], ['lb.c.cal', 'Hiệu chuẩn kế tiếp', 'Next calibration'], ['lb.c.act', 'Thao tác', 'Actions'],
    ['lb.st.ready', 'Sẵn sàng', 'Ready'], ['lb.st.use', 'Đang sử dụng', 'In use'], ['lb.st.broken', 'Hỏng – chờ sửa', 'Broken – awaiting repair'], ['lb.st.cal', 'Đang hiệu chuẩn', 'Being calibrated'],
    ['lb.a.status', 'Đổi trạng thái', 'Change status'], ['lb.a.maint', 'Ghi bảo trì', 'Log maintenance'], ['lb.a.fault', 'Báo hỏng', 'Report fault'],
    ['lb.m.newst', 'Trạng thái mới', 'New status'], ['lb.m.note', 'Ghi chú', 'Note'], ['lb.m.saved', 'Đã cập nhật và ghi nhật ký.', 'Updated and logged.'],
    ['lb.m.type', 'Loại công việc', 'Work type'], ['lb.m.t1', 'Bảo trì định kỳ', 'Preventive maintenance'], ['lb.m.t2', 'Sửa chữa', 'Repair'], ['lb.m.t3', 'Hiệu chuẩn', 'Calibration'],
    ['lb.m.cost', 'Chi phí (triệu đồng)', 'Cost (VND million)'], ['lb.m.content', 'Nội dung', 'Description'], ['lb.m.hist', 'Nhật ký bảo trì – hiệu chuẩn', 'Maintenance & calibration log'],
    ['lb.m.by', 'Người thực hiện', 'By'], ['lb.m.calnote', 'Hiệu chuẩn: tự cập nhật ngày hiệu chuẩn gần nhất và kế tiếp (+12 tháng).', 'Calibration: last/next calibration dates updated automatically (+12 months).'],
    ['lb.eq.note', 'Giá trị còn lại = nguyên giá × số lượng × tỷ lệ còn lại (theo sổ tài sản, dữ liệu giả lập). Tô đỏ: quá hạn hiệu chuẩn; cam: đến hạn trong 60 ngày.', 'Remaining value = unit cost × quantity × remaining ratio (asset register, simulated). Red: calibration overdue; orange: due within 60 days.'],
    ['lb.ro', 'Chỉ KTV/TBM phụ trách PTN được thay đổi', 'Only the lab\'s technician/head can change this'],
    ['lb.bk.lab', 'Phòng thí nghiệm', 'Laboratory'], ['lb.bk.prev', '← Tuần trước', '← Previous week'], ['lb.bk.next', 'Tuần sau →', 'Next week →'], ['lb.bk.today', 'Tuần này', 'This week'],
    ['lb.bk.new', 'Đăng ký sử dụng (QT-ĐHQT-PTN-01)', 'Book the lab (QT-ĐHQT-PTN-01)'], ['lb.bk.date', 'Ngày', 'Date'], ['lb.bk.from', 'Từ', 'From'], ['lb.bk.to', 'Đến', 'To'],
    ['lb.bk.purpose', 'Mục đích', 'Purpose'], ['lb.bk.p1', 'Buổi thí nghiệm lớp học phần', 'Lab class session'], ['lb.bk.p2', 'Nghiên cứu đề tài', 'Research project'],
    ['lb.bk.p3', 'Hướng dẫn luận văn', 'Thesis supervision'], ['lb.bk.p4', 'Bảo trì thiết bị', 'Equipment maintenance'], ['lb.bk.p5', 'Khác', 'Other'],
    ['lb.bk.eq', 'Thiết bị cần dùng (giữ Ctrl để chọn nhiều)', 'Equipment needed (Ctrl for multiple)'], ['lb.bk.ref', 'Mã đề tài / lớp học phần (nếu có)', 'Project / class code (optional)'],
    ['lb.bk.safety', 'Tôi đã hoàn thành huấn luyện an toàn PTN và cam kết tuân thủ nội quy.', 'I have completed lab safety training and will follow the lab rules.'],
    ['lb.bk.submit', 'Gửi đăng ký', 'Submit booking'], ['lb.bk.conflict', 'Trùng lịch với đăng ký {id} ({a}–{b}). Vui lòng chọn khung giờ khác.', 'Conflicts with booking {id} ({a}–{b}). Please choose another slot.'],
    ['lb.bk.badtime', 'Khung giờ không hợp lệ (07:00–17:30, giờ kết thúc sau giờ bắt đầu, Thứ Hai – Thứ Bảy).', 'Invalid time (07:00–17:30, end after start, Monday – Saturday).'],
    ['lb.bk.nosafe', 'Cần xác nhận huấn luyện an toàn.', 'Safety training confirmation required.'], ['lb.bk.past', 'Không đăng ký cho ngày đã qua.', 'Cannot book a past date.'],
    ['lb.bk.broken', 'Thiết bị đang hỏng/hiệu chuẩn: {l}', 'Equipment unavailable: {l}'],
    ['lb.bk.auto', 'Thiết bị thông dụng – hệ thống tự duyệt.', 'Common equipment – auto-approved.'], ['lb.bk.wait', 'Có thiết bị giá trị cao – chờ KTV/Trưởng PTN duyệt.', 'High-value equipment – awaiting technician/head approval.'],
    ['lb.bk.rule', 'Quy tắc duyệt: thiết bị thông dụng được tự duyệt; thiết bị nguyên giá ≥ {n} triệu đồng hoặc mục đích bảo trì cần KTV/Trưởng PTN duyệt.', 'Approval rule: common equipment is auto-approved; equipment with unit cost ≥ VND {n}m or maintenance requires technician/head approval.'],
    ['lb.bk.pending', 'Đăng ký chờ tôi duyệt', 'Bookings awaiting my approval'], ['lb.bk.mine', 'Đăng ký của tôi', 'My bookings'],
    ['lb.bk.who', 'Người đăng ký', 'Booked by'], ['lb.bk.time', 'Thời gian', 'Time'], ['lb.bk.approve', 'Duyệt', 'Approve'], ['lb.bk.reject', 'Từ chối', 'Reject'],
    ['lb.bk.ok', 'Đã ghi nhận đăng ký {id}.', 'Booking {id} recorded.'], ['lb.bk.done', 'Đã cập nhật đăng ký.', 'Booking updated.'],
    ['lb.bk.legend', 'Xanh đậm: đã duyệt · vàng: chờ duyệt', 'Navy: approved · amber: pending'], ['lb.bk.days', 'Thứ Hai|Thứ Ba|Thứ Tư|Thứ Năm|Thứ Sáu|Thứ Bảy', 'Mon|Tue|Wed|Thu|Fri|Sat'],
    ['lb.bs.ok', 'Đã duyệt', 'Approved'], ['lb.bs.wait', 'Chờ duyệt', 'Pending'], ['lb.bs.no', 'Từ chối', 'Rejected'],
    ['lb.f.t', 'Báo hỏng thiết bị (QT-ĐHQT-PTN-03)', 'Report an equipment fault (QT-ĐHQT-PTN-03)'], ['lb.f.eq', 'Thiết bị', 'Equipment'], ['lb.f.sev', 'Mức độ', 'Severity'],
    ['lb.f.s1', 'Nhẹ – vẫn dùng được', 'Minor – still usable'], ['lb.f.s2', 'Trung bình – hạn chế sử dụng', 'Moderate – limited use'], ['lb.f.s3', 'Nghiêm trọng – ngừng sử dụng', 'Severe – out of service'],
    ['lb.f.desc', 'Mô tả sự cố', 'Fault description'], ['lb.f.send', 'Gửi báo hỏng', 'Submit fault report'], ['lb.f.ok', 'Đã tạo phiếu báo hỏng {id}; thông báo đã gửi tới KTV và Trưởng PTN.', 'Fault report {id} created; technician and lab head notified.'],
    ['lb.f.list', 'Phiếu báo hỏng', 'Fault reports'], ['lb.f.need', 'Chọn thiết bị và mô tả sự cố.', 'Select equipment and describe the fault.'],
    ['lb.p.list', 'Đề xuất mua sắm – nâng cấp – đầu tư', 'Purchase, upgrade and investment proposals'], ['lb.p.new', 'Lập đề xuất mới', 'New proposal'],
    ['lb.p.lab', 'PTN', 'Lab'], ['lb.p.type', 'Loại', 'Type'], ['lb.p.content', 'Nội dung', 'Content'], ['lb.p.est', 'Dự toán (tr.đ)', 'Estimate (VND m)'], ['lb.p.prio', 'Ưu tiên', 'Priority'],
    ['lb.p.by', 'Người lập', 'Proposed by'], ['lb.p.status', 'Trạng thái', 'Status'], ['lb.p.fund', 'Nguồn kinh phí', 'Funding source'],
    ['lb.p.f1', 'Kinh phí Khoa', 'Faculty budget'], ['lb.p.f2', 'Đề tài KHCN', 'Research project'], ['lb.p.f3', 'Ngân sách Trường (đầu tư)', 'University investment budget'],
    ['lb.pt.buy', 'Mua sắm mới', 'New purchase'], ['lb.pt.up', 'Nâng cấp', 'Upgrade'], ['lb.pt.fix', 'Sửa chữa', 'Repair'], ['lb.pt.cal', 'Hiệu chuẩn', 'Calibration'], ['lb.pt.new', 'Đầu tư PTN mới', 'New lab investment'],
    ['lb.pp.high', 'Cao', 'High'], ['lb.pp.mid', 'Trung bình', 'Medium'], ['lb.pp.low', 'Thấp', 'Low'], ['lb.pp.str', 'Chiến lược', 'Strategic'],
    ['lb.ps.draft', 'Nháp', 'Draft'], ['lb.ps.tbm', 'Chờ TBM xem xét', 'Awaiting head of dept.'], ['lb.ps.fac', 'Chờ Khoa duyệt', 'Awaiting faculty approval'],
    ['lb.ps.bgh', 'Trình BGH', 'Submitted to Rector board'], ['lb.ps.qttb', 'Đã duyệt – chờ P.QTTB', 'Approved – awaiting Facilities Office'], ['lb.ps.done', 'Đã duyệt', 'Approved'], ['lb.ps.no', 'Từ chối', 'Rejected'],
    ['lb.pa.send', 'Gửi TBM', 'Send to head'], ['lb.pa.prop', 'Đề xuất lên Khoa', 'Propose to faculty'], ['lb.pa.back', 'Trả lại', 'Return'],
    ['lb.pa.ok', 'Duyệt cấp Khoa', 'Approve (faculty)'], ['lb.pa.no', 'Từ chối', 'Reject'], ['lb.pa.bgh', 'Mô phỏng: BGH phê duyệt', 'Simulate: Rector approves'], ['lb.pa.qttb', 'Mô phỏng: P.QTTB hoàn tất', 'Simulate: Facilities done'],
    ['lb.p.flow', 'Luồng xử lý: KTV lập dự thảo → TBM đề xuất → TK/PTK duyệt cấp Khoa (MFA) → dự toán ≤ 100 triệu: P.QTTB/P.VTTB mua sắm theo QT-ĐHQT-PTN-02 (QĐ 596/QĐ-ĐHQT); > 100 triệu hoặc đầu tư PTN mới: trình BGH theo Luật Đấu thầu 22/2023/QH15.', 'Flow: technician drafts → head proposes → Dean/Vice dean approves at faculty level (MFA) → estimate ≤ VND 100m: Facilities Office procures under QT-ĐHQT-PTN-02 (Decision 596); > VND 100m or new lab: Rector board under Procurement Law 22/2023.'],
    ['lb.p.saved', 'Đã lưu đề xuất {id}.', 'Proposal {id} saved.'], ['lb.p.need', 'Nhập nội dung và dự toán hợp lệ.', 'Enter content and a valid estimate.'], ['lb.p.done', 'Đã chuyển trạng thái: {s}.', 'Status changed: {s}.'],
    ['lb.p.proc', 'Hồ sơ quy trình: {id}', 'Process record: {id}'], ['lb.p.over', 'Vượt ngưỡng 100 triệu – không áp dụng PTN-02, trình BGH.', 'Above VND 100m – PTN-02 not applicable, goes to Rector board.'],
    ['lb.p.create', 'Lập đề xuất', 'Create proposal'], ['lb.p.from', 'Tạo đề xuất từ gợi ý', 'Create from suggestion'],
    ['lb.i.formula', 'Công thức điểm ưu tiên (minh bạch)', 'Priority score formula (transparent)'],
    ['lb.i.f', 'Điểm = 100 × (0,35·U + 0,25·A + 0,25·S + 0,15·N). U = giờ sử dụng HK / 240 giờ (≈ 16 tuần × 15 giờ, tối đa 1); A = 1 − tỷ lệ giá trị còn lại (mức khấu hao); S = 1 nếu hỏng, 0,5 nếu quá hạn hiệu chuẩn, 0,4 nếu đang hiệu chuẩn, 0 nếu bình thường; N = số lớp học phần thí nghiệm của Bộ môn (3 học kỳ gần nhất) chia đều cho số PTN của Bộ môn / 10 (tối đa 1).', 'Score = 100 × (0.35·U + 0.25·A + 0.25·S + 0.15·N). U = semester hours / 240 h (≈ 16 weeks × 15 h, max 1); A = 1 − remaining-value ratio (depreciation); S = 1 if broken, 0.5 if calibration overdue, 0.4 if being calibrated, else 0; N = lab class sections of the department (last 3 semesters) shared equally across its labs / 10 (max 1).'],
    ['lb.i.note', 'Trọng số và chuẩn hoá là đề xuất của ứng dụng (giả định) để hỗ trợ ra quyết định – không thay thế thẩm định của Hội đồng/Khoa; dự toán gợi ý: thay mới = nguyên giá × SL, sửa chữa ≈ 10%, hiệu chuẩn ≈ 3% nguyên giá.', 'Weights and normalisation are the app\'s proposal (assumed) for decision support – not a substitute for committee appraisal; suggested cost: replace = unit cost × qty, repair ≈ 10%, calibration ≈ 3% of cost.'],
    ['lb.i.labs', 'Điểm ưu tiên theo PTN', 'Priority by lab'], ['lb.i.eq', 'Danh sách đầu tư gợi ý', 'Suggested investment list'], ['lb.i.score', 'Điểm', 'Score'],
    ['lb.i.action', 'Đề xuất', 'Suggested action'], ['lb.i.cost', 'Dự toán gợi ý (tr.đ)', 'Suggested cost (VND m)'], ['lb.i.secs', 'Lớp TN', 'Lab sections'],
    ['lb.i.a.replace', 'Thay mới', 'Replace'], ['lb.i.a.fix', 'Sửa chữa', 'Repair'], ['lb.i.a.cal', 'Hiệu chuẩn', 'Calibrate'], ['lb.i.a.add', 'Bổ sung số lượng', 'Add units'], ['lb.i.a.watch', 'Theo dõi', 'Monitor'],
    ['lb.i.total', 'Tổng dự toán gợi ý (điểm ≥ {n}): {v} triệu đồng', 'Total suggested budget (score ≥ {n}): VND {v} million'],
    ['lb.s.t', 'Danh mục kiểm tra an toàn đầu buổi', 'Pre-session safety checklist'], ['lb.s.rules', 'Nội quy PTN (tóm tắt)', 'Lab rules (summary)'],
    ['lb.s.c1', 'Lối thoát hiểm thông thoáng; bình chữa cháy CO₂ còn hạn kiểm định', 'Emergency exits clear; CO₂ extinguisher inspection valid'],
    ['lb.s.c2', 'Aptomat tổng, ổ cắm và dây nguồn không hư hỏng; tiếp địa thiết bị đạt yêu cầu', 'Main breaker, sockets and cords intact; equipment grounding OK'],
    ['lb.s.c3', 'Thiết bị cao áp/RF có biển cảnh báo và khóa liên động hoạt động', 'High-voltage/RF equipment labelled; interlocks working'],
    ['lb.s.c4', 'Người học đã ký danh sách huấn luyện an toàn của học kỳ', 'Students signed the semester safety-training roll'],
    ['lb.s.c5', 'Không mang đồ ăn, nước uống vào khu vực thiết bị', 'No food or drink near equipment'],
    ['lb.s.c6', 'Thiết bị hỏng được dán nhãn "Ngừng sử dụng" và đã tạo phiếu PTN-03', 'Broken equipment tagged "Out of service" with a PTN-03 ticket'],
    ['lb.s.c7', 'Tủ sơ cứu đầy đủ; số điện thoại khẩn cấp niêm yết tại cửa', 'First-aid kit complete; emergency numbers posted at the door'],
    ['lb.s.c8', 'Cuối buổi: tắt nguồn, sắp xếp thiết bị, ghi nhật ký sử dụng (quét QR)', 'End of session: power off, tidy up, log usage (QR scan)'],
    ['lb.s.r', 'Người sử dụng PTN phải đăng ký trước qua ứng dụng, hoàn thành huấn luyện an toàn và tuân thủ hướng dẫn của KTV. Không tự ý di chuyển, tháo lắp thiết bị; báo ngay sự cố cho KTV. Thiết bị đo phải còn hạn hiệu chuẩn khi dùng cho nghiên cứu/kiểm định. Mọi sử dụng được ghi nhật ký phục vụ quản lý tài sản công (Luật Quản lý, sử dụng tài sản công 2017; QĐ 133/QĐ-ĐHQT 2026).', 'Lab users must book in advance via the app, complete safety training and follow the technician\'s instructions. Do not move or dismantle equipment; report faults immediately. Measuring instruments must be within calibration when used for research/testing. All usage is logged for public-asset management (Law on Public Assets 2017; Decision 133/QĐ-ĐHQT 2026).'],
    ['lb.s.saved', 'Đã lưu kết quả kiểm tra an toàn {d}.', 'Safety check saved for {d}.'], ['lb.s.save', 'Lưu kết quả kiểm tra', 'Save checklist'], ['lb.s.last', 'Lần kiểm tra gần nhất: {d} – {n}/{m} mục đạt', 'Last check: {d} – {n}/{m} items OK'],
    ['lb.src', 'Căn cứ', 'Basis'], ['lb.gd', 'giả định', 'assumed'], ['lb.mfa', 'Phê duyệt cần MFA (ABAC A9)', 'Approval requires MFA (ABAC A9)'],
  ];
  const vi = {}, en = {};
  R.forEach((r) => { vi[r[0]] = r[1]; en[r[0]] = r[2]; });
  App.addI18n({ vi, en });
})();

(function () {
  'use strict';
  const t = App.t, esc = App.esc, D = App.D;
  const VI = (k) => App.i18n.vi[k] || k;
  const HIGH_VALUE = 300;                      // triệu đồng – ngưỡng thiết bị "giá trị cao" cần duyệt (giả định)
  const ST = { 'Sẵn sàng': 'lb.st.ready', 'Đang sử dụng': 'lb.st.use', 'Hỏng – chờ sửa': 'lb.st.broken', 'Đang hiệu chuẩn': 'lb.st.cal' };
  const STK = { 'Sẵn sàng': 'ok', 'Đang sử dụng': 'info', 'Hỏng – chờ sửa': 'bad', 'Đang hiệu chuẩn': 'warn' };
  const PT = { 'Mua sắm mới': 'lb.pt.buy', 'Nâng cấp': 'lb.pt.up', 'Sửa chữa': 'lb.pt.fix', 'Hiệu chuẩn': 'lb.pt.cal', 'Đầu tư PTN mới': 'lb.pt.new' };
  const PP = { Cao: 'lb.pp.high', 'Trung bình': 'lb.pp.mid', 'Thấp': 'lb.pp.low', 'Chiến lược': 'lb.pp.str' };
  const PS = { 'Nháp': 'lb.ps.draft', 'Chờ TBM xem xét': 'lb.ps.tbm', 'Chờ Khoa duyệt': 'lb.ps.fac', 'Trình BGH': 'lb.ps.bgh', 'Đã duyệt – chờ P.QTTB': 'lb.ps.qttb', 'Đã duyệt': 'lb.ps.done', 'Từ chối': 'lb.ps.no' };
  const PSK = { 'Nháp': '', 'Chờ TBM xem xét': 'warn', 'Chờ Khoa duyệt': 'warn', 'Trình BGH': 'info', 'Đã duyệt – chờ P.QTTB': 'info', 'Đã duyệt': 'ok', 'Từ chối': 'bad' };
  const BS = { 'Đã duyệt': 'lb.bs.ok', 'Chờ duyệt': 'lb.bs.wait', 'Từ chối': 'lb.bs.no' };
  const lbl = (map, v) => (map[v] ? t(map[v]) : v);
  const S = { tab: 'ov', lab: '', status: '', cal: false, wk: 0, bkLab: '' };

  /* ---------------------------------------------------------------- dữ liệu (seed + thay đổi cục bộ) */
  const iso = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const parse = (s) => { const p = String(s).slice(0, 10).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  const today = parse(D.meta.today);
  const daysTo = (s) => Math.round((parse(s) - today) / 86400000);
  const eqAll = () => { const o = App.store.get()['lb.eq'] || {}; return D.equipment.map((e) => Object.assign({}, e, o[e.ma] || {})); };
  const setEq = (ma, patch) => { const o = App.store.get()['lb.eq'] || {}; o[ma] = Object.assign(o[ma] || {}, patch); App.store.patch('lb.eq', o); };
  const bookings = () => { const u = App.store.get()['lb.bkupd'] || {}; return D.bookings.concat(App.store.list('lb.bookings')).map((b) => (u[b.id] ? Object.assign({}, b, u[b.id]) : b)); };
  const setBk = (id, patch) => { const u = App.store.get()['lb.bkupd'] || {}; u[id] = Object.assign(u[id] || {}, patch); App.store.patch('lb.bkupd', u); };
  const proposals = () => { const u = App.store.get()['lb.propupd'] || {}; return D.lab_proposals.concat(App.store.list('lb.props')).map((p) => (u[p.id] ? Object.assign({}, p, u[p.id]) : p)); };
  const setProp = (id, patch) => { const u = App.store.get()['lb.propupd'] || {}; u[id] = Object.assign(u[id] || {}, patch); App.store.patch('lb.propupd', u); };
  const labOf = (ma) => D.labs.find((l) => l.ma === ma) || {};
  const labName = (l) => App.L(l, 'ten');
  const staffName = (id) => { const s = App.staff(id); return s ? App.name(s, { title: true }) : id; };
  const calState = (e) => { const d = daysTo(e.hieu_chuan_ke_tiep); return d < 0 ? 'over' : d <= 60 ? 'due' : 'ok'; };
  const fmtTr = (v) => App.fmtNum(v, 1);
  const statusBadge = (s) => App.ui.badge(lbl(ST, s), STK[s]);
  const tm = (s) => { const p = String(s).split(':'); return +p[0] + (+p[1] || 0) / 60; };

  function ctx() {
    const u = App.user(), r = u.role;
    const managed = D.labs.filter((l) => (r === 'TBM' && l.phu_trach === u.ma_cb) || (r === 'KTV' && l.ktv === u.ma_cb)).map((l) => l.ma);
    return { u, r, managed, faculty: r === 'TK' || r === 'PTK', canManage: (lab) => managed.includes(lab), invest: ['TK', 'PTK', 'TBM'].includes(r) };
  }
  const mfa = async (why) => (App.auth.mfaFresh(300) ? true : App.stepUp(why));
  async function procCreate(code, data) {
    if (App.proc && typeof App.proc.create === 'function') {
      try { let r = App.proc.create(code, data); if (r && typeof r.then === 'function') r = await r; const id = r && (typeof r === 'string' ? r : r.id); if (id) return id; } catch (e) { /* dùng bản ghi cục bộ */ }
    }
    const now = new Date().toISOString().slice(0, 16);
    const r = { id: App.uid('HS'), ma_qt: code, ma_cb: App.user().ma_cb, tao_luc: now, trang_thai: 'dang_xu_ly', buoc_hien_tai: 1, lich_su: [{ buoc: 0, luc: now, ket_qua: 'Tạo từ phân hệ PTN' }], du_lieu: data };
    App.saveRequest(r);
    return r.id;
  }
  /* số lớp học phần thí nghiệm của Bộ môn (3 HK gần nhất) chia đều cho số PTN của Bộ môn */
  function sectionsOf(lab) {
    const n = D.teaching.filter((x) => x.loai === 'TN' && (App.staff(x.ma_cb) || {}).bo_mon === lab.bo_mon && (x.nam_hoc === '2026-2027' || x.nam_hoc === '2025-2026')).length;
    return Math.round(n / (D.labs.filter((l) => l.bo_mon === lab.bo_mon).length || 1) * 10) / 10;
  }
  function score(e) {
    const lab = labOf(e.ptn);
    const U = Math.min(1, (e.gio_su_dung_hk || 0) / 240), A = 1 - (e.khau_hao_con_lai || 0) / 100;
    const cs = calState(e);
    const Sv = e.tinh_trang === 'Hỏng – chờ sửa' ? 1 : cs === 'over' ? 0.5 : e.tinh_trang === 'Đang hiệu chuẩn' ? 0.4 : 0;
    const N = Math.min(1, sectionsOf(lab) / 10);
    const sc = Math.round(100 * (0.35 * U + 0.25 * A + 0.25 * Sv + 0.15 * N));
    let action = 'watch', cost = 0;
    const val = e.nguyen_gia_trieu * e.so_luong;
    if (e.tinh_trang === 'Hỏng – chờ sửa' && A >= 0.8) { action = 'replace'; cost = val; }
    else if (e.tinh_trang === 'Hỏng – chờ sửa') { action = 'fix'; cost = val * 0.1; }
    else if (cs === 'over') { action = 'cal'; cost = val * 0.03; }
    else if (U >= 0.8 && A >= 0.8) { action = 'add'; cost = e.nguyen_gia_trieu * Math.max(1, Math.ceil(e.so_luong * 0.25)); }
    return { U, A, S: Sv, N, sc, action, cost: Math.round(cost * 10) / 10 };
  }

  /* ---------------------------------------------------------------- khung trang */
  function render(main, params) {
    const c = ctx();
    const tabs = [{ k: 'ov', t: t('lb.tab.ov') }, { k: 'eq', t: t('lb.tab.eq') }, { k: 'bk', t: t('lb.tab.bk') }, { k: 'pr', t: t('lb.tab.pr') }];
    if (c.invest) tabs.push({ k: 'inv', t: t('lb.tab.inv') });
    tabs.push({ k: 'safe', t: t('lb.tab.safe') });
    if (params && params[0] && tabs.some((x) => x.k === params[0])) S.tab = params[0];
    if (!tabs.some((x) => x.k === S.tab)) S.tab = 'ov';
    const eqs = eqAll(), bks = bookings(), props = proposals();
    const scopeEq = c.faculty || !c.managed.length ? eqs : eqs.filter((e) => c.managed.includes(e.ptn));
    const ready = scopeEq.filter((e) => e.tinh_trang === 'Sẵn sàng' || e.tinh_trang === 'Đang sử dụng').length;
    const broken = scopeEq.filter((e) => e.tinh_trang === 'Hỏng – chờ sửa').length;
    const over = scopeEq.filter((e) => calState(e) === 'over').length, due = scopeEq.filter((e) => calState(e) === 'due').length;
    const pend = bks.filter((b) => b.trang_thai === 'Chờ duyệt' && (c.faculty || c.managed.includes(b.ptn))).length;
    const openP = props.filter((p) => !['Đã duyệt', 'Từ chối'].includes(p.trang_thai) && (c.faculty || c.managed.includes(p.ptn))).length;
    const sub = t('lb.sub.' + (c.faculty ? 'TK' : c.r === 'TBM' ? 'TBM' : c.r === 'KTV' ? 'KTV' : 'other'));
    main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('lb.crumb')}</div><h1>${t('lb.title')}</h1><p>${esc(sub)}${c.managed.length ? ' ' + esc(t('lb.mine', { l: c.managed.join(', ') })) : ''}</p></div></div>
      <div class="kpis">${App.ui.kpi(t('lb.k.eq'), scopeEq.length + ' <small style="font-size:.9rem">/ ' + scopeEq.reduce((a, b) => a + b.so_luong, 0) + '</small>', '', 'cyan')}
        ${App.ui.kpi(t('lb.k.ready'), Math.round(ready / (scopeEq.length || 1) * 100) + '%', App.ui.progress(ready / (scopeEq.length || 1) * 100, 'ok'), ready / (scopeEq.length || 1) >= 0.85 ? 'ok' : 'warn')}
        ${App.ui.kpi(t('lb.k.broken'), broken, '', broken ? 'bad' : 'ok')}
        ${App.ui.kpi(t('lb.k.cal'), over + ' / ' + due, '', over ? 'bad' : due ? 'warn' : 'ok')}
        ${App.ui.kpi(t('lb.k.pend'), pend, '', pend ? 'warn' : 'ok')}
        ${App.ui.kpi(t('lb.k.prop'), openP, '', '')}</div>
      <div data-tabs></div><div data-body></div>`;
    const body = main.querySelector('[data-body]');
    const rer = () => render(main, []);
    const show = (k) => {
      S.tab = k;
      ({ ov: ovBody, eq: eqBody, bk: bkBody, pr: prBody, inv: invBody, safe: safeBody })[k](body, c, rer);
    };
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, S.tab, show);
    show(S.tab);
  }

  /* ---------------------------------------------------------------- tổng quan */
  function weekRange(off) {
    const d = new Date(today); const wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd + 7 * (off || 0));
    return Array.from({ length: 6 }, (_, i) => { const x = new Date(d); x.setDate(d.getDate() + i); return iso(x); });
  }
  function ovBody(body, c) {
    const eqs = eqAll(), bks = bookings(), wk = weekRange(0);
    body.innerHTML = `<div class="grid g2">${D.labs.map((l) => {
      const es = eqs.filter((e) => e.ptn === l.ma);
      const rd = es.filter((e) => e.tinh_trang === 'Sẵn sàng' || e.tinh_trang === 'Đang sử dụng').length;
      const pct = es.length ? rd / es.length * 100 : 0;
      const avgU = es.length ? es.reduce((a, b) => a + b.gio_su_dung_hk, 0) / es.length : 0;
      const wkH = bks.filter((b) => b.ptn === l.ma && wk.includes(b.ngay) && b.trang_thai !== 'Từ chối').reduce((a, b) => a + tm(b.ket_thuc) - tm(b.bat_dau), 0);
      const cal = es.filter((e) => calState(e) !== 'ok');
      const remain = es.reduce((a, e) => a + e.nguyen_gia_trieu * e.so_luong * e.khau_hao_con_lai / 100, 0);
      return `<div class="card" style="margin:0;border-top:4px solid ${c.managed.includes(l.ma) ? 'var(--cyan)' : 'var(--navy)'}">
        <div class="card-h"><h3 style="margin:0">${esc(labName(l))}</h3><span>${App.ui.badge(l.ma, 'navy')}${c.managed.includes(l.ma) ? ' ' + App.ui.badge(t('lb.mylab'), 'info') : ''}</span></div>
        <div class="fields" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">
          <div class="fld"><div class="k">${t('lb.room')} · ${t('lb.cap')}</div><div class="v">${esc(l.phong)} · ${esc(t('lb.seats', { n: l.suc_chua }))}</div></div>
          <div class="fld"><div class="k">${t('lb.mgr')}</div><div class="v">${esc(staffName(l.phu_trach))}</div></div>
          <div class="fld"><div class="k">${t('lb.ktv')}</div><div class="v">${esc(staffName(l.ktv))}</div></div>
          <div class="fld"><div class="k">${t('lb.eqn')}</div><div class="v">${esc(t('lb.eqn.v', { i: es.length, u: es.reduce((a, b) => a + b.so_luong, 0) }))}</div></div>
          <div class="fld"><div class="k">${t('lb.util')}</div><div class="v">${App.fmtNum(avgU, 0)} h</div></div>
          <div class="fld"><div class="k">${t('lb.week')}</div><div class="v">${esc(t('lb.hours', { n: App.fmtNum(wkH, 1) }))}</div></div>
          <div class="fld"><div class="k">${t('lb.value')}</div><div class="v">${esc(t('lb.tr', { n: App.fmtNum(remain, 0) }))}</div></div>
          <div class="fld"><div class="k">${t('lb.caldue')}</div><div class="v">${cal.length ? cal.map((e) => `<span class="badge ${calState(e) === 'over' ? 'bad' : 'orange'}" title="${esc(e.ten)}">${esc(e.ma)} ${calState(e) === 'over' ? esc(t('lb.overdue')) : App.fmtDate(e.hieu_chuan_ke_tiep)}</span>`).join(' ') : '–'}</div></div>
        </div>
        <div class="row between small" style="margin-top:8px"><span>${t('lb.readyp')}</span><b>${Math.round(pct)}%</b></div>${App.ui.progress(pct, pct >= 85 ? 'ok' : pct >= 60 ? 'warn' : 'bad')}</div>`;
    }).join('')}</div>`;
  }

  /* ---------------------------------------------------------------- thiết bị */
  function eqBody(body, c, rer) {
    const all = eqAll();
    const list = all.filter((e) => (!S.lab || e.ptn === S.lab) && (!S.status || e.tinh_trang === S.status) && (!S.cal || calState(e) !== 'ok'));
    const maint = App.store.list('lb.maint').filter((m) => !S.lab || m.ptn === S.lab).slice().reverse();
    body.innerHTML = `<div class="card no-print" style="padding:12px 16px"><div class="row" style="gap:10px;flex-wrap:wrap;align-items:flex-end">
        <label>${t('lb.f.lab')}<select data-f="lab"><option value="">${t('all')}</option>${D.labs.map((l) => `<option value="${l.ma}" ${S.lab === l.ma ? 'selected' : ''}>${esc(l.ma)} – ${esc(labName(l))}</option>`).join('')}</select></label>
        <label>${t('lb.f.status')}<select data-f="status"><option value="">${t('all')}</option>${Object.keys(ST).map((s) => `<option value="${esc(s)}" ${S.status === s ? 'selected' : ''}>${esc(lbl(ST, s))}</option>`).join('')}</select></label>
        <label style="flex-direction:row;align-items:center;gap:6px"><input type="checkbox" data-cal ${S.cal ? 'checked' : ''}> ${t('lb.f.cal')}</label></div></div>
      <div class="card">${App.ui.table([
        { t: t('lb.c.code'), f: (e) => `<b>${esc(e.ma)}</b><div class="small muted">${esc(e.ptn)}</div>` }, { t: t('lb.c.name'), f: (e) => `${esc(e.ten)}<div class="small muted">${esc(e.hang)}</div>` },
        { t: t('lb.c.qty'), cls: 'num', k: 'so_luong' }, { t: t('lb.c.year'), cls: 'num', f: (e) => `${e.nam_mua}<div class="small muted">${today.getFullYear() - e.nam_mua} ${App.lang === 'vi' ? 'năm' : 'y'}</div>` },
        { t: t('lb.c.cost'), cls: 'num', f: (e) => fmtTr(e.nguyen_gia_trieu) },
        { t: t('lb.c.dep'), f: (e) => `<div class="small">${e.khau_hao_con_lai}%</div>${App.ui.progress(e.khau_hao_con_lai, e.khau_hao_con_lai <= 10 ? 'bad' : e.khau_hao_con_lai <= 40 ? 'warn' : 'ok')}` },
        { t: t('lb.c.val'), cls: 'num', f: (e) => fmtTr(e.nguyen_gia_trieu * e.so_luong * e.khau_hao_con_lai / 100) },
        { t: t('lb.c.hrs'), cls: 'num', k: 'gio_su_dung_hk' },
        { t: t('lb.c.cal'), f: (e) => { const cs = calState(e); return `<span style="${cs === 'over' ? 'color:var(--bad);font-weight:800' : cs === 'due' ? 'color:var(--orange);font-weight:800' : ''}">${App.fmtDate(e.hieu_chuan_ke_tiep)}</span>${cs === 'over' ? '<div class="small" style="color:var(--bad)">' + esc(t('lb.overdue')) + '</div>' : ''}`; } },
        { t: t('status'), f: (e) => statusBadge(e.tinh_trang) },
        { t: t('lb.c.act'), f: (e) => (c.canManage(e.ptn) ? `<div class="row" style="gap:4px;flex-wrap:wrap"><button class="btn sm ghost" data-st="${e.ma}">${t('lb.a.status')}</button><button class="btn sm ghost" data-mt="${e.ma}">${t('lb.a.maint')}</button></div>`
          : `<button class="btn sm ghost" data-fl="${e.ma}">${t('lb.a.fault')}</button>`) },
      ], list)}<p class="small muted" style="margin-top:8px">${esc(t('lb.eq.note'))}</p></div>
      <div class="card"><h3>${t('lb.m.hist')}</h3>${App.ui.table([{ t: t('date'), f: (m) => App.fmtDate(m.ngay) }, { t: t('lb.c.code'), k: 'ma' }, { t: t('lb.m.type'), f: (m) => esc(t(m.loai)) },
        { t: t('lb.m.content'), k: 'nd' }, { t: t('lb.m.cost'), cls: 'num', f: (m) => fmtTr(m.cp) }, { t: t('lb.m.by'), f: (m) => esc(staffName(m.by)) }], maint)}</div>`;
    body.querySelectorAll('[data-f]').forEach((el) => (el.onchange = () => { S[el.dataset.f] = el.value; eqBody(body, c, rer); }));
    body.querySelector('[data-cal]').onchange = (e) => { S.cal = e.target.checked; eqBody(body, c, rer); };
    body.querySelectorAll('[data-st]').forEach((b) => (b.onclick = () => statusModal(all.find((e) => e.ma === b.dataset.st), rer)));
    body.querySelectorAll('[data-mt]').forEach((b) => (b.onclick = () => maintModal(all.find((e) => e.ma === b.dataset.mt), rer)));
    body.querySelectorAll('[data-fl]').forEach((b) => (b.onclick = () => { S.tab = 'pr'; S.faultEq = b.dataset.fl; rer(); }));
  }
  function statusModal(e, rer) {
    const md = App.ui.modal(`<h3>${t('lb.a.status')} – ${esc(e.ma)}</h3><p class="muted">${esc(e.ten)}</p><div class="stack">
      <label>${t('lb.m.newst')}<select data-s>${Object.keys(ST).map((s) => `<option value="${esc(s)}" ${s === e.tinh_trang ? 'selected' : ''}>${esc(lbl(ST, s))}</option>`).join('')}</select></label>
      <label>${t('lb.m.note')}<input data-n></label></div><div class="row end" style="margin-top:12px"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('save')}</button></div>`);
    md.querySelector('[data-x]').onclick = App.ui.closeModal;
    md.querySelector('[data-ok]').onclick = () => {
      const s = md.querySelector('[data-s]').value;
      setEq(e.ma, { tinh_trang: s });
      App.audit('SUA', 'Cập nhật tình trạng thiết bị ' + e.ma + ': ' + e.tinh_trang + ' → ' + s + (md.querySelector('[data-n]').value ? ' (' + md.querySelector('[data-n]').value + ')' : ''), e.ma, 'Quản lý tài sản PTN');
      App.ui.closeModal(); App.ui.toast(t('lb.m.saved'), 'ok'); rer();
    };
  }
  function maintModal(e, rer) {
    const types = ['lb.m.t1', 'lb.m.t2', 'lb.m.t3'];
    const md = App.ui.modal(`<h3>${t('lb.a.maint')} – ${esc(e.ma)}</h3><p class="muted">${esc(e.ten)}</p><div class="grid g2">
      <label>${t('date')}<input type="date" data-d value="${D.meta.today}"></label><label>${t('lb.m.type')}<select data-t>${types.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
      <label>${t('lb.m.cost')}<input type="number" min="0" step="0.1" data-c value="0"></label></div>
      <label style="margin-top:8px">${t('lb.m.content')}<textarea data-n rows="3"></textarea></label><p class="small muted">${esc(t('lb.m.calnote'))}</p>
      <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('save')}</button></div>`);
    md.querySelector('[data-x]').onclick = App.ui.closeModal;
    md.querySelector('[data-ok]').onclick = () => {
      const d = md.querySelector('[data-d]').value || D.meta.today, ty = md.querySelector('[data-t]').value;
      App.store.push('lb.maint', { ma: e.ma, ptn: e.ptn, ngay: d, loai: ty, nd: md.querySelector('[data-n]').value.trim(), cp: parseFloat(md.querySelector('[data-c]').value) || 0, by: App.user().ma_cb });
      if (ty === 'lb.m.t3') { const n = parse(d); n.setFullYear(n.getFullYear() + 1); setEq(e.ma, { hieu_chuan_gan_nhat: d, hieu_chuan_ke_tiep: iso(n), tinh_trang: e.tinh_trang === 'Đang hiệu chuẩn' ? 'Sẵn sàng' : e.tinh_trang }); }
      if (ty === 'lb.m.t2' && e.tinh_trang === 'Hỏng – chờ sửa') setEq(e.ma, { tinh_trang: 'Sẵn sàng' });
      App.audit('BAO_TRI', 'Ghi nhật ký ' + VI(ty).toLowerCase() + ' thiết bị ' + e.ma, e.ma, 'Quản lý tài sản PTN');
      App.ui.closeModal(); App.ui.toast(t('lb.m.saved'), 'ok'); rer();
    };
  }

  /* ---------------------------------------------------------------- lịch sử dụng */
  function bkBody(body, c, rer) {
    if (!S.bkLab) S.bkLab = c.managed[0] || D.labs[0].ma;
    const days = weekRange(S.wk);
    const dn = t('lb.bk.days').split('|');
    const bks = bookings();
    const wkB = bks.filter((b) => b.ptn === S.bkLab && days.includes(b.ngay) && b.trang_thai !== 'Từ chối');
    const ROWS = 21;   // 07:00 → 17:30, mỗi ô 30 phút
    const row = (s) => Math.round((tm(s) - 7) * 2) + 2;
    let grid = `<div style="display:grid;grid-template-columns:52px repeat(6,minmax(96px,1fr));grid-template-rows:44px repeat(${ROWS},22px);min-width:660px;position:relative">`;
    grid += `<div></div>` + days.map((d, i) => `<div style="grid-column:${i + 2};grid-row:1;text-align:center;font-weight:700;font-size:.82rem;color:${d === D.meta.today ? 'var(--cyan)' : 'var(--navy-dd)'};border-bottom:2px solid var(--line)">${esc(dn[i])}<div class="small muted" style="font-weight:400">${App.fmtDate(d).slice(0, 5)}</div></div>`).join('');
    for (let h = 7; h <= 17; h++) grid += `<div style="grid-column:1;grid-row:${(h - 7) * 2 + 2};font-size:.72rem;color:var(--muted);text-align:right;padding-right:6px">${String(h).padStart(2, '0')}:00</div>`;
    days.forEach((d, i) => (grid += `<div style="grid-column:${i + 2};grid-row:2 / ${ROWS + 2};border-left:1px solid var(--line);background:${d === D.meta.today ? 'rgba(28,154,204,.06)' : 'repeating-linear-gradient(to bottom,transparent 0,transparent 43px,var(--line-2) 43px,var(--line-2) 44px)'}"></div>`));
    wkB.forEach((b) => {
      const i = days.indexOf(b.ngay); const ok = b.trang_thai === 'Đã duyệt';
      grid += `<div title="${esc(b.id + ' · ' + b.muc_dich + ' · ' + staffName(b.ma_cb))}" style="grid-column:${i + 2};grid-row:${row(b.bat_dau)} / ${row(b.ket_thuc)};margin:1px 3px;border-radius:6px;padding:3px 6px;font-size:.72rem;line-height:1.25;overflow:hidden;z-index:1;
        background:${ok ? 'var(--navy)' : 'var(--warn-l)'};color:${ok ? '#fff' : 'var(--warn)'};border:1px solid ${ok ? 'var(--navy)' : 'var(--warn)'}"><b>${esc(b.bat_dau)}–${esc(b.ket_thuc)}</b><div>${esc(b.muc_dich)}</div><div style="opacity:.85">${esc(staffName(b.ma_cb))}</div></div>`;
    });
    grid += '</div>';
    const myLabsPending = bks.filter((b) => b.trang_thai === 'Chờ duyệt' && c.managed.includes(b.ptn)).sort((a, b) => (a.ngay + a.bat_dau).localeCompare(b.ngay + b.bat_dau));
    const mine = bks.filter((b) => b.ma_cb === c.u.ma_cb).sort((a, b) => (b.ngay + b.bat_dau).localeCompare(a.ngay + a.bat_dau));
    const slots = []; for (let h = 7; h <= 17.5; h += 0.5) slots.push(String(Math.floor(h)).padStart(2, '0') + ':' + (h % 1 ? '30' : '00'));
    const purposes = ['lb.bk.p1', 'lb.bk.p2', 'lb.bk.p3', 'lb.bk.p4', 'lb.bk.p5'];
    const bkCols = [{ t: 'ID', k: 'id' }, { t: t('lb.f.lab'), k: 'ptn' }, { t: t('lb.bk.time'), f: (b) => `${App.fmtDate(b.ngay)} ${esc(b.bat_dau)}–${esc(b.ket_thuc)}` },
      { t: t('lb.bk.purpose'), k: 'muc_dich' }, { t: t('lb.bk.who'), f: (b) => esc(staffName(b.ma_cb)) }, { t: t('status'), f: (b) => App.ui.badge(lbl(BS, b.trang_thai), b.trang_thai === 'Đã duyệt' ? 'ok' : b.trang_thai === 'Từ chối' ? 'bad' : 'warn') }];
    body.innerHTML = `<div class="card"><div class="row between" style="flex-wrap:wrap;gap:10px;align-items:flex-end">
        <label>${t('lb.bk.lab')}<select data-bl>${D.labs.map((l) => `<option value="${l.ma}" ${S.bkLab === l.ma ? 'selected' : ''}>${esc(l.ma)} – ${esc(labName(l))} (${esc(l.phong)})</option>`).join('')}</select></label>
        <div class="row" style="gap:6px"><button class="btn sm ghost" data-w="-1">${t('lb.bk.prev')}</button><button class="btn sm ghost" data-w="0">${t('lb.bk.today')}</button><button class="btn sm ghost" data-w="1">${t('lb.bk.next')}</button></div></div>
        <p class="small muted">${App.fmtDate(days[0])} – ${App.fmtDate(days[5])} · ${esc(t('lb.bk.legend'))}</p>
        <div style="overflow-x:auto">${grid}</div></div>
      <div class="card"><h3>${t('lb.bk.new')}</h3><div class="grid g2"><div class="stack" style="min-width:0">
        <label>${t('lb.bk.lab')}<select data-k="ptn">${D.labs.map((l) => `<option value="${l.ma}" ${S.bkLab === l.ma ? 'selected' : ''}>${esc(l.ma)} – ${esc(labName(l))}</option>`).join('')}</select></label>
        <div class="grid g3"><label>${t('lb.bk.date')}<input type="date" data-k="ngay" value="${days.includes(D.meta.today) ? D.meta.today : days[0]}"></label>
          <label>${t('lb.bk.from')}<select data-k="bat_dau">${slots.slice(0, -1).map((s) => `<option ${s === '13:00' ? 'selected' : ''}>${s}</option>`).join('')}</select></label>
          <label>${t('lb.bk.to')}<select data-k="ket_thuc">${slots.slice(1).map((s) => `<option ${s === '15:30' ? 'selected' : ''}>${s}</option>`).join('')}</select></label></div>
        </div><div class="stack" style="min-width:0"><label>${t('lb.bk.purpose')}<select data-k="muc_dich">${purposes.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
        <label>${t('lb.bk.ref')}<input data-k="ref"></label></div></div>
        <label style="margin-top:10px">${t('lb.bk.eq')}<select data-k="eq" multiple size="5" style="width:100%"></select></label>
        <label style="flex-direction:row;align-items:flex-start;gap:8px;font-weight:400;margin-top:10px"><input type="checkbox" data-k="safe"> <span>${esc(t('lb.bk.safety'))}</span></label>
        <p class="small muted" style="margin:0">${esc(t('lb.bk.rule', { n: HIGH_VALUE }))} ${App.ui.badge(t('lb.gd'), 'warn')}</p>
        <p class="err" hidden></p><div class="row end"><button class="btn" data-sub>${t('lb.bk.submit')}</button></div></div>
        <div>${c.managed.length ? `<div class="card"><h3>${t('lb.bk.pending')}</h3>${App.ui.table(bkCols.concat([{ t: t('lb.c.act'), f: (b) => `<button class="btn ok sm" data-ap="${b.id}">${t('lb.bk.approve')}</button> <button class="btn bad sm" data-rj="${b.id}">${t('lb.bk.reject')}</button>` }]), myLabsPending)}<p class="small muted">${esc(t('lb.mfa'))}</p></div>` : ''}
        <div class="card"><h3>${t('lb.bk.mine')}</h3>${App.ui.table(bkCols, mine)}</div></div>`;
    body.querySelector('[data-bl]').onchange = (e) => { S.bkLab = e.target.value; bkBody(body, c, rer); };
    body.querySelectorAll('[data-w]').forEach((b) => (b.onclick = () => { S.wk = b.dataset.w === '0' ? 0 : S.wk + +b.dataset.w; bkBody(body, c, rer); }));
    const f = (k) => body.querySelector(`[data-k="${k}"]`);
    const fillEq = () => { f('eq').innerHTML = eqAll().filter((e) => e.ptn === f('ptn').value).map((e) => `<option value="${e.ma}">${esc(e.ma)} – ${esc(e.ten)} (${esc(lbl(ST, e.tinh_trang))})</option>`).join(''); };
    f('ptn').onchange = fillEq; fillEq();
    body.querySelector('[data-sub]').onclick = () => {
      const err = body.querySelector('.err'); const fail = (m) => { err.hidden = false; err.textContent = m; };
      const b = { ptn: f('ptn').value, ngay: f('ngay').value, bat_dau: f('bat_dau').value, ket_thuc: f('ket_thuc').value };
      const dd = b.ngay ? parse(b.ngay) : null;
      if (!dd || dd.getDay() === 0 || tm(b.ket_thuc) <= tm(b.bat_dau) || tm(b.bat_dau) < 7 || tm(b.ket_thuc) > 17.5) return fail(t('lb.bk.badtime'));
      if (dd < today) return fail(t('lb.bk.past'));
      if (!f('safe').checked) return fail(t('lb.bk.nosafe'));
      const clash = bookings().find((x) => x.ptn === b.ptn && x.ngay === b.ngay && x.trang_thai !== 'Từ chối' && tm(x.bat_dau) < tm(b.ket_thuc) && tm(b.bat_dau) < tm(x.ket_thuc));
      if (clash) return fail(t('lb.bk.conflict', { id: clash.id, a: clash.bat_dau, b: clash.ket_thuc }));
      const sel = [...f('eq').selectedOptions].map((o) => o.value);
      const eqs = eqAll().filter((e) => sel.includes(e.ma));
      const bad = eqs.filter((e) => e.tinh_trang === 'Hỏng – chờ sửa' || e.tinh_trang === 'Đang hiệu chuẩn');
      if (bad.length) return fail(t('lb.bk.broken', { l: bad.map((e) => e.ma).join(', ') }));
      const pk = f('muc_dich').value;
      const needApproval = pk === 'lb.bk.p4' || eqs.some((e) => e.nguyen_gia_trieu >= HIGH_VALUE);
      const lab = labOf(b.ptn);
      const rec = Object.assign(b, { id: App.uid('DK'), ma_cb: c.u.ma_cb, muc_dich: VI(pk), thiet_bi: sel, tham_chieu: f('ref').value.trim(), trang_thai: needApproval && !c.canManage(b.ptn) ? 'Chờ duyệt' : 'Đã duyệt' });
      App.store.push('lb.bookings', rec);
      App.audit('DANG_KY_PTN', 'Đăng ký sử dụng ' + b.ptn + ' ngày ' + b.ngay + ' ' + b.bat_dau + '–' + b.ket_thuc + ' (QT-ĐHQT-PTN-01) – ' + rec.trang_thai, rec.id, 'Sử dụng PTN');
      if (rec.trang_thai === 'Chờ duyệt') { App.notify(lab.ktv, 'Đăng ký PTN ' + b.ptn + ' ' + App.fmtDate(b.ngay) + ' chờ duyệt', '#/lab/bk'); App.notify(lab.phu_trach, 'Đăng ký PTN ' + b.ptn + ' ' + App.fmtDate(b.ngay) + ' chờ duyệt', '#/lab/bk'); }
      App.ui.toast(t('lb.bk.ok', { id: rec.id }) + ' ' + (rec.trang_thai === 'Chờ duyệt' ? t('lb.bk.wait') : t('lb.bk.auto')), 'ok');
      S.bkLab = b.ptn; const wd = weekRange(0); S.wk = Math.floor((parse(b.ngay) - parse(wd[0])) / (7 * 86400000));
      rer();
    };
    const act = (id, ok) => mfa(t('lb.mfa')).then((pass) => {
      if (!pass) return;
      const b = bookings().find((x) => x.id === id);
      setBk(id, { trang_thai: ok ? 'Đã duyệt' : 'Từ chối', duyet_boi: c.u.ma_cb });
      App.audit(ok ? 'DUYET' : 'TU_CHOI', (ok ? 'Duyệt' : 'Từ chối') + ' đăng ký sử dụng PTN ' + id, id, 'Quản lý PTN');
      if (b) App.notify(b.ma_cb, 'Đăng ký PTN ' + id + ': ' + (ok ? 'đã duyệt' : 'bị từ chối'), '#/lab/bk');
      App.ui.toast(t('lb.bk.done'), 'ok'); rer();
    });
    body.querySelectorAll('[data-ap]').forEach((b) => (b.onclick = () => act(b.dataset.ap, true)));
    body.querySelectorAll('[data-rj]').forEach((b) => (b.onclick = () => act(b.dataset.rj, false)));
  }

  /* ---------------------------------------------------------------- báo hỏng & đề xuất */
  function prBody(body, c, rer) {
    const eqs = eqAll();
    const faults = App.store.list('lb.faults').filter((x) => c.faculty || c.managed.includes(x.ptn) || x.by === c.u.ma_cb).slice().reverse();
    const props = proposals().filter((p) => c.faculty || c.managed.includes(p.ptn) || p.ma_cb === c.u.ma_cb);
    const createLabs = c.faculty ? D.labs : D.labs.filter((l) => c.managed.includes(l.ma));
    const sevs = ['lb.f.s1', 'lb.f.s2', 'lb.f.s3'];
    const pre = S.prefill || {}; S.prefill = null;
    const acts = (p) => {
      const a = [];
      const own = c.managed.includes(p.ptn);
      if (c.r === 'KTV' && own && p.trang_thai === 'Nháp') a.push(['send', 'lb.pa.send', '']);
      if (c.r === 'TBM' && own && ['Nháp', 'Chờ TBM xem xét'].includes(p.trang_thai)) { a.push(['prop', 'lb.pa.prop', 'ok']); if (p.trang_thai === 'Chờ TBM xem xét') a.push(['back', 'lb.pa.back', '']); }
      if (c.faculty && p.trang_thai === 'Chờ Khoa duyệt') { a.push(['ok', 'lb.pa.ok', 'ok']); a.push(['no', 'lb.pa.no', 'bad']); }
      if (c.r === 'TK' && p.trang_thai === 'Trình BGH') a.push(['bgh', 'lb.pa.bgh', 'cyan']);
      if (c.faculty && p.trang_thai === 'Đã duyệt – chờ P.QTTB') a.push(['qttb', 'lb.pa.qttb', 'cyan']);
      return a.map((x) => `<button class="btn sm ${x[2] || 'ghost'}" data-pa="${x[0]}" data-id="${esc(p.id)}">${t(x[1])}</button>`).join(' ');
    };
    body.innerHTML = `<div class="grid g2"><div class="card"><h3>${t('lb.f.t')}</h3><div class="stack">
        <label>${t('lb.f.eq')}<select data-fe>${eqs.filter((e) => c.faculty || !c.managed.length || c.managed.includes(e.ptn)).map((e) => `<option value="${e.ma}" ${S.faultEq === e.ma ? 'selected' : ''}>${esc(e.ma)} – ${esc(e.ten)} (${esc(e.ptn)})</option>`).join('')}</select></label>
        <label>${t('lb.f.sev')}<select data-fs>${sevs.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
        <label>${t('lb.f.desc')}<textarea data-fd rows="3"></textarea></label><p class="err" data-fe-err hidden></p>
        <div class="row end"><button class="btn bad" data-fsend>${t('lb.f.send')}</button></div></div>
        <h4 style="margin-top:14px">${t('lb.f.list')}</h4>${App.ui.table([{ t: 'ID', f: (x) => `<b>${esc(x.id)}</b>${x.hs ? `<div class="small"><a href="#/processes/hs/${esc(x.hs)}">${esc(x.hs)}</a></div>` : ''}` }, { t: t('date'), f: (x) => App.fmtDate(x.at) },
          { t: t('lb.f.eq'), k: 'ma' }, { t: t('lb.f.sev'), f: (x) => esc(t(x.sev)) }, { t: t('lb.f.desc'), k: 'desc' }], faults)}</div>
      <div class="card"><h3>${t('lb.p.new')}</h3>${createLabs.length ? `<div class="stack">
        <div class="grid g2"><label>${t('lb.p.lab')}<select data-pk="ptn">${createLabs.map((l) => `<option value="${l.ma}" ${pre.ptn === l.ma ? 'selected' : ''}>${esc(l.ma)} – ${esc(labName(l))}</option>`).join('')}</select></label>
        <label>${t('lb.p.type')}<select data-pk="loai">${Object.keys(PT).map((k) => `<option value="${esc(k)}" ${pre.loai === k ? 'selected' : ''}>${esc(lbl(PT, k))}</option>`).join('')}</select></label>
        <label>${t('lb.p.est')}<input type="number" min="0" step="0.1" data-pk="du_toan_trieu" value="${pre.du_toan_trieu != null ? pre.du_toan_trieu : ''}"></label>
        <label>${t('lb.p.prio')}<select data-pk="uu_tien">${Object.keys(PP).map((k) => `<option value="${esc(k)}" ${(pre.uu_tien || 'Trung bình') === k ? 'selected' : ''}>${esc(lbl(PP, k))}</option>`).join('')}</select></label></div>
        <label>${t('lb.p.fund')}<select data-pk="nguon">${['lb.p.f1', 'lb.p.f2', 'lb.p.f3'].map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
        <label>${t('lb.p.content')}<textarea data-pk="noi_dung" rows="3">${esc(pre.noi_dung || '')}</textarea></label><p class="err" data-pe hidden></p>
        <div class="row end"><button class="btn" data-psave>${t('lb.p.create')}</button></div></div>` : `<div class="notice">${esc(t('lb.ro'))}</div>`}
        <p class="small muted" style="margin-top:10px">${esc(t('lb.p.flow'))}</p></div></div>
      <div class="card"><h3>${t('lb.p.list')}</h3>${App.ui.table([
        { t: 'ID', f: (p) => `<b>${esc(p.id)}</b>${p.hs ? `<div class="small"><a href="#/processes/hs/${esc(p.hs)}">${esc(p.hs)}</a></div>` : ''}` }, { t: t('lb.p.lab'), k: 'ptn' }, { t: t('lb.p.type'), f: (p) => esc(lbl(PT, p.loai)) },
        { t: t('lb.p.content'), f: (p) => esc(p.noi_dung) + (p.du_toan_trieu > 100 && p.loai !== 'Hiệu chuẩn' ? `<div class="small muted">${esc(t('lb.p.over'))}</div>` : '') },
        { t: t('lb.p.est'), cls: 'num', f: (p) => fmtTr(p.du_toan_trieu) }, { t: t('lb.p.prio'), f: (p) => App.ui.badge(lbl(PP, p.uu_tien), p.uu_tien === 'Cao' ? 'bad' : p.uu_tien === 'Chiến lược' ? 'navy' : '') },
        { t: t('lb.p.by'), f: (p) => esc(staffName(p.ma_cb)) }, { t: t('lb.p.status'), f: (p) => App.ui.badge(lbl(PS, p.trang_thai), PSK[p.trang_thai]) },
        { t: t('lb.c.act'), f: acts },
      ], props)}<p class="small muted">${esc(t('lb.mfa'))}</p></div>`;
    S.faultEq = null;
    body.querySelector('[data-fsend]').onclick = async () => {
      const ma = body.querySelector('[data-fe]').value, desc = body.querySelector('[data-fd]').value.trim(), sev = body.querySelector('[data-fs]').value;
      const e = eqs.find((x) => x.ma === ma);
      if (!e || !desc) { const er = body.querySelector('[data-fe-err]'); er.hidden = false; er.textContent = t('lb.f.need'); return; }
      const lab = labOf(e.ptn);
      const hs = await procCreate('QT-ĐHQT-PTN-03', { staff_id: c.u.ma_cb, unit: lab.bo_mon, asset_code: ma, warranty_until: '', fault_desc: desc, severity: VI(sev), media: '' });
      const rec = { id: App.uid('BH'), ma, ptn: e.ptn, sev, desc, by: c.u.ma_cb, at: new Date().toISOString(), hs };
      App.store.push('lb.faults', rec);
      if (sev === 'lb.f.s3' || c.canManage(e.ptn)) setEq(ma, { tinh_trang: sev === 'lb.f.s1' ? e.tinh_trang : 'Hỏng – chờ sửa' });
      App.notify(lab.ktv, 'Báo hỏng ' + ma + ' (' + e.ten + ')', '#/lab/pr'); App.notify(lab.phu_trach, 'Báo hỏng ' + ma + ' (' + e.ten + ')', '#/lab/pr');
      App.audit('BAO_HONG', 'Báo hỏng thiết bị ' + ma + ' – tạo hồ sơ ' + hs + ' (QT-ĐHQT-PTN-03)', ma, 'Quản lý tài sản PTN');
      App.ui.toast(t('lb.f.ok', { id: rec.id }), 'ok'); rer();
    };
    const ps = body.querySelector('[data-psave]');
    if (ps) ps.onclick = async () => {
      const g = (k) => body.querySelector(`[data-pk="${k}"]`).value;
      const est = parseFloat(g('du_toan_trieu')), nd = g('noi_dung').trim();
      if (!nd || isNaN(est) || est < 0) { const er = body.querySelector('[data-pe]'); er.hidden = false; er.textContent = t('lb.p.need'); return; }
      const p = { id: App.uid('DX'), ptn: g('ptn'), loai: g('loai'), noi_dung: nd, du_toan_trieu: est, ma_cb: c.u.ma_cb, uu_tien: g('uu_tien'), nguon: VI(g('nguon')),
        trang_thai: c.r === 'KTV' ? 'Nháp' : c.r === 'TBM' ? 'Nháp' : 'Chờ Khoa duyệt', tao_luc: new Date().toISOString() };
      if (est <= 100 && p.loai !== 'Đầu tư PTN mới') {
        p.hs = await procCreate('QT-ĐHQT-PTN-02', { staff_id: c.u.ma_cb, unit: labOf(p.ptn).bo_mon, item_name: nd, specs: '', quantity: 1, estimate: est * 1e6, funding_source: p.nguon, norm_check: 'QĐ 133/QĐ-ĐHQT', suppliers: '', quote_files: '' });
      }
      App.store.push('lb.props', p);
      App.audit('TAO_DE_XUAT', 'Lập đề xuất PTN ' + p.id + ' (' + p.loai + ', ' + est + ' triệu đồng)' + (p.hs ? ' – hồ sơ ' + p.hs : ''), p.id, 'Quản lý tài sản PTN');
      App.ui.toast(t('lb.p.saved', { id: p.id }), 'ok'); rer();
    };
    body.querySelectorAll('[data-pa]').forEach((b) => (b.onclick = async () => {
      const p = proposals().find((x) => x.id === b.dataset.id); if (!p) return;
      const a = b.dataset.pa;
      const next = { send: 'Chờ TBM xem xét', prop: 'Chờ Khoa duyệt', back: 'Nháp', ok: p.du_toan_trieu <= 100 && p.loai !== 'Đầu tư PTN mới' ? 'Đã duyệt – chờ P.QTTB' : 'Trình BGH', no: 'Từ chối', bgh: 'Đã duyệt – chờ P.QTTB', qttb: 'Đã duyệt' }[a];
      if (['prop', 'ok', 'no', 'bgh', 'qttb'].includes(a) && !(await mfa(t('lb.mfa') + ' – ' + p.id))) return;
      setProp(p.id, { trang_thai: next, cap_nhat: new Date().toISOString(), nguoi_cap_nhat: c.u.ma_cb });
      App.audit(a === 'no' ? 'TU_CHOI' : a === 'back' ? 'TRA_LAI' : a === 'send' || a === 'prop' ? 'GUI' : 'DUYET', 'Đề xuất PTN ' + p.id + ': ' + p.trang_thai + ' → ' + next + (a === 'bgh' || a === 'qttb' ? ' (mô phỏng)' : ''), p.id, 'Quản lý tài sản PTN');
      const lab = labOf(p.ptn);
      if (a === 'send') App.notify(lab.phu_trach, 'Đề xuất PTN ' + p.id + ' chờ TBM xem xét', '#/lab/pr');
      if (a === 'prop') App.notify('TK', 'Đề xuất PTN ' + p.id + ' chờ Khoa duyệt', '#/lab/pr');
      if (['ok', 'no', 'back'].includes(a)) App.notify(p.ma_cb, 'Đề xuất PTN ' + p.id + ': ' + next, '#/lab/pr');
      App.ui.toast(t('lb.p.done', { s: lbl(PS, next) }), 'ok'); rer();
    }));
  }

  /* ---------------------------------------------------------------- ưu tiên đầu tư */
  function invBody(body, c, rer) {
    const eqs = eqAll().filter((e) => c.faculty || c.managed.includes(e.ptn)).map((e) => Object.assign({}, e, { s: score(e) }));
    const TH = 45;
    const labs = D.labs.filter((l) => c.faculty || c.managed.includes(l.ma)).map((l) => {
      const es = eqs.filter((e) => e.ptn === l.ma);
      const val = es.reduce((a, e) => a + e.nguyen_gia_trieu * e.so_luong, 0);
      const sc = val ? es.reduce((a, e) => a + e.s.sc * e.nguyen_gia_trieu * e.so_luong, 0) / val : 0;   // bình quân gia quyền theo nguyên giá
      return { l, n: es.length, U: es.length ? es.reduce((a, e) => a + e.s.U, 0) / es.length : 0, val, rem: es.reduce((a, e) => a + e.nguyen_gia_trieu * e.so_luong * e.khau_hao_con_lai / 100, 0),
        broken: es.filter((e) => e.tinh_trang === 'Hỏng – chờ sửa').length, secs: sectionsOf(l), sc: Math.round(sc) };
    }).sort((a, b) => b.sc - a.sc);
    const sug = eqs.filter((e) => e.s.sc >= TH && e.s.action !== 'watch').sort((a, b) => b.s.sc - a.s.sc);
    const total = sug.reduce((a, e) => a + e.s.cost, 0);
    const canCreate = c.faculty || c.r === 'TBM';
    body.innerHTML = `<div class="card"><h3>${t('lb.i.formula')} ${App.ui.badge(t('lb.gd'), 'warn')}</h3><p class="small" style="margin:0">${esc(t('lb.i.f'))}</p><p class="small muted" style="margin:6px 0 0">${esc(t('lb.i.note'))}</p></div>
      <div class="grid g-1-2"><div class="card"><h3>${t('lb.i.labs')}</h3>${App.ui.chart.hbars(labs.map((x) => ({ l: x.l.ma, v: x.sc, txt: String(x.sc), c: x.sc >= 50 ? '#C53030' : x.sc >= 35 ? '#DD6B20' : '#2E3191' })), { max: 100 })}</div>
        <div class="card">${App.ui.table([{ t: t('lb.f.lab'), f: (x) => `<b>${esc(x.l.ma)}</b><div class="small muted">${esc(labName(x.l))}</div>` }, { t: 'U', cls: 'num', f: (x) => Math.round(x.U * 100) + '%' },
          { t: t('lb.k.broken'), cls: 'num', k: 'broken' }, { t: t('lb.i.secs'), cls: 'num', f: (x) => App.fmtNum(x.secs, 1) }, { t: t('lb.c.cost'), cls: 'num', f: (x) => App.fmtNum(x.val, 0) },
          { t: t('lb.value'), cls: 'num', f: (x) => App.fmtNum(x.rem, 0) }, { t: t('lb.i.score'), cls: 'num', f: (x) => `<b>${x.sc}</b>` }], labs)}</div></div>
      <div class="card"><h3>${t('lb.i.eq')}</h3>${App.ui.table([
        { t: t('lb.c.code'), f: (e) => `<b>${esc(e.ma)}</b><div class="small muted">${esc(e.ptn)}</div>` }, { t: t('lb.c.name'), f: (e) => `${esc(e.ten)}<div class="small muted">${esc(e.hang)} · ${e.nam_mua} · ×${e.so_luong}</div>` },
        { t: 'U', cls: 'num', f: (e) => Math.round(e.s.U * 100) + '%' }, { t: 'A', cls: 'num', f: (e) => Math.round(e.s.A * 100) + '%' }, { t: 'S', cls: 'num', f: (e) => App.fmtNum(e.s.S, 2) }, { t: 'N', cls: 'num', f: (e) => App.fmtNum(e.s.N, 2) },
        { t: t('lb.i.score'), cls: 'num', f: (e) => `<b style="color:${e.s.sc >= 60 ? 'var(--bad)' : 'var(--orange)'}">${e.s.sc}</b>` }, { t: t('status'), f: (e) => statusBadge(e.tinh_trang) },
        { t: t('lb.i.action'), f: (e) => App.ui.badge(t('lb.i.a.' + e.s.action), e.s.action === 'replace' ? 'bad' : e.s.action === 'fix' ? 'orange' : 'info') },
        { t: t('lb.i.cost'), cls: 'num', f: (e) => fmtTr(e.s.cost) },
        { t: t('lb.c.act'), f: (e) => (canCreate && (c.faculty || c.managed.includes(e.ptn)) ? `<button class="btn sm ghost" data-mk="${e.ma}">${t('lb.p.from')}</button>` : '') },
      ], sug)}<p class="small" style="margin-top:8px"><b>${esc(t('lb.i.total', { n: TH, v: App.fmtNum(total, 1) }))}</b></p></div>`;
    body.querySelectorAll('[data-mk]').forEach((b) => (b.onclick = () => {
      const e = sug.find((x) => x.ma === b.dataset.mk);
      const loai = { replace: 'Mua sắm mới', fix: 'Sửa chữa', cal: 'Hiệu chuẩn', add: 'Mua sắm mới' }[e.s.action];
      S.prefill = { ptn: e.ptn, loai, du_toan_trieu: e.s.cost, uu_tien: e.s.sc >= 60 ? 'Cao' : 'Trung bình', noi_dung: VI('lb.i.a.' + e.s.action) + ': ' + e.ten + ' (' + e.ma + ', ' + e.hang + ') – điểm ưu tiên ' + e.s.sc };
      S.tab = 'pr'; rer();
    }));
  }

  /* ---------------------------------------------------------------- an toàn */
  function safeBody(body, c) {
    const items = ['lb.s.c1', 'lb.s.c2', 'lb.s.c3', 'lb.s.c4', 'lb.s.c5', 'lb.s.c6', 'lb.s.c7', 'lb.s.c8'];
    const lab = S.bkLab || c.managed[0] || D.labs[0].ma;
    const log = App.store.list('lb.safety').filter((x) => x.ptn === lab);
    const last = log[log.length - 1];
    const canCheck = c.canManage(lab);
    body.innerHTML = `<div class="grid g2"><div class="card"><div class="card-h"><h3 style="margin:0">${t('lb.s.t')}</h3>
        <select data-sl>${D.labs.map((l) => `<option value="${l.ma}" ${lab === l.ma ? 'selected' : ''}>${esc(l.ma)} – ${esc(labName(l))}</option>`).join('')}</select></div>
        <ul style="list-style:none;padding:0;margin:0;display:grid;gap:8px">${items.map((k, i) => `<li><label style="flex-direction:row;align-items:flex-start;gap:8px;font-weight:400;color:var(--ink)"><input type="checkbox" data-ci="${i}" ${last && last.ok.includes(i) ? 'checked' : ''} ${canCheck ? '' : 'disabled'}> <span>${esc(t(k))}</span></label></li>`).join('')}</ul>
        ${last ? `<p class="small muted">${esc(t('lb.s.last', { d: App.fmtDT(last.at), n: last.ok.length, m: items.length }))} · ${esc(staffName(last.by))}</p>` : ''}
        ${canCheck ? `<div class="row end"><button class="btn" data-ss>${t('lb.s.save')}</button></div>` : `<p class="small muted">${esc(t('lb.ro'))}</p>`}</div>
      <div class="card"><h3>${t('lb.s.rules')}</h3><p>${esc(t('lb.s.r'))}</p><p class="small muted">${t('lb.src')}: ${esc(((App.process('QT-ĐHQT-PTN-01') || {}).legal_basis || []).join('; '))}</p></div></div>`;
    body.querySelector('[data-sl]').onchange = (e) => { S.bkLab = e.target.value; safeBody(body, c); };
    const ss = body.querySelector('[data-ss]');
    if (ss) ss.onclick = () => {
      const ok = [...body.querySelectorAll('[data-ci]')].filter((x) => x.checked).map((x) => +x.dataset.ci);
      App.store.push('lb.safety', { ptn: lab, ok, by: c.u.ma_cb, at: new Date().toISOString() });
      App.audit('KIEM_TRA_AT', 'Kiểm tra an toàn ' + lab + ': ' + ok.length + '/' + items.length + ' mục đạt', lab, 'An toàn PTN');
      App.ui.toast(t('lb.s.saved', { d: lab }), 'ok'); safeBody(body, c);
    };
  }

  App.page('lab', { render });
})();
