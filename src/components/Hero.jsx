import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import entryVideo from '../video/entry1.mp4';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section hero-compact-layout">
      <div className="container hero-container-compact">
        {/* Top Header Row with Tagline Pill on Left */}
        <div className="hero-top-header">
          <div className="hero-tagline-pill">
            <Sparkles size={14} className="sparkle-anim" />
            <span>Turn Trading Ideas Into Smarter Strategies</span>
          </div>
        </div>

        {/* 1. TOP HEADLINE (COMPACT & AT THE VERY TOP) */}
        <h1 className="hero-headline hero-headline-top">
          Trading Shouldn't Feel <span className="highlight-text">Complicated.</span>
        </h1>

        {/* 2. BORDERLESS VIDEO */}
        <div className="hero-video-clean-container">
          <video
            className="hero-clean-video"
            controls
            autoPlay
            muted
            loop
            playsInline
            src={entryVideo}
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* 3. SUBHEADLINE TEXT (BELOW VIDEO) */}
        <p className="hero-subheadline hero-subheadline-clean">
          TradingTimm.ai turns complex market concepts into simple visual strategies you can understand, explore, test, and automate.
        </p>

        {/* 4. HERO CTAS (BELOW SUBHEADLINE) */}
        <div className="hero-cta-group hero-cta-centered">
          <Link to="/explore" className="btn-primary hero-btn">
            <span>Explore Markets</span>
            <ArrowRight size={18} />
          </Link>

          <a href="#trading-one-minute" className="btn-secondary hero-btn">
            <Play size={16} fill="currentColor" />
            <span>How Trading Works</span>
          </a>
        </div>

        {/* 5. TRUST BADGES */}
        <div className="hero-trust-row hero-trust-centered">
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gain" />
            <span>Zero Jargon First</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gain" />
            <span>Simulated Visual Testing</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gain" />
            <span>Indian & Global Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
