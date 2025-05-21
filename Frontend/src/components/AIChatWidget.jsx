import React, { useState, useEffect, useRef } from 'react';
import './AIChatWidget.css';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your shopping assistant. Ask me about products, deals, or anything about our store!", 
      sender: 'ai' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample product database
  const products = [
    { id: 1, name: "iPhone 16", category: "Technology", price: 125999.00, discount: 30 },
    { id: 2, name: "Women's Summer Dress", category: "Women's Fashion", price: 5649.99 },
    { id: 3, name: "Wireless Headphones", category: "Technology", price: 2299.99 },
    { id: 4, name: "Yoga Mat", category: "Sports & Outdoor", price: 1329.99 }
  ];

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI response
  const generateAIResponse = (userMessage) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let response;
      const lowerMessage = userMessage.toLowerCase();

      // Handle different types of queries
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        response = { text: "Hi there! How can I assist you with your shopping today?", sender: 'ai' };
      } 
      else if (lowerMessage.includes('product') || lowerMessage.includes('item')) {
        // Find matching products
        const searchTerm = userMessage.replace(/product|item|search/gi, '').trim();
        const matchedProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (matchedProducts.length > 0) {
          const productList = matchedProducts.map(p => 
            `• ${p.name} (₹${p.price})${p.discount ? ` [${p.discount}% OFF]` : ''}`
          ).join('\n');
          
          response = { 
            text: `I found these products:\n${productList}\n\nWould you like more details about any of these?`,
            sender: 'ai',
            isProductResponse: true,
            products: matchedProducts
          };
        } else {
          response = { 
            text: `I couldn't find products matching "${searchTerm}". Try different keywords or browse our categories.`,
            sender: 'ai' 
          };
        }
      }
      else if (lowerMessage.includes('discount') || lowerMessage.includes('deal')) {
        const discountedProducts = products.filter(p => p.discount);
        const dealList = discountedProducts.map(p => 
          `• ${p.name} - ${p.discount}% OFF (Now ₹${(p.price * (100 - p.discount)/100).toFixed(2)})`
        ).join('\n');
        
        response = {
          text: `Current deals:\n${dealList || 'No current deals found'}`,
          sender: 'ai'
        };
      }
      else {
        response = { 
          text: "I can help you find products, check deals, or answer questions about our store. What would you like to know?",
          sender: 'ai' 
        };
      }

      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, sender: 'user' };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      generateAIResponse(inputValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`ai-chat-widget ${isOpen ? 'open' : ''}`}>
      <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chat-title">
          <span className="ai-icon">🤖</span>
          <span>Shopping Assistant</span>
        </div>
        <div className="chat-toggle">
          {isOpen ? '−' : '+'}
        </div>
      </div>
      
      {isOpen && (
        <div className="chat-content">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {message.isProductResponse && (
                  <div className="product-actions">
                    {message.products.map(product => (
                      <button 
                        key={product.id} 
                        className="product-btn"
                        onClick={() => {
                          setMessages(prev => [...prev, { 
                            text: `₹${product.name}.`,
                            sender: 'ai'
                          }]);
                          // In a real app, you would navigate to product page
                          console.log(`Navigating to product: ${product.name}`);
                        }}
                      >
                        {product.name} - ₹{product.price}
                        {product.discount && <span> ({product.discount}% OFF)</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about products or deals..."
            />
            <button onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;