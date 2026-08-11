/**
 * Mock Strategies & Backtest Engine Data for TradingTimm.ai
 * Clear label: SIMULATED RESULTS
 */

export const mockIndicators = [
  { id: 'RSI', name: 'RSI (Relative Strength Index)', type: 'Momentum', description: 'Measures speed and change of price movements on a scale of 0 to 100.' },
  { id: 'EMA20', name: '20-Period Exponential Moving Average', type: 'Trend', description: 'Tracks the average price weighted towards recent candles to identify short-term trends.' },
  { id: 'EMA200', name: '200-Period Exponential Moving Average', type: 'Trend', description: 'Gold standard long-term trend boundary indicator.' },
  { id: 'MACD', name: 'MACD Signal Line', type: 'Momentum', description: 'Compares two moving averages to spot momentum changes.' },
  { id: 'PRICE', name: 'Current Market Price', type: 'Price Action', description: 'Direct price of the asset.' },
];

export const mockOperators = [
  { id: 'IS_BELOW', label: 'is below' },
  { id: 'IS_ABOVE', label: 'is above' },
  { id: 'CROSSES_ABOVE', label: 'crosses above' },
  { id: 'CROSSES_BELOW', label: 'crosses below' },
  { id: 'EQUALS', label: 'is equal to' },
];

export const mockPrebuiltStrategies = [
  {
    id: 'nifty-momentum',
    name: 'Nifty Momentum Breakout',
    author: 'Timm AI Labs',
    category: 'Indian Markets',
    assetSymbol: 'NIFTY50',
    description: 'Captures strong upward price momentum when Nifty 50 trades above its 50 EMA with healthy RSI levels.',
    riskLevel: 'Moderate',
    winRate: 64.5,
    maxDrawdown: 9.8,
    totalReturn: 28.4,
    profitFactor: 2.15,
    totalTrades: 84,
    rules: [
      'WHEN Price crosses above 50-EMA',
      'AND RSI is above 55',
      'THEN BUY position',
      'STOP LOSS: 1.5% | TAKE PROFIT: 4.5%'
    ],
    historicalEquity: [
      { date: 'Jan', value: 100000 },
      { date: 'Feb', value: 104500 },
      { date: 'Mar', value: 102100 },
      { date: 'Apr', value: 109800 },
      { date: 'May', value: 114200 },
      { date: 'Jun', value: 111500 },
      { date: 'Jul', value: 122000 },
      { date: 'Aug', value: 128400 },
    ]
  },
  {
    id: 'crypto-rsi-scalper',
    name: 'Crypto RSI Reversion',
    author: 'Algorithmic Guild',
    category: 'Crypto',
    assetSymbol: 'BTC/USD',
    description: 'Looks for short-term oversold conditions on Bitcoin when RSI drops below 30 and starts turning upward.',
    riskLevel: 'High',
    winRate: 58.2,
    maxDrawdown: 14.2,
    totalReturn: 42.1,
    profitFactor: 1.88,
    totalTrades: 142,
    rules: [
      'WHEN RSI is below 30',
      'AND Price turns positive on 1H timeframe',
      'THEN BUY position',
      'STOP LOSS: 3.0% | TAKE PROFIT: 7.5%'
    ],
    historicalEquity: [
      { date: 'Jan', value: 100000 },
      { date: 'Feb', value: 108000 },
      { date: 'Mar', value: 103000 },
      { date: 'Apr', value: 119000 },
      { date: 'May', value: 126000 },
      { date: 'Jun', value: 121000 },
      { date: 'Jul', value: 135000 },
      { date: 'Aug', value: 142100 },
    ]
  },
  {
    id: 'forex-golden-cross',
    name: 'Forex Golden Cross Trend',
    author: 'Quantitative FX',
    category: 'Forex',
    assetSymbol: 'EUR/USD',
    description: 'Classic trend-following strategy that enters when 50 EMA crosses above 200 EMA on EUR/USD.',
    riskLevel: 'Low',
    winRate: 71.0,
    maxDrawdown: 6.4,
    totalReturn: 18.6,
    profitFactor: 2.45,
    totalTrades: 46,
    rules: [
      'WHEN 50 EMA crosses above 200 EMA',
      'AND Volatility is Moderate',
      'THEN BUY position',
      'STOP LOSS: 1.0% | TAKE PROFIT: 3.0%'
    ],
    historicalEquity: [
      { date: 'Jan', value: 100000 },
      { date: 'Feb', value: 102400 },
      { date: 'Mar', value: 105100 },
      { date: 'Apr', value: 107800 },
      { date: 'May', value: 106900 },
      { date: 'Jun', value: 112400 },
      { date: 'Jul', value: 115800 },
      { date: 'Aug', value: 118600 },
    ]
  },
  {
    id: 'inr-range-trader',
    name: 'USD/INR Range Reversion',
    author: 'Macro India Capital',
    category: 'Indian Currency',
    assetSymbol: 'USD/INR',
    description: 'Trades currency pair bounds when USD/INR approaches major support/resistance levels.',
    riskLevel: 'Low',
    winRate: 68.4,
    maxDrawdown: 4.8,
    totalReturn: 14.2,
    profitFactor: 2.10,
    totalTrades: 62,
    rules: [
      'WHEN Price reaches Bollinger Lower Band',
      'AND RSI is below 35',
      'THEN BUY USD/INR',
      'STOP LOSS: 0.5% | TAKE PROFIT: 1.2%'
    ],
    historicalEquity: [
      { date: 'Jan', value: 100000 },
      { date: 'Feb', value: 101800 },
      { date: 'Mar', value: 103500 },
      { date: 'Apr', value: 105200 },
      { date: 'May', value: 107900 },
      { date: 'Jun', value: 109400 },
      { date: 'Jul', value: 112100 },
      { date: 'Aug', value: 114200 },
    ]
  }
];

export function runSimulatedBacktest({ strategyId, initialCapital = 100000, timeframe = '1D', stopLossPct = 2, takeProfitPct = 5 }) {
  const strategy = mockPrebuiltStrategies.find(s => s.id === strategyId) || mockPrebuiltStrategies[0];
  
  const returnMultiplier = 1 + (strategy.totalReturn / 100) * (1 + (takeProfitPct - 5) * 0.04);
  const finalValue = Math.round(initialCapital * returnMultiplier);
  const totalReturn = parseFloat(((finalValue - initialCapital) / initialCapital * 100).toFixed(2));
  
  // Generate simulated trades log
  const mockTrades = [
    { id: 1, date: '2026-06-04', type: 'BUY', price: '₹24,120', exitPrice: '₹24,650', returnPct: '+2.2%', profit: '+₹2,200', status: 'Profit' },
    { id: 2, date: '2026-06-18', type: 'BUY', price: '₹24,500', exitPrice: '₹24,110', returnPct: '-1.6%', profit: '-₹1,600', status: 'Loss' },
    { id: 3, date: '2026-07-02', type: 'BUY', price: '₹24,200', exitPrice: '₹24,950', returnPct: '+3.1%', profit: '+₹3,100', status: 'Profit' },
    { id: 4, date: '2026-07-21', type: 'BUY', price: '₹24,800', exitPrice: '₹25,440', returnPct: '+2.58%', profit: '+₹2,580', status: 'Profit' },
    { id: 5, date: '2026-08-01', type: 'BUY', price: '₹24,350', exitPrice: '₹24,880', returnPct: '+2.17%', profit: '+₹2,170', status: 'Profit' },
  ];

  const equityCurve = [
    { step: 'Start', value: initialCapital, note: 'Initial Capital' },
    { step: 'Trade 1', value: Math.round(initialCapital * 1.022), note: 'Profit (+2.2%)' },
    { step: 'Trade 2', value: Math.round(initialCapital * 1.006), note: 'Stop Loss Hit (-1.6%)' },
    { step: 'Trade 3', value: Math.round(initialCapital * 1.037), note: 'Profit (+3.1%)' },
    { step: 'Trade 4', value: Math.round(initialCapital * 1.063), note: 'Take Profit (+2.58%)' },
    { step: 'Trade 5', value: finalValue, note: 'Final Position (+2.17%)' },
  ];

  return {
    isSimulated: true,
    sourceLabel: 'SIMULATED / ILLUSTRATIVE RESULTS',
    initialCapital,
    finalValue,
    totalReturn,
    winRate: strategy.winRate,
    maxDrawdown: strategy.maxDrawdown,
    profitFactor: strategy.profitFactor,
    totalTrades: strategy.totalTrades,
    trades: mockTrades,
    equityCurve,
  };
}
