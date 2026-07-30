import { useEffect, useState } from 'react';
import sleepGuardianCover from '../../assets/images/home/sleep-guardian-cover.png';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Moon, Brain, Smartphone, FlaskConical, BarChart3,
  ChevronRight, Shield, Heart, Zap, Clock, Activity,
  BookOpen, Layers, CheckCircle2, AlertTriangle
} from 'lucide-react';

// 引入你指定的新圖片
import codeImg from '../../assets/images/project/sleep-guardian/sleep-guardian-code.png';
import notionImg from '../../assets/images/project/sleep-guardian/experiment-notion.png';
import appAudio from '../../assets/images/project/sleep-guardian/audio.png';
import appEmpathy from '../../assets/images/project/sleep-guardian/empathy.png';
import appFinish from '../../assets/images/project/sleep-guardian/finish.png';
import appIntro2 from '../../assets/images/project/sleep-guardian/intro-2.png';
import appIntro from '../../assets/images/project/sleep-guardian/intro.png';
import appStatistic from '../../assets/images/project/sleep-guardian/statistic.png';
import appSurvey from '../../assets/images/project/sleep-guardian/survey.png';

export default function SleepGuardian() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
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

  // App screens 陣列，方便 map 渲染
  const appScreens = [
    { src: appIntro, alt: t('project.sleepGuardian.appAlts.intro') },
    { src: appIntro2, alt: t('project.sleepGuardian.appAlts.setup') },
    { src: appEmpathy, alt: t('project.sleepGuardian.framework.empathy.title') },
    { src: appAudio, alt: t('project.sleepGuardian.appAlts.audio') },
    { src: appSurvey, alt: t('project.sleepGuardian.appAlts.survey') },
    { src: appStatistic, alt: t('project.sleepGuardian.appAlts.stats') },
    { src: appFinish, alt: t('project.sleepGuardian.appAlts.finish') },
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
                  <BookOpen size={14} />{t('project.sleepGuardian.hero.badge')}</span>
                <span className="sg-badge sg-badge--status">
                  <Activity size={14} />{t('project.sleepGuardian.hero.status')}</span>
              </div>

              <h1 className="sg-hero-title">{t('project.sleepGuardian.hero.title')}</h1>
              <p className="sg-hero-sub">{t('project.sleepGuardian.hero.subtitle1')}<br />{t('project.sleepGuardian.hero.subtitle2')}</p>

              <p className="sg-hero-hook">{t('project.sleepGuardian.hero.introA')}{' '}<em>{t('project.sleepGuardian.hero.introHighlight')}</em>{' '}{t('project.sleepGuardian.hero.introB')}</p>

              <div className="sg-meta-grid">
                <div className="sg-meta-item">
                  <span className="sg-meta-label">{t('project.sleepGuardian.hero.roleLabel')}</span>
                  <span className="sg-meta-value">{t('project.sleepGuardian.hero.roleValue')}</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">{t('project.sleepGuardian.hero.frameworkLabel')}</span>
                  <span className="sg-meta-value">{t('project.sleepGuardian.hero.frameworkValue')}</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">{t('project.sleepGuardian.hero.methodLabel')}</span>
                  <span className="sg-meta-value">{t('project.sleepGuardian.hero.methodValue')}</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">{t('project.sleepGuardian.hero.venueLabel')}</span>
                  <span className="sg-meta-value">{t('project.sleepGuardian.hero.venueValue')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <Brain size={18} />{t('project.sleepGuardian.problem.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.problem.title')}</h2>
            <div className="sg-two-col">
              <div>
                <p className="sg-body">
                  <strong>{t('project.sleepGuardian.problem.p1a')}</strong>{' '}{t('project.sleepGuardian.problem.p1b')}{' '}<em>{t('project.sleepGuardian.problem.p1em')}</em>{' '}{t('project.sleepGuardian.problem.p1c')}</p>
                <p className="sg-body">{t('project.sleepGuardian.problem.p2')}</p>
                <div className="sg-quote-block">
                  <p className="sg-quote">{t('project.sleepGuardian.problem.quote')}</p>
                </div>
              </div>
              <div className="sg-stat-stack">
                <div className="sg-stat-card">
                  <span className="sg-stat-num">30%</span>
                  <span className="sg-stat-desc">{t('project.sleepGuardian.problem.stat1desc')}</span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num">{t('project.sleepGuardian.problem.stat2num')}</span>
                  <span className="sg-stat-desc">{t('project.sleepGuardian.problem.stat2desc')}</span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num">{t('project.sleepGuardian.problem.stat3num')}</span>
                  <span className="sg-stat-desc">{t('project.sleepGuardian.problem.stat3desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THEORETICAL FRAMEWORK ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <Layers size={18} />{t('project.sleepGuardian.framework.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.framework.title')}</h2>
            <p className="sg-body sg-body--wide">{t('project.sleepGuardian.framework.introA')}{' '}<strong>{t('project.sleepGuardian.framework.introEm')}</strong>{' '}{t('project.sleepGuardian.framework.introB')}</p>
            <div className="sg-pathway-grid">
              <div className="sg-pathway-card sg-pathway-card--threat">
                <div className="sg-pathway-icon">
                  <AlertTriangle size={28} />
                </div>
                <div className="sg-pathway-num">01</div>
                <h3 className="sg-pathway-title">{t('project.sleepGuardian.framework.threat.title')}</h3>
                <p className="sg-pathway-mech">{t('project.sleepGuardian.framework.threat.pathway')}</p>
                <p className="sg-pathway-desc">{t('project.sleepGuardian.framework.threat.desc')}</p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">{t('project.sleepGuardian.framework.exampleLabel')}</span>
                  <p className="sg-example-text">{t('project.sleepGuardian.framework.threat.example')}</p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--empathy">
                <div className="sg-pathway-icon">
                  <Heart size={28} />
                </div>
                <div className="sg-pathway-num">02</div>
                <h3 className="sg-pathway-title">{t('project.sleepGuardian.framework.empathy.title')}</h3>
                <p className="sg-pathway-mech">{t('project.sleepGuardian.framework.empathy.pathway')}</p>
                <p className="sg-pathway-desc">{t('project.sleepGuardian.framework.empathy.desc')}</p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">{t('project.sleepGuardian.framework.exampleLabel')}</span>
                  <p className="sg-example-text">{t('project.sleepGuardian.framework.empathy.example')}</p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--friction">
                <div className="sg-pathway-icon">
                  <Zap size={28} />
                </div>
                <div className="sg-pathway-num">03</div>
                <h3 className="sg-pathway-title">{t('project.sleepGuardian.framework.friction.title')}</h3>
                <p className="sg-pathway-mech">{t('project.sleepGuardian.framework.friction.pathway')}</p>
                <p className="sg-pathway-desc">{t('project.sleepGuardian.framework.friction.descA')}{' '}<em>{t('project.sleepGuardian.framework.friction.descEm')}</em>{t('project.sleepGuardian.framework.friction.descB')}</p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">{t('project.sleepGuardian.framework.friction.interactionLabel')}</span>
                  <p className="sg-example-text">{t('project.sleepGuardian.framework.friction.interactionDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIMENT DESIGN ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <FlaskConical size={18} />{t('project.sleepGuardian.experiment.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.experiment.title')}</h2>
            <p className="sg-body sg-body--wide">{t('project.sleepGuardian.experiment.introA')}{' '}<strong>{t('project.sleepGuardian.experiment.introEm')}</strong>{' '}{t('project.sleepGuardian.experiment.introB')}</p>

            <div className="sg-design-matrix">
              <div className="sg-matrix-axis sg-matrix-axis--between">
                <div className="sg-axis-label">{t('project.sleepGuardian.experiment.betweenLabel')}</div>
                <div className="sg-axis-title">{t('project.sleepGuardian.experiment.betweenTitle')}</div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item sg-axis-item--threat">{t('project.sleepGuardian.framework.threat.title')}</span>
                  <span className="sg-axis-item sg-axis-item--empathy">{t('project.sleepGuardian.framework.empathy.title')}</span>
                  <span className="sg-axis-item sg-axis-item--friction">{t('project.sleepGuardian.framework.friction.title')}</span>
                </div>
              </div>

              <div className="sg-matrix-cross">×</div>

              <div className="sg-matrix-axis sg-matrix-axis--within">
                <div className="sg-axis-label">{t('project.sleepGuardian.experiment.withinLabel')}</div>
                <div className="sg-axis-title">{t('project.sleepGuardian.experiment.withinTitle')}</div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item">{t('project.sleepGuardian.experiment.modality1')}</span>
                  <span className="sg-axis-item">{t('project.sleepGuardian.experiment.modality2')}</span>
                  <span className="sg-axis-item">{t('project.sleepGuardian.experiment.modality3')}</span>
                  <span className="sg-axis-item sg-axis-item--baseline">{t('project.sleepGuardian.experiment.modality4')}</span>
                </div>
              </div>
            </div>

            <div className="sg-info-box">
              <Shield size={18} />
              <p>
                <strong>{t('project.sleepGuardian.experiment.counterA')}</strong>{' '}{t('project.sleepGuardian.experiment.counterB')}</p>
            </div>

            <div className="sg-decision-row">
              <div className="sg-decision-card">
                <Clock size={20} />
                <h4>{t('project.sleepGuardian.experiment.proto1title')}</h4>
                <p>{t('project.sleepGuardian.experiment.proto1desc')}</p>
              </div>
              <div className="sg-decision-card">
                <Activity size={20} />
                <h4>{t('project.sleepGuardian.experiment.proto2title')}</h4>
                <p>{t('project.sleepGuardian.experiment.proto2desc')}</p>
              </div>
              <div className="sg-decision-card">
                <Brain size={20} />
                <h4>{t('project.sleepGuardian.experiment.proto3title')}</h4>
                <p>{t('project.sleepGuardian.experiment.proto3desc')}</p>
              </div>
              <div className="sg-decision-card">
                <BarChart3 size={20} />
                <h4>{t('project.sleepGuardian.experiment.proto4title')}</h4>
                <p>{t('project.sleepGuardian.experiment.proto4desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SLEEP GUARDIAN APP (MODIFIED) ── */}
        <section className="sg-section sg-section--dark sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label sg-section-label--light">
              <Smartphone size={18} />{t('project.sleepGuardian.instrument.heading')}</div>
            <h2 className="sg-section-title sg-title--light">{t('project.sleepGuardian.instrument.title')}</h2>
            <p className="sg-body sg-body--light sg-body--wide">{t('project.sleepGuardian.instrument.intro')}</p>

            <div className="sg-app-features">
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">01</div>
                <h4 className="sg-app-feature-title">{t('project.sleepGuardian.instrument.mod1title')}</h4>
                <p className="sg-app-feature-desc">{t('project.sleepGuardian.instrument.mod1desc')}</p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">02</div>
                <h4 className="sg-app-feature-title">{t('project.sleepGuardian.instrument.mod2title')}</h4>
                <p className="sg-app-feature-desc">{t('project.sleepGuardian.instrument.mod2desc')}</p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">03</div>
                <h4 className="sg-app-feature-title">{t('project.sleepGuardian.instrument.mod3title')}</h4>
                <p className="sg-app-feature-desc">{t('project.sleepGuardian.instrument.mod3desc')}<br /><strong>{t('project.sleepGuardian.instrument.ndlName')}</strong>{' '}{t('project.sleepGuardian.instrument.ndlDesc')}<br /><strong>{t('project.sleepGuardian.instrument.pscName')}</strong>{' '}{t('project.sleepGuardian.instrument.pscDesc')}</p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">04</div>
                <h4 className="sg-app-feature-title">{t('project.sleepGuardian.instrument.mod4title')}</h4>
                <p className="sg-app-feature-desc">{t('project.sleepGuardian.instrument.mod4desc')}</p>
              </div>
            </div>

            {/* --- 新增的圖片展示區塊 --- */}
            
            <div className="sg-instrument-visuals">
              
              {/* 1. App 介面展示 (7張圖網格) */}
              <div className="sg-visual-block">
                <h3 className="sg-visual-title">{t('project.sleepGuardian.instrument.uiHeading')}</h3>
                <div className="sg-app-screens-grid">
                  {appScreens.map((screen, idx) => (
                    <div key={idx} className="sg-app-screen-wrap">
                      <img src={screen.src} alt={screen.alt} loading="lazy" className="sg-app-screen-img" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. 實驗時程管理圖 (Notion) */}
              <div className="sg-visual-block">
                <h3 className="sg-visual-title">{t('project.sleepGuardian.instrument.timelineHeading')}</h3>
                <div className="sg-notion-img-wrap">
                  <img src={notionImg} alt={t('project.sleepGuardian.instrument.timelineAlt')} loading="lazy" className="sg-featured-img" />
                </div>
              </div>

              {/* 3. Code (放在最下面) */}
              <div className="sg-visual-block">
                <h3 className="sg-visual-title">{t('project.sleepGuardian.instrument.devHeading')}</h3>
                <div className="sg-code-img-wrap">
                  <img src={codeImg} alt={t('project.sleepGuardian.instrument.devAlt')} loading="lazy" className="sg-featured-img" />
                </div>
              </div>

            </div>
            {/* --- 新增的圖片展示區塊 結束 --- */}

          </div>
        </section>

        {/* ── MEASUREMENT BATTERY ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <BarChart3 size={18} />{t('project.sleepGuardian.measures.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.measures.title')}</h2>

            <div className="sg-measure-timeline">
              <div className="sg-measure-phase">
                <div className="sg-phase-label">{t('project.sleepGuardian.measures.group1')}</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.bpsAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.bpsName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.bpsDesc')}</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">{t('project.sleepGuardian.measures.group2')}</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.bscsAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.bscsName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.bscsDesc')}</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.reiAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.reiName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.reiDesc')}</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">{t('project.sleepGuardian.measures.group3')}</div>
                <div className="sg-measure-cards sg-measure-cards--objective">
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.ndlAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.instrument.ndlName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.ndlDesc')}</div>
                  </div>
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.pscAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.instrument.pscName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.pscDesc')}</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">{t('project.sleepGuardian.measures.group4')}</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.padAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.padName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.padDesc')}</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.tamAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.tamName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.tamDesc')}</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">{t('project.sleepGuardian.measures.ueqsAbbr')}</div>
                    <div className="sg-measure-name">{t('project.sleepGuardian.measures.ueqsName')}</div>
                    <div className="sg-measure-purpose">{t('project.sleepGuardian.measures.ueqsDesc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESEARCH QUESTIONS ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <FlaskConical size={18} />{t('project.sleepGuardian.rq.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.rq.title')}</h2>

            <div className="sg-rq-list">
              <div className="sg-rq-item">
                <div className="sg-rq-tag">{t('project.sleepGuardian.rq.rq1label')}</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">{t('project.sleepGuardian.rq.rq1q')}</p>
                  <p className="sg-rq-h">{t('project.sleepGuardian.rq.rq1pred')}</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">{t('project.sleepGuardian.rq.rq2label')}</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">{t('project.sleepGuardian.rq.rq2q')}</p>
                  <p className="sg-rq-h">{t('project.sleepGuardian.rq.rq2pred')}</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">{t('project.sleepGuardian.rq.rq3label')}</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">{t('project.sleepGuardian.rq.rq3q')}</p>
                  <p className="sg-rq-h">{t('project.sleepGuardian.rq.rq3pred')}</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">{t('project.sleepGuardian.rq.rq4label')}</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">{t('project.sleepGuardian.rq.rq4q')}</p>
                  <p className="sg-rq-h">{t('project.sleepGuardian.rq.rq4pred')}</p>
                </div>
              </div>
            </div>

            <div className="sg-analysis-note">
              <BarChart3 size={16} />
              <p>
                <strong>{t('project.sleepGuardian.rq.statsA')}</strong>{' '}{t('project.sleepGuardian.rq.statsB')}</p>
            </div>
          </div>
        </section>

        {/* ── CONTRIBUTION & STATUS ── */}
        <section className="sg-section sg-reveal" style={{ paddingBottom: '120px' }}>
          <div className="sg-container">
            <div className="sg-section-label">
              <CheckCircle2 size={18} />{t('project.sleepGuardian.status.heading')}</div>
            <h2 className="sg-section-title">{t('project.sleepGuardian.status.title')}</h2>

            <div className="sg-contribution-grid">
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item1title')}</h4>
                <p>{t('project.sleepGuardian.status.item1desc')}</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item2title')}</h4>
                <p>{t('project.sleepGuardian.status.item2desc')}</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item3title')}</h4>
                <p>{t('project.sleepGuardian.status.item3desc')}</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item4title')}</h4>
                <p>{t('project.sleepGuardian.status.item4desc')}</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--inprogress">
                <div className="sg-contribution-status">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item5title')}</h4>
                <p>{t('project.sleepGuardian.status.item5desc')}</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--pending">
                <div className="sg-contribution-status sg-status--progress">{t('project.sleepGuardian.status.done')}</div>
                <h4>{t('project.sleepGuardian.status.item6title')}</h4>
                <p>{t('project.sleepGuardian.status.item6desc')}</p>
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
            --sg-accent: #2563eb;
            --sg-green: #16a34a;
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
          .sg-hero-inner { max-width: 820px; }
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
            background: rgba(37,99,235,0.2);
            color: #93c5fd;
            border: 1px solid rgba(37,99,235,0.35);
          }
          .sg-badge--status {
            background: rgba(22,163,74,0.2);
            color: #86efac;
            border: 1px solid rgba(22,163,74,0.35);
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
            color: #93c5fd;
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
            max-width: 680px;
          }
          .sg-hero-hook em { color: #fde68a; font-style: italic; }
          .sg-meta-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            padding-top: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .sg-meta-item { display: flex; flex-direction: column; gap: 4px; }
          .sg-meta-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: rgba(255,255,255,0.35);
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

          .sg-section { padding: 88px 0; background: var(--card); }
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
          .sg-section-label--light { color: #93c5fd; }
          .sg-section-title {
            font-family: var(--font-display);
            font-size: clamp(26px, 3.5vw, 38px);
            font-weight: 700;
            line-height: 1.25;
            color: var(--sg-text);
            margin-bottom: 32px;
            letter-spacing: -0.5px;
          }
          .sg-title--light { color: #fff; }

          .sg-body { font-size: 17px; line-height: 1.82; color: var(--sg-muted); margin-bottom: 20px; }
          .sg-body--wide { max-width: 760px; }
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
            background: rgba(37,99,235,0.04);
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
          .sg-stat-desc { font-size: 13px; line-height: 1.6; color: var(--sg-muted); }

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
          .sg-pathway-mech { font-size: 13px; font-family: var(--font-display); font-weight: 600; color: var(--sg-muted); margin-bottom: 14px; }
          .sg-pathway-desc { font-size: 14px; line-height: 1.7; color: var(--sg-muted); margin-bottom: 20px; }
          .sg-pathway-example { padding: 14px 16px; border-radius: 8px; background: var(--sg-surface); }
          .sg-example-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-muted);
            font-family: var(--font-display);
            font-weight: 600;
            display: block;
            margin-bottom: 6px;
          }
          .sg-example-text { font-size: 13px; line-height: 1.6; color: var(--sg-text); font-style: italic; }

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
          .sg-matrix-axis--between { background: rgba(37,99,235,0.04); border-color: rgba(37,99,235,0.2); }
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
          .sg-axis-item--threat { background: rgba(229,62,62,0.08); color: var(--sg-threat); }
          .sg-axis-item--empathy { background: rgba(124,58,237,0.08); color: var(--sg-empathy); }
          .sg-axis-item--friction { background: rgba(217,119,6,0.08); color: var(--sg-friction); }
          .sg-axis-item--baseline { background: rgba(0,0,0,0.06); color: var(--sg-muted); }
          .sg-matrix-cross { font-size: 48px; font-weight: 300; color: var(--sg-muted); }

          .sg-info-box {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 18px 22px;
            background: rgba(37,99,235,0.05);
            border: 1px solid rgba(37,99,235,0.15);
            border-radius: 10px;
            margin-bottom: 40px;
            color: var(--sg-accent);
          }
          .sg-info-box svg { flex-shrink: 0; margin-top: 2px; }
          .sg-info-box p { font-size: 14px; line-height: 1.6; color: var(--sg-text); margin: 0; }

          .sg-decision-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .sg-decision-card {
            padding: 24px;
            border: 1px solid var(--sg-border);
            border-radius: 12px;
            background: var(--sg-surface);
          }
          .sg-decision-card svg { color: var(--sg-accent); margin-bottom: 12px; }
          .sg-decision-card h4 { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; }
          .sg-decision-card p { font-size: 13px; line-height: 1.6; color: var(--sg-muted); }

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
            color: #93c5fd;
            margin-bottom: 10px;
          }
          .sg-app-feature-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 10px; }
          .sg-app-feature-desc { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.55); }

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
            color: #93c5fd;
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
          
          .sg-app-screen-wrap {
            width: 100%;
            max-width: 220px;
            aspect-ratio: 9/19.5;
            background: #000;
            border-radius: 20px;
            overflow: hidden;
            border: 4px solid #333;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transition: transform 0.3s ease;
          }
          
          .sg-app-screen-wrap:hover {
            transform: translateY(-8px);
          }

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

          .sg-measure-timeline {
            display: flex;
            flex-direction: column;
            gap: 32px;
            margin-top: 40px;
          }
          .sg-measure-phase {
            border-left: 2px solid var(--sg-border);
            padding-left: 28px;
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
            margin-bottom: 14px;
          }
          .sg-measure-cards { display: flex; flex-wrap: wrap; gap: 14px; }
          .sg-measure-cards--objective .sg-measure-card {
            border-color: rgba(37,99,235,0.25);
            background: rgba(37,99,235,0.04);
          }
          .sg-measure-card {
            padding: 18px 20px;
            border: 1px solid var(--sg-border);
            border-radius: 10px;
            background: var(--card);
            flex: 1;
            min-width: 200px;
          }
          .sg-measure-abbr {
            font-size: 12px;
            font-family: var(--font-display);
            font-weight: 800;
            letter-spacing: 1px;
            color: var(--sg-accent);
            margin-bottom: 4px;
          }
          .sg-measure-name { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--sg-text); margin-bottom: 6px; }
          .sg-measure-purpose { font-size: 12px; line-height: 1.6; color: var(--sg-muted); }

          .sg-rq-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 32px;
          }
          .sg-rq-item {
            display: flex;
            gap: 20px;
            padding: 24px;
            border: 1px solid var(--sg-border);
            border-radius: 12px;
            background: var(--card);
            align-items: flex-start; /* 確保文字與標籤頂部對齊 */
          }
          .sg-rq-tag {
            font-size: 12px;
            font-family: var(--font-display);
            font-weight: 800;
            letter-spacing: 0.5px;
            color: var(--sg-accent);
            white-space: nowrap;
            padding-top: 2px;
            
            /* 解決重疊問題的關鍵設定 👇 */
            min-width: 85px; 
            flex-shrink: 0; 
          }
          .sg-rq-q { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; line-height: 1.5; }
          .sg-rq-h { font-size: 13px; line-height: 1.6; color: var(--sg-muted); }
          .sg-analysis-note {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-top: 28px;
            padding: 16px 20px;
            background: rgba(37,99,235,0.04);
            border-radius: 8px;
            color: var(--sg-accent);
          }
          .sg-analysis-note svg { flex-shrink: 0; margin-top: 2px; }
          .sg-analysis-note p { font-size: 13px; line-height: 1.6; color: var(--sg-text); margin: 0; }

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
          .sg-contribution-card--done { background: rgba(22,163,74,0.03); border-color: rgba(22,163,74,0.2); }
          .sg-contribution-card--inprogress { background: rgba(37,99,235,0.03); border-color: rgba(37,99,235,0.2); }
          .sg-contribution-card--pending { background: var(--sg-surface); }
          .sg-contribution-status {
            font-size: 12px;
            font-family: var(--font-display);
            font-weight: 800;
            letter-spacing: 0.5px;
            color: var(--sg-green);
            margin-bottom: 10px;
          }
          .sg-status--progress { color: var(--sg-accent); }
          .sg-status--pending { color: var(--sg-muted); }
          .sg-contribution-card h4 { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--sg-text); margin-bottom: 10px; line-height: 1.4; }
          .sg-contribution-card p { font-size: 13px; line-height: 1.7; color: var(--sg-muted); }

          @media (max-width: 960px) {
            .sg-two-col,
            .sg-pathway-grid,
            .sg-decision-row,
            .sg-app-features,
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#1A1A18', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}