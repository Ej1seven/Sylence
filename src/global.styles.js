import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    body {
        background-color: black;
        color: white;
        font-family: 'Sedgwick Ave Display', cursive;
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