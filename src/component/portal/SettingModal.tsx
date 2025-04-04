'use client'

import useModalStore from "@/store/useModalStore";
import Portal from "./Portal";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent } from "react";
import { HelpIcon } from "../../../public/svgs";
import Link from "next/link";

const SettingModal = () => {

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
  const setSecretKey = () => {
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
                    onMouseLeave={() => setIsHelplOpen(false)}/>
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

              <div className={`flex flex-col gap-5 text-gray-50`}>
                <div className={`flex flex-col gap-2.5`}>
                  <p className={`jersey text-[32px]`}>ChatGPT</p>
                  <input
                    className={`py-1 border-b border-gray-500 text-body-14-r placeholder:text-gray-300`}
                    placeholder="Secret Key를 입력해주세요" />
                </div>
                <div className={`flex flex-col gap-2.5`}>
                  <p className={`jersey text-[32px]`}>Deepseek</p>
                  <input
                    className={`py-1 border-b border-gray-500 text-body-14-r placeholder:text-gray-300`}
                    placeholder="Secret Key를 입력해주세요" />
                </div>
                <div className={`flex flex-col gap-2.5`}>
                  <p className={`jersey text-[32px]`}>Claude</p>
                  <input
                    className={`py-1 border-b border-gray-500 text-body-14-r placeholder:text-gray-300`}
                    placeholder="Secret Key를 입력해주세요" />
                </div>
                <div className={`flex flex-col gap-2.5`}>
                  <p className={`jersey text-[32px]`}>Gemini</p>
                  <input
                    className={`py-1 border-b border-gray-500 text-body-14-r placeholder:text-gray-300`}
                    placeholder="Secret Key를 입력해주세요" />
                </div>
              </div>

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