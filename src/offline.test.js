import fs from 'fs';
import path from 'path';

test('offline.html exists in public directory', () => {
  const filePath = path.join(__dirname, '..', 'public', 'offline.html');
  expect(fs.existsSync(filePath)).toBe(true);
});
