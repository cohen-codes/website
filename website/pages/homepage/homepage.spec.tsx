import { render } from '@testing-library/react';
import { SampleHomepage } from './homepage.composition.js';

it.skip('should render with the correct text', () => {
  // TODO: Fix this test (add context)
  const { getByText } = render(<SampleHomepage />);
  const rendered = getByText('Connect with me online');
  expect(rendered).toBeTruthy();
});
