import React, { useRef, useEffect } from 'react';
import '../../css/home/ChatArea.css';

const ChatArea = ({ messages = [] }) => {
  // 스크롤할 div의 참조를 만듭니다
  const messagesEndRef = useRef(null);

  // 메시지가 추가될 때마다 스크롤을 가장 아래로 이동시키는 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // messages가 변경될 때마다 스크롤을 아래로 내립니다
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-area">
      <div className="chat-messages">
        {messages.length > 0 ? (
          <>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
            {/* 스크롤 위치를 조정하기 위한 빈 div */}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <div className="no-messages">메시지가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ChatArea;