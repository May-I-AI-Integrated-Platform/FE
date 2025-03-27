import React, { useState } from 'react';
import '../../css/home/inputbar.css'
import sendingIcon from '../../../image/sendingIcon.png'


const Inputbar = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="input-area">
      <div className="input-container">
        <form onSubmit={handleSubmit} className="message-form">
          <input
            type="text"
            className="message-input"
            placeholder="텍스트를 입력해주세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={`send-button ${!message.trim() ? 'disabled' : ''}`}
            disabled={!message.trim()}
          >
            <img src={sendingIcon} alt="Send" width="40" height="40" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inputbar;