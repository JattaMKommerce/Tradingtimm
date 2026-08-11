import React, { useState } from 'react';
import { Bot, Activity, Cpu, ShieldCheck, Zap, Layers, HelpCircle } from 'lucide-react';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import AiVsAutomationCard from '../components/AiVsAutomationCard';
import './Automation.css';

export default function Automation() {
  const [explainState, setExplainState] = useState(null);

  const pipelineStages = [
    {
      num: '01',
      name: 'MARKET DATA',
      icon: Activity,
      desc: 'Real-time or simulated tick candle feeds stream continuous price and volume data into the algorithm engine.',
      color: '#06B6D4',
    },
    {
      num: '02',
      name: 'STRATEGY EVALUATION',
      icon: Layers,
      desc: 'The software continuously checks whether your predefined rules (e.g. RSI < 30 and 50 EMA Crossover) are satisfied.',
      color: '#8B5CF6',
    },
    {
      num: '03',
      name: 'SIGNAL GENERATION',
      icon: Zap,
      desc: 'When strategy conditions match 100%, the engine triggers a BUY or SELL signal event.',
      color: '#10B981',
    },
    {
      num: '04',
      name: 'RISK CONTROL CHECK',
      icon: ShieldCheck,
      desc: 'Before any signal is dispatched, strict position sizing and emergency stop-loss parameters are verified.',
      color: '#F59E0B',
    },
    {
      num: '05',
      name: 'ORDER EXECUTION',
      icon: Cpu,
      desc: 'The verified trade order is dispatched to the simulated venue or market API automatically.',
      color: '#EC4899',
    },
  ];

  return (
    <div className="automation-page container">
      {/* Header */}
      <div className="automation-header glass-card">
        <span className="tagline">Discipline Through Code</span>
        <h1>Let Software Watch the Market.</h1>
        <p>
          Automated trading code continuously monitors rules 24/7 without fear, greed, hesitation, or fatigue.
        </p>
      </div>

      <TimmMascot
        inline
        message="Automation ensures pre-planned rules are evaluated consistently. It eliminates emotional hesitation during market swings!"
      />

      {/* Visual Pipeline */}
      <div className="automation-pipeline-wrapper glass-card">
        <h3 className="pipeline-title">Visual Algorithmic Execution Pipeline</h3>
        <div className="pipeline-flex">
          {pipelineStages.map((st, idx) => {
            const Icon = st.icon;
            return (
              <React.Fragment key={st.num}>
                <div className="pipe-stage-card">
                  <div className="stage-top">
                    <span className="stage-num" style={{ color: st.color }}>{st.num}</span>
                    <div className="stage-icon-bg" style={{ background: `${st.color}18`, color: st.color }}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h4>{st.name}</h4>
                  <p>{st.desc}</p>
                </div>
                {idx < pipelineStages.length - 1 && <div className="stage-connector">➔</div>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Benefits vs Misconceptions */}
      <div className="grid-2 auto-notes-grid">
        <div className="note-card glass-card">
          <h3 className="text-gain">What Automation Does Well</h3>
          <ul>
            <li>✅ Removes emotional panic selling and greed buying.</li>
            <li>✅ Executes stop losses instantly according to plan.</li>
            <li>✅ Monitors multiple timeframes and markets continuously.</li>
            <li>✅ Enforces strict risk sizing rules every single trade.</li>
          </ul>
        </div>

        <div className="note-card glass-card">
          <h3 className="text-amber">What Automation CANNOT Do</h3>
          <ul>
            <li>❌ Does NOT guarantee profits or eliminate market risk.</li>
            <li>❌ Cannot predict sudden unexpected geopolitical black swan events.</li>
            <li>❌ Poor strategy rules will lose money faster when automated.</li>
            <li>❌ Still requires human oversight and capital allocation decisions.</li>
          </ul>
        </div>
      </div>

      {/* AI vs Automation Component */}
      <AiVsAutomationCard />

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
