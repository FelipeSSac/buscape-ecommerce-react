import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  body {
    background: #F2F2F2;
    color: #000;
  }

  html {
    min-width: 300px;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  @media (min-width:691px) and (max-width:955px){
    html{
      font-size: 14px;
    }
  }

  @media (min-width:361px) and (max-width:690px){
    html{
      font-size: 12px;
    }
  }

  @media (max-width:360px){
    html{
      font-size: 10px;
    }
  }
`;
