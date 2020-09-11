import styled from 'styled-components';

interface IContainerProps {
  lineColor: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;

  margin-bottom: 8px;

  > h1 {
    color: ${props => props.theme.colors.white};
    position: relative;

    :after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      width: 48px;
      height: 10px;

      border-radius: 2px;

      background-color: ${props => props.lineColor};

      transform: translateY(100%);
    }
  }

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;

    height: auto;

    > h1 {
      font-size: 22px;
      margin-bottom: 15px;

      :after {
        width: 30px;
        height: 5px;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
