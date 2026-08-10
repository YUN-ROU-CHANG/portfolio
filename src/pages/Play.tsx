import { Link } from 'react-router';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

import photographyCover from '../assets/images/photography/photography-cover.png';
import concertImg from '../assets/images/home/concert.png';
import vibeCodingImg from '../assets/images/home/vibe-coding.png';

export default function Play() {
  const { t } = useLanguage();
  useRevealOnScroll();

  // 2026/08：從首頁的 carousel 搬過來。內容與 key 沿用 home.playground.*。
  const items = [
    {
      image: photographyCover,
      title: t('home.playground.photography.title'),
      desc: t('home.playground.photography.desc'),
      link: '/photography',
      external: false,
      label: t('common.explore'),
    },
    {
      image: concertImg,
      title: t('home.playground.music.title'),
      desc: t('home.playground.music.desc'),
      link: 'https://rose-musical-works.framer.website/',
      external: true,
      label: t('home.playground.music.label'),
    },
    {
      image: vibeCodingImg,
      title: t('home.playground.vibeCoding.title'),
      desc: t('home.playground.vibeCoding.desc'),
      link: '/how-i-built-this',
      external: false,
      label: t('home.playground.vibeCoding.label'),
    },
  ];

  return (
    <Layout>
      <section className="section play-hero">
        <div className="container">
          <h1 className="play-title reveal">{t('home.playground.heading')}</h1>
          <p className="play-sub reveal">{t('home.playground.sub')}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, paddingBottom: '96px' }}>
        <div className="container">
          <div className="play-grid">
            {items.map(item => {
              const inner = (
                <>
                  <div className="play-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="play-body">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <span className="play-label">{item.label}</span>
                  </div>
                </>
              );
              return item.external ? (
                <a key={item.title} className="play-card reveal" href={item.link} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <Link key={item.title} className="play-card reveal" to={item.link}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .play-hero { padding-top: clamp(64px, 9vw, 112px); padding-bottom: clamp(32px, 4vw, 48px); }
        .play-title {
          font-family: var(--font-display);
          font-size: clamp(44px, 7vw, 84px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--text-primary);
          margin: 0;
        }
        .play-sub {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 20px 0 0;
          max-width: 46ch;
        }

        .play-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(20px, 2.4vw, 32px); }
        .play-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .play-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px color-mix(in srgb, var(--text-primary) 10%, transparent);
          border-color: var(--border-strong);
        }
        .play-thumb { aspect-ratio: 4/3; overflow: hidden; background: var(--surface-muted); }
        .play-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s cubic-bezier(.2,.8,.2,1); }
        .play-card:hover .play-thumb img { transform: scale(1.04); }
        .play-body { padding: 22px 24px 26px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .play-body h2 { font-size: 19px; font-weight: 700; line-height: 1.3; margin: 0; color: var(--text-primary); }
        .play-body p { font-size: 14px; line-height: 1.65; color: var(--text-secondary); margin: 0; flex: 1; }
        .play-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--accent-text);
          margin-top: 6px;
        }

        @media (max-width: 900px) { .play-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .play-grid { grid-template-columns: 1fr; } }

        @media (prefers-reduced-motion: reduce) {
          .play-card, .play-thumb img { transition: none !important; }
          .play-card:hover { transform: none !important; }
          .play-card:hover .play-thumb img { transform: none !important; }
        }
      `}</style>
    </Layout>
  );
}
