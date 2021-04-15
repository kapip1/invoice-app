import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { AppContext } from '../AppContext';

import InvoiceAlert from './InvoiceAlert';

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
    const { data, handleIsSliderOpen, isDarkMode, changeData } = useContext(
        AppContext
    );
    const [isAlert, setIsAlert] = useState(false);

    const currentInvoice = data.filter(
        (invoice) => invoice.id === match.params.id
    );

    const handleEditBtn = () => {
        handleIsSliderOpen('openEdit', currentInvoice[0]);
    };
    const isAlertToggle = () => {
        setIsAlert((prev) => !prev);
    };
    const handleDeleteBtn = () => {
        isAlertToggle();
    };
    const handleConfirmDelete = () => {
        changeData(
            data.filter((invoice) => invoice.id !== currentInvoice[0].id)
        );
    };
    const handleMarkPaid = () => {
        const copyData = [...data];
        const index = copyData.findIndex(
            (item) => item.id === currentInvoice[0].id
        );
        copyData[index].status = 'paid';
        changeData(copyData);
    };

    return (
        <>
            {currentInvoice.length ? (
                <>
                    <InvoiceAlert
                        isAlert={isAlert}
                        isAlertToggle={isAlertToggle}
                        isDarkMode={isDarkMode}
                        invoiceId={currentInvoice[0].id}
                        handleConfirmDelete={handleConfirmDelete}
                    />
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
                                    <InvoiceButton
                                        color={'#EC5757'}
                                        onClick={handleDeleteBtn}
                                    >
                                        Delete
                                    </InvoiceButton>
                                    {(currentInvoice[0].status === 'draft' ||
                                        currentInvoice[0].status ===
                                            'pending') && (
                                        <InvoiceButton
                                            color={'#7C5DFA'}
                                            onClick={handleMarkPaid}
                                        >
                                            Mark as Paid
                                        </InvoiceButton>
                                    )}
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
                                            {
                                                currentInvoice[0]
                                                    .projectDescription
                                            }
                                        </TextSecondary>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>
                                            {currentInvoice[0].streetAddresFrom}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].cityFrom}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].postCodeFrom}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].countryFrom}
                                        </TextSecondary>
                                    </BillItem>
                                </BillHeader>
                                <BillMain>
                                    <BillItem>
                                        <TextSecondary>
                                            Invoice Date
                                        </TextSecondary>
                                        <TextPrimaryLarge>
                                            {currentInvoice[0].invoiceDate}
                                        </TextPrimaryLarge>
                                        <TextSecondary>
                                            Payment Due
                                        </TextSecondary>
                                        <TextPrimaryLarge>
                                            {currentInvoice[0].paymentDue}
                                        </TextPrimaryLarge>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>Bill To</TextSecondary>
                                        <TextPrimaryLarge>
                                            {currentInvoice[0].clientName}
                                        </TextPrimaryLarge>
                                        <TextSecondary>
                                            {currentInvoice[0].streetAddressTo}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].cityTo}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].postCodeTo}
                                        </TextSecondary>
                                        <TextSecondary>
                                            {currentInvoice[0].countryTo}
                                        </TextSecondary>
                                    </BillItem>
                                    <BillItem>
                                        <TextSecondary>Sent to</TextSecondary>
                                        <TextPrimaryLarge>
                                            {currentInvoice[0].clientEmail}
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
