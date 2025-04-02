import useSidebarStore from "@/store/useSidebarStore";
import Chat from "./Chat";
import { RefObject, useEffect } from "react";

const Chats = [
  { title: "부분 함수적 종속성", id: 1 },
  { title: "부분 함수적", id: 2 },
  { title: "부분", id: 3 },
  { title: "부", id: 4 },
  { title: "부부젤라", id: 5 },
]

interface ChatListProps {
  inputRef: RefObject<HTMLInputElement | null>
}

const ChatList: React.FC<ChatListProps> = ({
  inputRef
}) => {

  const {
    isAddChatOn,
  } = useSidebarStore();

  useEffect(() => {
    if (isAddChatOn && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddChatOn, inputRef]);

  return (
    <div className={`flex flex-col w-full h-full ${Chats.length < 0 ? `gap-1` : `gap-4`}`}>
      {Chats.length < 0 ? (
        <>
          {Chats.map((item, index) => (
            <Chat key={index} title={item.title} id={item.id} />
          ))}
          {isAddChatOn &&
            <input
              ref={inputRef}
              className={`z-[10] w-full px-3 py-2 rounded-[8px] border border-gray-50 text-gray-50 text-subhead-16-sb`}>
            </input>
          }
        </>
      ) : (
        <>
          {isAddChatOn ? (
            <input
              ref={inputRef}
              className={`z-[10] w-full px-3 py-2 rounded-[8px] border border-gray-50 text-gray-50 text-subhead-16-sb`}>
            </input>
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