import React, { useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import { invoiceNumber } from '../logic/InvoiceNumber';

import { AppContext } from '../AppContext';

import 'react-datepicker/dist/react-datepicker.css';

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
    InvoiceListLabel,
    InvoiceListLabelName,
    InvoiceFormSelect,
    InvoiceFormSelectOption,
    DeleteButtonContainer,
} from './InvoiceForm.style';

import IconDelete from '../assets/IconDelete';

function InvoiceForm() {
    const { handleIsSliderOpen, getInvoice } = useContext(AppContext);

    const event = new Date();

    const [items, setItems] = useState([]); //state for itemList
    const [terms, setTerms] = useState('');
    const [date, setDate] = useState(event.toISOString().replace(/T.*/, ''));
    const [paymentTerms, setPaymentTerms] = useState();

    const validate = (values) => {
        const errors = {};

        if (!values.streetAddresFrom) {
            errors.streetAddresFrom = 'Required';
        } else if (values.streetAddresFrom.length < 3) {
            errors.streetAddresFrom = 'Must be 3 characters or more';
        }

        if (!values.cityFrom) {
            errors.cityFrom = 'Required';
        }

        if (!values.postCodeFrom) {
            errors.postCodeFrom = 'Required';
        }

        if (!values.countryFrom) {
            errors.countryFrom = 'Required';
        }

        if (!values.clientName) {
            errors.clientName = 'Required';
        }

        if (!values.clientEmail) {
            errors.clientEmail = 'Required';
        }

        if (!values.streetAddressTo) {
            errors.streetAddressTo = 'Required';
        }

        if (!values.cityTo) {
            errors.cityTo = 'Required';
        }

        if (!values.postCodeTo) {
            errors.postCodeTo = 'Required';
        }

        if (!values.countryTo) {
            errors.countryTo = 'Required';
        }

        if (!values.projectDescription) {
            errors.projectDescription = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            streetAddresFrom: '',
            cityFrom: '',
            postCodeFrom: '',
            countryFrom: '',
            clientName: '',
            status: 'pending',
            clientEmail: '',
            streetAddressTo: '',
            cityTo: '',
            postCodeTo: '',
            countryTo: '',
            projectDescription: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log(formik.errors, 'e');
            alert(JSON.stringify(values, null, 2));
            getInvoice({
                id: invoiceNumber(),
                price: '',
                streetAddresFrom: values.streetAddresFrom,
                postCode: values.postCodeTo,
                countryFrom: values.countryFrom,
                clientName: values.clientName,
                clientEmail: values.clientEmail,
                paymentDue: '',
                streetAddressTo: values.streetAddressTo,
                cityTo: values.cityTo,
                postCodeTo: values.postCodeTo,
                countryTo: values.countryTo,
                projectDescription: values.projectDescription,
                list: [...items],
            });
            resetForm();
            setItems([]);
        },
    });
    const getTotalValue = () => {
        // const totalPrice =
    };

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
        <InvoiceFormWrapper onSubmit={formik.handleSubmit}>
            <InvoiceFormTitle>New Invoice</InvoiceFormTitle>
            <InvoiceInputContainer>
                <InvoiceFormCategory>Bill From</InvoiceFormCategory>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={100}
                        error={
                            formik.touched.streetAddresFrom &&
                            formik.errors.streetAddresFrom
                        }
                    >
                        Street Address
                        <InvoiceFormInput
                            name='streetAddresFrom'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.streetAddresFrom}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={28}
                        error={
                            formik.touched.cityFrom && formik.errors.cityFrom
                        }
                    >
                        City
                        <InvoiceFormInput
                            name='cityFrom'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cityFrom}
                        />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel
                        size={28}
                        error={
                            formik.touched.postCodeFrom &&
                            formik.errors.postCodeFrom
                        }
                    >
                        Post Code
                        <InvoiceFormInput
                            name='postCodeFrom'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.postCodeFrom}
                        />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel
                        size={28}
                        error={
                            formik.touched.countryFrom &&
                            formik.errors.countryFrom
                        }
                    >
                        Country
                        <InvoiceFormInput
                            name='countryFrom'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.countryFrom}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormCategory>Bill To</InvoiceFormCategory>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={100}
                        error={
                            formik.touched.clientName &&
                            formik.errors.clientName
                        }
                    >
                        Client’s Name
                        <InvoiceFormInput
                            name='clientName'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.clientName}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={100}
                        error={
                            formik.touched.clientEmail &&
                            formik.errors.clientEmail
                        }
                    >
                        Client’s Email
                        <InvoiceFormInput
                            name='clientEmail'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.clientEmail}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={100}
                        error={
                            formik.touched.streetAddressTo &&
                            formik.errors.streetAddressTo
                        }
                    >
                        Street Address
                        <InvoiceFormInput
                            name='streetAddressTo'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.streetAddressTo}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={28}
                        error={formik.touched.cityTo && formik.errors.cityTo}
                    >
                        City
                        <InvoiceFormInput
                            name='cityTo'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cityTo}
                        />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel
                        size={28}
                        error={
                            formik.touched.postCodeTo &&
                            formik.errors.postCodeTo
                        }
                    >
                        Post Code
                        <InvoiceFormInput
                            name='postCodeTo'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.postCodeTo}
                        />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel
                        size={28}
                        error={
                            formik.touched.countryTo && formik.errors.countryTo
                        }
                    >
                        Country
                        <InvoiceFormInput
                            name='countryTo'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.countryTo}
                        />
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer select>
                    <InvoiceFormLabel
                        size={45}
                        error={
                            formik.touched.invoiceDate &&
                            formik.errors.invoiceDate
                        }
                    >
                        Invoice Date
                        <InvoiceFormInput
                            type='date'
                            name='invoiceDate'
                            value={date}
                            min='1950-09-13'
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </InvoiceFormLabel>
                    <InvoiceFormLabel size={45}>
                        Payment Terms
                        <InvoiceFormSelect>
                            <option value={1}>Net 1 Day</option>
                            <option value={7}>Net 7 Day</option>
                            <option value={14}>Net 14 Day</option>
                            <option value={30}>Net 30 Day</option>
                        </InvoiceFormSelect>
                    </InvoiceFormLabel>
                </InvoiceFormInputContainer>
                <InvoiceFormInputContainer>
                    <InvoiceFormLabel
                        size={100}
                        error={
                            formik.touched.projectDescription &&
                            formik.errors.projectDescription
                        }
                    >
                        Project Description
                        <InvoiceFormInput
                            name='projectDescription'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.projectDescription}
                        />
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
                            <ItemListItem key={item.id}>
                                <InvoiceListLabel size={214}>
                                    <InvoiceListLabelName>
                                        Item Name
                                    </InvoiceListLabelName>
                                    <InvoiceFormInput
                                        value={item.name}
                                        onChange={handleNameInput}
                                    />
                                </InvoiceListLabel>
                                <InvoiceListLabel size={70}>
                                    <InvoiceListLabelName>
                                        Qty.
                                    </InvoiceListLabelName>
                                    <InvoiceFormInput
                                        onChange={handleQuantityInput}
                                        type='number'
                                        qty
                                        value={item.quantity}
                                    />
                                </InvoiceListLabel>
                                <InvoiceListLabel size={100}>
                                    <InvoiceListLabelName>
                                        Price
                                    </InvoiceListLabelName>
                                    <InvoiceFormInput
                                        onChange={handlePriceInput}
                                        type='number'
                                        value={item.price}
                                    />
                                </InvoiceListLabel>
                                <InvoiceListLabel size={75}>
                                    <InvoiceListLabelName>
                                        Total
                                    </InvoiceListLabelName>
                                    <ItemListNameTotal
                                        value={item.total}
                                        disabled='disabled'
                                        qty
                                    />
                                </InvoiceListLabel>
                                <DeleteButtonContainer>
                                    <DeleteBasket onClick={handleButtonRemove}>
                                        <IconDelete />
                                    </DeleteBasket>
                                </DeleteButtonContainer>
                            </ItemListItem>
                        );
                    })}
                    <ItemListButton onClick={handleInvoiceAdd} type='button'>
                        + Add New Item
                    </ItemListButton>
                </ItemList>
            </InvoiceInputContainer>
            <ButtonsContainer>
                <InvoiceButton
                    colorFont={'#7E88C3'}
                    colorBg={'#F9FAFE'}
                    onClick={() => handleIsSliderOpen('close')}
                    type='button'
                >
                    Discard
                </InvoiceButton>
                <ButtonsSave>
                    <InvoiceButton
                        colorBg={'#373B53'}
                        colorFont={'var(--color-totalPrice)'}
                        type='button'
                    >
                        Save as Draft
                    </InvoiceButton>
                    <InvoiceButton
                        colorBg={'#7C5DFA'}
                        colorFont={'#FFF'}
                        type='submit'
                    >
                        Save & Send
                    </InvoiceButton>
                </ButtonsSave>
            </ButtonsContainer>
        </InvoiceFormWrapper>
    );
}

export default InvoiceForm;
