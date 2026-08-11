import React from 'react';
import { X, HelpCircle, AlertCircle, Lightbulb } from 'lucide-react';
import './ExplainModal.css';

export default function ExplainModal({ isOpen, onClose, title, explanation, simpleVersion, guaranteeAnswer }) {
  if (!isOpen) return null;

  return (
    <div className="explain-modal-overlay" onClick={onClose}>
      <div className="explain-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="explain-modal-header">
          <div className="explain-title-wrapper">
            <HelpCircle className="explain-icon" size={24} />
            <div>
              <h3>Explain Like I'm New</h3>
              <span className="explain-subtitle">{title}</span>
            </div>
          </div>
          <button className="explain-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="explain-modal-body">
          {/* Section 1: Standard Explanation */}
          <div className="explain-section">
            <h4><Lightbulb size={16} /> What does this mean?</h4>
            <p>{explanation}</p>
          </div>

          {/* Section 2: Simple Version */}
          {simpleVersion && (
            <div className="explain-section simple-highlight">
              <h4>🎯 Simple Version</h4>
              <p>{simpleVersion}</p>
            </div>
          )}

          {/* Section 3: Responsible Warning — Does this guarantee what happens next? */}
          <div className="explain-section guarantee-warning">
            <h4><AlertCircle size={16} /> Does this automatically mean BUY or SELL?</h4>
            <p>
              {guaranteeAnswer || "No. Market indicators describe past price behavior to help analyze momentum. No single indicator guarantees future price movement or risk-free results."}
            </p>
          </div>
        </div>

        <div className="explain-modal-footer">
          <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
            Got It! Return to Platform
          </button>
        </div>
      </div>
    </div>
  );
}
