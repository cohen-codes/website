import { useState } from 'react';
import { Icons, IconsProps } from '@cohen-codes/website.ui.social.icons';
import { MarginType, Margin } from '@cohen-codes/design.layouts.margin';
import { LinkText } from '@cohen-codes/design.navigation.link-text';
import { Breadcrumb } from '@cohen-codes/design.navigation.breadcrumb';
import { Typography } from '@cohen-codes/design.typography.typography';
import { Artwork } from '@cohen-codes/website.ui.person.artwork';
import { Picture } from '@cohen-codes/website.ui.person.picture';
import { Box, Grid, GridProps } from '@mui/material';
import {
  ContactForm,
  ContactFormType,
} from '@cohen-codes/contact-me.ui.contact-form';
import { PageMeta } from '@cohen-codes/website.seo.page-meta';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './contact-page.css';

export type ContactPageProps = {
  socialMediaLinks: IconsProps['links'];
  formApiUrl: string;
  personalImage: string;
} & GridProps;

export function ContactPage({
  socialMediaLinks,
  formApiUrl,
  personalImage,
  ...rest
}: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmit = async (formData: ContactFormType) => {
    const response = await fetch(formApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setFormSubmitted(true);
    }
  };

  return (
    <>
      <PageMeta
        title="Nitsan Cohen Codes."
        description="Contact me directly on this form or shoot me an email at nitsan@cohen.codes. I'm always happy to chat about web development, microfrontends, and more."
      />
      <Grid container spacing={5} {...rest}>
        <Grid item xs={12} md={6} sm={12}>
          <Breadcrumb crumbs={[{ crumb: 'Contact.' }]} />
          <Margin mt={MarginType.MEDIUM}>
            <Typography variant="body2" fontSize={18}>
              Get in touch or shoot me an email directly on{' '}
              <b>nitsan@cohen.codes</b>
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <ContactForm onSubmit={handleFormSubmit} />
          </Margin>
          <Margin mt={MarginType.LARGE}>
            <Box>
              <LinkText
                linkText="Go to my homepage"
                url="/"
                fontSize={16}
                fontWeight={400}
                iconSize="medium"
                color="secondary"
              />
            </Box>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Icons links={socialMediaLinks} />
          </Margin>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
          }}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={formSubmitted ? 'picture' : 'artwork'}
              classNames="fade"
              timeout={500}
            >
              {formSubmitted ? (
                <Picture pictureUrl={personalImage} />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '75%',
                    width: '75%',
                    ml: 15,
                    mt: 2,
                  }}
                >
                  <Artwork />
                </Box>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Grid>
      </Grid>
    </>
  );
}
