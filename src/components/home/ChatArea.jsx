import React from 'react';
import '../../css/home/ChatArea.css';

const ChatArea = ({ messages = [] }) => {
  return (
    <div className="chat-area">
      <div className="chat-messages">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {msg.text}
            </div>
          ))
        ) : (
          <div className="no-messages">메시지가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ChatArea;