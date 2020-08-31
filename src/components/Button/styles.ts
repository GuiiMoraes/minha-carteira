import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;

  margin: 22px 0 8px;

  padding: 8px 16px;

  border-radius: 4px;

  border: none;

  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.white};

  font-weight: 500;

  text-transform: uppercase;

  transition: opacity 0.2s;

  :hover {
    opacity: 0.7;
  }
`;
