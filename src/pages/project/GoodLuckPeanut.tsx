import { useEffect } from 'react';
import { motion } from 'motion/react';
import Layout from '../../components/Layout';
import { Award, Package, Globe, Lightbulb, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function GoodLuckPeanut() {

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
      <div id="good-luck-peanut-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="hero-content"
            >
              {/* Project Tags */}
              <div className="hero-tags">
                <span className="hero-tag branding">
                  <Package size={16} />
                  {'Branding & Packaging'}
                </span>
                <span className="hero-tag web">
                  <Globe size={16} />
                  {'Website Redesign'}
                </span>
              </div>
              
              <h1 className="hero-title">
                {'Good Luck Peanut'}
              </h1>
              
              <p className="hero-subtitle">
                {'Complete Brand Identity & E-Commerce Redesign'}
              </p>

              {/* Project Details Grid */}
              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-label">{'Timeline'}</span>
                  <span className="detail-value">
                    {'2022 - 2023'}
                  </span>
                  <span className="detail-sub">
                    {'Branding: 2022 | Web: Jul-Sep 2023'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'My Role'}</span>
                  <span className="detail-value">
                    {'Brand Visual Planning, UI/UX Design'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">{'Recognition'}</span>
                  <span className="detail-value">
                    <Award size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    {'2nd Place - Creative Culture Exhibition'}
                  </span>
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
                {'This comprehensive project transformed Fuhshyuan Foods (福瑄食品), a traditional Taiwanese peanut brittle manufacturer, through a complete brand redesign and modern e-commerce website. The goal was to bridge generational preferences by modernizing the brand\'s visual identity and digital presence while preserving its rich Hakka cultural heritage.'}
              </p>
            </div>

            {/* Two-Part Structure */}
            <div className="project-parts">
              <div className="part-card">
                <div className="part-icon">
                  <Package size={32} />
                </div>
                <h3 className="part-title">
                  {'Part 1: Brand & Packaging'}
                </h3>
                <p className="part-desc">
                  {'Cultural storytelling through modern packaging design inspired by Hakka traditions'}
                </p>
              </div>
              <div className="part-card">
                <div className="part-icon">
                  <Globe size={32} />
                </div>
                <h3 className="part-title">
                  {'Part 2: Website Redesign'}
                </h3>
                <p className="part-desc">
                  {'User-centered e-commerce experience with improved navigation and conversion flow'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* PART 1: BRAND & PACKAGING */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(255,248,225,0.3) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            {/* Part 1 Header */}
            <div className="part-header">
              <div className="part-number">01</div>
              <div>
                <h2 className="section-heading">
                  {'Brand & Packaging Redesign'}
                </h2>
                <p className="section-subheading">
                  {'Revitalizing Traditional Taiwanese Peanut Brittle for Modern Consumers'}
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div className="subsection">
              <div className="subsection-header">
                <Lightbulb size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">
                  {'The Challenge'}
                </h3>
              </div>
              
              <div className="two-column-layout">
                <div className="column-content">
                  <p className="body-text">
                    {'Fuhshyuan Foods (福瑄食品) faced declining engagement with younger demographics. The traditional packaging design failed to communicate the product\'s cultural value and quality, positioning it as outdated rather than heritage-rich.'}
                  </p>

                  <div className="challenge-list">
                    <div className="challenge-item">
                      <div className="challenge-bullet"></div>
                      <span>{'Old packaging was sticky and inconvenient for modern consumption'}</span>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet"></div>
                      <span>{'Visual identity failed to attract 18-35 age demographic'}</span>
                    </div>
                    <div className="challenge-item">
                      <div className="challenge-bullet"></div>
                      <span>{'Cultural heritage story was not effectively communicated'}</span>
                    </div>
                  </div>
                </div>

                <div className="column-media">
                  <div className="image-placeholder old-packaging">
                    <p className="placeholder-label">
                      {'[Image: Old Traditional Packaging]'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Strategy */}
            <div className="subsection">
              <div className="subsection-header">
                <TrendingUp size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">
                  {'The Strategy'}
                </h3>
              </div>

              <div className="strategy-highlight">
                <div className="highlight-content">
                  <h4 className="highlight-title">
                    {'Cultural Narrative: "Good Luck" (好韻)'}
                  </h4>
                  <p className="body-text">
                    {'The rebranding centered around the Hakka festival "Tian Chuan Ri" (天穿日 - Heaven\'s Birthday). The word "Yun" (韻) in Chinese means "rhyme" or "rhythm," but phonetically it also implies "good luck" and "fortune." This dual meaning transformed the peanut brittle from a simple snack into a culturally meaningful gift symbolizing blessings and prosperity.'}
                  </p>
                </div>
              </div>

              <div className="strategy-grid">
                <div className="strategy-card">
                  <div className="strategy-number">01</div>
                  <h4 className="strategy-card-title">
                    {'Cultural Connection'}
                  </h4>
                  <p className="strategy-card-text">
                    {'Anchored in Hakka "Tian Chuan Ri" festival traditions, making the product culturally significant'}
                  </p>
                </div>

                <div className="strategy-card">
                  <div className="strategy-number">02</div>
                  <h4 className="strategy-card-title">
                    {'Visual Modernization'}
                  </h4>
                  <p className="strategy-card-text">
                    {'Woodblock printing aesthetics combined with contemporary design principles'}
                  </p>
                </div>

                <div className="strategy-card">
                  <div className="strategy-number">03</div>
                  <h4 className="strategy-card-title">
                    {'Format Innovation'}
                  </h4>
                  <p className="strategy-card-text">
                    {'Single-serve instant packs solving stickiness while creating gift-ready format'}
                  </p>
                </div>
              </div>
            </div>

            {/* Design Solution */}
            <div className="subsection">
              <div className="subsection-header">
                <Package size={24} color="hsl(var(--g3))" />
                <h3 className="subsection-title">
                  {'Design Solution'}
                </h3>
              </div>

              {/* Main Visual Showcase */}
              <div className="visual-showcase">
                <div className="showcase-main">
                  <div className="image-placeholder packaging-hero">
                    <p className="placeholder-label">
                      {'[Image: Final Packaging Design - Hero Shot]'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Design Details Grid */}
              <div className="design-details-grid">
                <div className="image-placeholder">
                  <p className="placeholder-label">
                    {'[Image: Woodblock Printing Style Graphics]'}
                  </p>
                </div>
                <div className="image-placeholder">
                  <p className="placeholder-label">
                    {'[Image: Brand Characters & Mascot]'}
                  </p>
                </div>
                <div className="image-placeholder">
                  <p className="placeholder-label">
                    {'[Image: Single-Serve Pack Design]'}
                  </p>
                </div>
                <div className="image-placeholder">
                  <p className="placeholder-label">
                    {'[Image: Gift Box Set]'}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="features-list">
                <div className="feature-row">
                  <ArrowRight size={20} color="hsl(var(--g1))" />
                  <div>
                    <strong>{'Woodblock Printing Visuals:'}</strong>
                    {' Traditional Hakka art style modernized with vibrant colors and clean typography'}
                  </div>
                </div>
                <div className="feature-row">
                  <ArrowRight size={20} color="hsl(var(--g2))" />
                  <div>
                    <strong>{'Single-Serve Innovation:'}</strong>
                    {' Individual instant packs eliminate stickiness and improve portability'}
                  </div>
                </div>
                <div className="feature-row">
                  <ArrowRight size={20} color="hsl(var(--g3))" />
                  <div>
                    <strong>{'Gift-Ready Format:'}</strong>
                    {' Premium packaging suitable for festivals and cultural celebrations'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* PART 2: WEBSITE REDESIGN */}
        <section className="content-section reveal" style={{ background: 'linear-gradient(180deg, rgba(227,242,253,0.3) 0%, transparent 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            {/* Part 2 Header */}
            <div className="part-header">
              <div className="part-number">02</div>
              <div>
                <h2 className="section-heading">
                  {'Website Redesign'}
                </h2>
                <p className="section-subheading">
                  {'Modernizing the E-Commerce Experience'}
                </p>
              </div>
            </div>

            {/* Context */}
            <div className="subsection">
              <div className="subsection-header">
                <Globe size={24} color="hsl(var(--g1))" />
                <h3 className="subsection-title">
                  {'Project Context'}
                </h3>
              </div>

              <p className="body-text">
                {'Following the successful brand redesign, the official website needed a complete overhaul to match the new brand identity and improve the user experience. The old website suffered from poor navigation, unclear product information, and low conversion rates.'}
              </p>
            </div>

            {/* Before vs After Comparison */}
            <div className="subsection">
              <div className="subsection-header">
                <Users size={24} color="hsl(var(--g2))" />
                <h3 className="subsection-title">
                  {'Before vs. After'}
                </h3>
              </div>

              <div className="comparison-container">
                <div className="comparison-side old">
                  <div className="comparison-label">
                    {'Old Website'}
                  </div>
                  <div className="image-placeholder old-website">
                    <p className="placeholder-label">
                      {'[Image: Old Website Screenshot]'}
                    </p>
                  </div>
                  <ul className="comparison-list">
                    <li>{'Cluttered navigation'}</li>
                    <li>{'Outdated visual design'}</li>
                    <li>{'Poor mobile experience'}</li>
                    <li>{'Unclear product info'}</li>
                  </ul>
                </div>

                <div className="comparison-arrow">
                  <ArrowRight size={32} />
                </div>

                <div className="comparison-side new">
                  <div className="comparison-label new-label">
                    {'New Website'}
                  </div>
                  <div className="image-placeholder new-website">
                    <p className="placeholder-label">
                      {'[Image: New Website Screenshot]'}
                    </p>
                  </div>
                  <ul className="comparison-list">
                    <li>{'Clean, intuitive navigation'}</li>
                    <li>{'Modern brand-aligned design'}</li>
                    <li>{'Mobile-first responsive'}</li>
                    <li>{'Clear product presentation'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UX Process */}
            <div className="subsection">
              <div className="subsection-header">
                <Lightbulb size={24} color="hsl(var(--g3))" />
                <h3 className="subsection-title">
                  {'UX Process: Functional Map'}
                </h3>
              </div>

              <p className="body-text">
                {'I created a comprehensive functional map to reorganize the website\'s information architecture. This process helped identify user pain points and streamline the navigation structure for better discoverability and conversion.'}
              </p>

              <div className="visual-showcase">
                <div className="image-placeholder functional-map">
                  <p className="placeholder-label">
                    {'[Image: Functional Map / Site Architecture]'}
                  </p>
                </div>
              </div>
            </div>

            {/* UI High Fidelity Screens */}
            <div className="subsection">
              <div className="subsection-header">
                <Globe size={24} color="hsl(var(--g4))" />
                <h3 className="subsection-title">
                  {'UI Design: High-Fidelity Screens'}
                </h3>
              </div>

              <p className="body-text">
                {'The final UI design focused on three key pages: Homepage (brand story and featured products), About Brand (Hakka culture and company values), and Product Listing (intuitive browsing and filtering).'}
              </p>

              {/* UI Screens Grid */}
              <div className="ui-screens-grid">
                <div className="ui-screen-item">
                  <div className="image-placeholder ui-screen">
                    <p className="placeholder-label">
                      {'[Image: Homepage Design]'}
                    </p>
                  </div>
                  <h4 className="ui-screen-label">
                    {'Homepage'}
                  </h4>
                </div>

                <div className="ui-screen-item">
                  <div className="image-placeholder ui-screen">
                    <p className="placeholder-label">
                      {'[Image: About Brand Page]'}
                    </p>
                  </div>
                  <h4 className="ui-screen-label">
                    {'About Brand'}
                  </h4>
                </div>

                <div className="ui-screen-item">
                  <div className="image-placeholder ui-screen">
                    <p className="placeholder-label">
                      {'[Image: Product Listing Page]'}
                    </p>
                  </div>
                  <h4 className="ui-screen-label">
                    {'Product Listing'}
                  </h4>
                </div>
              </div>

              {/* Design Highlights */}
              <div className="highlights-grid">
                <div className="highlight-card">
                  <h4 className="highlight-card-title">
                    {'Brand Storytelling'}
                  </h4>
                  <p className="highlight-card-text">
                    {'Homepage hero section showcases Hakka culture and "Good Luck" concept'}
                  </p>
                </div>

                <div className="highlight-card">
                  <h4 className="highlight-card-title">
                    {'Intuitive Navigation'}
                  </h4>
                  <p className="highlight-card-text">
                    {'Simplified menu structure with clear product categories and filters'}
                  </p>
                </div>

                <div className="highlight-card">
                  <h4 className="highlight-card-title">
                    {'Mobile-First Design'}
                  </h4>
                  <p className="highlight-card-text">
                    {'Responsive layouts optimized for smartphone shopping experience'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="content-section reveal" style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="outcome-section">
              <div className="outcome-header">
                <Award size={48} color="hsl(var(--g1))" />
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                  {'Outcome & Impact'}
                </h2>
                <p className="section-subheading">
                  {'Recognition and Results'}
                </p>
              </div>

              <div className="outcome-grid">
                <div className="outcome-card featured">
                  <div className="outcome-icon">
                    <Award size={40} />
                  </div>
                  <h3 className="outcome-title">
                    {'2nd Place Award'}
                  </h3>
                  <p className="outcome-text">
                    {'Won 2nd Place in the Creative Culture Graduate Exhibition, recognizing excellence in cultural brand design and digital innovation.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Package size={36} />
                  </div>
                  <h3 className="outcome-title">
                    {'Brand Repositioning'}
                  </h3>
                  <p className="outcome-text">
                    {'Successfully repositioned a traditional product for younger demographics while preserving cultural authenticity.'}
                  </p>
                </div>

                <div className="outcome-card">
                  <div className="outcome-icon">
                    <Globe size={36} />
                  </div>
                  <h3 className="outcome-title">
                    {'Digital Transformation'}
                  </h3>
                  <p className="outcome-text">
                    {'Created a modern e-commerce platform that improved user experience and sales conversion.'}
                  </p>
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

          .hero-tags {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 24px;
            flex-wrap: wrap;
          }

          .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-radius: var(--radius-md);
          }

          .hero-tag.branding {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            color: hsl(var(--g1));
          }

          .hero-tag.web {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .hero-title {
            font-size: clamp(48px, 6vw, 72px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 24px);
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

          .detail-sub {
            display: block;
            font-size: 13px;
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

          .project-parts {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 48px;
          }

          .part-card {
            padding: 40px 32px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .part-card:hover {
            transform: translateY(-4px);
          }

          .part-icon {
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

          .part-card:nth-child(2) .part-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .part-title {
            font-size: 22px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .part-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Section Divider */
          .section-divider {
            padding: 60px 0;
          }

          .divider-line {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
          }

          /* Part Headers */
          .part-header {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 48px;
          }

          .part-number {
            font-size: 80px;
            font-weight: 900;
            line-height: 1;
            color: hsl(var(--g1)/.15);
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

          .challenge-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Strategy Highlight */
          .strategy-highlight {
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-md);
            margin-bottom: 32px;
          }

          .highlight-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Strategy Grid */
          .strategy-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .strategy-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .strategy-number {
            font-size: 36px;
            font-weight: 800;
            color: hsl(var(--g1)/.2);
            line-height: 1;
            margin-bottom: 12px;
          }

          .strategy-card-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .strategy-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 32px 0;
          }

          .showcase-main {
            width: 100%;
          }

          /* Design Details Grid */
          .design-details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 32px;
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

          .image-placeholder.old-packaging {
            background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
          }

          .image-placeholder.packaging-hero {
            background: linear-gradient(135deg, #fff8e1, #ffe4b3);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.functional-map {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.old-website {
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          }

          .image-placeholder.new-website {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          }

          .image-placeholder.ui-screen {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 3 / 4;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Features List */
          .features-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 32px;
          }

          .feature-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-md);
          }

          .feature-row svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .feature-row div {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
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
            color: var(--color-text-muted);
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

          /* UI Screens Grid */
          .ui-screens-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin: 32px 0;
          }

          .ui-screen-item {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ui-screen-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            text-align: center;
          }

          /* Highlights Grid */
          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .highlight-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .highlight-card-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .highlight-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
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
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border: 2px solid hsl(var(--g1)/.3);
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

          .outcome-card.featured .outcome-icon {
            width: 100px;
            height: 100px;
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
            .project-parts,
            .two-column-layout,
            .strategy-grid,
            .design-details-grid,
            .comparison-container,
            .ui-screens-grid,
            .highlights-grid,
            .outcome-grid {
              grid-template-columns: 1fr;
            }

            .comparison-arrow {
              transform: rotate(90deg);
            }

            .part-header {
              flex-direction: column;
            }

            .part-number {
              font-size: 60px;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .hero-tags {
              flex-direction: column;
            }

            .section-divider {
              padding: 40px 0;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .part-card {
              transition: none !important;
              transform: none !important;
            }

            .reveal {
              opacity: 1;
            }

            .part-card:hover {
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
