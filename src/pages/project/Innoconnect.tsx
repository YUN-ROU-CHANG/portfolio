import { useEffect } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { Award, Target, Users, Sparkles, TrendingUp, Gift, Heart, BarChart3, CheckCircle2 } from 'lucide-react';

export default function Innoconnect() {

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
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="hero-content"
            >
              {/* Gold Award Badge - Prominent Display */}
              <div className="award-badge-container">
                <div className="gold-award-badge">
                  <div className="badge-icon">
                    <Award size={28} />
                  </div>
                  <div className="badge-content">
                    <div className="badge-title">
                      {'🏆 Gold Award Winner'}
                    </div>
                    <div className="badge-subtitle">
                      {'1st Place / 186 Teams'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Title */}
              <h1 className="hero-title">
                {'Innoconnect | Hi-Life Gift Service Optimization'}
              </h1>
              
              {/* Subtitle */}
              <p className="hero-subtitle">
                {'Revitalizing the Digital Gifting Experience for a Major Taiwanese Retail Chain'}
              </p>

              {/* Project Details Grid */}
              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">
                    {'2024'}
                  </span>
                  <span className="detail-sub">
                    {'InnoConnect+ Competition'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">
                    {'UI/UX Designer & Researcher'}
                  </span>
                  <span className="detail-sub">
                    {'Team "Lai Yi Ka" (萊一咖)'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Achievement'}</span>
                  <span className="detail-value achievement-gold">
                    🏆 {'Gold Award'}
                  </span>
                  <span className="detail-sub">
                    {'Selected from 186 Teams'}
                  </span>
                </div>
              </div>

              {/* Competition Context */}
              <div className="competition-context">
                <div className="context-icon">
                  <Sparkles size={24} />
                </div>
                <div className="context-content">
                  <h3 className="context-title">
                    {'InnoConnect+ 2024 Challenge'}
                  </h3>
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
              <h2 className="section-heading">
                {'Project Overview'}
              </h2>
              <p className="body-text-large">
                {'Hi-Life, one of Taiwan\'s largest convenience store chains, operates a "Send a Gift" (來送禮) service that allows customers to send gifts through their stores. Despite the convenience, the service suffered from low awareness, complex user flows, and punitive policies that discouraged repeat usage. Our mission was to transform this underutilized service into a compelling social gifting platform.'}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">
                  <Award size={40} />
                </div>
                <div className="metric-number">1 / 186</div>
                <div className="metric-label">
                  {'Gold Award Winner'}
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-icon">
                  <TrendingUp size={40} />
                </div>
                <div className="metric-number">+35%</div>
                <div className="metric-label">
                  {'User Willingness (SUS)'}
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-icon">
                  <Users size={40} />
                </div>
                <div className="metric-number">4.8 / 5</div>
                <div className="metric-label">
                  {'UEQ Satisfaction Score'}
                </div>
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
                <h3 className="subsection-title">
                  {'The Challenge'}
                </h3>
              </div>

              <div className="two-column-layout">
                <div className="column-content">
                  <h4 className="highlight-title">
                    {'Why Wasn\'t Hi-Life\'s Gift Service Succeeding?'}
                  </h4>
                  
                  <p className="body-text">
                    {'Through comprehensive user research and competitive analysis, we identified three critical pain points preventing the "Send a Gift" service from reaching its potential. These issues created friction at every stage of the user journey, from awareness to post-purchase experience.'}
                  </p>

                  <div className="challenge-list">
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Low Awareness:'}</strong>
                        <span>
                          {' Most users were unaware the service existed. Marketing was minimal, leading to poor traffic and conversion.'}
                        </span>
                      </div>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Complex User Flow:'}</strong>
                        <span>
                          {' The gifting process required multiple steps, excessive form inputs, and lacked clear visual guidance.'}
                        </span>
                      </div>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet problem"></div>
                      <div>
                        <strong>{'Punitive Policy:'}</strong>
                        <span>
                          {' If a gift expired unclaimed, users had to pay the price difference to redeem it—discouraging gifting altogether.'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column-media">
                  <div className="image-placeholder problem-analysis">
                    <p className="placeholder-label">
                      {'[Image: User Journey Pain Points Analysis]'}
                    </p>
                  </div>

                  <div className="insight-card">
                    <h4 className="insight-title">
                      {'Key Insight'}
                    </h4>
                    <p className="insight-text">
                      {'Users want gifting to feel spontaneous, social, and risk-free—not transactional and complex.'}
                    </p>
                  </div>
                </div>
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
                <h3 className="subsection-title">
                  {'The Strategy: Gamification + Social Gifting'}
                </h3>
              </div>

              <p className="body-text" style={{ marginBottom: '40px' }}>
                {'We devised a two-pronged approach: attract new users through viral gamified marketing, then convert them into active gifters through social features and simplified flows.'}
              </p>

              {/* Strategy Pillars */}
              <div className="strategy-pillars">
                <div className="pillar-card">
                  <div className="pillar-number">01</div>
                  <div className="pillar-icon">
                    <Sparkles size={36} />
                  </div>
                  <h4 className="pillar-title">
                    {'Gamified Marketing'}
                  </h4>
                  <p className="pillar-desc">
                    {'Psychological personality tests to match users with coffee flavors, driving viral traffic and brand awareness.'}
                  </p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-number">02</div>
                  <div className="pillar-icon">
                    <Heart size={36} />
                  </div>
                  <h4 className="pillar-title">
                    {'Social Gifting Features'}
                  </h4>
                  <p className="pillar-desc">
                    {'Wishlist (許願池) and interactive gift cards that encourage sharing and gift requests among friends.'}
                  </p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-number">03</div>
                  <div className="pillar-icon">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="pillar-title">
                    {'Flow Optimization'}
                  </h4>
                  <p className="pillar-desc">
                    {'Removed price penalties, streamlined checkout, and added clear visual guidance throughout the journey.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: Part 1 - Psychological Test */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Sparkles size={24} color="hsl(var(--g3))" />
                <h3 className="subsection-title">
                  {'Solution #1: Psychological Test (心理測驗)'}
                </h3>
              </div>

              <div className="solution-explanation">
                <h4 className="highlight-title">
                  {'Driving Traffic Through Viral Gamification'}
                </h4>
                
                <p className="body-text">
                  {'We created a personality-driven psychological test that matches users with coffee flavors based on their traits. This shareable, fun experience serves as a low-friction entry point to the gifting service, turning casual browsers into engaged users.'}
                </p>

                <div className="feature-highlights">
                  <div className="feature-item">
                    <CheckCircle2 size={20} color="hsl(var(--g3))" />
                    <span>{'Personality-to-product matching algorithm'}</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle2 size={20} color="hsl(var(--g3))" />
                    <span>{'Social sharing hooks (viral loop)'}</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle2 size={20} color="hsl(var(--g3))" />
                    <span>{'Seamless transition to product purchase'}</span>
                  </div>
                </div>
              </div>

              <div className="visual-showcase">
                <div className="image-placeholder psychological-test">
                  <p className="placeholder-label">
                    {'[Image: Psychological Test UI Flow & Results Screen]'}
                  </p>
                </div>
              </div>

              <div className="design-details-grid">
                <div className="image-placeholder test-step">
                  <p className="placeholder-label">
                    {'[Image: Question Screen]'}
                  </p>
                </div>
                <div className="image-placeholder test-step">
                  <p className="placeholder-label">
                    {'[Image: Result & Coffee Match]'}
                  </p>
                </div>
                <div className="image-placeholder test-step">
                  <p className="placeholder-label">
                    {'[Image: Share to Social Media]'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: Part 2 - Wishlist & Social Gifting */}
        <section className="content-section reveal">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <Heart size={24} color="hsl(var(--g4))" />
                <h3 className="subsection-title">
                  {'Solution #2: Wishlist & Social Gifting (許願池)'}
                </h3>
              </div>

              <div className="solution-explanation">
                <h4 className="highlight-title">
                  {'Turning Gifting Into a Social Activity'}
                </h4>
                
                <p className="body-text">
                  {'The Wishlist feature allows users to create and share gift requests with friends. Instead of guessing what someone wants, senders can browse their friends\' wishlists and send meaningful gifts. Recipients can also send interactive gift cards, increasing engagement and virality.'}
                </p>

                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Gift size={32} />
                    </div>
                    <h5 className="feature-title">
                      {'Personal Wishlist'}
                    </h5>
                    <p className="feature-text">
                      {'Users curate gift requests that friends can easily fulfill.'}
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <Users size={32} />
                    </div>
                    <h5 className="feature-title">
                      {'Friend Discovery'}
                    </h5>
                    <p className="feature-text">
                      {'Browse wishlists of friends and discover gift opportunities.'}
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <Sparkles size={32} />
                    </div>
                    <h5 className="feature-title">
                      {'Interactive Cards'}
                    </h5>
                    <p className="feature-text">
                      {'Recipients send shareable gift cards to encourage friends to send gifts.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="visual-showcase">
                <div className="image-placeholder wishlist-ui">
                  <p className="placeholder-label">
                    {'[Image: Wishlist Interface & Social Features]'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: Part 3 - Flow Optimization */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="subsection">
              <div className="subsection-header">
                <TrendingUp size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">
                  {'Solution #3: Flow Optimization & Policy Changes'}
                </h3>
              </div>

              <div className="solution-explanation">
                <h4 className="highlight-title">
                  {'Removing Friction, Eliminating Penalties'}
                </h4>
                
                <p className="body-text">
                  {'We redesigned the entire gifting flow to reduce cognitive load and eliminate punitive policies. The new checkout process is 40% faster, requires fewer inputs, and removes the price difference penalty that discouraged gifting.'}
                </p>
              </div>

              {/* Before vs After Comparison */}
              <div className="comparison-container">
                <div className="comparison-side old">
                  <div className="comparison-label">
                    {'Before'}
                  </div>
                  <div className="image-placeholder old-flow">
                    <p className="placeholder-label">
                      {'[Image: Old Gifting Flow]'}
                    </p>
                  </div>
                  <ul className="comparison-list">
                    <li>{'7-step checkout process'}</li>
                    <li>{'Price penalty on expiration'}</li>
                    <li>{'Confusing form inputs'}</li>
                    <li>{'No visual progress indicator'}</li>
                  </ul>
                </div>

                <div className="comparison-arrow">
                  <TrendingUp size={32} />
                </div>

                <div className="comparison-side new">
                  <div className="comparison-label new-label">
                    {'After'}
                  </div>
                  <div className="image-placeholder new-flow">
                    <p className="placeholder-label">
                      {'[Image: Optimized Gifting Flow]'}
                    </p>
                  </div>
                  <ul className="comparison-list">
                    <li>{'4-step streamlined checkout'}</li>
                    <li>{'No penalty policy removed'}</li>
                    <li>{'Auto-fill & smart defaults'}</li>
                    <li>{'Clear progress stepper'}</li>
                  </ul>
                </div>
              </div>

              {/* Key Improvements */}
              <div className="improvements-grid">
                <div className="improvement-card">
                  <div className="improvement-number">-40%</div>
                  <div className="improvement-label">
                    {'Checkout Time'}
                  </div>
                </div>
                <div className="improvement-card">
                  <div className="improvement-number">-60%</div>
                  <div className="improvement-label">
                    {'Form Fields'}
                  </div>
                </div>
                <div className="improvement-card">
                  <div className="improvement-number">100%</div>
                  <div className="improvement-label">
                    {'Penalty Removed'}
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
                <h3 className="subsection-title">
                  {'Validation: Usability Testing (SUS & UEQ)'}
                </h3>
              </div>

              <div className="validation-explanation">
                <h4 className="highlight-title">
                  {'Data-Driven Success Metrics'}
                </h4>
                
                <p className="body-text">
                  {'We conducted comprehensive usability testing using the System Usability Scale (SUS) and User Experience Questionnaire (UEQ) to measure the impact of our redesign. The results confirmed significant improvements in user willingness, satisfaction, and overall experience.'}
                </p>
              </div>

              {/* Testing Results */}
              <div className="testing-results">
                <div className="result-card sus">
                  <div className="result-header">
                    <h5 className="result-title">
                      {'System Usability Scale (SUS)'}
                    </h5>
                  </div>
                  <div className="result-metric">
                    <div className="result-number">+35%</div>
                    <div className="result-label">
                      {'Increase in User Willingness'}
                    </div>
                  </div>
                  <div className="image-placeholder sus-chart">
                    <p className="placeholder-label">
                      {'[Image: SUS Score Comparison Chart]'}
                    </p>
                  </div>
                </div>

                <div className="result-card ueq">
                  <div className="result-header">
                    <h5 className="result-title">
                      {'User Experience Questionnaire (UEQ)'}
                    </h5>
                  </div>
                  <div className="result-metric">
                    <div className="result-number">4.8 / 5</div>
                    <div className="result-label">
                      {'Overall Satisfaction Score'}
                    </div>
                  </div>
                  <div className="image-placeholder ueq-chart">
                    <p className="placeholder-label">
                      {'[Image: UEQ Dimension Scores (Attractiveness, Efficiency, etc.)]'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div className="findings-grid">
                <div className="finding-card">
                  <CheckCircle2 size={24} color="hsl(var(--g1))" />
                  <p className="finding-text">
                    {'Users found the psychological test "fun and shareable," driving organic traffic.'}
                  </p>
                </div>
                <div className="finding-card">
                  <CheckCircle2 size={24} color="hsl(var(--g2))" />
                  <p className="finding-text">
                    {'Wishlist feature increased gift-sending intent by enabling easier gift discovery.'}
                  </p>
                </div>
                <div className="finding-card">
                  <CheckCircle2 size={24} color="hsl(var(--g3))" />
                  <p className="finding-text">
                    {'Removing the price penalty policy eliminated user anxiety and boosted trust.'}
                  </p>
                </div>
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
                  {'Gold Award Winner & Measurable Business Impact'}
                </p>
              </div>

              <div className="outcome-grid">
                <div className="outcome-card featured">
                  <div className="outcome-icon gold-icon">
                    <Award size={50} />
                  </div>
                  <h3 className="outcome-title">
                    🏆 {'InnoConnect+ Gold Award'}
                  </h3>
                  <p className="outcome-text">
                    {'Selected as the 1st place winner among 186 competing teams in the 2024 InnoConnect+ Competition. The judges recognized the project\'s strategic gamification, user-centered design, and measurable impact on conversion metrics.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <TrendingUp size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'Increased User Engagement'}
                  </h3>
                  <p className="outcome-text">
                    {'The psychological test campaign and wishlist features drove significant increases in user acquisition and repeat gifting behavior.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <BarChart3 size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'Validated by Research'}
                  </h3>
                  <p className="outcome-text">
                    {'SUS and UEQ testing confirmed 35% improvement in user willingness and 4.8/5 satisfaction score, validating our design decisions.'}
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
                      {'Gamification Drives Acquisition'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Fun, shareable experiences can turn passive browsers into active users by lowering the entry barrier.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Social Features Create Loops'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Wishlists and interactive cards transform gifting from a one-time transaction into a repeatable social behavior.'}
                    </p>
                  </div>

                  <div className="takeaway-card">
                    <h4 className="takeaway-card-title">
                      {'Remove Friction, Not Features'}
                    </h4>
                    <p className="takeaway-card-text">
                      {'Simplifying flows and eliminating punitive policies can dramatically improve conversion without adding complexity.'}
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

          /* Gold Award Badge - Ultra Prominent */
          .award-badge-container {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
          }

          .gold-award-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            border-radius: var(--radius-lg);
            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
            animation: gold-pulse 3s ease-in-out infinite;
          }

          @keyframes gold-pulse {
            0%, 100% { 
              box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 12px 48px rgba(255, 215, 0, 0.6);
              transform: scale(1.02);
            }
          }

          .badge-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            color: #000;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 18px;
            font-weight: 800;
            color: #000;
            line-height: 1.2;
            letter-spacing: 0.5px;
          }

          .badge-subtitle {
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.7);
            margin-top: 4px;
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

          .detail-value.achievement-gold {
            font-size: 16px;
            color: #FFA500;
            font-weight: 700;
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Competition Context */
          .competition-context {
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

          /* Metrics Grid */
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .metric-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .metric-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 16px;
            color: hsl(var(--g1));
          }

          .metric-number {
            font-size: 36px;
            font-weight: 800;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .metric-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
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

          .challenge-bullet.problem {
            background: #ef4444;
          }

          .challenge-item div {
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

          /* Insight Card */
          .insight-card {
            margin-top: 24px;
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08));
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-lg);
          }

          .insight-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .insight-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Strategy Pillars */
          .strategy-pillars {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .pillar-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .pillar-number {
            display: inline-block;
            font-size: 16px;
            font-weight: 800;
            color: hsl(var(--g1));
            background: hsl(var(--g1)/.1);
            padding: 6px 14px;
            border-radius: var(--radius-sm);
            margin-bottom: 16px;
          }

          .pillar-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 20px;
            color: hsl(var(--g1));
          }

          .pillar-card:nth-child(2) .pillar-number {
            color: hsl(var(--g2));
            background: hsl(var(--g2)/.1);
          }

          .pillar-card:nth-child(2) .pillar-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .pillar-card:nth-child(3) .pillar-number {
            color: hsl(var(--g3));
            background: hsl(var(--g3)/.1);
          }

          .pillar-card:nth-child(3) .pillar-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .pillar-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .pillar-desc {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Solution Explanation */
          .solution-explanation {
            margin-bottom: 48px;
          }

          /* Feature Highlights */
          .feature-highlights {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 24px;
          }

          .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .feature-item svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .feature-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Feature Grid */
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .feature-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .feature-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g4)/.1), hsl(var(--g1)/.1));
            border-radius: 50%;
            margin-bottom: 16px;
            color: hsl(var(--g4));
          }

          .feature-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .feature-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 48px 0;
          }

          /* Design Details Grid */
          .design-details-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          /* Comparison Container */
          .comparison-container {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 32px;
            align-items: center;
            margin-top: 32px;
          }

          .comparison-side {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .comparison-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            padding: 8px 16px;
            background: rgba(0,0,0,0.05);
            border-radius: var(--radius-sm);
            text-align: center;
          }

          .comparison-label.new-label {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            color: hsl(var(--g1));
          }

          .comparison-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            color: hsl(var(--g1));
          }

          .comparison-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .comparison-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 20px;
            position: relative;
          }

          .comparison-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
          }

          /* Improvements Grid */
          .improvements-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .improvement-card {
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border: 2px solid hsl(var(--g1)/.2);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .improvement-number {
            font-size: 40px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .improvement-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Validation */
          .validation-explanation {
            margin-bottom: 48px;
          }

          /* Testing Results */
          .testing-results {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 32px;
          }

          .result-card {
            padding: 32px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .result-header {
            margin-bottom: 24px;
          }

          .result-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .result-metric {
            text-align: center;
            margin-bottom: 24px;
          }

          .result-number {
            font-size: 48px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .result-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Findings Grid */
          .findings-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .finding-card {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 20px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .finding-card svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .finding-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
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

          .image-placeholder.problem-analysis {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
          }

          .image-placeholder.psychological-test {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.test-step {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.wishlist-ui {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.old-flow {
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          }

          .image-placeholder.new-flow {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          }

          .image-placeholder.sus-chart,
          .image-placeholder.ueq-chart {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
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
            background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.08));
            border: 2px solid rgba(255,215,0,0.3);
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

          .outcome-icon.gold-icon {
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
            .metrics-grid,
            .two-column-layout,
            .strategy-pillars,
            .design-details-grid,
            .feature-grid,
            .comparison-container,
            .improvements-grid,
            .testing-results,
            .findings-grid,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .comparison-arrow {
              transform: rotate(90deg);
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .competition-context,
            .insight-card {
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

            .gold-award-badge {
              flex-direction: column;
              text-align: center;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .gold-award-badge {
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
    </Layout>
  );
}
