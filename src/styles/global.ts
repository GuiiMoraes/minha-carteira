import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    background-color: none !important;
    box-shadow: 0 0 0 30px white inset !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.tertiary};
    }
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
