import { Box } from '@mui/material';
import { Margin, MarginType } from '@cohen-codes/design.layouts.margin';
import {
  Breadcrumb,
  BreadcrumbProps,
} from '@cohen-codes/design.navigation.breadcrumb';
import { ProjectsList } from '@cohen-codes/website.ui.projects.projects-list';

export type ProjectsPageProps = {} & Partial<BreadcrumbProps>;

export function ProjectsPage({
  crumbs = [{ crumb: 'Microfrontends.' }],
}: ProjectsPageProps) {
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
          <ProjectsList view="list" />
        </Box>
      </Margin>
    </>
  );
}
