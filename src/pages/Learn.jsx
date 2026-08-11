import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Search, HelpCircle, Compass, Shield, Cpu, Activity, Lightbulb, Play, CheckCircle } from 'lucide-react';
import { glossaryTerms } from '../data/glossaryData';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './Learn.css';

export default function Learn() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'course';

  const [activeTab, setActiveTab] = useState(initialTab); // 'course' | 'beginner' | 'intermediate' | 'advanced' | 'glossary'
  const [searchQuery, setSearchQuery] = useState('');
  const [volatilityMode, setVolatilityMode] = useState('calm'); // 'calm' | 'high'
  const [explainState, setExplainState] = useState(null);

  const courseLessons = [
    {
      id: 'l1',
      tier: 'beginner',
      stepNumber: '01',
      title: 'What is Trading?',
      subtitle: 'Capturing Price Movement Gains',
      visualConcept: '📈 Buying low at ₹100 ➔ Selling high at ₹120 ➔ Earning ₹20 difference.',
      simpleExplanation: 'Trading means buying and selling financial assets with the goal of benefiting from price changes over time.',
      realWorldAnalogy: 'Like buying a rare collectible item today for ₹500 and selling it next month for ₹700.',
      technicalTerm: 'Spot and Derivative Speculative Capital Exchange',
    },
    {
      id: 'l2',
      tier: 'beginner',
      stepNumber: '02',
      title: 'What is a Market?',
      subtitle: 'Where Buyers and Sellers Meet',
      visualConcept: '🏛️ Global digital meeting ground for equities, currencies, and crypto.',
      simpleExplanation: 'A market is a continuous electronic exchange where buyers and sellers state what price they are willing to trade.',
      realWorldAnalogy: 'A bustling fruit market where sellers state prices and buyers negotiate deals.',
      technicalTerm: 'Order Book Liquidity Matching Engine',
    },
    {
      id: 'l3',
      tier: 'beginner',
      stepNumber: '03',
      title: 'How Prices Move',
      subtitle: 'Supply vs Demand Dynamics',
      visualConcept: '⚖️ More Buyers than Sellers ➔ Price Rises. More Sellers than Buyers ➔ Price Falls.',
      simpleExplanation: 'Prices move when buyers and sellers disagree on an asset’s value. Increased demand pushes prices up.',
      realWorldAnalogy: 'A housing auction where price increases as more bidders enter the room.',
      technicalTerm: 'Bid-Ask Spread & Market Microstructure Equilibrium',
    },
    {
      id: 'l4',
      tier: 'intermediate',
      stepNumber: '04',
      title: 'How to Read a Chart',
      subtitle: 'OHLC Candlesticks & Line Charts',
      visualConcept: '🕯️ Green Candle = Price went UP. Red Candle = Price went DOWN.',
      simpleExplanation: 'Charts plot past asset prices over time to help analyze patterns, trends, and momentum.',
      realWorldAnalogy: 'A daily weather chart plotting high, low, starting, and ending temperatures.',
      technicalTerm: 'Temporal Price Action (OHLCV) Graphical Representation',
    },
    {
      id: 'l5',
      tier: 'intermediate',
      stepNumber: '05',
      title: 'What is a Strategy?',
      subtitle: 'Predefined Action Rules',
      visualConcept: '📋 1. Check RSI ➔ 2. Check 50 EMA ➔ 3. Trigger Buy ➔ 4. Set Stop Loss.',
      simpleExplanation: 'A strategy is a strict plan defining exactly when to enter a trade, when to exit, and how much to risk.',
      realWorldAnalogy: 'A step-by-step baking recipe with exact measurements and cooking times.',
      technicalTerm: 'Rule-Based Quantitative Trading Algorithm',
    },
    {
      id: 'l6',
      tier: 'intermediate',
      stepNumber: '06',
      title: 'What are Technical Indicators?',
      subtitle: 'Moving Averages & Oscillators',
      visualConcept: '〰️ Smooth lines filtering out quick noise to show broader trend direction.',
      simpleExplanation: 'Indicators are mathematical smooth lines calculated from past prices to identify trend momentum.',
      realWorldAnalogy: 'A vehicle speedometer showing how fast your car is travelling relative to limits.',
      technicalTerm: 'Quantitative Momentum and Trend Derivative Oscillators',
    },
    {
      id: 'l7',
      tier: 'advanced',
      stepNumber: '07',
      title: 'What is Backtesting?',
      subtitle: 'Replaying Historical Market Data',
      visualConcept: '⏪ Strategy ➔ Historical Market Data ➔ Simulation ➔ Win Rate & Drawdown Metrics.',
      simpleExplanation: 'Backtesting replays past historical market data to discover how your strategy would have performed.',
      realWorldAnalogy: 'A cricket team watching recordings of past matches to test a new fielding strategy before game day.',
      technicalTerm: 'Historical Performance Simulation Evaluation',
    },
    {
      id: 'l8',
      tier: 'advanced',
      stepNumber: '08',
      title: 'What is Risk Management?',
      subtitle: 'Capital Preservation & Loss Boundaries',
      visualConcept: '🛡️ Capital ➔ Position Size ➔ Emergency Stop Loss (Max 1% to 2% risk per trade).',
      simpleExplanation: 'Risk management sets strict boundaries on how much money you can lose on any single trade.',
      realWorldAnalogy: 'An emergency brake on a train that halts movement instantly when danger occurs.',
      technicalTerm: 'Position Sizing & Stop-Loss Capital Preservation Protocol',
    },
    {
      id: 'l9',
      tier: 'advanced',
      stepNumber: '09',
      title: 'What is Automation?',
      subtitle: 'Software Rule Execution Without Emotion',
      visualConcept: '🤖 Continuous 24/7 code monitoring rule conditions and executing signals calmly.',
      simpleExplanation: 'Automation lets software watch market prices and execute your predefined rules without emotional panic.',
      realWorldAnalogy: 'A smart home thermostat turning on AC automatically when temperature crosses 24°C.',
      technicalTerm: 'Automated Order Execution Pipeline',
    },
  ];

  const filteredLessons = courseLessons.filter((l) => {
    if (activeTab === 'beginner') return l.tier === 'beginner';
    if (activeTab === 'intermediate') return l.tier === 'intermediate';
    if (activeTab === 'advanced') return l.tier === 'advanced';
    return true; // 'course'
  });

  const filteredGlossary = glossaryTerms.filter((t) => {
    return (
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.simpleDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.realWorldAnalogy.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="learn-page container">
      {/* Header */}
      <div className="learn-header glass-card">
        <span className="tagline">Interactive Visual Academy</span>
        <h1>Learn Trading Without Jargon</h1>
        <p>
          Master financial markets through interactive visual diagrams, zero jargon, and real-world analogies.
        </p>

        {activeTab === 'glossary' && (
          <div className="glossary-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search 20+ terms (e.g. Stop Loss, Candlestick, RSI, Volatility)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>

      <TimmMascot
        inline
        message="Remember our golden rule: Always look at the VISUAL first, then the SIMPLE EXPLANATION, then the REAL-WORLD ANALOGY!"
      />

      {/* Internal Navigation Tabs inside Learn */}
      <div className="learn-internal-tabs">
        <button
          className={`learn-tab-btn ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => setActiveTab('course')}
        >
          <Compass size={18} /> Start Here (Full Course)
        </button>

        <button
          className={`learn-tab-btn ${activeTab === 'beginner' ? 'active' : ''}`}
          onClick={() => setActiveTab('beginner')}
        >
          Beginner Tier
        </button>

        <button
          className={`learn-tab-btn ${activeTab === 'intermediate' ? 'active' : ''}`}
          onClick={() => setActiveTab('intermediate')}
        >
          Intermediate Tier
        </button>

        <button
          className={`learn-tab-btn ${activeTab === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('advanced')}
        >
          Advanced Tier
        </button>

        <button
          className={`learn-tab-btn glossary-tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          <BookOpen size={18} /> Searchable Glossary
        </button>
      </div>

      {activeTab !== 'glossary' ? (
        <div className="course-workspace">
          {/* Guided Visual Path Banner */}
          <div className="guided-path-banner glass-card">
            <h3><Compass size={20} className="text-emerald" /> Visual Learning Journey</h3>
            <div className="path-pills-flex">
              {courseLessons.map((l) => (
                <div key={l.id} className="path-pill">
                  <span className="p-num">{l.stepNumber}</span>
                  <span className="p-title">{l.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Concept Spotlight: Volatility */}
          <div className="volatility-card glass-card">
            <div className="vol-card-top">
              <div>
                <h3>Visual Concept Spotlight: What is Volatility?</h3>
                <p className="vol-sub">Volatility simply means how much and how quickly a price moves.</p>
              </div>
              <div className="vol-toggle-btns">
                <button
                  className={`v-btn ${volatilityMode === 'calm' ? 'active green' : ''}`}
                  onClick={() => setVolatilityMode('calm')}
                >
                  Calm Market
                </button>
                <button
                  className={`v-btn ${volatilityMode === 'high' ? 'active red' : ''}`}
                  onClick={() => setVolatilityMode('high')}
                >
                  High Volatility
                </button>
              </div>
            </div>

            <div className="vol-display-box">
              {volatilityMode === 'calm' ? (
                <div className="vol-wave-item calm">
                  <svg viewBox="0 0 500 80" className="vol-svg">
                    <path d="M 0 40 Q 125 35 250 40 T 500 40" fill="none" stroke="#10B981" strokeWidth="3" />
                  </svg>
                  <div className="vol-caption text-gain">🌊 CALM MARKET: Gentle price waves. Predictable range.</div>
                </div>
              ) : (
                <div className="vol-wave-item high">
                  <svg viewBox="0 0 500 80" className="vol-svg">
                    <path d="M 0 40 L 50 10 L 100 70 L 150 15 L 200 65 L 250 5 L 300 75 L 350 20 L 400 60 L 450 10 L 500 40" fill="none" stroke="#F43F5E" strokeWidth="3" />
                  </svg>
                  <div className="vol-caption text-loss">⚡ HIGH VOLATILITY: Steep sudden drops and rapid ascents.</div>
                </div>
              )}
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid-2 lessons-grid">
            {filteredLessons.map((lesson) => (
              <div key={lesson.id} className="lesson-card glass-card">
                <div className="lesson-top">
                  <span className="lesson-step">Lesson {lesson.stepNumber}</span>
                  <span className="lesson-tier">{lesson.tier.toUpperCase()}</span>
                </div>

                <h2>{lesson.title}</h2>
                <span className="lesson-subtitle">{lesson.subtitle}</span>

                {/* 1. VISUAL */}
                <div className="block visual">
                  <div className="block-lbl">1. VISUAL CONCEPT</div>
                  <div className="block-val">{lesson.visualConcept}</div>
                </div>

                {/* 2. SIMPLE EXPLANATION */}
                <div className="block simple">
                  <div className="block-lbl">2. SIMPLE EXPLANATION</div>
                  <p>{lesson.simpleExplanation}</p>
                </div>

                {/* 3. EXAMPLE / ANALOGY */}
                <div className="block analogy">
                  <div className="block-lbl">3. REAL-WORLD ANALOGY</div>
                  <p>💡 {lesson.realWorldAnalogy}</p>
                </div>

                {/* 4. TECHNICAL TERM */}
                <div className="block tech">
                  <div className="block-lbl">4. TECHNICAL TERM</div>
                  <p className="tech-code">⚙️ {lesson.technicalTerm}</p>
                </div>

                <button
                  className="btn-secondary explain-lesson-btn"
                  onClick={() =>
                    setExplainState({
                      title: `${lesson.title} Breakdown`,
                      explanation: lesson.simpleExplanation,
                      simpleVersion: lesson.realWorldAnalogy,
                      guaranteeAnswer: 'Understanding trading concepts builds discipline, but risk management is required on every trade.',
                    })
                  }
                >
                  <HelpCircle size={14} /> Explain Like I'm New
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Tab Content: Searchable Glossary */
        <div className="glossary-workspace">
          <div className="grid-2 glossary-grid">
            {filteredGlossary.map((t) => (
              <div key={t.id} className="glossary-card glass-card">
                <div className="glossary-card-top">
                  <h3>{t.term}</h3>
                  <span className="glossary-cat-badge">{t.category}</span>
                </div>

                <p className="glossary-simple-def">{t.simpleDefinition}</p>

                <div className="sub-block visual">
                  <span className="sub-block-title">VISUAL CONCEPT</span>
                  <p>{t.visualConcept}</p>
                </div>

                <div className="sub-block analogy">
                  <span className="sub-block-title">REAL-WORLD ANALOGY</span>
                  <p>💡 {t.realWorldAnalogy}</p>
                </div>

                <div className="sub-block tech">
                  <span className="sub-block-title">TECHNICAL TERM</span>
                  <p>⚙️ {t.technicalExplanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      <ExplainModal
        isOpen={!!explainState}
        onClose={() => setExplainState(null)}
        title={explainState?.title || ''}
        explanation={explainState?.explanation || ''}
        simpleVersion={explainState?.simpleVersion}
        guaranteeAnswer={explainState?.guaranteeAnswer}
      />
    </div>
  );
}
