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
    <div id="contact"></div>
    <button id="prev-month"></button>
    <button id="next-month"></button>
    <span id="current-month"></span>
    <div id="calendar-days"></div>
    <div id="time-slots" style="display:none"></div>
    <div id="time-slots-grid"></div>
    <span id="selected-date"></span>
    <div id="appointment-details"></div>
    <button id="submit-appointment"></button>
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

test('initCalendar populates days and selects date', () => {
  const dom = setupDom();
  const { initCalendar } = loadModule('calendar.js');
  initCalendar();

  const days = document.querySelectorAll('#calendar-days .calendar-day');
  assert.ok(days.length > 0, 'calendar days generated');

  const selectable = document.querySelector('.calendar-day:not(.disabled):not(.empty)');
  assert.ok(selectable, 'has selectable day');

  selectable.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));

  assert.ok(document.getElementById('selected-date').textContent);
  assert.equal(document.getElementById('time-slots').style.display, 'block');
});
