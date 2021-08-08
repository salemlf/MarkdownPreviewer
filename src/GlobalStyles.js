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


  /* text selection colors */
  *::-moz-selection { /* Code for Firefox */
     color: var(--highlight-med-blue);
    background: var(--highlight-yellow);
  }

  *::selection {
    color: var(--highlight-med-blue);
    background: var(--highlight-yellow);
  }

  /* Works on Firefox */
  * {
    scrollbar-color: hsl(208deg, 67%, 16%) var(--highlight-light-blue);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 20px;
  }

  *::-webkit-scrollbar-track {
    background: var(--highlight-light-blue);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: hsl(208deg, 67%, 16%);
    border-radius: 20px;
    border: 3px solid var(--highlight-light-blue);
  }

  /* minimal CSS reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-size: 100%;
    /* font: inherit; */
  }

  /* TODO: add colors to variables */
  html {
    
    /* @media screen and (min-width: 320px) {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }

    @media screen and (min-width: 1000px) {
      font-size: 22px;
    } */
  
    min-height: 100vh;
    /* dark blue: hsl(208deg, 67%, 11%);*/
    /* light blue: hsl(188deg, 82%, 45%) */
    /* medium blue: hsl(191deg, 78%, 16%)*/
    /* pink: hsl(335deg, 70%, 53%)*/
    /* yellow: hsl(55deg, 56%, 55%) */
    /* lightest blue: hsl(192deg, 100%, 81%)*/
    /* off-white: hsl(192deg, 100%, 96%) */

    /* CSS variables for colors */
    --bg-color: hsl(191deg, 78%, 16%);
    --main-container-bg: hsl(208deg, 67%, 11%);
    --main-text: hsl(192deg, 100%, 96%);
    --secondary-text: hsl(335deg, 70%, 53%);
    --highlight-light-blue: hsl(192deg, 100%, 81%);
    --highlight-med-blue: hsl(191deg, 78%, 16%);
    --highlight-yellow: hsl(55deg, 56%, 55%);
    --highlight-pink: hsl(335deg, 70%, 53%);
    --btn-bg: hsl(55deg, 56%, 55%);
    --btn-text: hsl(191deg, 78%, 16%);
  }
  body {
    caret-color: var(--highlight-yellow);
    min-height: 100vh;
    margin: 0;
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
    
    font-family: 'knileregular';
    color: var(--main-text);
  }

  h1, h2, h3, h4, h4, h6 {
    font-weight: 800;
  }

  h1 {
      font-size: calc(26px + (36 - 26) * ((100vw - 300px) / (1000 - 300)));
  }

  h2{
      font-size: calc(24px + (30 - 24) * ((100vw - 300px) / (1000 - 300)));
  }

  h3{
      font-size: calc(22px + (28 - 22) * ((100vw - 300px) / (1000 - 300)));
  }

  h4 {
      font-size: calc(20px + (26 - 20) *  ((100vw - 300px) / (1000 - 300)));
  }

  h5 {
      font-size: calc(18px + (24 - 18) *  ((100vw - 300px) / (1000 - 300)));
  }

  h6 {
      font-size: calc(16px + (22 - 16) *  ((100vw - 300px) / (1000 - 300)));
  }

  p {
    font-size: calc(16px + (18 - 16) *  ((100vw - 300px) / (1000 - 300)));
  }
`;
export default GlobalStyles;
