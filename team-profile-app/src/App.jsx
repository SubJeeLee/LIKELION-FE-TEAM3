/**
 * App.jsx (앱 루트 컴포넌트)
 * -------------------------------------------------
 * - 앱의 가장 최상위 컴포넌트입니다.
 * - ThemeProvider로 감싸서 전체 다크/라이트 모드 전역 관리
 * - 실제 메인 페이지(Home)를 하위로 렌더링합니다.
 * - 글로벌 테마 스타일(theme.css)도 이 파일에서 import합니다.
 * -------------------------------------------------
 */

import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import "./theme/theme.css";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
export default App;
