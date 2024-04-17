import { AppbarProps } from '@cohen-codes/website.navigation.header';
import { AppfooterProps } from '@cohen-codes/website.navigation.footer';
import { Logo } from '@cohen-codes/design.brand.logo';
import { Link } from '@cohen-codes/design.navigation.link';
import { HomepageProps } from '@cohen-codes/website.pages.homepage';
import { History } from '@cohen-codes/website.entities.history';
import { Project } from '@cohen-codes/website.entities.project';

export const IMAGE_URL =
  'https://i.ibb.co/cXH04KJ/Or-Asaf-wedding-333-of-1156.jpg';

export const HEADER_PROPERTIES: AppbarProps = {
  logo: (
    <Link to="/">
      <Logo />
    </Link>
  ),
  navLinks: [
    { label: 'Contact', url: '/contact' },
    { label: 'About', url: '/about' },
    { label: 'Microfrontends', url: '/microfrontends' },
  ],
};

export const FOOTER_PROPERTIES: AppfooterProps = {
  rightContent: `© ${new Date().getFullYear()} Nitsan Cohen. All Rights Reserved.`,
  leftContent: 'Thanks for visiting.',
};

export const SOCIAL_MEDIA_LINKS: HomepageProps['socialMediaLinks'] = [
  { name: 'github', url: 'https://github.com/NitsanCohen770' },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nitsan-cohen/',
  },
  { name: 'website', url: 'https://cohen.codes' },
];

export const HISTORY: History[] = [
  new History({
    designation: 'Born',
    company: 'Mother, Father',
    yearsOfExperience: 1,
    period: '1988',
  }),
  new History({
    designation: 'Learn',
    company: 'Computer Science',
    yearsOfExperience: 4,
    period: '2011 - Present',
  }),
  new History({
    designation: 'Frontend Engineer',
    company: 'Cohen Codes Web Solutions',
    yearsOfExperience: 2,
    period: '2020 - 2021',
  }),
  new History({
    designation: 'Frontend Engineer',
    company: 'Bit',
    yearsOfExperience: 3,
    period: '2021 - Present',
  }),
];

export const CONTACT_ME_API_URL =
  'https://contact-me.nitsancohen770.workers.dev/';

export const PROJECTS = [
  new Project({
    id: 'the-bit-blog',
    description: 'The first component based blog in the world',
    image: 'https://i.ibb.co/zb2S1B1/Screenshot-2024-03-18-at-22-18-53.png',
    name: 'The Bit Blog',
    tags: ['Bit', 'React', 'Typescript', 'SCSS', 'Webpack'],
    type: 'component-based',
    links: {
      website: 'https://bit.dev/blog',
      bit: 'https://bit.cloud/teambit/blog',
    },
    componentId: 'teambit.blog/community/blog',
  }),
  new Project({
    id: 'bit-dev',
    description: 'The community website for Bit',
    image: 'https://i.ibb.co/k9dFzM6/Screenshot-2024-03-18-at-22-07-31.png',
    name: 'Bit.Dev',
    tags: ['Bit', 'React', 'Typescript', 'SCSS', 'Webpack'],
    type: 'component-based',
    links: {
      website: 'https://bit.dev',
      bit: 'https://bit.cloud/teambit/community',
    },
    componentId: 'teambit.community/apps/bit-dev',
  }),
  new Project({
    id: 'cohen-codes',
    description: 'My Personal Website',
    image: 'https://i.ibb.co/DMG9VKC/Screenshot-2024-03-18-at-22-22-30.png',
    name: 'cohen.codes',
    tags: ['Bit', 'React', 'Typescript', 'Material-UI'],
    type: 'component-based',
    links: {
      website: 'https://cohen.codes',
      bit: 'https://bit.cloud/cohen-codes',
      github: 'https://github.com/cohen-codes',
    },
    componentId: 'nitsan770.portfolio/portfolio-app',
  }),
];
