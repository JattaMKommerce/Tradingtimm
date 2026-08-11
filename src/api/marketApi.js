/**
 * Market API Interface Layer
 * 
 * TODO: Replace this implementation with the official Trading/Virtual Bees API
 * once the API key and API documentation are available.
 * 
 * Current behavior: Returns realistic simulated market data for Forex, Crypto,
 * Indian Markets, and Indian Currency pairs.
 */

import { mockMarketCategories, mockHistoricalData, mockTickers } from '../data/mockMarketData';

/**
 * Fetch overview of all supported market categories and featured tickers
 */
export async function getMarketOverview() {
  // TODO: Replace with fetch(`${API_CONFIG.BASE_URL}/markets/overview`, ...)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        categories: mockMarketCategories,
        tickers: mockTickers,
      });
    }, 150);
  });
}

/**
 * Fetch specific asset market data
 */
export async function getMarketData(symbol) {
  // TODO: Replace with fetch(`${API_CONFIG.BASE_URL}/markets/quote?symbol=${symbol}`)
  return new Promise((resolve) => {
    setTimeout(() => {
      const ticker = mockTickers.find((t) => t.symbol === symbol) || mockTickers[0];
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        data: ticker,
      });
    }, 100);
  });
}

/**
 * Fetch Forex pairs
 */
export async function getForexData() {
  // TODO: Replace with official Forex endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        data: mockTickers.filter((t) => t.category === 'forex'),
      });
    }, 100);
  });
}

/**
 * Fetch Crypto pairs
 */
export async function getCryptoData() {
  // TODO: Replace with official Crypto endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        data: mockTickers.filter((t) => t.category === 'crypto'),
      });
    }, 100);
  });
}

/**
 * Fetch Indian Equity & Index data
 */
export async function getIndianMarketData() {
  // TODO: Replace with official Indian Markets (NIFTY/SENSEX) endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        data: mockTickers.filter((t) => t.category === 'indian_markets'),
      });
    }, 100);
  });
}

/**
 * Fetch Indian Currency pairs (USD/INR, EUR/INR, etc.)
 */
export async function getCurrencyData() {
  // TODO: Replace with official INR currency pairs endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        data: mockTickers.filter((t) => t.category === 'indian_currency'),
      });
    }, 100);
  });
}

/**
 * Fetch OHLCV historical chart candles for given symbol and timeframe
 * Timeframes supported: '1m', '5m', '15m', '1H', '4H', '1D', '1W'
 */
export async function getHistoricalData(symbol, timeframe = '1D') {
  // TODO: Replace with fetch(`${API_CONFIG.BASE_URL}/markets/history?symbol=${symbol}&timeframe=${timeframe}`)
  return new Promise((resolve) => {
    setTimeout(() => {
      const candles = mockHistoricalData[symbol]?.[timeframe] || mockHistoricalData['NIFTY50']?.[timeframe] || [];
      resolve({
        status: 'success',
        sourceLabel: 'SIMULATED DATA',
        symbol,
        timeframe,
        candles,
      });
    }, 150);
  });
}
