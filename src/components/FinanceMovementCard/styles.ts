import styled from 'styled-components';

interface IContainerProps {
  tagColor: string;
}

export const Container = styled.li<IContainerProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  position: relative;

  border-radius: 8px;

  padding: 8px;
  padding-left: 0;

  transition: all 0.2s;

  background-color: ${props => props.theme.colors.tertiary};

  :not(:first-of-type) {
    margin-top: 8px;
  }

  :hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > span {
    border-radius: 2px 4px 4px 2px;

    display: block;

    width: 20px;
    height: 50px;

    margin-right: 16px;

    background-color: ${props => props.tagColor};
  }

  > div {
    width: 100%;
  }
`;
