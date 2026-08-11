import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';
import './WhatWouldYouDo.css';

export default function WhatWouldYouDo() {
  const [selectedOption, setSelectedOption] = useState(null);

  const scenario = {
    title: 'Interactive Learning Scenario',
    question: 'Bitcoin price suddenly falls 8% in 30 minutes. What would you do?',
    options: [
      { id: 'A', text: 'Buy immediately because it looks cheap (FOMO / Impulse)' },
      { id: 'B', text: 'Sell everything in panic to avoid further drops' },
      { id: 'C', text: 'Check your predefined strategy & stop-loss rules calmly' },
    ],
    explanation:
      'There isn’t a single universal market action for every situation, but Option C represents disciplined trading. Emotional impulse buying or panic selling often leads to unmanaged losses. A systematic trader follows predefined rules and risk limits.',
  };

  return (
    <section className="wwyd-section">
      <div className="container">
        <div className="wwyd-card glass-card">
          <div className="wwyd-header">
            <div className="wwyd-badge">
              <Sparkles size={14} /> INTERACTIVE QUIZ
            </div>
            <h2>What Would You Do?</h2>
            <p className="wwyd-question">{scenario.question}</p>
          </div>

          <div className="wwyd-options-grid">
            {scenario.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isRecommended = opt.id === 'C';

              return (
                <button
                  key={opt.id}
                  className={`wwyd-opt-btn ${isSelected ? 'selected' : ''} ${isSelected && isRecommended ? 'correct' : ''}`}
                  onClick={() => setSelectedOption(opt.id)}
                >
                  <span className="opt-letter">{opt.id}</span>
                  <span className="opt-text">{opt.text}</span>
                  {isSelected && (
                    <span className="opt-check">
                      <CheckCircle2 size={18} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedOption && (
            <div className="wwyd-result-box glass-card">
              <div className="result-header">
                <CheckCircle2 className="text-gain" size={20} />
                <h4>Educational Insight</h4>
              </div>
              <p className="result-explanation">{scenario.explanation}</p>

              <button className="btn-secondary reset-quiz-btn" onClick={() => setSelectedOption(null)}>
                <RefreshCw size={14} /> Try Another Answer
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
