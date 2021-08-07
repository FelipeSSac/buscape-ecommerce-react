import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  body {
    background: #CCC;
    color: #000;
  }

  html {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
