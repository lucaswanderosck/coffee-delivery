import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    padding-bottom: 6rem;
    overflow-x: hidden;
}

body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`
