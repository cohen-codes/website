import { MemoryRouter } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { Homepage } from './homepage.js';

export const SampleHomepage = () => (
  <MemoryRouter>
    <Main>
      <Homepage
        socialMediaLinks={[
          { name: 'github', url: 'https://github.com/NitsanCohen770' },
          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/nitsan-cohen/',
          },
          { name: 'website', url: 'https://cohen.codes' },
          // { name: 'twitter', url: 'https://twitter.com/nitsan770' },
        ]}
        personalImage="https://contact-me.nitsancohen770.workers.dev/"
      />
    </Main>
  </MemoryRouter>
);
