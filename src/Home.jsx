import React, { useState } from 'react'
import Sidebar from './components/home/Sidebar'
import ChatArea from './components/home/ChatArea'
import Inputbar from './components/home/Inputbar'
import Header from './components/home/Header'
import './css/home/home.css'

export default function Home() {

  const [messages, setMessages] = useState([]);
  const [isOpen, setOpen] = useState(true);

  const handleSendMessage = (newMessage) => {
    setMessages([
      ...messages, 
      { 
        id: Date.now(), 
        text: newMessage, 
        sender: 'user' 
      }
    ]);
  };

  return (
    <div className='home'>
    {isOpen ? <Sidebar setOpen={setOpen}/> : <></>}
    <div className='home-contents'>
            <Header />
            <ChatArea messages={messages} />
            <Inputbar onSendMessage={handleSendMessage}/>
        </div>
    </div>
  )
}
