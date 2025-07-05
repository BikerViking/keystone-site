import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

test('renders UNBOXED TEST heading', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const heading = screen.getByRole('heading', { name: /unboxed test/i, level: 1 });
  expect(heading).toBeInTheDocument();
});
