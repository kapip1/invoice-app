import React from 'react';

import styled, { css } from 'styled-components';

import AddInvoiceForm from './AddInvoiceForm';

const AddInvoiceWrapper = styled.div`
    position: absolute;
    z-index: 5;
    transition: 0.5s;
    left: ${({ isAddInvoiceOpen }) => (isAddInvoiceOpen ? '0' : '-120%')};
    width: 616px;
    height: 100vh;
    background-color: var(--color-bg-addInvoice);
    border-radius: 0 20px 20px 0;
    padding: 0 0 0 103px;
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
    position: absolute;
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

function AddInvoice({ isAddInvoiceOpen, handleisAddInvoiceClose }) {
    return (
        <>
            <AddInvoiceWrapper isAddInvoiceOpen={isAddInvoiceOpen}>
                <AddInvoiceForm />
            </AddInvoiceWrapper>
            <AddInvoiceBg
                isAddInvoiceOpen={isAddInvoiceOpen}
                onClick={handleisAddInvoiceClose}
            />
        </>
    );
}

export default AddInvoice;
