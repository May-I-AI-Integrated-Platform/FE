'use client'

import useSidebarStore from "@/store/useSidebarStore";
import { AddChatIcon, SettingIcon, SidebarIcon } from "../../../public/svgs";
import ChatList from "../sidebar/ChatList";
import { useEffect, useRef } from "react";
import useModalStore from "@/store/useModalStore";


const Sidebar = () => {

  const {
    isSidebarOpen,
    setIsSidebarOpen,
    setIsAddChatOn,
  } = useSidebarStore();

  const {
    setIsSettingModalOpen,
  } = useModalStore();

  const chatOnRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatOnRef.current && !chatOnRef.current.contains(event.target as Node) &&
        inputRef.current && !inputRef.current.contains(event.target as Node)
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

      <ChatList inputRef={inputRef}/>

      <SettingIcon 
        className={`w-6 cursor-pointer`}
        onClick={() => {setIsSettingModalOpen(true); console.log("asd")}}/>
    </div>
  )
}

export default Sidebar;