import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`

  :root {
    --darker: #000000;
    --light: #FFFFFF;
    --gray-600: #8C8C8C;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

`;