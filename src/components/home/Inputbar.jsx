import React, { useState } from 'react';
import '../../css/home/inputbar.css'


const Inputbar = ({ onSendMessage } ) => {
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inputbar;