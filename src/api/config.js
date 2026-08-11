/**
 * API Configuration Layer for TradingTimm.ai
 * 
 * TODO: Replace mock configurations with official Trading / Virtual Bees API
 * credentials once available.
 * 
 * NOTE: Never hardcode private API keys here. Always use environment variables
 * such as import.meta.env.VITE_TRADING_API_KEY when connecting to live backend endpoints.
 */

export const API_CONFIG = {
  // Base URL placeholder for market data services
  BASE_URL: import.meta.env.VITE_TRADING_API_BASE_URL || 'https://api.simulated-market.tradingtimm.ai/v1',
  
  // Market API key placeholder (DO NOT HARDCODE REAL KEYS)
  API_KEY: import.meta.env.VITE_TRADING_API_KEY || null,

  // Polling interval for simulated ticker updates (in milliseconds)
  SIMULATED_TICKER_INTERVAL_MS: 3000,

  // Environment mode
  IS_SIMULATED: true,

  // Label configuration
  DATA_SOURCE_LABEL: 'SIMULATED DATA',
  DEMO_MODE_NOTICE: 'Demonstration / Educational mode active. All market prices and strategy executions are simulated.',
};
