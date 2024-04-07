import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Appbar } from './appbar.js';

export const SampleAppbar = () => (
  <MemoryRouter>
    <Appbar
      logo={<div>Hello</div>}
      navLinks={[{ label: 'Projects', url: '/projects' }]}
    />
  </MemoryRouter>
);
