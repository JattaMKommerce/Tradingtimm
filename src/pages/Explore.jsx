import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { HelpCircle, ArrowUpRight, ArrowDownRight, PieChart as PieIcon, ShieldCheck } from 'lucide-react';
import { mockMarketCategories, mockTickers } from '../data/mockMarketData';
import { mockPortfolioSummary } from '../data/mockPortfolio';
import { useMarketData } from '../hooks/useMarketData';
import { formatCurrency } from '../utils/formatCurrency';
import TeachMeChartModal from '../components/TeachMeChartModal';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './Explore.css';

export default function Explore() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'indian_markets';
  const initialTab = searchParams.get('tab') || initialCategory;

  const [activeTab, setActiveTab] = useState(initialTab); // 'forex' | 'crypto' | 'indian_markets' | 'indian_currency' | 'portfolio'
  const [selectedSymbol, setSelectedSymbol] = useState('NIFTY50');
  const [timeframe, setTimeframe] = useState('1D');

  const [showTeachModal, setShowTeachModal] = useState(false);
  const [explainState, setExplainState] = useState(null);

  // Filter category tickers with safe fallback
  const rawCategoryTickers = mockTickers.filter((t) => t.category === activeTab);
  const categoryTickers = rawCategoryTickers.length > 0 ? rawCategoryTickers : mockTickers;

  // Sync symbol when category tab changes
  useEffect(() => {
    if (activeTab !== 'portfolio') {
      const firstSymbol = categoryTickers[0]?.symbol;
      if (firstSymbol) setSelectedSymbol(firstSymbol);
    }
  }, [activeTab]);

  const { ticker, candles, loading } = useMarketData(selectedSymbol, timeframe);
  const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];

  const p = mockPortfolioSummary;

  return (
    <div className="explore-page container">
      {/* Header */}
      <div className="explore-header glass-card">
        <div className="header-top-row">
          <div className="simulated-badge">
            SIMULATED DATA
          </div>
          <button className="btn-primary teach-btn" onClick={() => setShowTeachModal(true)}>
            <HelpCircle size={18} /> Explain This Chart
          </button>
        </div>
        <h1>Market Explorer & Portfolio</h1>
        <p>
          Inspect simulated asset prices, volume trends, sentiment indicators, and portfolio allocations in one cohesive workspace.
        </p>
      </div>

      <TimmMascot
        inline
        message="Notice the SIMULATED DATA badge. All data shown is realistic mock data. Toggle between categories below!"
      />

      {/* Internal Navigation Tabs */}
      <div className="explore-internal-tabs">
        {mockMarketCategories.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <span>{cat.label}</span>
          </button>
        ))}

        <button
          className={`tab-btn portfolio-tab ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          <PieIcon size={18} /> Portfolio
        </button>
      </div>

      {/* Tab Content 1: Market Categories */}
      {activeTab !== 'portfolio' ? (
        <div className="markets-workspace-grid">
          {/* Main Chart Column */}
          <div className="chart-column">
            {/* Controls Bar */}
            <div className="controls-bar glass-card">
              <div className="asset-selector">
                <label>Instrument:</label>
                <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
                  {categoryTickers.map((t) => (
                    <option key={t.symbol} value={t.symbol}>
                      {t.symbol} — {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="timeframe-selector">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    className={`tf-pill ${timeframe === tf ? 'active' : ''}`}
                    onClick={() => setTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Chart Card */}
            <div className="main-chart-card glass-card">
              <div className="chart-title-row">
                <div>
                  <h2>{ticker.name} ({ticker.symbol})</h2>
                  <div className="price-display-row">
                    <span className="current-price">{ticker.currency}{ticker.price?.toLocaleString()}</span>
                    <span className={`change-badge ${ticker.change >= 0 ? 'bg-gain text-gain' : 'bg-loss text-loss'}`}>
                      {ticker.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      {ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent}%
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', height: 380, marginTop: 16 }}>
                {loading ? (
                  <div className="chart-loading">Loading chart candles...</div>
                ) : (
                  <ResponsiveContainer>
                    <ComposedChart data={candles} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.08)" />
                      <XAxis dataKey="time" stroke="#64748B" fontSize={12} />
                      <YAxis yAxisId="price" stroke="#64748B" fontSize={12} domain={['auto', 'auto']} />
                      <YAxis yAxisId="volume" orientation="right" stroke="#64748B" fontSize={10} hide />

                      <Tooltip
                        contentStyle={{ backgroundColor: '#090E17', borderColor: '#10B981', borderRadius: '8px' }}
                        formatter={(val, name) => [
                          name === 'volume' ? val.toLocaleString() : `${ticker.currency}${val}`,
                          name.toUpperCase(),
                        ]}
                      />

                      <Bar yAxisId="volume" dataKey="volume" fill="rgba(16, 185, 129, 0.18)" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="price" type="monotone" dataKey="close" stroke="#10B981" strokeWidth={3} dot={false} name="price" />
                      <Line yAxisId="price" type="monotone" dataKey="ma10" stroke="#F59E0B" strokeWidth={2} strokeDasharray="4 4" dot={false} name="10 EMA" />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="chart-explanation-bar">
                <ShieldCheck size={18} className="text-emerald" />
                <div>
                  <strong>Plain-English Chart Summary:</strong> {ticker.explanation}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Panel */}
          <div className="side-panel-col">
            <div className="side-card glass-card">
              <h3>Key Instrument Metrics</h3>
              <div className="side-row">
                <span className="s-lbl">Status</span>
                <span className="s-val text-gain">{ticker.status}</span>
              </div>
              <div className="side-row">
                <span className="s-lbl">24H High</span>
                <span className="s-val">{ticker.currency}{ticker.high24h?.toLocaleString()}</span>
              </div>
              <div className="side-row">
                <span className="s-lbl">24H Low</span>
                <span className="s-val">{ticker.currency}{ticker.low24h?.toLocaleString()}</span>
              </div>
              <div className="side-row">
                <span className="s-lbl">24H Volume</span>
                <span className="s-val">{ticker.volume}</span>
              </div>
              <div className="side-row">
                <span className="s-lbl">50-Period EMA</span>
                <span className="s-val">{ticker.currency}{ticker.movingAverage50?.toLocaleString()}</span>
              </div>
              <div className="side-row">
                <span className="s-lbl">RSI Momentum</span>
                <div className="rsi-wrap">
                  <span className="s-val">{ticker.rsi}</span>
                  <button
                    className="mini-explain-link"
                    onClick={() =>
                      setExplainState({
                        title: `RSI = ${ticker.rsi} for ${ticker.symbol}`,
                        explanation: `RSI is a momentum indicator. A value around ${ticker.rsi} indicates recent momentum balance.`,
                        simpleVersion: `Recent price action for ${ticker.symbol} shows ${ticker.rsi > 65 ? 'strong buying momentum' : ticker.rsi < 35 ? 'strong selling pressure' : 'neutral balanced trading'}.`,
                        guaranteeAnswer: 'No. An indicator describes past momentum; it does not guarantee what price will do next.',
                      })
                    }
                  >
                    Explain
                  </button>
                </div>
              </div>

              <div className="sentiment-meter-box">
                <div className="sentiment-header">
                  <span>Market Sentiment</span>
                  <span className="sentiment-val">{ticker.sentiment} ({ticker.sentimentScore}/100)</span>
                </div>
                <div className="sentiment-bar-track">
                  <div className="sentiment-bar-fill" style={{ width: `${ticker.sentimentScore}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tab Content 2: Simulated Portfolio Dashboard */
        <div className="portfolio-workspace">
          <div className="grid-4 port-metrics-grid">
            <div className="port-metric-card glass-card">
              <span className="p-lbl">Total Portfolio Value</span>
              <span className="p-val">{formatCurrency(p.totalValueINR, '₹')}</span>
            </div>

            <div className="port-metric-card glass-card">
              <span className="p-lbl">Daily Return</span>
              <span className="p-val text-gain">+{formatCurrency(p.dailyChangeINR, '₹')}</span>
              <span className="p-sub text-gain">+{p.dailyChangePercent}% Today</span>
            </div>

            <div className="port-metric-card glass-card">
              <span className="p-lbl">All-Time Return</span>
              <span className="p-val text-gain">+{formatCurrency(p.allTimeReturnINR, '₹')}</span>
              <span className="p-sub text-gain">+{p.allTimeReturnPercent}% Overall</span>
            </div>

            <div className="port-metric-card glass-card">
              <span className="p-lbl">Cash Reserve</span>
              <span className="p-val">{formatCurrency(p.cashBalanceINR, '₹')}</span>
              <span className="p-sub">Available Liquidity</span>
            </div>
          </div>

          <div className="port-grid-2">
            <div className="donut-card glass-card">
              <h3>Asset Allocation Breakdown</h3>
              <div style={{ width: '100%', height: 240 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={p.assetAllocations}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="percentage"
                    >
                      {p.assetAllocations.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#090E17', borderColor: '#10B981', borderRadius: '8px' }}
                      formatter={(val, name, entry) => [`${val}% (${formatCurrency(entry.payload.valueINR, '₹')})`, entry.payload.name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="alloc-legend">
                {p.assetAllocations.map((item) => (
                  <div key={item.name} className="legend-row">
                    <span className="dot" style={{ background: item.color }}></span>
                    <span className="name">{item.name}</span>
                    <span className="pct">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="positions-card glass-card">
              <h3>Active Simulated Positions</h3>
              <div className="positions-list">
                {p.activeSimulatedPositions.map((pos) => (
                  <div key={pos.id} className="pos-card-item">
                    <div className="pos-top">
                      <div>
                        <span className="pos-sym">{pos.symbol}</span>
                        <span className="pos-type">{pos.assetType}</span>
                      </div>
                      <span className="pos-pnl text-gain">{pos.pnlINR} ({pos.pnlPercent})</span>
                    </div>
                    <div className="pos-strat">{pos.strategy}</div>
                    <div className="pos-bounds">
                      <span>Entry: {pos.entryPrice}</span>
                      <span>Stop: {pos.stopLoss}</span>
                      <span>Target: {pos.takeProfit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <TeachMeChartModal
        isOpen={showTeachModal}
        onClose={() => setShowTeachModal(false)}
        symbol={selectedSymbol}
      />

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
