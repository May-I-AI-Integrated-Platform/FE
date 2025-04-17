'use client'

import { useEffect } from "react"
import { AccountIcon, SidebarIcon } from "../../../public/svgs";
import useSidebarStorei from "@/store/useSidebarStore";
import { AnimatePresence, motion } from 'framer-motion';
import useModalStore from "@/store/useModalStore";
import AccountModal from "../header/AccountModal";
import useUserStore from "@/store/useUserStore";

const Header = () => {

  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useSidebarStorei();

  const {
    isAiOn,
    setIsAiOn,
  } = useUserStore();

  const {
    setIsAccountModalOpen,
  } = useModalStore();

  useEffect(() => {
    setIsSidebarOpen(JSON.parse(localStorage.getItem("isSidebarOpen") || "{ isGptOn: false, isDeepseekOn: false, isClaudeOn: false, isGeminiOn: false"))
  }, [])

  return (
    <div className={`w-full flex absolute justify-between items-center px-10 border-b border-solid border-gray-600 select-none transition-all-300-out`}>
      <div className={`w-[40px] lg:w-[0px] py-5`}>
        <AnimatePresence>
          {!isSidebarOpen &&
            <motion.div
              className={``}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>

              <SidebarIcon
                className={`w-[40px] cursor-pointer`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} />

            </motion.div>
          }
        </AnimatePresence>
      </div>

      <div className={`flex gap-4 jersey text-[40px] py-5 justify-start ${!isSidebarOpen ? `` : `lg:grow`} transition-all-600-out`}>
        <p>May I</p>
        <div className={`flex gap-4 text-[32px] items-center`}>
          <p
            className={`
              ${isAiOn.isGptOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid  cursor-pointer transition-all-300-out`}
            onClick={() => setIsAiOn({
              isGptOn: !isAiOn.isGptOn,
              isDeepseekOn: isAiOn.isDeepseekOn,
              isClaudeOn: isAiOn.isClaudeOn,
              isGeminiOn: isAiOn.isGeminiOn,
            })}>
            ChatGPT</p>
          <p
            className={`
              ${isAiOn.isDeepseekOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsAiOn({
              isGptOn: isAiOn.isGptOn,
              isDeepseekOn: !isAiOn.isDeepseekOn,
              isClaudeOn: isAiOn.isClaudeOn,
              isGeminiOn: isAiOn.isGeminiOn,
            })}>
            Deepseek</p>
          <p
            className={`
              ${isAiOn.isClaudeOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsAiOn({
              isGptOn: isAiOn.isGptOn,
              isDeepseekOn: isAiOn.isDeepseekOn,
              isClaudeOn: !isAiOn.isClaudeOn,
              isGeminiOn: isAiOn.isGeminiOn,
            })}>
            Claude</p>
          <p
            className={`
              ${isAiOn.isGeminiOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsAiOn({
              isGptOn: isAiOn.isGptOn,
              isDeepseekOn: isAiOn.isDeepseekOn,
              isClaudeOn: isAiOn.isClaudeOn,
              isGeminiOn: !isAiOn.isGeminiOn,
            })}>
            Gemini</p>

        </div>
        <p>?</p>
      </div>
      <div
        className={`h-[80px] content-center`}
        onMouseOver={() => setIsAccountModalOpen(true)}
        onMouseOut={() => setIsAccountModalOpen(false)}>
        <AccountIcon
          className={`cursor-pointer w-10`} />
        <AccountModal />
      </div>
    </div>
  )
}

export default Header;