import styled from 'styled-components';

export const LabelContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  margin: 0 8px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: pointer;

    background-color: ${props => props.theme.colors.themeSwitcherBackground};

    border-radius: 34px;

    transition: 0.4s;

    :before {
      content: '';

      position: absolute;
      left: 2px;
      top: 0;

      width: 20px;
      height: 20px;

      background-color: ${props => props.theme.colors.themeSwitcherButton};

      border-radius: 50%;

      transform: translateY(2px);

      transition: 0.4s;
    }
  }

  input:checked + span {
    :before {
      transform: translate(24px, 2px);
    }
  }
`;
