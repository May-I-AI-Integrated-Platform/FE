'use client'

import { useState } from "react"
import { AccountIcon, SidebarIcon } from "../../../public/svgs";
import useSidebarStorei from "@/store/useSidebarStore";
import { AnimatePresence, motion } from 'framer-motion';
import useModalStore from "@/store/useModalStore";
import AccountModal from "../header/AccountModal";

const Header = () => {

  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useSidebarStorei();

  const {
    setIsAccountModalOpen,
  } = useModalStore();

  const [isChatGptOn, setIsChatGptOn] = useState(false);
  const [isDeepseekOn, setIsDeepseekOn] = useState(false);
  const [isClaudeOn, setIsClaudeOn] = useState(false);
  const [isGeminiOn, setIsGeminiOn] = useState(false);

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
              ${isChatGptOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid  cursor-pointer transition-all-300-out`}
            onClick={() => setIsChatGptOn(!isChatGptOn)}>
            ChatGPT</p>
          <p
            className={`
              ${isDeepseekOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsDeepseekOn(!isDeepseekOn)}>
            Deepseek</p>
          <p
            className={`
              ${isClaudeOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsClaudeOn(!isClaudeOn)}>
            Claude</p>
          <p
            className={`
              ${isGeminiOn ? `text-point border-point` : `text-gray-300 border-gray-300 hover:text-gray-50 hover:border-gray-50`}
              border-b-2 border-solid cursor-pointer transition-all-300-out`}
            onClick={() => setIsGeminiOn(!isGeminiOn)}>
            Gemini</p>

        </div>
        <p>?</p>
      </div>
      <div 
        className={`h-[80px] content-center`}
        onMouseOver={() => setIsAccountModalOpen(true)}
        onMouseOut={() => setIsAccountModalOpen(false)}>
      <AccountIcon
        className={`cursor-pointer w-10`}/>
      <AccountModal />
      </div>
    </div>
  )
}

export default Header;