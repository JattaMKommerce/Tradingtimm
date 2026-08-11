import React, { useState } from 'react';
import { Search, BookOpen, HelpCircle, Filter } from 'lucide-react';
import { glossaryTerms } from '../data/glossaryData';
import ExplainModal from '../components/ExplainModal';
import TimmMascot from '../components/TimmMascot';
import './Glossary.css';

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [explainState, setExplainState] = useState(null);

  const categories = ['All', 'Basics', 'Markets', 'Charts', 'Indicators', 'Risk', 'Strategy', 'Technology', 'Advanced Risk'];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesCat = selectedCategory === 'All' || term.category === selectedCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.simpleDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.realWorldAnalogy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="glossary-page container">
      {/* Page Header */}
      <div className="glossary-header glass-card">
        <span className="tagline">Financial Dictionary</span>
        <h1>Trading Glossary</h1>
        <p>
          Beginner-friendly explanations for essential trading and technology terms without confusing jargon.
        </p>

        {/* Search */}
        <div className="glossary-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search terms (e.g. Stop Loss, Candlestick, RSI, Drawdown)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <TimmMascot
        inline
        message="Need a term explained during your strategy building? Bookmark this glossary for instant zero-jargon definitions!"
      />

      {/* Category Filter Pills */}
      <div className="glossary-cat-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terms Grid */}
      <div className="grid-2 glossary-grid">
        {filteredTerms.map((t) => (
          <div key={t.id} className="glossary-card glass-card">
            <div className="glossary-card-top">
              <h3>{t.term}</h3>
              <span className="glossary-cat-badge">{t.category}</span>
            </div>

            <p className="glossary-simple-def">{t.simpleDefinition}</p>

            {/* Visual Concept */}
            <div className="glossary-sub-block visual">
              <span className="sub-block-title">VISUAL CONCEPT</span>
              <p>{t.visualConcept}</p>
            </div>

            {/* Real World Analogy */}
            <div className="glossary-sub-block analogy">
              <span className="sub-block-title">REAL-WORLD ANALOGY</span>
              <p>💡 {t.realWorldAnalogy}</p>
            </div>

            {/* Technical Explanation */}
            <div className="glossary-sub-block tech">
              <span className="sub-block-title">TECHNICAL TERM</span>
              <p>⚙️ {t.technicalExplanation}</p>
            </div>

            <button
              className="btn-secondary glossary-explain-btn"
              onClick={() =>
                setExplainState({
                  title: `${t.term} Detailed Breakdown`,
                  explanation: t.simpleDefinition,
                  simpleVersion: t.realWorldAnalogy,
                  guaranteeAnswer: 'Understanding terms helps make informed strategy decisions.',
                })
              }
            >
              <HelpCircle size={14} /> Explain Like I'm New
            </button>
          </div>
        ))}
      </div>

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
