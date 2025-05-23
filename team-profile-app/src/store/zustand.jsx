import { create } from "zustand";

export const useMemberStore = create((set) => ({
  members: [],
  setMembers: (newMembers) => set({ members: newMembers }),
  toggleLike: (id) =>
    set((state) => ({
      members: state.members.map((m) =>
        m.id === id ? { ...m, likes: m.likes === 0 ? 1 : 0 } : m
      ),
    })),
}));
