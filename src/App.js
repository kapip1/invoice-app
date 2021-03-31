import React from 'react';

import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import GlobalStyle from './styles/GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <Sidebar />
        </>
    );
}

export default App;
