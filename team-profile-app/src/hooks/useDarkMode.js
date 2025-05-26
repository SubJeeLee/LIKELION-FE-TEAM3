import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("color-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("color-theme", mode);
    document.documentElement.setAttribute("color-theme", mode);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);
  }, [mode]);

  return [mode, setMode];
}
