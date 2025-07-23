const { test, expect } = require('playwright/test');

const stubExternal = async page => {
  await page.route('https://fonts.googleapis.com/**', route => route.fulfill({ status: 200, body: '' }));
  await page.route('https://fonts.gstatic.com/**', route => route.fulfill({ status: 200, body: '' }));
  await page.route('https://keystonenotarygroup.com/**', route => route.fulfill({ status: 200, body: '' }));
};

test.beforeEach(async ({ page }) => {
  await stubExternal(page);
  await page.goto('/');
});

test('client portal modal open and close', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 640 });
  await page.getByRole('button', { name: /client portal login/i }).click();
  const modal = page.locator('#client-portal-modal');
  await expect(modal).toBeVisible();
  await page.getByRole('button', { name: /close modal/i }).click();
  await expect(modal).toBeHidden();
});

test('calendar date and time selection', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  const day = page.locator('.calendar-day:not(.disabled):not(.empty)').first();
  await day.click();
  await page.waitForSelector('#time-slots', { state: 'visible' });
  const details = page.locator('#appointment-details');
  await expect(details).not.toHaveText(/No date/);
});

test('FAQ accordion toggle', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  const question = page.locator('.faq-question').first();
  const answer = question.locator('xpath=following-sibling::*[1]');
  await question.click();
  await expect(answer).toBeVisible();
  await question.click();
  await expect(answer).toBeHidden();
});

test('theme toggle persists across reloads', async ({ page }) => {
  await page.getByRole('button', { name: /toggle dark mode/i }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
});
