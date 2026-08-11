import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { mockPrebuiltStrategies } from '../data/mockStrategies';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './StrategyMarketplace.css';

export default function StrategyMarketplace() {
  const [explainState, setExplainState] = useState(null);

  return (
    <div className="marketplace-page container">
      <div className="marketplace-header glass-card">
        <div className="simulated-badge" style={{ marginBottom: '8px' }}>
          SIMULATED STRATEGY CONCEPTS
        </div>
        <h1>Strategy Marketplace</h1>
        <p>
          Explore pre-built quantitative trading strategies tested against historical market data across Forex, Crypto, and Indian markets.
        </p>
      </div>

      <TimmMascot
        inline
        message="Strategies shown here are curated concept rules. Feel free to inspect their rules and run custom backtests!"
      />

      <div className="grid-2 marketplace-grid">
        {mockPrebuiltStrategies.map((st) => (
          <div key={st.id} className="marketplace-card glass-card">
            <div className="card-top-bar">
              <div>
                <span className="st-category">{st.category}</span>
                <h2>{st.name}</h2>
              </div>
              <div className={`risk-badge risk-${st.riskLevel.toLowerCase()}`}>{st.riskLevel} Risk</div>
            </div>

            <p className="st-author">Created by {st.author} • Asset: <strong>{st.assetSymbol}</strong></p>
            <p className="st-desc">{st.description}</p>

            <div className="rules-summary-box">
              <h4>Strategy Rules Overview</h4>
              <ul>
                {st.rules.map((rule, idx) => (
                  <li key={idx}>🔹 {rule}</li>
                ))}
              </ul>
            </div>

            <div className="grid-4 st-stats-grid">
              <div className="st-stat-item">
                <span className="stat-lbl">Win Rate</span>
                <span className="stat-v text-gain">{st.winRate}%</span>
              </div>
              <div className="st-stat-item">
                <span className="stat-lbl">Simulated Return</span>
                <span className="stat-v text-gain">+{st.totalReturn}%</span>
              </div>
              <div className="st-stat-item">
                <span className="stat-lbl">Max Drawdown</span>
                <span className="stat-v text-loss">-{st.maxDrawdown}%</span>
              </div>
              <div className="st-stat-item">
                <span className="stat-lbl">Profit Factor</span>
                <span className="stat-v">{st.profitFactor}</span>
              </div>
            </div>

            <div className="card-actions">
              <Link to={`/backtesting?strategy=${st.id}`} className="btn-primary flex-1">
                <span>Run Backtest Simulation</span>
                <ArrowRight size={16} />
              </Link>

              <button
                className="btn-secondary"
                onClick={() =>
                  setExplainState({
                    title: `${st.name} Rules Explanation`,
                    explanation: st.description,
                    simpleVersion: `Win Rate: ${st.winRate}% over ${st.totalTrades} historical simulated trades.`,
                    guaranteeAnswer: 'Historical backtest results are illustrative. Past performance never guarantees future market returns.',
                  })
                }
              >
                <HelpCircle size={16} /> Explain
              </button>
            </div>
          </div>
        ))}
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
