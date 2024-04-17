import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SettingsProvider,
  SettingsConsumer,
} from '@cohen-codes/website.contexts.settings-context';
import { Main } from '@cohen-codes/website.layouts.main';
import { AboutPage } from '@cohen-codes/website.pages.about-page';
import { IndividualProjectPage } from '@cohen-codes/website.pages.individual-project-page';
import { ProjectsPage } from '@cohen-codes/website.pages.projects-page';
import { Homepage } from '@cohen-codes/website.pages.homepage';
import { ThemeProvider } from '@cohen-codes/design.theme.theme-provider';
import { ContactPage } from '@cohen-codes/website.pages.contact-page';
// import { MyBlog } from '@cohen-codes/website.pages.blog';
import { darkPortfolioTheme } from '@cohen-codes/website.theme.dark-portfolio-theme';
import { lightPortfolioTheme } from '@cohen-codes/website.theme.light-portfolio-theme';
import { ProjectsProvider } from '@cohen-codes/website.contexts.projects';
import {
  IMAGE_URL,
  HEADER_PROPERTIES,
  FOOTER_PROPERTIES,
  SOCIAL_MEDIA_LINKS,
  PROJECTS,
  HISTORY,
  CONTACT_ME_API_URL,
} from './constants.js';

export function Website() {
  const dark = useMemo(() => darkPortfolioTheme(), []);
  const light = useMemo(() => lightPortfolioTheme(), []);
  const projectsBasePath = '/microfrontends';

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
                <ProjectsProvider
                  projects={PROJECTS}
                  basePath={projectsBasePath}
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
                        <AboutPage
                          history={HISTORY}
                          personalImage={IMAGE_URL}
                        />
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
                    <Route path={projectsBasePath} element={<ProjectsPage />} />
                    <Route
                      path={`${projectsBasePath}/:id`}
                      element={<IndividualProjectPage />}
                    />
                    {/* <Route path="blog/*" element={<MyBlog />}>
                      <Route path=":slug" />
                      <Route path="author/:username/" />
                      <Route path="tags/:tag" />
                    </Route> */}
                  </Routes>
                </ProjectsProvider>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
