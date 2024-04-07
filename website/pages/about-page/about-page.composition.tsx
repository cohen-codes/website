import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { AboutPage } from './about-page.js';

export const SampleAboutPage = () => (
  <MemoryRouter>
    <Main>
      <AboutPage history={[]} personalImage="https://i.imgur.com/3ZQ3Z0x.jpg" />
    </Main>
  </MemoryRouter>
);
