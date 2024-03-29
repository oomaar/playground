import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  colors: {
    firstColor: "#cf117a"
  }
}

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;