import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, Award, Mail } from 'lucide-react';
import { Separator } from '../components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<HTMLElement[]>([]);
  const { t, language } = useLanguage();

  // Parallax scroll effect with Reduced Motion guard
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    let ticking = false;

    const updatePositions = () => {
      const y = window.scrollY;
      if (heroRef.current) heroRef.current.style.transform = `translateY(${-(y / 10)}px)`;
      if (bentoRef.current) bentoRef.current.style.transform = `translateY(${-(y / 20)}px)`;
      if (projectRef.current) projectRef.current.style.transform = `translateY(${-(y / 30)}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePositions);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updatePositions();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 3D tilt effect with proper cleanup and Reduced Motion guard
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    const tiles = tileRefs.current.filter(Boolean);
    const TILT = { perspective: '900px', maxX: 10, maxY: 12 };
    const handlers = new Map();

    tiles.forEach((tile) => {
      const isBentoCard = tile.classList.contains('bento-card');
      const isProjectCard = tile.closest('#projects') !== null;
      const isHeroSection = tile.closest('#about') !== null;
      
      // Skip tilt effect for hero section and project cards
      if (isHeroSection || isProjectCard) {
        return;
      }
      
      const onMove = (e: PointerEvent) => {
        const r = tile.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const ry = (px - 0.5) * TILT.maxY;
        const rx = (0.5 - py) * TILT.maxX;
        
        // Bento cards get scale + subtle tilt
        if (isBentoCard) {
          tile.style.transform = `scale(1.055) perspective(${TILT.perspective}) rotateX(${rx * 0.5}deg) rotateY(${ry * 0.5}deg)`;
        } else {
          tile.style.transform = `perspective(${TILT.perspective}) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }
      };

      const onLeave = () => {
        tile.style.transform = `perspective(${TILT.perspective}) rotateX(0) rotateY(0)`;
      };

      tile.addEventListener('pointermove', onMove);
      tile.addEventListener('pointerleave', onLeave);
      handlers.set(tile, { move: onMove, leave: onLeave });
    });

    return () => {
      handlers.forEach((h, tile) => {
        tile.removeEventListener('pointermove', h.move);
        tile.removeEventListener('pointerleave', h.leave);
      });
    };
  }, []);

  // Reveal animation on scroll
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    const reveals = document.querySelectorAll('.reveal');
    
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0
    });

    reveals.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !tileRefs.current.includes(el)) {
      tileRefs.current.push(el);
    }
  };

  return (
    <Layout>
      {/* Hero Section - Centered */}
      <section className="hero" id="about">
        <div className="container hero-inner" ref={heroRef}>
          <div className="hero-text reveal" ref={addToRefs}>
            {/* Modified Hero Title with Animation */}
            <h1 className="name interactive-name">
              {"Rose Chang".split("").map((char, index) => (
                <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h2 className="head">UI / UX Designer</h2>
            <h3>Creative Technologist & Experience Designer</h3>
            <p className="body muted" style={{ marginTop: '8px' }}>
              I specialize in Human-Computer Interaction, Design Thinking, and AI + Interactive Design,
              transforming ideas into user-centered experiences through cross-functional collaboration.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link className="btn-pill interactive-button-base btn--primary" to="/about">
                About <span className="dot">→</span>
              </Link>
              <Link className="btn-pill interactive-button-base btn--primary" to="/projects">
                Projects <span className="dot">→</span>
              </Link>
            </div>
          </div>

          {/* Venn Diagram */}
          <div className="venn-container reveal" ref={addToRefs}>
            <svg viewBox="0 0 500 400" className="venn venn-diagram" role="img" aria-label="Venn diagram showing intersection of Human-Computer Interaction, Design Thinking, and AI + Interactive Design">
              <defs>
                <filter id="softGlass">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle className="c3" cx="200" cy="180" r="100" />
              <circle className="c2" cx="300" cy="180" r="100" />
              <circle className="c1" cx="250" cy="100" r="100" />
              <text x="200" y="220" textAnchor="middle" fill="var(--text)" fontSize="14" fontWeight="600">
                <tspan x="200" dy="0">Human-Computer</tspan>
                <tspan x="200" dy="16">Interaction</tspan>
              </text>
              <text x="300" y="220" textAnchor="middle" fill="var(--text)" fontSize="14" fontWeight="600">
                <tspan x="300" dy="0">Design</tspan>
                <tspan x="300" dy="16">Thinking</tspan>
              </text>
              <text x="250" y="85" textAnchor="middle" fill="var(--text)" fontSize="14" fontWeight="600">
                <tspan x="250" dy="0">AI + Interactive</tspan>
                <tspan x="250" dy="16">Design</tspan>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="section" id="bento">
        <div className="container row-3 bento-grid" ref={bentoRef}>
          <a className="tile gframe shadow-glow reveal bento-card bento-card--1"
             href="#besides-work" target="_blank" rel="noopener noreferrer" ref={addToRefs}>
            <div className="card pad card-bento">
              <span className="btn-pill interactive-button-base bento-button">
                Besides Work <span className="dot">→</span>
              </span>
            </div>
          </a>
          <a className="tile gframe shadow-glow reveal bento-card bento-card--3"
             href="/resume" ref={addToRefs}>
            <div className="card pad card-bento">
              <span className="btn-pill interactive-button-base bento-button">
                Resume <span className="dot">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Pickup Projects Section */}
      <section className="section" id="projects">
        <div className="container" ref={projectRef}>
          <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Briefcase size={32} color="hsl(var(--g2))" />
            {t({ en: 'Pickup project', zh: '精選專案' })}
          </h2>
          <div className="project-grid">
            <div className="tile gframe reveal" ref={addToRefs}>
              <div className="card">
                <div className="thumb">
                  <img src="images/oblivilight.jpg" alt="Oblivilight project cover" loading="lazy" />
                </div>
                <div className="project-card-text">
                  <p className="body">OpenHCI'25｜憶光 Oblivilight</p>
                </div>
              </div>
            </div>
            <div className="tile gframe reveal" ref={addToRefs}>
              <div className="card">
                <div className="thumb">
                  <img src="images/project_innoconnect.jpg" alt="Innoconnect project cover" loading="lazy" />
                </div>
                <div className="project-card-text">
                  <p className="body">Innoconnect｜來送禮服務優化計畫</p>
                </div>
              </div>
            </div>
            <div className="tile gframe reveal" ref={addToRefs}>
              <div className="card">
                <div className="thumb">
                  <img src="images/times-young-creative-awards.png" alt="Times Young Creative Awards project cover" loading="lazy" />
                </div>
                <div className="project-card-text">
                  <p className="body">金犢獎｜永慶房屋雇主品牌招募廣告設計獎</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Accordion */}
      <section className="section" id="awards">
        <div className="container">
          <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={32} color="hsl(var(--g3))" />
            {t({ en: 'Awards', zh: '獲獎紀錄' })}
          </h2>
          <Accordion type="single" collapsible className="awards-accordion">
            <AccordionItem value="award-9" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2025 Nov｜Outstanding Domestic Graduate Student Research Achievement Award (Full Tuition Waiver), National Taipei University of Technology
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• Authored and published two academic papers</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
            {/* Award 1 */}
            <AccordionItem value="award-8" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2025 Jul｜TAICHI '25｜Demo
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• 主要負責使用者研究與訪談、產品細節設計</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 2 */}
            <AccordionItem value="award-7" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2025 Jul｜IEEE GCCE｜Paper Accepted
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• 個人撰寫：關於AI 人聲主體性之研究、結合數據分析與訪談</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 3 */}
            <AccordionItem value="award-6" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    <span>
                      2025 Jun｜金犢獎 永慶房屋雇主品牌招募廣告設計獎｜全國第三名
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>•主要負責行銷企劃、網頁設計</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 4 */}
            <AccordionItem value="award-5" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    <span>
                      2025 Mar｜InnoConnect+ 全國服務創新跨界共創大賽 - 萊爾富企業｜金獎
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>•主要負責企劃、使用者研究、前端介面設計</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 5 */}
            <AccordionItem value="award-4" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2024 Dec｜第四屆大數據精準行銷盃｜季軍
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• 主要負責市場調查、台畜APP UI介面設計</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 6 */}
            <AccordionItem value="award-3" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2024 Dec｜IEEE SSIM Best Paper Award
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• 個人撰寫：關於Human-AI 音樂協作相關研究、訪談</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 7 */}
            <AccordionItem value="award-2" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2023 Oct｜苗栗農村青年創新好點子行動獎勵計畫｜銅獎
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>•組長：主要負責企劃創意發想、包裝設計、網站介面設計</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Award 8 */}
            <AccordionItem value="award-1" className="reveal award-item">
              <div className="gframe award-gframe">
                <div className="card award-card">
                  <AccordionTrigger className="award-trigger">
                    2023 May｜第八屆崇越行銷大賞｜銀賞
                  </AccordionTrigger>
                  <AccordionContent className="award-content">
                    <p>• 組長：主要負責企劃發想、腳本製作、影片剪輯、配音</p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* Contact Section */}
      <section className="section" id="contact" style={{ paddingTop: 'var(--space-10)', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Mail size={32} color="hsl(var(--g4))" />
            {t({ en: 'Contact', zh: '聯絡方式' })}
          </h2>
          <p className="contact-sub">
            Open for all kind of opportunities, advices and coffee chats.
          </p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile for Yun-Rou Chang">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span>Yun-Rou Chang</span>
            </a>
            <a className="contact-pill contact-pill-lg" href="mailto:yuu07798@gmail.com" aria-label="Send email to yuu07798@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              <span>yuu07798@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Section Heading (matches Resume.tsx style) */
        .section-head {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: var(--md-primary);
          margin-bottom: 32px;
        }

        /* Separator */
        .container-sep {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Hero Text Animation */
        .interactive-name .char {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease;
          cursor: default;
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
        }
        .interactive-name:hover .char:hover {
          transform: translateY(-8px) scale(1.2);
          color: var(--md-primary);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero { padding: 60px 0 40px; }
        .hero-inner { display: flex; flex-direction: column; align-items: center; gap: 40px; }
        .hero-text { text-align: center; max-width: 800px; }
        
        /* Venn */
        .venn-container { width: 100%; max-width: 500px; margin: 0 auto; }
        .venn circle { stroke: none; mix-blend-mode: multiply; filter: url(#softGlass); }
        .venn .c1 { fill: hsl(var(--g4)/.35); }
        .venn .c2 { fill: hsl(var(--g3)/.35); }
        .venn .c3 { fill: hsl(var(--g1)/.30); }

        /* Bento & Layout */
        .row-3, .bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
        .card-bento { height: 220px; display: flex; align-items: flex-end; width: 100%; padding: 20px; }
        .bento-card { text-decoration: none; display: block; width: 100%; transition: transform 0.2s ease; }
        .bento-card:hover { transform: scale(1.02); }

        /* Bento buttons - same style as contact email button */
        .bento-button {
          background: rgba(255, 255, 255, 0.8) !important;
          color: var(--text) !important;
          border: 1px solid rgba(0,0,0,0.08) !important;
        }

        .bento-button::before {
          background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3))) !important;
        }

        /* Projects */
        .project-grid { display: grid; gap: 24px; grid-template-columns: repeat(3, 1fr); }
        .thumb { aspect-ratio: 16/10; overflow: hidden; background: #eee; border-radius: var(--radius-md); }
        .project-card-text { padding: 16px; text-align: center; }
        .project-card-text .body { margin-top: 4px; font-weight: 500; }

        /* Award Frame Hover Fix */
        .award-item { margin-bottom: 16px; border: none !important; }
        
        .award-gframe {
          position: relative;
          padding: 2px; /* Frame border width */
          border-radius: 16px;
          background: linear-gradient(120deg, hsl(var(--g1)/.35), hsl(var(--g2)/.35), hsl(var(--g3)/.35), hsl(var(--g4)/.35));
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        /* Hover: Fill frame with solid gradient */
        .award-item:hover .award-gframe {
          background: linear-gradient(120deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3)), hsl(var(--g4)));
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .award-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 14px; /* Inner radius matches frame */
          height: 100%;
          transition: background 0.3s ease;
        }
        
        /* Hover: Slightly transparent to let glow bleed (optional) */
        .award-item:hover .award-card {
          background: rgba(255, 255, 255, 0.98);
        }

        .award-trigger {
          padding: 20px 24px !important;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          color: var(--md-on-surface) !important;
        }
        
        .award-content {
          padding: 0 24px 20px !important;
          color: var(--color-text-muted);
          font-size: 15px;
        }

        /* Contact Section Styles */
        .contact-wrap { text-align: center; }
        .contact-title { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .contact-sub { font-size: 16px; color: #666; margin-bottom: 24px; }
        .contact-pills { display: flex; flex-direction: column; align-items: center; gap: 16px; }

        /* THE VIDEO EFFECT: Contact Button Styles */
        .contact-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 28px; /* Larger hit area like video */
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          /* The "Video" spring transition */
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); 
          overflow: hidden;
          transform: translateZ(0); /* Hardware acceleration */
        }

        /* Icons inside button */
        .contact-pill svg {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }
        .contact-pill span {
          position: relative;
          z-index: 2;
        }

        /* The Gradient Fill (Hidden by default) */
        .contact-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3)));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        /* Hover State: Lift + Scale + Fill */
        .contact-pill:hover {
          transform: scale(1.08) translateY(-4px); /* Springy lift */
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15); /* Drop shadow */
          border-color: transparent; /* Hide border on hover */
        }

        /* Reveal gradient fill on hover */
        .contact-pill:hover::before {
          opacity: 0.12; /* 12% opacity fill */
        }

        .contact-pill:active {
          transform: scale(0.98);
        }

        /* Apply same effect to Hero and Bento buttons */
        .btn-pill.interactive-button-base {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 28px;
          background: #4570ff; /* Rose Chang title color */
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          overflow: hidden;
          transform: translateZ(0);
        }

        .btn-pill.interactive-button-base span,
        .btn-pill.interactive-button-base .dot {
          position: relative;
          z-index: 2;
        }

        .btn-pill.interactive-button-base::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3)));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .btn-pill.interactive-button-base:hover {
          transform: scale(1.08) translateY(-4px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
          border-color: transparent;
        }

        .btn-pill.interactive-button-base:hover::before {
          opacity: 0.12;
        }

        .btn-pill.interactive-button-base:active {
          transform: scale(0.98);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .row-3, .project-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  );
}