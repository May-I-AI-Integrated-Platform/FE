import React from 'react'

let chatList = [
  {id: 1, name: '부분함수 종속성asdfasdfasdfasdfasdf'},
  {id: 2, name: '부분함수 종속성'},
  {id: 3, name: '부분함수 종속성'},
  {id: 4, name: '부분함수 종속성'},
  {id: 5, name: '부분함수 종속성'},
];

const chatHistory = chatList.map((chat) =>
  <div className='chatHistory-chat'>
    <p className='chat-name'>
      {chat.name.length > 20 ? chat.name.slice(0,20) + "..." : chat.name}
    </p>
  </div>
);

const submitChatName = (props) => {
  // 작성한 채팅 이름 서버에 전달

  props.setAddChat(false);
}
export default function ChatHistory(props) {
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
