const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server.js');
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
