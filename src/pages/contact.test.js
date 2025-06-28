import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from './contact.jsx';

test('shows confirmation message on successful form submission', () => {
  render(
    <MemoryRouter>
      <ContactPage />
    </MemoryRouter>
  );
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/^Message$/i), { target: { value: 'Hello' } });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(
    screen.getByText(/thank you! your message has been sent/i)
  ).toBeInTheDocument();

  expect(screen.getByLabelText(/full name/i).value).toBe('');
  expect(screen.getByLabelText(/email address/i).value).toBe('');
  expect(screen.getByLabelText(/^Message$/i).value).toBe('');
});
