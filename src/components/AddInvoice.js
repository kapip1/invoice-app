import React, { useContext } from 'react';

import styled, { css } from 'styled-components';
import { AppContext } from '../AppContext';

import AddInvoiceForm from './AddInvoiceForm';

const AddInvoiceWrapper = styled.div`
    position: fixed;
    z-index: 5;
    transition: 0.5s;
    left: ${({ isAddInvoiceOpen }) => (isAddInvoiceOpen ? '0' : '-120%')};
    height: 100vh;
    background-color: var(--color-bg-addInvoice);
    border-radius: 0 20px 20px 0;
    padding: 0 0 0 103px;
    width: 750px;
    @media (max-width: 1150px) {
        padding: 0;
        top: 80px;
        height: calc(100vh - 80px);
    }
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
    }
`;
const AddInvoiceBg = styled.div`
    position: fixed;
    opacity: 0;
    visibility: hidden;
    z-index: 4;
    transition: 0.5s;
    ${({ isAddInvoiceOpen }) =>
        isAddInvoiceOpen &&
        css`
            visibility: visible;
            opacity: 0.5;
        `};

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

function AddInvoice() {
    const { isAddInvoiceOpen, handleIsAddInvoiceOpen } = useContext(AppContext);

    return (
        <>
            <AddInvoiceWrapper isAddInvoiceOpen={isAddInvoiceOpen}>
                <AddInvoiceForm />
            </AddInvoiceWrapper>
            <AddInvoiceBg
                isAddInvoiceOpen={isAddInvoiceOpen}
                onClick={() => handleIsAddInvoiceOpen('close')}
            />
        </>
    );
}

export default AddInvoice;
