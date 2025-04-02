'use client'

import { useRouter } from "next/navigation";

interface ChatProps {
  title: string;
  id: number;
}

const Chat:React.FC<ChatProps> = ({
  title,
  id,
}) => {

  const router = useRouter();

  return (
    <div 
      className={`w-full px-3 py-2 rounded-[8px] text-gray-300 cursor-pointer hover:text-gray-50 hover:bg-[rgba(255,255,255,0.05)] transition-all-300-out`}
      onClick={() => router.push(`/${id}`)}>
      {title}
    </div>
  )
}

export default Chat;