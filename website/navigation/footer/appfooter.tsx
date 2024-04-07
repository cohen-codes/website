import React from 'react';
import { Footer, FooterProps } from '@cohen-codes/design.navigation.footer';

export type AppfooterProps = {} & FooterProps;

export function Appfooter({ rightContent, leftContent, ...rest }: FooterProps) {
  return (
    <Footer {...rest} rightContent={rightContent} leftContent={leftContent} />
  );
}
