import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders Keystone Notary Group heading', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /keystone notary group/i,
  });
  expect(heading).toBeInTheDocument();
});

test('includes about section', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const about = screen.getByRole('region', { name: /about/i });
  expect(about).toBeInTheDocument();
});

