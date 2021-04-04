import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isAddInvoiceOpen, setIsAddInvoiceOpen] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };
    const handleFilterOpen = () => {
        setIsFilterOpen((prev) => !prev);
    };
    const closeFilter = () => {
        setIsFilterOpen(false);
    };
    const handleIsAddInvoiceOpen = () => {
        setIsAddInvoiceOpen(true);
        console.log(isAddInvoiceOpen);
        console.log('siema');
    };
    const handleisAddInvoiceClose = () => {
        console.log('wylaczam');
        setIsAddInvoiceOpen(false);
    };

    console.log(isDarkMode);
    return (
        <AppContext.Provider
            value={{
                handleisAddInvoiceClose,
                isDarkMode,
                handleIsAddInvoiceOpen,
                isAddInvoiceOpen,
                handleDarkMode,
                isFilterOpen,
                closeFilter,
                handleFilterOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
