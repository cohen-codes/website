import React from 'react';
import { render } from '@testing-library/react';
import { SampleVideosPage } from './videos-page.composition.js';

it.skip('should render with the correct text', () => {
  // TODO: Fix this test (add context)
  const { getByText } = render(<SampleVideosPage />);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
