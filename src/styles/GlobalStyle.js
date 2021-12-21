import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root{
}
html,body {
  line-height: 1.5;
  height: 100%;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: 'DM Sans', sans-serif;
}
`
export default GlobalStyle;