import { useEffect, useRef, useState, type CSSProperties } from 'react';
import mePng from '../assets/images/Me.webp';
import Layout from '../components/Layout';
import TypeIn from '../components/TypeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Lightbulb, Target, Heart, Rocket, Monitor, Bike } from 'lucide-react';
import { Link } from 'react-router';

// ─── 引入 My Strengths 會用到的 5 張背景圖片 ───
import experimentNotion from '../assets/images/experiment-notion.webp';
import awardsReport from '../assets/images/awards-report.webp';
import figmaImg from '../assets/images/figma.webp';
import codingImg from '../assets/images/coding.webp';
import crossFunctional from '../assets/images/cross-functional.webp';

// ─── Off the clock 用圖 ───
import photographyCover from '../assets/images/photography/photography-cover.webp';
import concertImg from '../assets/images/home/concert.webp';
import vibeCodingImg from '../assets/images/home/vibe-coding.webp';
// 運動三連拍。兩張騎車的構圖幾乎一樣，所以把獨木舟排中間隔開重複感。
import cycling1 from '../assets/images/off-clock/cycling-1.webp';
import kayakImg from '../assets/images/off-clock/kayak.webp';
import cycling2 from '../assets/images/off-clock/cycling-2.webp';

export default function About() {
  const { t, locale } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  // 帶 locale：切語言若讓任何 .reveal 節點重建，observer 會跟著重新掛上去，
  // 不會留下永遠看不見的區塊。
  useRevealOnScroll([locale]);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2026/08：原 /play 頁的三張卡搬進 About 收尾，改成橫向編輯式列表。
  // link 為 null 的列不可點（純生活註記，不邀請點擊）。
  // id 必須是與語言無關的固定值：拿 t() 當 React key 的話，切語言會讓整組 li
  // 重新掛載成新節點，而 reveal 的 observer 只認得 mount 當下的節點，
  // 新節點永遠拿不到 .in，整段會停在 opacity 0（就是之前中文全白的原因）。
  const offClockItems = [
    {
      id: 'photography',
      image: photographyCover,
      title: t('about.offClock.photography.title'),
      desc: t('about.offClock.photography.desc'),
      label: t('about.offClock.photography.label'),
      link: '/photography',
    },
    {
      id: 'piano',
      image: concertImg,
      title: t('about.offClock.piano.title'),
      desc: t('about.offClock.piano.desc'),
      label: null,
      link: null,
    },
    {
      id: 'vibeCoding',
      image: vibeCodingImg,
      title: t('about.offClock.vibeCoding.title'),
      desc: t('about.offClock.vibeCoding.desc'),
      label: t('about.offClock.vibeCoding.label'),
      link: '/how-i-built-this',
    },
  ];

  const sportsPhotos = [
    { src: cycling1, alt: t('about.offClock.sports.alt1') },
    { src: kayakImg, alt: t('about.offClock.sports.alt2') },
    { src: cycling2, alt: t('about.offClock.sports.alt3') },
  ];

  return (
    <Layout>
      <div id="about-page">
        {/* Section 1: Hero Intro — Portrait Tile + Skill Matrix */}
        <section style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 2.2vw, 32px)' }}>
            <div className="about-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'stretch' }}>

              {/* ── Left: Portrait Tile ── */}
              <div style={{ position: 'relative', border: '1px solid var(--border-strong)', background: 'var(--surface)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '14px' }}>
                  <span>{t('about.dossier.subject')}</span>
                  <span>{t('about.dossier.file')}</span>
                </div>
                <div style={{ flex: '1 1 auto', minHeight: '320px', overflow: 'hidden', background: 'var(--surface-muted)', position: 'relative' }}>
                  <img
                    src={mePng}
                    alt={t('about.dossier.photoAlt')}
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.basedLabel')}</span>{t('about.dossier.basedValue')}</div>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.programLabel')}</span>{t('about.dossier.programValue')}</div>
                  <div><span style={{ color: 'var(--text-primary)', marginRight: '4px' }}>{t('about.dossier.langLabel')}</span>{t('about.dossier.langValue')}</div>
                </div>
              </div>

              {/* ── Right: Bio + Skill Matrix ── */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 28px', textTransform: 'uppercase', color: 'var(--accent-text)' }}>
                  <TypeIn
                    key={locale}
                    charMs={locale === 'zh' ? 80 : 40}
                    segments={[
                      { text: `${t('about.intro.line1')} ` },
                      { text: '/', style: { color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 400, margin: '0 .06em' } },
                      { text: locale === 'zh' ? ` ${t('about.intro.line2')}` : ` ${t('about.intro.line2')} ` },
                      { text: t('about.intro.line2Em'), highlight: true },
                    ]}
                  />
                </h3>

                {/* 行寬不設 max-width，換行點交給欄位邊界，跟 Home hero 同一套處理 */}
                <p className="about-intro-p">{t('about.intro.p1')}</p>
                <p className="about-intro-p about-intro-p--lede">{t('about.intro.p2')}</p>

                {/* Highlights：不用 emoji，改用全站既有的 mono 標籤語彙；
                    項目符號是 CSS 畫的 acid 直條，不用 ❙ 這種跨字型會歪掉的字元。 */}
                <p className="text-meta-style about-hl-label">{t('about.highlights.label')}</p>
                <ul className="about-hl">
                  {[1, 2, 3].map(i => (
                    <li key={i}>
                      <strong>{t(`about.highlights.h${i}label`)}</strong>
                      {t(`about.highlights.h${i}text`)}
                    </li>
                  ))}
                </ul>

                <p className="about-intro-p about-intro-p--last">{t('about.intro.p3')}</p>
              </div>

              {/* Skill Matrix — 橫跨兩欄。原本擠在右欄裡，左欄照片下方因此空一大塊，
                  而技能表只拿得到 ~700px，標籤被迫換成很多行。攤成整排之後
                  左欄的空洞消失，表格也少掉幾行，整頁變短。 */}
              <div style={{ gridColumn: '1 / -1', marginTop: '8px', border: '1px solid var(--border-strong)' }}>
                  {[
                    // 分類與標籤對照 15 份 JD 的高頻關鍵字重排。hot（acid 底）留給
                    // JD 出現次數最高、而 Rose 又真的有實績的四項：
                    // Design System（7 份 JD 提到，最高頻）、Figma 的 Auto Layout/Variables、
                    // 易用性測試、生成式 AI 工作流。
                    { cat: t('about.skills.catResearch'), skills: [{ label: t('about.skills.usability'), hot: true }, { label: t('about.skills.abtest') }, { label: t('about.skills.spss'), lvl: t('about.skills.lvlAdv') }, { label: t('about.skills.interviews') }, { label: t('about.skills.survey') }, { label: t('about.skills.counterbalancing') }, { label: t('about.skills.mixed') }] },
                    { cat: t('about.skills.catSystem'), skills: [{ label: t('about.skills.designSystem'), hot: true }, { label: t('about.skills.figma'), hot: true }, { label: t('about.skills.tokens') }, { label: t('about.skills.ia') }, { label: t('about.skills.rwd') }, { label: t('about.skills.a11y') }] },
                    { cat: t('about.skills.catBuild'), skills: [{ label: t('about.skills.react') }, { label: t('about.skills.reactNative') }, { label: t('about.skills.htmlcss') }, { label: t('about.skills.prototype') }, { label: t('about.skills.spec') }, { label: t('about.skills.motion') }] },
                    { cat: t('about.skills.catStrategy'), skills: [{ label: t('about.skills.genai'), hot: true }, { label: t('about.skills.serviceDesign') }, { label: t('about.skills.productStrategy') }, { label: t('about.skills.facilitation') }, { label: t('about.skills.marketingOps') }] },
                  ].map(({ cat, skills }, gi, arr) => (
                    <div key={cat} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', borderBottom: gi < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ padding: '18px 16px', borderRight: '1px solid var(--border)', background: 'var(--surface)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                        {cat}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 16px', alignItems: 'center' }}>
                        {skills.map(({ label, hot, lvl }: { label: string; hot?: boolean; lvl?: string }) => (
                          <span key={label}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', padding: '6px 10px', border: '1px solid var(--border-strong)', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: hot ? 'var(--accent)' : 'transparent', color: hot ? 'var(--on-accent)' : 'inherit', cursor: 'default', transition: 'background .2s, color .2s' }}
                            onMouseEnter={e => { if (!hot) { (e.currentTarget as HTMLElement).style.background = 'var(--surface-inverse)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent-on-inverse)'; } }}
                            onMouseLeave={e => { if (!hot) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'inherit'; } }}
                          >
                            {label}{lvl && <span style={{ fontSize: '9px', opacity: .6 }}>{lvl}</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: My Strengths (Bento Grid + 漸層遮罩) ─── */}
        <section className="section" id="about-strengths" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
              <Lightbulb size={32} color="var(--accent-text)" />{t('about.strengths.heading')}</h2>

            <div className="bento-grid" ref={strengthsRef}>

              {/* Card 1: Rigorous Research (Dark Theme) */}
              <div className="bento-card bento-dark reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={experimentNotion} alt={t('about.strengths.research.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-dark"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-dark">{t('about.strengths.research.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.research.titleLine1')}<br />{t('about.strengths.research.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.research.desc')}</p>
                  <div className="bento-stats-row mt-auto">
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">48</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat1a')}<br />{t('about.strengths.research.stat1b')}</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×5</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat2a')}<br />{t('about.strengths.research.stat2b')}</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num highlight-acid">×2</span>
                      <span className="bento-stat-label">{t('about.strengths.research.stat3a')}<br />{t('about.strengths.research.stat3b')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Insight to Gold */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={awardsReport} alt={t('about.strengths.awards.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-amber">{t('about.strengths.awards.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.awards.titleLine1')}<br />{t('about.strengths.awards.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.awards.desc')}</p>
                  <div className="bento-badge-row mt-auto">
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge1')}</span>
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge2')}</span>
                    <span className="bento-badge badge-award">{t('about.strengths.awards.badge3')}</span>
                  </div>
                </div>
              </div>

              {/* Card 3: UI Design */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={figmaImg} alt={t('about.strengths.uiDesign.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light-blur"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-teal">{t('about.strengths.uiDesign.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.uiDesign.titleLine1')}<br />{t('about.strengths.uiDesign.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.uiDesign.desc')}</p>
                  <div className="bento-pill-stack mt-auto">
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill1')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill2')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill3')}</span>
                    <span className="bento-pill">{t('about.strengths.uiDesign.pill4')}</span>
                  </div>
                </div>
              </div>

              {/* Card 4: AI-Augmented */}
              <div className="bento-card bento-light reveal" style={{ '--reveal-delay': '240ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={codingImg} alt={t('about.strengths.ai.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-light"></div>
                </div>
                <div className="bento-content">
                  <span className="bento-tag tag-blue">{t('about.strengths.ai.tag')}</span>
                  <h3 className="bento-title">{t('about.strengths.ai.titleLine1')}<br />{t('about.strengths.ai.titleLine2')}</h3>
                  <p className="bento-sub">{t('about.strengths.ai.desc')}</p>
                </div>
              </div>

              {/* Card 5: Cross-Functional (Wide) */}
              <div className="bento-card bento-light bento-card--wide reveal" style={{ '--reveal-delay': '320ms' } as CSSProperties}>
                <div className="bento-bg">
                  <img src={crossFunctional} alt={t('about.strengths.crossFunc.imgAlt')} loading="lazy" />
                  <div className="bento-overlay overlay-wide"></div>
                </div>
                <div className="bento-content bento-content--row">
                  <div className="content-left">
                    <span className="bento-tag tag-gray">{t('about.strengths.crossFunc.tag')}</span>
                    <h3 className="bento-title">{t('about.strengths.crossFunc.titleLine1')}<br />{t('about.strengths.crossFunc.titleLine2')}</h3>
                    <p className="bento-sub" style={{ maxWidth: '400px' }}>{t('about.strengths.crossFunc.desc')}</p>
                  </div>
                  <div className="content-right mt-auto">
                    <div className="bento-mini-grid">
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">110+</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat1a')}<br />{t('about.strengths.crossFunc.statManaged')}</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">60</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat2a')}<br />{t('about.strengths.crossFunc.stat2b')}</div>
                      </div>
                      <div className="bento-mini-stat">
                        <div className="mini-stat-num">3</div>
                        <div className="mini-stat-label">{t('about.strengths.crossFunc.stat3a')}<br />{t('about.strengths.crossFunc.statManaged')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: My Values - 3 Card Grid */}
        <section className="section" id="about-values" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
              <Heart size={32} color="var(--accent-text)" />{t('about.values.heading')}</h2>

            <div className="about-values-grid" ref={valuesRef}>
              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '0ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Target size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.clarity.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.clarity.lead')}</strong>{' '}{t('about.values.clarity.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '80ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Rocket size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.curiosity.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.curiosity.lead')}</strong>{' '}{t('about.values.curiosity.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '160ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Heart size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.resilience.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.resilience.lead')}</strong>{' '}{t('about.values.resilience.desc')}</p>
                </div>
              </div>

              <div className="gframe reveal" style={{ height: '100%', '--reveal-delay': '240ms' } as CSSProperties}>
                <div className="card glass" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Monitor size={24} color="var(--accent-text)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.4', color: 'var(--text-primary)' }}>{t('about.values.hardware.title')}</h3>
                  <p className="body muted" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>{t('about.values.hardware.lead')}</strong>{' '}{t('about.values.hardware.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Off the clock — 橫向編輯式列表，收尾註腳的層級，字級刻意比 Values 小一階 */}
        <section className="section" id="about-offclock" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Bike size={32} color="var(--accent-text)" aria-hidden="true" />{t('about.offClock.heading')}</h2>
            <p className="offclock-sub reveal">{t('about.offClock.sub')}</p>

            <ul className="offclock-list">
              {offClockItems.map((item, i) => {
                const inner = (
                  <>
                    <div className="offclock-thumb">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className="offclock-body">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      {item.label && <span className="offclock-label">{item.label}</span>}
                    </div>
                  </>
                );
                return (
                  <li key={item.id} className="reveal" style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}>
                    {item.link
                      ? <Link className="offclock-row offclock-row--link" to={item.link}>{inner}</Link>
                      : <div className="offclock-row">{inner}</div>}
                  </li>
                );
              })}

              {/* 運動列：三張直式照片橫排，沒有 h3。段落大標已經交代過情境，
                  再給一個同級標題會變成第二個章節，所以只留一行 mono 圖說。 */}
              <li className="reveal" style={{ '--reveal-delay': '240ms' } as CSSProperties}>
                <div className="offclock-row offclock-row--photos">
                  <div className="offclock-photos">
                    {sportsPhotos.map(photo => (
                      <div key={photo.src} className="offclock-photo">
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <span className="offclock-caption">{t('about.offClock.sports.caption')}</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ─── 專屬 CSS 樣式 (Bento Grid + 漸層遮罩方案 A) ─── */}
        <style>{`
          /* === Base === */
          .mt-auto { margin-top: auto; }

          /* === Intro 文字 ===
             刻意不設 max-width：換行點交給右欄的邊界，跟 Home hero 同一套做法。
             右欄約 700px，16px 內文一行約 85 字元，仍在可讀範圍。 */
          .about-intro-p {
            font-size: 16px;
            line-height: 1.7;
            color: var(--text-primary);
            margin: 0 0 16px;
          }
          .about-intro-p--lede {
            font-size: clamp(17px, 1.3vw, 19px);
            font-weight: 500;
            line-height: 1.5;
            margin-bottom: 32px;
          }
          .about-intro-p--last { margin: 28px 0 0; color: var(--text-secondary); }

          .about-hl-label { color: var(--text-tertiary); margin: 0 0 14px; }

          .about-hl { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
          .about-hl li {
            position: relative;
            padding-left: 18px;
            font-size: 15.5px;
            line-height: 1.7;
            color: var(--text-secondary);
          }
          /* acid 直條取代 ❙ 字元：跨字型不會歪，螢幕閱讀器也不會念出奇怪的符號 */
          .about-hl li::before {
            content: '';
            position: absolute;
            left: 0; top: .45em; bottom: .3em;
            width: 3px; border-radius: 2px;
            background: var(--accent);
          }
          .about-hl li strong {
            display: block;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 2px;
          }
          
          /* Hero Section Animations */
          @keyframes spinSlow { to { transform: rotate(360deg); } }
          
          .section-head {
            font-size: clamp(28px, 4vw, 48px);
            font-weight: 700;
            /* 2026/08：章節標題從 acid-ink 芥末褐改為 ink。
               acid 只留在標題左側的圖示上，符合「acid 只當強調、不當文字色」。 */
            color: var(--text-primary);
            margin-bottom: 32px;
          }

          /* === 🍱 My Strengths: Bento Grid === */
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          /* Card Base */
          .bento-card {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
            min-height: 380px;
            display: flex;
            flex-direction: column;
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          }

          .bento-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(0,0,0,0.12);
            border-color: rgba(0, 0, 0, 0.15);
          }

          .bento-card--wide {
            grid-column: 1 / -1;
          }

          /* Background Image & Hover Zoom */
          .bento-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
          }
          
          .bento-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .bento-card:hover .bento-bg img {
            transform: scale(1.08);
          }

          /* === Glass Overlays (方案 A：漸層遮罩) === */
          .bento-overlay {
            position: absolute;
            inset: 0;
            transition: all 0.4s ease;
          }
          
          /* Dark Card Overlay (Research at Scale) - 左上重，右下輕 */
          .overlay-dark {
            background: linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(12, 12, 12, 0.75) 45%, rgba(12, 12, 12, 0.1) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-dark {
            background: linear-gradient(135deg, rgba(12, 12, 12, 0.92) 0%, rgba(12, 12, 12, 0.6) 45%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Light Card Overlay (Standard) - 左上重，右下輕 */
          .overlay-light {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 45%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-light {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Light Card Blurrier (For complex Figma BG) */
          .overlay-light-blur {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 55%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(4px);
          }
          .bento-card:hover .overlay-light-blur {
            background: linear-gradient(135deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 50%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Wide Card Overlay (Cross Functional) - 左重，右輕 */
          .overlay-wide {
            background: linear-gradient(90deg, color-mix(in srgb, var(--background) 98%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 45%, color-mix(in srgb, var(--background) 15%, transparent) 100%);
            backdrop-filter: blur(3px);
          }
          .bento-card:hover .overlay-wide {
            background: linear-gradient(90deg, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 68%, transparent) 45%, transparent 100%);
            backdrop-filter: blur(0px);
          }

          /* Content Wrapper */
          .bento-content {
            position: relative;
            z-index: 1;
            padding: 36px;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .bento-content--row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            gap: 24px;
          }

          /* Typography & Colors inside Bento */
          .bento-light { color: var(--text-primary); }
          
          /* 增強 Dark Card 的文字陰影，保證純白與易讀性 */
          .bento-dark .bento-title {
            color: var(--bone);
            text-shadow: 0 2px 8px rgba(0,0,0,0.6);
          }
          .bento-dark .bento-sub {
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 1px 4px rgba(0,0,0,0.5);
          }
          .bento-dark .bento-stat-label {
            color: rgba(255, 255, 255, 0.85);
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          }

          .bento-title {
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin: 16px 0 12px;
          }

          .bento-sub {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-tertiary);
            margin: 0;
            font-weight: 500;
          }

          /* Tags */
          .bento-tag {
            display: inline-flex;
            align-items: center;
            font-family: var(--font-mono);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 100px;
            align-self: flex-start;
          }

          .tag-dark { background: rgba(255,255,255,0.15); color: var(--bone); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); }
          .tag-amber { background: color-mix(in srgb, var(--acid) 45%, var(--surface)); color: var(--accent-text); }
          .tag-teal { background: var(--surface-subtle); color: var(--text-secondary); }
          .tag-blue { background: color-mix(in srgb, var(--acid) 22%, var(--surface)); color: var(--accent-text); }
          .tag-gray { background: var(--surface); color: var(--text-secondary); border: 1px solid var(--border); }

          /* Stats Row (Card 1) */
          .bento-stats-row {
            display: flex;
            gap: 32px;
          }
          .bento-stat { display: flex; flex-direction: column; }
          .bento-stat-num {
            font-family: var(--font-display);
            font-size: 40px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 4px;
            text-shadow: 0 2px 6px rgba(0,0,0,0.4);
          }
          .highlight-acid { color: var(--acid); }
          .bento-stat-label {
            font-size: 12px;
            line-height: 1.4;
          }

          /* Badge Row (Card 2) */
          .bento-badge-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .bento-badge {
            font-size: 12px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 100px;
            border: 1px solid var(--border);
            background: color-mix(in srgb, var(--background) 72%, transparent);
            color: var(--text-primary);
            backdrop-filter: blur(4px);
          }

          /* Pill Stack (Card 3) */
          .bento-pill-stack {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .bento-pill {
            font-family: var(--font-mono);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 6px 12px;
            border-radius: 4px;
            background: color-mix(in srgb, var(--background) 62%, transparent);
            border: 1px solid var(--border);
            color: var(--text-primary);
            backdrop-filter: blur(4px);
          }

          /* Mini Grid (Card 5 Wide) */
          .bento-mini-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            background: color-mix(in srgb, var(--background) 66%, transparent);
            padding: 24px;
            border-radius: 16px;
            border: 1px solid var(--border);
            backdrop-filter: blur(4px);
          }
          .bento-mini-stat { text-align: center; }
          .mini-stat-num {
            font-family: var(--font-display);
            font-size: 36px;
            font-weight: 700;
            color: var(--accent-text);
            line-height: 1;
            margin-bottom: 6px;
          }
          .mini-stat-label {
            font-size: 12px;
            color: var(--text-tertiary);
            line-height: 1.4;
            font-weight: 500;
          }

          /* === My Values === */
          .about-values-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .card.glass {
            background: color-mix(in srgb, var(--background) 75%, transparent);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
          }

          /* === 🚲 Off the clock: 橫向編輯式列表 ===
             刻意比 Values 輕一階：無卡片、無陰影，只有 hairline 分隔線。
             有連結的列才有 hover 態；鋼琴那列是純生活註記，不邀請點擊。 */
          .offclock-sub {
            font-size: 16px;
            line-height: 1.7;
            color: var(--text-secondary);
            margin: 0 0 40px;
            max-width: 52ch;
          }

          /* 列表收在 880px：分隔線跟著文字一起結束，右邊不會空掉三分之一，
             內文行長也自然落在 65 到 75 字元，不必再用 max-width 硬切段落。 */
          .offclock-list { list-style: none; margin: 0; padding: 0; max-width: 880px; }
          .offclock-list > li { border-top: 1px solid var(--border); }
          .offclock-list > li:last-child { border-bottom: 1px solid var(--border); }

          .offclock-row {
            display: grid;
            grid-template-columns: 220px minmax(0, 1fr);
            gap: 28px;
            align-items: center;
            padding: 24px 0;
            color: inherit;
            text-decoration: none;
          }
          .offclock-thumb {
            aspect-ratio: 4 / 3;
            overflow: hidden;
            background: var(--surface-muted);
            border: 1px solid var(--border);
          }
          .offclock-thumb img {
            width: 100%; height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .6s cubic-bezier(.2,.8,.2,1);
          }
          .offclock-body { display: flex; flex-direction: column; gap: 8px; }
          .offclock-body h3 {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.35;
            margin: 0;
            color: var(--text-primary);
          }
          .offclock-body p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--text-secondary);
            margin: 0;
          }
          .offclock-label {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--accent-text);
            margin-top: 4px;
          }
          /* 運動列：跨滿整個列表寬度的三連拍，跟前三列的左圖右文形成節奏變化。
             用 1:1 而非 3:4，因為三張裡有橫有直：橫式那張裁成 3:4 會切掉半張臉，
             且可用區域只剩 499×666，在 2 倍螢幕上會糊。方形對兩種方向都成立。 */
          .offclock-row--photos { display: block; }
          .offclock-photos {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .offclock-photo {
            aspect-ratio: 1 / 1;
            overflow: hidden;
            background: var(--surface-muted);
            border: 1px solid var(--border);
          }
          .offclock-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
          /* 圖說用 tertiary 不用 accent：acid 在這頁代表「可以點」，這列不能點。 */
          .offclock-caption {
            display: block;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--text-tertiary);
            margin-top: 12px;
          }

          .offclock-row--link:hover .offclock-thumb img { transform: scale(1.04); }
          .offclock-row--link:hover .offclock-body h3 { text-decoration: underline; text-underline-offset: 4px; }
          .offclock-row--link:focus-visible { outline: 2px solid var(--accent-text); outline-offset: 4px; }

          @media (max-width: 720px) {
            .offclock-row { grid-template-columns: 1fr; gap: 16px; padding: 20px 0; }
            .offclock-thumb { aspect-ratio: 16 / 9; }
            /* 三連拍在手機維持橫排：方形各約 109px 仍看得出內容，
               改成直向堆疊會讓這列長到三個螢幕高。 */
            .offclock-photos { gap: 8px; }
          }

          /* === Responsive === */
          @media (max-width: 959px) {
            .about-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
            .bento-grid { grid-template-columns: 1fr; }
            .bento-card--wide { grid-column: auto; }
            .bento-content--row { flex-direction: column; align-items: flex-start; }
            .about-values-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 640px) {
            .bento-content { padding: 24px; }
            .bento-title { font-size: 24px; }
            .bento-stats-row { flex-wrap: wrap; gap: 20px; }
            .bento-mini-grid { grid-template-columns: 1fr; gap: 20px; width: 100%; }
          }
          @media (prefers-reduced-motion: reduce) {
            .bento-card, .bento-bg img, .bento-overlay { transition: none !important; }
            .bento-card:hover { transform: none !important; }
            .offclock-thumb img { transition: none !important; }
            .offclock-row--link:hover .offclock-thumb img { transform: none !important; }
          }
        `}</style>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--surface-inverse)',
          color: 'var(--accent-on-inverse)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          lineHeight: '1',
          boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
          transition: 'opacity 0.25s ease, transform 0.2s ease',
          zIndex: 999,
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? 'auto' : 'none',
          transform: showTop ? 'translateY(0)' : 'translateY(8px)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
      >
        ↑
      </button>
    </Layout>
  );
}