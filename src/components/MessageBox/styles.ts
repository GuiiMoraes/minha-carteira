import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 49%;
  height: 250px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 16px 0;
  padding: 32px 22px;

  border-radius: 8px;

  > header {
    strong {
      font-size: 2rem;
    }

    img {
      width: 60px;
      margin-left: 16px;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;
