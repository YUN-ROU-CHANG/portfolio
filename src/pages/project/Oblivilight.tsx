import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import {
  Award, Zap, Users, Lightbulb, Cpu,
  Printer, Trash2, BookOpen, Star, Maximize2, X
} from 'lucide-react';

// 動態載入所有圖片、GIF與PDF
const oblivilightAssets = import.meta.glob(
  '../../assets/images/project/oblivilight/*.{jpg,jpeg,png,webp,gif,pdf,JPG,JPEG,PNG,WEBP,GIF,PDF}',
  { eager: true, import: 'default' }
);

// 精準檔名呼叫工具：使用 /檔名. 的方式，確保不會抓到相似名稱的檔案
const getAsset = (fileName: string) => {
  const fileLower = fileName.toLowerCase();
  const match = Object.entries(oblivilightAssets).find(([path]) => {
    const pathLower = path.toLowerCase();
    return pathLower.includes(`/${fileLower}.`);
  });
  return match ? (match[1] as string) : '';
};

export default function Oblivilight() {
  const [showTop, setShowTop] = useState(false);
  // 新增：用於控制 Lightbox 的狀態
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered reveal animations
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
      <div id="oblivilight-page">
        {/* 新增：Lightbox 燈箱元件 */}
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
              <div className="award-badges">
                <div className="award-badge primary">
                  <Award size={20} />
                  <span>Best Demo Award</span>
                </div>
                <div className="award-badge secondary">
                  <Star size={20} />
                  <span>Selected for TAICHI Demo</span>
                </div>
              </div>

              <h1 className="hero-title">{'OpenHCI\'25 | Oblivilight'}</h1>
              <p className="hero-subtitle">{'Exploring AI Forgetting Mechanisms Through Tangible Interaction'}</p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">{'July 2025'}</span>
                  <span className="detail-sub">{'OpenHCI Workshop'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">{'Interaction Designer'}</span>
                  <span className="detail-sub">{'Team of 7 Members'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Recognition'}</span>
                  <span className="detail-value highlight">🏆 {'Best Demo Award'}</span>
                  <span className="detail-sub">{'TAICHI Demo Selected'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <div className="section-header-sm">
                  <Zap size={24} color="hsl(var(--g1))" />
                  <h2 className="section-heading-sm">{'Rapid Prototyping Challenge'}</h2>
                </div>
                <p className="body-text">
                  {'This fully functional physical prototype was conceived, designed, and built within an intensive OpenHCI workshop—demonstrating exceptional teamwork, rapid iteration, and innovative problem-solving under pressure.'}
                </p>
                <div className="metrics-grid-mini">
                  <div className="metric-item">
                    <strong>{'AI Forgetting'}</strong>
                    <span>{'Selective memory deletion'}</span>
                  </div>
                  <div className="metric-item">
                    <strong>{'Tangible Output'}</strong>
                    <span>{'Receipt printer makes memories physical'}</span>
                  </div>
                  <div className="metric-item">
                    <strong>{'Ritual Interaction'}</strong>
                    <span>{'Shredding creates a deletion ceremony'}</span>
                  </div>
                </div>
              </div>

              <div className="column-media">
                <div className="insight-card">
                  <h4 className="insight-title">{'The Core Concept'}</h4>
                  <p className="insight-text">
                    {'Oblivilight is a tangible interaction device that explores how AI systems can "forget" information. In an era of digital hoarding and privacy concerns, this project reimagines data deletion as a meaningful, ritual-like experience through physical interaction.'}
                  </p>
                </div>
              </div>
            </div>

            {/* The Concept Exhibition Image */}
            <div className="image-wrapper shadow-box bg-white mt-12">
              <img src={getAsset('exhibition-pictures')} alt="Exhibition Pictures" className="full-contain-img" />
            </div>
          </div>
        </section>

        {/* User Research & Insights */}
        <section className="content-section reveal" style={{ background: 'rgba(251, 146, 60, 0.04)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="text-center mb-12">
              <div className="section-header-sm justify-center">
                <BookOpen size={28} color="hsl(var(--g2))" />
                <h2 className="section-heading-sm ml-3">{'User Research & Insights'}</h2>
              </div>
              <p className="body-text mt-4">
                {'Understanding the emotional weight of digital memory and the anxiety around AI data retention.'}
              </p>
            </div>

            <div className="flex-col-gap-large">
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('user-concern')} alt="User Concern" className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('after-interview')} alt="After Interview" className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('interview-results')} alt="Interview Results" className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('persona')} alt="Persona" className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('pov-and-hmw')} alt="POV and HMW" className="full-contain-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Interaction Flow */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center mb-12">
              <h2 className="section-heading">{'Interaction Flow: Print → Review → Decide'}</h2>
              <p className="section-subheading">{'A 3-step physical ritual to process and curate digital memories.'}</p>
            </div>

            {/* Remember Demo Image */}
            <div className="image-wrapper shadow-box bg-white p-4 mb-12">
              <img src={getAsset('remember-demo')} alt="Remember Demo" className="full-contain-img" />
            </div>

            <div className="concept-grid">
              <div className="concept-card">
                <div className="card-icon"><Printer size={32} /></div>
                <h3>{'01. Print (Materialize)'}</h3>
                <p>{'At the end of the day, Oblivilight synthesizes the user\'s interactions and prints a physical "memory receipt", bringing ephemeral digital data into the physical world.'}</p>
              </div>

              <div className="concept-card">
                <div className="card-icon"><Lightbulb size={32} /></div>
                <h3>{'02. Review (Reflect)'}</h3>
                <p>{'The user holds the physical paper, reviewing the AI\'s interpretation of their day. This tangible format forces a slower, more deliberate reflection compared to scrolling on a screen.'}</p>
              </div>

              <div className="concept-card">
                <div className="card-icon"><Trash2 size={32} /></div>
                <h3>{'03. Decide (Keep or Forget)'}</h3>
                <p>{'The user makes a physical choice: keep the receipt in a journal (Save), or feed it back into the top of Oblivilight, where a built-in shredder destroys it—signaling the AI to permanently "forget" that data.'}</p>
              </div>
            </div>

            {/* Use Way GIFs (2x2 Grid) */}
            <div className="mt-12">
              <h3 className="highlight-title text-center mb-6">{'How to Interact'}</h3>
              <div className="gif-grid-2x2">
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-1')} alt="Interaction Step 1" className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-2')} alt="Interaction Step 2" className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-3')} alt="Interaction Step 3" className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-4')} alt="Interaction Step 4" className="full-contain-img" /></div>
              </div>
            </div>

            {/* Forgetting Mechanism GIFs (3 Columns) */}
            <div className="mt-12">
              <h3 className="highlight-title text-center mb-6">{'The Forgetting Mechanism'}</h3>
              <div className="gif-grid-3">
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_1')} alt="Forget Step 1" className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_2')} alt="Forget Step 2" className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_3')} alt="Forget Step 3" className="full-contain-img" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="content-section reveal" style={{ background: 'rgba(251, 146, 60, 0.04)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <div className="section-header-sm">
                  <Cpu size={24} color="hsl(var(--g4))" />
                  {/* 修改：將標題改為粗體小標風格 */}
                  <h3 className="highlight-title mb-0" style={{ fontSize: '24px' }}>{'Technical Implementation'}</h3>
                </div>
                <p className="body-text">
                  {'Building Oblivilight required integrating custom hardware with software logic within a 6-day sprint. The system relies on an Arduino microcontroller to orchestrate the interactions.'}
                </p>
                <ul className="feature-list">
                  <li><strong>{'Arduino Core:'}</strong> {'Handles input/output logic and component synchronization.'}</li>
                  <li><strong>{'Printer Driver:'}</strong> {'Custom integration to format and print thermal receipts dynamically.'}</li>
                  <li><strong>{'Shredder Retrofit:'}</strong> {'Hacked a commercial shredder to trigger via Arduino relay.'}</li>
                  <li><strong>{'Fabrication:'}</strong> {'Laser-cut acrylic enclosure and 3D-printed internal mounts.'}</li>
                </ul>
              </div>

              <div className="column-media">
                {/* 修改：加上 interactive-image-area 類別與 onClick 事件，並加入放大圖示 */}
                <div
                  className="image-wrapper shadow-box bg-white p-4 interactive-image-area"
                  style={{ minHeight: '300px' }}
                  onClick={() => setLightboxImage(getAsset('tech'))}
                >
                  <img src={getAsset('tech')} alt="Technical Diagram" className="full-contain-img" />
                  <div className="expand-hint">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition & Impact */}
        <section className="content-section reveal" style={{ paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center mb-12">
              <Award size={48} color="hsl(var(--g1))" className="mx-auto mb-4" />
              <h2 className="section-heading">{'Recognition & Team Impact'}</h2>
              <p className="section-subheading">{'Award-Winning Demo & Exhibition Selection'}</p>
            </div>

            <div className="outcome-grid-2">
              {/* TAICHI Demo */}
              <div className="outcome-card text-center">
                <div className="outcome-icon mx-auto"><Star size={36} /></div>
                <h3 className="outcome-title">{'Selected for TAICHI Demo'}</h3>
                <p className="outcome-text text-center">
                  {'Chosen to be showcased at the prestigious TAICHI Demo exhibition, highlighting innovative HCI research and prototypes.'}
                </p>
                <div className="image-wrapper shadow-box mt-6" style={{ height: '200px' }}>
                  <img src={getAsset('awards-photo')} alt="Awards Photo" className="full-contain-img" />
                </div>
              </div>

              {/* Team Collaboration */}
              <div className="outcome-card text-center">
                <div className="outcome-icon mx-auto"><Users size={36} /></div>
                <h3 className="outcome-title">{'Team Collaboration'}</h3>
                <p className="outcome-text text-center">
                  {'Successfully collaborated in a 5-person team under extreme time pressure, demonstrating effective communication, rapid prototyping, and shared ownership.'}
                </p>
                <div className="image-wrapper shadow-box mt-6" style={{ height: '200px' }}>
                  <img src={getAsset('our-team')} alt="Our Team" className="full-contain-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Styles */}
        <style>{`
          :root {
            --g1: 30, 90%, 45%; /* Warm Sunshine Orange */
            --g2: 15, 85%, 65%; /* Soft Pink-Orange */
            --g3: 45, 95%, 60%; /* Golden Yellow */
            --g4: 10, 70%, 50%; /* Sunset Pink-Red Accent */
            --bg-color: #FFFAF8; /* Very Light Peach Background */
            --card-bg: #FFFFFF;
          }

          /* Lightbox 新增樣式 */
          .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
          .lightbox-close { position: absolute; top: 20px; right: 20px; color: white; background: rgba(255,255,255,0.1); border: none; padding: 10px; border-radius: 50%; cursor: pointer; transition: background 0.2s; }
          .lightbox-close:hover { background: rgba(255,255,255,0.2); }
          .lightbox-content { max-width: 90%; max-height: 90%; display: flex; align-items: center; justify-content: center; }
          .lightbox-content img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
          
          /* Interactive Image Styling & Expand Hint 新增樣式 */
          .interactive-image-area { cursor: zoom-in; transition: transform 0.3s ease; position: relative; }
          .interactive-image-area:hover { transform: scale(1.01); }
          .expand-hint {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: hsl(var(--g1));
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            opacity: 0;
            transition: opacity 0.2s ease;
          }
          .interactive-image-area:hover .expand-hint { opacity: 1; }

          /* 保留原本的所有樣式 */
          .full-contain-img { width: 100%; height: 100%; object-fit: contain; display: block; }
          .image-wrapper { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: var(--radius-lg); }
          .shadow-box { box-shadow: 0 4px 20px rgba(251, 146, 60, 0.15); border: 1px solid rgba(251, 146, 60, 0.08); }
          .bg-white { background: #ffffff; }
          .p-4 { padding: 16px; }
          .mb-0 { margin-bottom: 0px !important; }
          .mb-6 { margin-bottom: 24px; }
          .mb-12 { margin-bottom: 48px; }
          .mt-4 { margin-top: 16px; }
          .mt-6 { margin-top: 24px; }
          .mt-8 { margin-top: 32px; }
          .mt-12 { margin-top: 48px; }
          .ml-3 { margin-left: 12px; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .text-center { text-align: center; }
          .justify-center { justify-content: center; }
          .flex-col-gap-large { display: flex; flex-direction: column; gap: 32px; }

          /* GIF Grids */
          .gif-grid-2x2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .gif-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          
          /* Hero Section */
          .hero-section { padding: 120px 0 80px; background: linear-gradient(180deg, rgba(251, 146, 60, 0.1) 0%, transparent 100%); }
          .hero-content { text-align: center; max-width: 900px; margin: 0 auto; }
          .award-badges { display: flex; justify-content: center; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; }
          .award-badge { display: flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 100px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 12px rgba(251, 146, 60, 0.1); }
          .award-badge.primary { background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); color: white; }
          .award-badge.secondary { background: #fff; color: hsl(var(--g1)); border: 1px solid rgba(251, 146, 60, 0.2); }

          .hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.1; color: #431407; margin-bottom: 24px; }
          .hero-subtitle { font-size: clamp(18px, 2vw, 22px); line-height: 1.6; color: #78350f; margin-bottom: 48px; }
          .hero-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(251, 146, 60, 0.1); }
          .detail-item { text-align: center; display: flex; flex-direction: column; gap: 6px; }
          .detail-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #9a3412; }
          .detail-value { font-size: 16px; font-weight: 700; color: #431407; }
          .detail-value.highlight { color: hsl(var(--g1)); font-size: 18px; }
          .detail-sub { font-size: 13px; color: #7c2d12; opacity: 0.8; }

          /* Content Sections */
          .content-section { padding: 80px 0; }
          .section-heading { font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: #431407; margin-bottom: 16px; }
          .section-heading-sm { font-size: 28px; font-weight: 700; color: #431407; }
          .section-subheading { font-size: 18px; color: #78350f; }
          .body-text { font-size: 16px; line-height: 1.8; color: #78350f; }
          .highlight-title { font-size: 22px; font-weight: 700; color: #431407; }
          .section-header-sm { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
          
          /* Ensures perfect vertical alignment in the two-column grid */
          .two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          
          .metrics-grid-mini { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(251, 146, 60, 0.1); }
          .metric-item { display: flex; align-items: center; gap: 12px; font-size: 15px; }
          .metric-item strong { color: hsl(var(--g1)); min-width: 140px; }

          .insight-card { padding: 40px; background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08)); border-left: 4px solid hsl(var(--g1)); border-radius: var(--radius-lg); }
          .insight-title { font-size: 16px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: hsl(var(--g1)); margin-bottom: 16px; }
          .insight-text { font-size: 18px; line-height: 1.6; font-weight: 500; color: #431407; }

          /* Concept Grid */
          .concept-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .concept-card { padding: 40px 24px; background: #ffffff; border: 1px solid rgba(251, 146, 60, 0.1); border-radius: 24px; text-align: center; transition: transform 0.3s ease; }
          .concept-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(251, 146, 60, 0.12); }
          .card-icon { display: inline-flex; width: 72px; height: 72px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g1)); }
          .concept-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #431407; }
          .concept-card p { font-size: 15px; line-height: 1.6; color: #78350f; }

          /* Feature List */
          .feature-list { list-style: none; padding: 0; margin: 24px 0 0 0; display: flex; flex-direction: column; gap: 16px; }
          .feature-list li { position: relative; padding-left: 24px; font-size: 15px; line-height: 1.6; color: #78350f; }
          .feature-list li::before { content: '→'; position: absolute; left: 0; color: hsl(var(--g4)); font-weight: bold; }
          .feature-list strong { color: #431407; }

          /* Outcome Cards 2 Cols */
          .outcome-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; }
          .outcome-card { padding: 40px; background: #ffffff; border: 1px solid rgba(251, 146, 60, 0.1); border-radius: 24px; display: flex; flex-direction: column; align-items: center; }
          .outcome-icon { display: inline-flex; width: 80px; height: 80px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g1)); }
          .outcome-title { font-size: 22px; font-weight: 700; color: #431407; margin-bottom: 16px; }

          /* Animations */
          .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
          .reveal.in { opacity: 1; transform: translateY(0); }

          /* Responsive */
          @media (max-width: 959px) {
            .two-column-layout, .concept-grid, .outcome-grid-2 { grid-template-columns: 1fr; gap: 32px; }
            .gif-grid-2x2, .gif-grid-3 { grid-template-columns: 1fr; }
          }
          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .content-section { padding: 60px 0; }
            .award-badges { flex-direction: column; align-items: center; }
          }
          @media (prefers-reduced-motion: reduce) {
            .reveal { transition: none !important; transform: none !important; opacity: 1; }
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', borderRadius: '50%', background: '#431407', color: '#FFE699', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'opacity 0.25s ease, transform 0.2s ease', zIndex: 999, opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transform: showTop ? 'translateY(0)' : 'translateY(8px)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = showTop ? 'translateY(0)' : 'translateY(8px)'; }}>↑</button>
    </Layout>
  );
}