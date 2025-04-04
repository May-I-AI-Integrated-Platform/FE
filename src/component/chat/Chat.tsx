import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ChatProps {
  text: string;
  isMe: boolean;
}

const Chat: React.FC<ChatProps> = ({
  text,
  isMe,
}) => {

  const [currentModel, setCurrentModel] = useState('ChatGPT');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className={`
        ${isMe ? `justify-items-end` : `justify-items-start`}
        w-full`}>
        <div
          className={`
          ${isMe ? `bg-gray-500` : `bg-gray-600`}
          flex flex-col gap-2.5 rounded-[20px] px-5 py-4 w-fit`}>
          {!isMe &&
            <div className={`flex gap-2.5 text-gray-300 jersey text-[14px] font-medium select-none cursor-pointer`}>
              <p
                className={`
                ${currentModel === 'ChatGPT' ? `text-point` : `hover:text-gray-50`} 
                transition-all-300-out`}
                onClick={() => setCurrentModel('ChatGPT')}>ChatGPT
              </p>
              <p
                className={`
                ${currentModel === 'Deepseek' ? `text-point` : `hover:text-gray-50`} 
                transition-all-300-out`}
                onClick={() => setCurrentModel('Deepseek')}>Deepseek
              </p>
              <p
                className={`
                ${currentModel === 'Claude' ? `text-point` : `hover:text-gray-50`} 
                transition-all-300-out`}
                onClick={() => setCurrentModel('Claude')}>Claude
              </p>
              <p
                className={`
                ${currentModel === 'Gemini' ? `text-point` : `hover:text-gray-50`} 
                transition-all-300-out`}
                onClick={() => setCurrentModel('Gemini')}>Gemini
              </p>
            </div>
          }
          <p className={`text-subhead-16-sb text-gray-50`}>{text}</p>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Chat;