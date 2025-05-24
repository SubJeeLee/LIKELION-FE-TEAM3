import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import "./theme/light.css";
import "./theme/dark.css";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
export default App;
