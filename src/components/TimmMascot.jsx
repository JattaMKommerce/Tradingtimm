import React from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';
import './TimmMascot.css';

export default function TimmMascot({ message, tip, onClickExplain, inline = false }) {
  if (inline) {
    return (
      <div className="timm-inline-guide">
        <div className="timm-avatar-small">
          <Sparkles className="timm-sparkle-icon" size={16} />
        </div>
        <div className="timm-inline-text">
          <span className="timm-name">Timm AI Guide:</span> {message}
          {tip && <span className="timm-tip"> {tip}</span>}
        </div>
        {onClickExplain && (
          <button className="timm-explain-btn" onClick={onClickExplain}>
            <HelpCircle size={14} /> Explain
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="timm-floating-card glass-card">
      <div className="timm-header">
        <div className="timm-avatar">
          <Sparkles className="timm-sparkle-icon" size={20} />
        </div>
        <div>
          <span className="timm-title">Timm AI Mascot</span>
          <span className="timm-subtitle">Your Friendly Trading Guide</span>
        </div>
      </div>
      <p className="timm-message">{message}</p>
      {tip && <p className="timm-tip-box">💡 <strong>Pro Tip:</strong> {tip}</p>}
      {onClickExplain && (
        <button className="btn-secondary timm-action-btn" onClick={onClickExplain}>
          <HelpCircle size={16} /> Explain Like I'm New
        </button>
      )}
    </div>
  );
}
