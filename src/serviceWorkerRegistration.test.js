import { register, unregister } from './serviceWorkerRegistration';

test('service worker helpers are functions', () => {
  expect(typeof register).toBe('function');
  expect(typeof unregister).toBe('function');
});
