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
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
}

body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`
