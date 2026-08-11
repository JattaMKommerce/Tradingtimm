/**
 * Realistic Mock Market Data for TradingTimm.ai
 * Clear label: SIMULATED DATA
 */

export const mockMarketCategories = [
  { id: 'forex', label: 'Forex', icon: 'Coins', description: 'EUR/USD, GBP/USD, USD/JPY, AUD/USD' },
  { id: 'crypto', label: 'Crypto', icon: 'Bitcoin', description: 'BTC/USD, ETH/USD, SOL/USD, BTC/INR' },
  { id: 'indian_markets', label: 'Indian Markets', icon: 'Landmark', description: 'NIFTY 50, SENSEX, BANK NIFTY, NIFTY IT' },
  { id: 'indian_currency', label: 'Indian Currency Exchange', icon: 'IndianRupee', description: '6 Country Exchange Rates to INR (₹)' },
];

export const mockTickers = [
  // FOREX
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    category: 'forex',
    price: 1.0895,
    change: 0.0042,
    changePercent: 0.39,
    high24h: 1.0920,
    low24h: 1.0845,
    volume: '$420B',
    currency: '$',
    sentiment: 'Bullish',
    sentimentScore: 64,
    status: 'Open 24/5',
    movingAverage50: 1.0820,
    movingAverage200: 1.0780,
    rsi: 58.6,
    explanation: 'EUR/USD represents how many US Dollars buy 1 Euro. It is the most actively traded currency pair globally.'
  },
  {
    symbol: 'GBP/USD',
    name: 'British Pound / US Dollar',
    category: 'forex',
    price: 1.2780,
    change: -0.0035,
    changePercent: -0.27,
    high24h: 1.2840,
    low24h: 1.2750,
    volume: '$280B',
    currency: '$',
    sentiment: 'Bearish',
    sentimentScore: 41,
    status: 'Open 24/5',
    movingAverage50: 1.2810,
    movingAverage200: 1.2690,
    rsi: 44.2,
    explanation: 'Shows how many US Dollars buy 1 British Pound.'
  },
  {
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    category: 'forex',
    price: 147.25,
    change: -0.85,
    changePercent: -0.57,
    high24h: 148.40,
    low24h: 146.80,
    volume: '$310B',
    currency: '¥',
    sentiment: 'Bearish',
    sentimentScore: 38,
    status: 'Open 24/5',
    movingAverage50: 151.10,
    movingAverage200: 154.50,
    rsi: 36.9,
    explanation: 'Shows how many Japanese Yen exchange for 1 US Dollar.'
  },
  {
    symbol: 'AUD/USD',
    name: 'Australian Dollar / US Dollar',
    category: 'forex',
    price: 0.6580,
    change: 0.0021,
    changePercent: 0.32,
    high24h: 0.6610,
    low24h: 0.6540,
    volume: '$115B',
    currency: '$',
    sentiment: 'Bullish',
    sentimentScore: 59,
    status: 'Open 24/5',
    movingAverage50: 0.6540,
    movingAverage200: 0.6480,
    rsi: 56.1,
    explanation: 'Shows how many US Dollars buy 1 Australian Dollar.'
  },

  // CRYPTO
  {
    symbol: 'BTC/USD',
    name: 'Bitcoin / US Dollar',
    category: 'crypto',
    price: 64850.00,
    change: 1420.00,
    changePercent: 2.24,
    high24h: 65400.00,
    low24h: 63100.00,
    volume: '$28.4B',
    currency: '$',
    sentiment: 'Strong Bullish',
    sentimentScore: 84,
    status: 'Open 24/7',
    movingAverage50: 61800.00,
    movingAverage200: 58400.00,
    rsi: 68.9,
    explanation: 'Bitcoin is the pioneer decentralized digital asset.'
  },
  {
    symbol: 'ETH/USD',
    name: 'Ethereum / US Dollar',
    category: 'crypto',
    price: 3450.00,
    change: 85.00,
    changePercent: 2.53,
    high24h: 3490.00,
    low24h: 3320.00,
    volume: '$14.2B',
    currency: '$',
    sentiment: 'Bullish',
    sentimentScore: 76,
    status: 'Open 24/7',
    movingAverage50: 3210.00,
    movingAverage200: 3050.00,
    rsi: 64.1,
    explanation: 'Ethereum powers decentralized smart contracts and Web3 protocols.'
  },
  {
    symbol: 'SOL/USD',
    name: 'Solana / US Dollar',
    category: 'crypto',
    price: 158.40,
    change: 7.20,
    changePercent: 4.76,
    high24h: 161.00,
    low24h: 149.50,
    volume: '$3.8B',
    currency: '$',
    sentiment: 'Strong Bullish',
    sentimentScore: 88,
    status: 'Open 24/7',
    movingAverage50: 141.00,
    movingAverage200: 132.00,
    rsi: 74.5,
    explanation: 'Solana is a high-speed blockchain network for high-frequency transactions.'
  },
  {
    symbol: 'BTC/INR',
    name: 'Bitcoin / Indian Rupee',
    category: 'crypto',
    price: 5440000.00,
    change: 125000.00,
    changePercent: 2.35,
    high24h: 5490000.00,
    low24h: 5290000.00,
    volume: '₹2,350 Cr',
    currency: '₹',
    sentiment: 'Bullish',
    sentimentScore: 82,
    status: 'Open 24/7',
    movingAverage50: 5180000.00,
    movingAverage200: 4890000.00,
    rsi: 67.8,
    explanation: 'Bitcoin price expressed directly in Indian Rupees.'
  },

  // INDIAN MARKETS & MAJOR INDICES
  {
    symbol: 'NIFTY50',
    tag: 'NIFTY',
    name: 'Nifty 50',
    category: 'indian_markets',
    price: 24587.00,
    change: 17.20,
    changePercent: 0.07,
    unit: 'POINT',
    high24h: 24620.00,
    low24h: 24350.20,
    volume: '₹14,850 Cr',
    currency: '',
    sentiment: 'Bullish',
    badgeText: '50',
    badgeBg: '#1E1B4B',
    badgeColor: '#FFFFFF',
    explanation: 'The NIFTY 50 represents the top 50 large-cap companies on the National Stock Exchange of India.'
  },
  {
    symbol: 'SENSEX',
    tag: 'SENSEX',
    name: 'Sensex',
    category: 'indian_markets',
    price: 78522.80,
    change: 23.55,
    changePercent: 0.03,
    unit: 'POINT',
    badgeText: 'BSE',
    badgeBg: '#0284C7',
    badgeColor: '#FFFFFF',
    explanation: 'SENSEX measures 30 established companies on the Bombay Stock Exchange.'
  },
  {
    symbol: 'SPX',
    tag: 'SPX',
    name: 'S&P 500',
    category: 'indian_markets',
    price: 7757.64,
    change: 47.70,
    changePercent: 0.62,
    unit: 'POINT',
    badgeText: '500',
    badgeBg: '#DC2626',
    badgeColor: '#FFFFFF',
    explanation: 'Standard & Poor 500 tracking 500 top US corporations.'
  },
  {
    symbol: 'NDX',
    tag: 'NDX',
    name: 'Nasdaq 100',
    category: 'indian_markets',
    price: 29722.30,
    change: 349.10,
    changePercent: 1.19,
    unit: 'POINT',
    badgeText: '100',
    badgeBg: '#0284C7',
    badgeColor: '#FFFFFF',
    explanation: 'Nasdaq 100 tech-heavy benchmark index.'
  },
  {
    symbol: 'NI225',
    tag: 'NI225',
    name: 'Japan 225',
    category: 'indian_markets',
    price: 66970.00,
    change: 1362.40,
    changePercent: 2.08,
    unit: 'JPY',
    badgeText: '225',
    badgeBg: '#1E293B',
    badgeColor: '#FFFFFF',
    explanation: 'Nikkei 225 index for Tokyo Stock Exchange.'
  },
  {
    symbol: 'SSE',
    tag: '000001',
    name: 'SSE Composite',
    category: 'indian_markets',
    price: 3966.59,
    change: 26.35,
    changePercent: 0.67,
    unit: 'POINT',
    badgeText: 'SSE',
    badgeBg: '#0F172A',
    badgeColor: '#FFFFFF',
    explanation: 'Shanghai Stock Exchange Composite Index.'
  },
  {
    symbol: 'FTSE',
    tag: 'UKX',
    name: 'FTSE 100',
    category: 'indian_markets',
    price: 10886.51,
    change: -14.15,
    changePercent: -0.13,
    unit: 'POINT',
    badgeText: '100',
    badgeBg: '#0284C7',
    badgeColor: '#FFFFFF',
    explanation: 'Financial Times Stock Exchange 100 Index London.'
  },
  {
    symbol: 'NIFTYIT',
    name: 'NIFTY IT Index',
    category: 'indian_markets',
    price: 38950.40,
    change: 620.10,
    changePercent: 1.62,
    high24h: 39100.00,
    low24h: 38200.00,
    volume: '₹5,310 Cr',
    currency: '₹',
    sentiment: 'Bullish',
    sentimentScore: 81,
    status: 'Open',
    movingAverage50: 37400.00,
    movingAverage200: 35800.00,
    rsi: 71.2,
    explanation: 'Tracks Indian technology giants like TCS, Infosys, and Wipro.'
  },

  // 🇮🇳 INDIAN CURRENCY EXCHANGE (6 Countries to Indian Rupee INR ₹)
  {
    symbol: 'USD/INR',
    name: 'US Dollar (USA) ➔ INR',
    category: 'indian_currency',
    flag: '🇺🇸',
    country: 'United States',
    rateRatio: '1 USD = ₹83.92',
    price: 83.92,
    change: -0.10,
    changePercent: -0.12,
    high24h: 84.05,
    low24h: 83.85,
    volume: '₹45,200 Cr',
    currency: '₹',
    sentiment: 'Neutral',
    sentimentScore: 50,
    status: 'Open 24/5',
    explanation: 'US Dollar exchange rate against Indian Rupee. 1 US Dollar exchanges for ₹83.92.'
  },
  {
    symbol: 'EUR/INR',
    name: 'Euro (European Union) ➔ INR',
    category: 'indian_currency',
    flag: '🇪🇺',
    country: 'European Union',
    rateRatio: '1 EUR = ₹91.45',
    price: 91.45,
    change: 0.28,
    changePercent: 0.31,
    high24h: 91.70,
    low24h: 91.10,
    volume: '₹12,400 Cr',
    currency: '₹',
    sentiment: 'Bullish',
    sentimentScore: 61,
    status: 'Open 24/5',
    explanation: 'Euro currency exchange rate against Indian Rupee. 1 Euro exchanges for ₹91.45.'
  },
  {
    symbol: 'GBP/INR',
    name: 'British Pound (UK) ➔ INR',
    category: 'indian_currency',
    flag: '🇬🇧',
    country: 'United Kingdom',
    rateRatio: '1 GBP = ₹107.25',
    price: 107.25,
    change: -0.18,
    changePercent: -0.17,
    high24h: 107.60,
    low24h: 106.90,
    volume: '₹9,800 Cr',
    currency: '₹',
    sentiment: 'Neutral',
    sentimentScore: 47,
    status: 'Open 24/5',
    explanation: 'British Pound Sterling exchange rate against Indian Rupee. 1 GBP exchanges for ₹107.25.'
  },
  {
    symbol: 'JPY/INR',
    name: '100 Yen (Japan) ➔ INR',
    category: 'indian_currency',
    flag: '🇯🇵',
    country: 'Japan',
    rateRatio: '100 JPY = ₹57.02',
    price: 57.02,
    change: 0.32,
    changePercent: 0.56,
    high24h: 57.25,
    low24h: 56.60,
    volume: '₹4,100 Cr',
    currency: '₹',
    sentiment: 'Bullish',
    sentimentScore: 65,
    status: 'Open 24/5',
    explanation: '100 Japanese Yen exchange rate against Indian Rupee. 100 Yen exchanges for ₹57.02.'
  },
  {
    symbol: 'AUD/INR',
    name: 'Australian Dollar ➔ INR',
    category: 'indian_currency',
    flag: '🇦🇺',
    country: 'Australia',
    rateRatio: '1 AUD = ₹55.15',
    price: 55.15,
    change: 0.18,
    changePercent: 0.33,
    high24h: 55.40,
    low24h: 54.85,
    volume: '₹3,200 Cr',
    currency: '₹',
    sentiment: 'Bullish',
    sentimentScore: 58,
    status: 'Open 24/5',
    explanation: 'Australian Dollar exchange rate against Indian Rupee. 1 AUD exchanges for ₹55.15.'
  },
  {
    symbol: 'CAD/INR',
    name: 'Canadian Dollar ➔ INR',
    category: 'indian_currency',
    flag: '🇨🇦',
    country: 'Canada',
    rateRatio: '1 CAD = ₹61.20',
    price: 61.20,
    change: -0.08,
    changePercent: -0.13,
    high24h: 61.45,
    low24h: 60.95,
    volume: '₹2,950 Cr',
    currency: '₹',
    sentiment: 'Neutral',
    sentimentScore: 51,
    status: 'Open 24/5',
    explanation: 'Canadian Dollar exchange rate against Indian Rupee. 1 CAD exchanges for ₹61.20.'
  }
];

// Helper to generate mock candles
function generateMockCandles(basePrice, count, volatility = 0.008, isIntraday = false) {
  const candles = [];
  let current = basePrice * 0.92;
  const now = new Date('2026-08-08T13:00:00Z');

  for (let i = count; i >= 0; i--) {
    const timeDate = new Date(now.getTime() - i * (isIntraday ? 5 * 60 * 1000 : 24 * 60 * 60 * 1000));
    const timeLabel = isIntraday
      ? timeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : `${timeDate.getMonth() + 1}/${timeDate.getDate()}`;

    const randomChange = (Math.random() - 0.47) * volatility * current;
    const open = current;
    const close = open + randomChange;
    const high = Math.max(open, close) + Math.random() * volatility * 0.5 * current;
    const low = Math.min(open, close) - Math.random() * volatility * 0.5 * current;
    const volume = Math.floor(Math.random() * 50000 + 10000);
    
    const ma10 = current * (1 + Math.sin(i / 4) * 0.015);
    const ma30 = current * (1 + Math.cos(i / 8) * 0.025);

    let signal = null;
    if (i % 9 === 3 && close > open) {
      signal = 'BUY';
    } else if (i % 9 === 7 && close < open) {
      signal = 'SELL';
    }

    const decimals = basePrice < 10 ? 4 : 2;

    candles.push({
      time: timeLabel,
      timestamp: timeDate.getTime(),
      open: parseFloat(open.toFixed(decimals)),
      high: parseFloat(high.toFixed(decimals)),
      low: parseFloat(low.toFixed(decimals)),
      close: parseFloat(close.toFixed(decimals)),
      price: parseFloat(close.toFixed(decimals)),
      volume,
      ma10: parseFloat(ma10.toFixed(decimals)),
      ma30: parseFloat(ma30.toFixed(decimals)),
      rsi: Math.floor(35 + Math.sin(i) * 30 + Math.random() * 10),
      signal,
    });

    current = close;
  }
  return candles;
}

export const mockHistoricalData = {
  'EUR/USD': { '1D': generateMockCandles(1.0895, 45, 0.004, false) },
  'GBP/USD': { '1D': generateMockCandles(1.2780, 45, 0.005, false) },
  'USD/JPY': { '1D': generateMockCandles(147.25, 45, 0.008, false) },
  'AUD/USD': { '1D': generateMockCandles(0.6580, 45, 0.006, false) },
  'BTC/USD': { '1D': generateMockCandles(64850.00, 50, 0.025, false) },
  'ETH/USD': { '1D': generateMockCandles(3450.00, 50, 0.028, false) },
  'SOL/USD': { '1D': generateMockCandles(158.40, 50, 0.035, false) },
  'BTC/INR': { '1D': generateMockCandles(5440000.00, 50, 0.025, false) },
  'NIFTY50': { '1D': generateMockCandles(24587.00, 45, 0.012, false), '1H': generateMockCandles(24587.00, 35, 0.006, false) },
  'SENSEX': { '1D': generateMockCandles(78522.80, 45, 0.012, false) },
  'SPX': { '1D': generateMockCandles(7757.64, 45, 0.008, false) },
  'NDX': { '1D': generateMockCandles(29722.30, 45, 0.014, false) },
  'NI225': { '1D': generateMockCandles(66970.00, 45, 0.016, false) },
  'SSE': { '1D': generateMockCandles(3966.59, 45, 0.009, false) },
  'FTSE': { '1D': generateMockCandles(10886.51, 45, 0.006, false) },
  'BANKNIFTY': { '1D': generateMockCandles(52340.50, 45, 0.014, false) },
  'NIFTYIT': { '1D': generateMockCandles(38950.40, 45, 0.015, false) },
  'USD/INR': { '1D': generateMockCandles(83.92, 45, 0.003, false) },
  'EUR/INR': { '1D': generateMockCandles(91.45, 45, 0.004, false) },
  'GBP/INR': { '1D': generateMockCandles(107.25, 45, 0.005, false) },
  'JPY/INR': { '1D': generateMockCandles(57.02, 45, 0.006, false) },
  'AUD/INR': { '1D': generateMockCandles(55.15, 45, 0.005, false) },
  'CAD/INR': { '1D': generateMockCandles(61.20, 45, 0.005, false) },
};
