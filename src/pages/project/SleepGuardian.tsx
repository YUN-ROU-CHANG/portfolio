import { useEffect, useState } from 'react';
import sleepGuardianCover from '../../assets/images/sleep-guardian-cover.png';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import {
  Moon, Brain, Smartphone, FlaskConical, BarChart3,
  ChevronRight, Shield, Heart, Zap, Clock, Activity,
  BookOpen, Layers, CheckCircle2, AlertTriangle
} from 'lucide-react';

export default function SleepGuardian() {
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
                  <BookOpen size={14} />
                  M.S. Thesis Research
                </span>
                <span className="sg-badge sg-badge--status">
                  <Activity size={14} />
                  Experiment in Progress · 2025–2026
                </span>
              </div>

              <h1 className="sg-hero-title">Sleep Guardian</h1>
              <p className="sg-hero-sub">
                Notification Intervention Design for<br />
                Smartphone-Induced In-Bed Procrastination
              </p>

              <p className="sg-hero-hook">
                Young adults know they should put their phone down — yet they don't.
                I designed a custom research app and a controlled EMA experiment to find
                out <em>which notification design actually works</em> when willpower has
                already run out.
              </p>

              <div className="sg-meta-grid">
                <div className="sg-meta-item">
                  <span className="sg-meta-label">Role</span>
                  <span className="sg-meta-value">Lead Researcher · App Developer · Interaction Designer</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">Framework</span>
                  <span className="sg-meta-value">Dual-Process Theory (System 1 & 2)</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">Method</span>
                  <span className="sg-meta-value">EMA · 3×4 Mixed Factorial Design</span>
                </div>
                <div className="sg-meta-item">
                  <span className="sg-meta-label">Venue</span>
                  <span className="sg-meta-value">NTUT Interaction Design, M.S. Thesis</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <Brain size={18} />
              The Problem
            </div>
            <h2 className="sg-section-title">
              A brain at war with itself — every night
            </h2>
            <div className="sg-two-col">
              <div>
                <p className="sg-body">
                  <strong>While-in-bed procrastination</strong> is distinct from simply going
                  to bed late. It describes users who are <em>already lying in bed</em> yet
                  keep scrolling — a state where cognitive resources are depleted and
                  System 1 (fast, automatic, habit-driven) completely dominates System 2
                  (slow, rational, self-controlling).
                </p>
                <p className="sg-body">
                  Existing interventions — screen-time limits, hard locks, blunt warnings —
                  trigger psychological reactance. Users dismiss them reflexively, because
                  the intervention itself is operating at the wrong cognitive level.
                </p>
                <div className="sg-quote-block">
                  <p className="sg-quote">
                    "How can a notification design interrupt mindless scrolling
                    without triggering the same automatic dismissal it's trying to prevent?"
                  </p>
                </div>
              </div>
              <div className="sg-stat-stack">
                <div className="sg-stat-card">
                  <span className="sg-stat-num">30%</span>
                  <span className="sg-stat-desc">of university students report habitually sleeping fewer than 7 hours</span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num">~1.5 hr</span>
                  <span className="sg-stat-desc">average delay between intended and actual sleep time among participants in pilot interviews</span>
                </div>
                <div className="sg-stat-card">
                  <span className="sg-stat-num">N=6</span>
                  <span className="sg-stat-desc">pilot semi-structured interviews (ORID method) confirmed that existing tools are bypassed or ignored</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THEORETICAL FRAMEWORK ── */}
        <section className="sg-section sg-section--tinted sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <Layers size={18} />
              Theoretical Framework
            </div>
            <h2 className="sg-section-title">Dual-Process Theory as design logic</h2>
            <p className="sg-body sg-body--wide">
              The core design claim: to interrupt in-bed procrastination, interventions must
              operate on <strong>three complementary pathways</strong> that correspond to
              different cognitive mechanisms — not just repeat the same blunt warning.
            </p>
            <div className="sg-pathway-grid">
              <div className="sg-pathway-card sg-pathway-card--threat">
                <div className="sg-pathway-icon">
                  <AlertTriangle size={28} />
                </div>
                <div className="sg-pathway-num">01</div>
                <h3 className="sg-pathway-title">Threat Appeal</h3>
                <p className="sg-pathway-mech">Cognitive pathway → activates System 2</p>
                <p className="sg-pathway-desc">
                  Presents health-risk information (e.g. cardiovascular load from sleep
                  deprivation) to trigger rational risk assessment and protective motivation.
                  Based on Witte's Extended Parallel Process Model (1992).
                </p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">Notification example</span>
                  <p className="sg-example-text">
                    "Warning: abnormal resting heart rate detected — continued sleep
                    deprivation significantly increases cardiovascular risk."
                  </p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--empathy">
                <div className="sg-pathway-icon">
                  <Heart size={28} />
                </div>
                <div className="sg-pathway-num">02</div>
                <h3 className="sg-pathway-title">Empathy Appeal</h3>
                <p className="sg-pathway-mech">Affective pathway → reduces reactance</p>
                <p className="sg-pathway-desc">
                  Uses warm, non-judgmental language rooted in self-compassion theory
                  (Neff, 2003) to reduce anxiety, lower psychological reactance, and
                  gently invite rest rather than demand it.
                </p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">Notification example</span>
                  <p className="sg-example-text">
                    "You made it through a tough day — this time belongs to you.
                    Let yourself rest."
                  </p>
                </div>
              </div>

              <div className="sg-pathway-card sg-pathway-card--friction">
                <div className="sg-pathway-icon">
                  <Zap size={28} />
                </div>
                <div className="sg-pathway-num">03</div>
                <h3 className="sg-pathway-title">Design Friction</h3>
                <p className="sg-pathway-mech">Behavioral pathway → forces System 2</p>
                <p className="sg-pathway-desc">
                  Embeds a simple math problem (e.g. "Enter 3+4 to dismiss") directly in
                  the notification UI. Does not rely on persuasion — it <em>forces</em>
                  a cognitive mode switch, interrupting the automatic scrolling loop.
                  Based on Cox et al. (2016).
                </p>
                <div className="sg-pathway-example">
                  <span className="sg-example-label">Interaction design</span>
                  <p className="sg-example-text">
                    User must solve a math equation and type the correct answer before
                    the notification can be dismissed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIMENT DESIGN ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <FlaskConical size={18} />
              Experiment Design
            </div>
            <h2 className="sg-section-title">
              A 3×4 mixed factorial design in real bedrooms
            </h2>
            <p className="sg-body sg-body--wide">
              Rather than running a controlled lab study (which would destroy ecological
              validity for a bedtime behavior), I used <strong>Ecological Momentary
              Assessment (EMA)</strong> — collecting data remotely and asynchronously
              in participants' actual sleep environments.
            </p>

            <div className="sg-design-matrix">
              <div className="sg-matrix-axis sg-matrix-axis--between">
                <div className="sg-axis-label">Between-subjects factor</div>
                <div className="sg-axis-title">Notification Type (3 groups)</div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item sg-axis-item--threat">Threat Appeal</span>
                  <span className="sg-axis-item sg-axis-item--empathy">Empathy Appeal</span>
                  <span className="sg-axis-item sg-axis-item--friction">Design Friction</span>
                </div>
              </div>

              <div className="sg-matrix-cross">×</div>

              <div className="sg-matrix-axis sg-matrix-axis--within">
                <div className="sg-axis-label">Within-subjects factor</div>
                <div className="sg-axis-title">Audiovisual Modality (4 conditions)</div>
                <div className="sg-axis-items">
                  <span className="sg-axis-item">Visual only</span>
                  <span className="sg-axis-item">Audio only</span>
                  <span className="sg-axis-item">Visual + Audio</span>
                  <span className="sg-axis-item sg-axis-item--baseline">Baseline</span>
                </div>
              </div>
            </div>

            <div className="sg-info-box">
              <Shield size={18} />
              <p>
                <strong>Counterbalancing via 4×4 Latin Square</strong> — each participant
                experiences all 4 modality conditions in a balanced order (R1–R4), controlling
                for order effects and carryover effects across the within-subjects factor.
              </p>
            </div>

            <div className="sg-decision-row">
              <div className="sg-decision-card">
                <Clock size={20} />
                <h4>Time window</h4>
                <p>21:00–03:00 only. App is time-locked — participants can only open it in their actual bedtime window.</p>
              </div>
              <div className="sg-decision-card">
                <Activity size={20} />
                <h4>3-min intervals</h4>
                <p>Each notification is separated by a 3-minute re-immersion period, allowing participants to re-enter mindless scrolling before the next interruption.</p>
              </div>
              <div className="sg-decision-card">
                <Brain size={20} />
                <h4>Immersion phase</h4>
                <p>First 3 minutes: no notification delivered. Allows System 1 to fully engage before any intervention — maximizing ecological validity.</p>
              </div>
              <div className="sg-decision-card">
                <BarChart3 size={20} />
                <h4>Target N=60</h4>
                <p>20 per group. Power analysis via G*Power (Faul et al., 2007) for detecting medium interaction effect in 3×4 mixed ANOVA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SLEEP GUARDIAN APP ── */}
        <section className="sg-section sg-section--dark sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label sg-section-label--light">
              <Smartphone size={18} />
              The Research Instrument
            </div>
            <h2 className="sg-section-title sg-title--light">
              Sleep Guardian — built from scratch with AI-assisted development
            </h2>
            <p className="sg-body sg-body--light sg-body--wide">
              Standard off-the-shelf apps can't run a controlled 3×4 EMA experiment.
              I built Sleep Guardian using React Native / Expo — a custom experimental
              platform with four core modules.
            </p>

            <div className="sg-app-features">
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">01</div>
                <h4 className="sg-app-feature-title">Instagram Feed Simulation</h4>
                <p className="sg-app-feature-desc">
                  Participants log into their own Instagram accounts inside the app, then
                  scroll a real feed. This is the experimental "stimulus" — genuine,
                  naturalistic mindless scrolling, not a fake interface.
                </p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">02</div>
                <h4 className="sg-app-feature-title">Experience Code + Latin Square Dispatcher</h4>
                <p className="sg-app-feature-desc">
                  Each participant receives a unique experience code that maps to their
                  assigned notification type group (T/E/F) and their specific modality
                  order (R1–R4). The system loads the correct counterbalanced sequence
                  automatically.
                </p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">03</div>
                <h4 className="sg-app-feature-title">Automated Behavior Logging</h4>
                <p className="sg-app-feature-desc">
                  Two objective behavioral metrics recorded automatically in background:
                  <br /><strong>Notification Dismissal Latency</strong> — time from notification
                  appearance to dismissal (ms).
                  <br /><strong>Post-notification Scroll Count</strong> — number of swipes
                  after each notification, measuring residual mindless scrolling.
                </p>
              </div>
              <div className="sg-app-feature">
                <div className="sg-app-feature-num">04</div>
                <h4 className="sg-app-feature-title">Session Summary + WebView Survey</h4>
                <p className="sg-app-feature-desc">
                  After all 4 notifications, the app displays a session summary screen
                  (Session ID + behavioral data). Participants screenshot this for
                  triangulation, then complete the post-test questionnaire (PAD, TAM,
                  UEQ-S) via embedded WebView with notification screenshots as recall cues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MEASUREMENT BATTERY ── */}
        <section className="sg-section sg-reveal">
          <div className="sg-container">
            <div className="sg-section-label">
              <BarChart3 size={18} />
              Measurement Battery
            </div>
            <h2 className="sg-section-title">Six validated instruments + two objective metrics</h2>

            <div className="sg-measure-timeline">
              <div className="sg-measure-phase">
                <div className="sg-phase-label">Screening (2 months prior)</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">BPS</div>
                    <div className="sg-measure-name">Bedtime Procrastination Scale</div>
                    <div className="sg-measure-purpose">Confirms participant has moderate-to-severe in-bed procrastination tendency (Kroese et al., 2014; α=0.92)</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">Pre-test (day of experiment)</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">BSCS</div>
                    <div className="sg-measure-name">Brief Self-Control Scale</div>
                    <div className="sg-measure-purpose">Individual differences in self-regulation as covariate (Tangney et al., 2004)</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">REI-10</div>
                    <div className="sg-measure-name">Rational-Experiential Inventory</div>
                    <div className="sg-measure-purpose">Baseline cognitive style — System 1 vs System 2 preference (Epstein et al., 1996)</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">During experiment (auto-logged)</div>
                <div className="sg-measure-cards sg-measure-cards--objective">
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr">NDL</div>
                    <div className="sg-measure-name">Notification Dismissal Latency</div>
                    <div className="sg-measure-purpose">Milliseconds from notification appearance to user dismissal — objective measure of interruption effectiveness</div>
                  </div>
                  <div className="sg-measure-card sg-measure-card--objective">
                    <div className="sg-measure-abbr">PSC</div>
                    <div className="sg-measure-name">Post-notification Scroll Count</div>
                    <div className="sg-measure-purpose">Number of swipes after each notification — measures residual mindless scrolling behavior</div>
                  </div>
                </div>
              </div>

              <div className="sg-measure-phase">
                <div className="sg-phase-label">Post-test (after all 4 notifications)</div>
                <div className="sg-measure-cards">
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">PAD</div>
                    <div className="sg-measure-name">PAD Emotion Scale</div>
                    <div className="sg-measure-purpose">Pleasure / Arousal / Dominance — measures emotional response to each notification type × modality (Mehrabian & Russell, 1974)</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">TAM</div>
                    <div className="sg-measure-name">Technology Acceptance Model</div>
                    <div className="sg-measure-purpose">Perceived Usefulness (PU) + Behavioral Intention (BI) — ease-of-use excluded due to design friction's intentional cognitive cost (Davis, 1989)</div>
                  </div>
                  <div className="sg-measure-card">
                    <div className="sg-measure-abbr">UEQ-S</div>
                    <div className="sg-measure-name">User Experience Questionnaire (Short)</div>
                    <div className="sg-measure-purpose">Pragmatic + Hedonic quality — overall app experience assessment with minimal cognitive load (Laugwitz et al., 2008)</div>
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
              <FlaskConical size={18} />
              Research Questions & Hypotheses
            </div>
            <h2 className="sg-section-title">What we're testing</h2>

            <div className="sg-rq-list">
              <div className="sg-rq-item">
                <div className="sg-rq-tag">RQ1 / H1</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">Do the three notification types differ in their ability to interrupt in-bed procrastination?</p>
                  <p className="sg-rq-h">Predicted: Design Friction will produce the lowest Post-notification Scroll Count, as it forces behavioral interruption independent of user motivation.</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">RQ2 / H2</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">Do audiovisual modalities differ in Notification Dismissal Latency and emotional arousal?</p>
                  <p className="sg-rq-h">Predicted: Visual+Audio combined will produce the shortest dismissal latency due to highest sensory salience.</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">RQ3 / H3</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">Is there a significant interaction between notification type and audiovisual modality?</p>
                  <p className="sg-rq-h">Predicted: Specific combinations (e.g. Threat Appeal × Visual+Audio; Design Friction × Audio only) will produce amplified interruption effects beyond main effects alone.</p>
                </div>
              </div>
              <div className="sg-rq-item">
                <div className="sg-rq-tag">RQ4 / H4</div>
                <div className="sg-rq-content">
                  <p className="sg-rq-q">Do individual traits (BPS severity, prior app experience) moderate intervention effectiveness?</p>
                  <p className="sg-rq-h">Predicted: Heavy procrastinators and those with prior tool experience will show greater reactance to Threat Appeal, and better compliance with Empathy Appeal or Design Friction.</p>
                </div>
              </div>
            </div>

            <div className="sg-analysis-note">
              <BarChart3 size={16} />
              <p>
                <strong>Statistical analysis plan:</strong> Primary analysis via 3×4 Mixed ANOVA with Bonferroni post-hoc comparisons. If individual traits show significant moderation, elevated to Mixed ANCOVA with BSCS and BPS as covariates. All analyses in IBM SPSS 22.0, α = .05.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTRIBUTION & STATUS ── */}
        <section className="sg-section sg-reveal" style={{ paddingBottom: '120px' }}>
          <div className="sg-container">
            <div className="sg-section-label">
              <CheckCircle2 size={18} />
              My Contribution & Current Status
            </div>
            <h2 className="sg-section-title">What I've built so far</h2>

            <div className="sg-contribution-grid">
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">✓ Completed</div>
                <h4>Theoretical framework & literature review</h4>
                <p>50+ peer-reviewed sources across sleep science, HCI, persuasive design, and dual-process theory. Identified the research gap: no prior EMA study has compared threat, empathy, and friction interventions within a controlled audiovisual modality design.</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">✓ Completed</div>
                <h4>Pilot study (N=6, qualitative)</h4>
                <p>Semi-structured interviews using the ORID framework. Surfaced three design implications: (1) soft vs. forced control preference split → validates all three intervention types; (2) audio cues effective at night → validates modality factor; (3) mindless scrolling as flow state → validates Instagram-feed simulation approach.</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">✓ Completed</div>
                <h4>Sleep Guardian app development</h4>
                <p>Full experimental platform built in React Native / Expo. Implements Instagram-feed simulation, experience code dispatch, Latin Square counterbalancing (R1–R4), time-locked session window (21:00–03:00), automated behavioral data logging, and WebView survey integration.</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--done">
                <div className="sg-contribution-status">✓ Completed</div>
                <h4>Full stimulus design (3×4 matrix)</h4>
                <p>Designed all 12 notification stimuli — text, visual assets, audio recordings, and the design friction math-input interface — with equivalence controls for duration and visual complexity across conditions.</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--inprogress">
                <div className="sg-contribution-status sg-status--progress">↻ In Progress</div>
                <h4>Main experiment (N=60 target)</h4>
                <p>Participant recruitment and data collection ongoing. Target completion before M.S. thesis submission — July 2026.</p>
              </div>
              <div className="sg-contribution-card sg-contribution-card--pending">
                <div className="sg-contribution-status sg-status--pending">◦ Pending</div>
                <h4>Results, analysis & design recommendations</h4>
                <p>Mixed ANOVA analysis and evidence-based notification design guidelines to be delivered upon experiment completion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STYLES ── */}
        <style>{`
          #sleep-guardian-page {
            --sg-night: #0d1117;
            --sg-deep: #161b22;
            --sg-surface: #f8f9fa;
            --sg-text: #1a1a2e;
            --sg-muted: #6b7280;
            --sg-threat: #e53e3e;
            --sg-empathy: #7c3aed;
            --sg-friction: #d97706;
            --sg-accent: #2563eb;
            --sg-green: #16a34a;
            --sg-border: rgba(0,0,0,0.07);
            font-family: var(--font-body, 'DM Sans', sans-serif);
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
            font-family: 'Courier New', monospace;
            font-weight: 600;
            letter-spacing: 0.3px;
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
            font-size: clamp(36px, 6vw, 60px);
            font-weight: 700;
            line-height: 1.1;
            color: #fff;
            margin-bottom: 16px;
            letter-spacing: -1px;
          }
          .sg-hero-sub {
            font-size: clamp(18px, 2.5vw, 24px);
            color: #93c5fd;
            font-weight: 400;
            line-height: 1.5;
            margin-bottom: 28px;
            font-family: 'Courier New', monospace;
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
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: rgba(255,255,255,0.35);
            font-family: 'Courier New', monospace;
          }
          .sg-meta-value {
            font-size: 14px;
            color: rgba(255,255,255,0.85);
            font-family: 'Courier New', monospace;
            line-height: 1.4;
          }

          .sg-section { padding: 88px 0; background: #fff; }
          .sg-section--tinted { background: var(--sg-surface); }
          .sg-section--dark { background: var(--sg-night); }
          .sg-section-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--sg-accent);
            font-family: 'Courier New', monospace;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .sg-section-label--light { color: #93c5fd; }
          .sg-section-title {
            font-size: clamp(22px, 3vw, 34px);
            font-weight: 600;
            line-height: 1.25;
            color: var(--sg-text);
            margin-bottom: 32px;
            line-height: 1.2;
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
            font-family: 'Courier New', monospace;
            margin-bottom: 6px;
            letter-spacing: -1px;
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
            background: #fff;
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
            font-size: 11px;
            font-family: 'Courier New', monospace;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--sg-muted);
            margin-bottom: 8px;
          }
          .sg-pathway-title { font-size: 19px; font-weight: 600; color: var(--sg-text); margin-bottom: 4px; }
          .sg-pathway-mech { font-size: 12px; font-family: 'Courier New', monospace; color: var(--sg-muted); margin-bottom: 14px; }
          .sg-pathway-desc { font-size: 14px; line-height: 1.7; color: var(--sg-muted); margin-bottom: 20px; }
          .sg-pathway-example { padding: 14px 16px; border-radius: 8px; background: var(--sg-surface); }
          .sg-example-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-muted);
            font-family: 'Courier New', monospace;
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
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--sg-muted);
            font-family: 'Courier New', monospace;
            margin-bottom: 8px;
          }
          .sg-axis-title { font-size: 17px; font-weight: 700; color: var(--sg-text); margin-bottom: 16px; }
          .sg-axis-items { display: flex; flex-direction: column; gap: 8px; }
          .sg-axis-item {
            display: inline-block;
            font-size: 13px;
            padding: 6px 12px;
            border-radius: 6px;
            background: rgba(0,0,0,0.04);
            color: var(--sg-text);
            font-family: 'Courier New', monospace;
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
          .sg-decision-card h4 { font-size: 15px; font-weight: 700; color: var(--sg-text); margin-bottom: 8px; }
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
            font-size: 11px;
            font-family: 'Courier New', monospace;
            font-weight: 700;
            letter-spacing: 1px;
            color: #93c5fd;
            margin-bottom: 10px;
          }
          .sg-app-feature-title { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 10px; }
          .sg-app-feature-desc { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.55); }

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
            font-size: 12px;
            font-family: 'Courier New', monospace;
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
            background: #fff;
            flex: 1;
            min-width: 200px;
          }
          .sg-measure-abbr {
            font-size: 11px;
            font-family: 'Courier New', monospace;
            font-weight: 800;
            letter-spacing: 1px;
            color: var(--sg-accent);
            margin-bottom: 4px;
          }
          .sg-measure-name { font-size: 14px; font-weight: 700; color: var(--sg-text); margin-bottom: 6px; }
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
            background: #fff;
          }
          .sg-rq-tag {
            font-size: 11px;
            font-family: 'Courier New', monospace;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: var(--sg-accent);
            white-space: nowrap;
            padding-top: 2px;
            min-width: 64px;
          }
          .sg-rq-q { font-size: 15px; font-weight: 600; color: var(--sg-text); margin-bottom: 8px; line-height: 1.5; }
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
            font-size: 11px;
            font-family: 'Courier New', monospace;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: var(--sg-green);
            margin-bottom: 10px;
          }
          .sg-status--progress { color: var(--sg-accent); }
          .sg-status--pending { color: var(--sg-muted); }
          .sg-contribution-card h4 { font-size: 16px; font-weight: 700; color: var(--sg-text); margin-bottom: 10px; line-height: 1.4; }
          .sg-contribution-card p { font-size: 13px; line-height: 1.7; color: var(--sg-muted); }

          @media (max-width: 960px) {
            .sg-two-col,
            .sg-pathway-grid,
            .sg-decision-row,
            .sg-app-features,
            .sg-contribution-grid { grid-template-columns: 1fr; }
            .sg-design-matrix { flex-direction: column; align-items: stretch; }
            .sg-matrix-cross { text-align: center; }
          }

          @media (max-width: 640px) {
            .sg-hero { padding: 100px 0 60px; }
            .sg-section { padding: 60px 0; }
            .sg-container { padding: 0 20px; }
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

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#1A1A18', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}
