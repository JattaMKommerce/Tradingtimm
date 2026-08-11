import React, { useState, useEffect } from 'react';
import './ChatbotPopup.css';

const POPUP_MESSAGES = [
  "👋 Need help building or testing trading strategies? Ask Kratu AI!",
  "💡 Have questions about market indicators or technical analysis? Chat with me!",
  "⚡ Want to explore stock markets & automated trading ideas? I'm ready to help!"
];

export default function ChatbotPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // Show popup after 1.5 seconds delay on initial load
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  useEffect(() => {
    // Cycle through messages every 8 seconds if popup remains open
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % POPUP_MESSAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Listen for DOM changes to detect when aiChatWindow receives active class
    const checkChatState = () => {
      const chatWin = document.getElementById('aiChatWindow');
      if (chatWin) {
        const active = chatWin.classList.contains('active');
        setIsChatOpen(active);
      }
    };

    const interval = setInterval(checkChatState, 500);
    return () => clearInterval(interval);
  }, []);

  const handleOpenChat = () => {
    if (window.aiWidget) {
      window.aiWidget.toggle();
    } else {
      const chatBtn = document.getElementById('aiChatButton');
      if (chatBtn) chatBtn.click();
    }
    setIsVisible(false);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
  };

  // If user dismissed it or chat window is currently active, hide the callout bubble
  if (!isVisible || isDismissed || isChatOpen) {
    return null;
  }

  return (
    <div className="chatbot-popup-container">
      <div className="chatbot-popup-card" onClick={handleOpenChat}>
        <div className="chatbot-popup-header">
          <div className="chatbot-popup-title">
            <span>🤖</span>
            <span className="bot-name">Kratu AI Assistant</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="chatbot-status-badge">
              <span className="chatbot-status-dot"></span>
              Online
            </div>
            <button
              className="chatbot-popup-close"
              onClick={handleDismiss}
              title="Dismiss popup message"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="chatbot-popup-body">
          {POPUP_MESSAGES[msgIndex]}
        </div>

        <div className="chatbot-popup-action">
          <span className="chatbot-popup-hint">Click anywhere to start</span>
          <button className="chatbot-popup-cta">
            Chat Now 💬
          </button>
        </div>
      </div>
    </div>
  );
}
