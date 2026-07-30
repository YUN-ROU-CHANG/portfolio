import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
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
  const { t } = useLanguage();
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
                <img src={lightboxImage} alt={t('common.enlargedView')} />
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
                  <span>{t('project.oblivilight.hero.badge')}</span>
                </div>
                <div className="award-badge secondary">
                  <Star size={20} />
                  <span>{t('project.oblivilight.hero.badge2')}</span>
                </div>
              </div>

              <h1 className="hero-title">{t('project.oblivilight.hero.title')}</h1>
              <p className="hero-subtitle">{t('project.oblivilight.hero.subtitle')}</p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{t('project.oblivilight.hero.timelineLabel')}</span>
                  <span className="detail-value">{t('project.oblivilight.hero.timelineValue')}</span>
                  <span className="detail-sub">{t('project.oblivilight.hero.timelineSub')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.oblivilight.hero.roleLabel')}</span>
                  <span className="detail-value">{t('project.oblivilight.hero.roleValue')}</span>
                  <span className="detail-sub">{t('project.oblivilight.hero.teamValue')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{t('project.oblivilight.hero.recognitionLabel')}</span>
                  <span className="detail-value highlight">🏆 {t('project.oblivilight.hero.badge')}</span>
                  <span className="detail-sub">{t('project.oblivilight.hero.recognitionSub')}</span>
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
                  <h2 className="section-heading-sm">{t('project.oblivilight.challenge.title')}</h2>
                </div>
                <p className="body-text">
                  {t('project.oblivilight.challenge.desc')}
                </p>
                <div className="metrics-grid-mini">
                  <div className="metric-item">
                    <strong>{t('project.oblivilight.challenge.card1title')}</strong>
                    <span>{t('project.oblivilight.challenge.card1desc')}</span>
                  </div>
                  <div className="metric-item">
                    <strong>{t('project.oblivilight.challenge.card2title')}</strong>
                    <span>{t('project.oblivilight.challenge.card2desc')}</span>
                  </div>
                  <div className="metric-item">
                    <strong>{t('project.oblivilight.challenge.card3title')}</strong>
                    <span>{t('project.oblivilight.challenge.card3desc')}</span>
                  </div>
                </div>
              </div>

              <div className="column-media">
                <div className="insight-card">
                  <h4 className="insight-title">{t('project.oblivilight.concept.heading')}</h4>
                  <p className="insight-text">
                    {t('project.oblivilight.concept.desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* The Concept Exhibition Image */}
            <div className="image-wrapper shadow-box bg-white mt-12">
              <img src={getAsset('exhibition-pictures')} alt={t('project.oblivilight.concept.exhibitionAlt')} className="full-contain-img" />
            </div>
          </div>
        </section>

        {/* User Research & Insights */}
        <section className="content-section reveal" style={{ background: 'rgba(251, 146, 60, 0.04)' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="text-center mb-12">
              <div className="section-header-sm justify-center">
                <BookOpen size={28} color="hsl(var(--g2))" />
                <h2 className="section-heading-sm ml-3">{t('project.oblivilight.research.heading')}</h2>
              </div>
              <p className="body-text mt-4">
                {t('project.oblivilight.research.desc')}
              </p>
            </div>

            <div className="flex-col-gap-large">
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('user-concern')} alt={t('project.oblivilight.research.alt1')} className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('after-interview')} alt={t('project.oblivilight.research.alt2')} className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('interview-results')} alt={t('project.oblivilight.research.alt3')} className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('persona')} alt={t('project.oblivilight.research.alt4')} className="full-contain-img" />
              </div>
              <div className="image-wrapper shadow-box bg-white p-4">
                <img src={getAsset('pov-and-hmw')} alt={t('project.oblivilight.research.alt5')} className="full-contain-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Interaction Flow */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center mb-12">
              <h2 className="section-heading">{t('project.oblivilight.flow.heading')}</h2>
              <p className="section-subheading">{t('project.oblivilight.flow.desc')}</p>
            </div>

            {/* Remember Demo Image */}
            <div className="image-wrapper shadow-box bg-white p-4 mb-12">
              <img src={getAsset('remember-demo')} alt={t('project.oblivilight.flow.demoAlt')} className="full-contain-img" />
            </div>

            <div className="concept-grid">
              <div className="concept-card">
                <div className="card-icon"><Printer size={32} /></div>
                <h3>{t('project.oblivilight.flow.step1title')}</h3>
                <p>{t('project.oblivilight.flow.step1desc')}</p>
              </div>

              <div className="concept-card">
                <div className="card-icon"><Lightbulb size={32} /></div>
                <h3>{t('project.oblivilight.flow.step2title')}</h3>
                <p>{t('project.oblivilight.flow.step2desc')}</p>
              </div>

              <div className="concept-card">
                <div className="card-icon"><Trash2 size={32} /></div>
                <h3>{t('project.oblivilight.flow.step3title')}</h3>
                <p>{t('project.oblivilight.flow.step3desc')}</p>
              </div>
            </div>

            {/* Use Way GIFs (2x2 Grid) */}
            <div className="mt-12">
              <h3 className="highlight-title text-center mb-6">{t('project.oblivilight.interact.heading')}</h3>
              <div className="gif-grid-2x2">
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-1')} alt={t('project.oblivilight.interact.alt1')} className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-2')} alt={t('project.oblivilight.interact.alt2')} className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-3')} alt={t('project.oblivilight.interact.alt3')} className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('use-way-4')} alt={t('project.oblivilight.interact.alt4')} className="full-contain-img" /></div>
              </div>
            </div>

            {/* Forgetting Mechanism GIFs (3 Columns) */}
            <div className="mt-12">
              <h3 className="highlight-title text-center mb-6">{t('project.oblivilight.forgetting.heading')}</h3>
              <div className="gif-grid-3">
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_1')} alt={t('project.oblivilight.forgetting.alt1')} className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_2')} alt={t('project.oblivilight.forgetting.alt2')} className="full-contain-img" /></div>
                <div className="image-wrapper shadow-box"><img src={getAsset('to-forgot_3')} alt={t('project.oblivilight.forgetting.alt3')} className="full-contain-img" /></div>
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
                  <h3 className="highlight-title mb-0" style={{ fontSize: '24px' }}>{t('project.oblivilight.tech.heading')}</h3>
                </div>
                <p className="body-text">
                  {t('project.oblivilight.tech.intro')}
                </p>
                <ul className="feature-list">
                  <li><strong>{t('project.oblivilight.tech.item1label')}</strong> {t('project.oblivilight.tech.item1desc')}</li>
                  <li><strong>{t('project.oblivilight.tech.item2label')}</strong> {t('project.oblivilight.tech.item2desc')}</li>
                  <li><strong>{t('project.oblivilight.tech.item3label')}</strong> {t('project.oblivilight.tech.item3desc')}</li>
                  <li><strong>{t('project.oblivilight.tech.item4label')}</strong> {t('project.oblivilight.tech.item4desc')}</li>
                </ul>
              </div>

              <div className="column-media">
                {/* 修改：加上 interactive-image-area 類別與 onClick 事件，並加入放大圖示 */}
                <div
                  className="image-wrapper shadow-box bg-white p-4 interactive-image-area"
                  style={{ minHeight: '300px' }}
                  onClick={() => setLightboxImage(getAsset('tech'))}
                >
                  <img src={getAsset('tech')} alt={t('project.oblivilight.tech.diagramAlt')} className="full-contain-img" />
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
              <h2 className="section-heading">{t('project.oblivilight.impact.heading')}</h2>
              <p className="section-subheading">{t('project.oblivilight.impact.title')}</p>
            </div>

            <div className="outcome-grid-2">
              {/* TAICHI Demo */}
              <div className="outcome-card text-center">
                <div className="outcome-icon mx-auto"><Star size={36} /></div>
                <h3 className="outcome-title">{t('project.oblivilight.hero.badge2')}</h3>
                <p className="outcome-text text-center">
                  {t('project.oblivilight.impact.taichiDesc')}
                </p>
                <div className="image-wrapper shadow-box mt-6" style={{ height: '200px' }}>
                  <img src={getAsset('awards-photo')} alt={t('project.oblivilight.impact.awardsAlt')} className="full-contain-img" />
                </div>
              </div>

              {/* Team Collaboration */}
              <div className="outcome-card text-center">
                <div className="outcome-icon mx-auto"><Users size={36} /></div>
                <h3 className="outcome-title">{t('project.oblivilight.impact.teamTitle')}</h3>
                <p className="outcome-text text-center">
                  {t('project.oblivilight.impact.teamDesc')}
                </p>
                <div className="image-wrapper shadow-box mt-6" style={{ height: '200px' }}>
                  <img src={getAsset('our-team')} alt={t('project.oblivilight.impact.teamAlt')} className="full-contain-img" />
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
            --bg-color: color-mix(in srgb, #FB923C 4%, var(--background));
            --card-bg: var(--card);
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
            background-color: var(--card-glass);
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
          .bg-white { background: var(--card); }
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
          .award-badge.secondary { background: var(--card); color: hsl(var(--g1)); border: 1px solid rgba(251, 146, 60, 0.2); }

          .hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.1; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); margin-bottom: 24px; }
          .hero-subtitle { font-size: clamp(18px, 2vw, 22px); line-height: 1.6; color: color-mix(in srgb, #D97706 55%, var(--text-primary)); margin-bottom: 48px; }
          .hero-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(251, 146, 60, 0.1); }
          .detail-item { text-align: center; display: flex; flex-direction: column; gap: 6px; }
          .detail-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: color-mix(in srgb, #EA580C 55%, var(--text-primary)); }
          .detail-value { font-size: 16px; font-weight: 700; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }
          .detail-value.highlight { color: hsl(var(--g1)); font-size: 18px; }
          .detail-sub { font-size: 13px; color: color-mix(in srgb, #EA580C 55%, var(--text-primary)); opacity: 0.8; }

          /* Content Sections */
          .content-section { padding: 80px 0; }
          .section-heading { font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); margin-bottom: 16px; }
          .section-heading-sm { font-size: 28px; font-weight: 700; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }
          .section-subheading { font-size: 18px; color: color-mix(in srgb, #D97706 55%, var(--text-primary)); }
          .body-text { font-size: 16px; line-height: 1.8; color: color-mix(in srgb, #D97706 55%, var(--text-primary)); }
          .highlight-title { font-size: 22px; font-weight: 700; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }
          .section-header-sm { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
          
          /* Ensures perfect vertical alignment in the two-column grid */
          .two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          
          .metrics-grid-mini { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(251, 146, 60, 0.1); }
          .metric-item { display: flex; align-items: center; gap: 12px; font-size: 15px; }
          .metric-item strong { color: hsl(var(--g1)); min-width: 140px; }

          .insight-card { padding: 40px; background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08)); border-left: 4px solid hsl(var(--g1)); border-radius: var(--radius-lg); }
          .insight-title { font-size: 16px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: hsl(var(--g1)); margin-bottom: 16px; }
          .insight-text { font-size: 18px; line-height: 1.6; font-weight: 500; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }

          /* Concept Grid */
          .concept-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .concept-card { padding: 40px 24px; background: var(--card); border: 1px solid rgba(251, 146, 60, 0.1); border-radius: 24px; text-align: center; transition: transform 0.3s ease; }
          .concept-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(251, 146, 60, 0.12); }
          .card-icon { display: inline-flex; width: 72px; height: 72px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g1)); }
          .concept-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }
          .concept-card p { font-size: 15px; line-height: 1.6; color: color-mix(in srgb, #D97706 55%, var(--text-primary)); }

          /* Feature List */
          .feature-list { list-style: none; padding: 0; margin: 24px 0 0 0; display: flex; flex-direction: column; gap: 16px; }
          .feature-list li { position: relative; padding-left: 24px; font-size: 15px; line-height: 1.6; color: color-mix(in srgb, #D97706 55%, var(--text-primary)); }
          .feature-list li::before { content: '→'; position: absolute; left: 0; color: hsl(var(--g4)); font-weight: bold; }
          .feature-list strong { color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); }

          /* Outcome Cards 2 Cols */
          .outcome-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; }
          .outcome-card { padding: 40px; background: var(--card); border: 1px solid rgba(251, 146, 60, 0.1); border-radius: 24px; display: flex; flex-direction: column; align-items: center; }
          .outcome-icon { display: inline-flex; width: 80px; height: 80px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g1)); }
          .outcome-title { font-size: 22px; font-weight: 700; color: color-mix(in srgb, #CD853F 60%, var(--text-primary)); margin-bottom: 16px; }

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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', borderRadius: '50%', background: 'color-mix(in srgb, #CD853F 60%, var(--text-primary))', color: '#FFE699', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'opacity 0.25s ease, transform 0.2s ease', zIndex: 999, opacity: showTop ? 1 : 0, pointerEvents: showTop ? 'auto' : 'none', transform: showTop ? 'translateY(0)' : 'translateY(8px)' }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = showTop ? 'translateY(0)' : 'translateY(8px)'; }}>↑</button>
    </Layout>
  );
}