import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from 'react-markdown'

interface ChatProps {
  text: string;
  messageType: string;
}

const Chat: React.FC<ChatProps> = ({
  text,
  messageType,
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
        ${messageType === "USER" ? `justify-items-end` : `justify-items-start`}
        w-full`}>
        <div
          className={`
          ${messageType === "USER" ? `bg-gray-500` : `bg-gray-600`}
          flex flex-col gap-2.5 rounded-[20px] px-5 py-4 w-fit max-w-full`}>
          {messageType !== "USER" &&
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

          <div className={`text-subhead-16-sb text-gray-50 gap-4 flex flex-col`}>
            {messageType === "USER" ? (
              <p className={`whitespace-pre-line`}>{text}</p>
            ) : (
              <ReactMarkdown>{text}</ReactMarkdown>
            )}
          
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Chat;