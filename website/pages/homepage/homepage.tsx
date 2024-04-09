import React from 'react';
import { Margin, MarginType } from '@cohen-codes/design.layouts.margin';
import { Heading } from '@cohen-codes/design.typography.heading';
import { Typography } from '@cohen-codes/design.typography.typography';
import { Picture } from '@cohen-codes/website.ui.person.picture';
import { Icons, IconsProps } from '@cohen-codes/website.ui.social.icons';
import { Box, Theme, useMediaQuery, Grid } from '@mui/material';

export type HomepageProps = {
  personalImage: string;
  socialMediaLinks: IconsProps['links'];
};

type PersonReachSectionProps = {
  links: IconsProps['links'];
} & React.HTMLAttributes<HTMLElement>;

const PersonReachSection = ({ links, ...rest }: PersonReachSectionProps) => (
  <section {...rest}>
    <Margin mt={MarginType.LARGE}>
      <Heading
        sx={{
          lineHeight: 1.5,
          display: 'inline',
          color: (theme) => theme.palette.primary.main,
        }}
        value={"Don't be a stranger!"}
        fontSize={22}
        fontWeight={400}
      />
      <Typography fontSize={14}>Connect with me online</Typography>
      <Icons links={links} />
    </Margin>
  </section>
);

export function Homepage({ personalImage, socialMediaLinks }: HomepageProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Typography
            fontWeight={700}
            fontSize={28}
            {...(mdDown && {
              textAlign: 'center',
            })}
          >
            Nitsan Cohen
          </Typography>
          <Margin
            mt={MarginType.SMALL}
            {...(mdDown && {
              style: {
                textAlign: 'center',
              },
            })}
          >
            <Heading
              sx={{
                color: (theme) => theme.palette.primary.main,
                display: 'inline',
                lineHeight: '104px',
              }}
              fontSize={80}
              fontWeight={900}
              value="Saving the World"
            />
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography
              {...(mdDown && {
                textAlign: 'center',
              })}
              sx={{
                fontSize: '22px',
                fontWeight: '400',
                lineHeight: '32px',
              }}
            >
              Join me in transforming software engineering with Microfrontends.
              Together, we can create beautiful and sustainable systems that
              break down the Monolithic chaos and bring order to complexity.
            </Typography>
            <Margin mt={MarginType.MEDIUM}>
              <Typography
                {...(mdDown && {
                  textAlign: 'center',
                })}
                sx={{
                  fontSize: '22px',
                  fontWeight: '400',
                  lineHeight: '32px',
                }}
              >
                Today, everyone knows that the world of software engineering can
                be a chaotic and overwhelming place. Monolithic architecture can
                make everything slower, more difficult to manage, and more prone
                to errors. But it doesn&#39;t have to be this way. By embracing
                Component-Based Software Engineering paradigm, we can break down
                complex systems into smaller, more manageable parts that are
                easier to develop, test, and deploy. This approach is essential
                for anyone who wants to stay ahead of the curve and build
                solutions that are agile, scalable, and future-proof.
              </Typography>
            </Margin>
            <Margin mt={MarginType.MEDIUM}>
              <Typography
                {...(mdDown && {
                  textAlign: 'center',
                })}
                sx={{
                  fontSize: '22px',
                  fontWeight: '400',
                  lineHeight: '32px',
                }}
              >
                At cohen.codes, I&#39;m passionate about sharing my thoughts on
                Component-Based Engineering and exploring ways to take this
                approach to the next level. With my expertise in frontend
                development, UX architecture, and Javascript engineering,
                I&#39;m excited to collaborate with others who share my vision
                for a more beautiful and sustainable world of software
                engineering. Whether you&#39;re a developer, a business owner,
                or just someone who&#39;s interested in the future of
                technology, I invite you to join me on this journey and discover
                how Component-Based Engineering can help us transform chaos into
                clarity.
              </Typography>
            </Margin>
            {!mdDown && <PersonReachSection links={socialMediaLinks} />}
          </Margin>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Picture pictureUrl={personalImage} />
      </Grid>
      {mdDown && (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PersonReachSection links={socialMediaLinks} />
        </Grid>
      )}
    </Grid>
  );
}
