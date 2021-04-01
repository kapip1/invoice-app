import React from 'react';

import styled from 'styled-components';

import iconArrow from '../assets/icon-arrow-down.svg';

const AddInvoiceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-primary);
    font-size: 1.2rem;
`;

const AddInvoiceTitle = styled.h1`
    font-size: 3.2rem;
    @media (max-width: 576px) {
        font-size: 2rem;
    }
`;

const AddInvoiceCount = styled.span`
    color: var(--color-secondary);
`;

const AddInvoiceContentWrapper = styled.div``;

const AddInvoiceSettingsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const AddInvoiceFilter = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    /* position: relative; */
    color: inherit;
    & span {
        @media (max-width: 576px) {
            display: none;
        }
    }
`;

const AddInvoiceButton = styled.button`
    cursor: pointer;
    color: inherit;
    margin-left: 50px;
    background-color: hsl(252, 94%, 67%);
    @media (max-width: 576px) {
        & span {
            display: none;
        }
    }
`;

const AddInvoiceList = styled.ul`
    position: absolute;
    padding: 1.5rem;
    list-style: none;
    margin-top: 45px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 370%;
    width: 192px;
    height: 125px;
    background-color: var(--color-background-primary);
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
`;

const AddInvoiceItem = styled.li`
    display: flex;
    cursor: pointer;
`;

const AddInvoiceFilterWrapper = styled.div`
    position: relative;
`;

const FilterTitle = styled.span``;

const FilterCheckBox = styled.input``;

function AddInvoice() {
    return (
        <AddInvoiceWrapper>
            <AddInvoiceContentWrapper>
                <AddInvoiceTitle>Invoices</AddInvoiceTitle>
                <AddInvoiceCount>There are 8 total invoices</AddInvoiceCount>
            </AddInvoiceContentWrapper>
            <AddInvoiceSettingsWrapper>
                <AddInvoiceFilterWrapper>
                    <AddInvoiceFilter>
                        Filter <span>by status</span>
                        {'  '}
                        <img src={iconArrow} alt='arrow icon' />
                    </AddInvoiceFilter>
                    <AddInvoiceList>
                        <AddInvoiceItem>
                            <FilterCheckBox type='checkbox' />
                            <FilterTitle>Paid</FilterTitle>
                        </AddInvoiceItem>
                        <AddInvoiceItem>
                            <FilterCheckBox type='checkbox' />
                            <FilterTitle>Pending</FilterTitle>
                        </AddInvoiceItem>
                        <AddInvoiceItem>
                            <FilterCheckBox type='checkbox' />
                            <FilterTitle>Draft</FilterTitle>
                        </AddInvoiceItem>
                    </AddInvoiceList>
                </AddInvoiceFilterWrapper>
                <AddInvoiceButton>
                    New <span>Invoice</span>
                </AddInvoiceButton>
            </AddInvoiceSettingsWrapper>
        </AddInvoiceWrapper>
    );
}

export default AddInvoice;
