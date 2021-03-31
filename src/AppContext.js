import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    console.log(isDarkMode);
    return (
        <AppContext.Provider value={{ isDarkMode, handleDarkMode }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
