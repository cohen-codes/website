import { Margin, MarginType } from '@cohen-codes/design.layouts.margin';
import { Breadcrumb } from '@cohen-codes/design.navigation.breadcrumb';
import { Heading } from '@cohen-codes/design.typography.heading';
import { Typography } from '@cohen-codes/design.typography.typography';
import { Picture } from '@cohen-codes/website.ui.person.picture';
import { History, HistoryProps } from '@cohen-codes/website.ui.about.history';
import { Grid, GridProps } from '@mui/material';

export type AboutPageProps = {
  personalImage: string;
  history: HistoryProps['workItems'];
} & GridProps;

export function AboutPage({ personalImage, history, ...rest }: AboutPageProps) {
  return (
    <>
      <Grid container spacing={5} {...rest}>
        <Grid item xs={12} md={6}>
          <Breadcrumb
            crumbs={[{ crumb: 'About-me.' }]}
            typographyProps={{
              variant: 'body2',
              fontSize: 18,
              color: 'text.primary',
            }}
          />
          <Margin mt={MarginType.MEDIUM}>
            <Heading
              sx={{
                color: (theme) => theme.palette.primary.main,
                lineHeight: 1.5,
                display: 'inline',
              }}
              value="Revolutionizing Web Development: A Journey of Heart and Code"
            />
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              Join me in transforming frontend software engineering with
              Component-Based solutions, embracing the paradigm of
              microfrontends. Together, we can create beautiful and sustainable
              systems that break down the Monolithic chaos and bring order to
              complexity.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              I believe that web development is more than just a job – it&#39;s
              a calling. That&#39;s why I&#39;m committed to constantly
              improving my skills and pushing the boundaries of what&#39;s
              possible in the field.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              As a Frontend Engineer at Bit, I&#39;ve led the evolution of
              Bit&#39;s primary online platforms, employing React, TypeScript,
              GraphQL, and SCSS to enhance functionality and user engagement. My
              contributions to Bit's core system architecture have promoted
              modularization through Aspect-Oriented Programming (AOP), ensuring
              code maintainability and scalability. Collaborating closely with
              cross-functional teams, I've co-designed demo projects and
              educational materials, empowering businesses to effectively manage
              design systems using Bit.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              Now I am sharing my knowledge with you. Let&#39;s work together to
              create a better web.
            </Typography>
          </Margin>
        </Grid>
        <Grid item xs={12} md={6}>
          <Picture pictureUrl={personalImage} />
        </Grid>
      </Grid>
      <div>
        <Margin mt={MarginType.EXTRA_LARGE}>
          <Heading value="A Brief History" />
          <Margin mt={MarginType.MEDIUM}>
            <History workItems={history} />
          </Margin>
          <Margin mt={MarginType.MEDIUM} />
        </Margin>
      </div>
    </>
  );
}
