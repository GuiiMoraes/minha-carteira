import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'Sidebar MainHeader'
    'Sidebar Content';

  height: 100vh;
`;

export const Content = styled.div`
  grid-area: Content;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
`;