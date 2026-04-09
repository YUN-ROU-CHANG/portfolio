import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';
import { Briefcase, Award, Mail, Sparkles } from 'lucide-react';
import { Separator } from '../components/ui/separator';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    let ticking = false;

    const updatePositions = () => {
      const y = window.scrollY;
      if (heroRef.current) heroRef.current.style.transform = `translateY(${-(y / 15)}px)`;
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
      rootMargin: '-5% 0px -5% 0px',
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
      {/* 1. Hero Section - Redesigned for Desktop Split Layout */}
      <section className="hero" id="about">
        <div className="container hero-inner" ref={heroRef}>
          <div className="hero-text reveal" ref={addToRefs}>
            <h1 className="name interactive-name">
              {"Rose Chang".split("").map((char, index) => (
                <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h2 className="head">Interaction & UX/UI Designer</h2>
            <h3 className="sub-head text-primary">Focused on B2C Products & AI-Driven Experiences</h3>
            <p className="body muted hero-desc">
              I blend Human-Computer Interaction, AI literacy, and strategic design thinking to solve complex business challenges. Proven track record in leading end-to-end digital interventions and cross-functional collaborations.
            </p>
            <div className="hero-buttons">
              <Link className="btn-pill interactive-button-base btn--primary" to="/about">
                About Me <span className="dot">→</span>
              </Link>
              <a className="btn-pill interactive-button-base" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid rgba(0,0,0,0.1)' }} href="#selected-works">
                View Work <span className="dot">↓</span>
              </a>
            </div>
          </div>

          <div className="venn-container reveal" ref={addToRefs}>
            <svg viewBox="0 0 400 350" className="venn venn-diagram" role="img" aria-label="Venn diagram showing intersection of skills">
              <defs>
                <filter id="softGlass">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle className="c3" cx="160" cy="160" r="90" />
              <circle className="c2" cx="240" cy="160" r="90" />
              <circle className="c1" cx="200" cy="90" r="90" />
              <text x="160" y="195" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">
                <tspan x="140" dy="0">HCI &</tspan>
                <tspan x="140" dy="16">Research</tspan>
              </text>
              <text x="240" y="195" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">
                <tspan x="260" dy="0">Business</tspan>
                <tspan x="260" dy="16">Strategy</tspan>
              </text>
              <text x="200" y="80" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">
                <tspan x="200" dy="0">AI & Interactive</tspan>
                <tspan x="200" dy="16">Prototyping</tspan>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Selected Works - 3x3 Grid with Explore Buttons & Impact Descriptions */}
      <section className="section" id="selected-works" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container" ref={projectRef} style={{ maxWidth: '1200px' }}>
          <div className="section-header-flex">
            <h2 className="section-head">
              <Briefcase size={32} color="hsl(var(--g2))" />
              Selected Works
            </h2>
            <Link to="/projects" className="view-all-link">
              View all projects →
            </Link>
          </div>

          <div className="projects-3x3-grid">
            
            {/* 1. Innoconnect */}
            <Link to="/projects/innoconnect" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800" alt="Innoconnect" />
                <span className="grid-tag">Gold Award</span>
              </div>
              <div className="grid-info">
                <h3>Innoconnect | Gift Service Optimization</h3>
                <p><strong>Led UX/UI:</strong> Optimized the B2C O2O gifting experience via gamification, boosting user engagement and solving complex flow issues.</p>
                <div className="explore-btn">Explore Case Study <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 2. Oblivilight */}
            <Link to="/projects/oblivilight" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&w=800" alt="Oblivilight" />
                <span className="grid-tag">Best Demo Award</span>
              </div>
              <div className="grid-info">
                <h3>OpenHCI'25 | Oblivilight</h3>
                <p><strong>End-to-End:</strong> Built a tangible interaction device in a 6-day sprint, exploring how AI systems handle "forgetting" mechanisms.</p>
                <div className="explore-btn">Explore Case Study <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 3. Times Awards */}
            <Link to="/projects/times-awards" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" alt="Times Awards" />
                <span className="grid-tag">National 3rd Place</span>
              </div>
              <div className="grid-info">
                <h3>2025 34th Times Young Creative Awards</h3>
                <p><strong>Cross-functional:</strong> Directed a multi-channel digital campaign (Web, Video, Audio) leveraging interactive metaphors for job hunting.</p>
                <div className="explore-btn">Explore Case Study <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 4. KDAN Internship */}
            <Link to="/projects" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="KDAN Internship" />
                <span className="grid-tag">Internship</span>
              </div>
              <div className="grid-info">
                <h3>KDAN Mobile | Marketing Intern</h3>
                <p><strong>Impact:</strong> Integrated AI workflows into social media pipelines, achieving a 101% growth in engagement and streamlining team efficiency.</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 5. Research Papers */}
            <Link to="/projects" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800" alt="Research Papers" />
                <span className="grid-tag">HCI Research</span>
              </div>
              <div className="grid-info">
                <h3>HCI Research Publications</h3>
                <p><strong>First Author:</strong> Published award-winning papers on Human-AI music collaboration and voice emotion analysis (SSIM & IEEE).</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 6. Mú */}
            <Link to="/projects" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Mú" />
                <span className="grid-tag">Nominated</span>
              </div>
              <div className="grid-info">
                <h3>UX Design Awards｜Mú</h3>
                <p><strong>Lead Designer:</strong> Created a multisensory interactive guide for Taiwan’s endangered woods, heavily utilizing emotional design principles.</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 7. Bilingual Center */}
            <Link to="/projects/good-luck-peanut" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800" alt="Bilingual Center" />
                <span className="grid-tag">Project Assistant</span>
              </div>
              <div className="grid-info">
                <h3>Taipei Tech｜Center for Bilingual Learning</h3>
                <p><strong>Project Management:</strong> Assisted in coordinating cross-departmental bilingual education initiatives and streamlined administrative workflows.</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 8. Big Data Cup */}
            <Link to="/projects" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Big Data Cup" />
                <span className="grid-tag">3rd Place</span>
              </div>
              <div className="grid-info">
                <h3>Big Data Marketing Cup</h3>
                <p><strong>UX Research & UI:</strong> Designed a data-driven fitness app prototype relying on rigorous market research and user testing.</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

            {/* 9. Academic Collaborations */}
            <Link to="/projects/good-luck-peanut" className="grid-project-card group reveal" ref={addToRefs}>
              <div className="grid-thumb">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Academic Collabs" />
                <span className="grid-tag">Academic</span>
              </div>
              <div className="grid-info">
                <h3>Taipei Tech Academic Collaborations</h3>
                <p><strong>Facilitator & Designer:</strong> Co-hosted the Penn State GenAI Workshop and spearheaded local branding strategies for Good Luck Peanut.</p>
                <div className="explore-btn">View in Projects <span className="arrow">→</span></div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. Streamlined Awards Section (Grid Layout instead of Accordion) */}
      <section className="section bg-light-gray" id="awards" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-head">
            <Award size={32} color="hsl(var(--g3))" />
            Select Honors & Awards
          </h2>
          <div className="awards-grid reveal" ref={addToRefs}>
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div>
                <h4>Outstanding Graduate Research Award</h4>
                <p>Full Tuition Waiver for publishing two high-impact HCI academic papers.</p>
              </div>
            </div>
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div>
                <h4>Times Young Creative Awards (National 3rd)</h4>
                <p>Led marketing strategy and interactive design for YungChing Realty.</p>
              </div>
            </div>
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div>
                <h4>IEEE GCCE & TAICHI '25 (Paper Accepted)</h4>
                <p>First Author. Explored AI voice subjectivity and interactive product design.</p>
              </div>
            </div>
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div>
                <h4>InnoConnect+ Service Innovation (Gold)</h4>
                <p>End-to-end UX/UI design for Hi-Life O2O gifting service (Ranked 1/186).</p>
              </div>
            </div>
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div>
                <h4>Big Data Marketing Cup (3rd Place)</h4>
                <p>Market research and app prototyping for Taiwan Livestock.</p>
              </div>
            </div>
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div>
                <h4>IEEE SSIM Best Paper Award</h4>
                <p>First Author. Focused on Human-AI music collaboration interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Playground / Besides Work (Texture & Hybrid Portfolio Trend) */}
      <section className="section playground-section" id="playground">
        <div className="noise-overlay"></div>
        <div className="container relative z-10">
          <h2 className="section-head" style={{ justifyContent: 'center' }}>
            <Sparkles size={32} color="var(--md-primary)" />
            Playground & Life
          </h2>
          <p className="contact-sub text-center mb-8">
            When I'm not designing interfaces, I'm exploring new mediums.
          </p>
          <div className="playground-grid reveal" ref={addToRefs}>
            <div className="play-card">
              <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600" alt="Vibe Coding" />
              <div className="play-overlay"><span>Vibe Coding & AI Tools</span></div>
            </div>
            <div className="play-card">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600" alt="Exhibitions" />
              <div className="play-overlay"><span>Exhibitions & Curation</span></div>
            </div>
            <div className="play-card">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" alt="Photography" />
              <div className="play-overlay"><span>Photography & Visuals</span></div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* 5. Contact Section */}
      <section className="section" id="contact" style={{ paddingTop: '60px', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head" style={{ justifyContent: 'center' }}>
            <Mail size={32} color="hsl(var(--g4))" />
            Let's Build Together
          </h2>
          <p className="contact-sub">
            Open for full-time opportunities, collaborations, and coffee chats.
          </p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
            <a className="contact-pill contact-pill-lg" href="mailto:yuu07798@gmail.com">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              <span>yuu07798@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Global & Typography */
        .section-head { font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--md-primary); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px; }
        .view-all-link { font-size: 15px; font-weight: 600; color: var(--md-primary); text-decoration: none; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .view-all-link:hover { border-color: var(--md-primary); }
        .bg-light-gray { background-color: rgba(0,0,0,0.02); }
        .dark .bg-light-gray { background-color: rgba(255,255,255,0.02); }

        /* Hero Split Layout */
        .hero { padding: 80px 0 40px; }
        .hero-inner { display: flex; flex-direction: column; align-items: center; gap: 40px; text-align: center; }
        .hero-text { max-width: 600px; display: flex; flex-direction: column; align-items: center; }
        .hero-buttons { display: flex; gap: 16px; margin-top: 24px; justify-content: center; flex-wrap: wrap; }
        .hero-desc { margin-top: 16px; line-height: 1.6; font-size: 17px; }
        .sub-head { font-size: 18px; font-weight: 600; margin-top: 8px; letter-spacing: 0.5px; }
        
        .venn-container { width: 100%; max-width: 350px; margin: 0 auto; }
        .venn circle { stroke: none; mix-blend-mode: multiply; filter: url(#softGlass); }
        .venn .c1 { fill: hsl(var(--g4)/.35); }
        .venn .c2 { fill: hsl(var(--g3)/.35); }
        .venn .c3 { fill: hsl(var(--g1)/.30); }

        @media (min-width: 960px) {
          .hero { padding: 120px 0 80px; }
          .hero-inner { flex-direction: row; justify-content: space-between; text-align: left; gap: 60px; }
          .hero-text { align-items: flex-start; max-width: 55%; }
          .hero-buttons { justify-content: flex-start; }
          .venn-container { max-width: 400px; margin: 0; }
        }

        /* Interactive Text */
        .interactive-name .char { display: inline-block; transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease; cursor: default; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        .interactive-name:hover .char:hover { transform: translateY(-8px) scale(1.1); color: var(--md-primary); }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* 3x3 Grid with Explore Button */
        .projects-3x3-grid { display: grid; gap: 32px; grid-template-columns: repeat(3, 1fr); }
        .grid-project-card { display: flex; flex-direction: column; gap: 16px; text-decoration: none; color: inherit; height: 100%; }
        
        .grid-thumb { position: relative; aspect-ratio: 4/3; overflow: hidden; background: #f5f5f5; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); }
        .grid-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .grid-project-card:hover .grid-thumb img { transform: scale(1.05); }
        
        .grid-tag { position: absolute; top: 16px; left: 16px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.08); z-index: 2; color: #333; }
        .dark .grid-tag { background: rgba(0,0,0,0.8); color: #fff; border: 1px solid rgba(255,255,255,0.1); }

        .grid-info { display: flex; flex-direction: column; gap: 8px; flex-grow: 1; }
        .grid-info h3 { font-size: 18px; font-weight: 700; margin: 0; line-height: 1.3; transition: color 0.3s ease; }
        .grid-project-card:hover h3 { color: var(--md-primary); }
        .grid-info p { font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5; flex-grow: 1; }
        .grid-info strong { color: var(--text); }
        
        .explore-btn { margin-top: 12px; font-size: 14px; font-weight: 600; color: var(--md-primary); display: flex; align-items: center; gap: 6px; }
        .explore-btn .arrow { transition: transform 0.3s ease; }
        .grid-project-card:hover .explore-btn .arrow { transform: translateX(4px); }

        @media (max-width: 960px) { .projects-3x3-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .projects-3x3-grid { grid-template-columns: 1fr; } }

        /* Streamlined Awards Grid (Replaces Accordion) */
        .awards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .award-item-clean { display: flex; gap: 20px; padding: 24px; background: var(--surface); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .dark .award-item-clean { border-color: rgba(255,255,255,0.05); }
        .award-item-clean:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
        .award-year { font-family: monospace; font-size: 18px; font-weight: 700; color: hsl(var(--g3)); opacity: 0.8; padding-top: 2px; }
        .award-item-clean h4 { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
        .award-item-clean p { font-size: 14px; color: var(--color-text-muted); line-height: 1.5; }
        
        @media (max-width: 768px) { .awards-grid { grid-template-columns: 1fr; } }

        /* Playground / Noise Section */
        .playground-section { position: relative; padding: 80px 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.03)); overflow: hidden; }
        .dark .playground-section { background: linear-gradient(180deg, transparent, rgba(255,255,255,0.03)); }
        .noise-overlay { position: absolute; inset: 0; opacity: 0.4; pointer-events: none; z-index: 0; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
        
        .playground-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
        .play-card { position: relative; aspect-ratio: 1; border-radius: 24px; overflow: hidden; }
        .play-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; filter: grayscale(20%); }
        .play-card:hover img { transform: scale(1.08); filter: grayscale(0%); }
        .play-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 24px; opacity: 0; transition: opacity 0.3s ease; }
        .play-card:hover .play-overlay { opacity: 1; }
        .play-overlay span { color: white; font-weight: 600; font-size: 16px; transform: translateY(10px); transition: transform 0.3s ease; }
        .play-card:hover .play-overlay span { transform: translateY(0); }
        
        @media (max-width: 768px) { .playground-grid { grid-template-columns: 1fr; } .play-card { aspect-ratio: 16/9; } }

        /* Contact Buttons */
        .contact-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .contact-sub { font-size: 16px; color: var(--color-text-muted); margin-bottom: 32px; }
        .contact-pills { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .contact-pill { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 28px; background: var(--surface); border: 1px solid rgba(0,0,0,0.1); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
        .dark .contact-pill { border-color: rgba(255,255,255,0.1); }
        .contact-pill:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); border-color: var(--md-primary); color: var(--md-primary); }
        
        .btn-pill { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 28px; border-radius: 999px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
        .btn--primary { background: var(--md-primary); color: white; }
        .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(69, 112, 255, 0.3); }
      `}</style>
    </Layout>
  );
}