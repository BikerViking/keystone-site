import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ContactPage from './contact.jsx';

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
});

afterEach(() => {
  jest.resetAllMocks();
});

test('submits form and shows confirmation message', async () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  );

  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'John' },
  });
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'john@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/^Message$/i), {
    target: { value: 'Hello' },
  });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object));
  });

  expect(
    screen.getByText(/thank you! your message has been sent/i)
  ).toBeInTheDocument();

  expect(screen.getByLabelText(/full name/i).value).toBe('');
  expect(screen.getByLabelText(/email address/i).value).toBe('');
  expect(screen.getByLabelText(/^Message$/i).value).toBe('');
});

test('shows validation errors for empty fields', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  );

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(fetch).not.toHaveBeenCalled();
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/message is required/i)).toBeInTheDocument();
});

test('shows validation error for invalid email', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  );

  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'John' },
  });
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'invalid-email' },
  });
  fireEvent.change(screen.getByLabelText(/^Message$/i), {
    target: { value: 'Hello' },
  });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(fetch).not.toHaveBeenCalled();
  expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument();
});
