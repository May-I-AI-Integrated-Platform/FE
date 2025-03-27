import React, { useState } from 'react';
import '../../css/home/header.css'
import srcSidebarIcon from '../../../image/sidebarIcon.png'

const Header = (props) => {
  const [activeTabs, setActiveTabs] = useState(['ChatGPT']);

  const tabs = ['ChatGPT', 'Copilot', 'Bard', 'Claude'];

  const handleTabClick = (tab) => {
    setActiveTabs(prevActiveTabs => {
      // If tab is already active
      if (prevActiveTabs.includes(tab)) {
        // Prevent deselecting if it's the last active tab
        if (prevActiveTabs.length > 1) {
          return prevActiveTabs.filter(t => t !== tab);
        }
        return prevActiveTabs;
      }
      
      // Add the tab to active tabs
      return [...prevActiveTabs, tab];
    });
  };

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
              className={`tab ${activeTabs.includes(tab) ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
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