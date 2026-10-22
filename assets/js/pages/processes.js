/* Quy trình số – 24 quy trình chuẩn hoá ISO 9001:2015: danh mục, khung mô tả ISO, AS-IS ↔ TO-BE, biểu mẫu điện tử tự điền
   từ bản ghi vàng (Core metadata), hồ sơ & luồng phê duyệt (MFA, ký số giả lập), việc chờ xử lý, theo dõi SLA.
   Định nghĩa bộ máy dùng chung App.proc (home.js gọi App.proc.pendingFor / App.proc.withinSla). */
App.addI18n({
  vi: {
    'pr.sub': '24 quy trình chuẩn hoá theo ISO 9001:2015 – biểu mẫu điện tử tự điền từ bản ghi vàng, định tuyến tự động, MFA, ký số và theo dõi SLA.',
    'pr.tab.cat': 'Danh mục quy trình', 'pr.tab.mine': 'Hồ sơ của tôi', 'pr.tab.inbox': 'Việc chờ xử lý', 'pr.tab.sla': 'Theo dõi SLA',
    'pr.new': 'Tạo hồ sơ', 'pr.new.title': 'Tạo hồ sơ mới', 'pr.new.pick': 'Chọn quy trình cần khởi tạo (theo vai trò đang hoạt động)',
    'pr.new.none': 'Vai trò đang hoạt động không khởi tạo quy trình nào.', 'pr.new.denied': 'Vai trò đang hoạt động ({r}) không thuộc đối tượng áp dụng của quy trình này.',
    'pr.all.groups': 'Tất cả nhóm', 'pr.all.scopes': 'Mọi phạm vi', 'pr.search': 'Tìm theo mã hiệu, tên quy trình…',
    'pr.k.n': 'Số quy trình chuẩn hoá', 'pr.k.n.s': '7 nhóm nghiệp vụ', 'pr.k.days': 'Thời gian TB: AS-IS → TO-BE', 'pr.k.days.s': 'ngày làm việc',
    'pr.k.red': 'Mức giảm thời gian TB', 'pr.k.red.s': '{n}/24 quy trình giảm ≥ 50%', 'pr.k.steps': 'Bước thủ công cắt giảm', 'pr.k.steps.s': '{a} bước AS-IS → {b} bước thủ công TO-BE',
    'pr.k.esign': 'Quy trình có ký số', 'pr.k.esign.s': '{n} quy trình có bước MFA',
    'pr.k.src': 'Nguồn: danh mục quy trình chuẩn hoá (processes_notes.md); 1 ngày làm việc = 8 giờ; % giảm tính trên trung bình khoảng AS-IS. AS-IS "ước tính" khi văn bản không quy định thời hạn.',
    'pr.chart': 'Thời gian xử lý AS-IS (tối đa) và TO-BE theo quy trình', 'pr.chart.u': 'ngày làm việc', 'pr.asis': 'AS-IS (hiện trạng)', 'pr.tobe': 'TO-BE (tối ưu)',
    'pr.col.code': 'Mã hiệu', 'pr.col.name': 'Tên quy trình', 'pr.col.scope': 'Phạm vi', 'pr.col.asis': 'AS-IS (ngày)', 'pr.col.tobe': 'TO-BE (ngày)',
    'pr.col.red': '% giảm', 'pr.col.steps': 'Số bước', 'pr.col.sign': 'Ký số', 'pr.est': 'ước tính', 'pr.doc': 'văn bản', 'pr.n.found': '{n} quy trình',
    'pr.iso': 'Khung mô tả quy trình theo ISO 9001:2015', 'pr.iso.code': 'Mã hiệu & phiên bản', 'pr.iso.ver': 'Phiên bản 1.0 · ban hành thử nghiệm 10/2026 (đề xuất)',
    'pr.iso.owner': 'Đơn vị chủ trì', 'pr.iso.units': 'Đơn vị tham gia', 'pr.iso.purpose': 'Mục đích – phạm vi', 'pr.iso.applies': 'Đối tượng áp dụng',
    'pr.iso.legal': 'Văn bản viện dẫn – căn cứ pháp lý', 'pr.iso.raci': 'Ma trận trách nhiệm RACI', 'pr.iso.io': 'Đầu vào – đầu ra', 'pr.iso.in': 'Đầu vào',
    'pr.iso.out': 'Đầu ra', 'pr.iso.steps': 'Các bước TO-BE & SLA', 'pr.iso.form': 'Biểu mẫu điện tử {c}', 'pr.iso.kpi': 'Chỉ số đo lường (KPI)',
    'pr.iso.risk': 'Rủi ro & biện pháp kiểm soát', 'pr.iso.rec': 'Hồ sơ lưu', 'pr.iso.pdca': 'Chu trình PDCA – cải tiến liên tục',
    'pr.raci.R': 'R – Thực hiện', 'pr.raci.A': 'A – Chịu trách nhiệm phê duyệt', 'pr.raci.C': 'C – Tham vấn', 'pr.raci.I': 'I – Được thông báo',
    'pr.in.form': 'Biểu mẫu {c}: {n} trường, trong đó {a} trường tự điền/tính/chọn từ Core metadata', 'pr.risk': 'Rủi ro', 'pr.control': 'Biện pháp kiểm soát',
    'pr.pdca.P': 'P – Hoạch định: chuẩn hoá các bước, SLA từng bước, biểu mẫu điện tử {c}, nhận diện rủi ro và biện pháp kiểm soát (ISO 9001 điều 6.1, 8.1).',
    'pr.pdca.D': 'D – Thực hiện: vận hành trên ứng dụng – tự điền từ bản ghi vàng, định tuyến tự động, MFA và ký số, nhật ký kiểm toán (điều 7.5, 8.5).',
    'pr.pdca.C': 'C – Kiểm tra: theo dõi SLA và {k} KPI trên bảng theo dõi; hiện có {n} hồ sơ, {p} đúng SLA; đánh giá nội bộ định kỳ (điều 9.1, 9.2).',
    'pr.pdca.A': 'A – Cải tiến: xử lý điểm không phù hợp, hành động khắc phục, rà soát phiên bản quy trình hằng năm (điều 10.2, 10.3).',
    'pr.cmp': 'So sánh AS-IS và TO-BE', 'pr.cmp.tot': 'Tổng: {d} ngày làm việc', 'pr.cmp.red': 'Giảm {p}% thời gian', 'pr.opt': 'Các điểm tối ưu hoá',
    'pr.days': '{d} ngày', 'pr.hours': '{h} giờ', 'pr.auto': 'Tự động', 'pr.mfa': 'MFA', 'pr.esign': 'Ký số', 'pr.sim': 'mô phỏng',
    'pr.vi.only': 'Nội dung mô tả chi tiết của quy trình được lưu bằng tiếng Việt (ngôn ngữ của văn bản gốc).',
    'pr.f.key': 'Trường', 'pr.f.type': 'Kiểu', 'pr.f.req': 'Bắt buộc', 'pr.f.src': 'Nguồn dữ liệu (src)', 'pr.f.map': 'Ánh xạ bản ghi vàng', 'pr.f.mode': 'Cách điền',
    'pr.m.core': 'Từ Core metadata', 'pr.m.calc': 'Tính từ Core metadata', 'pr.m.pick': 'Chọn từ Core metadata', 'pr.m.input': 'Người dùng nhập', 'pr.m.upload': 'Tải tệp',
    'pr.m.manual': 'Ngoài phạm vi demo – nhập tay', 'pr.m.locked': 'Đã khoá – dữ liệu bản ghi vàng, không khai lại',
    'pr.f.choose': '— Chọn —', 'pr.f.need': 'Chọn mục liên quan trước', 'pr.f.nograde': 'Chưa có điểm học phần này', 'pr.f.none': 'Không có',
    'pr.f.months': '{m} tháng (≈ {y} năm)', 'pr.f.ent': '{e} ngày (12 + 1 ngày/5 năm thâm niên); đã nghỉ {d} ngày', 'pr.f.entsrc': 'Căn cứ: {s} – DỰ THẢO',
    'pr.f.drafthint': 'Các trường có biểu tượng khoá được điền tự động từ bản ghi vàng đã xác thực – giảng viên không phải khai lại (nguyên tắc "chỉ khai một lần").',
    'pr.save.draft': 'Lưu nháp', 'pr.submit': 'Nộp hồ sơ', 'pr.resubmit': 'Gửi lại sau bổ sung', 'pr.err.req': 'Vui lòng điền các trường bắt buộc: {l}',
    'pr.err.dates': 'Ngày kết thúc phải sau hoặc bằng ngày bắt đầu.', 'pr.err.leave': 'Số ngày nghỉ ({n}) vượt số ngày phép còn lại ({r}).',
    'pr.err.pos': 'Giá trị phải lớn hơn 0: {l}', 'pr.warn.lead': 'Lưu ý: hướng dẫn nghỉ hằng năm (dự thảo) yêu cầu nộp đơn trước {d} ngày làm việc.',
    'pr.created': 'Đã nộp hồ sơ {id}.', 'pr.drafted': 'Đã lưu nháp {id}.', 'pr.mfa.submit': 'Ký số/xác nhận khi nộp hồ sơ {c}',
    'pr.st.nhap': 'Nháp', 'pr.st.dang_xu_ly': 'Đang xử lý', 'pr.st.tra_lai': 'Trả lại bổ sung', 'pr.st.hoan_thanh': 'Hoàn thành', 'pr.st.tu_choi': 'Từ chối', 'pr.st.huy': 'Đã rút',
    'pr.kq.dong_y': 'Đồng ý', 'pr.kq.tra_lai': 'Trả lại', 'pr.kq.tu_choi': 'Từ chối', 'pr.kq.nop': 'Nộp hồ sơ', 'pr.kq.gui_lai': 'Gửi lại sau bổ sung',
    'pr.kq.auto': 'Hệ thống xử lý tự động', 'pr.kq.bo_qua': 'Bỏ qua (không phát sinh)', 'pr.kq.huy': 'Rút hồ sơ',
    'pr.skip.verified': 'dữ liệu đã xác thực, không yêu cầu xác nhận thêm', 'pr.skip.not_new': 'GV đã từng giảng dạy tại Trường', 'pr.skip.common_eq': 'thiết bị thông dụng – hệ thống tự duyệt',
    'pr.col.id': 'Số hồ sơ', 'pr.col.proc': 'Quy trình', 'pr.col.req': 'Người đề nghị', 'pr.col.created': 'Ngày tạo', 'pr.col.step': 'Bước hiện tại', 'pr.col.sla': 'SLA',
    'pr.col.recv': 'Nhận lúc', 'pr.open': 'Mở', 'pr.mine.empty': 'Bạn chưa có hồ sơ nào.', 'pr.inbox.empty': 'Không có hồ sơ chờ vai trò hiện tại xử lý.',
    'pr.inbox.h': 'Hồ sơ chờ {r} xử lý', 'pr.inbox.note': 'Hồ sơ được định tuyến theo bước hiện tại và vai trò đang hoạt động; đổi vai trò ở góc trên để xem việc của vai trò khác.',
    'pr.sim.h': 'Bước của đơn vị khác (mô phỏng)', 'pr.sim.note': 'Các phòng/hội đồng chưa có tài khoản trong bản demo. Lãnh đạo Khoa, BGH hoặc chuyên viên phòng có thể bấm "Mô phỏng đơn vị xử lý" để luồng tiếp tục.',
    'pr.sim.btn': 'Mô phỏng đơn vị xử lý', 'pr.sim.done': 'Đã mô phỏng {u} xử lý bước {s}.',
    'pr.batch': 'Ký số theo lô ({n} hồ sơ)', 'pr.batch.ok': 'Đã ký số {n} hồ sơ trong một lần xác thực.',
    'pr.approve': 'Đồng ý / Phê duyệt', 'pr.sign': 'Ký số & phê duyệt', 'pr.return': 'Trả lại', 'pr.reject': 'Từ chối', 'pr.note': 'Ý kiến xử lý',
    'pr.note.req': 'Cần nhập lý do khi trả lại hoặc từ chối.', 'pr.done': 'Đã ghi nhận: {k}.', 'pr.act.h': 'Xử lý bước {i}',
    'pr.act.mfa': 'Bước này yêu cầu xác thực lại MFA trước khi phê duyệt.', 'pr.act.esign': 'Phê duyệt sẽ tạo chữ ký số (giả lập) gắn mã băm SHA-256 của nội dung hồ sơ.',
    'pr.auth.955': 'Thẩm quyền ký văn bản thỏa thuận theo QĐ 955/QĐ-ĐHQT ngày 20/10/2025 (nhóm {g}).',
    'pr.auth.tl': 'Ký thừa lệnh trong ngày cần văn bản giao quyền của Hiệu trưởng theo QĐ 955/QĐ-ĐHQT Điều 3 khoản 2–4 và quy chế văn thư.',
    'pr.auth.gen': 'Thẩm quyền ký theo văn bản gốc của quy trình; QĐ 955/QĐ-ĐHQT chỉ phân quyền ký văn bản thỏa thuận.',
    'pr.rec': 'Hồ sơ {id}', 'pr.rec.noscope': 'Bạn không có quyền xem hồ sơ này (ngoài phạm vi xử lý).', 'pr.rec.nf': 'Không tìm thấy hồ sơ {id}.',
    'pr.rec.data': 'Dữ liệu biểu mẫu', 'pr.rec.seed': 'Hồ sơ dữ liệu mẫu (seed) – không có dữ liệu biểu mẫu chi tiết; thông tin người đề nghị lấy từ bản ghi vàng.',
    'pr.rec.flow': 'Tiến trình TO-BE', 'pr.rec.hist': 'Lịch sử xử lý', 'pr.rec.sigs': 'Chữ ký số', 'pr.rec.nosig': 'Chưa có chữ ký số.', 'pr.rec.act': 'Thao tác',
    'pr.rec.total': 'Tổng SLA {s} giờ làm việc · đã dùng {u} giờ', 'pr.rec.by': 'bởi', 'pr.rec.who': 'Người/đơn vị xử lý', 'pr.rec.step': 'Bước',
    'pr.rec.time': 'Thời điểm', 'pr.rec.res': 'Kết quả', 'pr.rec.sys': 'Hệ thống', 'pr.rec.assigned': 'theo phân công',
    'pr.withdraw': 'Rút hồ sơ', 'pr.edit': 'Chỉnh sửa & nộp', 'pr.fix': 'Bổ sung & gửi lại', 'pr.withdrawn': 'Đã rút hồ sơ {id}.', 'pr.out': 'Xem / in kết quả',
    'pr.preview': 'Xem trước giấy xác nhận (dự thảo)', 'pr.returned': 'Hồ sơ bị trả lại ở bước {i}: {n}', 'pr.waitme': 'Hồ sơ đang chờ bạn xử lý.',
    'pr.waitsv': 'Bước này do sinh viên thực hiện trên cổng SV – bạn có thể mô phỏng để tiếp tục:',
    'pr.sla.left': 'còn {h} giờ', 'pr.sla.over': 'quá hạn {h} giờ', 'pr.sla.none': 'không giới hạn', 'pr.sla.due': 'Hạn: {d}',
    'pr.sig.cert': 'Chứng thư', 'pr.sig.hash': 'SHA-256 nội dung', 'pr.sig.seal': 'Chữ ký số cơ quan (tự động)', 'pr.sig.serial': 'Số sê-ri',
    'pr.sla.ontime': 'Tỷ lệ đúng SLA theo nhóm', 'pr.sla.open': 'Hồ sơ đang mở theo bước/đơn vị', 'pr.sla.avg': 'Thời gian xử lý thực tế so với mục tiêu TO-BE và AS-IS công bố',
    'pr.sla.overdue': 'Hồ sơ quá hạn SLA', 'pr.sla.k.all': 'Tổng hồ sơ', 'pr.sla.k.open': 'Đang mở', 'pr.sla.k.done': 'Hoàn thành', 'pr.sla.k.rate': 'Đúng SLA',
    'pr.sla.k.over': 'Quá hạn', 'pr.sla.unit': 'Bước / đơn vị đang giữ', 'pr.sla.n': 'Số hồ sơ', 'pr.sla.actual': 'Thực tế TB (ngày)', 'pr.sla.target': 'Mục tiêu TO-BE',
    'pr.sla.pub': 'AS-IS công bố', 'pr.sla.eval': 'Đánh giá', 'pr.sla.ok': 'Đạt', 'pr.sla.bad': 'Chưa đạt', 'pr.sla.note': 'Thời gian tính theo giờ làm việc (8 giờ/ngày, thứ Hai – thứ Sáu); "đúng SLA" = thời gian đã dùng ≤ tổng SLA các bước.',
    'pr.sla.none.over': 'Không có hồ sơ quá hạn.', 'pr.sla.overby': 'Vượt', 'pr.sla.mark': 'Vạch = mục tiêu 90%',
    'pr.out.h': 'KẾT QUẢ XỬ LÝ HỒ SƠ', 'pr.out.no': 'Số văn bản', 'pr.out.sim': 'BẢN GIẢ LẬP – không có giá trị pháp lý',
    'pr.out.verify': 'Mã xác thực (giả lập)', 'pr.out.draft': 'DỰ THẢO – chưa ký số',
    'pr.u.req': 'người đề nghị', 'pr.u.esc': 'chuyển cấp trên (tránh tự phê duyệt)', 'pr.u.unit': 'đơn vị khác – mô phỏng', 'pr.u.leave3': 'nghỉ ≥ 03 ngày → Hiệu trưởng/người được ủy quyền',
    'pr.u.area': 'phụ trách', 'pr.u.dt': 'đào tạo – SV', 'pr.u.kh': 'KHCN – DN', 'pr.back.cat': '← Danh mục quy trình', 'pr.back.rec': '← Hồ sơ của tôi', 'pr.back.inbox': '← Việc chờ xử lý',
    'pr.lbl.unit': 'Đơn vị', 'pr.lbl.pos': 'Chức vụ', 'pr.batch.note': 'Ký theo lô',
    'pr.g.NS': 'Nhân sự – hồ sơ', 'pr.g.GD': 'Giảng dạy – khảo thí', 'pr.g.HL': 'Học liệu', 'pr.g.KH': 'Khoa học – công nghệ', 'pr.g.HC': 'Hành chính – chế độ',
    'pr.g.NH': 'Phục vụ người học', 'pr.g.PTN': 'Phòng thí nghiệm', 'pr.sc.noi_bo': 'Nội bộ', 'pr.sc.lien_don_vi': 'Liên đơn vị', 'pr.sc.lien_cap': 'Liên cấp',
  },
  en: {
    'pr.sub': '24 processes standardised under ISO 9001:2015 – e-forms prefilled from the golden record, automatic routing, MFA, e-signatures and SLA tracking.',
    'pr.tab.cat': 'Process catalogue', 'pr.tab.mine': 'My requests', 'pr.tab.inbox': 'Waiting for me', 'pr.tab.sla': 'SLA dashboard',
    'pr.new': 'New request', 'pr.new.title': 'New request', 'pr.new.pick': 'Choose a process to start (based on your active role)',
    'pr.new.none': 'Your active role does not start any process.', 'pr.new.denied': 'Your active role ({r}) is not among the users of this process.',
    'pr.all.groups': 'All groups', 'pr.all.scopes': 'All scopes', 'pr.search': 'Search by code or name…',
    'pr.k.n': 'Standardised processes', 'pr.k.n.s': '7 business groups', 'pr.k.days': 'Avg. time: AS-IS → TO-BE', 'pr.k.days.s': 'working days',
    'pr.k.red': 'Avg. time reduction', 'pr.k.red.s': '{n}/24 processes cut by ≥ 50%', 'pr.k.steps': 'Manual steps removed', 'pr.k.steps.s': '{a} AS-IS steps → {b} manual TO-BE steps',
    'pr.k.esign': 'Processes with e-signature', 'pr.k.esign.s': '{n} processes with MFA steps',
    'pr.k.src': 'Source: standardised process catalogue (processes_notes.md); 1 working day = 8 hours; reduction measured against the AS-IS range mean. AS-IS marked "estimated" where documents set no deadline.',
    'pr.chart': 'Processing time AS-IS (max) vs TO-BE per process', 'pr.chart.u': 'working days', 'pr.asis': 'AS-IS (current)', 'pr.tobe': 'TO-BE (optimised)',
    'pr.col.code': 'Code', 'pr.col.name': 'Process', 'pr.col.scope': 'Scope', 'pr.col.asis': 'AS-IS (days)', 'pr.col.tobe': 'TO-BE (days)',
    'pr.col.red': 'Reduction', 'pr.col.steps': 'Steps', 'pr.col.sign': 'e-Sign', 'pr.est': 'estimated', 'pr.doc': 'documented', 'pr.n.found': '{n} processes',
    'pr.iso': 'ISO 9001:2015 process description', 'pr.iso.code': 'Code & version', 'pr.iso.ver': 'Version 1.0 · pilot issue 10/2026 (proposed)',
    'pr.iso.owner': 'Process owner', 'pr.iso.units': 'Units involved', 'pr.iso.purpose': 'Purpose – scope', 'pr.iso.applies': 'Applies to',
    'pr.iso.legal': 'Referenced documents – legal basis', 'pr.iso.raci': 'RACI matrix', 'pr.iso.io': 'Inputs – outputs', 'pr.iso.in': 'Inputs',
    'pr.iso.out': 'Outputs', 'pr.iso.steps': 'TO-BE steps & SLA', 'pr.iso.form': 'Electronic form {c}', 'pr.iso.kpi': 'Performance indicators (KPI)',
    'pr.iso.risk': 'Risks & controls', 'pr.iso.rec': 'Records retained', 'pr.iso.pdca': 'PDCA – continual improvement',
    'pr.raci.R': 'R – Responsible', 'pr.raci.A': 'A – Accountable', 'pr.raci.C': 'C – Consulted', 'pr.raci.I': 'I – Informed',
    'pr.in.form': 'Form {c}: {n} fields, {a} of them prefilled/computed/picked from Core metadata', 'pr.risk': 'Risk', 'pr.control': 'Control',
    'pr.pdca.P': 'P – Plan: standardised steps, per-step SLA, electronic form {c}, risks and controls (ISO 9001 cl. 6.1, 8.1).',
    'pr.pdca.D': 'D – Do: run in the app – golden-record prefill, automatic routing, MFA and e-signature, audit trail (cl. 7.5, 8.5).',
    'pr.pdca.C': 'C – Check: SLA and {k} KPIs on the dashboard; {n} requests so far, {p} within SLA; periodic internal audits (cl. 9.1, 9.2).',
    'pr.pdca.A': 'A – Act: nonconformity handling, corrective actions, yearly review of the process version (cl. 10.2, 10.3).',
    'pr.cmp': 'AS-IS vs TO-BE', 'pr.cmp.tot': 'Total: {d} working days', 'pr.cmp.red': '{p}% faster', 'pr.opt': 'Optimisations',
    'pr.days': '{d} days', 'pr.hours': '{h} h', 'pr.auto': 'Automatic', 'pr.mfa': 'MFA', 'pr.esign': 'e-Sign', 'pr.sim': 'simulated',
    'pr.vi.only': 'Detailed process content is maintained in Vietnamese (the language of the source documents).',
    'pr.f.key': 'Field', 'pr.f.type': 'Type', 'pr.f.req': 'Required', 'pr.f.src': 'Data source (src)', 'pr.f.map': 'Golden-record mapping', 'pr.f.mode': 'Filled by',
    'pr.m.core': 'From Core metadata', 'pr.m.calc': 'Computed from Core metadata', 'pr.m.pick': 'Pick from Core metadata', 'pr.m.input': 'User input', 'pr.m.upload': 'File upload',
    'pr.m.manual': 'Outside demo scope – manual input', 'pr.m.locked': 'Locked – golden-record data, no re-typing',
    'pr.f.choose': '— Select —', 'pr.f.need': 'Select the related item first', 'pr.f.nograde': 'No grade for this course', 'pr.f.none': 'None',
    'pr.f.months': '{m} months (≈ {y} years)', 'pr.f.ent': '{e} days (12 + 1 day per 5 years of service); {d} days taken', 'pr.f.entsrc': 'Basis: {s} – DRAFT',
    'pr.f.drafthint': 'Fields with a lock are prefilled from the verified golden record – lecturers never re-type them ("once-only" principle).',
    'pr.save.draft': 'Save draft', 'pr.submit': 'Submit', 'pr.resubmit': 'Resubmit', 'pr.err.req': 'Please fill in the required fields: {l}',
    'pr.err.dates': 'End date must be on or after the start date.', 'pr.err.leave': 'Leave days ({n}) exceed the remaining entitlement ({r}).',
    'pr.err.pos': 'Value must be greater than 0: {l}', 'pr.warn.lead': 'Note: the (draft) annual-leave guideline requires applying {d} working days in advance.',
    'pr.created': 'Request {id} submitted.', 'pr.drafted': 'Draft {id} saved.', 'pr.mfa.submit': 'Sign/confirm when submitting {c}',
    'pr.st.nhap': 'Draft', 'pr.st.dang_xu_ly': 'In progress', 'pr.st.tra_lai': 'Returned for changes', 'pr.st.hoan_thanh': 'Completed', 'pr.st.tu_choi': 'Rejected', 'pr.st.huy': 'Withdrawn',
    'pr.kq.dong_y': 'Approved', 'pr.kq.tra_lai': 'Returned', 'pr.kq.tu_choi': 'Rejected', 'pr.kq.nop': 'Submitted', 'pr.kq.gui_lai': 'Resubmitted',
    'pr.kq.auto': 'Processed automatically', 'pr.kq.bo_qua': 'Skipped (not applicable)', 'pr.kq.huy': 'Withdrawn',
    'pr.skip.verified': 'data already verified, no extra confirmation requested', 'pr.skip.not_new': 'lecturer has taught at IU before', 'pr.skip.common_eq': 'common equipment – auto-approved',
    'pr.col.id': 'Request no.', 'pr.col.proc': 'Process', 'pr.col.req': 'Requester', 'pr.col.created': 'Created', 'pr.col.step': 'Current step', 'pr.col.sla': 'SLA',
    'pr.col.recv': 'Received', 'pr.open': 'Open', 'pr.mine.empty': 'You have no requests yet.', 'pr.inbox.empty': 'Nothing is waiting for your active role.',
    'pr.inbox.h': 'Requests waiting for {r}', 'pr.inbox.note': 'Requests are routed by their current step and your active role; switch roles at the top to see other queues.',
    'pr.sim.h': 'Steps of other units (simulated)', 'pr.sim.note': 'These offices/councils have no demo accounts. Faculty leaders, the Board or office staff can press "Simulate unit action" to move the flow on.',
    'pr.sim.btn': 'Simulate unit action', 'pr.sim.done': 'Simulated {u} completing step {s}.',
    'pr.batch': 'Batch e-sign ({n} requests)', 'pr.batch.ok': '{n} requests signed with one authentication.',
    'pr.approve': 'Approve', 'pr.sign': 'e-Sign & approve', 'pr.return': 'Return', 'pr.reject': 'Reject', 'pr.note': 'Comment',
    'pr.note.req': 'A reason is required to return or reject.', 'pr.done': 'Recorded: {k}.', 'pr.act.h': 'Process step {i}',
    'pr.act.mfa': 'This step requires MFA re-authentication before approval.', 'pr.act.esign': 'Approval creates a (simulated) digital signature bound to the SHA-256 hash of the request.',
    'pr.auth.955': 'Signing authority for agreements per Decision 955/QĐ-ĐHQT of 20/10/2025 (group {g}).',
    'pr.auth.tl': 'Same-day signing "by order" requires a Rector delegation under Decision 955/QĐ-ĐHQT Art. 3 cl. 2–4 and the records rules.',
    'pr.auth.gen': 'Signing authority follows the source document of the process; Decision 955/QĐ-ĐHQT only covers agreements.',
    'pr.rec': 'Request {id}', 'pr.rec.noscope': 'You may not view this request (outside your processing scope).', 'pr.rec.nf': 'Request {id} not found.',
    'pr.rec.data': 'Form data', 'pr.rec.seed': 'Seeded sample request – no detailed form data; requester details come from the golden record.',
    'pr.rec.flow': 'TO-BE progress', 'pr.rec.hist': 'History', 'pr.rec.sigs': 'Digital signatures', 'pr.rec.nosig': 'No signatures yet.', 'pr.rec.act': 'Actions',
    'pr.rec.total': 'Total SLA {s} working hours · {u} h used', 'pr.rec.by': 'by', 'pr.rec.who': 'Actor', 'pr.rec.step': 'Step',
    'pr.rec.time': 'Time', 'pr.rec.res': 'Result', 'pr.rec.sys': 'System', 'pr.rec.assigned': 'as assigned',
    'pr.withdraw': 'Withdraw', 'pr.edit': 'Edit & submit', 'pr.fix': 'Amend & resubmit', 'pr.withdrawn': 'Request {id} withdrawn.', 'pr.out': 'View / print result',
    'pr.preview': 'Preview confirmation letter (draft)', 'pr.returned': 'Returned at step {i}: {n}', 'pr.waitme': 'This request is waiting for you.',
    'pr.waitsv': 'This step is done by the student on the student portal – you can simulate it to continue:',
    'pr.sla.left': '{h} h left', 'pr.sla.over': '{h} h overdue', 'pr.sla.none': 'no limit', 'pr.sla.due': 'Due: {d}',
    'pr.sig.cert': 'Certificate', 'pr.sig.hash': 'SHA-256 of content', 'pr.sig.seal': 'Institutional e-seal (automatic)', 'pr.sig.serial': 'Serial',
    'pr.sla.ontime': 'On-time rate by group', 'pr.sla.open': 'Open requests by step/unit', 'pr.sla.avg': 'Actual processing time vs TO-BE target and published AS-IS',
    'pr.sla.overdue': 'Overdue requests', 'pr.sla.k.all': 'All requests', 'pr.sla.k.open': 'Open', 'pr.sla.k.done': 'Completed', 'pr.sla.k.rate': 'Within SLA',
    'pr.sla.k.over': 'Overdue', 'pr.sla.unit': 'Step / unit holding it', 'pr.sla.n': 'Requests', 'pr.sla.actual': 'Actual avg. (days)', 'pr.sla.target': 'TO-BE target',
    'pr.sla.pub': 'Published AS-IS', 'pr.sla.eval': 'Assessment', 'pr.sla.ok': 'Met', 'pr.sla.bad': 'Not met', 'pr.sla.note': 'Time counted in working hours (8 h/day, Monday–Friday); "within SLA" = time used ≤ sum of step SLAs.',
    'pr.sla.none.over': 'No overdue requests.', 'pr.sla.overby': 'Over by', 'pr.sla.mark': 'Marker = 90% target',
    'pr.out.h': 'PROCESSING RESULT', 'pr.out.no': 'Document no.', 'pr.out.sim': 'SIMULATED COPY – no legal value',
    'pr.out.verify': 'Verification code (simulated)', 'pr.out.draft': 'DRAFT – not yet signed',
    'pr.u.req': 'requester', 'pr.u.esc': 'escalated (no self-approval)', 'pr.u.unit': 'other unit – simulated', 'pr.u.leave3': 'leave ≥ 3 days → Rector/delegate',
    'pr.u.area': 'area', 'pr.u.dt': 'academic & students', 'pr.u.kh': 'research & industry', 'pr.back.cat': '← Process catalogue', 'pr.back.rec': '← My requests', 'pr.back.inbox': '← Waiting for me',
    'pr.lbl.unit': 'Unit', 'pr.lbl.pos': 'Position', 'pr.batch.note': 'Batch signing',
    'pr.g.NS': 'Human resources', 'pr.g.GD': 'Teaching & assessment', 'pr.g.HL': 'Learning materials', 'pr.g.KH': 'Research & technology', 'pr.g.HC': 'Administration & benefits',
    'pr.g.NH': 'Student services', 'pr.g.PTN': 'Laboratories', 'pr.sc.noi_bo': 'Internal', 'pr.sc.lien_don_vi': 'Cross-unit', 'pr.sc.lien_cap': 'Multi-level',
  },
});

(function () {
  'use strict';
  const D = App.D, esc = App.esc, t = App.t;
  const N = (s) => String(s == null ? '' : s).normalize('NFC');
  const EN = () => App.lang === 'en';
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  const toD = (s) => new Date(String(s || '').slice(0, 16));
  const short = (code) => N(code).replace('QT-ĐHQT-', '');
  const pname = (p) => (p ? (EN() ? p.name_en : p.name_vi) : '');
  const sname = (s) => (s ? (EN() ? s.en : s.vi) : '');
  const fmt = (n, d) => App.fmtNum(n, d == null ? 1 : d);
  const GROUPS = ['NS', 'GD', 'HL', 'KH', 'HC', 'NH', 'PTN'];
  const SCOPES = { noi_bo: 'ok', lien_don_vi: 'info', lien_cap: 'orange' };
  const LEAD = ['TK', 'PTK', 'BGH', 'CV_TCCB', 'CV_DTDH', 'CV_QLKH'];
  const UNIT_ROLE = { 'P.TCCB': 'CV_TCCB', 'P.ĐTĐH': 'CV_DTDH', 'P.ĐTSĐH': 'CV_DTDH', 'P.QLKH': 'CV_QLKH' };
  const AREA = { GD: 'dao_tao_sv', NH: 'dao_tao_sv', HL: 'dao_tao_sv', KH: 'khcn_dn', PTN: 'khcn_dn' };
  const UNITS = {
    'Hệ thống': ['Hệ thống (tự động)', 'System (automatic)'], GV: ['Giảng viên', 'Lecturer'], TG: ['Trợ giảng', 'Teaching assistant'], NCV: ['Nghiên cứu viên', 'Researcher'],
    KTV: ['Kỹ thuật viên PTN', 'Lab technician'], TBM: ['Trưởng Bộ môn', 'Head of Department'], TK: ['Lãnh đạo Khoa', 'Faculty leadership'], PTK: ['Phó Trưởng Khoa', 'Vice-Dean'],
    BGH: ['Ban Giám hiệu', 'Board of Rectors'], CVHT: ['Cố vấn học tập', 'Academic advisor'], SV: ['Sinh viên/Học viên', 'Student'],
    'P.TCCB': ['Phòng Tổ chức Cán bộ', 'Personnel Office'], 'P.ĐTĐH': ['Phòng Đào tạo Đại học', 'Undergraduate Academic Affairs'], 'P.ĐTSĐH': ['Phòng Đào tạo Sau đại học', 'Graduate Academic Affairs'],
    'P.QLKH': ['Phòng Quản lý Khoa học', 'Research Management Office'], 'P.HCTH': ['Phòng Hành chính – Tổng hợp', 'General Administration Office'],
    'P.KHTC': ['Phòng Kế hoạch – Tài chính', 'Planning & Finance Office'], 'P.VTTB': ['Phòng Vật tư – Thiết bị', 'Materials & Equipment Office'],
    'P.CTSV': ['Phòng Công tác Sinh viên', 'Student Affairs Office'], 'P.QTCSVC': ['Phòng Quản trị Cơ sở vật chất', 'Facilities Management Office'],
    'P.QHĐN': ['Phòng Quan hệ Đối ngoại', 'External Relations Office'], 'P.BĐCLGD&KT': ['Phòng Bảo đảm chất lượng GD & Khảo thí', 'Quality Assurance & Testing Office'],
    'P.TTPC': ['Phòng Thanh tra – Pháp chế', 'Inspection & Legal Office'], 'P.HTĐTNN': ['Phòng Hợp tác đào tạo nước ngoài', 'International Programs Office'],
    'Ban Điều hành Công tác giáo trình': ['Ban Điều hành Công tác giáo trình', 'Textbook Steering Board'], 'Hội đồng Thẩm định': ['Hội đồng Thẩm định', 'Appraisal Council'],
    'Chi ủy Chi bộ': ['Chi ủy Chi bộ', 'Party cell committee'], 'Chi bộ': ['Chi bộ', 'Party cell'], 'Công đoàn': ['Công đoàn', 'Trade union'], 'Khoa/BM': ['Khoa/Bộ môn', 'Faculty/Department'],
    'ĐHQG-HCM': ['ĐHQG-HCM', 'VNU-HCM'], 'TT ĐMST&CGCN': ['TT Đổi mới sáng tạo & CGCN', 'Innovation & Tech Transfer Centre'], 'Thư viện': ['Thư viện', 'Library'], HV: ['Học viên', 'Graduate student'],
    'Trưởng PTN/TBM': ['Trưởng PTN/TBM', 'Lab head/HoD'], 'Hội đồng cấp Khoa/BM': ['Hội đồng cấp Khoa/BM', 'Faculty council'], 'Hội đồng cấp Trường': ['Hội đồng cấp Trường', 'University council'],
  };
  const unitName = (a) => { const u = UNITS[N(a)]; return u ? (EN() ? u[1] : u[0]) : a; };

  /* ---------------------------------------------------------- giờ làm việc (8 giờ/ngày, T2–T6) */
  const WIN = [[8, 12], [13, 17]];
  function wh(a, b) {
    if (!(b > a)) return 0;
    let h = 0; const d = new Date(a); d.setHours(0, 0, 0, 0);
    for (let g = 0; d < b && g < 800; g++) {
      const w = d.getDay();
      if (w > 0 && w < 6) for (const [s, e] of WIN) {
        const s1 = new Date(d); s1.setHours(s); const e1 = new Date(d); e1.setHours(e);
        const x = Math.max(s1, a), y = Math.min(e1, b); if (y > x) h += (y - x) / 3.6e6;
      }
      d.setDate(d.getDate() + 1);
    }
    return h;
  }
  function addWH(a, hours) {
    let left = hours, cur = new Date(a);
    for (let g = 0; g < 800; g++) {
      const day = new Date(cur); day.setHours(0, 0, 0, 0); const w = day.getDay();
      if (w > 0 && w < 6) for (const [s, e] of WIN) {
        const s1 = new Date(day); s1.setHours(s); const e1 = new Date(day); e1.setHours(e);
        const x = new Date(Math.max(s1, cur));
        if (e1 > x) { const av = (e1 - x) / 3.6e6; if (av >= left) return new Date(x.getTime() + left * 3.6e6); left -= av; }
      }
      day.setDate(day.getDate() + 1); cur = day;
    }
    return cur;
  }
  function workDays(a, b) {
    if (!a || !b) return 0;
    let n = 0; const d = toD(a + 'T00:00'), e = toD(b + 'T00:00');
    for (let g = 0; d <= e && g < 400; g++) { const w = d.getDay(); if (w > 0 && w < 6) n++; d.setDate(d.getDate() + 1); }
    return n;
  }

  /* ---------------------------------------------------------- bộ máy quy trình App.proc */
  const P = (App.proc = {});
  P.steps = (r) => ((App.process(r.ma_qt) || {}).tobe_steps || []);
  P.isAuto = (s) => !!(s && (s.auto || N(s.actor) === 'Hệ thống'));
  P.workHours = wh; P.addWorkHours = addWH;
  const accRoles = (ma) => { const a = D.accounts.find((x) => x.ma_cb === ma); return a ? a.roles : []; };
  const labOfAsset = (code) => { const e = D.equipment.find((x) => x.ma === code); return e ? D.labs.find((l) => l.ma === e.ptn) : null; };
  const leaveLen = (d) => workDays(d.from_date, d.to_date);
  const lastLuc = (r) => (r.lich_su || []).reduce((m, e) => (e.luc > m ? e.luc : m), '') || r.tao_luc;
  P.lastLuc = lastLuc;

  /* người/đơn vị xử lý bước i của hồ sơ r */
  P.resolve = function (r, i) {
    const p = App.process(r.ma_qt); if (!p) return null;
    const st = p.tobe_steps[i]; if (!st) return null;
    const a = N(st.actor), code = short(p.code), req = App.staff(r.ma_cb) || {}, d = r.du_lieu || {};
    const person = (ma, role) => ({ kind: 'person', actor: a, ma_cb: ma, role: role || null, note: ma === req.ma_cb ? 'req' : '' });
    if (P.isAuto(st)) return { kind: 'auto', actor: a };
    if (code === 'HC-02' && i === 1 && d.handover_to) return person(d.handover_to);
    if (code === 'HC-02' && i === 2 && leaveLen(d) >= 3) return { kind: 'role', actor: 'BGH', role: 'BGH', note: 'leave3' };
    if (code === 'GD-02' && i === 2 && d.lecturer_id) return person(d.lecturer_id);
    if (code === 'NH-04' && (i === 3 || i === 4) && d.supervisor_id) return person(d.supervisor_id);
    if (['GV', 'TG', 'NCV'].includes(a)) return person(req.ma_cb);
    if (a === 'KTV') {
      if (req.vi_tri === 'KTV') return person(req.ma_cb);
      const lab = labOfAsset(d.asset_code);
      const k = lab ? lab.ktv : (D.staff.find((s) => s.vi_tri === 'KTV' && s.bo_mon === req.bo_mon) || {}).ma_cb;
      return person(k || req.ma_cb, 'KTV');
    }
    if (a === 'CVHT') {
      if (accRoles(req.ma_cb).includes('CVHT')) return person(req.ma_cb);
      const s = D.students.find((x) => x.mssv === d.student_id);
      return s ? person(s.cvht, 'CVHT') : person(req.ma_cb);
    }
    if (a === 'TBM') {
      const lab = code === 'PTN-01' ? labOfAsset(d.asset_code) : null;
      const tb = lab ? App.staff(lab.phu_trach) : D.staff.find((s) => s.vi_tri === 'TBM' && s.bo_mon === req.bo_mon);
      if (!tb || tb.ma_cb === req.ma_cb) return { kind: 'faculty', actor: 'TK', area: null, note: 'esc', exclude: req.ma_cb };
      return person(tb.ma_cb, 'TBM');
    }
    if (a === 'TK' || a === 'PTK') {
      /* Trưởng Khoa không tự phê duyệt hồ sơ của chính mình (trừ quy trình do Khoa khởi tạo) → chuyển BGH */
      if (req.vi_tri === 'TK' && N(p.tobe_steps[0].actor) !== 'TK') return { kind: 'role', actor: 'BGH', role: 'BGH', note: 'esc' };
      return { kind: 'faculty', actor: a, area: code === 'HC-05' ? 'khcn_dn' : AREA[p.group] || null, exclude: N(p.tobe_steps[0].actor) !== 'TK' ? req.ma_cb : null };
    }
    if (a === 'BGH') return { kind: 'role', actor: a, role: 'BGH' };
    if (UNIT_ROLE[a]) return { kind: 'role', actor: a, role: UNIT_ROLE[a] };
    return { kind: 'unit', actor: a, sv: a === 'SV' };
  };
  P.matches = function (u, res) {
    if (!u || !res) return false;
    if (res.kind === 'person') return u.ma_cb === res.ma_cb && (!res.role || u.role === res.role);
    if (res.kind === 'faculty') return u.ma_cb !== res.exclude && (u.role === 'TK' || (u.role === 'PTK' && (!res.area || u.phu_trach === res.area)));
    if (res.kind === 'role') return u.role === res.role;
    return false;
  };
  P.canSimulate = (u, res, r) => !!(u && res && res.kind === 'unit' && (['TK', 'PTK', 'BGH'].includes(u.role) || /^CV_/.test(u.role) || (res.sv && u.ma_cb === r.ma_cb)));
  P.actorLabel = function (res) {
    if (!res) return '';
    if (res.kind === 'auto') return t('pr.rec.sys');
    if (res.kind === 'person') {
      const s = App.staff(res.ma_cb);
      return (s ? App.name(s, { title: true }) : res.ma_cb) + ' – ' + (res.role ? App.roleName(res.role) : unitName(res.actor)) + (res.note === 'req' ? ' (' + t('pr.u.req') + ')' : '');
    }
    if (res.kind === 'faculty') return App.roleName('TK') + ' / ' + App.roleName('PTK') + (res.area ? ' (' + t('pr.u.area') + ': ' + t(res.area === 'dao_tao_sv' ? 'pr.u.dt' : 'pr.u.kh') + ')' : '') + (res.note === 'esc' ? ' – ' + t('pr.u.esc') : '');
    if (res.kind === 'role') return (res.actor !== 'BGH' ? unitName(res.actor) + ' – ' : '') + App.roleName(res.role) + (res.note === 'leave3' ? ' (' + t('pr.u.leave3') + ')' : res.note === 'esc' ? ' – ' + t('pr.u.esc') : '');
    return unitName(res.actor) + ' (' + t('pr.u.unit') + ')';
  };

  /* bước được bỏ qua tự động (ngoại lệ không phát sinh) */
  P.skipReason = function (r, i) {
    const code = short(r.ma_qt), d = r.du_lieu || {};
    if (code === 'NS-01' && i === 2) { const s = App.staff(r.ma_cb) || {}; if (s.trang_thai_xac_thuc !== 'cho_xac_thuc' && !N(d.extra_info).trim()) return 'verified'; }
    if (code === 'NS-03' && i === 3 && d.new_lecturer === 'no') return 'not_new';
    if (code === 'PTN-01' && i === 1 && d.asset_code) { const e = D.equipment.find((x) => x.ma === d.asset_code); if (e && e.nguyen_gia_trieu < 100) return 'common_eq'; }
    return null;
  };
  P.returnedAt = function (r) {
    if (r.buoc_tra_lai != null) return r.buoc_tra_lai;
    const e = (r.lich_su || []).slice().reverse().find((x) => x.kq === 'tra_lai' || /^Trả lại/.test(x.ket_qua || ''));
    return e ? e.buoc : r.buoc_hien_tai;
  };
  P.current = (r) => (r.trang_thai === 'tra_lai' ? P.returnedAt(r) : r.buoc_hien_tai);
  const kqOf = (e) => e.kq || (/^Trả lại/.test(e.ket_qua || '') ? 'tra_lai' : /^Từ chối/.test(e.ket_qua || '') ? 'tu_choi' : 'dong_y');
  P.kqLabel = (e) => t('pr.kq.' + kqOf(e)) + (kqOf(e) === 'bo_qua' && e.ly_do ? ' – ' + t('pr.skip.' + e.ly_do) : '');

  function docNo(r) {
    const p = App.process(r.ma_qt) || {};
    const n = 100 + App.requests().filter((x) => x.so_vb).length + 1;
    const owner = N(p.owner || '').replace(/^P\./, '').replace('Khoa/BM', 'EE');
    return short(p.code) === 'NS-01' ? pad(n) + '/GXN-ĐHQT' : n + '/ĐHQT-' + owner;
  }
  const sigSerial = () => 'IUCA-' + Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, '0');
  /* chạy các bước tự động / bỏ qua liên tiếp, kết thúc hồ sơ khi hết bước */
  function runAuto(r, base) {
    const t0 = toD(base); let k = 0;
    r.lich_su = r.lich_su || []; r.chu_ky = r.chu_ky || [];
    for (let g = 0; g < 30 && r.trang_thai === 'dang_xu_ly'; g++) {
      const steps = P.steps(r), i = r.buoc_hien_tai;
      if (i >= steps.length) { r.trang_thai = 'hoan_thanh'; r.hoan_thanh_luc = lastLuc(r); if (!r.so_vb) { r.so_vb = docNo(r); r.ngay_vb = r.hoan_thanh_luc; } break; }
      const st = steps[i], why = P.skipReason(r, i);
      if (!P.isAuto(st) && !why) break;
      k++; const luc = iso(new Date(t0.getTime() + k * 60000));
      r.lich_su.push(why ? { buoc: i, luc, kq: 'bo_qua', ly_do: why, ket_qua: 'Bỏ qua – ' + why, nguoi: 'HT' } : { buoc: i, luc, kq: 'auto', ket_qua: 'Hệ thống xử lý tự động', nguoi: 'HT' });
      if (!why && st.esign) {
        if (!r.so_vb) { r.so_vb = docNo(r); r.ngay_vb = luc; }
        r.chu_ky.push({ buoc: i, loai: 'co_quan', nguoi: 'HT', luc, cert: 'IU-CA (giả lập) – chữ ký số cơ quan', serial: sigSerial(), hash: 'pending' });
      }
      r.buoc_hien_tai = i + 1;
    }
    return r;
  }
  /* băm SHA-256 nội dung cho các chữ ký còn 'pending' */
  async function sealHashes(r) {
    for (const s of r.chu_ky || []) if (s.hash === 'pending') s.hash = await App.sha256(JSON.stringify({ id: r.id, ma_qt: r.ma_qt, ma_cb: r.ma_cb, du_lieu: r.du_lieu || {}, buoc: s.buoc, luc: s.luc, nguoi: s.nguoi }));
    return r;
  }
  /* lưu ngay (đồng bộ), băm chữ ký sau rồi cập nhật lại bản lưu */
  function persist(r) {
    App.saveRequest(r);
    if ((r.chu_ky || []).some((x) => x.hash === 'pending')) sealHashes(clone(r)).then((h) => { const cur = App.requests().find((x) => x.id === r.id); if (cur) App.saveRequest(Object.assign({}, cur, { chu_ky: (cur.chu_ky || []).map((c) => { const m = h.chu_ky.find((y) => y.buoc === c.buoc && y.luc === c.luc && y.serial === c.serial); return m && c.hash === 'pending' ? Object.assign({}, c, { hash: m.hash }) : c; }) })); });
    return r;
  }
  function notifyNext(r) {
    const p = App.process(r.ma_qt) || {}, link = '#/processes/hs/' + r.id, head = r.id + ' – ' + p.name_vi + ': ';
    if (r.trang_thai === 'hoan_thanh') return App.notify(r.ma_cb, head + 'đã hoàn thành' + (r.so_vb ? ' (số ' + r.so_vb + ')' : ''), link);
    if (r.trang_thai === 'tra_lai') return App.notify(r.ma_cb, head + 'bị trả lại, cần bổ sung', link);
    if (r.trang_thai === 'tu_choi') return App.notify(r.ma_cb, head + 'bị từ chối', link);
    if (r.trang_thai !== 'dang_xu_ly') return;
    const res = P.resolve(r, r.buoc_hien_tai), msg = head + 'chờ xử lý bước ' + (r.buoc_hien_tai + 1);
    if (!res) return;
    if (res.kind === 'person') App.notify(res.ma_cb, msg, link);
    else if (res.kind === 'faculty') { App.notify('TK', msg, link); App.notify('PTK', msg, link); }
    else if (res.kind === 'role') App.notify(res.role, msg, link);
  }
  /* các bước tự động còn treo trong dữ liệu mẫu được hệ thống chạy ngay */
  P.tick = function () {
    if (P._busy) return; P._busy = true;
    try {
      App.requests().forEach((r0) => {
        if (r0.trang_thai !== 'dang_xu_ly') return;
        const n = P.steps(r0).length, st = P.steps(r0)[r0.buoc_hien_tai];
        if (!n || (st && !P.isAuto(st) && !P.skipReason(r0, r0.buoc_hien_tai))) return;
        persist(runAuto(clone(r0), lastLuc(r0)));
      });
    } finally { P._busy = false; }
  };
  P.pendingFor = function (u) {
    u = u || App.user(); if (!u) return [];
    P.tick();
    return App.requests().filter((r) => r.trang_thai === 'dang_xu_ly' && r.buoc_hien_tai < P.steps(r).length && P.matches(u, P.resolve(r, r.buoc_hien_tai)));
  };
  P.slaTotal = (r) => P.steps(r).reduce((a, s) => a + (+s.sla_hours || 0), 0);
  P.elapsed = (r) => wh(toD(r.tao_luc), r.trang_thai === 'hoan_thanh' || r.trang_thai === 'tu_choi' ? toD(lastLuc(r)) : App.now());
  P.withinSla = (r) => P.elapsed(r) <= Math.max(P.slaTotal(r), 0.5);
  P.stepSla = function (r) {
    const st = P.steps(r)[r.buoc_hien_tai]; if (!st) return null;
    const sla = +st.sla_hours || 0, start = toD(lastLuc(r)), now = App.now();
    const used = wh(start, now), due = addWH(start, sla), pct = sla ? used / sla : 0;
    return { sla, start, due, used, left: sla - used, pct, cls: !sla ? 'info' : pct > 1 ? 'bad' : pct > 0.75 ? 'warn' : 'ok' };
  };
  P.nextId = function () {
    const n = App.requests().reduce((m, r) => Math.max(m, +(String(r.id).split('-').pop()) || 0), 0);
    return 'HS-2026-' + String(n + 1).padStart(4, '0');
  };
  /* bước sẽ được hoàn thành ngay khi nộp (để hỏi MFA/ký số trước) */
  P.peekSubmit = function (r) {
    const c = clone(r); c.trang_thai = 'dang_xu_ly'; c.buoc_hien_tai = 0; runAuto(c, iso(App.now()));
    const i = c.buoc_hien_tai, st = P.steps(c)[i];
    if (c.trang_thai !== 'dang_xu_ly' || !st) return null;
    const u = App.user(), res = P.resolve(c, i);
    const ok = P.matches(u, res) || (res && res.kind === 'person' && res.ma_cb === c.ma_cb) || (res && res.sv) || (i === 0 && !st.mfa);
    return ok ? { i, st } : null;
  };
  P.submit = function (req) {
    const u = App.user(), now = iso(App.now());
    const r = clone(req); r.trang_thai = 'dang_xu_ly'; r.buoc_hien_tai = 0; r.nop_luc = now; r.lich_su = r.lich_su || []; r.chu_ky = r.chu_ky || [];
    const pk = P.peekSubmit(r);
    runAuto(r, now);
    if (pk && r.buoc_hien_tai === pk.i && r.trang_thai === 'dang_xu_ly') {
      r.lich_su.push({ buoc: pk.i, luc: now, kq: 'nop', ket_qua: 'Nộp hồ sơ', nguoi: u.ma_cb, vai_tro: u.role });
      if (pk.st.esign) r.chu_ky.push({ buoc: pk.i, loai: 'ca_nhan', nguoi: u.ma_cb, vai_tro: u.role, luc: now, cert: 'IU-CA (giả lập)', serial: sigSerial(), hash: 'pending' });
      r.buoc_hien_tai = pk.i + 1; runAuto(r, now);
    }
    persist(r);
    App.audit('NOP_HO_SO', 'Nộp hồ sơ ' + r.id + ' – ' + r.ma_qt, r.id, 'Giải quyết thủ tục hành chính nội bộ');
    if (pk && pk.st.esign) App.audit('KY_SO', 'Ký số khi nộp hồ sơ ' + r.id + ' (IU-CA giả lập)', r.id);
    notifyNext(r);
    return r;
  };
  P.create = function (code, data, opts) {
    const u = App.user(); opts = opts || {};
    const r = { id: P.nextId(), ma_qt: code, ma_cb: u.ma_cb, tao_luc: iso(App.now()), trang_thai: 'nhap', buoc_hien_tai: 0, lich_su: [], du_lieu: data || {}, chu_ky: [], vai_tro_tao: u.role };
    if (opts.hien_thi) r.hien_thi = opts.hien_thi;
    if (opts.nguon) r.nguon = opts.nguon;
    if (opts.draft) { App.saveRequest(r); App.audit('TAO_NHAP', 'Lưu nháp hồ sơ ' + r.id + ' – ' + code, r.id); return r; }
    return P.submit(r);
  };
  P.resubmit = function (req, data, extra) {
    const u = App.user(), now = iso(App.now()), r = clone(req);
    if (data) r.du_lieu = data;
    if (extra) Object.assign(r, extra);
    const i = P.returnedAt(r);
    r.trang_thai = 'dang_xu_ly'; r.buoc_hien_tai = i; delete r.buoc_tra_lai;
    r.lich_su = (r.lich_su || []).concat([{ buoc: i, luc: now, kq: 'gui_lai', ket_qua: 'Gửi lại sau bổ sung', nguoi: u.ma_cb, vai_tro: u.role }]);
    App.saveRequest(r); App.audit('GUI_LAI', 'Gửi lại hồ sơ ' + r.id + ' sau bổ sung', r.id); notifyNext(r);
    return r;
  };
  P.withdraw = function (req) {
    const u = App.user(), r = clone(req);
    r.trang_thai = 'huy'; r.lich_su = (r.lich_su || []).concat([{ buoc: r.buoc_hien_tai, luc: iso(App.now()), kq: 'huy', ket_qua: 'Rút hồ sơ', nguoi: u.ma_cb, vai_tro: u.role }]);
    App.saveRequest(r); App.audit('RUT_HO_SO', 'Rút hồ sơ ' + r.id, r.id); return r;
  };
  /* result: 'dong_y' | 'tra_lai' | 'tu_choi'; opt.sim = mô phỏng đơn vị khác */
  P.advance = function (req, result, note, opt) {
    opt = opt || {};
    const u = App.user(), now = iso(App.now()), r = clone(req), i = r.buoc_hien_tai, st = P.steps(r)[i] || {};
    const KQ = { dong_y: 'Đồng ý', tra_lai: 'Trả lại', tu_choi: 'Từ chối' };
    const e = { buoc: i, luc: now, kq: result, ket_qua: KQ[result] + (note ? ' – ' + note : ''), ghi_chu: note || '', nguoi: u.ma_cb, vai_tro: u.role };
    if (opt.sim) { e.mo_phong = true; e.don_vi = st.actor; }
    r.lich_su = (r.lich_su || []).concat([e]); r.chu_ky = r.chu_ky || [];
    if (result === 'dong_y') {
      if (st.esign) r.chu_ky.push(opt.sim ? { buoc: i, loai: 'don_vi', nguoi: u.ma_cb, don_vi: st.actor, luc: now, cert: 'IU-CA (giả lập) – mô phỏng ' + st.actor, serial: sigSerial(), hash: 'pending' }
        : { buoc: i, loai: 'ca_nhan', nguoi: u.ma_cb, vai_tro: u.role, luc: now, cert: 'IU-CA (giả lập)', serial: sigSerial(), hash: 'pending' });
      r.buoc_hien_tai = i + 1; r.trang_thai = 'dang_xu_ly'; runAuto(r, now);
    } else if (result === 'tra_lai') { r.trang_thai = 'tra_lai'; r.buoc_tra_lai = i; }
    else if (result === 'tu_choi') r.trang_thai = 'tu_choi';
    persist(r);
    const A = { dong_y: 'DUYET', tra_lai: 'TRA_LAI', tu_choi: 'TU_CHOI' }[result];
    App.audit(opt.sim ? 'MO_PHONG_DON_VI' : A, (opt.sim ? 'Mô phỏng ' + st.actor + ': ' : '') + KQ[result] + ' bước ' + (i + 1) + ' hồ sơ ' + r.id + (note ? ' – ' + note : ''), r.id, 'Giải quyết hồ sơ quy trình');
    if (result === 'dong_y' && st.esign && !opt.sim) App.audit('KY_SO', 'Ký số bước ' + (i + 1) + ' hồ sơ ' + r.id + ' (IU-CA giả lập)', r.id);
    notifyNext(r);
    return r;
  };
  P.canView = function (u, r) {
    if (!u || !r) return false;
    if (u.ma_cb === r.ma_cb || LEAD.includes(u.role)) return true;
    const req = App.staff(r.ma_cb) || {};
    if (u.role === 'TBM' && req.bo_mon === u.bo_mon) return true;
    if ((r.lich_su || []).some((e) => e.nguoi === u.ma_cb)) return true;
    return P.steps(r).some((s, i) => { const res = P.resolve(r, i); return res && res.kind === 'person' && res.ma_cb === u.ma_cb; });
  };

  /* ---------------------------------------------------------- tiện ích hiển thị */
  const statusBadge = (s) => App.ui.badge(t('pr.st.' + s), { nhap: '', dang_xu_ly: 'info', tra_lai: 'warn', hoan_thanh: 'ok', tu_choi: 'bad', huy: '' }[s]);
  const scopeBadge = (s) => App.ui.badge(t('pr.sc.' + s), SCOPES[s]);
  const asisMean = (p) => (p.asis_days_min + p.asis_days_max) / 2;
  const reduction = (p) => (asisMean(p) ? (asisMean(p) - p.tobe_days) / asisMean(p) * 100 : 0);
  const stepBadges = (s) => (P.isAuto(s) ? App.ui.badge(t('pr.auto'), 'info') + ' ' : '') + (s.mfa ? App.ui.badge(t('pr.mfa'), 'navy') + ' ' : '') + (s.esign ? App.ui.badge(t('pr.esign'), 'orange') : '');
  function slaChip(r) {
    if (r.trang_thai !== 'dang_xu_ly') return '';
    const s = P.stepSla(r); if (!s) return '';
    if (!s.sla) return App.ui.badge(t('pr.sla.none'), 'info');
    return `<span title="${esc(t('pr.sla.due', { d: App.fmtDT(iso(s.due)) }))}">${App.ui.badge(s.left >= 0 ? t('pr.sla.left', { h: fmt(s.left) }) : t('pr.sla.over', { h: fmt(-s.left) }), s.cls)}</span>`;
  }
  const staffName = (ma) => { if (!ma || ma === 'HT') return t('pr.rec.sys'); const s = App.staff(ma); return s ? App.name(s, { title: true }) : ma; };
  const roleApplies = (p, u) => (p.applies_to || []).includes(u.role);
  const hrefQ = (code) => '#/processes/qt/' + encodeURIComponent(code);
  const hrefNew = (code) => '#/processes/new/' + encodeURIComponent(code);

  /* ---------------------------------------------------------- biểu mẫu: tự điền từ bản ghi vàng */
  const OPTS = {
    letter_lang: [['both', 'Song ngữ Việt – Anh', 'Bilingual (VI + EN)'], ['vi', 'Tiếng Việt', 'Vietnamese'], ['en', 'Tiếng Anh', 'English']],
    new_lecturer: [['yes', 'Có – cần giảng thử', 'Yes – trial lecture needed'], ['no', 'Không – đã từng dạy tại Trường', 'No – has taught at IU']],
    assistant_area: [['dt', 'Đào tạo', 'Academic affairs'], ['kh', 'Khoa học công nghệ', 'Research'], ['sv', 'Công tác sinh viên', 'Student affairs'], ['kt', 'Khảo thí – bảo đảm chất lượng', 'Testing & QA']],
    reason_type: [['truoc', 'Trước ngày thi (ốm đau, tai nạn)', 'Before the exam (illness, accident)'], ['cu_di', 'Được Trường cử đi', 'Sent on official duty'], ['khan', 'Khẩn cấp', 'Emergency'], ['dac_biet', 'Đặc biệt (trình BGH)', 'Special (to the Rector)']],
    materials_allowed: [['co', 'Được sử dụng tài liệu', 'Open book'], ['khong', 'Không sử dụng tài liệu', 'Closed book']],
    material_type: [['gt', 'Giáo trình', 'Textbook'], ['ck', 'Sách chuyên khảo', 'Monograph'], ['tk', 'Sách tham khảo', 'Reference book'], ['hd', 'Sách hướng dẫn', 'Guidebook']],
    project_level: [['cs', 'Cấp cơ sở', 'University level'], ['A', 'ĐHQG-HCM loại A', 'VNU-HCM type A'], ['B', 'ĐHQG-HCM loại B', 'VNU-HCM type B'], ['C', 'ĐHQG-HCM loại C', 'VNU-HCM type C']],
    output_type: [['bao', 'Bài báo tạp chí', 'Journal article'], ['hnqt', 'Báo cáo hội nghị quốc tế', 'International conference paper'], ['sc', 'Bằng sáng chế', 'Patent'], ['gphi', 'Giải pháp hữu ích', 'Utility solution'], ['qtg', 'Quyền tác giả', 'Copyright']],
    'KH-03:doc_type': [['hd3', 'Hợp đồng 3 bên', 'Tripartite contract'], ['MOU', 'MOU', 'MOU'], ['MOA', 'MOA', 'MOA'], ['LoC', 'Thư cam kết (LoC)', 'Letter of commitment'], ['LoI', 'Thư ý định (LoI)', 'Letter of intent']],
    'HC-05:doc_type': [['MOU', 'MOU – Bản ghi nhớ', 'MOU'], ['MOA', 'MOA – Bản thỏa thuận', 'MOA']],
    has_finance: [['khong', 'Không', 'No'], ['co', 'Có', 'Yes']],
    scope: [['trong', 'Trong nước', 'Domestic'], ['ngoai', 'Ngoài nước', 'International']],
    commitment: [['ok', 'Tôi cam kết thực hiện đúng quy định', 'I commit to comply with the regulations']],
    event_type: [['ket_hon', 'Kết hôn', 'Wedding'], ['sinh_con', 'Sinh con', 'Childbirth'], ['nam_vien', 'Nằm viện', 'Hospitalisation'], ['phau_thuat', 'Phẫu thuật', 'Surgery'], ['tang', 'Tang tứ thân phụ mẫu', 'Bereavement']],
    consent: [['ok', 'Đồng ý xử lý dữ liệu cá nhân cho mục đích này', 'I consent to processing my personal data for this purpose']],
    partner_country: [['JP', 'Nhật Bản', 'Japan'], ['KR', 'Hàn Quốc', 'Korea'], ['US', 'Hoa Kỳ', 'United States'], ['AU', 'Úc', 'Australia'], ['DE', 'Đức', 'Germany'], ['FR', 'Pháp', 'France'], ['TW', 'Đài Loan', 'Taiwan'], ['OT', 'Khác', 'Other']],
    cooperation_scope: [['nc', 'Nghiên cứu đơn ngành', 'Single-discipline research'], ['tt', 'Thực tập', 'Internship'], ['hl', 'Học liệu', 'Learning materials'], ['ht', 'Hội thảo', 'Workshops'], ['khac', 'Khác', 'Other']],
    referral: [['khong', 'Không', 'No'], ['co', 'Có – giới thiệu P.CTSV hỗ trợ', 'Yes – refer to Student Affairs']],
    'PTN-01:purpose': [['gd', 'Giảng dạy', 'Teaching'], ['dt', 'Đề tài', 'Research project'], ['sv', 'Sinh viên làm KLTN/NCKH', 'Student project']],
    severity: [['dung', 'Dừng giảng dạy', 'Teaching stopped'], ['dt', 'Ảnh hưởng đề tài', 'Affects research'], ['nhe', 'Chưa ảnh hưởng ngay', 'No immediate impact']],
    vl_degree: [['TS', 'Tiến sĩ', 'PhD'], ['PGS.TS', 'PGS.TS', 'Assoc. Prof., PhD'], ['GS.TS', 'GS.TS', 'Prof., PhD'], ['ThS', 'Thạc sĩ', 'Master']],
    'KH-02:funding_source': [['khac', 'Nguồn khác (không thuộc NSNN)', 'Other (non-state)'], ['nsnn', 'Ngân sách nhà nước', 'State budget']],
    'PTN-02:funding_source': [['dt', 'Kinh phí đề tài', 'Research project'], ['khoa', 'Kinh phí Khoa', 'Faculty budget'], ['truong', 'Kinh phí Trường', 'University budget']],
    relation: [['ban_than', 'Bản thân', 'Self'], ['bo_me', 'Cha/mẹ', 'Parent'], ['vo_chong', 'Vợ/chồng', 'Spouse'], ['con', 'Con', 'Child']],
    last_rating: [['xs', 'Hoàn thành xuất sắc nhiệm vụ', 'Excellent'], ['tot', 'Hoàn thành tốt nhiệm vụ', 'Good'], ['ht', 'Hoàn thành nhiệm vụ', 'Satisfactory']],
    exam_type: [['ck_tl', 'Cuối kỳ – tự luận', 'Final – essay'], ['ck_tn', 'Cuối kỳ – trắc nghiệm', 'Final – multiple choice'], ['gk', 'Giữa kỳ', 'Midterm'], ['vd', 'Vấn đáp', 'Oral']],
    safety_cert: [['co', 'Đã huấn luyện an toàn (tự khai)', 'Safety training done (self-declared)'], ['chua', 'Chưa huấn luyện', 'Not trained yet']],
  };
  const optsFor = (p, k) => (OPTS[short(p.code) + ':' + k] || OPTS[k] || []).map(([v, vi, en]) => ({ v, l: EN() ? en : vi }));
  const yearsAt = (s) => { const ms = App.today - toD((s.ngay_vao_truong || '') + 'T00:00'); return ms > 0 ? ms / (365.25 * 864e5) : 0; };
  const leaveEnt = (s) => { const L = (D.rules && D.rules.leave) || {}; const base = ((L.annual_days || [])[0] || {}).days || 12; const ev = (L.seniority_bonus || {}).every_years || 5; return base + Math.floor(yearsAt(s) / ev); };
  const leaveTaken = (ma) => App.requests().filter((r) => r.ma_cb === ma && ['HC-02', 'HC-03'].includes(short(r.ma_qt)) && r.trang_thai === 'hoan_thanh' && /^2026/.test((r.du_lieu || {}).from_date || '')).reduce((a, r) => a + leaveLen(r.du_lieu), 0);
  const secLabel = (x) => x.ma_hp + ' – ' + (EN() ? x.ten_en : x.ten_vi || x.ten_en) + ' · ' + (EN() ? 'group ' : 'nhóm ') + x.nhom + ' · HK' + x.hoc_ky + ' ' + x.nam_hoc;
  function sectionsFor(u, deptWide) {
    let rows = D.teaching.filter((x) => x.ma_cb === u.ma_cb);
    if (deptWide || !rows.length) rows = D.teaching.filter((x) => { const s = App.staff(x.ma_cb); return s && s.bo_mon === u.bo_mon && x.nam_hoc === '2026-2027'; });
    return rows.slice().sort((a, b) => (b.nam_hoc + b.hoc_ky).localeCompare(a.nam_hoc + a.hoc_ky)).slice(0, 40).map((x) => ({ v: x.id, l: secLabel(x) }));
  }
  function studentsFor(p, u, st) {
    const code = short(p.code);
    let list;
    if (code === 'NH-01' || code === 'NH-02') { list = D.students.filter((s) => s.cvht === u.ma_cb); const cls = st.advisee_class || st.homeroom_class; if (cls) list = list.filter((s) => s.lop === cls); }
    else if (code === 'GD-02') { const mine = new Set(D.teaching.filter((x) => x.ma_cb === u.ma_cb && x.nam_hoc === '2026-2027').map((x) => x.ma_hp)); const ids = new Set(D.current_term.filter((c) => mine.has(c.ma_hp)).map((c) => c.mssv)); list = D.students.filter((s) => ids.has(s.mssv)); }
    else list = D.students.filter((s) => s.khoa <= 2023);
    return list.map((s) => ({ v: s.mssv, l: s.mssv + ' – ' + App.name(s) + ' (' + s.lop + ')' }));
  }
  const staffOpts = (u, self) => D.staff.filter((s) => s.loai === 'khoa' && (self || s.ma_cb !== u.ma_cb)).map((s) => ({ v: s.ma_cb, l: s.ma_cb + ' – ' + App.name(s, { title: true }) }));

  function spec(p, f, st, u) {
    const k = f.key, src = N(f.src), alias = (D.metadata.src_aliases || {})[f.src], code = short(p.code), val = st[k];
    const S = (mode, v, disp, extra) => Object.assign({ mode, v: v == null ? '' : v, disp: disp == null ? (v == null ? '' : String(v)) : disp, alias, src }, extra || {});
    const pick = (opts, def) => {
      if (!opts.length) return S('manual', val, null, { opts: f.type === 'select' ? optsFor(p, k) : null });
      const v = val != null && val !== '' ? val : def || ''; const o = opts.find((x) => x.v === v);
      return S('pick', o ? v : '', o ? o.l : '', { opts });
    };
    const need = () => S('dep', '', '', { need: true });
    if (src === 'form.upload') return S('upload', val);
    if (src === 'form.input') return S('input', val, null, { opts: f.type === 'select' ? optsFor(p, k) : null });
    if (src === 'form.computed') {
      if (k === 'support_amount') { const pp = D.papers.find((x) => x.id === st.doi); if (!pp) return need(); const s = App.calc.paperHours(pp).support || 0; return S('calc', s, App.fmtNum(s, 0) + ' đ'); }
      if (k === 'norm_check') {
        const m = (+st.estimate || 0) / 1e6; if (!m) return need();
        const l = m <= 50 ? (EN() ? '≤ 50 million – simplified quotation (QĐ 596)' : '≤ 50 triệu – chào giá rút gọn (QĐ 596)') : m <= 100 ? (EN() ? '50–100 million – full procurement branch' : '50–100 triệu – nhánh đầy đủ (lập KHLCNT)') : (EN() ? '> 100 million – outside this process' : '> 100 triệu – ngoài phạm vi quy trình');
        return S('calc', m <= 100 ? 'ok' : 'over', l);
      }
      return S('input', val);
    }
    if (code === 'NS-03' && /^vl_/.test(k)) return S('input', val, null, { opts: f.type === 'select' ? optsFor(p, k) : null });
    if (src === 'core.person.staff_id' && k !== 'staff_id') return pick(staffOpts(u, k === 'supervisor_id'), k === 'supervisor_id' ? u.ma_cb : '');
    if (src === 'core.teaching.lecturer_id') return pick(staffOpts(u, true), u.ma_cb);
    if (src === 'core.employment.start_date' && k === 'nominee_start') { const s = App.staff(st.nominee_id); return s ? S('dep', s.ngay_vao_truong, App.fmtDate(s.ngay_vao_truong)) : need(); }
    if (k === 'current_assistants') { const l = D.staff.filter((s) => (s.kiem_nhiem || []).some((x) => /Trợ lý/i.test(x))).map((s) => App.name(s)); return S('calc', l.join('; ') || '0', l.length ? l.join('; ') : (EN() ? '0 – no faculty assistant yet' : '0 – chưa có trợ lý khoa')); }
    if (src.indexOf('core.student.') === 0) {
      if (code === 'NH-04') return S('manual', val);
      if (k === 'advisee_class' || k === 'homeroom_class') { const cls = [...new Set(D.students.filter((s) => s.cvht === u.ma_cb).map((s) => s.lop))]; return pick(cls.map((c) => ({ v: c, l: c })), cls.length === 1 ? cls[0] : ''); }
      if (k === 'student_id') return pick(studentsFor(p, u, st));
      if (src === 'core.student.count_by_unit') { const n = D.students.filter((s) => s.nganh === u.bo_mon).length || D.students.length; return S('calc', n, String(n)); }
      if (alias == null) return S('manual', val);
      const stu = D.students.find((s) => s.mssv === st.student_id);
      if (!stu) return need();
      const SS = App.calc.student(stu.mssv), terms = SS.terms.filter((x) => x.sem != null), lt = terms[terms.length - 1] || {};
      if (src === 'core.student.full_name') return S('dep', stu.ho_ten, App.name(stu));
      if (src === 'core.student.major_code') return S('dep', stu.nganh, App.L(App.dept(stu.nganh)) + ' · ' + stu.lop);
      if (src === 'core.student.gpa_term') return S('dep', lt.sem, fmt(lt.sem, 2) + ' / 4 (' + App.calc.termLabel(lt.k || '') + ')');
      if (src === 'core.student.gpa_cumulative') return S('dep', lt.cum, fmt(lt.cum, 2) + ' / 4');
      if (src === 'core.student.credits_failed') return S('dep', lt.owed || 0, String(lt.owed || 0));
      if (src === 'core.student.academic_warning_level') { const rk = App.calc.risk(SS); return S('dep', rk.level, App.calc.riskLabel(rk.level)); }
      if (src === 'core.student.conduct_system_score') { const dl = (stu.drl || []).slice(-1)[0]; return S('dep', dl ? dl.diem : '', dl ? dl.diem + ' (' + App.calc.termLabel(dl.ky) + ')' : ''); }
      if (src === 'core.student.course_grades[]') { const sec = D.teaching.find((x) => x.id === st.course_code); if (!sec) return need(); const b = SS.best[sec.ma_hp]; return b ? S('dep', b.tk, fmt(b.tk, 1) + ' / 100 (' + b.chu + ')') : S('dep', '', t('pr.f.nograde')); }
      return S('dep', stu[alias] || '', String(stu[alias] || ''));
    }
    if (src === 'core.asset.asset_code') {
      const labs = D.labs.filter((l) => l.bo_mon === u.bo_mon).map((l) => l.ma);
      return pick(D.equipment.filter((e) => !labs.length || labs.includes(e.ptn)).map((e) => ({ v: e.ma, l: e.ma + ' – ' + e.ten + ' (' + e.ptn + ', ' + e.tinh_trang + ')' })));
    }
    if (src === 'core.teaching.class_section_id' || src === 'core.teaching.course_code') return pick(sectionsFor(u, code === 'NS-03'));
    if (src === 'core.teaching.periods') { const sec = D.teaching.find((x) => x.id === st.course_code || x.id === st.class_section); if (!sec) return need(); const n = App.calc.sectionHours(sec).periods; return S('dep', n, String(n)); }
    if (src === 'core.qualification.items[]') return pick((u.docs || []).map((d, i) => ({ v: 'doc' + i, l: d.title_vi + ' – ' + d.issuer + ' (' + d.year + ')' })).concat([{ v: 'new', l: EN() ? 'New diploma/certificate (upload)' : 'Văn bằng/chứng chỉ mới (tải lên)' }]));
    if (src === 'core.research.publications[].doi') return pick(D.papers.filter((x) => x.ma_cb === u.ma_cb && x.doi).map((x) => ({ v: x.id, l: x.doi + ' – ' + x.ten.slice(0, 70) })));
    if (/^core\.research\.publications\[\]\.(quartile|author_role|iu_author_count)$/.test(src)) {
      const pp = D.papers.find((x) => x.id === st.doi); if (!pp) return need();
      if (/quartile/.test(src)) return S('dep', pp.xep_hang || pp.chi_muc, (pp.xep_hang || '–') + ' · ' + pp.chi_muc);
      if (/author_role/.test(src)) return S('dep', pp.vai_tro, pp.vai_tro);
      const n = App.calc.paperHours(pp).N; return S('dep', n, String(n));
    }
    if (src === 'core.research.projects_active[].id') return pick(D.projects.filter((x) => x.ma_cb === u.ma_cb && /Đang|Trễ/.test(x.trang_thai)).map((x) => ({ v: x.id, l: x.id + ' – ' + x.ten.slice(0, 70) + ' (' + x.cap + ')' })));
    if (src === 'core.research.projects_active[]') { const l = D.projects.filter((x) => x.ma_cb === u.ma_cb && /Đang|Trễ/.test(x.trang_thai)); return S('calc', l.map((x) => x.id).join(', ') || '0', l.length ? l.map((x) => x.id + ' – ' + x.ten + ' (' + x.cap + ', ' + x.vai_tro + ')').join('; ') : t('pr.f.none')); }
    if (alias == null) return S('manual', val, null, { opts: f.type === 'select' ? optsFor(p, k) : null });
    if (/^calc:/.test(alias)) {
      const c = alias.slice(5), yr = st.academic_year || '2025-2026';
      if (c === 'academic_year') return pick([{ v: '2025-2026', l: '2025–2026' }, { v: '2026-2027', l: '2026–2027' }], '2025-2026');
      if (c === 'term') return S('calc', D.meta.current_term, App.calc.termLabel(D.meta.current_term));
      if (c === 'teaching_hours') { const y = App.calc.yearTeaching(u.ma_cb, yr); return S('calc', y.total, fmt(y.total) + ' (' + yr + ')'); }
      if (c === 'teaching_norm') { const y = App.calc.yearTeaching(u.ma_cb, yr); return S('calc', y.norm.teach, fmt(y.norm.teach) + (y.norm.reductions && y.norm.reductions.length ? ' – ' + y.norm.reductions.map((x) => x.label).join('; ') : '')); }
      if (c === 'research_hours') { const y = App.calc.yearResearch(u.ma_cb, yr); return S('calc', y.total, fmt(y.total) + ' / ' + y.norm + ' (' + yr + ')'); }
      if (c === 'supervision') { const who = st.supervisor_id || u.ma_cb; const n = D.supervision.filter((x) => x.ma_cb === who && x.loai === 'LVThS').length; return S('calc', n, String(n)); }
      if (c === 'bhxh_months') { const y = yearsAt(u), m = Math.floor(y * 12); return S('calc', m, t('pr.f.months', { m, y: fmt(y) })); }
      if (c === 'leave_entitlement') { const e = leaveEnt(u), d = leaveTaken(u.ma_cb); return S('calc', e, code === 'HC-03' ? t('pr.f.ent', { e, d }) : String(e), { srcNote: t('pr.f.entsrc', { s: ((D.rules.leave || {}).seniority_bonus || {}).source || '' }) }); }
      if (c === 'leave_taken') { const d = leaveTaken(u.ma_cb); return S('calc', d, String(d)); }
      return S('manual', val);
    }
    if (alias === 'input') return S('input', val);
    const raw = u[alias];
    if (raw == null || raw === '' || (Array.isArray(raw) && !raw.length && k !== 'concurrent_roles')) return S('manual', val);
    let disp = Array.isArray(raw) ? raw.join('; ') || '–' : String(raw);
    if (alias === 'bo_mon') disp = u.bo_mon ? App.L(App.dept(u.bo_mon)) + ' – ' + App.L(D.org.faculty) : u.don_vi;
    else if (alias === 'chuc_vu') disp = ((EN() && u.chuc_vu_en) || u.chuc_vu) + ' · ' + ((EN() && u.chuc_danh_en) || u.chuc_danh);
    else if (alias === 'trinh_do') disp = EN() ? ((u.hoc_ham === 'PGS' ? 'Assoc. Prof., ' : u.hoc_ham === 'GS' ? 'Prof., ' : '') + (u.trinh_do_en || u.trinh_do)) : ((u.hoc_ham ? u.hoc_ham + ', ' : '') + u.trinh_do);
    else if (alias === 'ngay_sinh' || alias === 'ngay_vao_truong') disp = App.fmtDate(raw);
    else if (alias === 'dang_vien') disp = raw ? (EN() ? 'Party member' : 'Đảng viên') : (EN() ? 'None' : 'Không');
    else if (alias === 'so_tai_khoan') disp = App.mask(raw, 'last4') + ' · ' + (u.ngan_hang || '');
    return S('core', Array.isArray(raw) ? raw.join('; ') : raw, disp);
  }
  const MODE_CHIP = { core: 'pr.m.core', calc: 'pr.m.calc', dep: 'pr.m.calc', pick: 'pr.m.pick', input: 'pr.m.input', upload: 'pr.m.upload', manual: 'pr.m.manual' };
  const LOCKED = ['core', 'calc', 'dep'];

  function fieldHTML(p, f, s) {
    const k = f.key, lab = esc(EN() ? f.label_en : f.label_vi) + (f.required ? ' <b style="color:#C53030">*</b>' : '');
    const locked = LOCKED.includes(s.mode);
    const wide = f.type === 'textarea' || (s.mode === 'pick' && s.opts && s.opts.some((o) => o.l.length > 60)) || (locked && String(s.disp).length > 70);
    let ctl;
    if (locked) ctl = `<input value="${esc(s.disp || '')}" readonly aria-readonly="true" style="background:#F1F3FA;color:#14164F" placeholder="${esc(s.need ? t('pr.f.need') : '')}" title="${esc(t('pr.m.locked'))}">`;
    else if (s.opts && s.opts.length) ctl = `<select data-f="${k}"><option value="">${t('pr.f.choose')}</option>${s.opts.map((o) => `<option value="${esc(o.v)}" ${o.v === s.v ? 'selected' : ''}>${esc(o.l)}</option>`).join('')}</select>`;
    else if (s.mode === 'upload' || f.type === 'file') ctl = `<input type="file" data-f="${k}" data-file accept=".pdf,.jpg,.png,.xlsx,.docx">${s.v ? `<span class="small muted">${esc(s.v)}</span>` : ''}`;
    else if (f.type === 'textarea') ctl = `<textarea data-f="${k}" rows="3">${esc(s.v)}</textarea>`;
    else ctl = `<input data-f="${k}" type="${f.type === 'number' ? 'number' : f.type === 'date' ? 'date' : 'text'}" value="${esc(s.v)}" ${k === 'estimate' ? 'data-re' : ''}>`;
    const chip = locked ? `<span class="chip" title="src: ${esc(f.src)} → ${esc(String(s.alias))}" style="background:#E6F4FA;border-color:#9ED3EA">&#128274; ${t(MODE_CHIP[s.mode])}</span>`
      : s.mode === 'pick' ? `<span class="chip" title="src: ${esc(f.src)}">${t('pr.m.pick')}</span>` : s.mode === 'manual' ? `<span class="small muted" style="font-weight:400">${t('pr.m.manual')}</span>` : '';
    return `<label style="${wide ? 'grid-column:1/-1' : ''}"><span style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">${lab} ${chip}</span>${ctl}${s.srcNote ? `<span class="small muted" style="font-weight:400">${esc(s.srcNote)}</span>` : ''}</label>`;
  }

  /* ---------------------------------------------------------- trang */
  const UI = { tab: null, f: { g: '', sc: '', q: '' } };
  App.page('processes', {
    render(main, params) {
      P.tick();
      const [a, b] = params;
      if (a === 'qt' && b) return renderDetail(main, b);
      if (a === 'new') return b ? renderForm(main, b, null) : renderPicker(main);
      if (a === 'edit' && b) { const r = App.requests().find((x) => x.id === b); if (r) return renderForm(main, r.ma_qt, r); main.innerHTML = `<div class="notice bad">${t('pr.rec.nf', { id: esc(b) })}</div>`; return; }
      if (a === 'hs' && b) return renderRecord(main, b);
      renderHome(main, a);
    },
  });

  function header(crumb, title, sub, right) {
    return `<div class="page-h"><div><div class="crumb">${crumb}</div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div>${right ? `<div class="row no-print">${right}</div>` : ''}</div>`;
  }

  function renderHome(main, tab0) {
    const u = App.user();
    const inbox = P.pendingFor(u);
    const tabs = [{ k: 'cat', t: t('pr.tab.cat') }, { k: 'mine', t: t('pr.tab.mine') }, { k: 'inbox', t: t('pr.tab.inbox') + (inbox.length ? ' (' + inbox.length + ')' : '') }];
    if (LEAD.includes(u.role)) tabs.push({ k: 'sla', t: t('pr.tab.sla') });
    const tab = tabs.some((x) => x.k === tab0) ? tab0 : UI.tab && tabs.some((x) => x.k === UI.tab) ? UI.tab : 'cat';
    const anyApplies = D.processes.some((p) => roleApplies(p, u));
    main.innerHTML = header(t('nav.processes'), t('nav.processes'), t('pr.sub'), anyApplies ? `<a class="btn" href="#/processes/new">+ ${t('pr.new')}</a>` : '') + '<div data-tabs></div><div data-body></div>';
    const body = main.querySelector('[data-body]');
    const show = (k) => {
      UI.tab = k;
      try { history.replaceState(null, '', '#/processes/' + k); } catch (e) { /* bỏ qua */ }
      if (k === 'cat') renderCatalog(body);
      if (k === 'mine') renderMine(body);
      if (k === 'inbox') renderInbox(body);
      if (k === 'sla') renderSla(body);
    };
    App.ui.tabs(main.querySelector('[data-tabs]'), tabs, tab, show);
    show(tab);
  }

  /* ---------- danh mục */
  function cmpChart(list) {
    const max = Math.max(1, ...list.map((p) => p.asis_days_max));
    const leg = (c, l) => `<span style="display:inline-flex;gap:6px;align-items:center"><i style="display:inline-block;width:14px;height:8px;border-radius:2px;background:${c}"></i>${esc(l)}</span>`;
    return `<div class="small" style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px">${leg('#9AA0C8', t('pr.asis'))}${leg('#1C9ACC', t('pr.tobe'))}<span class="muted">(${t('pr.chart.u')})</span></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));column-gap:28px">` +
      list.map((p) => `<a href="${hrefQ(p.code)}" title="${esc(pname(p))}" style="display:grid;grid-template-columns:58px minmax(0,1fr) 74px;gap:8px;align-items:center;margin:4px 0;color:inherit;text-decoration:none">
        <b class="small">${esc(short(p.code))}</b><span><i style="display:block;height:7px;border-radius:3px;background:#9AA0C8;width:${p.asis_days_max / max * 100}%"></i><i style="display:block;height:7px;border-radius:3px;background:#1C9ACC;margin-top:2px;width:${Math.max(0.8, p.tobe_days / max * 100)}%"></i></span>
        <span class="small" style="text-align:right;font-variant-numeric:tabular-nums">${fmt(p.asis_days_max)} → <b>${fmt(p.tobe_days)}</b></span></a>`).join('') + '</div>';
  }
  function renderCatalog(body) {
    const u = App.user(), PS = D.processes;
    const avgA = PS.reduce((a, p) => a + asisMean(p), 0) / PS.length, avgT = PS.reduce((a, p) => a + p.tobe_days, 0) / PS.length;
    const avgR = PS.reduce((a, p) => a + reduction(p), 0) / PS.length, n50 = PS.filter((p) => reduction(p) >= 50).length;
    const sA = PS.reduce((a, p) => a + p.asis_steps.length, 0), sT = PS.reduce((a, p) => a + p.tobe_steps.filter((s) => !P.isAuto(s)).length, 0);
    const nE = PS.filter((p) => p.tobe_steps.some((s) => s.esign)).length, nM = PS.filter((p) => p.tobe_steps.some((s) => s.mfa)).length;
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('pr.k.n'), PS.length, t('pr.k.n.s'))}${App.ui.kpi(t('pr.k.days'), fmt(avgA) + ' → ' + fmt(avgT), t('pr.k.days.s'), 'cyan')}
        ${App.ui.kpi(t('pr.k.red'), fmt(avgR) + '%', t('pr.k.red.s', { n: n50 }), 'ok')}${App.ui.kpi(t('pr.k.steps'), sA - sT, t('pr.k.steps.s', { a: sA, b: sT }), 'warn')}
        ${App.ui.kpi(t('pr.k.esign'), nE, t('pr.k.esign.s', { n: nM }))}</div>
      <p class="small muted" style="margin-top:-6px">${t('pr.k.src')}</p>
      <div class="card"><div class="card-h"><h3>${t('pr.tab.cat')}</h3><span class="muted small" data-cnt></span></div>
        <div class="row" style="margin-bottom:10px;flex-wrap:wrap"><select data-g><option value="">${t('pr.all.groups')}</option>${GROUPS.map((g) => `<option value="${g}" ${UI.f.g === g ? 'selected' : ''}>${g} – ${t('pr.g.' + g)}</option>`).join('')}</select>
        <select data-sc><option value="">${t('pr.all.scopes')}</option>${Object.keys(SCOPES).map((s) => `<option value="${s}" ${UI.f.sc === s ? 'selected' : ''}>${t('pr.sc.' + s)}</option>`).join('')}</select>
        <input data-q placeholder="${esc(t('pr.search'))}" value="${esc(UI.f.q)}" style="flex:1;min-width:180px"></div><div data-list></div></div>
        <div class="card"><h3>${t('pr.chart')}</h3><div data-chart></div></div>`;
    const draw = () => {
      const q = UI.f.q.trim().toLowerCase();
      const list = PS.filter((p) => (!UI.f.g || p.group === UI.f.g) && (!UI.f.sc || p.scope === UI.f.sc) && (!q || (p.code + ' ' + p.name_vi + ' ' + p.name_en).toLowerCase().includes(q)));
      body.querySelector('[data-cnt]').textContent = t('pr.n.found', { n: list.length });
      body.querySelector('[data-chart]').innerHTML = cmpChart(list);
      body.querySelector('[data-list]').innerHTML = App.ui.table([
        { t: t('pr.col.code'), f: (p) => `<b>${esc(short(p.code))}</b>` },
        { t: t('pr.col.name'), f: (p) => `<a style="display:inline-block;min-width:260px" href="${hrefQ(p.code)}">${esc(pname(p))}</a><div class="small muted">${esc(t('pr.g.' + p.group))} · ${esc(p.owner)}</div>` },
        { t: t('pr.col.scope'), f: (p) => scopeBadge(p.scope) },
        { t: t('pr.col.asis'), cls: 'num', f: (p) => (p.asis_days_min === p.asis_days_max ? fmt(p.asis_days_min) : fmt(p.asis_days_min) + '–' + fmt(p.asis_days_max)) + (p.asis_source === 'uoc_tinh' ? '<div>' + App.ui.badge(t('pr.est'), 'warn') + '</div>' : '') },
        { t: t('pr.col.tobe'), cls: 'num', f: (p) => `<b>${fmt(p.tobe_days)}</b>` },
        { t: t('pr.col.red'), cls: 'num', f: (p) => { const r = reduction(p); return `<span style="color:${r >= 50 ? '#2F855A' : '#B7791F'};font-weight:700">${fmt(r)}%</span>`; } },
        { t: t('pr.col.steps'), cls: 'c', f: (p) => p.asis_steps.length + ' → ' + p.tobe_steps.length },
        { t: t('pr.col.sign'), cls: 'c', f: (p) => (p.tobe_steps.some((s) => s.esign) ? '✓' : '') },
        { t: t('action'), f: (p) => (roleApplies(p, u) ? `<a class="btn sm" href="${hrefNew(p.code)}">${t('pr.new')}</a>` : '') },
      ], list);
    };
    body.querySelector('[data-g]').onchange = (e) => { UI.f.g = e.target.value; draw(); };
    body.querySelector('[data-sc]').onchange = (e) => { UI.f.sc = e.target.value; draw(); };
    body.querySelector('[data-q]').oninput = (e) => { UI.f.q = e.target.value; draw(); };
    draw();
  }

  /* ---------- chi tiết quy trình (khung ISO 9001) */
  function renderDetail(main, code) {
    const p = App.process(code), u = App.user();
    if (!p) { main.innerHTML = `<div class="notice bad">${t('pr.rec.nf', { id: esc(code) })}</div>`; return; }
    const reqs = App.requests().filter((r) => r.ma_qt === p.code && !['nhap', 'huy'].includes(r.trang_thai));
    const okN = reqs.filter(P.withinSla).length;
    const fs = p.form.fields, modes = fs.map((f) => spec(p, f, {}, u).mode);
    const nAuto = modes.filter((m) => m !== 'input' && m !== 'upload' && m !== 'manual').length;
    const li = (arr) => `<ul class="small" style="padding-left:18px;margin:4px 0">${(arr || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    const fld = (k, v) => `<div class="fld"><div class="k">${k}</div><div class="v">${v}</div></div>`;
    const mapTxt = (f) => { const a = (D.metadata.src_aliases || {})[f.src]; return a === undefined ? '–' : a === null ? '<span class="muted">null</span>' : `<code>${esc(a)} </code>`; };
    const asisTL = `<ol class="timeline">${p.asis_steps.map((s, i) => `<li class="done"><span class="dot" style="background:#9AA0C8">${i + 1}</span><div><div>${esc(sname(s))}</div><div class="small muted">${esc(unitName(s.actor))} · ${t('pr.days', { d: fmt(s.days) })}</div></div></li>`).join('')}</ol>`;
    const tobeTL = `<ol class="timeline">${p.tobe_steps.map((s, i) => `<li class="${P.isAuto(s) ? 'done' : 'cur'}"><span class="dot" style="${P.isAuto(s) ? 'background:#1C9ACC' : ''}">${i + 1}</span><div><div>${esc(sname(s))}</div><div class="small muted">${esc(unitName(s.actor))} · SLA ${t('pr.hours', { h: fmt(s.sla_hours) })} ${stepBadges(s)}</div></div></li>`).join('')}</ol>`;
    const red = reduction(p);
    main.innerHTML = header(`<a href="#/processes/cat">${t('pr.back.cat')}</a>`, esc(pname(p)), `<b>${esc(p.code)}</b> · ${scopeBadge(p.scope)} · ${esc(t('pr.g.' + p.group))}`,
      roleApplies(p, u) ? `<a class="btn" href="${hrefNew(p.code)}">+ ${t('pr.new')}</a>` : '') +
      (EN() ? `<div class="notice">${t('pr.vi.only')}</div>` : '') +
      `<div class="card"><div class="card-h"><h3>${t('pr.iso')}</h3><span class="chip">ISO 9001:2015</span></div><div class="fields">
        ${fld(t('pr.iso.code'), esc(p.code) + '<div class="small muted">' + t('pr.iso.ver') + '</div>')}
        ${fld(t('pr.iso.owner'), esc(unitName(p.owner)) + ' (' + esc(p.owner) + ')')}
        ${fld(t('pr.iso.units'), p.units.map((x) => esc(x)).join(', '))}
        ${fld(t('pr.iso.applies'), p.applies_to.map((r) => esc(App.roleName(r))).join(', '))}</div>
        <div class="fld"><div class="k">${t('pr.iso.purpose')}</div><div class="v" style="font-weight:400">${esc(p.purpose_vi)}</div></div>
        <div class="fld"><div class="k">${t('pr.iso.legal')}</div>${li(p.legal_basis)}</div></div>
      <div class="card"><div class="card-h"><h3>${t('pr.cmp')}</h3><span>${App.ui.badge(t('pr.cmp.red', { p: fmt(red) }), red >= 50 ? 'ok' : 'warn')}</span></div>
        <div class="grid g2"><div><h4 style="margin:0 0 6px">${t('pr.asis')} ${p.asis_source === 'uoc_tinh' ? App.ui.badge(t('pr.est'), 'warn') : App.ui.badge(t('pr.doc'), 'info')}</h4>
          <p class="small"><b>${t('pr.cmp.tot', { d: p.asis_days_min === p.asis_days_max ? fmt(p.asis_days_min) : fmt(p.asis_days_min) + '–' + fmt(p.asis_days_max) })}</b> · ${p.asis_steps.length} ${esc(t('pr.col.steps').toLowerCase())}</p>${asisTL}</div>
          <div><h4 style="margin:0 0 6px">${t('pr.tobe')}</h4><p class="small"><b>${t('pr.cmp.tot', { d: fmt(p.tobe_days) })}</b> · ${p.tobe_steps.length} ${esc(t('pr.col.steps').toLowerCase())} (${p.tobe_steps.filter((s) => P.isAuto(s)).length} ${esc(t('pr.auto').toLowerCase())})</p>${tobeTL}</div></div>
        <h4>${t('pr.opt')}</h4>${li(p.optimizations_vi)}</div>
      <div class="grid g2"><div class="card"><h3>${t('pr.iso.raci')}</h3>${App.ui.table([{ t: 'RACI', f: (x) => `<b>${t('pr.raci.' + x)}</b>` }, { t: t('pr.rec.who'), f: (x) => esc(p.raci[x] || '') }], ['R', 'A', 'C', 'I'])}</div>
        <div class="card"><h3>${t('pr.iso.io')}</h3><div class="fld"><div class="k">${t('pr.iso.in')}</div><div class="v" style="font-weight:400">${t('pr.in.form', { c: esc(p.form.code), n: fs.length, a: nAuto })}</div></div>
          <div class="fld"><div class="k">${t('pr.iso.out')}</div>${li(p.outputs_vi)}</div><div class="fld"><div class="k">${t('pr.iso.rec')}</div><div class="v small" style="font-weight:400">${esc(p.records_vi)}</div></div></div></div>
      <div class="card"><h3>${t('pr.iso.steps')}</h3>${App.ui.table([
        { t: '#', cls: 'c', f: (s, i) => i + 1 }, { t: t('pr.rec.step'), f: (s) => esc(sname(s)) }, { t: t('pr.rec.who'), f: (s) => esc(unitName(s.actor)) },
        { t: 'SLA', cls: 'num', f: (s) => t('pr.hours', { h: fmt(s.sla_hours) }) }, { t: '', f: (s) => stepBadges(s) }], p.tobe_steps)}</div>
      <div class="card"><div class="card-h"><h3>${t('pr.iso.form', { c: esc(p.form.code) })}</h3><span class="small muted">${t('pr.in.form', { c: esc(p.form.code), n: fs.length, a: nAuto })}</span></div>${App.ui.table([
        { t: t('pr.f.key'), f: (f) => `<b>${esc(EN() ? f.label_en : f.label_vi)}</b><div class="small muted">${esc(f.key)} </div>` }, { t: t('pr.f.type'), f: (f) => esc(f.type) + ' ' },
        { t: t('pr.f.req'), cls: 'c', f: (f) => (f.required ? '✓' : '') }, { t: t('pr.f.src'), f: (f) => `<code style="font-size:.78rem">${esc(f.src)} </code>` },
        { t: t('pr.f.map'), f: mapTxt }, { t: t('pr.f.mode'), f: (f, i) => { const m = modes[i]; return App.ui.badge(t(MODE_CHIP[m]), LOCKED.includes(m) ? 'info' : m === 'pick' ? 'navy' : m === 'manual' ? 'warn' : ''); } }], fs)}</div>
      <div class="grid g2"><div class="card"><h3>${t('pr.iso.kpi')}</h3>${li(p.kpi_vi)}</div>
        <div class="card"><h3>${t('pr.iso.pdca')}</h3><ul class="small" style="padding-left:18px;margin:0">${['P', 'D', 'C', 'A'].map((x) => `<li style="margin-bottom:4px">${t('pr.pdca.' + x, { c: esc(p.form.code), k: (p.kpi_vi || []).length, n: reqs.length, p: reqs.length ? Math.round(okN / reqs.length * 100) + '%' : '–' })}</li>`).join('')}</ul></div></div>
      <div class="card"><h3>${t('pr.iso.risk')}</h3>${App.ui.table([{ t: t('pr.risk'), k: 'risk' }, { t: t('pr.control'), k: 'control' }], p.risks_vi || [])}</div>`;
  }

  /* ---------- chọn quy trình để tạo */
  function renderPicker(main) {
    const u = App.user(), list = D.processes.filter((p) => roleApplies(p, u));
    main.innerHTML = header(`<a href="#/processes/cat">${t('pr.back.cat')}</a>`, t('pr.new.title'), t('pr.new.pick')) + (list.length ? GROUPS.filter((g) => list.some((p) => p.group === g)).map((g) =>
      `<div class="card"><h3>${g} – ${t('pr.g.' + g)}</h3>${App.ui.table([{ t: t('pr.col.code'), f: (p) => `<b>${esc(short(p.code))}</b>` }, { t: t('pr.col.name'), f: (p) => `<a style="display:inline-block;min-width:260px" href="${hrefQ(p.code)}">${esc(pname(p))}</a>` },
        { t: t('pr.col.tobe'), cls: 'num', f: (p) => fmt(p.tobe_days) }, { t: '', f: (p) => `<a class="btn sm" href="${hrefNew(p.code)}">${t('pr.new')}</a>` }], list.filter((p) => p.group === g))}</div>`).join('')
      : `<div class="notice">${t('pr.new.none')}</div>`);
  }

  /* ---------- biểu mẫu điện tử */
  function renderForm(main, code, existing) {
    const p = App.process(code), u = App.user();
    if (!p) { main.innerHTML = `<div class="notice bad">${t('pr.rec.nf', { id: esc(code) })}</div>`; return; }
    if (existing && existing.ma_cb !== u.ma_cb) { main.innerHTML = `<div class="notice bad">${t('pr.rec.noscope')}</div>`; return; }
    if (!existing && !roleApplies(p, u)) { main.innerHTML = header(`<a href="${hrefQ(p.code)}">← ${esc(short(p.code))}</a>`, esc(pname(p)), '') + `<div class="notice warn">${t('pr.new.denied', { r: esc(App.roleName(u.role)) })}</div>`; return; }
    const st = existing ? Object.assign({}, existing.du_lieu) : {};
    const draw = () => {
      const specs = p.form.fields.map((f) => [f, spec(p, f, st, u)]);
      let lead = '';
      if (short(p.code) === 'HC-02' && st.from_date) {
        const lt = (D.rules.leave || {}).request_lead_time || {}, need = lt.domestic_working_days || 10;
        if (workDays(D.meta.today, st.from_date) - 1 < need) lead = `<div class="notice warn">${t('pr.warn.lead', { d: need })} <span class="small muted">(${esc(lt.source || '')})</span></div>`;
      }
      main.innerHTML = header(`<a href="${hrefQ(p.code)}">← ${esc(short(p.code))}</a>`, esc(pname(p)), `${t('pr.iso.form', { c: esc(p.form.code) })} · ${esc(p.code)}${existing ? ' · ' + esc(existing.id) : ''}`) +
        `<div class="notice">&#128274; ${t('pr.f.drafthint')}</div>${lead}
        <div class="card"><form data-form novalidate><div class="grid g2" style="gap:12px 18px">${specs.map(([f, s]) => fieldHTML(p, f, s)).join('')}</div>
        <p class="err" data-err hidden></p>
        <div class="row end" style="margin-top:14px"><a class="btn ghost" href="${existing ? '#/processes/hs/' + esc(existing.id) : hrefQ(p.code)}">${t('cancel')}</a>
        ${!existing || existing.trang_thai === 'nhap' ? `<button type="button" class="btn ghost" data-draft>${t('pr.save.draft')}</button>` : ''}
        <button type="submit" class="btn" data-submit>${existing && existing.trang_thai === 'tra_lai' ? t('pr.resubmit') : t('pr.submit')}</button></div></form></div>`;
      const form = main.querySelector('[data-form]');
      form.querySelectorAll('[data-f]').forEach((el) => {
        const k = el.dataset.f;
        if (el.hasAttribute('data-file')) el.onchange = () => { st[k] = el.files[0] ? el.files[0].name : ''; };
        else if (el.hasAttribute('data-re') || el.tagName === 'SELECT' || el.type === 'date') el.onchange = () => { st[k] = el.value; draw(); };
        else el.oninput = () => { st[k] = el.value; };
      });
      const collect = () => {
        const data = {}, disp = {}, src = {}, miss = [];
        specs.forEach(([f, s]) => {
          const v = LOCKED.includes(s.mode) || s.mode === 'pick' ? s.v : st[f.key] == null ? '' : st[f.key];
          data[f.key] = v; src[f.key] = s.mode;
          const o = s.opts && s.opts.find((x) => x.v === v);
          disp[f.key] = LOCKED.includes(s.mode) ? s.disp : o ? o.l : String(v);
          if (f.required && (v === '' || v == null)) miss.push(EN() ? f.label_en : f.label_vi);
        });
        return { data, disp, src, miss };
      };
      const err = (m) => { const e = main.querySelector('[data-err]'); e.hidden = false; e.textContent = m; if (e.scrollIntoView) e.scrollIntoView({ block: 'center' }); };
      const dr = main.querySelector('[data-draft]');
      if (dr) dr.onclick = async () => {
        const c = collect();
        let r;
        if (existing) { r = Object.assign(clone(existing), { du_lieu: c.data, hien_thi: c.disp, nguon: c.src }); App.saveRequest(r); App.audit('SUA', 'Cập nhật nháp ' + r.id, r.id); }
        else r = await P.create(p.code, c.data, { draft: true, hien_thi: c.disp, nguon: c.src });
        App.ui.toast(t('pr.drafted', { id: r.id }), 'ok'); location.hash = '#/processes/hs/' + r.id;
      };
      form.onsubmit = async (ev) => {
        ev.preventDefault();
        const c = collect();
        if (c.miss.length) return err(t('pr.err.req', { l: c.miss.join(', ') }));
        const d = c.data;
        for (const [a, b] of [['from_date', 'to_date'], ['from_time', 'to_time']]) if (d[a] && d[b] && d[b] < d[a]) return err(t('pr.err.dates'));
        const neg = p.form.fields.filter((f) => f.type === 'number' && ['input', 'manual'].includes(c.src[f.key]) && f.required && !(+d[f.key] > 0)).map((f) => (EN() ? f.label_en : f.label_vi));
        if (neg.length) return err(t('pr.err.pos', { l: neg.join(', ') }));
        if (['HC-02', 'HC-03'].includes(short(p.code))) { const n = leaveLen(d), rem = leaveEnt(u) - leaveTaken(u.ma_cb); if (n > rem) return err(t('pr.err.leave', { n, r: rem })); }
        const extra = { hien_thi: c.disp, nguon: c.src };
        if (existing && existing.trang_thai === 'tra_lai') { const r = await P.resubmit(existing, d, extra); App.ui.toast(t('pr.created', { id: r.id }), 'ok'); location.hash = '#/processes/hs/' + r.id; return; }
        const base = existing ? Object.assign(clone(existing), { du_lieu: d }, extra)
          : { id: P.nextId(), ma_qt: p.code, ma_cb: u.ma_cb, tao_luc: iso(App.now()), trang_thai: 'nhap', buoc_hien_tai: 0, lich_su: [], du_lieu: d, chu_ky: [], vai_tro_tao: u.role, hien_thi: c.disp, nguon: c.src };
        const pk = P.peekSubmit(base);
        if (pk && (pk.st.mfa || pk.st.esign) && !(await App.stepUp(t('pr.mfa.submit', { c: p.form.code })))) return;
        const r = await P.submit(base);
        App.ui.toast(t('pr.created', { id: r.id }), 'ok');
        location.hash = '#/processes/hs/' + r.id;
      };
    };
    draw();
  }

  /* ---------- danh sách hồ sơ của tôi */
  const stepCell = (r) => {
    const steps = P.steps(r);
    if (r.trang_thai === 'hoan_thanh') return `<span class="small">${r.so_vb ? esc(r.so_vb) : '✓'}</span>`;
    const i = P.current(r); if (!steps[i]) return '';
    return `<div class="small"><b>${i + 1}/${steps.length}</b> · ${esc(P.actorLabel(P.resolve(r, i)))}</div>`;
  };
  const procCell = (r) => { const p = App.process(r.ma_qt) || {}; return `${esc(pname(p))}<div class="small muted">${esc(short(r.ma_qt))}</div>`; };
  const idCell = (r) => `<a href="#/processes/hs/${esc(r.id)}" style="white-space:nowrap"><b>${esc(r.id)}</b></a>`;
  function renderMine(body) {
    const u = App.user();
    const mine = App.requests().filter((r) => r.ma_cb === u.ma_cb).sort((a, b) => b.tao_luc.localeCompare(a.tao_luc));
    const sv = mine.filter((r) => r.trang_thai === 'dang_xu_ly' && P.canSimulate(u, P.resolve(r, r.buoc_hien_tai), r));
    body.innerHTML = (sv.length ? `<div class="notice">${t('pr.waitsv')} ${sv.map((r) => `<a href="#/processes/hs/${esc(r.id)}">${esc(r.id)}</a>`).join(', ')}</div>` : '') +
      `<div class="card"><div class="card-h"><h3>${t('pr.tab.mine')} (${mine.length})</h3>${D.processes.some((p) => roleApplies(p, u)) ? `<a class="btn sm" href="#/processes/new">+ ${t('pr.new')}</a>` : ''}</div>
      ${App.ui.table([{ t: t('pr.col.id'), f: idCell }, { t: t('pr.col.proc'), f: procCell },
        { t: t('pr.col.created'), f: (r) => App.fmtDT(r.tao_luc) }, { t: t('status'), f: (r) => statusBadge(r.trang_thai) },
        { t: t('pr.col.step'), f: stepCell }, { t: t('pr.col.sla'), f: slaChip },
        { t: '', f: (r) => `<a class="btn ghost sm" href="#/processes/hs/${esc(r.id)}">${t('pr.open')}</a>` }], mine, { empty: t('pr.mine.empty') })}</div>`;
  }

  /* ---------- hộp việc chờ xử lý */
  function renderInbox(body) {
    const u = App.user(), list = P.pendingFor(u);
    const sims = App.requests().filter((r) => r.trang_thai === 'dang_xu_ly' && P.canSimulate(u, P.resolve(r, r.buoc_hien_tai), r) && (LEAD.includes(u.role) || r.ma_cb === u.ma_cb));
    const batch = list.filter((r) => (P.steps(r)[r.buoc_hien_tai] || {}).esign);
    const cols = [
      { t: t('pr.col.id'), f: idCell }, { t: t('pr.col.proc'), f: procCell }, { t: t('pr.col.req'), f: (r) => esc(staffName(r.ma_cb)) },
      { t: t('pr.col.step'), f: (r) => { const s = P.steps(r)[r.buoc_hien_tai] || {}; return `<div class="small"><b>${r.buoc_hien_tai + 1}.</b> ${esc(sname(s).slice(0, 140))}</div>${stepBadges(s)}`; } },
      { t: t('pr.col.recv'), f: (r) => App.fmtDT(lastLuc(r)) }, { t: t('pr.col.sla'), f: slaChip },
    ];
    body.innerHTML = `<div class="card"><div class="card-h"><h3>${t('pr.inbox.h', { r: esc(App.roleName(u.role)) })} (${list.length})</h3>${batch.length > 1 ? `<button class="btn sm cyan" data-batch>${t('pr.batch', { n: batch.length })}</button>` : ''}</div>
      <p class="small muted">${t('pr.inbox.note')}</p>${App.ui.table(cols.concat([{ t: t('action'), f: (r) => `<div class="row" style="flex-wrap:nowrap"><button class="btn ok sm" data-ok="${esc(r.id)}">${t('pr.approve')}</button><button class="btn ghost sm" data-ret="${esc(r.id)}">${t('pr.return')}</button></div>` }]), list, { empty: t('pr.inbox.empty') })}</div>` +
      (sims.length ? `<div class="card"><h3>${t('pr.sim.h')} (${sims.length})</h3><p class="small muted">${t('pr.sim.note')}</p>${App.ui.table(cols.slice(0, 3).concat([
        { t: t('pr.rec.who'), f: (r) => `<b>${esc(unitName((P.steps(r)[r.buoc_hien_tai] || {}).actor))}</b><div class="small muted">${t('pr.u.unit')}</div>` }, cols[5],
        { t: t('action'), f: (r) => `<button class="btn cyan sm" data-sim="${esc(r.id)}">${t('pr.sim.btn')}</button>` }]), sims)}</div>` : '');
    const get = (id) => App.requests().find((x) => x.id === id);
    const re = () => renderInbox(body);
    body.querySelectorAll('[data-ok]').forEach((b) => (b.onclick = () => act(get(b.dataset.ok), 'dong_y', false, re)));
    body.querySelectorAll('[data-ret]').forEach((b) => (b.onclick = () => act(get(b.dataset.ret), 'tra_lai', false, re)));
    body.querySelectorAll('[data-sim]').forEach((b) => (b.onclick = () => act(get(b.dataset.sim), 'dong_y', true, re)));
    const bb = body.querySelector('[data-batch]');
    if (bb) bb.onclick = async () => {
      if (!(await App.stepUp(t('pr.batch', { n: batch.length })))) return;
      for (const r of batch) await P.advance(get(r.id), 'dong_y', t('pr.batch.note'));
      App.audit('KY_SO_LO', 'Ký số theo lô ' + batch.length + ' hồ sơ: ' + batch.map((r) => r.id).join(', '), batch.map((r) => r.id).join(','));
      App.ui.toast(t('pr.batch.ok', { n: batch.length }), 'ok'); re();
    };
  }

  function authNote(p, st) {
    const c = short(p.code);
    if (c === 'KH-03' || c === 'HC-05') return t('pr.auth.955', { g: c === 'KH-03' ? '01-a' : '02-b' });
    if (st.esign && (c === 'NS-01' || c === 'HC-01')) return t('pr.auth.tl');
    if (st.esign) return t('pr.auth.gen');
    return '';
  }
  /* hộp thoại xử lý một bước */
  function act(r, kind, sim, after) {
    if (!r) return;
    const p = App.process(r.ma_qt), i = r.buoc_hien_tai, st = P.steps(r)[i] || {};
    const res = P.resolve(r, i), auth = authNote(p, st);
    const m = App.ui.modal(`<h3>${t('pr.act.h', { i: i + 1 })}</h3><p class="small">${esc(sname(st))}</p>
      <p class="small muted">${esc(r.id)} · ${esc(pname(p))} · ${esc(staffName(r.ma_cb))}</p>
      ${sim ? `<div class="notice small">${t('pr.sim.note')}<br><b>${esc(P.actorLabel(res))}</b></div>` : ''}
      ${!sim && st.mfa ? `<div class="notice warn small">${t('pr.act.mfa')}</div>` : ''}${!sim && st.esign ? `<div class="notice small">${t('pr.act.esign')}</div>` : ''}
      ${auth ? `<p class="small muted">${esc(auth)}</p>` : ''}
      <label>${t('pr.note')}<textarea data-n rows="3"></textarea></label><p class="err" hidden></p>
      <div class="row end" style="margin-top:12px;flex-wrap:wrap"><button class="btn ghost" data-x>${t('cancel')}</button>
      ${sim ? '' : `<button class="btn bad" data-k="tu_choi">${t('pr.reject')}</button><button class="btn ghost" data-k="tra_lai">${t('pr.return')}</button>`}
      <button class="btn ok" data-k="dong_y">${sim ? t('pr.sim.btn') : st.esign ? t('pr.sign') : t('pr.approve')}</button></div>`);
    if (kind === 'tra_lai') m.querySelector('[data-n]').focus();
    m.querySelector('[data-x]').onclick = App.ui.closeModal;
    m.querySelectorAll('[data-k]').forEach((b) => (b.onclick = async () => {
      const k = b.dataset.k, note = m.querySelector('[data-n]').value.trim();
      if (k !== 'dong_y' && !note) { const e = m.querySelector('.err'); e.hidden = false; e.textContent = t('pr.note.req'); return; }
      App.ui.closeModal();
      if (k === 'dong_y' && !sim && (st.mfa || st.esign) && !(await App.stepUp(sname(st)))) return;
      await P.advance(r, k, note, { sim });
      App.ui.toast(sim ? t('pr.sim.done', { u: unitName(st.actor), s: i + 1 }) : t('pr.done', { k: t('pr.kq.' + k) }), k === 'dong_y' ? 'ok' : 'bad');
      if (after) after();
    }));
  }

  /* ---------- trang hồ sơ */
  const SENS = { bank_account: 'last4', vl_id: 'last4', dob: 'year_only', phone: 'last3' };
  function renderRecord(main, id) {
    const u = App.user(), r = App.requests().find((x) => x.id === id);
    if (!r) { main.innerHTML = `<div class="notice bad">${t('pr.rec.nf', { id: esc(id) })}</div>`; return; }
    if (!P.canView(u, r)) { main.innerHTML = `<div class="notice bad">${t('pr.rec.noscope')}</div>`; return; }
    const p = App.process(r.ma_qt) || { tobe_steps: [], form: { fields: [] } }, req = App.staff(r.ma_cb) || {}, me = u.ma_cb === r.ma_cb;
    if (!me) App.audit('XEM', 'Xem hồ sơ quy trình ' + r.id, r.id, 'Giải quyết hồ sơ quy trình');
    const steps = P.steps(r), cur = P.current(r), d = r.du_lieu || {}, hs = r.hien_thi || {}, src = r.nguon || {};
    const res = r.trang_thai === 'dang_xu_ly' ? P.resolve(r, r.buoc_hien_tai) : null;
    const mine = res && P.matches(u, res), canSim = res && P.canSimulate(u, res, r);
    const tot = P.slaTotal(r), used = P.elapsed(r), inSla = P.withinSla(r);
    const hasData = Object.keys(d).length > 0;
    const dataHTML = hasData ? `<div class="fields">${p.form.fields.map((f) => {
      let v = hs[f.key] != null && hs[f.key] !== '' ? hs[f.key] : d[f.key];
      if (v == null || v === '') v = '–';
      if (!me && SENS[f.key] && u.role !== 'CV_TCCB' && v !== '–') v = App.mask(f.key === 'dob' ? d[f.key] : v, SENS[f.key]);
      const m = src[f.key];
      return `<div class="fld"><div class="k">${esc(EN() ? f.label_en : f.label_vi)} ${m && LOCKED.includes(m) ? `<span class="chip" title="${esc(f.src)}">&#128274; ${t(MODE_CHIP[m])}</span>` : ''}</div><div class="v">${esc(v)}</div></div>`;
    }).join('')}</div>` : `<p class="small muted">${t('pr.rec.seed')}</p><div class="fields">
        <div class="fld"><div class="k">${t('pr.col.req')}</div><div class="v">${esc(App.name(req, { title: true }))} (${esc(req.ma_cb)})</div></div>
        <div class="fld"><div class="k">${t('pr.lbl.unit')}</div><div class="v">${esc(req.bo_mon ? App.L(App.dept(req.bo_mon)) : req.don_vi || '')}</div></div>
        <div class="fld"><div class="k">${t('pr.lbl.pos')}</div><div class="v">${esc((EN() && req.chuc_vu_en) || req.chuc_vu || '')}</div></div></div>`;
    const tl = steps.map((s, i) => {
      const es = (r.lich_su || []).filter((e) => e.buoc === i), last = es[es.length - 1];
      let cls = '';
      if (r.trang_thai === 'hoan_thanh' || i < cur) cls = 'done';
      else if (i === cur) cls = ['tra_lai', 'tu_choi'].includes(r.trang_thai) ? 'back' : ['dang_xu_ly', 'nhap'].includes(r.trang_thai) ? 'cur' : '';
      const skipped = last && kqOf(last) === 'bo_qua';
      const ent = es.map((e) => `<div class="small">${App.fmtDT(e.luc)} · <b>${esc(P.kqLabel(e))}</b>${e.ghi_chu ? ' – ' + esc(e.ghi_chu) : ''} ${e.nguoi && e.nguoi !== 'HT' ? `<span class="muted">${t('pr.rec.by')} ${esc(staffName(e.nguoi))}${e.mo_phong ? ' (' + t('pr.sim') + ': ' + esc(unitName(e.don_vi)) + ')' : ''}</span>` : ''}</div>`).join('');
      return `<li class="${cls}"><span class="dot" style="${skipped ? 'background:#A0A4BC' : ''}">${cls === 'done' ? '✓' : i + 1}</span><div><div>${esc(sname(s))}</div>
        <div class="small muted">${esc(P.actorLabel(P.resolve(r, i)))} · SLA ${t('pr.hours', { h: fmt(s.sla_hours) })} ${stepBadges(s)} ${i === cur && r.trang_thai === 'dang_xu_ly' ? slaChip(r) : ''}</div>${ent}</div></li>`;
    }).join('');
    const acts = [];
    if (mine) acts.push(`<div class="notice">${t('pr.waitme')}</div><div class="row"><button class="btn ok" data-a="dong_y">${(steps[r.buoc_hien_tai] || {}).esign ? t('pr.sign') : t('pr.approve')}</button><button class="btn ghost" data-a="tra_lai">${t('pr.return')}</button><button class="btn bad" data-a="tu_choi">${t('pr.reject')}</button></div>`);
    if (canSim) acts.push(`<p class="small muted">${t('pr.sim.note')}</p><button class="btn cyan" data-sim>${t('pr.sim.btn')} – ${esc(unitName(res.actor))}</button>`);
    if (me && r.trang_thai === 'nhap') acts.push(`<div class="row"><a class="btn" href="#/processes/edit/${esc(r.id)}">${t('pr.edit')}</a><button class="btn ghost" data-wd>${t('pr.withdraw')}</button></div>`);
    if (me && r.trang_thai === 'tra_lai') {
      const e = (r.lich_su || []).slice().reverse().find((x) => kqOf(x) === 'tra_lai');
      acts.push(`<div class="notice warn">${t('pr.returned', { i: cur + 1, n: esc(e ? e.ghi_chu || e.ket_qua : '') })}</div><div class="row">${hasData ? `<a class="btn" href="#/processes/edit/${esc(r.id)}">${t('pr.fix')}</a>` : `<button class="btn" data-rs>${t('pr.resubmit')}</button>`}<button class="btn ghost" data-wd>${t('pr.withdraw')}</button></div>`);
    }
    if (r.trang_thai === 'hoan_thanh') acts.push(`<button class="btn cyan" data-out>${t('pr.out')}</button>`);
    else if (short(r.ma_qt) === 'NS-01' && r.trang_thai === 'dang_xu_ly' && r.buoc_hien_tai >= 2) acts.push(`<button class="btn ghost" data-out>${t('pr.preview')}</button>`);
    const sigs = r.chu_ky || [];
    main.innerHTML = header(`<a href="#/processes/${me ? 'mine' : 'inbox'}">${me ? t('pr.back.rec') : t('pr.back.inbox')}</a>`, t('pr.rec', { id: esc(r.id) }) + ' ' + statusBadge(r.trang_thai),
      `<a href="${hrefQ(r.ma_qt)}">${esc(pname(p))}</a> · ${esc(r.ma_qt)} · ${t('pr.col.req')}: <b>${esc(staffName(r.ma_cb))}</b> · ${t('pr.col.created')}: ${App.fmtDT(r.tao_luc)}${r.so_vb ? ' · ' + t('pr.out.no') + ': <b>' + esc(r.so_vb) + '</b>' : ''}`) +
      `<div class="grid g-2-1"><div>
        <div class="card"><div class="card-h"><h3>${t('pr.rec.flow')}</h3><span class="small muted">${t('pr.rec.total', { s: fmt(tot), u: fmt(used) })} ${!['nhap', 'huy'].includes(r.trang_thai) ? App.ui.badge(inSla ? t('pr.sla.ok') : t('pr.sla.bad'), inSla ? 'ok' : 'bad') : ''}</span></div>
          ${App.ui.progress(tot ? Math.min(100, used / tot * 100) : 0, inSla ? 'ok' : 'bad')}<ol class="timeline" style="margin-top:12px">${tl}</ol></div>
        <div class="card"><h3>${t('pr.rec.data')} ${p.form.code ? '<span class="muted small">' + esc(p.form.code) + '</span>' : ''}</h3>${dataHTML}</div>
      </div><div>
        ${acts.length ? `<div class="card"><h3>${t('pr.rec.act')}</h3><div class="stack">${acts.join('')}</div></div>` : ''}
        <div class="card"><h3>${t('pr.rec.sigs')} (${sigs.length})</h3>${sigs.length ? sigs.map((s) => `<div style="border:1px solid #DDE1EE;border-radius:8px;padding:8px 10px;margin-bottom:8px">
          <div><b>${s.loai === 'co_quan' ? t('pr.sig.seal') : esc(staffName(s.nguoi)) + (s.vai_tro ? ' – ' + esc(App.roleName(s.vai_tro)) : '') + (s.loai === 'don_vi' ? ' (' + t('pr.sim') + ': ' + esc(unitName(s.don_vi)) + ')' : '')}</b></div>
          <div class="small muted">${t('pr.rec.step')} ${s.buoc + 1} · ${App.fmtDT(s.luc)} · ${t('pr.sig.cert')}: ${esc(s.cert)} · ${t('pr.sig.serial')}: ${esc(s.serial || '')}</div>
          <div class="small" style="font-family:Consolas,monospace;word-break:break-all">${t('pr.sig.hash')}: ${esc(s.hash)}</div></div>`).join('') : `<p class="small muted">${t('pr.rec.nosig')}</p>`}</div>
        <div class="card"><h3>${t('pr.rec.hist')}</h3>${App.ui.table([{ t: t('pr.rec.time'), f: (e) => App.fmtDT(e.luc) }, { t: '#', cls: 'c', f: (e) => e.buoc + 1 },
          { t: t('pr.rec.res'), f: (e) => esc(P.kqLabel(e)) + (e.ghi_chu ? `<div class="small muted">${esc(e.ghi_chu)}</div>` : '') },
          { t: t('pr.rec.who'), f: (e) => esc(e.nguoi ? staffName(e.nguoi) : t('pr.rec.assigned')) }], (r.lich_su || []).slice().sort((a, b) => a.luc.localeCompare(b.luc)))}</div>
      </div></div>`;
    const rerender = () => renderRecord(main, id);
    const fresh = () => App.requests().find((x) => x.id === id);
    main.querySelectorAll('[data-a]').forEach((b) => (b.onclick = () => act(fresh(), b.dataset.a, false, rerender)));
    const sb = main.querySelector('[data-sim]'); if (sb) sb.onclick = () => act(fresh(), 'dong_y', true, rerender);
    const wd = main.querySelector('[data-wd]'); if (wd) wd.onclick = () => { if (!confirm(t('pr.withdraw') + ' ' + r.id + '?')) return; P.withdraw(fresh()); App.ui.toast(t('pr.withdrawn', { id: r.id }), 'ok'); rerender(); };
    const rs = main.querySelector('[data-rs]'); if (rs) rs.onclick = async () => { await P.resubmit(fresh()); App.ui.toast(t('pr.created', { id: r.id }), 'ok'); rerender(); };
    const ob = main.querySelector('[data-out]'); if (ob) ob.onclick = () => showOutput(fresh());
  }

  /* ---------- kết quả đầu ra (in) */
  function qrBox(seed) {
    const n = 25, cell = 4, hex = String(seed || '0f').replace(/[^0-9a-f]/gi, '').padEnd(16, '7');
    let bits = ''; for (const c of hex) bits += parseInt(c, 16).toString(2).padStart(4, '0');
    const finder = (x, y) => `<rect x="${x * cell}" y="${y * cell}" width="${7 * cell}" height="${7 * cell}" fill="#000"/><rect x="${(x + 1) * cell}" y="${(y + 1) * cell}" width="${5 * cell}" height="${5 * cell}" fill="#fff"/><rect x="${(x + 2) * cell}" y="${(y + 2) * cell}" width="${3 * cell}" height="${3 * cell}" fill="#000"/>`;
    const inF = (x, y) => (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
    let s = `<svg viewBox="0 0 ${n * cell} ${n * cell}" width="96" height="96" role="img" aria-label="QR"><rect width="100%" height="100%" fill="#fff"/>`;
    let k = 0; for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { if (inF(x, y)) continue; if (bits[(k++ * 7) % bits.length] === '1') s += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}" fill="#000"/>`; }
    return s + finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7) + '</svg>';
  }
  const ascii = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  const PRINT_CSS = '<style>@media print{#app,#toasts{display:none!important}.modal-bg{position:static!important;background:#fff!important;padding:0!important;display:block!important}.modal{box-shadow:none!important;width:100%!important;padding:0!important}.modal-x{display:none!important}.pr-page{page-break-after:always;border:0!important}}.pr-page{font-family:"Times New Roman",serif;color:#000;font-size:15px;line-height:1.5;border:1px solid #DDE1EE;padding:28px 34px;margin-bottom:16px;position:relative;background:#fff;overflow:hidden}.pr-page table{width:100%;border-collapse:collapse}.pr-page td{vertical-align:top;padding:0}.pr-wm{position:absolute;top:44%;left:0;right:0;text-align:center;font-size:30px;color:rgba(197,48,48,.13);transform:rotate(-18deg);font-weight:700;pointer-events:none}@media (max-width:640px){.pr-page{padding:16px 14px;font-size:13.5px}}</style>';
  function sigBlock(sig, lang) {
    if (!sig) return `<div style="border:1px dashed #C53030;color:#C53030;padding:8px;font-size:12px;font-family:Aptos,Arial;margin:6px auto;max-width:260px">${lang === 'en' ? 'Not yet signed' : 'Chưa ký số'}</div>`;
    return `<div style="border:1.5px solid #2F855A;border-radius:6px;padding:6px 8px;font-size:11.5px;font-family:Aptos,Arial;color:#22543D;text-align:left;margin:6px auto;max-width:260px">
      <b>${lang === 'en' ? 'Digitally signed by' : 'Ký số bởi'}:</b> ${esc(lang === 'en' ? ascii(staffName(sig.nguoi)) : staffName(sig.nguoi))}<br>${lang === 'en' ? 'Time' : 'Thời gian'}: ${App.fmtDT(sig.luc)}<br>
      ${esc(sig.cert)} · ${esc(sig.serial || '')}<br><span style="word-break:break-all">SHA-256: ${esc(String(sig.hash).slice(0, 32))}…</span></div>`;
  }
  function showOutput(r) {
    const p = App.process(r.ma_qt), s = App.staff(r.ma_cb) || {}, d = r.du_lieu || {}, done = r.trang_thai === 'hoan_thanh';
    const seal = (r.chu_ky || []).find((x) => x.loai === 'co_quan'), sig = (r.chu_ky || []).filter((x) => x.loai !== 'co_quan').slice(-1)[0];
    const issued = toD(r.ngay_vb || r.hoan_thanh_luc || iso(App.now()));
    const qr = `<div style="display:flex;gap:10px;align-items:center;font-family:Aptos,Arial;font-size:11px">${qrBox(seal ? seal.hash : sig ? sig.hash : '0f')}<div><b>${t('pr.out.verify')}</b><br>sim.hcmiu.edu.vn/verify/${esc(r.id)}<br>${seal ? 'SHA-256: ' + esc(String(seal.hash).slice(0, 24)) + '…' : ''}</div></div>`;
    const wm = `<div class="pr-wm">${done ? t('pr.out.sim') : t('pr.out.draft')}</div>`;
    const dateVi = `TP. Hồ Chí Minh, ngày ${pad(issued.getDate())} tháng ${pad(issued.getMonth() + 1)} năm ${issued.getFullYear()}`;
    App.audit('XUAT', 'Xem/in kết quả hồ sơ ' + r.id, r.id, 'Cung cấp kết quả giải quyết');
    let html;
    if (short(r.ma_qt) === 'NS-01') {
      const L = d.letter_lang || 'both', yrs = (issued - toD((s.ngay_vao_truong || '') + 'T00:00')) / (365.25 * 864e5);
      const Y = Math.floor(yrs), M = Math.floor((yrs - Y) * 12);
      const sir = s.gioi_tinh === 'Nữ' ? 'Bà' : 'Ông', sirEn = s.gioi_tinh === 'Nữ' ? 'Ms.' : 'Mr.';
      const signer = sig ? App.staff(sig.nguoi) : null, dept = s.bo_mon ? App.dept(s.bo_mon) : null;
      const no = done && r.so_vb ? r.so_vb : '……/GXN-ĐHQT', purpose = d.purpose || '…';
      const vi = `<div class="pr-page">${wm}<table><tr><td style="width:48%;text-align:center">ĐẠI HỌC QUỐC GIA<br>THÀNH PHỐ HỒ CHÍ MINH<br><b>TRƯỜNG ĐẠI HỌC QUỐC TẾ</b><br>Số: ${esc(no)}</td>
        <td style="text-align:center"><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br><b><u>Độc lập – Tự do – Hạnh phúc</u></b><br><i>${dateVi}</i></td></tr></table>
        <h2 style="text-align:center;margin:22px 0 14px;font-size:20px">GIẤY XÁC NHẬN</h2>
        <p>Trường Đại học Quốc tế, Đại học Quốc gia Thành phố Hồ Chí Minh xác nhận:</p>
        <p style="margin-left:24px">– ${sir}: <b>${esc(s.ho_ten)}</b><br>– Ngày sinh: ${App.fmtDate(s.ngay_sinh)}<br>– Trình độ: ${esc((s.hoc_ham ? s.hoc_ham + ', ' : '') + (s.trinh_do || ''))}${s.chuyen_nganh ? ' (' + esc(s.chuyen_nganh) + ')' : ''}</p>
        <p>hiện đang công tác tại Trường Đại học Quốc tế – ĐHQG-HCM với thông tin như sau:</p>
        <p style="margin-left:24px">– Vị trí, chức danh: ${esc(s.chuc_vu)}; ${esc(s.chuc_danh)}<br>– Đơn vị: ${dept ? 'Bộ môn ' + esc(dept.vi) + ', ' : ''}${esc(D.org.faculty.vi)}<br>– Ngày về Trường: ${App.fmtDate(s.ngay_vao_truong)} (thâm niên công tác tại Trường: ${Y} năm ${M} tháng)<br>– Loại hợp đồng: ${esc(s.loai_hop_dong || '')}</p>
        ${d.extra_info ? `<p>Thông tin xác nhận bổ sung: ${esc(d.extra_info)}</p>` : ''}
        <p>Giấy xác nhận này được cấp cho ${sir} ${esc(s.ho_ten)} để ${esc(purpose)} và có giá trị sử dụng một lần./.</p>
        <table style="margin-top:18px"><tr><td style="width:50%;font-size:13px"><b><i>Nơi nhận:</i></b><br>– ${sir} ${esc(s.ho_ten)};<br>– Lưu: VT, P.TCCB.<br><br>${qr}</td>
        <td style="text-align:center"><b>TL. HIỆU TRƯỞNG<br>KT. TRƯỞNG PHÒNG TỔ CHỨC CÁN BỘ<br>PHÓ TRƯỞNG PHÒNG</b>${sigBlock(sig, 'vi')}<b>${esc(signer ? signer.ho_ten : '')}</b></td></tr></table></div>`;
      const en = `<div class="pr-page">${wm}<table><tr><td style="width:48%;text-align:center">VIET NAM NATIONAL UNIVERSITY<br>HO CHI MINH CITY<br><b>INTERNATIONAL UNIVERSITY</b><br>Ref. No: ${esc(ascii(no))}</td>
        <td style="text-align:center"><b>SOCIALIST REPUBLIC OF VIET NAM</b><br><b><u>Independence – Freedom – Happiness</u></b><br><i>Ho Chi Minh City, ${pad(issued.getDate())}/${pad(issued.getMonth() + 1)}/${issued.getFullYear()}</i></td></tr></table>
        <h2 style="text-align:center;margin:22px 0 14px;font-size:20px">CONFIRMATION LETTER</h2>
        <p>International University, Viet Nam National University Ho Chi Minh City hereby certifies that:</p>
        <p style="margin-left:24px">– ${sirEn}: <b>${esc(ascii(s.ho_ten))}</b><br>– Date of Birth: ${App.fmtDate(s.ngay_sinh)}<br>– Academic level: ${esc(((s.hoc_ham === 'PGS' ? 'Assoc. Prof., ' : s.hoc_ham === 'GS' ? 'Prof., ' : '') + (s.trinh_do_en || '')).trim())}</p>
        <p>is currently employed at International University, Viet Nam National University Ho Chi Minh City with the following details:</p>
        <p style="margin-left:24px">– Position: ${esc(s.chuc_vu_en || '')}; ${esc(s.chuc_danh_en || '')}<br>– Department: ${dept ? 'Department of ' + esc(dept.en) + ', ' : ''}${esc(D.org.faculty.en)}<br>– Start date of employment: ${App.fmtDate(s.ngay_vao_truong)} (${Y} years ${M} months of service)</p>
        <p>This confirmation letter is provided to ${sirEn} ${esc(ascii(s.ho_ten))} for the purpose of ${esc(purpose)} and is valid for single use only./.</p>
        <table style="margin-top:18px"><tr><td style="width:50%;font-size:13px"><b><i>Recipient:</i></b><br>– ${sirEn} ${esc(ascii(s.ho_ten))};<br>– Archives: OGA, OHRM.<br><br>${qr}</td>
        <td style="text-align:center"><b>P.O PRESIDENT<br>PP. HEAD OF OFFICE OF HUMAN RESOURCES MANAGEMENT<br>DEPUTY HEAD</b>${sigBlock(sig, 'en')}<b>${esc(signer ? ascii(signer.ho_ten) : '')}</b></td></tr></table></div>`;
      html = (L === 'en' ? '' : vi) + (L === 'vi' ? '' : en);
    } else {
      const fields = p.form.fields.map((f) => { const v = (r.hien_thi || {})[f.key] || d[f.key]; return v ? `<tr><td style="padding:3px 8px 3px 0;width:40%">${esc(f.label_vi)}</td><td style="padding:3px 0">${esc(SENS[f.key] && SENS[f.key] !== 'year_only' ? App.mask(v, SENS[f.key]) : v)}</td></tr>` : ''; }).join('');
      const stepsTbl = P.steps(r).map((st, i) => { const e = (r.lich_su || []).filter((x) => x.buoc === i).slice(-1)[0]; return `<tr><td style="padding:2px 8px 2px 0">${i + 1}. ${esc(st.vi)}</td><td style="padding:2px 0;white-space:nowrap">${e ? App.fmtDT(e.luc) + ' – ' + esc(P.kqLabel(e)) : ''}</td></tr>`; }).join('');
      html = `<div class="pr-page">${wm}<table><tr><td style="width:48%;text-align:center">ĐẠI HỌC QUỐC GIA TP. HỒ CHÍ MINH<br><b>TRƯỜNG ĐẠI HỌC QUỐC TẾ</b><br>${esc(unitName(p.owner))}</td>
        <td style="text-align:center"><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br><b><u>Độc lập – Tự do – Hạnh phúc</u></b><br><i>${dateVi}</i></td></tr></table>
        <h2 style="text-align:center;margin:20px 0 4px;font-size:19px">${t('pr.out.h')}</h2><p style="text-align:center;margin:0 0 14px"><b>${esc(p.name_vi)}</b><br><i>${esc(p.name_en)}</i></p>
        <p>${t('pr.out.no')}: <b>${esc(r.so_vb || '—')}</b> · ${esc(r.id)} · ${esc(p.code)} (${esc(p.form.code)})<br>${t('pr.col.req')}: <b>${esc(s.ho_ten || '')}</b> (${esc(s.ma_cb || '')}) – ${esc(s.chuc_vu || '')}${s.bo_mon ? ', ' + esc(App.dept(s.bo_mon).vi) : ''}</p>
        ${fields ? `<table style="font-size:14px;margin-bottom:10px">${fields}</table>` : ''}<p style="margin:10px 0 4px"><b>${esc((p.outputs_vi && p.outputs_vi[0]) || '')}</b></p>
        <table style="font-size:13px">${stepsTbl}</table>
        <table style="margin-top:16px"><tr><td style="width:50%">${qr}</td><td style="text-align:center">${sigBlock(sig, 'vi')}${seal ? `<div style="font-family:Aptos,Arial;font-size:11px;color:#22543D">${t('pr.sig.seal')} · ${App.fmtDT(seal.luc)}</div>` : ''}</td></tr></table></div>`;
    }
    const m = App.ui.modal(`${PRINT_CSS}<div class="row between no-print" style="margin-bottom:10px"><h3 style="margin:0">${esc(r.id)} – ${esc(pname(p))}</h3><button class="btn sm" data-pr>${t('print')}</button></div>
      <p class="small muted no-print">${t('pr.out.sim')}</p>${html}`, true);
    m.querySelector('[data-pr]').onclick = () => window.print();
  }

  /* ---------- bảng theo dõi SLA */
  function renderSla(body) {
    const all = App.requests().filter((r) => !['nhap', 'huy'].includes(r.trang_thai));
    const open = all.filter((r) => r.trang_thai === 'dang_xu_ly'), done = all.filter((r) => r.trang_thai === 'hoan_thanh');
    const okAll = all.filter(P.withinSla).length;
    const overdue = open.filter((r) => { const s = P.stepSla(r); return !P.withinSla(r) || (s && s.cls === 'bad'); });
    const byG = GROUPS.map((g) => { const rs = all.filter((r) => (App.process(r.ma_qt) || {}).group === g); return { g, n: rs.length, ok: rs.filter(P.withinSla).length }; }).filter((x) => x.n);
    const units = {};
    open.forEach((r) => { const st = P.steps(r)[r.buoc_hien_tai] || {}; const k = (r.buoc_hien_tai + 1) + '. ' + unitName(st.actor); const key = unitName(st.actor); (units[key] = units[key] || { rs: [], steps: new Set() }).rs.push(r); units[key].steps.add(short(r.ma_qt) + '/' + k.split('.')[0]); });
    const procs = D.processes.map((p) => { const rs = done.filter((r) => r.ma_qt === p.code); if (!rs.length) return null; return { p, n: rs.length, avg: rs.reduce((a, r) => a + P.elapsed(r), 0) / rs.length / 8 }; }).filter(Boolean);
    const rate = (x) => x.ok / x.n;
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('pr.sla.k.all'), all.length)}${App.ui.kpi(t('pr.sla.k.open'), open.length, '', 'cyan')}${App.ui.kpi(t('pr.sla.k.done'), done.length, '', 'ok')}
        ${App.ui.kpi(t('pr.sla.k.rate'), all.length ? Math.round(okAll / all.length * 100) + '%' : '–', okAll + '/' + all.length, okAll / Math.max(1, all.length) >= 0.9 ? 'ok' : 'warn')}${App.ui.kpi(t('pr.sla.k.over'), overdue.length, '', overdue.length ? 'bad' : 'ok')}</div>
      <p class="small muted" style="margin-top:-6px">${t('pr.sla.note')}</p>
      <div class="grid g2"><div class="card"><h3>${t('pr.sla.ontime')}</h3>${App.ui.chart.hbars(byG.map((x) => ({ l: x.g + ' – ' + t('pr.g.' + x.g), v: rate(x) * 100, ref: 90, txt: Math.round(rate(x) * 100) + '% (' + x.ok + '/' + x.n + ')', c: rate(x) >= 0.9 ? '#2F855A' : rate(x) >= 0.7 ? '#B7791F' : '#C53030' })), { max: 100 })}<p class="small muted">${t('pr.sla.mark')}</p></div>
        <div class="card"><h3>${t('pr.sla.open')}</h3>${App.ui.table([{ t: t('pr.sla.unit'), f: (x) => `<b>${esc(x[0])}</b><div class="small muted">${esc([...x[1].steps].join(', '))}</div>` }, { t: t('pr.sla.n'), cls: 'num', f: (x) => x[1].rs.length },
          { t: t('pr.col.id'), f: (x) => x[1].rs.map((r) => `<a href="#/processes/hs/${esc(r.id)}">${esc(r.id)}</a>`).join(', ') }], Object.entries(units).sort((a, b) => b[1].rs.length - a[1].rs.length))}</div></div>
      <div class="card"><h3>${t('pr.sla.avg')}</h3>${App.ui.table([{ t: t('pr.col.proc'), f: (x) => `<a href="${hrefQ(x.p.code)}">${esc(short(x.p.code))}</a> – ${esc(pname(x.p))}` }, { t: t('pr.sla.n'), cls: 'num', f: (x) => x.n },
        { t: t('pr.sla.actual'), cls: 'num', f: (x) => `<b>${fmt(x.avg)}</b>` }, { t: t('pr.sla.target'), cls: 'num', f: (x) => fmt(x.p.tobe_days) },
        { t: t('pr.sla.pub'), cls: 'num', f: (x) => fmt(x.p.asis_days_min) + (x.p.asis_days_max !== x.p.asis_days_min ? '–' + fmt(x.p.asis_days_max) : '') + (x.p.asis_source === 'uoc_tinh' ? ' ' + App.ui.badge(t('pr.est'), 'warn') : '') },
        { t: t('pr.sla.eval'), f: (x) => App.ui.badge(x.avg <= x.p.tobe_days ? t('pr.sla.ok') : t('pr.sla.bad'), x.avg <= x.p.tobe_days ? 'ok' : 'warn') }], procs)}</div>
      <div class="card"><h3>${t('pr.sla.overdue')} (${overdue.length})</h3>${App.ui.table([{ t: t('pr.col.id'), f: idCell },
        { t: t('pr.col.proc'), f: procCell }, { t: t('pr.col.req'), f: (r) => esc(staffName(r.ma_cb)) },
        { t: t('pr.col.step'), f: stepCell }, { t: t('pr.col.sla'), f: slaChip },
        { t: t('pr.sla.overby'), cls: 'num', f: (r) => t('pr.hours', { h: fmt(Math.max(0, P.elapsed(r) - P.slaTotal(r))) }) }], overdue, { empty: t('pr.sla.none.over') })}</div>`;
  }
})();
