import { Links } from './links.js';

export const BasicLinks = () => {
  return (
    <Links
      links={[
        { url: 'www', name: 'github' },
        { url: 'www', name: 'linkedin' },
        { url: 'www', name: 'website' },
        { url: 'www', name: 'twitter' },
      ]}
    />
  );
};
