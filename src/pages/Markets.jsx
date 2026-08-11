import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { HelpCircle, ArrowUpRight, ArrowDownRight, Layers, BarChart2, ShieldCheck } from 'lucide-react';
import { mockMarketCategories, mockTickers } from '../data/mockMarketData';
import { useMarketData } from '../hooks/useMarketData';
import TeachMeChartModal from '../components/TeachMeChartModal';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './Markets.css';

export default function Markets() {
  const [searchParams] = useSearchParams();
  const defaultSymbol = searchParams.get('symbol') || 'NIFTY50';

  const [selectedCategory, setSelectedCategory] = useState('indian_markets');
  const [selectedSymbol, setSelectedSymbol] = useState(defaultSymbol);
  const [timeframe, setTimeframe] = useState('1D');
  const [chartType, setChartType] = useState('line'); // 'line' | 'candles'

  const [showTeachModal, setShowTeachModal] = useState(false);
  const [explainState, setExplainState] = useState(null);

  const { ticker, candles, loading } = useMarketData(selectedSymbol, timeframe);

  const categoryTickers = mockTickers.filter((t) => t.category === selectedCategory);

  const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];

  return (
    <div className="markets-page container">
      {/* Page Header */}
      <div className="markets-header glass-card">
        <div className="header-text-group">
          <div className="simulated-badge" style={{ marginBottom: '8px' }}>
            SIMULATED MARKET DATA
          </div>
          <h1>Market Explorer</h1>
          <p>
            Explore prices, trends, volume, technical indicators, and sentiment metrics across global markets.
          </p>
        </div>

        <button className="btn-primary teach-chart-btn" onClick={() => setShowTeachModal(true)}>
          <HelpCircle size={18} /> Explain This Chart
        </button>
      </div>

      {/* Guide Banner */}
      <TimmMascot
        inline
        message="Notice the SIMULATED DATA tag. Once a live Trading/Market API is connected, this dashboard will receive live exchange data without altering the UI!"
      />

      {/* Main Grid: Controls + Chart + Side Panel */}
      <div className="markets-main-grid">
        {/* Left Column: Asset Selection & Chart */}
        <div className="chart-column">
          {/* Category Tabs */}
          <div className="cat-selector-bar">
            {mockMarketCategories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstSymbol = mockTickers.find((t) => t.category === cat.id)?.symbol;
                  if (firstSymbol) setSelectedSymbol(firstSymbol);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Asset Selector & Timeframe Controls Bar */}
          <div className="controls-bar glass-card">
            <div className="asset-select-wrapper">
              <label>Asset:</label>
              <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
                {categoryTickers.map((t) => (
                  <option key={t.symbol} value={t.symbol}>
                    {t.symbol} — {t.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="timeframe-group">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  className={`tf-btn ${timeframe === tf ? 'active' : ''}`}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Recharts Main Chart */}
          <div className="main-chart-card glass-card">
            <div className="chart-card-top">
              <div className="chart-symbol-info">
                <h2>{ticker.name} ({ticker.symbol})</h2>
                <div className="current-price-display">
                  <span className="price">{ticker.currency}{ticker.price?.toLocaleString()}</span>
                  <span className={`change-pill ${ticker.change >= 0 ? 'text-gain' : 'text-loss'}`}>
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
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="time" stroke="#64748B" fontSize={12} />
                    <YAxis yAxisId="price" stroke="#64748B" fontSize={12} domain={['auto', 'auto']} />
                    <YAxis yAxisId="volume" orientation="right" stroke="#64748B" fontSize={10} hide />

                    <Tooltip
                      contentStyle={{ backgroundColor: '#131A2A', borderColor: '#8B5CF6', borderRadius: '8px' }}
                      formatter={(val, name) => [
                        name === 'volume' ? val.toLocaleString() : `${ticker.currency}${val}`,
                        name.toUpperCase(),
                      ]}
                    />

                    <Bar yAxisId="volume" dataKey="volume" fill="rgba(139, 92, 246, 0.2)" radius={[4, 4, 0, 0]} />
                    <Line yAxisId="price" type="monotone" dataKey="close" stroke="#8B5CF6" strokeWidth={3} dot={false} name="price" />
                    <Line yAxisId="price" type="monotone" dataKey="ma10" stroke="#F59E0B" strokeWidth={2} strokeDasharray="4 4" dot={false} name="10 EMA" />
                  </ComposedChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Educational Note Below Chart */}
            <div className="chart-edu-box">
              <ShieldCheck size={18} className="text-purple" />
              <div>
                <strong>Plain-English Chart Note:</strong> {ticker.explanation}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="side-panel-column">
          <div className="side-card glass-card">
            <h3>Key Market Metrics</h3>
            <div className="side-metric-row">
              <span className="side-label">Market Status</span>
              <span className="side-val text-gain">{ticker.status}</span>
            </div>
            <div className="side-metric-row">
              <span className="side-label">24H High</span>
              <span className="side-val">{ticker.currency}{ticker.high24h?.toLocaleString()}</span>
            </div>
            <div className="side-metric-row">
              <span className="side-label">24H Low</span>
              <span className="side-val">{ticker.currency}{ticker.low24h?.toLocaleString()}</span>
            </div>
            <div className="side-metric-row">
              <span className="side-label">24H Volume</span>
              <span className="side-val">{ticker.volume}</span>
            </div>
            <div className="side-metric-row">
              <span className="side-label">50-Period EMA</span>
              <span className="side-val">{ticker.currency}{ticker.movingAverage50?.toLocaleString()}</span>
            </div>
            <div className="side-metric-row">
              <span className="side-label">RSI Momentum</span>
              <div className="rsi-explain-wrap">
                <span className="side-val">{ticker.rsi}</span>
                <button
                  className="mini-explain-btn"
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
              <div className="sentiment-meter-header">
                <span>Market Sentiment</span>
                <span className="sentiment-badge">{ticker.sentiment} ({ticker.sentimentScore}/100)</span>
              </div>
              <div className="sentiment-meter-bar">
                <div className="sentiment-fill" style={{ width: `${ticker.sentimentScore}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
