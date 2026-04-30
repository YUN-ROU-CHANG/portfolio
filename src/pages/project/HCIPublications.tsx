import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
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
  const [showTop, setShowTop] = useState(false);

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
                    <div className="badge-title">{'HCI Research Publications'}</div>
                    <div className="badge-subtitle">{'Data-Driven UX & Academic Inquiry'}</div>
                  </div>
                </div>
              </div>
              
              <h1 className="hero-title">
                {'Advancing User Experience Through Rigorous Research'}
              </h1>
              
              <p className="hero-subtitle">
                {'Bridging the gap between empirical academic research and practical product design implications. Showcasing peer-reviewed studies on AI interaction, user emotion, and personalized tech workflows.'}
              </p>
            </motion.div>
          </div>
        </section>


        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 var(--space-4)'}}>
          <img src={hp[2]} alt="GCCE Oral Presentation"
            loading="lazy"
            style={{width:'100%',height:'auto',borderRadius:'8px',border:'1px solid rgba(12,12,12,.08)',display:'block',marginTop:'24px',marginBottom:'32px'}} />
        </div>

        {/* Paper 1: IEEE GCCE */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="paper-container">
              <div className="paper-header">
                <div className="venue-tag ieee">{'Accepted and Presented at 2025 IEEE GCCE, Osaka'}</div>
                <h2 className="paper-title">
                  {'An Experimental Study on the Effect of AI Voice Prominence on Users\' Emotional Responses '}
                </h2>
                <p className="paper-authors">{'Yun-Rou Chang, Chien-Wen Cheng'}</p>
              </div>

              <div className="paper-grid">
                {/* Left Column: Summary & Methods */}
                <div className="paper-main">
                  <h3 className="section-heading-sm">{'The Challenge & Motivation'}</h3>
                  <p className="body-text">
                    {'As AI-generated speech becomes increasingly natural and pervasive in digital content, its emotional impact remains underexplored. This study investigates how the "prominence" of an AI voice (how foregrounded it is) affects user emotions across different media contexts.'}
                  </p>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{'Methodology'}</h3>
                  <ul className="method-list">
                    <li>
                      <Activity size={20} />
                      <span><strong>{'Mixed-Methods Approach:'}</strong> {'Evaluated 39 university students using both the quantitative Self-Assessment Manikin (SAM) scale and qualitative semi-structured interviews.'}</span>
                    </li>
                    <li>
                      <Target size={20} />
                      <span><strong>{'Experimental Design:'}</strong> {'Tested three levels of AI voice prominence: High (Podcasts), Medium (Travel Vlogs), and Low (Instagram background music).'}</span>
                    </li>
                    <li>
                      <BarChart3 size={20} />
                      <span><strong>{'Statistical Analysis:'}</strong> {'Employed descriptive statistics and one-way ANOVA to test the significance of emotional differences (Pleasure, Arousal, Dominance) across conditions.'}</span>
                    </li>
                  </ul>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{'Key Findings'}</h3>
                  <div className="findings-box">
                    <p className="body-text" style={{ marginBottom: 0 }}>
                      {'Quantitative results revealed that lower AI voice prominence significantly increases user pleasure and arousal. Specifically, low prominence (Instagram background) yielded the highest pleasure (M=3.59) and arousal (M=2.88). Interviews indicated that AI voices are more acceptable in humorous or informational content, but less preferred in emotionally expressive formats.'}
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
                      <div style={{fontFamily:'"IBM Plex Mono",monospace',fontSize:'10px',letterSpacing:'.1em',textTransform:'uppercase',color:'#6B6A62',marginBottom:'4px'}}>IEEE Xplore · GCCE 2025</div>
                      <div style={{fontFamily:'"Space Grotesk",sans-serif',fontWeight:600,fontSize:'15px',lineHeight:1.3,color:'#0C0C0C',marginBottom:'4px'}}>AI Voice Subjectivity and Interactive Product Design</div>
                      <div style={{fontFamily:'"IBM Plex Mono",monospace',fontSize:'11px',color:'#6B6A62'}}>ieeexplore.ieee.org/document/11275196 ↗</div>
                    </div>
                  </a>

                {/* Right Column: Visuals & Implications */}
                <div className="paper-sidebar">
                  <div className="visual-asset">
                    {/* Placeholder for "flow chart.jpg" (Fig 2 in PDF) */}
                    <img src={hp[1]} alt="GCCE Flow Chart" loading="lazy" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}} />
                    <p className="image-caption">{'Fig 1. AI Voice Acceptance Framework detailing cognitive-emotional dynamics.'}</p>
                  </div>

                  <div className="implication-card">
                    <div className="card-icon"><Lightbulb size={24} /></div>
                    <h4 className="card-title">{'Design Implications for Tech'}</h4>
                    <p className="card-text">
                      {'Product designers must calibrate AI vocal prominence to content goals. Highlights the need for context-aware design: use human-like prosody for affective formats, neutral delivery for informational clips, and stylized/robotic speech for comedic effect.'}
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
                <div className="venue-tag ssim">{'Presented at SSIM 2024, Taiwan '}</div>
                <h2 className="paper-title">
                  {'AI-Assisted Music & Interactive Design for University Students: Exploring Needs & Skill-Based Variations'}
                </h2>
                <p className="paper-authors">{'Yun-Rou Chang, Chien-Wen Cheng'}</p>
              </div>

              <div className="paper-grid reverse-layout">
                {/* Left Column: Methods & Findings */}
                <div className="paper-main">
                  <h3 className="section-heading-sm">{'The Challenge & Motivation'}</h3>
                  <p className="body-text">
                    {'While AI tools for music composition are proliferating, there is limited research focusing on AI-assisted education tailored to the specific needs of users with varying levels of prior domain experience.'}
                  </p>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{'Methodology'}</h3>
                  <ul className="method-list">
                    <li>
                      <Users size={20} />
                      <span><strong>{'User Segmentation:'}</strong> {'Conducted focus group interviews with two distinct groups of university students (aged 19-21): those with and without prior music composition experience.'}</span>
                    </li>
                    <li>
                      <BrainCircuit size={20} />
                      <span><strong>{'Technical Workflow:'}</strong> {'Implemented a modular end-to-end AI workflow utilizing source separation, AI vocal synthesis (Synthesizer V, ACE Studio), and rule-based auto-arrangement.'}</span>
                    </li>
                    <li>
                      <BarChart3 size={20} />
                      <span><strong>{'Performance Metrics:'}</strong> {'Collected quantitative pre-post data across six dimensions: Fluency, Ideational, Flow, Originality, Quality, and Sociality.'}</span>
                    </li>
                  </ul>

                  <h3 className="section-heading-sm" style={{ marginTop: '32px' }}>{'Key Findings'}</h3>
                  <div className="findings-box">
                    <p className="body-text" style={{ marginBottom: 0 }}>
                      {'Both groups exhibited positive attitudes but vastly different needs. Novices showed the largest gains in ideation, flow, and originality. Experienced learners prioritized building personalized AI models and desired minimal instructor interference, favoring prompt-based keyword guidance. Novices relied heavily on pre-designed models and required more basic scaffolding.'}
                    </p>
                  </div>
                </div>

                {/* Right Column: Visuals & Implications */}
                <div className="paper-sidebar">
                  <div className="visual-asset">
                    {/* Placeholder for Workflow Image */}
                    <img src={hp[0]} alt="SSIM Paper" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                    <p className="image-caption">{'Fig 2. Modular AI workflow separating analysis, conditioning, and resynthesis.'}</p>
                  </div>

                  <div className="implication-card">
                    <div className="card-icon"><Music size={24} /></div>
                    <h4 className="card-title">{'Design Implications for Tech'}</h4>
                    <p className="card-text">
                      {'Proves the necessity of adaptive UI/UX in AI tools. Products must offer progressive disclosure: providing advanced model-building features and creative freedom for experts, while offering simplified, pre-designed templates for novices.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
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
            color: #94A3B8;
            margin-top: 4px;
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 52px);
            font-weight: 800;
            line-height: 1.2;
            color: rgb(var(--brand-dark));
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(16px, 2vw, 20px);
            line-height: 1.6;
            color: rgb(var(--brand-gray));
            max-width: 800px;
            margin: 0 auto;
          }

          /* Content Sections & Paper Container */
          .content-section {
            padding: 80px 0;
          }

          .paper-container {
            background: #ffffff;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 24px;
            padding: 56px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.02);
          }

          .paper-header {
            margin-bottom: 48px;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            padding-bottom: 32px;
          }

          .venue-tag {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }

          .venue-tag.ieee {
            background: rgba(var(--ieee-color), 0.1);
            color: rgb(var(--ieee-color));
          }

          .venue-tag.ssim {
            background: rgba(var(--ssim-color), 0.1);
            color: rgb(var(--ssim-color));
          }

          .paper-title {
            font-size: clamp(24px, 3vw, 32px);
            font-weight: 700;
            color: rgb(var(--brand-dark));
            line-height: 1.3;
            margin-bottom: 16px;
          }

          .paper-authors {
            font-size: 16px;
            color: rgb(var(--brand-gray));
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
          .section-heading-sm {
            font-size: 20px;
            font-weight: 700;
            color: rgb(var(--brand-dark));
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: #475569;
          }

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
            color: #475569;
          }

          .method-list li svg {
            flex-shrink: 0;
            color: rgb(var(--brand-primary));
            margin-top: 2px;
          }

          /* Findings Box */
          .findings-box {
            background: #F8FAFC;
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
            border: 1px solid rgba(0,0,0,0.08);
            overflow: hidden;
            background: #F1F5F9;
          }

          .image-placeholder.mock-chart {
            aspect-ratio: 4 / 3;
          }

          .image-placeholder.mock-workflow {
            aspect-ratio: 16 / 9;
          }

          .placeholder-label {
            font-size: 13px;
            color: #94A3B8;
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          .image-caption {
            font-size: 13px;
            color: #64748B;
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

          @media (prefers-reduced-motion: reduce) {
            .reveal {
              transition: none !important;
              transform: none !important;
              opacity: 1;
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#0F172A', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}