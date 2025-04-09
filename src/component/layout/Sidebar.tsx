'use client'

import useSidebarStore from "@/store/useSidebarStore";
import { AddChatIcon, SettingIcon, SidebarIcon } from "../../../public/svgs";
import ChatList from "../sidebar/ChatList";
import { useEffect, useRef } from "react";
import useModalStore from "@/store/useModalStore";
import useUserStore from "@/store/useUserStore";
import { axiosInstance } from "@/apis/axiosInstance";
import { useRouter } from "next/navigation";


const Sidebar = () => {

  const {
    isSidebarOpen,
    setIsSidebarOpen,
    setIsAddChatOn,
  } = useSidebarStore();

  const {
    setIsSettingModalOpen,
  } = useModalStore();

  const {
    setUserEmail,
    setUserName,
    setChatGptToken,
    setDeepseekToken,
    setClaudeToken,
    setGeminiToken,
  } = useUserStore();

  const router = useRouter();

  const chatOnRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatOnRef.current && !chatOnRef.current.contains(event.target as Node) &&
        inputRef.current && !inputRef.current.contains(event.target as Node) &&
        divRef.current && !divRef.current.contains(event.target as Node)
      ) {
        setIsAddChatOn(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsAddChatOn]);

  useEffect(() => {
    setIsSidebarOpen(JSON.parse(localStorage.getItem("isSidebarOpen") || "false"))
  }, [])

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_DOMAIN}/user/data`)
        const tokenList = response?.data?.result?.tokenList;
        setUserEmail(response?.data?.result?.userEmail);
        setUserName(response?.data?.result?.userName);
        setChatGptToken(tokenList[0].value);
        setDeepseekToken(tokenList[1].value);
        setClaudeToken(tokenList[2].value);
        setGeminiToken(tokenList[3].value);
      } catch (e) {
        console.log(e)
        router.push('/');
      }
    }

    getUserInfo();
  }, [])

  return (
    <div
      className={`
        ${isSidebarOpen ? `left-0` : `left-[-250px]`} 
        absolute z-[500] w-[250px] h-screen flex flex-col gap-6 p-6 bg-gray-600 select-none transition-all-600-out`}>
      <div className={`flex justify-between`}>
        <AddChatIcon 
          ref={chatOnRef}
          className={`w-6 cursor-pointer`} 
          onClick={() => setIsAddChatOn(true)}/>
        <SidebarIcon
          className={`w-6 cursor-pointer`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      <ChatList 
        inputRef={inputRef}
        divRef={divRef}/>

      <SettingIcon 
        className={`w-6 cursor-pointer`}
        onClick={() => {setIsSettingModalOpen(true)}}/>
    </div>
  )
}

export default Sidebar;