import React, { ReactNode, useState } from 'react';
import { Project } from '@cohen-codes/website.entities.project';
import { ProjectsContext } from './projects-context.js';

type ProjectsProviderProps = {
  projects: Project[];
  basePath: string;
  children: ReactNode;
};

export const ProjectsProvider = ({
  projects,
  basePath,
  children,
}: ProjectsProviderProps) => {
  const [chosenProject, setChosenProject] = useState<Project | undefined>(
    undefined
  );

  const chooseProject = (id: string) => {
    setChosenProject(projects.find((project) => project.id === id));
  };

  const loading = chosenProject === undefined;
  const error = loading ? 'No project chosen' : '';

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        chooseProject,
        chosenProject,
        loading,
        error,
        basePath,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => React.useContext(ProjectsContext);

export const useProject = (id?: string) => {
  const { projects, chooseProject, chosenProject, basePath } =
    useProjectsContext();
  if (id) {
    chooseProject(id);
  }
  const project = chosenProject || projects[0] || undefined;
  const loading = project === undefined;
  const error = loading ? 'No project found' : '';
  const projectLoaded = true;

  return { project, loading, error, projectLoaded, basePath };
};
