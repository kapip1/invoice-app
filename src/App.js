import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import InvoiceSlider from './components/InvoiceSlider';
import Error404 from './components/Error404';
import GlobalStyle from './styles/GlobalStyle';
import Sidebar from './components/Sidebar';
import Main from './layouts/Main';
import Invoice from './components/Invoice';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Sidebar />
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/invoice/:id' component={Invoice} />
                <Route component={Error404} />
            </Switch>
            <InvoiceSlider />
        </Router>
    );
}

export default App;
