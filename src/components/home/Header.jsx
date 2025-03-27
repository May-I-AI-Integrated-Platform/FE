import React, { useState } from 'react';
import '../../css/home/header.css'
import srcSidebarIcon from '../../../image/sidebarIcon.png'

const userData = {
  userId: 1,
  name: "test",
  email: "test@gmail.com",
  profileImg: "https://umc7theatthis.s3.ap-northeast-2.amazonaws.com/mealimg/15a1bf57-665c-4d31-ba08-d573a7db4ad31739172128859.jpeg",
}

const Header = (props) => {
  const [activeTabs, setActiveTabs] = useState(['ChatGPT']);
  const [isClickProfile, setClickProfile] = useState(false);

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
        
        <div className="profile" onClick={()=>setClickProfile(!isClickProfile)}>
          <div className="profile-icon"></div>
        </div>
        {
          isClickProfile?
          <div className='modal-header'>
            <div className='profile-modal'>
              <img src={`${userData.profileImg}`} alt="" className='image-modal'/>
              <div>
                <p className='name-modal'>{`${userData.name}`}</p>
                <p className='email-modal'>{`${userData.email}`}</p>
              </div>
            </div>
            <button className='logout-modal'>로그아웃</button>
          </div>:
          <></>
        }
        
    </header>
  );
};

export default Header;