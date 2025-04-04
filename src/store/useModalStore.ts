
import { create } from "zustand";

interface ModalState {
  isSettingModalOpen: boolean;
  isHelpOpen: boolean;

  setIsSettingModalOpen: (value: boolean) => void;
  setIsHelplOpen: (value: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isSettingModalOpen: false,
  isHelpOpen: false,

  setIsSettingModalOpen: (value: boolean) => set({isSettingModalOpen: value, isHelpOpen: false}),
  setIsHelplOpen: (value: boolean) => set({isHelpOpen: value}),
}))

export default useModalStore;