import useSidebarStore from "@/store/useSidebarStore";
import Chat from "./Chat";
import { RefObject, useEffect } from "react";
import AddChatInput from "./AddChatInput";

const Chats = [
  { title: "부분 함수적 종속성", id: 1 },
  { title: "부분 함수적", id: 2 },
  { title: "부분", id: 3 },
  { title: "부", id: 4 },
  { title: "부부젤라", id: 5 },
]

interface ChatListProps {
  inputRef: RefObject<HTMLInputElement | null>;
  divRef: RefObject<HTMLDivElement | null>;
}

const ChatList: React.FC<ChatListProps> = ({
  inputRef,
  divRef
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
    <div className={`flex flex-col w-full h-full ${Chats.length > 0 ? `gap-1` : `gap-4`}`}>
      {Chats.length > 0 ? (
        <>
          {Chats.map((item, index) => (
            <Chat key={index} title={item.title} id={item.id} />
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