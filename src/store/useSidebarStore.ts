import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  isAddChatOn: boolean;

  setIsSidebarOpen: (value: boolean) => void;
  setIsAddChatOn: (value: boolean) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: true,
  isAddChatOn: false,

  setIsSidebarOpen: (value: boolean) => set({isSidebarOpen: value}),
  setIsAddChatOn: (value: boolean) => set({isAddChatOn: value}),
}))

export default useSidebarStore;