import '@testing-library/jest-dom';

// Basic IntersectionObserver mock for tests that rely on it
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof global.IntersectionObserver === 'undefined') {
  global.IntersectionObserver = MockIntersectionObserver;
}
