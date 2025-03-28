import React, { useState } from 'react'
import Sidebar from './components/home/Sidebar'
import ChatArea from './components/home/ChatArea'
import Inputbar from './components/home/Inputbar'
import Header from './components/home/Header'
import './css/home/home.css'
import TokenSetting from './components/home/TokenSetting'

export default function Home() {

  const [messages, setMessages] = useState([]);
  const [isOpen, setOpen] = useState(true);
  const [isSetting, setSetting] = useState(false);

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
      {isOpen ? <Sidebar setOpen={setOpen} setSetting={setSetting}/> : <></>}
      <div className='home-contents' style={isOpen ? {width: '90%'}: {width: "100%"}}>
          <Header isOpen={isOpen} setOpen={setOpen}/>
          <ChatArea messages={messages} />
          <Inputbar onSendMessage={handleSendMessage}/>
      </div>
      {isSetting ? <TokenSetting setSetting={setSetting}/> : <></>}
    </div>
  )
}
