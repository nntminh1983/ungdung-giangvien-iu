/* Quản trị dữ liệu: Danh sách cán bộ (directory), Core metadata (metadata), Quyền riêng tư (privacy),
   Nhật ký kiểm toán (audit), Tài khoản & SSO (accounts). Tuân thủ Luật Dữ liệu 60/2024/QH15, Luật BVDLCN 91/2025/QH15. */
App.addI18n({
  vi: {
    /* chung */
    'gv.csv': 'Xuất CSV', 'gv.json': 'Tải JSON', 'gv.search': 'Tìm theo tên, mã, email…', 'gv.all': 'Tất cả', 'gv.assume': 'Giả định', 'gv.verify': 'cần kiểm chứng',
    'gv.approve': 'Duyệt', 'gv.reject': 'Từ chối', 'gv.done': 'Đã ghi nhận và ghi nhật ký.', 'gv.time': 'Thời điểm', 'gv.rows': '{n} bản ghi',
    /* directory */
    'dr.sub': 'Danh bạ cán bộ theo phạm vi dữ liệu của vai trò; trường điện thoại hiển thị theo quyền (RBAC/ABAC), email công vụ là dữ liệu công khai.',
    'dr.scope': 'Phạm vi: {s}', 'dr.photo': 'Ảnh', 'dr.name': 'Họ tên', 'dr.id': 'Mã CB', 'dr.pos': 'Chức vụ / vị trí', 'dr.title': 'Chức danh', 'dr.deg': 'Học hàm, học vị',
    'dr.dept': 'Bộ môn / đơn vị', 'dr.ver': 'Xác thực', 'dr.contact': 'Liên hệ', 'dr.verified': 'Đã xác thực', 'dr.pending': 'Chờ xác thực', 'dr.phone.none': 'Điện thoại: không có quyền',
    'dr.export.note': 'Tệp CSV chỉ gồm trường Công khai (CK) và Nội bộ (NB) theo Core metadata; thao tác được ghi nhật ký.',
    'dr.q': 'Hàng đợi xử lý của P.TCCB', 'dr.q.cr': 'Đề nghị cập nhật hồ sơ chờ duyệt', 'dr.q.ver': 'Hồ sơ chờ xác thực', 'dr.q.role': 'Đề nghị gán vai trò (từ Quản trị hệ thống)',
    'dr.q.field': 'Trường', 'dr.q.new': 'Giá trị đề nghị', 'dr.q.open': 'Mở tab "Đề nghị cập nhật"', 'dr.q.openp': 'Mở hồ sơ', 'dr.q.user': 'Tài khoản', 'dr.q.role2': 'Vai trò đề nghị',
    'dr.q.reason': 'Lý do', 'dr.q.none': 'Không có mục chờ xử lý.', 'dr.office': 'Khối phòng ban',
    /* metadata */
    'md.sub': 'IU Faculty Data Hub – bộ Core metadata dùng chung: mỗi trường dữ liệu có một đơn vị làm chủ, một nguồn, phân loại bảo vệ và quy tắc truy cập. Mọi phân hệ đọc cùng "bản ghi vàng" thay vì yêu cầu giảng viên khai lại.',
    'md.t.ov': 'Tổng quan', 'md.t.ent': 'Thực thể & trường', 'md.t.rbac': 'Ma trận RBAC', 'md.t.abac': 'Quy tắc ABAC', 'md.t.mask': 'Che & ẩn danh', 'md.t.alias': 'Ánh xạ biểu mẫu',
    'md.ent': 'Thực thể', 'md.fields': 'Trường dữ liệu', 'md.roles': 'Vai trò', 'md.rules': 'Quy tắc ABAC', 'md.principles': 'Nguyên tắc', 'md.legal': 'Căn cứ pháp lý', 'md.classes': 'Phân loại dữ liệu',
    'md.nf': '{n} trường', 'md.key': 'Khoá', 'md.vi': 'Nhãn tiếng Việt', 'md.en': 'Nhãn tiếng Anh', 'md.type': 'Kiểu', 'md.cls': 'Lớp', 'md.owner': 'Đơn vị làm chủ', 'md.source': 'Hệ thống nguồn',
    'md.mask': 'Che', 'md.valid': 'Kiểm tra hợp lệ', 'md.view': 'Ai được xem', 'md.edit': 'Cách cập nhật', 'md.req': 'Bắt buộc',
    'md.v.all': 'Mọi người (công khai)', 'md.v.staff': 'Mọi cán bộ', 'md.v.self': 'Chủ thể',
    'md.e.self': 'Tự cập nhật', 'md.e.self_request': 'Đề nghị – P.TCCB xác thực', 'md.e.owner': 'Chỉ đơn vị làm chủ', 'md.e.system': 'Hệ thống tự sinh',
    'md.rbac': 'Vai trò × chức năng (RBAC)', 'md.rbac.note': 'Vị trí việc làm theo positions.json (ma trận 7 vị trí × 14 chức năng); vai trò phòng ban, CVHT, DPO, Quản trị theo cấu hình ứng dụng. TK/PTK/TBM được thêm chức năng Danh sách cán bộ trong phạm vi đơn vị.',
    'md.rc': 'Vai trò × lớp dữ liệu (tính từ trường "Ai được xem")', 'md.rc.note': 'Ô = số trường được xem hồ sơ của người khác trong phạm vi / tổng số trường của lớp; "+n tự thân" = chỉ xem được trên hồ sơ của chính mình. Quản trị hệ thống chỉ thấy lớp CK (A7).',
    'md.self': '+{n} tự thân', 'md.feat.directory': 'Danh sách cán bộ', 'md.feat.privacy_admin': 'Quản trị BVDLCN', 'md.feat.audit': 'Nhật ký kiểm toán', 'md.feat.accounts': 'Tài khoản & SSO',
    'md.scope': 'Phạm vi', 'md.mfa': 'MFA',
    'md.masks': 'Danh mục kỹ thuật che', 'md.ex': 'Ví dụ', 'md.live': 'Áp dụng thử', 'md.usedby': 'Trường áp dụng', 'md.anon': 'Kỹ thuật ẩn danh hoá',
    'md.alias': 'Ánh xạ trường biểu mẫu → khoá Core', 'md.alias.note': 'Biểu mẫu điện tử của 24 quy trình khai báo trường nguồn theo đường dẫn chuẩn; ứng dụng phân giải về khoá Core để tự điền (không khai lại).',
    'md.path': 'Đường dẫn biểu mẫu', 'md.target': 'Khoá Core / cách lấy', 'md.forms': 'Số biểu mẫu dùng', 'md.out': 'ngoài phạm vi demo', 'md.calc': 'tính toán', 'md.input': 'người dùng nhập',
    'md.search.n': 'Tìm thấy {n} trường khớp "{q}"', 'md.dl.note': 'Tải từ điển dữ liệu: CSV (64 trường) hoặc JSON (toàn bộ Core metadata).',
    /* privacy */
    'pv.sub': 'Thực hiện quyền của chủ thể dữ liệu theo Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15: biết, đồng ý, truy cập, chỉnh sửa, hạn chế, phản đối, xoá; minh bạch ai đã truy cập dữ liệu của bạn.',
    'pv.t.mine': 'Dữ liệu của tôi', 'pv.t.consent': 'Sự đồng ý', 'pv.t.rights': 'Quyền của chủ thể', 'pv.t.who': 'Ai đã truy cập', 'pv.t.anon': 'Phòng thử ẩn danh',
    'pv.t.queue': 'Hàng đợi yêu cầu (DPO)', 'pv.t.dpia': 'Hồ sơ DPIA', 'pv.t.breach': 'Thông báo vi phạm',
    'pv.inv': 'Danh mục dữ liệu cá nhân về tôi', 'pv.inv.note': 'Mục đích và thời hạn lưu trữ là đề xuất của ứng dụng (giả định) – cần đối chiếu quy định lưu trữ hồ sơ viên chức, kế toán của Trường.',
    'pv.field': 'Trường', 'pv.value': 'Giá trị (của tôi)', 'pv.purpose': 'Mục đích xử lý', 'pv.ret': 'Thời hạn lưu trữ', 'pv.derived': 'phát sinh trong hệ thống', 'pv.files': '{n} tệp',
    'pv.pur.person': 'Quản lý nhân sự, giải quyết chế độ', 'pv.pur.media': 'Định danh, xác thực hồ sơ', 'pv.pur.finance': 'Chi trả lương, thù lao, thuế, BHXH', 'pv.pur.employment': 'Tổ chức bộ máy, phân công',
    'pv.pur.qualification': 'Xét chức danh, phân công giảng dạy', 'pv.pur.academic': 'Công bố hồ sơ khoa học', 'pv.pur.teaching': 'Tính giờ chuẩn, thù lao vượt giờ', 'pv.pur.research': 'Tính giờ NCKH, hỗ trợ công bố',
    'pv.pur.process': 'Giải quyết hồ sơ quy trình',
    'pv.ret.person': 'Suốt thời gian công tác + lưu hồ sơ viên chức (vĩnh viễn)', 'pv.ret.media': 'Theo hồ sơ viên chức', 'pv.ret.finance': '10 năm sau năm tài chính (kế toán)',
    'pv.ret.employment': 'Vĩnh viễn (hồ sơ viên chức)', 'pv.ret.qualification': 'Theo hồ sơ viên chức', 'pv.ret.academic': 'Đến khi thôi công tác (công khai)', 'pv.ret.teaching': '10 năm',
    'pv.ret.research': '10 năm', 'pv.ret.process': '10 năm (hồ sơ điện tử)',
    'pv.c.title': 'Xử lý dữ liệu cần sự đồng ý (tuỳ chọn)', 'pv.c.note': 'Bạn có thể rút lại sự đồng ý bất kỳ lúc nào; việc rút lại không ảnh hưởng tính hợp pháp của xử lý trước đó. Mỗi thay đổi được ghi nhật ký.',
    'pv.c.web_photo': 'Hiển thị ảnh chân dung trên website Khoa', 'pv.c.survey': 'Nhận email khảo sát, lấy ý kiến', 'pv.c.orcid': 'Đồng bộ hồ sơ khoa học sang ORCID/Google Scholar',
    'pv.c.research': 'Dùng dữ liệu khối lượng công việc (đã ẩn danh) cho nghiên cứu cải tiến', 'pv.c.alumni': 'Chia sẻ thông tin liên hệ với mạng lưới đối tác doanh nghiệp',
    'pv.c.on': 'Đã đồng ý', 'pv.c.off': 'Chưa đồng ý', 'pv.c.at': 'Cập nhật: {d}', 'pv.c.legal': 'Xử lý không cần sự đồng ý (thực hiện hợp đồng làm việc, nghĩa vụ pháp lý)',
    'pv.c.l1': 'Trả lương, đóng BHXH, khấu trừ thuế TNCN', 'pv.c.l2': 'Báo cáo HEMIS, ĐHQG-HCM theo quy định', 'pv.c.l3': 'Quản lý hồ sơ viên chức, đánh giá, khen thưởng', 'pv.c.l4': 'An toàn thông tin: nhật ký truy cập',
    'pv.r.title': 'Gửi yêu cầu thực hiện quyền', 'pv.r.access': 'Truy cập và nhận bản sao', 'pv.r.access.d': 'Tải toàn bộ dữ liệu về bạn (JSON, máy đọc được). Cần xác thực lại MFA.',
    'pv.r.correct': 'Chỉnh sửa', 'pv.r.correct.d': 'Sửa trường tự cập nhật ngay; trường khác gửi đề nghị kèm minh chứng để P.TCCB xác thực.',
    'pv.r.restrict': 'Hạn chế xử lý', 'pv.r.restrict.d': 'Tạm ngừng một mục đích xử lý trong khi chờ làm rõ tính chính xác hoặc hợp pháp.',
    'pv.r.object': 'Phản đối xử lý', 'pv.r.object.d': 'Phản đối xử lý cho mục đích không bắt buộc (ví dụ: truyền thông, khảo sát).',
    'pv.r.delete': 'Xoá dữ liệu', 'pv.r.delete.d': 'Yêu cầu xoá dữ liệu không còn cần thiết cho mục đích đã thu thập.',
    'pv.r.exc': 'Ngoại lệ do nghĩa vụ lưu trữ: hồ sơ viên chức, chứng từ kế toán – lương – BHXH, hồ sơ quy trình đã ký số và nhật ký kiểm toán phải lưu theo thời hạn luật định nên không thể xoá/hạn chế ngay; DPO sẽ phản hồi rõ phạm vi áp dụng.',
    'pv.r.download': 'Tải bản sao (JSON)', 'pv.r.goprofile': 'Mở Hồ sơ số', 'pv.r.send': 'Gửi yêu cầu', 'pv.r.reason': 'Nội dung yêu cầu / lý do', 'pv.r.scope': 'Dữ liệu / mục đích liên quan',
    'pv.r.sla': 'Thời hạn (giả định của ứng dụng – cần đối chiếu Nghị định hướng dẫn Luật 91/2025/QH15): xác nhận tiếp nhận trong 72 giờ; giải quyết trong 15 ngày kể từ ngày nhận yêu cầu hợp lệ.',
    'pv.r.mine': 'Yêu cầu của tôi', 'pv.r.id': 'Mã', 'pv.r.type': 'Loại', 'pv.r.at': 'Gửi lúc', 'pv.r.ack': 'Hạn tiếp nhận', 'pv.r.due': 'Hạn giải quyết', 'pv.r.resp': 'Phản hồi', 'pv.r.from': 'Chủ thể',
    'pv.r.sent': 'Đã gửi yêu cầu tới DPO.', 'pv.r.st.moi': 'Mới', 'pv.r.st.dang_xu_ly': 'Đang xử lý', 'pv.r.st.hoan_thanh': 'Hoàn thành', 'pv.r.st.tu_choi': 'Từ chối',
    'pv.r.late': 'Quá hạn', 'pv.r.ackbtn': 'Tiếp nhận', 'pv.r.donebtn': 'Hoàn thành', 'pv.r.answer': 'Nội dung phản hồi cho chủ thể',
    'pv.w.title': 'Ai đã truy cập dữ liệu của tôi', 'pv.w.note': 'Trích từ nhật ký kiểm toán: mọi lượt xem, xuất, sửa, phê duyệt liên quan đến hồ sơ của bạn do người khác thực hiện.',
    'pv.w.who': 'Người truy cập', 'pv.w.role': 'Vai trò', 'pv.w.act': 'Hành động', 'pv.w.desc': 'Mô tả',
    'pv.a.title': 'Phòng thử ẩn danh hoá dữ liệu (A8)', 'pv.a.ds': 'Tập dữ liệu', 'pv.a.staff': 'Cán bộ (đơn vị, chức danh, học vị, nhóm tuổi)', 'pv.a.students': 'Sinh viên (ngành, khoá, mức nguy cơ)',
    'pv.a.k': 'k (kích thước nhóm tối thiểu)', 'pv.a.tech': 'Kỹ thuật áp dụng', 'pv.a.drop': 'Lược bỏ định danh trực tiếp', 'pv.a.pseudo': 'Giả danh hoá mã (SHA-256 có muối)', 'pv.a.gen': 'Tổng quát hoá',
    'pv.a.supp': 'Loại bỏ nhóm nhỏ hơn k', 'pv.a.qi': 'Thuộc tính gián tiếp giữ lại', 'pv.a.before': 'Trước (theo quyền xem của bạn)', 'pv.a.after': 'Sau ẩn danh hoá', 'pv.a.run': 'Áp dụng',
    'pv.a.in': 'Bản ghi đầu vào', 'pv.a.out': 'Bản ghi đầu ra', 'pv.a.sup': 'Bị loại (nhóm < k)', 'pv.a.min': 'Nhóm nhỏ nhất', 'pv.a.ok': 'Đạt {k}-ẩn danh', 'pv.a.risk': 'Còn {n} bản ghi thuộc nhóm < k – nguy cơ tái định danh',
    'pv.a.none': 'Vai trò hiện tại không có tập dữ liệu này trong phạm vi.', 'pv.a.dl': 'Tải CSV ẩn danh', 'pv.a.note': 'Bản "trước" hiển thị theo quyền của bạn (che/ẩn trường ngoài thẩm quyền); phép ẩn danh do hệ thống thực hiện trên bản ghi vàng. Muối giả danh thay đổi mỗi phiên báo cáo.',
    'pv.a.age': 'Nhóm tuổi', 'pv.a.gpa': 'Khoảng ĐTB', 'pv.a.by': 'Năm sinh', 'pv.a.risk2': 'Mức nguy cơ', 'pv.a.sex': 'Giới tính', 'pv.a.dept': 'Đơn vị', 'pv.a.rank': 'Chức danh', 'pv.a.deg': 'Học vị',
    'pv.a.prog': 'Ngành', 'pv.a.cohort': 'Khoá', 'pv.a.pid': 'Mã giả danh',
    'pv.d.title': 'Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA) – Ứng dụng Giảng viên', 'pv.d.status': 'Bản nháp v0.9 – chờ DPO và lãnh đạo Trường ký; rà soát lại khi thay đổi mục đích hoặc hệ thống.',
    'pv.d.purposes': 'Mục đích xử lý', 'pv.d.cats': 'Loại dữ liệu và số trường', 'pv.d.subjects': 'Chủ thể: viên chức, người lao động Khoa (27 hồ sơ giả lập); sinh viên trong phạm vi CVHT.',
    'pv.d.risk': 'Rủi ro', 'pv.d.ctrl': 'Biện pháp kiểm soát', 'pv.d.lvl': 'Mức còn lại', 'pv.d.legal': 'Luật BVDLCN 91/2025/QH15 yêu cầu lập và lưu hồ sơ đánh giá tác động xử lý DLCN – điều khoản và mẫu hồ sơ cần kiểm chứng theo văn bản hướng dẫn.',
    'pv.d.r1': 'Truy cập trái phép hồ sơ nhân sự', 'pv.d.c1': 'SSO + MFA, RBAC/ABAC theo phạm vi đơn vị, phiên 15 phút', 'pv.d.r2': 'Lộ dữ liệu nhạy cảm (tài khoản, đảng viên, dân tộc)', 'pv.d.c2': 'Che mặc định, mở xem cần mục đích + MFA step-up, hiệu lực 5 phút',
    'pv.d.r3': 'Quản trị viên lạm quyền', 'pv.d.c3': 'A7: quản trị không xem dữ liệu nghiệp vụ; nhật ký chuỗi băm do DPO giám sát', 'pv.d.r4': 'Tái định danh qua báo cáo thống kê', 'pv.d.c4': 'A8: giả danh hoá, k-ẩn danh k ≥ 5',
    'pv.d.r5': 'Dữ liệu sai lệch giữa các hệ thống', 'pv.d.c5': 'Một dữ liệu – một nguồn, đơn vị làm chủ xác thực, đối chiếu VNeID', 'pv.d.low': 'Thấp', 'pv.d.med': 'Trung bình',
    'pv.b.title': 'Mô phỏng thông báo vi phạm bảo vệ DLCN', 'pv.b.det': 'Thời điểm phát hiện', 'pv.b.desc': 'Mô tả sự cố', 'pv.b.cats': 'Loại dữ liệu bị ảnh hưởng', 'pv.b.n': 'Số chủ thể ước tính',
    'pv.b.meas': 'Biện pháp đã/đang thực hiện', 'pv.b.deadline': 'Hạn thông báo cơ quan chuyên trách: {d} (72 giờ kể từ khi phát hiện)', 'pv.b.send': 'Lập thông báo (mô phỏng)',
    'pv.b.legal': 'Mốc 72 giờ theo thông lệ NĐ 13/2023/NĐ-CP và Luật 91/2025/QH15 (thông báo Cục A05 – Bộ Công an); điều khoản cụ thể cần kiểm chứng. Đây là mô phỏng – không gửi đi đâu.',
    'pv.b.list': 'Thông báo đã lập', 'pv.b.saved': 'Đã lập thông báo mô phỏng và ghi nhật ký.', 'pv.b.need': 'Nhập mô tả sự cố.',
    /* audit */
    'au.sub': 'Nhật ký bất biến mọi thao tác trên dữ liệu cá nhân: bản ghi cục bộ được nối chuỗi băm SHA-256 (prev + nội dung). DPO giám sát; Quản trị hệ thống chỉ xem cột kỹ thuật (A7).',
    'au.total': 'Tổng bản ghi', 'au.local': 'Bản ghi chuỗi băm (phiên này)', 'au.sens': 'Xem dữ liệu nhạy cảm', 'au.fail': 'Đăng nhập lỗi', 'au.byact': 'Thống kê theo hành động',
    'au.actor': 'Người thực hiện', 'au.role': 'Vai trò', 'au.act': 'Hành động', 'au.target': 'Đối tượng', 'au.purpose': 'Mục đích', 'au.ip': 'IP', 'au.desc': 'Mô tả', 'au.hash': 'Băm', 'au.src': 'Nguồn',
    'au.seeded': 'lịch sử', 'au.localsrc': 'cục bộ', 'au.from': 'Từ ngày', 'au.to': 'Đến ngày', 'au.hidden': 'Truy cập dữ liệu cá nhân – nội dung ẩn theo A7',
    'au.check': 'Kiểm tra tính toàn vẹn', 'au.ok': 'Chuỗi băm toàn vẹn: {n} bản ghi cục bộ khớp (prev → hash).', 'au.broken': 'Chuỗi băm BỊ PHÁ VỠ tại bản ghi #{i} ({l}): {why}.',
    'au.pending': '{n} bản ghi mới đang chờ tính băm – thử lại sau giây lát.', 'au.empty': 'Chưa có bản ghi cục bộ nào để kiểm tra.', 'au.seednote': 'Bản ghi lịch sử (nạp từ hệ thống cũ) không thuộc chuỗi băm của phiên này.',
    'au.why.hash': 'băm không khớp nội dung', 'au.why.prev': 'liên kết prev không khớp bản ghi trước', 'au.max': 'Hiển thị 300 bản ghi mới nhất khớp bộ lọc.',
    /* accounts */
    'ac.sub': 'Quản trị tài khoản SSO và chính sách xác thực. Theo A7, quản trị viên chỉ thấy tên đăng nhập và vai trò – không xem dữ liệu nghiệp vụ hay dữ liệu cá nhân.',
    'ac.t.list': 'Tài khoản', 'ac.t.sso': 'Cấu hình SSO / IdP', 'ac.t.roles': 'Đề nghị gán vai trò',
    'ac.user': 'Tên đăng nhập', 'ac.roles': 'Vai trò', 'ac.mfa': 'Phương thức MFA', 'ac.locked': 'Khoá', 'ac.fails': 'Sai mật khẩu', 'ac.last': 'Đăng nhập gần nhất', 'ac.sess': 'Phiên',
    'ac.unlock': 'Mở khoá', 'ac.resetmfa': 'Đặt lại MFA', 'ac.logout': 'Buộc đăng xuất', 'ac.yes': 'Đang khoá', 'ac.no': '–', 'ac.revoked': 'Đã thu hồi {d}', 'ac.mfareset': 'chờ kích hoạt lại',
    'ac.unlocked': 'Đã mở khoá tài khoản {u}.', 'ac.mfadone': 'Đã tạo khoá TOTP mới cho {u}; liên kết kích hoạt gửi qua kênh đã xác minh – khoá bí mật không hiển thị cho quản trị viên.',
    'ac.loggedout': 'Đã thu hồi mọi phiên của {u}.', 'ac.a7': 'A7 – không hiển thị họ tên, mã cán bộ, đơn vị hay bất kỳ dữ liệu cá nhân nào.',
    'ac.oidc': 'OpenID Connect (ứng dụng web/di động)', 'ac.saml': 'SAML 2.0 (liên kết hệ thống cũ: Edusoft, Portal Office)', 'ac.policy': 'Chính sách xác thực và phiên',
    'ac.p.mfa': 'MFA bắt buộc', 'ac.p.mfa.v': 'TOTP (RFC 6238, 30 giây, 6 số) hoặc push có đối chiếu số (number matching)',
    'ac.p.step': 'Xác thực lại (step-up)', 'ac.p.step.v': 'Khi duyệt/ký số, mở xem dữ liệu che, xuất dữ liệu cá nhân – hiệu lực 5 phút',
    'ac.p.idle': 'Hết phiên khi không hoạt động', 'ac.p.idle.v': '15 phút', 'ac.p.lock': 'Khoá tài khoản', 'ac.p.lock.v': '5 lần sai liên tiếp → khoá 5 phút',
    'ac.p.pw': 'Mật khẩu', 'ac.p.pw.v': '≥ 12 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt; không trùng 5 mật khẩu gần nhất; kiểm tra danh sách mật khẩu bị lộ',
    'ac.p.sim': 'Cấu hình mô phỏng – endpoint và chứng thư là giả lập.',
    'ac.r.new': 'Tạo đề nghị gán vai trò', 'ac.r.eff': 'Hiệu lực từ', 'ac.r.basis': 'Căn cứ (quyết định phân công)', 'ac.r.send': 'Gửi P.TCCB phê duyệt', 'ac.r.sent': 'Đã gửi đề nghị tới P.TCCB.',
    'ac.r.sync': 'Đồng bộ IdP', 'ac.r.synced': 'Đã đồng bộ vai trò lên IdP (mô phỏng).', 'ac.r.note': 'Gán/thu hồi vai trò phải có quyết định phân công và được P.TCCB phê duyệt trước khi quản trị viên đồng bộ lên IdP (nguyên tắc tách nhiệm vụ).',
    'ac.r.st.cho_duyet': 'Chờ P.TCCB duyệt', 'ac.r.st.da_duyet': 'Đã duyệt – chờ đồng bộ', 'ac.r.st.tu_choi': 'Từ chối', 'ac.r.st.da_dong_bo': 'Đã đồng bộ',
  },
  en: {
    'gv.csv': 'Export CSV', 'gv.json': 'Download JSON', 'gv.search': 'Search name, ID, email…', 'gv.all': 'All', 'gv.assume': 'Assumption', 'gv.verify': 'to be verified',
    'gv.approve': 'Approve', 'gv.reject': 'Reject', 'gv.done': 'Recorded and logged.', 'gv.time': 'Time', 'gv.rows': '{n} records',
    'dr.sub': 'Staff directory within your role\'s data scope; phone numbers follow field-level permissions (RBAC/ABAC), work e-mail is public data.',
    'dr.scope': 'Scope: {s}', 'dr.photo': 'Photo', 'dr.name': 'Name', 'dr.id': 'Staff ID', 'dr.pos': 'Position', 'dr.title': 'Professional title', 'dr.deg': 'Rank & degree',
    'dr.dept': 'Department / unit', 'dr.ver': 'Verification', 'dr.contact': 'Contact', 'dr.verified': 'Verified', 'dr.pending': 'Pending', 'dr.phone.none': 'Phone: no access',
    'dr.export.note': 'The CSV contains Public (CK) and Internal (NB) fields only, per the core metadata; the export is logged.',
    'dr.q': 'Personnel Office work queue', 'dr.q.cr': 'Profile change requests awaiting approval', 'dr.q.ver': 'Profiles awaiting verification', 'dr.q.role': 'Role-assignment requests (from system admin)',
    'dr.q.field': 'Field', 'dr.q.new': 'Requested value', 'dr.q.open': 'Open "Update requests" tab', 'dr.q.openp': 'Open profile', 'dr.q.user': 'Account', 'dr.q.role2': 'Requested role',
    'dr.q.reason': 'Reason', 'dr.q.none': 'Nothing waiting.', 'dr.office': 'Central offices',
    'md.sub': 'IU Faculty Data Hub – the shared core metadata: every field has one owning unit, one source, a protection class and access rules. All modules read the same "golden record" instead of asking lecturers to re-enter data.',
    'md.t.ov': 'Overview', 'md.t.ent': 'Entities & fields', 'md.t.rbac': 'RBAC matrix', 'md.t.abac': 'ABAC rules', 'md.t.mask': 'Masking & anonymisation', 'md.t.alias': 'Form mapping',
    'md.ent': 'Entities', 'md.fields': 'Fields', 'md.roles': 'Roles', 'md.rules': 'ABAC rules', 'md.principles': 'Principles', 'md.legal': 'Legal basis', 'md.classes': 'Data classes',
    'md.nf': '{n} fields', 'md.key': 'Key', 'md.vi': 'Vietnamese label', 'md.en': 'English label', 'md.type': 'Type', 'md.cls': 'Class', 'md.owner': 'Owning unit', 'md.source': 'Source system',
    'md.mask': 'Mask', 'md.valid': 'Validation', 'md.view': 'Who can view', 'md.edit': 'Edit mode', 'md.req': 'Required',
    'md.v.all': 'Everyone (public)', 'md.v.staff': 'All staff', 'md.v.self': 'Data subject',
    'md.e.self': 'Self-service', 'md.e.self_request': 'Request – Personnel verifies', 'md.e.owner': 'Owning unit only', 'md.e.system': 'System-generated',
    'md.rbac': 'Roles × features (RBAC)', 'md.rbac.note': 'Job positions from positions.json (7 positions × 14 features); office roles, advisor, DPO and admin from the app configuration. Dean/Vice dean/Head get the Staff directory within their unit.',
    'md.rc': 'Roles × data classes (computed from "Who can view")', 'md.rc.note': 'Cell = fields viewable on other people\'s records within scope / fields in the class; "+n own" = visible on one\'s own record only. System admins see class CK only (A7).',
    'md.self': '+{n} own', 'md.feat.directory': 'Staff directory', 'md.feat.privacy_admin': 'Privacy administration', 'md.feat.audit': 'Audit log', 'md.feat.accounts': 'Accounts & SSO',
    'md.scope': 'Scope', 'md.mfa': 'MFA',
    'md.masks': 'Masking catalogue', 'md.ex': 'Example', 'md.live': 'Live test', 'md.usedby': 'Fields using it', 'md.anon': 'Anonymisation techniques',
    'md.alias': 'Form field → core key mapping', 'md.alias.note': 'The e-forms of the 24 processes declare source fields by canonical path; the app resolves them to core keys to prefill forms (no re-entry).',
    'md.path': 'Form path', 'md.target': 'Core key / resolution', 'md.forms': 'Forms using it', 'md.out': 'outside demo scope', 'md.calc': 'computed', 'md.input': 'user input',
    'md.search.n': '{n} fields match "{q}"', 'md.dl.note': 'Download the data dictionary: CSV (64 fields) or JSON (full core metadata).',
    'pv.sub': 'Exercise your data-subject rights under the Personal Data Protection Law 91/2025/QH15: to be informed, consent, access, rectify, restrict, object, erase; see who accessed your data.',
    'pv.t.mine': 'My data', 'pv.t.consent': 'Consent', 'pv.t.rights': 'My rights', 'pv.t.who': 'Who accessed', 'pv.t.anon': 'Anonymisation lab',
    'pv.t.queue': 'Request queue (DPO)', 'pv.t.dpia': 'DPIA record', 'pv.t.breach': 'Breach notification',
    'pv.inv': 'Inventory of personal data about me', 'pv.inv.note': 'Purposes and retention periods are app proposals (assumption) – to be checked against the University\'s civil-servant record and accounting retention rules.',
    'pv.field': 'Field', 'pv.value': 'Value (mine)', 'pv.purpose': 'Purpose', 'pv.ret': 'Retention', 'pv.derived': 'generated in the system', 'pv.files': '{n} files',
    'pv.pur.person': 'HR management and entitlements', 'pv.pur.media': 'Identification and record verification', 'pv.pur.finance': 'Payroll, fees, tax, social insurance', 'pv.pur.employment': 'Organisation and assignments',
    'pv.pur.qualification': 'Titles and teaching assignment', 'pv.pur.academic': 'Public research profile', 'pv.pur.teaching': 'Standard hours and overtime pay', 'pv.pur.research': 'Research hours and publication support',
    'pv.pur.process': 'Handling process requests',
    'pv.ret.person': 'Employment period + civil-servant file (permanent)', 'pv.ret.media': 'With the civil-servant file', 'pv.ret.finance': '10 years after the fiscal year (accounting)',
    'pv.ret.employment': 'Permanent (civil-servant file)', 'pv.ret.qualification': 'With the civil-servant file', 'pv.ret.academic': 'Until leaving (public)', 'pv.ret.teaching': '10 years',
    'pv.ret.research': '10 years', 'pv.ret.process': '10 years (electronic records)',
    'pv.c.title': 'Processing that needs your consent (optional)', 'pv.c.note': 'You may withdraw consent at any time; withdrawal does not affect the lawfulness of earlier processing. Every change is logged.',
    'pv.c.web_photo': 'Show my portrait on the faculty website', 'pv.c.survey': 'Receive survey and feedback e-mails', 'pv.c.orcid': 'Sync my research profile to ORCID/Google Scholar',
    'pv.c.research': 'Use my (anonymised) workload data for improvement research', 'pv.c.alumni': 'Share my contact details with the industry partner network',
    'pv.c.on': 'Consented', 'pv.c.off': 'Not consented', 'pv.c.at': 'Updated: {d}', 'pv.c.legal': 'Processing without consent (employment contract, legal obligations)',
    'pv.c.l1': 'Payroll, social insurance, personal income tax', 'pv.c.l2': 'Mandatory reporting to HEMIS and VNU-HCM', 'pv.c.l3': 'Civil-servant records, appraisal, awards', 'pv.c.l4': 'Information security: access logs',
    'pv.r.title': 'Submit a rights request', 'pv.r.access': 'Access and copy', 'pv.r.access.d': 'Download all data about you (JSON, machine-readable). Requires MFA step-up.',
    'pv.r.correct': 'Rectification', 'pv.r.correct.d': 'Self-service fields change immediately; others go to the Personnel Office with evidence.',
    'pv.r.restrict': 'Restrict processing', 'pv.r.restrict.d': 'Suspend a processing purpose while accuracy or lawfulness is being clarified.',
    'pv.r.object': 'Object to processing', 'pv.r.object.d': 'Object to non-mandatory purposes (e.g. communications, surveys).',
    'pv.r.delete': 'Erasure', 'pv.r.delete.d': 'Ask to erase data no longer needed for the purpose it was collected for.',
    'pv.r.exc': 'Retention exceptions: civil-servant files, accounting/payroll/insurance records, digitally signed process records and audit logs must be kept for statutory periods and cannot be erased or restricted immediately; the DPO will explain the exact scope.',
    'pv.r.download': 'Download copy (JSON)', 'pv.r.goprofile': 'Open e-Profile', 'pv.r.send': 'Submit request', 'pv.r.reason': 'Request details / reason', 'pv.r.scope': 'Data / purpose concerned',
    'pv.r.sla': 'Deadlines (app assumption – to be checked against the implementing decree of Law 91/2025/QH15): acknowledge within 72 hours; resolve within 15 days of a valid request.',
    'pv.r.mine': 'My requests', 'pv.r.id': 'ID', 'pv.r.type': 'Type', 'pv.r.at': 'Submitted', 'pv.r.ack': 'Acknowledge by', 'pv.r.due': 'Resolve by', 'pv.r.resp': 'Response', 'pv.r.from': 'Data subject',
    'pv.r.sent': 'Request sent to the DPO.', 'pv.r.st.moi': 'New', 'pv.r.st.dang_xu_ly': 'In progress', 'pv.r.st.hoan_thanh': 'Completed', 'pv.r.st.tu_choi': 'Rejected',
    'pv.r.late': 'Overdue', 'pv.r.ackbtn': 'Acknowledge', 'pv.r.donebtn': 'Complete', 'pv.r.answer': 'Response to the data subject',
    'pv.w.title': 'Who accessed my data', 'pv.w.note': 'From the audit trail: every view, export, edit or approval concerning your record performed by someone else.',
    'pv.w.who': 'Accessed by', 'pv.w.role': 'Role', 'pv.w.act': 'Action', 'pv.w.desc': 'Description',
    'pv.a.title': 'Anonymisation lab (A8)', 'pv.a.ds': 'Dataset', 'pv.a.staff': 'Staff (unit, title, degree, age band)', 'pv.a.students': 'Students (programme, cohort, risk level)',
    'pv.a.k': 'k (minimum group size)', 'pv.a.tech': 'Techniques', 'pv.a.drop': 'Drop direct identifiers', 'pv.a.pseudo': 'Pseudonymise IDs (salted SHA-256)', 'pv.a.gen': 'Generalise',
    'pv.a.supp': 'Suppress groups smaller than k', 'pv.a.qi': 'Quasi-identifiers kept', 'pv.a.before': 'Before (as you are allowed to see it)', 'pv.a.after': 'After anonymisation', 'pv.a.run': 'Apply',
    'pv.a.in': 'Input records', 'pv.a.out': 'Output records', 'pv.a.sup': 'Suppressed (group < k)', 'pv.a.min': 'Smallest group', 'pv.a.ok': '{k}-anonymity achieved', 'pv.a.risk': '{n} records remain in groups < k – re-identification risk',
    'pv.a.none': 'Your current role has no such dataset in scope.', 'pv.a.dl': 'Download anonymised CSV', 'pv.a.note': 'The "before" view follows your permissions (fields outside your authority are masked/hidden); anonymisation runs server-side on the golden record. The pseudonymisation salt changes per report.',
    'pv.a.age': 'Age band', 'pv.a.gpa': 'GPA range', 'pv.a.by': 'Birth year', 'pv.a.risk2': 'Risk level', 'pv.a.sex': 'Sex', 'pv.a.dept': 'Unit', 'pv.a.rank': 'Title', 'pv.a.deg': 'Degree',
    'pv.a.prog': 'Programme', 'pv.a.cohort': 'Cohort', 'pv.a.pid': 'Pseudonym',
    'pv.d.title': 'Data protection impact assessment (DPIA) – Faculty App', 'pv.d.status': 'Draft v0.9 – awaiting DPO and University leadership sign-off; review on any change of purpose or system.',
    'pv.d.purposes': 'Processing purposes', 'pv.d.cats': 'Data categories and field counts', 'pv.d.subjects': 'Subjects: faculty staff (27 simulated records); students within advisor scope.',
    'pv.d.risk': 'Risk', 'pv.d.ctrl': 'Controls', 'pv.d.lvl': 'Residual level', 'pv.d.legal': 'PDP Law 91/2025/QH15 requires an impact assessment record for personal data processing – exact article and template to be verified against implementing guidance.',
    'pv.d.r1': 'Unauthorised access to HR records', 'pv.d.c1': 'SSO + MFA, RBAC/ABAC by unit scope, 15-minute sessions', 'pv.d.r2': 'Exposure of sensitive data (bank, party, ethnicity)', 'pv.d.c2': 'Masked by default; reveal needs purpose + MFA step-up, valid 5 minutes',
    'pv.d.r3': 'Administrator abuse', 'pv.d.c3': 'A7: admins cannot see business data; hash-chained log monitored by the DPO', 'pv.d.r4': 'Re-identification via statistics', 'pv.d.c4': 'A8: pseudonymisation, k-anonymity k ≥ 5',
    'pv.d.r5': 'Inconsistent data across systems', 'pv.d.c5': 'One datum – one source, owner verification, VNeID cross-check', 'pv.d.low': 'Low', 'pv.d.med': 'Medium',
    'pv.b.title': 'Simulated personal-data breach notification', 'pv.b.det': 'Detected at', 'pv.b.desc': 'Incident description', 'pv.b.cats': 'Data categories affected', 'pv.b.n': 'Estimated data subjects',
    'pv.b.meas': 'Measures taken / in progress', 'pv.b.deadline': 'Notify the competent authority by: {d} (72 hours after detection)', 'pv.b.send': 'Create notification (simulated)',
    'pv.b.legal': '72-hour deadline per Decree 13/2023/NĐ-CP practice and Law 91/2025/QH15 (notify Department A05 – Ministry of Public Security); exact article to be verified. Simulation only – nothing is sent.',
    'pv.b.list': 'Notifications created', 'pv.b.saved': 'Simulated notification created and logged.', 'pv.b.need': 'Describe the incident.',
    'au.sub': 'Tamper-evident log of every operation on personal data: local entries are SHA-256 hash-chained (prev + content). Monitored by the DPO; system admins see technical columns only (A7).',
    'au.total': 'Total entries', 'au.local': 'Hash-chained entries (this browser)', 'au.sens': 'Sensitive-data views', 'au.fail': 'Failed sign-ins', 'au.byact': 'Entries by action',
    'au.actor': 'Actor', 'au.role': 'Role', 'au.act': 'Action', 'au.target': 'Target', 'au.purpose': 'Purpose', 'au.ip': 'IP', 'au.desc': 'Description', 'au.hash': 'Hash', 'au.src': 'Source',
    'au.seeded': 'history', 'au.localsrc': 'local', 'au.from': 'From', 'au.to': 'To', 'au.hidden': 'Personal-data access – content hidden under A7',
    'au.check': 'Check integrity', 'au.ok': 'Hash chain intact: {n} local entries match (prev → hash).', 'au.broken': 'Hash chain BROKEN at entry #{i} ({l}): {why}.',
    'au.pending': '{n} new entries are still being hashed – try again in a moment.', 'au.empty': 'No local entries to check yet.', 'au.seednote': 'Historical entries (imported from the legacy system) are not part of this browser\'s hash chain.',
    'au.why.hash': 'hash does not match content', 'au.why.prev': 'prev link does not match the previous entry', 'au.max': 'Showing the latest 300 matching entries.',
    'ac.sub': 'SSO account and authentication-policy administration. Under A7, administrators only see usernames and roles – no business or personal data.',
    'ac.t.list': 'Accounts', 'ac.t.sso': 'SSO / IdP configuration', 'ac.t.roles': 'Role-assignment requests',
    'ac.user': 'Username', 'ac.roles': 'Roles', 'ac.mfa': 'MFA method', 'ac.locked': 'Locked', 'ac.fails': 'Failed attempts', 'ac.last': 'Last sign-in', 'ac.sess': 'Sessions',
    'ac.unlock': 'Unlock', 'ac.resetmfa': 'Reset MFA', 'ac.logout': 'Force sign-out', 'ac.yes': 'Locked', 'ac.no': '–', 'ac.revoked': 'Revoked {d}', 'ac.mfareset': 'awaiting re-enrolment',
    'ac.unlocked': 'Account {u} unlocked.', 'ac.mfadone': 'A new TOTP secret was generated for {u}; the activation link goes through the verified channel – the secret is never shown to administrators.',
    'ac.loggedout': 'All sessions of {u} revoked.', 'ac.a7': 'A7 – no names, staff IDs, units or any personal data are displayed.',
    'ac.oidc': 'OpenID Connect (web/mobile app)', 'ac.saml': 'SAML 2.0 (legacy systems: Edusoft, Portal Office)', 'ac.policy': 'Authentication and session policy',
    'ac.p.mfa': 'Mandatory MFA', 'ac.p.mfa.v': 'TOTP (RFC 6238, 30 s, 6 digits) or push with number matching',
    'ac.p.step': 'Step-up re-authentication', 'ac.p.step.v': 'For approvals/e-signatures, revealing masked data, exporting personal data – valid 5 minutes',
    'ac.p.idle': 'Idle session timeout', 'ac.p.idle.v': '15 minutes', 'ac.p.lock': 'Account lockout', 'ac.p.lock.v': '5 consecutive failures → locked for 5 minutes',
    'ac.p.pw': 'Password', 'ac.p.pw.v': '≥ 12 characters with upper/lower case, digit and symbol; not one of the last 5; checked against breached-password lists',
    'ac.p.sim': 'Simulated configuration – endpoints and certificates are fictitious.',
    'ac.r.new': 'New role-assignment request', 'ac.r.eff': 'Effective from', 'ac.r.basis': 'Basis (assignment decision)', 'ac.r.send': 'Send to Personnel Office', 'ac.r.sent': 'Request sent to the Personnel Office.',
    'ac.r.sync': 'Sync to IdP', 'ac.r.synced': 'Role synchronised to the IdP (simulated).', 'ac.r.note': 'Granting/revoking a role needs an assignment decision and Personnel Office approval before the admin syncs it to the IdP (segregation of duties).',
    'ac.r.st.cho_duyet': 'Awaiting Personnel approval', 'ac.r.st.da_duyet': 'Approved – awaiting sync', 'ac.r.st.tu_choi': 'Rejected', 'ac.r.st.da_dong_bo': 'Synced',
  },
});
(function () {
  const t = App.t, esc = App.esc, D = App.D, M = D.metadata;
  const tr = (vi, en) => (App.lang === 'vi' ? vi : en);

  /* ------------------------------------------------------------ tiện ích dùng chung */
  function download(name, text, mime) {
    try {
      const blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    } catch (e) { App.ui.toast(String(e), 'bad'); }
  }
  function csv(rows) {
    const q = (v) => { const s = v == null ? '' : Array.isArray(v) ? v.join('; ') : String(v); return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    return '﻿' + rows.map((r) => r.map(q).join(',')).join('\r\n');
  }
  const nm = (s) => (s ? App.name(s, { title: true }) : '–');
  const accOf = (ma) => D.accounts.find((a) => a.ma_cb === ma);
  const deptLabel = (s) => (s.bo_mon ? App.L(App.dept(s.bo_mon)) : ((D.org.offices || []).find((o) => o.code === s.don_vi) ? App.L(D.org.offices.find((o) => o.code === s.don_vi)) : s.don_vi || ''));
  const posLabel = (s) => (App.lang === 'en' && s.chuc_vu_en) || s.chuc_vu || App.roleName(s.vi_tri);
  const titleLabel = (s) => (App.lang === 'en' && s.chuc_danh_en) || s.chuc_danh || '';
  const degLabel = (s) => [s.hoc_ham, s.hoc_vi].filter(Boolean).join(', ');
  const locIso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 19);   // giờ địa phương, không hậu tố Z
  const plusH = (iso, h) => locIso(new Date(new Date(iso).getTime() + h * 3.6e6));
  const nowIso = () => locIso(App.now());
  const tagCls = (code) => App.ui.cls(code);

  /* đề nghị gán vai trò: dùng chung giữa accounts (ADMIN tạo) và directory (CV_TCCB duyệt) */
  const ROLE_SEED = [
    { id: 'PQ-2026-014', username: 'huylg', role: 'CVHT', reason: 'QĐ phân công CVHT lớp EE-ĐTVT K2026', eff: '2026-10-15', at: '2026-10-14T09:12:00', status: 'cho_duyet' },
    { id: 'PQ-2026-015', username: 'nghiath', role: 'TBM', reason: 'Tạm quyền Trưởng Bộ môn ĐTVT 20/10–20/11/2026 (TBM đi công tác)', eff: '2026-10-20', at: '2026-10-17T15:40:00', status: 'cho_duyet' },
    { id: 'PQ-2026-009', username: 'thaontp', role: 'CVHT', reason: 'QĐ phân công CVHT lớp EE-ĐKTĐH K2025', eff: '2026-09-01', at: '2026-08-25T10:05:00', status: 'da_dong_bo' },
  ];
  const roleReqs = () => { const l = App.store.get()['ac.roleReqs']; return l ? l : ROLE_SEED.map((x) => Object.assign({}, x)); };
  const saveRoleReqs = (l) => App.store.patch('ac.roleReqs', l);
  const roleStatusBadge = (st) => App.ui.badge(t('ac.r.st.' + st), st === 'cho_duyet' ? 'warn' : st === 'tu_choi' ? 'bad' : st === 'da_duyet' ? 'info' : 'ok');

  /* yêu cầu thực hiện quyền của chủ thể: dùng chung giữa người dùng và DPO */
  const PV_SEED = [
    { id: 'QR-2026-031', ma_cb: '1538', type: 'object', scope: 'Ảnh chân dung trên website Khoa', reason: 'Không đồng ý đăng ảnh trên trang tin tuyển sinh.', at: '2026-10-19T08:30:00', status: 'moi' },
    { id: 'QR-2026-027', ma_cb: '2382', type: 'delete', scope: 'Email cá nhân', reason: 'Đề nghị xoá email cá nhân cũ, chỉ dùng email công vụ.', at: '2026-10-08T14:10:00', status: 'dang_xu_ly', ack_at: '2026-10-09T09:00:00' },
  ];
  const pvReqs = () => { const l = App.store.get()['pv.requests']; return (l ? l : PV_SEED.map((x) => Object.assign({}, x))).map((r) => Object.assign({ ack_due: plusH(r.at, 72), due: plusH(r.at, 15 * 24) }, r)); };
  const savePv = (l) => App.store.patch('pv.requests', l);
  const pvBadge = (r) => {
    const late = r.status !== 'hoan_thanh' && r.status !== 'tu_choi' && new Date(r.status === 'moi' ? r.ack_due : r.due) < App.now();
    return App.ui.badge(t('pv.r.st.' + r.status), r.status === 'hoan_thanh' ? 'ok' : r.status === 'tu_choi' ? 'bad' : 'warn') + (late ? ' ' + App.ui.badge(t('pv.r.late'), 'bad') : '');
  };
  const pvType = (k) => t('pv.r.' + k);

  /* ================================================================ DIRECTORY */
  const drState = { q: '', dept: '', pos: '', deg: '', ver: '' };
  App.page('directory', {
    render(main) {
      const u = App.user();
      if (!App.acl.has('directory')) { main.innerHTML = `<div class="notice bad">${t('noaccess')}</div>`; return; }
      const all = App.staffList().filter((s) => App.acl.inScope(s));
      const scope = App.acl.scopeOf(u.role);
      App.audit('XEM', 'Xem danh sách cán bộ (' + all.length + ' hồ sơ)', '', 'Thực hiện nhiệm vụ quản lý');
      const canProfile = App.canNav(App.NAV.find((n) => n.k === 'profile'));
      const depts = [...new Set(all.map((s) => s.bo_mon || '_office'))];
      const poss = [...new Set(all.map((s) => s.vi_tri))];
      const opt = (v, l, cur) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(l)}</option>`;
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.directory')}</div><h1>${t('nav.directory')}</h1><p>${t('dr.sub')}</p></div>
          <div class="row no-print"><span class="chip">${t('dr.scope', { s: t('scope.' + scope) })}</span><button class="btn ghost" data-csv>${t('gv.csv')}</button></div></div>
        <div data-queue></div>
        <div class="card"><div class="grid g4" style="align-items:end">
          <label>${t('search')}<input data-f="q" value="${esc(drState.q)}" placeholder="${esc(t('gv.search'))}"></label>
          <label>${t('dr.dept')}<select data-f="dept">${opt('', t('gv.all'), drState.dept)}${depts.map((d) => opt(d, d === '_office' ? t('dr.office') : App.L(App.dept(d)), drState.dept)).join('')}</select></label>
          <label>${t('dr.pos')}<select data-f="pos">${opt('', t('gv.all'), drState.pos)}${poss.map((p) => opt(p, App.roleName(p), drState.pos)).join('')}</select></label>
          <div class="row"><label style="flex:1">${t('dr.deg')}<select data-f="deg">${opt('', t('gv.all'), drState.deg)}${['TS', 'ThS', 'KS'].map((d) => opt(d, d, drState.deg)).join('')}</select></label>
          <label style="flex:1">${t('dr.ver')}<select data-f="ver">${opt('', t('gv.all'), drState.ver)}${opt('ok', t('dr.verified'), drState.ver)}${opt('pending', t('dr.pending'), drState.ver)}</select></label></div>
        </div><p class="small muted" style="margin:8px 0 0">${t('dr.export.note')}</p></div>
        <div class="card" data-list></div>`;
      const listEl = main.querySelector('[data-list]');
      const filtered = () => all.filter((s) => {
        const q = drState.q.trim().toLowerCase();
        if (q && ![App.name(s), s.ma_cb, App.anon ? '' : s.email].join(' ').toLowerCase().includes(q)) return false;
        if (drState.dept && (s.bo_mon || '_office') !== drState.dept) return false;
        if (drState.pos && s.vi_tri !== drState.pos) return false;
        if (drState.deg && s.hoc_vi !== drState.deg) return false;
        const pend = s.trang_thai_xac_thuc === 'cho_xac_thuc';
        if (drState.ver === 'ok' && pend) return false;
        if (drState.ver === 'pending' && !pend) return false;
        return true;
      });
      const phone = (s) => {
        const lv = App.acl.field('dien_thoai', s);
        if (lv === 'full') return '☎ ' + esc(s.dien_thoai);
        if (lv === 'masked') return '☎ ' + esc(App.mask(s.dien_thoai, 'last3'));
        return `<span class="muted">${t('dr.phone.none')}</span>`;
      };
      const drawList = () => {
        const rows = filtered();
        listEl.innerHTML = `<div class="card-h"><h3>${t('nav.directory')}</h3><span class="muted small">${t('gv.rows', { n: rows.length })}</span></div>` + App.ui.table([
          { t: t('dr.photo'), f: (s) => `<img src="${esc(App.photo(s))}" alt="" style="width:36px;height:48px;object-fit:cover;border-radius:4px;background:#eef">`, cls: 'c' },
          { t: t('dr.name'), f: (s) => `<b>${esc(nm(s))}</b>` }, { t: t('dr.id'), f: (s) => esc(s.ma_cb) },
          { t: t('dr.pos'), f: (s) => esc(posLabel(s)) }, { t: t('dr.title'), f: (s) => `<span class="small">${esc(titleLabel(s))}</span>` },
          { t: t('dr.deg'), f: (s) => esc(degLabel(s)) }, { t: t('dr.dept'), f: (s) => `<span class="small">${esc(deptLabel(s))}</span>` },
          { t: t('dr.ver'), f: (s) => (s.trang_thai_xac_thuc === 'cho_xac_thuc' ? App.ui.badge(t('dr.pending'), 'warn') : App.ui.badge(t('dr.verified'), 'ok')) },
          { t: t('dr.contact'), f: (s) => `<div class="small">✉ ${esc(App.anon && s.ma_cb !== u.ma_cb ? App.mask(s.email, 'email') : s.email)}</div><div class="small">${phone(s)}</div>` },
        ], rows, { rowAttr: (s) => (canProfile ? `class="click" data-go="${esc(s.ma_cb)}"` : '') });
        listEl.querySelectorAll('[data-go]').forEach((r) => (r.onclick = () => (location.hash = '#/profile/' + r.dataset.go)));
      };
      main.querySelectorAll('[data-f]').forEach((el) => (el[el.tagName === 'INPUT' ? 'oninput' : 'onchange'] = () => { drState[el.dataset.f] = el.value; drawList(); }));
      drawList();
      main.querySelector('[data-csv]').onclick = () => {
        const rows = filtered();
        const keys = ['ma_cb', 'ho_ten', 'chuc_vu', 'chuc_danh', 'hoc_ham', 'hoc_vi', 'bo_mon', 'don_vi', 'email', 'kiem_nhiem', 'ngay_vao_truong'];
        const ok = keys.filter((k) => { const f = App.metaField(k) || (k === 'ho_ten' ? { cls: 'CK' } : null); return f && (f.cls === 'CK' || f.cls === 'NB'); });
        const out = [ok.map((k) => { const f = App.metaField(k); return (f ? App.L(f) : t('dr.name')) + ' [' + (f ? f.cls : 'CK') + ']'; })];
        rows.forEach((s) => out.push(ok.map((k) => (k === 'ho_ten' ? App.name(s) : k === 'email' && App.anon ? '' : k === 'ma_cb' && App.anon ? App.pseudo(s.ma_cb, 'CB') : s[k]))));
        download('danh_sach_can_bo_' + D.meta.today + '.csv', csv(out), 'text/csv;charset=utf-8');
        App.audit('XUAT', 'Xuất CSV danh sách cán bộ (' + rows.length + ' dòng, chỉ trường CK/NB)', '', 'Thực hiện nhiệm vụ quản lý');
        App.ui.toast(t('gv.done'), 'ok');
      };
      if (u.role === 'CV_TCCB') drawQueue(main.querySelector('[data-queue]'));
    },
  });
  function drawQueue(el) {
    const crs = App.store.list('changeRequests').filter((r) => r.status === 'cho_duyet');
    const pend = App.staffList().filter((s) => s.trang_thai_xac_thuc === 'cho_xac_thuc');
    const rr = roleReqs();
    const pendRoles = rr.filter((r) => r.status === 'cho_duyet');
    el.innerHTML = `<div class="card" style="border-left:4px solid var(--warn)"><div class="card-h"><h3>${t('dr.q')}</h3>
        <span class="row">${App.ui.badge(crs.length + ' · ' + t('dr.q.cr'), crs.length ? 'warn' : 'ok')}${App.ui.badge(pend.length + ' · ' + t('dr.q.ver'), pend.length ? 'warn' : 'ok')}${App.ui.badge(pendRoles.length + ' · ' + t('dr.q.role'), pendRoles.length ? 'warn' : 'ok')}</span></div>
      <div class="grid g2"><div><h4 style="margin:4px 0 8px">${t('dr.q.cr')}</h4>${App.ui.table([
        { t: t('date'), f: (r) => App.fmtDT(r.at) }, { t: t('dr.name'), f: (r) => esc(nm(App.staff(r.ma_cb))) }, { t: t('dr.q.field'), f: (r) => esc(App.L(App.metaField(r.field))) },
        { t: '', f: (r) => `<a class="btn ghost sm" href="#/profile/${esc(r.ma_cb)}/hist">${t('dr.q.open')}</a>` }], crs, { empty: t('dr.q.none') })}</div>
      <div><h4 style="margin:4px 0 8px">${t('dr.q.ver')}</h4>${App.ui.table([
        { t: t('dr.name'), f: (s) => esc(nm(s)) }, { t: t('dr.id'), f: (s) => esc(s.ma_cb) }, { t: t('dr.dept'), f: (s) => `<span class="small">${esc(deptLabel(s))}</span>` },
        { t: '', f: (s) => `<a class="btn ghost sm" href="#/profile/${esc(s.ma_cb)}">${t('dr.q.openp')}</a>` }], pend, { empty: t('dr.q.none') })}</div></div>
      <h4 style="margin:12px 0 8px">${t('dr.q.role')}</h4>${App.ui.table([
        { t: 'ID', k: 'id' }, { t: t('dr.q.user'), f: (r) => esc(r.username) }, { t: t('dr.q.role2'), f: (r) => esc(r.role + ' – ' + App.roleName(r.role)) }, { t: t('dr.q.reason'), f: (r) => `<span class="small">${esc(r.reason)}</span>` },
        { t: t('ac.r.eff'), f: (r) => App.fmtDate(r.eff) }, { t: t('status'), f: (r) => roleStatusBadge(r.status) },
        { t: t('action'), f: (r) => (r.status === 'cho_duyet' ? `<button class="btn ok sm" data-ra="${esc(r.id)}">${t('gv.approve')}</button> <button class="btn bad sm" data-rr="${esc(r.id)}">${t('gv.reject')}</button>` : '') }], rr, { empty: t('dr.q.none') })}
      <p class="small muted">${t('ac.r.note')}</p></div>`;
    const act = (id, ok) => App.stepUp('Phê duyệt đề nghị gán vai trò ' + id).then((pass) => {
      if (!pass) return;
      const l = roleReqs(); const r = l.find((x) => x.id === id); r.status = ok ? 'da_duyet' : 'tu_choi'; r.by = App.user().ma_cb; r.dec_at = nowIso(); saveRoleReqs(l);
      App.audit(ok ? 'DUYET' : 'TU_CHOI', (ok ? 'Duyệt' : 'Từ chối') + ' gán vai trò ' + r.role + ' cho tài khoản ' + r.username, '', 'Quản lý phân quyền');
      App.notify('ADMIN', 'P.TCCB ' + (ok ? 'đã duyệt' : 'từ chối') + ' đề nghị ' + id + ' (' + r.username + ' → ' + r.role + ')', '#/accounts');
      App.ui.toast(t('gv.done'), 'ok'); drawQueue(el);
    });
    el.querySelectorAll('[data-ra]').forEach((b) => (b.onclick = () => act(b.dataset.ra, true)));
    el.querySelectorAll('[data-rr]').forEach((b) => (b.onclick = () => act(b.dataset.rr, false)));
  }

  /* ================================================================ METADATA */
  const OFFICE_FEATS = { CVHT: ['eprofile', 'eprocess', 'sv_advisor', 'sv_warning'], CV_TCCB: ['eprofile', 'eprocess', 'directory'], CV_DTDH: ['eprocess', 'sv_warning', 'directory'],
    CV_QLKH: ['eprocess', 'rs_paper', 'rs_project'], BGH: ['dashboard', 'decision', 'eprocess', 'directory'], DPO: ['privacy_admin', 'audit'], ADMIN: ['accounts', 'audit'] };   // phản ánh cấu hình trong core.js
  const featsOf = (r) => { const p = App.position(r); const f = p ? p.features.slice() : (OFFICE_FEATS[r] || []).slice(); if (['TK', 'PTK', 'TBM'].includes(r)) f.push('directory'); return f; };
  const allFields = () => M.entities.flatMap((e) => e.fields.map((f) => Object.assign({ entity: e.key, entityObj: e }, f)));
  const viewLabel = (v) => (v === '*' ? t('md.v.all') : v === 'staff' ? t('md.v.staff') : v === 'self' ? t('md.v.self') : v);
  function canView(role, f) {
    if (role === 'ADMIN') return f.cls === 'CK' ? 'yes' : 'no';
    const v = f.view || [];
    if (v.includes('*') || v.includes('staff') || v.includes(role)) return 'yes';
    if (v.includes('self')) return 'self';
    return 'no';
  }
  function dictCsv() {
    const rows = [['entity', 'key', 'label_vi', 'label_en', 'type', 'class', 'owner', 'source', 'required', 'mask', 'validation', 'view', 'edit', 'note']];
    allFields().forEach((f) => rows.push([f.entity, f.key, f.vi, f.en, f.type, f.cls, f.owner, f.source, f.required ? 'yes' : 'no', f.mask, f.validation, (f.view || []).join('|'), f.edit, f.note]));
    return csv(rows);
  }
  const mdState = { tab: 'ov', q: '', ent: '' };
  App.page('metadata', {
    render(main, params) {
      const fields = allFields();
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.metadata')}</div><h1>${esc(App.L(M, 'title'))} <span class="muted small">v${esc(M.version)} · ${App.fmtDate(M.date)}</span></h1><p>${t('md.sub')}</p></div>
          <div class="row no-print"><input data-q placeholder="${esc(t('search'))}" value="${esc(mdState.q)}" style="min-width:200px"><button class="btn ghost" data-dl="csv">${t('gv.csv')}</button><button class="btn ghost" data-dl="json">${t('gv.json')}</button></div></div>
        <div data-tabs></div><div data-body></div>`;
      const body = main.querySelector('[data-body]');
      const tabsEl = main.querySelector('[data-tabs]');
      const TABS = ['ov', 'ent', 'rbac', 'abac', 'mask', 'alias'];
      if (TABS.includes(params[0])) mdState.tab = params[0];
      const show = (k) => { mdState.tab = k; ({ ov: mdOverview, ent: mdEntities, rbac: mdRbac, abac: mdAbac, mask: mdMasks, alias: mdAlias })[k](body, fields); };
      const drawTabs = () => App.ui.tabs(tabsEl, TABS.map((k) => ({ k, t: t('md.t.' + k) })), mdState.tab, show);
      drawTabs(); show(mdState.tab);
      main.querySelector('[data-q]').oninput = (e) => { mdState.q = e.target.value; if (mdState.tab !== 'ent') { mdState.tab = 'ent'; drawTabs(); } show('ent'); };
      main.querySelectorAll('[data-dl]').forEach((b) => (b.onclick = () => {
        if (b.dataset.dl === 'csv') download('core_metadata_tu_dien_du_lieu.csv', dictCsv(), 'text/csv;charset=utf-8');
        else download('core_metadata.json', JSON.stringify(M, null, 2), 'application/json');
        App.audit('XUAT', 'Tải từ điển dữ liệu Core metadata (' + b.dataset.dl.toUpperCase() + ')', '', 'Tra cứu');
      }));
    },
  });
  function mdOverview(body, fields) {
    const cnt = (c) => fields.filter((f) => f.cls === c).length;
    body.innerHTML = `<div class="kpis">${App.ui.kpi(t('md.ent'), M.entities.length, '')}${App.ui.kpi(t('md.fields'), fields.length, '', 'cyan')}${App.ui.kpi(t('md.roles'), M.roles.length, '')}${App.ui.kpi(t('md.rules'), M.abac.length, 'A1–A' + M.abac.length, 'ok')}</div>
      <div class="card"><h3>${t('md.classes')}</h3><div class="grid g4">${M.classes.map((c) => `<div style="border:1px solid var(--line);border-top:6px solid ${esc(c.color)};border-radius:10px;padding:12px">
        <div class="row between"><b>${esc(c.code)} – ${esc(App.L(c))}</b>${App.ui.badge(t('md.nf', { n: cnt(c.code) }), 'info')}</div><p class="small" style="margin:6px 0 0">${esc(App.L(c, 'desc'))}</p></div>`).join('')}</div></div>
      <div class="grid g-2-1"><div class="card"><h3>${t('md.principles')}</h3><div class="grid g2">${M.principles.map((p, i) => `<div><b>${i + 1}. ${esc(App.L(p))}</b><p class="small muted" style="margin:4px 0 0">${esc(App.L(p, 'desc'))}</p></div>`).join('')}</div></div>
      <div class="card"><h3>${t('md.legal')}</h3><ul class="small" style="padding-left:18px;margin:0">${M.legal.map((l) => `<li style="margin:4px 0">${esc(l)}</li>`).join('')}</ul></div></div>
      <div class="card"><h3>${t('md.ent')}</h3>${App.ui.table([{ t: t('md.key'), f: (e) => `<code>${esc(e.key)}</code>` }, { t: t('md.ent'), f: (e) => esc(App.L(e)) }, { t: t('md.owner'), k: 'owner' },
        { t: t('md.fields'), f: (e) => e.fields.length, cls: 'num' }, { t: t('md.cls'), f: (e) => [...new Set(e.fields.map((f) => f.cls))].map(tagCls).join(' ') }], M.entities, { rowAttr: (e) => `class="click" data-ent="${esc(e.key)}"` })}
        <p class="small muted">${t('md.dl.note')}</p></div>`;
    body.querySelectorAll('[data-ent]').forEach((r) => (r.onclick = () => { mdState.ent = r.dataset.ent; mdState.q = ''; location.hash = '#/metadata/ent'; }));
  }
  function mdEntities(body, fields) {
    const q = mdState.q.trim().toLowerCase();
    const list = q ? fields.filter((f) => [f.key, f.vi, f.en, f.owner, f.source, f.entity].join(' ').toLowerCase().includes(q)) : fields.filter((f) => !mdState.ent || f.entity === mdState.ent);
    body.innerHTML = `<div class="card"><div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn sm ${!mdState.ent ? '' : 'ghost'}" data-e="">${t('gv.all')} (${fields.length})</button>${M.entities.map((e) => `<button class="btn sm ${mdState.ent === e.key ? '' : 'ghost'}" data-e="${esc(e.key)}">${esc(App.L(e))} (${e.fields.length})</button>`).join('')}</div>
      ${q ? `<p class="small muted">${esc(t('md.search.n', { n: list.length, q: mdState.q }))}</p>` : ''}</div>
      <div class="card">${App.ui.table([
        { t: t('md.key'), f: (f) => `<code>${esc(f.key)}</code><div class="small muted">${esc(f.entity)}</div>` }, { t: t('md.vi'), k: 'vi' }, { t: t('md.en'), k: 'en' }, { t: t('md.type'), k: 'type' },
        { t: t('md.cls'), f: (f) => tagCls(f.cls), cls: 'c' }, { t: t('md.owner'), k: 'owner' }, { t: t('md.source'), f: (f) => `<span class="small">${esc(f.source)}</span>` },
        { t: t('md.mask'), f: (f) => (f.mask ? `<code>${esc(f.mask)}</code>` : '–') }, { t: t('md.valid'), f: (f) => `<span class="small">${esc(f.validation || '–')}</span>` },
        { t: t('md.view'), f: (f) => `<span class="small">${esc((f.view || []).map(viewLabel).join(', '))}</span>` }, { t: t('md.edit'), f: (f) => `<span class="small">${esc(t('md.e.' + f.edit))}</span>` },
      ], list)}</div>`;
    body.querySelectorAll('[data-e]').forEach((b) => (b.onclick = () => { mdState.ent = b.dataset.e; mdState.q = ''; const qi = document.querySelector('[data-q]'); if (qi) qi.value = ''; mdEntities(body, fields); }));
  }
  function mdRbac(body, fields) {
    const roles = (D.positions.positions || []).map((p) => p.code).concat(['CVHT', 'CV_TCCB', 'CV_DTDH', 'CV_QLKH', 'BGH', 'DPO', 'ADMIN']);
    const feats = (D.positions.features || []).map((f) => ({ key: f.key, l: App.L(f) })).concat(['directory', 'privacy_admin', 'audit', 'accounts'].map((k) => ({ key: k, l: t('md.feat.' + k) })));
    const cell = (r, f) => (featsOf(r).includes(f.key) ? '<b style="color:var(--ok)">✓</b>' : '<span class="muted">·</span>');
    const metaRole = (r) => M.roles.find((x) => x.code === r) || {};
    const rbac = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>${t('md.roles')}</th>${feats.map((f) => `<th class="c" title="${esc(f.l)}" style="white-space:normal;min-width:70px;font-size:.72rem">${esc(f.l)}</th>`).join('')}</tr></thead><tbody>
      ${roles.map((r) => `<tr><td><b>${esc(r)}</b><div class="small muted">${esc(App.roleName(r))}</div></td>${feats.map((f) => `<td class="c">${cell(r, f)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    const tot = (c) => fields.filter((f) => f.cls === c).length;
    const color = (c) => (M.classes.find((x) => x.code === c) || {}).color || '#2E3191';
    const rc = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>${t('md.roles')}</th><th>${t('md.scope')}</th><th>${t('md.mfa')}</th>${M.classes.map((c) => `<th class="c">${esc(c.code)} – ${esc(App.L(c))}</th>`).join('')}</tr></thead><tbody>
      ${M.roles.map((r) => `<tr><td><b>${esc(r.code)}</b><div class="small muted">${esc(App.L(r))}</div></td><td class="small">${esc(t('scope.' + r.scope))}</td><td class="small">${esc(r.mfa)}</td>${M.classes.map((c) => {
        const fs = fields.filter((f) => f.cls === c.code); const y = fs.filter((f) => canView(r.code, f) === 'yes').length; const s = fs.filter((f) => canView(r.code, f) === 'self').length;
        const a = (y / (tot(c.code) || 1));
        return `<td class="c" style="background:${color(c.code)}${Math.round(a * 0.6 * 255).toString(16).padStart(2, '0')}"><b>${y}/${tot(c.code)}</b>${s ? `<div class="small">${t('md.self', { n: s })}</div>` : ''}</td>`;
      }).join('')}</tr>`).join('')}</tbody></table></div>`;
    body.innerHTML = `<div class="card"><h3>${t('md.rbac')}</h3>${rbac}<p class="small muted">${t('md.rbac.note')}</p></div>
      <div class="card"><h3>${t('md.rc')}</h3>${rc}<p class="small muted">${t('md.rc.note')}</p></div>`;
  }
  function mdAbac(body) {
    body.innerHTML = `<div class="card"><h3>${t('md.t.abac')}</h3>${App.ui.table([{ t: 'ID', f: (r) => `<b>${esc(r.id)}</b>`, cls: 'c' }, { t: t('pv.w.desc'), f: (r) => esc(App.L(r)) },
      { t: tr('Biểu thức', 'Expression'), f: (r) => `<code class="small">${esc(r.expr)}</code>` }], M.abac)}</div>`;
  }
  function mdMasks(body, fields) {
    const SAMPLE = { last4: '051076895361', last3: '0831788433', year_only: '1976-10-10', province_only: 'Số 106, Thôn 9, Tỉnh Quảng Ngãi', email: 'phuclh.49@example.com', hidden: 'Kinh' };
    body.innerHTML = `<div class="card"><h3>${t('md.masks')}</h3>${App.ui.table([
      { t: t('md.key'), f: (m) => `<code>${esc(m.code)}</code>` }, { t: tr('Mô tả', 'Description'), f: (m) => esc(App.L(m)) }, { t: t('md.ex'), f: (m) => `<code>${esc(m.example)}</code>` },
      { t: t('md.live'), f: (m) => `<span class="small muted">${esc(SAMPLE[m.code] || '')}</span> → <code>${esc(App.mask(SAMPLE[m.code] || 'x', m.code))}</code>` },
      { t: t('md.usedby'), f: (m) => `<span class="small">${esc(fields.filter((f) => f.mask === m.code).map((f) => f.key).join(', ') || '–')}</span>` }], M.masks)}</div>
      <div class="card"><h3>${t('md.anon')}</h3><div class="grid g4">${M.anonymisation.map((a) => `<div style="border:1px solid var(--line);border-radius:10px;padding:12px"><b>${esc(App.L(a))}</b> <code class="small">${esc(a.code)}</code><p class="small" style="margin:6px 0 0">${esc(App.L(a, 'desc'))}</p></div>`).join('')}</div>
      <p class="small muted">${esc(App.L(M.abac.find((r) => r.id === 'A8') || {}))} <a href="#/privacy/anon">→ ${t('pv.t.anon')}</a></p></div>`;
  }
  function mdAlias(body) {
    const formFields = D.processes.flatMap((p) => ((p.form || {}).fields || []).map((f) => ({ src: f.src, p: p.code })));
    const rows = Object.entries(M.src_aliases || {}).map(([path, v]) => ({ path, v, n: new Set(formFields.filter((f) => f.src === path).map((f) => f.p)).size }));
    const tgt = (v) => {
      if (v == null) return App.ui.badge(t('md.out'), 'warn');
      if (v === 'input') return App.ui.badge(t('md.input'), 'info');
      if (/^calc:/.test(v)) return App.ui.badge(t('md.calc'), 'navy') + ` <code class="small">${esc(v.slice(5))}</code>`;
      const f = App.metaField(v); return `<code>${esc(v)}</code> ${f ? esc(App.L(f)) + ' ' + tagCls(f.cls) : ''}`;
    };
    const nul = rows.filter((r) => r.v == null).length;
    body.innerHTML = `<div class="card"><div class="card-h"><h3>${t('md.alias')}</h3><span class="row">${App.ui.badge(rows.length + ' ' + t('md.fields').toLowerCase(), 'info')}${App.ui.badge(nul + ' · ' + t('md.out'), 'warn')}</span></div>
      <p class="small muted">${t('md.alias.note')}</p>${App.ui.table([{ t: t('md.path'), f: (r) => `<code class="small">&#8203;${esc(r.path)}</code>` }, { t: t('md.target'), f: (r) => tgt(r.v) }, { t: t('md.forms'), f: (r) => r.n || '–', cls: 'num' }], rows)}</div>`;
  }

  /* ================================================================ PRIVACY */
  const CONSENTS = ['web_photo', 'survey', 'orcid', 'research', 'alumni'];
  const pvState = { ds: 'staff', k: 5, drop: true, pseudo: true, gen: true, supp: true, qi: null };
  App.page('privacy', {
    render(main, params) {
      const u = App.user();
      const dpo = u.role === 'DPO' || App.acl.has('privacy_admin');
      const tabs = ['mine', 'consent', 'rights', 'who', 'anon'].concat(dpo ? ['queue', 'dpia', 'breach'] : []);
      const active = tabs.includes(params[0]) ? params[0] : (dpo ? 'queue' : 'mine');
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.privacy')}</div><h1>${t('nav.privacy')}</h1><p>${t('pv.sub')}</p></div></div><div data-tabs></div><div data-body></div>`;
      const body = main.querySelector('[data-body]');
      const F = { mine: pvMine, consent: pvConsent, rights: pvRights, who: pvWho, anon: pvAnon, queue: pvQueue, dpia: pvDpia, breach: pvBreach };
      const show = (k) => F[k](body, u);
      App.ui.tabs(main.querySelector('[data-tabs]'), tabs.map((k) => ({ k, t: t('pv.t.' + k) })), active, show);
      show(active);
    },
  });
  function myValue(me, f) {
    const v = me[f.key];
    if (['photo', 'id_front', 'id_back'].includes(f.key)) return me.media && me.media[f.key] ? tr('tệp ảnh', 'image file') : '–';
    if (f.key === 'docs') return t('pv.files', { n: (me.docs || []).length });
    if (v === undefined) return '(' + t('pv.derived') + ')';
    if (v === null || v === '') return '–';
    if (typeof v === 'boolean') return v ? t('yes') : t('no');
    if (Array.isArray(v)) return v.join('; ') || '–';
    if (f.cls === 'NC') return App.mask(v, f.mask || 'hidden');
    if (f.type === 'date') return App.fmtDate(v);
    return String(v);
  }
  function pvMine(body, u) {
    const me = App.staff(u.ma_cb);
    const ents = M.entities.filter((e) => e.key !== 'student');
    const groups = M.classes.map((c) => ({ c, rows: ents.flatMap((e) => e.fields.filter((f) => f.cls === c.code).map((f) => Object.assign({ ent: e }, f))) })).filter((g) => g.rows.length);
    body.innerHTML = `<div class="notice small">${t('pv.inv.note')}</div>` + groups.map((g) => `<div class="card" style="border-top:5px solid ${esc(g.c.color)}"><div class="card-h"><h3>${esc(g.c.code)} – ${esc(App.L(g.c))}</h3>${App.ui.badge(t('md.nf', { n: g.rows.length }), 'info')}</div>
      <p class="small muted" style="margin-top:0">${esc(App.L(g.c, 'desc'))}</p>${App.ui.table([
        { t: t('pv.field'), f: (f) => `<b>${esc(App.L(f))}</b><div class="small muted">${esc(App.L(f.ent))}</div>` }, { t: t('pv.value'), f: (f) => `<span class="small">${esc(myValue(me, f))}</span>` },
        { t: t('pv.purpose'), f: (f) => `<span class="small">${esc(t('pv.pur.' + f.ent.key))}</span>` }, { t: t('pv.ret'), f: (f) => `<span class="small">${esc(t('pv.ret.' + f.ent.key))}</span>` },
        { t: t('md.owner'), k: 'owner' }, { t: t('md.source'), f: (f) => `<span class="small">${esc(f.source)}</span>` }], g.rows)}</div>`).join('');
  }
  function pvConsent(body, u) {
    const all = App.store.get()['pv.consents'] || {};
    const mine = all[u.ma_cb] || {};
    body.innerHTML = `<div class="card"><h3>${t('pv.c.title')}</h3><p class="small muted">${t('pv.c.note')}</p><div class="stack">${CONSENTS.map((k) => {
      const c = mine[k] || {};
      return `<label style="flex-direction:row;align-items:center;justify-content:space-between;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font-weight:600">
        <span>${t('pv.c.' + k)}<div class="small muted" style="font-weight:400">${c.at ? t('pv.c.at', { d: App.fmtDT(c.at) }) : ''}</div></span>
        <span class="row">${App.ui.badge(c.on ? t('pv.c.on') : t('pv.c.off'), c.on ? 'ok' : '')}<input type="checkbox" data-c="${k}" ${c.on ? 'checked' : ''} style="width:20px;height:20px"></span></label>`;
    }).join('')}</div></div>
    <div class="card"><h3>${t('pv.c.legal')}</h3><ul class="small" style="padding-left:18px;margin:0">${['l1', 'l2', 'l3', 'l4'].map((k) => `<li>${t('pv.c.' + k)}</li>`).join('')}</ul></div>`;
    body.querySelectorAll('[data-c]').forEach((cb) => (cb.onchange = () => {
      const a = App.store.get()['pv.consents'] || {}; a[u.ma_cb] = a[u.ma_cb] || {};
      a[u.ma_cb][cb.dataset.c] = { on: cb.checked, at: nowIso() }; App.store.patch('pv.consents', a);
      App.audit(cb.checked ? 'DONG_Y' : 'RUT_DONG_Y', (cb.checked ? 'Đồng ý' : 'Rút lại đồng ý') + ': ' + App.i18n.vi['pv.c.' + cb.dataset.c], u.ma_cb, 'Quyền của chủ thể dữ liệu');
      App.ui.toast(t('gv.done'), 'ok'); pvConsent(body, u);
    }));
  }
  function pvRights(body, u) {
    const reqs = pvReqs().filter((r) => r.ma_cb === u.ma_cb).reverse();
    const card = (k, btn) => `<div class="card" style="margin:0"><h3>${t('pv.r.' + k)}</h3><p class="small">${t('pv.r.' + k + '.d')}</p>${btn}</div>`;
    body.innerHTML = `<div class="notice warn small">${t('pv.r.sla')}</div>
      <div class="grid g3" style="margin-bottom:16px">${card('access', `<button class="btn" data-access>${t('pv.r.download')}</button>`)}${card('correct', `<a class="btn ghost" href="#/profile">${t('pv.r.goprofile')}</a>`)}
        ${['restrict', 'object', 'delete'].map((k) => card(k, `<button class="btn ghost" data-req="${k}">${t('pv.r.send')}</button>`)).join('')}</div>
      <div class="notice small">${t('pv.r.exc')}</div>
      <div class="card"><h3>${t('pv.r.mine')}</h3>${App.ui.table([{ t: t('pv.r.id'), k: 'id' }, { t: t('pv.r.type'), f: (r) => esc(pvType(r.type)) }, { t: t('pv.r.at'), f: (r) => App.fmtDT(r.at) },
        { t: t('pv.r.ack'), f: (r) => App.fmtDT(r.ack_due) }, { t: t('pv.r.due'), f: (r) => App.fmtDT(r.due) }, { t: t('status'), f: pvBadge }, { t: t('pv.r.resp'), f: (r) => `<span class="small">${esc(r.response || '')}</span>` }], reqs)}</div>`;
    body.querySelector('[data-access]').onclick = async () => {
      if (!(await App.stepUp(tr('Tải bản sao dữ liệu cá nhân của tôi', 'Download a copy of my personal data')))) return;
      const me = App.staff(u.ma_cb);
      const dump = { exported_at: nowIso(), legal_basis: 'Luật BVDLCN 91/2025/QH15 – quyền truy cập, nhận bản sao', note: D.meta.note, subject: me,
        teaching: D.teaching.filter((x) => x.ma_cb === u.ma_cb), supervision: D.supervision.filter((x) => x.ma_cb === u.ma_cb), papers: D.papers.filter((x) => x.ma_cb === u.ma_cb),
        projects: D.projects.filter((x) => x.ma_cb === u.ma_cb), service: D.service.filter((x) => x.ma_cb === u.ma_cb), requests: App.requests().filter((x) => x.ma_cb === u.ma_cb),
        consents: (App.store.get()['pv.consents'] || {})[u.ma_cb] || {}, account: Object.assign({}, accOf(u.ma_cb), { password: undefined, mfa_secret: undefined }) };
      download('du_lieu_ca_nhan_' + u.ma_cb + '.json', JSON.stringify(dump, null, 2), 'application/json');
      const l = pvReqs(); l.push({ id: App.uid('QR'), ma_cb: u.ma_cb, type: 'access', scope: 'Toàn bộ hồ sơ', reason: '', at: nowIso(), status: 'hoan_thanh', response: tr('Đã cung cấp bản sao tự động (JSON).', 'Copy provided automatically (JSON).') }); savePv(l);
      App.audit('XUAT', 'Chủ thể tải bản sao dữ liệu cá nhân (JSON)', u.ma_cb, 'Quyền của chủ thể dữ liệu');
      App.ui.toast(t('gv.done'), 'ok'); pvRights(body, u);
    };
    body.querySelectorAll('[data-req]').forEach((b) => (b.onclick = () => {
      const k = b.dataset.req;
      const m = App.ui.modal(`<h3>${t('pv.r.' + k)}</h3><p class="small muted">${t('pv.r.' + k + '.d')}</p><div class="stack">
        <label>${t('pv.r.scope')}<input data-s></label><label>${t('pv.r.reason')}<textarea data-r rows="3"></textarea></label></div>
        <p class="notice small" style="margin-top:10px">${t('pv.r.exc')}</p><p class="small muted">${t('pv.r.sla')}</p><p class="err" hidden></p>
        <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn" data-ok>${t('pv.r.send')}</button></div>`);
      m.querySelector('[data-x]').onclick = App.ui.closeModal;
      m.querySelector('[data-ok]').onclick = () => {
        const reason = m.querySelector('[data-r]').value.trim(), scope = m.querySelector('[data-s]').value.trim();
        if (!reason) { const e = m.querySelector('.err'); e.hidden = false; e.textContent = t('pv.r.reason'); return; }
        const at = nowIso(); const l = pvReqs(); const r = { id: App.uid('QR'), ma_cb: u.ma_cb, type: k, scope, reason, at, ack_due: plusH(at, 72), due: plusH(at, 360), status: 'moi' };
        l.push(r); savePv(l);
        App.audit('YC_QUYEN', 'Yêu cầu thực hiện quyền: ' + App.i18n.vi['pv.r.' + k], u.ma_cb, 'Quyền của chủ thể dữ liệu');
        App.notify('DPO', 'Yêu cầu quyền chủ thể mới ' + r.id + ' (' + App.i18n.vi['pv.r.' + k] + ')', '#/privacy/queue');
        App.ui.closeModal(); App.ui.toast(t('pv.r.sent'), 'ok'); pvRights(body, u);
      };
    }));
  }
  function pvWho(body, u) {
    const rows = App.auditLog().filter((a) => a.doi_tuong === u.ma_cb && a.nguoi !== u.ma_cb).sort((a, b) => (a.luc < b.luc ? 1 : -1));
    const roleOf = (a) => a.vai_tro || ((accOf(a.nguoi) || {}).roles || [])[0] || '';
    body.innerHTML = `<div class="card"><h3>${t('pv.w.title')}</h3><p class="small muted">${t('pv.w.note')}</p>${App.ui.table([
      { t: t('gv.time'), f: (a) => App.fmtDT(a.luc) }, { t: t('pv.w.who'), f: (a) => esc(nm(App.staff(a.nguoi) || { ho_ten: a.nguoi, ma_cb: a.nguoi })) },
      { t: t('pv.w.role'), f: (a) => esc(App.roleName(roleOf(a))) }, { t: t('pv.w.act'), f: (a) => App.ui.badge(a.hanh_dong, /NHAY_CAM|XUAT/.test(a.hanh_dong) ? 'orange' : 'info') },
      { t: t('pv.w.desc'), f: (a) => `<span class="small">${esc(a.mo_ta)}</span>` }, { t: t('au.purpose'), f: (a) => `<span class="small">${esc(a.muc_dich || '')}</span>` }], rows)}</div>`;
  }
  /* --- phòng thử ẩn danh */
  const ageBand = (iso) => { const a = App.today.getFullYear() - +String(iso).slice(0, 4); const lo = Math.floor(a / 5) * 5; return lo + '–' + (lo + 4); };
  const gpaBand = (g) => (g == null ? '–' : g < 2 ? '< 2,0' : g < 2.5 ? '2,0–2,49' : g < 3.2 ? '2,5–3,19' : '≥ 3,2');
  function datasets(u) {
    const role = u.role;
    const staff = App.staffList().filter((s) => role === 'DPO' || App.acl.inScope(s));
    const stAll = ['TK', 'PTK', 'BGH', 'CV_DTDH', 'DPO'].includes(role);
    const students = D.students.filter((s) => stAll || (role === 'CVHT' && s.cvht === u.ma_cb));
    return {
      staff: {
        rows: staff, id: (s) => s.ma_cb,
        before: [['ma_cb', t('dr.id'), (s) => s.ma_cb], ['ho_ten', t('dr.name'), (s) => App.name(s)], ['email', 'Email', (s) => s.email], ['dien_thoai', tr('Điện thoại', 'Phone'), (s) => s.dien_thoai],
          ['gioi_tinh', t('pv.a.sex'), (s) => s.gioi_tinh], ['ngay_sinh', tr('Ngày sinh', 'Birth date'), (s) => App.fmtDate(s.ngay_sinh)], ['bo_mon', t('pv.a.dept'), (s) => s.bo_mon || s.don_vi],
          ['chuc_danh', t('pv.a.rank'), (s) => s.hang || s.chuc_danh], ['hoc_vi', t('pv.a.deg'), (s) => s.hoc_vi]],
        direct: ['ho_ten', 'email', 'dien_thoai'],
        qi: [['sex', t('pv.a.sex'), (s) => s.gioi_tinh, (s) => s.gioi_tinh], ['age', t('pv.a.age'), (s) => ageBand(s.ngay_sinh), (s) => s.ngay_sinh], ['dept', t('pv.a.dept'), (s) => s.bo_mon || 'P/B', (s) => s.bo_mon || s.don_vi],
          ['rank', t('pv.a.rank'), (s) => (s.hang || '').replace(/^GV(CC|C)?$/, (m) => m) || (s.loai === 'khoa' ? 'NV' : 'CV'), (s) => s.chuc_danh], ['deg', t('pv.a.deg'), (s) => s.hoc_vi, (s) => s.hoc_vi]],
        field: (s, k) => App.acl.field(k, s),
      },
      students: {
        rows: students, id: (s) => s.mssv,
        before: [['mssv', 'MSSV', (s) => s.mssv], ['ho_ten', t('dr.name'), (s) => App.name(s)], ['email', 'Email', (s) => s.email], ['dien_thoai', tr('Điện thoại', 'Phone'), (s) => s.dien_thoai],
          ['gioi_tinh', t('pv.a.sex'), (s) => s.gioi_tinh], ['ngay_sinh', tr('Ngày sinh', 'Birth date'), (s) => App.fmtDate(s.ngay_sinh)], ['nganh', t('pv.a.prog'), (s) => s.nganh], ['khoa', t('pv.a.cohort'), (s) => s.khoa]],
        direct: ['ho_ten', 'email', 'dien_thoai'],
        qi: [['sex', t('pv.a.sex'), (s) => s.gioi_tinh, (s) => s.gioi_tinh], ['by', t('pv.a.by'), (s) => String(s.ngay_sinh).slice(0, 4), (s) => s.ngay_sinh], ['prog', t('pv.a.prog'), (s) => s.nganh, (s) => s.nganh],
          ['cohort', t('pv.a.cohort'), (s) => s.khoa, (s) => s.khoa], ['risk', t('pv.a.risk2'), (s) => App.calc.riskLabel(App.calc.risk(App.calc.student(s.mssv)).level), (s) => App.calc.riskLabel(App.calc.risk(App.calc.student(s.mssv)).level)],
          ['gpa', t('pv.a.gpa'), (s) => gpaBand(App.calc.student(s.mssv).last.cum), (s) => { const g = App.calc.student(s.mssv).last.cum; return g == null ? '–' : g.toFixed(2); }]],
        field: (s, k) => (['ho_ten', 'mssv', 'nganh', 'khoa', 'gioi_tinh'].includes(k) ? 'full' : role === 'CVHT' ? 'full' : 'masked'),
      },
    };
  }
  async function anonymise(ds, st) {
    const salt = 'RPT-' + Date.now().toString(36);
    const qi = ds.qi.filter((q) => st.qi.includes(q[0]));
    const out = [];
    for (const r of ds.rows) {
      const row = {};
      if (st.pseudo) row.__id = 'P-' + (await App.sha256(salt + ds.id(r))).slice(0, 10);
      else if (!st.drop) row.__id = ds.id(r);
      if (!st.drop) ds.direct.forEach((k) => (row[k] = k === 'ho_ten' ? r.ho_ten : r[k]));
      qi.forEach((q) => (row[q[0]] = String(st.gen ? q[2](r) : q[3](r))));
      out.push(row);
    }
    const key = (row) => qi.map((q) => row[q[0]]).join('|');
    const size = {}; out.forEach((r) => (size[key(r)] = (size[key(r)] || 0) + 1));
    const small = out.filter((r) => size[key(r)] < st.k);
    const kept = st.supp ? out.filter((r) => size[key(r)] >= st.k) : out;
    const sizes = Object.values(size);
    return { cols: (st.pseudo || !st.drop ? [['__id', st.pseudo ? t('pv.a.pid') : 'ID']] : []).concat(st.drop ? [] : ds.direct.map((k) => [k, ds.before.find((b) => b[0] === k)[1]])).concat(qi.map((q) => [q[0], q[1]])),
      rows: kept, nIn: out.length, nSup: st.supp ? small.length : 0, risky: st.supp ? 0 : small.length, minG: sizes.length ? Math.min(...sizes) : 0 };
  }
  function pvAnon(body, u) {
    const DS = datasets(u);
    const ds = DS[pvState.ds];
    if (!pvState.qi || !pvState.qi.every((k) => ds.qi.some((q) => q[0] === k))) pvState.qi = pvState.ds === 'staff' ? ['dept', 'deg'] : ['prog'];
    const chk = (k, l) => `<label style="flex-direction:row;align-items:center;gap:6px;font-weight:600"><input type="checkbox" data-t="${k}" ${pvState[k] ? 'checked' : ''}> ${l}</label>`;
    const beforeCell = (s, b) => { const lv = ds.field(s, b[0] === 'ho_ten' ? 'ho_lot' : b[0]); const v = b[2](s); if (lv === 'full' || ['ma_cb', 'mssv'].includes(b[0])) return esc(v); if (lv === 'masked') return esc(App.mask(s[b[0]], b[0] === 'email' ? 'email' : b[0] === 'ngay_sinh' ? 'year_only' : 'last3')); return '<span class="muted">—</span>'; };
    body.innerHTML = `<div class="card"><h3>${t('pv.a.title')}</h3><div class="grid g3" style="align-items:end">
        <label>${t('pv.a.ds')}<select data-ds><option value="staff" ${pvState.ds === 'staff' ? 'selected' : ''}>${t('pv.a.staff')}</option><option value="students" ${pvState.ds === 'students' ? 'selected' : ''}>${t('pv.a.students')}</option></select></label>
        <label>${t('pv.a.k')}<select data-k>${[2, 3, 5, 10].map((k) => `<option ${k === pvState.k ? 'selected' : ''}>${k}</option>`).join('')}</select></label>
        <div class="row end"><button class="btn" data-run>${t('pv.a.run')}</button><button class="btn ghost" data-dl disabled>${t('pv.a.dl')}</button></div></div>
      <div class="grid g2" style="margin-top:10px"><div><div class="small muted" style="font-weight:700">${t('pv.a.tech')}</div><div class="stack" style="gap:4px">${chk('drop', t('pv.a.drop'))}${chk('pseudo', t('pv.a.pseudo'))}${chk('gen', t('pv.a.gen'))}${chk('supp', t('pv.a.supp'))}</div></div>
        <div><div class="small muted" style="font-weight:700">${t('pv.a.qi')}</div><div class="row" style="flex-wrap:wrap">${ds.qi.map((q) => `<label style="flex-direction:row;align-items:center;gap:6px"><input type="checkbox" data-qi="${q[0]}" ${pvState.qi.includes(q[0]) ? 'checked' : ''}> ${esc(q[1])}</label>`).join('')}</div></div></div>
      <p class="small muted">${t('pv.a.note')}</p></div>
      ${ds.rows.length ? `<div class="grid g2"><div class="card"><h3>${t('pv.a.before')}</h3>${App.ui.table(ds.before.map((b) => ({ t: b[1], f: (s) => `<span class="small">${beforeCell(s, b)}</span>` })), ds.rows.slice(0, 8))}
        <p class="small muted">${t('gv.rows', { n: ds.rows.length })}</p></div><div class="card" data-after><h3>${t('pv.a.after')}</h3>${App.ui.empty('…')}</div></div>` : `<div class="notice warn">${t('pv.a.none')}</div>`}`;
    let last = null;
    const run = async () => {
      if (!ds.rows.length) return;
      const res = await anonymise(ds, pvState); last = res;
      const el = body.querySelector('[data-after]'); if (!el) return;
      el.innerHTML = `<h3>${t('pv.a.after')}</h3><div class="kpis" style="margin-bottom:10px">${App.ui.kpi(t('pv.a.in'), res.nIn, '')}${App.ui.kpi(t('pv.a.out'), res.rows.length, '', 'cyan')}${App.ui.kpi(t('pv.a.sup'), res.nSup, '', res.nSup ? 'warn' : 'ok')}${App.ui.kpi(t('pv.a.min'), res.minG, '', res.minG >= pvState.k ? 'ok' : 'bad')}</div>
        ${res.risky ? `<div class="notice bad small">${t('pv.a.risk', { n: res.risky })}</div>` : res.rows.length ? `<div class="notice small">${t('pv.a.ok', { k: pvState.k })}</div>` : ''}
        ${App.ui.table(res.cols.map((c) => ({ t: c[1], f: (r) => `<span class="small">${esc(r[c[0]])}</span>` })), res.rows.slice(0, 10), { empty: t('pv.a.sup') + ': ' + res.nSup })}`;
      body.querySelector('[data-dl]').disabled = !res.rows.length;
    };
    body.querySelector('[data-ds]').onchange = (e) => { pvState.ds = e.target.value; pvState.qi = null; pvAnon(body, u); };
    body.querySelector('[data-k]').onchange = (e) => { pvState.k = +e.target.value; run(); };
    body.querySelectorAll('[data-t]').forEach((c) => (c.onchange = () => { pvState[c.dataset.t] = c.checked; run(); }));
    body.querySelectorAll('[data-qi]').forEach((c) => (c.onchange = () => { pvState.qi = [...body.querySelectorAll('[data-qi]:checked')].map((x) => x.dataset.qi); run(); }));
    body.querySelector('[data-run]').onclick = run;
    body.querySelector('[data-dl]').onclick = () => {
      if (!last) return;
      download('an_danh_' + pvState.ds + '_k' + pvState.k + '.csv', csv([last.cols.map((c) => c[1])].concat(last.rows.map((r) => last.cols.map((c) => r[c[0]])))), 'text/csv;charset=utf-8');
      App.audit('AN_DANH', 'Xuất dữ liệu ẩn danh: ' + pvState.ds + ', k=' + pvState.k + ', ' + last.rows.length + '/' + last.nIn + ' bản ghi, kỹ thuật: ' + ['drop', 'pseudo', 'gen', 'supp'].filter((k) => pvState[k]).join('+'), '', 'Thống kê báo cáo');
      App.ui.toast(t('gv.done'), 'ok');
    };
    run();
  }
  function pvQueue(body) {
    const l = pvReqs().sort((a, b) => (a.at < b.at ? 1 : -1));
    body.innerHTML = `<div class="notice warn small">${t('pv.r.sla')}</div><div class="card"><h3>${t('pv.t.queue')}</h3>${App.ui.table([
      { t: t('pv.r.id'), k: 'id' }, { t: t('pv.r.from'), f: (r) => esc(nm(App.staff(r.ma_cb))) }, { t: t('pv.r.type'), f: (r) => esc(pvType(r.type)) },
      { t: t('pv.r.scope'), f: (r) => `<span class="small">${esc(r.scope || '')}</span><div class="small muted">${esc(r.reason || '')}</div>` }, { t: t('pv.r.at'), f: (r) => App.fmtDT(r.at) },
      { t: t('pv.r.ack'), f: (r) => (r.ack_at ? '✓ ' + App.fmtDT(r.ack_at) : App.fmtDT(r.ack_due)) }, { t: t('pv.r.due'), f: (r) => App.fmtDT(r.due) }, { t: t('status'), f: pvBadge },
      { t: t('action'), f: (r) => (r.status === 'moi' ? `<button class="btn sm" data-ack="${esc(r.id)}">${t('pv.r.ackbtn')}</button> ` : '') + (['moi', 'dang_xu_ly'].includes(r.status) ? `<button class="btn ok sm" data-fin="${esc(r.id)}">${t('pv.r.donebtn')}</button> <button class="btn bad sm" data-rej="${esc(r.id)}">${t('gv.reject')}</button>` : `<span class="small">${esc(r.response || '')}</span>`) },
    ], l)}</div>`;
    const upd = (id, fn, msg) => { const all = pvReqs(); const r = all.find((x) => x.id === id); fn(r); savePv(all); App.audit('XU_LY_YC_QUYEN', msg + ' ' + id, r.ma_cb, 'Quyền của chủ thể dữ liệu'); App.notify(r.ma_cb, 'DPO: ' + msg + ' ' + id, '#/privacy/rights'); App.ui.toast(t('gv.done'), 'ok'); pvQueue(body); };
    body.querySelectorAll('[data-ack]').forEach((b) => (b.onclick = () => upd(b.dataset.ack, (r) => { r.status = 'dang_xu_ly'; r.ack_at = nowIso(); }, 'Tiếp nhận yêu cầu')));
    const close = (id, ok) => {
      const m = App.ui.modal(`<h3>${ok ? t('pv.r.donebtn') : t('gv.reject')} – ${esc(id)}</h3><label>${t('pv.r.answer')}<textarea rows="4" data-a></textarea></label><p class="small muted">${t('pv.r.exc')}</p>
        <div class="row end"><button class="btn ghost" data-x>${t('cancel')}</button><button class="btn ${ok ? 'ok' : 'bad'}" data-ok>${t('confirm')}</button></div>`);
      m.querySelector('[data-x]').onclick = App.ui.closeModal;
      m.querySelector('[data-ok]').onclick = async () => {
        const txt = m.querySelector('[data-a]').value.trim(); App.ui.closeModal();
        if (!(await App.stepUp('Kết thúc yêu cầu quyền chủ thể ' + id))) return;
        upd(id, (r) => { r.status = ok ? 'hoan_thanh' : 'tu_choi'; r.response = txt; r.closed_at = nowIso(); if (!r.ack_at) r.ack_at = r.closed_at; }, ok ? 'Hoàn thành yêu cầu' : 'Từ chối yêu cầu');
      };
    };
    body.querySelectorAll('[data-fin]').forEach((b) => (b.onclick = () => close(b.dataset.fin, true)));
    body.querySelectorAll('[data-rej]').forEach((b) => (b.onclick = () => close(b.dataset.rej, false)));
  }
  function pvDpia(body) {
    const fields = allFields();
    const risks = [1, 2, 3, 4, 5].map((i) => ({ r: t('pv.d.r' + i), c: t('pv.d.c' + i), l: i === 4 || i === 5 ? t('pv.d.med') : t('pv.d.low') }));
    body.innerHTML = `<div class="card"><div class="card-h"><h3>${t('pv.d.title')}</h3>${App.ui.badge(t('pv.d.status').split(' – ')[0], 'warn')}</div><p class="small muted">${t('pv.d.status')}</p>
      <div class="grid g2"><div><h4>${t('pv.d.purposes')}</h4><ul class="small" style="padding-left:18px">${M.purposes.map((p) => `<li>${esc(App.L(p))}</li>`).join('')}${['teaching', 'research', 'process'].map((k) => `<li>${t('pv.pur.' + k)}</li>`).join('')}</ul></div>
      <div><h4>${t('pv.d.cats')}</h4><ul class="small" style="padding-left:18px">${M.classes.map((c) => `<li>${tagCls(c.code)} ${esc(App.L(c))}: ${fields.filter((f) => f.cls === c.code).length}</li>`).join('')}</ul><p class="small">${t('pv.d.subjects')}</p></div></div>
      ${App.ui.table([{ t: '#', f: (r, i) => i + 1, cls: 'c' }, { t: t('pv.d.risk'), k: 'r' }, { t: t('pv.d.ctrl'), k: 'c' }, { t: t('pv.d.lvl'), f: (r) => App.ui.badge(r.l, r.l === t('pv.d.low') ? 'ok' : 'warn') }], risks)}
      <p class="small muted">${t('pv.d.legal')} ${App.ui.badge(t('gv.verify'), 'warn')}</p></div>`;
  }
  function pvBreach(body) {
    const list = App.store.list('pv.breaches').slice().reverse();
    const def = App.now(); const pad = (n) => String(n).padStart(2, '0');
    const dv = def.getFullYear() + '-' + pad(def.getMonth() + 1) + '-' + pad(def.getDate()) + 'T' + pad(def.getHours()) + ':' + pad(def.getMinutes());
    body.innerHTML = `<div class="card"><h3>${t('pv.b.title')}</h3><div class="grid g2"><div class="stack">
        <label>${t('pv.b.det')}<input type="datetime-local" data-det value="${dv}"></label><label>${t('pv.b.desc')}<textarea rows="3" data-desc></textarea></label>
        <label>${t('pv.b.n')}<input type="number" min="0" value="1" data-n></label></div>
      <div class="stack"><div><div class="small muted" style="font-weight:700">${t('pv.b.cats')}</div><div class="row">${M.classes.map((c) => `<label style="flex-direction:row;align-items:center;gap:6px"><input type="checkbox" data-cat="${c.code}" ${c.code === 'CN' ? 'checked' : ''}> ${tagCls(c.code)} ${esc(App.L(c))}</label>`).join('')}</div></div>
        <label>${t('pv.b.meas')}<textarea rows="3" data-meas></textarea></label><div class="notice warn small" data-dl></div></div></div>
      <p class="small muted">${t('pv.b.legal')} ${App.ui.badge(t('gv.verify'), 'warn')}</p><p class="err" hidden></p><div class="row end"><button class="btn bad" data-send>${t('pv.b.send')}</button></div></div>
      <div class="card"><h3>${t('pv.b.list')}</h3>${App.ui.table([{ t: 'ID', k: 'id' }, { t: t('pv.b.det'), f: (b) => App.fmtDT(b.det) }, { t: t('pv.b.desc'), f: (b) => `<span class="small">${esc(b.desc)}</span>` },
        { t: t('pv.b.cats'), f: (b) => b.cats.map(tagCls).join(' ') }, { t: t('pv.b.n'), k: 'n', cls: 'num' }, { t: t('pv.r.due'), f: (b) => App.fmtDT(b.deadline) + (new Date(b.deadline) < App.now() ? ' ' + App.ui.badge(t('pv.r.late'), 'bad') : '') }], list)}</div>`;
    const dl = () => { const v = body.querySelector('[data-det]').value; const d = v ? new Date(v) : App.now(); body.querySelector('[data-dl]').textContent = t('pv.b.deadline', { d: App.fmtDT(new Date(d.getTime() + 72 * 3.6e6 - d.getTimezoneOffset() * 6e4).toISOString()) }); };
    body.querySelector('[data-det]').oninput = dl; dl();
    body.querySelector('[data-send]').onclick = async () => {
      const desc = body.querySelector('[data-desc]').value.trim();
      if (!desc) { const e = body.querySelector('.err'); e.hidden = false; e.textContent = t('pv.b.need'); return; }
      if (!(await App.stepUp('Lập thông báo vi phạm BVDLCN'))) return;
      const v = body.querySelector('[data-det]').value; const d = v ? new Date(v) : App.now();
      const loc = (x) => new Date(x.getTime() - x.getTimezoneOffset() * 6e4).toISOString().slice(0, 19);
      const b = { id: App.uid('VP'), det: loc(d), deadline: loc(new Date(d.getTime() + 72 * 3.6e6)), desc, n: +body.querySelector('[data-n]').value || 0,
        cats: [...body.querySelectorAll('[data-cat]:checked')].map((x) => x.dataset.cat), meas: body.querySelector('[data-meas]').value, at: nowIso() };
      App.store.push('pv.breaches', b);
      App.audit('BAO_CAO_VI_PHAM', 'Lập thông báo vi phạm BVDLCN (mô phỏng) ' + b.id + ' – ' + b.n + ' chủ thể', '', 'Tuân thủ Luật 91/2025/QH15');
      App.ui.toast(t('pv.b.saved'), 'ok'); pvBreach(body);
    };
  }

  /* ================================================================ AUDIT */
  const PD_ACTS = /^(XEM|XEM_NHAY_CAM|XEM_CA_NHAN|XUAT|SUA|DE_NGHI_SUA|TAI_LEN|DUYET|TU_CHOI|AN_DANH|DONG_Y|RUT_DONG_Y|YC_QUYEN|XU_LY_YC_QUYEN|DE_XUAT)$/;
  const auState = { q: '', act: '', role: '', from: '', to: '', local: false };
  App.page('audit', {
    render(main) {
      const u = App.user();
      if (!App.acl.has('audit')) { main.innerHTML = `<div class="notice bad">${t('noaccess')}</div>`; return; }
      const admin = u.role === 'ADMIN';
      App.audit('XEM_NHAT_KY', 'Mở nhật ký kiểm toán', '', admin ? 'Vận hành kỹ thuật' : 'Giám sát tuân thủ BVDLCN');
      const localN = App.store.list('audit').length;
      const log = App.auditLog().map((e, i) => Object.assign({ idx: i, local: !e.seeded }, e));
      const roleOf = (e) => e.vai_tro || ((accOf(e.nguoi) || {}).roles || [])[0] || '';
      const acts = [...new Set(log.map((e) => e.hanh_dong))].sort();
      const roles = [...new Set(log.map(roleOf).filter(Boolean))].sort();
      const byAct = acts.map((a) => ({ l: a, v: log.filter((e) => e.hanh_dong === a).length })).sort((a, b) => b.v - a.v);
      const opt = (v, l, cur) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(l)}</option>`;
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.audit')}</div><h1>${t('nav.audit')}</h1><p>${t('au.sub')}</p></div>
          <div class="row no-print"><button class="btn cyan" data-check>${t('au.check')}</button><button class="btn ghost" data-csv>${t('gv.csv')}</button></div></div>
        <div data-res></div>
        <div class="kpis">${App.ui.kpi(t('au.total'), log.length, '')}${App.ui.kpi(t('au.local'), localN, t('au.seednote'), 'cyan')}${App.ui.kpi(t('au.sens'), log.filter((e) => e.hanh_dong === 'XEM_NHAY_CAM').length, '', 'warn')}${App.ui.kpi(t('au.fail'), log.filter((e) => /LOI/.test(e.hanh_dong)).length, '', 'bad')}</div>
        <div class="card"><h3>${t('au.byact')}</h3><div class="grid g2">${[byAct.slice(0, Math.ceil(byAct.length / 2)), byAct.slice(Math.ceil(byAct.length / 2))].map((part) => App.ui.chart.hbars(part.map((x, i) => ({ l: x.l, v: x.v, txt: String(x.v), c: /NHAY_CAM|XUAT|LOI/.test(x.l) ? '#C53030' : App.ui.chart.PAL[i % 2] })), { max: Math.max(1, ...byAct.map((x) => x.v)) })).join('')}</div></div>
        <div class="card"><div class="grid g4" style="align-items:end">
          <label>${t('search')}<input data-f="q" value="${esc(auState.q)}"></label>
          <label>${t('au.act')}<select data-f="act">${opt('', t('gv.all'), auState.act)}${acts.map((a) => opt(a, a, auState.act)).join('')}</select></label>
          <label>${t('au.role')}<select data-f="role">${opt('', t('gv.all'), auState.role)}${roles.map((r) => opt(r, r, auState.role)).join('')}</select></label>
          <label>${t('au.from')}<input type="date" data-f="from" value="${esc(auState.from)}"></label><label>${t('au.to')}<input type="date" data-f="to" value="${esc(auState.to)}"></label>
          <label style="flex-direction:row;align-items:center;gap:6px"><input type="checkbox" data-f="local" ${auState.local ? 'checked' : ''}> ${t('au.localsrc')}</label></div>
          <div data-tbl style="margin-top:12px"></div></div>`;
      const filtered = () => log.filter((e) => {
        if (auState.act && e.hanh_dong !== auState.act) return false;
        if (auState.role && roleOf(e) !== auState.role) return false;
        if (auState.from && e.luc.slice(0, 10) < auState.from) return false;
        if (auState.to && e.luc.slice(0, 10) > auState.to) return false;
        if (auState.local && !e.local) return false;
        const q = auState.q.trim().toLowerCase();
        if (q) { const acc = accOf(e.nguoi); const hay = [e.nguoi, acc && acc.username, e.hanh_dong, admin ? '' : e.mo_ta, admin ? '' : e.doi_tuong, e.ip, e.muc_dich].join(' ').toLowerCase(); if (!hay.includes(q)) return false; }
        return true;
      }).sort((a, b) => (a.luc < b.luc ? 1 : a.luc > b.luc ? -1 : b.idx - a.idx));
      const actor = (e) => { const acc = accOf(e.nguoi); if (admin) return esc(acc ? acc.username : e.nguoi); const s = App.staff(e.nguoi); return s ? esc(nm(s)) + `<div class="small muted">${esc(acc ? acc.username : e.nguoi)}</div>` : esc(e.nguoi); };
      const target = (e) => { if (!e.doi_tuong) return '–'; if (admin) return `<code class="small">${esc(App.pseudo(e.doi_tuong, 'CB'))}</code>`; const s = App.staff(e.doi_tuong); return s ? esc(nm(s)) : esc(e.doi_tuong); };
      const desc = (e) => (admin && PD_ACTS.test(e.hanh_dong) ? `<span class="muted">${t('au.hidden')}</span>` : esc(e.mo_ta));
      const cols = () => [
        { t: t('gv.time'), f: (e) => `<span class="small">${App.fmtDT(e.luc)}${e.luc.length > 16 ? ':' + e.luc.slice(17, 19) : ''}</span>` }, { t: t('au.actor'), f: actor }, { t: t('au.role'), f: (e) => esc(roleOf(e)) },
        { t: t('au.act'), f: (e) => App.ui.badge(e.hanh_dong, /NHAY_CAM|LOI/.test(e.hanh_dong) ? 'bad' : /XUAT|AN_DANH/.test(e.hanh_dong) ? 'orange' : 'info') },
        { t: t('au.desc'), f: (e) => `<span class="small">${desc(e)}</span>` }, { t: t('au.target'), f: target },
        { t: t('au.purpose'), f: (e) => `<span class="small">${esc(admin && PD_ACTS.test(e.hanh_dong) ? '' : e.muc_dich || '')}</span>` }, { t: t('au.ip'), f: (e) => `<code class="small">${esc(e.ip || '')}</code>` },
      ].concat(admin ? [{ t: t('au.src'), f: (e) => (e.local ? App.ui.badge(t('au.localsrc'), 'navy') : App.ui.badge(t('au.seeded'), '')) }, { t: t('au.hash'), f: (e) => `<code class="small" title="prev ${esc(e.prev || '')}">${esc((e.hash || '').slice(0, 12))}</code>` }] : []);
      const draw = () => { const rows = filtered(); main.querySelector('[data-tbl]').innerHTML = `<div class="small muted" style="margin-bottom:6px">${t('gv.rows', { n: rows.length })} · ${t('au.max')}</div>` + App.ui.table(cols(), rows.slice(0, 300)); };
      main.querySelectorAll('[data-f]').forEach((el) => (el[el.type === 'checkbox' || el.tagName === 'SELECT' ? 'onchange' : 'oninput'] = () => { auState[el.dataset.f] = el.type === 'checkbox' ? el.checked : el.value; draw(); }));
      draw();
      main.querySelector('[data-check]').onclick = async () => {
        const L = App.store.list('audit'); const res = main.querySelector('[data-res]');
        if (!L.length) { res.innerHTML = `<div class="notice">${t('au.empty')}</div>`; return; }
        const pend = L.filter((e) => e.hash === 'pending').length;
        let bad = null;
        for (let i = 0; i < L.length; i++) {
          const e = L[i]; if (e.hash === 'pending') continue;
          const prevExp = i === 0 ? 'GENESIS' : L[i - 1].hash;
          if (L[i - 1] && L[i - 1].hash === 'pending') continue;
          if (e.prev !== prevExp) { bad = { i: i + 1, e, why: t('au.why.prev') }; break; }
          const h = await App.sha256(e.prev + JSON.stringify([e.luc, e.nguoi, e.hanh_dong, e.mo_ta, e.doi_tuong]));
          if (h !== e.hash) { bad = { i: i + 1, e, why: t('au.why.hash') }; break; }
        }
        res.innerHTML = bad ? `<div class="notice bad">${esc(t('au.broken', { i: bad.i, l: App.fmtDT(bad.e.luc) + ' ' + bad.e.hanh_dong, why: bad.why }))}</div>`
          : `<div class="notice">${esc(t('au.ok', { n: L.length - pend }))}${pend ? ' ' + esc(t('au.pending', { n: pend })) : ''} <span class="small muted">${t('au.seednote')}</span></div>`;
        App.audit('KIEM_TRA_TOAN_VEN', 'Kiểm tra chuỗi băm nhật ký: ' + (bad ? 'phát hiện sai lệch tại #' + bad.i : 'toàn vẹn (' + (L.length - pend) + ' bản ghi)'), '', 'Giám sát tuân thủ');
      };
      main.querySelector('[data-csv]').onclick = async () => {
        if (!(await App.stepUp(tr('Xuất nhật ký kiểm toán (CSV)', 'Export the audit log (CSV)')))) return;
        const rows = filtered();
        const head = ['luc', 'nguoi', 'vai_tro', 'hanh_dong', 'mo_ta', 'doi_tuong', 'muc_dich', 'ip'].concat(admin ? ['hash', 'prev'] : []);
        const out = [head].concat(rows.map((e) => { const acc = accOf(e.nguoi); const hide = admin && PD_ACTS.test(e.hanh_dong);
          return [e.luc, admin ? (acc ? acc.username : e.nguoi) : e.nguoi, roleOf(e), e.hanh_dong, hide ? '[A7]' : e.mo_ta, admin && e.doi_tuong ? App.pseudo(e.doi_tuong, 'CB') : e.doi_tuong, hide ? '' : e.muc_dich, e.ip].concat(admin ? [e.hash || '', e.prev || ''] : []); }));
        download('nhat_ky_kiem_toan_' + D.meta.today + '.csv', csv(out), 'text/csv;charset=utf-8');
        App.audit('XUAT', 'Xuất CSV nhật ký kiểm toán (' + rows.length + ' dòng)', '', admin ? 'Vận hành kỹ thuật' : 'Giám sát tuân thủ BVDLCN');
        App.ui.toast(t('gv.done'), 'ok');
      };
    },
  });

  /* ================================================================ ACCOUNTS */
  App.page('accounts', {
    render(main, params) {
      if (!App.acl.has('accounts')) { main.innerHTML = `<div class="notice bad">${t('noaccess')}</div>`; return; }
      const tabs = ['list', 'sso', 'roles'];
      const active = tabs.includes(params[0]) ? params[0] : 'list';
      main.innerHTML = `<div class="page-h"><div><div class="crumb">${t('nav.accounts')}</div><h1>${t('nav.accounts')}</h1><p>${t('ac.sub')}</p></div></div><div data-tabs></div><div data-body></div>`;
      const body = main.querySelector('[data-body]');
      const show = (k) => ({ list: acList, sso: acSso, roles: acRoles })[k](body);
      App.ui.tabs(main.querySelector('[data-tabs]'), tabs.map((k) => ({ k, t: t('ac.t.' + k) })), active, show);
      show(active);
    },
  });
  function acList(body) {
    const st = App.store.get();
    const locks = st.locks || {}, fails = st.fails || {}, revoked = st['ac.revoked'] || {}, mfaReset = st['ac.mfaReset'] || {};
    const log = App.auditLog();
    const last = (acc) => log.filter((e) => e.hanh_dong === 'DANG_NHAP' && e.nguoi === acc.ma_cb).map((e) => e.luc).sort().pop();
    const rows = D.accounts.map((a) => ({ a, locked: locks[a.username] && locks[a.username] > Date.now(), fails: fails[a.username] || 0, last: last(a), rev: revoked[a.username], mr: mfaReset[a.username] }));
    body.innerHTML = `<div class="notice small">${t('ac.a7')}</div><div class="card">${App.ui.table([
      { t: t('ac.user'), f: (r) => `<code>${esc(r.a.username)}</code>` }, { t: t('ac.roles'), f: (r) => r.a.roles.map((x) => App.ui.badge(x, 'navy')).join(' ') },
      { t: t('ac.mfa'), f: (r) => esc(r.a.mfa_method === 'push' ? 'Push (number matching)' : 'TOTP RFC 6238') + (r.mr ? ' ' + App.ui.badge(t('ac.mfareset'), 'warn') : '') },
      { t: t('ac.locked'), f: (r) => (r.locked ? App.ui.badge(t('ac.yes'), 'bad') : t('ac.no')), cls: 'c' }, { t: t('ac.fails'), f: (r) => r.fails, cls: 'num' },
      { t: t('ac.last'), f: (r) => (r.last ? App.fmtDT(r.last) : '–') }, { t: t('ac.sess'), f: (r) => (r.rev ? App.ui.badge(t('ac.revoked', { d: App.fmtDT(new Date(r.rev).toISOString()) }), 'warn') : '–') },
      { t: t('action'), f: (r) => `<div class="row" style="gap:4px;flex-wrap:nowrap"><button class="btn ghost sm" data-a="unlock" data-u="${esc(r.a.username)}" ${r.locked || r.fails ? '' : 'disabled'}>${t('ac.unlock')}</button><button class="btn ghost sm" data-a="mfa" data-u="${esc(r.a.username)}">${t('ac.resetmfa')}</button><button class="btn bad sm" data-a="out" data-u="${esc(r.a.username)}">${t('ac.logout')}</button></div>` },
    ], rows)}</div>`;
    body.querySelectorAll('[data-a]').forEach((b) => (b.onclick = async () => {
      const un = b.dataset.u, a = b.dataset.a;
      if (!(await App.stepUp(tr('Thao tác quản trị tài khoản ', 'Account administration: ') + un))) return;
      const s = App.store.get();
      if (a === 'unlock') { const l = s.locks || {}; delete l[un]; const f = s.fails || {}; delete f[un]; App.store.patch('locks', l); App.store.patch('fails', f); App.audit('MO_KHOA', 'Mở khoá tài khoản ' + un, '', 'Vận hành kỹ thuật'); App.ui.toast(t('ac.unlocked', { u: un }), 'ok'); }
      if (a === 'mfa') { const m = s['ac.mfaReset'] || {}; m[un] = Date.now(); App.store.patch('ac.mfaReset', m); App.audit('DAT_LAI_MFA', 'Đặt lại MFA cho tài khoản ' + un + ' (khoá mới không hiển thị)', '', 'Vận hành kỹ thuật'); App.ui.toast(t('ac.mfadone', { u: un }), 'ok'); }
      if (a === 'out') {
        const r = s['ac.revoked'] || {}; r[un] = Date.now(); App.store.patch('ac.revoked', r); App.audit('BUOC_DANG_XUAT', 'Thu hồi mọi phiên của tài khoản ' + un, '', 'Vận hành kỹ thuật'); App.ui.toast(t('ac.loggedout', { u: un }), 'ok');
        if (App.auth.session && App.auth.session.username === un) { App.auth.logout('Quản trị viên thu hồi phiên'); return; }
      }
      acList(body);
    }));
  }
  function acSso(body) {
    const oidc = { issuer: 'https://sso.sim.hcmiu.edu.vn/realms/iu', authorization_endpoint: 'https://sso.sim.hcmiu.edu.vn/realms/iu/protocol/openid-connect/auth',
      token_endpoint: 'https://sso.sim.hcmiu.edu.vn/realms/iu/protocol/openid-connect/token', jwks_uri: 'https://sso.sim.hcmiu.edu.vn/realms/iu/protocol/openid-connect/certs',
      client_id: 'iu-faculty-app', response_type: 'code', pkce: 'S256', scopes: ['openid', 'profile', 'email', 'iu_roles'], redirect_uris: ['https://faculty.sim.hcmiu.edu.vn/auth/callback'],
      id_token_signing_alg: 'RS256', acr_values: ['urn:iu:acr:mfa'], access_token_ttl: '300s', refresh_token_idle: '900s' };
    const saml = `<?xml version="1.0" encoding="UTF-8"?>
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://sso.sim.hcmiu.edu.vn/saml2/idp">
  <md:IDPSSODescriptor WantAuthnRequestsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <md:KeyDescriptor use="signing"><!-- X.509 SIM · SHA-256 fingerprint 4F:A2:91:…:7C:3E (giả lập) --></md:KeyDescriptor>
    <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat>
    <md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://sso.sim.hcmiu.edu.vn/saml2/sso"/>
    <md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://sso.sim.hcmiu.edu.vn/saml2/slo"/>
  </md:IDPSSODescriptor>
</md:EntityDescriptor>`;
    const pol = ['mfa', 'step', 'idle', 'lock', 'pw'];
    body.innerHTML = `<div class="notice warn small">${t('ac.p.sim')}</div>
      <div class="card"><h3>${t('ac.policy')}</h3>${App.ui.table([{ t: tr('Chính sách', 'Policy'), f: (k) => `<b>${t('ac.p.' + k)}</b>` }, { t: tr('Giá trị', 'Value'), f: (k) => esc(t('ac.p.' + k + '.v')) }], pol)}</div>
      <div class="grid g2"><div class="card"><h3>${t('ac.oidc')}</h3><pre class="small" style="white-space:pre-wrap;word-break:break-all;background:var(--bg-2);padding:10px;border-radius:8px;margin:0">${esc(JSON.stringify(oidc, null, 2))}</pre></div>
      <div class="card"><h3>${t('ac.saml')}</h3><pre class="small" style="white-space:pre-wrap;word-break:break-all;background:var(--bg-2);padding:10px;border-radius:8px;margin:0">${esc(saml)}</pre></div></div>`;
  }
  function acRoles(body) {
    const l = roleReqs().slice().sort((a, b) => (a.at < b.at ? 1 : -1));
    const roleCodes = M.roles.map((r) => r.code);
    body.innerHTML = `<div class="notice small">${t('ac.r.note')}</div>
      <div class="card"><h3>${t('ac.r.new')}</h3><div class="grid g4" style="align-items:end">
        <label>${t('ac.user')}<select data-u>${D.accounts.map((a) => `<option>${esc(a.username)}</option>`).join('')}</select></label>
        <label>${t('ac.roles')}<select data-r>${roleCodes.map((r) => `<option value="${r}">${esc(r + ' – ' + App.roleName(r))}</option>`).join('')}</select></label>
        <label>${t('ac.r.eff')}<input type="date" data-e value="${D.meta.today}"></label><label>${t('ac.r.basis')}<input data-b></label></div>
        <p class="err" hidden></p><div class="row end" style="margin-top:10px"><button class="btn" data-send>${t('ac.r.send')}</button></div></div>
      <div class="card">${App.ui.table([{ t: 'ID', k: 'id' }, { t: t('ac.user'), f: (r) => `<code>${esc(r.username)}</code>` }, { t: t('ac.roles'), f: (r) => App.ui.badge(r.role, 'navy') },
        { t: t('ac.r.basis'), f: (r) => `<span class="small">${esc(r.reason)}</span>` }, { t: t('ac.r.eff'), f: (r) => App.fmtDate(r.eff) }, { t: t('pv.r.at'), f: (r) => App.fmtDT(r.at) },
        { t: t('status'), f: (r) => roleStatusBadge(r.status) }, { t: t('action'), f: (r) => (r.status === 'da_duyet' ? `<button class="btn cyan sm" data-sync="${esc(r.id)}">${t('ac.r.sync')}</button>` : '') }], l)}</div>`;
    body.querySelector('[data-send]').onclick = () => {
      const reason = body.querySelector('[data-b]').value.trim();
      if (!reason) { const e = body.querySelector('.err'); e.hidden = false; e.textContent = t('ac.r.basis'); return; }
      const all = roleReqs(); const r = { id: App.uid('PQ'), username: body.querySelector('[data-u]').value, role: body.querySelector('[data-r]').value, reason, eff: body.querySelector('[data-e]').value, at: nowIso(), status: 'cho_duyet' };
      all.push(r); saveRoleReqs(all);
      App.notify('CV_TCCB', 'Đề nghị gán vai trò ' + r.role + ' cho tài khoản ' + r.username + ' (' + r.id + ')', '#/directory');
      App.audit('DE_NGHI_PHAN_QUYEN', 'Đề nghị gán vai trò ' + r.role + ' cho tài khoản ' + r.username, '', 'Quản lý phân quyền');
      App.ui.toast(t('ac.r.sent'), 'ok'); acRoles(body);
    };
    body.querySelectorAll('[data-sync]').forEach((b) => (b.onclick = async () => {
      if (!(await App.stepUp('Đồng bộ vai trò lên IdP'))) return;
      const all = roleReqs(); const r = all.find((x) => x.id === b.dataset.sync); r.status = 'da_dong_bo'; r.sync_at = nowIso(); saveRoleReqs(all);
      App.audit('DONG_BO_IDP', 'Đồng bộ vai trò ' + r.role + ' cho tài khoản ' + r.username + ' lên IdP', '', 'Quản lý phân quyền');
      App.ui.toast(t('ac.r.synced'), 'ok'); acRoles(body);
    }));
  }
})();
