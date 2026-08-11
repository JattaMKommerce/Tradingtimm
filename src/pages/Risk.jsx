import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, HelpCircle, Heart, Lock, AlertTriangle } from 'lucide-react';
import RiskMeter from '../components/RiskMeter';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './Risk.css';

export default function Risk() {
  const [explainState, setExplainState] = useState(null);

  const riskPrinciples = [
    {
      title: '1. The 1% to 2% Max Risk Rule',
      desc: 'Never risk more than 1% to 2% of your overall account balance on any single trade position.',
      analogy: 'Think of wearing a life jacket. If one wave knocks you down, you stay afloat easily.',
    },
    {
      title: '2. Emergency Stop Losses',
      desc: 'Pre-set an automatic exit price. If price moves against your trade, the exit triggers without emotional debate.',
      analogy: 'An emergency brake in a train that halts movement instantly when triggered.',
    },
    {
      title: '3. Risk / Reward Ratios',
      desc: 'Only enter trades where potential target gain is at least 2x larger than the potential risk loss (1:2 ratio).',
      analogy: 'Only buying a raffle ticket if the prize pool is dramatically larger than ticket cost.',
    },
    {
      title: '4. Diversification across Assets',
      desc: 'Avoid placing all your capital into a single asset or currency pair.',
      analogy: 'Not putting all your eggs in one basket so a drop doesn’t break everything.',
    },
  ];

  return (
    <div className="risk-page container">
      {/* Header */}
      <div className="risk-header glass-card">
        <span className="tagline text-rose">Capital Preservation First</span>
        <h1>Automation Doesn't Remove Risk.</h1>
        <p className="risk-subtitle-text">
          "It makes discipline easier to define."
        </p>
      </div>

      <TimmMascot
        inline
        message="Risk management is the most important skill in financial markets. Traders who manage losses survive and succeed over time!"
      />

      {/* Visual Pipeline Banner */}
      <div className="risk-pipeline-card glass-card">
        <div className="risk-pipe-step">
          <span className="r-lbl">1. Account Capital</span>
        </div>
        <div className="r-arrow">➔</div>
        <div className="risk-pipe-step">
          <span className="r-lbl">2. Position Sizing</span>
        </div>
        <div className="r-arrow">➔</div>
        <div className="risk-pipe-step">
          <span className="r-lbl">3. Emergency Stop Loss</span>
        </div>
        <div className="r-arrow">➔</div>
        <div className="risk-pipe-step">
          <span className="r-lbl">4. Risk/Reward Ratio</span>
        </div>
        <div className="r-arrow">➔</div>
        <div className="risk-pipe-step">
          <span className="r-lbl">5. Controlled Drawdown</span>
        </div>
      </div>

      {/* Interactive Risk Calculator */}
      <div style={{ margin: '32px 0' }}>
        <RiskMeter />
      </div>

      {/* Core Principles Grid */}
      <div className="grid-2 principles-grid">
        {riskPrinciples.map((p) => (
          <div key={p.title} className="principle-card glass-card">
            <h3>{p.title}</h3>
            <p className="p-desc">{p.desc}</p>
            <div className="p-analogy">💡 <strong>Analogy:</strong> {p.analogy}</div>
          </div>
        ))}
      </div>

      {/* Prominent Risk Warning Footer Card */}
      <div className="critical-warning-card glass-card">
        <ShieldAlert size={28} className="text-amber" />
        <div>
          <h3>Never Risk What You Cannot Afford to Lose</h3>
          <p>
            Trading financial assets carries inherent financial risk. Simulated or historical performance does not guarantee future results. TradingTimm.ai provides educational tools to help you understand risk management principles.
          </p>
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
