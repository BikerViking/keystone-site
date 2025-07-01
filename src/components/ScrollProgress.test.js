import { render } from '@testing-library/react';
import ScrollProgress from './ScrollProgress.jsx';

test('renders progress bar element', () => {
  const { container } = render(<ScrollProgress />);
  const bar = container.firstChild;
  expect(bar).toBeInTheDocument();
});
