import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FlaskConical, Sliders, Play, ShieldAlert, Bot, HelpCircle, ArrowRight } from 'lucide-react';
import StrategyBuilder from '../components/StrategyBuilder';
import BacktestChart from '../components/BacktestChart';
import RiskMeter from '../components/RiskMeter';
import AiVsAutomationCard from '../components/AiVsAutomationCard';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import { mockPrebuiltStrategies, runSimulatedBacktest } from '../data/mockStrategies';
import { formatCurrency } from '../utils/formatCurrency';
import './Lab.css';

export default function Lab() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'builder';

  const [activeTab, setActiveTab] = useState(initialTab); // 'builder' | 'backtesting' | 'risk' | 'automation'

  // Backtesting Tab State
  const [selectedStrategyId, setSelectedStrategyId] = useState('nifty-momentum');
  const [initialCapital, setInitialCapital] = useState(100000);
  const [stopLossPct, setStopLossPct] = useState(2);
  const [takeProfitPct, setTakeProfitPct] = useState(5);
  const [backtestResult, setBacktestResult] = useState(() => runSimulatedBacktest({ strategyId: 'nifty-momentum', initialCapital: 100000 }));
  const [isSimulating, setIsSimulating] = useState(false);

  const [explainState, setExplainState] = useState(null);

  const handleRunBacktest = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const res = runSimulatedBacktest({
        strategyId: selectedStrategyId,
        initialCapital,
        stopLossPct,
        takeProfitPct,
      });
      setBacktestResult(res);
      setIsSimulating(false);
    }, 350);
  };

  return (
    <div className="lab-page container">
      {/* Header */}
      <div className="lab-header glass-card">
        <div className="simulated-badge" style={{ marginBottom: '8px' }}>
          INTERACTIVE PLAYGROUND
        </div>
        <h1>TradingTimm Lab</h1>
        <p>
          Build visual strategies, simulate historical backtests, test risk limits, and inspect automation execution pipelines.
        </p>
      </div>

      <TimmMascot
        inline
        message="Welcome to the Lab! All calculations and strategy rules here run on simulated market datasets."
      />

      {/* Internal Navigation Tabs */}
      <div className="lab-internal-tabs">
        <button
          className={`lab-tab-btn ${activeTab === 'builder' ? 'active' : ''}`}
          onClick={() => setActiveTab('builder')}
        >
          <Sliders size={18} /> Strategy Builder
        </button>

        <button
          className={`lab-tab-btn ${activeTab === 'backtesting' ? 'active' : ''}`}
          onClick={() => setActiveTab('backtesting')}
        >
          <Play size={18} /> Backtesting Engine
        </button>

        <button
          className={`lab-tab-btn ${activeTab === 'risk' ? 'active' : ''}`}
          onClick={() => setActiveTab('risk')}
        >
          <ShieldAlert size={18} /> Risk Simulator
        </button>

        <button
          className={`lab-tab-btn ${activeTab === 'automation' ? 'active' : ''}`}
          onClick={() => setActiveTab('automation')}
        >
          <Bot size={18} /> Automation Pipeline
        </button>
      </div>

      {/* Tab Content 1: Strategy Builder */}
      {activeTab === 'builder' && (
        <div className="lab-workspace">
          <StrategyBuilder />
        </div>
      )}

      {/* Tab Content 2: Backtesting Engine */}
      {activeTab === 'backtesting' && (
        <div className="lab-workspace">
          <div className="backtest-controls-card glass-card" style={{ marginBottom: '24px' }}>
            <h3>Simulated Backtest Configuration</h3>
            <div className="controls-grid">
              <div className="ctrl-group">
                <label>Strategy</label>
                <select value={selectedStrategyId} onChange={(e) => setSelectedStrategyId(e.target.value)}>
                  {mockPrebuiltStrategies.map((s) => (
                    <option key={s.id} value={s.id}>{s.name} ({s.category})</option>
                  ))}
                </select>
              </div>

              <div className="ctrl-group">
                <label>Initial Capital</label>
                <select value={initialCapital} onChange={(e) => setInitialCapital(Number(e.target.value))}>
                  <option value={50000}>₹50,000</option>
                  <option value={100000}>₹1,00,000</option>
                  <option value={500000}>₹5,00,000</option>
                  <option value={1000000}>₹10,00,000</option>
                </select>
              </div>

              <div className="ctrl-group">
                <label>Stop Loss %</label>
                <input type="number" step="0.5" value={stopLossPct} onChange={(e) => setStopLossPct(Number(e.target.value))} />
              </div>

              <div className="ctrl-group">
                <label>Take Profit %</label>
                <input type="number" step="0.5" value={takeProfitPct} onChange={(e) => setTakeProfitPct(Number(e.target.value))} />
              </div>
            </div>

            <button className="btn-primary run-sim-btn" onClick={handleRunBacktest} disabled={isSimulating}>
              <Play size={18} fill="currentColor" /> {isSimulating ? 'Simulating...' : 'Run Simulation'}
            </button>
          </div>

          {backtestResult && (
            <div className="results-wrapper">
              <div className="grid-4 metrics-banner-grid">
                <div className="metric-box glass-card">
                  <span className="m-lbl">Initial Capital</span>
                  <span className="m-val">{formatCurrency(backtestResult.initialCapital, '₹')}</span>
                </div>
                <div className="metric-box glass-card">
                  <span className="m-lbl">Simulated Final Value</span>
                  <span className="m-val text-gain">{formatCurrency(backtestResult.finalValue, '₹')}</span>
                  <span className="m-sub text-gain">+{backtestResult.totalReturn}% Return</span>
                </div>
                <div className="metric-box glass-card">
                  <span className="m-lbl">Win Rate</span>
                  <span className="m-val text-gain">{backtestResult.winRate}%</span>
                  <span className="m-sub">{backtestResult.totalTrades} Total Trades</span>
                </div>
                <div className="metric-box glass-card">
                  <span className="m-lbl">Max Drawdown</span>
                  <span className="m-val text-loss">-{backtestResult.maxDrawdown}%</span>
                </div>
              </div>

              <BacktestChart data={backtestResult.equityCurve} initialCapital={backtestResult.initialCapital} currency="₹" />

              <div className="trades-table-card glass-card" style={{ marginTop: '24px' }}>
                <h3>Simulated Trade Logs</h3>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th>Price</th>
                        <th>Exit</th>
                        <th>Return %</th>
                        <th>Profit/Loss</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {backtestResult.trades.map((t) => (
                        <tr key={t.id}>
                          <td>{t.id}</td>
                          <td>{t.date}</td>
                          <td><span className="tbl-buy-pill">{t.type}</span></td>
                          <td>{t.price}</td>
                          <td>{t.exitPrice}</td>
                          <td className={t.status === 'Profit' ? 'text-gain' : 'text-loss'}>{t.returnPct}</td>
                          <td className={t.status === 'Profit' ? 'text-gain' : 'text-loss'}>{t.profit}</td>
                          <td>
                            <span className={`status-pill ${t.status === 'Profit' ? 'bg-gain text-gain' : 'bg-loss text-loss'}`}>
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab Content 3: Risk Simulator */}
      {activeTab === 'risk' && (
        <div className="lab-workspace">
          <RiskMeter />
        </div>
      )}

      {/* Tab Content 4: Automation Pipeline */}
      {activeTab === 'automation' && (
        <div className="lab-workspace">
          <div className="automation-pipeline-wrapper glass-card">
            <h3 className="pipeline-title">Visual Algorithmic Execution Pipeline</h3>
            <div className="pipeline-flex">
              <div className="pipe-stage-card">
                <div className="stage-top">
                  <span className="stage-num text-cyan">01</span>
                </div>
                <h4>MARKET DATA</h4>
                <p>Simulated candles stream into the algorithm engine.</p>
              </div>
              <div className="stage-connector">➔</div>
              <div className="pipe-stage-card">
                <div className="stage-top">
                  <span className="stage-num text-emerald">02</span>
                </div>
                <h4>STRATEGY CHECK</h4>
                <p>Rules (RSI & EMA) are continuously evaluated.</p>
              </div>
              <div className="stage-connector">➔</div>
              <div className="pipe-stage-card">
                <div className="stage-top">
                  <span className="stage-num text-amber">03</span>
                </div>
                <h4>RISK CHECK</h4>
                <p>Position sizing and stop losses are verified.</p>
              </div>
              <div className="stage-connector">➔</div>
              <div className="pipe-stage-card">
                <div className="stage-top">
                  <span className="stage-num text-purple">04</span>
                </div>
                <h4>AUTOMATED ORDER</h4>
                <p>Simulated signal dispatch without human emotion.</p>
              </div>
            </div>
          </div>

          <AiVsAutomationCard />
        </div>
      )}

      {/* Modal */}
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
