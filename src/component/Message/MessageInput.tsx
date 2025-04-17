'use client'

import { axiosInstance } from "@/apis/axiosInstance";
import { SendIcon } from "../../../public/svgs";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import useUserStore from "@/store/useUserStore";

interface Message {
  messageType: string;
  text: string;
}

interface Messages {
  isUser: boolean;
  messages: Message[];
}

interface ChatInputProps {
  setNewMessages: Dispatch<SetStateAction<Messages[] | null>>;
}

const MessageInput: React.FC<ChatInputProps> = ({
  setNewMessages,
}) => {

  const {
    isAiOn,
  } = useUserStore();

  const [text, setText] = useState("");

  const [aiStates, setAiStates] = useState<string[]>([]);

  const [isPending, setIsPending] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { chatId } = useParams();

  const sendMessage = async () => {
    if (!isPending && aiStates.length !== 0) {
      setIsPending(true)
      try {
        setNewMessages((prev) => [
          ...(prev ?? []),
          {
            isUser: true,
            messages: [
              {
                messageType: "USER",
                text,
              }
            ]
          }
        ])
        setText("")
        if (textareaRef.current) {
          textareaRef.current.style.height = "20px";
        }

        setNewMessages((prev) => [
          ...(prev ?? []),
          {
            isUser: false,
            messages: [
              {
                messageType: "ISPENDING",
                text: "로딩 중",
              }
            ]
          }
        ])

        const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_DOMAIN}/message`, {
          chatId,
          aiTypeList: aiStates,
          text,
        })

        const messageList = response?.data?.result?.responseDTOList;

        setNewMessages((prev) => {

          if (!prev) return [];

          const updated = prev.map((msg) =>
            msg.messages[0].messageType === "ISPENDING"
              ? {
                isUser: false,
                messages: messageList.map((item: Message) => ({
                  messageType: item.messageType,
                  text: item.text,
                }))
              }
              : msg
          );

          return updated;
        })

      } catch (e) {
        console.log(e)
      }

      setIsPending(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && text.trim() !== "") {
      e.preventDefault();
      sendMessage();
    }
  }

  useEffect(() => {
    const temp = [
      isAiOn.isGptOn && "GPT",
      isAiOn.isDeepseekOn && "DEEPSEEK",
      isAiOn.isClaudeOn && "CLAUDE",
      isAiOn.isGeminiOn && "BARD"
    ].filter(Boolean) as string[];

    setAiStates(temp);
  }, [isAiOn])

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";

      const height = textareaRef.current.scrollHeight;

      textareaRef.current.style.height = `${height < 150 ? height : `150`}px`;
    }
  }

  return (
    <div className={`absolute bottom-0 w-full px-8 py-7 border-t border-solid border-gray-600 bg-gray-700`}>
      <div className={`flex justify-between items-center rounded-[32px] px-6 py-4 gap-5 bg-gray-600 `}>
        <textarea
          ref={textareaRef}
          className={`grow text-subhead-16-sb text-gray-50 placeholder:text-gray-300 outline-0 resize-none h-5`}
          placeholder="텍스트를 입력해주세요"
          value={text}
          onChange={(e) => handleTextarea(e)}
          onKeyDown={(e) => handleKeyDown(e)}>
        </textarea>
        <SendIcon
          className={`
            ${text.trim() === "" || isPending || aiStates.length === 0 ? `text-gray-300` : `text-gray-50`}
            w-6 cursor-pointer`}
          onClick={sendMessage} />
      </div>
    </div>
  )
}

export default MessageInput;