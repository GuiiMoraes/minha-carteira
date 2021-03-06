import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'Sidebar MainHeader'
    'Sidebar Content';

  min-width: 315px;
  height: 100vh;

  @media (max-width: 700px) {
    grid-template-columns: 100%;

    grid-template-areas:
      'MainHeader'
      'Content';
  }
`;

export const Content = styled.div`
  grid-area: Content;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  height: calc(100vh - 70px);

  padding: 16px;

  overflow-y: scroll;
`;
