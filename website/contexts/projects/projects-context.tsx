import { createContext } from 'react';
import { Project } from '@cohen-codes/website.entities.project';

export type ProjectsContextType = {
  projects: Project[];
  chooseProject: (id: string) => void;
  chosenProject: Project | undefined;
  loading: boolean;
  error: string;
  basePath: string;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  chooseProject: () => {},
  chosenProject: undefined,
  loading: false,
  error: '',
  basePath: '',
});
