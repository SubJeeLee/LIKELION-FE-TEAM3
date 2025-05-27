/**
 * zustand.js
 * -------------------------------------------------------
 * 팀원 관리 앱의 상태 관리를 담당하는 zustand 스토어 정의 파일입니다.
 *
 * 주요 관리 데이터 및 기능:
 *  - 팀원 목록 (members)
 *  - 팀원 추가/수정 (setMembers)
 *  - 좋아요 토글 기능 (toggleLike)
 *  - 관심사(관심 팀원) 목록 (interests)
 *  - 관심사 추가/제거 (addInterest, removeInterest)
 *
 * 이 스토어는 React 컴포넌트 어디서든 useMemberStore()로
 * 상태와 관련 함수들을 바로 사용할 수 있도록 해줍니다.
 * -------------------------------------------------------
 */

import { create } from "zustand";

export const useMemberStore = create((set) => ({
  members: [],
  setMembers: (members) => set({ members }),
  toggleLike: (id) =>
    set((state) => ({
      members: state.members.map((m) =>
        m.id === id ? { ...m, likes: m.likes === 0 ? 1 : 0 } : m
      ),
    })),
  // 관심사(관심 팀원) 목록 관리
  interests: [],
  addInterest: (member) =>
    set((state) => ({
      interests: state.interests.find((m) => m.id === member.id)
        ? state.interests // 이미 있으면 그대로
        : [...state.interests, member],
    })),
  removeInterest: (id) =>
    set((state) => ({
      interests: state.interests.filter((m) => m.id !== id),
    })),
}));
