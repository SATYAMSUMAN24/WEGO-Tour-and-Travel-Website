
import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your WeGo Travel Assistant. How can I help you plan your perfect trip today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Travel-related responses
    if (lowerMessage.includes('thailand') || lowerMessage.includes('bangkok') || lowerMessage.includes('phuket')) {
      return "Thailand is amazing! 🇹🇭 We offer incredible packages starting from $149 for 3 days. You can explore Bangkok's vibrant street life, relax on Phuket's pristine beaches, or discover Chiang Mai's cultural treasures. Would you like me to help you customize a Thailand package?";
    }
    
    if (lowerMessage.includes('indonesia') || lowerMessage.includes('bali') || lowerMessage.includes('jakarta')) {
      return "Indonesia is a tropical paradise! 🏝️ Our Bali packages start from $139 for 3 days. Experience stunning temples, beautiful beaches, rich culture, and amazing cuisine. From Ubud's rice terraces to Bali's sunset beaches - it's pure magic! Interested in booking?";
    }
    
    if (lowerMessage.includes('malaysia') || lowerMessage.includes('kuala lumpur') || lowerMessage.includes('langkawi')) {
      return "Malaysia offers the perfect blend of modern cities and natural beauty! 🏙️ Our packages start from $189 for 3 days. Visit the iconic Petronas Towers, explore Penang's heritage, or relax in Langkawi. The food scene is incredible too! What interests you most?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      return "Our tour packages are very affordable! 💰 Prices start from:\n• Thailand: $149 (3 days)\n• Indonesia: $139 (3 days)\n• Malaysia: $189 (3 days)\n\nAll packages include accommodation, guided tours, and meals. We also offer customized packages based on your budget. What's your preferred destination?";
    }
    
    if (lowerMessage.includes('booking') || lowerMessage.includes('book') || lowerMessage.includes('reserve')) {
      return "I'd love to help you book your dream trip! 📅 You can:\n1. Use our online booking form\n2. Call us at +91 123456789\n3. Email us at info@example.com\n\nWe offer instant confirmation and 24/7 support. Which destination caught your eye?";
    }
    
    if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation') || lowerMessage.includes('stay')) {
      return "We provide handpicked hotels and 5-star accommodations! 🏨 All our packages include:\n• Luxury hotels and resorts\n• Prime locations\n• Excellent amenities\n• Great reviews from travelers\n\nYour comfort is our priority. Any specific preferences for your stay?";
    }
    
    if (lowerMessage.includes('guide') || lowerMessage.includes('tour guide')) {
      return "Our expert travel guides make all the difference! 👨‍🎓 They provide:\n• Local insights and hidden gems\n• Historical and cultural knowledge\n• Language assistance\n• 24/7 support during your trip\n\nOur guides are passionate locals who love sharing their culture. Ready to explore with us?";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! 👋 Welcome to WeGo Travels! I'm here to help you discover amazing destinations across Asia. We specialize in Thailand, Indonesia, Malaysia, and more. What kind of adventure are you looking for?";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('assistance')) {
      return "I'm here to help! 🤝 I can assist you with:\n• Destination recommendations\n• Package pricing and details\n• Booking information\n• Travel tips and advice\n• Custom itinerary planning\n\nWhat would you like to know about your next adventure?";
    }
    
    if (lowerMessage.includes('duration') || lowerMessage.includes('days') || lowerMessage.includes('how long')) {
      return "We offer flexible trip durations! ⏰\n• Quick getaways: 3-5 days\n• Standard tours: 7-10 days\n• Extended adventures: 14+ days\n\nWe can customize the duration based on your schedule and preferences. How much time do you have for your next adventure?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's interesting! Let me help you plan an amazing trip. Which destination interests you most - Thailand, Indonesia, or Malaysia?",
      "I'd love to help you with that! WeGo Travels offers incredible experiences across Asia. What type of adventure are you looking for?",
      "Great question! Our team has 15 years of experience creating unforgettable trips. How can I assist you in planning your perfect getaway?",
      "I'm here to make your travel dreams come true! Whether you're interested in cultural experiences, beach relaxation, or adventure - we've got you covered. What sounds appealing to you?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: generateResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your best packages?",
    "How much does Thailand cost?",
    "Tell me about Bali tours",
    "How do I book a trip?"
  ];

  return (
    <>
      {/* AI Assistant Button */}
      <div 
        className={`ai-assistant-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="button-content">
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <>
              <i className="fas fa-robot"></i>
              <span className="pulse-ring"></span>
            </>
          )}
        </div>
      </div>

      {/* AI Assistant Chat Window */}
      <div className={`ai-assistant-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="assistant-info">
            <div className="assistant-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div className="assistant-details">
              <h4>WeGo AI Assistant</h4>
              <span className="status">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {message.content}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="quick-questions">
          {quickQuestions.map((question, index) => (
            <button 
              key={index}
              className="quick-question-btn"
              onClick={() => {
                setInputMessage(question);
                setTimeout(() => handleSendMessage(), 100);
              }}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <div className="input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your travel plans..."
              rows={1}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="send-button"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
