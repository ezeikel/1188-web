import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
/* CSS Variables */
:root {
  /* Colors */
  --color-primary: #1abc9c;
  /* --color-primary: #F7E7CE; */
  --color-secondary: #F1D3D1;
  --color-black: #2E3333;
  --color-white: #fff;
  --color-gold: #CDA349;
  --color-gold-lighter: #d4af61;
  --color-light-grey: #ecf0f1;
  --color-red: #e74c3c;
  --color-dark-red: #c0392b;
  --color-green: #2ecc71;
  --color-grey: #bdc3c7;
  --color-gold-star: #f1c40f;
  /* Spacing */
  --spacing-tiny: 4px;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;
  --spacing-huge: 64px;
  --spacing-gargantuan: 128px;
  /* Font */
  --default-font-family: 'proxima-nova', sans-serif;
  --default-font-size: 10px;
  --font-size-tiny: 1.4rem;
  --font-size-small: 1.6rem;
  --font-size-medium: 1.8rem;
  --font-size-large: 2rem;
  --font-size-huge: 2.2rem;
}
* {
  box-sizing: border-box;
}
html {
  font-size: var(--default-font-size);
}
body {
  margin: 0;
  padding: 0;
  font-family: var(--default-font-family);
  font-size: 1.6rem;
}
img {
  max-width: 100%;
}
a {
  text-decoration: none;
  color: var(--color-black);
}
ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}
`;

export const scrollDown = keyframes`
  40%, 60% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px);
  }
`;
