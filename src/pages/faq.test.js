import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FaqPage from './faq.jsx';

test('accordion shows one answer at a time', () => {
  render(
    <MemoryRouter>
      <FaqPage />
    </MemoryRouter>
  );

  const firstButton = screen.getByRole('button', {
    name: /what do i need to bring/i,
  });
  const secondButton = screen.getByRole('button', {
    name: /do you offer mobile notary services/i,
  });

  const firstPanel = screen.getByText(/valid, government-issued/i).parentElement;
  const secondPanel = screen.getByText(/we travel to your home/i).parentElement;

  // Initially all answers are collapsed
  expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  expect(firstPanel).toHaveAttribute('aria-hidden', 'true');

  fireEvent.click(firstButton);
  expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  expect(firstPanel).toHaveAttribute('aria-hidden', 'false');
  expect(secondButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(secondButton);
  expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  expect(firstPanel).toHaveAttribute('aria-hidden', 'true');
  expect(secondButton).toHaveAttribute('aria-expanded', 'true');
  expect(secondPanel).toHaveAttribute('aria-hidden', 'false');
});

test('CTA to contact page is present', () => {
  render(
    <MemoryRouter>
      <FaqPage />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: /still have questions/i })
  ).toBeInTheDocument();

  const link = screen.getByRole('link', { name: /contact us/i });
  expect(link).toHaveAttribute('href', '/contact#contact');
});
