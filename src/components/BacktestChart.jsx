import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { formatCurrency } from '../utils/formatCurrency';
import './BacktestChart.css';

export default function BacktestChart({ data, initialCapital = 100000, currency = '₹' }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="backtest-chart-wrapper glass-card">
      <div className="backtest-chart-header">
        <div>
          <h3>Simulated Equity Growth Curve</h3>
          <span className="simulated-badge">SIMULATED / ILLUSTRATIVE RESULTS</span>
        </div>
        <div className="capital-tag">
          Initial: <strong>{formatCurrency(initialCapital, currency)}</strong>
        </div>
      </div>

      <div className="recharts-box" style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="step" stroke="#64748B" fontSize={12} />
            <YAxis
              stroke="#64748B"
              fontSize={12}
              tickFormatter={(val) => `${currency}${(val / 1000).toFixed(0)}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#131A2A',
                borderColor: '#8B5CF6',
                borderRadius: '8px',
                color: '#FFF',
              }}
              formatter={(value) => [formatCurrency(value, currency), 'Portfolio Value']}
              labelFormatter={(label) => `Stage: ${label}`}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#equityGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-footer-note">
        💡 Hover over data points on the equity curve to inspect trade outcomes and portfolio valuation steps.
      </div>
    </div>
  );
}
