import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  height: 30px;

  border: none;
  border-radius: 4px;

  padding: 16px;

  :not(:first-of-type) {
    margin-top: 8px;
  }
`;
