import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';
import ExplainModal from './ExplainModal';
import './WhatIsTrading.css';

export default function WhatIsTrading() {
  const [activeTab, setActiveTab] = useState('profit-scenario'); // 'profit-scenario' | 'loss-scenario'
  const [explainState, setExplainState] = useState(null);

  return (
    <section className="what-is-trading-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Simplest Concept First</span>
          <h2>What Is Trading?</h2>
          <p>
            Trading means buying and selling financial assets (like stocks, currencies, or crypto) with the goal of benefiting from price changes over time.
          </p>
        </div>

        {/* Visual Interactive Price Movement Demo */}
        <div className="trading-demo-card glass-card">
          <div className="scenario-switcher">
            <button
              className={`scenario-btn ${activeTab === 'profit-scenario' ? 'active green' : ''}`}
              onClick={() => setActiveTab('profit-scenario')}
            >
              <ArrowUpRight size={16} /> Scenario A: Price Increases (Favorable)
            </button>

            <button
              className={`scenario-btn ${activeTab === 'loss-scenario' ? 'active red' : ''}`}
              onClick={() => setActiveTab('loss-scenario')}
            >
              <ArrowDownRight size={16} /> Scenario B: Price Decreases (Risk / Loss)
            </button>
          </div>

          <div className="visual-trade-flow">
            {activeTab === 'profit-scenario' ? (
              <div className="flow-nodes">
                {/* Node 1: BUY */}
                <div className="flow-node">
                  <div className="node-badge buy">BUY LOW</div>
                  <div className="node-price">₹100</div>
                  <p className="node-sub">You purchase 1 share</p>
                </div>

                {/* Arrow */}
                <div className="flow-connector text-gain">
                  <span className="connector-label">Price Rises +₹20</span>
                  <div className="connector-line gain"></div>
                </div>

                {/* Node 2: SELL */}
                <div className="flow-node">
                  <div className="node-badge sell">SELL HIGH</div>
                  <div className="node-price">₹120</div>
                  <p className="node-sub">You sell the share</p>
                </div>

                {/* Result Box */}
                <div className="flow-result-box gain">
                  <div className="result-title text-gain">Gain / Return</div>
                  <div className="result-value">+₹20 (+20%)</div>
                  <p className="result-desc">Difference captured as profit.</p>
                </div>
              </div>
            ) : (
              <div className="flow-nodes">
                {/* Node 1: BUY */}
                <div className="flow-node">
                  <div className="node-badge buy">BUY AT ₹100</div>
                  <div className="node-price">₹100</div>
                  <p className="node-sub">You purchase 1 share</p>
                </div>

                {/* Arrow */}
                <div className="flow-connector text-loss">
                  <span className="connector-label">Price Falls -₹15</span>
                  <div className="connector-line loss"></div>
                </div>

                {/* Node 2: EXIT */}
                <div className="flow-node">
                  <div className="node-badge exit">SELL / EXIT</div>
                  <div className="node-price">₹85</div>
                  <p className="node-sub">Price moves against you</p>
                </div>

                {/* Result Box */}
                <div className="flow-result-box loss">
                  <div className="result-title text-loss">Loss / Drawdown</div>
                  <div className="result-value">-₹15 (-15%)</div>
                  <p className="result-desc">Risk realized when price falls.</p>
                </div>
              </div>
            )}
          </div>

          {/* Responsible Trading Warning Note */}
          <div className="trading-note-box">
            <ShieldAlert size={20} className="note-icon" />
            <div>
              <strong>Crucial Risk Reminder:</strong> Asset prices move up and down based on market supply, economic news, and investor sentiment. Profits are never guaranteed, which is why risk management and stop losses exist.
            </div>

            <button
              className="btn-secondary note-explain-btn"
              onClick={() =>
                setExplainState({
                  title: 'Why Do Asset Prices Change?',
                  explanation: 'Prices shift when buyers and sellers disagree on value. If more people want to buy, price moves up; if more want to sell, price falls.',
                  simpleVersion: 'Think of an auction for a painting. Bids go up when multiple people want it.',
                  guaranteeAnswer: 'No strategy can guarantee price direction. Disciplined traders manage risk on every single trade.',
                })
              }
            >
              <HelpCircle size={14} /> Explain Market Prices
            </button>
          </div>
        </div>
      </div>

      <ExplainModal
        isOpen={!!explainState}
        onClose={() => setExplainState(null)}
        title={explainState?.title || ''}
        explanation={explainState?.explanation || ''}
        simpleVersion={explainState?.simpleVersion}
        guaranteeAnswer={explainState?.guaranteeAnswer}
      />
    </section>
  );
}
