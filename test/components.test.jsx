import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders hero heading', () => {
  render(<App />);
  expect(screen.getByText(/Professional Notary Services/i)).toBeInTheDocument();
});
