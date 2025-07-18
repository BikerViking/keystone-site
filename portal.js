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

  clientLoginBtn.addEventListener('click', () => {
    clientPortalModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeModalBtn.addEventListener('click', () => {
    clientPortalModal.classList.add('hidden');
    document.body.style.overflow = '';
    loginSection.classList.remove('hidden');
    registerSection.classList.add('hidden');
    portalSection.classList.add('hidden');
    loginForm.reset();
    registerForm.reset();
  });

  clientPortalModal.addEventListener('click', e => {
    if (e.target === clientPortalModal) {
      clientPortalModal.classList.add('hidden');
      document.body.style.overflow = '';
      loginSection.classList.remove('hidden');
      registerSection.classList.add('hidden');
      portalSection.classList.add('hidden');
      loginForm.reset();
      registerForm.reset();
    }
  });

  showRegisterBtn.addEventListener('click', e => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
  });

  showLoginBtn.addEventListener('click', e => {
    e.preventDefault();
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const firstName = email.split('@')[0];
    loginSection.classList.add('hidden');
    portalSection.classList.remove('hidden');
    userName.textContent = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  });

  registerForm.addEventListener('submit', e => {
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

  scheduleNewBtn.addEventListener('click', () => {
    clientPortalModal.classList.add('hidden');
    document.body.style.overflow = '';
    const contactSection = document.querySelector('#contact');
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
    });
  });

  uploadDocumentBtn.addEventListener('click', () => {
    alert('Document upload feature would be integrated with a secure file storage system.');
  });
}
