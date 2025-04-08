'use client'

import useModalStore from "@/store/useModalStore";
import Portal from "../portal/Portal";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent } from "react";
import { HelpIcon } from "../../../public/svgs";
import Link from "next/link";
import useUserStore from "@/store/useUserStore";
import { axiosInstance } from "@/apis/axiosInstance";

interface SecretInputProps {
  model: string
  value: string
  setValue: (value: string) => void
}

const SecretInput: React.FC<SecretInputProps> = ({
  model,
  value,
  setValue,
}) => {
  return (
    <div className={`flex flex-col gap-2.5`}>
      <p className={`jersey text-[32px]`}>{model}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`py-1 border-b border-gray-500 text-body-14-r placeholder:text-gray-300`}
        placeholder={"Secret Key를 입력해주세요"} />
    </div>
  )
}

const SettingModal = () => {

  const {
    chatGptToken,
    deepseekToken,
    claudeToken,
    geminiToken,

    setChatGptToken,
    setDeepseekToken,
    setClaudeToken,
    setGeminiToken,
  } = useUserStore();

  const {
    isSettingModalOpen,
    isHelpOpen,
    setIsSettingModalOpen,
    setIsHelplOpen,
  } = useModalStore();

  // 모달 창 내부 클릭 시 창 닫힘 방지
  const modalContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  }

  // 모달 닫기기
  const modalClose = (e: MouseEvent) => {
    e.stopPropagation();
    setIsSettingModalOpen(false);
  }

  // Secrey Key 설정
  const setSecretKey = async () => {

    try {
      await axiosInstance.post(`${process.env.NEXT_PUBLIC_DOMAIN}/token`,
        {
          userId: 2,
          tokenList: [
            {
              tokenType: "GPT",
              value: chatGptToken
            },
            {
              tokenType: "DEEPSEEK",
              value: deepseekToken
            },
            {
              tokenType: "CLAUDE",
              value: claudeToken
            },
            {
              tokenType: "BARD",
              value: geminiToken
            }
          ]
        }
      )
    } catch (e) {
      console.log(e)
    }

    setIsSettingModalOpen(false);
  }

  return (
    <Portal>
      <AnimatePresence>
        {isSettingModalOpen &&
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => modalClose(e)}
          >
            <div
              className={`w-[500px] flex flex-col gap-10 px-10 py-7 rounded-[16px] bg-gray-700`}
              onClick={modalContentClick}>
              <div className={`flex gap-1`}>
                <p className={`text-display-32-b flex gap-2 items-center`}>
                  <span className={`jersey text-[38px] font-medium`}>SECRET KEY</span>설정
                </p>
                <div
                  className={`w-10 h-10 flex justify-center relative`} >
                  <HelpIcon
                    className={`w-8 cursor-pointer`}
                    onMouseEnter={() => setIsHelplOpen(true)}
                    onMouseLeave={() => setIsHelplOpen(false)} />
                  <AnimatePresence>
                    {isHelpOpen &&
                      <motion.div
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setIsHelplOpen(true)}
                        onMouseLeave={() => setIsHelplOpen(false)}
                        className={`absolute left-10 flex flex-col gap-2 rounded-[8px] bg-gray-600 px-3 py-3 text-subhead-12-sb`}>
                        <p className={`pb-2 border-b border-gray-500 truncate`}><span className={`jersey text-body-14-r`}>API key</span> 링크</p>
                        <div className={`flex flex-col gap-2.5 jersey text-body-14-r text-gray-300`}>
                          <Link
                            className={`hover:text-gray-50 cursor-pointer transition-all-300-out`}
                            href="https://platform.openai.com/api-keys"
                            target="_blank"
                            rel="noopener noreferrer">ChatGPT</Link>
                          <Link
                            className={`hover:text-gray-50 cursor-pointer transition-all-300-out`}
                            href="https://platform.deepseek.com/api_keys"
                            target="_blank"
                            rel="noopener noreferrer">Deepseek</Link>
                          <Link
                            className={`hover:text-gray-50 cursor-pointer transition-all-300-out`}
                            href="https://console.anthropic.com/settings/keys"
                            target="_blank"
                            rel="noopener noreferrer">Claude</Link>
                          <Link
                            className={`hover:text-gray-50 cursor-pointer transition-all-300-out`}
                            href="https://aistudio.google.com/app/apikey"
                            target="_blank"
                            rel="noopener noreferrer">Gemini</Link>
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </div>

              <SecretInput
                model={"ChatGPT"}
                value={chatGptToken}
                setValue={setChatGptToken} />

              <SecretInput
                model={"Deepseek"}
                value={deepseekToken}
                setValue={setDeepseekToken} />

              <SecretInput
                model={"Claude"}
                value={claudeToken}
                setValue={setClaudeToken} />

              <SecretInput
                model={"Gemini"}
                value={geminiToken}
                setValue={setGeminiToken} />

              <div className={`flex gap-6 w-full text-subhead-16-sb`}>
                <button
                  className={`w-full h-10 bg-point text-gray-800 rounded-[8px]`}
                  onClick={setSecretKey}>저장</button>
                <button
                  className={`w-full h-10 bg-gray-400 text-gray-50 rounded-[8px]`}
                  onClick={modalClose}>취소</button>
              </div>

            </div>
          </motion.div>
        }
      </AnimatePresence>
    </Portal>
  )

}

export default SettingModal;