import React from 'react';

import { Container, Content } from './styles';

const Auth: React.FC = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Auth;
