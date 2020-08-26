import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 250px auto;
  grid-template-rows: auto 250px auto;

  grid-template-areas:
    '.. .. ..'
    '.. Content ..'
    '.. .. ..';

  height: 100vh;
  background-color: #252a48;
`;

export const Content = styled.div`
  grid-area: Content;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #111;
  background-color: #fff;
`;
