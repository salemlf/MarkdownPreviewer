import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 18px;
  }
  body {
    background-color: hsl(230deg, 33%, 21%);
  }

  h1, h2 {
    color: hsl(60deg, 100%, 100%);
  }
`;
export default GlobalStyles;
