import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Sun, Moon, Menu, X, Search, Globe, Compass, BookOpen, FlaskConical, TrendingUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Home', icon: TrendingUp },
    { path: '/explore', label: 'Explore', icon: Compass },
    { path: '/learn', label: 'Learn', icon: BookOpen },
    { path: '/lab', label: 'Lab', icon: FlaskConical },
  ];

  const [isLightNav, setIsLightNav] = useState(false);

  useEffect(() => {
    const handleScrollThemeCheck = () => {
      // Check collision between top 48px header and any light/white background section
      const lightSections = document.querySelectorAll('.market-explorer-section, .light-section, [data-theme-section="light"]');
      let lightModeActive = false;

      lightSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 48 && rect.bottom >= 10) {
          lightModeActive = true;
        }
      });

      setIsLightNav(lightModeActive);
    };

    window.addEventListener('scroll', handleScrollThemeCheck, { passive: true });
    handleScrollThemeCheck();
    return () => window.removeEventListener('scroll', handleScrollThemeCheck);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar-header tv-transparent-header nav-visible ${isLightNav ? 'tv-navbar-light' : ''}`}>
      <div className="navbar-container navbar-edge-to-edge">
        {/* Left Side: Logo */}
        <div className="navbar-left-group">
          <Link to="/" className="navbar-logo tv-logo">
            <div className="logo-icon-wrapper tv-logo-icon">
              <Sparkles className="logo-sparkle" size={17} />
            </div>
            <span className="logo-text tv-logo-text">TradingTimm<span className="logo-ai">.ai</span></span>
          </Link>
        </div>

        {/* Center Links: Home Explore Learn Lab Centered */}
        <nav className="navbar-links-desktop tv-nav-links-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`tv-nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Side: Language Badge & Theme Toggle ONLY */}
        <div className="navbar-actions tv-actions">
          <div className="tv-lang-badge" title="Language & Region">
            <Globe size={15} />
            <span>IN</span>
          </div>

          <button
            className="theme-toggle-btn tv-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Hamburger Icon Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            title="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-drawer-top-row">
            <button
              className="mobile-theme-toggle-btn"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
