
import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  isAddChatOn: boolean;

  setIsSidebarOpen: (value: boolean) => void;
  setIsAddChatOn: (value: boolean) => void;
}

const isBrowser = typeof window !== "undefined";

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  isAddChatOn: false,

  setIsSidebarOpen: (value) => {
    set({ isSidebarOpen: value });
    if (typeof window !== "undefined") {
      localStorage.setItem("isSidebarOpen", JSON.stringify(value));
    }
  },
  setIsAddChatOn: (value: boolean) => set({isAddChatOn: value}),
}))

export default useSidebarStore;