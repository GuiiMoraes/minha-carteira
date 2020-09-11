import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: Sidebar;

  position: relative;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};

  border-right: 1px solid ${props => props.theme.colors.gray};

  padding: 16px;

  > button {
    display: none;
  }

  @media (max-width: 600px) {
    position: fixed;

    z-index: 2;

    padding-left: 8px;

    transition: height 0.2s;

    overflow: hidden;

    &.menu-open {
      height: 100vh;
    }

    &.menu-closed {
      height: 70px;

      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.gray};
    }

    > button {
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      border-radius: 4px;

      margin-left: 8px;

      background-color: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.white};

      > svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const Header = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  strong {
    margin-left: 16px;
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuWrapper = styled.nav`
  margin: 48px 16px;

  display: flex;
  flex-direction: column;

  > a {
    text-decoration: none;
  }

  > button {
    border: none;
    background-color: inherit;
  }

  a,
  button {
    display: flex;
    align-items: center;

    width: fit-content;
    font-size: 16px;

    color: ${props => props.theme.colors.info};

    border-bottom: 1px solid transparent;

    margin: 8px 0;

    transition: opacity 0.2s, border-bottom 0.2s;

    :hover {
      opacity: 0.8;
      border-bottom-color: ${props => props.theme.colors.info};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const SwitcherWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    &.menu-open {
      position: absolute;
      bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
