import React from 'react';

import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import GlobalStyle from './styles/GlobalStyle';
import Main from './layouts/Main';

function App() {
    return (
        <>
            <GlobalStyle />
            <Sidebar />
            <Main />
        </>
    );
}

export default App;
