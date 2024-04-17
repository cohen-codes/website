import React, { useContext } from 'react';
import { ProjectsProvider } from './projects-context-provider.js';
import { ProjectsContext } from './projects-context.js';

export function MockComponent() {
  const theme = useContext(ProjectsContext);

  return (
    <div>
      <h1>Projects Context</h1>
      <p>Projects: {theme.projects.length}</p>
      <p>Chosen Project: {theme.chosenProject?.name}</p>
      <p>Loading: {theme.loading ? 'true' : 'false'}</p>
      <p>Error: {theme.error}</p>
    </div>
  );
}

export const BasicProjects = () => {
  return (
    <ProjectsProvider basePath="/" projects={[]}>
      <MockComponent />
    </ProjectsProvider>
  );
};
