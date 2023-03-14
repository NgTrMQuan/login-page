import { useState, createContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [Language, setLanguage] = useState('en');

    const value = {language: Language, setLanguage: setLanguage};

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export {LanguageContext, LanguageProvider};