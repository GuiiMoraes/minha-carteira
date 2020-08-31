import React from 'react';

import { AuthProvider } from './auth';
import { ThemeProvider } from './theme';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  </ThemeProvider>
);

export default AppProvider;
