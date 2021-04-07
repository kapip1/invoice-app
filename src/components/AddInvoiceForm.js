import React, { useState, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { invoiceNumber } from '../logic/InvoiceNumber';

import ItemList from './ItemList';
import { AppContext } from '../AppContext';

const AddInvoiceFormWrapper = styled.div`
    display: flex;
    color: var(--color-primary);
    flex-direction: column;
    padding: 55px 0px 55px 55px;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const AddInvoiceTitle = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
`;

function AddInvoiceForm() {
    const event = new Date();

    const { getInvoice, handleIsAddInvoiceOpen } = useContext(AppContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('pending');

    const handleForm = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(price);
        if (items.length !== 0) {
            getInvoice({
                id: invoiceNumber(),
                name,
                price,
                status,
                date: event.toDateString(),
                list: [...items],
            });
            setName('');
            setPrice('');
            setItems([]);
            handleIsAddInvoiceOpen('close');
        }
    };

    const handleInvoiceAdd = () => {
        setItems([
            ...items,
            {
                id: uuidv4(),
                name: '',
                quantity: '',
                price: '',
            },
        ]);
    };

    console.log(items);

    return (
        <AddInvoiceFormWrapper>
            <AddInvoiceTitle>New Invoice</AddInvoiceTitle>
            <form onSubmit={handleForm}>
                <label htmlFor='name'>Siema</label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='price'></label>
                <input
                    type='number'
                    id='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type='submit'>dodaj</button>
            </form>
            <ul>
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
                        setItems(copyItems);
                    };
                    const handlePriceInput = (e) => {
                        copyItems[index].price = e.target.value;
                        setItems(copyItems);
                    };

                    const handleButtonRemove = () => {
                        const filteredArr = copyItems.filter(
                            (el) => item.id !== el.id
                        );
                        setItems(filteredArr);
                    };
                    return (
                        <li key={item.id}>
                            <input
                                type='text'
                                value={item.name}
                                onChange={handleNameInput}
                            />
                            <input
                                type='number'
                                value={item.quantity}
                                onChange={handleQuantityInput}
                            />
                            <input
                                type='number'
                                value={item.price}
                                onChange={handlePriceInput}
                            />
                            <input
                                type='text'
                                value={item.price * item.quantity}
                            />
                            <button onClick={handleButtonRemove}>remove</button>
                        </li>
                    );
                })}
            </ul>
            <button onClick={handleInvoiceAdd}>dodaj invoice</button>
        </AddInvoiceFormWrapper>
    );
}

export default AddInvoiceForm;
