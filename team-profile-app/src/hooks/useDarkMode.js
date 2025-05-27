import { useEffect, useState } from "react";

// 다크/라이트 모드 전역 상태를 다루는 커스텀 Hook
export default function useDarkMode() {
  // 1. 초기값: localStorage에 저장된 테마 모드가 있으면 가져오고, 없으면 기본값 'light'
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("color-theme") || "light";
  });

  // 2. mode 값이 바뀔 때마다(=사용자가 다크/라이트 전환 버튼을 누를 때마다) 아래 코드 실행
  useEffect(() => {
    // 2-1. 선택한 모드(localStorage) 저장: 새로고침해도 유지됨
    localStorage.setItem("color-theme", mode);

    // 2-2. <html> 태그에 현재 테마 속성 부여 (CSS에서 [color-theme="dark"]처럼 쓸 수 있게)
    document.documentElement.setAttribute("color-theme", mode);

    // 2-3. body 태그에 클래스(light/dark) 부여: 특정 CSS에서 .light, .dark로 쓸 수 있게
    document.body.classList.remove("light", "dark"); // 이전 테마 클래스 삭제
    document.body.classList.add(mode); // 현재 테마 클래스 추가
  }, [mode]); // mode 값이 변할 때마다 위 코드가 실행됨

  // 3. [mode, setMode] 배열을 리턴: 컴포넌트에서 상태와 setter 둘 다 쓸 수 있음
  return [mode, setMode];
}
