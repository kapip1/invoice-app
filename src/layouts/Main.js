import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import InvoicesList from '../components/InvoicesList';

const MainWrapper = styled.div`
    display: flex;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    flex-direction: column;
    width: 90%;
    max-width: 730px;
    min-height: 300px;
    margin-top: 103px;
`;

function Main() {
    return (
        <MainWrapper>
            <Header />
            <InvoicesList />
        </MainWrapper>
    );
}

export default Main;
