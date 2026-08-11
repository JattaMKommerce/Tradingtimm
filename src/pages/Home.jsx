import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, ShieldAlert, CheckCircle2, LineChart, Cpu, Layers, HelpCircle } from 'lucide-react';

// Reusable Components
import Hero from '../components/Hero';
import MarketExplorerSection from '../components/MarketExplorerSection';
import IndianMarketSpotlight from '../components/IndianMarketSpotlight';
import AiVsAutomationCard from '../components/AiVsAutomationCard';
import WhatWouldYouDo from '../components/WhatWouldYouDo';
import TimmMascot from '../components/TimmMascot';
import TeachMeChartModal from '../components/TeachMeChartModal';

import tradingVideo from '../video/bg1.mp4';
import './Home.css';

export default function Home() {
  const [showTeachModal, setShowTeachModal] = useState(false);

  return (
    <main className="home-page-wrapper">
      {/* 1. HERO */}
      <Hero />

      {/* 2. SLEEK LOOPING VIDEO SECTION WITH COOL HEADING */}
      <section className="fullwidth-video-section">
        <div className="video-section-header">
          <span className="video-tagline">GLOBAL TRADING ECOSYSTEM</span>
          <h2 className="video-section-title">The premier ecosystem for global trade</h2>
        </div>
        <div className="fullwidth-video-wrapper">
          <video
            className="fullwidth-loop-video"
            autoPlay
            loop
            muted
            playsInline
            src={tradingVideo}
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>
      </section>

      {/* 3. EXPLORE MARKETS PREVIEW */}
      <MarketExplorerSection />

      {/* 5. UNDERSTAND CHARTS INTERACTIVE PREVIEW */}
      <section className="home-charts-section">
        <div className="container">
          <div className="charts-story-card glass-card">
            <div className="charts-story-header">
              <div>
                <span className="tagline">Zero-Jargon Chart Breakdown</span>
                <h2>Understand What Charts Are Actually Telling You</h2>
                <p>
                  Charts describe past price movement. Green means price increased; red means price decreased. Smooth moving average lines help identify broader trend direction.
                </p>
              </div>

              <button className="btn-primary" onClick={() => setShowTeachModal(true)}>
                <HelpCircle size={18} /> Launch "Teach Me This Chart" Guide
              </button>
            </div>

            <div className="charts-preview-visual">
              <div className="preview-stat">
                <span className="preview-label">Candlestick & Line Charts</span>
                <span className="preview-val text-gain">SHOW ➔ THEN EXPLAIN</span>
              </div>
              <p className="preview-sub">
                "Charts describe what happened in the past. They do not guarantee what happens next."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILD A STRATEGY PREVIEW */}
      <section className="home-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="tagline">No Code Required</span>
            <h2>Build a Strategy Using Simple Visual Rules</h2>
            <p>
              Turn your trading ideas into strict mathematical instructions: <strong>WHEN</strong> RSI &lt; 30 <strong>AND</strong> Price &gt; 50-EMA <strong>THEN BUY</strong>.
            </p>
          </div>

          <div className="home-cta-banner glass-card">
            <div className="cta-banner-text">
              <h3>Ready to test your strategy rules?</h3>
              <p>Enter the Interactive Strategy Lab to combine indicators, risk controls, and simulated execution.</p>
            </div>
            <Link to="/lab?tab=builder" className="btn-primary">
              <span>Open Strategy Builder</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BACKTEST IT PREVIEW */}
      <section className="home-preview-section alt-bg">
        <div className="container">
          <div className="grid-2 align-center">
            <div>
              <span className="tagline">Don't Guess. Test.</span>
              <h2>Replay History With Simulated Backtesting</h2>
              <p className="lead-text">
                "Let's replay the past and see what your strategy would have done."
              </p>
              <p className="body-text">
                Evaluate win rates, maximum drawdowns, and simulated equity growth curves using years of historical market candles before risking capital.
              </p>
              <Link to="/lab?tab=backtesting" className="btn-secondary" style={{ marginTop: '16px' }}>
                <span>Run Backtest Engine</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="visual-pipeline-box glass-card">
              <div className="pipe-line-item">Strategy Rules ➔</div>
              <div className="pipe-line-item">Historical Market Candles ➔</div>
              <div className="pipe-line-item">Simulation Engine ➔</div>
              <div className="pipe-line-item text-gain">Equity Growth & Drawdown Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MANAGE RISK */}
      <section className="home-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="tagline text-rose">Capital Preservation</span>
            <h2>Automation Doesn't Remove Risk.</h2>
            <p>It makes discipline easier to define through position sizing and emergency stop losses.</p>
          </div>

          <div className="home-risk-row">
            <div className="risk-mini-card glass-card">
              <ShieldAlert className="text-amber" size={24} />
              <h4>1. The 1% to 2% Max Risk Rule</h4>
              <p>Never risk more than 1% to 2% of overall account capital on any single trade position.</p>
            </div>

            <div className="risk-mini-card glass-card">
              <ShieldAlert className="text-rose" size={24} />
              <h4>2. Emergency Stop Loss</h4>
              <p>Think of it like an emergency brake on a train that halts movement instantly when danger arises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUTOMATION & AI VS AUTOMATION */}
      <AiVsAutomationCard />

      {/* 10. INDIAN MARKETS SPOTLIGHT */}
      <IndianMarketSpotlight />

      {/* 11. INTERACTIVE QUIZ */}
      <WhatWouldYouDo />

      {/* 12. WHY TRADINGTIMM.AI */}
      <section className="home-why-section">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Why TradingTimm.ai</span>
            <h2>A Premium Interactive Learning & Technology Experience</h2>
            <p>Designed for complete beginners, experienced traders, and non-technical enthusiasts alike.</p>
          </div>

          <div className="grid-3 why-grid">
            <div className="why-card glass-card">
              <CheckCircle2 size={24} className="text-gain" />
              <h3>Visual First Ordering</h3>
              <p>VISUAL ➔ SIMPLE EXPLANATION ➔ REAL-WORLD EXAMPLE ➔ TECHNICAL TERM.</p>
            </div>

            <div className="why-card glass-card">
              <CheckCircle2 size={24} className="text-gain" />
              <h3>Simulated Playground</h3>
              <p>Test strategies, position sizing, and backtests safely without risking actual capital.</p>
            </div>

            <div className="why-card glass-card">
              <CheckCircle2 size={24} className="text-gain" />
              <h3>Future API Architecture</h3>
              <p>Decoupled frontend service layer ready to connect to verified market APIs seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA BANNER */}
      <section className="home-final-cta">
        <div className="container">
          <div className="final-cta-card glass-card text-center">
            <Sparkles size={32} className="sparkle-anim text-purple" style={{ marginBottom: '16px' }} />
            <h2>Start Exploring Markets & Strategies Today</h2>
            <p>Understand the market. Build your strategy. Test your ideas. Manage your risk.</p>
            <div className="cta-btn-row">
              <Link to="/explore" className="btn-primary">
                Explore Markets
              </Link>
              <Link to="/lab" className="btn-secondary">
                Launch Strategy Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TeachMeChartModal
        isOpen={showTeachModal}
        onClose={() => setShowTeachModal(false)}
        symbol="NIFTY50"
      />
    </main>
  );
}
