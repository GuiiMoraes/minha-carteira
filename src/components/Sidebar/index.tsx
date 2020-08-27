import React from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/auth';

import logo from 'assets/logo.svg';

import { Container, Header, MenuWrapper } from './styles';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header to="/">
        <img src={logo} alt="Logo My Pocket" />
        <strong>My wallet</strong>
      </Header>

      <MenuWrapper>
        <Link to="/dashboard">
          <MdDashboard size={20} /> Dashboard
        </Link>
        <Link to="/income">
          <MdArrowUpward size={20} /> Incomes
        </Link>
        <Link to="/outcome">
          <MdArrowDownward size={20} /> Outcomes
        </Link>
        <button type="button" onClick={signOut}>
          <MdExitToApp size={20} /> Sign Out
        </button>
      </MenuWrapper>
    </Container>
  );
};
export default Sidebar;
