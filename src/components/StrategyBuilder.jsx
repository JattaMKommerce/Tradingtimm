import React, { useState } from 'react';
import { Play, Sparkles, Shield, Sliders, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { mockIndicators, mockOperators } from '../data/mockStrategies';
import ExplainModal from './ExplainModal';
import './StrategyBuilder.css';

export default function StrategyBuilder() {
  const [selectedIndicator, setSelectedIndicator] = useState('RSI');
  const [selectedOperator, setSelectedOperator] = useState('IS_BELOW');
  const [thresholdValue, setThresholdValue] = useState(30);
  const [selectedAction, setSelectedAction] = useState('BUY');

  const [stopLossPct, setStopLossPct] = useState(2);
  const [takeProfitPct, setTakeProfitPct] = useState(5);
  const [positionSizePct, setPositionSizePct] = useState(10);

  const [buildResult, setBuildResult] = useState(null);
  const [explainState, setExplainState] = useState(null);

  const handleBuildStrategy = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (err) {
      // fallback silent
    }

    const indicatorObj = mockIndicators.find((i) => i.id === selectedIndicator);
    const operatorObj = mockOperators.find((o) => o.id === selectedOperator);

    setBuildResult({
      name: `Custom ${selectedIndicator} ${operatorObj.label} ${thresholdValue} Strategy`,
      ruleText: `WHEN ${indicatorObj.name} ${operatorObj.label} ${thresholdValue} THEN ${selectedAction}`,
      riskText: `Stop Loss: ${stopLossPct}% | Take Profit: ${takeProfitPct}% | Position Size: ${positionSizePct}%`,
      simulatedWinRate: Math.floor(58 + Math.random() * 14),
      simulatedDrawdown: parseFloat((4 + Math.random() * 6).toFixed(1)),
      simulatedReturn: parseFloat((15 + Math.random() * 18).toFixed(1)),
      simulatedTrades: Math.floor(40 + Math.random() * 60),
    });
  };

  return (
    <div className="strategy-builder-wrapper">
      <div className="builder-header text-center">
        <span className="tagline">Visual No-Code Builder</span>
        <h2>Build a Strategy Without Writing Code.</h2>
        <p>
          Combine technical indicators, logical conditions, and risk rules to build an automated simulated trading strategy.
        </p>
      </div>

      <form className="builder-form glass-card" onSubmit={handleBuildStrategy}>
        <div className="form-section-title">
          <Sliders size={18} /> 1. WHEN Condition (Trigger Rule)
        </div>

        <div className="rule-inputs-row">
          <div className="form-group">
            <label>Indicator</label>
            <select value={selectedIndicator} onChange={(e) => setSelectedIndicator(e.target.value)}>
              {mockIndicators.map((ind) => (
                <option key={ind.id} value={ind.id}>{ind.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Condition</label>
            <select value={selectedOperator} onChange={(e) => setSelectedOperator(e.target.value)}>
              {mockOperators.map((op) => (
                <option key={op.id} value={op.id}>{op.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Threshold Value</label>
            <input
              type="number"
              value={thresholdValue}
              onChange={(e) => setThresholdValue(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>Action</label>
            <select value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)}>
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>
        </div>

        {/* Visual Indicator Explanation Bar */}
        <div className="rsi-visualizer-box">
          <div className="rsi-header">
            <span>RSI Indicator Visual Scale</span>
            <button
              type="button"
              className="rsi-explain-btn"
              onClick={() =>
                setExplainState({
                  title: 'What is RSI (Relative Strength Index)?',
                  explanation: 'RSI compares recent price gains and losses on a scale from 0 to 100 to evaluate price momentum.',
                  simpleVersion: 'Below 30 = Oversold (Bargain area). Above 70 = Overbought (Stretched high).',
                  guaranteeAnswer: 'No. Being oversold does not guarantee price will turn around immediately.',
                })
              }
            >
              <HelpCircle size={14} /> What is RSI?
            </button>
          </div>

          <div className="rsi-track">
            <div className="rsi-zone oversold">0 - 30 (Oversold)</div>
            <div className="rsi-zone neutral">30 - 70 (Neutral)</div>
            <div className="rsi-zone overbought">70 - 100 (Overbought)</div>
          </div>
        </div>

        {/* Risk Controls */}
        <div className="form-section-title" style={{ marginTop: '24px' }}>
          <Shield size={18} /> 2. Risk Management Controls
        </div>

        <div className="risk-inputs-row">
          <div className="risk-input-card">
            <label>Stop Loss %</label>
            <div className="slider-val">{stopLossPct}%</div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={stopLossPct}
              onChange={(e) => setStopLossPct(Number(e.target.value))}
            />
            <span className="risk-sub">Limits loss per trade</span>
          </div>

          <div className="risk-input-card">
            <label>Take Profit %</label>
            <div className="slider-val">{takeProfitPct}%</div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={takeProfitPct}
              onChange={(e) => setTakeProfitPct(Number(e.target.value))}
            />
            <span className="risk-sub">Target gain target</span>
          </div>

          <div className="risk-input-card">
            <label>Position Size %</label>
            <div className="slider-val">{positionSizePct}%</div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={positionSizePct}
              onChange={(e) => setPositionSizePct(Number(e.target.value))}
            />
            <span className="risk-sub">Capital allocation</span>
          </div>
        </div>

        <button type="submit" className="btn-primary build-submit-btn">
          <Play size={18} fill="currentColor" /> Build Strategy Simulation
        </button>
      </form>

      {/* Simulated Output Result */}
      {buildResult && (
        <div className="build-result-card glass-card">
          <div className="result-badge">
            <CheckCircle2 size={16} /> SIMULATED STRATEGY CREATED
          </div>

          <h3>{buildResult.name}</h3>
          <p className="rule-preview"><strong>Rule:</strong> {buildResult.ruleText}</p>
          <p className="risk-preview"><strong>Risk:</strong> {buildResult.riskText}</p>

          <div className="grid-4 result-stats-grid">
            <div className="result-stat-box">
              <span className="stat-label">Win Rate</span>
              <span className="stat-val text-gain">{buildResult.simulatedWinRate}%</span>
            </div>
            <div className="result-stat-box">
              <span className="stat-label">Simulated Return</span>
              <span className="stat-val text-gain">+{buildResult.simulatedReturn}%</span>
            </div>
            <div className="result-stat-box">
              <span className="stat-label">Max Drawdown</span>
              <span className="stat-val text-loss">-{buildResult.simulatedDrawdown}%</span>
            </div>
            <div className="result-stat-box">
              <span className="stat-label">Total Trades</span>
              <span className="stat-val">{buildResult.simulatedTrades}</span>
            </div>
          </div>

          <div className="disclaimer-mini-box">
            <AlertCircle size={14} /> Illustrative / Simulated Result. Past data does not guarantee future results.
          </div>
        </div>
      )}

      <ExplainModal
        isOpen={!!explainState}
        onClose={() => setExplainState(null)}
        title={explainState?.title || ''}
        explanation={explainState?.explanation || ''}
        simpleVersion={explainState?.simpleVersion}
        guaranteeAnswer={explainState?.guaranteeAnswer}
      />
    </div>
  );
}
