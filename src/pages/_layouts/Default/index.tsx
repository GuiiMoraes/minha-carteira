import React from 'react';

import Sidebar from 'components/Sidebar';

import { Container, Content } from './styles';

const Default: React.FC = ({ children }) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default Default;
