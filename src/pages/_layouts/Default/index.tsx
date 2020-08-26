import React from 'react';

import Sidebar from 'components/Sidebar';
import MainHeader from 'components/MainHeader';

import { Container, Content } from './styles';

const Default: React.FC = ({ children }) => (
  <Container>
    <Sidebar />
    <MainHeader />
    <Content>{children}</Content>
  </Container>
);

export default Default;
