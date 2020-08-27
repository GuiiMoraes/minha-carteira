import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'context/auth';

import Routes from 'routes';
import GlobalStyle from 'styles/global';

import theme from 'styles/themes/dark';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
