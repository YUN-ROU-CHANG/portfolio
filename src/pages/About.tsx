import { useEffect, useRef, useState } from 'react';
import mePng from '../assets/images/Me.png';
import Layout from '../components/Layout';
import { Lightbulb, Target, Heart, Rocket, Monitor } from 'lucide-react';

// ─── 引入 My Strengths 會用到的 5 張背景圖片 ───
import experimentNotion from '../assets/images/experiment-notion.png';
import awardsReport from '../assets/images/awards-report.jpg';
import figmaImg from '../assets/images/figma.png';
import codingImg from '../assets/images/coding.png';
import crossFunctional from '../assets/images/cross-functional.jpeg';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered reveal animations with Reduced Motion guard
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

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
              <div style={{ position: 'relative', border: '1px solid #0C0C0C', background: '#F6F2E7', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#6B6A62', marginBottom: '14px' }}>
                  <span>SUBJECT · RC-26</span>
                  <span>FILE 03.01</span>
                </div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#E3DED1', position: 'relative' }}>
                  <img
                    src={mePng}
                    alt="Rose Chang"
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
                  />
                  {/* Spinning stamp */}
                  <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '84px', height: '84px', borderRadius: '50%', border: '1.5px solid #0C0C0C', background: '#FFE699', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '.14em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.2, animation: 'spinSlow 22s linear infinite' }}>
                    CERTIFIED /<br />DESIGNER<br />· 2026 ·
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(12,12,12,.12)', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>
                  <div><span style={{ color: '#0C0C0C', marginRight: '4px' }}>BASED</span>Taipei</div>
                  <div><span style={{ color: '#0C0C0C', marginRight: '4px' }}>PROGRAM</span>M.Des '26</div>
                  <div><span style={{ color: '#0C0C0C', marginRight: '4px' }}>LANG.</span>中 / EN</div>
                </div>
              </div>

              {/* ── Right: Bio + Skill Matrix ── */}
              <div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 28px', textTransform: 'uppercase', color: 'var(--md-primary)' }}>
                  A researcher who codes.{' '}
                  <span style={{ color: '#E23A1C', fontStyle: 'italic', fontWeight: 400, margin: '0 .06em' }}>/</span>{' '}
                  A designer who{' '}
                  <em style={{ fontStyle: 'normal', color: '#7A5C00', background: '#FFE699', padding: '0 .1em', display: 'inline-block', transform: 'translateY(-.04em)' }}>asks why.</em>
                </h3>

                <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#1A1A1A', margin: '0 0 16px', maxWidth: '56ch' }}>
                  I'm a detail-oriented and insightful UI/UX designer passionate about crafting intuitive and user-centered digital experiences. My experience spans both UI design and UX research, and I had the honor of contributing to a team project that won the <strong style={{ color: '#0C0C0C', fontWeight: 600 }}>Gold Award at the 2024 InnoConnect+</strong> competition for Hi-Life.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#1A1A1A', margin: '0 0 16px', maxWidth: '56ch' }}>
                  Previously, I worked as a <strong style={{ color: '#0C0C0C', fontWeight: 600 }}>marketing intern at KDAN</strong>, where I created visual content for social media and produced analytical reports on influencer and advertising performance. I'm especially interested in emerging technologies such as AI and interactive design, with a current research focus on AI-generated music and voice synthesis.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#1A1A1A', margin: 0, maxWidth: '56ch' }}>
                  Beyond pixels and prototypes, I'm driven by collaboration — working with cross-functional teams to transform ideas into user-centered solutions. When I'm not designing: new music, creative coding, or the latest design trends.
                </p>

                {/* Skill Matrix */}
                <div style={{ marginTop: '40px', border: '1px solid #0C0C0C' }}>
                  {[
                    { cat: 'Research', skills: [{ label: 'Usability Testing', hot: true }, { label: 'Diary Studies', hot: true }, { label: 'SPSS / Quant', lvl: 'ADV' }, { label: 'Interviews' }, { label: 'Survey Design' }, { label: 'Mixed Methods' }] },
                    { cat: 'Craft', skills: [{ label: 'Figma · Auto-layout', hot: true }, { label: 'Prototype / React' }, { label: 'Gen-AI Workflows' }] },
                    { cat: 'Strategy', skills: [{ label: 'Service Design' }, { label: 'Product Strategy' }, { label: 'Facilitation' }, { label: 'Marketing Ops' }] },
                  ].map(({ cat, skills }, gi, arr) => (
                    <div key={cat} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', borderBottom: gi < arr.length - 1 ? '1px solid rgba(12,12,12,.12)' : 'none' }}>
                      <div style={{ padding: '18px 16px', borderRight: '1px solid rgba(12,12,12,.12)', background: '#F6F2E7', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#0C0C0C' }}>
                        {cat}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 16px', alignItems: 'center' }}>
                        {skills.map(({ label, hot, lvl }: { label: string; hot?: boolean; lvl?: string }) => (
                          <span key={label}
                            style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', padding: '6px 10px', border: '1px solid #0C0C0C', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: hot ? '#FFE699' : 'transparent', cursor: 'default', transition: 'background .2s, color .2s' }}
                            onMouseEnter={e => { if (!hot) { (e.currentTarget as HTMLElement).style.background = '#0C0C0C'; (e.currentTarget as HTMLElement).style.color = '#FFE699'; } }}
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
              <Lightbulb size={32} color="hsl(var(--g1))" />
              My Strengths
            </h2>

            <div className="bento-grid" ref={strengthsRef}>

              {/* Card 1: Rigorous Research (Dark Theme) */}
              <div className="bento-card bento-dark reveal">
                <div className="bento-bg">
                  <img src={experimentNotion} alt="Research Notion" loading="lazy" />
                  <div className="bento-overlay overlay-dark"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-dark">Research at Scale</span>
                  <h3 className="bento-title">Rigorous Research,<br />Real Numbers</h3>
                  <p className="bento-sub">Full-cycle mixed-methods study on bedtime procrastination — from recruitment to validated analysis.</p>
                  <div className="bento-stats-row mt-auto">
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">48</span>
                      <span className="bento-stat-label">participants<br />recruited</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×5</span>
                      <span className="bento-stat-label">validated<br />scales</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×2</span>
                      <span className="bento-stat-label">methods:<br />quant + qual</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Insight to Gold */}
              <div className="bento-card bento-light reveal">
                <div className="bento-bg">
                  <img src={awardsReport} alt="Awards Report" loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-amber">Research → Product</span>
                  <h3 className="bento-title">From Insight<br />to Gold</h3>
                  <p className="bento-sub">Turning user research into winning strategy — nationally recognized in both academic and commercial arenas.</p>
                  <div className="bento-badge-row mt-auto">
                    <span className="bento-badge badge-award">InnoConnect+ Gold</span>
                    <span className="bento-badge badge-award">IEEE Best Paper</span>
                    <span className="bento-badge badge-award">時報金犢獎 3rd</span>
                  </div>
                </div>
              </div>

              {/* Card 3: UI Design */}
              <div className="bento-card bento-light reveal">
                <div className="bento-bg">
                  <img src={figmaImg} alt="Figma UI Design" loading="lazy" />
                  <div className="bento-overlay overlay-light-blur"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-teal">Full-Cycle UI Design</span>
                  <h3 className="bento-title">Design Systems,<br />Not Just Screens</h3>
                  <p className="bento-sub">Full Figma stack — wireframes through to component libraries and interactive prototypes.</p>
                  <div className="bento-pill-stack mt-auto">
                    <span className="bento-pill">Wireframing</span>
                    <span className="bento-pill">Design System</span>
                    <span className="bento-pill">Component Library</span>
                    <span className="bento-pill">Interactive Prototype</span>
                  </div>
                </div>
              </div>

              {/* Card 4: AI-Augmented */}
              <div className="bento-card bento-light reveal">
                <div className="bento-bg">
                  <img src={codingImg} alt="AI Coding" loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-blue">AI-Augmented</span>
                  <h3 className="bento-title">Designing With AI,<br />Not Just About It</h3>
                  <p className="bento-sub">Built this portfolio with AI-assisted development. Trained a 10-person team on AI creative tools. Researching AI vocal agency at IEEE GCCE 2025.</p>
                </div>
              </div>

              {/* Card 5: Cross-Functional (Wide) */}
              <div className="bento-card bento-light bento-card--wide reveal">
                <div className="bento-bg">
                  <img src={crossFunctional} alt="Cross Functional Collaboration" loading="lazy" />
                  <div className="bento-overlay overlay-wide"></div>
                </div>
                <div className="bento-content bento-content--row">
                  <div className="content-left">
                    <span className="bento-tag tag-gray">Cross-Functional</span>
                    <h3 className="bento-title">One Person,<br />Many Languages</h3>
                    <p className="bento-sub" style={{ maxWidth: '400px' }}>Speaking fluently across research, design, business, and stakeholder contexts.</p>
                  </div>
                  <div className="content-right mt-auto">
                    <div className="bento-mini-grid">
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">110+</div>
                        <div className="mini-stat-label">KOL relationships<br />managed</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">60</div>
                        <div className="mini-stat-label">participants per<br />Fulbright workshop</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">3</div>
                        <div className="mini-stat-label">enterprise clients<br />managed</div>
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
              <Heart size={32} color="hsl(var(--g3))" />
              My Values
            </h2>

            <div className="about-values-grid" ref={valuesRef}>
              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, hsl(var(--g1)/.15), hsl(var(--g2)/.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Target size={24} color="hsl(var(--g1))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>Clarity in Chaos</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I turn complex information into actionable plans.</strong> I meticulously document processes to ensure no insight is lost, keeping stakeholders aligned with a clear vision.
                  </p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, hsl(var(--g3)/.15), hsl(var(--g4)/.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Rocket size={24} color="hsl(var(--g3))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>Curiosity as a Driver</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I embrace the new to optimize the now.</strong> I actively bridge cutting-edge tech with practical workflows, empowering teams to work smarter.
                  </p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, hsl(var(--g2)/.15), hsl(var(--g3)/.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Heart size={24} color="hsl(var(--g2))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>Resilience &amp; Empathy</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I foster a positive and collaborative environment.</strong> I bring resilience and warmth to collaboration—ensuring user needs are heard and team morale stays high.
                  </p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, hsl(var(--g4)/.15), hsl(var(--g1)/.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Monitor size={24} color="hsl(var(--g4))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>Hardware Meets Interface</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I'm drawn to the intersection of physical products and digital experiences.</strong> From automotive UX to wearable interfaces, I'm eager to design for embedded systems where constraints spark the most creative solutions.
                  </p>
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
            color: var(--md-primary);
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
            border: 1px solid rgba(0, 0, 0, 0.08);
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
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.1) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-light {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.65) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Light Card Blurrier (For complex Figma BG) */
          .overlay-light-blur {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0.2) 100%);
            backdrop-filter: blur(4px);
          }
          .bento-card:hover .overlay-light-blur {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.65) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Wide Card Overlay (Cross Functional) - 左重，右輕 */
          .overlay-wide {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.1) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-wide {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 45%, transparent 100%);
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
          .bento-light { color: var(--md-on-surface); }
          
          /* 增強 Dark Card 的文字陰影，保證純白與易讀性 */
          .bento-dark .bento-title {
            color: #ffffff;
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
            font-family: "Space Grotesk", sans-serif;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin: 16px 0 12px;
          }

          .bento-sub {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin: 0;
            font-weight: 500;
          }

          /* Tags */
          .bento-tag {
            display: inline-flex;
            align-items: center;
            font-family: "IBM Plex Mono", monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 100px;
            align-self: flex-start;
          }

          .tag-dark { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); }
          .tag-amber { background: #FAEEDA; color: #633806; }
          .tag-teal { background: rgba(42,157,110,0.15); color: #1A6B4A; }
          .tag-blue { background: #E6F1FB; color: #0C447C; }
          .tag-gray { background: #F3F3F5; color: #475569; border: 1px solid rgba(0,0,0,0.06); }

          /* Stats Row (Card 1) */
          .bento-stats-row {
            display: flex;
            gap: 32px;
          }
          .bento-stat { display: flex; flex-direction: column; }
          .bento-stat-num {
            font-family: "Space Grotesk", sans-serif;
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
            border: 1px solid rgba(0,0,0,0.08);
            background: rgba(255,255,255,0.7);
            color: var(--md-on-surface);
            backdrop-filter: blur(4px);
          }

          /* Pill Stack (Card 3) */
          .bento-pill-stack {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .bento-pill {
            font-family: "IBM Plex Mono", monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 6px 12px;
            border-radius: 4px;
            background: rgba(255,255,255,0.6);
            border: 1px solid rgba(0,0,0,0.1);
            color: var(--md-on-surface);
            backdrop-filter: blur(4px);
          }

          /* Mini Grid (Card 5 Wide) */
          .bento-mini-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            background: rgba(255,255,255,0.65);
            padding: 24px;
            border-radius: 16px;
            border: 1px solid rgba(0,0,0,0.05);
            backdrop-filter: blur(4px);
          }
          .bento-mini-stat { text-align: center; }
          .mini-stat-num {
            font-family: "Space Grotesk", sans-serif;
            font-size: 36px;
            font-weight: 700;
            color: var(--md-primary);
            line-height: 1;
            margin-bottom: 6px;
          }
          .mini-stat-label {
            font-size: 12px;
            color: var(--color-text-muted);
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
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.06);
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
          background: '#1A1A18',
          color: '#FFE699',
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