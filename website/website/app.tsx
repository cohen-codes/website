import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SettingsProvider,
  SettingsConsumer,
} from '@cohen-codes/website.contexts.settings-context';
import { Main } from '@cohen-codes/website.layouts.main';
import { AboutPage } from '@cohen-codes/website.pages.about-page';
import { Homepage } from '@cohen-codes/website.pages.homepage';
import { ThemeProvider } from '@cohen-codes/design.theme.theme-provider';
import { ContactPage } from '@cohen-codes/website.pages.contact-page';
import { darkPortfolioTheme } from '@cohen-codes/website.theme.dark-portfolio-theme';
import { lightPortfolioTheme } from '@cohen-codes/website.theme.light-portfolio-theme';
import {
  IMAGE_URL,
  HEADER_PROPERTIES,
  FOOTER_PROPERTIES,
  SOCIAL_MEDIA_LINKS,
  HISTORY,
  CONTACT_ME_API_URL,
} from './constants.js';

export function Website() {
  const dark = useMemo(() => darkPortfolioTheme(), []);
  const light = useMemo(() => lightPortfolioTheme(), []);

  return (
    <>
      <Helmet>
        <title>Nitsan Cohen Codes.</title>
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ theme }) => (
            <ThemeProvider theme={theme === 'dark' ? dark : light}>
              <Main
                appbarProps={HEADER_PROPERTIES}
                appfooterProps={FOOTER_PROPERTIES}
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Homepage
                        personalImage={IMAGE_URL}
                        socialMediaLinks={SOCIAL_MEDIA_LINKS}
                      />
                    }
                  />

                  <Route
                    path="/about"
                    element={
                      <AboutPage history={HISTORY} personalImage={IMAGE_URL} />
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <ContactPage
                        personalImage={IMAGE_URL}
                        formApiUrl={CONTACT_ME_API_URL}
                        socialMediaLinks={SOCIAL_MEDIA_LINKS}
                      />
                    }
                  />
                </Routes>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
