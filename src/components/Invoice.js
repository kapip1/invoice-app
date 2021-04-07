import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext';
import {
    InvoiceWrapper,
    InvoiceHeader,
    GoBackHeader,
    TextPrimary,
    TextSecondary,
    HeaderPanel,
    PanelStatus,
    PanelButtons,
    InvoiceButton,
    InvoiceMain,
    BillHeader,
    BillWrapper,
    BillItem,
    InvoiceNumber,
    BillMain,
    TextPrimaryLarge,
} from './Invoice.style';
import { checkStatus } from '../styles/InvoiceStatus';
import Error404 from './Error404';

import arrow from '../assets/icon-arrow-left.svg';

function Invoice({ match }) {
    const { data, handleIsAddInvoiceOpen, isDarkMode } = useContext(AppContext);

    const currentInvoice = data.filter(
        (invoice) => invoice.id === match.params.id
    );

    const handleEditBtn = () => {
        handleIsAddInvoiceOpen('open');
    };

    return (
        <>
            {currentInvoice.length ? (
                <>
                    <InvoiceWrapper>
                        <InvoiceHeader>
                            <GoBackHeader>
                                <Link to='/'>
                                    <img src={arrow} alt='' />
                                    <TextPrimary>Go back</TextPrimary>
                                </Link>
                            </GoBackHeader>
                            <HeaderPanel>
                                <PanelStatus>
                                    <TextSecondary>Status</TextSecondary>
                                    {checkStatus('pending')}
                                </PanelStatus>
                                <PanelButtons>
                                    <InvoiceButton
                                        color={'var(--color-draft)'}
                                        isDarkMode={isDarkMode}
                                        edit
                                    >
                                        Edit
                                    </InvoiceButton>
                                    <InvoiceButton color={'#EC5757'}>
                                        Delete
                                    </InvoiceButton>
                                    <InvoiceButton color={'#7C5DFA'}>
                                        Mark as Paid
                                    </InvoiceButton>
                                </PanelButtons>
                            </HeaderPanel>
                        </InvoiceHeader>
                        <InvoiceMain>
                            <BillWrapper>
                                <BillHeader>
                                    <BillItem>
                                        <InvoiceNumber>
                                            <span>#</span>
                                            XM3214
                                        </InvoiceNumber>
                                        <TextSecondary>
                                            Graphic Design
                                        </TextSecondary>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>
                                            19 Union Terrace
                                        </TextSecondary>
                                        <TextSecondary>London</TextSecondary>
                                        <TextSecondary>E1 3EZ</TextSecondary>
                                        <TextSecondary>
                                            United Kingdom
                                        </TextSecondary>
                                    </BillItem>
                                </BillHeader>
                                <BillMain>
                                    <BillItem>
                                        <TextSecondary>
                                            Invoice Date
                                        </TextSecondary>
                                        <TextPrimaryLarge>
                                            21 Aug 2021
                                        </TextPrimaryLarge>
                                        <TextSecondary>
                                            Payment Due
                                        </TextSecondary>
                                        <TextPrimaryLarge>
                                            20 Sep 2021
                                        </TextPrimaryLarge>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>Bill To</TextSecondary>
                                        <TextPrimaryLarge>
                                            Alex Grim
                                        </TextPrimaryLarge>
                                        <TextSecondary>
                                            84 Church Way
                                        </TextSecondary>
                                        <TextSecondary>Bradford</TextSecondary>
                                        <TextSecondary>BD1 9PB</TextSecondary>
                                        <TextSecondary>
                                            United Kingdom
                                        </TextSecondary>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>Sent to</TextSecondary>
                                        <TextPrimaryLarge>
                                            alexgrim@mail.com
                                        </TextPrimaryLarge>
                                    </BillItem>
                                </BillMain>
                            </BillWrapper>
                        </InvoiceMain>
                    </InvoiceWrapper>
                </>
            ) : (
                <Error404 />
            )}
        </>
    );
}

export default Invoice;
