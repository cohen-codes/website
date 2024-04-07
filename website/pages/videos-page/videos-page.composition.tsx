import { MemoryRouter } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { VideosPage } from './videos-page.js';

export const SampleVideosPage = () => (
  <MemoryRouter>
    <Main>
      <VideosPage />
    </Main>
  </MemoryRouter>
);
