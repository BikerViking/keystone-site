import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.jsx';

/** Basic interaction test for the mobile menu */
test('mobile menu opens and closes properly', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const toggle = screen.getByRole('button', { name: /toggle navigation menu/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(document.body).toHaveClass('overflow-hidden');

  // Close via dedicated button
  fireEvent.click(screen.getByRole('button', { name: /close menu/i }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(document.body).not.toHaveClass('overflow-hidden');
});

test('adds shadow when page is scrolled', () => {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const header = screen.getByRole('banner');
  expect(header.className).toMatch(/shadow-none/);

  window.scrollY = 100;
  fireEvent.scroll(window);

  expect(header.className).toMatch(/shadow-md/);
});
