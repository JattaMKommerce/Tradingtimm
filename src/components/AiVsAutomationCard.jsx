import React from 'react';
import { Lightbulb, Code, Bot, Cpu, UserCheck } from 'lucide-react';
import './AiVsAutomationCard.css';

export default function AiVsAutomationCard() {
  const cards = [
    {
      title: 'Strategy',
      question: 'What should happen?',
      icon: Lightbulb,
      desc: 'The conceptual trading idea (e.g., "Buy when Nifty dips to major moving average support").',
      analogy: 'A chef defining a dish recipe.',
      color: '#06B6D4',
    },
    {
      title: 'Algorithm',
      question: 'How do we express that as rules?',
      icon: Code,
      desc: 'Translating the strategy into strict mathematical and logical step-by-step instructions.',
      analogy: 'Writing down exact recipe steps with precise weights and temperatures.',
      color: '#8B5CF6',
    },
    {
      title: 'Automation',
      question: 'When should the system run rules?',
      icon: Bot,
      desc: 'Executing the algorithmic code continuously across market data feeds without human emotion or sleep.',
      analogy: 'Setting a smart timer to bake the oven automatically at 6:00 AM.',
      color: '#10B981',
    },
    {
      title: 'AI (Artificial Intelligence)',
      question: 'Can models assist pattern analysis?',
      icon: Cpu,
      desc: 'Using machine learning models to identify complex data relationships, sentiment, or volatility regimes.',
      analogy: 'A smart kitchen assistant suggesting ingredient tweaks based on historical flavor reviews.',
      color: '#F59E0B',
    },
    {
      title: 'Human Decision',
      question: 'Who maintains discipline & oversight?',
      icon: UserCheck,
      desc: 'The trader evaluating overall risk limits, capital allocation, and strategy performance.',
      analogy: 'The master head chef reviewing food quality before it reaches guests.',
      color: '#EC4899',
    },
  ];

  return (
    <section className="ai-vs-auto-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Clear Up Market Misconceptions</span>
          <h2>AI vs. Automation vs. Algorithms</h2>
          <p>
            Not every automated trading system is "AI". Understanding these 5 distinct layers helps you design better systematic trading strategies.
          </p>
        </div>

        <div className="grid-5 ai-cards-grid">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="ai-concept-card glass-card">
                <div className="ai-card-header" style={{ color: item.color }}>
                  <div className="ai-icon-box" style={{ background: `${item.color}15` }}>
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                </div>

                <div className="ai-question" style={{ color: item.color }}>
                  "{item.question}"
                </div>

                <p className="ai-desc">{item.desc}</p>

                <div className="ai-analogy-box">
                  💡 <strong>Analogy:</strong> {item.analogy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
