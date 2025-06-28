import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.jsx';

test('mobile menu toggles when button is clicked', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const button = screen.getByRole('button', { name: /toggle navigation menu/i });
  expect(button).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: /services/i }));
  expect(button).toHaveAttribute('aria-expanded', 'false');
});
