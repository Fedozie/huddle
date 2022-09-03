import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

    html{
        box-sizing: border-box;
        
    }

    *, *::before, *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    body{
        background: #fff;
        color: hsl(192, 100%, 0);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
`

export default GlobalStyles;