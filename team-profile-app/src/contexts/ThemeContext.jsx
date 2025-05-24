import React, { createContext } from "react";
import useDarkMode from "../hooks/useDarkMode";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
