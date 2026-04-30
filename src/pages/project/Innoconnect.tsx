import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import {
  Award, Target, Users, Sparkles, TrendingUp, Gift,
  Heart, BarChart3, CheckCircle2, ExternalLink, Activity, Box, Maximize2, X
} from 'lucide-react';

// 動態載入所有圖片
const innoconnectPhotos = import.meta.glob(
  '../../assets/images/project/innoconnect/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

// 建立一個 Helper Function 讓你可以直接用檔名呼叫圖片
const getImage = (fileName: string) => {
  // 轉換為小寫，並確保精準匹配檔名（例如 /sus. 不會抓到 /sus-chart.）
  const fileLower = fileName.toLowerCase();
  const match = Object.entries(innoconnectPhotos).find(([path]) => {
    const pathLower = path.toLowerCase();
    return pathLower.includes(`/${fileLower}.`);
  });
  return match ? (match[1] as string) : '';
};

export default function Innoconnect() {
  const [showTop, setShowTop] = useState(false);
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
      <div id="innoconnect-page">
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
                <div className="gold-award-badge">
                  <div className="badge-icon">
                    <Award size={28} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">{'🏆 Gold Award Winner'}</div>
                    <div className="badge-subtitle">{'1st Place / 186 Teams'}</div>
                  </div>
                </div>
              </div>

              <h1 className="hero-title">{'Innoconnect | Hi-Life Gift Service Optimization'}</h1>
              <p className="hero-subtitle">{'Revitalizing the Digital Gifting Experience for a Major Taiwanese Retail Chain'}</p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">{'Oct 2024 - Mar 2025'}</span>
                  <span className="detail-sub">{'InnoConnect+ Competition'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">{'UI/UX Designer & Researcher'}</span>
                  <span className="detail-sub">{'Team "Lai Yi Ka" (萊一咖) of 3 members'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Achievement'}</span>
                  <span className="detail-value achievement-gold">🏆 {'Gold Award'}</span>
                  <span className="detail-sub">{'Selected from 186 Teams'}</span>
                </div>
              </div>

              <div className="competition-context">
                <div className="context-icon"><Sparkles size={24} /></div>
                <div className="context-content">
                  <h3 className="context-title">{'InnoConnect+ 2024 Challenge'}</h3>
                  <p className="context-text">
                    {'Selected as the Gold Award winner among 186 competing teams in the 2024 InnoConnect+ Competition, this project reimagined Hi-Life\'s "Send a Gift" (來送禮) O2O service through strategic gamification and social features that drove measurable increases in user engagement and conversion rates.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="overview-intro">
              <h2 className="section-heading">{'Project Overview'}</h2>
              <p className="body-text-large">
                {'Hi-Life, one of Taiwan\'s largest convenience store chains, operates a "Send a Gift" (來送禮) service that allows customers to send gifts through their stores. Despite the convenience, the service suffered from low awareness, complex user flows, and punitive policies that discouraged repeat usage. Our mission was to transform this underutilized service into a compelling social gifting platform.'}
              </p>
            </div>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon"><Award size={40} /></div>
                <div className="metric-number">1 / 186</div>
                <div className="metric-label">{'Gold Award Winner'}</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon"><TrendingUp size={40} /></div>
                <div className="metric-number">90%</div>
                <div className="metric-label">{'Positive User Ratings (SUS)'}</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon"><Users size={40} /></div>
                <div className="metric-number">A-grade</div>
                <div className="metric-label">{'Top 37% scored A-level usability'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Target size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">{'The Challenge'}</h3>
              </div>

              <div className="two-column-layout">
                <div className="column-content">
                  <h4 className="highlight-title">{'Why Wasn\'t Hi-Life\'s Gift Service Succeeding?'}</h4>
                  <p className="body-text">
                    {'Through comprehensive user research and competitive analysis, we identified three critical pain points preventing the "Send a Gift" service from reaching its potential. These issues created friction at every stage of the user journey, from awareness to post-purchase experience.'}
                  </p>
                  <div className="challenge-list">
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Low Awareness:'}</strong>
                        <span>{' Most users were unaware the service existed. Marketing was minimal, leading to poor traffic and conversion.'}</span>
                      </div>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Complex User Flow:'}</strong>
                        <span>{' The gifting process required multiple steps, excessive form inputs, and lacked clear visual guidance.'}</span>
                      </div>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Punitive Policy:'}</strong>
                        <span>{' If a gift expired unclaimed, users had to pay the price difference to redeem it—discouraging gifting altogether.'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column-media" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="image-wrapper shadow-box bg-white" style={{ flexGrow: 1, padding: '16px' }}>
                    <img src={getImage('problems')} alt="Problems Analysis" className="full-contain-img" />
                  </div>
                </div>
              </div>

              <div className="insight-card full-width">
                <h4 className="insight-title">{'Key Insight'}</h4>
                <p className="insight-text">
                  {'Users want gifting to feel spontaneous, social, and risk-free—not transactional and complex.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Strategy */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Sparkles size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">{'The Strategy: Gamification + Social Gifting'}</h3>
              </div>
              <p className="body-text" style={{ marginBottom: '40px' }}>
                {'We devised a two-pronged approach: attract new users through viral gamified marketing, then convert them into active gifters through social features and simplified flows.'}
              </p>

              <div className="strategy-pillars">
                <div className="pillar-card">
                  <div className="pillar-content-top">
                    <div className="pillar-number">01</div>
                    <h4 className="pillar-subtitle">{'Gamified Marketing'}</h4>
                  </div>
                  <div className="pillar-image-wrapper shadow-box bg-white">
                    <img src={getImage('psychological-test-results')} alt="Psychological Test Results" />
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-content-top">
                    <div className="pillar-number">02</div>
                    <h4 className="pillar-subtitle">{'Social Gifting Features'}</h4>
                  </div>
                  <div className="pillar-image-wrapper shadow-box bg-white">
                    <img src={getImage('wish-page-2')} alt="Wishlist Feature" />
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-content-top">
                    <div className="pillar-number">03</div>
                    <h4 className="pillar-subtitle">{'Flow Optimization'}</h4>
                  </div>
                  <div className="pillar-image-wrapper shadow-box bg-white">
                    <img src={getImage('gift-recommadation')} alt="Gift Recommendation" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lean Canvas */}
        <section className="content-section reveal" style={{ background: '#fdfbf7' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection text-center">
              <div className="subsection-header justify-center">
                <Activity size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">{'Evaluating the Business Value and Future Feasibility for Hi-Life (Lean Canvas)'}</h3>
              </div>
              <div
                className="visual-showcase shadow-box interactive-image-area"
                style={{ padding: '24px', background: '#fff', marginTop: '32px' }}
                onClick={() => setLightboxImage(getImage('lean-canvas'))}
              >
                <img src={getImage('lean-canvas')} alt="Lean Canvas" className="full-contain-img" />
                <div className="expand-hint">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution #1: Psychological Test */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Sparkles size={24} color="hsl(var(--g3))" />
                <h3 className="subsection-title">{'Solution #1: Psychological Test (心理測驗)'}</h3>
              </div>

              <div className="solution-explanation">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                  <div style={{ flex: '1 1 600px' }}>
                    <h4 className="highlight-title">{'Driving Traffic Through Viral Gamification'}</h4>
                    <p className="body-text">
                      {'We created a personality-driven psychological test that matches users with coffee flavors based on their traits. This shareable, fun experience serves as a low-friction entry point to the gifting service, turning casual browsers into engaged users.'}
                    </p>
                  </div>
                  <a href="https://ooopenlab.cc/quiz/7b8AWHtQhsr7S0hhQA0b" target="_blank" rel="noreferrer" className="primary-link-btn">
                    {'Play the Quiz'} <ExternalLink size={18} />
                  </a>
                </div>

                <div className="feature-highlights">
                  <div className="feature-item"><CheckCircle2 size={20} color="hsl(var(--g3))" /><span>{'Personality-to-product matching algorithm'}</span></div>
                  <div className="feature-item"><CheckCircle2 size={20} color="hsl(var(--g3))" /><span>{'Social sharing hooks (viral loop)'}</span></div>
                  <div className="feature-item"><CheckCircle2 size={20} color="hsl(var(--g3))" /><span>{'Seamless transition to product purchase'}</span></div>
                </div>
              </div>

              <div className="image-grid-3">
                <div className="image-wrapper shadow-box bg-white p-4"><img src={getImage('psychological-test')} alt="Psychological Test 1" /></div>
                <div className="image-wrapper shadow-box bg-white p-4"><img src={getImage('psychological-test-mockup-process')} alt="Psychological Test Process" /></div>
                <div className="image-wrapper shadow-box bg-white p-4"><img src={getImage('psychological-test-results')} alt="Psychological Test Results" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution #2: Wishlist & Social Gifting */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Heart size={24} color="hsl(var(--g4))" />
                <h3 className="subsection-title">{'Solution #2: Wishlist & Social Gifting (許願池)'}</h3>
              </div>

              <div className="solution-explanation">
                <h4 className="highlight-title">{'Turning Gifting Into a Social Activity'}</h4>
                <p className="body-text">
                  {'The Wishlist feature allows users to create and share gift requests with friends. Instead of guessing what someone wants, senders can browse their friends\' wishlists and send meaningful gifts. Recipients can also send interactive gift cards, increasing engagement and virality.'}
                </p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon"><Gift size={32} /></div>
                    <h5 className="feature-title">{'Personal Wishlist'}</h5>
                    <p className="feature-text">{'Users curate gift requests that friends can easily fulfill.'}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon"><Users size={32} /></div>
                    <h5 className="feature-title">{'Friend Discovery'}</h5>
                    <p className="feature-text">{'Browse wishlists of friends and discover gift opportunities.'}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon"><Sparkles size={32} /></div>
                    <h5 className="feature-title">{'Interactive Cards'}</h5>
                    <p className="feature-text">{'Recipients send shareable gift cards to encourage friends to send gifts.'}</p>
                  </div>
                </div>
              </div>

              <div className="visual-showcase shadow-box" style={{ padding: '32px', background: '#fdfbf7' }}>
                <img src={getImage('wish-and-card-customization')} alt="Wishlist & Card Customization" className="full-contain-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Solution #3: Flow Optimization & Policy Changes */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <TrendingUp size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">{'Solution #3: Flow Optimization & Policy Changes'}</h3>
              </div>

              <div className="solution-explanation">
                <h4 className="highlight-title">{'Removing Friction, Eliminating Penalties'}</h4>
                <p className="body-text">
                  {'We completely redesigned the gifting flow, focusing on the core value propositions for both givers and receivers, whilst optimizing offline delivery and point refund mechanisms to create a frictionless O2O experience.'}
                </p>
              </div>

              <h4 className="highlight-title" style={{ marginTop: '48px' }}>{'Value Proposition Canvas'}</h4>
              <div className="two-column-layout" style={{ marginBottom: '48px' }}>
                <div
                  className="image-wrapper shadow-box bg-white interactive-image-area"
                  style={{ padding: '24px', flexDirection: 'column' }}
                  onClick={() => setLightboxImage(getImage('value-proposition-canvas-giver'))}
                >
                  <h5 className="text-center font-bold mb-4">送禮者 (Giver)</h5>
                  <img src={getImage('value-proposition-canvas-giver')} alt="Value Proposition Giver" className="full-contain-img" />
                  <div className="expand-hint">
                    <Maximize2 size={20} />
                  </div>
                </div>
                <div
                  className="image-wrapper shadow-box bg-white interactive-image-area"
                  style={{ padding: '24px', flexDirection: 'column' }}
                  onClick={() => setLightboxImage(getImage('value-proposition-canvas-receive'))}
                >
                  <h5 className="text-center font-bold mb-4">收禮者 (Receiver)</h5>
                  <img src={getImage('value-proposition-canvas-receive')} alt="Value Proposition Receiver" className="full-contain-img" />
                  <div className="expand-hint">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              {/* Service Blueprint */}
              <h4 className="highlight-title">{'Service Blueprint'}</h4>
              <div
                className="visual-showcase shadow-box bg-white p-4 interactive-image-area"
                onClick={() => setLightboxImage(getImage('service-blueprint'))}
              >
                <img src={getImage('service-blueprint')} alt="Service Blueprint" className="full-contain-img" />
                <div className="expand-hint">
                  <Maximize2 size={20} />
                </div>
              </div>

              <div className="two-column-layout" style={{ marginTop: '48px' }}>
                {/* Offline Delivery */}
                <div className="column-content">
                  <div className="section-header-sm">
                    <Box size={24} color="hsl(var(--g1))" />
                    <h4 className="highlight-title mb-0">{'Offline Delivery Service (Lai-Song-Li)'}</h4>
                  </div>
                  <p className="body-text">
                    {'We proposed a new delivery platform service, "Lai-Song-Li", which delivers "Send a Gift" items directly to recipients, significantly reducing their time cost. Givers enjoy discounted shipping rates, or they can opt for Hi-Life\'s partnered logistics (such as Taiwan Pelican Express and HCT Logistics) for diverse delivery options.'}
                  </p>
                  <div
                    className="image-wrapper shadow-box bg-white p-4 mt-4 interactive-image-area"
                    onClick={() => setLightboxImage(getImage('flowchart-shipping'))}
                  >
                    <img src={getImage('flowchart-shipping')} alt="Offline Shipping Flowchart" />
                    <div className="expand-hint">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>

                {/* Points Refund */}
                <div className="column-content">
                  <div className="section-header-sm">
                    <TrendingUp size={24} color="hsl(var(--g1))" />
                    <h4 className="highlight-title mb-0">{'Gifting Mechanism Optimization (Points Refund)'}</h4>
                  </div>
                  <p className="body-text">
                    {'For expired and unclaimed gifts, we eliminated the punitive policy that required users to pay the price difference. Instead, we implemented a mechanism to "refund equivalent member points to the user\'s account." This optimization not only relieves the givers\' anxieties but also leverages the rule that the app must be downloaded to use points, effectively boosting the app\'s open and retention rates.'}
                  </p>
                  <div
                    className="image-wrapper shadow-box bg-white p-4 mt-4 interactive-image-area"
                    onClick={() => setLightboxImage(getImage('Expected-price-difference-chart'))}
                  >
                    <img src={getImage('Expected-price-difference-chart')} alt="Price Difference Optimization" />
                    <div className="expand-hint">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation: Usability Testing */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <BarChart3 size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">{'Validation: Usability Testing (SUS & UEQ)'}</h3>
              </div>

              <div className="validation-explanation">
                <p className="body-text">
                  {'We conducted comprehensive usability testing using the System Usability Scale (SUS) and User Experience Questionnaire (UEQ) to measure the impact of our redesign. The results confirmed significant improvements in user willingness, satisfaction, and overall experience.'}
                </p>
              </div>

              <div className="visual-showcase shadow-box mb-8" style={{ padding: '16px', background: '#fff' }}>
                <img src={getImage('sus+ueq')} alt="SUS and UEQ Overview" className="full-contain-img" />
              </div>

              <div className="testing-results-1col">
                <div className="result-card sus-card">
                  <div className="result-header">
                    <h5 className="result-title">{'System Usability Scale (SUS)'}</h5>
                  </div>
                  <p className="body-text" style={{ fontSize: '16px', marginBottom: '24px' }}>
                    {'90% of participants gave positive ratings; 37% scored in the highest grade (A-level). Low-scoring users cited slight complexity and a learning curve.'}
                  </p>
                  <div className="flex-col-gap-large">
                    <div className="image-wrapper shadow-box p-4 bg-white">
                      <img src={getImage('sus-chart')} alt="SUS Chart" className="full-contain-img" />
                    </div>
                    <div className="image-wrapper shadow-box p-4 bg-white">
                      <img src={getImage('sus')} alt="SUS Details" className="full-contain-img" />
                    </div>
                  </div>
                </div>

                <div className="result-card ueq-card" style={{ marginTop: '48px' }}>
                  <div className="result-header">
                    <h5 className="result-title">{'User Experience Questionnaire (UEQ)'}</h5>
                  </div>
                  <p className="body-text" style={{ fontSize: '16px', marginBottom: '24px' }}>
                    {'Attractiveness & Enjoyment ranked highest. Functionality scored above average with room for improvement. Overall UX rated at "Good" level.'}
                  </p>
                  <div className="image-wrapper shadow-box p-4 bg-white" style={{ height: 'auto' }}>
                    <img src={getImage('ueq')} alt="UEQ Results" className="full-contain-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome & Recognition */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="outcome-section">
              {/* 確保這個區塊的 Icon 和標題完全垂直置中對齊 */}
              <div
                className="outcome-header mx-auto"
                style={{
                  maxWidth: '700px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  marginBottom: '16px'
                }}
              >
                <Award size={48} color="hsl(var(--g1))" style={{ flexShrink: 0 }} />
                <h2 className="section-heading" style={{ margin: 0, lineHeight: 1 }}>
                  {'Recognition & Impact'}
                </h2>
              </div>
              <p className="section-subheading text-center mx-auto mb-12" style={{ maxWidth: '700px' }}>
                {'Gold Award Winner & Measurable Business Impact'}
              </p>

              <div className="outcome-grid">
                <div className="outcome-card featured">
                  <div className="outcome-icon gold-icon"><Award size={50} /></div>
                  <h3 className="outcome-title">🏆 {'InnoConnect+ Gold Award'}</h3>
                  <p className="outcome-text">
                    {'Selected as the 1st place winner among 186 competing teams in the 2024 InnoConnect+ Competition. The judges recognized the project\'s strategic gamification, user-centered design, and measurable impact on conversion metrics.'}
                  </p>
                </div>
                <div className="outcome-card">
                  <div className="outcome-icon"><TrendingUp size={40} /></div>
                  <h3 className="outcome-title">{'Increased User Engagement'}</h3>
                  <p className="outcome-text">{'The psychological test campaign and wishlist features drove meaningful improvements in user acquisition intent and gifting motivation across tested participants.'}</p>
                </div>
                <div className="outcome-card">
                  <div className="outcome-icon"><BarChart3 size={40} /></div>
                  <h3 className="outcome-title">{'Validated by Research'}</h3>
                  <p className="outcome-text">{'SUS scores ranged from 57.5 to 95 (n=19), with 90% of participants giving positive ratings and 37% reaching A-level usability.'}</p>
                </div>
              </div>

              <div className="award-images-grid mt-12">
                <div className="image-wrapper shadow-box bg-white p-4">
                  <img src={getImage('InnoConnect+award-prove')} alt="InnoConnect+ Award Proof" className="full-contain-img" />
                </div>
                <div className="image-wrapper shadow-box bg-white p-4">
                  <img src={getImage('awards-report')} alt="Awards Report" className="full-contain-img" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CSS Styles */}
        <style>{`
          /* === Basic Setup === */
          .full-contain-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
          }
          .image-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: var(--radius-lg);
            position: relative;
          }
          .shadow-box {
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            border: 1px solid rgba(0,0,0,0.05);
          }
          .bg-white { background: #ffffff; }
          .p-4 { padding: 16px; }
          .mb-0 { margin-bottom: 0px !important; }
          .mb-4 { margin-bottom: 16px; }
          .mb-8 { margin-bottom: 32px; }
          .mb-12 { margin-bottom: 48px; }
          .mt-4 { margin-top: 16px; }
          .mt-12 { margin-top: 48px; }
          .text-center { text-align: center; }
          .font-bold { font-weight: 700; }
          .justify-center { justify-content: center; }
          .items-center { align-items: center; }
          .flex { display: flex; }
          .gap-3 { gap: 12px; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .flex-col-gap-large { display: flex; flex-direction: column; gap: 32px; height: 100%; }

          /* Lightbox */
          .lightbox-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
          .lightbox-close { position: absolute; top: 20px; right: 20px; color: white; background: rgba(255,255,255,0.1); border: none; padding: 10px; border-radius: 50%; cursor: pointer; }
          .lightbox-content { max-width: 90%; max-height: 90%; }
          .lightbox-content img { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; }
          
          /* Interactive Image Styling & Expand Hint */
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

          /* Award Images Grid */
          .award-images-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }

          .primary-link-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: hsl(var(--g1));
            color: #fff;
            font-weight: 600;
            border-radius: 100px;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .primary-link-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          }

          /* === Key Insight Full Width === */
          .insight-card.full-width {
            width: 100%;
            margin-top: 32px;
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08));
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-lg);
            text-align: center;
          }
          .insight-card.full-width .insight-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }
          .insight-card.full-width .insight-text {
            font-size: 18px;
            color: var(--color-text-muted);
            font-weight: 500;
          }

          /* === Pillar Cards specific === */
          .strategy-pillars {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
          .pillar-card {
            background: transparent;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .pillar-content-top {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .pillar-subtitle {
            font-size: 18px;
            font-weight: 800;
            color: var(--md-on-surface);
            margin: 0;
          }
          .pillar-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            font-size: 16px;
            font-weight: 800;
            color: #fff;
            background: hsl(var(--g1));
            border-radius: 8px;
          }
          .pillar-image-wrapper {
            flex-grow: 1;
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            height: 280px; /* 固定高度讓三個卡片對齊 */
          }
          .pillar-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          /* === 3-Col Image Grid === */
          .image-grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          /* === Testing Results 1-Column === */
          .testing-results-1col {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-top: 32px;
          }
          .result-card {
            padding: 40px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }
          .result-header { margin-bottom: 24px; }
          .result-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--md-on-surface);
            border-left: 4px solid hsl(var(--g2));
            padding-left: 16px;
          }

          /* === Original Layout Styles Retained === */
          .hero-section { padding: 120px 0 80px; background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%); }
          .hero-content { text-align: center; max-width: 900px; margin: 0 auto; }
          .award-badge-container { display: flex; justify-content: center; margin-bottom: 32px; }
          .gold-award-badge { display: flex; align-items: center; gap: 16px; padding: 16px 32px; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); border-radius: var(--radius-lg); box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4); animation: gold-pulse 3s ease-in-out infinite; }
          @keyframes gold-pulse { 0%, 100% { box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4); transform: scale(1); } 50% { box-shadow: 0 12px 48px rgba(255, 215, 0, 0.6); transform: scale(1.02); } }
          .badge-icon { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; background: rgba(0, 0, 0, 0.1); border-radius: 50%; color: #000; }
          .badge-title { font-size: 18px; font-weight: 800; color: #000; }
          .badge-subtitle { font-size: 14px; font-weight: 600; color: rgba(0, 0, 0, 0.7); }
          .hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.1; color: var(--md-on-surface); margin-bottom: 24px; }
          .hero-subtitle { font-size: clamp(18px, 2vw, 22px); line-height: 1.6; color: var(--color-text-muted); margin-bottom: 48px; }
          .hero-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(0,0,0,0.06); }
          .detail-item { text-align: center; display: flex; flex-direction: column; gap: 6px; }
          .detail-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); }
          .detail-value { font-size: 15px; font-weight: 600; color: var(--md-on-surface); }
          .detail-value.achievement-gold { color: #FFA500; font-size: 16px; }
          .detail-sub { font-size: 13px; color: var(--color-text-muted); }
          .competition-context { display: flex; align-items: flex-start; gap: 24px; padding: 32px; margin-top: 48px; background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08)); border-left: 4px solid hsl(var(--g1)); border-radius: var(--radius-lg); text-align: left; }
          .context-icon { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); border-radius: 50%; color: #fff; flex-shrink: 0; }
          .context-title { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
          .content-section { padding: 80px 0; }
          .section-heading { font-size: clamp(32px, 4vw, 48px); font-weight: 700; margin-bottom: 16px; }
          .body-text { font-size: 16px; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 24px; }
          .body-text-large { font-size: 20px; line-height: 1.7; font-weight: 500; margin-bottom: 48px; }
          .overview-intro { text-align: center; max-width: 900px; margin: 0 auto 64px; }
          .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .metric-card { padding: 32px 24px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-lg); text-align: center; }
          .metric-icon { display: inline-flex; width: 64px; height: 64px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 16px; color: hsl(var(--g1)); }
          .metric-number { font-size: 36px; font-weight: 800; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; }
          .subsection { margin-bottom: 64px; }
          .subsection-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
          .subsection-title { font-size: 28px; font-weight: 600; }
          .two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
          .challenge-list { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
          .challenge-item { display: flex; align-items: flex-start; gap: 12px; }
          .challenge-bullet { width: 8px; height: 8px; border-radius: 50%; margin-top: 8px; flex-shrink: 0; background: hsl(var(--g3)); }
          .challenge-bullet.problem { background: #ef4444; }
          .challenge-item div { font-size: 15px; line-height: 1.6; color: var(--color-text-muted); }
          .highlight-title { font-size: 20px; font-weight: 600; margin-bottom: 12px; }
          .feature-highlights { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
          .feature-item { display: flex; align-items: flex-start; gap: 12px; }
          .feature-item span { font-size: 15px; line-height: 1.6; color: var(--color-text-muted); }
          .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 32px; }
          .feature-card { padding: 24px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-lg); text-align: center; }
          .feature-icon { display: inline-flex; width: 64px; height: 64px; background: linear-gradient(135deg, hsl(var(--g4)/.1), hsl(var(--g1)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 16px; color: hsl(var(--g4)); }
          .outcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 64px; }
          .outcome-card { padding: 40px 24px; background: rgba(255,255,255,0.95); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius-lg); text-align: center; }
          .outcome-card.featured { grid-column: span 3; background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.08)); border: 2px solid rgba(255,215,0,0.3); padding: 56px 32px; }
          .outcome-icon { display: inline-flex; width: 80px; height: 80px; background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1)); border-radius: 50%; align-items: center; justify-content: center; margin-bottom: 24px; color: hsl(var(--g1)); }
          .outcome-icon.gold-icon { width: 100px; height: 100px; background: linear-gradient(135deg, #FFD700, #FFA500); color: #000; }
          
          .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s; }
          .reveal.in { opacity: 1; transform: translateY(0); }

          /* Responsive */
          @media (max-width: 959px) {
            .metrics-grid, .two-column-layout, .strategy-pillars, .feature-grid, .image-grid-3, .outcome-grid { grid-template-columns: 1fr; }
            .outcome-card.featured { grid-column: span 1; }
            .pillar-image-wrapper { height: auto; }
            .award-images-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 640px) {
            .hero-section { padding: 100px 0 60px; }
            .content-section { padding: 60px 0; }
            .gold-award-badge { flex-direction: column; text-align: center; }
            .result-card { padding: 24px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .reveal, .gold-award-badge { transition: none !important; transform: none !important; animation: none !important; opacity: 1; }
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