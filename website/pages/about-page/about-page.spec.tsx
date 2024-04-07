import React from 'react';
import { render } from '@testing-library/react';
import { SampleAboutPage } from './about-page.composition.js';

it.skip('should render with the correct text', () => {
  // TODO: Fix this test (add context)
  const { getByText } = render(<SampleAboutPage />);
  const rendered = getByText('About-me.');
  expect(rendered).toBeTruthy();
});
