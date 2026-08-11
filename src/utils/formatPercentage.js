/**
 * Percentage Formatting Utility for TradingTimm.ai
 */

export function formatPercentage(value, includeSign = true, decimals = 2) {
  if (value === undefined || value === null || isNaN(value)) return '0.00%';

  const num = Number(value);
  const sign = num > 0 && includeSign ? '+' : '';
  return `${sign}${num.toFixed(decimals)}%`;
}
