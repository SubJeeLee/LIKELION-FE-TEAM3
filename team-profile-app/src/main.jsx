/**
 * index.js (엔트리 포인트)
 * -------------------------------------------------
 * - 리액트 앱의 "진입점" 역할을 하는 파일입니다.
 * - 루트 엘리먼트(root)에 App 컴포넌트를 렌더링합니다.
 * - StrictMode로 감싸서 개발 중 잠재적 문제를 조기에 감지합니다.
 * - 글로벌 스타일(index.css)도 여기서 import합니다.
 * -------------------------------------------------
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
