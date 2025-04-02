'use client'

import Header from "@/component/layout/Header";
import useSidebarStore from "@/store/useSidebarStore";
import { AddChatIcon } from "../../../public/svgs";

export default function Home() {

  const {
    isSidebarOpen,
    setIsAddChatOn
  } = useSidebarStore();

  const handleAddChat = (e: MouseEvent) => {
    e.stopPropagation();
    console.log('dsad')
    setIsAddChatOn(true)
  }

  return (
    <div 
      className={`
        ${isSidebarOpen ? `lg:ml-[250px]` : `ml-0`}
        w-screen h-screen transition-all-600-out relative`}>
      <Header/>
      <div className={`w-full h-full content-center`}>
        <div className={`flex items-center justify-center gap-2.5 text-display-24-b  text-gray-300`}>
          <AddChatIcon className={`w-8 cursor-pointer`} onClick={(e: MouseEvent) => handleAddChat(e)}/>
          <p>
            를 눌러 새로운 채팅을 시작해보세요!
          </p>
        </div>
        
      </div>
    </div>
  );
}
