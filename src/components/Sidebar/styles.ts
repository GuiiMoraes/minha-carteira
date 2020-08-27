import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: Sidebar;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};

  border-right: 1px solid ${props => props.theme.colors.gray};

  padding: 16px;
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
`;

export const MenuWrapper = styled.nav`
  margin: 48px 16px;

  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;

    width: fit-content;

    text-decoration: none;
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
