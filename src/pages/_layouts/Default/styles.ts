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
  background-color: #1b1f38;
`;
