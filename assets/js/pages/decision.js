/* Hỗ trợ ra quyết định (TK: mọi lĩnh vực; PTK: lĩnh vực được phân công – ABAC A3; BGH: toàn bộ).
   7 góc nhìn: cân bằng tải giảng dạy, dự báo nhân lực, người học, quy trình & SLA, NCKH, năng lực & đề xuất nhóm nghiên cứu
   (TK, BGH, PTK lĩnh vực KHCN–DN), PTN & đầu tư.
   Mỗi góc nhìn kết thúc bằng các khuyến nghị tự sinh từ số liệu. Mọi ngưỡng do ứng dụng đặt đều ghi rõ "giả định". */
App.addI18n({
  vi: {
    'dc.sub': 'Phân tích tổng hợp từ dữ liệu Khoa để hỗ trợ điều hành – số liệu giả lập, ngưỡng và giả định được nêu rõ ở từng góc nhìn.',
    'dc.area': 'Lĩnh vực phụ trách', 'dc.area.all': 'Tất cả lĩnh vực', 'dc.area.dao_tao_sv': 'Đào tạo & Sinh viên', 'dc.area.khcn_dn': 'KHCN & Doanh nghiệp',
    'dc.area.note': 'Theo phân công (ABAC A3), Phó Trưởng Khoa chỉ xem các góc nhìn thuộc lĩnh vực được giao: {v}.',
    'dc.v.bal': 'Cân bằng tải giảng dạy', 'dc.v.fc': 'Dự báo nhân lực', 'dc.v.sv': 'Người học', 'dc.v.sla': 'Quy trình & SLA', 'dc.v.rs': 'NCKH', 'dc.v.lab': 'PTN & đầu tư',
    'dc.rec': 'Khuyến nghị', 'dc.rec.note': 'Câu khuyến nghị được sinh tự động từ số liệu hiển thị phía trên; lãnh đạo Khoa xem xét trước khi quyết định.',
    'dc.draft': 'dự thảo', 'dc.none': 'Không có mục nào.',
    'dc.b.p': 'Năm học 2025–2026 (đã kết thúc)', 'dc.b.c': '2026–2027 – đã phân công (HK1)', 'dc.b.proj': '2026–2027 – dự kiến cả năm',
    'dc.b.projnote': 'Dự kiến cả năm 2026–2027 = giờ các lớp HK1/2026–2027 đã phân công + giờ HK2, HK3 của năm 2025–2026 (giả định phân công lặp lại) + giờ hướng dẫn (lấy mức lớn hơn giữa hai năm).',
    'dc.b.n': 'Giảng viên có định mức', 'dc.b.over': 'Quá tải (> 130%)', 'dc.b.under': 'Thiếu tải (< 80%)', 'dc.b.sum': 'Tổng giờ / tổng định mức',
    'dc.b.thr': 'Ngưỡng 130% và 80% do ứng dụng đề xuất (giả định) để sàng lọc; giờ vượt định mức được thanh toán tối đa 200 tiết/năm theo TT 21/2025/TT-BGDĐT.',
    'dc.b.chart': 'Giờ chuẩn so với định mức – {d}', 'dc.b.legend': 'Vạch dọc = định mức sau miễn giảm chức vụ/kiêm nhiệm. Đỏ: > 130%; vàng: < 80%.',
    'dc.b.normsrc': 'Định mức giờ chuẩn: {s}', 'dc.b.overl': 'Danh sách quá tải', 'dc.b.underl': 'Danh sách thiếu tải',
    'dc.b.name': 'Giảng viên', 'dc.b.dept': 'Bộ môn', 'dc.b.hours': 'Giờ chuẩn', 'dc.b.norm': 'Định mức', 'dc.b.pct': 'Tỷ lệ', 'dc.b.red': 'Miễn giảm',
    'dc.b.sug': 'Gợi ý điều chuyển lớp học phần (năm học 2026–2027)', 'dc.b.sugnote': 'Chỉ điều chuyển lớp của năm học hiện tại trong cùng Bộ môn; lớp Sau đại học chỉ giao cho GV có học vị Tiến sĩ; trợ giảng chỉ nhận lớp thí nghiệm; người nhận không vượt 110% sau điều chuyển. Tính trên cơ sở "dự kiến cả năm".',
    'dc.b.sec': 'Lớp học phần', 'dc.b.from': 'Chuyển từ', 'dc.b.to': 'Chuyển sang', 'dc.b.send': 'Gửi đề xuất tới TBM', 'dc.b.sent': 'Đã gửi đề xuất điều chuyển tới Trưởng Bộ môn.',
    'dc.b.nosug': 'Không tìm được phương án điều chuyển thỏa ràng buộc trong cùng Bộ môn.',
    'dc.b.r1': 'Có {n} giảng viên quá tải trên 130% ({l}); cần rà soát phân công trước khi chốt kế hoạch giảng dạy HK2.',
    'dc.b.r2': 'Có {n} giảng viên dưới 80% định mức ({l}); ưu tiên giao thêm lớp học phần hoặc hướng dẫn KLTN/đồ án.',
    'dc.b.r3': 'Áp dụng {n} điều chuyển gợi ý sẽ giảm độ lệch trung bình so với định mức từ {a} xuống {b} điểm phần trăm.',
    'dc.b.r4': 'Toàn Khoa đạt {p}% tổng định mức; Bộ môn có tỷ lệ cao nhất là {d} ({q}%).',
    'dc.b.r0': 'Không có giảng viên nằm ngoài ngưỡng 80–130%; duy trì phân công hiện tại.',
    'dc.f.assume': 'Giả định: mỗi ngành tuyển 80 SV/năm theo bảng "Số lượng tuyển sinh" của CTĐT 2026–2027 (quy mô 320 SV/ngành); trạng thái ổn định – mỗi học phần chuyên ngành (mã EE…) mở 1 lần/năm cho cả khóa; lớp lý thuyết ≤ 60 SV, nhóm thí nghiệm ≤ 24 SV (sức chứa PTN); học phần tự chọn mở 1 lớp cho 50% khóa; học phần chung của hai ngành mở lớp ghép và chia đều khối lượng; Thực tập, Senior Project và Khóa luận tính theo giờ hướng dẫn từng SV; học phần do đơn vị ngoài Khoa giảng dạy (Toán, Lý, Lý luận chính trị, Anh văn…) không tính. Khối lượng Sau đại học giữ như năm 2025–2026.',
    'dc.f.intake': 'Thay đổi chỉ tiêu tuyển sinh', 'dc.f.staff': 'Điều chỉnh số GV – {d}', 'dc.f.dept': 'Bộ môn / ngành', 'dc.f.sections': 'Lớp HP/năm',
    'dc.f.demand': 'Nhu cầu (giờ chuẩn)', 'dc.f.cap': 'Năng lực (tổng định mức)', 'dc.f.actual': 'Đã phân công 2025–26', 'dc.f.gap': 'Chênh lệch', 'dc.f.fte': 'Quy đổi GV',
    'dc.f.ftenote': '1 GV quy đổi = định mức giờ chuẩn của giảng viên Tiến sĩ ({n} giờ; {s}).', 'dc.f.ug': 'Lớp ĐH', 'dc.f.pg': 'Sau đại học', 'dc.f.sup': 'Hướng dẫn',
    'dc.f.dvc': 'Nhu cầu so với năng lực', 'dc.f.dem': 'cầu', 'dc.f.capS': 'cung',
    'dc.f.age': 'Cơ cấu tuổi và lộ trình nghỉ hưu', 'dc.f.ageband': 'Nhóm tuổi', 'dc.f.ret': 'Nghỉ hưu trong 10 năm tới', 'dc.f.age.c': 'Tuổi', 'dc.f.retyear': 'Năm nghỉ hưu (dự kiến)',
    'dc.f.retnote': 'Tuổi nghỉ hưu tính theo mức đích của lộ trình Bộ luật Lao động 2019 (nam 62, nữ 60 – NĐ 135/2020/NĐ-CP); GV có học vị TS, PGS, GS có thể kéo dài thời gian làm việc theo NĐ 50/2022/NĐ-CP – chưa tính.',
    'dc.f.ts': 'Tỷ lệ GV có học vị Tiến sĩ', 'dc.f.tsnote': 'Chuẩn cơ sở giáo dục đại học (TT 01/2024/TT-BGDĐT) quy định tỷ lệ GV cơ hữu có trình độ tiến sĩ tối thiểu – mức cụ thể cần kiểm chứng; ứng dụng dùng vạch tham chiếu 40% (giả định).',
    'dc.f.short': 'thiếu', 'dc.f.surplus': 'dư',
    'dc.f.r1': '{d}: nhu cầu {a} giờ so với năng lực {b} giờ – {k} khoảng {f} GV quy đổi.',
    'dc.f.r2': '{n} giảng viên đến tuổi nghỉ hưu trong 10 năm tới ({l}); cần kế hoạch kế cận và tuyển dụng sớm.',
    'dc.f.r3': 'Tỷ lệ GV Tiến sĩ của {d} là {p}%, thấp hơn mốc tham chiếu 40%; ưu tiên tuyển TS hoặc hỗ trợ ThS đi học NCS.',
    'dc.f.r4': 'Với kịch bản tuyển sinh {i}% và điều chỉnh nhân sự đang chọn, toàn Khoa {k} khoảng {f} GV quy đổi.',
    'dc.s.total': 'Sinh viên theo dõi', 'dc.s.dist': 'Phân bố mức nguy cơ', 'dc.s.byprog': 'Theo ngành', 'dc.s.list': 'Sinh viên mức Đỏ/Cam',
    'dc.s.mssv': 'MSSV', 'dc.s.name': 'Họ tên', 'dc.s.prog': 'Ngành', 'dc.s.cohort': 'Khóa', 'dc.s.level': 'Mức', 'dc.s.reasons': 'Dấu hiệu chính', 'dc.s.adv': 'CVHT',
    'dc.s.note': 'Mức Đỏ chỉ khi có cảnh báo học vụ chính thức (quy chế đào tạo); Cam/Vàng là cảnh báo sớm nội bộ với ngưỡng cấu hình được (giả định).',
    'dc.s.r1': '{n}/{t} sinh viên ở mức Đỏ hoặc Cam; đề nghị CVHT ({l}) gặp trực tiếp trong 2 tuần và cập nhật ghi chú tư vấn.',
    'dc.s.r2': 'Ngành {p} có tỷ lệ SV nguy cơ cao nhất ({q}%); cân nhắc lớp phụ đạo cho các học phần nền tảng bị nợ nhiều.',
    'dc.s.r3': 'Dấu hiệu phổ biến nhất: {e}; nên đưa vào chủ đề sinh hoạt lớp CVHT đầu học kỳ.',
    'dc.s.r0': 'Không có sinh viên ở mức Đỏ/Cam; tiếp tục theo dõi định kỳ.',
    'dc.q.group': 'Nhóm quy trình', 'dc.q.n': 'Số quy trình', 'dc.q.open': 'Đang mở', 'dc.q.over': 'Quá hạn', 'dc.q.done': 'Hoàn thành', 'dc.q.within': 'Đúng SLA',
    'dc.q.asis': 'AS-IS (ngày)', 'dc.q.tobe': 'TO-BE (ngày)', 'dc.q.gain': 'Rút ngắn', 'dc.q.steps': 'Số bước', 'dc.q.chart': 'Thời gian xử lý AS-IS so với TO-BE (ngày)',
    'dc.q.overl': 'Hồ sơ đang quá hạn ở bước hiện tại', 'dc.q.id': 'Mã hồ sơ', 'dc.q.proc': 'Quy trình', 'dc.q.req': 'Người đề nghị', 'dc.q.step': 'Bước hiện tại',
    'dc.q.elapsed': 'Đã chờ / SLA (giờ LV)', 'dc.q.method': 'Quá hạn = thời gian chờ ở bước hiện tại (quy đổi 8 giờ làm việc/ngày, 5 ngày/tuần) vượt sla_hours của bước TO-BE. AS-IS lấy trung bình khoảng min–max trong danh mục quy trình (nguồn văn bản hoặc ước tính).',
    'dc.q.r1': '{n} hồ sơ đang quá hạn; điểm nghẽn lớn nhất ở nhóm {g} ({m} hồ sơ) – đề nghị nhắc người xử lý và xem xét ủy quyền theo QĐ 955/QĐ-ĐHQT.',
    'dc.q.r2': 'Chuẩn hóa TO-BE giúp rút ngắn trung bình {p}% thời gian xử lý; nhóm {g} được lợi nhiều nhất (từ {a} xuống {b} ngày).',
    'dc.q.r3': 'Tỷ lệ hồ sơ hoàn thành đúng SLA là {p}%; mục tiêu đề xuất ≥ 95%.',
    'dc.q.r0': 'Không có hồ sơ quá hạn trong phạm vi theo dõi.',
    'dc.grp.NS': 'Nhân sự', 'dc.grp.GD': 'Giảng dạy – khảo thí', 'dc.grp.HL': 'Học liệu', 'dc.grp.KH': 'Khoa học công nghệ', 'dc.grp.HC': 'Hành chính – hợp tác',
    'dc.grp.NH': 'Người học', 'dc.grp.PTN': 'Phòng thí nghiệm',
    'dc.r.year': 'Năm', 'dc.r.conf': 'Hội nghị', 'dc.r.other': 'Tạp chí khác', 'dc.r.q12': 'Bài Q1+Q2 theo năm', 'dc.r.byq': 'Công bố theo phân hạng và năm',
    'dc.r.norm': 'Hoàn thành định mức NCKH 2025–2026 theo Bộ môn', 'dc.r.normsrc': 'Định mức và quy đổi giờ NCKH: QĐ 1155/QĐ-ĐHQT (ban hành).',
    'dc.r.people': 'Số người', 'dc.r.met': 'Đạt định mức', 'dc.r.avg': 'Tỷ lệ TB', 'dc.r.low': 'Dưới 50%',
    'dc.r.late': 'Đề tài trễ hạn / quá hạn nghiệm thu', 'dc.r.id': 'Mã', 'dc.r.title': 'Tên đề tài', 'dc.r.level': 'Cấp', 'dc.r.pi': 'Chủ nhiệm', 'dc.r.end': 'Kết thúc',
    'dc.r.days': 'Quá hạn (ngày)', 'dc.r.ind': 'Hợp tác doanh nghiệp', 'dc.r.indn': 'Đề tài với doanh nghiệp', 'dc.r.indb': 'Kinh phí (triệu đồng)', 'dc.r.mou': 'Hồ sơ MOU/MOA',
    'dc.r.r1': 'Năm {y} có {n} bài Q1/Q2 ({d} so với năm trước).',
    'dc.r.r2': '{n}/{t} cán bộ đạt định mức NCKH năm 2025–2026; Bộ môn {d} có tỷ lệ thấp nhất ({p}%) – đề nghị kế hoạch hỗ trợ công bố.',
    'dc.r.r3': '{n} đề tài trễ hạn hoặc quá hạn nghiệm thu ({l}); cần làm việc với chủ nhiệm và P.QLKH về gia hạn/nghiệm thu.',
    'dc.r.r4': 'Hợp tác doanh nghiệp mới có {n} đề tài ({b} triệu đồng); nên mở rộng đặt hàng từ đối tác hiện có.',
    'dc.l.ready': 'Sẵn sàng / đang dùng', 'dc.l.broken': 'Hỏng – chờ sửa', 'dc.l.cal': 'Đang hiệu chuẩn', 'dc.l.readiness': 'Mức sẵn sàng thiết bị theo PTN',
    'dc.l.due': 'Hiệu chuẩn đến hạn (≤ 90 ngày)', 'dc.l.eq': 'Thiết bị', 'dc.l.lab': 'PTN', 'dc.l.next': 'Hạn hiệu chuẩn', 'dc.l.overdue': 'Quá hạn', 'dc.l.soon': 'Sắp đến hạn',
    'dc.l.prio': 'Xếp hạng ưu tiên đầu tư thiết bị', 'dc.l.score': 'Điểm',
    'dc.l.formula': 'Điểm ưu tiên (0–100) = 40 × tình trạng (hỏng = 1; đang hiệu chuẩn = 0,5; khác = 0) + 25 × min(1, tuổi thiết bị / 10 năm) + 20 × min(1, giờ sử dụng/HK / 120) + 15 × (1 − khấu hao còn lại %). Trọng số do ứng dụng đề xuất (giả định), có thể điều chỉnh.',
    'dc.l.st': 'Tình trạng', 'dc.l.age': 'Tuổi (năm)', 'dc.l.use': 'Giờ/HK', 'dc.l.dep': 'GT còn lại', 'dc.l.props': 'Đề xuất đầu tư – sửa chữa PTN',
    'dc.l.type': 'Loại', 'dc.l.content': 'Nội dung', 'dc.l.budget': 'Dự toán (tr.đ)', 'dc.l.by': 'Người đề xuất', 'dc.l.pri': 'Ưu tiên',
    'dc.l.r1': '{n} thiết bị hỏng chờ sửa ({l}); ưu tiên xử lý vì ảnh hưởng trực tiếp tới các buổi thực hành.',
    'dc.l.r2': '{n} thiết bị quá hạn hoặc sắp đến hạn hiệu chuẩn trong 90 ngày; lập kế hoạch hiệu chuẩn gộp để tiết kiệm chi phí.',
    'dc.l.r3': 'Thiết bị có điểm ưu tiên đầu tư cao nhất: {e} ({s} điểm).',
    'dc.l.r4': 'Đang mở {n} đề xuất với tổng dự toán {b} triệu đồng; đề xuất chiến lược cần trình BGH theo kế hoạch đầu tư trung hạn.',
    'dc.v.team': 'Năng lực & đề xuất nhóm nghiên cứu',
    'dc.t.th.wl': 'Truyền thông không dây & 6G', 'dc.t.th.ant': 'Anten – siêu cao tần', 'dc.t.th.iot': 'IoT & hệ thống nhúng', 'dc.t.th.ai': 'AI/Học máy cho tín hiệu',
    'dc.t.th.sp': 'Xử lý tín hiệu & radar', 'dc.t.th.cv': 'Xử lý ảnh & thị giác máy', 'dc.t.th.ctl': 'Điều khiển tiên tiến', 'dc.t.th.pwr': 'Năng lượng – lưới điện siêu nhỏ',
    'dc.t.th.rob': 'Robot & tự động hoá', 'dc.t.th.dt': 'Bản sao số & sản xuất thông minh', 'dc.t.th.semi': 'Bán dẫn – vi mạch', 'dc.t.th.sens': 'Cảm biến & đo lường',
    'dc.t.sh.wl': '6G', 'dc.t.sh.ant': 'Anten', 'dc.t.sh.iot': 'IoT', 'dc.t.sh.ai': 'AI/ML', 'dc.t.sh.sp': 'XLTH', 'dc.t.sh.cv': 'Ảnh', 'dc.t.sh.ctl': 'ĐK',
    'dc.t.sh.pwr': 'NL', 'dc.t.sh.rob': 'Robot', 'dc.t.sh.dt': 'BSS', 'dc.t.sh.semi': 'Vi mạch', 'dc.t.sh.sens': 'C.biến',
    'dc.t.k.n': 'Nhà khoa học trong phạm vi', 'dc.t.k.q12': 'Bài Q1/Q2 (3 năm)', 'dc.t.k.pi': 'Đề tài đang chủ nhiệm', 'dc.t.k.cap': 'Còn quỹ thời gian',
    'dc.t.k.capsub': 'giờ giảng ≤ 130% định mức',
    'dc.t.map': 'Bản đồ năng lực theo chủ đề', 'dc.t.map.note': 'Ô càng đậm = năng lực càng mạnh (điểm chủ đề = chuyên ngành 1,5 + bài báo theo hạng × hệ số năm + đề tài; đồng tác giả × 0,7; bài > 3 năm × 0,5).',
    'dc.t.rank': 'Xếp hạng năng lực NCKH', 'dc.t.sortby': 'Sắp theo', 'dc.t.sort.all': 'Điểm tổng hợp',
    'dc.t.c.name': 'Cán bộ', 'dc.t.c.score': 'Điểm NL', 'dc.t.c.top': 'Chủ đề mạnh', 'dc.t.c.pub': 'Công bố 3 năm', 'dc.t.c.pi': 'Chủ nhiệm', 'dc.t.c.rs': '% định mức NCKH', 'dc.t.c.ready': 'Sẵn sàng',
    'dc.t.pubsub': '{q} Q1/Q2', 'dc.t.pisub': '{a} đang thực hiện',
    'dc.t.r.ok': 'Sẵn sàng', 'dc.t.r.mid': 'Vừa phải', 'dc.t.r.bad': 'Hạn chế thời gian', 'dc.t.r.tip': 'Giờ giảng 2025–2026: {p} định mức',
    'dc.t.formula': 'Điểm NL (0–100, chuẩn hoá theo người cao nhất) = công bố 3 năm (Q1 3; Q2 2; Q3/Q4 1; hội nghị 0,5) + đề tài (chủ nhiệm 2; thành viên 1; đã nghiệm thu +0,5) + học hàm/học vị (PGS 3; TS 2; ThS 0,5) + mức hoàn thành định mức NCKH 2025–2026 (tối đa 3). Sẵn sàng: giờ giảng < 100% định mức; vừa phải 100–130%; > 130% = hạn chế thời gian. Trọng số và ngưỡng do ứng dụng đề xuất (giả định).',
    'dc.t.build': 'Đề xuất nhóm cho đề tài nhóm / đề tài chung', 'dc.t.call': 'Đợt kêu gọi', 'dc.t.custom': 'Tự chọn chủ đề',
    'dc.t.pick': 'Chọn chủ đề cần phủ', 'dc.t.mix': 'Ưu tiên liên ngành (hai Bộ môn)',
    'dc.t.req': 'Chủ đề yêu cầu', 'dc.t.budget': 'Kinh phí', 'dc.t.size': 'Quy mô nhóm', 'dc.t.dl': 'Hạn nộp', 'dc.t.days': 'còn {n} ngày', 'dc.t.elig': 'Điều kiện chủ nhiệm',
    'dc.t.e.ts': 'Chủ nhiệm có học vị Tiến sĩ', 'dc.t.e.q': 'Có ≥ {n} bài Q1/Q2 trong 3 năm', 'dc.t.e.act': 'Đang chủ nhiệm ≤ {n} đề tài', 'dc.t.e.inter': 'Thành viên thuộc ≥ 2 Bộ môn',
    'dc.t.mil': '{n} triệu đồng', 'dc.t.ppl': '{n} người', 'dc.t.interb': 'Liên ngành',
    'dc.t.team': 'Đội hình đề xuất', 'dc.t.tscore': 'Điểm đội hình', 'dc.t.cov': 'Độ phủ chủ đề',
    'dc.t.role.pi': 'Chủ nhiệm', 'dc.t.role.m': 'Thành viên chính', 'dc.t.role.y': 'Thành viên trẻ (đào tạo)',
    'dc.t.why.th': 'Mạnh: {l}', 'dc.t.why.q': '{n} bài Q1/Q2 trong 3 năm', 'dc.t.why.pi': 'Đang chủ nhiệm {n} đề tài', 'dc.t.why.done': 'Đã nghiệm thu {n} đề tài',
    'dc.t.why.gap': 'Bổ sung chủ đề còn thiếu: {l}', 'dc.t.why.dept': 'Khác Bộ môn → tăng tính liên ngành', 'dc.t.why.ready': 'Giờ giảng {p} định mức → có quỹ thời gian',
    'dc.t.why.busy': 'Giờ giảng {p} định mức → cần giảm tải nếu tham gia', 'dc.t.why.young': 'Cán bộ trẻ ({d}) – đào tạo kế cận', 'dc.t.why.ts': 'Học vị TS',
    'dc.t.noelig': 'Không có ứng viên đáp ứng đủ điều kiện chủ nhiệm; đề xuất tạm người phù hợp nhất – cần xin ý kiến cơ quan quản lý đề tài.',
    'dc.t.alt': 'Phương án thay thế', 'dc.t.alt.for': 'thay cho', 'dc.t.fit': 'Độ phù hợp',
    'dc.t.send': 'Gửi đề xuất tới thành viên', 'dc.t.sent': 'Đã gửi đề xuất tới {n} thành viên.', 'dc.t.create': 'Tạo hồ sơ đăng ký đề tài',
    'dc.t.created': 'Đã tạo hồ sơ nháp {id} theo QT-ĐHQT-KH-01.', 'dc.t.noproc': 'Mô-đun quy trình chưa sẵn sàng.', 'dc.t.needth': 'Chọn ít nhất một chủ đề.',
    'dc.t.callnote': 'Các đợt kêu gọi là dữ liệu mô phỏng; điều kiện chủ nhiệm minh hoạ theo thông lệ quỹ (giả định) – đối chiếu thông báo chính thức trước khi nộp.',
    'dc.t.r1': 'Chủ đề yếu nhất: {l} – chỉ {n} người có năng lực rõ; cân nhắc tuyển dụng hoặc hợp tác ngoài Khoa.',
    'dc.t.r2': '{n} cán bộ năng lực NCKH cao nhưng quá tải giảng dạy ({l}); giảm tải để tham gia đề tài nhóm.',
    'dc.t.r3': 'Ưu tiên đợt "{c}": đội hình đạt {s} điểm, phủ {k}/{m} chủ đề yêu cầu.',
    'dc.t.r4': '{n} cán bộ chưa có công bố trong 3 năm ({l}); ghép vào nhóm của chủ nhiệm mạnh để kèm cặp.',
  },
  en: {
    'dc.sub': 'Faculty-wide analytics to support management decisions – simulated data; thresholds and assumptions are stated in each view.',
    'dc.area': 'Assigned area', 'dc.area.all': 'All areas', 'dc.area.dao_tao_sv': 'Academic & Student affairs', 'dc.area.khcn_dn': 'Research & Industry',
    'dc.area.note': 'Per assignment (ABAC A3), a Vice Dean only sees the views of the assigned area: {v}.',
    'dc.v.bal': 'Teaching load balance', 'dc.v.fc': 'Staffing forecast', 'dc.v.sv': 'Students', 'dc.v.sla': 'Processes & SLA', 'dc.v.rs': 'Research', 'dc.v.lab': 'Labs & investment',
    'dc.rec': 'Recommendations', 'dc.rec.note': 'Recommendations are generated automatically from the figures above; faculty leaders should review them before deciding.',
    'dc.draft': 'draft', 'dc.none': 'Nothing to show.',
    'dc.b.p': 'Academic year 2025–2026 (closed)', 'dc.b.c': '2026–2027 – assigned so far (Sem 1)', 'dc.b.proj': '2026–2027 – full-year projection',
    'dc.b.projnote': 'Full-year 2026–2027 projection = Sem 1/2026–27 sections already assigned + Sem 2 and Sem 3 hours of 2025–26 (assumed to repeat) + supervision hours (larger of the two years).',
    'dc.b.n': 'Lecturers with a quota', 'dc.b.over': 'Overloaded (> 130%)', 'dc.b.under': 'Underloaded (< 80%)', 'dc.b.sum': 'Total hours / total quota',
    'dc.b.thr': 'The 130% and 80% thresholds are screening values proposed by the app (assumption); overtime is paid up to 200 periods/year under Circular 21/2025/TT-BGDĐT.',
    'dc.b.chart': 'Standard hours vs quota – {d}', 'dc.b.legend': 'Vertical marker = quota after position/concurrent-role reductions. Red: > 130%; amber: < 80%.',
    'dc.b.normsrc': 'Teaching quota: {s}', 'dc.b.overl': 'Overloaded lecturers', 'dc.b.underl': 'Underloaded lecturers',
    'dc.b.name': 'Lecturer', 'dc.b.dept': 'Department', 'dc.b.hours': 'Std. hours', 'dc.b.norm': 'Quota', 'dc.b.pct': 'Ratio', 'dc.b.red': 'Reductions',
    'dc.b.sug': 'Suggested section reassignments (2026–2027)', 'dc.b.sugnote': 'Only current-year sections move, within a department; postgraduate sections go only to PhD holders; teaching assistants receive lab sections only; the receiver stays ≤ 110% afterwards. Computed on the full-year projection.',
    'dc.b.sec': 'Section', 'dc.b.from': 'Move from', 'dc.b.to': 'Move to', 'dc.b.send': 'Send to Head of Dept.', 'dc.b.sent': 'Reassignment proposal sent to the Head of Department.',
    'dc.b.nosug': 'No reassignment within a department satisfies the constraints.',
    'dc.b.r1': '{n} lecturers are above 130% ({l}); review assignments before the Semester 2 teaching plan is finalised.',
    'dc.b.r2': '{n} lecturers are below 80% of quota ({l}); give them additional sections or thesis/project supervision first.',
    'dc.b.r3': 'Applying the {n} suggested moves reduces the mean deviation from quota from {a} to {b} percentage points.',
    'dc.b.r4': 'The faculty reaches {p}% of total quota; the department with the highest ratio is {d} ({q}%).',
    'dc.b.r0': 'No lecturer is outside the 80–130% band; keep the current assignment.',
    'dc.f.assume': 'Assumptions: each programme admits 80 students/year, as in the "Admission quota" table of the 2026–2027 curriculum (320 students per programme); steady state – each specialised course (EE… codes) runs once a year for the whole cohort; lecture sections ≤ 60 students, lab groups ≤ 24 (lab capacity); each elective runs one section for 50% of the cohort; courses shared by both programmes run as joint sections and the load is split equally; Internship, Senior Project and Thesis counted as supervision hours per student; courses taught by other units (maths, physics, political theory, English…) excluded. Postgraduate load kept at 2025–26 level.',
    'dc.f.intake': 'Change in admission quota', 'dc.f.staff': 'Adjust lecturers – {d}', 'dc.f.dept': 'Department / programme', 'dc.f.sections': 'Sections/yr',
    'dc.f.demand': 'Demand (std. hours)', 'dc.f.cap': 'Capacity (sum of quotas)', 'dc.f.actual': 'Assigned 2025–26', 'dc.f.gap': 'Gap', 'dc.f.fte': 'Lecturer FTE',
    'dc.f.ftenote': '1 FTE = teaching quota of a PhD lecturer ({n} hours; {s}).', 'dc.f.ug': 'UG sections', 'dc.f.pg': 'Postgraduate', 'dc.f.sup': 'Supervision',
    'dc.f.dvc': 'Demand vs capacity', 'dc.f.dem': 'dem.', 'dc.f.capS': 'cap.',
    'dc.f.age': 'Age structure & retirement horizon', 'dc.f.ageband': 'Age band', 'dc.f.ret': 'Retiring within 10 years', 'dc.f.age.c': 'Age', 'dc.f.retyear': 'Expected retirement',
    'dc.f.retnote': 'Retirement age uses the end point of the Labour Code 2019 roadmap (men 62, women 60 – Decree 135/2020/NĐ-CP); PhD holders and professors may extend under Decree 50/2022/NĐ-CP – not included.',
    'dc.f.ts': 'Share of lecturers holding a PhD', 'dc.f.tsnote': 'University standards (Circular 01/2024/TT-BGDĐT) set a minimum share of full-time PhD lecturers – exact figure to be verified; the app uses a 40% reference marker (assumption).',
    'dc.f.short': 'short by', 'dc.f.surplus': 'surplus of',
    'dc.f.r1': '{d}: demand {a} h vs capacity {b} h – {k} about {f} FTE.',
    'dc.f.r2': '{n} lecturers reach retirement age within 10 years ({l}); plan succession and recruitment early.',
    'dc.f.r3': 'PhD share in {d} is {p}%, below the 40% reference; prioritise PhD hires or support MSc staff to start a PhD.',
    'dc.f.r4': 'With an intake change of {i}% and the selected staffing, the faculty is {k} about {f} FTE in total.',
    'dc.s.total': 'Students monitored', 'dc.s.dist': 'Risk distribution', 'dc.s.byprog': 'By programme', 'dc.s.list': 'Red/orange students',
    'dc.s.mssv': 'Student ID', 'dc.s.name': 'Name', 'dc.s.prog': 'Programme', 'dc.s.cohort': 'Cohort', 'dc.s.level': 'Level', 'dc.s.reasons': 'Main signals', 'dc.s.adv': 'Advisor',
    'dc.s.note': 'Red only with an official academic warning (training regulation); orange/yellow are internal early warnings with configurable thresholds (assumption).',
    'dc.s.r1': '{n}/{t} students are red or orange; advisors ({l}) should meet them within 2 weeks and update advising notes.',
    'dc.s.r2': 'Programme {p} has the highest at-risk share ({q}%); consider tutoring for the foundation courses most often failed.',
    'dc.s.r3': 'Most frequent signal: {e}; include it in the advisor class meeting at the start of the semester.',
    'dc.s.r0': 'No red/orange students; continue periodic monitoring.',
    'dc.q.group': 'Process group', 'dc.q.n': 'Processes', 'dc.q.open': 'Open', 'dc.q.over': 'Overdue', 'dc.q.done': 'Completed', 'dc.q.within': 'Within SLA',
    'dc.q.asis': 'AS-IS (days)', 'dc.q.tobe': 'TO-BE (days)', 'dc.q.gain': 'Reduction', 'dc.q.steps': 'Steps', 'dc.q.chart': 'Processing time AS-IS vs TO-BE (days)',
    'dc.q.overl': 'Requests overdue at their current step', 'dc.q.id': 'Request', 'dc.q.proc': 'Process', 'dc.q.req': 'Requester', 'dc.q.step': 'Current step',
    'dc.q.elapsed': 'Waiting / SLA (work h)', 'dc.q.method': 'Overdue = waiting time at the current step (8 working hours/day, 5 days/week) exceeds the sla_hours of that TO-BE step. AS-IS is the mean of the min–max range in the process catalogue (documented or estimated).',
    'dc.q.r1': '{n} requests are overdue; the main bottleneck is the {g} group ({m} requests) – remind handlers and consider delegation under Decision 955/QĐ-ĐHQT.',
    'dc.q.r2': 'The TO-BE design shortens processing time by {p}% on average; the {g} group gains most (from {a} to {b} days).',
    'dc.q.r3': '{p}% of completed requests met their SLA; proposed target ≥ 95%.',
    'dc.q.r0': 'No overdue requests in scope.',
    'dc.grp.NS': 'Human resources', 'dc.grp.GD': 'Teaching & assessment', 'dc.grp.HL': 'Learning materials', 'dc.grp.KH': 'Research', 'dc.grp.HC': 'Administration & partnerships',
    'dc.grp.NH': 'Students', 'dc.grp.PTN': 'Laboratories',
    'dc.r.year': 'Year', 'dc.r.conf': 'Conference', 'dc.r.other': 'Other journals', 'dc.r.q12': 'Q1+Q2 papers per year', 'dc.r.byq': 'Publications by quartile and year',
    'dc.r.norm': 'Research quota completion 2025–2026 by department', 'dc.r.normsrc': 'Research quota and hour conversion: Decision 1155/QĐ-ĐHQT (in force).',
    'dc.r.people': 'People', 'dc.r.met': 'Quota met', 'dc.r.avg': 'Mean ratio', 'dc.r.low': 'Below 50%',
    'dc.r.late': 'Projects late / overdue for acceptance', 'dc.r.id': 'ID', 'dc.r.title': 'Title', 'dc.r.level': 'Level', 'dc.r.pi': 'PI', 'dc.r.end': 'End date',
    'dc.r.days': 'Days overdue', 'dc.r.ind': 'Industry partnerships', 'dc.r.indn': 'Industry-funded projects', 'dc.r.indb': 'Budget (million VND)', 'dc.r.mou': 'MOU/MOA requests',
    'dc.r.r1': '{y} has {n} Q1/Q2 papers ({d} vs the previous year).',
    'dc.r.r2': '{n}/{t} staff met the 2025–2026 research quota; {d} has the lowest rate ({p}%) – plan publication support.',
    'dc.r.r3': '{n} projects are late or overdue for acceptance ({l}); follow up with the PIs and the Research Office on extension/acceptance.',
    'dc.r.r4': 'Only {n} industry-funded projects ({b} million VND); expand commissioned research with existing partners.',
    'dc.l.ready': 'Ready / in use', 'dc.l.broken': 'Broken – awaiting repair', 'dc.l.cal': 'Under calibration', 'dc.l.readiness': 'Equipment readiness by lab',
    'dc.l.due': 'Calibration due (≤ 90 days)', 'dc.l.eq': 'Equipment', 'dc.l.lab': 'Lab', 'dc.l.next': 'Calibration due', 'dc.l.overdue': 'Overdue', 'dc.l.soon': 'Due soon',
    'dc.l.prio': 'Equipment investment priority ranking', 'dc.l.score': 'Score',
    'dc.l.formula': 'Priority score (0–100) = 40 × condition (broken = 1; under calibration = 0.5; else 0) + 25 × min(1, age / 10 years) + 20 × min(1, hours used per semester / 120) + 15 × (1 − remaining book value %). Weights proposed by the app (assumption) and adjustable.',
    'dc.l.st': 'Condition', 'dc.l.age': 'Age (yrs)', 'dc.l.use': 'Hours/sem', 'dc.l.dep': 'Book value', 'dc.l.props': 'Lab investment & repair proposals',
    'dc.l.type': 'Type', 'dc.l.content': 'Content', 'dc.l.budget': 'Budget (M VND)', 'dc.l.by': 'Proposed by', 'dc.l.pri': 'Priority',
    'dc.l.r1': '{n} items are broken awaiting repair ({l}); fix them first as they directly affect lab sessions.',
    'dc.l.r2': '{n} items are overdue or due for calibration within 90 days; bundle calibrations to save cost.',
    'dc.l.r3': 'Highest investment priority: {e} ({s} points).',
    'dc.l.r4': '{n} open proposals totalling {b} million VND; strategic proposals must go to the Rector board within the medium-term investment plan.',
    'dc.v.team': 'Expertise & team recommendations',
    'dc.t.th.wl': 'Wireless communications & 6G', 'dc.t.th.ant': 'Antennas & microwave', 'dc.t.th.iot': 'IoT & embedded systems', 'dc.t.th.ai': 'AI/ML for signals',
    'dc.t.th.sp': 'Signal processing & radar', 'dc.t.th.cv': 'Image processing & vision', 'dc.t.th.ctl': 'Advanced control', 'dc.t.th.pwr': 'Energy & microgrids',
    'dc.t.th.rob': 'Robotics & automation', 'dc.t.th.dt': 'Digital twin & smart manufacturing', 'dc.t.th.semi': 'Semiconductors & ICs', 'dc.t.th.sens': 'Sensing & measurement',
    'dc.t.sh.wl': '6G', 'dc.t.sh.ant': 'Ant.', 'dc.t.sh.iot': 'IoT', 'dc.t.sh.ai': 'AI/ML', 'dc.t.sh.sp': 'DSP', 'dc.t.sh.cv': 'Vision', 'dc.t.sh.ctl': 'Ctrl',
    'dc.t.sh.pwr': 'Energy', 'dc.t.sh.rob': 'Robot', 'dc.t.sh.dt': 'DTwin', 'dc.t.sh.semi': 'IC', 'dc.t.sh.sens': 'Sensing',
    'dc.t.k.n': 'Researchers in scope', 'dc.t.k.q12': 'Q1/Q2 papers (3 yrs)', 'dc.t.k.pi': 'Active PI projects', 'dc.t.k.cap': 'Have time capacity',
    'dc.t.k.capsub': 'teaching ≤ 130% of quota',
    'dc.t.map': 'Expertise map by theme', 'dc.t.map.note': 'Darker cell = stronger expertise (theme score = field 1.5 + papers by quartile × recency + projects; co-author × 0.7; papers > 3 yrs × 0.5).',
    'dc.t.rank': 'Research capability ranking', 'dc.t.sortby': 'Sort by', 'dc.t.sort.all': 'Overall score',
    'dc.t.c.name': 'Staff', 'dc.t.c.score': 'Score', 'dc.t.c.top': 'Strong themes', 'dc.t.c.pub': 'Papers 3 yrs', 'dc.t.c.pi': 'PI', 'dc.t.c.rs': 'Research quota %', 'dc.t.c.ready': 'Availability',
    'dc.t.pubsub': '{q} Q1/Q2', 'dc.t.pisub': '{a} ongoing',
    'dc.t.r.ok': 'Available', 'dc.t.r.mid': 'Moderate', 'dc.t.r.bad': 'Limited time', 'dc.t.r.tip': 'Teaching 2025–2026: {p} of quota',
    'dc.t.formula': 'Score (0–100, normalised to the top person) = papers in 3 yrs (Q1 3; Q2 2; Q3/Q4 1; conference 0.5) + projects (PI 2; member 1; accepted +0.5) + rank/degree (Assoc. Prof. 3; PhD 2; MSc 0.5) + 2025–2026 research-quota completion (max 3). Availability: teaching < 100% of quota; moderate 100–130%; > 130% = limited time. Weights and thresholds proposed by the app (assumption).',
    'dc.t.build': 'Team recommendation for group / joint projects', 'dc.t.call': 'Call', 'dc.t.custom': 'Custom themes',
    'dc.t.pick': 'Pick themes to cover', 'dc.t.mix': 'Prefer interdisciplinary (two departments)',
    'dc.t.req': 'Required themes', 'dc.t.budget': 'Budget', 'dc.t.size': 'Team size', 'dc.t.dl': 'Deadline', 'dc.t.days': '{n} days left', 'dc.t.elig': 'PI eligibility',
    'dc.t.e.ts': 'PI holds a PhD', 'dc.t.e.q': '≥ {n} Q1/Q2 papers in 3 years', 'dc.t.e.act': 'Currently PI of ≤ {n} projects', 'dc.t.e.inter': 'Members from ≥ 2 departments',
    'dc.t.mil': '{n} million VND', 'dc.t.ppl': '{n} people', 'dc.t.interb': 'Interdisciplinary',
    'dc.t.team': 'Recommended team', 'dc.t.tscore': 'Team score', 'dc.t.cov': 'Theme coverage',
    'dc.t.role.pi': 'Principal investigator', 'dc.t.role.m': 'Key member', 'dc.t.role.y': 'Young member (training)',
    'dc.t.why.th': 'Strong in: {l}', 'dc.t.why.q': '{n} Q1/Q2 papers in 3 years', 'dc.t.why.pi': 'Currently PI of {n} projects', 'dc.t.why.done': '{n} projects accepted',
    'dc.t.why.gap': 'Fills missing themes: {l}', 'dc.t.why.dept': 'Other department → interdisciplinary', 'dc.t.why.ready': 'Teaching at {p} of quota → has time',
    'dc.t.why.busy': 'Teaching at {p} of quota → needs load relief to join', 'dc.t.why.young': 'Early-career staff ({d}) – capacity building', 'dc.t.why.ts': 'PhD holder',
    'dc.t.noelig': 'No candidate meets every PI requirement; the best-fitting person is proposed provisionally – consult the funding agency.',
    'dc.t.alt': 'Alternatives', 'dc.t.alt.for': 'instead of', 'dc.t.fit': 'Fit',
    'dc.t.send': 'Send proposal to members', 'dc.t.sent': 'Proposal sent to {n} members.', 'dc.t.create': 'Create project application',
    'dc.t.created': 'Draft request {id} created under QT-ĐHQT-KH-01.', 'dc.t.noproc': 'Process module not available.', 'dc.t.needth': 'Select at least one theme.',
    'dc.t.callnote': 'Calls are simulated; PI requirements illustrate usual funder practice (assumption) – check the official announcement before applying.',
    'dc.t.r1': 'Weakest theme: {l} – only {n} people with clear expertise; consider hiring or external partnerships.',
    'dc.t.r2': '{n} staff with high research capability are overloaded with teaching ({l}); reduce their load so they can join group projects.',
    'dc.t.r3': 'Prioritise "{c}": the recommended team scores {s} and covers {k}/{m} required themes.',
    'dc.t.r4': '{n} staff have no publications in 3 years ({l}); attach them to teams led by strong PIs for mentoring.',
  },
});
(function () {
  const t = App.t, esc = App.esc, D = App.D, C = App.calc;
  const YP = '2025-2026', YC = '2026-2027';
  const TEACH_POS = ['TK', 'PTK', 'TBM', 'GV'];   // TG: giờ trợ giảng không ghi nhận trong dữ liệu lớp học phần
  const VIEWS = { all: ['bal', 'fc', 'sv', 'sla', 'rs', 'team', 'lab'], dao_tao_sv: ['bal', 'fc', 'sv', 'sla'], khcn_dn: ['rs', 'team', 'lab', 'sla'] };
  const GROUPS = { dao_tao_sv: ['GD', 'HL', 'NH'], khcn_dn: ['KH', 'PTN'] };
  const COL = { over: '#C53030', under: '#B7791F', ok: '#2E3191', red: '#C53030', orange: '#DD6B20', yellow: '#D69E2E', green: '#2F855A' };
  const r1 = (x) => Math.round(x * 10) / 10;
  const sum = (a, f) => a.reduce((s, x) => s + (f ? f(x) : x), 0);
  const pctS = (x) => App.fmtNum(x, 0) + '%';
  const state = { basis: 'p', intake: 0, dS: { DTVT: 0, DKTDH: 0 } };
  let area = 'all';

  function deptName(code) { return App.L(App.dept(code)); }
  function deptShort(code) { return code === 'DTVT' ? (App.lang === 'vi' ? 'ĐT–VT' : 'E&T') : code === 'DKTDH' ? (App.lang === 'vi' ? 'ĐK–TĐH' : 'Control') : code; }
  function nm(s) { return s ? App.name(s, { title: true }) : '–'; }
  function recCard(items) {
    return `<div class="card" style="border-left:4px solid var(--cyan)"><h3>${t('dc.rec')}</h3><ul style="margin:0;padding-left:18px">${items.map((x) => `<li style="margin:4px 0">${esc(x)}</li>`).join('')}</ul>
      <p class="small muted" style="margin:8px 0 0">${t('dc.rec.note')}</p></div>`;
  }
  function note(txt, kind) { return `<div class="notice ${kind || ''} small">${esc(txt)}</div>`; }

  /* ------------------------------------------------------------ cân bằng tải */
  function lecturers() { return App.staffList().filter((s) => s.loai === 'khoa' && TEACH_POS.includes(s.vi_tri) && App.acl.inScope(s)); }
  function wl(s) {
    const p = C.yearTeaching(s.ma_cb, YP), c = C.yearTeaching(s.ma_cb, YC);
    const prevRest = sum(p.secs.filter((x) => x.hoc_ky !== 1), (x) => x.hours);
    const sup = Math.max(sum(c.sups, (x) => x.hours), sum(p.sups, (x) => x.hours));
    const proj = r1(sum(c.secs, (x) => x.hours) + prevRest + sup);
    const norm = p.norm.teach;
    return { s, p, c, norm, tot: { p: p.total, c: c.total, proj }, pct: { p: norm ? p.total / norm * 100 : 0, c: norm ? c.total / norm * 100 : 0, proj: norm ? proj / norm * 100 : 0 } };
  }
  function suggestions(W) {
    const st = W.filter((w) => w.norm > 0).map((w) => ({ w, tot: w.tot.proj }));
    const moves = [], used = new Set();
    const dev = () => sum(st, (x) => Math.abs(x.tot / x.w.norm * 100 - 100)) / (st.length || 1);
    const dev0 = dev();
    ['DTVT', 'DKTDH'].forEach((d) => {
      const over = st.filter((x) => x.w.s.bo_mon === d && x.tot / x.w.norm > 1.3).sort((a, b) => b.tot / b.w.norm - a.tot / a.w.norm);
      over.forEach((O) => {
        for (let k = 0; k < 2 && O.tot / O.w.norm > 1.3; k++) {
          let best = null;
          O.w.c.secs.filter((sec) => !used.has(sec.id)).forEach((sec) => {
            st.filter((U) => U !== O && U.w.s.bo_mon === d && U.tot / U.w.norm < 0.8).forEach((U) => {
              if (sec.bac === 'SDH' && U.w.s.hoc_vi !== 'TS') return;
              if (U.w.s.vi_tri === 'TG' && sec.loai !== 'TN') return;
              const nu = (U.tot + sec.hours) / U.w.norm, no = (O.tot - sec.hours) / O.w.norm;
              if (nu > 1.1) return;
              const score = Math.abs(no - 1) + Math.abs(nu - 1);
              if (!best || score < best.score) best = { sec, U, score };
            });
          });
          if (!best) break;
          const m = { sec: best.sec, O: O.w, U: best.U.w, o0: O.tot / O.w.norm * 100, u0: best.U.tot / best.U.w.norm * 100 };
          O.tot -= best.sec.hours; best.U.tot += best.sec.hours; used.add(best.sec.id);
          m.o1 = O.tot / O.w.norm * 100; m.u1 = best.U.tot / best.U.w.norm * 100;
          moves.push(m);
        }
      });
    });
    return { moves, dev0, dev1: dev() };
  }

  function viewBal(body) {
    const W = lecturers().map(wl).filter((w) => w.norm > 0);
    const b = state.basis;
    const over = W.filter((w) => w.pct[b] > 130).sort((x, y) => y.pct[b] - x.pct[b]);
    const under = W.filter((w) => w.pct[b] < 80).sort((x, y) => x.pct[b] - y.pct[b]);
    const totH = sum(W, (w) => w.tot[b]), totN = sum(W, (w) => w.norm);
    const tsNorm = (D.rules.teaching.norm_by_title || []).find((x) => x.code === 'TS') || {};
    const draft = /du_thao/.test(tsNorm.status || '');
    const kind = (w) => (w.pct[b] > 130 ? 'over' : w.pct[b] < 80 ? 'under' : 'ok');
    const depts = ['DTVT', 'DKTDH'].filter((d) => W.some((w) => w.s.bo_mon === d));
    const chartCard = (d) => {
      const ws = W.filter((w) => w.s.bo_mon === d).sort((x, y) => y.pct[b] - x.pct[b]);
      const max = Math.max(1, ...ws.map((w) => Math.max(w.tot[b], w.norm)));
      return `<div class="card"><h3>${t('dc.b.chart', { d: esc(deptName(d)) })}</h3>${App.ui.chart.hbars(ws.map((w) => ({ l: nm(w.s), v: w.tot[b], ref: w.norm, c: COL[kind(w)], txt: pctS(w.pct[b]) })), { max })}
        <p class="small muted" style="margin:8px 0 0">${t('dc.b.legend')}</p></div>`;
    };
    const tbl = (list) => App.ui.table([
      { t: t('dc.b.name'), f: (w) => esc(nm(w.s)) }, { t: t('dc.b.dept'), f: (w) => esc(deptShort(w.s.bo_mon)) },
      { t: t('dc.b.hours'), f: (w) => App.fmtNum(w.tot[b]), cls: 'num' }, { t: t('dc.b.norm'), f: (w) => App.fmtNum(w.norm), cls: 'num' },
      { t: t('dc.b.pct'), f: (w) => App.ui.badge(pctS(w.pct[b]), w.pct[b] > 130 ? 'bad' : 'warn'), cls: 'c' },
      { t: t('dc.b.red'), f: (w) => `<span class="small">${esc(w.p.norm.reductions.map((r) => r.label + ' ' + r.pct + '%').join('; ') || '–')}</span>` },
    ], list, { empty: t('dc.none') });
    const S = suggestions(W);
    const moveTbl = S.moves.length ? App.ui.table([
      { t: t('dc.b.sec'), f: (m) => `<b>${esc(m.sec.ma_hp)}</b> ${esc(App.lang === 'vi' ? m.sec.ten_vi : m.sec.ten_en)}<div class="small muted">HK${m.sec.hoc_ky} · ${esc(m.sec.loai)} · ${esc(m.sec.bac)} · ${m.sec.si_so} SV · ${App.fmtNum(m.sec.hours)} h</div>` },
      { t: t('dc.b.from'), f: (m) => `${esc(nm(m.O.s))}<div class="small">${pctS(m.o0)} → <b>${pctS(m.o1)}</b></div>` },
      { t: t('dc.b.to'), f: (m) => `${esc(nm(m.U.s))}<div class="small">${pctS(m.u0)} → <b>${pctS(m.u1)}</b></div>` },
      { t: t('action'), f: (m, i) => `<button class="btn ghost sm" data-send="${i}">${t('dc.b.send')}</button>` },
    ], S.moves) : App.ui.empty(t('dc.b.nosug'));
    const recs = [];
    if (over.length) recs.push(t('dc.b.r1', { n: over.length, l: over.slice(0, 4).map((w) => nm(w.s) + ' ' + pctS(w.pct[b])).join(', ') }));
    if (under.length) recs.push(t('dc.b.r2', { n: under.length, l: under.slice(0, 4).map((w) => nm(w.s) + ' ' + pctS(w.pct[b])).join(', ') }));
    if (S.moves.length) recs.push(t('dc.b.r3', { n: S.moves.length, a: App.fmtNum(S.dev0, 0), b: App.fmtNum(S.dev1, 0) }));
    const dp = depts.map((d) => { const ws = W.filter((w) => w.s.bo_mon === d); return { d, p: sum(ws, (w) => w.tot[b]) / (sum(ws, (w) => w.norm) || 1) * 100 }; }).sort((x, y) => y.p - x.p);
    if (dp.length) recs.push(t('dc.b.r4', { p: App.fmtNum(totH / (totN || 1) * 100, 0), d: deptName(dp[0].d), q: App.fmtNum(dp[0].p, 0) }));
    if (!over.length && !under.length) recs.unshift(t('dc.b.r0'));
    body.innerHTML = `<div class="card"><div class="row between"><div class="row">${['p', 'c', 'proj'].map((k) => `<button class="btn sm ${state.basis === k ? '' : 'ghost'}" data-basis="${k}">${t('dc.b.' + k)}</button>`).join('')}</div>
        <span class="small muted">${t('dc.b.normsrc', { s: esc(tsNorm.source || '') })} ${draft ? App.ui.badge(t('dc.draft'), 'warn') : ''}</span></div>
        ${b === 'proj' ? `<p class="small muted" style="margin:8px 0 0">${t('dc.b.projnote')}</p>` : ''}</div>
      <div class="kpis">${App.ui.kpi(t('dc.b.n'), W.length, '')}${App.ui.kpi(t('dc.b.over'), over.length, '', over.length ? 'bad' : 'ok')}${App.ui.kpi(t('dc.b.under'), under.length, '', under.length ? 'warn' : 'ok')}
        ${App.ui.kpi(t('dc.b.sum'), App.fmtNum(totH, 0) + ' / ' + App.fmtNum(totN, 0), App.ui.progress(totH / (totN || 1) * 100, 'cyan'), 'cyan')}</div>
      ${note(t('dc.b.thr'))}
      <div class="grid g2">${depts.map(chartCard).join('')}</div>
      <div class="grid g2"><div class="card"><h3>${t('dc.b.overl')}</h3>${tbl(over)}</div><div class="card"><h3>${t('dc.b.underl')}</h3>${tbl(under)}</div></div>
      <div class="card"><h3>${t('dc.b.sug')}</h3><p class="small muted">${t('dc.b.sugnote')}</p>${moveTbl}</div>${recCard(recs)}`;
    body.querySelectorAll('[data-basis]').forEach((x) => (x.onclick = () => { state.basis = x.dataset.basis; viewBal(body); }));
    body.querySelectorAll('[data-send]').forEach((x) => (x.onclick = () => {
      const m = S.moves[+x.dataset.send];
      const tbm = App.staffList().find((s) => s.vi_tri === 'TBM' && s.bo_mon === m.O.s.bo_mon);
      const msg = 'Đề xuất chuyển lớp ' + m.sec.ma_hp + ' (HK' + m.sec.hoc_ky + ') từ CB ' + m.O.s.ma_cb + ' sang CB ' + m.U.s.ma_cb;
      if (tbm) App.notify(tbm.ma_cb, msg, '#/teaching');
      App.audit('DE_XUAT', msg, m.O.s.ma_cb, 'Cân bằng tải giảng dạy');
      App.ui.toast(t('dc.b.sent'), 'ok'); x.disabled = true;
    }));
  }

  /* ------------------------------------------------------------ dự báo nhân lực */
  const SUP = { EE097IU: 'KLTN', EE137IU: 'TT', EE107IU: 'DA' };
  function demand(prog, intake) {
    const P = D.curricula[prog]; if (!P) return { ug: 0, sup: 0, sections: 0 };
    let ug = 0, sup = 0, sections = 0;
    P.plan.filter((p) => /^EE/.test(p.code) && typeof p.sem === 'number').forEach((p) => {
      if (SUP[p.code]) { sup += intake * C.supHours({ loai: SUP[p.code], vai_tro: 'HD chính' }).hours; return; }
      const lab = /Lab\b/i.test(p.en) || p.cr === 1;
      const share = Object.keys(D.curricula).filter((k2) => D.curricula[k2].plan.some((q) => q.code === p.code)).length || 1;   // học phần chung: mở lớp ghép, chia đều
      const n = (p.type === 'TC' ? intake / 2 : intake) * share;
      const size = lab ? 24 : 60, k = Math.max(1, Math.ceil(n / size));
      ug += k * C.sectionHours({ tc: p.cr, loai: lab ? 'TN' : 'LT', bac: 'DH', si_so: Math.ceil(n / k) }).hours / share;
      sections += k / share;
    });
    return { ug: r1(ug), sup: r1(sup), sections: Math.round(sections) };
  }
  function viewFc(body) {
    const L = lecturers();
    const tsN = C.norm({ vi_tri: 'GV', hoc_vi: 'TS' });
    const tsRule = (D.rules.teaching.norm_by_title || []).find((x) => x.code === 'TS') || {};
    const depts = ['DTVT', 'DKTDH'].filter((d) => L.some((s) => s.bo_mon === d));
    const ageOf = (s) => { const bd = new Date(s.ngay_sinh); let a = App.today.getFullYear() - bd.getFullYear(); if (App.today < new Date(App.today.getFullYear(), bd.getMonth(), bd.getDate())) a--; return a; };
    const retAge = (s) => (s.gioi_tinh === 'Nữ' ? 60 : 62);
    const bands = [['< 35', 0, 34], ['35–44', 35, 44], ['45–54', 45, 54], ['≥ 55', 55, 200]];
    const ret = L.map((s) => ({ s, age: ageOf(s), year: new Date(s.ngay_sinh).getFullYear() + retAge(s) })).filter((x) => x.year - App.today.getFullYear() <= 10).sort((a, b) => a.year - b.year);
    const tsShare = depts.map((d) => { const ls = L.filter((s) => s.bo_mon === d && s.vi_tri !== 'TG'); return { d, n: ls.length, ts: ls.filter((s) => s.hoc_vi === 'TS').length }; });
    body.innerHTML = `${note(t('dc.f.assume'), 'warn')}
      <div class="card"><div class="grid g3">
        <label>${t('dc.f.intake')}: <b data-o="intake"></b><input type="range" min="-30" max="50" step="5" value="${state.intake}" data-s="intake"></label>
        ${depts.map((d) => `<label>${t('dc.f.staff', { d: esc(deptShort(d)) })}: <b data-o="${d}"></b><input type="range" min="-3" max="10" step="1" value="${state.dS[d]}" data-s="${d}"></label>`).join('')}
      </div><p class="small muted" style="margin:6px 0 0">${t('dc.f.ftenote', { n: App.fmtNum(tsN.teach), s: esc(tsRule.source || '') })} ${/du_thao/.test(tsRule.status || '') ? App.ui.badge(t('dc.draft'), 'warn') : ''}</p></div>
      <div data-fc></div>
      <div class="grid g2"><div class="card"><h3>${t('dc.f.age')}</h3>${App.ui.chart.bars(bands.map(([l, a, z], i) => ({ l, v: L.filter((s) => ageOf(s) >= a && ageOf(s) <= z).length, c: App.ui.chart.PAL[i] })), { h: 150, label: t('dc.f.ageband') })}
        <h4 style="margin:10px 0 6px">${t('dc.f.ret')}</h4>${App.ui.table([{ t: t('dc.b.name'), f: (x) => esc(nm(x.s)) }, { t: t('dc.b.dept'), f: (x) => esc(deptShort(x.s.bo_mon)) }, { t: t('dc.f.age.c'), k: 'age', cls: 'num' }, { t: t('dc.f.retyear'), k: 'year', cls: 'num' }], ret, { empty: t('dc.none') })}
        <p class="small muted">${t('dc.f.retnote')}</p></div>
      <div class="card"><h3>${t('dc.f.ts')}</h3>${App.ui.chart.hbars(tsShare.map((x) => ({ l: deptName(x.d), v: x.n ? x.ts / x.n * 100 : 0, ref: 40, txt: x.ts + '/' + x.n, c: x.n && x.ts / x.n < 0.4 ? COL.under : COL.ok })), { max: 100 })}
        <p class="small muted" style="margin-top:8px">${t('dc.f.tsnote')}</p></div></div><div data-rec></div>`;
    const pg = {}, act = {}, cap0 = {};
    depts.forEach((d) => {
      const ls = L.filter((s) => s.bo_mon === d);
      pg[d] = sum(ls, (s) => C.yearTeaching(s.ma_cb, YP).pg); act[d] = sum(ls, (s) => C.yearTeaching(s.ma_cb, YP).total); cap0[d] = sum(ls, (s) => C.norm(s).teach);
    });
    const update = () => {
      body.querySelector('[data-o="intake"]').textContent = (state.intake > 0 ? '+' : '') + state.intake + '% (' + Math.round(80 * (1 + state.intake / 100)) + ' SV)';
      depts.forEach((d) => (body.querySelector(`[data-o="${d}"]`).textContent = (state.dS[d] > 0 ? '+' : '') + state.dS[d]));
      const intake = 80 * (1 + state.intake / 100);
      const rows = depts.map((d) => {
        const dm = demand(d, intake); const total = r1(dm.ug + dm.sup + pg[d]);
        const cap = r1(cap0[d] + state.dS[d] * tsN.teach);
        return { d, dm, total, cap, gap: r1(cap - total), fte: (cap - total) / tsN.teach, act: act[d] };
      });
      const fteTxt = (f) => App.ui.badge((f < 0 ? t('dc.f.short') : t('dc.f.surplus')) + ' ' + App.fmtNum(Math.abs(f), 1), f < -0.25 ? 'bad' : f > 0.25 ? 'ok' : 'info');
      body.querySelector('[data-fc]').innerHTML = `<div class="card"><h3>${t('dc.v.fc')}</h3>${App.ui.table([
        { t: t('dc.f.dept'), f: (r) => esc(deptName(r.d)) }, { t: t('dc.f.sections'), f: (r) => r.dm.sections, cls: 'num' },
        { t: t('dc.f.ug'), f: (r) => App.fmtNum(r.dm.ug, 0), cls: 'num' }, { t: t('dc.f.sup'), f: (r) => App.fmtNum(r.dm.sup, 0), cls: 'num' }, { t: t('dc.f.pg'), f: (r) => App.fmtNum(pg[r.d], 0), cls: 'num' },
        { t: t('dc.f.demand'), f: (r) => '<b>' + App.fmtNum(r.total, 0) + '</b>', cls: 'num' }, { t: t('dc.f.cap'), f: (r) => App.fmtNum(r.cap, 0), cls: 'num' },
        { t: t('dc.f.actual'), f: (r) => App.fmtNum(r.act, 0), cls: 'num' }, { t: t('dc.f.gap'), f: (r) => App.fmtNum(r.gap, 0), cls: 'num' }, { t: t('dc.f.fte'), f: (r) => fteTxt(r.fte), cls: 'c' },
      ], rows)}</div>
        <div class="card"><h3>${t('dc.f.dvc')}</h3>${App.ui.chart.hbars(rows.flatMap((r) => [{ l: deptShort(r.d) + ' – ' + t('dc.f.dem'), v: r.total, c: COL.over, txt: App.fmtNum(r.total, 0) }, { l: deptShort(r.d) + ' – ' + t('dc.f.capS'), v: r.cap, c: COL.ok, txt: App.fmtNum(r.cap, 0) }]))}</div>`;
      const recs = rows.map((r) => t('dc.f.r1', { d: deptName(r.d), a: App.fmtNum(r.total, 0), b: App.fmtNum(r.cap, 0), k: r.fte < 0 ? t('dc.f.short') : t('dc.f.surplus'), f: App.fmtNum(Math.abs(r.fte), 1) }));
      if (ret.length) recs.push(t('dc.f.r2', { n: ret.length, l: ret.slice(0, 4).map((x) => nm(x.s) + ' (' + x.year + ')').join(', ') }));
      tsShare.filter((x) => x.n && x.ts / x.n < 0.4).forEach((x) => recs.push(t('dc.f.r3', { d: deptName(x.d), p: App.fmtNum(x.ts / x.n * 100, 0) })));
      const ft = (sum(rows, (r) => r.cap) - sum(rows, (r) => r.total)) / tsN.teach;
      recs.push(t('dc.f.r4', { i: (state.intake > 0 ? '+' : '') + state.intake, k: ft < 0 ? t('dc.f.short') : t('dc.f.surplus'), f: App.fmtNum(Math.abs(ft), 1) }));
      body.querySelector('[data-rec]').innerHTML = recCard(recs.slice(0, 4));
    };
    body.querySelectorAll('[data-s]').forEach((x) => (x.oninput = () => { if (x.dataset.s === 'intake') state.intake = +x.value; else state.dS[x.dataset.s] = +x.value; update(); }));
    update();
  }

  /* ------------------------------------------------------------ người học */
  function viewSv(body) {
    const all = D.students.map((st) => { const S = C.student(st.mssv); return { st, S, r: C.risk(S) }; });
    const lv = ['red', 'orange', 'yellow', 'green'];
    const cnt = (arr, l) => arr.filter((x) => x.r.level === l).length;
    const hot = all.filter((x) => ['red', 'orange'].includes(x.r.level)).sort((a, b) => b.r.score - a.r.score);
    App.audit('XEM', 'Xem tổng hợp SV nguy cơ (Hỗ trợ ra quyết định)', '', 'Quản lý đào tạo');
    const progs = Object.keys(D.curricula);
    const sig = {}; all.forEach((x) => x.r.early.forEach((e) => (sig[e.code] = (sig[e.code] || 0) + 1)));
    const topSig = Object.entries(sig).sort((a, b) => b[1] - a[1])[0];
    const sigTxt = (code) => { const ex = all.map((x) => x.r.early.find((e) => e.code === code)).find(Boolean); return ex ? code + ' – ' + ex.t.replace(/[:(].*$/, '').trim() : code; };
    const sid = (st) => (App.anon ? App.pseudo(st.mssv, 'SV') : st.mssv);
    const recs = [];
    if (hot.length) {
      const advs = [...new Set(hot.map((x) => x.st.cvht))].map((id) => nm(App.staff(id)));
      recs.push(t('dc.s.r1', { n: hot.length, t: all.length, l: advs.join(', ') }));
      const pr = progs.map((p) => { const a = all.filter((x) => x.st.nganh === p); return { p, q: a.length ? (cnt(a, 'red') + cnt(a, 'orange')) / a.length * 100 : 0 }; }).sort((a, b) => b.q - a.q)[0];
      if (pr) recs.push(t('dc.s.r2', { p: App.L(D.curricula[pr.p]), q: App.fmtNum(pr.q, 0) }));
    } else recs.push(t('dc.s.r0'));
    if (topSig) recs.push(t('dc.s.r3', { e: sigTxt(topSig[0]) }));
    const reasons = (x) => {
      const off = x.r.offNow ? ((x.r.off[x.r.off.length - 1] || {}).reasons || []) : [];
      return off.concat(x.r.early.slice().sort((a, b) => b.sev - a.sev).map((e) => e.t)).slice(0, 2).join(' · ');
    };
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('dc.s.total'), all.length, '')}${lv.map((l) => App.ui.kpi(App.calc.riskLabel(l), cnt(all, l), '', l === 'red' ? 'bad' : l === 'orange' ? 'warn' : l === 'green' ? 'ok' : '')).join('')}</div>
      <div class="grid g2"><div class="card"><h3>${t('dc.s.dist')}</h3>${App.ui.chart.donut(lv.map((l) => ({ l: App.calc.riskLabel(l), v: cnt(all, l), c: COL[l] })), { sub: 'SV' })}</div>
      <div class="card"><h3>${t('dc.s.byprog')}</h3>${App.ui.table([{ t: t('dc.s.prog'), f: (p) => esc(App.L(D.curricula[p])) }].concat(lv.map((l) => ({ t: App.calc.riskLabel(l), f: (p) => cnt(all.filter((x) => x.st.nganh === p), l), cls: 'num' }))), progs)}
        <p class="small muted">${t('dc.s.note')}</p></div></div>
      <div class="card"><h3>${t('dc.s.list')}</h3>${App.ui.table([
        { t: t('dc.s.mssv'), f: (x) => `<a href="#/students/${esc(x.st.mssv)}">${esc(sid(x.st))}</a>` }, { t: t('dc.s.name'), f: (x) => esc(App.name(x.st)) },
        { t: t('dc.s.prog'), f: (x) => esc(deptShort(x.st.nganh)) }, { t: t('dc.s.cohort'), f: (x) => x.st.khoa, cls: 'num' },
        { t: t('dc.s.level'), f: (x) => `<span class="risk ${x.r.level}">${esc(App.calc.riskLabel(x.r.level))}</span>` },
        { t: t('dc.s.reasons'), f: (x) => `<span class="small">${esc(reasons(x))}</span>` },
        { t: t('dc.s.adv'), f: (x) => esc(nm(App.staff(x.st.cvht))) },
      ], hot, { empty: t('dc.none'), rowAttr: (x) => `class="click" data-go="#/students/${esc(x.st.mssv)}"` })}</div>${recCard(recs)}`;
    body.querySelectorAll('[data-go]').forEach((tr) => (tr.onclick = (e) => { if (e.target.tagName !== 'A') location.hash = tr.dataset.go; }));
  }

  /* ------------------------------------------------------------ quy trình & SLA */
  function workHours(fromIso, to) { const ms = to - new Date(fromIso); return ms > 0 ? ms / 3.6e6 * (5 / 7) * (8 / 24) : 0; }
  const hasProcSla = () => App.proc && typeof App.proc.withinSla === 'function';
  function overdue(r, p) {
    if (hasProcSla()) { try { return !App.proc.withinSla(r); } catch (e) { /* dùng cách tính dự phòng */ } }
    const st = (p.tobe_steps || [])[r.buoc_hien_tai] || {};
    const last = (r.lich_su || []).slice(-1)[0];
    return workHours(last ? last.luc : r.tao_luc, App.now()) > (st.sla_hours || 8);
  }
  function finishedWithin(r, p) {
    if (hasProcSla()) { try { return !!App.proc.withinSla(r); } catch (e) { /* dự phòng */ } }
    const h = r.lich_su || []; if (!h.length) return true;
    const days = workHours(r.tao_luc, new Date(h[h.length - 1].luc)) / 8;
    return days <= (p.tobe_days || 1) * 1.0001;
  }
  function viewSla(body) {
    const inArea = (p) => area === 'all' || (GROUPS[area] || []).includes(p.group) || (area === 'khcn_dn' && p.code === 'QT-ĐHQT-HC-05');
    const procs = D.processes.filter(inArea);
    const reqs = App.requests().map((r) => ({ r, p: App.process(r.ma_qt) })).filter((x) => x.p && inArea(x.p));
    const groups = [...new Set(procs.map((p) => p.group))];
    const isOpen = (x) => ['dang_xu_ly', 'tra_lai'].includes(x.r.trang_thai);
    const done = (x) => x.r.trang_thai === 'hoan_thanh';
    const od = reqs.filter((x) => isOpen(x) && overdue(x.r, x.p));
    const rows = groups.map((g) => {
      const ps = procs.filter((p) => p.group === g), rs = reqs.filter((x) => x.p.group === g);
      const asis = sum(ps, (p) => (p.asis_days_min + p.asis_days_max) / 2) / ps.length, tobe = sum(ps, (p) => p.tobe_days) / ps.length;
      return { g, n: ps.length, open: rs.filter(isOpen).length, over: od.filter((x) => x.p.group === g).length, done: rs.filter(done).length,
        asis, tobe, gain: asis ? (1 - tobe / asis) * 100 : 0, s0: sum(ps, (p) => p.asis_steps.length), s1: sum(ps, (p) => p.tobe_steps.length) };
    });
    const gl = (g) => t('dc.grp.' + g);
    const fin = reqs.filter(done), finOk = fin.filter((x) => finishedWithin(x.r, x.p)).length;
    const recs = [];
    if (od.length) { const top = rows.slice().sort((a, b) => b.over - a.over)[0]; recs.push(t('dc.q.r1', { n: od.length, g: gl(top.g), m: top.over })); } else recs.push(t('dc.q.r0'));
    const avgGain = sum(rows, (r) => r.gain) / (rows.length || 1); const bestG = rows.slice().sort((a, b) => (b.asis - b.tobe) - (a.asis - a.tobe))[0];
    if (bestG) recs.push(t('dc.q.r2', { p: App.fmtNum(avgGain, 0), g: gl(bestG.g), a: App.fmtNum(bestG.asis, 1), b: App.fmtNum(bestG.tobe, 1) }));
    if (fin.length) recs.push(t('dc.q.r3', { p: App.fmtNum(finOk / fin.length * 100, 0) }));
    const stepOf = (x) => (x.p.tobe_steps || [])[x.r.buoc_hien_tai] || {};
    const lastAt = (x) => { const l = (x.r.lich_su || []).slice(-1)[0]; return l ? l.luc : x.r.tao_luc; };
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('dc.q.n'), procs.length, '')}${App.ui.kpi(t('dc.q.open'), reqs.filter(isOpen).length, '', 'cyan')}${App.ui.kpi(t('dc.q.over'), od.length, '', od.length ? 'bad' : 'ok')}
        ${App.ui.kpi(t('dc.q.within'), fin.length ? pctS(finOk / fin.length * 100) : '–', fin.length + ' · ' + t('dc.q.done'), 'ok')}</div>
      <div class="card"><h3>${t('dc.q.group')}</h3>${App.ui.table([
        { t: t('dc.q.group'), f: (r) => `<b>${esc(r.g)}</b> ${esc(gl(r.g))}` }, { t: t('dc.q.n'), k: 'n', cls: 'num' }, { t: t('dc.q.open'), k: 'open', cls: 'num' },
        { t: t('dc.q.over'), f: (r) => (r.over ? App.ui.badge(String(r.over), 'bad') : '0'), cls: 'c' }, { t: t('dc.q.done'), k: 'done', cls: 'num' },
        { t: t('dc.q.asis'), f: (r) => App.fmtNum(r.asis, 1), cls: 'num' }, { t: t('dc.q.tobe'), f: (r) => App.fmtNum(r.tobe, 1), cls: 'num' },
        { t: t('dc.q.gain'), f: (r) => App.ui.badge('−' + pctS(r.gain), 'ok'), cls: 'c' }, { t: t('dc.q.steps'), f: (r) => r.s0 + ' → ' + r.s1, cls: 'c' },
      ], rows)}<p class="small muted">${t('dc.q.method')}</p></div>
      <div class="grid g-1-2"><div class="card"><h3>${t('dc.q.chart')}</h3>${App.ui.chart.hbars(rows.flatMap((r) => [{ l: r.g + ' · AS-IS', v: r1(r.asis), c: '#9AA0B8' }, { l: r.g + ' · TO-BE', v: r1(r.tobe), c: '#1C9ACC' }]))}</div>
      <div class="card"><h3>${t('dc.q.overl')}</h3>${App.ui.table([
        { t: t('dc.q.id'), f: (x) => `<a href="#/processes/hs/${esc(x.r.id)}">${esc(x.r.id)}</a>` }, { t: t('dc.q.proc'), f: (x) => `<span class="small">${esc(App.L(x.p, 'name'))}</span>` },
        { t: t('dc.q.req'), f: (x) => esc(nm(App.staff(x.r.ma_cb))) }, { t: t('dc.q.step'), f: (x) => `<span class="small">${esc(App.L(stepOf(x)).slice(0, 90))}</span><div class="small muted">${esc(stepOf(x).actor || '')}</div>` },
        { t: t('dc.q.elapsed'), f: (x) => App.fmtNum(workHours(lastAt(x), App.now()), 0) + ' / ' + App.fmtNum(stepOf(x).sla_hours || 8, 1), cls: 'num' },
      ], od, { empty: t('dc.q.r0') })}</div></div>${recCard(recs)}`;
  }

  /* ------------------------------------------------------------ NCKH */
  function viewRs(body) {
    const inSc = (id) => { const s = App.staff(id); return s && App.acl.inScope(s); };
    const papers = D.papers.filter((p) => inSc(p.ma_cb));
    const years = [...new Set(papers.map((p) => p.nam))].sort();
    const cls = (p) => (p.loai === 'conf' ? 'conf' : p.xep_hang || 'other');
    const cols = ['Q1', 'Q2', 'Q3', 'Q4', 'conf', 'other'];
    const cnt = (y, c) => papers.filter((p) => p.nam === y && cls(p) === c).length;
    const q12 = years.map((y) => cnt(y, 'Q1') + cnt(y, 'Q2'));
    const people = App.staffList().filter((s) => s.loai === 'khoa' && ['TK', 'PTK', 'TBM', 'GV', 'NCV'].includes(s.vi_tri) && App.acl.inScope(s)).map((s) => ({ s, y: C.yearResearch(s.ma_cb, YP) })).filter((x) => x.y.norm > 0);
    const depts = ['DTVT', 'DKTDH'].map((d) => { const ps = people.filter((x) => x.s.bo_mon === d); return { d, n: ps.length, met: ps.filter((x) => x.y.pct >= 100).length, avg: ps.length ? sum(ps, (x) => Math.min(x.y.pct, 200)) / ps.length : 0, low: ps.filter((x) => x.y.pct < 50) }; }).filter((x) => x.n);
    const today = App.today;
    const late = D.projects.filter((p) => inSc(p.ma_cb))
      .filter((p) => p.trang_thai === 'Trễ hạn' || (new Date(p.ket_thuc) < today && p.trang_thai !== 'Đã nghiệm thu'))
      .map((p) => Object.assign({ days: Math.max(0, Math.round((today - new Date(p.ket_thuc)) / 864e5)) }, p)).sort((a, b) => b.days - a.days);
    const ind = D.projects.filter((p) => inSc(p.ma_cb) && /doanh nghiệp/i.test(p.cap));
    const mou = App.requests().filter((r) => r.ma_qt === 'QT-ĐHQT-HC-05');
    const recs = [];
    const yi = years.indexOf(2026) >= 0 ? years.indexOf(2026) : years.length - 1;
    if (yi >= 0) { const dlt = q12[yi] - (yi > 0 ? q12[yi - 1] : 0); recs.push(t('dc.r.r1', { y: years[yi], n: q12[yi], d: (dlt >= 0 ? '+' : '') + dlt })); }
    if (depts.length) { const lo = depts.slice().sort((a, b) => a.met / a.n - b.met / b.n)[0]; recs.push(t('dc.r.r2', { n: sum(depts, (x) => x.met), t: sum(depts, (x) => x.n), d: deptName(lo.d), p: App.fmtNum(lo.met / lo.n * 100, 0) })); }
    if (late.length) recs.push(t('dc.r.r3', { n: late.length, l: late.slice(0, 4).map((p) => p.id).join(', ') }));
    recs.push(t('dc.r.r4', { n: ind.length, b: App.fmtNum(sum(ind, (p) => p.kinh_phi_trieu), 0) }));
    const colName = (c) => (c === 'conf' ? t('dc.r.conf') : c === 'other' ? t('dc.r.other') : c);
    body.innerHTML = `<div class="grid g-2-1"><div class="card"><h3>${t('dc.r.byq')}</h3>${App.ui.table([{ t: t('dc.r.year'), f: (y) => '<b>' + y + '</b>' }].concat(cols.map((c) => ({ t: colName(c), f: (y) => cnt(y, c), cls: 'num' }))).concat([{ t: t('total'), f: (y) => papers.filter((p) => p.nam === y).length, cls: 'num' }]), years)}</div>
        <div class="card"><h3>${t('dc.r.q12')}</h3>${App.ui.chart.bars(years.map((y, i) => ({ l: String(y), v: q12[i], c: '#1C9ACC' })), { h: 150 })}</div></div>
      <div class="card"><h3>${t('dc.r.norm')}</h3>${App.ui.table([
        { t: t('dc.b.dept'), f: (x) => esc(deptName(x.d)) }, { t: t('dc.r.people'), k: 'n', cls: 'num' }, { t: t('dc.r.met'), f: (x) => x.met + ' (' + pctS(x.met / x.n * 100) + ')', cls: 'num' },
        { t: t('dc.r.avg'), f: (x) => App.ui.progress(x.avg, x.avg >= 100 ? 'ok' : 'warn') + `<span class="small">${pctS(x.avg)}</span>` },
        { t: t('dc.r.low'), f: (x) => `<span class="small">${esc(x.low.map((y) => nm(y.s) + ' ' + pctS(y.y.pct)).join(', ') || '–')}</span>` },
      ], depts)}<p class="small muted">${t('dc.r.normsrc')}</p></div>
      <div class="grid g-2-1"><div class="card"><h3>${t('dc.r.late')}</h3>${App.ui.table([
        { t: t('dc.r.id'), k: 'id' }, { t: t('dc.r.title'), f: (p) => `<span class="small">${esc(p.ten)}</span>` }, { t: t('dc.r.level'), k: 'cap' }, { t: t('dc.r.pi'), f: (p) => esc(nm(App.staff(p.ma_cb))) },
        { t: t('dc.r.end'), f: (p) => App.fmtDate(p.ket_thuc) }, { t: t('status'), f: (p) => App.ui.badge(p.trang_thai, p.trang_thai === 'Trễ hạn' ? 'bad' : 'warn') }, { t: t('dc.r.days'), k: 'days', cls: 'num' },
      ], late, { empty: t('dc.none') })}</div>
      <div class="card"><h3>${t('dc.r.ind')}</h3><div class="kpis" style="margin:0">${App.ui.kpi(t('dc.r.indn'), ind.length, '')}${App.ui.kpi(t('dc.r.indb'), App.fmtNum(sum(ind, (p) => p.kinh_phi_trieu), 0), '', 'cyan')}${App.ui.kpi(t('dc.r.mou'), mou.length, '')}</div>
        <ul class="small" style="padding-left:18px">${ind.map((p) => `<li>${esc(p.ten)} – ${esc(nm(App.staff(p.ma_cb)))} (${esc(p.trang_thai)})</li>`).join('')}</ul></div></div>${recCard(recs)}`;
  }

  /* ------------------------------------------------------------ PTN & đầu tư */
  function eqScore(e) {
    const cond = /Hỏng/.test(e.tinh_trang) ? 1 : /hiệu chuẩn/i.test(e.tinh_trang) ? 0.5 : 0;
    const age = App.today.getFullYear() - e.nam_mua;
    const parts = [40 * cond, 25 * Math.min(1, age / 10), 20 * Math.min(1, (e.gio_su_dung_hk || 0) / 120), 15 * (1 - (e.khau_hao_con_lai || 0) / 100)];
    return { age, parts, score: Math.round(sum(parts)) };
  }
  function viewLab(body) {
    const labs = D.labs;
    const eq = D.equipment.filter((e) => labs.some((l) => l.ma === e.ptn));
    const labName = (code) => { const l = labs.find((x) => x.ma === code); return l ? App.L(l, 'ten') : code; };
    const isReady = (e) => /Sẵn sàng|Đang sử dụng/.test(e.tinh_trang);
    const broken = eq.filter((e) => /Hỏng/.test(e.tinh_trang)), cal = eq.filter((e) => /hiệu chuẩn/i.test(e.tinh_trang));
    const lim = new Date(App.today.getTime() + 90 * 864e5);
    const due = eq.filter((e) => e.hieu_chuan_ke_tiep && new Date(e.hieu_chuan_ke_tiep) <= lim).sort((a, b) => (a.hieu_chuan_ke_tiep < b.hieu_chuan_ke_tiep ? -1 : 1));
    const ranked = eq.map((e) => Object.assign({ sc: eqScore(e) }, e)).sort((a, b) => b.sc.score - a.sc.score);
    const props = D.lab_proposals.slice();
    const isOpenP = (p) => p.trang_thai !== 'Đã duyệt';
    const prioW = { 'Chiến lược': 4, Cao: 3, 'Trung bình': 2, 'Thấp': 1 };
    props.sort((a, b) => (prioW[b.uu_tien] || 0) - (prioW[a.uu_tien] || 0) || b.du_toan_trieu - a.du_toan_trieu);
    const openP = props.filter(isOpenP);
    const recs = [];
    if (broken.length) recs.push(t('dc.l.r1', { n: broken.length, l: broken.slice(0, 3).map((e) => e.ten).join('; ') }));
    if (due.length) recs.push(t('dc.l.r2', { n: due.length }));
    if (ranked.length) recs.push(t('dc.l.r3', { e: ranked[0].ten + ' – ' + labName(ranked[0].ptn), s: ranked[0].sc.score }));
    if (openP.length) recs.push(t('dc.l.r4', { n: openP.length, b: App.fmtNum(sum(openP, (p) => p.du_toan_trieu), 0) }));
    const nReady = eq.filter(isReady).length;
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('dc.l.ready'), nReady + '/' + eq.length, App.ui.progress(nReady / (eq.length || 1) * 100, 'ok'), 'ok')}
        ${App.ui.kpi(t('dc.l.broken'), broken.length, '', broken.length ? 'bad' : 'ok')}${App.ui.kpi(t('dc.l.cal'), cal.length, '', 'warn')}${App.ui.kpi(t('dc.l.due'), due.length, '', due.length ? 'warn' : 'ok')}</div>
      <div class="grid g2"><div class="card"><h3>${t('dc.l.readiness')}</h3>${App.ui.chart.hbars(labs.map((l) => { const es = eq.filter((e) => e.ptn === l.ma); const r = es.filter(isReady).length; const p = es.length ? r / es.length * 100 : 0; return { l: App.L(l, 'ten'), v: p, txt: r + '/' + es.length, c: p >= 90 ? COL.green : p >= 70 ? COL.ok : COL.over }; }), { max: 100 })}</div>
      <div class="card"><h3>${t('dc.l.due')}</h3>${App.ui.table([{ t: t('dc.l.eq'), f: (e) => `<span class="small">${esc(e.ten)}</span>` }, { t: t('dc.l.lab'), f: (e) => esc(e.ptn) },
        { t: t('dc.l.next'), f: (e) => App.fmtDate(e.hieu_chuan_ke_tiep) + ' ' + (new Date(e.hieu_chuan_ke_tiep) < App.today ? App.ui.badge(t('dc.l.overdue'), 'bad') : App.ui.badge(t('dc.l.soon'), 'warn')) }], due, { empty: t('dc.none') })}</div></div>
      <div class="card"><h3>${t('dc.l.prio')}</h3><p class="small muted">${t('dc.l.formula')}</p>${App.ui.table([
        { t: '#', f: (e, i) => i + 1, cls: 'c' }, { t: t('dc.l.eq'), f: (e) => `${esc(e.ten)}<div class="small muted">${esc(e.hang)} · ${esc(e.ma)}</div>` }, { t: t('dc.l.lab'), f: (e) => esc(e.ptn) },
        { t: t('dc.l.st'), f: (e) => App.ui.badge(e.tinh_trang, /Hỏng/.test(e.tinh_trang) ? 'bad' : /hiệu chuẩn/i.test(e.tinh_trang) ? 'warn' : 'ok') },
        { t: t('dc.l.age'), f: (e) => e.sc.age, cls: 'num' }, { t: t('dc.l.use'), k: 'gio_su_dung_hk', cls: 'num' }, { t: t('dc.l.dep'), f: (e) => e.khau_hao_con_lai + '%', cls: 'num' },
        { t: t('dc.l.score'), f: (e) => `<b>${e.sc.score}</b><div class="small muted">${e.sc.parts.map((x) => App.fmtNum(x, 0)).join(' + ')}</div>`, cls: 'num' },
      ], ranked.slice(0, 10))}</div>
      <div class="card"><h3>${t('dc.l.props')}</h3>${App.ui.table([
        { t: 'ID', k: 'id' }, { t: t('dc.l.lab'), f: (p) => esc(labName(p.ptn)) }, { t: t('dc.l.type'), k: 'loai' }, { t: t('dc.l.content'), f: (p) => `<span class="small">${esc(p.noi_dung)}</span>` },
        { t: t('dc.l.budget'), f: (p) => App.fmtNum(p.du_toan_trieu, 0), cls: 'num' }, { t: t('dc.l.pri'), f: (p) => App.ui.badge(p.uu_tien, p.uu_tien === 'Chiến lược' ? 'navy' : p.uu_tien === 'Cao' ? 'bad' : 'info') },
        { t: t('dc.l.by'), f: (p) => esc(nm(App.staff(p.ma_cb))) }, { t: t('status'), f: (p) => App.ui.badge(p.trang_thai, isOpenP(p) ? 'warn' : 'ok') },
      ], props)}</div>${recCard(recs)}`;
  }

  /* ------------------------------------------------------------ năng lực & đề xuất nhóm nghiên cứu */
  const TH = {   // chủ đề nghiên cứu – từ khoá VN + EN (so khớp trên chữ thường)
    wl: ['6g', '5g', 'wireless', 'uav', 'reconfigurable intelligent', 'semantic communication', 'channel', 'không dây', 'di động', 'viễn thông', 'truyền thông', 'kênh truyền', 'bề mặt thông minh'],
    ant: ['antenna', 'millimeter-wave', 'metasurface', 'microwave', 'fmcw', 'anten', 'siêu cao tần', 'mảng pha', 'bộ thu'],
    iot: ['\\biot\\b', 'lora', 'at the edge', 'smart campus', 'embedded', 'nhúng', 'giám sát môi trường'],
    ai: ['deep learning', 'federated', 'reinforcement learning', 'machine learning', 'classification', 'neural', 'học sâu', 'học máy', 'trí tuệ nhân tạo'],
    sp: ['signal', 'radar', 'channel estimation', 'tín hiệu', 'ước lượng'],
    cv: ['vision', 'image', 'camera', 'thị giác máy', 'xử lý ảnh', 'hình ảnh'],
    ctl: ['control', 'sliding mode', 'predictive', 'điều khiển'],
    pwr: ['microgrid', 'wind turbine', 'battery', 'state-of-charge', 'energy', 'lưới điện', 'pin xe', 'xe điện', 'năng lượng', 'kỹ thuật điện(?! tử)'],
    rob: ['robot', 'quadrotor', 'manipulator', '\\bplc', 'automation', 'tự động ho[áa]', 'cơ điện tử'],
    dt: ['digital twin', 'smart factory', 'process control', 'bản sao số', 'nhà máy thông minh', 'dây chuyền', 'giám sát chất lượng'],
    semi: ['semiconductor', 'vlsi', 'fpga', '\\bchip', 'integrated circuit', 'bán dẫn', 'vi mạch', '(?<!cơ )điện tử(?! –)', 'chi phí thấp'],
    sens: ['sensor', 'monitoring', 'measurement', 'estimation', 'cảm biến', 'đo lường', 'giám sát', 'radar'],
  };
  const THK = Object.keys(TH);
  const THR = {}; THK.forEach((k) => (THR[k] = new RegExp(TH[k].join('|'), 'u')));
  const thMatch = (txt) => { const s = String(txt || '').toLowerCase(); return THK.filter((k) => THR[k].test(s)); };
  const CALLS = [
    { k: 'c1', ten_vi: 'Đề tài cấp ĐHQG-HCM loại B – Nhóm nghiên cứu mạnh 2027', ten_en: 'VNU-HCM Type-B project – Strong research groups 2027', cap: 'Cấp ĐHQG-HCM loại B', th: ['wl', 'ant', 'ai'], budget: 800, size: 5, minQ: 1, maxAct: 1, inter: false, dl: '2026-12-15' },
    { k: 'c2', ten_vi: 'NAFOSTED – Nghiên cứu cơ bản 2027', ten_en: 'NAFOSTED – Basic research 2027', cap: 'NAFOSTED', th: ['wl', 'sp', 'ai'], budget: 1200, size: 4, minQ: 2, maxAct: 1, inter: false, dl: '2027-03-31' },
    { k: 'c3', ten_vi: 'Sở KH&CN TP.HCM – Chuyển đổi số đô thị thông minh', ten_en: 'HCMC DOST – Digital transformation for smart cities', cap: 'Sở KH&CN TP.HCM', th: ['iot', 'sens', 'ai', 'cv'], budget: 1500, size: 6, minQ: 1, maxAct: 1, inter: true, dl: '2026-11-30' },
    { k: 'c4', ten_vi: 'Chương trình hợp tác doanh nghiệp bán dẫn', ten_en: 'Semiconductor industry partnership programme', cap: 'Hợp tác doanh nghiệp', th: ['semi', 'ant', 'iot'], budget: 600, size: 4, minQ: 0, maxAct: 2, inter: false, dl: '2027-01-15' },
    { k: 'c5', ten_vi: 'Đề tài liên ngành ĐTVT–ĐKTĐH: Nhà máy thông minh', ten_en: 'Interdisciplinary E&T–Control project: Smart factory', cap: 'Cấp cơ sở (Trường)', th: ['rob', 'dt', 'iot', 'ctl', 'wl'], budget: 900, size: 6, minQ: 1, maxAct: 1, inter: true, dl: '2027-02-28' },
    { k: 'c6', ten_vi: 'Đề tài trọng điểm cấp Trường – Năng lượng tái tạo & lưới điện siêu nhỏ', ten_en: 'IU key project – Renewable energy & microgrids', cap: 'Cấp cơ sở (Trường)', th: ['pwr', 'ctl', 'ai'], budget: 300, size: 4, minQ: 0, maxAct: 2, inter: false, dl: '2026-12-31' },
  ];
  const tst = { call: 'c1', custom: ['iot', 'ai'], mix: true, sort: 'all' };
  const RES_POS = ['TK', 'PTK', 'TBM', 'GV', 'NCV'];
  const QW = { Q1: 3, Q2: 2, Q3: 1, Q4: 1 };
  const thName = (k) => t('dc.t.th.' + k), thShort = (k) => t('dc.t.sh.' + k);

  function profiles() {
    const Y = App.today.getFullYear();
    const list = App.staffList().filter((s) => s.loai === 'khoa' && (RES_POS.includes(s.vi_tri) || s.vi_tri === 'TG') && App.acl.inScope(s));
    const P = list.map((s) => {
      const th = {}; THK.forEach((k) => (th[k] = 0));
      thMatch(s.chuyen_nganh).forEach((k) => (th[k] += 1.5));
      const pp = D.papers.filter((p) => p.ma_cb === s.ma_cb || (p.dong_tac_gia || []).includes(s.ma_cb));
      let pubW = 0, pub3 = 0, q12 = 0;
      pp.forEach((p) => {
        const w = (p.loai === 'conf' ? 0.5 : QW[p.xep_hang] || 0.5) * (p.ma_cb === s.ma_cb ? 1 : 0.7);
        const recent = p.nam >= Y - 2;
        thMatch(p.ten).forEach((k) => (th[k] += w * (recent ? 1 : 0.5)));
        if (recent) { pubW += w; pub3++; if (p.loai === 'journal' && /Q[12]/.test(p.xep_hang)) q12++; }
      });
      const pr = D.projects.filter((p) => p.ma_cb === s.ma_cb);
      let prW = 0;
      pr.forEach((p) => { const w = (p.vai_tro === 'Chủ nhiệm' ? 2 : 1) + (p.trang_thai === 'Đã nghiệm thu' ? 0.5 : 0); prW += w; thMatch(p.ten).forEach((k) => (th[k] += w)); });
      const piAll = pr.filter((p) => p.vai_tro === 'Chủ nhiệm');
      const act = piAll.filter((p) => p.trang_thai !== 'Đã nghiệm thu').length, done = pr.filter((p) => p.trang_thai === 'Đã nghiệm thu').length;
      const deg = s.hoc_ham === 'PGS' || s.hoc_ham === 'GS' ? 3 : s.hoc_vi === 'TS' ? 2 : s.hoc_vi === 'ThS' ? 0.5 : 0;
      const yr = C.yearResearch(s.ma_cb, YP), rsPct = yr.norm > 0 ? yr.pct : null;
      const yt = C.yearTeaching(s.ma_cb, YP), tn = yt.norm ? yt.norm.teach : 0;
      const tPct = tn > 0 ? yt.total / tn * 100 : 0;
      const ready = tPct > 130 ? 'bad' : tPct >= 100 ? 'mid' : 'ok';
      const raw = pubW + prW + deg + Math.min(rsPct || 0, 150) / 50;
      return { s, th, pub3, q12, pi: piAll.length, act, done, rsPct, tPct, ready, raw, young: s.hoc_vi !== 'TS', main: RES_POS.includes(s.vi_tri) };
    });
    const mx = Math.max(1, ...P.map((p) => p.raw));
    const thMax = {}; THK.forEach((k) => (thMax[k] = Math.max(1, ...P.map((p) => p.th[k]))));
    P.forEach((p) => { p.score = Math.round(p.raw / mx * 100); p.n = {}; THK.forEach((k) => (p.n[k] = p.th[k] / thMax[k])); p.top = THK.filter((k) => p.th[k] >= 1).sort((a, b) => p.th[b] - p.th[a]).slice(0, 3); });
    return P;
  }
  const RV = { ok: 1, mid: 0.6, bad: 0.2 };
  function buildTeam(P, cfg) {
    const req = cfg.th, mix = cfg.inter;
    const fit = (p) => sum(req, (k) => p.n[k]) / (req.length || 1);
    const elig = (p) => ({ ts: p.s.hoc_vi === 'TS', q: p.q12 >= cfg.minQ, act: p.act <= cfg.maxAct });
    const okAll = (p) => { const e = elig(p); return e.ts && e.q && e.act; };
    const piVal = (p) => 0.6 * fit(p) + 0.3 * p.score / 100 + 0.1 * RV[p.ready];
    const main = P.filter((p) => p.main);
    const eligible = main.filter(okAll).sort((a, b) => piVal(b) - piVal(a));
    const pi = eligible[0] || main.filter((p) => p.s.hoc_vi === 'TS').sort((a, b) => piVal(b) - piVal(a))[0];
    if (!pi) return null;
    const team = [{ p: pi, role: 'pi', gap: [] }];
    const cov = {}; req.forEach((k) => (cov[k] = pi.th[k]));
    const nMem = Math.max(2, Math.min(4, cfg.size - 2));
    const memVal = (c) => {
      const gainK = req.filter((k) => cov[k] < 1 && c.th[k] >= 1);
      const g = sum(req, (k) => Math.max(0, c.n[k] - Math.min(1, cov[k] / 3)));
      const depts = new Set(team.map((x) => x.p.s.bo_mon));
      return { v: g + 0.6 * gainK.length + 0.25 * c.score / 100 + 0.2 * RV[c.ready] + (mix && !depts.has(c.s.bo_mon) ? 0.5 : 0), gainK };
    };
    const used = new Set([pi.s.ma_cb]);
    for (let i = 0; i < nMem; i++) {
      let best = null;
      main.filter((c) => !used.has(c.s.ma_cb)).forEach((c) => { const m = memVal(c); if (!best || m.v > best.m.v) best = { c, m }; });
      if (!best) break;
      used.add(best.c.s.ma_cb); team.push({ p: best.c, role: 'm', gap: best.m.gainK, val: best.m.v });
      req.forEach((k) => (cov[k] = Math.max(cov[k], best.c.th[k])));
    }
    const yPool = P.filter((c) => c.young && !used.has(c.s.ma_cb)).sort((a, b) => (fit(b) + 0.3 * RV[b.ready] + b.score / 200) - (fit(a) + 0.3 * RV[a.ready] + a.score / 200));
    if (yPool[0]) { const y = yPool[0]; used.add(y.s.ma_cb); team.push({ p: y, role: 'y', gap: req.filter((k) => cov[k] < 1 && y.th[k] >= 1) }); req.forEach((k) => (cov[k] = Math.max(cov[k], y.th[k]))); }
    const covered = req.filter((k) => cov[k] >= 1);
    const deptsN = new Set(team.map((x) => x.p.s.bo_mon)).size;
    const score = Math.round(100 * (0.5 * covered.length / (req.length || 1) + 0.3 * sum(team, (x) => x.p.score) / team.length / 100 + 0.2 * sum(team, (x) => RV[x.p.ready]) / team.length));
    const alts = main.filter((c) => !used.has(c.s.ma_cb)).map((c) => ({ c, f: fit(c) })).filter((x) => x.f > 0).sort((a, b) => b.f - a.f).slice(0, 3)
      .map((x) => { const sameRole = team.filter((m) => m.role === 'm').sort((a, b) => fit(a.p) - fit(b.p))[0]; return { c: x.c, f: x.f, for: sameRole ? sameRole.p.s : null }; });
    return { team, pi, piOk: !!eligible[0], elig: elig(pi), cov, covered, deptsN, score, alts, fit };
  }
  const pctTxt = (x) => pctS(x || 0);
  function chips(ks, hi) { return ks.map((k) => `<span class="chip" style="margin:1px 2px;${hi && hi.includes(k) ? 'background:#E6F4FA;border-color:#1C9ACC' : ''}" title="${esc(thName(k))}">${esc(thName(k))}</span>`).join('') || '<span class="muted">–</span>'; }
  function readyBadge(p) { return `<span title="${esc(t('dc.t.r.tip', { p: pctTxt(p.tPct) }))}">${App.ui.badge(t('dc.t.r.' + p.ready), p.ready === 'ok' ? 'ok' : p.ready === 'mid' ? 'warn' : 'bad')}</span>`; }

  function viewTeam(body) {
    const P = profiles();
    const R = P.filter((p) => p.main).sort((a, b) => b.score - a.score);
    App.audit('XEM', 'Xem hồ sơ năng lực NCKH và đề xuất nhóm (Hỗ trợ ra quyết định)', '', 'Quản lý khoa học công nghệ');
    const cell = (p, k) => { const v = p.n[k]; return `<td class="c" title="${esc(nm(p.s) + ' – ' + thName(k) + ': ' + App.fmtNum(p.th[k], 1))}" style="background:rgba(28,154,204,${(v * 0.9).toFixed(2)});color:${v > 0.55 ? '#fff' : '#2E3191'};font-size:12px;min-width:34px">${p.th[k] >= 0.5 ? App.fmtNum(p.th[k], 1) : ''}</td>`; };
    const heat = `<div style="overflow-x:auto"><table class="tbl"><thead><tr><th>${t('dc.t.c.name')}</th>${THK.map((k) => `<th class="c" title="${esc(thName(k))}" style="font-size:11px">${esc(thShort(k))}</th>`).join('')}</tr></thead>
      <tbody>${R.map((p) => `<tr><td style="white-space:nowrap">${esc(nm(p.s))} <span class="small muted">${esc(deptShort(p.s.bo_mon))}</span></td>${THK.map((k) => cell(p, k)).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="small muted" style="margin:6px 0 0">${THK.map((k) => `<b>${esc(thShort(k))}</b> ${esc(thName(k))}`).join(' · ')}</p>`;
    const sorted = tst.sort === 'all' ? R : R.slice().sort((a, b) => b.th[tst.sort] - a.th[tst.sort] || b.score - a.score);
    const rank = App.ui.table([
      { t: '#', f: (p, i) => i + 1, cls: 'c' },
      { t: t('dc.t.c.name'), f: (p) => `${esc(nm(p.s))}<div class="small muted">${esc(deptShort(p.s.bo_mon))} · ${esc(p.s.vi_tri)} · ${esc([p.s.hoc_ham, p.s.hoc_vi].filter(Boolean).join('.'))}</div>` },
      { t: t('dc.t.c.score'), f: (p) => `<b>${p.score}</b>${App.ui.progress(p.score, p.score >= 60 ? 'ok' : 'cyan')}` },
      { t: t('dc.t.c.top'), f: (p) => chips(p.top) },
      { t: t('dc.t.c.pub'), f: (p) => `${p.pub3}<div class="small muted">${t('dc.t.pubsub', { q: p.q12 })}</div>`, cls: 'num' },
      { t: t('dc.t.c.pi'), f: (p) => `${p.pi}<div class="small muted">${t('dc.t.pisub', { a: p.act })}</div>`, cls: 'num' },
      { t: t('dc.t.c.rs'), f: (p) => (p.rsPct == null ? '–' : App.ui.badge(pctTxt(p.rsPct), p.rsPct >= 100 ? 'ok' : p.rsPct >= 50 ? 'warn' : 'bad')), cls: 'c' },
      { t: t('dc.t.c.ready'), f: readyBadge, cls: 'c' },
    ], sorted, { empty: t('dc.none') });
    const capN = R.filter((p) => p.ready !== 'bad').length;
    // khuyến nghị
    const recs = [];
    const strong = THK.map((k) => ({ k, n: R.filter((p) => p.th[k] >= 2).length })).sort((a, b) => a.n - b.n)[0];
    if (strong) recs.push(t('dc.t.r1', { l: thName(strong.k), n: strong.n }));
    const busy = R.filter((p) => p.score >= 50 && p.ready === 'bad');
    if (busy.length) recs.push(t('dc.t.r2', { n: busy.length, l: busy.slice(0, 3).map((p) => nm(p.s) + ' ' + pctTxt(p.tPct)).join(', ') }));
    const bestCall = CALLS.map((c) => ({ c, T: buildTeam(P, c) })).filter((x) => x.T).sort((a, b) => b.T.score - a.T.score)[0];
    if (bestCall) recs.push(t('dc.t.r3', { c: App.L(bestCall.c, 'ten'), s: bestCall.T.score, k: bestCall.T.covered.length, m: bestCall.c.th.length }));
    const nopub = R.filter((p) => p.pub3 === 0);
    if (nopub.length) recs.push(t('dc.t.r4', { n: nopub.length, l: nopub.slice(0, 4).map((p) => nm(p.s)).join(', ') }));

    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('dc.t.k.n'), R.length, '')}${App.ui.kpi(t('dc.t.k.q12'), sum(R, (p) => p.q12), '', 'cyan')}
        ${App.ui.kpi(t('dc.t.k.pi'), sum(R, (p) => p.act), '')}${App.ui.kpi(t('dc.t.k.cap'), capN + '/' + R.length, t('dc.t.k.capsub'), 'ok')}</div>
      <div class="card"><h3>${t('dc.t.map')}</h3>${heat}<p class="small muted" style="margin:4px 0 0">${t('dc.t.map.note')}</p></div>
      <div class="card"><div class="row between"><h3 style="margin:0">${t('dc.t.rank')}</h3>
        <label class="small">${t('dc.t.sortby')}: <select data-sort><option value="all">${t('dc.t.sort.all')}</option>${THK.map((k) => `<option value="${k}" ${tst.sort === k ? 'selected' : ''}>${esc(thName(k))}</option>`).join('')}</select></label></div>
        ${rank}<p class="small muted" style="margin:6px 0 0">${t('dc.t.formula')}</p></div>
      <div class="card"><h3>${t('dc.t.build')}</h3>
        <div class="row" style="flex-wrap:wrap;gap:6px">${CALLS.map((c) => `<button class="btn sm ${tst.call === c.k ? '' : 'ghost'}" data-call="${c.k}">${esc(App.L(c, 'ten'))}</button>`).join('')}
          <button class="btn sm ${tst.call === 'custom' ? 'cyan' : 'ghost'}" data-call="custom">${t('dc.t.custom')}</button></div>
        <p class="small muted" style="margin:6px 0 0">${t('dc.t.callnote')}</p>
        <div data-team style="margin-top:10px"></div></div>
      ${recCard(recs)}`;
    const sel = body.querySelector('[data-sort]'); sel.value = tst.sort; sel.onchange = () => { tst.sort = sel.value; viewTeam(body); };
    body.querySelectorAll('[data-call]').forEach((x) => (x.onclick = () => { tst.call = x.dataset.call; body.querySelectorAll('[data-call]').forEach((y) => y.className = 'btn sm ' + (y === x ? (y.dataset.call === 'custom' ? 'cyan' : '') : 'ghost')); renderTeam(body.querySelector('[data-team]'), P); }));
    renderTeam(body.querySelector('[data-team]'), P);
  }

  function renderTeam(el, P) {
    const custom = tst.call === 'custom';
    const cfg = custom ? { k: 'custom', ten_vi: 'Đề tài nhóm – chủ đề tự chọn', ten_en: 'Group project – custom themes', cap: 'Cấp cơ sở (Trường)', th: tst.custom.slice(), budget: 0, size: 5, minQ: 1, maxAct: 1, inter: tst.mix, dl: '' }
      : CALLS.find((c) => c.k === tst.call) || CALLS[0];
    const pick = custom ? `<div class="card" style="background:#F7F9FC;margin:0 0 10px"><b class="small">${t('dc.t.pick')}</b>
        <div class="row" style="flex-wrap:wrap;gap:4px 12px;margin-top:6px">${THK.map((k) => `<label class="small"><input type="checkbox" data-th="${k}" ${tst.custom.includes(k) ? 'checked' : ''}> ${esc(thName(k))}</label>`).join('')}</div>
        <label class="small" style="display:block;margin-top:6px"><input type="checkbox" data-mix ${tst.mix ? 'checked' : ''}> ${t('dc.t.mix')}</label></div>` : '';
    const bindPick = () => {
      el.querySelectorAll('[data-th]').forEach((x) => (x.onchange = () => { const k = x.dataset.th; tst.custom = x.checked ? tst.custom.concat(k) : tst.custom.filter((y) => y !== k); renderTeam(el, P); }));
      const mx = el.querySelector('[data-mix]'); if (mx) mx.onchange = () => { tst.mix = mx.checked; renderTeam(el, P); };
    };
    if (!cfg.th.length) { el.innerHTML = pick + App.ui.empty(t('dc.t.needth')); bindPick(); return; }
    const T = buildTeam(P, cfg);
    if (!T) { el.innerHTML = pick + App.ui.empty(t('dc.none')); bindPick(); return; }
    const ck = (b) => (b ? '<b style="color:#2F855A">✓</b>' : '<b style="color:#C53030">✗</b>');
    const days = cfg.dl ? Math.round((new Date(cfg.dl) - App.today) / 864e5) : null;
    const eligRows = [[T.elig.ts, t('dc.t.e.ts')], [T.elig.q, t('dc.t.e.q', { n: cfg.minQ })], [T.elig.act, t('dc.t.e.act', { n: cfg.maxAct })]];
    if (cfg.inter) eligRows.push([T.deptsN >= 2, t('dc.t.e.inter')]);
    const info = `<div class="fields" style="grid-template-columns:auto 1fr">
        <div class="k">${t('dc.t.req')}</div><div class="v">${chips(cfg.th)} ${cfg.inter ? App.ui.badge(t('dc.t.interb'), 'navy') : ''}</div>
        ${cfg.budget ? `<div class="k">${t('dc.t.budget')}</div><div class="v">${t('dc.t.mil', { n: App.fmtNum(cfg.budget, 0) })}${App.lang === 'vi' ? ' · ' + esc(cfg.cap) : ''}</div>` : ''}
        <div class="k">${t('dc.t.size')}</div><div class="v">${t('dc.t.ppl', { n: cfg.size })}</div>
        ${cfg.dl ? `<div class="k">${t('dc.t.dl')}</div><div class="v">${App.fmtDate(cfg.dl)} ${App.ui.badge(t('dc.t.days', { n: days }), days < 45 ? 'warn' : 'info')}</div>` : ''}
        <div class="k">${t('dc.t.elig')}</div><div class="v">${eligRows.map(([b, l]) => `<div class="small">${ck(b)} ${esc(l)}</div>`).join('')}</div></div>`;
    const why = (m) => {
      const p = m.p, out = [];
      const strongK = cfg.th.filter((k) => p.th[k] >= 1);
      if (strongK.length) out.push(t('dc.t.why.th', { l: strongK.map(thName).join(', ') }));
      if (m.role === 'm' && m.gap.length) out.push(t('dc.t.why.gap', { l: m.gap.map(thName).join(', ') }));
      if (p.q12) out.push(t('dc.t.why.q', { n: p.q12 }));
      if (m.role === 'pi') { if (p.s.hoc_vi === 'TS') out.push(t('dc.t.why.ts')); if (p.act) out.push(t('dc.t.why.pi', { n: p.act })); }
      if (p.done) out.push(t('dc.t.why.done', { n: p.done }));
      if (m.role === 'y') out.push(t('dc.t.why.young', { d: [p.s.vi_tri, p.s.hoc_vi].join(', ') }));
      if (cfg.inter && m.role !== 'pi' && p.s.bo_mon !== T.pi.s.bo_mon) out.push(t('dc.t.why.dept'));
      out.push(t(p.ready === 'bad' ? 'dc.t.why.busy' : 'dc.t.why.ready', { p: pctTxt(p.tPct) }));
      return out.slice(0, 4);
    };
    const roleB = (r) => App.ui.badge(t('dc.t.role.' + r), r === 'pi' ? 'navy' : r === 'm' ? 'info' : 'orange');
    const members = T.team.map((m) => `<div class="card" style="margin:0;border-top:3px solid ${m.role === 'pi' ? '#2E3191' : m.role === 'm' ? '#1C9ACC' : '#DD6B20'}">
        <div class="row between"><div class="row"><img src="${esc(App.photo(m.p.s))}" alt="" style="width:36px;height:36px;border-radius:50%;object-fit:cover"><div><b>${esc(nm(m.p.s))}</b><div class="small muted">${esc(deptShort(m.p.s.bo_mon))} · ${esc(m.p.s.vi_tri)} · ${t('dc.t.c.score')} ${m.p.score}</div></div></div>${roleB(m.role)}</div>
        <ul class="small" style="margin:6px 0 0;padding-left:16px">${why(m).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <div style="margin-top:4px">${readyBadge(m.p)}</div></div>`).join('');
    const covTbl = `<table class="tbl"><tbody>${cfg.th.map((k) => { const best = T.team.slice().sort((a, b) => b.p.th[k] - a.p.th[k])[0]; const ok = T.cov[k] >= 1;
      return `<tr><td>${ck(ok)}</td><td class="small">${esc(thName(k))}</td><td class="small muted">${ok && best ? esc(nm(best.p.s)) : '–'}</td></tr>`; }).join('')}</tbody></table>`;
    const alts = T.alts.length ? `<ul class="small" style="margin:0;padding-left:16px">${T.alts.map((a) => `<li><b>${esc(nm(a.c.s))}</b> (${esc(deptShort(a.c.s.bo_mon))}) – ${t('dc.t.fit')} ${pctS(a.f * 100)} · ${chips(a.c.top.filter((k) => cfg.th.includes(k)))}${a.for ? ` <span class="muted">${t('dc.t.alt.for')} ${esc(nm(a.for))}</span>` : ''}</li>`).join('')}</ul>` : `<span class="small muted">${t('dc.none')}</span>`;
    el.innerHTML = `${pick}<div class="grid g-1-2"><div>${info}</div>
      <div><div class="kpis" style="margin:0 0 8px">${App.ui.kpi(t('dc.t.tscore'), T.score, App.ui.progress(T.score, T.score >= 70 ? 'ok' : 'cyan'), T.score >= 70 ? 'ok' : 'cyan')}
        ${App.ui.kpi(t('dc.t.cov'), T.covered.length + '/' + cfg.th.length, '', T.covered.length === cfg.th.length ? 'ok' : 'warn')}</div>${covTbl}</div></div>
      ${T.piOk ? '' : note(t('dc.t.noelig'), 'warn')}
      <h4 style="margin:12px 0 6px">${t('dc.t.team')}</h4><div class="grid g3">${members}</div>
      <h4 style="margin:12px 0 6px">${t('dc.t.alt')}</h4>${alts}
      <div class="row" style="margin-top:12px"><button class="btn" data-tsend>${t('dc.t.send')}</button><button class="btn cyan" data-tcreate>${t('dc.t.create')}</button></div>`;
    bindPick();
    const title = App.L(cfg, 'ten');
    el.querySelector('[data-tsend]').onclick = (ev) => {
      T.team.forEach((m) => App.notify(m.p.s.ma_cb, 'Đề xuất tham gia nhóm đề tài "' + cfg.ten_vi + '" – vai trò: ' + t('dc.t.role.' + m.role), '#/decision/team'));
      App.audit('DE_XUAT', 'Đề xuất nhóm nghiên cứu cho "' + cfg.ten_vi + '": ' + T.team.map((m) => m.p.s.ma_cb + '(' + m.role + ')').join(', '), T.pi.s.ma_cb, 'Quản lý khoa học công nghệ');
      App.ui.toast(t('dc.t.sent', { n: T.team.length }), 'ok'); ev.target.disabled = true;
    };
    el.querySelector('[data-tcreate]').onclick = async () => {
      if (!App.proc || typeof App.proc.create !== 'function') { App.ui.toast(t('dc.t.noproc'), 'bad'); return; }
      const pi = T.pi.s;
      const data = { staff_id: pi.ma_cb, full_name: pi.ho_ten, unit: pi.bo_mon, degree: [pi.hoc_ham, pi.hoc_vi].filter(Boolean).join('.'), project_level: cfg.cap, title: cfg.ten_vi,
        field: cfg.th.map((k) => App.t('dc.t.th.' + k)).join('; '), members: T.team.filter((m) => m.role !== 'pi').map((m) => m.p.s.ma_cb).join(', '),
        active_projects: D.projects.filter((p) => p.ma_cb === pi.ma_cb && p.vai_tro === 'Chủ nhiệm' && p.trang_thai !== 'Đã nghiệm thu').map((p) => p.id + ' – ' + p.ten).join('; ') || 'Không',
        budget: (cfg.budget || 0) * 1e6 };
      try {
        const r = await Promise.resolve(App.proc.create('QT-ĐHQT-KH-01', data, { draft: true, nguon: 'decision/team', hien_thi: title }));
        App.audit('TAO_NHAP', 'Tạo hồ sơ đăng ký đề tài từ đề xuất nhóm: ' + cfg.ten_vi, r && r.id, 'Quản lý khoa học công nghệ');
        App.ui.toast(t('dc.t.created', { id: r && r.id }), 'ok');
        if (r && r.id) location.hash = '#/processes/hs/' + r.id;
      } catch (e) { console.error(e); App.ui.toast(String(e.message || e), 'bad'); }
    };
  }

  const RENDER = { bal: viewBal, fc: viewFc, sv: viewSv, sla: viewSla, rs: viewRs, lab: viewLab, team: viewTeam };

  App.page('decision', {
    render(main, params) {
      const u = App.user();
      if (!App.acl.has('decision')) { main.innerHTML = `<div class="notice bad">${esc(t('noaccess'))}</div>`; return; }
      area = u.role === 'PTK' ? (u.phu_trach || 'dao_tao_sv') : 'all';
      const views = VIEWS[area] || VIEWS.all;
      const active = views.includes(params[0]) ? params[0] : views[0];
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.decision')}</div><h1>${t('nav.decision')}</h1><p>${t('dc.sub')}</p></div>
          <div><span class="chip">${t('dc.area')}: <b>${esc(t('dc.area.' + area))}</b></span></div></div>
        ${area !== 'all' ? note(t('dc.area.note', { v: views.map((v) => t('dc.v.' + v)).join(', ') })) : ''}
        <div data-tabs></div><div data-body></div>`;
      const body = main.querySelector('[data-body]');
      const show = (k) => { try { RENDER[k](body); } catch (e) { console.error(e); body.innerHTML = `<div class="card err-card"><pre>${esc(e.stack || e)}</pre></div>`; } };
      App.ui.tabs(main.querySelector('[data-tabs]'), views.map((k) => ({ k, t: t('dc.v.' + k) })), active, show);
      show(active);
    },
  });
})();
