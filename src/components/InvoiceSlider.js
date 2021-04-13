import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../AppContext';
import AddInvoiceForm from './AddInvoiceForm';
import InvoiceForm from './InvoiceForm';

const AddInvoiceWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 5;
    top: 0;
    transition: 0.5s;
    left: ${({ isSliderOpen }) => (isSliderOpen ? '0' : '-120%')};
    background-color: var(--color-bg-addInvoice);
    border-radius: 0 20px 20px 0;
    padding: 0 0 0 103px;
    width: 750px;
    height: 100%;
    @media (max-width: 1150px) {
        height: calc(100% - 80px);
        padding: 0;
        top: 80px;
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
    ${({ isSliderOpen }) =>
        isSliderOpen &&
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

function InvoiceSlider() {
    const { isSliderOpen, handleIsSliderOpen } = useContext(AppContext);

    return (
        <>
            <AddInvoiceWrapper isSliderOpen={isSliderOpen}>
                {/* <AddInvoiceForm /> */}
                <InvoiceForm />
            </AddInvoiceWrapper>
            <AddInvoiceBg
                isSliderOpen={isSliderOpen}
                onClick={() => handleIsSliderOpen('close')}
            />
        </>
    );
}

export default InvoiceSlider;
