import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Keystone Notary Group heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /keystone notary group/i,
  });
  expect(heading).toBeInTheDocument();
});

test('includes about section', () => {
  render(<App />);
  const about = screen.getByRole('region', { name: /about/i });
  expect(about).toBeInTheDocument();
});

test('displays NNA seal in services section', () => {
  const { container } = render(<App />);
  const seal = container.querySelector('img[src="/nna-seal.PNG"]');
  expect(seal).toBeTruthy();
});
