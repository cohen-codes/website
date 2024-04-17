import React from 'react';
import { render } from '@testing-library/react';
import { SampleProjectsPage } from './projects-page.composition.js';

it.skip('should render with the correct text', () => {
  // TODO: Fix this test (add context)
  const { getByText } = render(<SampleProjectsPage />);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
