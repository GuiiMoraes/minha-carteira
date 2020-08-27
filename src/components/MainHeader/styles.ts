import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;

  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;

  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.white};
`;
