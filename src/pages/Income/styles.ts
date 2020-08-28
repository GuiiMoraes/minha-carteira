import styled from 'styled-components';

export const Container = styled.div``;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background-color: inherit;

    font-size: 18px;
    font-weight: 500;

    color: ${props => props.theme.colors.white};

    margin: 0 8px;

    transition: opacity 0.2s;

    :hover {
      opacity: 0.7;
    }

    :after {
      content: '';

      display: block;

      width: 55px;

      margin: 0 auto;

      border-radius: 4px;
      border-bottom: 10px solid;

      transform: translateY(8px);
    }

    &.recurrent:after {
      border-bottom-color: ${props => props.theme.colors.warning};
    }

    &.eventual:after {
      border-bottom-color: ${props => props.theme.colors.info};
    }
  }
`;

export const ContentList = styled.ul`
  margin-top: 48px;
`;
