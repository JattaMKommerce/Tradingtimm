import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Play, RotateCcw, HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import { mockPrebuiltStrategies, runSimulatedBacktest } from '../data/mockStrategies';
import BacktestChart from '../components/BacktestChart';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import { formatCurrency } from '../utils/formatCurrency';
import './Backtesting.css';

export default function Backtesting() {
  const [searchParams] = useSearchParams();
  const defaultStrategyId = searchParams.get('strategy') || 'nifty-momentum';

  const [selectedStrategyId, setSelectedStrategyId] = useState(defaultStrategyId);
  const [initialCapital, setInitialCapital] = useState(100000);
  const [timeframe, setTimeframe] = useState('1D');
  const [stopLossPct, setStopLossPct] = useState(2);
  const [takeProfitPct, setTakeProfitPct] = useState(5);

  const [backtestResult, setBacktestResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [explainState, setExplainState] = useState(null);

  const activeStrategy = mockPrebuiltStrategies.find((s) => s.id === selectedStrategyId) || mockPrebuiltStrategies[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const res = runSimulatedBacktest({
        strategyId: selectedStrategyId,
        initialCapital,
        timeframe,
        stopLossPct,
        takeProfitPct,
      });
      setBacktestResult(res);
      setIsSimulating(false);
    }, 400);
  };

  useEffect(() => {
    handleRunSimulation();
  }, [selectedStrategyId]);

  return (
    <div className="backtesting-page container">
      {/* Header */}
      <div className="backtesting-header glass-card">
        <div className="simulated-badge" style={{ marginBottom: '8px' }}>
          SIMULATED BACKTESTING ENGINE
        </div>
        <h1>Don't Guess. Test.</h1>
        <p className="backtesting-subtitle">
          "Let's replay the past and see what your strategy would have done."
        </p>
      </div>

      <TimmMascot
        inline
        message="Backtesting evaluates strategy rules against historical market candles to measure expected drawdown and win rates before risking actual capital."
      />

      {/* Visual Pipeline Banner */}
      <div className="pipeline-card glass-card">
        <div className="pipe-step">
          <span className="pipe-num">1</span>
          <span className="pipe-lbl">Strategy Rules</span>
        </div>
        <div className="pipe-arrow">➔</div>
        <div className="pipe-step">
          <span className="pipe-num">2</span>
          <span className="pipe-lbl">Historical Market Data</span>
        </div>
        <div className="pipe-arrow">➔</div>
        <div className="pipe-step">
          <span className="pipe-num">3</span>
          <span className="pipe-lbl">Simulation Engine</span>
        </div>
        <div className="pipe-arrow">➔</div>
        <div className="pipe-step">
          <span className="pipe-num">4</span>
          <span className="pipe-lbl">Results Dashboard</span>
        </div>
      </div>

      {/* Control Panel */}
      <div className="backtest-controls-card glass-card">
        <h3>Configure Backtest Parameters</h3>
        <div className="controls-grid">
          <div className="ctrl-group">
            <label>Select Strategy</label>
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
            <input
              type="number"
              step="0.5"
              value={stopLossPct}
              onChange={(e) => setStopLossPct(Number(e.target.value))}
            />
          </div>

          <div className="ctrl-group">
            <label>Take Profit %</label>
            <input
              type="number"
              step="0.5"
              value={takeProfitPct}
              onChange={(e) => setTakeProfitPct(Number(e.target.value))}
            />
          </div>
        </div>

        <button className="btn-primary run-sim-btn" onClick={handleRunSimulation} disabled={isSimulating}>
          <Play size={18} fill="currentColor" /> {isSimulating ? 'Simulating...' : 'Run Backtest Simulation'}
        </button>
      </div>

      {/* Results Dashboard */}
      {backtestResult && (
        <div className="results-wrapper">
          {/* Key Metrics Banner */}
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
              <button
                className="m-explain-link"
                onClick={() =>
                  setExplainState({
                    title: 'What is Maximum Drawdown?',
                    explanation: 'Maximum Drawdown measures the largest peak-to-trough drop in strategy equity during the simulation.',
                    simpleVersion: 'Think of climbing a mountain: if your portfolio reached ₹1,20,000 and dropped to ₹1,08,000, your drawdown was 10%.',
                    guaranteeAnswer: 'Simulated drawdown helps measure historical downside risk.',
                  })
                }
              >
                <HelpCircle size={12} /> What is Drawdown?
              </button>
            </div>
          </div>

          {/* Equity Chart */}
          <BacktestChart data={backtestResult.equityCurve} initialCapital={backtestResult.initialCapital} currency="₹" />

          {/* Trade Execution Log */}
          <div className="trades-table-card glass-card">
            <h3>Simulated Historical Trades Log</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Action</th>
                    <th>Entry Price</th>
                    <th>Exit Price</th>
                    <th>Return %</th>
                    <th>Profit / Loss</th>
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
