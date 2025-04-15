import { create } from "zustand";

interface AiState {
  isGptOn: boolean,
  isDeepseekOn: boolean,
  isClaudeOn: boolean,
  isGeminiOn: boolean,
}

interface UserState {
  userName: string;
  userEmail: string;
  chatGptToken: string;
  deepseekToken: string;
  claudeToken: string;
  geminiToken: string;

  isAiOn: AiState;

  setUserName: (value: string) => void; 
  setUserEmail: (value: string) => void;
  setChatGptToken: (value: string) => void;
  setDeepseekToken: (value: string) => void;
  setClaudeToken: (value: string) => void;
  setGeminiToken: (value: string) => void;

  setIsAiOn: (value: AiState) => void;
}

const useUserStore = create<UserState>((set) => ({
  userName: "",
  userEmail: "",
  chatGptToken: "",
  deepseekToken: "",
  claudeToken: "",
  geminiToken: "",

  isAiOn: {
    isGptOn: false,
    isDeepseekOn: false,
    isClaudeOn: false,
    isGeminiOn: false,
  },

  setUserName: (value: string) => set({userName: value}),
  setUserEmail: (value: string) => set({userEmail: value}),
  setChatGptToken: (value: string) => set({chatGptToken: value}),
  setDeepseekToken: (value: string) => set({deepseekToken: value}),
  setClaudeToken: (value: string) => set({claudeToken: value}),
  setGeminiToken: (value: string) => set({geminiToken: value}),

  setIsAiOn: (value: AiState) => {
    set(() => ({
      isAiOn: {
        isGptOn: value.isGptOn,
        isDeepseekOn: value.isDeepseekOn,
        isClaudeOn: value.isClaudeOn,
        isGeminiOn: value.isGeminiOn,
      }
    }))
    if (typeof window !== "undefined") {
      localStorage.setItem("AiState", JSON.stringify(value));
    }
  }
}))

export default useUserStore;