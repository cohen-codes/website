import { ReactNode, useState, useEffect, createContext } from 'react';
import { useLocalStorage } from '@cohen-codes/website.hooks.use-local-storage';
import { PortfolioSiteSettings } from './settings.type.js';

export type SettingsContextProps = {
  /**
   * the children that can consume the context
   */
  children?: ReactNode;
};

const initialState: PortfolioSiteSettings = {
  /**
   * use dark mode by default.
   */
  theme: 'dark',
};

type SettingsContextType = {
  toggleTheme: () => void;
} & PortfolioSiteSettings;

const SettingsContext = createContext<SettingsContextType>({
  ...initialState,
  toggleTheme: () => {},
});

export function SettingsProvider({ children }: SettingsContextProps) {
  const [settings, setSettings] = useState<PortfolioSiteSettings>(initialState);
  const [initialized, setInitialized] = useState(false);
  const { initializeSettings, saveSettings } = useLocalStorage();

  useEffect(() => {
    if (!initialized) {
      const retrievedSettings = initializeSettings();
      setSettings(retrievedSettings || initialState);
      setInitialized(true);
    }
  }, [initialized, initializeSettings]);

  const toggleTheme = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    const newSettings: PortfolioSiteSettings = { ...settings, theme: newTheme };
    saveSettings(newSettings);
    setSettings(newSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        toggleTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;
