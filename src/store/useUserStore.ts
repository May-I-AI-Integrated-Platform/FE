import { create } from "zustand";

interface UserState {
  userName: string;
  userEmail: string;
  chatGptToken: string;
  deepseekToken: string;
  claudeToken: string;
  geminiToken: string;

  setUserName: (value: string) => void; 
  setUserEmail: (value: string) => void;
  setChatGptToken: (value: string) => void;
  setDeepseekToken: (value: string) => void;
  setClaudeToken: (value: string) => void;
  setGeminiToken: (value: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  userName: "",
  userEmail: "",
  chatGptToken: "",
  deepseekToken: "",
  claudeToken: "",
  geminiToken: "",

  setUserName: (value: string) => set({userName: value}),
  setUserEmail: (value: string) => set({userEmail: value}),
  setChatGptToken: (value: string) => set({chatGptToken: value}),
  setDeepseekToken: (value: string) => set({deepseekToken: value}),
  setClaudeToken: (value: string) => set({claudeToken: value}),
  setGeminiToken: (value: string) => set({geminiToken: value}),
}))

export default useUserStore;