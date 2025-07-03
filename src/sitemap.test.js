import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('sitemap generation', () => {
  beforeAll(() => {
    // Generate sitemap without running the full build for faster tests
    execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
  });

  test('sitemap.xml exists in public directory', () => {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
  });
});
