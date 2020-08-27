import React from 'react';

import { useAuth } from 'context/auth';
// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <button type="button" onClick={signIn}>
      SignIn
    </button>
  );
};

export default SignIn;
