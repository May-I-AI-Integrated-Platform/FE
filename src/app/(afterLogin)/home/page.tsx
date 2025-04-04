'use client'

import { AddChatIcon } from "../../../../public/svgs";

export default function Home() {

  return (
    <div className={`w-full h-full content-center select-none`}>
      <div className={`flex items-center justify-center gap-2.5 text-display-24-b  text-gray-300`}>
        <AddChatIcon className={`w-8`} />
        <p>
          를 눌러 새로운 채팅을 시작해보세요!
        </p>
      </div>

    </div>
  );
}
