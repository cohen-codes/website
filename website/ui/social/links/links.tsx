import React from 'react';
import { Github } from './github.js';
import { LinkedIn } from './linkedin.js';
import { Twitter } from './twitter.js';
import { Globe } from './globe.js';
import styles from './links.module.css';
import classNames from 'classnames';

export type LinksProps = {
  /**
   * List of social links
   * */
  links: { name: 'twitter' | 'github' | 'linkedin' | 'website'; url: string }[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Links({ links, className, ...rest }: LinksProps) {
  return (
    <div
      data-testid="links"
      className={classNames(styles.links, className)}
      {...rest}
    >
      {links.map(({ url, name }) => {
        switch (name) {
          case 'twitter':
            return (
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={url}
                key={name}
              >
                <Twitter />
              </a>
            );
          case 'github':
            return (
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={url}
                key={name}
              >
                <Github />
              </a>
            );
          case 'linkedin':
            return (
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={url}
                key={name}
              >
                <LinkedIn />
              </a>
            );
          case 'website':
            return (
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={url}
                key={name}
              >
                <Globe />
              </a>
            );
          default:
            return <a />;
        }
      })}
    </div>
  );
}
