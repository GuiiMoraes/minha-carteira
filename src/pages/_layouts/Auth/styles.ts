import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 320px auto;
  grid-template-rows: auto 350px auto;

  grid-template-areas:
    '.. .. ..'
    '.. Content ..'
    '.. .. ..';

  height: 100vh;
  background-color: #1b1f38;
`;

export const Content = styled.div`
  grid-area: Content;

  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
`;
