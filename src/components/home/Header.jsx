import React, { useState } from 'react';
import '../../css/home/header.css'
import srcSidebarIcon from '../../../image/sidebarIcon.png'

const Header = (props) => {
const [activeTab, setActiveTab] = useState('ChatGPT');

const tabs = ['ChatGPT', 'Copilot', 'Bard', 'Claude'];

  return (
    <header className='header'>
        {props.isOpen ? <></>: 
          <div className='topIcon-sidebar' onClick={()=>{props.setOpen(true)}}>
              <img src= {srcSidebarIcon}/>
          </div>
        }
        <div className='nav-tabs'>May I&nbsp;</div>
        <div className="ai-tabs">
          {tabs.map((tab) => (
            <button 
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className='nav-tabs'>&nbsp;?</div>
        
        <div className="profile">
          <div className="profile-icon"></div>
        </div>
    </header>
  );
};

export default Header;