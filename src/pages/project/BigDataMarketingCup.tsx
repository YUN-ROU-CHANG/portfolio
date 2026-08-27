import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { 
  Trophy, Database, Target, TrendingUp, 
  Smartphone, Activity, Lightbulb, Users, 
  Crosshair, Repeat, Layers
} from 'lucide-react';


const bigDataPhotos = import.meta.glob(
  '../../assets/images/project/BigDataMarketingCup/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const bp = Object.values(bigDataPhotos) as string[];

export default function BigDataMarketingCup() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useRevealOnScroll();

  return (
    <Layout>
      <div id="big-data-cup-page">
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
                <div className="competition-badge">
                  <div className="badge-icon">
                    <Trophy size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">{t('project.bigDataCup.hero.badge')}</div>
                    <div className="badge-subtitle">{t('project.bigDataCup.hero.badgeSub')}</div>
                  </div>
                </div>
              </div>
              
              <h1 className="hero-title">
                {t('project.bigDataCup.hero.title')}
              </h1>
              
              <p className="hero-subtitle">
                {t('project.bigDataCup.hero.desc')}
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{t('project.bigDataCup.hero.clientLabel')}</span>
                  <span className="detail-value">{t('project.bigDataCup.hero.clientValue')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.bigDataCup.hero.roleLabel')}</span>
                  <span className="detail-value">{t('project.bigDataCup.hero.roleValue')}</span>
                  <span className="detail-sub">{t('project.bigDataCup.hero.roleSub')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.bigDataCup.hero.scopeLabel')}</span>
                  <span className="detail-value">{t('project.bigDataCup.hero.scopeValue')}</span>
                  <span className="detail-sub">{t('project.bigDataCup.hero.scopeSub')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 var(--space-4)'}}>
          <img src={bp[6]} alt={t('project.bigDataCup.hero.coverAlt')}
            loading="lazy"
            style={{width:'100%',height:'auto',borderRadius:'8px',display:'block',marginBottom:'32px'}} />
        </div>

        {/* The Challenge & Market Context */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <div className="section-header-sm">
                  <Target size={24} color="var(--red-ink)" />
                  <h2 className="section-heading-sm">{t('project.bigDataCup.challenge.heading')}</h2>
                </div>
                <p className="body-text">
                  {t('project.bigDataCup.challenge.desc')}
                </p>
                <div className="impact-tag" style={{ marginTop: '24px', display: 'inline-block' }}>
                  {t('project.bigDataCup.challenge.goal')}
                </div>
              </div>

              <div className="column-content gray-box">
                <div className="section-header-sm">
                  <Database size={24} color="var(--red-ink)" />
                  <h2 className="section-heading-sm">{t('project.bigDataCup.insights.heading')}</h2>
                </div>
                <ul className="objective-list">
                  <li><strong>{t('project.bigDataCup.insights.i1label')}</strong> {t('project.bigDataCup.insights.i1desc')}</li>
                  <li><strong>{t('project.bigDataCup.insights.i2label')}</strong> {t('project.bigDataCup.insights.i2desc')}</li>
                  <li><strong>{t('project.bigDataCup.insights.i3label')}</strong> {t('project.bigDataCup.insights.i3desc')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

<img src={bp[0]} alt={t('project.bigDataCup.insights.competitorAlt')}
              loading="lazy"
              style={{width:'100%',height:'auto',borderRadius:'8px',border:'1px solid rgba(12,12,12,.08)',display:'block',marginTop:'24px'}} />

        {/* Strategy Grid */}
        <section className="content-section reveal" style={{ background: 'color-mix(in srgb, #F43F5E 8%, var(--surface))' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">{t('project.bigDataCup.strategy.heading')}</h2>
              <p className="section-subheading">{t('project.bigDataCup.strategy.desc')}</p>
            </div>

            <div className="strategy-grid">
              <div className="strategy-card">
                <div className="card-number">01</div>
                <div className="card-icon-wrapper"><Lightbulb size={28} /></div>
                <h3 className="card-title">{t('project.bigDataCup.strategy.s1title')}</h3>
                <p className="card-text">
                  {t('project.bigDataCup.strategy.s1a')}<strong>{t('project.bigDataCup.strategy.s1em')}</strong>{t('project.bigDataCup.strategy.s1b')}
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">02</div>
                <div className="card-icon-wrapper"><Crosshair size={28} /></div>
                <h3 className="card-title">{t('project.bigDataCup.strategy.s2title')}</h3>
                <p className="card-text">
                  {t('project.bigDataCup.strategy.s2desc')}
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">03</div>
                <div className="card-number-alt" style={{ display: 'none' }}>03</div>
                <div className="card-icon-wrapper"><Repeat size={28} /></div>
                <h3 className="card-title">{t('project.bigDataCup.strategy.s3title')}</h3>
                <p className="card-text">
                  {t('project.bigDataCup.strategy.s3desc')}
                </p>
              </div>

              <div className="strategy-card highlight">
                <div className="card-number">04</div>
                <div className="card-icon-wrapper"><Smartphone size={28} /></div>
                <h3 className="card-title">{t('project.bigDataCup.strategy.s4title')}</h3>
                <p className="card-text">
                  {t('project.bigDataCup.strategy.s4a')}<strong>{t('project.bigDataCup.strategy.s4em')}</strong>{t('project.bigDataCup.strategy.s4b')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Touchpoint: App UI Design */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <div className="badge-inline">{t('project.bigDataCup.app.heading')}</div>
              <h2 className="section-heading" style={{ marginTop: '16px' }}>{t('project.bigDataCup.strategy.s4em')}</h2>
              <p className="section-subheading" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {t('project.bigDataCup.app.desc')}
              </p>
            </div>

            {/* App Screens Grid */}
            <div className="app-mockup-grid">
              {/* Screen 1: Start Page */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP start page.png" /> */}
                  <img src={bp[5]} alt={t('project.bigDataCup.app.s1alt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{t('project.bigDataCup.app.s1title')}</h4>
                <p className="screen-desc">{t('project.bigDataCup.app.s1desc')}</p>
              </div>

              {/* Screen 2: Home */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP home.jpg" /> */}
                  <img src={bp[1]} alt={t('project.bigDataCup.app.s2alt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{t('project.bigDataCup.app.s2title')}</h4>
                <p className="screen-desc">{t('project.bigDataCup.app.s2desc')}</p>
              </div>

              {/* Screen 3: Plan */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP plan.jpg" /> */}
                  <img src={bp[3]} alt={t('project.bigDataCup.app.s3alt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{t('project.bigDataCup.app.s3title')}</h4>
                <p className="screen-desc">{t('project.bigDataCup.app.s3desc')}</p>
              </div>

              {/* Screen 4: Social */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP social.jpg" /> */}
                  <img src={bp[4]} alt={t('project.bigDataCup.app.s4alt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{t('project.bigDataCup.app.s4title')}</h4>
                <p className="screen-desc">{t('project.bigDataCup.app.s4desc')}</p>
              </div>

              {/* Screen 5: Personal Page */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP personal page.jpg" /> */}
                  <img src={bp[2]} alt={t('project.bigDataCup.app.s5alt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{t('project.bigDataCup.app.s5title')}</h4>
                <p className="screen-desc">{t('project.bigDataCup.app.s5desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantifiable Impact & Conclusion */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="impact-banner">
              <div className="banner-content">
                <h2 className="banner-title">{t('project.bigDataCup.impact.heading')}</h2>
                <div className="metrics-row">
                  <div className="metric-box">
                    <div className="metric-icon"><Trophy size={40} color="white" /></div>
                    <div className="metric-number">{t('project.bigDataCup.impact.m1num')}</div>
                    <div className="metric-label">{t('project.bigDataCup.impact.m1label')}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-icon"><Layers size={40} color="white" /></div>
                    <div className="metric-number">{t('project.bigDataCup.impact.m2num')}</div>
                    <div className="metric-label">{t('project.bigDataCup.impact.m2label')}</div>
                  </div>
                </div>
                <p className="banner-footer-text">
                  {t('project.bigDataCup.impact.judgesDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          /* delta：標題已於 2026/08 統一為 32-48px / 700，此處只留副標與規格列差異 */
          .section-subheading { font-size: 18px; line-height: 1.6; margin-bottom: 0; }
          .section-header-sm { margin-bottom: 20px; }
          .detail-label { font-weight: 600; }
          .detail-value { font-size: 16px; font-weight: 700; }
          .detail-sub { color: var(--text-tertiary); }

          :root {
            --red-primary: #E11D48;      /* Energetic Red（實色底＋白字用） */
            --red-ink: #C81E45;          /* 淺底上的紅字，暗色模式覆寫變亮 */
            --red-dark: color-mix(in srgb, #E11D48 70%, var(--text-primary));
            --red-light: color-mix(in srgb, #E11D48 12%, var(--surface));
            --text-dark: var(--text-primary);
            --text-gray: var(--text-secondary);
            --border-color: var(--border);
          }

          .dark {
            --red-ink: #F5A3B5;
            --red-light: color-mix(in srgb, #E11D48 24%, var(--surface));
          }

          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, var(--red-light) 0%, transparent 100%);
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

          .competition-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 24px;
            background: var(--card);
            border: 1px solid var(--border-color);
            border-radius: 100px;
            box-shadow: 0 8px 24px rgba(225, 29, 72, 0.15);
          }

          .badge-icon {
            color: var(--red-ink);
            display: flex;
            align-items: center;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 16px;
            font-weight: 800;
            color: var(--red-dark);
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




          .detail-value.highlight-red {
            color: var(--red-ink);
            font-size: 18px;
          }


          /* Content Sections */



          .text-center {
            text-align: center;
          }

          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: stretch;
          }




          .gray-box {
            background: var(--surface);
            padding: 40px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
          }

          .impact-tag {
            background: var(--surface-muted);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            color: var(--red-dark);
            border-left: 3px solid var(--red-ink);
          }

          .objective-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .objective-list li {
            position: relative;
            padding-left: 28px;
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-gray);
          }

          .objective-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--red-ink);
            font-weight: bold;
            font-size: 18px;
          }

          /* Strategy Grid */
          .strategy-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .strategy-card {
            background: var(--card);
            padding: 40px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .strategy-card.highlight {
            border-color: var(--red-light);
            background: linear-gradient(135deg, var(--card) 0%, var(--red-light) 200%);
          }

          .strategy-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(225, 29, 72, 0.1);
          }

          .card-number {
            position: absolute;
            top: 24px;
            right: 32px;
            font-size: 64px;
            font-weight: 900;
            color: var(--red-light);
            opacity: 0.6;
            line-height: 1;
            pointer-events: none;
          }

          .card-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: var(--red-primary);
            color: white;
            border-radius: 16px;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
          }

          .card-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
          }

          .card-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--text-gray);
            position: relative;
            z-index: 1;
          }

          /* App Mockup Grid */
          .badge-inline {
            display: inline-block;
            padding: 6px 16px;
            background: var(--red-light);
            color: var(--red-dark);
            border-radius: var(--radius-pill);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .app-mockup-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          .app-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .screen-frame {
            width: 100%;
            border-radius: 24px;
            padding: 8px;
            background: var(--card);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            margin-bottom: 24px;
            transition: transform 0.3s ease;
          }

          .app-screen:hover .screen-frame {
            transform: translateY(-8px);
          }

          .image-placeholder.mock-app {
            width: 100%;
            aspect-ratio: 9/19.5; /* Mobile screen ratio */
            background: var(--surface-muted);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px dashed var(--border);
          }

          .screen-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
          }

          .screen-desc {
            font-size: 13px;
            color: var(--text-gray);
            line-height: 1.5;
          }

          /* Impact Banner */
          .impact-banner {
            background: var(--red-primary);
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
            background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%);
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
            margin-bottom: 48px;
            position: relative;
            z-index: 1;
          }

          .metric-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .metric-icon {
            background: rgba(255,255,255,0.2);
            padding: 16px;
            border-radius: 50%;
            margin-bottom: 8px;
          }

          .metric-number {
            font-size: 48px;
            font-weight: 800;
            line-height: 1;
            text-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }

          .metric-label {
            font-size: 15px;
            font-weight: 600;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .banner-footer-text {
            max-width: 800px;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.6;
            color: rgba(255,255,255,0.9);
            font-style: italic;
            position: relative;
            z-index: 1;
          }

          /* Responsive */
          @media (max-width: 959px) {
            .two-column-layout, .strategy-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .app-mockup-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 16px;
            }
            .metrics-row {
              gap: 32px;
            }
          }

          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .app-mockup-grid { grid-template-columns: 1fr 1fr; }
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#0F172A', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}