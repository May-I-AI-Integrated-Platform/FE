import React from 'react'
import srcNewChatIcon from '../../../../image/newChatIcon.png'
import srcSidebarIcon from '../../../../image/sidebarIcon.png'

export default function TopIcon() {
  return (
    <div className='sidebar-topIcon'>
        <div className='topIcon-newChat'>
            <img src= {srcNewChatIcon}/>
        </div>
        <div className='topIcon-sidebar'>
            <img src= {srcSidebarIcon}/>
        </div>
    </div>
  )
}
