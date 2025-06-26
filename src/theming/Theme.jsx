import { useState, createContext, useContext } from "react";

const ThemingContext = createContext();

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };
  return (
    <ThemingContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemingContext.Provider>
  );
};

export const useTheme = () => useContext(ThemingContext);
