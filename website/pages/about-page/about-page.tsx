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
              value="Turning Coffee into Code: The Story of a Passionate Web Developer"
            />
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              Welcome to cohen.codes, the online home of a dedicated web
              developer who is passionate about creating engaging user
              experiences and solving complex problems with code. From an early
              age, I&#39;ve been fascinated by the power of the web to connect
              people and drive change. Over the years, I&#39;ve honed my skills
              in web development, always striving to learn new technologies and
              stay on the cutting edge of the field.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              As a fast learner and problem solver, I have a proven ability to
              tackle complex technical challenges and share my knowledge with
              others. I believe that web development is more than just a job –
              it&#39;s a calling. That&#39;s why I&#39;m committed to constantly
              improving my skills and pushing the boundaries of what&#39;s
              possible in the field.
            </Typography>
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography color="text.secondary">
              At cohen.codes, you&#39;ll find a portfolio and blog that showcase
              my latest projects and insights into the world of web development.
              Whether you&#39;re a developer, a business owner, or just someone
              who&#39;s interested in the future of technology, I invite you to
              join the conversation and explore the possibilities of what we can
              achieve together. Thank you for taking the time to learn more
              about me – I look forward to connecting with you and sharing our
              love
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
