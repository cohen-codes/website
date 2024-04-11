import { AppbarProps } from '@cohen-codes/website.navigation.header';
import { AppfooterProps } from '@cohen-codes/website.navigation.footer';
import { Logo } from '@cohen-codes/design.brand.logo';
import { Link } from '@cohen-codes/design.navigation.link';
import { HomepageProps } from '@cohen-codes/website.pages.homepage';
import { History } from '@cohen-codes/website.entities.history';

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
