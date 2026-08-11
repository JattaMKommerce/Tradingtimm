/**
 * Currency Formatting Utility for TradingTimm.ai
 * Handles Indian Rupee (₹) and US Dollar ($) formatting cleanly.
 */

export function formatCurrency(value, currency = '₹', decimals = 2) {
  if (value === undefined || value === null || isNaN(value)) return `${currency}0.00`;

  const isINR = currency === '₹';
  const absValue = Math.abs(value);
  const prefix = value < 0 ? '-' : '';

  if (isINR) {
    // Format Indian Numbering System (e.g. ₹1,00,000.00)
    const formatted = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(absValue);
    return `${prefix}₹${formatted}`;
  } else {
    // Format Standard US/Global System (e.g. $100,000.00)
    const formatted = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(absValue);
    return `${prefix}${currency}${formatted}`;
  }
}
