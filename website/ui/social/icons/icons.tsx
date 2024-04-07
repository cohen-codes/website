import { Links, LinksProps } from '@cohen-codes/website.ui.social.links';

export type IconsProps = {} & LinksProps;

export function Icons({ links, style, className }: IconsProps) {
  return (
    <Links
      links={links}
      style={{
        display: 'flex',
        gap: 15,
        justifyContent: 'flex-start',
        ...style,
      }}
      className={className}
    />
  );
}
