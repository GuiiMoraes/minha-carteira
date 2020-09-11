import React, { useCallback, useState } from 'react';
import {
  MdMenu,
  MdClose,
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useAuth } from 'context/auth';
import { useTheme } from 'context/theme';

import Switcher from 'components/Switcher';

import logo from 'assets/logo.svg';

import { Container, Header, MenuWrapper, SwitcherWrapper } from './styles';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen(state => !state);
  }, []);

  const handleToogleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <Container className={menuOpen ? 'menu-open' : 'menu-closed'}>
      <button type="button" onClick={handleToggleMenu}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>
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

      <SwitcherWrapper className={menuOpen ? 'menu-open' : 'menu-closed'}>
        <span role="img" aria-label="moon emoji">
          🌙
        </span>
        <Switcher
          onChange={handleToogleTheme}
          checked={theme.title === 'light'}
        />
        <span role="img" aria-label="sun emoji">
          🌞
        </span>
      </SwitcherWrapper>
    </Container>
  );
};
export default Sidebar;
