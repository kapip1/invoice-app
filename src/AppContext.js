import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const defData = [
        {
            id: 'EQ3214',
            price: '172',
            cityFrom: 'Berlin',
            streetAddresFrom: 'Himlera 32',
            postCodeFrom: '32-433',
            countryFrom: 'Niemcy',
            clientName: 'Kaper',
            clientEmail: 'dropienie034@wp.pl',
            status: 'pending',
            paymentDue: '32-323-43',
            streetAddressTo: 'Jarecka 32',
            cityTo: 'Katowice',
            postCodeTo: '40-322',
            countryTo: 'Poland',
            projectDescription: 'simple project',
            list: [
                {
                    id: 32,
                    name: 'kusz',
                    price: 43,
                    quantity: 4,
                    total: 172,
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
                console.log('close');
                seIsSliderOpen(false);
                setEdit([]);
                break;
            default:
                throw Error();
        }
    };
    const getInvoice = (invoice) => {
        setData([...data, invoice]);
        console.log([...data, invoice]);
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
