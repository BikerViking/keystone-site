import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Keystone Notary Group heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /keystone notary group/i });
  expect(heading).toBeInTheDocument();
});
