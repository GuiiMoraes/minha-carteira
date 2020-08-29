import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';

import { useTheme } from 'context/theme';

import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
