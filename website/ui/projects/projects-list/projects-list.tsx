import React, { useMemo, useState } from 'react';
import {
  Box,
  Grid,
  GridProps,
  Switch,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { Link } from '@nitsan770/portfolio.navigation.link';
import { useProjectsContext } from '@cohen-codes/website.contexts.projects';
import { Card } from '@nitsan770/portfolio.elements.card';
import { Margin, MarginType } from '@nitsan770/portfolio.layouts.margin';
import { Typography } from '@nitsan770/portfolio.typography.typography';

export type ProjectsListProps = {
  /**
   * the maximum number of projects to render
   * @default undefined
   */
  max?: number | undefined;

  /**
   * the view to render the projects in
   * @default 'grid'
   */
  view?: 'grid' | 'list';

  /**
   * whether to show a filter to help filter the projects to only show component-based projects
   * @default false
   */
  withFilter?: boolean;
} & GridProps;

type ProjectFilterProps = {
  /**
   * callback to handle the toggle of the filter
   * @param newState the new state of the filter
   */
  onCheckToggle: (newState: boolean) => void;
};

function ProjectFilter({ onCheckToggle }: ProjectFilterProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckToggle = () => {
    setChecked(!checked);
    onCheckToggle(!checked);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Switch size="small" checked={checked} onChange={handleCheckToggle} />
      <Typography variant="body2">Show only component-based</Typography>
    </Box>
  );
}

export function ProjectsList({
  max,
  view = 'grid',
  withFilter = false,
  ...rest
}: ProjectsListProps) {
  const [componentOnly, setComponentOnly] = useState(false);
  const { projects, basePath } = useProjectsContext();
  const filteredProjects = useMemo(() => {
    if (componentOnly) {
      return projects.filter((project) => project.componentId);
    }
    return projects;
  }, [componentOnly, projects]);

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const forceMaxBreakpoints = view === 'list' && !smDown;

  const cardView = useMemo(() => {
    if (smDown) {
      return 'compact';
    }
    return view === 'grid' ? 'compact' : 'detailed';
  }, [smDown, view]);

  const handleComponentOnlyToggle = () =>
    setComponentOnly((prevState) => !prevState);

  return (
    <>
      {withFilter && (
        <>
          <ProjectFilter onCheckToggle={handleComponentOnlyToggle} />
          <Margin mt={MarginType.MEDIUM} />
        </>
      )}
      <Grid container spacing={view === 'list' ? 12 : 3} {...rest}>
        {filteredProjects.map((project) => (
          <Grid
            item
            xs={12}
            sm={forceMaxBreakpoints ? 12 : 6}
            md={forceMaxBreakpoints ? 12 : 4}
            key={project.id}
          >
            <Link to={`${basePath}/${project.id}`}>
              <Card
                title={project.name}
                bannerImage={project.image}
                subtitle={project.description}
                tags={project.tags}
                view={cardView}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
