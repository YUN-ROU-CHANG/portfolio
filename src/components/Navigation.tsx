import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <header className="nav" role="banner">
      <div className="container nav-row">
        <Link to="/" className="nav-brand">Yun-Rou Chang</Link>
        
        {/* Desktop Nav with Tubelight Effect */}
        <nav className="nav-links desktop-only" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-text">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="tubelight"
                    className="nav-tubelight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="nav-hamburger" 
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <a 
              className="btn-pill interactive-button-base btn--primary" 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Desktop Right Side: Contact Button */}
        <div className="nav-right desktop-only">
          <a className="btn-pill interactive-button-base btn--primary nav-cta" href="#contact">
            Contact <span className="dot">→</span>
          </a>
        </div>
      </div>

      <style>{`
        /* Navigation Styles */
        header.nav {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 50;
          margin-left: auto;
          margin-right: auto;
          width: calc(100% - 32px);
          max-width: var(--container-width, 1200px);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          gap: 12px;
        }

        .nav-brand {
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
          color: #000;
          padding-left: 12px;
          white-space: nowrap;
        }

        .nav-links.desktop-only {
          display: flex;
          gap: 4px;
          background: rgba(0,0,0,0.03);
          padding: 4px;
          border-radius: 999px;
        }

        .nav-item {
          position: relative;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          border-radius: 999px;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .nav-item:hover, .nav-item.active { color: #000; }

        .nav-text { 
          position: relative; 
          z-index: 2;
          line-height: 1; 
        }

        .nav-tubelight {
          position: absolute;
          inset: 0;
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          z-index: 1;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-pill.interactive-button-base {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .btn--primary {
          background: #4570ff;
          color: #fff;
          border: none;
        }

        .btn-pill .dot { position: relative; z-index: 2; }

        .interactive-button-base::after {
          content: '';
          position: absolute;
          inset: 0;
          background: hsl(var(--g2));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .interactive-button-base:hover::after { opacity: 0.1; }
        .interactive-button-base span { position: relative; z-index: 1; }

        .interactive-button-base:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .nav-hamburger { 
          display: none; 
          background: none; 
          border: none; 
          cursor: pointer; 
          flex-direction: column; 
          gap: 5px; 
          padding: 8px; 
        }
        .nav-hamburger span { 
          display: block; 
          width: 24px; 
          height: 2px; 
          background: #000; 
          border-radius: 2px; 
          transition: all 0.3s; 
        }
        
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-nav-overlay.open { opacity: 1; pointer-events: all; }
        
        .mobile-nav-links { display: flex; flex-direction: column; align-items: center; gap: 32px; }
        .mobile-nav-links a { font-size: 24px; font-weight: 600; color: #333; text-decoration: none; }
        .mobile-nav-links a.active { color: var(--md-primary); }

        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .nav-hamburger { display: flex; }
          header.nav { top: 10px; border-radius: 16px; width: calc(100% - 32px); }
        }
      `}</style>
    </header>
  );
}