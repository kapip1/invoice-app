import React from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { InvoiceButton } from './Invoice.style';

const InvoiceAlertWrapper = styled.div``;
const InvoiceAlertBg = styled.div`
    position: fixed;
    top: 0;
    z-index: 5;
    transition: 0.3s;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    background-color: black;
    ${({ isAlert }) =>
        isAlert &&
        css`
            opacity: 0.4;
            visibility: visible;
        `}
`;
const AlertButton = styled(InvoiceButton)`
    position: relative;
    width: 87px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        left: 50%;
        height: 100%;
        transform: translate(-50%, -50%);
        top: 50%;
        border-radius: 20px;
        color: inherit;
        text-decoration: none;
    }
`;
const AlertWindow = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 2rem;
    transition: 0.3s;
    transform: translate(-50%, -50%);
    background-color: var(--color-background-invoice-link);
    width: 90%;
    top: 50%;
    left: 50%;
    z-index: 6;
    max-width: 480px;
    min-height: 220px;
    opacity: 0;
    border-radius: 8px;
    visibility: hidden;
    ${({ isAlert }) =>
        isAlert &&
        css`
            opacity: 1;
            visibility: visible;
        `}
    @media (max-width: 576px) {
        padding: 2rem 1rem;
    }
`;

const AlertTitle = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--color-primary);
`;
const AlertText = styled.p`
    color: var(--color-secondary);
    font-size: 1.2rem;
    margin-top: 15px;
    width: 80%;
`;

const AlertButtons = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
    @media (max-width: 576px) {
        justify-content: center;
    }
`;

function InvoiceAlert({
    isAlert,
    isAlertToggle,
    isDarkMode,
    invoiceId,
    handleConfirmDelete,
}) {
    return (
        <InvoiceAlertWrapper>
            <AlertWindow isAlert={isAlert}>
                <AlertTitle>Confirm Deletion</AlertTitle>
                <AlertText>
                    Are you sure you want to delete invoice #{invoiceId}? This
                    action cannot be undone.
                </AlertText>
                <AlertButtons>
                    <AlertButton
                        edit
                        color={'var(--color-draft)'}
                        isDarkMode={isDarkMode}
                        onClick={isAlertToggle}
                    >
                        Cancel
                    </AlertButton>
                    <AlertButton
                        color={'#EC5757'}
                        onClick={handleConfirmDelete}
                    >
                        <Link to='/'>Delete</Link>
                    </AlertButton>
                </AlertButtons>
            </AlertWindow>
            <InvoiceAlertBg isAlert={isAlert} onClick={isAlertToggle} />
        </InvoiceAlertWrapper>
    );
}

export default InvoiceAlert;
