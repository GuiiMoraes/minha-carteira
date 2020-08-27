import React, { createContext, useCallback, useState, useContext } from 'react';

interface AuthState {
  name: string;
}

interface AuthContextData {
  user: AuthState;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = useCallback(() => {
    setData({ name: 'Usuário' });
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
