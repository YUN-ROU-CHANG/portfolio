import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { Award, Video, Globe, Headphones, Lightbulb, Target, Sparkles, Star } from 'lucide-react';

const timesPhotos = import.meta.glob(
  '../../assets/images/project/TimesYoungCreativeAwards/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const tp = Object.values(timesPhotos) as string[];

// 建立精準檔名呼叫工具
const getImage = (fileName: string) => {
  const fileLower = fileName.toLowerCase();
  const match = Object.entries(timesPhotos).find(([path]) => {
    const pathLower = path.toLowerCase();
    return pathLower.includes(`/${fileLower}.`);
  });
  return match ? (match[1] as string) : '';
};

const TIMES_LINKS = {
  interactive1: 'https://drive.google.com/file/d/1tAK-pT1JsNTdguIXp-6rlTL4tGcL9B2V/view?usp=drive_link',
  interactive2: 'https://drive.google.com/file/d/1nRYmki3bkBP8dyxMzaitHYM26Z4HBD39/view?usp=drive_link',
  video: 'https://drive.google.com/file/d/19tky-lxm0VNKvpGqx6ZeUFU0nlbiv6Dj/view?usp=drive_link',
  audio: 'https://drive.google.com/file/d/1hpx6270NeajjNjmzpO9KzY_jTY0fnBgY/view?usp=drive_link',
  youtube: 'https://youtube.com/playlist?list=PLye4rfClaePQK4OI4WEuNE9m2LrMKub_9&feature=shared',
};

export default function TimesAwards() {

  const [showTop, setShowTop] = useState(false);
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
      <div id="times-awards-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="hero-content"
            >
              {/* Award Badges */}
              <div className="award-badges-container">
                <div className="bronze-award-badge">
                  <div className="badge-icon">
                    <Award size={24} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">
                      {'🥉 3rd Place Winner'}
                    </div>
                    <div className="badge-subtitle">
                      {'Video Category - National'}
                    </div>
                  </div>
                </div>

                <div className="shortlist-badge">
                  <Star size={20} />
                  <span>{'✨ 3x Shortlisted Works'}</span>
                </div>
              </div>

              {/* Project Title */}
              <h1 className="hero-title">
                {'2025 34th Times Young Creative Awards'}
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle">
                {'Yung Ching Housing Employer Branding Campaign'}
              </p>

              {/* Project Details Grid - 修改為強制同一橫列 */}
              <div className="hero-details" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px' }}>
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">
                    {'Mar - May 2025'}
                  </span>
                  <span className="detail-sub">
                    {'Times Young Creative Awards'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">
                    {'Creative Strategy, Copywriting'}
                  </span>
                  <span className="detail-sub">
                    {'Multimedia Design'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Team'}</span>
                  <span className="detail-value">
                    {'4 Members'}
                  </span>
                  <span className="detail-sub">
                    Chi-Yun Chien, Po-Yu Chen, He-Chi Wang, Yun-Rou Chang
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Recognition'}</span>
                  <span className="detail-value bronze-highlight">
                    🥉 {'3rd Place'}
                  </span>
                  <span className="detail-sub">
                    + {'3 Shortlisted Works'}
                  </span>
                </div>
              </div>

              {/* Campaign Context */}
              <div className="campaign-context">
                <div className="context-icon">
                  <Sparkles size={24} />
                </div>
                <div className="context-content">
                  <h3 className="context-title">
                    {'Multi-Channel Employer Branding Campaign'}
                  </h3>
                  <p className="context-text">
                    {'A comprehensive campaign for Yung Ching Housing that reimagined job hunting as a "Career Gashapon" experience. The project won 3rd place nationally in the video category and had three additional works shortlisted across interactive and audio formats, demonstrating excellence in integrated creative strategy.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="overview-intro">
              <h2 className="section-heading">
                {'Core Concept'}
              </h2>
              <div className="concept-highlight-box">
                <div className="concept-icon-large">
                  <Lightbulb size={48} />
                </div>
                <div className="concept-text-content">
                  <h3 className="concept-quote">
                    {'"Job hunting is like a Gashapon (Capsule Toy)."'}
                  </h3>
                  <p className="concept-explanation">
                    {'We transformed the anxiety of job hunting into the anticipation and excitement of a capsule toy machine. Each "turn" represents a career choice, but unlike random luck, Yung Ching offers guaranteed value—making the metaphor both relatable and empowering.'}
                  </p>
                  <div className="concept-tagline">
                    <strong>{'Key Message:'}</strong>
                    {' "True value isn\'t luck, it\'s choosing a worthy partner."'}
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Overview */}
            <div className="campaign-stats">
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">{'Creative Works'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">{'Media Formats'}</div>
                <div className="stat-sub">{'Video, Web, Audio'}</div>
              </div>
              <div className="stat-card highlight">
                <div className="stat-number">1</div>
                <div className="stat-label">{'3rd Place Winner'}</div>
                <div className="stat-sub">{'+ 3 Shortlisted'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work 1: Career Festival (3rd Place Winner) */}
        <section className="content-section reveal work-section" style={{ background: 'linear-gradient(180deg, rgba(205,133,63,0.08) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="work-header">
              <div className="work-badge winner">
                <Award size={20} />
                <span>{'🥉 3rd Place Winner'}</span>
              </div>
              <h2 className="work-title">
                {'Work 1: "Career Festival" (轉職慶典)'}
              </h2>
              <div className="work-meta">
                <Video size={18} />
                <span>{'Video Advertisement'}</span>
              </div>
            </div>

            {/* 修改：移除 work-content 的 grid，改為 block 以實現全寬 */}
            <div className="work-content" style={{ display: 'block' }}>
              <div className="work-description">
                <h3 className="subsection-title">
                  {'Concept'}
                </h3>
                <p className="body-text">
                  {'The main video features a visually striking capsule machine designed for fresh graduates. Inside the transparent capsules are symbolic "career charms"—including "50k Guaranteed Salary" and "Freedom from Contracts." The film uses warm, inviting cinematography to contrast the cold reality of typical job hunting, positioning Yung Ching as a trustworthy partner rather than a gamble.'}
                </p>

                {/* 修改：上下互換並設定全寬 */}
                <div className="features-list">
                  <h4 className="features-title">{'Creative Elements'}</h4>
                  <ul>
                    <li>{'Physical capsule machine prop design'}</li>
                    <li>{'Symbolic "career charms" visual metaphor'}</li>
                    <li>{'Fresh graduate persona storytelling'}</li>
                    <li>{'Warm cinematography vs. cold job market contrast'}</li>
                  </ul>
                </div>

                <div className="key-message-box" style={{ width: '100%', marginTop: '32px' }}>
                  <h4 className="key-message-title">
                    {'Key Copy'}
                  </h4>
                  <blockquote className="key-copy">
                    {'"True value isn\'t luck, it\'s choosing a worthy partner."'}
                  </blockquote>
                </div>
              </div>

              {/* 移入原本在 Work 3 的影片圖片與全寬影片連結 */}
              <div className="work-visuals" style={{ marginTop: '48px' }}>
                <img src={getImage('job-transfer-celebration') || tp[0]} alt="Job Transfer Celebration" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '12px', marginBottom: '24px' }} />
                <a href={TIMES_LINKS.video} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '24px', border: '1px solid rgba(12,12,12,.12)', borderRadius: '12px', background: 'rgba(12,12,12,.02)', textDecoration: 'none', color: 'inherit', padding: '24px' }}>
                  <span style={{ fontSize: '48px' }}>🎬</span>
                  <div>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '18px', color: '#0C0C0C', marginBottom: '4px' }}>《轉動職涯》</div>
                    <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>Video Work ↗</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work 2: Career Takeoff (Shortlisted) */}
        <section className="content-section reveal work-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="work-header">
              <div className="work-badge shortlisted">
                <Star size={20} />
                <span>{'✨ Shortlisted'}</span>
              </div>
              <h2 className="work-title">
                {'Work 2: "Career Takeoff" (轉動職涯)'}
              </h2>
              <div className="work-meta">
                <Globe size={18} />
                <span>{'Web Interaction (Chatbot Style)'}</span>
              </div>
            </div>

            <div className="work-content">
              <div className="work-description">
                <h3 className="subsection-title">
                  {'Concept'}
                </h3>
                <p className="body-text">
                  {'An online interactive experience styled like a Line chatbot, where users "turn" a digital gashapon machine to receive "Career Subscription Passes"—a clever parody of Netflix\'s subscription model. Each "pass" unlocks different career benefits (training, mentorship, flexibility), gamifying the discovery of Yung Ching\'s employee value proposition.'}
                </p>

                <div className="key-message-box">
                  <h4 className="key-message-title">
                    {'Key Copy'}
                  </h4>
                  <blockquote className="key-copy">
                    {'"Subscribe to your career, not just a job."'}
                  </blockquote>
                </div>

                <div className="features-list">
                  <h4 className="features-title">{'Creative Elements'}</h4>
                  <ul>
                    <li>{'Netflix subscription parody (familiar UX pattern)'}</li>
                    <li>{'Gamified benefit discovery mechanic'}</li>
                    <li>{'Line chatbot-style conversational UI'}</li>
                    <li>{'Collectible "career passes" visual design'}</li>
                  </ul>
                </div>
              </div>

              {/* 移入原本在 Work 1 的 tp[1], tp[2], tp[3] (依照現在的陣列順序) */}
              <div className="work-visuals">
                <img src={tp[3]} alt="Work Visual" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '12px' }} />
                <div className="visual-grid">
                  <img src={tp[4]} alt="Visual detail 1" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '8px' }} />
                  <img src={tp[5]} alt="Visual detail 2" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '8px' }} />
                </div>
              </div>
                <div className="work-visuals" style={{ marginTop: '48px', gridColumn: '1 / -1' }}>
                  <a href={TIMES_LINKS.interactive1} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '24px', border: '1px solid rgba(12,12,12,.12)', borderRadius: '12px', background: 'rgba(12,12,12,.02)', textDecoration: 'none', color: 'inherit', padding: '24px' }}>
                    <span style={{ fontSize: '48px' }}>🌐</span>
                    <div>
                      <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '18px', color: '#0C0C0C', marginBottom: '6px' }}>《轉動職涯》</div>
                      <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>Interactive Web ↗</div>
                    </div>
                  </a>
                </div>
            </div>
          </div>
        </section>

        {/* Work 3: Job Personality Test (Shortlisted) */}
        <section className="content-section reveal work-section" style={{ background: 'linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="work-header">
              <div className="work-badge shortlisted">
                <Star size={20} />
                <span>{'✨ Shortlisted'}</span>
              </div>
              <h2 className="work-title">
                {'Work 3: "Job Personality Test" (工作不靠運)'}
              </h2>
              <div className="work-meta">
                <Globe size={18} />
                <span>{'Web Interaction / Psychology Test'}</span>
              </div>
            </div>

            {/* 修改：改為 block 實現全寬連結 */}
            <div className="work-content" style={{ display: 'block' }}>
              <div className="work-description">
                <h3 className="subsection-title">
                  {'Concept'}
                </h3>
                <p className="body-text">
                  {'A shareable personality test that flips the interview script: "Don\'t just ask the interviewer, ask yourself." Users discover their workplace persona through playful questions, receiving personalized insights that match them with Yung Ching\'s culture. The viral format drives organic traffic while educating candidates about self-awareness in career planning.'}
                </p>

                <div className="key-message-box">
                  <h4 className="key-message-title">
                    {'Key Copy'}
                  </h4>
                  <blockquote className="key-copy">
                    {'"Don\'t just ask the interviewer, ask yourself."'}
                  </blockquote>
                </div>

                <div className="features-list">
                  <h4 className="features-title">{'Creative Elements'}</h4>
                  <ul>
                    <li>{'Self-discovery narrative arc'}</li>
                    <li>{'Workplace persona matching algorithm'}</li>
                    <li>{'Shareable social results (viral mechanic)'}</li>
                    <li>{'Educational value proposition embedded'}</li>
                  </ul>
                </div>
              </div>

              {/* 移入原本在 Work 2 的互動連結 interactive2 */}
              <div className="work-visuals" style={{ marginTop: '48px' }}>
                <img src={tp[1]} alt="Psychological Test" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '12px', marginBottom: '24px' }} />
                <a href={TIMES_LINKS.interactive2} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '24px', border: '1px solid rgba(12,12,12,.12)', borderRadius: '12px', background: 'rgba(12,12,12,.02)', textDecoration: 'none', color: 'inherit', padding: '24px' }}>
                  <span style={{ fontSize: '48px' }}>🌐</span>
                  <div>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '18px', color: '#0C0C0C', marginBottom: '6px' }}>《工作不靠運，職涯選永慶》</div>
                    <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>Interactive Web ↗</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work 4: The Right Turn (Shortlisted) */}
        <section className="content-section reveal work-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="work-header">
              <div className="work-badge shortlisted">
                <Star size={20} />
                <span>{'✨ Shortlisted'}</span>
              </div>
              <h2 className="work-title">
                {'Work 4: "The Right Turn" (這一轉，選對了)'}
              </h2>
              <div className="work-meta">
                <Headphones size={18} />
                <span>{'Audio Advertisement'}</span>
              </div>
            </div>

            {/* 修改：使用 block 佈局並上下互換 Elements 與 Key Sound */}
            <div className="work-content" style={{ display: 'block' }}>
              <div className="work-description">
                <h3 className="subsection-title">
                  {'Concept'}
                </h3>
                <p className="body-text">
                  {'An audio-only experience that uses sound design to simulate the tactile anticipation of turning a gashapon machine. The "click-click-click" rhythm mimics a heartbeat, building tension before the satisfying "pop" of success. The script cleverly uses first-person narration to make listeners feel like they\'re making their own career choice in real-time.'}
                </p>

                <div className="features-list">
                  <h4 className="features-title">{'Creative Elements'}</h4>
                  <ul>
                    <li>{'Gashapon machine sound simulation'}</li>
                    <li>{'Heartbeat-synced rhythm (tension building)'}</li>
                    <li>{'First-person immersive narration'}</li>
                    <li>{'Audio-only storytelling (theater of the mind)'}</li>
                  </ul>
                </div>

                {/* Key Sound Design 設為全寬，放置於 Elements 下方 */}
                <div className="key-message-box" style={{ width: '100%', marginTop: '32px' }}>
                  <h4 className="key-message-title">
                    {'Key Sound Design'}
                  </h4>
                  <blockquote className="key-copy">
                    {'"Click-click-click... (heartbeat rhythm) ...POP! (career choice made)"'}
                  </blockquote>
                </div>
              </div>

              {/* 全寬音檔連結放置於最下方 */}
              <div className="work-visuals" style={{ marginTop: '48px' }}>
                <a href={TIMES_LINKS.audio} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', width: '100%', border: '1px solid rgba(12,12,12,.12)', borderRadius: '12px', background: 'rgba(12,12,12,.02)', textDecoration: 'none', color: 'inherit', padding: '24px' }}>
                  <span style={{ fontSize: '48px' }}>🎵</span>
                  <div>
                    <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '18px', color: '#0C0C0C', marginBottom: '6px' }}>《這一轉，選對了》</div>
                    <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>Audio Work · Click to Listen ↗</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 新增：完整作品播放清單 (獨立全寬區塊，放置於 Impact 上方) */}
        <section className="content-section reveal" style={{ padding: '40px 0' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <a href={TIMES_LINKS.youtube} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', width: '100%', border: '1px solid rgba(12,12,12,.12)', borderRadius: '12px', background: 'rgba(12,12,12,.02)', textDecoration: 'none', color: 'inherit', padding: '24px', transition: 'background 0.2s ease' }}>
              <span style={{ fontSize: '48px' }}>▶️</span>
              <div>
                <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '18px', color: '#0C0C0C', marginBottom: '6px' }}>《完整作品播放清單》</div>
                <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B6A62' }}>YouTube Playlist ↗</div>
              </div>
            </a>
          </div>
        </section>

        {/* Campaign Impact & Recognition */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="outcome-section">
              <div className="outcome-header">
                {/* 修正對齊：將 icon 與文字包在 flex 容器中 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
                  <Award size={48} color="#CD853F" />
                  <h2 className="section-heading" style={{ margin: 0 }}>
                    {'Campaign Impact & Recognition'}
                  </h2>
                </div>
                <p className="section-subheading">
                  {'National Recognition Across Multiple Formats'}
                </p>
              </div>

              <div className="outcome-grid">
                <div className="outcome-card featured bronze">
                  <div className="outcome-icon bronze-icon">
                    <Award size={50} />
                  </div>
                  <h3 className="outcome-title">
                    🥉 {'Times Awards 3rd Place'}
                  </h3>
                  <p className="outcome-text">
                    {'Won 3rd Place nationally in the Video Category for "Career Festival," recognized among hundreds of submissions for creative excellence and strategic messaging in employer branding.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Star size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'Multi-Format Success'}
                  </h3>
                  <p className="outcome-text">
                    {'Three additional works shortlisted across Interactive and Audio categories, demonstrating versatility in creative execution and integrated campaign thinking.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Target size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'Strategic Creativity'}
                  </h3>
                  <p className="outcome-text">
                    {'Successfully balanced playful metaphor ("Gashapon") with serious employer value proposition, making recruitment messaging both memorable and effective.'}
                  </p>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="takeaways-section">
                <h3 className="takeaways-title">
                  {'Creative Insights'}
                </h3>
                <div className="takeaways-grid">
                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Metaphor as Strategy'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'The "Gashapon" metaphor wasn\'t decoration—it was a strategic device to reframe job hunting anxiety as playful anticipation.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Integrated Storytelling'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'A single concept ("Career Gashapon") was adapted across 4 formats (video, web, audio), proving the power of flexible creative platforms.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Empowerment Over Promotion'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'The campaign prioritized candidate self-awareness and empowerment ("ask yourself") over hard-sell tactics, building trust and brand affinity.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Page Styles */}
        <style>{`
          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          /* Award Badges Container */
          .award-badges-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
          }

          /* Bronze Award Badge */
          .bronze-award-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #CD853F 0%, #B8860B 100%);
            border-radius: var(--radius-lg);
            box-shadow: 0 8px 32px rgba(205, 133, 63, 0.4);
            animation: bronze-pulse 3s ease-in-out infinite;
          }

          @keyframes bronze-pulse {
            0%, 100% { 
              box-shadow: 0 8px 32px rgba(205, 133, 63, 0.4);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 12px 48px rgba(205, 133, 63, 0.6);
              transform: scale(1.02);
            }
          }

          .badge-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: #fff;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 18px;
            font-weight: 800;
            color: #fff;
            line-height: 1.2;
            letter-spacing: 0.5px;
          }

          .badge-subtitle {
            font-size: 14px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
            margin-top: 4px;
          }

          /* Shortlist Badge */
          .shortlist-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            border-radius: var(--radius-lg);
            font-size: 14px;
            font-weight: 700;
            color: hsl(var(--g1));
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 22px);
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 48px;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-muted);
          }

          .detail-value {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .detail-value.bronze-highlight {
            font-size: 16px;
            color: #CD853F;
            font-weight: 700;
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Campaign Context */
          .campaign-context {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            margin-top: 48px;
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .context-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .context-content {
            flex: 1;
          }

          .context-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .context-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-muted);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--color-text-muted);
            margin-bottom: 32px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-muted);
            margin-bottom: 24px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 1000px;
            margin: 0 auto 64px;
          }

          /* Concept Highlight Box */
          .concept-highlight-box {
            display: flex;
            align-items: flex-start;
            gap: 32px;
            padding: 48px;
            background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08));
            border: 2px solid hsl(var(--g3)/.2);
            border-radius: var(--radius-lg);
            text-align: left;
            margin-top: 32px;
          }

          .concept-icon-large {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 96px;
            height: 96px;
            background: linear-gradient(135deg, hsl(var(--g3)), hsl(var(--g4)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .concept-text-content {
            flex: 1;
          }

          .concept-quote {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.3;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .concept-explanation {
            font-size: 16px;
            line-height: 1.7;
            color: var(--color-text-muted);
            margin-bottom: 16px;
          }

          .concept-tagline {
            padding: 16px;
            background: rgba(255, 255, 255, 0.6);
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-sm);
            font-size: 15px;
            line-height: 1.6;
            color: var(--md-on-surface);
          }

          /* Campaign Stats */
          .campaign-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          .stat-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .stat-card.highlight {
            background: linear-gradient(135deg, rgba(205,133,63,0.08), rgba(184,134,11,0.08));
            border: 2px solid rgba(205,133,63,0.3);
          }

          .stat-number {
            font-size: 56px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 12px;
          }

          .stat-card.highlight .stat-number {
            background: linear-gradient(135deg, #CD853F, #B8860B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .stat-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 4px;
          }

          .stat-sub {
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Work Sections */
          .work-section {
            position: relative;
          }

          .work-header {
            margin-bottom: 40px;
          }

          .work-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: var(--radius-md);
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .work-badge.winner {
            background: linear-gradient(135deg, #CD853F, #B8860B);
            color: #fff;
          }

          .work-badge.shortlisted {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            color: hsl(var(--g1));
          }

          .work-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .work-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-muted);
          }

          /* Work Content */
          .work-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          .work-description {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .subsection-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Key Message Box */
          .key-message-box {
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
          }

          .key-message-title {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: hsl(var(--g1));
            margin-bottom: 12px;
          }

          .key-copy {
            font-size: 18px;
            font-weight: 600;
            font-style: italic;
            line-height: 1.5;
            color: var(--md-on-surface);
            margin: 0;
          }

          /* Features List */
          .features-list {
            margin-top: 24px;
          }

          .features-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .features-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .features-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 24px;
            position: relative;
          }

          .features-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
            font-weight: 700;
          }

          /* Work Visuals */
          .work-visuals {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .visual-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.video-main {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.video-frame {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 4 / 3;
          }

          .image-placeholder.web-ui {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 9 / 16;
          }

          .image-placeholder.ui-detail {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.personality-test {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
            aspect-ratio: 9 / 16;
          }

          .image-placeholder.test-result {
            background: linear-gradient(135deg, #f1f8e9, #dcedc8);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.audio-visual {
            background: linear-gradient(135deg, #fce4ec, #f8bbd0);
            aspect-ratio: 16 / 6;
          }

          .image-placeholder.sound-design {
            background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
            aspect-ratio: 4 / 3;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Outcome Section */
          .outcome-section {
            text-align: center;
          }

          .outcome-header {
            max-width: 700px;
            margin: 0 auto 48px;
          }

          .outcome-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 64px;
          }

          .outcome-card {
            padding: 40px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .outcome-card.featured {
            grid-column: span 3;
            padding: 56px 32px;
          }

          .outcome-card.featured.bronze {
            background: linear-gradient(135deg, rgba(205,133,63,0.08), rgba(184,134,11,0.08));
            border: 2px solid rgba(205,133,63,0.3);
          }

          .outcome-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .outcome-icon.bronze-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #CD853F, #B8860B);
            color: #fff;
          }

          .outcome-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .outcome-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Takeaways */
          .takeaways-section {
            margin-top: 64px;
          }

          .takeaways-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 32px;
          }

          .takeaways-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .takeaway-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .takeaway-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .takeaway-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Reveal Animation */
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
            .work-content,
            .campaign-stats,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .concept-highlight-box,
            .campaign-context {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .visual-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .award-badges-container {
              width: 100%;
            }

            .bronze-award-badge {
              flex-direction: column;
              text-align: center;
              width: 100%;
            }

            .shortlist-badge {
              flex-direction: column;
              text-align: center;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .bronze-award-badge {
              transition: none !important;
              transform: none !important;
              animation: none !important;
            }

            .reveal {
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

    </Layout>
  );
}