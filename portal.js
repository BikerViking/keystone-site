export function initClientPortal() {
  const clientLoginBtn = document.getElementById('client-login-btn');
  const clientPortalModal = document.getElementById('client-portal-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const loginSection = document.getElementById('login-section');
  const registerSection = document.getElementById('register-section');
  const portalSection = document.getElementById('portal-section');
  const showRegisterBtn = document.getElementById('show-register');
  const showLoginBtn = document.getElementById('show-login');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const logoutBtn = document.getElementById('logout-btn');
  const scheduleNewBtn = document.getElementById('schedule-new');
  const uploadDocumentBtn = document.getElementById('upload-document');
  const userName = document.getElementById('user-name');

  function closePortal() {
    clientPortalModal.classList.add('hidden');
    document.body.style.overflow = '';
    loginSection.classList.remove('hidden');
    registerSection.classList.add('hidden');
    portalSection.classList.add('hidden');
    loginForm.reset();
    registerForm.reset();
  }

  if (
    !clientLoginBtn ||
    !clientPortalModal ||
    !closeModalBtn ||
    !loginSection ||
    !registerSection ||
    !portalSection ||
    !showRegisterBtn ||
    !showLoginBtn ||
    !loginForm ||
    !registerForm ||
    !logoutBtn ||
    !scheduleNewBtn ||
    !uploadDocumentBtn ||
    !userName
  ) {
    return;
  }

  clientLoginBtn.addEventListener('click', () => {
    clientPortalModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeModalBtn.addEventListener('click', closePortal);

  clientPortalModal.addEventListener('click', (e) => {
    if (e.target === clientPortalModal) {
      closePortal();
    }
  });

  showRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });

  showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const firstName = email.split('@')[0];
    loginSection.classList.add('hidden');
    portalSection.classList.remove('hidden');
    userName.textContent =
      firstName.charAt(0).toUpperCase() + firstName.slice(1);
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    registerSection.classList.add('hidden');
    portalSection.classList.remove('hidden');
    userName.textContent = firstName;
  });

  logoutBtn.addEventListener('click', () => {
    portalSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    loginForm.reset();
  });

  scheduleNewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closePortal();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const uploadMessage = document.getElementById('upload-message');
  uploadDocumentBtn.addEventListener('click', () => {
    if (uploadMessage) {
      uploadMessage.textContent =
        'Please contact our office to submit documents securely.';
      uploadMessage.classList.remove('hidden');
      uploadMessage.focus();
    }
  });
}
