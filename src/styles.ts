import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        /* min-width: 100vw;
        min-height: 100vh;
        max-width: 100vw;
        max-height: 100vh; */
        background: url("https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        font-family: 'Nanum Gothic', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #282828;
        transition: color 1s ease;
    }

    #root {
        min-width: 100vw;
        min-height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
    }
`;
