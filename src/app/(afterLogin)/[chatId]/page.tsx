'use client'

import Chat from "@/component/Message/Message";
import ChatInput from "@/component/Message/MessageInput";
import { useState } from "react";

interface Chat {
  id: number;
  text: string;
  isMe: boolean;
}

const PrevChats = [
  { id: 1, text: "안녕하세요", isMe: true, },
  { id: 2, text: "안녕하세요!\n무엇이 궁금하신가요?", isMe: false, },
]

export default function ChatPage() {

  const [newChats, setNewChats] = useState<Chat[] | null>(null);

  return (

    <div className={`w-full h-full content-center`}>
      <div className={`w-full h-full flex items-center justify-center gap-2.5 text-display-24-b text-gray-300 pt-[81px] pb-[112px]`}>

        {PrevChats.length > 0 || newChats !== null ? (
          <div className={`flex flex-col w-full h-full px-8 pt-10 pb-3 gap-3 overflow-auto`}>
            {PrevChats?.map((item) => (
              <Chat
                key={item.id}
                text={item.text}
                isMe={item.isMe} />
            ))}
            {newChats?.map((item) => (
              <Chat
                key={item.id}
                text={item.text}
                isMe={item.isMe} />
            ))}

          </div>
        ) : (
          <p>
            뭘 물어볼래
          </p>
        )}


      </div>
      <ChatInput 
        setNewChats={setNewChats}/>
    </div >
  );
}
