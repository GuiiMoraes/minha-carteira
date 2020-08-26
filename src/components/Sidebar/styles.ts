import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Sidebar;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
`;
