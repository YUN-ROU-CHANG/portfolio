import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { 
  Trophy, Database, Target, TrendingUp, 
  Smartphone, Activity, Lightbulb, Users, 
  Crosshair, Repeat, Layers
} from 'lucide-react';


const bigDataPhotos = import.meta.glob(
  '../../assets/images/project/BigDataMarketingCup/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const bp = Object.values(bigDataPhotos) as string[];

export default function BigDataMarketingCup() {
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
      <div id="big-data-cup-page">
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
                    <div className="badge-title">{'Bronze Award (3rd Place)'}</div>
                    <div className="badge-subtitle">{'2024 Big Data Precision Marketing Cup'}</div>
                  </div>
                </div>
              </div>
              
              <h1 className="hero-title">
                {'Breaking Boundaries: Market Strategy & App Design for T-Ham'}
              </h1>
              
              <p className="hero-subtitle">
                {'Leveraging big data analytics to identify plant-based protein market gaps, and designing a gamified digital touchpoint (T-Ham Fitness App) to drive user retention and subscription revenue.'}
              </p>

              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Client / Brand'}</span>
                  <span className="detail-value">{'T-Ham (台畜)'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">{'Market Researcher & UI/UX Designer'}</span>
                  <span className="detail-sub">{'Data Analysis, App Prototyping'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Project Scope'}</span>
                  <span className="detail-value">{'GTM Strategy & Product Design'}</span>
                  <span className="detail-sub">{'Soy Protein Product Line'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 var(--space-4)'}}>
          <img src={bp[6]} alt="Big Data Marketing Cup Cover"
            loading="lazy"
            style={{width:'100%',height:'auto',borderRadius:'8px',display:'block',marginBottom:'32px'}} />
        </div>

        {/* The Challenge & Market Context */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="two-column-layout">
              <div className="column-content">
                <div className="section-header-sm">
                  <Target size={24} color="var(--red-primary)" />
                  <h2 className="section-heading-sm">{'The Business Challenge'}</h2>
                </div>
                <p className="body-text">
                  {'T-Ham, a legacy meat processing giant, sought to penetrate the booming high-protein market. Our challenge was to utilize big data (EICP database) to discover an untapped consumer need and design a differentiated product with a complete Go-To-Market (GTM) strategy.'}
                </p>
                <div className="impact-tag" style={{ marginTop: '24px', display: 'inline-block' }}>
                  {'Goal: Launch a high-protein product & build brand loyalty'}
                </div>
              </div>

              <div className="column-content gray-box">
                <div className="section-header-sm">
                  <Database size={24} color="var(--red-primary)" />
                  <h2 className="section-heading-sm">{'Data-Driven Insights (EICP)'}</h2>
                </div>
                <ul className="objective-list">
                  <li><strong>{'Plant-Based Potential:'}</strong> {'Identified high growth potential in Soy Protein, aligning closely with Taiwanese consumer dietary habits.'}</li>
                  <li><strong>{'Physical Channel Persona:'}</strong> {'30-39 young professionals prioritize service and are willing to pay a premium for high value.'}</li>
                  <li><strong>{'Online Channel Persona:'}</strong> {'20-29 university students & fresh graduates are price-sensitive and highly responsive to discount incentives.'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

<img src={bp[0]} alt="Competitor Analysis"
              loading="lazy"
              style={{width:'100%',height:'auto',borderRadius:'8px',border:'1px solid rgba(12,12,12,.08)',display:'block',marginTop:'24px'}} />

        {/* Strategy Grid */}
        <section className="content-section reveal" style={{ background: '#FFF1F2' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">{'Omnichannel & Retention Strategy'}</h2>
              <p className="section-subheading">{'Transforming data insights into actionable product and marketing execution.'}</p>
            </div>

            <div className="strategy-grid">
              <div className="strategy-card">
                <div className="card-number">01</div>
                <div className="card-icon-wrapper"><Lightbulb size={28} /></div>
                <h3 className="card-title">{'Product Positioning'}</h3>
                <p className="card-text">
                  {'Introduced a new '}<strong>{'Soy Protein Powder'}</strong>{' line to differentiate from T-Ham\'s traditional meat products, catering to the rising demand for plant-based alternatives and lactose-intolerant consumers.'}
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">02</div>
                <div className="card-icon-wrapper"><Crosshair size={28} /></div>
                <h3 className="card-title">{'Differentiated O2O Pricing'}</h3>
                <p className="card-text">
                  {'Implemented a dual-channel pricing strategy. Premium pricing with value-added services for physical retail (targeting 30-39 yrs), and aggressive bundle discounts for online channels (targeting 20-29 yrs).'}
                </p>
              </div>

              <div className="strategy-card">
                <div className="card-number">03</div>
                <div className="card-number-alt" style={{ display: 'none' }}>03</div>
                <div className="card-icon-wrapper"><Repeat size={28} /></div>
                <h3 className="card-title">{'Subscription Model'}</h3>
                <p className="card-text">
                  {'Designed a short-term marketing thrust focusing on a subscription service, ensuring recurring revenue and lowering the barrier to entry for long-term health commitments.'}
                </p>
              </div>

              <div className="strategy-card highlight">
                <div className="card-number">04</div>
                <div className="card-icon-wrapper"><Smartphone size={28} /></div>
                <h3 className="card-title">{'Digital Ecosystem (App)'}</h3>
                <p className="card-text">
                  {'Proposed the '}<strong>{'T-Ham Fitness App'}</strong>{' as a mid-to-long-term strategy. Utilizing Gamification (Octalysis Framework) to build a fitness community and a robust customer loyalty program.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Touchpoint: App UI Design */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <div className="badge-inline">{'UI/UX Design'}</div>
              <h2 className="section-heading" style={{ marginTop: '16px' }}>{'T-Ham Fitness App'}</h2>
              <p className="section-subheading" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {'Translating the subscription business model and gamification strategy into an intuitive, engaging mobile interface designed for young fitness enthusiasts.'}
              </p>
            </div>

            {/* App Screens Grid */}
            <div className="app-mockup-grid">
              {/* Screen 1: Start Page */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP start page.png" /> */}
                  <img src={bp[5]} alt="App Start Page" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{'Onboarding'}</h4>
                <p className="screen-desc">{'Brand introduction and energetic start screen.'}</p>
              </div>

              {/* Screen 2: Home */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP home.jpg" /> */}
                  <img src={bp[1]} alt="App Home" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{'Dashboard'}</h4>
                <p className="screen-desc">{'Quick access to daily nutrition tracking and goals.'}</p>
              </div>

              {/* Screen 3: Plan */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP plan.jpg" /> */}
                  <img src={bp[3]} alt="App Plan" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{'Subscription Plans'}</h4>
                <p className="screen-desc">{'Clear, tiered O2O product subscription options.'}</p>
              </div>

              {/* Screen 4: Social */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP social.jpg" /> */}
                  <img src={bp[4]} alt="App Social" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{'Community Hub'}</h4>
                <p className="screen-desc">{'Gamified fitness challenges and peer engagement.'}</p>
              </div>

              {/* Screen 5: Personal Page */}
              <div className="app-screen">
                <div className="screen-frame">
                  {/* Replace this placeholder with <img src="/path/to/台畜健身APP personal page.jpg" /> */}
                  <img src={bp[2]} alt="App Personal Page" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <h4 className="screen-title">{'User Profile'}</h4>
                <p className="screen-desc">{'Loyalty rewards, achievements, and order management.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quantifiable Impact & Conclusion */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="impact-banner">
              <div className="banner-content">
                <h2 className="banner-title">{'Business Impact & Recognition'}</h2>
                <div className="metrics-row">
                  <div className="metric-box">
                    <div className="metric-icon"><Trophy size={40} color="white" /></div>
                    <div className="metric-number">{'3rd'}</div>
                    <div className="metric-label">{'Place Overall (Bronze)'}</div>
                  </div>
                  <div className="metric-box">
                    <div className="metric-icon"><Layers size={40} color="white" /></div>
                    <div className="metric-number">{'O2O'}</div>
                    <div className="metric-label">{'Integrated Channel Strategy'}</div>
                  </div>
                </div>
                <p className="banner-footer-text">
                  {'The judging panel specifically commended the proposal for its seamless integration of robust EICP data analysis with a highly viable, modern digital product solution, proving the commercial readiness of the GTM strategy.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          :root {
            --red-primary: #E11D48;      /* Energetic Red */
            --red-dark: #9F1239;
            --red-light: #FFE4E6;
            --text-dark: #0F172A;
            --text-gray: #475569;
            --border-color: #E2E8F0;
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
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 100px;
            box-shadow: 0 8px 24px rgba(225, 29, 72, 0.15);
          }

          .badge-icon {
            color: var(--red-primary);
            display: flex;
            align-items: center;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 16px;
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

          .detail-value.highlight-red {
            color: var(--red-primary);
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
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: 18px;
            line-height: 1.6;
            color: var(--text-gray);
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

          .impact-tag {
            background: #F1F5F9;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            color: var(--red-dark);
            border-left: 3px solid var(--red-primary);
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
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-gray);
          }

          .objective-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--red-primary);
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
            background: #ffffff;
            padding: 40px;
            border-radius: 20px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .strategy-card.highlight {
            border-color: var(--red-light);
            background: linear-gradient(135deg, #ffffff 0%, var(--red-light) 200%);
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
            font-size: 15px;
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
            border-radius: 20px;
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

          .screen-frame {
            width: 100%;
            border-radius: 24px;
            padding: 8px;
            background: #ffffff;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            margin-bottom: 24px;
            transition: transform 0.3s ease;
          }

          .app-screen:hover .screen-frame {
            transform: translateY(-8px);
          }

          .image-placeholder.mock-app {
            width: 100%;
            aspect-ratio: 9/19.5; /* Mobile screen ratio */
            background: #F1F5F9;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px dashed #CBD5E1;
          }

          .screen-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
          }

          .screen-desc {
            font-size: 13px;
            color: var(--text-gray);
            line-height: 1.5;
          }

          /* Impact Banner */
          .impact-banner {
            background: var(--red-primary);
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
            background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%);
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
            background: rgba(255,255,255,0.2);
            padding: 16px;
            border-radius: 50%;
            margin-bottom: 8px;
          }

          .metric-number {
            font-size: 48px;
            font-weight: 800;
            line-height: 1;
            text-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }

          .metric-label {
            font-size: 15px;
            font-weight: 600;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .banner-footer-text {
            max-width: 800px;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.6;
            color: rgba(255,255,255,0.9);
            font-style: italic;
            position: relative;
            z-index: 1;
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
            .content-section { padding: 60px 0; }
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