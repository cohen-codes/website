import React from 'react';
import { Routes, MemoryRouter, Route } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { IndividualProjectPage } from './individual-project-page.js';

export const SampleIndividualProjectPage = () => (
  <MemoryRouter initialEntries={[{ pathname: '/projects/1' }]} initialIndex={0}>
    <Routes>
      <Route
        path="/projects/:id"
        element={
          <Main>
            <IndividualProjectPage />
          </Main>
        }
      />
    </Routes>
  </MemoryRouter>
);
