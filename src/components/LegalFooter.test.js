import { render, screen } from '@testing-library/react';
import LegalFooter from './LegalFooter.jsx';

test('renders legal notices', () => {
  render(<LegalFooter />);
  expect(screen.getByText(/licensed & bonded notary public/i)).toBeInTheDocument();
  expect(screen.getByText(/copyright © keystone notary group 2025/i)).toBeInTheDocument();
});
