import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Briefcase, Mail } from 'lucide-react';
import { Separator } from '../components/ui/separator';

import sleepGuardianCover from '../assets/images/home/sleep-guardian-cover.png';
import oblivilightCover from '../assets/images/home/Oblivilight-cover.jpg';
import muCover from '../assets/images/home/mu-cover.jpg';
import innoconnectCover from '../assets/images/home/innoconnect-cover.jpg';
import gcceCover from '../assets/images/home/gcce-cover.jpg';

import logoSsim from '../assets/images/awards/ssim.png';
import logoOpenhci from '../assets/images/awards/openhci.png';
import logoUxda from '../assets/images/awards/uxda.png';
import logoGcce from '../assets/images/awards/ieee-gcce.png';
import logoTimes from '../assets/images/awards/times-awards.jpg';
import logoInnoconnect from '../assets/images/awards/innoconnect_logo.png';

// 有 logo 的六項。大數據行銷競賽與傑出研究獎沒有可用 logo，靠 view-all 連結涵蓋。
const AWARD_LOGOS = [
  { src: logoSsim, k: 'ssim' },
  { src: logoOpenhci, k: 'openhci' },
  { src: logoUxda, k: 'uxda' },
  { src: logoGcce, k: 'gcce' },
  { src: logoTimes, k: 'timesYoung' },
  { src: logoInnoconnect, k: 'innoconnect' },
];

// 首頁只放五件作品。第一件是碩論，用全寬大卡；其餘四件 2×2。
// 每張卡的說明一律用 caption（帶結果與數字），不用 desc（描述流程）。
const getWorks = (t: (key: string) => string) => [
  { slug: 'sleep-guardian', k: 'sleepGuardian', year: '2026', kind: 'tag1', cover: sleepGuardianCover },
  { slug: 'oblivilight', k: 'oblivilight', year: '2025', kind: 'tag2', cover: oblivilightCover },
  { slug: 'mu', k: 'mu', year: '2025', kind: 'tag2', cover: muCover },
  { slug: 'innoconnect', k: 'innoconnect', year: '2024', kind: 'tag1', cover: innoconnectCover },
  { slug: 'hci-publications', k: 'publications', year: '2025', kind: 'tag2', cover: gcceCover },
].map(w => ({
  ...w,
  kindLabel: t(`home.works.${w.k}.${w.kind}`),
  titlePre: t(`home.works.${w.k}.titlePre`),
  titleHighlight: t(`home.works.${w.k}.titleHighlight`),
  titlePost: t(`home.works.${w.k}.titlePost`),
  caption: t(`home.works.${w.k}.caption`),
  imgAlt: t(`home.works.${w.k}.imgAlt`),
}));

type Work = ReturnType<typeof getWorks>[number];

function WorkCard({ work, feature, index }: { work: Work; feature?: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link className={`work-card${feature ? ' work-card--feature' : ''}`} to={`/projects/${work.slug}`}>
        <div className="work-cover">
          <img src={work.cover} alt={work.imgAlt} loading={feature ? 'eager' : 'lazy'} />
        </div>
        <div className="work-body">
          <div className="work-meta">{work.year} · {work.kindLabel}</div>
          <h3 className="work-title">
            {work.titlePre}{' '}
            <em>{work.titleHighlight}</em>{' '}
            {work.titlePost}
          </h3>
          <p className="work-caption">{work.caption}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  // Graduation is Aug 2026, so the badge states a start date until then and
  // switches to an open-ended one after. Nothing to update by hand either way.
  const availableFromAug2026 = Date.now() < new Date('2026-08-01T00:00:00').getTime();

  useRevealOnScroll();

  const [showTop, setShowTop] = useState(false);
  const works = getWorks(t);
  const [feature, ...rest] = works;

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* 1. Hero — 文字單欄，照片留在 About */}
      <section className="hero" id="about">
        <div className="container hero-inner reveal">
          <div className="avail-badge">
            <span className="avail-dot"></span>
            <span className="avail-label">{t(availableFromAug2026 ? 'home.hero.badgeBefore' : 'home.hero.badgeAfter')}</span>
          </div>
          <h1 className="name interactive-name">
            {t('home.hero.name').split('').map((char, index) => (
              <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>
          <h2 className="head">{t('home.hero.title')}</h2>
          <h3 className="sub-head">{t('home.hero.subtitle')}</h3>
          <p className="hero-desc">{t('home.hero.desc')}</p>
          <div className="hero-buttons">
            <Link className="btn-pill btn--primary" to="/about">{t('home.hero.aboutBtn')}{' '}<span className="dot">→</span></Link>
            <a className="btn-pill btn--secondary" href="#selected-works">{t('home.hero.viewWorkBtn')}{' '}<span className="dot">↓</span></a>
          </div>
        </div>
      </section>

      {/* 2. Selected Works */}
      <section className="section" id="selected-works" style={{ paddingTop: '24px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-flex">
            <h2 className="section-head">
              <Briefcase size={32} color="var(--accent-text)" />{t('home.works.heading')}
            </h2>
            <Link to="/projects" className="view-all-link">{t('home.works.viewAll')}</Link>
          </div>

          <WorkCard work={feature} feature index={0} />

          <div className="work-grid">
            {rest.map((w, i) => <WorkCard key={w.slug} work={w} index={i + 1} />)}
          </div>
        </div>
      </section>

      {/* 3. Awards — 一行摘要，完整清單在 Resume */}
      <section className="section" id="awards" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="container">
          <div className="awards-strip reveal">
            {/* logo 跑馬燈：軌道複製一份接續播放，滑鼠移入暫停 */}
            <div className="awards-marquee">
              <div className="awards-track">
                {[0, 1].map(dup => (
                  <div className="awards-set" key={dup} aria-hidden={dup === 1 || undefined}>
                    {AWARD_LOGOS.map(logo => (
                      <span className="awards-logo" key={`${dup}-${logo.k}`}>
                        <img src={logo.src} alt={dup === 0 ? t(`home.awards.${logo.k}.title`) : ''} loading="lazy" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Link to="/resume#awards" className="awards-link">{t('home.awards.viewAll')}</Link>
          </div>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* 4. Contact */}
      <section className="section" id="contact" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head" style={{ justifyContent: 'center' }}>
            <Mail size={32} color="var(--accent-text)" />{t('home.contact.heading')}
          </h2>
          <p className="contact-sub">{t('home.contact.sub')}</p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span>{t('home.contact.linkedin')}</span>
            </a>
            <a className="contact-pill" href="mailto:yuu07798@gmail.com">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              <span>yuu07798@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Section chrome ── */
        .section-head { font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--accent-text); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; flex-wrap: wrap; gap: 16px; }
        /* The heading carries its own bottom margin for standalone use; inside the
           header row it would lift the title 32px above the link. */
        .section-header-flex .section-head { margin-bottom: 0; }
        .view-all-link { font-size: 15px; font-weight: 600; color: var(--accent-text); text-decoration: none; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .view-all-link:hover { border-color: var(--accent-text); }

        /* ── Hero ── */
        .hero { padding: 0; }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        /* .container 也是 (0,1,0) 且排在後面，會把 padding 歸零；用 .hero 前綴提高權重。
           上方留白要蓋過 fixed 導覽列的高度，否則徽章會貼在導覽列下緣。 */
        .hero .hero-inner {
          padding-top: clamp(32px, 4vw, 56px);
          padding-bottom: clamp(48px, 6vw, 80px);
        }
        .hero-desc {
          margin-top: 20px;
          line-height: 1.7;
          font-size: clamp(16px, 1.2vw, 19px);
          color: var(--text-secondary);
          max-width: 52ch;
        }

        .avail-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; border-radius: 999px;
          background: color-mix(in srgb, var(--accent) 22%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
          margin-bottom: 20px;
        }
        .avail-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent-text); flex-shrink: 0;
          animation: availPing 2s ease-in-out infinite;
        }
        .avail-label { font-size: 12px; font-weight: 500; color: var(--accent-text); letter-spacing: 0.02em; }
        @keyframes availPing {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent-text) 40%, transparent); }
          50% { box-shadow: 0 0 0 6px transparent; }
        }

        .name {
          font-size: clamp(64px, 11vw, 104px) !important;
          font-weight: 700 !important;
          letter-spacing: -0.04em !important;
          line-height: 0.92 !important;
          color: var(--text-primary);
        }
        .head { font-size: clamp(20px, 2.2vw, 26px) !important; font-weight: 600 !important; color: var(--text-primary) !important; margin-top: 18px !important; }
        .sub-head { font-size: 15px !important; font-weight: 400 !important; color: var(--text-tertiary) !important; margin-top: 6px !important; letter-spacing: 0.01em !important; }

        .interactive-name .char { display: inline-block; transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease; cursor: default; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        .interactive-name:hover .char:hover { transform: translateY(-8px) scale(1.1); color: var(--accent-text); }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .hero-buttons { display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 30px; border-radius: 999px;
          text-decoration: none; font-weight: 600; font-size: 15px;
          transition: all 0.3s ease;
        }
        .btn--primary { background: var(--accent); color: var(--on-accent); border: none; }
        .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px color-mix(in srgb, var(--acid) 45%, transparent); }
        .btn--secondary { background: transparent; color: var(--text-primary); border: 1.5px solid color-mix(in srgb, var(--text-primary) 18%, transparent); }
        .btn--secondary:hover { background: color-mix(in srgb, var(--text-primary) 5%, transparent); border-color: color-mix(in srgb, var(--text-primary) 32%, transparent); }

        /* ── Work cards ── */
        .work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3vw, 40px);
          margin-top: clamp(24px, 3vw, 40px);
        }
        .work-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
          height: 100%;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
        }
        .work-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 44px color-mix(in srgb, var(--text-primary) 12%, transparent);
          border-color: var(--border-strong);
        }
        .work-cover { overflow: hidden; background: var(--surface-muted); aspect-ratio: 16 / 10; }
        .work-cover img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }
        .work-card:hover .work-cover img { transform: scale(1.04); }

        .work-body { padding: clamp(20px, 2.2vw, 28px) clamp(22px, 2.4vw, 32px) clamp(24px, 2.6vw, 32px); }
        .work-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 12px;
        }
        .work-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(19px, 1.7vw, 24px);
          line-height: 1.25;
          letter-spacing: -.02em;
          margin: 0 0 12px;
          color: var(--text-primary);
        }
        .work-title em {
          font-style: normal;
          background: var(--accent);
          color: var(--on-accent);
          padding: 0 .12em;
        }
        .work-caption {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
          max-width: 62ch;
        }

        /* Feature card: cover left, copy right */
        .work-card--feature { display: grid; grid-template-columns: 1.15fr 1fr; align-items: stretch; }
        .work-card--feature .work-cover { aspect-ratio: auto; height: 100%; min-height: 340px; }
        .work-card--feature .work-body { display: flex; flex-direction: column; justify-content: center; padding: clamp(28px, 3.2vw, 48px); }
        .work-card--feature .work-title { font-size: clamp(24px, 2.6vw, 36px); }
        .work-card--feature .work-caption { font-size: clamp(15px, 1.1vw, 16.5px); }

        @media (max-width: 900px) {
          .work-card--feature { grid-template-columns: 1fr; }
          .work-card--feature .work-cover { aspect-ratio: 16 / 10; min-height: 0; }
          .work-grid { grid-template-columns: 1fr; }
        }

        /* ── Awards strip ── */
        .awards-strip {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }
        /* logo 一律放在固定的淺色晶片上，這樣深色 logo 在暗色模式也讀得到，
           不必為每個檔案個別調 filter。 */
        .awards-marquee {
          flex: 1 1 520px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .awards-track { display: flex; width: max-content; animation: awards-scroll 34s linear infinite; }
        .awards-marquee:hover .awards-track { animation-play-state: paused; }
        .awards-set { display: flex; align-items: center; gap: 14px; padding-right: 14px; }
        .awards-logo {
          display: inline-flex; align-items: center; justify-content: center;
          height: 62px; width: 128px; flex-shrink: 0;
          padding: 10px 14px; border-radius: 10px;
          background: var(--bone-3, #F6F2E7);
          border: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
        }
        .awards-logo img { max-height: 100%; max-width: 100%; object-fit: contain; display: block; }
        @keyframes awards-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .awards-link {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 2px;
          white-space: nowrap;
        }
        .awards-link:hover { color: var(--accent-text); }

        /* ── Contact ── */
        .contact-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .contact-sub { font-size: 16px; color: var(--text-secondary); margin-bottom: 32px; }
        .contact-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .contact-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          padding: 12px 28px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--text-primary); text-decoration: none; font-weight: 500;
          transition: all 0.3s ease;
        }
        .contact-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px color-mix(in srgb, var(--text-primary) 10%, transparent);
          border-color: var(--accent-text);
          color: var(--accent-text);
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .awards-track { animation: none !important; }
          .awards-marquee { overflow-x: auto; }
          .avail-dot { animation: none !important; }
          .interactive-name .char { animation: none !important; transition: none !important; }
          .work-card, .work-cover img, .contact-pill, .btn-pill { transition: none !important; }
          .work-card:hover, .contact-pill:hover, .btn--primary:hover { transform: none !important; }
          .work-card:hover .work-cover img { transform: none !important; }
        }
      `}</style>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--surface-inverse)',
          color: 'var(--accent-on-inverse)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          lineHeight: '1',
          boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
          transition: 'opacity 0.25s ease, transform 0.2s ease',
          zIndex: 999,
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? 'auto' : 'none',
          transform: showTop ? 'translateY(0)' : 'translateY(8px)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
      >
        ↑
      </button>
    </Layout>
  );
}
