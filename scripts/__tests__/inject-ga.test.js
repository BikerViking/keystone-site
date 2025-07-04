import path from 'path';
import { fileURLToPath } from 'url';

// Mock the fs module before requiring the script
vi.mock('fs', () => ({
  default: {
    readFileSync: vi.fn(),
    writeFileSync: vi.fn()
  }
}));
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Sample HTML with multiple GA_MEASUREMENT_ID placeholders to verify
 * replacement logic.
 */
const sampleHtml = `
<html>
  <head><script>GA_MEASUREMENT_ID</script></head>
  <body>GA_MEASUREMENT_ID</body>
</html>
`;

beforeEach(async () => {
  vi.resetModules();
  // Re-import the mocked fs after resetting modules
  fs = (await import('fs')).default;

  // Provide a fake GA ID for the script to inject
  process.env.REACT_APP_GA_ID = 'TEST_ID';

  // Prevent the script from exiting the test process
  vi.spyOn(process, 'exit').mockImplementation(() => {});

  // fs.readFileSync should return our sample HTML
  fs.readFileSync.mockReturnValue(sampleHtml);
  fs.writeFileSync.mockClear();
  fs.writeFileSync.mockImplementation(() => {});
});

afterEach(() => {
  delete process.env.REACT_APP_GA_ID;
  vi.restoreAllMocks();
});

test('inject-ga replaces all GA_MEASUREMENT_ID placeholders', async () => {
  // Import the script after mocks and env setup
  await import('../inject-ga.js');

  const scriptDir = path.join(__dirname, '..');
  const buildPath = path.join(scriptDir, '../build/index.html');
  const expectedHtml = sampleHtml.replace(/GA_MEASUREMENT_ID/g, 'TEST_ID');

  expect(fs.writeFileSync).toHaveBeenCalledWith(buildPath, expectedHtml);
});
