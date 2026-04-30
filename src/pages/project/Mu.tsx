import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import {
  Award, Leaf, Wind, Map, BookOpen,
  Target, Compass, Sparkles, CheckCircle2,
  Volume2, ShieldCheck, Maximize2, X
} from 'lucide-react';

// 動態載入資源
const muAssets = import.meta.glob(
  '../../assets/images/project/Mu/*.{jpg,jpeg,png,webp,pdf,JPG,JPEG,PNG,WEBP,PDF}',
  { eager: true, import: 'default' }
);

// 精準檔名呼叫工具
const getAsset = (fileName: string) => {
  const fileLower = fileName.toLowerCase();
  const match = Object.entries(muAssets).find(([path]) => {
    const pathLower = path.toLowerCase();
    return pathLower.includes(`/${fileLower}.`);
  });
  return match ? (match[1] as string) : '';
};

export default function MuProject() {
  const [showTop, setShowTop] = useState(false);
  // Lightbox state
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

  // Lightbox handler
  const openLightbox = (imageName: string) => {
    setLightboxImage(getAsset(imageName));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <Layout>
      <div id="mu-project-page">
        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={closeLightbox}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
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
              {/* Award Badge */}
              <div className="award-badge-container">
                <div className="nomination-badge">
                  <div className="badge-icon">
                    <Award size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">{'UX Design Award'}</div>
                    <div className="badge-subtitle">{'Nominated Concept'}</div>
                  </div>
                </div>
              </div>

              <h1 className="hero-title">{'Mù – A Multisensory Guide'}</h1>
              <p className="hero-subtitle">
                {'Rebuilding the sensory relationship between people and Taiwan\'s endangered woods'}
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">{'Aug - Dec 2025'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">{'Creative Ideation, Video Production'}</span>
                  <span className="detail-sub">{'Desk Research'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Team'}</span>
                  <span className="detail-value">{'2 Members'}</span>
                  <span className="detail-sub">{'Collaborative Concept Design'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Recognition'}</span>
                  <span className="detail-value achievement-highlight">
                    ✨ {'UX Design Award Nominee'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview with Logo */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="overview-intro flex-center-wrapper">
              <div className="logo-container">
                <img src={getAsset('logo')} alt="Mù Logo" className="project-logo" />
              </div>
              <div className="overview-text-container">
                <h2 className="section-heading">{'Project Overview'}</h2>
                <p className="body-text-large">
                  {'While twelve native tree species in Taiwan are legally defined as precious woods, most urban visitors only encounter them as commodities. Mù is a multisensory guidance app and exhibition concept that turns abstract ecological loss into a rediscoverable experience. Using scent, sound, touch, and visual storytelling, it lets visitors feel endangered woods as living beings.'}
                </p>
              </div>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon"><Wind size={40} /></div>
                <div className="metric-label">{'Multisensory Immersion'}</div>
                <p className="body-text-sm">{'Engaging users beyond screens through curated soundscapes and localized scents.'}</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon"><Map size={40} /></div>
                <div className="metric-label">{'4 Themed Zones'}</div>
                <p className="body-text-sm">{'Orchestrating a cohesive journey across the Domain of Sacred Trees to the Forest of Memories.'}</p>
              </div>
              <div className="metric-card">
                <div className="metric-icon"><BookOpen size={40} /></div>
                <div className="metric-label">{'Micro-learning'}</div>
                <p className="body-text-sm">{'Translating complex conservation data into digestible, card-based tree profiles.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(4, 92, 90, 0.04) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Target size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">{'The Challenge: Bridging the Awareness Gap'}</h3>
              </div>

              <div className="two-column-layout">
                <div className="column-content">
                  <h4 className="highlight-title">{'Why is conservation so hard to communicate?'}</h4>
                  <p className="body-text">
                    {'Illegal logging heavily affects Taiwan\'s first-grade timber species. However, for the general public, this issue feels distant. How do we make urban populations care about something they rarely see or interact with?'}
                  </p>

                  <div className="challenge-list">
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Abstract Ecological Loss:'}</strong>
                        <span>{' People know trees are disappearing, but it remains a headline rather than an emotional connection.'}</span>
                      </div>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Information Overload:'}</strong>
                        <span>{' Traditional museum text panels cause fatigue and fail to evoke empathy for the environment.'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column-media">
                  <div className="insight-card">
                    <h4 className="insight-title">{'Core Question'}</h4>
                    <p className="insight-text">
                      {'"How can a multisensory, research-driven guide turn \'I know trees are disappearing\' into \'I feel connected and want to protect them\'?"'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights Synthesis with Data Visualization */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Compass size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">{'Research & Insights Synthesis'}</h3>
              </div>

              <p className="body-text mb-8">
                {'To ensure our solution was grounded in reality, we conducted a mixed-methods research approach, including desk research and a quantitative survey (n=23) focused on wood fragrance experiences.'}
              </p>

              {/* Precious Woods Showcase */}
              <div className="woods-showcase-container shadow-box mb-12">
                <h4 className="text-center font-bold mb-4" style={{ color: 'hsl(var(--g1))' }}>Taiwan's Precious Woods</h4>
                <div className="image-wrapper bg-white p-4" style={{ height: '200px' }}>
                  <img src={getAsset('woods')} alt="Precious Woods of Taiwan" className="full-contain-img" />
                </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="data-viz-grid mb-12">
                {/* Chart 1: Interest vs Knowledge */}
                <div className="chart-card shadow-box">
                  <h4 className="chart-title">{'Interest vs. Knowledge Gap'}</h4>
                  <p className="chart-desc">{'91.3% of respondents showed high interest in sustainability, but lacked basic knowledge of native woods.'}</p>
                  <div className="bar-chart-container">
                    <div className="bar-row">
                      <div className="bar-label">{'High Interest'}</div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '91.3%', background: 'hsl(var(--g1))' }}></div>
                        <span className="bar-value">91.3%</span>
                      </div>
                    </div>
                    <div className="bar-row">
                      <div className="bar-label">{'High Knowledge'}</div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '15%', background: '#CBD5E1' }}></div>
                        <span className="bar-value">15%</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-insight">{'Insight: A micro-learning approach is essential.'}</div>
                </div>

                {/* Chart 2: Scent Delivery Preference */}
                <div className="chart-card shadow-box">
                  <h4 className="chart-title">{'Scent Delivery Preference'}</h4>
                  <p className="chart-desc">{'Survey revealed a strong preference for localized, point-based sniffing to avoid sensory overload.'}</p>
                  <div className="pie-chart-container">
                    <div className="pie-chart" style={{ background: 'conic-gradient(hsl(var(--g2)) 0% 78.3%, #E2E8F0 78.3% 100%)' }}></div>
                    <div className="pie-legend">
                      <div className="legend-item"><span className="dot" style={{ background: 'hsl(var(--g2))' }}></span>{'78.3% Point-based (Cards/Jars)'}</div>
                      <div className="legend-item"><span className="dot" style={{ background: '#E2E8F0' }}></span>{'21.7% Full-room diffusion'}</div>
                    </div>
                  </div>
                  <div className="chart-insight">{'Insight: Scent must be controlled and localized.'}</div>
                </div>

                {/* Chart 3: Navigation Style */}
                <div className="chart-card shadow-box">
                  <h4 className="chart-title">{'Navigation Style Preference'}</h4>
                  <p className="chart-desc">{'Feedback was perfectly split, dictating the need for a flexible UX architecture.'}</p>
                  <div className="bar-chart-container">
                    <div className="bar-row">
                      <div className="bar-label">{'Guided Tour'}</div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '50%', background: 'hsl(var(--g3))' }}></div>
                        <span className="bar-value">50%</span>
                      </div>
                    </div>
                    <div className="bar-row">
                      <div className="bar-label">{'Free Exploration'}</div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '50%', background: 'hsl(var(--g4))' }}></div>
                        <span className="bar-value">50%</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-insight">{'Insight: App must offer Dual-Pathways.'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution & App UI (Uniform Grid) */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(4, 92, 90, 0.04) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header justify-center mb-12">
                <Sparkles size={28} color="hsl(var(--g3))" />
                <h3 className="subsection-title">{'Design Solutions & Interactions'}</h3>
              </div>

              <div className="ui-grid">
                {/* Feature 1 */}
                <div className="ui-card shadow-box">
                  <div className="ui-text-area">
                    <div className="feature-icon-sm"><Map size={20} /></div>
                    <h4 className="ui-title">{'Dual Navigation Pathways'}</h4>
                    <p className="ui-desc">{'Accommodating different visitor mindsets. The home screen provides a structured narrative path across four themed "forest islands".'}</p>
                  </div>
                  <div className="ui-image-area" onClick={() => openLightbox('home-page')}>
                    <img src={getAsset('home-page')} alt="Home Navigation" />
                    <div className="expand-overlay"><Maximize2 size={24} /></div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="ui-card shadow-box">
                  <div className="ui-text-area">
                    <div className="feature-icon-sm"><Compass size={20} /></div>
                    <h4 className="ui-title">{'Spatial Pathfinding'}</h4>
                    <p className="ui-desc">{'Clear visual cues showing the distance to specific trees or zones, allowing spontaneous exploration based on user location.'}</p>
                  </div>
                  <div className="ui-image-area" onClick={() => openLightbox('guide-app')}>
                    <img src={getAsset('guide-app')} alt="Guide App" />
                    <div className="expand-overlay"><Maximize2 size={24} /></div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="ui-card shadow-box">
                  <div className="ui-text-area">
                    <div className="feature-icon-sm"><Volume2 size={20} /></div>
                    <h4 className="ui-title">{'Auditory Orchestration'}</h4>
                    <p className="ui-desc">{'Syncing with physical installations. Prompting users to pause and listen to breathing soundscapes, rebuilding the "forest rhythm".'}</p>
                  </div>
                  <div className="ui-image-area" onClick={() => openLightbox('multisensory-app-1')}>
                    <img src={getAsset('multisensory-app-1')} alt="Auditory Guide" />
                    <div className="expand-overlay"><Maximize2 size={24} /></div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="ui-card shadow-box">
                  <div className="ui-text-area">
                    <div className="feature-icon-sm"><Leaf size={20} /></div>
                    <h4 className="ui-title">{'Micro-learning Profiles'}</h4>
                    <p className="ui-desc">{'Replacing long text panels with digestible, card-based UI communicating habitat altitude and conservation threats.'}</p>
                  </div>
                  <div className="ui-image-area" onClick={() => openLightbox('trees-introduce')}>
                    <img src={getAsset('trees-introduce')} alt="Tree Profiles" />
                    <div className="expand-overlay"><Maximize2 size={24} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation & Expected Impact */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="outcome-section">
              <div className="outcome-header">
                <ShieldCheck size={48} color="hsl(var(--g1))" />
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                  {'Impact & Recognition'}
                </h2>
                <p className="section-subheading">
                  {'A scalable, ethical exhibition framework'}
                </p>
              </div>

              <div className="outcome-grid">
                <div className="outcome-card featured green-theme">
                  <div className="outcome-icon green-icon"><Award size={50} /></div>
                  <h3 className="outcome-title">✨ {'UX Design Award Nominee'}</h3>
                  <p className="outcome-text text-center">
                    {'The concept was officially nominated for the UX Design Awards, validating the project\'s rigorous research methodology and innovative approach to solving complex environmental communication challenges.'}
                  </p>
                  {/* PDF Embed for Certificate */}
                  <div className="pdf-container shadow-box mt-8" style={{ height: '400px', width: '100%', maxWidth: '600px', margin: '32px auto 0' }}>
                    <iframe
                      src={`${getAsset('uxda-certificate')}#view=FitH`}
                      width="100%"
                      height="100%"
                      style={{ border: 'none', borderRadius: '8px', background: '#fff' }}
                      title="UXDA Certificate"
                    />
                  </div>
                </div>
              </div>

              {/* Final App Image */}
              <div className="image-wrapper shadow-box mt-12 bg-white p-4" style={{ height: '500px' }}>
                <img src={getAsset('app')} alt="Mù App Overview" className="full-contain-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          :root {
            --g1: 175, 90%, 18%; /* Deep Forest Green */
            --g2: 160, 60%, 30%; /* Emerald */
            --g3: 140, 40%, 45%; /* Leaf Green */
            --g4: 35, 40%, 50%;  /* Wood Tone */
          }

          .full-contain-img { width: 100%; height: 100%; object-fit: contain; display: block; }
          .image-wrapper { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: var(--radius-lg); }
          .shadow-box { box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.05); }
          .bg-white { background: #ffffff; }
          .p-4 { padding: 16px; }
          .mb-4 { margin-bottom: 16px; }
          .mb-8 { margin-bottom: 32px; }
          .mb-12 { margin-bottom: 48px; }
          .mt-4 { margin-top: 16px; }
          .mt-8 { margin-top: 32px; }
          .mt-12 { margin-top: 48px; }
          .text-center { text-align: center; }
          .justify-center { justify-content: center; }
          .font-bold { font-weight: 700; }

          /* Lightbox */
          .lightbox-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
          .lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: white; cursor: pointer; padding: 8px; border-radius: 50%; background: rgba(255,255,255,0.1); transition: background 0.2s; }
          .lightbox-close:hover { background: rgba(255,255,255,0.2); }
          .lightbox-content { width: 90%; height: 90%; display: flex; align-items: center; justify-content: center; }
          .lightbox-content img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }

          /* Hero Section */
          .hero-section { padding: 120px 0 80px; background: linear-gradient(180deg, rgba(4, 92, 90, 0.05) 0%, transparent 100%); }
          .hero-content { text-align: center; max-width: 900px; margin: 0 auto; }
          .award-badge-container { display: flex; justify-content: center; margin-bottom: 32px; }
          .nomination-badge { display: flex; align-items: center; gap: 16px; padding: 16px 32px; background: linear-gradient(135deg, hsl(var(--g1)) 0%, hsl(var(--g2)) 100%); border-radius: var(--radius-lg); box-shadow: 0 8px 32px rgba(4, 92, 90, 0.25); color: white; animation: float 4s ease-in-out infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
          .badge-icon { display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255, 255, 255, 0.15); border-radius: 50%; }
          .badge-title { font-size: 18px; font-weight: 800; }
          .badge-subtitle { font-size: 14px; font-weight: 500; opacity: 0.9; margin-top: 4px; }
          .hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; color: var(--md-on-surface); margin-bottom: 24px; }
          .hero-subtitle { font-size: clamp(18px, 2vw, 22px); line-height: 1.6; color: var(--color-text-muted); margin-bottom: 48px; }
          .hero-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(0,0,0,0.06); }
          .detail-item { text-align: center; display: flex; flex-direction: column; gap: 6px; }
          .detail-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); }
          .detail-value { font-size: 15px; font-weight: 600; color: var(--md-on-surface); }
          .detail-value.achievement-highlight { font-size: 16px; color: hsl(var(--g2)); font-weight: 700; }
          .detail-sub { font-size: 13px; color: var(--color-text-muted); }

          /* Content Sections */
          .content-section { padding: 80px 0; }
          .section-heading { font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: var(--md-on-surface); margin-bottom: 16px; }
          .section-subheading { font-size: clamp(16px, 2vw, 20px); color: var(--color-text-muted); margin-bottom: 32px; }
          .body-text { font-size: 16px; line-height: 1.8; color: var(--color-text-muted); }
          .body-text-sm { font-size: 14px; line-height: 1.6; color: var(--color-text-muted); margin: 0; }
          .body-text-large { font-size: 20px; line-height: 1.7; color: var(--md-on-surface); font-weight: 500; }

          /* Overview with Logo */
          .flex-center-wrapper { display: flex; flex-direction: column; align-items: center; gap: 32px; margin: 0 auto 64px; max-width: 900px; text-align: center; }
          .logo-container { width: 140px; height: 140px; flex-shrink: 0; }
          .project-logo { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; box-shadow: 0 8px 24px rgba(4, 92, 90, 0.15); border: 4px solid white; }
          .overview-text-container { flex-grow: 1; }

          .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .metric-card { padding: 32px 24px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-lg); text-align: center; transition: transform 0.3s ease; }
          .metric-card:hover { transform: translateY(-5px); }
          .metric-icon { display: inline-flex; width: 64px; height: 64px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 16px; color: hsl(var(--g1)); }
          .metric-label { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--md-on-surface); }

          .subsection { margin-bottom: 64px; }
          .subsection-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
          .subsection-title { font-size: 28px; font-weight: 600; color: var(--md-on-surface); }

          .two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          .challenge-list { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
          .challenge-item { display: flex; align-items: flex-start; gap: 12px; }
          .challenge-bullet { width: 8px; height: 8px; border-radius: 50%; margin-top: 8px; flex-shrink: 0; background: hsl(var(--g4)); }
          .challenge-item div { font-size: 15px; line-height: 1.6; color: var(--color-text-muted); }
          .highlight-title { font-size: 20px; font-weight: 600; color: var(--md-on-surface); margin-bottom: 12px; }

          .insight-card { padding: 32px; background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05)); border-left: 4px solid hsl(var(--g1)); border-radius: var(--radius-lg); }
          .insight-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; color: hsl(var(--g1)); margin-bottom: 12px; }
          .insight-text { font-size: 18px; font-style: italic; font-weight: 500; color: var(--md-on-surface); }

          /* Data Viz */
          .woods-showcase-container { background: #f8fafc; padding: 24px; border-radius: var(--radius-lg); }
          .data-viz-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .chart-card { background: white; padding: 24px; border-radius: var(--radius-lg); display: flex; flex-direction: column; }
          .chart-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
          .chart-desc { font-size: 14px; color: var(--color-text-muted); margin-bottom: 24px; flex-grow: 1; }
          .chart-insight { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: hsl(var(--g2)); }
          
          /* Bar Chart CSS */
          .bar-chart-container { display: flex; flex-direction: column; gap: 16px; }
          .bar-row { display: flex; flex-direction: column; gap: 4px; }
          .bar-label { font-size: 13px; font-weight: 600; color: #475569; }
          .bar-track { width: 100%; height: 24px; background: #f1f5f9; border-radius: 12px; overflow: hidden; position: relative; }
          .bar-fill { height: 100%; border-radius: 12px; }
          .bar-value { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 12px; font-weight: 700; color: #334155; }

          /* Pie Chart CSS */
          .pie-chart-container { display: flex; flex-direction: column; align-items: center; gap: 16px; }
          .pie-chart { width: 120px; height: 120px; border-radius: 50%; }
          .pie-legend { display: flex; flex-direction: column; gap: 8px; width: 100%; }
          .legend-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #475569; font-weight: 500; }
          .dot { width: 12px; height: 12px; border-radius: 50%; }

          /* Uniform UI Grid */
          .ui-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .ui-card { background: white; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; }
          .ui-text-area { padding: 24px; border-bottom: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 8px; }
          .feature-icon-sm { width: 40px; height: 40px; background: hsl(var(--g3)/.1); color: hsl(var(--g3)); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
          .ui-title { font-size: 20px; font-weight: 700; color: var(--md-on-surface); }
          .ui-desc { font-size: 15px; line-height: 1.6; color: var(--color-text-muted); }
          .ui-image-area { width: 100%; height: 400px; background: #f8fafc; padding: 16px; cursor: pointer; position: relative; }
          .ui-image-area img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.3s ease; }
          .expand-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; opacity: 0; transition: opacity 0.2s; backdrop-filter: blur(2px); }
          .ui-image-area:hover .expand-overlay { opacity: 1; }
          .ui-image-area:hover img { transform: scale(1.02); }

          /* Outcome Section */
          .outcome-section { text-align: center; }
          .outcome-header { max-width: 700px; margin: 0 auto 48px; }
          .outcome-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
          .outcome-card { padding: 40px 24px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-lg); text-align: center; }
          .outcome-card.featured.green-theme { background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08)); border: 2px solid hsl(var(--g1)/.3); padding: 56px 32px; }
          .outcome-icon { display: inline-flex; width: 64px; height: 64px; background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g2)); }
          .outcome-icon.green-icon { width: 80px; height: 80px; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); color: #fff; }
          .outcome-title { font-size: 20px; font-weight: 600; color: var(--md-on-surface); margin-bottom: 12px; }

          /* Reveal Animation */
          .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
          .reveal.in { opacity: 1; transform: translateY(0); }

          /* Responsive Design */
          @media (max-width: 959px) {
            .metrics-grid, .two-column-layout, .data-viz-grid, .ui-grid { grid-template-columns: 1fr; }
            .ui-image-area { height: 300px; }
          }
          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .content-section { padding: 60px 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .reveal, .nomination-badge { transition: none !important; transform: none !important; animation: none !important; }
            .reveal { opacity: 1; }
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', borderRadius: '50%', background: '#1A1A18', color: '#FFE699', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'opacity 0.25s ease, transform 0.2s ease', zIndex: 999, opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transform: showTop ? 'translateY(0)' : 'translateY(8px)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = showTop ? 'translateY(0)' : 'translateY(8px)'; }}>↑</button>
    </Layout>
  );
}