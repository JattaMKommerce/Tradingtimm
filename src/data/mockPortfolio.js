/**
 * Simulated Portfolio Mock Data for TradingTimm.ai
 * Label: SIMULATED / DEMO DATA
 */

export const mockPortfolioSummary = {
  totalValueINR: 248500,
  dailyChangeINR: 3420,
  dailyChangePercent: 1.40,
  allTimeReturnINR: 48500,
  allTimeReturnPercent: 24.25,
  cashBalanceINR: 45000,
  allocatedCapitalINR: 203500,
  
  assetAllocations: [
    { name: 'Indian Equities & Indices', percentage: 45, color: '#10B981', valueINR: 111825 },
    { name: 'Crypto Assets', percentage: 25, color: '#8B5CF6', valueINR: 62125 },
    { name: 'Forex Pairs', percentage: 18, color: '#3B82F6', valueINR: 44730 },
    { name: 'Cash Reserve', percentage: 12, color: '#64748B', valueINR: 29820 },
  ],

  activeSimulatedPositions: [
    {
      id: 'pos-1',
      symbol: 'NIFTY50',
      strategy: 'Nifty Momentum Breakout',
      assetType: 'Indian Market',
      entryPrice: '₹24,120',
      currentPrice: '₹24,520.80',
      pnlINR: '+₹4,008',
      pnlPercent: '+1.66%',
      status: 'Active',
      stopLoss: '₹23,750',
      takeProfit: '₹25,200',
    },
    {
      id: 'pos-2',
      symbol: 'BTC/USD',
      strategy: 'Crypto RSI Reversion',
      assetType: 'Crypto',
      entryPrice: '$63,400',
      currentPrice: '$64,850.00',
      pnlINR: '+₹11,600',
      pnlPercent: '+2.29%',
      status: 'Active',
      stopLoss: '$61,500',
      takeProfit: '$68,000',
    },
    {
      id: 'pos-3',
      symbol: 'EUR/USD',
      strategy: 'Forex Golden Cross',
      assetType: 'Forex',
      entryPrice: '1.0850',
      currentPrice: '1.0895',
      pnlINR: '+₹3,600',
      pnlPercent: '+0.41%',
      status: 'Active',
      stopLoss: '1.0790',
      takeProfit: '1.1010',
    },
  ]
};
