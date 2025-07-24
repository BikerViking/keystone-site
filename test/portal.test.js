const test = require('node:test');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('module');
const esbuild = require('esbuild');

function loadModule(file) {
  const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const { code } = esbuild.transformSync(source, { format: 'cjs' });
  const m = new Module(file);
  m._compile(code, file);
  return m.exports;
}

function setupDom() {
  const html = `<!DOCTYPE html><body>
    <button id="client-login-btn"></button>
    <div id="client-portal-modal" class="hidden">
      <button id="close-modal"></button>
      <div id="login-section"></div>
      <div id="register-section" class="hidden"></div>
      <div id="portal-section" class="hidden"></div>
      <button id="show-register"></button>
      <button id="show-login"></button>
      <form id="login-form"></form>
      <form id="register-form"></form>
      <button id="logout-btn"></button>
      <button id="schedule-new"></button>
      <button id="upload-document"></button>
      <span id="user-name"></span>
    </div>
    <div id="upload-message" class="hidden"></div>
    <div id="contact"></div>
  </body>`;
  const dom = new JSDOM(html, { url: 'http://localhost' });
  global.window = dom.window;
  global.document = dom.window.document;
  global.HTMLElement = dom.window.HTMLElement;
  return dom;
}

test.afterEach(() => {
  delete global.window;
  delete global.document;
  delete global.HTMLElement;
});

test('initClientPortal opens and closes modal', () => {
  setupDom();
  const { initClientPortal } = loadModule('portal.js');
  initClientPortal();

  const loginBtn = document.getElementById('client-login-btn');
  loginBtn.click();
  const modal = document.getElementById('client-portal-modal');
  assert.equal(modal.classList.contains('hidden'), false);
  assert.equal(document.body.style.overflow, 'hidden');

  const closeBtn = document.getElementById('close-modal');
  closeBtn.click();
  assert.equal(modal.classList.contains('hidden'), true);
  assert.equal(document.body.style.overflow, '');
});

test('initClientPortal toggles register view', () => {
  setupDom();
  const { initClientPortal } = loadModule('portal.js');
  initClientPortal();

  document.getElementById('client-login-btn').click();

  const showRegister = document.getElementById('show-register');
  showRegister.click();
  assert.equal(document.getElementById('login-section').classList.contains('hidden'), true);
  assert.equal(document.getElementById('register-section').classList.contains('hidden'), false);

  const showLogin = document.getElementById('show-login');
  showLogin.click();
  assert.equal(document.getElementById('register-section').classList.contains('hidden'), true);
  assert.equal(document.getElementById('login-section').classList.contains('hidden'), false);
});
