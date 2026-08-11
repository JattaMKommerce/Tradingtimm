import React, { useState } from 'react';
import { ShieldAlert, Calculator, HelpCircle, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import ExplainModal from './ExplainModal';
import './RiskMeter.css';

export default function RiskMeter() {
  const [totalCapital, setTotalCapital] = useState(100000);
  const [riskPerTradePct, setRiskPerTradePct] = useState(1.5);
  const [stopLossDistancePct, setStopLossDistancePct] = useState(3);
  const [explainState, setExplainState] = useState(null);

  // Calculations
  const maxRiskAmount = (totalCapital * riskPerTradePct) / 100;
  const recommendedPositionSize = (maxRiskAmount / (stopLossDistancePct / 100));

  return (
    <div className="risk-meter-wrapper glass-card">
      <div className="risk-meter-header">
        <div className="risk-title-group">
          <Calculator className="risk-icon" size={24} />
          <div>
            <h3>Interactive Position Sizing & Risk Calculator</h3>
            <span className="risk-subtitle">Calculate position limits based on emergency stop losses</span>
          </div>
        </div>
      </div>

      <div className="risk-calc-grid">
        {/* Sliders Column */}
        <div className="calc-sliders-col">
          <div className="calc-group">
            <div className="calc-label-row">
              <label>1. Account Capital</label>
              <span className="calc-val">{formatCurrency(totalCapital, '₹')}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={totalCapital}
              onChange={(e) => setTotalCapital(Number(e.target.value))}
            />
          </div>

          <div className="calc-group">
            <div className="calc-label-row">
              <label>2. Max Risk Per Trade %</label>
              <span className="calc-val text-amber">{riskPerTradePct}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={riskPerTradePct}
              onChange={(e) => setRiskPerTradePct(Number(e.target.value))}
            />
            <span className="calc-hint">Pro advice: Professional traders rarely risk over 1% to 2% per trade.</span>
          </div>

          <div className="calc-group">
            <div className="calc-label-row">
              <label>3. Stop Loss Distance %</label>
              <span className="calc-val text-rose">{stopLossDistancePct}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={stopLossDistancePct}
              onChange={(e) => setStopLossDistancePct(Number(e.target.value))}
            />
            <span className="calc-hint">Distance to your emergency safety exit boundary.</span>
          </div>
        </div>

        {/* Results Column */}
        <div className="calc-results-col glass-card">
          <h4>Calculated Risk Controls</h4>

          <div className="result-metric-card">
            <span className="res-label">Max Risk Amount Per Trade</span>
            <div className="res-val text-rose">{formatCurrency(maxRiskAmount, '₹')}</div>
            <span className="res-sub">Maximum money lost if stop loss triggers</span>
          </div>

          <div className="result-metric-card">
            <span className="res-label">Recommended Position Size</span>
            <div className="res-val text-purple">{formatCurrency(recommendedPositionSize, '₹')}</div>
            <span className="res-sub">Total position value to open</span>
          </div>

          <button
            className="btn-secondary explain-risk-btn"
            onClick={() =>
              setExplainState({
                title: 'How Position Sizing Protects Your Capital',
                explanation: 'Position sizing determines how many shares or contracts you buy so that if your Stop Loss triggers, you lose no more than your chosen max risk limit (e.g. 1.5%).',
                simpleVersion: 'Think of it like buying safety insurance before leaving home.',
                guaranteeAnswer: 'No risk calculator eliminates market risk entirely. It ensures disciplined capital allocation.',
              })
            }
          >
            <HelpCircle size={14} /> Explain Position Sizing
          </button>
        </div>
      </div>

      {/* Prominent Risk Disclaimer Note */}
      <div className="risk-warning-banner">
        <ShieldAlert size={20} />
        <div>
          <strong>Golden Risk Rule:</strong> Never risk what you cannot afford to lose. Automation does not eliminate market risk; it makes discipline easier to define.
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
    </div>
  );
}
