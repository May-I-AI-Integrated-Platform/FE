import React, { useState } from 'react'
import '../../css/home/sidebar.css'
import TopIcon from './sidebar/TopIcon'
import ChatHistory from './sidebar/ChatHistory'
import SettingIcon from './sidebar/SettingIcon'

export default function Sidebar(props) {
  const [isAddChat, setAddChat] = useState(false);

  return (
    <div className='contents-sidebar'>
      <div>
        <TopIcon setOpen={props.setOpen} setAddChat={setAddChat}/>
        <ChatHistory isAddChat={isAddChat} setAddChat={setAddChat}/>
      </div>
      <div>
        <SettingIcon setSetting={props.setSetting}/>
      </div>
    </div>
  )
}
