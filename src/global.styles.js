import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    body {
        background-color: black;
        color: white;
        font-family: 'Fira Sans', 'Mukta', sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: white;
    }

    * {
        box-sizing: border-box;
    }
`