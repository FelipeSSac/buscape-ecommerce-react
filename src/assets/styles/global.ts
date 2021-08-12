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
    transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover{
      filter: brightness(0.9);
      box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    }
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
