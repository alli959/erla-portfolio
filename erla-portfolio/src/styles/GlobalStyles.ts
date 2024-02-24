// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.body}, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading}, sans-serif;
  }

  
`;

export default GlobalStyle;
