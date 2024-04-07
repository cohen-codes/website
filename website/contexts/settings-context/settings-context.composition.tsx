import { Button } from '@cohen-codes/design.inputs.button';
import { darkTheme } from '@cohen-codes/design.theme.dark-theme';
import { lightTheme } from '@cohen-codes/design.theme.light-theme';
import { ThemeProvider } from '@cohen-codes/design.theme.theme-provider';
import { Heading } from '@cohen-codes/design.typography.heading';
import { SettingsProvider, SettingsConsumer } from './settings-context.js';

export const BasicSettingsContext = () => (
  <SettingsProvider>
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <ThemeProvider theme={theme === 'dark' ? darkTheme() : lightTheme()}>
          <Heading value="Settings Context" />
          <Button value="Toggle Theme" onClick={toggleTheme} />
        </ThemeProvider>
      )}
    </SettingsConsumer>
  </SettingsProvider>
);
