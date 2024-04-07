import { ReactNode } from 'react';
import { Appbar, AppbarProps } from '@cohen-codes/website.navigation.header';
import {
  Appfooter,
  AppfooterProps,
} from '@cohen-codes/website.navigation.footer';
import { Box, Container, styled } from '@mui/material';

export type MainProps = {
  /**
   * the content to be rendered inside the layout.
   */
  children?: ReactNode;
  /**
   * the props to be passed to the appbar.
   */
  appbarProps?: AppbarProps;
  /**
   * the props to be passed to the appfooter.
   */
  appfooterProps?: AppfooterProps;
};

/**
 * In MUI it is recommend to use a styled component instead of a class component when dealing with
 * large styling. The `MainRoot` component contains the styling needed for the main layout.
 */
const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 68,
}));

export function Main({ appbarProps, appfooterProps, children }: MainProps) {
  return (
    <MainRoot>
      <Appbar {...appbarProps} />
      <Container maxWidth="lg" sx={{ paddingTop: '68px', height: '100%' }}>
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
      </Container>
      <div style={{ marginTop: 'auto' }}>
        <Container maxWidth="lg">
          <Box sx={{ pt: 10 }}>
            <Appfooter {...appfooterProps} />
          </Box>
        </Container>
      </div>
    </MainRoot>
  );
}
