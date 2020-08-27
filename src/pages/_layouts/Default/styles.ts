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

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  height: calc(100vh - 70px);

  padding: 16px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;
