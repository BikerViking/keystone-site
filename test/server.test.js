const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server.js');
const fs = require('node:fs');
let server;

test.before(() => {
  server = app.listen(0);
});

test.after(() => {
  server.close();
});

test('static headers', async () => {
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/index.html`);
  assert.equal(res.status, 200);
  assert.ok(res.headers.get('cache-control'));
  assert.ok(res.headers.get('content-security-policy'));
});

test('forms expose live regions', async () => {
  const html = await fs.promises.readFile('index.html', 'utf8');
  assert.ok(html.includes('id="login-message"'));
  assert.ok(html.includes('id="register-message"'));
  assert.ok(html.includes('id="appointment-message"'));
  assert.ok(html.includes('id="newsletter-message"'));
  assert.ok(html.includes('id="upload-message"'));
  assert.ok(html.includes('id="upload-error"'));
});

test('no inline styles remain', async () => {
  const html = await fs.promises.readFile('index.html', 'utf8');
  assert.equal(html.includes('style="'), false);
});
