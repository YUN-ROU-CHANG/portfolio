import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import {
  TrendingUp, Users, Bot, FileSpreadsheet,
  Megaphone, Target, BarChart3, Presentation,
  Briefcase, CheckCircle2, Maximize2, X
} from 'lucide-react';


const adnexPhotos = import.meta.glob(
  '../../assets/images/project/AdnexInternship/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const ap = Object.values(adnexPhotos) as string[];

export default function AdnexInternship() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useRevealOnScroll();

  return (
    <Layout>
      <div id="adnex-internship-page">
        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={() => setLightboxImage(null)}
            >
              <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                <X size={32} />
              </button>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={lightboxImage} alt={t('common.enlargedView')} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="hero-content"
            >
              <div className="award-badge-container">
                <div className="corporate-badge">
                  <div className="badge-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">{t('project.adnex.hero.badge')}</div>
                    <div className="badge-subtitle">{t('project.adnex.hero.badgeSub')}</div>
                  </div>
                </div>
              </div>

              <h1 className="hero-title">
                {t('project.adnex.hero.title')}
              </h1>

              <p className="hero-subtitle">
                {t('project.adnex.hero.desc')}
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{t('project.adnex.hero.timelineLabel')}</span>
                  <span className="detail-value">{t('project.adnex.hero.timelineValue')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.adnex.hero.roleLabel')}</span>
                  <span className="detail-value">{t('project.adnex.hero.roleValue')}</span>
                  <span className="detail-sub">{t('project.adnex.hero.roleSub')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.adnex.hero.focusLabel')}</span>
                  <span className="detail-value">{t('project.adnex.hero.focusValue')}</span>
                  <span className="detail-sub">{t('project.adnex.hero.focusSub')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview & The Challenge */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <div className="section-header-sm">
                  <Target size={24} color="var(--blue-ink)" />
                  <h2 className="section-heading-sm">{t('project.adnex.challenge.heading')}</h2>
                </div>
                <p className="body-text">
                  {t('project.adnex.challenge.desc')}
                </p>
              </div>

              <div className="column-content gray-box">
                <div className="section-header-sm">
                  <Megaphone size={24} color="var(--blue-ink)" />
                  <h2 className="section-heading-sm">{t('project.adnex.objectives.heading')}</h2>
                </div>
                <ul className="objective-list">
                  <li><strong>{t('project.adnex.objectives.o1label')}</strong> {t('project.adnex.objectives.o1desc')}</li>
                  <li><strong>{t('project.adnex.objectives.o2label')}</strong> {t('project.adnex.objectives.o2desc')}</li>
                  <li><strong>{t('project.adnex.objectives.o3label')}</strong> {t('project.adnex.objectives.o3desc')}</li>
                  <li><strong>{t('project.adnex.objectives.o4label')}</strong> {t('project.adnex.objectives.o4desc')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives & Actions */}
        <section className="content-section reveal" style={{ background: 'var(--surface)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-heading text-center" style={{ marginBottom: '64px' }}>
              {t('project.adnex.execution.heading')}
            </h2>

            <div className="initiatives-grid">
              {/* Initiative 1 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><TrendingUp size={28} /></div>
                <h3 className="card-title">{t('project.adnex.execution.e1title')}</h3>
                <p className="card-text">
                  {t('project.adnex.execution.e1desc')}
                </p>
                <div className="impact-tag">{t('project.adnex.execution.e1result')}</div>
              </div>

              {/* Initiative 2 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><Users size={28} /></div>
                <h3 className="card-title">{t('project.adnex.execution.e2title')}</h3>
                <p className="card-text">
                  {t('project.adnex.execution.e2desc')}
                </p>
                <div className="impact-tag">{t('project.adnex.execution.e2result')}</div>
              </div>

              {/* Initiative 3 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><Bot size={28} /></div>
                <h3 className="card-title">{t('project.adnex.execution.e3title')}</h3>
                <p className="card-text">
                  {t('project.adnex.execution.e3desc')}
                </p>
                <div className="impact-tag">{t('project.adnex.execution.e3result')}</div>
              </div>

              {/* Initiative 4 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><FileSpreadsheet size={28} /></div>
                <h3 className="card-title">{t('project.adnex.execution.e4title')}</h3>
                <p className="card-text">
                  {t('project.adnex.execution.e4desc')}
                </p>
                <div className="impact-tag">{t('project.adnex.execution.e4result')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Evidence Section */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-heading text-center" style={{ marginBottom: '48px' }}>
              {t('project.adnex.visuals.heading')}
            </h2>

            {/* Top 3 main images */}
            <div className="visual-grid">
              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[7])}>
                  <img src={ap[7]} alt={t('project.adnex.visuals.socialAlt')} loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{t('project.adnex.visuals.socialLabel')}</p>
              </div>

              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[4])}>
                  <img src={ap[4]} alt={t('project.adnex.visuals.kolLabel')} loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{t('project.adnex.visuals.kolLabel')}</p>
              </div>

              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[1])}>
                  <img src={ap[1]} alt={t('project.adnex.visuals.aiAlt')} loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{t('project.adnex.visuals.aiLabel')}</p>
              </div>
            </div>

            {/* Bottom 6 additional images */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
              {[ap[0], ap[8], ap[6], ap[3], ap[2], ap[5]].map((src, i) => (
                <div key={i} className="interactive-image-container" style={{ height: '200px' }} onClick={() => setLightboxImage(src)}>
                  <img src={src}
                    alt={`Additional Evidence ${i + 1}`}
                    loading="lazy"
                    className="visual-img-contain"
                  />
                  <div className="expand-hint"><Maximize2 size={18} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantifiable Impact */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="impact-banner">
              <div className="banner-content">
                <h2 className="banner-title">{t('project.adnex.impact.heading')}</h2>
                <div className="metrics-row">
                  <div className="metric-box">
                    <div className="metric-number">{t('project.adnex.impact.m1value')}</div>
                    <div className="metric-label">{t('project.adnex.impact.m1label')}</div>
                    <div className="metric-sub">{t('project.adnex.impact.m1sub')}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-number">{t('project.adnex.impact.m2value')}</div>
                    <div className="metric-label">{t('project.adnex.impact.m2label')}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-number">{t('project.adnex.impact.m3value')}</div>
                    <div className="metric-label">{t('project.adnex.impact.m3label')}</div>
                    <div className="metric-sub">{t('project.adnex.impact.m3sub')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          :root {
            --blue-primary: #1D4ED8;     /* ADNEX/Tech Blue（實色底＋白字用） */
            --blue-ink: #1D4ED8;         /* 淺底上的藍字，暗色模式覆寫變亮 */
            --blue-light: color-mix(in srgb, #1D4ED8 10%, var(--surface));
            --text-dark: var(--text-primary);
            --text-gray: var(--text-secondary);
            --border-color: var(--border);
          }

          .dark {
            --blue-ink: #A9C2F7;
            --blue-light: color-mix(in srgb, #1D4ED8 22%, var(--surface));
          }

          /* Lightbox */
          .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
          .lightbox-close { position: absolute; top: 20px; right: 20px; color: white; background: rgba(255,255,255,0.1); border: none; padding: 10px; border-radius: 50%; cursor: pointer; transition: background 0.2s; }
          .lightbox-close:hover { background: rgba(255,255,255,0.2); }
          .lightbox-content { max-width: 90%; max-height: 90%; display: flex; align-items: center; justify-content: center; }
          .lightbox-content img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 24px rgba(0,0,0,0.5); }

          /* Interactive Image Container */
          .interactive-image-container {
            width: 100%;
            height: 280px; 
            background: var(--card);
            border: 1px solid rgba(12,12,12,.08);
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            cursor: zoom-in;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .interactive-image-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          }
          .visual-img-contain {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
          }
          .expand-hint {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: var(--card-glass);
            border-radius: 50%;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--blue-ink);
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: 10;
          }
          .interactive-image-container:hover .expand-hint {
            opacity: 1;
          }
          .image-caption {
            margin-top: 16px;
            font-size: 14px;
            color: var(--text-gray);
            text-align: center;
            font-weight: 500;
          }

          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, var(--blue-light) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          .award-badge-container {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
          }

          .corporate-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 24px;
            background: var(--card);
            border: 1px solid var(--border-color);
            border-radius: 100px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          }

          .badge-icon {
            color: var(--blue-ink);
            display: flex;
            align-items: center;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark);
          }

          .badge-subtitle {
            font-size: 13px;
            color: var(--text-gray);
          }

          .hero-title {
            font-size: clamp(32px, 5vw, 52px);
            font-weight: 800;
            line-height: 1.2;
            color: var(--text-dark);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(16px, 2vw, 18px);
            line-height: 1.6;
            color: var(--text-gray);
            max-width: 800px;
            margin: 0 auto;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid var(--border-color);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-gray);
            font-weight: 600;
          }

          .detail-value {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark);
          }

          .detail-value.highlight-blue {
            color: var(--blue-ink);
            font-size: 18px;
          }

          .detail-sub {
            font-size: 13px;
            color: var(--text-tertiary);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(28px, 4vw, 40px);
            font-weight: 800;
            color: var(--text-dark);
          }

          .text-center {
            text-align: center;
          }

          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: stretch;
          }

          .section-header-sm {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .section-heading-sm {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--text-gray);
          }

          .gray-box {
            background: var(--surface);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid var(--border-color);
          }

          .objective-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .objective-list li {
            position: relative;
            padding-left: 24px;
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-gray);
          }

          .objective-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--blue-ink);
            font-weight: bold;
          }

          /* Initiatives Grid */
          .initiatives-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .initiative-card {
            background: var(--card);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid var(--border-color);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
          }

          .initiative-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0,0,0,0.06);
          }

          .card-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: var(--blue-light);
            color: var(--blue-ink);
            border-radius: 16px;
            margin-bottom: 24px;
          }

          .card-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 16px;
          }

          .card-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--text-gray);
            flex-grow: 1;
            margin-bottom: 24px;
          }

          .impact-tag {
            background: var(--surface-muted);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--blue-ink);
            border-left: 3px solid var(--blue-ink);
          }

          /* Visual Grid Placeholders */
          .visual-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          /* Impact Banner */
          .impact-banner {
            background: var(--blue-primary);
            border-radius: 24px;
            padding: 64px 40px;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .impact-banner::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            pointer-events: none;
          }

          .banner-title {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 48px;
            position: relative;
            z-index: 1;
          }

          .metrics-row {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 48px;
            position: relative;
            z-index: 1;
          }

          .metric-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .metric-number {
            font-size: 48px;
            font-weight: 800;
            line-height: 1;
            text-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .metric-label {
            font-size: 15px;
            font-weight: 500;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .metric-sub {
            margin-top: 6px;
            max-width: 22ch;
            font-family: var(--font-mono);
            font-size: 12px;
            line-height: 1.5;
            opacity: 0.72;
          }

          /* Responsive */
          @media (max-width: 959px) {
            .two-column-layout, .initiatives-grid {
              grid-template-columns: 1fr;
            }
            .visual-grid {
              grid-template-columns: 1fr;
            }
            .metrics-row {
              gap: 32px;
            }
          }

          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .content-section { padding: 60px 0; }
            .impact-banner { padding: 48px 24px; }
            .metric-number { font-size: 36px; }
          }
        `}</style>
      </div>

      <button
        onClick={() => window.history.back()}
        aria-label="Go back"
        style={{
          position: 'fixed', top: '76px', left: '24px',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'color-mix(in srgb, var(--background) 95%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(12,12,12,0.25)',
          color: 'var(--text-primary)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', lineHeight: 1,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 90,
          transition: 'background .2s, box-shadow .2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'var(--background)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'color-mix(in srgb, var(--background) 95%, transparent)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >←</button>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', borderRadius: '50%', background: '#0F172A', color: '#FFE699', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'opacity 0.25s ease, transform 0.2s ease', zIndex: 999, opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transform: showTop ? 'translateY(0)' : 'translateY(8px)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = showTop ? 'translateY(0)' : 'translateY(8px)'; }}>↑</button>
    </Layout>
  );
}