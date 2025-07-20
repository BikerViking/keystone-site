const { devices } = require('@playwright/test');

const port = process.env.PORT || 3000;

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: './e2e',
  testMatch: '**/*.pw.js',
  timeout: 30000,
  retries: 0,
  webServer: {
    command: 'node server.js',
    port,
    reuseExistingServer: true
  },
  use: {
    baseURL: `http://localhost:${port}`,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true
  },
  projects: [
    { name: 'desktop', use: { browserName: 'chromium', ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { browserName: 'chromium', ...devices['Pixel 5'] } }
  ]
};
