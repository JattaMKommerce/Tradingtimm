import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, Cpu, Heart } from 'lucide-react';
import TimmMascot from '../components/TimmMascot';
import './About.css';

export default function About() {
  return (
    <div className="about-page container">
      {/* Header */}
      <div className="about-header glass-card">
        <span className="tagline">Our Mission</span>
        <h1>About TradingTimm.ai</h1>
        <p>
          Turn Trading Ideas Into Smarter Strategies.
        </p>
      </div>

      <div className="about-mascot-row glass-card">
        <div className="about-mascot-left">
          <div className="big-mascot-avatar">
            <Sparkles size={36} className="sparkle-anim" />
          </div>
          <div>
            <h2>Meet Timm — Your AI Trading Guide</h2>
            <p>
              Timm represents intelligence, coordination, strategy, automation, discipline, and consistency. Timm exists throughout the platform to guide beginners through complex financial charts without confusion or jargon.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-3 about-pillars-grid">
        <div className="pillar-card glass-card">
          <BookOpen className="text-purple" size={24} />
          <h3>1. Visual First Education</h3>
          <p>
            We believe complex financial concepts should be visually simple. A complete beginner should understand how trading works within 10 minutes.
          </p>
        </div>

        <div className="pillar-card glass-card">
          <Cpu className="text-cyan" size={24} />
          <h3>2. Algorithmic Discipline</h3>
          <p>
            Trading is not gambling. We teach rule-based strategy development, indicator testing, backtesting, and automated risk management.
          </p>
        </div>

        <div className="pillar-card glass-card">
          <ShieldCheck className="text-amber" size={24} />
          <h3>3. Complete Transparency</h3>
          <p>
            We never make fake claims like "guaranteed returns" or "risk-free profits". We highlight risks clearly so traders develop real discipline.
          </p>
        </div>
      </div>
    </div>
  );
}
