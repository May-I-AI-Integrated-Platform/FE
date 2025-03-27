import React from 'react'
import srcSettingIcon from '../../../../image/settingIcon.png'

export default function SettingIcon(props) {
  return (
    <div className='sidebar-settingIcon'>
        <div className='settingIcon-icon' onClick={()=>{props.setSetting(true)}}>
            <img src= {srcSettingIcon}/>
        </div>
    </div>
  )
}
