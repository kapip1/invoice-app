import React from 'react';

import styled from 'styled-components';

import AddInvoice from '../components/AddInvoice';

const MainWrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 730px;
    height: 300px;
    border: 1px solid grey;
`;

function Main() {
    return (
        <MainWrapper>
            <AddInvoice />
        </MainWrapper>
    );
}

export default Main;
