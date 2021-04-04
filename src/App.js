import React, { useContext } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppContext } from './AppContext';
import AddInvoice from './components/AddInvoice';
import GlobalStyle from './styles/GlobalStyle';
import Sidebar from './components/Sidebar';
import Main from './layouts/Main';

function App() {
    const { isAddInvoiceOpen, handleisAddInvoiceClose } = useContext(
        AppContext
    );
    return (
        <Router>
            <GlobalStyle />
            <Sidebar />
            <AddInvoice
                isAddInvoiceOpen={isAddInvoiceOpen}
                handleisAddInvoiceClose={handleisAddInvoiceClose}
            />
            <Main />
        </Router>
    );
}

export default App;
