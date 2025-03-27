import React, { useState } from 'react'
import Header from './components/home/header'
import Sidebar from './components/home/Sidebar'
import Chat from './components/home/Chat'
import Inputbar from './components/home/Inputbar'
import './css/home/home.css'
import TokenSetting from './components/home/TokenSetting'

export default function Home() {
  const [isOpen, setOpen] = useState(true);
  const [isSetting, setSetting] = useState(false);

  return (
    <div className='home'>
      {isOpen ? <Sidebar setOpen={setOpen} setSetting={setSetting}/> : <></>}
      <div className='home-contents' style={isOpen ? {width: '90%'}: {width: "100%"}}>
          <Header isOpen={isOpen} setOpen={setOpen}/>
          <Chat />
          <Inputbar />
      </div>
      {isSetting ? <TokenSetting setSetting={setSetting}/> : <></>}
    </div>
  )
}
