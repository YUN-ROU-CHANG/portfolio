import { useEffect, useRef, useState } from 'react';
import mePng from '../assets/images/Me.png';
import Layout from '../components/Layout';
import svgPaths from '../imports/svg-h76qvpq2g9';
import { Lightbulb, Users, Shield, Target, Heart, Rocket, Music, Search, Puzzle, Bot, MessageCircle, Monitor } from 'lucide-react';

// Strength icon component
function StrengthIcon({ iconType, color }: { iconType: string; color: string }) {
  const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
    lightbulb: Lightbulb,
    users: Users,
    shield: Shield,
    target: Target,
    search: Search,
    puzzle: Puzzle,
    bot: Bot,
    messageCircle: MessageCircle
  };

  const IconComponent = iconMap[iconType] || Lightbulb;

  return (
    <div className="relative shrink-0 size-[32px]">
      <IconComponent size={32} color={color} />
    </div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

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

  const strengths = [
    {
      iconType: 'search',
      iconColor: '#5B8CFF',
      gradientFrom: 'rgba(91, 140, 255, 0.2)',
      gradientTo: 'rgba(0, 163, 163, 0.2)',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      title: 'Evidence-Based UX Research',
      description: (
        <>
          <p style={{ marginBottom: '8px' }}><strong>Blending academic rigor with design empathy.</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.7' }}>Mixed-method research spanning competitor analysis reports, SPSS quantitative analysis, to in-depth qualitative interviews and usability testing—recognized with an <strong>IEEE Best Paper Award</strong>.</p>
        </>
      )
    },
    {
      iconType: 'puzzle',
      iconColor: '#A871F4',
      gradientFrom: 'rgba(168, 113, 244, 0.2)',
      gradientTo: 'rgba(249, 118, 31, 0.2)',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      title: 'Strategic Product Thinking',
      description: (
        <>
          <p style={{ marginBottom: '8px' }}><strong>Bridging the gap between user needs and business goals.</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.7' }}>My cross-domain background helped secure the <strong>InnoConnect+ Gold Prize</strong>, turning user insights into a commercially viable service model, supported by information architecture design and cross-functional prototype proposals.</p>
        </>
      )
    },
    {
      iconType: 'bot',
      iconColor: '#00A3A3',
      gradientFrom: 'rgba(0, 163, 163, 0.2)',
      gradientTo: 'rgba(91, 140, 255, 0.2)',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      title: 'AI & Tech Integration',
      description: (
        <>
          <p style={{ marginBottom: '8px' }}><strong>Designing for the future with emerging technologies.</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.7' }}>I experiment with <strong>Generative AI</strong>, Python, and Arduino—and research AI voice synthesis in my academic work.</p>
        </>
      )
    },
    {
      iconType: 'messageCircle',
      iconColor: '#F9761F',
      gradientFrom: 'rgba(249, 118, 31, 0.2)',
      gradientTo: 'rgba(168, 113, 244, 0.2)',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      title: 'Cross-Functional Collaboration',
      description: (
        <>
          <p style={{ marginBottom: '8px' }}><strong>Translating complex ideas into team success.</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.7' }}>From influencer marketing to hardware-software integration, I align stakeholders and drive projects from concept to launch.</p>
        </>
      )
    }
  ];

  return (
    <Layout>
      <div id="about-page">
        {/* Section 1: Hero Intro — Portrait Tile + Skill Matrix */}
        <section style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 2.2vw, 32px)' }}>

            {/* Two-column grid */}
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
                    CERTIFIED /<br/>DESIGNER<br/>· 2026 ·
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
                    { cat: 'Craft', skills: [{ label: 'Figma · Auto-layout', hot: true }, { label: 'Prototype / React' }, { label: 'Arduino', lvl: 'INT' }, { label: 'Gen-AI Workflows' }, { label: 'Motion' }] },
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

            <style>{`
              @keyframes spinSlow { to { transform: rotate(360deg); } }
              @media (max-width: 900px) { .about-two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
            `}</style>
          </div>
        </section>

        {/* Section 2: My Strengths - Card Grid */}
        <section className="section" id="about-strengths" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
              <Lightbulb size={32} color="hsl(var(--g1))" />
              My Strengths
            </h2>

            <div className="strengths-grid" ref={strengthsRef}>
              {strengths.map((strength, index) => (
                <div key={index} className="strength-card reveal">
                  <div className="strength-card-inner">
                    {/* Image with Icon Overlay */}
                    <div className="strength-image-wrapper">
                      <img
                        src={strength.image}
                        alt={strength.title}
                        loading="lazy"
                        className="strength-image"
                      />
                      <div
                        className="strength-icon-container"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${strength.gradientFrom} 0%, ${strength.gradientTo} 100%)`
                        }}
                      >
                        <StrengthIcon iconType={strength.iconType} color={strength.iconColor} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="strength-content">
                      <h3 className="strength-title">
                        {strength.title}
                      </h3>
                      <div className="strength-description">
                        {strength.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              {/* Value Card 1 - Clarity in Chaos */}
              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, hsl(var(--g1)/.15), hsl(var(--g2)/.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}>
                    <Target size={24} color="hsl(var(--g1))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>
                    Clarity in Chaos
                  </h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I turn complex information into actionable plans.</strong> I meticulously document processes to ensure no insight is lost, keeping stakeholders aligned with a clear vision.
                  </p>
                </div>
              </div>

              {/* Value Card 2 - Curiosity as a Driver */}
              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, hsl(var(--g3)/.15), hsl(var(--g4)/.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}>
                    <Rocket size={24} color="hsl(var(--g3))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>
                    Curiosity as a Driver
                  </h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I embrace the new to optimize the now.</strong> I actively bridge cutting-edge tech with practical workflows, empowering teams to work smarter.
                  </p>
                </div>
              </div>

              {/* Value Card 3 - Resilience & Empathy */}
              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, hsl(var(--g2)/.15), hsl(var(--g3)/.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}>
                    <Heart size={24} color="hsl(var(--g2))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>
                    Resilience &amp; Empathy
                  </h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I foster a positive and collaborative environment.</strong> I bring resilience and warmth to collaboration—ensuring user needs are heard and team morale stays high.
                  </p>
                </div>
              </div>

              {/* Value Card 4 - Hardware Meets Interface */}
              <div className="gframe reveal" style={{ height: '100%' }}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, hsl(var(--g4)/.15), hsl(var(--g1)/.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}>
                    <Monitor size={24} color="hsl(var(--g4))" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--md-on-surface)' }}>
                    Hardware Meets Interface
                  </h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>I'm drawn to the intersection of physical products and digital experiences.</strong> From automotive UX to wearable interfaces, I'm eager to design for embedded systems where constraints spark the most creative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Page Specific Styles */}
        <style>{`
          /* Section Heading (matches Resume.tsx style) */
          .section-head {
            font-size: clamp(28px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-primary);
            margin-bottom: 32px;
          }

          /* Hero Section - Two Column Layout */
          .about-hero-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 48px;
            align-items: start;
          }

          .about-hero-photo {
            position: relative;
            aspect-ratio: 3 / 4;
            overflow: hidden;
          }

          .about-hero-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          /* Strengths Grid - 2x2 */
          .strengths-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Strength Card */
          .strength-card {
            position: relative;
            width: 100%;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .strength-card:hover {
            transform: translateY(-4px);
          }

          .strength-card-inner {
            position: relative;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
            transition: box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .strength-card:hover .strength-card-inner {
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
          }

          /* Image Wrapper with Icon */
          .strength-image-wrapper {
            position: relative;
            width: 100%;
            height: 190px;
            overflow: hidden;
          }

          .strength-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* Icon Container - Positioned at top right */
          .strength-icon-container {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 56px;
            height: 56px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          /* Content Area */
          .strength-content {
            padding: 24px 29px;
          }

          .strength-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.3;
            color: var(--md-on-surface);
            margin: 0 0 12px 0;
          }

          .strength-description {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin: 0;
          }

          /* Values Grid - 3 Columns */
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

          /* Tablet Responsive */
          @media (max-width: 959px) {
            .about-hero-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .about-hero-photo {
              max-width: 400px;
              margin: 0 auto;
            }

            .about-hero-text h1 {
              text-align: center;
              font-size: 36px !important;
            }

            .strengths-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .about-values-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* Mobile Responsive */
          @media (max-width: 640px) {
            .about-hero-text h1 {
              font-size: 32px !important;
            }

            .strengths-grid {
              gap: 20px;
            }

            .strength-content {
              padding: 20px 24px;
            }

            .strength-title {
              font-size: 18px;
            }

            .strength-description {
              font-size: 13px;
            }

            .about-values-grid {
              grid-template-columns: 1fr;
            }

            .card.glass {
              padding: 24px !important;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .strength-card,
            .strength-card-inner {
              transition: none !important;
            }

            .strength-card:hover {
              transform: none !important;
            }
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
