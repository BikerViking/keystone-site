import { render, screen, fireEvent } from '@testing-library/react';
import BackToTopButton from './BackToTopButton.jsx';

test('shows button after scrolling and scrolls to top when clicked', () => {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  const scrollToMock = jest.fn();
  window.scrollTo = scrollToMock;
  render(<BackToTopButton />);

  const button = screen.getByRole('button', { name: /back to top/i });
  expect(button.className).toMatch(/pointer-events-none/);

  window.scrollY = 500;
  fireEvent.scroll(window);
  expect(button.className).not.toMatch(/pointer-events-none/);

  fireEvent.click(button);
  expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});
