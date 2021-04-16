import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

const LOCAL_STORAGE = 'invoiceList';

const AppProvider = ({ children }) => {
    const defData = [
        {
            id: 'EQ3214',
            price: 172,
            cityFrom: 'Berlin',
            streetAddresFrom: 'Bluew 32',
            postCodeFrom: '32-433',
            countryFrom: 'Germany',
            clientName: 'Kacper',
            clientEmail: 'ghlobaleez@gmail.com',
            status: 'pending',
            paymentDue: 'Sun Apr 11 2021',
            invoiceDate: 'Sun Apr 04 2021',
            streetAddressTo: 'Jarecka 32',
            terms: 7,
            dateMs: 1617578886905,
            cityTo: 'Katowice',
            postCodeTo: '40-322',
            countryTo: 'Poland',
            projectDescription: 'simple web service',
            list: [
                {
                    id: 32,
                    name: 'web service',
                    price: 43,
                    quantity: 4,
                    total: 172,
                },
            ],
        },
        {
            id: 'XQ5234',
            price: 1000,
            cityFrom: 'Warsaw',
            streetAddresFrom: 'Marszalkowska 32',
            postCodeFrom: '04-433',
            countryFrom: 'Poland',
            clientName: 'John',
            clientEmail: 'johnxe@icloud.com',
            status: 'paid',
            paymentDue: 'Sun Sep 13 2017',
            invoiceDate: 'Sun Sep 10 2017',
            streetAddressTo: 'Jarecka 32',
            terms: 1,
            dateMs: 1507578886905,
            cityTo: 'Chorzow',
            postCodeTo: '43-322',
            countryTo: 'Poland',
            projectDescription: 'web design',
            list: [
                {
                    id: 642,
                    name: 'web design',
                    price: 1000,
                    quantity: 1,
                    total: 1000,
                },
            ],
        },
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterType, setFilterType] = useState('total');
    const [isSliderOpen, seIsSliderOpen] = useState(false);
    const [data, setData] = useState(defData);
    const [edit, setEdit] = useState([]);

    useEffect(() => {
        const invoicesStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
        setData(invoicesStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(data));
    }, [data]);

    const handleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const handleFilterOpen = (arg) => {
        switch (arg) {
            case 'toggle':
                return setIsFilterOpen((prev) => !prev);
            case 'close':
                setIsFilterOpen(false);
                setEdit([]);
                break;
            default:
                throw Error();
        }
    };

    const closeFilter = () => {
        setIsFilterOpen(false);
    };

    const handleIsSliderOpen = (arg, editInvoice) => {
        switch (arg) {
            case 'openAdd':
                return seIsSliderOpen(true);
            case 'openEdit':
                seIsSliderOpen(true);
                setEdit(editInvoice);
                break;
            case 'close':
                seIsSliderOpen(false);
                setEdit([]);
                break;
            default:
                throw Error();
        }
    };

    const getInvoice = (invoice) => {
        setData([...data, invoice]);
    };

    const changeData = (newData) => {
        setData(newData);
    };

    const getFilterType = (type) => {
        const getTrueFilter = type.filter((item) => item.active === true);
        getTrueFilter.length
            ? setFilterType(getTrueFilter[0].id)
            : setFilterType('total');
    };

    return (
        <AppContext.Provider
            value={{
                isSliderOpen,
                isDarkMode,
                isFilterOpen,
                getInvoice,
                getFilterType,
                handleDarkMode,
                handleIsSliderOpen,
                handleFilterOpen,
                closeFilter,
                filterType,
                data,
                changeData,
                edit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
