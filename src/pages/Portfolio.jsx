import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { PieChart as PieIcon, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { mockPortfolioSummary } from '../data/mockPortfolio';
import { formatCurrency } from '../utils/formatCurrency';
import TimmMascot from '../components/TimmMascot';
import './Portfolio.css';

export default function Portfolio() {
  const p = mockPortfolioSummary;

  return (
    <div className="portfolio-page container">
      {/* Header */}
      <div className="portfolio-header glass-card">
        <div className="simulated-badge" style={{ marginBottom: '8px' }}>
          SIMULATED PORTFOLIO DEMO
        </div>
        <h1>Portfolio Visualization</h1>
        <p>
          Simulated tracking of asset allocation, daily PnL returns, and strategy execution positions.
        </p>
      </div>

      <TimmMascot
        inline
        message="This dashboard simulates a multi-asset portfolio holding Indian equities, Crypto, Forex pairs, and cash reserves."
      />

      {/* Top Metric Banner */}
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

      {/* Main Grid: Asset Allocation Donut Chart + Breakdown */}
      <div className="port-main-grid">
        <div className="chart-card glass-card">
          <h3>Asset Allocation Breakdown</h3>
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={p.assetAllocations}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {p.assetAllocations.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#131A2A', borderColor: '#8B5CF6', borderRadius: '8px' }}
                  formatter={(val, name, entry) => [`${val}% (${formatCurrency(entry.payload.valueINR, '₹')})`, entry.payload.name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="allocation-legend-grid">
            {p.assetAllocations.map((item) => (
              <div key={item.name} className="alloc-item">
                <span className="alloc-dot" style={{ background: item.color }}></span>
                <span className="alloc-name">{item.name}</span>
                <span className="alloc-pct">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Simulated Positions */}
        <div className="positions-card glass-card">
          <h3>Active Simulated Positions</h3>
          <div className="positions-list">
            {p.activeSimulatedPositions.map((pos) => (
              <div key={pos.id} className="pos-item">
                <div className="pos-top">
                  <div>
                    <span className="pos-symbol">{pos.symbol}</span>
                    <span className="pos-type">{pos.assetType}</span>
                  </div>
                  <span className="pos-pnl text-gain">{pos.pnlINR} ({pos.pnlPercent})</span>
                </div>
                <div className="pos-strategy">{pos.strategy}</div>
                <div className="pos-stops-row">
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
  );
}
