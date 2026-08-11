/**
 * Market Data Service Layer for TradingTimm.ai
 * Isolates UI from backend / API dependencies.
 */

import * as marketApi from '../api/marketApi';
import { runSimulatedBacktest } from '../data/mockStrategies';

class MarketDataService {
  /**
   * Get categories and ticker summaries
   */
  async getOverview() {
    return await marketApi.getMarketOverview();
  }

  /**
   * Get single ticker quote details
   */
  async getQuote(symbol) {
    return await marketApi.getMarketData(symbol);
  }

  /**
   * Get historical chart candles
   */
  async getHistory(symbol, timeframe = '1D') {
    return await marketApi.getHistoricalData(symbol, timeframe);
  }

  /**
   * Run strategy backtest simulation
   */
  async executeBacktest(params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = runSimulatedBacktest(params);
        resolve(result);
      }, 300);
    });
  }

  /**
   * Helper to subscribe to simulated live ticker tick updates
   */
  subscribeTickerTicks(symbol, callback) {
    const interval = setInterval(() => {
      // Simulate minor price fluctuation (-0.2% to +0.2%)
      const deltaPercent = (Math.random() - 0.48) * 0.004;
      callback(deltaPercent);
    }, 2500);

    return () => clearInterval(interval);
  }
}

export const marketDataService = new MarketDataService();
export default marketDataService;
