import React, { createContext, useCallback, useState, useContext } from 'react';

interface IAuthState {
  name: string;
}

interface IAuthContextData {
  user: IAuthState;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  const signIn = useCallback(() => {
    setData({ name: 'Usuário' });
  }, []);

  const signOut = useCallback(() => {
    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
