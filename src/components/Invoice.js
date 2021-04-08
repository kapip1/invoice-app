import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

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
    DetailsWrapper,
    ListItems,
    ListAmountDue,
    ItemWrapper,
    ItemDetails,
    ItemDetailsAmount,
    ItemDetailsTotal,
    ItemTextPrimary,
    ItemTextSecondary,
    HeaderItem,
    HeaderItemText,
    HeaderItemTotal,
} from './Invoice.style';
import { checkStatus } from '../styles/InvoiceStatus';
import Error404 from './Error404';

import arrow from '../assets/icon-arrow-left.svg';

function Invoice({ match }) {
    // const [totalPrice, setTotalPrice] = useState('');

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
                                    {checkStatus(currentInvoice[0].status)}
                                </PanelStatus>
                                <PanelButtons>
                                    <InvoiceButton
                                        color={'var(--color-draft)'}
                                        isDarkMode={isDarkMode}
                                        edit
                                        onClick={handleEditBtn}
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
                                            {currentInvoice[0].id}
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
                                            {currentInvoice[0].name}
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
                            <DetailsWrapper>
                                <ListItems isDarkMode={isDarkMode}>
                                    <HeaderItem>
                                        <ItemDetails>
                                            <HeaderItemText>
                                                Item Name
                                            </HeaderItemText>
                                            <ItemDetailsAmount>
                                                <HeaderItemText>
                                                    QTY.
                                                </HeaderItemText>
                                                <HeaderItemText>
                                                    Price
                                                </HeaderItemText>
                                            </ItemDetailsAmount>
                                        </ItemDetails>
                                        <HeaderItemTotal>Total</HeaderItemTotal>
                                    </HeaderItem>
                                    {currentInvoice[0].list.map((item) => (
                                        <ItemWrapper key={item.id}>
                                            <ItemDetails>
                                                <ItemTextPrimary>
                                                    {item.name}
                                                </ItemTextPrimary>
                                                <ItemDetailsAmount>
                                                    <ItemTextSecondary className='qty'>
                                                        <NumberFormat
                                                            value={
                                                                item.quantity
                                                            }
                                                            displayType={'text'}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                        />
                                                        <span className='qty'>
                                                            x
                                                        </span>
                                                    </ItemTextSecondary>
                                                    <ItemTextSecondary>
                                                        <NumberFormat
                                                            value={item.price}
                                                            displayType={'text'}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={'£'}
                                                        />
                                                    </ItemTextSecondary>
                                                </ItemDetailsAmount>
                                            </ItemDetails>
                                            <ItemDetailsTotal>
                                                <NumberFormat
                                                    value={item.total}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'£'}
                                                />
                                            </ItemDetailsTotal>
                                        </ItemWrapper>
                                    ))}
                                </ListItems>
                                <ListAmountDue isDarkMode={isDarkMode}>
                                    <p>Amount Due</p>
                                    <span>
                                        <NumberFormat
                                            value={currentInvoice[0].price}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'£'}
                                        />
                                    </span>
                                </ListAmountDue>
                            </DetailsWrapper>
                        </InvoiceMain>
                    </InvoiceWrapper>
                    )
                </>
            ) : (
                <Error404 />
            )}
        </>
    );
}

export default Invoice;
