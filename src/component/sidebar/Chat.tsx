'use client'

import { useParams, useRouter } from "next/navigation";

interface ChatProps {
  title: string;
  id: number;
}

const Chat:React.FC<ChatProps> = ({
  title,
  id,
}) => {

  const { chatId } = useParams();

  const router = useRouter();

  return (
    <div 
      className={`${Number(chatId) === id ? `text-gray-50 bg-[rgba(255,255,255,0.04)]` : `text-gray-300 hover:text-gray-50`}
        w-full px-3 py-2 rounded-[8px] cursor-pointer hover:bg-[rgba(255,255,255,0.08)] transition-all-300-out`}
      onClick={() => router.push(`/${id}`)}>
      {title}
    </div>
  )
}

export default Chat;