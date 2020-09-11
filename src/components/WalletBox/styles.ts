import styled from 'styled-components';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;

  width: 32%;
  height: 200px;

  border-radius: 8px;

  padding: 8px 16px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.color};

  overflow: hidden;

  :not(:first-child) {
    margin-left: 16px;
  }

  > img {
    position: absolute;
    top: -10px;
    right: -30px;

    height: 110%;

    opacity: 0.3;
  }

  > strong {
    font-size: 2rem;
    font-weight: 700;

    width: 100%;

    display: inline-block;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }

  @media (max-width: 770px) and (min-width: 420px) {
    :not(:first-child) {
      margin-left: 4px;
    }

    > span {
      font-size: 14px;
    }

    > strong {
      word-wrap: break-word;
      font-size: 22px;

      .prefix {
        display: inline-block;
        width: 100%;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 420px) {
    width: 100%;

    :not(:first-child) {
      margin-left: 0px;
      margin-top: 16px;
    }
  }
`;
