import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 8px 0;

  padding: 32px 22px;

  border-radius: 8px;
`;

export const ChartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > strong {
    display: inline-block;

    font-size: 3.5rem;

    margin-bottom: 16px;
  }
`;

export const LegendsWrapper = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    margin-right: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    background-color: ${props => props.color};

    border-radius: 8px;
  }

  > span {
    margin-left: 8px;
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 250px;
`;
