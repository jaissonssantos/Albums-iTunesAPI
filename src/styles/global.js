import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap");
* {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        background: #32323d;
        -webkit-font-smoothing: antialiased !important;
    }

    body,
    input,
    button {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #222;
    }
`;
