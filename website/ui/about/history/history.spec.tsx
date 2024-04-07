import { render } from '@testing-library/react';
import { SampleHistory } from './history.composition.js';

it.skip('should render with the correct text', () => {
  // TODO: Fix this test (add context)
  const { getAllByText } = render(<SampleHistory />);
  const rendered = getAllByText('History');
  expect(rendered.length).toBeGreaterThan(0);
});
