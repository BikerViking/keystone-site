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

// Provide a basic matchMedia mock for components relying on it
if (typeof window.matchMedia === 'undefined') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
