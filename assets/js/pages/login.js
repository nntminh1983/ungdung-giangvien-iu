/* Đăng nhập SSO giả lập + MFA (TOTP hoặc push có đối chiếu số) */
App.addI18n({
  vi: {
    'login.title': 'Đăng nhập một lần (SSO)', 'login.hero': 'Một cửa – một lần đăng nhập cho mọi công việc của giảng viên',
    'login.lead': 'Hồ sơ số, quy trình số theo ISO 9001:2015, khối lượng giảng dạy – NCKH, cố vấn học tập và cảnh báo người học, quản lý phòng thí nghiệm, trên nền bộ Core metadata có phân quyền và bảo vệ dữ liệu cá nhân.',
    'login.f1': 'SSO + MFA', 'login.f1d': 'TOTP RFC 6238 / push có đối chiếu số; khoá tài khoản sau 5 lần sai',
    'login.f2': 'RBAC + ABAC', 'login.f2d': '14 vai trò, lọc theo đơn vị, lớp CVHT, PTN được giao',
    'login.f3': 'Luật 91/2025', 'login.f3d': 'Che dữ liệu nhạy cảm, ẩn danh k ≥ 5, nhật ký chuỗi băm',
    'login.user': 'Tài khoản IU (email công vụ)', 'login.pass': 'Mật khẩu', 'login.next': 'Tiếp tục', 'login.demo': 'Tài khoản trình diễn (mật khẩu: IU@2026demo)',
    'login.bad': 'Sai tài khoản hoặc mật khẩu.', 'login.locked': 'Tài khoản tạm khoá 5 phút do nhập sai quá 5 lần.', 'login.step1': '1. Định danh', 'login.step2': '2. Xác thực đa yếu tố', 'login.step3': '3. Vào hệ thống',
    'login.mfa': 'Xác thực đa yếu tố', 'login.totp': 'Nhập mã OTP 6 số đang hiển thị trên ứng dụng IU Authenticator (điện thoại giả lập bên cạnh).',
    'login.push': 'Yêu cầu đăng nhập đã được gửi tới điện thoại. Chọn trên điện thoại đúng số đang hiển thị dưới đây:',
    'login.usetotp': 'Dùng mã OTP thay thế', 'login.usepush': 'Dùng thông báo đẩy', 'login.verify': 'Xác thực', 'login.approve': 'Chấp thuận đăng nhập?', 'login.deny': 'Từ chối',
    'login.wrongnum': 'Chọn sai số – yêu cầu bị huỷ để chống tấn công "MFA fatigue".', 'login.note': 'Bản trình diễn: không gửi dữ liệu ra ngoài trình duyệt. Phiên tự kết thúc sau 15 phút không hoạt động.',
    'login.forgot': 'Quên mật khẩu? Liên hệ TT.DVCNTT (giả lập)',
  },
  en: {
    'login.title': 'Single sign-on (SSO)', 'login.hero': 'One door – one sign-in for all of a lecturer\'s work',
    'login.lead': 'e-Profile, ISO 9001:2015 e-processes, teaching and research workload, academic advising with early warnings and lab management, built on a governed core metadata layer with role-based access and personal-data protection.',
    'login.f1': 'SSO + MFA', 'login.f1d': 'TOTP RFC 6238 / push with number matching; lock after 5 failures',
    'login.f2': 'RBAC + ABAC', 'login.f2d': '14 roles, filtered by unit, advisee class, assigned lab',
    'login.f3': 'PDP Law 91/2025', 'login.f3d': 'Sensitive-data masking, k ≥ 5 anonymisation, hash-chained audit log',
    'login.user': 'IU account (work email)', 'login.pass': 'Password', 'login.next': 'Continue', 'login.demo': 'Demo accounts (password: IU@2026demo)',
    'login.bad': 'Wrong account or password.', 'login.locked': 'Account locked for 5 minutes after 5 failed attempts.', 'login.step1': '1. Identify', 'login.step2': '2. Multi-factor', 'login.step3': '3. Enter',
    'login.mfa': 'Multi-factor authentication', 'login.totp': 'Enter the 6-digit code shown in the IU Authenticator app (simulated phone).',
    'login.push': 'A sign-in request was sent to your phone. On the phone, pick the number shown below:',
    'login.usetotp': 'Use an OTP code instead', 'login.usepush': 'Use push notification', 'login.verify': 'Verify', 'login.approve': 'Approve sign-in?', 'login.deny': 'Deny',
    'login.wrongnum': 'Wrong number – request cancelled (MFA-fatigue protection).', 'login.note': 'Demo only: no data leaves your browser. Sessions end after 15 minutes of inactivity.',
    'login.forgot': 'Forgot password? Contact IT Services (simulated)',
  },
});
App.page('login', {
  render(main) {
    const t = App.t, esc = App.esc, D = App.D;
    const HERO = ['assets/img/hero/giang-vien-1.jpg', 'assets/img/hero/giang-vien-2.jpg', 'assets/img/hero/giang-vien-3.jpg'];
    main.innerHTML = `<div class="login">
      <section class="login-hero">
        <div class="hero-brand"><img src="assets/img/iu-logo.png" alt="Logo Trường Đại học Quốc tế"><div><div style="opacity:.85;font-size:.85rem">${esc(D.org.school_vi)}</div><h1>${t('app.full')}</h1></div></div>
        <div><h2 style="color:#8FD8F5;margin:0 0 6px">${t('login.hero')}</h2><p>${t('login.lead')}</p></div>
        <img class="hero-img" data-hero src="assets/img/hero.svg" alt="Giảng viên Trường Đại học Quốc tế">
        <div class="hero-feats"><div><b>${t('login.f1')}</b>${t('login.f1d')}</div><div><b>${t('login.f2')}</b>${t('login.f2d')}</div><div><b>${t('login.f3')}</b>${t('login.f3d')}</div></div>
      </section>
      <section class="login-panel" aria-label="${t('login.title')}">
        <div class="row between"><div class="sso-h"><img src="assets/img/iu-logo.png" alt=""><b>IU SSO</b></div>
          <div class="lang" style="border-color:#C9CDE6"><button data-lang="vi" class="${App.lang === 'vi' ? 'on' : ''}" style="color:var(--navy)">VI</button><button data-lang="en" class="${App.lang === 'en' ? 'on' : ''}" style="color:var(--navy)">EN</button></div></div>
        <div class="steps"><span class="on">${t('login.step1')}</span><span data-s2>${t('login.step2')}</span><span>${t('login.step3')}</span></div>
        <div data-body></div>
        <p class="muted small">${t('login.note')}</p>
      </section></div>`;
    main.querySelectorAll('[data-lang]').forEach((b) => (b.onclick = () => App.setLang(b.dataset.lang)));
    main.querySelectorAll('[data-lang]').forEach((b) => { if (b.classList.contains('on')) b.style.color = '#fff', b.style.background = 'var(--navy)'; });
    // ảnh thật của giảng viên (nếu Nhà trường đặt vào assets/img/hero/) – không có thì giữ hình minh hoạ
    const heroEl = main.querySelector('[data-hero]');
    let hi = 0;
    const tryHero = () => { const im = new Image(); im.onload = () => { heroEl.src = im.src; heroEl.style.objectFit = 'cover'; }; im.src = HERO[hi % HERO.length]; };
    tryHero(); const heroTimer = setInterval(() => { if (!heroEl.isConnected) return clearInterval(heroTimer); hi++; tryHero(); }, 6000);

    const body = main.querySelector('[data-body]');
    const step1 = (prefill) => {
      const demo = D.accounts.map((a) => ({ a, s: App.staff(a.ma_cb) })).sort((x, y) => order(x.a.roles[0]) - order(y.a.roles[0]));
      body.innerHTML = `<form autocomplete="on"><label>${t('login.user')}<input name="u" autocomplete="username" value="${esc(prefill || '')}" placeholder="ten.ho@sim.hcmiu.edu.vn" required></label>
        <label>${t('login.pass')}<input name="p" type="password" autocomplete="current-password" required></label>
        <p class="err" hidden></p><button class="btn" type="submit">${t('login.next')}</button><a class="small" href="#" data-forgot>${t('login.forgot')}</a></form>
        <h4 style="margin:6px 0 0">${t('login.demo')}</h4>
        <div class="demo-acc">${demo.map(({ a, s }) => `<button type="button" data-u="${a.username}"><img src="${s.media.photo}" alt=""><span><b>${esc(App.academicPrefix(s) + ' ' + s.ho_ten)}</b><small>${esc(a.username)}@sim.hcmiu.edu.vn · MFA: ${a.mfa_method === 'push' ? 'push' : 'TOTP'}</small></span>${App.ui.badge(a.roles.map(App.roleName).join(' · '), 'info')}</button>`).join('')}</div>`;
      const f = body.querySelector('form');
      body.querySelector('[data-forgot]').onclick = (e) => { e.preventDefault(); App.ui.toast(t('login.forgot')); };
      body.querySelectorAll('[data-u]').forEach((b) => (b.onclick = () => { f.u.value = b.dataset.u + '@sim.hcmiu.edu.vn'; f.p.value = 'IU@2026demo'; f.p.focus(); }));
      f.onsubmit = (e) => {
        e.preventDefault();
        const err = f.querySelector('.err'); const acc = App.auth.account(f.u.value);
        if (!acc) { err.hidden = false; err.textContent = t('login.bad'); return; }
        const r = App.auth.checkPassword(acc, f.p.value);
        if (r === 'locked') { err.hidden = false; err.textContent = t('login.locked'); return; }
        if (r !== 'ok') { err.hidden = false; err.textContent = t('login.bad'); return; }
        step2(acc, acc.mfa_method);
      };
    };
    const order = (r) => ['TK', 'PTK', 'TBM', 'GV', 'NCV', 'TG', 'KTV', 'CV_TCCB', 'CV_DTDH', 'CV_QLKH', 'BGH', 'DPO', 'ADMIN'].indexOf(r);
    const step2 = (acc, method) => {
      main.querySelector('[data-s2]').classList.add('on');
      if (method === 'push') {
        const nums = [10 + Math.floor(Math.random() * 89)]; while (nums.length < 3) { const n = 10 + Math.floor(Math.random() * 89); if (!nums.includes(n)) nums.push(n); }
        const target = nums[0]; nums.sort(() => Math.random() - 0.5);
        body.innerHTML = `<h3>${t('login.mfa')}</h3><p>${t('login.push')}</p><div class="row" style="align-items:flex-start;gap:20px"><div class="push-num" style="font-size:3rem;font-weight:800;color:var(--navy)">${target}</div>
          <div class="phone"><div class="phone-top">IU Authenticator</div><div class="phone-acc">${esc(acc.username)}@sim.hcmiu.edu.vn</div><p style="font-size:.85rem">${t('login.approve')}</p>
          <div class="row" style="justify-content:center">${nums.map((n) => `<button class="btn cyan sm" data-n="${n}">${n}</button>`).join('')}</div><button class="btn ghost sm" style="margin-top:10px" data-deny>${t('login.deny')}</button></div></div>
          <p class="err" hidden></p><button class="linkbtn" data-alt>${t('login.usetotp')}</button>`;
        body.querySelectorAll('[data-n]').forEach((b) => (b.onclick = () => {
          if (+b.dataset.n === target) { App.auth.start(acc, 'push'); location.hash = '#/home'; App.render(); }
          else { const e = body.querySelector('.err'); e.hidden = false; e.textContent = t('login.wrongnum'); App.audit('MFA_LOI', 'Push MFA chọn sai số – ' + acc.username, acc.ma_cb); setTimeout(() => step2(acc, 'push'), 1800); }
        }));
        body.querySelector('[data-deny]').onclick = () => step1(acc.username);
        body.querySelector('[data-alt]').onclick = () => step2(acc, 'totp');
        return;
      }
      body.innerHTML = `<h3>${t('login.mfa')}</h3><p>${t('login.totp')}</p><div class="mfa-wrap"><form data-otp class="stack"><input class="otp" maxlength="6" inputmode="numeric" autocomplete="one-time-code" placeholder="••••••" required>
        <button class="btn">${t('login.verify')}</button></form><div class="phone" data-phone></div></div><p class="err" hidden></p><button class="linkbtn" data-alt>${t('login.usepush')}</button>`;
      App.ui.phone(body.querySelector('[data-phone]'), acc);
      const inp = body.querySelector('.otp'); inp.focus();
      body.querySelector('[data-alt]').onclick = () => step2(acc, 'push');
      body.querySelector('[data-otp]').onsubmit = async (e) => {
        e.preventDefault();
        if (await App.auth.verifyOtp(acc, inp.value)) { App.ui.closeModal(); App.auth.start(acc, 'totp'); location.hash = '#/home'; App.render(); }
        else { const er = body.querySelector('.err'); er.hidden = false; er.textContent = t('mfa.bad'); App.audit('DANG_NHAP_LOI', 'Sai OTP – ' + acc.username, acc.ma_cb); }
      };
    };
    step1();
  },
});
