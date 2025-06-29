import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestNotaryButton from './RequestNotaryButton.jsx';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('navigates to contact section when clicked', () => {
  render(
    <MemoryRouter>
      <RequestNotaryButton />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: /request notary/i }));
  expect(mockNavigate).toHaveBeenCalledWith('/contact#contact');
});
