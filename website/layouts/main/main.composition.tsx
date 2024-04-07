import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Typography } from '@nitsan770/portfolio.typography.typography';
import { Main } from './main.js';

export const BasicMain = () => (
  <MemoryRouter>
    <Main
      appfooterProps={{ leftContent: 'hello', rightContent: 'world' }}
      appbarProps={{ logo: <div />, navLinks: [] }}
    >
      <Typography variant="h1">Hello World</Typography>
    </Main>
  </MemoryRouter>
);
