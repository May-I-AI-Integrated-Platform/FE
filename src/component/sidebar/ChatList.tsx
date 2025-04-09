import useSidebarStore from "@/store/useSidebarStore";
import Chat from "./Chat";
import { RefObject, useEffect } from "react";
import AddChatInput from "./AddChatInput";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

interface ChatState {
  chatId: number;
  chatName: string;
}

interface ChatListProps {
  inputRef: RefObject<HTMLInputElement | null>;
  divRef: RefObject<HTMLDivElement | null>;
}

const ChatList: React.FC<ChatListProps> = ({
  inputRef,
  divRef
}) => {

  const getChats = async () => {
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_DOMAIN}/chat/2`)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const { data: Chats } = useQuery({
    queryKey: ['getChats'],
    queryFn: getChats,
  })

  const {
    isAddChatOn,
  } = useSidebarStore();

  useEffect(() => {
    if (isAddChatOn && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddChatOn, inputRef]);

  return (
    <div className={`flex flex-col w-full h-full overflow-auto ${Chats?.result?.length > 0 ? `gap-1` : `gap-4`}`}>
      {Chats?.result?.length > 0 ? (
        <>
          {Chats?.result?.map((item: ChatState, index: number) => (
            <Chat key={index} title={item.chatName} id={item.chatId} />
          ))}
          {isAddChatOn &&
            <AddChatInput
              divRef={divRef}
              inputRef={inputRef} />
          }
        </>
      ) : (
        <>
          {isAddChatOn ? (
            <AddChatInput
              divRef={divRef}
              inputRef={inputRef} />
          ) : (
            <div className={`grow self-center content-center text-center text-gray-300 text-subhead-16-sb`}>
              <p>새로운 채팅을<br />시작해보세요!</p>
            </div>
          )}

        </>
      )}

    </div>
  )
}


export default ChatList;