import { ReactNode } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

export type PageMetaProps = {
  /**
   * title of the page.
   */
  title?: string;

  /**
   * description of the page. Used for metadata and can also be used from concrete implementation.
   */
  description?: string;

  /**
   * children of the node.
   */
  children?: ReactNode;
} & HelmetProps;

export function PageMeta({
  children,
  title,
  description,
  ...rest
}: PageMetaProps) {
  return (
    <Helmet {...rest}>
      <title>{title}</title>
      <meta name="description" property="description" content={description} />
      <meta name="referrer" content="origin" />
      <meta name="author" content="Nitsan Cohen" />

      <meta
        name="keywords"
        content={
          'micro-frontends, microservices, web development, javascript, react, typescript'
        }
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:url" name="og:url" content="https://cohen.codes/" />
      <meta property="og:title" name="og:title" content={`${title}`} />
      <meta
        property="og:description"
        name="og:description"
        content={`${description}`}
      />
      <meta
        property="og:image"
        name="og:image"
        content="https://i.ibb.co/PMsmzPj/Mediamodifier-Design-Template.png"
      />

      <meta property="og:type" name="og:type" content="website" />
      <meta property="og:site_name" name="og:site_name" content="Cohen Codes" />
      <meta property="og:type" name="og:type" content="website" />
      <meta property="article:publisher" content="Nitsan Cohen" />

      {/* <!-- Twitter --> */}
      <meta
        property="twitter:url"
        name="twitter:url"
        content="https://cohen.codes/"
      />
      <meta
        property="twitter:title"
        name="twitter:title"
        content={`${title}`}
      />
      <meta
        property="twitter:description"
        name="twitter:description"
        content={`${description}`}
      />
      <meta
        property="twitter:image"
        name="twitter:image"
        content="https://i.ibb.co/PMsmzPj/Mediamodifier-Design-Template.png"
      />
      <meta
        property="twitter:image:src"
        name="twitter:image:src"
        content="https://i.ibb.co/PMsmzPj/Mediamodifier-Design-Template.png"
      />
      <meta
        property="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      {children}
    </Helmet>
  );
}
