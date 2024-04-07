import { Box } from '@mui/material';
import { Margin, MarginType } from '@nitsan770/portfolio.layouts.margin';
import {
  Breadcrumb,
  BreadcrumbProps,
} from '@nitsan770/portfolio.navigation.breadcrumb';
import { ProjectsList } from '@nitsan770/portfolio.ui.projects.projects-list';

export type VideosPageProps = {} & Partial<BreadcrumbProps>;

export function VideosPage({
  crumbs = [{ crumb: 'Projects.' }],
}: VideosPageProps) {
  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Margin mt={MarginType.LARGE}>
        <Box
          sx={{
            mx: {
              xs: '0px',
              sm: '0px',
              md: '0px',
              lg: 10,
            },
          }}
        >
          <ProjectsList view="list" withFilter />
        </Box>
      </Margin>
    </>
  );
}
