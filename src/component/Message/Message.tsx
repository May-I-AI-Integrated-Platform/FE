import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from 'react-markdown'
import { ClipLoader } from "react-spinners";
import useMessageType from "@/hooks/useMessageType";

interface Message {
  messageType: string;
  text: string;
}

interface Messages {
  isUser: boolean;
  messages: Message[];
}

const Message: React.FC<Messages> = ({
  isUser,
  messages,
}) => {

  const [initialModel, setInitialMode] = useState("");
  const [currentModel, setCurrentModel] = useState(initialModel);
  
  const currentText = useMessageType(currentModel, messages)

  useEffect(() => {
    if (messages.length > 0)
    switch (messages[0].messageType) {
      case "GPT":
        setInitialMode("ChatGPT")
        break;
  
      case "DEEPSEEK":
        setInitialMode("Deepseek")
        break;
  
      case "CLAUDE":
        setInitialMode("Claude")
        break;
  
      case "BARD":
        setInitialMode("Gemini")
        break;
  
      default:
        setInitialMode("")
        break;
    }
  }, [messages[0]?.messageType])

  

  useEffect(() => {
    setCurrentModel(initialModel)
  }, [initialModel])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className={`
        ${isUser ? `justify-items-end` : `justify-items-start`}
        w-full transition-all-300-out`}>
        <div
          className={`
          ${isUser ? `bg-gray-500` : `bg-gray-600`}
          flex flex-col gap-2.5 rounded-[20px] px-5 py-4 w-fit max-w-full transition-all-300-out`}>

          {messages[0].messageType === "ISPENDING" ? (
            <ClipLoader
              className={`w-5 h-5`}
              color="#333333"
              cssOverride={{}}
              loading
              size={35}
              speedMultiplier={0.7}
            />
          ) : (
            <>
              {!isUser &&
                <div className={`flex gap-2.5 text-gray-300 jersey text-[14px] font-medium select-none`}>
                  {messages?.map((item, index) => {

                    let model: string;

                    switch (item.messageType) {
                      case "GPT":
                        model = "ChatGPT"
                        break;

                      case "DEEPSEEK":
                        model = "Deepseek"
                        break;

                      case "CLAUDE":
                        model = "Claude"
                        break;

                      case "BARD":
                        model = "Gemini"
                        break;

                      default:
                        model = ""
                        break;
                    }

                    return (
                      <p
                        key={index}
                        className={`
                          ${currentModel === model ? `text-point` : `hover:text-gray-50`} 
                          cursor-pointer transition-all-300-out`}
                        onClick={() => setCurrentModel(model)}>{model}
                      </p>
                    )
                  })}
                </div>
              }

              <div className={`text-subhead-16-sb text-gray-50 gap-4 flex flex-col transition-all-300-out`}>
                {isUser ? (
                  <p className={`whitespace-pre-line transition-all-300-out`}>{messages[0].text}</p>
                ) : (
                  <div className={`transition-all-300-out`}>
                    <ReactMarkdown>{currentText}</ReactMarkdown>
                  </div>
                )}

              </div>
            </>
          )}
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Message;