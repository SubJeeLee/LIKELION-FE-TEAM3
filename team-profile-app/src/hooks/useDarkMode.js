import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
    if (mode === "dark") {
      import("../theme/dark.css");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      import("../theme/light.css");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
}
