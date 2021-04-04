import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Paid } from '../styles/InvoiceStatus';

import arrow from '../assets/icon-arrow-right.svg';

const InvoicesListWrapper = styled.ul`
    margin-top: 30px;
`;

const InvoiceLink = styled.li`
    display: flex;
    border: 0px solid #7c5dfa;
    font-size: 1.2rem;
    margin-top: 20px;
    background-color: var(--color-background-invoice-link);
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;

    a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1.6rem 1rem;
        width: 100%;
        text-decoration: none;
        @media (max-width: 576px) {
            height: 134px;
            flex-wrap: wrap;
        }
    }
`;

const InvoiceLinkNumber = styled.span`
    color: var(--color-primary);
    font-weight: 700;
    order: -1;
    & span {
        color: #7e88c3;
    }
`;

const InvoiceDate = styled.span`
    color: var(--color-secondary);
`;

const InvoiceName = styled.span`
    color: var(--color-secondary);
    width: fit-content;
    @media (max-width: 576px) {
        order: -1;
    }
`;

const InvoicePrice = styled.span`
    font-size: 1.6rem;
    color: var(--color-primary);
    font-weight: 700;
`;

const InvoiceStatus = styled.span`
    display: flex;
    align-items: center;
    & img {
        margin-left: 20px;
        @media (max-width: 576px) {
            display: none;
        }
    }
`;

function InvoicesList() {
    return (
        <InvoicesListWrapper>
            <InvoiceLink>
                <Link to='/eew'>
                    <InvoiceLinkNumber>
                        <span>#</span>
                        3432E
                    </InvoiceLinkNumber>
                    <InvoiceName>Kacper Negro</InvoiceName>
                    <InvoiceDate>Due 14 Oct 2021</InvoiceDate>
                    <InvoicePrice>$1,800.9</InvoicePrice>
                    <InvoiceStatus>
                        <Paid />
                        <img src={arrow} alt='' />
                    </InvoiceStatus>
                </Link>
            </InvoiceLink>
            <InvoiceLink>
                <Link to='/eew'>
                    <InvoiceLinkNumber>
                        <span>#</span>
                        3432E
                    </InvoiceLinkNumber>
                    <InvoiceName>Kacper Negro</InvoiceName>
                    <InvoiceDate>Due 14 Oct 2021</InvoiceDate>
                    <InvoicePrice>$1,800.9</InvoicePrice>

                    <InvoiceStatus>
                        <Paid />
                        <img src={arrow} alt='' />
                    </InvoiceStatus>
                </Link>
            </InvoiceLink>
        </InvoicesListWrapper>
    );
}

export default InvoicesList;
/* Rectangle */
