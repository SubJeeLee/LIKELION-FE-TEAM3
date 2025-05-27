/**
 * ThemeProvider 컴포넌트 (테마 전역 관리)
 * ------------------------------------------------
 * - 다크모드/라이트모드 등 앱 전체의 테마(스타일 모드)를
 *   Context(전역 상태)로 관리합니다.
 * - useDarkMode 훅을 통해 테마 상태와 전환 함수(mode, setMode)를
 *   하위 컴포넌트 어디서든 쉽게 사용할 수 있게 해줍니다.
 * - ex) const { mode, setMode } = useContext(ThemeContext)
 * ------------------------------------------------
 */

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
