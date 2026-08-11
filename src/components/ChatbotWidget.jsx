import React, { useState, useEffect } from 'react';
import botVideo from '../video/botvideo.mp4';
import './ChatbotWidget.css';

const CHAT_IFRAME_URL = 'https://iamkratu.ai/customer-chat/?key=5214c44fdd3ba3942f45b94e7ae4a68f';

const PROMPT_MESSAGES = [
  "👋 Need help building or testing trading strategies? Ask Kratu AI!",
  "💡 Have questions about technical analysis & indicators? I'm here to help!",
  "⚡ Want to explore stock markets & automated trading ideas? Click to chat!"
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTeaserVisible, setIsTeaserVisible] = useState(false);
  const [isTeaserDismissed, setIsTeaserDismissed] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Show teaser after 1.5 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isTeaserDismissed && !isOpen) {
        setIsTeaserVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isTeaserDismissed, isOpen]);

  // Cycle messages every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % PROMPT_MESSAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsTeaserVisible(false);
      }
      return next;
    });
  };

  const handleDismissTeaser = (e) => {
    e.stopPropagation();
    setIsTeaserVisible(false);
    setIsTeaserDismissed(true);
  };

  return (
    <div className="chatbot-widget-root">
      {/* Floating Teaser Callout Popup Bubble */}
      {isTeaserVisible && !isOpen && (
        <div className="chatbot-teaser-bubble" onClick={toggleChat}>
          <div className="chatbot-teaser-header">
            <div className="chatbot-teaser-botinfo">
              <div className="chatbot-mini-face">
                <video src={botVideo} autoPlay loop muted playsInline />
              </div>
              <span className="chatbot-teaser-name">Kratu AI Assistant</span>
            </div>
            <button
              className="chatbot-teaser-close"
              onClick={handleDismissTeaser}
              title="Dismiss popup"
              aria-label="Dismiss popup"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-teaser-msg">
            {PROMPT_MESSAGES[msgIndex]}
          </div>

          <div className="chatbot-teaser-footer">
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Click to ask anything</span>
            <button className="chatbot-teaser-cta">
              Chat Now 💬
            </button>
          </div>
        </div>
      )}

      {/* Chat Iframe Window Modal */}
      {isOpen && (
        <div className={`chatbot-modal-window ${isExpanded ? 'expanded' : ''}`}>
          {/* Header */}
          <div className="chatbot-modal-header">
            <div className="chatbot-header-bot">
              <div className="chatbot-header-avatar">
                <video src={botVideo} autoPlay loop muted playsInline />
              </div>
              <div className="chatbot-header-info">
                <span className="chatbot-header-title">Kratu AI Assistant</span>
                <span className="chatbot-header-status">
                  <span className="chatbot-status-dot-small"></span> Online
                </span>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <button
                className="chatbot-header-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Restore size" : "Expand size"}
                aria-label="Toggle size"
              >
                {isExpanded ? "↙" : "↗"}
              </button>
              <button
                className="chatbot-header-btn"
                onClick={toggleChat}
                title="Close chat"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Iframe Body */}
          <div className="chatbot-modal-body">
            {!iframeLoaded && (
              <div className="chatbot-loading-spinner">
                <div className="chatbot-spin-ring"></div>
                <span>Connecting to Kratu AI...</span>
              </div>
            )}
            <iframe
              src={CHAT_IFRAME_URL}
              title="Kratu AI Customer Chat"
              className="chatbot-iframe"
              onLoad={() => setIframeLoaded(true)}
              allow="clipboard-write; microphone; camera"
            />
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button with Face Crop */}
      <button
        className="chatbot-trigger-btn"
        onClick={toggleChat}
        title={isOpen ? "Close Chat" : "Open Kratu AI Chat"}
        aria-label="Open Kratu AI Chat"
      >
        <div className="chatbot-video-cropper">
          <video src={botVideo} autoPlay loop muted playsInline className="chatbot-face-video" />
        </div>
        <span className="chatbot-online-badge"></span>
        {isOpen && <div className="chatbot-close-overlay">✕</div>}
      </button>
    </div>
  );
}
