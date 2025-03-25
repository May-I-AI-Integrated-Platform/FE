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

export default function ChatHistory() {
  return (
    <div className='sidebar-chatHistory'>
      {chatHistory}
    </div>
  )
}
