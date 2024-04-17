import { MemoryRouter } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { ProjectsPage } from './projects-page.js';

export const SampleProjectsPage = () => (
  <MemoryRouter>
    <Main>
      <ProjectsPage />
    </Main>
  </MemoryRouter>
);
