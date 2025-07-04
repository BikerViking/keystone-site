import path from 'path';
import { fileURLToPath } from 'url';

vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    writeFileSync: vi.fn()
  }
}));
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

beforeEach(() => {
  vi.resetModules();
  fs.existsSync.mockReturnValue(true);
  fs.readdirSync.mockReturnValue(['file-a.js', 'file-b.css']);
  fs.writeFileSync.mockClear();
  fs.writeFileSync.mockImplementation(() => {});
  vi.spyOn(process, 'exit').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('generate-asset-manifest writes manifest with asset paths', async () => {
  const script = path.join(__dirname, '../generate-asset-manifest.js');
  await import(script);

  const expected = JSON.stringify({
    files: {
      'file-a.js': '/assets/file-a.js',
      'file-b.css': '/assets/file-b.css'
    }
  }, null, 2);
  const manifestPath = path.join(__dirname, '../../dist/asset-manifest.json');

  expect(fs.writeFileSync).toHaveBeenCalledWith(manifestPath, expected);
});
