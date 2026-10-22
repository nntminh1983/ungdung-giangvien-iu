/* Người học & Cố vấn học tập (sv_advisor, sv_warning)
   - Phạm vi: CVHT chỉ lớp mình (ABAC A4); TBM theo ngành của Bộ môn; TK/PTK toàn Khoa; CV_DTDH toàn Trường; GV không có lớp cố vấn → báo cáo lo ngại.
   - Chi tiết: bảng điểm theo mẫu IU, tiến độ CTĐT, cảnh báo (chính thức – giả định theo TT 08/2021; sớm – ngưỡng nội bộ), tư vấn.
   - Liên hệ phụ huynh là dữ liệu cá nhân: che, mở xem cần mục đích + MFA step-up, ghi nhật ký. Báo cáo ra ngoài: giả danh hoá, k ≥ 5. */
(function () {
  const R = [
    ['st.crumb', 'Người học', 'Students'],
    ['st.h.adv', 'Lớp cố vấn học tập của tôi', 'My advisees'],
    ['st.h.dept', 'Sinh viên ngành {p}', 'Students of {p}'],
    ['st.h.fac', 'Người học toàn Khoa', 'Students – whole faculty'],
    ['st.h.school', 'Người học (P.ĐTĐH – toàn Trường)', 'Students (Academic Affairs – university-wide)'],
    ['st.h.none', 'Người học & Cố vấn học tập', 'Students & academic advising'],
    ['st.sub.adv', 'Phạm vi: chỉ SV do bạn làm CVHT (ABAC A4 – QĐ 748 Điều 9). Mỗi lần xem hồ sơ đều được ghi nhật ký.', 'Scope: only students you advise (ABAC A4 – Decision 748 Art. 9). Every record view is logged.'],
    ['st.sub.dept', 'Phạm vi: SV thuộc ngành của Bộ môn – tổng hợp, tiến độ và cảnh báo; không hiển thị liên hệ phụ huynh.', 'Scope: students of your department\'s programme – summary, progress and warnings; no parent contact.'],
    ['st.sub.fac', 'Phạm vi: toàn Khoa Điện – Điện tử. Báo cáo gửi ra ngoài đơn vị phải ẩn danh (k ≥ 5).', 'Scope: whole School of EE. Reports leaving the unit must be anonymised (k ≥ 5).'],
    ['st.sub.school', 'Phạm vi: toàn Trường (P.ĐTĐH) – theo dõi cảnh báo học vụ.', 'Scope: university-wide (Academic Affairs) – academic warning monitoring.'],
    ['st.k.n', 'Số sinh viên', 'Students'], ['st.k.red', 'Cảnh báo học vụ', 'Academic warning'], ['st.k.orange', 'Nguy cơ cao', 'High risk'], ['st.k.yellow', 'Cần theo dõi', 'Watch'],
    ['st.k.red.s', 'HK chính gần nhất (điều kiện giả định)', 'last main semester (assumed rule)'], ['st.k.early', 'theo cảnh báo sớm nội bộ', 'internal early warning'],
    ['st.f.risk', 'Mức rủi ro', 'Risk level'], ['st.f.prog', 'Ngành', 'Programme'], ['st.f.find', 'Tìm kiếm', 'Search'], ['st.f.q', 'Tên hoặc MSSV…', 'Name or student ID…'],
    ['st.v.cards', 'Thẻ', 'Cards'], ['st.v.table', 'Bảng', 'Table'],
    ['st.c.name', 'Họ tên', 'Name'], ['st.c.mssv', 'MSSV', 'Student ID'], ['st.c.class', 'Lớp', 'Class'], ['st.c.gpa', 'ĐTB tích lũy (hệ 4)', 'Cumulative GPA (4)'],
    ['st.c.last', 'ĐTB HK gần nhất', 'Last semester GPA'], ['st.c.cr', 'TC tích lũy / kế hoạch', 'Credits earned / planned'], ['st.c.risk', 'Mức rủi ro', 'Risk'],
    ['st.c.reasons', 'Lý do chính', 'Main reasons'], ['st.c.prog', 'Ngành', 'Programme'], ['st.c.cvht', 'CVHT', 'Advisor'],
    ['st.gpa.short', 'ĐTB TL', 'Cum. GPA'], ['st.last.short', 'HK gần nhất', 'Last sem.'], ['st.cr.short', 'TC tích lũy / kế hoạch', 'Credits earned / planned'],
    ['st.noreason', 'Không có dấu hiệu bất thường', 'No warning signs'],
    ['st.tab.list', 'Danh sách', 'List'], ['st.tab.fac', 'Toàn Khoa', 'Faculty view'], ['st.tab.cfg', 'Ngưỡng cảnh báo sớm', 'Early-warning thresholds'],
    ['st.tab.tr', 'Bảng điểm', 'Transcript'], ['st.tab.plan', 'Tiến độ CTĐT', 'Study plan progress'], ['st.tab.warn', 'Cảnh báo', 'Warnings'], ['st.tab.adv', 'Tư vấn', 'Advising'],
    ['st.none.t', 'Bạn chưa được phân công làm cố vấn học tập', 'You are not assigned as an academic advisor'],
    ['st.none.p', 'Ở vai trò Giảng viên, ứng dụng chỉ cho xem dữ liệu người học trong phạm vi lớp cố vấn (ABAC A4). Nếu sinh viên trong lớp học phần của mình có dấu hiệu đáng lo ngại (vắng nhiều, điểm giữa kỳ thấp, khó khăn…), Thầy/Cô gửi báo cáo bên dưới – hệ thống chuyển tới CVHT của sinh viên.', 'As a lecturer you can only see student data for your own advisees (ABAC A4). If a student in one of your classes shows worrying signs (absences, low midterm, hardship…), report it below – the system forwards it to the student\'s advisor.'],
    ['st.none.switch', 'Thầy/Cô có vai trò CVHT – chuyển sang vai trò này để xem lớp cố vấn.', 'You also hold the Advisor role – switch to it to see your advisees.'],
    ['st.none.btn', 'Chuyển sang vai trò CVHT', 'Switch to Advisor role'],
    ['st.cc.t', 'Báo cáo lo ngại về sinh viên', 'Report a concern about a student'],
    ['st.cc.st', 'Sinh viên (trong lớp học phần của tôi, HK1/2026–2027)', 'Student (in my classes, Sem 1/2026–27)'],
    ['st.cc.mssv', 'Hoặc nhập MSSV', 'Or enter a student ID'], ['st.cc.type', 'Loại lo ngại', 'Concern type'],
    ['st.cc.t1', 'Vắng học nhiều', 'Frequent absences'], ['st.cc.t2', 'Điểm giữa kỳ/bài tập thấp', 'Low midterm/assignments'], ['st.cc.t3', 'Khó khăn sức khỏe – tâm lý', 'Health / wellbeing'],
    ['st.cc.t4', 'Khó khăn kinh tế', 'Financial hardship'], ['st.cc.t5', 'Khác', 'Other'],
    ['st.cc.desc', 'Mô tả ngắn (chỉ nêu thông tin cần thiết)', 'Short description (necessary facts only)'],
    ['st.cc.consent', 'Tôi chỉ chia sẻ thông tin cần thiết cho mục đích hỗ trợ học tập (nguyên tắc tối thiểu hoá dữ liệu – Luật BVDLCN).', 'I only share information necessary for academic support (data-minimisation principle).'],
    ['st.cc.send', 'Gửi tới CVHT', 'Send to advisor'], ['st.cc.ok', 'Đã gửi báo cáo tới CVHT của sinh viên.', 'Report sent to the student\'s advisor.'],
    ['st.cc.bad', 'Không tìm thấy sinh viên hoặc chưa nhập mô tả.', 'Student not found or description missing.'],
    ['st.cc.mine', 'Báo cáo tôi đã gửi', 'Reports I sent'], ['st.cc.in', 'Báo cáo lo ngại từ giảng viên', 'Concerns reported by lecturers'],
    ['st.cc.from', 'Người báo cáo', 'Reported by'], ['st.cc.course', 'Học phần', 'Course'], ['st.cc.nocls', 'Không có lớp học phần trong học kỳ hiện tại', 'No class sections this semester'],
    ['st.noscope', 'Sinh viên này không thuộc phạm vi dữ liệu của vai trò hiện tại (ABAC A4). Lượt truy cập đã được ghi nhật ký.', 'This student is outside the data scope of your active role (ABAC A4). The attempt has been logged.'],
    ['st.back', '← Danh sách', '← Back to list'],
    ['st.d.prog', 'Ngành', 'Programme'], ['st.d.cohort', 'Khoá – lớp', 'Cohort – class'], ['st.d.cvht', 'CVHT', 'Advisor'], ['st.d.eng', 'Tiếng Anh', 'English'],
    ['st.d.gpa', 'ĐTB tích lũy (hệ 4)', 'Cumulative GPA (4-point)'], ['st.d.cr', 'TC tích lũy / kế hoạch', 'Credits earned / planned'], ['st.d.owed', 'TC nợ (chưa đạt)', 'Owed credits'],
    ['st.d.offn', 'Lần cảnh báo học vụ', 'Academic warnings'], ['st.d.of', 'trên {n} TC của CTĐT', 'of {n} programme credits'], ['st.d.score', 'Điểm rủi ro {s}', 'Risk score {s}'],
    ['st.tr.stt', 'STT', 'No.'], ['st.tr.code', 'Mã môn', 'Code'], ['st.tr.name', 'Tên môn', 'Course'], ['st.tr.tc', 'TC', 'Cr'],
    ['st.tr.pqt', '% QT', '% CW'], ['st.tr.pkt', '% KT', '% MT'], ['st.tr.pthi', '% Thi', '% Exam'], ['st.tr.qt', 'QT', 'CW'], ['st.tr.kt', 'KT', 'MT'], ['st.tr.thi', 'Thi', 'Exam'],
    ['st.tr.tk10', 'TK(10)', 'Total(10)'], ['st.tr.tkch', 'TK(CH)', 'Letter'],
    ['st.tr.term', 'Học kỳ {h} - Năm học {y}', 'Semester {h} - Academic year {y}'],
    ['st.tr.s1', 'Điểm trung bình học kỳ hệ 10/100:', 'Semester average (10/100 scale):'], ['st.tr.s2', 'Điểm trung bình học kỳ hệ 4:', 'Semester GPA (4-point):'],
    ['st.tr.s3', 'Điểm trung bình tích lũy (hệ 10):', 'Cumulative average (10 scale):'], ['st.tr.s4', 'Điểm trung bình tích lũy (hệ 4):', 'Cumulative GPA (4-point):'],
    ['st.tr.s5', 'Số tín chỉ đạt:', 'Credits passed:'], ['st.tr.s6', 'Số tín chỉ tích lũy:', 'Credits accumulated:'], ['st.tr.s7', 'Phân loại điểm trung bình HK:', 'Semester classification:'],
    ['st.tr.s8', 'Cảnh báo học tập (điều kiện giả định):', 'Academic warning (assumed rule):'],
    ['st.tr.retake', 'Học lại', 'Retake'], ['st.tr.nogpa', 'không tính TBC', 'not in GPA'],
    ['st.tr.note', 'TK(10) = điểm tổng kết thang 100 chia 10; điểm chữ quy đổi theo thang điểm IU. Trọng số QT/KT/Thi theo đề cương từng học phần (dữ liệu giả lập: 30/30/40). Môn chưa đạt được tô đỏ.', 'Total(10) = 100-point total / 10; letters converted with the IU grading scale. CW/MT/Exam weights follow each syllabus (simulated: 30/30/40). Failed courses in red.'],
    ['st.tr.class', 'Phân loại theo ĐTB thang 100', 'Classification by 100-point average'],
    ['st.pl.ok', 'Đã đạt', 'Passed'], ['st.pl.bad', 'Chưa đạt', 'Failed'], ['st.pl.cur', 'Đang học (HK hiện tại)', 'In progress (current sem.)'],
    ['st.pl.todo', 'Chưa học', 'Not yet taken'], ['st.pl.blk', 'Bị chặn bởi môn tiên quyết', 'Blocked by a prerequisite'], ['st.pl.tc', 'Tự chọn', 'Elective'],
    ['st.pl.sem', 'Học kỳ {n}', 'Semester {n}'], ['st.pl.summer', 'Học kỳ hè', 'Summer'], ['st.pl.cr', '{n} TC', '{n} cr'], ['st.pl.years', '{n} năm', '{n} years'],
    ['st.pl.pre', 'Tiên quyết: {l}', 'Prerequisites: {l}'], ['st.pl.chart', 'Tín chỉ tích lũy so với kế hoạch', 'Credits earned vs. study plan'],
    ['st.pl.chart.s', 'Cột: TC tích lũy sau mỗi HK chính · vạch đỏ: TC theo kế hoạch CTĐT', 'Bars: credits earned after each main semester · red tick: planned credits'],
    ['st.pl.blocked', 'Học phần đang bị chặn', 'Blocked courses'], ['st.pl.missing', 'Thiếu tiên quyết', 'Missing prerequisite'],
    ['st.pl.el', 'Danh mục tự chọn chuyên ngành', 'Programme electives'], ['st.pl.el.s', 'SV chọn đủ số TC tự chọn theo kế hoạch đào tạo.', 'Students choose enough elective credits as planned.'],
    ['st.pl.other', 'Học phần ngoài kế hoạch đã học', 'Other courses taken'], ['st.pl.total', 'Tổng TC tích lũy', 'Total credits earned'],
    ['st.w.off', 'Cảnh báo học vụ chính thức', 'Official academic warnings'],
    ['st.w.off.note', 'Điều kiện cảnh báo lấy theo TT 08/2021 Điều 11.2 vì Quy chế đào tạo đại học của IU (QĐ 719/QĐ-ĐHQT năm 2021) chưa được cung cấp – kết quả chỉ để tham khảo, cần đối chiếu với P.ĐTĐH.', 'Warning conditions follow Circular 08/2021 Art. 11.2 because IU\'s undergraduate regulation (Decision 719/2021) was not provided – results are indicative and must be checked with Academic Affairs.'],
    ['st.w.none', 'Không có cảnh báo học vụ chính thức.', 'No official academic warning.'], ['st.w.term', 'Học kỳ', 'Semester'], ['st.w.reasons', 'Điều kiện vi phạm', 'Conditions met'],
    ['st.w.streak', 'Số lần cảnh báo liên tiếp gần nhất: {n} · buộc thôi học khi vượt quá {m} lần liên tiếp', 'Latest consecutive warnings: {n} · dismissal when more than {m} consecutive'],
    ['st.w.early', 'Cảnh báo sớm (nội bộ CVHT)', 'Early warnings (advisor-internal)'],
    ['st.w.early.note', 'Cảnh báo sớm dùng ngưỡng nội bộ do Khoa cấu hình để CVHT can thiệp kịp thời; không thay thế quy chế và không ghi vào hồ sơ học vụ.', 'Early warnings use faculty-configured internal thresholds so advisors can act early; they do not replace the regulation and are not recorded in the academic file.'],
    ['st.w.noearly', 'Không có dấu hiệu cảnh báo sớm.', 'No early-warning signs.'], ['st.w.thr', 'Ngưỡng đang áp dụng', 'Thresholds in use'],
    ['st.sev.3', 'Cao', 'High'], ['st.sev.2', 'Trung bình', 'Medium'], ['st.sev.1', 'Thấp', 'Low'],
    ['st.w.trend', 'Diễn biến ĐTB (hệ 4)', 'GPA trend (4-point)'], ['st.w.semgpa', 'ĐTB học kỳ', 'Semester GPA'], ['st.w.cumgpa', 'ĐTB tích lũy', 'Cumulative GPA'],
    ['st.w.ref1', 'CB học kỳ {x} (giả định)', 'Sem. warning {x} (assumed)'], ['st.w.ref2', 'Cảnh báo sớm {x}', 'Early warning {x}'],
    ['st.w.drl', 'Điểm rèn luyện (ĐRL)', 'Conduct score'], ['st.w.drl.c', 'Xếp loại', 'Class'], ['st.w.drl.d', 'Điểm', 'Score'],
    ['st.w.cur', 'Học kỳ hiện tại – chuyên cần và giữa kỳ', 'Current semester – attendance & midterm'],
    ['st.w.abs', 'Vắng / số buổi', 'Absent / sessions'], ['st.w.mid', 'Giữa kỳ', 'Midterm'], ['st.w.nocur', 'Chưa đăng ký học phần trong học kỳ hiện tại.', 'No courses registered this semester.'],
    ['st.w.hidden', 'Vai trò hiện tại không được xem trường dữ liệu này theo Core metadata (trường "{f}").', 'Your active role may not view this field under the core metadata (field "{f}").'],
    ['st.a.notes', 'Nhật ký tư vấn', 'Advising log'], ['st.a.add', 'Thêm ghi chú tư vấn', 'Add advising note'], ['st.a.chan', 'Hình thức', 'Channel'], ['st.a.content', 'Nội dung', 'Content'],
    ['st.a.by', 'Người ghi', 'By'], ['st.a.ch1', 'Gặp trực tiếp', 'In person'], ['st.a.ch2', 'Trực tuyến', 'Online'], ['st.a.ch3', 'Email', 'Email'], ['st.a.ch4', 'Điện thoại', 'Phone'],
    ['st.a.saved', 'Đã lưu ghi chú tư vấn.', 'Advising note saved.'], ['st.a.empty', 'Vui lòng nhập nội dung tư vấn.', 'Please enter the note.'],
    ['st.a.actions', 'Thao tác của CVHT', 'Advisor actions'], ['st.a.email', 'Gửi email cảnh báo', 'Send warning email'], ['st.a.meet', 'Hẹn gặp', 'Schedule a meeting'],
    ['st.a.parent', 'Liên hệ phụ huynh', 'Contact parent'], ['st.a.nh01', 'Tạo hồ sơ quy trình NH-01', 'Open process record NH-01'],
    ['st.a.contact', 'Thông tin liên hệ', 'Contact information'], ['st.a.semail', 'Email SV', 'Student email'], ['st.a.sphone', 'Điện thoại SV', 'Student phone'],
    ['st.a.pinfo', 'Phụ huynh', 'Parent / guardian'], ['st.a.reveal', 'Mở xem (MFA)', 'Reveal (MFA)'], ['st.a.revealed', 'Đang mở xem – hiệu lực đến {t}', 'Revealed – valid until {t}'],
    ['st.a.purpose', 'Mục đích liên hệ phụ huynh', 'Purpose of contacting the parent'],
    ['st.a.p1', 'Thông báo cảnh báo kết quả học tập (QĐ 748 Điều 9.7)', 'Notify academic warning (Decision 748 Art. 9.7)'],
    ['st.a.p2', 'SV vắng học kéo dài, không liên lạc được', 'Prolonged absence, student unreachable'], ['st.a.p3', 'Trường hợp khẩn cấp (sức khỏe, an toàn)', 'Emergency (health, safety)'],
    ['st.a.pnote', 'Liên hệ phụ huynh là dữ liệu cá nhân: chỉ CVHT và P.ĐTĐH được mở xem, phải nêu mục đích, xác thực lại MFA; hiệu lực 5 phút và được ghi nhật ký.', 'Parent contact is personal data: only the advisor and Academic Affairs may reveal it, with a purpose and MFA step-up; valid 5 minutes and logged.'],
    ['st.a.call', 'Ghi nhận đã liên hệ', 'Log the call'], ['st.a.called', 'Đã liên hệ phụ huynh qua điện thoại – mục đích: {p}', 'Called the parent – purpose: {p}'],
    ['st.a.to', 'Người nhận', 'To'], ['st.a.cc', 'CC', 'CC'], ['st.a.subj', 'Tiêu đề', 'Subject'], ['st.a.body', 'Nội dung (song ngữ)', 'Body (bilingual)'],
    ['st.a.sim', 'Gửi mô phỏng – bản trình diễn không gửi email thật.', 'Simulated – the demo does not send real email.'],
    ['st.a.sent', 'Đã gửi email cảnh báo (mô phỏng) và ghi nhật ký.', 'Warning email sent (simulated) and logged.'],
    ['st.a.mdate', 'Ngày', 'Date'], ['st.a.mtime', 'Giờ', 'Time'], ['st.a.mplace', 'Địa điểm / hình thức', 'Place / mode'],
    ['st.a.mplace1', 'VP Bộ môn – giờ tiếp sinh viên', 'Department office – office hours'], ['st.a.mplace2', 'Trực tuyến (MS Teams)', 'Online (MS Teams)'],
    ['st.a.mnote', 'Nội dung trao đổi dự kiến', 'Agenda'], ['st.a.msaved', 'Đã tạo lịch hẹn và gửi thư mời (mô phỏng).', 'Meeting scheduled and invitation sent (simulated).'],
    ['st.a.appts', 'Lịch hẹn', 'Appointments'], ['st.a.noappt', 'Chưa có lịch hẹn.', 'No appointments.'],
    ['st.a.nh01ok', 'Đã tạo hồ sơ {id} theo quy trình QT-ĐHQT-NH-01 (Cố vấn học tập và cảnh báo kết quả học tập).', 'Created record {id} under process QT-ĐHQT-NH-01 (Academic advising and warning).'], ['st.a.open', 'Mở hồ sơ', 'Open record'],
    ['st.a.mailnote', 'Đã gửi email cảnh báo: {s}', 'Sent warning email: {s}'], ['st.a.meetnote', 'Hẹn gặp {d} {t} – {p}', 'Meeting {d} {t} – {p}'],
    ['st.a.ro', 'Chỉ CVHT của sinh viên được ghi nhật ký tư vấn; vai trò hiện tại chỉ xem.', 'Only the student\'s advisor can add notes; read-only for your role.'],
    ['st.fac.dist', 'Phân bố mức rủi ro', 'Risk distribution'], ['st.fac.prog', 'Theo ngành đào tạo', 'By programme'],
    ['st.fac.n', 'Số SV', 'Students'], ['st.fac.avg', 'ĐTB TL bình quân', 'Avg. cum. GPA'], ['st.fac.pp', 'Tiến độ TC bình quân', 'Avg. credit progress'],
    ['st.fac.offlist', 'Sinh viên có cảnh báo học vụ (điều kiện giả định)', 'Students with academic warnings (assumed rule)'],
    ['st.fac.cnt', 'Số lần', 'Count'], ['st.fac.lastw', 'HK gần nhất', 'Latest'],
    ['st.fac.exp', 'Xuất báo cáo ẩn danh', 'Anonymised export'],
    ['st.fac.exp.p', 'Báo cáo gửi ra ngoài đơn vị chỉ dùng mã giả danh, không chứa họ tên, MSSV, liên hệ; ĐTB và tiến độ được gộp theo khoảng. Nhóm ngành có dưới 5 SV được gộp thành "EE – gộp" (ABAC A8, k ≥ 5).', 'Reports leaving the unit use pseudonyms only – no names, student IDs or contacts; GPA and progress are banded. Programme groups with fewer than 5 students are merged into "EE – merged" (ABAC A8, k ≥ 5).'],
    ['st.fac.exp.b', 'Tải CSV ẩn danh', 'Download anonymised CSV'], ['st.fac.exp.ok', 'Đã xuất {n} dòng ẩn danh; thao tác được ghi nhật ký.', 'Exported {n} anonymised rows; action logged.'],
    ['st.fac.exp.k', 'Kiểm tra k-ẩn danh: {l}', 'k-anonymity check: {l}'], ['st.fac.merged', 'gộp (k < 5)', 'merged (k < 5)'],
    ['st.cfg.t', 'Ngưỡng cảnh báo sớm (nội bộ Khoa)', 'Early-warning thresholds (faculty-internal)'],
    ['st.cfg.p', 'Đây là ngưỡng nội bộ giúp CVHT phát hiện sớm và hỗ trợ sinh viên, tách biệt với điều kiện cảnh báo học vụ của quy chế (không chỉnh được tại đây). Thay đổi áp dụng cho toàn bộ cảnh báo sớm trong ứng dụng, cần xác thực MFA và được ghi nhật ký.', 'These internal thresholds help advisors detect and support students early; they are separate from the regulation\'s academic-warning conditions (not editable here). Changes apply app-wide, require MFA and are logged.'],
    ['st.cfg.lowSem', 'ĐTB học kỳ thấp (hệ 4) dưới', 'Low semester GPA (4-point) below'], ['st.cfg.behindPct', 'TC tích lũy dưới (% kế hoạch)', 'Credits earned below (% of plan)'],
    ['st.cfg.behindCr', 'hoặc thiếu so với kế hoạch từ (TC)', 'or behind plan by at least (credits)'], ['st.cfg.dropGpa', 'ĐTB giảm từ (điểm hệ 4)', 'GPA drop of at least (4-point)'],
    ['st.cfg.absPct', 'Vắng từ (% số buổi)', 'Absent at least (% of sessions)'], ['st.cfg.midLow', 'Điểm giữa kỳ dưới (thang 100)', 'Midterm below (100-point)'],
    ['st.cfg.drlWeak', 'ĐRL học kỳ gần nhất dưới', 'Last conduct score below'], ['st.cfg.drlLow', 'ĐRL 2 HK liên tiếp dưới', 'Conduct score 2 semesters below'],
    ['st.cfg.def', 'Mặc định', 'Default'], ['st.cfg.save', 'Lưu ngưỡng', 'Save thresholds'], ['st.cfg.reset', 'Khôi phục mặc định', 'Restore defaults'],
    ['st.cfg.saved', 'Đã lưu ngưỡng cảnh báo sớm.', 'Early-warning thresholds saved.'], ['st.cfg.bad', 'Giá trị không hợp lệ.', 'Invalid value.'],
    ['st.cfg.preview', 'Kết quả với ngưỡng hiện tại: {r} cảnh báo học vụ · {o} nguy cơ cao · {y} cần theo dõi · {g} bình thường', 'Result with current thresholds: {r} academic warning · {o} high risk · {y} watch · {g} normal'],
    ['st.cfg.src', 'Ngưỡng nội bộ của Khoa (không phải quy chế)', 'Faculty-internal thresholds (not a regulation)'],
    ['st.src', 'Căn cứ', 'Basis'], ['st.st.gia_dinh', 'giả định', 'assumed'], ['st.st.ban_hanh', 'ban hành', 'in force'], ['st.st.du_thao', 'dự thảo', 'draft'], ['st.st.suy_ra', 'suy ra', 'inferred'],
    ['st.empty', 'Không có sinh viên phù hợp bộ lọc.', 'No students match the filter.'],
  ];
  const vi = {}, en = {};
  R.forEach((r) => { vi[r[0]] = r[1]; en[r[0]] = r[2]; });
  App.addI18n({ vi, en });
})();

(function () {
  'use strict';
  const t = App.t, esc = App.esc, D = App.D, C = App.calc;
  const AC = (D.rules && D.rules.academic) || {};
  const EARLY_DEFAULT = Object.assign({}, C.EARLY);
  const EARLY_KEYS = ['lowSem', 'behindPct', 'behindCr', 'dropGpa', 'absPct', 'midLow', 'drlWeak', 'drlLow'];
  function applyEarly() { const s = App.store.get()['st.early'] || {}; EARLY_KEYS.forEach((k) => { C.EARLY[k] = s[k] != null && !isNaN(s[k]) ? +s[k] : EARLY_DEFAULT[k]; }); }
  applyEarly();

  const F = { risk: '', prog: '', q: '', view: 'cards', tab: 'list' };
  const dec = (x, d) => (x == null || isNaN(x) ? '–' : App.lang === 'vi' ? x.toFixed(d).replace('.', ',') : x.toFixed(d));
  const g2 = (x) => dec(x, 2), g1 = (x) => dec(x, 1);
  const VI = (k) => App.i18n.vi[k] || k;
  const stPhoto = (st) => (App.anon ? 'assets/img/avatar.svg' : st.photo);
  const stId = (st) => (App.anon ? App.pseudo(st.mssv, 'SV') : st.mssv);
  const stuOf = (mssv) => D.students.find((s) => s.mssv === mssv);
  const progName = (code) => App.L(D.curricula[code] || { vi: code, en: code });
  const statusBadge = (s) => { const k = String(s || '').split(/[\s/(]/)[0]; if (!k) return ''; const lbl = App.i18n.vi['st.st.' + k] ? t('st.st.' + k) : k; return App.ui.badge(lbl, k === 'ban_hanh' ? 'ok' : k === 'du_thao' ? 'info' : 'warn'); };
  const srcLine = (src, status) => (src ? `<p class="small muted" style="margin:6px 0 0">${t('st.src')}: ${esc(src)} ${statusBadge(status)}</p>` : '');
  const riskTag = (lv) => `<span class="risk ${lv}">${esc(C.riskLabel(lv))}</span>`;
  const riskVar = (lv) => ({ red: 'bad', orange: 'orange', yellow: 'warn', green: 'ok' })[lv];
  const sevBadge = (s) => App.ui.badge(t('st.sev.' + s), s >= 3 ? 'bad' : s === 2 ? 'orange' : 'warn');
  const studentEntity = () => (D.metadata.entities || []).find((e) => e.key === 'student') || { fields: [] };
  /* quyền xem một trường dữ liệu người học theo Core metadata (view[] chứa vai trò hoạt động) */
  function canView(key) { const f = studentEntity().fields.find((x) => x.key === key); return !f || (f.view || []).includes(App.role()); }
  const fieldName = (key) => { const f = studentEntity().fields.find((x) => x.key === key); return f ? App.L(f) : key; };

  /* phạm vi theo vai trò hoạt động */
  function ctx() {
    const u = App.user(), r = u.role;
    let mode = 'none', list = [];
    if (r === 'CVHT') { mode = 'adv'; list = D.students.filter((s) => s.cvht === u.ma_cb); }
    else if (r === 'TBM') { mode = 'dept'; list = D.students.filter((s) => s.nganh === u.bo_mon); }
    else if (r === 'TK' || r === 'PTK') { mode = 'fac'; list = D.students.slice(); }
    else if (r === 'CV_DTDH') { mode = 'school'; list = D.students.slice(); }
    return { u, r, mode, list };
  }
  function analyse(st) { const S = C.student(st.mssv); return { st, S, R: C.risk(S) }; }
  function reasons(Rk, S) {
    const lastMain = S.terms.filter((x) => x.main).slice(-1)[0];
    const off = Rk.off.filter((o) => lastMain && o.k === lastMain.k).reduce((a, o) => a.concat(o.reasons), []);
    return off.concat(Rk.early.slice().sort((a, b) => b.sev - a.sev).map((e) => e.t));
  }
  const lastSem = (S) => S.terms.filter((z) => z.main && z.sem != null).slice(-1)[0];
  /* ĐTB tích lũy thang 100 và TC đạt theo từng học kỳ (cùng quy tắc lấy điểm cao nhất như App.calc.student) */
  function extras(S) {
    const best = {};
    return S.terms.map((tm) => {
      tm.rows.filter((r) => r.tk != null && r.tc > 0).forEach((r) => { if (!best[r.ma_hp] || r.tk > best[r.ma_hp].tk) best[r.ma_hp] = r; });
      const bs = Object.values(best); const cr = bs.reduce((a, b) => a + b.tc, 0);
      return { cum100: cr ? bs.reduce((a, b) => a + b.tc * b.tk, 0) / cr : null, passed: tm.reg - tm.failed };
    });
  }
  function class100(v) {
    const it = ((AC.gpa_class && AC.gpa_class.items) || []).slice().sort((a, b) => b.min100 - a.min100).find((x) => v >= x.min100);
    return it ? App.L(it) : '–';
  }
  function drlClass(d) {
    const it = ((AC.drl && AC.drl.classes) || []).slice().sort((a, b) => b.min - a.min).find((x) => d >= x.min);
    return it ? App.L(it) : '';
  }
  function termTitle(k) { const m = /^(\d{4})-(\d{4})\/HK(\d)$/.exec(k); return m ? t('st.tr.term', { h: m[3], y: m[1] + '-' + m[2] }) : k; }
  function download(name, text) {
    const blob = new Blob(['﻿' + text], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  const notesOf = (mssv) => D.advising_notes.filter((n) => n.mssv === mssv).concat(App.store.list('st.notes').filter((n) => n.mssv === mssv))
    .sort((a, b) => String(b.ngay).localeCompare(String(a.ngay)));
  const todayIso = () => D.meta.today;
  const chanLabel = (k) => { const map = { 'Gặp trực tiếp': 'st.a.ch1', 'Trực tuyến': 'st.a.ch2', Email: 'st.a.ch3', 'Điện thoại': 'st.a.ch4' }; return map[k] ? t(map[k]) : k; };

  /* ===================================================================== danh sách */
  function renderList(main) {
    applyEarly();
    const c = ctx();
    const title = { adv: t('st.h.adv'), dept: t('st.h.dept', { p: progName(c.u.bo_mon) }), fac: t('st.h.fac'), school: t('st.h.school'), none: t('st.h.none') }[c.mode];
    const sub = { adv: t('st.sub.adv'), dept: t('st.sub.dept'), fac: t('st.sub.fac'), school: t('st.sub.school'), none: '' }[c.mode];
    let html = `<div class="page-h"><div><div class="crumb">${t('st.crumb')}</div><h1>${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ''}</div></div>`;
    if (c.mode === 'none') { main.innerHTML = html + '<div data-none></div>'; renderNone(main.querySelector('[data-none]'), c); return; }
    const items = c.list.map(analyse);
    const cnt = (lv) => items.filter((x) => x.R.level === lv).length;
    html += `<div class="kpis">${App.ui.kpi(t('st.k.n'), items.length, esc([...new Set(c.list.map((s) => s.lop))].join(', ')), 'cyan')}
      ${App.ui.kpi(t('st.k.red'), cnt('red'), esc(t('st.k.red.s')), cnt('red') ? 'bad' : 'ok')}
      ${App.ui.kpi(t('st.k.orange'), cnt('orange'), esc(t('st.k.early')), cnt('orange') ? 'warn' : 'ok')}
      ${App.ui.kpi(t('st.k.yellow'), cnt('yellow'), esc(t('st.k.early')), '')}</div>`;
    const tabs = [{ k: 'list', t: t('st.tab.list') }];
    if (c.mode === 'fac' || c.mode === 'school') tabs.push({ k: 'fac', t: t('st.tab.fac') });
    if (c.r === 'TK' || c.r === 'PTK') tabs.push({ k: 'cfg', t: t('st.tab.cfg') });
    if (!tabs.some((x) => x.k === F.tab)) F.tab = 'list';
    main.innerHTML = html + (tabs.length > 1 ? '<div data-tabs></div>' : '') + '<div data-body></div>';
    const body = main.querySelector('[data-body]');
    const show = (k) => {
      F.tab = k;
      if (k === 'list') listBody(body, c, items);
      if (k === 'fac') facBody(body, c, items);
      if (k === 'cfg') cfgBody(body, c, items, () => renderList(main));
    };
    if (tabs.length > 1) App.ui.tabs(main.querySelector('[data-tabs]'), tabs, F.tab, show);
    show(F.tab);
  }

  function listBody(body, c, items) {
    const progs = [...new Set(c.list.map((s) => s.nganh))];
    body.innerHTML = `<div class="card no-print" style="padding:12px 16px"><div class="row" style="gap:10px;flex-wrap:wrap;align-items:flex-end">
        <label>${t('st.f.risk')}<select data-f="risk"><option value="">${t('all')}</option>${['red', 'orange', 'yellow', 'green'].map((l) => `<option value="${l}" ${F.risk === l ? 'selected' : ''}>${esc(C.riskLabel(l))}</option>`).join('')}</select></label>
        ${progs.length > 1 ? `<label>${t('st.f.prog')}<select data-f="prog"><option value="">${t('all')}</option>${progs.map((p) => `<option value="${p}" ${F.prog === p ? 'selected' : ''}>${esc(progName(p))}</option>`).join('')}</select></label>` : ''}
        <label style="flex:1;min-width:180px">${t('st.f.find')}<input data-f="q" value="${esc(F.q)}" placeholder="${esc(t('st.f.q'))}"></label>
        <div class="row" style="gap:4px"><button class="btn sm ${F.view === 'cards' ? '' : 'ghost'}" data-v="cards">${t('st.v.cards')}</button><button class="btn sm ${F.view === 'table' ? '' : 'ghost'}" data-v="table">${t('st.v.table')}</button></div>
      </div></div><div data-res></div><div data-concerns></div>`;
    const res = body.querySelector('[data-res]');
    const draw = () => {
      const q = F.q.trim().toLowerCase();
      const rows = items.filter((x) => (!F.risk || x.R.level === F.risk) && (!F.prog || x.st.nganh === F.prog) &&
        (!q || App.name(x.st).toLowerCase().includes(q) || (!App.anon && x.st.mssv.toLowerCase().includes(q))))
        .sort((a, b) => b.R.score - a.R.score);
      if (!rows.length) { res.innerHTML = App.ui.empty(t('st.empty')); return; }
      if (F.view === 'table') {
        res.innerHTML = App.ui.table([
          { t: t('st.c.name'), f: (x) => `<div class="row" style="gap:8px;flex-wrap:nowrap"><img src="${stPhoto(x.st)}" alt="" style="width:30px;height:40px;object-fit:cover;border-radius:4px"><b>${esc(App.name(x.st))}</b></div>` },
          { t: t('st.c.mssv'), f: (x) => esc(stId(x.st)) }, { t: t('st.c.class'), f: (x) => esc(x.st.lop) },
          { t: t('st.c.gpa'), cls: 'num', f: (x) => g2(x.S.last.cum) }, { t: t('st.c.last'), cls: 'num', f: (x) => { const m = lastSem(x.S); return m ? g2(m.sem) : '–'; } },
          { t: t('st.c.cr'), cls: 'num', f: (x) => `${x.S.last.acc || 0} / ${x.S.last.expected || 0}` },
          { t: t('st.c.risk'), f: (x) => riskTag(x.R.level) },
          { t: t('st.c.reasons'), f: (x) => `<span class="small">${esc(reasons(x.R, x.S).slice(0, 2).join(' · ') || t('st.noreason'))}</span>` },
        ], rows, { rowAttr: (x) => `class="click" data-open="${esc(x.st.mssv)}"` });
      } else {
        res.innerHTML = `<div class="grid g3">${rows.map((x) => {
          const m = lastSem(x.S), L = x.S.last, pct = L.expected ? L.acc / L.expected * 100 : 100;
          const rs = reasons(x.R, x.S).slice(0, 3);
          return `<div class="card" data-open="${esc(x.st.mssv)}" role="link" tabindex="0" style="cursor:pointer;margin:0;border-top:4px solid var(--${riskVar(x.R.level)})">
            <div style="display:flex;gap:12px"><img src="${stPhoto(x.st)}" alt="" style="width:60px;height:80px;object-fit:cover;border-radius:6px;border:1px solid var(--line);flex:none">
            <div style="min-width:0;flex:1"><b style="color:var(--navy-dd)">${esc(App.name(x.st))}</b><div class="small muted">${esc(stId(x.st))} · ${esc(x.st.lop)}</div>
            <div style="margin:4px 0">${riskTag(x.R.level)}</div>
            <div class="small">${t('st.gpa.short')} <b>${g2(L.cum)}</b> · ${t('st.last.short')} <b>${m ? g2(m.sem) : '–'}</b></div></div></div>
            <div class="small" style="margin-top:8px">${t('st.cr.short')}: <b>${L.acc || 0}</b> / ${L.expected || 0}</div>${App.ui.progress(pct, pct >= 95 ? 'ok' : pct >= 85 ? 'warn' : 'bad')}
            <ul class="small" style="margin:8px 0 0;padding-left:18px;color:var(--ink-2)">${rs.length ? rs.map((r) => `<li>${esc(r)}</li>`).join('') : `<li>${esc(t('st.noreason'))}</li>`}</ul></div>`;
        }).join('')}</div>`;
      }
      res.querySelectorAll('[data-open]').forEach((el) => {
        el.onclick = () => App.go('#/students/' + encodeURIComponent(el.dataset.open));
        el.onkeydown = (e) => { if (e.key === 'Enter') el.click(); };
      });
    };
    body.querySelectorAll('[data-f]').forEach((el) => (el[el.tagName === 'INPUT' ? 'oninput' : 'onchange'] = () => { F[el.dataset.f] = el.value; draw(); }));
    body.querySelectorAll('[data-v]').forEach((b) => (b.onclick = () => { F.view = b.dataset.v; listBody(body, c, items); }));
    draw();
    if (c.mode === 'adv') {
      const cc = App.store.list('st.concerns').filter((x) => c.list.some((s) => s.mssv === x.mssv)).reverse();
      if (cc.length) body.querySelector('[data-concerns]').innerHTML = `<div class="card" style="margin-top:16px"><h3>${t('st.cc.in')}</h3>${App.ui.table([
        { t: t('date'), f: (x) => App.fmtDT(x.at) }, { t: t('st.c.name'), f: (x) => `<a href="#/students/${esc(x.mssv)}">${esc(App.name(stuOf(x.mssv)))}</a>` },
        { t: t('st.cc.course'), k: 'course' }, { t: t('st.cc.type'), f: (x) => esc(t(x.type)) }, { t: t('st.a.content'), k: 'text' },
        { t: t('st.cc.from'), f: (x) => esc(App.name(App.staff(x.by), { title: true })) }], cc)}</div>`;
    }
  }

  /* GV không có lớp cố vấn: trạng thái trống có giải thích + báo cáo lo ngại gửi CVHT */
  function renderNone(el, c) {
    const u = c.u;
    const myCodes = D.teaching.filter((x) => x.ma_cb === u.ma_cb && x.nam_hoc === '2026-2027' && x.hoc_ky === 1).map((x) => x.ma_hp);
    const opts = [];
    D.current_term.filter((x) => myCodes.includes(x.ma_hp)).forEach((x) => { if (!opts.some((o) => o.mssv === x.mssv && o.hp === x.ma_hp)) opts.push({ mssv: x.mssv, hp: x.ma_hp }); });
    const mine = App.store.list('st.concerns').filter((x) => x.by === u.ma_cb).reverse();
    const types = ['st.cc.t1', 'st.cc.t2', 'st.cc.t3', 'st.cc.t4', 'st.cc.t5'];
    el.innerHTML = `<div class="card"><h3>${t('st.none.t')}</h3><p class="muted" style="margin:0">${esc(t('st.none.p'))}</p>
      ${u.roles.includes('CVHT') ? `<div class="notice" style="margin:12px 0 0">${esc(t('st.none.switch'))} <button class="btn sm" data-sw>${t('st.none.btn')}</button></div>` : ''}</div>
      <div class="grid g2"><div class="card"><h3>${t('st.cc.t')}</h3><div class="stack">
        <label>${t('st.cc.st')}<select data-s>${opts.length ? opts.map((o, i) => { const s = stuOf(o.mssv); return `<option value="${i}">${esc(App.name(s))} (${esc(stId(s))}) – ${esc(o.hp)}</option>`; }).join('') : `<option value="">${esc(t('st.cc.nocls'))}</option>`}</select></label>
        <label>${t('st.cc.mssv')}<input data-m placeholder="EEEEIU23…"></label>
        <label>${t('st.cc.type')}<select data-ty>${types.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
        <label>${t('st.cc.desc')}<textarea data-d rows="3"></textarea></label>
        <label style="flex-direction:row;align-items:flex-start;gap:8px;font-weight:400"><input type="checkbox" data-c> <span>${esc(t('st.cc.consent'))}</span></label>
        <p class="err" hidden></p><div class="row end"><button class="btn" data-send>${t('st.cc.send')}</button></div></div></div>
      <div class="card"><h3>${t('st.cc.mine')}</h3>${App.ui.table([{ t: t('date'), f: (x) => App.fmtDT(x.at) }, { t: t('st.c.mssv'), f: (x) => esc(App.anon ? App.pseudo(x.mssv, 'SV') : x.mssv) },
        { t: t('st.cc.type'), f: (x) => esc(t(x.type)) }, { t: t('st.a.content'), k: 'text' }], mine)}</div></div>`;
    const sw = el.querySelector('[data-sw]');
    if (sw) sw.onclick = () => { App.setRole('CVHT'); App.go('#/students'); };
    el.querySelector('[data-send]').onclick = () => {
      const err = el.querySelector('.err');
      const typed = el.querySelector('[data-m]').value.trim().toUpperCase();
      const sel = el.querySelector('[data-s]').value;
      const o = typed ? { mssv: typed, hp: '' } : opts[+sel];
      const st = o && stuOf(o.mssv);
      const text = el.querySelector('[data-d]').value.trim();
      if (!st || !text) { err.hidden = false; err.textContent = t('st.cc.bad'); return; }
      if (!el.querySelector('[data-c]').checked) { err.hidden = false; err.textContent = '✓ ' + t('st.cc.consent'); return; }
      const type = el.querySelector('[data-ty]').value;
      App.store.push('st.concerns', { id: App.uid('LN'), mssv: st.mssv, by: u.ma_cb, course: o.hp, type, text, at: new Date().toISOString() });
      App.notify(st.cvht, 'GV ' + App.academicPrefix(u) + ' ' + u.ho_ten + ' báo cáo lo ngại về SV ' + st.mssv + ' (' + VI(type) + ')', '#/students/' + st.mssv);
      App.audit('BAO_CAO_SV', 'Báo cáo lo ngại về sinh viên gửi CVHT', st.mssv, 'Hỗ trợ học tập');
      App.ui.toast(t('st.cc.ok'), 'ok');
      renderNone(el, c);
    };
  }

  /* ===================================================================== toàn Khoa */
  function facBody(body, c, items) {
    const lv = ['red', 'orange', 'yellow', 'green'], col = { red: '#C53030', orange: '#DD6B20', yellow: '#D69E2E', green: '#2F855A' };
    const progs = [...new Set(items.map((x) => x.st.nganh))];
    const withOff = items.filter((x) => x.R.off.length).sort((a, b) => b.R.off.length - a.R.off.length);
    const W = (AC.warning || [])[0] || {};
    const size = {}; items.forEach((x) => (size[x.st.nganh] = (size[x.st.nganh] || 0) + 1));
    body.innerHTML = `<div class="grid g2"><div class="card"><h3>${t('st.fac.dist')}</h3>${App.ui.chart.donut(lv.map((l) => ({ l: C.riskLabel(l), v: items.filter((x) => x.R.level === l).length, c: col[l] })), { center: items.length, sub: t('st.k.n'), label: t('st.fac.dist') })}</div>
      <div class="card"><h3>${t('st.fac.prog')}</h3>${App.ui.table([
        { t: t('st.c.prog'), f: (p) => `<div style="min-width:170px"><b>${esc(p)}</b><div class="small muted">${esc(progName(p))}</div></div>` }, { t: t('st.fac.n'), cls: 'num', f: (p) => size[p] },
        ...lv.map((l) => ({ t: C.riskLabel(l), cls: 'num', f: (p) => items.filter((x) => x.st.nganh === p && x.R.level === l).length })),
        { t: t('st.fac.avg'), cls: 'num', f: (p) => { const a = items.filter((x) => x.st.nganh === p); return g2(a.reduce((s, x) => s + (x.S.last.cum || 0), 0) / (a.length || 1)); } },
        { t: t('st.fac.pp'), cls: 'num', f: (p) => { const a = items.filter((x) => x.st.nganh === p); return Math.round(a.reduce((s, x) => s + (x.S.last.expected ? x.S.last.acc / x.S.last.expected : 1), 0) / (a.length || 1) * 100) + '%'; } },
      ], progs)}</div></div>
      <div class="card"><h3>${t('st.fac.offlist')} ${statusBadge('gia_dinh')}</h3>${App.ui.table([
        { t: t('st.c.name'), f: (x) => `<b>${esc(App.name(x.st))}</b> <span class="small muted">${esc(stId(x.st))}</span>` }, { t: t('st.c.class'), f: (x) => esc(x.st.lop) },
        { t: t('st.c.cvht'), f: (x) => esc(App.name(App.staff(x.st.cvht), { title: true })) }, { t: t('st.fac.cnt'), cls: 'num', f: (x) => x.R.off.length },
        { t: t('st.fac.lastw'), f: (x) => esc(C.termLabel(x.R.off[x.R.off.length - 1].k)) }, { t: t('st.w.reasons'), f: (x) => `<span class="small">${esc(x.R.off[x.R.off.length - 1].reasons.join('; '))}</span>` },
        { t: t('st.c.risk'), f: (x) => riskTag(x.R.level) },
      ], withOff, { rowAttr: (x) => `class="click" data-open="${esc(x.st.mssv)}"` })}${srcLine(W.source, W.status)}</div>
      <div class="card"><h3>${t('st.fac.exp')}</h3><p class="small">${esc(t('st.fac.exp.p'))}</p>
        <p class="small muted">${esc(t('st.fac.exp.k', { l: progs.map((p) => p + ' n=' + size[p] + (size[p] < 5 ? ' → ' + t('st.fac.merged') : '')).join(' · ') }))}</p>
        <button class="btn cyan" data-exp>${t('st.fac.exp.b')}</button>${srcLine('core_metadata ABAC A8; Luật BVDLCN 91/2025/QH15', '')}</div>`;
    body.querySelectorAll('[data-open]').forEach((el) => (el.onclick = () => App.go('#/students/' + encodeURIComponent(el.dataset.open))));
    body.querySelector('[data-exp]').onclick = () => {
      const band = (g) => (g == null ? 'NA' : g < 1.5 ? '<1.5' : g < 2 ? '1.5-2.0' : g < 2.5 ? '2.0-2.5' : g < 3.2 ? '2.5-3.2' : '>=3.2');
      const pband = (p) => (p < 70 ? '<70%' : p < 85 ? '70-85%' : p < 100 ? '85-100%' : '100%');
      const lines = [['ma_gia_danh', 'nhom_nganh', 'muc_rui_ro', 'dtb_tich_luy_khoang', 'tien_do_tc_khoang', 'so_lan_canh_bao', 'so_canh_bao_som'].join(',')];
      items.forEach((x) => lines.push([App.pseudo(x.st.mssv, 'SV'), size[x.st.nganh] >= 5 ? x.st.nganh : 'EE – gộp (k<5)', x.R.level, band(x.S.last.cum),
        pband(x.S.last.expected ? x.S.last.acc / x.S.last.expected * 100 : 100), x.R.off.length, x.R.early.length].join(',')));
      download('bao_cao_nguoi_hoc_an_danh_' + todayIso() + '.csv', lines.join('\r\n'));
      App.audit('XUAT', 'Xuất báo cáo người học ẩn danh (giả danh hoá, k ≥ 5) – ' + items.length + ' dòng', 'students', 'Báo cáo thống kê');
      App.audit('AN_DANH', 'Giả danh hoá MSSV, gộp nhóm < 5 trước khi xuất', 'students', 'Báo cáo thống kê');
      App.ui.toast(t('st.fac.exp.ok', { n: items.length }), 'ok');
    };
  }

  /* ===================================================================== ngưỡng cảnh báo sớm (TK/PTK) */
  function cfgBody(body, c, items, rerender) {
    const cnt = (lv) => items.filter((x) => x.R.level === lv).length;
    body.innerHTML = `<div class="card"><h3>${t('st.cfg.t')}</h3><div class="notice warn">${esc(t('st.cfg.p'))}</div>
      <div class="grid g4">${EARLY_KEYS.map((k) => `<label>${esc(t('st.cfg.' + k))}<input type="number" step="${/Gpa|Sem/.test(k) ? '0.1' : '1'}" min="0" data-k="${k}" value="${C.EARLY[k]}"><span class="small muted" style="font-weight:400">${t('st.cfg.def')}: ${EARLY_DEFAULT[k]}</span></label>`).join('')}</div>
      <p class="small" style="margin-top:12px">${esc(t('st.cfg.preview', { r: cnt('red'), o: cnt('orange'), y: cnt('yellow'), g: cnt('green') }))}</p>
      <p class="err" hidden></p><div class="row end"><button class="btn ghost" data-reset>${t('st.cfg.reset')}</button><button class="btn" data-save>${t('st.cfg.save')}</button></div>
      ${srcLine(t('st.cfg.src') + ' · App.calc.EARLY', 'gia_dinh')}</div>`;
    const save = async (vals) => {
      if (!(await App.stepUp(t('st.cfg.t')))) return;
      App.store.patch('st.early', vals); applyEarly();
      App.audit('SUA_CAU_HINH', 'Cập nhật ngưỡng cảnh báo sớm: ' + (vals ? JSON.stringify(vals) : 'khôi phục mặc định'), 'calc.EARLY', 'Quản lý cảnh báo người học');
      App.ui.toast(t('st.cfg.saved'), 'ok'); F.tab = 'cfg'; rerender();
    };
    body.querySelector('[data-save]').onclick = () => {
      const vals = {}; let ok = true;
      body.querySelectorAll('[data-k]').forEach((i) => { const v = parseFloat(i.value); if (isNaN(v) || v < 0) ok = false; vals[i.dataset.k] = v; });
      if (!ok) { const e = body.querySelector('.err'); e.hidden = false; e.textContent = t('st.cfg.bad'); return; }
      save(vals);
    };
    body.querySelector('[data-reset]').onclick = () => save(null);
  }

  /* ===================================================================== chi tiết sinh viên */
  let lastAudit = '';
  const detailTab = {};
  function renderDetail(main, mssv, tab0) {
    if (tab0 && ['tr', 'plan', 'warn', 'adv'].includes(tab0)) detailTab[mssv] = tab0;
    applyEarly();
    const c = ctx();
    const st = stuOf(mssv);
    if (!st || !c.list.some((s) => s.mssv === mssv)) {
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('st.crumb')}</div><h1>${t('nav.students')}</h1></div></div><div class="notice bad">${esc(t('st.noscope'))}</div><a href="#/students">${t('st.back')}</a>`;
      App.audit('TU_CHOI', 'Truy cập hồ sơ sinh viên ngoài phạm vi bị từ chối (ABAC A4)', mssv);
      return;
    }
    const key = c.u.ma_cb + c.r + mssv;
    if (lastAudit !== key) { lastAudit = key; App.audit('XEM', 'Xem hồ sơ học tập sinh viên', mssv, c.mode === 'adv' ? 'Cố vấn học tập' : 'Quản lý đào tạo'); }
    const { S, R: Rk } = analyse(st);
    const L = S.last, lm = lastSem(S), prog = S.prog;
    main.innerHTML = `<div class="page-h"><div><div class="crumb"><a href="#/students" style="color:inherit;text-decoration:none">${t('st.back')}</a></div><h1>${esc(App.name(st))}</h1>
        <p>${esc(stId(st))} · ${esc(st.lop)} · ${esc(progName(st.nganh))}</p></div><div class="row no-print"><button class="btn ghost" onclick="print()">${t('print')}</button></div></div>
      <div class="card" style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap"><img src="${stPhoto(st)}" alt="" style="width:96px;height:128px;object-fit:cover;border-radius:8px;border:1px solid var(--line)">
        <div class="fields" style="flex:1;min-width:240px;grid-template-columns:repeat(auto-fill,minmax(190px,1fr))">
          <div class="fld"><div class="k">${t('st.c.mssv')} ${App.ui.cls('NB')}</div><div class="v">${esc(stId(st))}</div></div>
          <div class="fld"><div class="k">${t('st.d.prog')}</div><div class="v">${esc(progName(st.nganh))} (${esc(prog.code)})</div></div>
          <div class="fld"><div class="k">${t('st.d.cohort')}</div><div class="v">K${esc(st.khoa)} · ${esc(st.lop)}</div></div>
          <div class="fld"><div class="k">${t('st.d.cvht')}</div><div class="v">${esc(App.name(App.staff(st.cvht), { title: true }))}</div></div>
          <div class="fld"><div class="k">${t('st.d.eng')}</div><div class="v">${esc(st.tieng_anh)}</div></div>
          <div class="fld"><div class="k">${t('st.a.semail')} ${App.ui.cls('CN')}</div><div class="v">${esc(App.anon ? App.mask(st.email, 'email') : st.email)}</div></div>
        </div>
        <div style="text-align:right;min-width:120px">${riskTag(Rk.level)}<div class="small muted" style="margin-top:6px">${esc(t('st.d.score', { s: Rk.score }))}</div></div></div>
      <div class="kpis">${App.ui.kpi(t('st.d.gpa'), g2(L.cum), lm ? esc(t('st.c.last')) + ': ' + g2(lm.sem) : '', L.cum != null && L.cum < 2 ? 'bad' : 'cyan')}
        ${App.ui.kpi(t('st.d.cr'), (L.acc || 0) + ' <small style="font-size:.9rem">/ ' + (L.expected || 0) + '</small>', App.ui.progress((L.acc || 0) / (prog.total_credits || 152) * 100, 'cyan') + esc(t('st.d.of', { n: prog.total_credits })), L.expected && L.acc / L.expected < 0.85 ? 'warn' : 'ok')}
        ${App.ui.kpi(t('st.d.owed'), L.owed || 0, '', L.owed > 12 ? 'bad' : L.owed ? 'warn' : 'ok')}
        ${App.ui.kpi(t('st.d.offn'), Rk.off.length, statusBadge('gia_dinh'), Rk.off.length ? 'bad' : 'ok')}</div>
      <div data-tabs></div><div data-body></div>`;
    const body = main.querySelector('[data-body]');
    const tabs = [{ k: 'tr', t: t('st.tab.tr') }, { k: 'plan', t: t('st.tab.plan') }, { k: 'warn', t: t('st.tab.warn') }, { k: 'adv', t: t('st.tab.adv') }];
    const rer = () => renderDetail(main, mssv);
    const show = (k) => {
      detailTab[mssv] = k;
      if (k === 'tr') trBody(body, st, S, Rk);
      if (k === 'plan') planBody(body, st, S);
      if (k === 'warn') warnBody(body, st, S, Rk);
      if (k === 'adv') advBody(body, st, S, Rk, c, rer);
    };
    const cur = detailTab[mssv] || 'tr';
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, cur, show);
    show(cur);
  }

  /* (1) Bảng điểm theo mẫu IU */
  function trBody(body, st, S, Rk) {
    if (!canView('bang_diem')) { body.innerHTML = `<div class="notice warn">${esc(t('st.w.hidden', { f: fieldName('bang_diem') }))}</div>`; return; }
    const ex = extras(S);
    const offBy = {}; Rk.off.forEach((o) => (offBy[o.k] = o.reasons));
    const failCss = 'color:var(--bad);font-weight:800;background:var(--bad-l)';
    let stt = 0, rows = '';
    S.terms.forEach((tm, i) => {
      rows += `<tr class="sub"><td colspan="12">${esc(termTitle(tm.k))}</td></tr>`;
      tm.rows.forEach((r) => {
        stt++;
        const ng = r.tk == null; const fail = !ng && !C.pass(r.chu);
        const note = r.ghi_chu === 'Học lại' ? ' ' + App.ui.badge(t('st.tr.retake'), 'info') : r.ghi_chu ? ` <span class="small muted">(${esc(t('st.tr.nogpa'))})</span>` : '';
        const n = (v) => (v == null ? '' : esc(v));
        rows += `<tr><td class="c">${stt}</td><td>${esc(r.ma_hp)}</td><td>${esc(r.ten)}${note}</td><td class="c">${r.tc}</td>
          <td class="c">${ng ? 0 : 30}</td><td class="c">${ng ? 0 : 30}</td><td class="c">${ng ? 100 : 40}</td><td class="c">${n(r.qt)}</td><td class="c">${n(r.kt)}</td><td class="c">${n(r.thi)}</td>
          <td class="c" style="${fail ? failCss : ''}">${ng ? esc(r.chu || 'NA') : g1(r.tk / 10)}</td><td class="c" style="${fail ? failCss : 'font-weight:700'}">${esc(r.chu || 'NA')}</td></tr>`;
      });
      if (tm.reg > 0) {
        const e = ex[i];
        const line = (k, v, css) => `<tr><td colspan="3" style="font-weight:700;${css || ''}">${esc(t(k))}</td><td colspan="9" style="font-weight:700;${css || ''}">${v}</td></tr>`;
        rows += line('st.tr.s1', `${g2(tm.sem100 / 10)} / ${g1(tm.sem100)}`) + line('st.tr.s2', g2(tm.sem)) + line('st.tr.s3', g2(e.cum100 / 10)) + line('st.tr.s4', g2(tm.cum)) +
          line('st.tr.s5', e.passed) + line('st.tr.s6', tm.acc) + line('st.tr.s7', esc(class100(tm.sem100)));
        if (offBy[tm.k]) rows += line('st.tr.s8', esc(offBy[tm.k].join('; ')), 'color:var(--bad)');
      }
    });
    const gs = AC.grade_scale || {}, gc = AC.gpa_class || {};
    body.innerHTML = `<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr>${['stt', 'code', 'name', 'tc', 'pqt', 'pkt', 'pthi', 'qt', 'kt', 'thi', 'tk10', 'tkch'].map((k) => `<th class="${k === 'name' || k === 'code' ? '' : 'c'}">${t('st.tr.' + k)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>
      <p class="small muted" style="margin-top:8px">${esc(t('st.tr.note'))}</p>
      <p class="small muted" style="margin:4px 0 0">${t('st.tr.class')}: ${(gc.items || []).map((x) => esc(App.L(x)) + ' ≥ ' + x.min100).join(' · ')}</p>
      ${srcLine(gs.source, gs.status)}${srcLine((gc.items || [])[0] ? gc.items[0].source : '', gc.status)}</div>`;
  }

  /* (2) Tiến độ CTĐT */
  function planBody(body, st, S) {
    const prog = S.prog;
    const showGrades = canView('bang_diem');
    const passed = new Set(), failed = new Set();
    Object.values(S.best).forEach((r) => (C.pass(r.chu) ? passed : failed).add(r.ma_hp));
    S.rows.filter((r) => r.tk == null && C.pass(r.chu)).forEach((r) => passed.add(r.ma_hp));
    const cur = new Set(S.cur.map((x) => x.ma_hp));
    const status = (p) => {
      if (passed.has(p.code)) return 'ok';
      if (cur.has(p.code)) return 'cur';
      if (failed.has(p.code)) return 'bad';
      if ((p.pre || []).some((x) => !passed.has(x))) return 'blk';
      return 'todo';
    };
    const sty = { ok: 'background:var(--ok-l);border-color:#9AE6B4;color:var(--ok)', bad: 'background:var(--bad-l);border-color:#FEB2B2;color:var(--bad)', cur: 'background:var(--cyan-l);border-color:#90CDF4;color:#0E6E96',
      blk: 'background:var(--orange-l);border-color:#FBD38D;color:var(--orange)', todo: 'background:var(--bg-2);border-color:var(--line);color:var(--muted)' };
    const lab = { ok: t('st.pl.ok'), bad: t('st.pl.bad'), cur: t('st.pl.cur'), blk: t('st.pl.blk'), todo: t('st.pl.todo') };
    const chip = (p) => {
      const s = status(p);
      const pre = (p.pre || []).length ? t('st.pl.pre', { l: p.pre.join(', ') }) : '';
      const miss = (p.pre || []).filter((x) => !passed.has(x));
      return `<div title="${esc(App.L(p) + ' – ' + lab[s] + (pre ? ' · ' + pre : ''))}" style="border:1px ${p.type === 'TC' ? 'dashed' : 'solid'};border-radius:6px;padding:4px 7px;font-size:.78rem;line-height:1.25;min-width:0;overflow:hidden;${sty[s]}">
        <div style="display:flex;justify-content:space-between;gap:4px"><b>${esc(p.code)}</b><span>${p.cr}</span></div><div style="color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(App.L(p))}</div>
        ${p.type === 'TC' || s === 'blk' ? `<div style="font-size:.7rem">${p.type === 'TC' ? esc(t('st.pl.tc')) : ''}${s === 'blk' ? (p.type === 'TC' ? ' · ' : '') + '⚠ ' + esc(miss.join(', ')) : ''}</div>` : ''}</div>`;
    };
    const roman = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const grid = [1, 2, 3, 4, 'S', 5, 6, 7, 8, 9].map((sm) => {
      const ps = prog.plan.filter((p) => p.sem === sm); if (!ps.length) return '';
      const cr = ps.filter((p) => p.type === 'BB').reduce((a, b) => a + b.cr, 0);
      return `<div style="border:1px solid var(--line);border-radius:8px;padding:8px;background:#fff;min-width:0"><div class="row between" style="margin-bottom:6px;flex-wrap:nowrap"><b style="color:var(--navy)">${esc(sm === 'S' ? t('st.pl.summer') : t('st.pl.sem', { n: roman[sm] }))}</b><span class="small muted">${esc(t('st.pl.cr', { n: cr }))}</span></div>
        <div style="display:grid;gap:4px">${ps.map(chip).join('')}</div></div>`;
    }).join('');
    const sw = (s) => `<i style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1px solid;${sty[s]}"></i>`;
    const legend = ['ok', 'cur', 'bad', 'blk', 'todo'].map((s) => `<span style="display:inline-flex;align-items:center;gap:5px;margin-right:12px">${sw(s)}${esc(lab[s])}</span>`).join('') +
      `<span style="display:inline-flex;align-items:center;gap:5px"><i style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1px dashed var(--muted)"></i>${esc(t('st.pl.tc'))}</span>`;
    const blocked = prog.plan.filter((p) => !passed.has(p.code) && (p.pre || []).some((x) => !passed.has(x)));
    const mains = S.terms.filter((x) => x.main);
    const planCodes = new Set(prog.plan.map((p) => p.code));
    const other = Object.values(S.best).filter((r) => !planCodes.has(r.ma_hp));
    body.innerHTML = `<div class="card"><div class="row between" style="flex-wrap:wrap;gap:8px"><h3 style="margin:0">${esc(App.L(prog))} – ${esc(prog.code)} · ${prog.total_credits} TC · ${esc(t('st.pl.years', { n: prog.years }))}</h3><div class="small">${legend}</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-top:12px">${grid}</div></div>
      <div class="grid g2"><div class="card"><h3>${t('st.pl.chart')}</h3>${App.ui.chart.bars(mains.map((x) => ({ l: C.termShort(x.k), v: x.acc, ref: x.expected, c: x.acc < x.expected * 0.85 ? '#DD6B20' : '#2E3191' })), { h: 200, label: t('st.pl.chart'), cut: 12 })}
          <p class="small muted" style="margin:0 0 6px">${esc(t('st.pl.chart.s'))}</p><div class="small">${t('st.pl.total')}: <b>${S.last.acc || 0}</b> / ${prog.total_credits}</div>${App.ui.progress((S.last.acc || 0) / prog.total_credits * 100, 'cyan')}</div>
        <div class="card"><h3>${t('st.pl.blocked')}</h3>${App.ui.table([{ t: t('st.tr.code'), k: 'code' }, { t: t('st.tr.name'), f: (p) => esc(App.L(p)) },
          { t: t('st.pl.missing'), f: (p) => p.pre.filter((x) => !passed.has(x)).map((x) => `<span class="badge ${failed.has(x) ? 'bad' : ''}">${esc(x)}</span>`).join(' ') }], blocked)}</div></div>
      <div class="grid g2"><div class="card"><h3>${t('st.pl.el')}</h3><p class="small muted">${esc(t('st.pl.el.s'))}</p>${App.ui.table([{ t: t('st.tr.code'), k: 'code' }, { t: t('st.tr.name'), f: (p) => esc(App.L(p)) }, { t: t('st.tr.tc'), k: 'cr', cls: 'num' },
          { t: t('status'), f: (p) => { const s = status(Object.assign({ pre: [] }, p)); return `<span class="badge" style="${sty[s]}">${esc(lab[s])}</span>`; } }], prog.electives || [])}</div>
        <div class="card"><h3>${t('st.pl.other')}</h3>${App.ui.table([{ t: t('st.tr.code'), k: 'ma_hp' }, { t: t('st.tr.name'), k: 'ten' }, { t: t('st.tr.tc'), k: 'tc', cls: 'num' },
          { t: t('st.tr.tkch'), f: (r) => (showGrades ? `<b style="${C.pass(r.chu) ? '' : 'color:var(--bad)'}">${esc(r.chu)}</b>` : esc(C.pass(r.chu) ? t('st.pl.ok') : t('st.pl.bad'))) }], other)}</div></div>`;
  }

  /* (3) Cảnh báo */
  function warnBody(body, st, S, Rk) {
    const W = (AC.warning || [])[0] || {};
    const mains = S.terms.filter((x) => x.main);
    let streak = 0; for (let i = mains.length - 1; i >= 0; i--) { if (Rk.off.some((o) => o.k === mains[i].k)) streak++; else break; }
    const dis = ((AC.dismissal && AC.dismissal.rules) || []).find((r) => r.key === 'academic_warnings') || {};
    const E = C.EARLY;
    const gt = S.terms.filter((x) => x.sem != null);
    const drl = st.drl || [], DR = AC.drl || {};
    const semTh = (W.condition || {}).sem_gpa4_lt || 1;
    const drlHtml = !canView('drl') ? `<div class="notice warn">${esc(t('st.w.hidden', { f: fieldName('drl') }))}</div>` :
      (drl.length ? App.ui.chart.bars(drl.map((d) => ({ l: C.termShort(d.ky), v: d.diem, c: d.diem < 50 ? '#C53030' : d.diem < 65 ? '#DD6B20' : '#2E3191' })), { h: 150, max: 100, label: t('st.w.drl'), cut: 12 }) +
        App.ui.table([{ t: t('st.w.term'), f: (d) => esc(C.termLabel(d.ky)) }, { t: t('st.w.drl.d'), cls: 'num', k: 'diem' }, { t: t('st.w.drl.c'), f: (d) => esc(drlClass(d.diem)) }], drl.slice().reverse()) : App.ui.empty()) +
      `<p class="small muted" style="margin:6px 0 0">${(DR.classes || []).map((x) => esc(App.L(x)) + ' ≥ ' + x.min).join(' · ')}</p>` + srcLine(DR.source, DR.status);
    body.innerHTML = `<div class="grid g2"><div class="card"><h3>${t('st.w.off')} ${statusBadge(W.status || 'gia_dinh')}</h3>
        <div class="notice warn small">${esc(t('st.w.off.note'))}</div>
        ${Rk.off.length ? App.ui.table([{ t: t('st.w.term'), f: (o) => esc(C.termLabel(o.k)) }, { t: t('st.w.reasons'), f: (o) => o.reasons.map((r) => `<div>• ${esc(r)}</div>`).join('') }], Rk.off) : `<div class="notice">${esc(t('st.w.none'))}</div>`}
        <p class="small" style="margin-top:8px"><b>${esc(t('st.w.streak', { n: streak, m: dis.max_consecutive_warnings || 2 }))}</b> ${statusBadge(dis.status || 'gia_dinh')}</p>
        ${App.lang === 'vi' ? `<p class="small muted" style="margin:0">${esc(W.rule_vi || '')}</p>` : ''}
        ${srcLine(W.source, W.status)}${srcLine(dis.source, dis.status)}</div>
      <div class="card"><h3>${t('st.w.early')}</h3><p class="small muted">${esc(t('st.w.early.note'))}</p>
        ${Rk.early.length ? `<ul style="list-style:none;padding:0;margin:0;display:grid;gap:8px">${Rk.early.slice().sort((a, b) => b.sev - a.sev).map((e) => `<li style="display:flex;gap:8px;align-items:flex-start"><span class="badge navy">${esc(e.code)}</span>${sevBadge(e.sev)}<span>${esc(e.t)}</span></li>`).join('')}</ul>` : `<div class="notice">${esc(t('st.w.noearly'))}</div>`}
        <p class="small muted" style="margin-top:10px">${t('st.w.thr')}: ${EARLY_KEYS.map((k) => esc(t('st.cfg.' + k)) + ' <b>' + E[k] + '</b>').join(' · ')}</p></div></div>
      <div class="grid g2"><div class="card"><h3>${t('st.w.trend')}</h3>${gt.length ? App.ui.chart.line([{ l: t('st.w.semgpa'), v: gt.map((x) => +x.sem.toFixed(2)), c: '#2E3191' }, { l: t('st.w.cumgpa'), v: gt.map((x) => +x.cum.toFixed(2)), c: '#1C9ACC' }],
          gt.map((x) => C.termShort(x.k)), { min: 0, max: 4, label: t('st.w.trend'), refs: [{ v: semTh, l: t('st.w.ref1', { x: semTh }), c: '#C53030' }, { v: E.lowSem, l: t('st.w.ref2', { x: E.lowSem }), c: '#B7791F' }] }) : App.ui.empty()}
          <div class="small"><span style="color:#2E3191;font-weight:800">━</span> ${t('st.w.semgpa')} &nbsp; <span style="color:#1C9ACC;font-weight:800">━</span> ${t('st.w.cumgpa')}</div></div>
        <div class="card"><h3>${t('st.w.drl')} ${statusBadge(DR.status)}</h3>${drlHtml}</div></div>
      <div class="card"><h3>${t('st.w.cur')} – ${esc(C.termLabel(D.meta.current_term))}</h3>${S.cur.length ? App.ui.table([
        { t: t('st.tr.code'), k: 'ma_hp' }, { t: t('st.tr.name'), k: 'ten' }, { t: t('st.tr.tc'), k: 'tc', cls: 'num' },
        { t: t('st.w.abs'), cls: 'num', f: (x) => { const p = x.vang / x.so_buoi * 100; return `<span style="${p >= E.absPct ? 'color:var(--bad);font-weight:800' : ''}">${x.vang}/${x.so_buoi} (${Math.round(p)}%)</span>`; } },
        { t: t('st.w.mid'), cls: 'num', f: (x) => `<span style="${x.giua_ky < E.midLow ? 'color:var(--bad);font-weight:800' : ''}">${x.giua_ky}</span>` },
      ], S.cur) : App.ui.empty(t('st.w.nocur'))}</div>`;
  }

  /* (4) Tư vấn */
  const revealUntil = {}, revealPurpose = {};
  function advBody(body, st, S, Rk, c, rer) {
    const isAdv = c.mode === 'adv';
    const notes = notesOf(st.mssv);
    const appts = App.store.list('st.appts').filter((a) => a.mssv === st.mssv).sort((a, b) => (a.ngay + a.gio).localeCompare(b.ngay + b.gio));
    const chans = ['st.a.ch1', 'st.a.ch2', 'st.a.ch3', 'st.a.ch4'];
    const parentLv = canView('lien_he_phu_huynh') && !App.anon;
    const m = /^(?:Phụ huynh:\s*)?(.*?)\s*[–-]\s*(\d+)$/.exec(st.phu_huynh || '') || [null, st.phu_huynh || '', ''];
    const open = revealUntil[st.mssv] && revealUntil[st.mssv] > Date.now();
    const pName = open ? m[1] : (m[1] ? m[1].split(' ').map((w, i, a) => (i === a.length - 1 ? w : w[0] + '.')).join(' ') : '');
    const pPhone = open ? m[2] : App.mask(m[2], 'last3');
    const noteRows = App.ui.table([{ t: t('date'), f: (n) => App.fmtDate(n.ngay) }, { t: t('st.a.chan'), f: (n) => esc(chanLabel(n.kenh)) }, { t: t('st.a.content'), f: (n) => esc(n.noi_dung) },
      { t: t('st.a.by'), f: (n) => esc(App.name(App.staff(n.ma_cb), { title: true })) }], notes);
    body.innerHTML = `<div class="grid g-2-1"><div>
        ${isAdv ? `<div class="card"><h3>${t('st.a.actions')}</h3><div class="row" style="flex-wrap:wrap;gap:8px">
          <button class="btn" data-act="email">${t('st.a.email')}</button><button class="btn ghost" data-act="meet">${t('st.a.meet')}</button>
          ${parentLv ? `<button class="btn ghost" data-act="parent">${t('st.a.parent')}</button>` : ''}<button class="btn cyan" data-act="nh01">${t('st.a.nh01')}</button></div></div>` : `<div class="notice">${esc(t('st.a.ro'))}</div>`}
        <div class="card"><h3>${t('st.a.notes')}</h3>${noteRows}</div>
        ${isAdv ? `<div class="card"><h3>${t('st.a.add')}</h3><div class="grid g2"><label>${t('date')}<input type="date" data-nd value="${todayIso()}"></label>
          <label>${t('st.a.chan')}<select data-nc>${chans.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label></div>
          <label style="margin-top:8px">${t('st.a.content')}<textarea data-nt rows="3"></textarea></label><p class="err" hidden></p><div class="row end" style="margin-top:8px"><button class="btn" data-ns>${t('save')}</button></div></div>` : ''}
      </div><div>
        <div class="card"><h3>${t('st.a.contact')}</h3><div class="fields" style="grid-template-columns:1fr">
          <div class="fld"><div class="k">${t('st.a.semail')} ${App.ui.cls('CN')}</div><div class="v">${esc(App.anon ? App.mask(st.email, 'email') : st.email)}</div></div>
          <div class="fld"><div class="k">${t('st.a.sphone')} ${App.ui.cls('CN')}</div><div class="v">${esc(isAdv && !App.anon ? st.dien_thoai : App.mask(st.dien_thoai, 'last3'))}</div></div>
          <div class="fld"><div class="k">${t('st.a.pinfo')} ${App.ui.cls('CN')}</div>${parentLv ? `<div class="v ${open ? '' : 'masked'}">${esc(pName)} – ${esc(pPhone)}</div>
            ${open ? `<div class="small muted">${esc(t('st.a.revealed', { t: new Date(revealUntil[st.mssv]).toTimeString().slice(0, 5) }))}</div>${isAdv ? `<button class="btn sm ok" data-call style="margin-top:6px">${t('st.a.call')}</button>` : ''}` : `<button class="linkbtn small" data-reveal>${t('st.a.reveal')}</button>`}`
            : `<div class="v none">${t('noaccess')}</div>`}</div></div>
          <p class="small muted" style="margin:8px 0 0">${esc(t('st.a.pnote'))}</p></div>
        <div class="card"><h3>${t('st.a.appts')}</h3>${appts.length ? `<ul class="notes">${appts.map((a) => `<li><span>${App.fmtDate(a.ngay)} ${esc(a.gio)} – ${esc(a.noi)}</span><small>${esc(a.nd || '')}</small></li>`).join('')}</ul>` : App.ui.empty(t('st.a.noappt'))}</div>
      </div></div>`;
    const addNote = (kenh, text) => App.store.push('st.notes', { mssv: st.mssv, ngay: todayIso(), ma_cb: c.u.ma_cb, noi_dung: text, kenh });
    const ns = body.querySelector('[data-ns]');
    if (ns) ns.onclick = () => {
      const txt = body.querySelector('[data-nt]').value.trim();
      if (!txt) { const e = body.querySelector('.err'); e.hidden = false; e.textContent = t('st.a.empty'); return; }
      App.store.push('st.notes', { mssv: st.mssv, ngay: body.querySelector('[data-nd]').value || todayIso(), ma_cb: c.u.ma_cb, noi_dung: txt, kenh: VI(body.querySelector('[data-nc]').value) });
      App.audit('GHI_TU_VAN', 'Ghi nhật ký tư vấn sinh viên', st.mssv, 'Cố vấn học tập');
      App.ui.toast(t('st.a.saved'), 'ok'); rer();
    };
    const rv = body.querySelector('[data-reveal]');
    if (rv) rv.onclick = async () => {
      const ps = ['st.a.p1', 'st.a.p2', 'st.a.p3'];
      const md = App.ui.modal(`<h3>${t('st.a.purpose')}</h3><p class="small muted">${esc(t('st.a.pnote'))}</p><label>${t('st.a.purpose')}<select data-p>${ps.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
        <div class="row end" style="margin-top:12px"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('confirm')}</button></div>`);
      const purpose = await new Promise((res) => { md.querySelector('[data-ok]').onclick = () => res(md.querySelector('[data-p]').value); md.querySelector('[data-x]').onclick = () => { App.ui.closeModal(); res(null); }; });
      if (!purpose) return;
      if (!(await App.stepUp(t('st.a.parent') + ' – ' + t(purpose)))) return;
      revealUntil[st.mssv] = Date.now() + 5 * 60000; revealPurpose[st.mssv] = purpose;
      App.audit('XEM_CA_NHAN', 'Mở xem liên hệ phụ huynh sinh viên – mục đích: ' + VI(purpose), st.mssv, VI(purpose));
      advBody(body, st, S, Rk, c, rer);
      setTimeout(() => { if (body.isConnected && detailTab[st.mssv] === 'adv') advBody(body, st, S, Rk, c, rer); }, 5 * 60000 + 500);
    };
    const call = body.querySelector('[data-call]');
    if (call) call.onclick = () => {
      const p = VI(revealPurpose[st.mssv] || 'st.a.p1');
      addNote(VI('st.a.ch4'), VI('st.a.called').replace('{p}', p));
      App.audit('LIEN_HE_PH', 'Liên hệ phụ huynh sinh viên', st.mssv, p); App.ui.toast(t('st.a.saved'), 'ok'); rer();
    };
    body.querySelectorAll('[data-act]').forEach((b) => (b.onclick = () => {
      const a = b.dataset.act;
      if (a === 'email') emailModal(st, S, c, addNote, rer);
      if (a === 'meet') meetModal(st, c, addNote, rer);
      if (a === 'parent') { const r2 = body.querySelector('[data-reveal]'); if (r2) r2.click(); else { const cb = body.querySelector('[data-call]'); if (cb) cb.focus(); } }
      if (a === 'nh01') createNH01(st, S, Rk, c, notes);
    }));
  }

  function reasonsIn(lang, S) {
    const saved = App.lang; App.lang = lang;
    try { return reasons(C.risk(S), S); } finally { App.lang = saved; }
  }
  function emailModal(st, S, c, addNote, rer) {
    const u = c.u; const adv = App.academicPrefix(u) + ' ' + u.ho_ten;
    const rv = reasonsIn('vi', S), re = reasonsIn('en', S);
    const term = C.termShort(S.last.k || '');
    const subj = '[IU – Khoa Điện – Điện tử] Cảnh báo kết quả học tập / Academic progress alert – ' + st.mssv;
    const bodyTxt = `Chào em ${st.ho_ten},\n\nThầy/Cô là cố vấn học tập lớp ${st.lop}. Qua theo dõi kết quả học tập đến ${term}, Khoa nhận thấy một số dấu hiệu cần lưu ý:\n` +
      (rv.length ? rv.map((x) => '  - ' + x).join('\n') : '  - (không có)') +
      `\n\nEm vui lòng đặt lịch gặp CVHT trong tuần này (giờ tiếp sinh viên 02 tiết/tuần tại VP Bộ môn hoặc trực tuyến) để cùng xây dựng kế hoạch học tập điều chỉnh. Nếu đang gặp khó khăn về sức khỏe, tài chính hay tâm lý, em có thể trao đổi để được giới thiệu hỗ trợ từ P.CTSV.\n\nTrân trọng,\n${adv}\nCố vấn học tập – Khoa Điện – Điện tử, Trường Đại học Quốc tế – ĐHQG-HCM\n\n` +
      `----------\nDear ${st.ho_ten},\n\nAs your academic advisor for class ${st.lop}, I have reviewed your academic progress up to ${term} and would like to draw your attention to the following:\n` +
      (re.length ? re.map((x) => '  - ' + x).join('\n') : '  - (none)') +
      `\n\nPlease book a meeting with me this week (office hours: 2 periods/week at the department office, or online) so that we can agree on an adjusted study plan. If you are facing health, financial or personal difficulties, I can refer you to the Office of Student Affairs.\n\nBest regards,\n${adv}\nAcademic Advisor – School of Electrical Engineering, International University – VNU-HCM`;
    const md = App.ui.modal(`<h3>${t('st.a.email')}</h3><div class="notice small">${esc(t('st.a.sim'))}</div><div class="stack">
      <label>${t('st.a.to')}<input value="${esc(App.anon ? App.mask(st.email, 'email') : st.email)}" readonly></label>
      <label>${t('st.a.cc')}<input value="${esc(u.email || '')}" readonly></label>
      <label>${t('st.a.subj')}<input data-sj value="${esc(subj)}"></label>
      <label>${t('st.a.body')}<textarea data-bd rows="16" style="font-family:inherit;font-size:.86rem">${esc(bodyTxt)}</textarea></label></div>
      <div class="row end" style="margin-top:10px"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('send')}</button></div>`, true);
    md.querySelector('[data-x]').onclick = App.ui.closeModal;
    md.querySelector('[data-ok]').onclick = () => {
      const sj = md.querySelector('[data-sj]').value;
      App.store.push('st.emails', { mssv: st.mssv, by: u.ma_cb, at: new Date().toISOString(), subject: sj, body: md.querySelector('[data-bd]').value });
      addNote('Email', VI('st.a.mailnote').replace('{s}', sj));
      App.audit('GUI_EMAIL', 'Gửi email cảnh báo kết quả học tập (mô phỏng)', st.mssv, 'Cố vấn học tập');
      App.ui.closeModal(); App.ui.toast(t('st.a.sent'), 'ok'); rer();
    };
  }
  function meetModal(st, c, addNote, rer) {
    const d = new Date(App.today); d.setDate(d.getDate() + 2);
    const iso = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const md = App.ui.modal(`<h3>${t('st.a.meet')} – ${esc(App.name(st))}</h3><div class="grid g2"><label>${t('st.a.mdate')}<input type="date" data-d value="${iso}"></label><label>${t('st.a.mtime')}<input type="time" data-t value="09:00"></label></div>
      <label style="margin-top:8px">${t('st.a.mplace')}<select data-p><option value="st.a.mplace1">${esc(t('st.a.mplace1'))}</option><option value="st.a.mplace2">${esc(t('st.a.mplace2'))}</option></select></label>
      <label style="margin-top:8px">${t('st.a.mnote')}<textarea data-n rows="3"></textarea></label>
      <div class="row end" style="margin-top:10px"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('save')}</button></div>`);
    md.querySelector('[data-x]').onclick = App.ui.closeModal;
    md.querySelector('[data-ok]').onclick = () => {
      const a = { mssv: st.mssv, by: c.u.ma_cb, ngay: md.querySelector('[data-d]').value, gio: md.querySelector('[data-t]').value, noi: VI(md.querySelector('[data-p]').value), nd: md.querySelector('[data-n]').value.trim() };
      App.store.push('st.appts', a);
      addNote(a.noi.indexOf('Trực tuyến') === 0 ? 'Trực tuyến' : 'Gặp trực tiếp', VI('st.a.meetnote').replace('{d}', App.fmtDate(a.ngay)).replace('{t}', a.gio).replace('{p}', a.noi) + (a.nd ? ': ' + a.nd : ''));
      App.audit('HEN_GAP', 'Tạo lịch hẹn gặp sinh viên', st.mssv, 'Cố vấn học tập');
      App.ui.closeModal(); App.ui.toast(t('st.a.msaved'), 'ok'); rer();
    };
  }
  async function createNH01(st, S, Rk, c, notes) {
    const lm = lastSem(S);
    const data = { staff_id: c.u.ma_cb, advisee_class: st.lop, student_id: st.mssv, gpa_term: lm ? +lm.sem.toFixed(2) : null, credits_owed: S.last.owed || 0,
      risk_level: Rk.level, advice_note: notes[0] ? notes[0].noi_dung : '', referral: '' };
    let id = null;
    if (App.proc && typeof App.proc.create === 'function') {
      try { let r = App.proc.create('QT-ĐHQT-NH-01', data); if (r && typeof r.then === 'function') r = await r; id = r && (typeof r === 'string' ? r : r.id) || null; }
      catch (e) { id = null; }
      if (id) App.audit('TAO_HO_SO', 'Tạo hồ sơ QT-ĐHQT-NH-01 cho SV ' + st.mssv, st.mssv, 'Cố vấn học tập');
      if (!id && document.getElementById('modal')) return;   // App.proc tự mở biểu mẫu
    }
    if (!id) {
      const now = new Date().toISOString().slice(0, 16);
      const r = { id: App.uid('HS'), ma_qt: 'QT-ĐHQT-NH-01', ma_cb: c.u.ma_cb, tao_luc: now, trang_thai: 'dang_xu_ly', buoc_hien_tai: 1,
        lich_su: [{ buoc: 0, luc: now, ket_qua: 'Hệ thống phát hiện SV nguy cơ – mức ' + Rk.level }], du_lieu: data };
      App.saveRequest(r); id = r.id;
      App.audit('TAO_HO_SO', 'Tạo hồ sơ QT-ĐHQT-NH-01 cho SV ' + st.mssv, st.mssv, 'Cố vấn học tập');
    }
    const md = App.ui.modal(`<h3>QT-ĐHQT-NH-01</h3><p>${esc(t('st.a.nh01ok', { id }))}</p><div class="row end"><a class="btn" href="#/processes/hs/${esc(id)}" data-go>${t('st.a.open')}</a></div>`);
    md.querySelector('[data-go]').addEventListener('click', () => App.ui.closeModal());
  }

  App.page('students', {
    render(main, params) {
      if (params && ['list', 'fac', 'cfg'].includes(params[0])) { F.tab = params[0]; renderList(main); }
      else if (params && params[0]) renderDetail(main, params[0], params[1]);
      else renderList(main);
    },
  });
})();
