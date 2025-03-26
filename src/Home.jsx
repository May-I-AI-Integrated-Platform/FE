import React, { useState } from 'react'
import Header from './components/home/header'
import Sidebar from './components/home/Sidebar'
import Chat from './components/home/Chat'
import Inputbar from './components/home/Inputbar'
import './css/home/home.css'

export default function Home() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className='home'>
      {isOpen ? <Sidebar setOpen={setOpen}/> : <></>}
      <div className='home-contents' style={isOpen ? {width: '90%'}: {width: "100%"}}>
          <Header isOpen={isOpen} setOpen={setOpen}/>
          <Chat />
          <Inputbar />
      </div>
    </div>
  )
}
