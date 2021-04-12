import React, { useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '../AppContext';

import {
    InvoiceInputContainer,
    InvoiceFormCategory,
    InvoiceFormInputContainer,
    InvoiceFormLabel,
    InvoiceFormInput,
    ItemListTitle,
    ItemList,
    ItemListItemHeader,
    ItemListHeaderName,
    ItemListItem,
    ItemListNameTotal,
    ItemListButton,
    DeleteBasket,
    InvoiceFormWrapper,
    ButtonsContainer,
    InvoiceFormTitle,
    ButtonsSave,
    InvoiceButton,
} from './InvoiceForm.style';

import IconDelete from '../assets/IconDelete';

function InvoiceForm() {
    const { handleIsSliderOpen } = useContext(AppContext);

    const [items, setItems] = useState([]);

    const handleInvoiceAdd = () => {
        setItems([
            ...items,
            {
                id: uuidv4(),
                name: '',
                quantity: '',
                price: '',
                total: '0',
            },
        ]);
    };

    return (
        <InvoiceFormWrapper>
            <InvoiceFormTitle>New Invoice</InvoiceFormTitle>
            <InvoiceInputContainer>
                <InvoiceFormCategory>Bill From</InvoiceFormCategory>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'100%'}>
                        Street Address
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'30%'}>
                        City
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={'30%'}>
                        Post Code
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={'30%'}>
                        Country
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormCategory>Bill To</InvoiceFormCategory>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'100%'}>
                        Client’s Name
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'100%'}>
                        Client’s Email
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'100%'}>
                        Street Address
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'30%'}>
                        City
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={'30%'}>
                        Post Code
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={'30%'}>
                        Country
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer select>
                    <InvoiceFormLabel size={'47.5%'}>
                        Invoice Date
                        <InvoiceFormInput type='date' />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={'47.5%'}>
                        Payment Terms
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel size={'100%'}>
                        Project Description
                        <InvoiceFormInput />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <ItemListTitle>Item List</ItemListTitle>
                <ItemList>
                    {items.length ? (
                        <ItemListItemHeader>
                            <ItemListHeaderName size={'214px'}>
                                Item Name.
                            </ItemListHeaderName>
                            <ItemListHeaderName size={'60px'}>
                                Qty.
                            </ItemListHeaderName>
                            <ItemListHeaderName size={'100px'}>
                                Price
                            </ItemListHeaderName>
                            <ItemListHeaderName size={'65px'}>
                                Total
                            </ItemListHeaderName>
                        </ItemListItemHeader>
                    ) : null}
                    {items.map((item) => {
                        const copyItems = [...items];
                        const index = copyItems.findIndex(
                            (el) => el.id === item.id
                        );
                        const handleNameInput = (e) => {
                            copyItems[index].name = e.target.value;
                            setItems(copyItems);
                        };
                        const handleQuantityInput = (e) => {
                            copyItems[index].quantity = e.target.value;
                            copyItems[index].total =
                                copyItems[index].price *
                                copyItems[index].quantity;
                            setItems(copyItems);
                        };
                        const handlePriceInput = (e) => {
                            copyItems[index].price = e.target.value;
                            copyItems[index].total =
                                copyItems[index].price *
                                copyItems[index].quantity;
                            setItems(copyItems);
                        };

                        const handleButtonRemove = () => {
                            const filteredArr = copyItems.filter(
                                (el) => item.id !== el.id
                            );
                            setItems(filteredArr);
                        };
                        return (
                            <ItemListItem>
                                <InvoiceFormInput
                                    size={'214px'}
                                    value={item.name}
                                    onChange={handleNameInput}
                                />
                                <InvoiceFormInput
                                    onChange={handleQuantityInput}
                                    size={'60px'}
                                    type='number'
                                    value={item.quantity}
                                />
                                <InvoiceFormInput
                                    onChange={handlePriceInput}
                                    size={'100px'}
                                    type='number'
                                    value={item.price}
                                />
                                <ItemListNameTotal
                                    size={'65px'}
                                    value={item.total}
                                    disabled='disabled'
                                />
                                <DeleteBasket onClick={handleButtonRemove}>
                                    <IconDelete />
                                </DeleteBasket>
                            </ItemListItem>
                        );
                    })}
                    <ItemListButton onClick={handleInvoiceAdd}>
                        + Add New Item
                    </ItemListButton>
                </ItemList>
            </InvoiceInputContainer>
            <ButtonsContainer>
                <InvoiceButton
                    colorFont={'#7E88C3'}
                    colorBg={'#F9FAFE'}
                    onClick={() => handleIsSliderOpen('close')}
                >
                    Discard
                </InvoiceButton>
                <ButtonsSave>
                    <InvoiceButton
                        colorBg={'#373B53'}
                        colorFont={'var(--color-totalPrice)'}
                    >
                        Save as Draft
                    </InvoiceButton>
                    <InvoiceButton colorBg={'#7C5DFA'} colorFont={'#FFF'}>
                        Save & Draft
                    </InvoiceButton>
                </ButtonsSave>
            </ButtonsContainer>
        </InvoiceFormWrapper>
    );
}

export default InvoiceForm;
