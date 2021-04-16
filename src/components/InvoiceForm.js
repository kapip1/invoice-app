import React, { useContext, useState, useEffect } from 'react';

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
    DeleteButtonContainer,
    ErrorMassage,
} from './InvoiceForm.style';

import IconDelete from '../assets/IconDelete';

function InvoiceForm() {
    const {
        handleIsSliderOpen,
        getInvoice,
        edit,
        changeData,
        data,
    } = useContext(AppContext);

    const event = new Date();

    useEffect(() => {
        if (edit.id) {
            const editTime = new Date(edit.dateMs);
            setItems([...edit.list]);
            setTerms(edit.terms);
            setDate(editTime.toISOString().replace(/T.*/, ''));
        }
        return () => {
            setItems([]);
            setTerms();
            setDate(event.toISOString().replace(/T.*/, ''));
        };
        // eslint-disable-next-line
    }, []);

    const [items, setItems] = useState([]); //state for itemList
    const [terms, setTerms] = useState(1);
    const [date, setDate] = useState(event.toISOString().replace(/T.*/, ''));

    const [draft, setDraft] = useState(false);

    const validate = (values) => {
        const errors = {};
        if (!draft) {
            if (!values.streetAddresFrom) {
                errors.streetAddresFrom = 'Required';
            } else if (values.streetAddresFrom.length < 3) {
                errors.streetAddresFrom = 'Must be 3 characters or more';
            }

            if (!items.length) {
                errors.items = 'Required';
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
        }

        return errors;
    };
    const formikDef = () => {
        if (edit.id) {
            return {
                streetAddresFrom: edit.streetAddresFrom,
                cityFrom: edit.cityFrom,
                postCodeFrom: edit.postCodeFrom,
                countryFrom: edit.countryFrom,
                clientName: edit.clientName,
                clientEmail: edit.clientEmail,
                streetAddressTo: edit.streetAddressTo,
                cityTo: edit.cityTo,
                postCodeTo: edit.postCodeTo,
                countryTo: edit.countryTo,
                projectDescription: edit.projectDescription,
            };
        } else {
            return {
                streetAddresFrom: '',
                cityFrom: '',
                postCodeFrom: '',
                countryFrom: '',
                clientName: '',
                clientEmail: '',
                streetAddressTo: '',
                cityTo: '',
                postCodeTo: '',
                countryTo: '',
                projectDescription: '',
            };
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formikDef(),
        validate,
        onSubmit: (values, { resetForm }) => {
            if (edit.id) {
                const copyData = [...data];
                const index = copyData.findIndex((item) => item.id === edit.id);
                copyData[index] = {
                    id: edit.id,
                    price: getTotalValue(),
                    status: 'pending',
                    cityFrom: values.cityFrom,
                    streetAddresFrom: values.streetAddresFrom,
                    postCodeFrom: values.postCodeFrom,
                    countryFrom: values.countryFrom,
                    clientName: values.clientName,
                    clientEmail: values.clientEmail,
                    paymentDue: getDate().paymentDue,
                    invoiceDate: getDate().invoiceDate,
                    streetAddressTo: values.streetAddressTo,
                    cityTo: values.cityTo,
                    postCodeTo: values.postCodeTo,
                    countryTo: values.countryTo,
                    dateMs: getDate().dateMs,
                    projectDescription: values.projectDescription,
                    terms: terms,
                    list: [...items],
                };
                changeData(copyData);
                handleIsSliderOpen('close');
            } else {
                getInvoice({
                    id: invoiceNumber(),
                    price: getTotalValue(),
                    status: getStatus(),
                    cityFrom: values.cityFrom,
                    streetAddresFrom: values.streetAddresFrom,
                    postCodeFrom: values.postCodeFrom,
                    countryFrom: values.countryFrom,
                    clientName: values.clientName,
                    clientEmail: values.clientEmail,
                    paymentDue: getDate().paymentDue,
                    invoiceDate: getDate().invoiceDate,
                    streetAddressTo: values.streetAddressTo,
                    cityTo: values.cityTo,
                    postCodeTo: values.postCodeTo,
                    countryTo: values.countryTo,
                    projectDescription: values.projectDescription,
                    terms,
                    dateMs: getDate().dateMs,
                    list: [...items],
                });
                resetForm();
                setItems([]);
                handleIsSliderOpen('close');
                setTerms(1);
                setDate(event.toISOString().replace(/T.*/, ''));
            }
        },
    });
    const getTotalValue = () => {
        const totalArr = items.map((item) => item.total);
        let totalPrice = 0;
        totalArr.forEach((item) => (totalPrice += item));
        return totalPrice ? totalPrice : '';
    };
    const getStatus = () => {
        if (draft) {
            return 'draft';
        }
        return 'pending';
    };

    const getDate = () => {
        const invoiceDate = new Date(date);
        const sumPaymentDue = invoiceDate.getTime() + 86400000 * terms;
        const paymenDue = new Date(sumPaymentDue);

        return {
            dateMs: invoiceDate.getTime(),
            paymentDue: paymenDue.toDateString(),
            invoiceDate: invoiceDate.toDateString(),
        };
    };

    const handleTermsSelect = (e) => {
        setTerms(e.target.value);
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
            <InvoiceFormTitle onClick={() => console.log(formik.errors)}>
                {edit.id ? (
                    <>
                        Edit <span>#</span>
                        {edit.id}
                    </>
                ) : (
                    'New Invoice'
                )}
            </InvoiceFormTitle>
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
                            placeholder={'e.g. email@example.com'}
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
                        <InvoiceFormSelect
                            value={terms}
                            onChange={handleTermsSelect}
                        >
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
                            placeholder={'e.g. Graphic Design Service'}
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
                                <InvoiceListLabel size={60}>
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
                <ErrorMassage></ErrorMassage>
            </InvoiceInputContainer>
            <ButtonsContainer edit={edit.id}>
                <InvoiceButton
                    onClick={() => handleIsSliderOpen('close')}
                    type='button'
                    colorFont={'var(--color-buttonFont)'}
                    colorBg={'var(--color-buttonForm)'}
                >
                    {edit.id ? 'Cancel' : 'Discard'}
                </InvoiceButton>
                <ButtonsSave>
                    {edit.id ? null : (
                        <InvoiceButton
                            colorBg={'#373B53'}
                            colorFont={'var(--color-totalPrice)'}
                            onClick={() => setDraft(true)}
                            type='submit'
                        >
                            Save as Draft
                        </InvoiceButton>
                    )}
                    <InvoiceButton
                        colorBg={'#7C5DFA'}
                        colorFont={'#FFF'}
                        type='submit'
                    >
                        {edit.id ? 'Save Changes' : 'Save & Send'}
                    </InvoiceButton>
                </ButtonsSave>
            </ButtonsContainer>
        </InvoiceFormWrapper>
    );
}

export default InvoiceForm;
