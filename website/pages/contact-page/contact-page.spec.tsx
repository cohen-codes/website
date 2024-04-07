import React from 'react';
import { render } from '@testing-library/react';
import { SampleContactPage } from './contact-page.composition.js';

it('should render with the correct breadcrumb', () => {
  const { getByText } = render(<SampleContactPage />);
  const rendered = getByText('Contact.');
  expect(rendered).toBeTruthy();
});
