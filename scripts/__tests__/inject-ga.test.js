const path = require('path');

// Mock the fs module before requiring the script
jest.mock('fs');
let fs = require('fs');

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

beforeEach(() => {
  jest.resetModules();
  // Re-import the mocked fs after resetting modules
  fs = require('fs');

  // Provide a fake GA ID for the script to inject
  process.env.REACT_APP_GA_ID = 'TEST_ID';

  // Prevent the script from exiting the test process
  jest.spyOn(process, 'exit').mockImplementation(() => {});

  // fs.readFileSync should return our sample HTML
  fs.readFileSync.mockReturnValue(sampleHtml);
  fs.writeFileSync.mockClear();
  fs.writeFileSync.mockImplementation(() => {});
});

afterEach(() => {
  delete process.env.REACT_APP_GA_ID;
  jest.restoreAllMocks();
});

test('inject-ga replaces all GA_MEASUREMENT_ID placeholders', () => {
  // Require the script after mocks and env setup
  require('../inject-ga');

  const scriptDir = path.dirname(require.resolve('../inject-ga.js'));
  const buildPath = path.join(scriptDir, '../build/index.html');
  const expectedHtml = sampleHtml.replace(/GA_MEASUREMENT_ID/g, 'TEST_ID');

  expect(fs.writeFileSync).toHaveBeenCalledWith(buildPath, expectedHtml);
});
