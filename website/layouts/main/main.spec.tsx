import React from 'react';
import { render } from '@testing-library/react';
import { BasicMain } from './main.composition.js';

it('should render footer with correct text', () => {
  const { getByText } = render(<BasicMain />);
  const rendered = getByText('hello');
  expect(rendered).toBeTruthy();
});

it('should render content with correct text', () => {
  const { getByText } = render(<BasicMain />);
  const rendered = getByText('world');
  expect(rendered).toBeTruthy();
});
