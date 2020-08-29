import React, { createContext, useCallback, useState, useContext } from 'react';

import dark from 'styles/themes/dark';
import light from 'styles/themes/light';

interface IThemeState {
  title: string;

  colors: {
    themeSwitcherBackground: string;
    themeSwitcherButton: string;

    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

interface ThemeContextData {
  theme: IThemeState;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IThemeState>(dark);

  const toggleTheme = useCallback(() => {
    if (data.title === 'dark') {
      setData(light);
      return;
    }
    setData(dark);
  }, [data.title]);

  return (
    <ThemeContext.Provider value={{ theme: data, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used whithin a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
