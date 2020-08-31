import React, { useState, useCallback } from 'react';
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

import { Container, LogoContainer, Form, InputContainer } from './styles';

const SignIn: React.FC = () => {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password'
  );
  const { signIn } = useAuth();

  const handleShowPassword = useCallback(() => {
    setPasswordType(state => (state === 'password' ? 'text' : 'password'));
  }, []);

  const handleSubmit = useCallback(() => {
    signIn();
  }, [signIn]);

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
            <Input type="email" placeholder="E-mail" />
          </InputContainer>

          <InputContainer>
            <MdLockOutline />
            <Input type={passwordType} placeholder="Password" />
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
