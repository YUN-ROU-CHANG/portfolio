import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import svgPaths from '../imports/svg-h76qvpq2g9';
import { Lightbulb, Users, Shield, Target, Heart, Rocket, Music, Search, Puzzle, Bot, MessageCircle } from 'lucide-react';

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
          <ul style={{ paddingLeft: '20px', marginTop: '8px', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '4px' }}>With experience in mixed-method research, which ranging from SPSS quantitative analysis to in-depth qualitative interviews.</li>
            <li>My research capabilities have been recognized with an <strong>IEEE Best Paper Award</strong> and conference acceptances.</li>
          </ul>
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
          <ul style={{ paddingLeft: '20px', marginTop: '8px', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '4px' }}>Transitioning from <strong>Digital Marketing</strong> to Interaction Design.</li>
            <li>I consider market viability and brand strategy. This holistic approach helped my team secure the <strong>Gold Prize at the InnoConnect+ competition</strong>, turning user insights into a commercially viable service model.</li>
          </ul>
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
          <ul style={{ paddingLeft: '20px', marginTop: '8px', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '4px' }}>Beyond standard prototyping, I experiment with <strong>Generative AI workflows</strong>, Python, and Arduino to explore new possibilities.</li>
            <li>Whether it's researching AI voice synthesis or optimizing workflows with AI tools, I am always ready to adapt to the latest tech trends.</li>
          </ul>
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
          <ul style={{ paddingLeft: '20px', marginTop: '8px', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '4px' }}>From managing influencer marketing campaigns to collaborating with engineers on hardware-software integration.</li>
            <li>My experience as a <strong>Marketing Intern</strong> and a research assistant has honed my communication skills, enabling me to align stakeholders and drive projects from concept to launch.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <Layout>
      <div id="about-page">
        {/* Section 1: Hero Intro - Two Column */}
        <section className="section" id="about-hero" style={{ paddingTop: '80px' }}>
          <div className="container">
            <div className="about-hero-grid reveal" ref={heroRef}>
              {/* Left: Portrait Photo */}
              <div className="about-hero-photo">
                <div className="gframe" style={{ borderRadius: 'var(--radius-lg)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
                    alt="Rose Chang portrait"
                    loading="eager"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-lg)',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Right: Text Block */}
              <div className="about-hero-text">
                <h1 className="name" style={{ textAlign: 'left', fontSize: '48px', lineHeight: '1.2', marginBottom: '24px' }}>
                  Hey, I'm Rose. Nice to meet you!
                </h1>

                <div className="body" style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--md-on-background)' }}>
                  <p style={{ marginBottom: '16px' }}>
                    I'm a detail-oriented and insightful UI/UX designer passionate about crafting intuitive and user-centered digital experiences. My experience spans both UI design and UX research, and I had the honor of contributing to a team project that won the Gold Award at the 2024 InnoConnect+ competition for Hi-Life.
                  </p>

                  <p style={{ marginBottom: '16px' }}>
                    Previously, I worked as a marketing intern at KDAN, where I created visual content for social media and produced analytical reports on influencer and advertising performance. I'm especially interested in emerging technologies such as AI and interactive design, with a current research focus on AI-generated music and voice synthesis.
                  </p>

                  <p style={{ marginBottom: '16px' }}>
                    Beyond pixels and prototypes, I'm driven by collaboration. I love working with cross-functional teams—engineers, product managers, researchers—to transform ideas into user-centered solutions. I'm always eager to grow through collaboration, innovation, and meaningful storytelling at the intersection of design and technology.
                  </p>

                  <p>
                    When I'm not designing, you'll find me exploring new music, experimenting with creative coding, or diving into the latest design trends. I'm always learning, always curious, and always ready for the next creative challenge.
                  </p>
                </div>
              </div>
            </div>
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
                    <strong>I turn complex information into actionable plans.</strong> I am a "documentation enthusiast" who believes that success lies in the details. Whether it's organizing research data or tracking project milestones, I meticulously document processes to ensure no insight is lost. This habit helps reduce ambiguity for my team, keeping stakeholders aligned and moving forward with a clear, shared vision.
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
                    <strong>I embrace the new to optimize the now.</strong> With an open mind toward emerging technologies, I see change as an opportunity rather than a hurdle. From mastering Generative AI tools to coding in Python, I actively learn and share new methodologies. I strive to be the bridge that connects cutting-edge tech with practical workflows, empowering my team to work smarter, not just harder.
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
                    <strong>I foster a positive and collaborative environment.</strong> As an empathetic listener and an optimistic team player (ISFJ), I believe psychological safety creates the best work. I bring resilience to challenges and warmth to collaboration, ensuring that user needs are heard and team morale remains high. I don't just solve problems; I care about the people I solve them with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: More About Me - Composition */}
        <section className="section" id="about-more" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <Music size={32} color="hsl(var(--g4))" />
              More about me — Composition
            </h2>

            <div className="gframe reveal" ref={moreRef}>
              <div className="card glass" style={{ padding: '48px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {/* Icon + Description */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-md)',
                      background: 'linear-gradient(135deg, hsl(var(--g4)/.15), hsl(var(--g1)/.15))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Music size={28} color="hsl(var(--g4))" aria-hidden="true" />
                    </div>
                    <div className="body" style={{ fontSize: '16px', lineHeight: '1.7', flex: 1 }}>
                      <p style={{ marginBottom: '16px' }}>
                        Music composition has been a creative outlet for me since childhood. I approach it much like I approach design—starting with a mood or emotion I want to convey, then layering elements to build something cohesive and meaningful.
                      </p>
                      <p>
                        Whether I'm arranging harmonies or designing interfaces, the process is the same: iterate, refine, and listen closely to the feedback. Below is a placeholder for one of my recent compositions.
                      </p>
                    </div>
                  </div>

                  {/* Embedded Media Placeholder */}
                  <div
                    className="gframe"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      background: 'linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g3)/.08))',
                      padding: '64px 32px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                      color: 'var(--color-text-muted)'
                    }}>
                      <Music size={48} aria-hidden="true" style={{ opacity: 0.4 }} />
                      <p className="body muted" style={{ fontSize: '14px', maxWidth: '400px' }}>
                        Audio player or embedded media content will be displayed here
                      </p>
                    </div>
                  </div>
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
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
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
    </Layout>
  );
}
