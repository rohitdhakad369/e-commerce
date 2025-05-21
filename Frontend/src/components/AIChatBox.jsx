import React, { useState } from 'react';
import axios from 'axios';
import "./AIChatBox.css";

const AIChatBox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        '/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`, // Replace with your actual API key
          },
        }
      );
      const aiMessage = { sender: 'ai', text: response.data.choices[0].message.content };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'ai', text: 'Error: Could not connect to OpenAI' }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="chat-widget">
      <div className="chat-box">
        <div className="chat-header">
          <span>🤖 AI Chat</span>
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask something..."
          />
          <button onClick={handleSend} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatBox;

// AIChatBox
// import "./AIChatWidget.css";