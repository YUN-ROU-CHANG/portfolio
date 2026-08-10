import { useState, useEffect, ReactNode } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* noop */ }
  };
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? <Sun size={13} aria-hidden="true" /> : <Moon size={13} aria-hidden="true" />}
    </button>
  );
}

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const next = locale === 'en' ? 'zh' : 'en';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setLocale(next)}
      aria-label={locale === 'en' ? '切換至中文' : 'Switch to English'}
      style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: 0 }}
    >
      {locale === 'en' ? '中' : 'EN'}
    </button>
  );
}

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
    <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em' }}>
      {time}
    </span>
  );
}

// The active pill is a shared layoutId element, so switching routes slides it
// to the new item instead of snapping the background across.
function NavItem({ to, label, end }: { to: string; label: string; end?: boolean }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => isActive ? 'active' : ''}>
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="nav-pill"
              className="nav-pill-bg"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          <span className="nav-pill-label">{label}</span>
        </>
      )}
    </NavLink>
  );
}

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();
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
      <a className="skip-link" href="#main">{t('nav.skipLink')}</a>

      {/* Mouse blob */}
      <div
        className="blob"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            color-mix(in srgb, var(--acid) 14%, transparent) 0%,
            color-mix(in srgb, var(--acid) 7%, transparent) 55%, transparent 100%)`
        }}
      />

      {/* Top Bar Navigation */}
      <header className={`top-bar ${scrolled ? 'scrolled' : ''}`} role="banner">
        {/* Left: name + clock */}
        <div className="top-left">
          <Link to="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', letterSpacing: '-.01em', textTransform: 'none', color: 'var(--text-primary)', textDecoration: 'none' }}>{t('nav.brand')}</Link>
          <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em' }}>{t('nav.brandSub')}</span>
          <Clock />
        </div>

        {/* Mid: capsule nav */}
        <nav className="top-mid" aria-label="Primary">
          <NavItem to="/" end label={t('nav.home')} />
          <NavItem to="/about" label={t('nav.about')} />
          <NavItem to="/projects" label={t('nav.projects')} />
          <NavItem to="/play" label={t('nav.play')} />
          <NavItem to="/resume" label={t('nav.resume')} />
          <ThemeToggle />
          <LanguageToggle />
        </nav>

        {/* Right: chip + CTA (hidden on mobile) */}
        <div className="top-right">
          <span className="top-chip">
            <span className="dot" />{t('nav.chip')}</span>
          <a href="mailto:yuu07798@gmail.com" className="top-cta">{t('nav.contact')}</a>
        </div>
      </header>

      <main id="main">
        {children}
      </main>

      <footer>{t('nav.footer')}</footer>

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
          background: var(--background);
          color: var(--text-primary);
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
          font-family: var(--font-body);
          color: var(--text-primary);
        }
        /* Chinese reads cramped at 0 tracking; add gentle letter-spacing only in 中文 mode.
           0.05em is the comfortable CJK range (0.02–0.05em); more than ~0.08em hurts reading flow.
           Scoped to body so it lifts paragraph/label text but leaves designed heading tracking intact. */
        html[lang="zh-Hant"] body { letter-spacing: 0.05em; }
        h1, h2, h3 { color: var(--text-primary); }
        .muted { color: var(--text-tertiary); }

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
          background: color-mix(in srgb, var(--background) 82%, transparent);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-strong);
          font-family: var(--font-mono);
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
          border: 1px solid var(--border-strong); border-radius: 999px;
          background: var(--surface);
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .top-mid::-webkit-scrollbar { display: none; } /* Chrome/Safari */
        
        .top-mid a {
          position: relative;
          padding: 7px 14px; border-radius: 999px;
          transition: background .25s cubic-bezier(.2,.8,.2,1), color .25s cubic-bezier(.2,.8,.2,1);
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; text-decoration: none;
          color: var(--text-tertiary);
          white-space: nowrap;
          box-sizing: border-box;
          text-align: center;
          min-width: 88px; /* every nav item shares one width (widest = Projects) so buttons look uniform and never shift on 中文/EN toggle */
        }
        .top-mid a:hover { background: var(--surface-inverse); color: var(--text-on-inverse); }
        /* Background comes from the sliding .nav-pill-bg, so the link itself stays transparent. */
        .top-mid a.active { background: transparent; color: var(--accent-on-inverse); }
        .top-mid a.active:hover { background: transparent; color: var(--accent-on-inverse); }
        .nav-pill-bg {
          position: absolute; inset: 0;
          border-radius: 999px;
          background: var(--surface-inverse);
          z-index: 0;
        }
        .nav-pill-label { position: relative; z-index: 1; }
        .theme-toggle {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; margin-left: 2px;
          border: none; border-radius: 999px;
          background: transparent; color: var(--text-tertiary);
          cursor: pointer;
          transition: background .25s cubic-bezier(.2,.8,.2,1), color .25s cubic-bezier(.2,.8,.2,1);
        }
        .theme-toggle:hover { background: var(--surface-inverse); color: var(--text-on-inverse); }
        
        .top-right {
          display: flex; gap: 14px; align-items: center;
          justify-content: flex-end;
        }
        .top-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          border: 1px solid var(--border-strong); border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: .1em; text-transform: uppercase;
          color: var(--text-primary);
        }
        .top-chip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--text-primary);
          animation: chipBlink 1.6s steps(2) infinite;
        }
        @keyframes chipBlink { 50% { opacity: .3; } }
        .top-cta {
          padding: 8px 14px;
          background: var(--surface-inverse); color: var(--accent-on-inverse);
          border-radius: 999px; border: none; cursor: pointer;
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          text-decoration: none;
          transition: transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s cubic-bezier(.2,.8,.2,1);
        }
        .top-cta:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--border-strong); }

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
          background: var(--accent);
          color: var(--on-accent);
        }

        .interactive-button-base::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--surface-inverse);
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
        h1.name { font-size: clamp(40px, 5vw, 64px); font-weight: 800; margin-bottom: 16px; color: var(--text-primary); }
        h2.head { font-size: clamp(28px, 4vw, 48px); font-weight: 700; margin-bottom: 24px; }
        .body { font-size: 1.125rem; line-height: 1.75; }

        /* Glass Frame & Cards */
        .gframe { padding: 2px; border-radius: var(--radius-lg); background: linear-gradient(135deg, color-mix(in srgb, var(--acid) 55%, transparent), color-mix(in srgb, var(--acid) 15%, transparent)); }
        .card { background: var(--card-glass); border-radius: calc(var(--radius-lg) - 2px); overflow: hidden; }

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
            background: color-mix(in srgb, var(--background) 95%, transparent) !important;
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

        /* ── Floating Back / Back-to-top buttons: one consistent design site-wide ── */
        /* Match the nav's selected pill (inverse surface + accent text); visible in light AND dark. */
        button[aria-label="Go back"],
        button[aria-label="Back to top"] {
          background: var(--surface-inverse) !important;
          color: var(--accent-on-inverse) !important;
          border: none !important;
          width: 48px !important;
          height: 48px !important;
          font-size: 18px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.18) !important;
        }
        /* Desktop: drop the Go back button below the fixed top bar + hover tooltip */
        @media (min-width: 641px) {
          button[aria-label="Go back"] {
            top: 104px !important;
            left: 24px !important;
          }
          button[aria-label="Go back"]::after {
            content: "Back";
            position: absolute;
            left: calc(100% + 10px);
            top: 50%;
            transform: translateY(-50%);
            padding: 4px 10px;
            border-radius: 6px;
            background: var(--surface-inverse);
            color: var(--accent-on-inverse);
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: .06em;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity .2s ease;
          }
          html[lang="zh-Hant"] button[aria-label="Go back"]::after { content: "返回"; }
          button[aria-label="Go back"]:hover::after { opacity: 1; }
        }

        /* Skip Link */
        .skip-link { position: absolute; left: -9999px; top: auto; background: var(--surface-inverse); color: var(--text-on-inverse); padding: 12px; z-index: 100; }
        .skip-link:focus { left: 20px; top: 20px; }

        /* Blob */
        .blob { position: fixed; inset: 0; z-index: -1; pointer-events: none; }

        /* Footer */
        footer { border-top: 1px solid var(--border); padding: 32px 0; text-align: center; font-size: 12px; color: var(--text-tertiary); }
      `}</style>
    </div>
  );
}