import React, { useContext } from 'react';

import { createGlobalStyle } from 'styled-components';

import { AppContext } from '../AppContext';

const Styles = createGlobalStyle`
     /* Primary colorLight theme:  hsl(228, 29%, 7%*/
     /* Secondary colorLight theme: hsl(231°, 37%, 63%) */
     /* 

     */

    :root {
        --color-primary: hsl(228, 29%, 7%);
        --color-secondary: hsl(231°, 37%, 63%);
    }
    *{
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        transition: 0.3s;
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? 'hsl(233, 30%, 11%)' : null};
    }
`;

function GlobalStyle() {
    const { isDarkMode } = useContext(AppContext);

    return <Styles isDarkMode={isDarkMode} />;
}

export default GlobalStyle;
