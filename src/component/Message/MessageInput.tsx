'use client'

import { SendIcon } from "../../../public/svgs";
import { Dispatch, SetStateAction, useState } from "react";

interface Chat {
  id: number;
  text: string;
  isMe: boolean;
}

interface ChatInputProps {
  setNewChats: Dispatch<SetStateAction<Chat[] | null>>
}

const ChatInput:React.FC<ChatInputProps> = ({
  setNewChats,
}) => {

  const [text, setText] = useState("");

  const sendMessage = () => {
    setNewChats((prev) => [
      ...(prev ?? []),
      {
        id:Date.now(),
        text,
        isMe: true,
      }
    ])
    setText("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim() !== "") {
      sendMessage();
    }
  }

  return (
    <div className={`absolute bottom-0 w-full px-8 py-7 border-t border-solid border-gray-600`}>
      <div className={`flex justify-between rounded-[32px] px-6 py-4 gap-5 bg-gray-600`}>
        <input
          className={`grow text-subhead-16-sb text-gray-50 placeholder:text-gray-300`}
          placeholder="텍스트를 입력해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}>
        </input>
        <SendIcon 
          className={`
            ${text.trim() === "" ? `text-gray-300` : `text-gray-50`}
            w-6 cursor-pointer`}
          onClick={sendMessage}/>
      </div>
    </div>
  )
}

export default ChatInput;