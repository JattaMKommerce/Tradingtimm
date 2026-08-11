import React from 'react';
import { X, LineChart, TrendingUp, TrendingDown, Layers, ShieldCheck } from 'lucide-react';
import './TeachMeChartModal.css';

export default function TeachMeChartModal({ isOpen, onClose, symbol = 'NIFTY50' }) {
  if (!isOpen) return null;

  return (
    <div className="teach-chart-overlay" onClick={onClose}>
      <div className="teach-chart-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="teach-chart-header">
          <div className="teach-title-group">
            <LineChart className="teach-title-icon" size={24} />
            <div>
              <h3>Explain This Chart ({symbol})</h3>
              <span className="teach-subtitle">Visual breakdown of what you're seeing</span>
            </div>
          </div>
          <button className="teach-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="teach-chart-grid">
          {/* Card 1: Main Line */}
          <div className="teach-card">
            <div className="teach-card-icon green">
              <TrendingUp size={20} />
            </div>
            <h4>1. What You're Seeing</h4>
            <p>
              The line shows how the asset price changed over time. Left is past; right is the current price.
            </p>
          </div>

          {/* Card 2: Green vs Red */}
          <div className="teach-card">
            <div className="teach-card-icon split">
              <TrendingUp size={16} className="text-gain" />
              <TrendingDown size={16} className="text-loss" />
            </div>
            <h4>2. Green & Red Areas</h4>
            <p>
              <strong>Green Area:</strong> Price increased during this period.
              <br />
              <strong>Red Area:</strong> Price decreased during this period.
            </p>
          </div>

          {/* Card 3: Moving Average */}
          <div className="teach-card">
            <div className="teach-card-icon purple">
              <Layers size={20} />
            </div>
            <h4>3. Moving Average Line</h4>
            <p>
              This smooth line averages past prices to help filter out quick noise and identify broader trend directions.
            </p>
          </div>

          {/* Card 4: Critical Responsible Note */}
          <div className="teach-card warning-card">
            <div className="teach-card-icon amber">
              <ShieldCheck size={20} />
            </div>
            <h4>4. Important Understanding</h4>
            <p>
              Charts describe <em>what happened in the past</em>. They do not guarantee what happens next.
            </p>
          </div>
        </div>

        <div className="teach-chart-footer">
          <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
