import React, { useState } from 'react';
import { Activity, Lightbulb, FileCode, Cpu, History, CheckCircle, Bot, ArrowRight, HelpCircle, Sparkles, Play } from 'lucide-react';
import ExplainModal from './ExplainModal';
import './TradingOneMinute.css';

export default function TradingOneMinute() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [explainState, setExplainState] = useState(null);

  const steps = [
    {
      step: '01',
      title: 'MARKET',
      sub: 'Prices Move',
      icon: Activity,
      desc: 'Buyers and sellers globally exchange assets, causing market prices to move constantly.',
      analogy: 'Think of a busy fruit market where prices adjust based on supply and buyer demand.',
      technicalTerm: 'Continuous Order Book Microstructure & Price Discovery Engine',
      color: '#06B6D4',
      visualDiagram: '🌊 Supply vs Demand: When buyers outnumber sellers, price ticks UP.',
    },
    {
      step: '02',
      title: 'IDEA',
      sub: 'Notice Patterns',
      icon: Lightbulb,
      desc: 'You notice a repeatable pattern: e.g., "Price tends to bounce upward after falling for 3 consecutive days."',
      analogy: 'Like observing that highway traffic slows down every weekday at 5:00 PM.',
      technicalTerm: 'Quantitative Anomaly & Pattern Recognition Hypothesis',
      color: '#F59E0B',
      visualDiagram: '💡 Observation: Price hits support level ₹100 ➔ Bounces to ₹115 repeatedly.',
    },
    {
      step: '03',
      title: 'RULES',
      sub: 'Define Exact If/Then',
      icon: FileCode,
      desc: 'You turn the pattern into strict mathematical rules: "IF RSI < 30 AND Price crosses 50-EMA THEN BUY."',
      analogy: 'Like writing down a clear recipe with exact ingredient weights and cooking times.',
      technicalTerm: 'Deterministic Algorithmic Rule Formulation',
      color: '#10B981',
      visualDiagram: '📋 Rule: WHEN [RSI < 30] AND [Price > 50-EMA] THEN [TRIGGER BUY SIGNAL].',
    },
    {
      step: '04',
      title: 'STRATEGY',
      sub: 'Include Risk Controls',
      icon: Cpu,
      desc: 'The rules become a complete strategy by attaching emergency stop losses and profit targets.',
      analogy: 'Like adding an emergency brake and speed governor to a racing vehicle.',
      technicalTerm: 'Risk-Adjusted Position Management Protocol',
      color: '#EC4899',
      visualDiagram: '🛡️ Risk Boundaries: Stop Loss = 2% max loss | Take Profit = 5% target gain.',
    },
    {
      step: '05',
      title: 'TEST',
      sub: 'Backtest Old Data',
      icon: History,
      desc: 'You simulate the strategy against years of historical market data to measure performance.',
      analogy: 'Like a cricket team replaying match recordings to evaluate a new fielding tactic before game day.',
      technicalTerm: 'Historical OHLCV Backtesting Simulation Engine',
      color: '#3B82F6',
      visualDiagram: '⏪ Replaying 3 Years of Data ➔ Testing 150 simulated trades across market regimes.',
    },
    {
      step: '06',
      title: 'DECISION',
      sub: 'Analyze Performance',
      icon: CheckCircle,
      desc: 'You review win rates, maximum drawdowns, and expected returns calmly before putting money.',
      analogy: 'Reviewing a vehicle crash test safety rating report before driving on the highway.',
      technicalTerm: 'Sharpe Ratio & Maximum Drawdown Quantitative Assessment',
      color: '#10B981',
      visualDiagram: '📊 Results: Win Rate = 64% | Max Drawdown = 8.5% | Profit Factor = 2.15.',
    },
    {
      step: '07',
      title: 'AUTOMATION',
      sub: 'Software Monitors',
      icon: Bot,
      desc: 'Software code monitors your rules 24/7 without fear, greed, hesitation, or fatigue.',
      analogy: 'Like setting a smart home thermostat to turn on AC automatically whenever temperature crosses 24°C.',
      technicalTerm: 'Automated Real-Time Execution Pipeline',
      color: '#A855F7',
      visualDiagram: '🤖 24/7 Automated Execution: Continuous monitoring ➔ 0% emotional panic.',
    },
  ];

  const currentStep = steps[activeStepIndex];
  const CurrentIcon = currentStep.icon;

  return (
    <section id="trading-one-minute" className="one-min-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="tagline">Interactive 1-Minute Visual Journey</span>
          <h2>What Actually Happens When You Trade?</h2>
          <p>
            Trading isn't guessing or gambling. Click any step below to see how a trader transforms an idea into a systematic automated strategy.
          </p>
        </div>

        {/* ACTIVE STEP SPOTLIGHT HERO CARD (BIG & IMPRESSIVE) */}
        <div className="step-spotlight-card glass-card">
          <div className="spotlight-top-bar">
            <div className="spotlight-badge" style={{ background: `${currentStep.color}20`, color: currentStep.color, borderColor: `${currentStep.color}50` }}>
              <CurrentIcon size={20} />
              <span>STEP {currentStep.step} OF 07</span>
            </div>

            <div className="spotlight-stepper-btns">
              <button
                className="step-nav-btn"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              >
                Previous Step
              </button>
              <button
                className="step-nav-btn active"
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              >
                Next Step <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="spotlight-content-grid">
            <div className="spotlight-left">
              <h3 className="spotlight-title">
                {currentStep.step}. {currentStep.title} — <span style={{ color: currentStep.color }}>{currentStep.sub}</span>
              </h3>
              <p className="spotlight-desc">{currentStep.desc}</p>

              {/* Simple Explanation Box */}
              <div className="spotlight-box simple">
                <div className="box-label">🎯 SIMPLE EXPLANATION</div>
                <p>{currentStep.desc}</p>
              </div>

              {/* Real World Analogy */}
              <div className="spotlight-box analogy">
                <div className="box-label text-amber">💡 REAL-WORLD ANALOGY</div>
                <p>{currentStep.analogy}</p>
              </div>
            </div>

            <div className="spotlight-right">
              {/* Visual Diagram Box */}
              <div className="diagram-box glass-card" style={{ borderColor: `${currentStep.color}50` }}>
                <div className="diagram-header" style={{ color: currentStep.color }}>
                  <Sparkles size={16} /> VISUAL CONCEPT DIAGRAM
                </div>
                <div className="diagram-content">
                  {currentStep.visualDiagram}
                </div>
                <div className="diagram-tech">
                  <strong>Technical Term:</strong> {currentStep.technicalTerm}
                </div>
              </div>

              <button
                className="btn-primary spotlight-explain-btn"
                onClick={() =>
                  setExplainState({
                    title: `Step ${currentStep.step}: ${currentStep.title} (${currentStep.sub})`,
                    explanation: currentStep.desc,
                    simpleVersion: currentStep.analogy,
                    guaranteeAnswer: 'No single step in trading guarantees profit. Risk management and discipline are required throughout.',
                  })
                }
              >
                <HelpCircle size={16} /> Explain Step In Plain English
              </button>
            </div>
          </div>
        </div>

        {/* 7 SPACIOUS INTERACTIVE STEP CARDS GRID (MIN-WIDTH 240px EACH) */}
        <div className="interactive-steps-grid">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeStepIndex;

            return (
              <div
                key={item.step}
                className={`spacious-flow-card glass-card ${isActive ? 'active-card' : ''}`}
                style={{ borderColor: isActive ? item.color : undefined }}
                onClick={() => setActiveStepIndex(index)}
              >
                <div className="card-top-row">
                  <span className="step-num-badge" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.step}
                  </span>
                  <div className="card-icon-wrapper" style={{ background: `${item.color}20`, color: item.color }}>
                    <Icon size={20} />
                  </div>
                </div>

                <h4 className="card-step-title">{item.title}</h4>
                <span className="card-step-sub" style={{ color: item.color }}>{item.sub}</span>
                <p className="card-step-desc">{item.desc}</p>

                <div className="card-footer-action">
                  <span className="click-hint" style={{ color: isActive ? item.color : undefined }}>
                    {isActive ? '● Currently Active' : 'Click to Explore ➔'}
                  </span>
                </div>
              </div>
            );
          })}
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
