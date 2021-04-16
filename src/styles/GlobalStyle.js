import React, { useContext } from 'react';

import { createGlobalStyle } from 'styled-components';

import { AppContext } from '../AppContext';

const Styles = createGlobalStyle`
    :root {
        --color-primary: ${({ isDarkMode }) =>
            isDarkMode ? '#fff' : 'hsl(228, 29%, 7%)'} ;
        --color-secondary: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(231, 73%, 93%)' : 'hsl(231, 37%, 63%)'};
        --color-background-primary: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(233, 30%, 21%)' : '#fff'} ;
        --color-backhround-checkBox: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(233, 31%, 17%)' : '#DFE3FA'};
        --color-background-invoice-link: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(233, 31%, 17%)' : '#FFF'};
        --color-draft: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(231, 73%, 93%)' : '#373B53'};
        --color-bg-addInvoice: ${({ isDarkMode }) =>
            isDarkMode ? '#141625' : '#fff'};
        --color-border-input: ${({ isDarkMode }) =>
            isDarkMode ? '#252945' : '#DFE3FA'};
        --color-totalPrice: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(231, 20%, 61%)' : 'hsl(231, 73%, 93%)'};
        --color-inputBackground: ${({ isDarkMode }) =>
            isDarkMode ? '#1E2139' : '#F9FAFE'};
       --color-buttonForm: ${({ isDarkMode }) =>
           isDarkMode ? '#252945' : '#F9FAFE'}; 
        --color-buttonFont: ${({ isDarkMode }) =>
            isDarkMode ? '#dfe3fa' : '#7e88c3'};
    }
    *, ::after, ::before{
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        font-family: 'Spartan', sans-serif;
    }
    html {
        font-size: 62.5%;
        transition: 0.3s;
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(233, 30%, 11%)' : '#F8F8FB'};
    }
    button:focus {
        outline: none;
    }
    button {
        border: none;
    }
`;

function GlobalStyle() {
    const { isDarkMode } = useContext(AppContext);

    return <Styles isDarkMode={isDarkMode} />;
}

export default GlobalStyle;

/* Rectangle */
