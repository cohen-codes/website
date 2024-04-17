import React from 'react';
import { useParams } from 'react-router-dom';
import { Margin, MarginType } from '@nitsan770/portfolio.layouts.margin';
import { LinkText } from '@nitsan770/portfolio.navigation.link-text';
import { Breadcrumb } from '@nitsan770/portfolio.navigation.breadcrumb';
import { Chip } from '@nitsan770/portfolio.elements.chip';
import { Heading } from '@nitsan770/portfolio.typography.heading';
import { Typography } from '@nitsan770/portfolio.typography.typography';
import { useProject } from '@cohen-codes/website.contexts.projects';
// import { ComponentShowcase } from '@nitsan770/portfolio.widgets.component-showcase';
import { IconTextButton } from '@nitsan770/portfolio.inputs.icon-text-button';
import { Bit } from '@nitsan770/portfolio.icons.bit';
import { Github } from '@nitsan770/portfolio.icons.github';
import { LinkIcon } from '@nitsan770/portfolio.icons.link-icon';
import { ZoomInCardMedia } from '@nitsan770/portfolio.elements.zoom-in-card-media';
import { Container, Grid, GridProps, Box, useTheme } from '@mui/material';

type IconButtonProp = {
  onClick: () => void;
};

const GitHubButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<Github />}
    textPrimary="GitHub"
    textSecondary="View on"
    onClick={onClick}
  />
);

const BitButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<Bit />}
    textPrimary="Bit"
    textSecondary="View on"
    onClick={onClick}
  />
);

const LinkButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<LinkIcon />}
    textPrimary="Project"
    textSecondary="View"
    onClick={onClick}
  />
);

export type IndividualProjectPageProps = {} & GridProps;

export function IndividualProjectPage(props: IndividualProjectPageProps) {
  const { id } = useParams();
  const { project, basePath } = useProject(id);
  const theme = useTheme();
  if (!project) {
    return (
      <Box sx={{ display: 'flex', my: 15, justifyContent: 'center' }}>
        <Heading value="Project not found" />
      </Box>
    );
  }

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Grid container {...props}>
        <Grid item xs={4} md={4}>
          <LinkText
            linkText="Back to Microfrontends"
            url={basePath}
            color="secondary"
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <Heading
            value={project.name}
            sx={{ color: theme.palette.primary.main }}
          />
        </Grid>
        <Grid item xs={4} md={4} />
      </Grid>
      <Container maxWidth="md">
        <Margin mt={MarginType.LARGE}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ZoomInCardMedia
              media={project.image}
              height={496}
              width={100}
              heightOperator="px"
              widthOperator="%"
            />
          </Box>
        </Margin>
      </Container>
      <Container maxWidth="sm">
        <Margin mt={MarginType.LARGE}>
          <Breadcrumb
            crumbs={[{ crumb: 'description.' }]}
            typographyProps={{
              color: 'text.primary',
              variant: 'body1',
              fontSize: 28,
              fontWeight: 700,
            }}
          />
          <Typography fontSize={22} sx={{ mt: 3 }}>
            {project.description}
          </Typography>
        </Margin>
      </Container>
      <Margin mt={MarginType.LARGE} />
      <Container maxWidth="sm">
        {project.tags.length > 0 && (
          <Margin mt={MarginType.MEDIUM}>
            <Breadcrumb
              crumbs={[{ crumb: 'attributes' }]}
              typographyProps={{
                color: 'text.primary',
                variant: 'body1',
                fontSize: 28,
                fontWeight: 700,
              }}
            />
            <Box
              sx={{
                display: 'flex',
                gap: 1.3,
                mt: 3,
                flexWrap: 'wrap',
              }}
            >
              {project.tags.map((tag) => (
                <Chip key={tag} content={tag} />
              ))}
            </Box>
          </Margin>
        )}
        <Margin mt={MarginType.LARGE}>
          <div
            style={{
              display: 'flex',
              gap: 20,
            }}
          >
            {project.links.github && (
              <GitHubButton
                onClick={() => handleLinkClick(project.links.github)}
              />
            )}
            {project.links.bit && (
              <BitButton onClick={() => handleLinkClick(project.links.bit)} />
            )}
            {project.links.website && (
              <LinkButton
                onClick={() => handleLinkClick(project.links.website)}
              />
            )}
          </div>
        </Margin>
      </Container>
      {project.type === 'component-based' && !!project.componentId && (
        <Margin mt={MarginType.LARGE}>
          <Grid container>
            <Grid item xs={12} md={12}>
              {/* <ComponentShowcase
                componentId={project.componentId}
                style={{
                  color: theme.palette.text.primary,
                  fontFamily: theme.typography.fontFamily,
                }}
              /> */}
            </Grid>
          </Grid>
        </Margin>
      )}
    </>
  );
}
