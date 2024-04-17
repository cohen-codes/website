import React from 'react';
import { render } from '@testing-library/react';
import { BasicProjects } from './projects-context.composition.js';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProjects />);
  const rendered = getByText('Projects Context');
  expect(rendered).toBeTruthy();
});
