import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }

  :root {
    /* Colors */
    --dark-blue-intro: hsl(217, 28%, 15%);
    --dark-blue-main: hsl(218, 28%, 13%);
    --dark-blue-footer: hsl(216, 53%, 9%);
    --dark-blue-testimonials: hsl(219, 30%, 18%);
    --cyan: hsl(176, 68%, 64%);
    --blue: hsl(198, 60%, 50%);
    --red: hsl(0, 100%, 63%);
    --white: hsl(0, 0%, 100%);

    /* Fonts */
    --font-primary: 'Raleway';
    --font-secondary: 'Open Sans';
    --fw-normal: 400;
    --fw-bold: 700;
    --fs-normal: 14px;
    --fs-small: 12px;

    /* Sizes */
    --size-sm: 30rem;
    --size-md: 48rem;
    --size-lg: 62rem;
    --size-xl: 80rem;
    --size-2xl: 96rem;
  };

  html {
    line-height: 1.5;
  }

  body {
    margin: 0;
    min-height: 100vh;
    color: var(--white);
    font-size: var(--fs-normal);
    background-color: var(--dark-blue-main);
    font-family: var(--font-primary), system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  }

  a {
    color: inherit;
    display: block;
    text-decoration: none;
    font-size: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p, small {
    margin: 0;
    font-family: var(--font-secondary);
  }

  input {
    font-size: inherit;
    font-family: var(--font-secondary);
  }
`

export default GlobalStyles
