import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppfooter } from './appfooter.composition.js';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicAppfooter />);
  const rendered = getByText('Left');
  expect(rendered).toBeTruthy();
});
