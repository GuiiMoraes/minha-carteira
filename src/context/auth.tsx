import React, { createContext, useCallback, useState, useContext } from 'react';

import { users } from 'repositories';

interface IAuthState {
  name: string;
}

interface IAuthContextData {
  user: IAuthState;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@MyWallet:User');

    if (user) return JSON.parse(user);

    return {} as IAuthState;
  });

  const signIn = useCallback((email, password) => {
    const userFound = users.find(
      user => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem(
        '@MyWallet:User',
        JSON.stringify({ name: userFound.name })
      );
      setData({ name: userFound.name });
    } else {
      throw new Error('User / passord invalid');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MyWallet:User');
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
