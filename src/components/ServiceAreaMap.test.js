import { render } from '@testing-library/react';
import ServiceAreaMap from './ServiceAreaMap.jsx';

test('renders map container', () => {
  const { container } = render(<ServiceAreaMap />);
  expect(container.querySelector('#service-area-map')).toBeInTheDocument();
});
