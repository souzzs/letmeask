import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    img{
        max-width: 100%;
        display: block;
        object-fit: cover;
    }
`;