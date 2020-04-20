import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    background: #0d253f;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #fff;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin:0;
  }
  
  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;