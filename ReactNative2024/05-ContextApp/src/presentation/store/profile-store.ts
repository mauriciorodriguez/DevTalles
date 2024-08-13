import { create } from "zustand";

export interface ProfileState {
  name: string,
  email: string;
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set) => ({
  name: "test",
  email: "test@test.com",
  changeProfile: (name: string, email: string) => {
    set({ name, email })
  }
}));