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

      /* background-color: ${props => props.theme.colors.info}; */
      background-color: ${props => props.lineColor};

      transform: translateY(100%);
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
