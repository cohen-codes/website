import React from 'react';
import { PageMeta } from './page-meta.js';

export const BasicPageMeta = ({ title = 'Hello World!' }) => {
  return (
    <>
      <PageMeta>{title}</PageMeta>
      <div>
        See the{' '}
        <a href="https://bit.cloud/cohen-codes.website/seo/page-meta/~code/page-meta.composition.tsx">
          composition's code
        </a>{' '}
        to understand how it works since meta data is not visualized on the page
        :)
      </div>
    </>
  );
};

export const PageMetaWithChildElements = () => {
  return (
    <>
      <PageMeta>
        <meta property="twitter:site" name="twitter:site" content="@bitdev_" />
        <meta
          property="twitter:image"
          name="twitter:image"
          content="https://static.bit.dev/og-images/bit-og-img-facebook.png"
        />
        <meta
          property="twitter:image:src"
          name="twitter:image:src"
          content="https://static.bit.dev/og-images/bit-og-img-facebook.png"
        />
      </PageMeta>
      <div>
        See the{' '}
        <a href="https://bit.cloud/cohen-codes.website/seo/page-meta/~code/page-meta.composition.tsx">
          composition's code
        </a>{' '}
        to understand how it works since meta data is not visualized on the page
        :)
      </div>
    </>
  );
};
