import { createGlobalStyle } from "styled-components/macro";

import knileRegWoff2 from "./Fonts/knile-regular-webfont.woff2";
import knileRegWoff from "./Fonts/knile-regular-webfont.woff";
import knileRegEot from "./Fonts/knile-regular-webfont.eot";
import knileRegEotIE from "./Fonts/knile-regular-webfont.eot?#iefix";
import knileRegTtf from "./Fonts/knile-regular-webfont.ttf";
import knileRegSvg from "./Fonts/knile-regular-webfont.svg";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 18px;
  }
  body {
    background-color: hsl(230deg, 33%, 21%);
    @font-face {
    font-family: 'knileregular';
    src:
        url(${knileRegWoff2}) format('woff2'),
         url(${knileRegWoff}) format('woff'),
        url(${knileRegEot}) format('embedded-opentype'), 
        url(${knileRegEotIE}) format('embedded-opentype'),
         url(${knileRegTtf}) format('truetype'),
         url(${knileRegSvg}) format('svg');
    font-weight: normal;
    font-style: normal;

    }
  }

  h1, h2 {
    font-family: 'knileregular';
    color: hsl(60deg, 100%, 100%);
  }
`;
export default GlobalStyles;
