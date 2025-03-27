import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

let chatList = [
  {id: 1, name: '부분함수 종속성asdfasdfasdfasdfasdf'},
  {id: 2, name: '부분함수 종속성'},
  {id: 3, name: '부분함수 종속성'},
  {id: 4, name: '부분함수 종속성'},
  {id: 5, name: '부분함수 종속성'},
];

const submitChatName = (props) => {
  // 작성한 채팅 이름 서버에 전달

  props.setAddChat(false);
}
export default function ChatHistory(props) {
  const [currentChat, setCurrentChat] = useState(0);
  const location = useLocation();

  //url 추출
  useEffect(() => {
    const urlList = location.pathname.split('/');
    if(urlList[1] == "chat")
      setCurrentChat(parseInt(urlList[urlList.length - 1]));
  }, [ location ])

  //chat list 출력
  const chatHistory = chatList.map((chat) =>
    <Link className='chatHistory-chat' to={`/chat/${chat.id}`} style={currentChat == chat.id ? {backgroundColor:'#515151'} : null}>
      <p className='chat-name'>
        {chat.name.length > 10 ? chat.name.slice(0,7) + "..." : chat.name}
      </p>
    </Link>
  );

  return (
    <div className='sidebar-chatHistory'>
      {chatHistory}
      {props.isAddChat ? 
      <form action="" onSubmit={()=>{submitChatName(props)}}>
        <input className='chatHistory-input' type="text" placeholder="new Chat"/>
      </form>
      :<></>}
    </div>
  )
}
