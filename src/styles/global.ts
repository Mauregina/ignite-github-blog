import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['brand-blue']};
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
    }

    body, input, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
