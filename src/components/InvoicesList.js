import React, { useContext } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { AppContext } from '../AppContext';
import { checkStatus } from '../styles/InvoiceStatus';
import EmptyList from './EmptyList';

import arrow from '../assets/icon-arrow-right.svg';

const InvoicesListWrapper = styled.ul`
    transition: 0.3s;
    margin-top: 30px;
`;

const InvoiceLink = styled.li`
    display: flex;
    transition: 0.2s;
    font-size: 1.2rem;
    margin-top: 20px;
    background-color: var(--color-background-invoice-link);
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    border: 1px solid var(--color-background-invoice-link);
    &:hover {
        border: 1px solid rgb(124, 93, 250);
    }
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
    @media (max-width: 576px) {
        text-align: right;
    }
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
    const { data, filterType } = useContext(AppContext);

    const filteredData =
        filterType === 'total'
            ? data
            : data.filter((item) => item.status === filterType);

    const invoices = filteredData.map((invoice) => (
        <InvoiceLink key={invoice.id}>
            <Link to={`/invoice/${invoice.id}`}>
                <InvoiceLinkNumber>
                    <span>#</span>
                    {invoice.id}
                </InvoiceLinkNumber>
                <InvoiceName>{invoice.name}</InvoiceName>
                <InvoiceDate>{invoice.date}</InvoiceDate>
                <InvoicePrice>
                    <NumberFormat
                        value={invoice.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'£'}
                    />
                </InvoicePrice>
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

    return (
        <InvoicesListWrapper>
            {invoices.length ? invoices.reverse() : <EmptyList />}
        </InvoicesListWrapper>
    );
}

export default InvoicesList;
/* Rectangle */
