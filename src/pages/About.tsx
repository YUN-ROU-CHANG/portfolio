import { useEffect, useRef, useState, type CSSProperties } from 'react';
import mePng from '../assets/images/Me.webp';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Lightbulb, Target, Heart, Rocket, Monitor } from 'lucide-react';

// ─── 引入 My Strengths 會用到的 5 張背景圖片 ───
import experimentNotion from '../assets/images/experiment-notion.webp';
import awardsReport from '../assets/images/awards-report.webp';
import figmaImg from '../assets/images/figma.webp';
import codingImg from '../assets/images/coding.webp';
import crossFunctional from '../assets/images/cross-functional.webp';

export default function About() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useRevealOnScroll();

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div id="about-page">
        {/* Section 1: Hero Intro — Portrait Tile + Skill Matrix */}
        <section style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 2.2vw, 32px)' }}>
            <div className="about-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'start' }}>

              {/* ── Left: Portrait Tile ── */}
              <div style={{ position: 'relative', border: '1px solid var(--border-strong)', background: 'var(--surface)', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '14px' }}>
                  <span>{t('about.dossier.subject')}</span>
                  <span>{t('about.dossier.file')}</span>
                </div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--surface-muted)', position: 'relative' }}>
                  <img
                    src={mePng}
                    alt={t('about.dossier.photoAlt')}
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.basedLabel')}</span>{t('about.dossier.basedValue')}</div>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.programLabel')}</span>{t('about.dossier.programValue')}</div>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.langLabel')}</span>{t('about.dossier.langValue')}</div>
                </div>
              </div>

              {/* ── Right: Bio + Skill Matrix ── */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 28px', textTransform: 'uppercase', color: 'var(--accent-text)' }}>{t('about.intro.line1')}{' '}
                  <span style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 400, margin: '0 .06em' }}>/</span>{' '}{t('about.intro.line2')}{' '}
                  <em style={{ fontStyle: 'normal', color: 'var(--on-accent)', background: 'var(--accent)', padding: '0 .1em', display: 'inline-block', transform: 'translateY(-.04em)' }}>{t('about.intro.line2Em')}</em>
                </h3>

                <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--text-primary)', margin: '0 0 16px', maxWidth: '56ch' }}>{t('about.intro.p1a')}{' '}<strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{t('about.intro.p1strong')}</strong>{' '}{t('about.intro.p1b')}</p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--text-primary)', margin: '0 0 16px', maxWidth: '56ch' }}>{t('about.intro.p2a')}{' '}<strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{t('about.intro.p2strong')}</strong>{t('about.intro.p2b')}</p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--text-primary)', margin: 0, maxWidth: '56ch' }}>{t('about.intro.p3')}</p>

                {/* Skill Matrix */}
                <div style={{ marginTop: '40px', border: '1px solid var(--border-strong)' }}>
                  {[
                    { cat: t('about.skills.catResearch'), skills: [{ label: t('about.skills.usability'), hot: true }, { label: t('about.skills.counterbalancing'), hot: true }, { label: t('about.skills.spss'), lvl: t('about.skills.lvlAdv') }, { label: t('about.skills.interviews') }, { label: t('about.skills.survey') }, { label: t('about.skills.mixed') }] },
                    { cat: t('about.skills.catCraft'), skills: [{ label: t('about.skills.figma'), hot: true }, { label: t('about.skills.prototype') }, { label: t('about.skills.genai') }] },
                    { cat: t('about.skills.catStrategy'), skills: [{ label: t('about.skills.serviceDesign') }, { label: t('about.skills.productStrategy') }, { label: t('about.skills.facilitation') }, { label: t('about.skills.marketingOps') }] },
                  ].map(({ cat, skills }, gi, arr) => (
                    <div key={cat} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', borderBottom: gi < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ padding: '18px 16px', borderRight: '1px solid var(--border)', background: 'var(--surface)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                        {cat}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 16px', alignItems: 'center' }}>
                        {skills.map(({ label, hot, lvl }: { label: string; hot?: boolean; lvl?: string }) => (
                          <span key={label}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', padding: '6px 10px', border: '1px solid var(--border-strong)', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: hot ? 'var(--accent)' : 'transparent', color: hot ? 'var(--on-accent)' : 'inherit', cursor: 'default', transition: 'background .2s, color .2s' }}
                            onMouseEnter={e => { if (!hot) { (e.currentTarget as HTMLElement).style.background = 'var(--surface-inverse)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-on-inverse)'; } }}
                            onMouseLeave={e => { if (!hot) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'inherit'; } }}
                          >
                            {label}{lvl && <span style={{ fontSize: '9px', opacity: .6 }}>{lvl}</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: My Strengths (Bento Grid + 漸層遮罩) ─── */}
        <section className="section" id="about-strengths" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
              <Lightbulb size={32} color="var(--accent-text)" />{t('about.strengths.heading')}</h2>

            <div className="bento-grid" ref={strengthsRef}>

              {/* Card 1: Rigorous Research (Dark Theme) */}
              <div className="bento-card bento-dark reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={experimentNotion} alt={t('about.strengths.research.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-dark"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-dark">{t('about.strengths.research.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.research.titleLine1')}<br />{t('about.strengths.research.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.research.desc')}</p>
                  <div className="bento-stats-row mt-auto">
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">48</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat1a')}<br />{t('about.strengths.research.stat1b')}</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×5</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat2a')}<br />{t('about.strengths.research.stat2b')}</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×2</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat3a')}<br />{t('about.strengths.research.stat3b')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Insight to Gold */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={awardsReport} alt={t('about.strengths.awards.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-amber">{t('about.strengths.awards.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.awards.titleLine1')}<br />{t('about.strengths.awards.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.awards.desc')}</p>
                  <div className="bento-badge-row mt-auto">
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge1')}</span>
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge2')}</span>
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge3')}</span>
                  </div>
                </div>
              </div>

              {/* Card 3: UI Design */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={figmaImg} alt={t('about.strengths.uiDesign.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light-blur"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-teal">{t('about.strengths.uiDesign.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.uiDesign.titleLine1')}<br />{t('about.strengths.uiDesign.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.uiDesign.desc')}</p>
                  <div className="bento-pill-stack mt-auto">
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill1')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill2')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill3')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill4')}</span>
                  </div>
                </div>
              </div>

              {/* Card 4: AI-Augmented */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '240ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={codingImg} alt={t('about.strengths.ai.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-blue">{t('about.strengths.ai.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.ai.titleLine1')}<br />{t('about.strengths.ai.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.ai.desc')}</p>
                </div>
              </div>

              {/* Card 5: Cross-Functional (Wide) */}
              <div className="bento-card bento-light bento-card--wide reveal" style={{ '--reveal-delay': '320ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={crossFunctional} alt={t('about.strengths.crossFunc.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-wide"></div>
                </div>
                <div className="bento-content bento-content--row">
                  <div className="content-left">
                    <span className="bento-tag tag-gray">{t('about.strengths.crossFunc.tag')}</span>
                    <h3 className="bento-title">{t('about.strengths.crossFunc.titleLine1')}<br />{t('about.strengths.crossFunc.titleLine2')}</h3>
                    <p className="bento-sub" style={{ maxWidth: '400px' }}>{t('about.strengths.crossFunc.desc')}</p>
                  </div>
                  <div className="content-right mt-auto">
                    <div className="bento-mini-grid">
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">110+</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat1a')}<br />{t('about.strengths.crossFunc.statManaged')}</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">60</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat2a')}<br />{t('about.strengths.crossFunc.stat2b')}</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">3</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat3a')}<br />{t('about.strengths.crossFunc.statManaged')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: My Values - 3 Card Grid */}
        <section className="section" id="about-values" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
              <Heart size={32} color="var(--accent-text)" />{t('about.values.heading')}</h2>

            <div className="about-values-grid" ref={valuesRef}>
              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '0ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Target size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.clarity.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.clarity.lead')}</strong>{' '}{t('about.values.clarity.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '80ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Rocket size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.curiosity.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.curiosity.lead')}</strong>{' '}{t('about.values.curiosity.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '160ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Heart size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.resilience.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.resilience.lead')}</strong>{' '}{t('about.values.resilience.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '240ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Monitor size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.hardware.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.hardware.lead')}</strong>{' '}{t('about.values.hardware.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 專屬 CSS 樣式 (Bento Grid + 漸層遮罩方案 A) ─── */}
        <style>{`
          /* === Base === */
          .mt-auto { margin-top: auto; }
          
          /* Hero Section Animations */
          @keyframes spinSlow { to { transform: rotate(360deg); } }
          
          .section-head {
            font-size: clamp(28px, 4vw, 48px);
            font-weight: 700;
            color: var(--accent-text);
            margin-bottom: 32px;
          }

          /* === 🍱 My Strengths: Bento Grid === */
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          /* Card Base */
          .bento-card {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
            min-height: 380px;
            display: flex;
            flex-direction: column;
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          }

          .bento-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(0,0,0,0.12);
            border-color: rgba(0, 0, 0, 0.15);
          }

          .bento-card--wide {
            grid-column: 1 / -1;
          }

          /* Background Image & Hover Zoom */
          .bento-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
          }
          
          .bento-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .bento-card:hover .bento-bg img {
            transform: scale(1.08);
          }

          /* === Glass Overlays (方案 A：漸層遮罩) === */
          .bento-overlay {
            position: absolute;
            inset: 0;
            transition: all 0.4s ease;
          }
          
          /* Dark Card Overlay (Research at Scale) - 左上重，右下輕 */
          .overlay-dark {
            background: linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(12, 12, 12, 0.75) 45%, rgba(12, 12, 12, 0.1) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-dark {
            background: linear-gradient(135deg, rgba(12, 12, 12, 0.92) 0%, rgba(12, 12, 12, 0.6) 45%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Light Card Overlay (Standard) - 左上重，右下輕 */
          .overlay-light {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 45%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-light {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Light Card Blurrier (For complex Figma BG) */
          .overlay-light-blur {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 55%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(4px);
          }
          .bento-card:hover .overlay-light-blur {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Wide Card Overlay (Cross Functional) - 左重，右輕 */
          .overlay-wide {
            background: linear-gradient(90deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 45%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-wide {
            background: linear-gradient(90deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 45%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Content Wrapper */
          .bento-content {
            position: relative;
            z-index: 1;
            padding: 36px;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .bento-content--row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            gap: 24px;
          }

          /* Typography & Colors inside Bento */
          .bento-light { color: var(--text-primary); }
          
          /* 增強 Dark Card 的文字陰影，保證純白與易讀性 */
          .bento-dark .bento-title {
            color: var(--bone);
            text-shadow: 0 2px 8px rgba(0,0,0,0.6);
          }
          .bento-dark .bento-sub {
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 1px 4px rgba(0,0,0,0.5);
          }
          .bento-dark .bento-stat-label {
            color: rgba(255, 255, 255, 0.85);
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          }

          .bento-title {
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin: 16px 0 12px;
          }

          .bento-sub {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-tertiary);
            margin: 0;
            font-weight: 500;
          }

          /* Tags */
          .bento-tag {
            display: inline-flex;
            align-items: center;
            font-family: var(--font-mono);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 100px;
            align-self: flex-start;
          }

          .tag-dark { background: rgba(255,255,255,0.15); color: var(--bone); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); }
          .tag-amber { background: color-mix(in srgb, var(--acid) 45%, var(--surface)); color: var(--accent-text); }
          .tag-teal { background: var(--surface-subtle); color: var(--text-secondary); }
          .tag-blue { background: color-mix(in srgb, var(--acid) 22%, var(--surface)); color: var(--accent-text); }
          .tag-gray { background: var(--surface); color: var(--text-secondary); border: 1px solid var(--border); }

          /* Stats Row (Card 1) */
          .bento-stats-row {
            display: flex;
            gap: 32px;
          }
          .bento-stat { display: flex; flex-direction: column; }
          .bento-stat-num {
            font-family: var(--font-display);
            font-size: 40px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 4px;
            text-shadow: 0 2px 6px rgba(0,0,0,0.4);
          }
          .highlight-acid { color: var(--acid); }
          .bento-stat-label {
            font-size: 12px;
            line-height: 1.4;
          }

          /* Badge Row (Card 2) */
          .bento-badge-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .bento-badge {
            font-size: 12px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 100px;
            border: 1px solid var(--border);
            background: color-mix(in srgb, var(--background) 72%, transparent);
            color: var(--text-primary);
            backdrop-filter: blur(4px);
          }

          /* Pill Stack (Card 3) */
          .bento-pill-stack {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .bento-pill {
            font-family: var(--font-mono);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 6px 12px;
            border-radius: 4px;
            background: color-mix(in srgb, var(--background) 62%, transparent);
            border: 1px solid var(--border);
            color: var(--text-primary);
            backdrop-filter: blur(4px);
          }

          /* Mini Grid (Card 5 Wide) */
          .bento-mini-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            background: color-mix(in srgb, var(--background) 66%, transparent);
            padding: 24px;
            border-radius: 16px;
            border: 1px solid var(--border);
            backdrop-filter: blur(4px);
          }
          .bento-mini-stat { text-align: center; }
          .mini-stat-num {
            font-family: var(--font-display);
            font-size: 36px;
            font-weight: 700;
            color: var(--accent-text);
            line-height: 1;
            margin-bottom: 6px;
          }
          .mini-stat-label {
            font-size: 12px;
            color: var(--text-tertiary);
            line-height: 1.4;
            font-weight: 500;
          }

          /* === My Values === */
          .about-values-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .card.glass {
            background: color-mix(in srgb, var(--background) 75%, transparent);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
          }

          /* === Responsive === */
          @media (max-width: 959px) {
            .about-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
            .bento-grid { grid-template-columns: 1fr; }
            .bento-card--wide { grid-column: auto; }
            .bento-content--row { flex-direction: column; align-items: flex-start; }
            .about-values-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 640px) {
            .bento-content { padding: 24px; }
            .bento-title { font-size: 24px; }
            .bento-stats-row { flex-wrap: wrap; gap: 20px; }
            .bento-mini-grid { grid-template-columns: 1fr; gap: 20px; width: 100%; }
          }
          @media (prefers-reduced-motion: reduce) {
            .bento-card, .bento-bg img, .bento-overlay { transition: none !important; }
            .bento-card:hover { transform: none !important; }
          }
        `}</style>
      </div>

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