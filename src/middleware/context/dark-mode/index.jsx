import { useState, useEffect, createContext } from 'react'


const DarkModeContext = createContext(null);


const DarkModeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true)

    const updateDarkMode = (state) => {
        setDarkMode(state);
        localStorage.setItem('dark-mode', state.toString())
    }

    useEffect(() => {
        const localDarkMode = localStorage.getItem("dark-mode");
        if (localDarkMode !== null) setDarkMode(localDarkMode === "true")
    }, [])


    return (
        <DarkModeContext.Provider value={{ darkMode, updateDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )

}

export { DarkModeContext, DarkModeProvider }