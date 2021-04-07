import React, { useContext } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext';
import { checkStatus } from '../styles/InvoiceStatus';

import arrow from '../assets/icon-arrow-right.svg';

const InvoicesListWrapper = styled.ul`
    transition: 0.3s;
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
            justify-content: space-between;
        }
    }
`;
const InvoiceLinkNumber = styled.span`
    text-align: left;
    color: var(--color-primary);
    width: 70px;
    font-weight: 700;
    & span {
        color: #7e88c3;
    }
    @media (max-width: 576px) {
        width: 100px;
    }
`;

const InvoiceDate = styled.span`
    width: 125px;
    color: var(--color-secondary);
`;

const InvoiceName = styled.span`
    width: 120px;
    color: var(--color-secondary);
    text-align: right;
`;

const InvoicePrice = styled.span`
    width: 100px;
    font-size: 1.6rem;
    color: var(--color-primary);
    font-weight: 700;
    @media (max-width: 576px) {
        display: none;
    }
`;

const InvoiceStatus = styled.span`
    width: 125px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    /* margin-left: 5px; */
    & span.price {
        display: none;
    }
    & img {
        margin-left: 20px;
        @media (max-width: 576px) {
            display: none;
        }
    }
    @media (max-width: 576px) {
        width: 100%;
        margin: 0;
        & span.price {
            display: block;
        }
    }
`;

function InvoicesList() {
    const { data } = useContext(AppContext);

    console.log(data.reverse());
    const invoices = data.map((invoice) => (
        <InvoiceLink key={invoice.id}>
            <Link to={`/invoice/${invoice.id}`}>
                <InvoiceLinkNumber>
                    <span>#</span>
                    {invoice.id}
                </InvoiceLinkNumber>
                <InvoiceName>{invoice.name}</InvoiceName>
                <InvoiceDate>{invoice.date}</InvoiceDate>
                <InvoicePrice>${invoice.price}</InvoicePrice>
                <InvoiceStatus>
                    <InvoicePrice className='price'>
                        ${invoice.price}
                    </InvoicePrice>
                    {checkStatus(invoice.status)}
                    <img src={arrow} alt='' />
                </InvoiceStatus>
            </Link>
        </InvoiceLink>
    ));

    return <InvoicesListWrapper>{invoices.reverse()}</InvoicesListWrapper>;
}

export default InvoicesList;
/* Rectangle */
