import { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react'; // 確保你有安裝 motion

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Mouse follower effect
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    let tx = 0, ty = 0, x = 0, y = 0, rafId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const animate = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      setMousePosition({ x, y });
      rafId = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <div className="page-root" id="home">
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Mouse blob */}
      <div
        className="blob"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            hsl(var(--g1)/.12) 0%, hsl(var(--g2)/.12) 25%, hsl(var(--g3)/.12) 55%,
            hsl(var(--g4)/.12) 85%, transparent 100%)`
        }}
      />

      {/* Tubelight Style Navigation */}
      <header className="nav" role="banner">
        <div className="container nav-row">
          <Link to="/" className="nav-brand">Yun-Rou Chang</Link>
          
          {/* Desktop Nav */}
          <nav className="nav-links desktop-only">
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
                <a className="btn-pill interactive-button-base btn--primary" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                   Contact Me
                </a>
             </nav>
          </div>

          <a className="btn-pill interactive-button-base btn--primary nav-cta desktop-only" href="#contact">
            Contact <span className="dot">→</span>
          </a>
        </div>
      </header>

      <main id="main">
        {children}
      </main>

      <footer>© Yun-Rou Chang 2025</footer>

      <style>{`
        /* Global Variables & Reset */
        :root {
           /* Increase max-width for large screens (Note 4) */
           --container-width: 1200px;
        }
        @media (min-width: 1600px) {
           :root { --container-width: 1440px; }
        }

        .page-root {
          min-height: 100vh;
          background: var(--md-background);
          color: var(--text);
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .container {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 var(--space-4);
          width: 100%;
        }

        /* Typography Defaults */
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, sans-serif;
          color: var(--text);
        }
        h1, h2, h3 { color: var(--md-on-surface); }
        .muted { color: var(--color-text-muted); }

        /* Navigation (Tubelight Style - Note 6) */
        header.nav {
          position: fixed;
          top: 20px; /* Floating effect */
          left: 0;
          right: 0;
          z-index: 50;
          margin-left: auto;
          margin-right: auto;
          width: calc(100% - 32px);
          max-width: var(--container-width);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85); /* White bg, slightly transparent */
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px; /* Compact padding */
        }

        .nav-brand {
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
          color: #000;
          padding-left: 12px;
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
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          border-radius: 999px;
          transition: color 0.2s ease;
        }
        
        .nav-item:hover { color: #000; }
        .nav-item.active { color: #000; }

        .nav-text { position: relative; z-index: 2; }

        /* The floating highlight */
        .nav-tubelight {
          position: absolute;
          inset: 0;
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          z-index: 1;
        }

        /* Buttons (Note 2) */
        .interactive-button-base {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden; /* Ensure fill stays inside */
        }

        .btn-pill { padding: 12px 28px; font-size: 13px; font-weight: 500; }
        .btn--primary {
          background: #4570ff; /* Rose Chang title color */
          color: #fff;
        }

        /* Hover Effect: Pink shadow fill frame 10% */
        .interactive-button-base::after {
          content: '';
          position: absolute;
          inset: 0;
          background: hsl(var(--g2)); /* Pink/Magenta */
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .interactive-button-base:hover::after {
          opacity: 0.1; /* 10% opacity */
        }
        
        .interactive-button-base span, 
        .interactive-button-base svg {
          position: relative;
          z-index: 1;
        }

        .interactive-button-base:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Common Styles */
        .section { padding: 80px 0; }
        
        /* Main content spacing for fixed nav */
        main#main {
          padding-top: 120px;
        }
        
        /* Typography Scale */
        h1.name { font-size: clamp(40px, 5vw, 64px); font-weight: 800; margin-bottom: 16px; color: #4570ff; }
        h2.head { font-size: clamp(28px, 4vw, 48px); font-weight: 700; margin-bottom: 24px; }
        .body { font-size: 1.125rem; line-height: 1.75; }

        /* Glass Frame & Cards */
        .gframe {
          padding: 2px; /* Frame thickness */
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, hsl(var(--g1)/.4), hsl(var(--g2)/.4), hsl(var(--g3)/.4));
        }
        .card {
          background: rgba(255,255,255,0.9);
          border-radius: calc(var(--radius-lg) - 2px);
          overflow: hidden;
        }
        .shadow-glow { box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1); }

        /* Mobile Nav (Note 3 - Solid background) */
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }
        .nav-hamburger span { display: block; width: 24px; height: 2px; background: #000; border-radius: 2px; transition: all 0.3s; }
        
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.98); /* Solid/Blur background */
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
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .mobile-nav-links a {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
        }
        .mobile-nav-links a.active { color: var(--md-primary); }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .nav-hamburger { display: flex; }
          header.nav { top: 10px; border-radius: 16px; width: calc(100% - 32px); }
          main#main { padding-top: 100px; }
        }

        /* Skip Link */
        .skip-link { position: absolute; left: -9999px; top: auto; background: #000; color: #fff; padding: 12px; z-index: 100; }
        .skip-link:focus { left: 20px; top: 20px; }

        /* Blob */
        .blob { position: fixed; inset: 0; z-index: -1; pointer-events: none; }

        /* Footer */
        footer {
          border-top: 1px solid rgba(0, 0, 0, .12);
          padding: 32px 0;
          text-align: center;
          font-size: 12px;
          color: #666;
        }

      `}</style>
    </div>
  );
}