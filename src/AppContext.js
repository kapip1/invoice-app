import React, { useState, createContext } from 'react';

import { invoiceNumber } from './logic/InvoiceNumber';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const event = new Date();
    const defData = [
        {
            id: 'KD3412',
            name: 'Jakub Negro',
            price: '1300',
            status: 'paid',
            date: event.toDateString(),
            list: [
                {
                    id: 2,
                    name: 'telefon iphone 11 pro',
                    price: 3233,
                    quantity: 32323,
                    total: 6699,
                },
            ],
        },
        {
            id: 'XD3421',
            name: 'Kacper Nowak',
            price: '6300',
            status: 'pending',
            date: event.toDateString(),
            list: [
                {
                    id: 3,
                    name: 'telefon iphone 11 pro',
                    price: 3233,
                    quantity: 3,
                    total: 6699,
                },
                {
                    id: 4,
                    name: 'telefon iphone 12 pro',
                    price: 4233,
                    quantity: 2,
                    total: 8466,
                },
            ],
        },
        {
            id: 'ED5432',
            name: 'Tomasz Jaro',
            price: '3300',
            status: 'draft',
            date: event.toDateString(),
            list: [
                {
                    id: 1,
                    name: 'telefon iphone 11 pro',
                    price: 3233,
                    quantity: 23233,
                    total: 9699,
                },
            ],
        },
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [isAddInvoiceOpen, setIsAddInvoiceOpen] = useState(false);
    const [data, setData] = useState(defData);

    const handleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };
    const handleFilterOpen = (arg) => {
        switch (arg) {
            case 'toggle':
                return setIsFilterOpen((prev) => !prev);
            case 'close':
                return setIsFilterOpen(false);
            default:
                throw Error();
        }
    };
    const closeFilter = () => {
        setIsFilterOpen(false);
    };
    const handleIsAddInvoiceOpen = (arg) => {
        switch (arg) {
            case 'open':
                return setIsAddInvoiceOpen(true);
            case 'close':
                return setIsAddInvoiceOpen(false);
            default:
                throw Error();
        }
    };
    const getInvoice = (invoice) => {
        setData([...data, { ...invoice }]);
    };
    const changeData = (newData) => {
        setData(newData);
    };

    const getFilterType = (type) => {
        const getTrueFilter = type.filter((item) => item.active === true);
        getTrueFilter.length
            ? setFilterType(getTrueFilter[0].id)
            : setFilterType('all');
    };

    return (
        <AppContext.Provider
            value={{
                isAddInvoiceOpen,
                isDarkMode,
                isFilterOpen,
                getInvoice,
                getFilterType,
                handleDarkMode,
                handleIsAddInvoiceOpen,
                handleFilterOpen,
                closeFilter,
                filterType,
                data,
                changeData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
