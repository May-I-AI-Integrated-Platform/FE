import React from 'react'
import srcNewChatIcon from '../../../../image/newChatIcon.png'
import srcSidebarIcon from '../../../../image/sidebarIcon.png'

export default function TopIcon(props) {
  return (
    <div className='sidebar-topIcon'>
        <div className='topIcon-newChat' onClick={()=>{props.setAddChat(true)}}>
            <img src= {srcNewChatIcon}/>
        </div>
        <div className='topIcon-sidebar' onClick={()=>{props.setOpen(false)}}>
            <img src= {srcSidebarIcon}/>
        </div>
    </div>
  )
}
