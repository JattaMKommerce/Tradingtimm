import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ArrowUpRight, ArrowDownRight, CheckCircle } from 'lucide-react';
import { mockTickers } from '../data/mockMarketData';
import './IndianMarketSpotlight.css';

export default function IndianMarketSpotlight() {
  const indianTickers = mockTickers.filter(
    (t) => t.category === 'indian_markets' || t.symbol === 'USD/INR'
  ).slice(0, 4);

  return (
    <section className="indian-spotlight-section">
      <div className="container">
        <div className="indian-spotlight-banner glass-card">
          <div className="spotlight-header-row">
            <div>
              <div className="spotlight-badge">
                <Landmark size={14} /> NATIVE INDIAN MARKETS FOCUS
              </div>
              <h2>Built With Indian Markets in Mind</h2>
              <p>
                Seamlessly analyze NIFTY 50, BANK NIFTY, SENSEX, NIFTY IT, and INR currency pairs with native Indian Rupee (₹) formatting and market hours context.
              </p>
            </div>
            <Link to="/markets?category=indian_markets" className="btn-primary">
              Explore Indian Markets
            </Link>
          </div>

          <div className="grid-4 indian-cards-grid">
            {indianTickers.map((ticker) => (
              <div key={ticker.symbol} className="indian-mini-card">
                <div className="mini-card-top">
                  <span className="mini-symbol">{ticker.symbol}</span>
                  <span className={`mini-pill ${ticker.change >= 0 ? 'text-gain' : 'text-loss'}`}>
                    {ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent}%
                  </span>
                </div>
                <div className="mini-price">{ticker.currency}{ticker.price.toLocaleString()}</div>
                <div className="mini-volume">Vol: {ticker.volume}</div>
              </div>
            ))}
          </div>

          <div className="indian-features-row">
            <div className="indian-feat-item">
              <CheckCircle size={16} className="text-gain" />
              <span>Full NSE & BSE Index Coverage</span>
            </div>
            <div className="indian-feat-item">
              <CheckCircle size={16} className="text-gain" />
              <span>USD/INR & EUR/INR Currency Pair Tracking</span>
            </div>
            <div className="indian-feat-item">
              <CheckCircle size={16} className="text-gain" />
              <span>INR Standard Indian Numbering (₹1,00,000)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
