import { Project } from './project.js';

export function sampleProjects() {
  return [
    new Project({
      id: '1',
      description: 'An E-commerce Application For Buying Cotton Products.',
      image:
        'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
      name: 'Project name',
      tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
      type: 'component-based',
      links: {
        github: 'https://github.com',
        website: 'https://github.com',
        bit: 'https://github.com',
      },
      componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66',
    }),
    new Project({
      id: '2',
      description: 'An E-commerce Application For Buying Cotton Products.',
      image:
        'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
      name: 'Project name',
      tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
      type: 'component-based',
      links: {
        github: 'https://github.com',
        website: 'https://github.com',
        bit: 'https://github.com',
      },
      componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66',
    }),
    new Project({
      id: '3',
      description: 'An E-commerce Application For Buying Cotton Products.',
      image:
        'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
      name: 'Project name',
      tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
      type: 'monolithic',
      links: {
        github: 'https://github.com',
        website: 'https://github.com',
        bit: 'https://github.com',
      },
    }),
    new Project({
      id: '4',
      description: 'An E-commerce Application For Buying Cotton Products.',
      image:
        'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
      name: 'Project name',
      tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
      type: 'monolithic',
      links: {
        github: 'https://github.com',
        website: 'https://github.com',
        bit: 'https://github.com',
      },
    }),
  ];
}
