import { useEffect, useState } from 'react';
import sleepGuardianCover from '../../assets/images/home/sleep-guardian-cover.webp';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Moon, Brain, Smartphone, FlaskConical, BarChart3,
  ChevronRight, Shield, Heart, Zap, Clock, Activity,
  BookOpen, Layers, CheckCircle2, AlertTriangle
} from 'lucide-react';

// 引入你指定的新圖片
import codeImg from '../../assets/images/project/sleep-guardian/sleep-guardian-code.webp';
import notionImg from '../../assets/images/project/sleep-guardian/experiment-notion.webp';
import appAudio from '../../assets/images/project/sleep-guardian/audio.webp';
import appEmpathy from '../../assets/images/project/sleep-guardian/empathy.webp';
import appFinish from '../../assets/images/project/sleep-guardian/finish.webp';
import appIntro2 from '../../assets/images/project/sleep-guardian/intro-2.webp';
import appIntro from '../../assets/images/project/sleep-guardian/intro.webp';
import appStatistic from '../../assets/images/project/sleep-guardian/statistic.webp';
import appSurvey from '../../assets/images/project/sleep-guardian/survey.webp';
// 實際的通知刺激物（受測者看到的樣子）
import stimThreat from '../../assets/images/project/sleep-guardian/stim-threat.webp';
import stimEmpathy from '../../assets/images/project/sleep-guardian/stim-empathy.webp';
import stimFriction from '../../assets/images/project/sleep-guardian/stim-friction.webp';
import stimAudio from '../../assets/images/project/sleep-guardian/stim-audio.webp';
import stimBaseline from '../../assets/images/project/sleep-guardian/stim-baseline.webp';
import CjkText from '../../components/CjkText';
import FlowLabel from '../../components/FlowLabel';

type T = (key: string) => string;

// 數據全部照口試簡報，未自行推算。p.25 表 4.11 / p.27 表 4.13 / p.28 表 4.14-15。
const HEAT_ROWS = [
  { k: 'rowDI', cells: [{ v: 0.033 }, { v: 0.174, hi: 'groupFriction', lo: 'groupThreat', s: '*' }, { v: 0.005 }] },
  { k: 'rowMA', cells: [{ v: 0.003 }, { v: 0.218, hi: 'groupFriction', lo: 'groupThreat', s: '**' }, { v: 0.001 }] },
  { k: 'rowPADD', cells: [{ v: 0.109 }, { v: 0.208, hi: 'groupEmpathy', lo: 'groupThreat', s: '**' }, { v: 0.005 }] },
  { k: 'rowPADA', cells: [{ v: 0.213, hi: 'groupThreat', lo: 'groupFriction', s: '**' }, { v: 0.280, hi: 'groupThreat', lo: 'groupEmpathy', s: '***' }, { v: 0.005 }] },
  { k: 'rowPADP', cells: [{ v: 0.099 }, { v: 0.333, hi: 'groupEmpathy', lo: 'groupThreat', s: '***' }, { v: 0.024 }] },
];

const LINK_BARS = [
  { k: 'linkAll', r: -0.048, n: 48 },
  { k: 'groupThreat', r: -0.093, n: 16, hue: 'threat' },
  { k: 'groupEmpathy', r: 0.516, n: 16, hue: 'empathy', s: '*' },
  { k: 'groupFriction', r: -0.275, n: 16, hue: 'friction' },
];

const D_ROWS = [
  { label: 'DI', bars: [{ d: 0.43, hue: 'threat' }, { d: 0.28, hue: 'empathy' }, { d: 0.48, hue: 'friction' }] },
  { label: 'MA', bars: [{ d: 0.52, hue: 'threat' }, { d: 0.50, hue: 'empathy' }, { d: 0.75, hue: 'friction', s: '**' }] },
  { label: 'PAD-P', bars: [{ d: 0.41, hue: 'threat' }, { d: 0.19, hue: 'empathy' }, { d: 0.62, hue: 'friction', s: '*' }] },
  { label: 'PAD-A', bars: [{ d: -0.24, hue: 'threat' }, { d: -0.18, hue: 'empathy' }, { d: -1.28, hue: 'friction', s: '***' }] },
  { label: 'PAD-D', bars: [{ d: 0.40, hue: 'threat' }, { d: 0.65, hue: 'empathy', s: '*' }, { d: 0.52, hue: 'friction' }] },
];

// 圖表已併進對應的發現卡，標題會和卡片的 h4 重複，所以只留方法說明。
function ChartFrame({ note, children }: { title?: string; note: string; children: React.ReactNode }) {
  return (
    <figure className="sg-chart">
      <figcaption className="sg-chart-head">
        <p><CjkText>{note}</CjkText></p>
      </figcaption>
      {children}
    </figure>
  );
}

/** 各感官通道下訴求類型的 η²。純聽覺欄用紅框標成黃金通道。 */
function GoldenChannelHeatmap({ t }: { t: T }) {
  const c = (k: string) => t(`project.sleepGuardian.charts.${k}`);
  return (
    <ChartFrame title={c('heatTitle')} note={c('heatNote')}>
      <div className="sg-heat" role="table">
        <div className="sg-heat-row sg-heat-row--head" role="row">
          <span className="sg-heat-rowlabel" role="columnheader" />
          <span role="columnheader"><CjkText>{c('colVisual')}</CjkText></span>
          <span className="sg-heat-golden" role="columnheader">
            <CjkText>{c('colAudio')}</CjkText><em><CjkText>{c('heatGolden')}</CjkText></em>
          </span>
          <span role="columnheader"><CjkText>{c('colAV')}</CjkText></span>
        </div>
        {HEAT_ROWS.map(row => (
          <div className="sg-heat-row" role="row" key={row.k}>
            <span className="sg-heat-rowlabel" role="rowheader"><span><CjkText>{c(row.k)}</CjkText></span></span>
            {/* 值用長條編碼而非底色填滿：把 acid 混進暗色底會讓文字對比在中間段失效。 */}
            {row.cells.map((cell, i) => (
              <span className={`sg-heat-cell${i === 1 ? ' sg-heat-cell--audio' : ''}`} role="cell" key={i}>
                <b>{cell.v.toFixed(3)}</b>
                {'hi' in cell && cell.hi && (
                  <i><CjkText>{c(cell.hi)}</CjkText> &gt; {c(cell.lo!)}{cell.s}</i>
                )}
                <span className="sg-heat-bar">
                  <span style={{ width: `${Math.round((cell.v / 0.35) * 100)}%` }} />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sg-chart-foot"><CjkText>{c('sigNote')}</CjkText></p>
    </ChartFrame>
  );
}

/** 意圖與行為的相關係數，以 0 為軸的左右發散長條。數值固定在右側欄位，不壓在長條上。 */
function IntentionBehaviourChart({ t }: { t: T }) {
  const c = (k: string) => t(`project.sleepGuardian.charts.${k}`);
  const MIN = -0.4, MAX = 0.6, span = MAX - MIN;
  const zero = ((0 - MIN) / span) * 100;
  return (
    <ChartFrame title={c('linkTitle')} note={c('linkNote')}>
      <div className="sg-link-chart">
        {LINK_BARS.map(b => {
          const pos = b.r >= 0;
          const w = (Math.abs(b.r) / span) * 100;
          return (
            <div className="sg-link-row" key={b.k}>
              <span className="sg-link-label"><CjkText>{c(b.k)}</CjkText><em>N={b.n}</em></span>
              <div className="sg-link-track">
                <span className="sg-link-axis" style={{ left: `${zero}%` }} />
                <span
                  className={`sg-link-bar${b.s ? ' sg-link-bar--sig' : ''}`}
                  style={{
                    left: pos ? `${zero}%` : `${zero - w}%`,
                    width: `${w}%`,
                    background: b.hue ? `var(--sg-${b.hue})` : 'color-mix(in srgb, var(--sg-text) 34%, transparent)',
                  }}
                />
              </div>
              <span className={`sg-val${b.s ? ' sg-val--sig' : ''}`}>
                {b.r > 0 ? '+' : ''}{b.r.toFixed(3)}{b.s ?? ''}
              </span>
            </div>
          );
        })}
      </div>
      <p className="sg-chart-foot"><CjkText>{c('sigNote')}</CjkText></p>
    </ChartFrame>
  );
}

/** 各組相對基線的 Cohen's d，以 0 為軸發散，附 |d| = .2/.5/.8 參考線。 */
function EffectSizeChart({ t }: { t: T }) {
  const c = (k: string) => t(`project.sleepGuardian.charts.${k}`);
  const MIN = -1.4, MAX = 0.9, span = MAX - MIN;
  const zero = ((0 - MIN) / span) * 100;
  const refs = [-0.8, -0.5, -0.2, 0.2, 0.5, 0.8];
  return (
    <ChartFrame title={c('dTitle')} note={c('dNote')}>
      <ChartLegend t={t} />
      <div className="sg-d-chart">
        {D_ROWS.map(row => (
          <div className="sg-d-group" key={row.label}>
            <span className="sg-d-label">{row.label}</span>
            <div className="sg-d-bars">
              {row.bars.map((b, i) => {
                const pos = b.d >= 0;
                const w = (Math.abs(b.d) / span) * 100;
                return (
                  <div className="sg-d-row" key={i}>
                    <div className="sg-d-track">
                      {refs.map(r => (
                        <span className="sg-ref" key={r} style={{ left: `${((r - MIN) / span) * 100}%` }} />
                      ))}
                      <span className="sg-d-axis" style={{ left: `${zero}%` }} />
                      <span
                        className={`sg-d-bar${b.s ? ' sg-d-bar--sig' : ''}`}
                        style={{
                          left: pos ? `${zero}%` : `${zero - w}%`,
                          width: `${w}%`,
                          background: `var(--sg-${b.hue})`,
                        }}
                      />
                    </div>
                    <span className={`sg-val${b.s ? ' sg-val--sig' : ''}`}>{b.d.toFixed(2)}{b.s ?? ''}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="sg-chart-foot"><CjkText>{c('sigNote')}</CjkText></p>
    </ChartFrame>
  );
}

/** 三種訴求的共用圖例，兩張圖表共用同一組色。 */
function ChartLegend({ t }: { t: T }) {
  const c = (k: string) => t(`project.sleepGuardian.charts.${k}`);
  return (
    <div className="sg-legend">
      {(['threat', 'empathy', 'friction'] as const).map(h => (
        <span key={h}>
          <i style={{ background: `var(--sg-${h})` }} />
          {/* 圖例項目本身是 inline-flex，文字要自成一個 flex item，
              否則 CjkText 的詞 span 會被 gap 拆成好幾行。 */}
          <span><CjkText>{c(`group${h[0].toUpperCase()}${h.slice(1)}`)}</CjkText></span>
        </span>
      ))}
      <em><CjkText>{c('dLegend')}</CjkText></em>
    </div>
  );
}

// 口試簡報 p.24 / 論文表 4.10。
// 三個系列沿用網站的訴求色，因為 acid→ink 的明度三階在暗色模式下三條會糊成一片
// （實測彼此對比只有 1.02 到 1.15）。此處的紅／紫／琥珀只是類別色，
// 與其他圖表的「威脅／共情／設計摩擦」語意無關，各圖表都有自己的圖例。
const ETA_GROUPS = [
  { k: 'dvPADP', v: [{ e: 0.242, s: '***' }, { e: 0.105, s: '*' }, { e: 0.230, s: '**' }] },
  { k: 'dvPADA', v: [{ e: 0.245, s: '***' }, { e: 0.181, s: '**' }, { e: 0.150, s: '*' }] },
  { k: 'dvPADD', v: [{ e: 0.180, s: '***' }, { e: 0.107, s: '*' }, { e: 0.101, s: '' }] },
  { k: 'dvMA', v: [{ e: 0.251, s: '***' }, { e: 0.202, s: '***' }, { e: 0.044, s: '' }] },
  { k: 'dvDI', v: [{ e: 0.290, s: '***' }, { e: 0.290, s: '***' }, { e: 0.011, s: '' }] },
];
// 單一 acid 色相，靠填充紋理區分：實心／斜線／外框。
// 這三個系列是「效果來源」而非三種訴求，用紋理才不會和紅／紫／琥珀的訴求圖例撞色。
const ETA_SERIES = [
  { key: 'seriesSensory', fill: 'solid' },
  { key: 'seriesInteraction', fill: 'hatch' },
  { key: 'seriesAppeal', fill: 'outline' },
];

/** 五項主觀依變項的 η²p，直式分組長條 + 中／大效果參考線。 */
function EtaSquaredChart({ t }: { t: T }) {
  const c = (k: string) => t(`project.sleepGuardian.charts.${k}`);
  const MAX = 0.32;
  const pct = (v: number) => (v / MAX) * 100;
  return (
    <ChartFrame title={c('etaTitle')} note={c('etaNote')}>
      <div className="sg-legend">
        {ETA_SERIES.map(s => (
          <span key={s.key}><i className={`sg-fill--${s.fill}`} /><span><CjkText>{c(s.key)}</CjkText></span></span>
        ))}
      </div>
      <div className="sg-eta">
        <div className="sg-eta-plot">
          {[0.14, 0.06].map(r => (
            <div className="sg-eta-ref" key={r} style={{ bottom: `${pct(r)}%` }}>
              <span><CjkText>{c(r === 0.14 ? 'refLarge' : 'refMedium')}</CjkText></span>
            </div>
          ))}
          {ETA_GROUPS.map(g => (
            <div className="sg-eta-group" key={g.k}>
              <div className="sg-eta-bars">
                {g.v.map((b, i) => (
                  <div className="sg-eta-barwrap" key={i}>
                    <span className="sg-eta-num">{b.e.toFixed(2).replace(/^0/, '')}{b.s}</span>
                    <span className={`sg-eta-bar sg-fill--${ETA_SERIES[i].fill}`} style={{ height: `${pct(b.e)}%` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="sg-eta-axis">
          {ETA_GROUPS.map(g => <span key={g.k}><CjkText>{c(g.k)}</CjkText></span>)}
        </div>
      </div>
      <p className="sg-chart-foot"><CjkText>{c('sigNote')}</CjkText></p>
    </ChartFrame>
  );
}

export default function SleepGuardian() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    const reveals = document.querySelectorAll('.sg-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('sg-in');
        });
      },
      { threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // App screens 陣列，方便 map 渲染。caption 是畫面說明，alt 留給輔助技術。
  const appScreens = [
    { src: appIntro, alt: t('project.sleepGuardian.appAlts.intro'), caption: t('project.sleepGuardian.screens.s1') },
    { src: appIntro2, alt: t('project.sleepGuardian.appAlts.setup'), caption: t('project.sleepGuardian.screens.s2') },
    { src: appEmpathy, alt: t('project.sleepGuardian.framework.empathy.title'), caption: t('project.sleepGuardian.screens.s3') },
    { src: appAudio, alt: t('project.sleepGuardian.appAlts.audio'), caption: t('project.sleepGuardian.screens.s4') },
    { src: appStatistic, alt: t('project.sleepGuardian.appAlts.stats'), caption: t('project.sleepGuardian.screens.s6') },
    { src: appSurvey, alt: t('project.sleepGuardian.appAlts.survey'), caption: t('project.sleepGuardian.screens.s5') },
    { src: appFinish, alt: t('project.sleepGuardian.appAlts.finish'), caption: t('project.sleepGuardian.screens.s7') },
  ];

  return (
    <Layout>
      <div id="sleep-guardian-page">


        {/* ── HERO ── */}
        <section className="sg-hero">
          <div className="sg-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="sg-hero-inner"
            >
              <div className="sg-badge-row">
                <span className="sg-badge sg-badge--thesis">
                  <BookOpen size={14} /><span><CjkText>{t('project.sleepGuardian.hero.badge')}</CjkText></span></span>
                <span className="sg-badge sg-badge--status">
                  <Activity size={14} /><span><CjkText>{t('project.sleepGuardian.hero.status')}</CjkText></span></span>
              </div>

              <h1 className="sg-hero-title"><CjkText>{t('project.sleepGuardian.hero.title')}</CjkText></h1>
              <p className="sg-hero-sub"><CjkText>{t('project.sleepGuardian.hero.subtitle1')}</CjkText><br /><CjkText>{t('project.sleepGuardian.hero.subtitle2')}</CjkText></p>

              <p className="sg-hero-hook"><CjkText>{t('project.sleepGuardian.hero.introA')}</CjkText>{' '}<em><CjkText>{t('project.sleepGuardian.hero.introHighlight')}</CjkText></em>{' '}<CjkText>{t('project.sleepGuardian.hero.introB')}</CjkText></p>

              <div className="sg-meta-grid">
                <div className="sg-meta-item">
                  <span className="sg-meta-label"><CjkText>{t('project.sleepGuardian.hero.roleLabel')}</CjkText></span>
                  <span className="sg-meta-value"><CjkText>{t('project.sleepGuardian.hero.roleValue')}</CjkText></span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label"><CjkText>{t('project.sleepGuardian.hero.frameworkLabel')}</CjkText></span>
                  <span className="sg-meta-value"><CjkText>{t('project.sleepGuardian.hero.frameworkValue')}</CjkText></span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label"><CjkText>{t('project.sleepGuardian.hero.methodLabel')}</CjkText></span>
                  <span className="sg-meta-value"><CjkText>{t('project.sleepGuardian.hero.methodValue')}</CjkText></span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label"><CjkText>{t('project.sleepGuardian.hero.venueLabel')}</CjkText></span>
                  <span className="sg-meta-value"><CjkText>{t('project.sleepGuardian.hero.venueValue')}</CjkText></span>
                </div>
              </div>

              {/* 研究結論放在第一屏，不要讓 skim 的人讀到 95% 才看到數字。 */}
              <div className="sg-hero-findings">
                <span className="sg-hero-findings-label"><CjkText>{t('project.sleepGuardian.hero.findingsLabel')}</CjkText></span>
                <div className="sg-hero-findings-row">
                  {['stat1', 'stat2', 'stat3'].map(k => (
                    <div className="sg-hero-finding" key={k}>
                      <span className="sg-hero-finding-num"><CjkText>{t(`project.sleepGuardian.hero.${k}num`)}</CjkText></span>
                      <span className="sg-hero-finding-desc"><CjkText>{t(`project.sleepGuardian.hero.${k}desc`)}</CjkText></span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            {/* 眉標與標題放進左欄，右側統計卡的頂端才會跟左欄文字齊頭。
                放在 sg-two-col 外面的話，卡片會從標題下方才開始，低一截。 */}
            <div className="sg-two-col">
              <div>
                <FlowLabel
                  beat="problem"
                  note={t('project.sleepGuardian.problem.heading')}
                  icon={<Brain size={18} />}
                  className="flow-label--sg"
                />
                <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.problem.title')}</CjkText></h2>
                <p className="sg-body">
                  <strong><CjkText>{t('project.sleepGuardian.problem.p1a')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.problem.p1b')}</CjkText>{' '}<em><CjkText>{t('project.sleepGuardian.problem.p1em')}</CjkText></em>{' '}<CjkText>{t('project.sleepGuardian.problem.p1c')}</CjkText></p>
                <p className="sg-body"><CjkText>{t('project.sleepGuardian.problem.p2')}</CjkText></p>
                <div className="sg-quote-block">
                  <p className="sg-quote"><CjkText>{t('project.sleepGuardian.problem.quote')}</CjkText></p>
                </div>
              </div>
              <div className="sg-stat-stack">
                <div className="sg-stat-card">
                  <span className="sg-stat-num">30%</span>
                  <span className="sg-stat-desc"><CjkText>{t('project.sleepGuardian.problem.stat1desc')}</CjkText></span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num"><CjkText>{t('project.sleepGuardian.problem.stat2num')}</CjkText></span>
                  <span className="sg-stat-desc"><CjkText>{t('project.sleepGuardian.problem.stat2desc')}</CjkText></span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num"><CjkText>{t('project.sleepGuardian.problem.stat3num')}</CjkText></span>
                  <span className="sg-stat-desc"><CjkText>{t('project.sleepGuardian.problem.stat3desc')}</CjkText></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILOT STUDY ── */}
        {/* 決策轉折擺在理論框架之前：先講研究砍掉了什麼，理論才有落點。 */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="analysis"
              note={t('project.sleepGuardian.pilot.heading')}
              icon={<Layers size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.pilot.title')}</CjkText></h2>
            <p className="sg-results-intro"><CjkText>{t('project.sleepGuardian.pilot.intro')}</CjkText></p>

            <div className="sg-pivot">
              <div className="sg-pivot-col sg-pivot-col--before">
                <span className="sg-pivot-label"><CjkText>{t('project.sleepGuardian.pilot.beforeLabel')}</CjkText></span>
                <p><CjkText>{t('project.sleepGuardian.pilot.beforeItems')}</CjkText></p>
              </div>
              <div className="sg-pivot-col sg-pivot-col--kill">
                <span className="sg-pivot-label"><CjkText>{t('project.sleepGuardian.pilot.killLabel')}</CjkText></span>
                <dl>
                  {['kill1', 'kill2', 'kill3'].map(k => (
                    <div key={k}>
                      <dt><CjkText>{t(`project.sleepGuardian.pilot.${k}title`)}</CjkText></dt>
                      <dd><CjkText>{t(`project.sleepGuardian.pilot.${k}desc`)}</CjkText></dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="sg-pivot-col sg-pivot-col--after">
                <span className="sg-pivot-label"><CjkText>{t('project.sleepGuardian.pilot.afterLabel')}</CjkText></span>
                <p><CjkText>{t('project.sleepGuardian.pilot.afterDesc')}</CjkText></p>
              </div>
            </div>

            <span className="sg-turn-label"><CjkText>{t('project.sleepGuardian.pilot.turnLabel')}</CjkText></span>
            <div className="sg-turn-grid">
              {['f1', 'f2', 'f3'].map(k => (
                <div className="sg-turn-card" key={k}>
                  <h4><CjkText>{t(`project.sleepGuardian.pilot.${k}title`)}</CjkText></h4>
                  <p><CjkText>{t(`project.sleepGuardian.pilot.${k}desc`)}</CjkText></p>
                  <p className="sg-turn-decision"><CjkText>{t(`project.sleepGuardian.pilot.${k}decision`)}</CjkText></p>
                </div>
              ))}
            </div>

            <p className="sg-method-line"><CjkText>{t('project.sleepGuardian.pilot.method')}</CjkText></p>
          </div>
        </section>

        {/* ── THEORETICAL FRAMEWORK ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="analysis"
              note={t('project.sleepGuardian.framework.heading')}
              icon={<Layers size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.framework.title')}</CjkText></h2>
            <p className="sg-body"><CjkText>{t('project.sleepGuardian.framework.introA')}</CjkText>{' '}<strong><CjkText>{t('project.sleepGuardian.framework.introEm')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.framework.introB')}</CjkText></p>
            <div className="sg-pathway-grid">
              <div className="sg-pathway-card sg-pathway-card--threat">
                <div className="sg-pathway-icon">
                  <AlertTriangle size={28} />
                </div>
                <div className="sg-pathway-num">01</div>
                <h3 className="sg-pathway-title"><CjkText>{t('project.sleepGuardian.framework.threat.title')}</CjkText></h3>
                <p className="sg-pathway-mech"><CjkText>{t('project.sleepGuardian.framework.threat.pathway')}</CjkText></p>
                <p className="sg-pathway-desc"><CjkText>{t('project.sleepGuardian.framework.threat.desc')}</CjkText></p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label"><CjkText>{t('project.sleepGuardian.framework.exampleLabel')}</CjkText></span>
                  <p className="sg-example-text"><CjkText>{t('project.sleepGuardian.framework.threat.example')}</CjkText></p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--empathy">
                <div className="sg-pathway-icon">
                  <Heart size={28} />
                </div>
                <div className="sg-pathway-num">02</div>
                <h3 className="sg-pathway-title"><CjkText>{t('project.sleepGuardian.framework.empathy.title')}</CjkText></h3>
                <p className="sg-pathway-mech"><CjkText>{t('project.sleepGuardian.framework.empathy.pathway')}</CjkText></p>
                <p className="sg-pathway-desc"><CjkText>{t('project.sleepGuardian.framework.empathy.desc')}</CjkText></p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label"><CjkText>{t('project.sleepGuardian.framework.exampleLabel')}</CjkText></span>
                  <p className="sg-example-text"><CjkText>{t('project.sleepGuardian.framework.empathy.example')}</CjkText></p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--friction">
                <div className="sg-pathway-icon">
                  <Zap size={28} />
                </div>
                <div className="sg-pathway-num">03</div>
                <h3 className="sg-pathway-title"><CjkText>{t('project.sleepGuardian.framework.friction.title')}</CjkText></h3>
                <p className="sg-pathway-mech"><CjkText>{t('project.sleepGuardian.framework.friction.pathway')}</CjkText></p>
                <p className="sg-pathway-desc"><CjkText>{t('project.sleepGuardian.framework.friction.descA')}</CjkText>{' '}<em><CjkText>{t('project.sleepGuardian.framework.friction.descEm')}</CjkText></em><CjkText>{t('project.sleepGuardian.framework.friction.descB')}</CjkText></p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label"><CjkText>{t('project.sleepGuardian.framework.friction.interactionLabel')}</CjkText></span>
                  <p className="sg-example-text"><CjkText>{t('project.sleepGuardian.framework.friction.interactionDesc')}</CjkText></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIMENT DESIGN ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="solution"
              note={t('project.sleepGuardian.experiment.heading')}
              icon={<FlaskConical size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.experiment.title')}</CjkText></h2>
            <p className="sg-body"><CjkText>{t('project.sleepGuardian.experiment.introA')}</CjkText>{' '}<strong><CjkText>{t('project.sleepGuardian.experiment.introEm')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.experiment.introB')}</CjkText></p>

            <div className="sg-design-matrix">
              <div className="sg-matrix-axis sg-matrix-axis--between">
                <div className="sg-axis-label"><CjkText>{t('project.sleepGuardian.experiment.betweenLabel')}</CjkText></div>
                <div className="sg-axis-title"><CjkText>{t('project.sleepGuardian.experiment.betweenTitle')}</CjkText></div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item sg-axis-item--threat"><CjkText>{t('project.sleepGuardian.framework.threat.title')}</CjkText></span>
                  <span className="sg-axis-item sg-axis-item--empathy"><CjkText>{t('project.sleepGuardian.framework.empathy.title')}</CjkText></span>
                  <span className="sg-axis-item sg-axis-item--friction"><CjkText>{t('project.sleepGuardian.framework.friction.title')}</CjkText></span>
                </div>
              </div>

              <div className="sg-matrix-cross">×</div>

              <div className="sg-matrix-axis sg-matrix-axis--within">
                <div className="sg-axis-label"><CjkText>{t('project.sleepGuardian.experiment.withinLabel')}</CjkText></div>
                <div className="sg-axis-title"><CjkText>{t('project.sleepGuardian.experiment.withinTitle')}</CjkText></div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item"><CjkText>{t('project.sleepGuardian.experiment.modality1')}</CjkText></span>
                  <span className="sg-axis-item"><CjkText>{t('project.sleepGuardian.experiment.modality2')}</CjkText></span>
                  <span className="sg-axis-item"><CjkText>{t('project.sleepGuardian.experiment.modality3')}</CjkText></span>
                  <span className="sg-axis-item sg-axis-item--baseline"><CjkText>{t('project.sleepGuardian.experiment.modality4')}</CjkText></span>
                </div>
              </div>
            </div>

            <div className="sg-info-box">
              <Shield size={18} />
              <p>
                <strong><CjkText>{t('project.sleepGuardian.experiment.counterA')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.experiment.counterB')}</CjkText></p>
            </div>

            <div className="sg-decision-row">
              <div className="sg-decision-card">
                <Clock size={20} />
                <h4><CjkText>{t('project.sleepGuardian.experiment.proto1title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.experiment.proto1desc')}</CjkText></p>
              </div>
              <div className="sg-decision-card">
                <Activity size={20} />
                <h4><CjkText>{t('project.sleepGuardian.experiment.proto2title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.experiment.proto2desc')}</CjkText></p>
              </div>
              <div className="sg-decision-card">
                <Brain size={20} />
                <h4><CjkText>{t('project.sleepGuardian.experiment.proto3title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.experiment.proto3desc')}</CjkText></p>
              </div>
              <div className="sg-decision-card">
                <BarChart3 size={20} />
                <h4><CjkText>{t('project.sleepGuardian.experiment.proto4title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.experiment.proto4desc')}</CjkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STIMULUS DESIGN DECISIONS ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="solution"
              note={t('project.sleepGuardian.stim.heading')}
              icon={<AlertTriangle size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.stim.title')}</CjkText></h2>

            {/* 先讓讀者看到刺激物本身，再談我為什麼那樣設計 */}
            <span className="sg-turn-label"><CjkText>{t('project.sleepGuardian.stim.galleryLabel')}</CjkText></span>
            <div className="sg-stim-grid">
              {[
                { src: stimThreat, k: 'gThreat', hue: 'threat' },
                { src: stimEmpathy, k: 'gEmpathy', hue: 'empathy' },
                { src: stimFriction, k: 'gFriction', hue: 'friction' },
                { src: stimAudio, k: 'gAudio', hue: null },
                { src: stimBaseline, k: 'gBaseline', hue: null },
              ].map(s => {
                const caption = t(`project.sleepGuardian.stim.${s.k}`);
                return (
                  <figure className={s.k === 'gFriction' ? 'sg-stim-item sg-stim-item--tall' : 'sg-stim-item'} key={s.k}>
                    <button
                      type="button"
                      className="sg-stim-btn"
                      onClick={() => setLightbox({ src: s.src, caption })}
                      aria-label={caption}
                    >
                      <img src={s.src} alt={caption} loading="lazy" />
                    </button>
                    <figcaption>
                      <span className="sg-stim-name">
                        {s.hue && <i style={{ background: `var(--sg-${s.hue})` }} />}
                        {caption}
                      </span>
                      <span className="sg-stim-sub"><CjkText>{t(`project.sleepGuardian.stim.${s.k}Sub`)}</CjkText></span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <div className="sg-decisions">
              {['s1', 's2', 's3', 's4'].map((k, i) => (
                <div className="sg-decision" key={k}>
                  <span className="sg-decision-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4><CjkText>{t(`project.sleepGuardian.stim.${k}title`)}</CjkText></h4>
                    <p><CjkText>{t(`project.sleepGuardian.stim.${k}desc`)}</CjkText></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SLEEP GUARDIAN APP (MODIFIED) ── */}
        <section className="sg-section sg-section--dark sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="solution"
              note={t('project.sleepGuardian.instrument.heading')}
              icon={<Smartphone size={18} />} tone="light"
              className="flow-label--sg"
            />
            <h2 className="sg-section-title sg-title--light"><CjkText>{t('project.sleepGuardian.instrument.title')}</CjkText></h2>
            <p className="sg-body sg-body--light"><CjkText>{t('project.sleepGuardian.instrument.intro')}</CjkText></p>

            <div className="sg-app-features">
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">01</div>
                <h4 className="sg-app-feature-title"><CjkText>{t('project.sleepGuardian.instrument.mod1title')}</CjkText></h4>
                <p className="sg-app-feature-desc"><CjkText>{t('project.sleepGuardian.instrument.mod1desc')}</CjkText></p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">02</div>
                <h4 className="sg-app-feature-title"><CjkText>{t('project.sleepGuardian.instrument.mod2title')}</CjkText></h4>
                <p className="sg-app-feature-desc"><CjkText>{t('project.sleepGuardian.instrument.mod2desc')}</CjkText></p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">03</div>
                <h4 className="sg-app-feature-title"><CjkText>{t('project.sleepGuardian.instrument.mod3title')}</CjkText></h4>
                <p className="sg-app-feature-desc"><CjkText>{t('project.sleepGuardian.instrument.mod3desc')}</CjkText><br /><strong><CjkText>{t('project.sleepGuardian.instrument.ndlName')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.instrument.ndlDesc')}</CjkText><br /><strong><CjkText>{t('project.sleepGuardian.instrument.pscName')}</CjkText></strong>{' '}<CjkText>{t('project.sleepGuardian.instrument.pscDesc')}</CjkText></p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">04</div>
                <h4 className="sg-app-feature-title"><CjkText>{t('project.sleepGuardian.instrument.mod4title')}</CjkText></h4>
                <p className="sg-app-feature-desc"><CjkText>{t('project.sleepGuardian.instrument.mod4desc')}</CjkText></p>
              </div>
            </div>

            {/* --- 新增的圖片展示區塊 --- */}
            
            <div className="sg-instrument-visuals">
              
              {/* 1. App 介面展示 (7張圖網格) */}
              <div className="sg-visual-block">
                <h3 className="sg-visual-title"><CjkText>{t('project.sleepGuardian.instrument.uiHeading')}</CjkText></h3>
                <p className="sg-zoom-hint"><CjkText>{t('project.sleepGuardian.screens.zoomHint')}</CjkText></p>
                <div className="sg-app-screens-grid">
                  {appScreens.map((screen, idx) => (
                    <figure key={idx} className="sg-app-screen-item">
                      <button
                        type="button"
                        className="sg-app-screen-wrap"
                        onClick={() => setLightbox({ src: screen.src, caption: screen.caption })}
                        aria-label={screen.caption}
                      >
                        <img src={screen.src} alt={screen.alt} loading="lazy" className="sg-app-screen-img" />
                      </button>
                      <figcaption className="sg-app-screen-cap"><CjkText>{screen.caption}</CjkText></figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              {/* 2. 實驗時程管理圖 (Notion) */}
              <div className="sg-visual-block">
                <h3 className="sg-visual-title"><CjkText>{t('project.sleepGuardian.instrument.timelineHeading')}</CjkText></h3>
                <div className="sg-notion-img-wrap">
                  <img src={notionImg} alt={t('project.sleepGuardian.instrument.timelineAlt')} loading="lazy" className="sg-featured-img" />
                </div>
              </div>

              {/* code 截圖已移除：只證明寫了程式，而 hero 的 Role 欄已經寫了 App Developer */}

            </div>
            {/* --- 新增的圖片展示區塊 結束 --- */}

          </div>
        </section>

        {/* ── MEASUREMENT BATTERY ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="validation"
              note={t('project.sleepGuardian.measures.heading')}
              icon={<BarChart3 size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.measures.title')}</CjkText></h2>

            <div className="sg-measure-timeline">
              <div className="sg-measure-phase">
                <div className="sg-phase-label"><CjkText>{t('project.sleepGuardian.measures.group1')}</CjkText></div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.bpsAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.bpsName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.bpsDesc')}</CjkText></div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label"><CjkText>{t('project.sleepGuardian.measures.group2')}</CjkText></div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.bscsAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.bscsName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.bscsDesc')}</CjkText></div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.reiAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.reiName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.reiDesc')}</CjkText></div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label"><CjkText>{t('project.sleepGuardian.measures.group3')}</CjkText></div>
                <div className="sg-measure-cards sg-measure-cards--objective">
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.ndlAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.instrument.ndlName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.ndlDesc')}</CjkText></div>
                  </div>
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.pscAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.instrument.pscName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.pscDesc')}</CjkText></div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label"><CjkText>{t('project.sleepGuardian.measures.group4')}</CjkText></div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.padAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.padName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.padDesc')}</CjkText></div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.tamAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.tamName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.tamDesc')}</CjkText></div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr"><CjkText>{t('project.sleepGuardian.measures.ueqsAbbr')}</CjkText></div>
                    <div className="sg-measure-name"><CjkText>{t('project.sleepGuardian.measures.ueqsName')}</CjkText></div>
                    <div className="sg-measure-purpose"><CjkText>{t('project.sleepGuardian.measures.ueqsDesc')}</CjkText></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        {/* 方法與工具鋪陳完，才交出結論與設計建議；RQ 表格緊接在後面當逐題佐證。 */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="outcome"
              note={t('project.sleepGuardian.results.heading')}
              icon={<BarChart3 size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.results.title')}</CjkText></h2>
            <p className="sg-results-intro"><CjkText>{t('project.sleepGuardian.results.intro')}</CjkText></p>

            {/* 統計量白話版：非研究背景的讀者（PM／HM）不必先懂 η²p 才看得懂圖表。 */}
            <div className="sg-gloss">
              <span className="sg-gloss-heading"><CjkText>{t('project.sleepGuardian.charts.glossHeading')}</CjkText></span>
              <dl>
                {['gloss1', 'gloss2', 'gloss3', 'gloss4'].map(k => (
                  <div key={k}>
                    <dt><CjkText>{t(`project.sleepGuardian.charts.${k}term`)}</CjkText></dt>
                    <dd><CjkText>{t(`project.sleepGuardian.charts.${k}desc`)}</CjkText></dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 每張圖直接放進它佐證的那張發現卡，讀者不用往下捲去找證據。
                發現五沒有對應圖表。 */}
            <div className="sg-results-list">
              {[
                { k: 'f1', Chart: EtaSquaredChart },
                { k: 'f2', Chart: GoldenChannelHeatmap },
                { k: 'f3', Chart: EffectSizeChart },
                { k: 'f4', Chart: IntentionBehaviourChart },
                { k: 'f5', Chart: null },
              ].map(({ k, Chart }, i) => (
                <div className="sg-result-card" key={k}>
                  <span className="sg-result-num">{String(i + 1).padStart(2, '0')}</span>
                  <h4><CjkText>{t(`project.sleepGuardian.results.${k}title`)}</CjkText></h4>
                  <p><CjkText>{t(`project.sleepGuardian.results.${k}desc`)}</CjkText></p>
                  {Chart && <Chart t={t} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESIGN IMPLICATIONS ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="outcome"
              note={t('project.sleepGuardian.implications.heading')}
              icon={<Zap size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.implications.title')}</CjkText></h2>
            <p className="sg-results-intro"><CjkText>{t('project.sleepGuardian.implications.intro')}</CjkText></p>

            <div className="sg-impl-grid">
              {['i1', 'i2', 'i3', 'i4'].map((k, i) => (
                <div className="sg-impl-card" key={k}>
                  <span className="sg-impl-num">{String(i + 1).padStart(2, '0')}</span>
                  <h4><CjkText>{t(`project.sleepGuardian.implications.${k}title`)}</CjkText></h4>
                  <p><CjkText>{t(`project.sleepGuardian.implications.${k}desc`)}</CjkText></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESEARCH QUESTIONS ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <FlowLabel
              beat="outcome"
              note={t('project.sleepGuardian.rq.heading')}
              icon={<FlaskConical size={18} />}
              className="flow-label--sg"
            />
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.rq.title')}</CjkText></h2>

            {/* 論文共 5 個 RQ 加一項探索性分析。
                原本是六張大卡，改成表格後高度砍掉約一半，資訊一項不減。 */}
            <div className="sg-rq-table-wrap">
              <table className="sg-rq-table">
                <thead>
                  <tr>
                    <th scope="col"><CjkText>{t('project.sleepGuardian.rq.colQuestion')}</CjkText></th>
                    <th scope="col"><CjkText>{t('project.sleepGuardian.rq.predictedLabel')}</CjkText></th>
                    <th scope="col"><CjkText>{t('project.sleepGuardian.rq.actualLabel')}</CjkText></th>
                    <th scope="col"><CjkText>{t('project.sleepGuardian.rq.colVerdict')}</CjkText></th>
                  </tr>
                </thead>
                <tbody>
                  {['rq1', 'rq2', 'rq3', 'rq4', 'rq5', 'rq6'].map(k => (
                    <tr key={k}>
                      <th scope="row">
                        <span className="sg-rq-tag"><CjkText>{t(`project.sleepGuardian.rq.${k}label`)}</CjkText></span>
                        <span className="sg-rq-q"><CjkText>{t(`project.sleepGuardian.rq.${k}q`)}</CjkText></span>
                      </th>
                      <td className="sg-rq-pred"><CjkText>{t(`project.sleepGuardian.rq.${k}pred`)}</CjkText></td>
                      <td className="sg-rq-actual"><CjkText>{t(`project.sleepGuardian.rq.${k}actual`)}</CjkText></td>
                      <td><span className="sg-rq-verdict"><CjkText>{t(`project.sleepGuardian.rq.${k}verdict`)}</CjkText></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sg-analysis-note">
              <BarChart3 size={16} />
              <p><CjkText>{t('project.sleepGuardian.rq.note')}</CjkText></p>
            </div>
          </div>
        </section>

        {/* ── SCOPE & LIMITATIONS ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <AlertTriangle size={18} /><span><CjkText>{t('project.sleepGuardian.limits.heading')}</CjkText></span></div>
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.limits.title')}</CjkText></h2>

            <div className="sg-limits-grid">
              {['l1', 'l2', 'l3', 'l4'].map(k => (
                <div className="sg-limit-card" key={k}>
                  <h4><CjkText>{t(`project.sleepGuardian.limits.${k}title`)}</CjkText></h4>
                  <p><CjkText>{t(`project.sleepGuardian.limits.${k}desc`)}</CjkText></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTRIBUTION & STATUS ── */}
        <section className="sg-section sg-reveal" style={{ paddingBottom: '120px' }}>
          <div className="sg-container">
            <div className="sg-section-label">
              <CheckCircle2 size={18} /><span><CjkText>{t('project.sleepGuardian.status.heading')}</CjkText></span></div>
            <h2 className="sg-section-title"><CjkText>{t('project.sleepGuardian.status.title')}</CjkText></h2>

            <div className="sg-contribution-grid">
              <div className="sg-contribution-card">
                <h4><CjkText>{t('project.sleepGuardian.status.item1title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.status.item1desc')}</CjkText></p>
              </div>
              {/* item2（前導）、item3（app 開發）、item4（刺激物）、item6（結果）
                  已各自獨立成段，這裡只留沒有專屬區塊的兩項。 */}
              <div className="sg-contribution-card">
                <h4><CjkText>{t('project.sleepGuardian.status.item5title')}</CjkText></h4>
                <p><CjkText>{t('project.sleepGuardian.status.item5desc')}</CjkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STYLES ── */}
        <style>{`
          #sleep-guardian-page {
            --sg-night: #0d1117;
            --sg-deep: #161b22;
            --sg-surface: var(--surface);
            --sg-text: var(--text-primary);
            --sg-muted: var(--text-tertiary);
            --sg-threat: #e53e3e;
            --sg-empathy: #7c3aed;
            --sg-friction: #d97706;
            /* 2026/08：藍與綠收進語意 token；三個條件色（threat/empathy/friction）
               依「色相保留」原則維持不動。 */
            --sg-accent: var(--accent-text);
            --sg-border: var(--border);
            
            --font-display: 'Futura', 'Tw Cen MT', 'Century Gothic', sans-serif;
            --font-body: 'DM Sans', system-ui, sans-serif;
            font-family: var(--font-body);
          }

          .sg-container {
            max-width: 1160px;
            margin: 0 auto;
            padding: 0 32px;
          }

          .sg-reveal {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.75s cubic-bezier(0.2,0.8,0.2,1),
                        transform 0.75s cubic-bezier(0.2,0.8,0.2,1);
          }
          .sg-reveal.sg-in {
            opacity: 1;
            transform: none;
          }

          .sg-hero {
            padding: 130px 0 90px;
            background: #0A1628;
            position: relative;
            overflow: hidden;
          }
          /* hero 不設寬度上限：左右緣要跟下方的圖表、卡片切在同一條線上 */
          .sg-badge-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 28px;
          }
          .sg-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: 100px;
            font-size: 13px;
            font-family: var(--font-display);
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .sg-badge--thesis {
            background: color-mix(in srgb, var(--acid) 22%, transparent);
            color: var(--acid);
            border: 1px solid color-mix(in srgb, var(--acid) 45%, transparent);
          }
          .sg-badge--status {
            background: transparent;
            color: var(--bone);
            border: 1px solid color-mix(in srgb, var(--bone) 35%, transparent);
          }
          .sg-hero-title {
            font-family: var(--font-display);
            font-size: clamp(36px, 6vw, 60px);
            font-weight: 700;
            line-height: 1.1;
            color: #fff;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
            text-transform: uppercase;
          }
          .sg-hero-sub {
            font-size: clamp(18px, 2.5vw, 24px);
            color: var(--acid);
            font-weight: 500;
            line-height: 1.5;
            margin-bottom: 28px;
            font-family: var(--font-display);
            letter-spacing: 0.2px;
          }
          .sg-hero-hook {
            font-size: 18px;
            line-height: 1.8;
            color: rgba(255,255,255,0.72);
            margin-bottom: 48px;
          }
          .sg-hero-hook em { color: #fde68a; font-style: italic; }
          /* 欄寬跟著內容走，最後一欄右緣貼齊容器，每一格都不會被擠到斷行。
             960px 以下改兩欄，見下方 media query。 */
          .sg-meta-grid {
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-content: space-between;
            gap: 24px 32px;
            padding-top: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .sg-meta-item { display: flex; flex-direction: column; gap: 4px; }
          .sg-meta-label {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            /* 0.35 在深底上只有 3.17:1，12px 需要 4.5:1 */
            color: rgba(255,255,255,0.58);
            font-family: var(--font-display);
            font-weight: 700;
          }
          .sg-meta-value {
            font-size: 14px;
            color: rgba(255,255,255,0.85);
            font-family: var(--font-body);
            font-weight: 500;
            line-height: 1.4;
          }

          /* 88→64：十三個區塊乘下去，光這一行就省下約 600px */
          .sg-section { padding: 64px 0; background: var(--card); }
          .sg-section--tinted { background: var(--sg-surface); }
          .sg-section--dark { background: var(--sg-night); }
          .sg-section-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--sg-accent);
            font-family: var(--font-display);
            font-weight: 700;
            margin-bottom: 16px;
          }
          .sg-section-label--light { color: var(--acid); }

          /* FlowLabel 在這頁沿用 sg-section-label 的字體與字距，讓拍別眉標
             跟其餘章節眉標長得一樣。--sg-accent 本來就等於 --accent-text，
             所以顏色不必另外指定；深底那段要壓過全域的 --light。 */
          .flow-label--sg {
            font-size: 13px;
            letter-spacing: 1.5px;
            font-family: var(--font-display);
            font-weight: 700;
            margin-bottom: 16px;
          }
          .flow-label--sg.flow-label--light { color: var(--acid); }

          .sg-section-title {
            font-family: var(--font-display);
            font-size: clamp(26px, 3.5vw, 38px);
            font-weight: 700;
            line-height: 1.25;
            color: var(--sg-text);
            margin-bottom: 24px;
            letter-spacing: -0.5px;
          }
          .sg-title--light { color: #fff; }

          .sg-body { font-size: 18px; line-height: 1.82; color: var(--sg-muted); margin-bottom: 20px; }
          .sg-body--light { color: rgba(255,255,255,0.65); }

          .sg-two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: start;
          }

          .sg-quote-block {
            margin: 28px 0 0;
            padding: 20px 24px;
            border-left: 3px solid var(--sg-accent);
            background: color-mix(in srgb, var(--accent) 16%, var(--surface));
            border-radius: 0 8px 8px 0;
          }
          .sg-quote { font-size: 16px; font-style: italic; line-height: 1.7; color: var(--sg-text); }

          .sg-stat-stack { display: flex; flex-direction: column; gap: 20px; }
          .sg-stat-card {
            padding: 24px;
            background: var(--sg-surface);
            border: 1px solid var(--sg-border);
            border-radius: 12px;
          }
          .sg-stat-num {
            display: block;
            font-size: 36px;
            font-weight: 800;
            color: var(--sg-text);
            font-family: var(--font-display);
            margin-bottom: 6px;
            letter-spacing: -0.5px;
          }
          .sg-stat-desc { font-size: 18px; line-height: 1.6; color: var(--sg-muted); }

          .sg-pathway-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 40px;
          }
          .sg-pathway-card {
            padding: 32px 28px;
            border-radius: 16px;
            border: 1px solid var(--sg-border);
            background: var(--card);
          }
          .sg-pathway-card--threat { border-top: 4px solid var(--sg-threat); }
          .sg-pathway-card--empathy { border-top: 4px solid var(--sg-empathy); }
          .sg-pathway-card--friction { border-top: 4px solid var(--sg-friction); }
          .sg-pathway-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 52px;
            height: 52px;
            border-radius: 12px;
            margin-bottom: 16px;
          }
          .sg-pathway-card--threat .sg-pathway-icon { background: rgba(229,62,62,0.08); color: var(--sg-threat); }
          .sg-pathway-card--empathy .sg-pathway-icon { background: rgba(124,58,237,0.08); color: var(--sg-empathy); }
          .sg-pathway-card--friction .sg-pathway-icon { background: rgba(217,119,6,0.08); color: var(--sg-friction); }
          .sg-pathway-num {
            font-size: 12px;
            font-family: var(--font-display);
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--sg-muted);
            margin-bottom: 8px;
          }
          .sg-pathway-title { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--sg-text); margin-bottom: 4px; }
          .sg-pathway-mech { font-size: 18px; font-family: var(--font-display); font-weight: 600; color: var(--sg-muted); margin-bottom: 14px; }
          .sg-pathway-desc { font-size: 18px; line-height: 1.7; color: var(--sg-muted); margin-bottom: 20px; }
          .sg-pathway-example { padding: 14px 16px; border-radius: 8px; background: var(--sg-surface); }
          .sg-example-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-muted);
            font-family: var(--font-display);
            font-weight: 600;
            display: block;
            margin-bottom: 6px;
          }
          .sg-example-text { font-size: 18px; line-height: 1.6; color: var(--sg-text); font-style: italic; }

          .sg-design-matrix {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 32px;
            margin: 40px 0;
            flex-wrap: wrap;
          }
          .sg-matrix-axis {
            padding: 28px 32px;
            border-radius: 16px;
            border: 1px solid var(--sg-border);
            min-width: 280px;
          }
          .sg-matrix-axis--between { background: color-mix(in srgb, var(--accent) 16%, var(--surface)); border-color: color-mix(in srgb, var(--accent-text) 25%, transparent); }
          .sg-matrix-axis--within { background: rgba(124,58,237,0.04); border-color: rgba(124,58,237,0.2); }
          .sg-axis-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-muted);
            font-family: var(--font-display);
            font-weight: 600;
            margin-bottom: 8px;
          }
          .sg-axis-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--sg-text); margin-bottom: 16px; }
          .sg-axis-items { display: flex; flex-direction: column; gap: 8px; }
          .sg-axis-item {
            display: inline-block;
            font-size: 14px;
            padding: 6px 12px;
            border-radius: 6px;
            background: rgba(0,0,0,0.04);
            color: var(--sg-text);
            font-family: var(--font-display);
            font-weight: 500;
          }
          /* 色相保留、明度自適應：三個訴求色相不變，但文字混入 --text-primary，
             底色混入 --surface，這樣暗色模式下飽和中間調才不會掉到 AA 以下。 */
          .sg-axis-item--threat {
            background: color-mix(in srgb, var(--sg-threat) 14%, var(--surface));
            color: color-mix(in srgb, var(--sg-threat) 55%, var(--text-primary));
          }
          .sg-axis-item--empathy {
            background: color-mix(in srgb, var(--sg-empathy) 14%, var(--surface));
            color: color-mix(in srgb, var(--sg-empathy) 55%, var(--text-primary));
          }
          .sg-axis-item--friction {
            background: color-mix(in srgb, var(--sg-friction) 14%, var(--surface));
            color: color-mix(in srgb, var(--sg-friction) 55%, var(--text-primary));
          }
          .sg-axis-item--baseline {
            background: color-mix(in srgb, var(--sg-text) 6%, transparent);
            color: var(--sg-muted);
          }
          .sg-matrix-cross { font-size: 48px; font-weight: 300; color: var(--sg-muted); }

          .sg-info-box {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 18px 22px;
            background: color-mix(in srgb, var(--accent) 16%, var(--surface));
            border: 1px solid color-mix(in srgb, var(--accent-text) 22%, transparent);
            border-radius: 10px;
            margin-bottom: 40px;
            color: var(--sg-accent);
          }
          .sg-info-box svg { flex-shrink: 0; margin-top: 2px; }
          .sg-info-box p { font-size: 18px; line-height: 1.6; color: var(--sg-text); margin: 0; }

          .sg-decision-row {
            display: grid;
            /* 剛好四張，2×2 最平衡；窄螢幕在下方的 media query 收成單欄 */
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .sg-decision-card {
            padding: 24px;
            border: 1px solid var(--sg-border);
            border-radius: 12px;
            background: var(--sg-surface);
          }
          .sg-decision-card svg { color: var(--sg-accent); margin-bottom: 12px; }
          .sg-decision-card h4 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; }
          .sg-decision-card p { font-size: 18px; line-height: 1.6; color: var(--sg-muted); }

          .sg-app-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            margin-top: 40px;
          }
          .sg-app-feature {
            padding: 28px;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            background: rgba(255,255,255,0.04);
          }
          .sg-app-feature-num {
            font-size: 12px;
            font-family: var(--font-display);
            font-weight: 800;
            letter-spacing: 1px;
            color: var(--acid);
            margin-bottom: 10px;
          }
          .sg-app-feature-title { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 10px; }
          .sg-app-feature-desc { font-size: 18px; line-height: 1.7; color: rgba(255,255,255,0.55); }

          /* =========================================
             圖片展示區塊 Styles 
             ========================================= */
          .sg-instrument-visuals {
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            gap: 60px;
          }
          
          .sg-visual-block {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .sg-visual-title {
            font-family: var(--font-display);
            font-size: 18px;
            color: var(--acid);
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 12px;
            font-weight: 700;
          }

          /* App Screens Grid (Auto-fit, Min 120px 確保清晰) */
          .sg-app-screens-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 20px;
            justify-items: center;
          }
          
          /* figure 只負責「手機外框 + 說明」的直向堆疊，外框本身仍是 button */
          .sg-app-screen-item {
            margin: 0;
            width: 100%;
            max-width: 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .sg-app-screen-wrap {
            display: block;
            padding: 0;
            width: 100%;
            aspect-ratio: 9/19.5;
            background: #000;
            border-radius: 20px;
            overflow: hidden;
            border: 4px solid #333;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transition: transform 0.3s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s ease;
            cursor: zoom-in;
            line-height: 0;
          }

          .sg-app-screen-wrap:hover,
          .sg-app-screen-wrap:focus-visible {
            transform: translateY(-8px) scale(1.04);
            box-shadow: 0 18px 40px rgba(0,0,0,0.55);
            outline: none;
          }
          .sg-app-screen-wrap:focus-visible { border-color: var(--acid); }

          .sg-app-screen-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* 大圖 Wrapper (Notion & Code) */
          .sg-notion-img-wrap,
          .sg-code-img-wrap {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.15);
            background: rgba(255,255,255,0.02);
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          }

          .sg-featured-img {
            width: 100%;
            height: auto;
            display: block;
          }

          /* 壓縮：階段間距 32→20，卡片改網格排列，整段高度約砍 1/3 */
          .sg-measure-timeline {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 28px;
          }
          .sg-measure-phase {
            border-left: 2px solid var(--sg-border);
            padding-left: 22px;
            position: relative;
          }
          .sg-measure-phase::before {
            content: '';
            position: absolute;
            left: -5px;
            top: 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--sg-accent);
          }
          .sg-phase-label {
            font-size: 13px;
            font-family: var(--font-display);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-accent);
            margin-bottom: 10px;
          }
          .sg-measure-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; }
          .sg-measure-cards--objective .sg-measure-card {
            border-color: color-mix(in srgb, var(--accent-text) 28%, transparent);
            background: color-mix(in srgb, var(--accent) 16%, var(--surface));
          }
          .sg-measure-card {
            padding: 13px 15px;
            border: 1px solid var(--sg-border);
            border-radius: 9px;
            background: var(--card);
          }
          .sg-measure-abbr {
            font-size: 13px;
            font-family: var(--font-display);
            font-weight: 800;
            letter-spacing: 1px;
            color: var(--sg-accent);
            margin-bottom: 4px;
          }
          .sg-measure-name { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--sg-text); margin-bottom: 4px; line-height: 1.35; }
          .sg-measure-purpose { font-size: 18px; line-height: 1.7; color: var(--sg-muted); }

          /* RQ 表格：原本六張大卡，改表格後高度砍半，四欄一列 */
          .sg-rq-table-wrap { margin-top: 32px; overflow-x: auto; }
          .sg-rq-table {
            width: 100%;
            min-width: 760px;
            border-collapse: collapse;
            text-align: left;
          }
          .sg-rq-table th, .sg-rq-table td {
            padding: 13px 15px;
            vertical-align: top;
            border-bottom: 1px solid var(--sg-border);
          }
          .sg-rq-table thead th {
            font-family: var(--font-mono);
            font-size: 10.5px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
            color: var(--sg-muted);
            font-weight: 400;
            border-bottom: 1px solid var(--border-strong);
            padding-bottom: 10px;
          }
          .sg-rq-table tbody th { width: 27%; }
          .sg-rq-table td { width: 24.33%; }
          .sg-rq-table td:last-child { width: 15%; }
          .sg-rq-tag {
            display: block;
            font-family: var(--font-display);
            font-size: 11.5px;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: var(--accent-text);
            margin-bottom: 6px;
          }
          .sg-rq-q {
            display: block;
            font-family: var(--font-display);
            font-size: 18px;
            font-weight: 700;
            color: var(--sg-text);
            line-height: 1.5;
          }
          .sg-rq-pred { font-size: 18px; line-height: 1.7; color: var(--sg-muted); }
          .sg-rq-actual { font-size: 18px; line-height: 1.7; color: var(--sg-text); }
          .sg-rq-verdict {
            display: inline-block;
            font-family: var(--font-display);
            font-size: 11.5px;
            font-weight: 800;
            letter-spacing: 0.4px;
            padding: 5px 11px;
            border-radius: 999px;
            background: color-mix(in srgb, var(--accent) 26%, var(--surface));
            border: 1px solid color-mix(in srgb, var(--accent-text) 25%, transparent);
            color: var(--sg-text);
            white-space: nowrap;
          }
          .sg-analysis-note {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-top: 28px;
            padding: 16px 20px;
            background: color-mix(in srgb, var(--accent) 16%, var(--surface));
            border-radius: 8px;
            color: var(--sg-accent);
          }
          .sg-analysis-note svg { flex-shrink: 0; margin-top: 2px; }
          .sg-analysis-note p { font-size: 18px; line-height: 1.6; color: var(--sg-text); margin: 0; }

          /* ── Design implications ── */
          .sg-impl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .sg-impl-card {
            padding: 28px;
            border: 1px solid var(--sg-border);
            border-radius: 14px;
            background: var(--sg-surface);
            border-top: 3px solid var(--accent-text);
          }
          .sg-impl-num {
            display: block;
            font-family: var(--font-display);
            font-size: 13px; font-weight: 800; letter-spacing: 1.5px;
            color: var(--accent-text); margin-bottom: 10px;
          }
          .sg-impl-card h4 { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--sg-text); margin-bottom: 10px; line-height: 1.35; }
          .sg-impl-card p { font-size: 18px; line-height: 1.75; color: var(--sg-muted); margin: 0; }

          /* ── Scope & limitations ── */
          .sg-limits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .sg-limit-card { padding: 22px 24px; border-left: 3px solid var(--sg-border); }
          .sg-limit-card h4 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; }
          .sg-limit-card p { font-size: 18px; line-height: 1.7; color: var(--sg-muted); margin: 0; }

          /* ── Pilot：原構想 → 砍掉的理由 → 收斂後 ── */
          .sg-pivot {
            display: grid;
            grid-template-columns: 1fr 1.4fr 1fr;
            gap: 18px;
            align-items: stretch;
            margin-bottom: 44px;
          }
          .sg-pivot-col {
            padding: 22px 24px;
            border-radius: 12px;
            border: 1px solid var(--sg-border);
            background: var(--sg-surface);
          }
          .sg-pivot-col--after {
            border-color: var(--accent-text);
            background: color-mix(in srgb, var(--accent) 12%, var(--sg-surface));
          }
          .sg-pivot-label {
            display: block;
            font-family: var(--font-mono);
            font-size: 12px; letter-spacing: 1.3px; text-transform: uppercase;
            color: var(--sg-muted); margin-bottom: 12px;
          }
          .sg-pivot-col--after .sg-pivot-label { color: var(--accent-text); }
          .sg-pivot-col > p { font-size: 18px; line-height: 1.75; color: var(--sg-text); margin: 0; }
          .sg-pivot-col dl { margin: 0; display: flex; flex-direction: column; gap: 12px; }
          .sg-pivot-col dt {
            font-family: var(--font-display); font-size: 18px; font-weight: 700;
            color: var(--sg-text); margin-bottom: 3px;
          }
          .sg-pivot-col dd { margin: 0; font-size: 18px; line-height: 1.65; color: var(--sg-muted); }

          .sg-turn-label {
            display: block;
            font-family: var(--font-mono);
            font-size: 12px; letter-spacing: 1.3px; text-transform: uppercase;
            color: var(--accent-text); margin-bottom: 16px;
          }
          .sg-turn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .sg-turn-card {
            padding: 24px;
            border-radius: 12px;
            border: 1px solid var(--sg-border);
            background: var(--sg-surface);
            display: flex; flex-direction: column;
          }
          .sg-turn-card h4 {
            font-family: var(--font-display); font-size: 20px; font-weight: 700;
            color: var(--sg-text); margin-bottom: 10px; line-height: 1.4;
          }
          .sg-turn-card > p { font-size: 18px; line-height: 1.7; color: var(--sg-muted); margin: 0; flex: 1; }
          .sg-turn-decision {
            margin-top: 14px !important;
            padding-top: 14px;
            border-top: 1px solid var(--sg-border);
            color: var(--sg-text) !important;
            font-weight: 500;
          }
          .sg-method-line {
            margin: 32px 0 0;
            font-family: var(--font-mono);
            font-size: 13px; line-height: 1.8; color: var(--sg-muted);
          }

          /* ── 刺激物實圖 ── */
          /* 設計摩擦那張原圖是 1.40:1，其餘四張刺激物是 4.54:1，高度差三倍。
             用 auto-fit 會讓第一列被它撐高，左邊兩欄空出一塊。改成固定三欄，
             把它釘在第三欄跨兩列，四張橫幅就填滿左側，不留空洞。 */
          .sg-stim-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: start;
            gap: 20px;
            margin-bottom: 40px;
          }
          .sg-stim-item--tall { grid-column: 3; grid-row: 1 / span 2; }
          .sg-stim-item { margin: 0; display: flex; flex-direction: column; gap: 12px; }
          .sg-stim-btn {
            display: block; padding: 0; border: 1px solid var(--sg-border);
            background: var(--sg-surface);
            border-radius: 14px; overflow: hidden; cursor: zoom-in; line-height: 0;
            transition: transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease, border-color .3s ease;
          }
          .sg-stim-btn img { width: 100%; height: auto; display: block; }
          .sg-stim-btn:hover, .sg-stim-btn:focus-visible {
            transform: translateY(-4px);
            box-shadow: 0 16px 36px color-mix(in srgb, var(--sg-text) 16%, transparent);
            border-color: var(--accent-text);
            outline: none;
          }
          .sg-stim-name {
            display: flex; align-items: center; gap: 8px;
            font-family: var(--font-display); font-size: 18px; font-weight: 700;
            color: var(--sg-text); margin-bottom: 4px;
          }
          .sg-stim-name i { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
          .sg-stim-sub { display: block; font-size: 14px; line-height: 1.55; color: var(--sg-muted); }

          @media (max-width: 959px) {
            .sg-stim-grid { grid-template-columns: 1fr; }
            .sg-stim-item--tall { grid-column: auto; grid-row: auto; }
          }

          @media (prefers-reduced-motion: reduce) {
            .sg-stim-btn { transition: none !important; }
            .sg-stim-btn:hover { transform: none !important; }
          }

          /* ── 刺激物設計決策 ── */
          .sg-decisions { display: flex; flex-direction: column; gap: 4px; }
          .sg-decision {
            display: grid; grid-template-columns: 58px 1fr; gap: 18px;
            padding: 20px 0;
            border-top: 1px solid var(--sg-border);
          }
          .sg-decision:last-child { border-bottom: 1px solid var(--sg-border); }
          .sg-decision-num {
            font-family: var(--font-mono); font-size: 13px;
            color: var(--accent-text); padding-top: 3px;
          }
          .sg-decision h4 {
            font-family: var(--font-display); font-size: 22px; font-weight: 700;
            color: var(--sg-text); margin-bottom: 10px; line-height: 1.35;
          }
          /* [[粗體]] 標記出來的重點。內文是 muted 色，粗體改用亮一階的 sg-text，
             光靠字重在暗底上跳不出來。 */
          .sg-decision p strong,
          .sg-body strong,
          .sg-decision-card p strong { color: var(--sg-text); font-weight: 700; }
          .sg-decision p { font-size: 18px; line-height: 1.8; color: var(--sg-muted); margin: 0; }

          @media (max-width: 900px) {
            .sg-pivot, .sg-turn-grid { grid-template-columns: 1fr; }
            .sg-decision { grid-template-columns: 1fr; gap: 8px; }
          }

          /* ── 統計量白話說明 ── */
          .sg-gloss {
            margin-top: 28px;
            margin-bottom: 24px;
            padding: 20px 22px;
            border: 1px solid var(--sg-border);
            border-left: 3px solid var(--accent-text);
            border-radius: 12px;
            background: var(--sg-surface);
          }
          .sg-gloss-heading {
            display: block;
            font-family: var(--font-display);
            font-size: 13px; font-weight: 800;
            letter-spacing: 1.2px; text-transform: uppercase;
            color: var(--accent-text);
            margin-bottom: 16px;
          }
          .sg-gloss dl {
            display: grid; grid-template-columns: repeat(2, 1fr);
            gap: 16px 32px; margin: 0;
          }
          .sg-gloss dt {
            font-family: var(--font-mono); font-size: 13px;
            color: var(--sg-text); margin-bottom: 4px;
          }
          .sg-gloss dd { margin: 0; font-size: 18px; line-height: 1.65; color: var(--sg-muted); }
          @media (max-width: 760px) { .sg-gloss dl { grid-template-columns: 1fr; } }

          /* ── Charts ── */
          .sg-charts { display: flex; flex-direction: column; gap: 34px; margin-top: 38px; }
          .sg-chart { margin: 0; }
          .sg-chart-head h4 { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; }
          .sg-chart-head p { font-size: 18px; line-height: 1.65; color: var(--sg-muted); margin: 0 0 16px; }
          .sg-chart-foot { font-family: var(--font-mono); font-size: 12px; color: var(--sg-muted); margin: 12px 0 0; }

          /* Heatmap */
          .sg-heat { display: flex; flex-direction: column; gap: 6px; min-width: 560px; }
          .sg-heat-row { display: grid; grid-template-columns: 190px repeat(3, 1fr); gap: 6px; align-items: stretch; }
          .sg-heat-row--head > span {
            font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px;
            text-transform: uppercase; color: var(--sg-muted); text-align: center; padding-bottom: 4px;
          }
          .sg-heat-golden { position: relative; color: var(--accent-text) !important; font-weight: 700; }
          .sg-heat-golden em {
            display: block; font-style: normal; font-size: 9px;
            letter-spacing: 1.2px; color: var(--accent-text); opacity: .85;
          }
          .sg-heat-rowlabel {
            font-size: 12.5px; color: var(--sg-text); display: flex; align-items: center;
            padding-right: 10px; line-height: 1.4;
          }
          .sg-heat-cell {
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            gap: 4px; padding: 12px 10px; border-radius: 8px;
            background: var(--sg-surface);
            border: 1px solid var(--sg-border);
            text-align: center; min-height: 66px;
          }
          .sg-heat-cell b { font-family: var(--font-mono); font-size: 13px; color: var(--sg-text); }
          .sg-heat-cell i { font-style: normal; font-size: 10.5px; line-height: 1.35; color: var(--sg-text); }
          .sg-heat-bar {
            display: block; width: 100%; height: 6px; margin-top: 2px;
            border-radius: 999px;
            background: color-mix(in srgb, var(--sg-text) 10%, transparent);
            overflow: hidden;
          }
          .sg-heat-bar > span { display: block; height: 100%; background: var(--accent); border-radius: 999px; }
          .sg-heat-cell--audio {
            border-color: var(--accent-text); border-width: 2px;
            background: color-mix(in srgb, var(--accent) 8%, var(--sg-surface));
          }

          /* 共用：圖例、參考線、數值欄 */
          .sg-legend { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 20px; margin-bottom: 22px; }
          .sg-legend > span { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; color: var(--sg-text); }
          .sg-legend i { width: 13px; height: 13px; border-radius: 3px; flex-shrink: 0; }
          .sg-legend em { font-style: normal; font-family: var(--font-mono); font-size: 11.5px; color: var(--sg-muted); }
          .sg-ref { position: absolute; top: 0; bottom: 0; width: 1px; background: color-mix(in srgb, var(--sg-text) 9%, transparent); }

          /* η²p 圖：單一 acid 色相，靠填充紋理分三個系列。
             色盲與黑白列印都分得出來，也不必引入第四個色相。 */
          .sg-fill--solid { background: var(--accent); }
          .sg-fill--hatch {
            background:
              repeating-linear-gradient(45deg,
                var(--accent) 0 3px,
                color-mix(in srgb, var(--accent) 22%, transparent) 3px 6px);
          }
          .sg-fill--outline {
            background: color-mix(in srgb, var(--accent) 14%, transparent);
            box-shadow: inset 0 0 0 2px var(--accent);
          }
          .sg-legend i.sg-fill--outline { box-shadow: inset 0 0 0 2px var(--accent); }
          /* 數值一律留在自己的欄位，永遠不壓在彩色長條上 */
          .sg-val {
            font-family: var(--font-mono); font-size: 13px;
            color: var(--sg-muted); text-align: right; white-space: nowrap;
            font-variant-numeric: tabular-nums;
          }
          .sg-val--sig { color: var(--sg-text); font-weight: 700; }

          /* Intention → behaviour */
          .sg-link-chart { display: flex; flex-direction: column; gap: 16px; min-width: 520px; }
          .sg-link-row { display: grid; grid-template-columns: 132px 1fr 74px; gap: 16px; align-items: center; }
          .sg-link-label { font-size: 13.5px; color: var(--sg-text); line-height: 1.35; }
          .sg-link-label em { display: block; font-style: normal; font-family: var(--font-mono); font-size: 10.5px; color: var(--sg-muted); }
          .sg-link-track { position: relative; height: 30px; }
          .sg-link-axis, .sg-d-axis { position: absolute; top: 0; bottom: 0; width: 1px; background: color-mix(in srgb, var(--sg-text) 34%, transparent); }
          .sg-link-bar { position: absolute; top: 5px; height: 20px; border-radius: 3px; }
          .sg-link-bar--sig { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-text) 55%, transparent); }

          /* Cohen's d */
          .sg-d-chart { display: flex; flex-direction: column; gap: 20px; min-width: 560px; }
          .sg-d-group { display: grid; grid-template-columns: 62px 1fr; gap: 14px; align-items: center; }
          .sg-d-label { font-family: var(--font-mono); font-size: 13px; color: var(--sg-text); }
          .sg-d-bars { display: flex; flex-direction: column; gap: 4px; }
          .sg-d-row { display: grid; grid-template-columns: 1fr 66px; gap: 12px; align-items: center; }
          .sg-d-track { position: relative; height: 17px; }
          .sg-d-bar { position: absolute; top: 2px; height: 13px; border-radius: 2px; }
          .sg-d-bar--sig { box-shadow: 0 0 0 2px color-mix(in srgb, var(--sg-text) 30%, transparent); }
          .sg-d-row .sg-val { font-size: 12px; }

          /* η²p 直式分組長條（口試簡報 p.24 的格式） */
          .sg-eta { min-width: 620px; }
          .sg-eta-plot {
            position: relative;
            height: 250px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 26px;
            padding: 26px 8px 0;
            border-bottom: 1px solid color-mix(in srgb, var(--sg-text) 30%, transparent);
          }
          .sg-eta-ref {
            position: absolute; left: 0; right: 0; height: 0;
            border-top: 1px dashed color-mix(in srgb, var(--sg-text) 26%, transparent);
          }
          .sg-eta-ref > span {
            position: absolute; right: 0; top: -8px;
            font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .5px;
            color: var(--sg-muted); background: var(--sg-surface); padding: 0 6px;
          }
          .sg-eta-group { position: relative; height: 100%; }
          .sg-eta-bars { display: flex; align-items: flex-end; justify-content: center; gap: 7px; height: 100%; }
          /* 數字直接疊在長條正上方：用 flex-end 堆疊，不需要另外算位移 */
          .sg-eta-barwrap {
            flex: 1; max-width: 34px; height: 100%;
            display: flex; flex-direction: column; justify-content: flex-end;
            align-items: center; gap: 6px;
          }
          .sg-eta-bar { display: block; width: 100%; border-radius: 3px 3px 0 0; flex-shrink: 0; }
          /* 訴求色明度接近，加一道細邊確保形狀在兩種模式都看得出來 */
          .sg-d-bar, .sg-link-bar {
            outline: 1px solid color-mix(in srgb, var(--sg-text) 28%, transparent);
            outline-offset: -1px;
          }
          .sg-eta-num {
            font-family: var(--font-mono); font-size: 11px; font-weight: 700;
            color: var(--sg-text); white-space: nowrap;
            font-variant-numeric: tabular-nums;
          }
          .sg-eta-axis {
            display: grid; grid-template-columns: repeat(5, 1fr); gap: 26px;
            padding: 10px 8px 0;
          }
          .sg-eta-axis > span {
            text-align: center; font-size: 12px; line-height: 1.35;
            color: var(--sg-text); white-space: pre-line;
          }

          /* 圖表在窄螢幕自己橫捲，頁面本身不橫捲 */
          .sg-heat, .sg-link-chart, .sg-d-chart { max-width: 100%; }
          .sg-chart { overflow-x: auto; }

          /* ── App screens：說明文字 + 點擊放大 ── */
          .sg-zoom-hint {
            font-family: var(--font-mono); font-size: 12px; letter-spacing: 1px;
            text-transform: uppercase; color: var(--acid); opacity: .8; margin: 0 0 16px;
          }
          .sg-app-screen-cap {
            font-size: 14px; line-height: 1.45; text-align: center;
            color: rgba(255,255,255,0.72);
          }

          .sg-lightbox {
            position: fixed; inset: 0; z-index: 1000;
            background: rgba(0,0,0,.9);
            display: flex; align-items: center; justify-content: center;
            padding: 32px; cursor: zoom-out;
          }
          .sg-lightbox figure { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 14px; cursor: default; }
          .sg-lightbox img { max-width: 88vw; max-height: 80vh; object-fit: contain; border-radius: 12px; }
          .sg-lightbox figcaption { font-size: 15px; color: rgba(255,255,255,.85); }
          .sg-lightbox-close {
            position: fixed; top: 24px; right: 24px;
            width: 44px; height: 44px; border-radius: 50%;
            background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.2);
            color: #fff; font-size: 20px; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
          }

          @media (max-width: 760px) {
            .sg-impl-grid, .sg-limits-grid { grid-template-columns: 1fr; }
          }
          @media (prefers-reduced-motion: reduce) {
            .sg-app-screen-btn { transition: none !important; }
            .sg-app-screen-btn:hover { transform: none !important; }
          }

          /* ── Hero findings strip（靜態深底，用 acid 當強調）── */
          .sg-hero-findings {
            margin-top: 36px;
            padding-top: 26px;
            border-top: 1px solid color-mix(in srgb, var(--bone) 22%, transparent);
          }
          .sg-hero-findings-label {
            display: block;
            font-family: var(--font-display);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--acid);
            margin-bottom: 18px;
          }
          .sg-hero-findings-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }
          .sg-hero-finding-num {
            display: block;
            font-family: var(--font-display);
            font-size: clamp(20px, 2.2vw, 27px);
            font-weight: 700;
            letter-spacing: -0.5px;
            color: var(--bone);
            margin-bottom: 7px;
          }
          .sg-hero-finding-desc {
            display: block;
            font-size: 18px;
            line-height: 1.55;
            color: color-mix(in srgb, var(--bone) 72%, transparent);
          }

          /* ── Results ── */
          .sg-results-intro {
            font-size: 16px;
            line-height: 1.7;
            color: var(--sg-muted);
            margin: 0 0 40px;
          }
          /* 圖表併進卡片後一律單欄：圖表本身需要橫向空間 */
          .sg-results-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .sg-result-card {
            padding: 22px 24px;
            border: 1px solid var(--sg-border);
            border-radius: 14px;
            background: var(--sg-surface);
          }
          .sg-result-num {
            display: block;
            font-family: var(--font-mono);
            font-size: 12px;
            letter-spacing: 1.5px;
            color: var(--accent-text);
            margin-bottom: 12px;
          }
          .sg-result-card h4 {
            font-family: var(--font-display);
            font-size: 18px;
            font-weight: 700;
            color: var(--sg-text);
            margin-bottom: 10px;
            line-height: 1.35;
          }
          /* acid 色調底上的內文一律改用 --sg-text。
             暗色模式的 muted (#A6A199) 壓在 color-mix(accent 16%, surface) 上只有 3.92:1。
             這裡要比 .sg-result-card p 更高權重，否則會被後面的規則蓋掉。 */
          .sg-matrix-axis--between .sg-axis-label { color: var(--sg-text); }
          .sg-measure-cards--objective .sg-measure-purpose { color: var(--sg-text); }
          .sg-result-card p {
            font-size: 18px;
            line-height: 1.75;
            color: var(--sg-muted);
            margin: 0;
          }
          /* 卡片內嵌圖表 */
          .sg-result-card .sg-chart {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid var(--sg-border);
          }
          .sg-result-card .sg-chart-head p { margin-bottom: 14px; font-size: 14px; }

          @media (max-width: 760px) {
            .sg-hero-findings-row { grid-template-columns: 1fr; gap: 20px; }
          }

          .sg-contribution-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 40px;
          }
          .sg-contribution-card {
            padding: 28px;
            border-radius: 14px;
            border: 1px solid var(--sg-border);
          }
          /* 研究已於 2026/06/26 口試完成，六張卡不再掛狀態徽章（全部一樣就沒有資訊量）。 */
          .sg-contribution-card h4 { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--sg-text); margin-bottom: 10px; line-height: 1.4; }
          .sg-contribution-card p { font-size: 18px; line-height: 1.7; color: var(--sg-muted); }

          /* 中文四欄自然寬度加總約 1090px，1100 以下改兩欄，每格才不會被擠成兩行 */
          @media (max-width: 1100px) {
            .sg-meta-grid { grid-template-columns: 1fr 1fr; justify-content: stretch; }
          }

          @media (max-width: 960px) {
            .sg-two-col,
            .sg-pathway-grid,
            .sg-decision-row,
            .sg-app-features,
            .sg-decision-row,
            .sg-contribution-grid { grid-template-columns: 1fr; }
            .sg-design-matrix { flex-direction: column; align-items: stretch; }
            .sg-matrix-cross { text-align: center; }
            .sg-app-screens-grid { grid-template-columns: repeat(3, 1fr); }
          }

          @media (max-width: 640px) {
            .sg-hero { padding: 100px 0 60px; }
            .sg-section { padding: 60px 0; }
            .sg-container { padding: 0 20px; }
            .sg-app-screens-grid { grid-template-columns: repeat(2, 1fr); }
          }

          @media (prefers-reduced-motion: reduce) {
            .sg-reveal {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
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

      {lightbox && (
        <div className="sg-lightbox" onClick={() => setLightbox(null)}>
          <figure onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption><CjkText>{lightbox.caption}</CjkText></figcaption>
          </figure>
          <button type="button" className="sg-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
        </div>
      )}

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#1A1A18', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}