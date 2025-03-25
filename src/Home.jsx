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
      <div className='home-contents'>
          <Header />
          <Chat />
          <Inputbar />
      </div>
    </div>
  )
}
