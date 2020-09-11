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
      height: 60px;
      margin-left: 16px;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 770px) {
    width: 100%;
    margin: 16px 0 0;
    > header {
      strong {
        font-size: 24px;
      }

      img {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 14px;
      }
    }
    > footer {
      font-size: 14px;
    }
  }
`;
