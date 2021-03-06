import styled from 'styled-components';

export const Container = styled.div`
  .clear-filters {
    padding: 4px 8px;

    border-radius: 8px;
    border: none;

    margin-left: 8px;
  }
`;

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

    opacity: 0.4;

    transition: opacity 0.2s;

    :hover {
      opacity: 0.6;
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

    &.outcome-recurrent:after {
      border-bottom-color: ${props => props.theme.colors.info};
    }

    &.outcome-eventual:after {
      border-bottom-color: ${props => props.theme.colors.warning};
    }

    &.frequencyActive {
      opacity: 1;
    }
  }
`;

export const ContentList = styled.ul`
  margin-top: 48px;
`;
