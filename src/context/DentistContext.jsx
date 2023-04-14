import {createContext, useContext, useState} from "react";

const DentistContext = createContext();

function DentistProvider({ children }) {
    const [dentists, setDentists] = useState([]);

    return (
        <DentistContext.Provider value={{ dentists, setDentists }}>
            {children}
        </DentistContext.Provider>
    )
}

const useDentists = () => {
    const ctx = useContext(DentistContext);

    if (!ctx) throw new Error("This hook must to be used inside a Dentist Provider")

    return ctx;
}

export {DentistProvider, useDentists};
