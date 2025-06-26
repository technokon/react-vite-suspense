import { useEffect } from "react";
import { useState, createContext, useContext } from "react";

const ThemingContext = createContext();

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <ThemingContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemingContext.Provider>
  );
};

export const useTheme = () => useContext(ThemingContext);
