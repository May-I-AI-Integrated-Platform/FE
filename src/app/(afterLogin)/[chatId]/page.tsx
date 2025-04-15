'use client'

import { axiosInstance } from "@/apis/axiosInstance";
import Chat from "@/component/Message/Message";
import MessageInput from "@/component/Message/MessageInput";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface Message {
  messageType: string;
  text: string;
}

export default function ChatPage() {

  const [newMessages, setNewMessages] = useState<Message[] | null>(null);

  const {chatId} = useParams();

  const messagesDivRef = useRef<HTMLDivElement>(null);

  const getMessages = async () => {
    
    try {
      const response = await axiosInstance(`${process.env.NEXT_PUBLIC_DOMAIN}/message/${chatId}`);

      return response.data.result.messages;
    } catch (e) {
      console.log(e)

    }
  }

  const {data: prevMessages} = useQuery({
    queryKey: ['getMessages'],
    queryFn: getMessages,
  });

  useEffect(() => {
    if (messagesDivRef.current){
      messagesDivRef.current.scrollTo({
        top: messagesDivRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [newMessages, prevMessages])

  return (

    <div className={`w-full h-full content-center`}>
      <div 
        className={`w-full h-full flex items-center justify-center gap-2.5 text-display-24-b text-gray-300 pt-[81px] pb-[112px]`}>

        {prevMessages?.length > 0 || newMessages !== null ? (
          <div 
            ref={messagesDivRef}
            className={`flex flex-col w-full h-full px-8 pt-10 pb-3 gap-3 overflow-auto`}>
            {prevMessages?.map((item: Message, index: number) => (
              <Chat
                key={index}
                messageType={item.messageType}
                text={item.text} />
            ))}
            {newMessages?.map((item, index) => (
              <Chat
                key={index}
                messageType={item.messageType}
                text={item.text}/>
            ))}

          </div>
        ) : (
          <p>
            무엇이 궁금하신가요?
          </p>
        )}


      </div>
      <MessageInput
        setNewMessages={setNewMessages}/>
    </div >
  );
}
