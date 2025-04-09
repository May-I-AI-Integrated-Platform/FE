import { RefObject, useState } from "react";
import { AddChatIcon } from "../../../public/svgs";
import { axiosInstance } from "@/apis/axiosInstance";
import useSidebarStore from "@/store/useSidebarStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AddChatInputProps {
  divRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
}

const AddChatInput = ({
  divRef,
  inputRef,
}: AddChatInputProps) => {

  const queryClient = useQueryClient();

  const [chatName, setChatName] = useState("");

  const {
    setIsAddChatOn,
  } = useSidebarStore();

  const addChat = async () => {
    try {
        await axiosInstance.post(`${process.env.NEXT_PUBLIC_DOMAIN}/chat`, {
        userId: 2,
        chatName: chatName,
      })
      setIsAddChatOn(false);
    } catch (e) {
      console.log(e)
    }
  }

  const { mutate } = useMutation({
    mutationFn: addChat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getChats'] })
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && chatName.trim() !== "") {
      mutate();
    }
  }

  return (
    <div
      ref={divRef}
      className={`flex flex-row items-center  gap-2.5 z-[10] w-full pl-3 pr-2 py-2  rounded-[8px] border border-gray-50`}>
      <input
        ref={inputRef}
        className={`text-gray-50 text-subhead-16-sb w-full h-5`}
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}>
      </input>
      <AddChatIcon
        className={`w-5 cursor-pointer`}
        onClick={mutate} />
    </div>
  )
}

export default AddChatInput;