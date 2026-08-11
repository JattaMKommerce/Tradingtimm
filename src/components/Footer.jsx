import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldAlert } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="navbar-logo" style={{ marginBottom: '16px' }}>
            <div className="logo-icon-wrapper">
              <Sparkles className="logo-sparkle" size={20} />
            </div>
            <span className="logo-text">TradingTimm<span className="logo-ai">.ai</span></span>
          </Link>

          <p className="footer-tagline">
            Turn Trading Ideas Into Smarter Strategies.
          </p>
          <p className="footer-subtagline">
            Learn. Build. Test. Understand. Automate.
          </p>

          <div className="footer-simulated-badge">
            <span className="simulated-badge">SIMULATED MARKET DATA</span>
          </div>
        </div>

        {/* Product Links */}
        <div className="footer-links-col">
          <h4>Product Experiences</h4>
          <ul>
            <li><Link to="/explore">Market Explorer & Portfolio</Link></li>
            <li><Link to="/lab?tab=builder">Strategy Builder</Link></li>
            <li><Link to="/lab?tab=backtesting">Backtesting Simulation</Link></li>
            <li><Link to="/lab?tab=risk">Risk Simulator</Link></li>
            <li><Link to="/lab?tab=automation">Automation Pipeline</Link></li>
          </ul>
        </div>

        {/* Learning Links */}
        <div className="footer-links-col">
          <h4>Learn & Explore</h4>
          <ul>
            <li><Link to="/learn?tab=course">Guided Learning Course</Link></li>
            <li><Link to="/learn?tab=glossary">Trading Glossary</Link></li>
            <li><Link to="/learn?tab=beginner">Beginner Lessons</Link></li>
            <li><Link to="/learn?tab=advanced">Advanced Concepts</Link></li>
          </ul>
        </div>

        {/* Legal & Notice */}
        <div className="footer-links-col">
          <h4>Legal & Notice</h4>
          <ul>
            <li><span className="fake-link">Educational Concept</span></li>
            <li><span className="fake-link">Privacy Policy</span></li>
            <li><span className="fake-link">Terms of Service</span></li>
            <li><span className="fake-link">Risk Disclosure</span></li>
          </ul>
        </div>
      </div>

      {/* Prominent Educational & Risk Disclaimer Bar */}
      <div className="footer-disclaimer-bar">
        <div className="container disclaimer-content">
          <ShieldAlert className="disclaimer-icon" size={20} />
          <p>
            <strong>EDUCATIONAL & SIMULATION DISCLAIMER:</strong> Trading financial instruments involves significant financial risk. Historical or simulated performance results do not guarantee future returns. TradingTimm.ai is an educational technology demonstration project designed to simplify trading concepts and does not provide investment or financial advice. All prices, strategies, and backtest results presented on this website are simulated.
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} TradingTimm.ai</p>
      </div>
    </footer>
  );
}
