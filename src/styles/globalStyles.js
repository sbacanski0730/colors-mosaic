import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --navbar-horizontal-padding: 35px;
    }

    *,*::before,*::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Poppins',sans-serif;
        position: relative;
    }

    a,button,input{
        font-family: inherit;
    }

    button {
        border: none;
        outline: none;
    }
`;
export default GlobalStyles;
