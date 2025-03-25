import React from 'react'
import '../../css/home/sidebar.css'
import TopIcon from './sidebar/TopIcon'
import ChatHistory from './sidebar/ChatHistory'
import SettingIcon from './sidebar/SettingIcon'

export default function Sidebar(props) {
  return (
    <div className='contents-sidebar'>
      <div>
        <TopIcon setOpen={props.setOpen}/>
        <ChatHistory />
      </div>
      <div>
        <SettingIcon />
      </div>
    </div>
  )
}
