import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import CjkText from '../../components/CjkText';
import FlowLabel from '../../components/FlowLabel';
import { 
  Trophy, Database, Target, TrendingUp, 
  Smartphone, Activity, Lightbulb, Users, 
  Crosshair, Repeat, Layers, Maximize2, X
} from 'lucide-react';


const bigDataPhotos = import.meta.glob(
  '../../assets/images/project/BigDataMarketingCup/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
// 原本用 bp[0]、bp[5] 這種位置索引取圖，資料夾一增刪檔案整排就錯位。
// 改成用檔名查，檔案怎麼排都不受影響。
const getImage = (fileName: string) => {
  const target = `/${fileName.toLowerCase()}.`;
  const hit = Object.entries(bigDataPhotos).find(([path]) => path.toLowerCase().includes(target));
  return hit ? (hit[1] as string) : '';
};

export default function BigDataMarketingCup() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useRevealOnScroll();

  return (
    <Layout>
      <div id="big-data-cup-page">
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
              <div className="award-badge-container">
                <div className="competition-badge">
                  <div className="badge-icon">
                    <Trophy size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title"><CjkText>{t('project.bigDataCup.hero.badge')}</CjkText></div>
                    <div className="badge-subtitle"><CjkText>{t('project.bigDataCup.hero.badgeSub')}</CjkText></div>
                  </div>
                </div>
              </div>
              
              <h1 className="hero-title">
                <CjkText>{t('project.bigDataCup.hero.title')}</CjkText>
              </h1>
              
              <p className="hero-subtitle">
                <CjkText>{t('project.bigDataCup.hero.desc')}</CjkText>
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label"><CjkText>{t('project.bigDataCup.hero.clientLabel')}</CjkText></span>
                  <span className="detail-value"><CjkText>{t('project.bigDataCup.hero.clientValue')}</CjkText></span>
                </div>
                <div className="detail-item">
                  <span className="detail-label"><CjkText>{t('project.bigDataCup.hero.roleLabel')}</CjkText></span>
                  <span className="detail-value"><CjkText>{t('project.bigDataCup.hero.roleValue')}</CjkText></span>
                  <span className="detail-sub"><CjkText>{t('project.bigDataCup.hero.roleSub')}</CjkText></span>
                </div>
                <div className="detail-item">
                  <span className="detail-label"><CjkText>{t('project.bigDataCup.hero.scopeLabel')}</CjkText></span>
                  <span className="detail-value"><CjkText>{t('project.bigDataCup.hero.scopeValue')}</CjkText></span>
                  <span className="detail-sub"><CjkText>{t('project.bigDataCup.hero.scopeSub')}</CjkText></span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* 原圖 2201×1887，手機內容只佔中間：左右各留白 30.7%、上下 21.9% 與 19.3%。
            直接滿版貼上去會有一大片空白，這裡用固定比例的圖框以 cover 裁掉約一半的上下留白。 */}
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="cover-figure">
            <img src={getImage('big-data-cup-cover')} alt={t('project.bigDataCup.hero.coverAlt')} loading="lazy" />
          </div>
        </div>

        {/* The Challenge & Market Context */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <FlowLabel beat="problem" />
                <div className="section-header-sm">
                  <Target size={24} color="var(--red-ink)" />
                  <h2 className="section-heading-sm"><span><CjkText>{t('project.bigDataCup.challenge.heading')}</CjkText></span></h2>
                </div>
                <p className="body-text">
                  <CjkText>{t('project.bigDataCup.challenge.desc')}</CjkText>
                </p>
                <div className="impact-tag" style={{ marginTop: '24px', display: 'inline-block' }}>
                  <CjkText>{t('project.bigDataCup.challenge.goal')}</CjkText>
                </div>
              </div>

              <div className="column-content gray-box">
                <FlowLabel beat="analysis" />
                <div className="section-header-sm">
                  <Database size={24} color="var(--red-ink)" />
                  <h2 className="section-heading-sm"><span><CjkText>{t('project.bigDataCup.insights.heading')}</CjkText></span></h2>
                </div>
                <ul className="objective-list">
                  <li><strong><CjkText>{t('project.bigDataCup.insights.i1label')}</CjkText></strong> <CjkText>{t('project.bigDataCup.insights.i1desc')}</CjkText></li>
                  <li><strong><CjkText>{t('project.bigDataCup.insights.i2label')}</CjkText></strong> <CjkText>{t('project.bigDataCup.insights.i2desc')}</CjkText></li>
                  <li><strong><CjkText>{t('project.bigDataCup.insights.i3label')}</CjkText></strong> <CjkText>{t('project.bigDataCup.insights.i3desc')}</CjkText></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1200px' }}>
          <div
            className="deck-figure interactive-image-area"
            onClick={() => setLightboxImage(getImage('advantage'))}
          >
            <img src={getImage('advantage')} alt={t('project.bigDataCup.insights.competitorAlt')} loading="lazy" />
            <div className="expand-hint">
              <Maximize2 size={18} />
              <span className="expand-hint__label"><CjkText>{t('common.clickToZoom')}</CjkText></span>
            </div>
          </div>
        </div>

        {/* Strategy Grid */}
        <section className="content-section reveal" style={{ background: 'color-mix(in srgb, #F43F5E 8%, var(--surface))' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <FlowLabel beat="solution" />
              <h2 className="section-heading"><CjkText>{t('project.bigDataCup.strategy.heading')}</CjkText></h2>
              <p className="section-subheading"><CjkText>{t('project.bigDataCup.strategy.desc')}</CjkText></p>
            </div>

            <div className="strategy-grid">
              <div className="strategy-card">
                <div className="card-number">01</div>
                <div className="card-icon-wrapper"><Lightbulb size={28} /></div>
                <h3 className="card-title"><CjkText>{t('project.bigDataCup.strategy.s1title')}</CjkText></h3>
                <p className="card-text">
                  <CjkText>{t('project.bigDataCup.strategy.s1a')}</CjkText><strong><CjkText>{t('project.bigDataCup.strategy.s1em')}</CjkText></strong><CjkText>{t('project.bigDataCup.strategy.s1b')}</CjkText>
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">02</div>
                <div className="card-icon-wrapper"><Crosshair size={28} /></div>
                <h3 className="card-title"><CjkText>{t('project.bigDataCup.strategy.s2title')}</CjkText></h3>
                <p className="card-text">
                  <CjkText>{t('project.bigDataCup.strategy.s2desc')}</CjkText>
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">03</div>
                <div className="card-number-alt" style={{ display: 'none' }}>03</div>
                <div className="card-icon-wrapper"><Repeat size={28} /></div>
                <h3 className="card-title"><CjkText>{t('project.bigDataCup.strategy.s3title')}</CjkText></h3>
                <p className="card-text">
                  <CjkText>{t('project.bigDataCup.strategy.s3desc')}</CjkText>
                </p>
              </div>

              <div className="strategy-card highlight">
                <div className="card-number">04</div>
                <div className="card-icon-wrapper"><Smartphone size={28} /></div>
                <h3 className="card-title"><CjkText>{t('project.bigDataCup.strategy.s4title')}</CjkText></h3>
                <p className="card-text">
                  <CjkText>{t('project.bigDataCup.strategy.s4a')}</CjkText><strong><CjkText>{t('project.bigDataCup.strategy.s4em')}</CjkText></strong><CjkText>{t('project.bigDataCup.strategy.s4b')}</CjkText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Touchpoint: App UI Design */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <div className="badge-inline"><CjkText>{t('project.bigDataCup.app.heading')}</CjkText></div>
              <h2 className="section-heading" style={{ marginTop: '16px' }}><CjkText>{t('project.bigDataCup.strategy.s4em')}</CjkText></h2>
              <p className="section-subheading" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <CjkText>{t('project.bigDataCup.app.desc')}</CjkText>
              </p>
            </div>

            {/* App Screens Grid */}
            <div className="app-mockup-grid">
              {/* Screen 1: Start Page */}
              <div className="app-screen">
                <div className="phone-mock">
                  <div className="phone-mock__screen">
                    <img src={getImage('start page')} alt={t('project.bigDataCup.app.s1alt')} loading="lazy" />
                  </div>
                </div>
                <h4 className="screen-title"><CjkText>{t('project.bigDataCup.app.s1title')}</CjkText></h4>
                <p className="screen-desc"><CjkText>{t('project.bigDataCup.app.s1desc')}</CjkText></p>
              </div>

              {/* Screen 2: Home */}
              <div className="app-screen">
                <div className="phone-mock">
                  <div className="phone-mock__screen">
                    <img src={getImage('main page')} alt={t('project.bigDataCup.app.s2alt')} loading="lazy" />
                  </div>
                </div>
                <h4 className="screen-title"><CjkText>{t('project.bigDataCup.app.s2title')}</CjkText></h4>
                <p className="screen-desc"><CjkText>{t('project.bigDataCup.app.s2desc')}</CjkText></p>
              </div>

              {/* Screen 3: Plan */}
              <div className="app-screen">
                <div className="phone-mock">
                  <div className="phone-mock__screen">
                    <img src={getImage('fitness plan')} alt={t('project.bigDataCup.app.s3alt')} loading="lazy" />
                  </div>
                </div>
                <h4 className="screen-title"><CjkText>{t('project.bigDataCup.app.s3title')}</CjkText></h4>
                <p className="screen-desc"><CjkText>{t('project.bigDataCup.app.s3desc')}</CjkText></p>
              </div>

              {/* Screen 4: Social */}
              <div className="app-screen">
                <div className="phone-mock">
                  <div className="phone-mock__screen">
                    <img src={getImage('social media')} alt={t('project.bigDataCup.app.s4alt')} loading="lazy" />
                  </div>
                </div>
                <h4 className="screen-title"><CjkText>{t('project.bigDataCup.app.s4title')}</CjkText></h4>
                <p className="screen-desc"><CjkText>{t('project.bigDataCup.app.s4desc')}</CjkText></p>
              </div>

              {/* Screen 5: Personal Page */}
              <div className="app-screen">
                <div className="phone-mock">
                  <div className="phone-mock__screen">
                    <img src={getImage('personal page')} alt={t('project.bigDataCup.app.s5alt')} loading="lazy" />
                  </div>
                </div>
                <h4 className="screen-title"><CjkText>{t('project.bigDataCup.app.s5title')}</CjkText></h4>
                <p className="screen-desc"><CjkText>{t('project.bigDataCup.app.s5desc')}</CjkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantifiable Impact & Conclusion */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="impact-banner">
              <div className="banner-content">
                <FlowLabel beat="outcome" />
                <h2 className="banner-title"><CjkText>{t('project.bigDataCup.impact.heading')}</CjkText></h2>
                <div className="metrics-row">
                  <div className="metric-box">
                    <div className="metric-icon"><Trophy size={40} color="var(--red-ink)" /></div>
                    <div className="metric-number"><CjkText>{t('project.bigDataCup.impact.m1num')}</CjkText></div>
                    <div className="metric-label"><CjkText>{t('project.bigDataCup.impact.m1label')}</CjkText></div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-icon"><Layers size={40} color="var(--red-ink)" /></div>
                    <div className="metric-number"><CjkText>{t('project.bigDataCup.impact.m2num')}</CjkText></div>
                    <div className="metric-label"><CjkText>{t('project.bigDataCup.impact.m2label')}</CjkText></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          /* delta：標題已於 2026/08 統一為 32-48px / 700，此處只留副標與規格列差異 */
          .section-subheading { font-size: 18px; line-height: 1.6; margin-bottom: 0; }
          .section-header-sm { margin-bottom: 20px; }
          .detail-label { font-weight: 600; }
          .detail-value { font-size: 16px; font-weight: 700; }
          .detail-sub { color: var(--text-tertiary); }

          :root {
            --red-primary: #E11D48;      /* Energetic Red（實色底＋白字用） */
            --red-ink: #C81E45;          /* 淺底上的紅字，暗色模式覆寫變亮 */
            --red-dark: color-mix(in srgb, #E11D48 70%, var(--text-primary));
            --red-light: color-mix(in srgb, #E11D48 12%, var(--surface));
            --text-dark: var(--text-primary);
            --text-gray: var(--text-secondary);
            --border-color: var(--border);
          }

          .dark {
            --red-ink: #F5A3B5;
            --red-light: color-mix(in srgb, #E11D48 24%, var(--surface));
          }

          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, var(--red-light) 0%, transparent 100%);
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

          .competition-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 24px;
            background: var(--card);
            border: 1px solid var(--border-color);
            border-radius: 100px;
            box-shadow: 0 8px 24px rgba(225, 29, 72, 0.15);
          }

          .badge-icon {
            color: var(--red-ink);
            display: flex;
            align-items: center;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 20px;
            font-weight: 800;
            color: var(--red-dark);
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




          .detail-value.highlight-red {
            color: var(--red-ink);
            font-size: 18px;
          }


          /* Content Sections */



          .text-center {
            text-align: center;
          }

          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: stretch;
          }




          .gray-box {
            background: var(--surface);
            padding: 40px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
          }

          .impact-tag {
            background: var(--surface-muted);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            color: var(--red-dark);
            border-left: 3px solid var(--red-ink);
          }

          .objective-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .objective-list li {
            position: relative;
            padding-left: 28px;
            font-size: 18px;
            line-height: 1.6;
            color: var(--text-gray);
          }

          .objective-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--red-ink);
            font-weight: bold;
            font-size: 18px;
          }

          /* Strategy Grid */
          .strategy-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .strategy-card {
            background: var(--card);
            padding: 40px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .strategy-card.highlight {
            border-color: var(--red-light);
            background: linear-gradient(135deg, var(--card) 0%, var(--red-light) 200%);
          }

          .strategy-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(225, 29, 72, 0.1);
          }

          .card-number {
            position: absolute;
            top: 24px;
            right: 32px;
            font-size: 64px;
            font-weight: 900;
            color: var(--red-light);
            opacity: 0.6;
            line-height: 1;
            pointer-events: none;
          }

          .card-icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: var(--red-primary);
            color: white;
            border-radius: 16px;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
          }

          .card-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
          }

          .card-text {
            font-size: 18px;
            line-height: 1.7;
            color: var(--text-gray);
            position: relative;
            z-index: 1;
          }

          /* App Mockup Grid */
          .badge-inline {
            display: inline-block;
            padding: 6px 16px;
            background: var(--red-light);
            color: var(--red-dark);
            border-radius: var(--radius-pill);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .app-mockup-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          .app-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          /* 新的介面圖是 1572px 寬的長截圖，沒有內建手機外框，這裡用 CSS 補上。
             機身色刻意用 primitive（不隨亮暗模式翻轉），手機本來就是深色的。 */
          .phone-mock {
            position: relative;
            width: 100%;
            padding: 8px;
            background: var(--ink-2);
            border-radius: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.18);
            margin-bottom: 24px;
            transition: transform 0.3s ease;
          }
          /* 比例掛在螢幕層而不是機身：機身有 aspect-ratio 時，
             內部 height:100% 會反過來把它撐開，五支手機就高矮不一。 */
          .phone-mock__screen {
            width: 100%;
            aspect-ratio: 9 / 19.5;
            border-radius: 23px;
            overflow: hidden;
            background: #fff;
          }
          /* 截圖比例從 0.35 到 0.46 不等，一律 cover 對齊頂端，露出每一頁的開頭 */
          .phone-mock__screen img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            display: block;
          }
          /* 瀏海 */
          .phone-mock::after {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 36%;
            height: 17px;
            background: var(--ink-2);
            border-radius: 0 0 11px 11px;
          }
          .app-screen:hover .phone-mock { transform: translateY(-8px); }

          .cover-figure {
            width: 100%;
            max-width: 820px;
            aspect-ratio: 1.55;
            margin: 0 auto 32px;
            border-radius: 8px;
            overflow: hidden;
          }
          .cover-figure img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }

          /* 圖16：競爭態勢簡報圖。原本滿版 1200px 太搶，縮到 780px 置中並可點擊放大 */
          .deck-figure {
            position: relative;
            width: 100%;
            max-width: 780px;
            margin: 24px auto 64px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            overflow: hidden;
            background: var(--card);
          }
          .deck-figure img { width: 100%; height: auto; display: block; }
          .interactive-image-area {
            cursor: zoom-in;
            transition: transform .3s ease, box-shadow .3s ease;
          }
          .interactive-image-area:hover {
            transform: scale(1.01);
            box-shadow: 0 16px 36px color-mix(in srgb, var(--text-primary) 16%, transparent);
          }
          .expand-hint {
            position: absolute;
            top: 16px; right: 16px;
            background-color: var(--card-glass);
            border: 1px solid var(--border);
            border-radius: var(--radius-pill);
            padding: 8px 12px;
            display: inline-flex; align-items: center; gap: 6px;
            color: var(--text-primary);
            font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.04em;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            opacity: 0.55;
            transition: opacity .2s ease, transform .2s ease;
          }
          .expand-hint__label { display: none; }
          .interactive-image-area:hover .expand-hint { opacity: 1; transform: scale(1.06); }
          .interactive-image-area:hover .expand-hint__label { display: inline; }

          .lightbox-overlay {
            position: fixed; inset: 0; z-index: 1000;
            background: rgba(12,12,12,.9);
            display: flex; align-items: center; justify-content: center;
            padding: 40px; cursor: zoom-out;
          }
          .lightbox-close {
            position: absolute; top: 24px; right: 24px;
            background: none; border: none; color: #fff; cursor: pointer;
          }
          .lightbox-content { max-width: 100%; max-height: 100%; cursor: default; }
          .lightbox-content img { max-width: 100%; max-height: 85vh; object-fit: contain; display: block; }

          .image-placeholder.mock-app {
            width: 100%;
            aspect-ratio: 9/19.5; /* Mobile screen ratio */
            background: var(--surface-muted);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px dashed var(--border);
          }

          .screen-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
          }

          .screen-desc {
            font-size: 18px;
            color: var(--text-gray);
            line-height: 1.5;
          }

          /* Impact Banner */
          /* 2026/09：原本是實色飽和底配白字，標題卻吃到深色而掉到 3.1:1。
             改成粉彩底加 ink 文字，色相保留、明度自適應，對比一次拉到 15:1 以上。 */
          .impact-banner {
            background: var(--red-light);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 64px 40px;
            color: var(--text-primary);
            text-align: center;
            position: relative;
            overflow: hidden;
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
            margin-bottom: 48px;
            position: relative;
            z-index: 1;
          }

          .metric-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .metric-icon {
            background: color-mix(in srgb, var(--red-primary) 14%, transparent);
            padding: 16px;
            border-radius: 50%;
            margin-bottom: 8px;
          }

          .metric-number {
            font-size: 48px;
            font-weight: 800;
            line-height: 1;
            color: var(--red-ink);
          }

          .metric-label {
            font-size: 15px;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          /* Responsive */
          @media (max-width: 959px) {
            .two-column-layout, .strategy-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .app-mockup-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 16px;
            }
            .metrics-row {
              gap: 32px;
            }
          }

          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .app-mockup-grid { grid-template-columns: 1fr 1fr; }
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