import React, { useState, useCallback, ChangeEvent } from 'react';
import {
  MdLockOutline,
  MdMailOutline,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

import logoImg from 'assets/logo.svg';

import Input from 'components/Input';
import Button from 'components/Button';

import { useAuth } from 'context/auth';
import { useToast } from 'context/toast';

import { Container, LogoContainer, Form, InputContainer } from './styles';

interface ICredentials {
  email: string;
  password: string;
}

interface IHandleInputChangeProps {
  event: ChangeEvent<HTMLInputElement>;
  name: string;
}

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: '',
    password: '',
  });
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password'
  );

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleShowPassword = useCallback(() => {
    setPasswordType(state => (state === 'password' ? 'text' : 'password'));
  }, []);

  const handleInputChange = useCallback(
    ({ event, name }: IHandleInputChangeProps) => {
      setCredentials({ ...credentials, [name]: String(event.target.value) });
    },
    [credentials]
  );

  const handleSubmit = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        signIn(credentials.email, credentials.password);
      } catch {
        addToast({
          type: 'error',
          title: 'Authentication error',
          description:
            'An error occurred during login try, check your credentials',
        });
      }

      setCredentials({ email: '', password: '' });
    },
    [signIn, credentials.email, credentials.password, addToast]
  );

  return (
    <>
      <LogoContainer>
        <img src={logoImg} alt="My Wallet" />
        <h1>My Wallet</h1>
      </LogoContainer>
      <Container>
        <strong>Sign In</strong>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <MdMailOutline />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={credentials.email}
              onChange={event => handleInputChange({ event, name: 'email' })}
              required
            />
          </InputContainer>

          <InputContainer>
            <MdLockOutline />
            <Input
              name="password"
              type={passwordType}
              placeholder="Password"
              value={credentials.password}
              onChange={event => handleInputChange({ event, name: 'password' })}
              required
            />

            <button type="button" onClick={handleShowPassword}>
              {passwordType === 'password' ? (
                <MdVisibility />
              ) : (
                <MdVisibilityOff />
              )}
            </button>
          </InputContainer>

          <Button type="submit">Enter</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
