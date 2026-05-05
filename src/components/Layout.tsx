import { useState, useEffect, ReactNode } from 'react';
import { Link, NavLink } from 'react-router';

function Clock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setTime(`TPE · ${h}:${m}`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ color: '#6B6A62', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '.08em' }}>
      {time}
    </span>
  );
}

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

      {/* Top Bar Navigation */}
      <header className={`top-bar ${scrolled ? 'scrolled' : ''}`} role="banner">
        {/* Left: name + clock */}
        <div className="top-left">
          <Link to="/" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '-.01em', textTransform: 'none', color: '#0C0C0C', textDecoration: 'none' }}>
            Yun-Rou Chang
          </Link>
          <span style={{ color: '#6B6A62', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '.08em' }}>— ROSE</span>
          <Clock />
        </div>

        {/* Mid: capsule nav */}
        <nav className="top-mid" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
        </nav>

        {/* Right: chip + CTA (hidden on mobile) */}
        <div className="top-right">
          <span className="top-chip">
            <span className="dot" />
            Open to '26 Roles
          </span>
          <a href="mailto:yuu07798@gmail.com" className="top-cta">Contact →</a>
        </div>
      </header>

      <main id="main">
        {children}
      </main>

      <footer>© Yun-Rou Chang 2025</footer>

      <style>{`
        /* Global Variables & Reset */
        :root {
           --container-width: 1200px;
        }
        @media (min-width: 1600px) {
           :root { --container-width: 1440px; }
        }

        .page-root {
          min-height: 100vh;
          background: var(--md-background);
          color: var(--text);
          overflow-x: hidden;
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

        /* ── Top Bar (Responsive Fixed) ── */
        .top-bar {
          position: fixed; 
          top: 0; left: 0; right: 0; 
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px; 
          align-items: center;
          padding: 14px clamp(16px, 2.2vw, 32px);
          background: rgba(238,234,224,0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid #0C0C0C;
          font-family: "IBM Plex Mono", ui-monospace, Menlo, monospace;
          font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          transition: padding 0.3s ease, box-shadow 0.3s ease;
        }
        .top-bar.scrolled {
          padding: 9px clamp(16px, 2.2vw, 32px);
          box-shadow: 0 2px 12px rgba(12,12,12,0.08);
        }
        
        .top-left { display: flex; gap: 18px; align-items: center; }
        
        /* Navigation Capsule */
        .top-mid {
          display: flex; gap: 4px; align-items: center;
          justify-content: center;
          padding: 4px;
          border: 1px solid #0C0C0C; border-radius: 999px;
          background: #F6F2E7;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .top-mid::-webkit-scrollbar { display: none; } /* Chrome/Safari */
        
        .top-mid a {
          padding: 7px 14px; border-radius: 999px;
          transition: background .25s cubic-bezier(.2,.8,.2,1), color .25s cubic-bezier(.2,.8,.2,1);
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; text-decoration: none;
          color: #6B6A62;
          white-space: nowrap;
        }
        .top-mid a:hover { background: #0C0C0C; color: #EEEAE0; }
        .top-mid a.active { background: #0C0C0C; color: #FFE699; }
        
        .top-right {
          display: flex; gap: 14px; align-items: center;
          justify-content: flex-end;
        }
        .top-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          border: 1px solid #0C0C0C; border-radius: 999px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px; letter-spacing: .1em; text-transform: uppercase;
          color: #0C0C0C;
        }
        .top-chip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #E23A1C;
          animation: chipBlink 1.6s steps(2) infinite;
        }
        @keyframes chipBlink { 50% { opacity: .3; } }
        .top-cta {
          padding: 8px 14px;
          background: #0C0C0C; color: #FFE699;
          border-radius: 999px; border: none; cursor: pointer;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          text-decoration: none;
          transition: transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s cubic-bezier(.2,.8,.2,1);
        }
        .top-cta:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 #0C0C0C; }

        /* Buttons */
        .interactive-button-base {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .btn-pill { padding: 12px 28px; font-size: 13px; font-weight: 500; }
        .btn--primary {
          background: #4570ff;
          color: #fff;
        }

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
        .interactive-button-base span, .interactive-button-base svg { position: relative; z-index: 1; }
        .interactive-button-base:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

        /* Common Styles */
        .section { padding: 80px 0; }
        main#main { padding-top: 72px; }
        
        /* Typography Scale */
        h1.name { font-size: clamp(40px, 5vw, 64px); font-weight: 800; margin-bottom: 16px; color: #4570ff; }
        h2.head { font-size: clamp(28px, 4vw, 48px); font-weight: 700; margin-bottom: 24px; }
        .body { font-size: 1.125rem; line-height: 1.75; }

        /* Glass Frame & Cards */
        .gframe { padding: 2px; border-radius: var(--radius-lg); background: linear-gradient(135deg, hsl(var(--g1)/.4), hsl(var(--g2)/.4), hsl(var(--g3)/.4)); }
        .card { background: rgba(255,255,255,0.9); border-radius: calc(var(--radius-lg) - 2px); overflow: hidden; }

        /* Responsive Top Bar */
        @media (max-width: 900px) {
          .top-right { display: none; }
          .top-bar { 
            grid-template-columns: auto 1fr; 
            gap: 16px; 
          }
          .top-mid { justify-content: flex-start; }
        }

        /* 📱 手機版專屬響應式優化 */
        @media (max-width: 640px) {
          .top-bar { 
            display: flex !important;
            justify-content: center !important;
            padding: 12px 16px !important;
          }
          .top-bar.scrolled { padding: 10px 16px !important; }
          .top-left { display: none !important; } /* 隱藏名字與時間 */
          .top-right { display: none !important; }
          
          /* 讓膠囊導航佔滿寬度並置中 */
          .top-mid { 
            width: 100%; 
            justify-content: center; 
            padding: 4px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .top-mid a { 
            padding: 8px 16px; 
            font-size: 11px; 
          }
          main#main { padding-top: 72px; }

          /* 🌟 全域覆寫：完美修復所有頁面的「上一頁」與「回到上方」按鈕 */
          button[aria-label="Go back"] {
            top: auto !important;
            bottom: calc(24px + env(safe-area-inset-bottom)) !important; /* 避開 Safari 底部控制列 */
            left: 16px !important;
            width: 44px !important;
            height: 44px !important;
            z-index: 9999 !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
            background: rgba(238,234,224,0.95) !important;
          }
          button[aria-label="Back to top"] {
            bottom: calc(24px + env(safe-area-inset-bottom)) !important; /* 避開 Safari 底部控制列 */
            right: 16px !important;
            width: 44px !important;
            height: 44px !important;
            z-index: 9999 !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
          }
        }

        /* Skip Link */
        .skip-link { position: absolute; left: -9999px; top: auto; background: #000; color: #fff; padding: 12px; z-index: 100; }
        .skip-link:focus { left: 20px; top: 20px; }

        /* Blob */
        .blob { position: fixed; inset: 0; z-index: -1; pointer-events: none; }

        /* Footer */
        footer { border-top: 1px solid rgba(0, 0, 0, .12); padding: 32px 0; text-align: center; font-size: 12px; color: #666; }
      `}</style>
    </div>
  );
}