
import { create } from "zustand";

interface ModalState {
  isSettingModalOpen: boolean;
  isHelpOpen: boolean;
  isAccountModalOpen: boolean;

  setIsSettingModalOpen: (value: boolean) => void;
  setIsHelplOpen: (value: boolean) => void;
  setIsAccountModalOpen: (value: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isSettingModalOpen: false,
  isHelpOpen: false,
  isAccountModalOpen: false,

  setIsSettingModalOpen: (value: boolean) => set({isSettingModalOpen: value, isHelpOpen: false}),
  setIsHelplOpen: (value: boolean) => set({isHelpOpen: value}),
  setIsAccountModalOpen: (value: boolean) => set({isAccountModalOpen: value}),
}))

export default useModalStore;