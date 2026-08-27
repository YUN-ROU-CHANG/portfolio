import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { 
  BookOpen, Mic, Activity, BarChart3, 
  Music, Users, BrainCircuit, Lightbulb,
  Award, Target, ChevronRight
} from 'lucide-react';


const hciPhotos = import.meta.glob(
  '../../assets/images/project/HCIPublications/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,svg,SVG}',
  { eager: true, import: 'default' }
);
const hp = Object.values(hciPhotos) as string[];

export default function HCIPublications() {
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
      <div id="hci-publications-page">
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
                <div className="academic-badge">
                  <div className="badge-icon">
                    <BookOpen size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">{t('project.hciPublications.header.title')}</div>
                    <div className="badge-subtitle">{t('project.hciPublications.header.subtitle')}</div>
                  </div>
                </div>
              </div>
              
              <h1 className="hero-title">
                {t('project.hciPublications.header.tagline')}
              </h1>
              
              <p className="hero-subtitle">
                {t('project.hciPublications.header.desc')}
              </p>
            </motion.div>
          </div>
        </section>


        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 var(--space-4)'}}>
          <img src={hp[2]} alt={t('project.hciPublications.gcce.photoAlt')}
            loading="lazy"
            style={{width:'100%',height:'auto',borderRadius:'8px',border:'1px solid rgba(12,12,12,.08)',display:'block',marginTop:'24px',marginBottom:'32px'}} />
        </div>

        {/* Paper 1: IEEE GCCE */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="paper-container">
              <div className="paper-header">
                <div className="venue-tag ieee">{t('project.hciPublications.gcce.venue')}</div>
                <h2 className="paper-title">
                  {t('project.hciPublications.gcce.title')}
                </h2>
                <p className="paper-authors">{t('project.hciPublications.labels.authors')}</p>
              </div>

              <div className="paper-grid">
                {/* Left Column: Summary & Methods */}
                <div className="paper-main">
                  <h3 className="section-heading-sm">{t('project.hciPublications.labels.challenge')}</h3>
                  <p className="body-text">
                    {t('project.hciPublications.gcce.challenge')}
                  </p>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{t('project.hciPublications.labels.methodology')}</h3>
                  <ul className="method-list">
                    <li>
                      <Activity size={20} />
                      <span><strong>{t('project.hciPublications.gcce.m1label')}</strong> {t('project.hciPublications.gcce.m1desc')}</span>
                    </li>
                    <li>
                      <Target size={20} />
                      <span><strong>{t('project.hciPublications.gcce.m2label')}</strong> {t('project.hciPublications.gcce.m2desc')}</span>
                    </li>
                    <li>
                      <BarChart3 size={20} />
                      <span><strong>{t('project.hciPublications.gcce.m3label')}</strong> {t('project.hciPublications.gcce.m3desc')}</span>
                    </li>
                  </ul>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{t('project.hciPublications.labels.findings')}</h3>
                  <div className="findings-box">
                    <p className="body-text" style={{ marginBottom: 0 }}>
                      {t('project.hciPublications.gcce.findings')}
                    </p>
                  </div>
                </div>


                  <a href="https://ieeexplore.ieee.org/document/11275196"
                    target="_blank" rel="noopener noreferrer"
                    style={{display:'flex',alignItems:'center',gap:'16px',padding:'16px 20px',marginTop:'24px',border:'1px solid rgba(12,12,12,.12)',borderRadius:'12px',background:'rgba(12,12,12,.02)',textDecoration:'none',color:'inherit',transition:'border-color .2s'}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(12,12,12,.3)';}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(12,12,12,.12)';}}
                  >
                    <div style={{width:'44px',height:'44px',borderRadius:'8px',background:'#0062CC',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <span style={{color:'white',fontSize:'20px'}}>📄</span>
                    </div>
                    <div>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--text-tertiary)',marginBottom:'4px'}}>{t('project.hciPublications.gcce.pubLabel')}</div>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'15px',lineHeight:1.3,color:'var(--text-primary)',marginBottom:'4px'}}>{t('project.hciPublications.gcce.pubTitle')}</div>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-tertiary)'}}>{t('project.hciPublications.gcce.pubLink')}</div>
                    </div>
                  </a>

                {/* Right Column: Visuals & Implications */}
                <div className="paper-sidebar">
                  <div className="visual-asset">
                    {/* Placeholder for "flow chart.jpg" (Fig 2 in PDF) */}
                    <img src={hp[1]} alt={t('project.hciPublications.gcce.figAlt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}} />
                    <p className="image-caption">{t('project.hciPublications.gcce.figCaption')}</p>
                  </div>

                  <div className="implication-card">
                    <div className="card-icon"><Lightbulb size={24} /></div>
                    <h4 className="card-title">{t('project.hciPublications.labels.implications')}</h4>
                    <p className="card-text">
                      {t('project.hciPublications.gcce.implications')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paper 2: SSIM */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.03) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="paper-container">
              <div className="paper-header">
                <div className="venue-tag ssim">{t('project.hciPublications.ssim.venue')}</div>
                <h2 className="paper-title">
                  {t('project.hciPublications.ssim.title')}
                </h2>
                <p className="paper-authors">{t('project.hciPublications.labels.authors')}</p>
              </div>

              <div className="paper-grid reverse-layout">
                {/* Left Column: Methods & Findings */}
                <div className="paper-main">
                  <h3 className="section-heading-sm">{t('project.hciPublications.labels.challenge')}</h3>
                  <p className="body-text">
                    {t('project.hciPublications.ssim.challenge')}
                  </p>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{t('project.hciPublications.labels.methodology')}</h3>
                  <ul className="method-list">
                    <li>
                      <Users size={20} />
                      <span><strong>{t('project.hciPublications.ssim.m1label')}</strong> {t('project.hciPublications.ssim.m1desc')}</span>
                    </li>
                    <li>
                      <BrainCircuit size={20} />
                      <span><strong>{t('project.hciPublications.ssim.m2label')}</strong> {t('project.hciPublications.ssim.m2desc')}</span>
                    </li>
                    <li>
                      <BarChart3 size={20} />
                      <span><strong>{t('project.hciPublications.ssim.m3label')}</strong> {t('project.hciPublications.ssim.m3desc')}</span>
                    </li>
                  </ul>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{t('project.hciPublications.labels.findings')}</h3>
                  <div className="findings-box">
                    <p className="body-text" style={{ marginBottom: 0 }}>
                      {t('project.hciPublications.ssim.findings')}
                    </p>
                  </div>
                </div>

                {/* Right Column: Visuals & Implications */}
                <div className="paper-sidebar">
                  <div className="visual-asset">
                    {/* Placeholder for Workflow Image */}
                    <img src={hp[0]} alt={t('project.hciPublications.ssim.figAlt')} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                    <p className="image-caption">{t('project.hciPublications.ssim.figCaption')}</p>
                  </div>

                  <div className="implication-card">
                    <div className="card-icon"><Music size={24} /></div>
                    <h4 className="card-title">{t('project.hciPublications.labels.implications')}</h4>
                    <p className="card-text">
                      {t('project.hciPublications.ssim.implications')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          /* delta */
          .section-heading-sm { font-size: 20px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }

          :root {
            --brand-primary: 37, 99, 235;   /* Tech Blue */
            --brand-dark: 15, 23, 42;       /* Slate 900 */
            --brand-gray: 100, 116, 139;    /* Slate 500 */
            --ieee-color: 0, 98, 155;       /* IEEE Blueish */
            --ssim-color: 16, 185, 129;     /* Emerald */
          }

          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(var(--brand-primary), 0.05) 0%, transparent 100%);
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

          .academic-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            background: rgb(var(--brand-dark));
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(15, 23, 42, 0.15);
            color: white;
          }

          .badge-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #60A5FA;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }

          .badge-subtitle {
            font-size: 14px;
            color: var(--text-tertiary);
            margin-top: 4px;
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 52px);
            font-weight: 800;
            line-height: 1.2;
            color: var(--text-primary);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(16px, 2vw, 20px);
            line-height: 1.6;
            color: var(--text-secondary);
            max-width: 800px;
            margin: 0 auto;
          }

          /* Content Sections & Paper Container */

          .paper-container {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 56px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.02);
          }

          .paper-header {
            margin-bottom: 48px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 32px;
          }

          .venue-tag {
            display: inline-block;
            padding: 6px 16px;
            border-radius: var(--radius-pill);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }

          .venue-tag.ieee {
            background: color-mix(in srgb, #0EA5E9 15%, var(--surface));
            color: color-mix(in srgb, #0EA5E9 55%, var(--text-primary));
          }

          .venue-tag.ssim {
            background: color-mix(in srgb, #10B981 15%, var(--surface));
            color: color-mix(in srgb, #10B981 55%, var(--text-primary));
          }

          .paper-title {
            font-size: clamp(24px, 3vw, 32px);
            font-weight: 700;
            color: var(--text-primary);
            line-height: 1.3;
            margin-bottom: 16px;
          }

          .paper-authors {
            font-size: 16px;
            color: var(--text-secondary);
            font-weight: 500;
          }

          /* Grid Layout */
          .paper-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 64px;
          }

          .paper-grid.reverse-layout {
            grid-template-columns: 0.8fr 1.2fr;
          }
          
          .paper-grid.reverse-layout .paper-main {
            order: 2;
          }
          .paper-grid.reverse-layout .paper-sidebar {
            order: 1;
          }

          /* Typography inside papers */


          /* Method List */
          .method-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .method-list li {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .method-list li svg {
            flex-shrink: 0;
            color: color-mix(in srgb, #3B82F6 60%, var(--text-primary));
            margin-top: 2px;
          }

          /* Findings Box */
          .findings-box {
            background: var(--surface);
            border-left: 4px solid rgb(var(--brand-primary));
            padding: 24px;
            border-radius: 0 12px 12px 0;
          }

          /* Sidebar Visuals & Cards */
          .visual-asset {
            margin-bottom: 32px;
          }

          .image-placeholder {
            width: 100%;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            overflow: hidden;
            background: var(--surface-muted);
          }

          .image-placeholder.mock-chart {
            aspect-ratio: 4 / 3;
          }

          .image-placeholder.mock-workflow {
            aspect-ratio: 16 / 9;
          }

          .placeholder-label {
            font-size: 13px;
            color: var(--text-tertiary);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          .image-caption {
            font-size: 13px;
            color: var(--text-tertiary);
            margin-top: 12px;
            text-align: center;
            font-style: italic;
          }

          /* Implication Card */
          .implication-card {
            background: rgb(var(--brand-dark));
            padding: 32px;
            border-radius: 16px;
            color: white;
            position: relative;
            overflow: hidden;
          }

          .implication-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #3B82F6, #10B981);
          }

          .card-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(255,255,255,0.1);
            border-radius: 12px;
            margin-bottom: 20px;
            color: #60A5FA;
          }

          .card-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .card-text {
            font-size: 15px;
            line-height: 1.6;
            color: #CBD5E1;
          }

          /* Responsive Design */
          @media (max-width: 959px) {
            .paper-grid, .paper-grid.reverse-layout {
              grid-template-columns: 1fr;
              gap: 48px;
            }
            
            .paper-grid.reverse-layout .paper-main { order: 1; }
            .paper-grid.reverse-layout .paper-sidebar { order: 2; }
            
            .paper-container {
              padding: 32px 24px;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 40px;
            }
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