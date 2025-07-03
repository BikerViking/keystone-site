import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('sitemap generation', () => {
  beforeAll(() => {
    execSync('npm run build', { stdio: 'inherit' });
  }, 300000); // allow up to 5 minutes for build

  test('sitemap.xml exists in build directory', () => {
    const sitemapPath = path.join(__dirname, '..', 'build', 'sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
  });
});
