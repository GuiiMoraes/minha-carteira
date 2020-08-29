import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 49%;
  height: 350px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 16px 0;
  padding: 32px 22px;

  border-radius: 8px;
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  > strong {
    font-size: 2rem;
  }
`;

export const LegendsWrapper = styled.ul`
  list-style: none;

  max-height: 140px;

  overflow-y: scroll;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    margin-bottom: 8px;
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

export const SideRight = styled.main`
  flex: 1;
`;
