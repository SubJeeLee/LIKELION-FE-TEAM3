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
