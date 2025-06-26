import { useState } from "react";
import { ThemingContext } from "./context";

export const Theme = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggle = () => {
        setTheme(t => t === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemingContext.Provider value={{ theme, toggle }}>
         { children }
        </ThemingContext.Provider>
    );
};
