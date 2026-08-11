import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ArrowUpRight, ArrowDownRight, ArrowRight, HelpCircle, Coins, Bitcoin, Landmark, IndianRupee, ChevronRight } from 'lucide-react';
import { mockMarketCategories, mockTickers } from '../data/mockMarketData';
import { useMarketData } from '../hooks/useMarketData';
import TeachMeChartModal from './TeachMeChartModal';
import ExplainModal from './ExplainModal';
import './MarketExplorerSection.css';

export default function MarketExplorerSection() {
  const [selectedCategory, setSelectedCategory] = useState('indian_markets');
  const [selectedSymbol, setSelectedSymbol] = useState('NIFTY50');
  const [timeframe, setTimeframe] = useState('1D');

  const [showTeachModal, setShowTeachModal] = useState(false);

  const categoryIcons = {
    forex: Coins,
    crypto: Bitcoin,
    indian_markets: Landmark,
    indian_currency: IndianRupee,
  };

  // Badge background colors matching TradingView / Groww style
  const getBadgeColor = (symbol) => {
    if (symbol.includes('NIFTY')) return { bg: '#1E1B4B', text: '#818CF8', label: '50' };
    if (symbol.includes('SENSEX')) return { bg: '#0284C7', text: '#FFFFFF', label: 'BSE' };
    if (symbol.includes('BANK')) return { bg: '#065F46', text: '#34D399', label: 'BN' };
    if (symbol.includes('BTC')) return { bg: '#F59E0B', text: '#FFFFFF', label: '₿' };
    if (symbol.includes('ETH')) return { bg: '#6366F1', text: '#FFFFFF', label: 'Ξ' };
    if (symbol.includes('EUR')) return { bg: '#0284C7', text: '#FFFFFF', label: '€' };
    if (symbol.includes('GBP')) return { bg: '#4C1D95', text: '#A78BFA', label: '£' };
    return { bg: '#1E293B', text: '#94A3B8', label: symbol.substring(0, 2) };
  };

  const categoryTickers = mockTickers.filter((t) => t.category === selectedCategory);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const firstTicker = mockTickers.find((t) => t.category === catId);
    if (firstTicker) {
      setSelectedSymbol(firstTicker.symbol);
    }
  };

  const currentTicker = categoryTickers.find((t) => t.symbol === selectedSymbol) || categoryTickers[0] || mockTickers[0];
  const { ticker, candles, loading } = useMarketData(currentTicker.symbol, timeframe);
  const activeTicker = ticker || currentTicker;

  const formatPrice = (val) => {
    if (val === undefined || val === null) return '';
    return activeTicker.price < 10 ? val.toFixed(4) : val.toLocaleString();
  };

  const activeBadge = getBadgeColor(activeTicker.symbol);

  return (
    <section className="market-explorer-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="simulated-badge" style={{ marginBottom: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            🟢 LIVE MARKET DASHBOARD
          </div>
          <h2>Market Summary</h2>
          <p>
            Select categories below or click any index on the right list to update the main interactive chart.
          </p>
        </div>

        {/* Top Toggles: Forex, Crypto, Indian Markets, Indian Currency Exchange */}
        <div className="market-cat-toggles">
          {mockMarketCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Landmark;
            return (
              <button
                key={cat.id}
                className={`cat-toggle-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONDITION 1: FOR FOREX, CRYPTO, AND INDIAN MARKETS — SHOW GROWW / TRADINGVIEW DASHBOARD GRID */}
        {selectedCategory !== 'indian_currency' ? (
          <div className="groww-dashboard-grid">
            {/* LEFT COLUMN: MAIN INTERACTIVE CHART */}
            <div className="main-chart-card glass-card">
              <div className="groww-chart-header">
                <div className="groww-title-group">
                  <div className="badge-circle" style={{ backgroundColor: activeTicker.badgeBg || activeBadge.bg, color: activeTicker.badgeColor || activeBadge.text }}>
                    {activeTicker.badgeText || activeBadge.label}
                  </div>
                  <div>
                    <div className="groww-name-row">
                      <h3 className="groww-asset-name">{activeTicker.name}</h3>
                      <span className="groww-tag-pill">{activeTicker.tag || activeTicker.symbol}</span>
                      <span className="live-dot-green"></span>
                    </div>

                    <div className="groww-price-row">
                      <span className="groww-price">{activeTicker.currency}{formatPrice(activeTicker.price)}</span>
                      <span className="price-unit-lbl">{activeTicker.unit || 'POINT'}</span>
                      <span className={`groww-change-pill ${activeTicker.change >= 0 ? 'text-gain' : 'text-loss'}`}>
                        {activeTicker.changePercent >= 0 ? '+' : ''}{activeTicker.changePercent}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeframe Buttons */}
                <div className="timeframe-group">
                  {['1D', '1W', '1M', '1Y', 'ALL'].map((tf) => (
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

              {/* Smooth Green Area Chart */}
              <div className="groww-chart-wrapper">
                {loading ? (
                  <div className="chart-loading">Loading market chart...</div>
                ) : (
                  <ResponsiveContainer width="100%" height={360}>
                    <AreaChart data={candles} margin={{ top: 15, right: 15, left: 10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.22} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0.01} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.04)" vertical={false} />
                      <XAxis dataKey="time" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94A3B8" fontSize={11} domain={['auto', 'auto']} orientation="right" tickLine={false} axisLine={false} hide />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0F172A', borderColor: '#10B981', borderRadius: '10px', color: '#FFF' }}
                        formatter={(val) => [`${activeTicker.currency}${val}`, 'PRICE']}
                      />
                      <Area type="monotone" dataKey="close" stroke="#10B981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGreen)" />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: MAJOR INDICES / WATCHLIST LIST */}
            <div className="indices-watchlist-card glass-card">
              <div className="watchlist-header">
                <h3>Major indices</h3>
              </div>

              <div className="indices-list">
                {categoryTickers.map((item) => {
                  const itemBadge = getBadgeColor(item.symbol);
                  const isSelected = activeTicker.symbol === item.symbol;
                  return (
                    <div
                      key={item.symbol}
                      className={`index-row-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedSymbol(item.symbol)}
                    >
                      <div className="index-item-left">
                        <div className="badge-circle-sm" style={{ backgroundColor: item.badgeBg || itemBadge.bg, color: item.badgeColor || itemBadge.text }}>
                          {item.badgeText || itemBadge.label}
                        </div>
                        <div>
                          <div className="index-title-line">
                            <span className="index-item-name">{item.name}</span>
                          </div>
                          <span className="index-item-symbol">{item.tag || item.symbol}</span>
                        </div>
                      </div>

                      <div className="index-item-right text-right">
                        <span className="index-item-price">{item.currency}{formatPrice(item.price)} <small className="unit-sm">{item.unit || 'POINT'}</small></span>
                        <span className={`index-item-change ${item.change >= 0 ? 'text-gain' : 'text-loss'}`}>
                          {item.changePercent >= 0 ? '+' : ''}{item.changePercent}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="watchlist-footer">
                <Link to="/explore" className="see-all-link">
                  <span>See all major indices</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* CONDITION 2: FOR INDIAN CURRENCY EXCHANGE — SHOW 6 COUNTRY CURRENCY EXCHANGE CARDS TO INR */
          <div className="currency-cards-wrapper">
            <div className="currency-grid-header text-center">
              <h3>6 Country Currency Exchange Rates to Indian Rupee (INR ₹)</h3>
              <p>Real-time simulated exchange rates converted directly into Indian Rupees.</p>
            </div>

            <div className="grid-3 currency-cards-grid">
              {categoryTickers.map((item) => (
                <div key={item.symbol} className="currency-card glass-card">
                  <div className="currency-card-top">
                    <div className="flag-symbol-group">
                      <span className="country-flag">{item.flag}</span>
                      <div>
                        <span className="currency-symbol">{item.symbol}</span>
                        <h4 className="country-name">{item.country}</h4>
                      </div>
                    </div>
                    <span className="status-pill">{item.status}</span>
                  </div>

                  <div className="currency-rate-box">
                    <span className="rate-ratio-tag">{item.rateRatio}</span>
                    <div className="inr-price-display">
                      <span className="inr-symbol">₹</span>
                      <span className="inr-val">{item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="currency-card-meta">
                    <div className={`change-pill ${item.change >= 0 ? 'bg-gain text-gain' : 'bg-loss text-loss'}`}>
                      {item.change >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      <span>{item.changePercent >= 0 ? '+' : ''}{item.changePercent}%</span>
                    </div>
                    <span className="meta-vol">Vol: {item.volume}</span>
                  </div>

                  <p className="currency-explanation">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Footer CTA */}
        <div className="market-section-footer">
          <Link to="/explore" className="btn-primary">
            <span>Open Full Market Explorer</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Modals */}
      {showTeachModal && (
        <TeachMeChartModal
          isOpen={showTeachModal}
          onClose={() => setShowTeachModal(false)}
          symbol={activeTicker.symbol}
        />
      )}
    </section>
  );
}
