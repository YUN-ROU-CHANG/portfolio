import { useEffect } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { Award, Zap, Users, Lightbulb, Cpu, Printer, Trash2, Star } from 'lucide-react';

export default function Oblivilight() {

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
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="hero-content"
            >
              {/* Award Badges - Prominent Display */}
              <div className="award-badges">
                <div className="award-badge best-demo">
                  <Award size={20} />
                  <span>{'Best Demo Award'}</span>
                </div>
                <div className="award-badge taichi">
                  <Star size={20} />
                  <span>{'Selected for TAICHI Demo'}</span>
                </div>
              </div>
              
              {/* Project Title */}
              <h1 className="hero-title">
                {"OpenHCI'25｜Oblivilight"}
              </h1>
              
              {/* Subtitle */}
              <p className="hero-subtitle">
                {'Exploring AI Forgetting Mechanisms Through Tangible Interaction'}
              </p>

              {/* Project Details Grid */}
              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">
                    {'July 2025'}
                  </span>
                  <span className="detail-sub">
                    {'Completed in 6-day Intensive Workshop'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">
                    {'Interaction Designer'}
                  </span>
                  <span className="detail-sub">
                    {'Team of 5 Members'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Recognition'}</span>
                  <span className="detail-value achievement-highlight">
                    🏆 {'Best Demo Award'}
                  </span>
                  <span className="detail-sub">
                    ✨ {'TAICHI Demo Selected'}
                  </span>
                </div>
              </div>

              {/* Workshop Context Highlight */}
              <div className="workshop-context">
                <div className="context-icon">
                  <Zap size={24} />
                </div>
                <div className="context-content">
                  <h3 className="context-title">
                    {'Rapid Prototyping Challenge'}
                  </h3>
                  <p className="context-text">
                    {'This fully functional physical prototype was conceived, designed, and built within an intensive 6-day OpenHCI workshop — demonstrating exceptional teamwork, rapid iteration, and innovative problem-solving under pressure.'}
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
              <h2 className="section-heading">
                {'Project Overview'}
              </h2>
              <p className="body-text-large">
                {'Oblivilight is a tangible interaction device that explores how AI systems can "forget" information. In an era of digital hoarding and privacy concerns, this project reimagines data deletion as a meaningful, ritual-like experience through physical interaction.'}
              </p>
            </div>

            {/* Core Concept Cards */}
            <div className="concept-cards">
              <div className="concept-card">
                <div className="concept-icon">
                  <Cpu size={32} />
                </div>
                <h3 className="concept-title">
                  {'AI Forgetting'}
                </h3>
                <p className="concept-desc">
                  {'Selective memory deletion that mirrors human forgetting patterns'}
                </p>
              </div>

              <div className="concept-card">
                <div className="concept-icon">
                  <Printer size={32} />
                </div>
                <h3 className="concept-title">
                  {'Tangible Output'}
                </h3>
                <p className="concept-desc">
                  {'Physical receipt printer makes digital memories tangible'}
                </p>
              </div>

              <div className="concept-card">
                <div className="concept-icon">
                  <Trash2 size={32} />
                </div>
                <h3 className="concept-title">
                  {'Ritual Interaction'}
                </h3>
                <p className="concept-desc">
                  {'Shredding creates a meaningful deletion ceremony'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Lightbulb size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">
                  {'The Challenge: Time Pressure & Complexity'}
                </h3>
              </div>

              <div className="two-column-layout">
                <div className="column-content">
                  <h4 className="highlight-title">
                    {'6 Days. 5 People. 1 Working Prototype.'}
                  </h4>
                  
                  <p className="body-text">
                    {'The OpenHCI workshop imposed a strict 6-day timeline to ideate, prototype, and demo a complex physical computing project. Our team had to rapidly converge on a concept, source materials, learn Arduino programming, and build a polished demo — all while exploring a novel interaction paradigm.'}
                  </p>

                  <div className="challenge-list">
                    <div className="challenge-item">
                      <div className="challenge-bullet urgent"></div>
                      <span>
                        <strong>{'Rapid Ideation:'}</strong>
                        {' Converge on a compelling concept within Day 1'}
                      </span>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet urgent"></div>
                      <span>
                        <strong>{'Technical Learning Curve:'}</strong>
                        {' Arduino, sensors, receipt printer integration'}
                      </span>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet urgent"></div>
                      <span>
                        <strong>{'Physical Fabrication:'}</strong>
                        {' Build and refine the lamp enclosure and shredder mechanism'}
                      </span>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet urgent"></div>
                      <span>
                        <strong>{'Demo Readiness:'}</strong>
                        {' Ensure reliability and polish for live demonstration'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="column-media">
                  <div className="image-placeholder workshop-scene">
                    <p className="placeholder-label">
                      {'[Image: Workshop Team Brainstorming]'}
                    </p>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-number">6</div>
                    <div className="stat-label">{'Days'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Concept */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Cpu size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">
                  {'The Concept: "Obliviate" - Making AI Forget'}
                </h3>
              </div>

              <div className="concept-explanation">
                <p className="body-text">
                  {'Inspired by the spell "Obliviate" from Harry Potter (which erases memories), our project tackles a pressing question: What if AI systems could selectively forget? In a world where data is hoarded indefinitely, we envisioned a system that gives users agency over what their AI remembers — and what it should let go.'}
                </p>

                <div className="concept-highlight">
                  <div className="highlight-icon">
                    <Lightbulb size={40} />
                  </div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">
                      {'Core Insight'}
                    </h4>
                    <p className="body-text">
                      {'Digital deletion feels ephemeral and meaningless. By making memory "tangible" (printed on paper) and deletion "physical" (shredding), we create a ritual that mirrors the emotional weight of letting go.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="visual-showcase">
                <div className="image-placeholder concept-visual">
                  <p className="placeholder-label">
                    {'[Image: Oblivilight Lamp Prototype - Full Setup]'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Interaction Flow */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Printer size={24} color="hsl(var(--g3))" />
                <h3 className="subsection-title">
                  {'Interaction Flow: Print → Review → Decide'}
                </h3>
              </div>

              <p className="body-text" style={{ marginBottom: '40px' }}>
                {'The interaction is designed as a three-step ritual that transforms abstract digital data into a tangible decision-making process.'}
              </p>

              {/* Interaction Steps */}
              <div className="interaction-steps">
                <div className="step-card">
                  <div className="step-number">01</div>
                  <div className="step-icon">
                    <Printer size={40} />
                  </div>
                  <h4 className="step-title">
                    {'Print Memory Receipt'}
                  </h4>
                  <p className="step-description">
                    {'The system prints a physical receipt containing a stored memory or data entry. The act of printing makes the digital tangible.'}
                  </p>
                  <div className="image-placeholder step-visual">
                    <p className="placeholder-label">
                      {'[Image: Receipt Printer Output]'}
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">02</div>
                  <div className="step-icon">
                    <Users size={40} />
                  </div>
                  <h4 className="step-title">
                    {'Review & Reflect'}
                  </h4>
                  <p className="step-description">
                    {'The user holds the receipt and reflects on whether this memory should be kept or forgotten. This pause creates intentionality.'}
                  </p>
                  <div className="image-placeholder step-visual">
                    <p className="placeholder-label">
                      {'[Image: User Reviewing Receipt]'}
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">03</div>
                  <div className="step-icon">
                    <Trash2 size={40} />
                  </div>
                  <h4 className="step-title">
                    {'Shred to Forget / Keep to Save'}
                  </h4>
                  <p className="step-description">
                    {'Shredding the receipt triggers the lamp to change color (red = forgotten). Keeping it preserves the memory (green = saved). The physical act reinforces the digital consequence.'}
                  </p>
                  <div className="image-placeholder step-visual shred">
                    <p className="placeholder-label">
                      {'[Image: User Shredding Receipt + Lamp Feedback]'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Cpu size={24} color="hsl(var(--g4))" />
                <h3 className="subsection-title">
                  {'Technical Implementation'}
                </h3>
              </div>

              <div className="tech-grid">
                <div className="tech-card">
                  <h4 className="tech-card-title">
                    {'Hardware'}
                  </h4>
                  <ul className="tech-list">
                    <li>Arduino Uno (microcontroller)</li>
                    <li>Thermal Receipt Printer</li>
                    <li>RGB LED Lamp (feedback)</li>
                    <li>Paper Shredder (modified)</li>
                    <li>IR Sensor (shred detection)</li>
                  </ul>
                </div>

                <div className="tech-card">
                  <h4 className="tech-card-title">
                    {'Software'}
                  </h4>
                  <ul className="tech-list">
                    <li>Arduino C++ (sensor logic)</li>
                    <li>Serial Communication</li>
                    <li>State Machine (interaction flow)</li>
                    <li>LED Control (PWM)</li>
                    <li>Printer Driver Integration</li>
                  </ul>
                </div>

                <div className="tech-card">
                  <h4 className="tech-card-title">
                    {'Fabrication'}
                  </h4>
                  <ul className="tech-list">
                    <li>Laser-cut lamp enclosure</li>
                    <li>3D-printed mounts</li>
                    <li>Wiring & soldering</li>
                    <li>Shredder mechanism retrofit</li>
                    <li>Aesthetic finishing</li>
                  </ul>
                </div>
              </div>

              <div className="image-placeholder tech-visual">
                <p className="placeholder-label">
                  {'[Image: Technical Diagram / Behind-the-Scenes]'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome & Recognition */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="outcome-section">
              <div className="outcome-header">
                <Award size={48} color="hsl(var(--g1))" />
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                  {'Recognition & Impact'}
                </h2>
                <p className="section-subheading">
                  {'Award-Winning Demo & Exhibition Selection'}
                </p>
              </div>

              <div className="outcome-grid">
                <div className="outcome-card featured">
                  <div className="outcome-icon award-icon">
                    <Award size={50} />
                  </div>
                  <h3 className="outcome-title">
                    🏆 {'Best Demo Award'}
                  </h3>
                  <p className="outcome-text">
                    {'Recognized as the Best Demo at OpenHCI\'25 workshop among all participating teams. The judges praised the project\'s conceptual depth, technical execution, and compelling user experience within the tight timeline.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Star size={40} />
                  </div>
                  <h3 className="outcome-title">
                    ✨ {'Selected for TAICHI Demo'}
                  </h3>
                  <p className="outcome-text">
                    {'Chosen to be showcased at the prestigious TAICHI Demo exhibition, highlighting innovative HCI research and prototypes.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Users size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'Team Collaboration'}
                  </h3>
                  <p className="outcome-text">
                    {'Successfully collaborated in a 5-person team under extreme time pressure, demonstrating effective communication, rapid prototyping, and shared ownership.'}
                  </p>
                </div>
              </div>

              {/* Demo Scene */}
              <div className="demo-scene">
                <div className="image-placeholder demo-visual">
                  <p className="placeholder-label">
                    {'[Image: Group Demo Presentation at TAICHI / OpenHCI]'}
                  </p>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="takeaways-section">
                <h3 className="takeaways-title">
                  {'Key Takeaways'}
                </h3>
                <div className="takeaways-grid">
                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Rapid Prototyping Mastery'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Learned to prioritize ruthlessly, iterate quickly, and deliver a polished prototype under intense time constraints.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Tangible Interaction Design'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Deepened understanding of how physical actions can create meaningful digital experiences and emotional resonance.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Interdisciplinary Collaboration'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Bridged interaction design, hardware engineering, and software development to bring a complex vision to life.'}
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

          /* Award Badges - Prominent */
          .award-badges {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }

          .award-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            border-radius: var(--radius-lg);
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .award-badge.best-demo {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
          }

          .award-badge.taichi {
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            color: #fff;
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
            50% { box-shadow: 0 8px 24px rgba(255,215,0,0.4); }
          }

          .hero-title {
            font-size: clamp(40px, 6vw, 64px);
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

          .detail-value.achievement-highlight {
            font-size: 16px;
            color: hsl(var(--g1));
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Workshop Context Highlight */
          .workshop-context {
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

          .body-text-large {
            font-size: 20px;
            line-height: 1.7;
            color: var(--md-on-surface);
            font-weight: 500;
            margin-bottom: 48px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 64px;
          }

          /* Concept Cards */
          .concept-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-top: 48px;
          }

          .concept-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .concept-card:hover {
            transform: translateY(-4px);
          }

          .concept-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .concept-card:nth-child(2) .concept-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .concept-card:nth-child(3) .concept-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .concept-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .concept-desc {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Subsections */
          .subsection {
            margin-bottom: 64px;
          }

          .subsection-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .subsection-title {
            font-size: 28px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Two Column Layout */
          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          /* Challenge List */
          .challenge-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
          }

          .challenge-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .challenge-bullet {
            width: 8px;
            height: 8px;
            background: hsl(var(--g3));
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
          }

          .challenge-bullet.urgent {
            background: hsl(var(--g1));
          }

          .challenge-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          .highlight-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Stat Card */
          .stat-card {
            margin-top: 24px;
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .stat-number {
            font-size: 72px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* Concept Explanation */
          .concept-explanation {
            margin-bottom: 48px;
          }

          .concept-highlight {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g3)/.05), hsl(var(--g4)/.05));
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-lg);
            margin-top: 32px;
          }

          .highlight-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g3)/.2), hsl(var(--g4)/.2));
            border-radius: 50%;
            color: hsl(var(--g3));
            flex-shrink: 0;
          }

          .highlight-content {
            flex: 1;
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 48px 0;
          }

          /* Interaction Steps */
          .interaction-steps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .step-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .step-number {
            display: inline-block;
            font-size: 18px;
            font-weight: 800;
            color: hsl(var(--g1));
            background: hsl(var(--g1)/.1);
            padding: 8px 16px;
            border-radius: var(--radius-sm);
            margin-bottom: 16px;
          }

          .step-icon {
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

          .step-card:nth-child(2) .step-number {
            color: hsl(var(--g2));
            background: hsl(var(--g2)/.1);
          }

          .step-card:nth-child(2) .step-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .step-card:nth-child(3) .step-number {
            color: hsl(var(--g3));
            background: hsl(var(--g3)/.1);
          }

          .step-card:nth-child(3) .step-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .step-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .step-description {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 20px;
          }

          /* Technical Grid */
          .tech-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 48px;
          }

          .tech-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .tech-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 2px solid hsl(var(--g1)/.2);
          }

          .tech-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .tech-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 20px;
            position: relative;
          }

          .tech-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
            font-weight: 600;
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            aspect-ratio: 16 / 10;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.workshop-scene {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
          }

          .image-placeholder.concept-visual {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.step-visual {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 4 / 3;
            margin-top: 16px;
          }

          .image-placeholder.step-visual.shred {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
          }

          .image-placeholder.tech-visual {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.demo-visual {
            background: linear-gradient(135deg, #f1f8e9, #dcedc8);
            aspect-ratio: 16 / 9;
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
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border: 2px solid hsl(var(--g1)/.3);
            padding: 56px 32px;
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

          .outcome-icon.award-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
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

          /* Demo Scene */
          .demo-scene {
            margin-bottom: 64px;
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
            .concept-cards,
            .two-column-layout,
            .interaction-steps,
            .tech-grid,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .workshop-context,
            .concept-highlight {
              flex-direction: column;
              text-align: center;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .award-badges {
              flex-direction: column;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .concept-card,
            .award-badge {
              transition: none !important;
              transform: none !important;
              animation: none !important;
            }

            .reveal {
              opacity: 1;
            }

            .concept-card:hover {
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
