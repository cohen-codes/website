import { Header, HeaderProps } from '@cohen-codes/design.navigation.header';
import { ThemeToggle } from '@cohen-codes/design.theme.theme-toggle';
import { SettingsConsumer } from '@cohen-codes/website.contexts.settings-context';

export type AppbarProps = {} & HeaderProps;

export function Appbar({ logo, navLinks, ...rest }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          {...rest}
          logo={logo}
          navLinks={navLinks}
          themeToggle={
            <ThemeToggle
              isDark={theme === 'dark'}
              onClick={() => toggleTheme()}
              size="small"
            />
          }
        />
      )}
    </SettingsConsumer>
  );
}
