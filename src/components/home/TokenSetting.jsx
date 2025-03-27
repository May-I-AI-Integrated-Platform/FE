import React from 'react'
import '../../css/home/tokenSetting.css'

export default function TokenSetting() {
  return (
    <div className='tokenSetting-home'>
      <form action="" className='container-tokenSetting'>
        <p className='title-container'>Token Setting</p>
        <div className='detail-container'>
          <p className='name-detail'>ChatGPT</p>
          <input type="text" className='input-detail' />
        </div>
        <div className='detail-container'>
          <p className='name-detail'>Copliot</p>
          <input type="text" className='input-detail' />
        </div>
        <div className='detail-container'>
          <p className='name-detail'>Bard</p>
          <input type="text" className='input-detail' />
        </div>
        <div className='detail-container'>
          <p className='name-detail'>Claude</p>
          <input type="text" className='input-detail' />
        </div>
        <div className='button-container'>
          <button className='cancel-button'>취소</button>
          <button type="submit" className='submit-button'>저장</button>
        </div>
      </form>
    </div>
  )
}
