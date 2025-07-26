const test = require('node:test');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('module');
const esbuild = require('esbuild');
const originalRequire = Module.prototype.require;

function loadModule(file) {
  const abs = path.join(__dirname, '..', file);
  const source = fs.readFileSync(abs, 'utf8');
  const { code } = esbuild.transformSync(source, { format: 'cjs' });
  const m = new Module(abs);
  m.filename = abs;
  m.paths = Module._nodeModulePaths(path.dirname(abs));
  m._compile(code, abs);
  return m.exports;
}

function stubGsap() {
  Module.prototype.require = function (id) {
    if (id === 'gsap') {
      return { gsap: { registerPlugin() {}, fromTo() {} } };
    }
    if (id === 'gsap/ScrollTrigger') {
      return { ScrollTrigger: {} };
    }
    return originalRequire.call(this, id);
  };
}

function restoreGsap() {
  Module.prototype.require = originalRequire;
}

function setupDom() {
  const html = `<!DOCTYPE html><body>
    <div class="service-card"></div>
    <div class="service-card"></div>
    <div class="service-card"></div>
  </body>`;
  const dom = new JSDOM(html, { url: 'http://localhost' });
  global.window = dom.window;
  global.document = dom.window.document;
  global.HTMLElement = dom.window.HTMLElement;
  global.window.matchMedia = () => ({
    matches: false,
    addEventListener() {},
    removeEventListener() {},
  });
  return dom;
}

test.afterEach(() => {
  delete global.window;
  delete global.document;
  delete global.HTMLElement;
  restoreGsap();
});

test('initServiceCardStack keeps cards visible', () => {
  setupDom();
  stubGsap();
  const { initServiceCardStack } = loadModule('src/service-card-stack.js');
  initServiceCardStack();

  const cards = document.querySelectorAll('.service-card');
  assert.equal(cards.length, 3);
  cards.forEach((card) => {
    assert.equal(document.body.contains(card), true);
    assert.notEqual(card.style.display, 'none');
  });
});
