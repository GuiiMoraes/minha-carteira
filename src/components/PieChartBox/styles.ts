import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 49%;
  height: 250px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 16px 0;
  padding: 32px 22px;

  border-radius: 8px;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > strong {
    font-size: 2rem;
  }

  @media (max-width: 1345px) {
    padding: 0 16px 4px;
    margin-bottom: 8px;

    > strong {
      margin: 16px 0 8px;
    }
  }

  @media (max-width: 420px) {
    padding: 16px;
    margin-bottom: 8px;
  }
`;

export const LegendsWrapper = styled.ul`
  list-style: none;

  max-height: 140px;

  overflow-y: scroll;

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
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

  @media (max-width: 1345px) {
    font-size: 14px;
    margin: 4px 0;

    > div {
      width: 35px;
      height: 35px;
    }

    > span {
      margin-left: 4px;
    }
  }
`;

export const SideRight = styled.main`
  display: flex;
  justify-content: center;

  flex: 1;

  @media (max-width: 1345px) {
    height: 100%;
  }
`;
