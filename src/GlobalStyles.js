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
    /* dark blue: hsl(208deg, 67%, 11%);*/
    /* light blue: hsl(188deg, 82%, 45%) */
    /* medium blue: hsl(191deg, 78%, 16%)*/
    /* pink: hsl(335deg, 70%, 53%)*/
    /* yellow: hsl(55deg, 56%, 55%) */
    /* lightest blue: hsl(192deg, 100%, 81%)*/
    /* off-white: hsl(192deg, 100%, 96%) */
    font-size: 18px;
    --bg-color: hsl(191deg, 78%, 16%);
    --main-container-bg: hsl(208deg, 67%, 11%);
    --main-text: hsl(192deg, 100%, 96%);
    --secondary-text: hsl(335deg, 70%, 53%);
    --highlight-yellow: hsl(55deg, 56%, 55%);
  }
  body {
    background-color: var(--bg-color);
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
