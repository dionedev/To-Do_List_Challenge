import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.gray_600};
    color: ${({ theme }) => theme.gray_100};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`