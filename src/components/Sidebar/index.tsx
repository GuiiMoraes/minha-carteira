import React from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import { Container, Header, MenuWrapper } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <Header to="/">
      <img src={logo} alt="Logo My Pocket" />
      <strong>My wallet</strong>
    </Header>

    <MenuWrapper>
      <Link to="#to-do">
        <MdDashboard size={20} /> Dashboard
      </Link>
      <Link to="#to-do">
        <MdArrowUpward size={20} /> Incomes
      </Link>
      <Link to="#to-do">
        <MdArrowDownward size={20} /> Outcomes
      </Link>
      <Link to="#to-do">
        <MdExitToApp size={20} /> Sign Out
      </Link>
    </MenuWrapper>
  </Container>
);

export default Sidebar;
