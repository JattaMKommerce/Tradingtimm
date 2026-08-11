import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

// Lazy loaded page components for fast initial load & route code splitting
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/Explore'));
const Learn = lazy(() => import('./pages/Learn'));
const Lab = lazy(() => import('./pages/Lab'));

// Loading spinner fallback
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: '#10B981',
      fontSize: '1rem',
      fontWeight: '600',
    }}>
      <div className="chart-loading">Loading TradingTimm.ai...</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div className="app-content" style={{ flex: 1, paddingTop: '72px' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* 4 MAIN ROUTES */}
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/lab" element={<Lab />} />

              {/* Seamless redirects for old routes into parent consolidated pages */}
              <Route path="/markets" element={<Navigate to="/explore" replace />} />
              <Route path="/portfolio" element={<Navigate to="/explore?tab=portfolio" replace />} />
              <Route path="/glossary" element={<Navigate to="/learn?tab=glossary" replace />} />
              <Route path="/strategies" element={<Navigate to="/lab?tab=builder" replace />} />
              <Route path="/strategy-marketplace" element={<Navigate to="/lab?tab=backtesting" replace />} />
              <Route path="/backtesting" element={<Navigate to="/lab?tab=backtesting" replace />} />
              <Route path="/automation" element={<Navigate to="/lab?tab=automation" replace />} />
              <Route path="/risk" element={<Navigate to="/lab?tab=risk" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />

              {/* Fallback redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}
