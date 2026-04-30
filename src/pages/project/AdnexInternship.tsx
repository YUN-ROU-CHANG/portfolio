import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
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
  const [showTop, setShowTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <img src={lightboxImage} alt="Enlarged view" />
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
                    <div className="badge-title">{'KDAN | ADNEX'}</div>
                    <div className="badge-subtitle">{'Data-Driven Marketing & Strategy'}</div>
                  </div>
                </div>
              </div>

              <h1 className="hero-title">
                {'Scaling Brand Impact Through Data & Workflow Optimization'}
              </h1>

              <p className="hero-subtitle">
                {'A 9-month internship at KDAN\'s data strategy brand, ADNEX. Bridging the gap between creative content, KOL relationship management, and data-backed market research to drive measurable growth.'}
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">{'Mar - Nov 2024'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Role'}</span>
                  <span className="detail-value">{'Marketing Intern'}</span>
                  <span className="detail-sub">{'Marketing & Planning Dept. (10+ people)'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Core Focus'}</span>
                  <span className="detail-value">{'Social Strategy, KOL Mgt.'}</span>
                  <span className="detail-sub">{'Market Research, AI Enablement'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Key Impact'}</span>
                  <span className="detail-value highlight-blue">
                    {'101% IG Target Achieved'}
                  </span>
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
                  <Target size={24} color="var(--blue-primary)" />
                  <h2 className="section-heading-sm">{'The Challenge'}</h2>
                </div>
                <p className="body-text">
                  {'As a newly established data strategy brand under KDAN, ADNEX faced initial hurdles in brand awareness. The social media channels suffered from low organic reach and engagement. Simultaneously, the internal workflow for KOL (Key Opinion Leader) outreach and collaboration was highly manual, leading to inefficiencies in tracking and communication across the 10-person marketing team.'}
                </p>
              </div>

              <div className="column-content gray-box">
                <div className="section-header-sm">
                  <Megaphone size={24} color="var(--blue-primary)" />
                  <h2 className="section-heading-sm">{'My Objectives'}</h2>
                </div>
                <ul className="objective-list">
                  <li><strong>{'Content Strategy:'}</strong> {'Revamp social media presence to boost engagement.'}</li>
                  <li><strong>{'Process Optimization:'}</strong> {'Systematize the KOL outreach pipeline and create internal SOPs.'}</li>
                  <li><strong>{'Market Insights:'}</strong> {'Conduct competitive analysis using OpView & Nielsen tools.'}</li>
                  <li><strong>{'Tech Integration:'}</strong> {'Implement AI tools to accelerate internal creative workflows.'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives & Actions */}
        <section className="content-section reveal" style={{ background: '#F8FAFC' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-heading text-center" style={{ marginBottom: '64px' }}>
              {'Strategic Execution & Initiatives'}
            </h2>

            <div className="initiatives-grid">
              {/* Initiative 1 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><TrendingUp size={28} /></div>
                <h3 className="card-title">{'Data-Driven Social Strategy'}</h3>
                <p className="card-text">
                  {'Designed and produced 15 high-quality social posts. By diagnosing the root causes of low reach and analyzing competitor benchmarks, I tailored distinct operational strategies for Facebook and Instagram. Implemented strict tracking metrics to monitor growth.'}
                </p>
                <div className="impact-tag">{'Result: Peak single-post engagement reached 10%'}</div>
              </div>

              {/* Initiative 2 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><Users size={28} /></div>
                <h3 className="card-title">{'KOL Workflow Optimization'}</h3>
                <p className="card-text">
                  {'Restructured the KOL outreach process. Executed cold outreach to over 120 potential influencers and successfully assisted in coordinating 15 collaborations. Created comprehensive SOP documentation and standardized closing reports to streamline handoffs between full-time staff and interns.'}
                </p>
                <div className="impact-tag">{'Result: Dramatically improved cross-team efficiency'}</div>
              </div>

              {/* Initiative 3 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><Bot size={28} /></div>
                <h3 className="card-title">{'AI Implementation & Training'}</h3>
                <p className="card-text">
                  {'Pioneered the use of AI image generation tools within the department. After rigorous personal testing, I developed a standardized prompt-engineering SOP and conducted two educational training sessions for 10 full-time marketing planners, empowering the team to generate ideal visual assets independently.'}
                </p>
                <div className="impact-tag">{'Result: Accelerated internal design workflows'}</div>
              </div>

              {/* Initiative 4 */}
              <div className="initiative-card">
                <div className="card-icon-wrapper"><FileSpreadsheet size={28} /></div>
                <h3 className="card-title">{'Market Research & Annual Reports'}</h3>
                <p className="card-text">
                  {'Leveraged OpView (social listening) and Nielsen tools to analyze marketing insights. Produced comprehensive industry annual reports for the Online English Education and Fitness sectors, detailing voice volume analysis, ad exposure, and strategic content recommendations.'}
                </p>
                <div className="impact-tag">{'Result: Provided actionable B2B client insights'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Evidence Section */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-heading text-center" style={{ marginBottom: '48px' }}>
              {'Visual Execution & Documentation'}
            </h2>

            {/* Top 3 main images */}
            <div className="visual-grid">
              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[7])}>
                  <img src={ap[7]} alt="Social Post" loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{'Social Media Content'}</p>
              </div>

              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[4])}>
                  <img src={ap[4]} alt="KOL Workflow" loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{'KOL Workflow'}</p>
              </div>

              <div className="visual-item">
                <div className="interactive-image-container" onClick={() => setLightboxImage(ap[1])}>
                  <img src={ap[1]} alt="AI Training" loading="lazy" className="visual-img-contain" />
                  <div className="expand-hint"><Maximize2 size={20} /></div>
                </div>
                <p className="image-caption">{'AI Educational Deck'}</p>
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
                <h2 className="banner-title">{'Quantifiable Impact'}</h2>
                <div className="metrics-row">
                  <div className="metric-box">
                    <div className="metric-number">{'750+'}</div>
                    <div className="metric-label">{'Follower Growth'}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-number">{'5%↑'}</div>
                    <div className="metric-label">{'Avg. Engagement Rate Increase'}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-number">{'101%'}</div>
                    <div className="metric-label">{'IG Target Achievement'}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-number">{'120+'}</div>
                    <div className="metric-label">{'KOLs Evaluated & Outreach'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          :root {
            --blue-primary: #1D4ED8;     /* ADNEX/Tech Blue */
            --blue-light: #EFF6FF;
            --text-dark: #0F172A;
            --text-gray: #475569;
            --border-color: #E2E8F0;
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
            background: #ffffff;
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
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--blue-primary);
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
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 100px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          }

          .badge-icon {
            color: var(--blue-primary);
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
            color: var(--blue-primary);
            font-size: 18px;
          }

          .detail-sub {
            font-size: 13px;
            color: #64748B;
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
            background: #F8FAFC;
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
            color: var(--blue-primary);
            font-weight: bold;
          }

          /* Initiatives Grid */
          .initiatives-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .initiative-card {
            background: #ffffff;
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
            color: var(--blue-primary);
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
            background: #F1F5F9;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--blue-primary);
            border-left: 3px solid var(--blue-primary);
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

          /* Animations */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .reveal.in {
            opacity: 1;
            transform: translateY(0);
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
          background: 'rgba(238,234,224,0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(12,12,12,0.25)',
          color: '#0C0C0C', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', lineHeight: 1,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 90,
          transition: 'background .2s, box-shadow .2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = '#EEEAE0';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(238,234,224,0.95)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >←</button>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', borderRadius: '50%', background: '#0F172A', color: '#FFE699', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'opacity 0.25s ease, transform 0.2s ease', zIndex: 999, opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transform: showTop ? 'translateY(0)' : 'translateY(8px)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = showTop ? 'translateY(0)' : 'translateY(8px)'; }}>↑</button>
    </Layout>
  );
}