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
    font-size: 3.5rem;

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
`;
