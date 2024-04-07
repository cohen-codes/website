import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from '@nitsan770/portfolio.layouts.main';
import { ContactPage } from './contact-page.js';

export const SampleContactPage = () => (
  <MemoryRouter>
    <Main>
      <ContactPage
        socialMediaLinks={[
          { name: 'github', url: 'https://github.com/NitsanCohen770' },
          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/nitsan-cohen/',
          },
          { name: 'website', url: 'https://cohen.codes' },
          // { name: 'twitter', url: 'https://twitter.com/nitsan770' },
        ]}
        formApiUrl="https://api.formik.com/submit/portfolio-contact-form"
        personalImage="https://contact-me.nitsancohen770.workers.dev/"
      />
    </Main>
  </MemoryRouter>
);
