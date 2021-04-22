import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
}`;
