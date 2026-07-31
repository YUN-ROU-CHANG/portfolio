import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
// 💡 加入了 FileText Icon 用於證書按鈕
import { Briefcase, Award, Mail, Sparkles, BookOpen, FileText } from 'lucide-react';
import { Separator } from '../components/ui/separator';

import sleepGuardianCover from '../assets/images/home/sleep-guardian-cover.png';
import oblivilightCover from '../assets/images/home/Oblivilight-cover.jpg';
import muCover from '../assets/images/home/mu-cover.jpg';
import innoconnectCover from '../assets/images/home/innoconnect-cover.jpg';
import gcceCover from '../assets/images/home/gcce-cover.jpg';
import openHciMe from '../assets/images/home/openhci_me.png';
import threatAppeal from '../assets/images/home/threat-appeal.png';
import empathyAppeal from '../assets/images/home/empathy-appeal.png';
import designFriction from '../assets/images/home/design-friction.jpg';
import controlNotif from '../assets/images/home/control.png';
import photographyCover from '../assets/images/photography/photography-cover.png';
import concertImg from '../assets/images/home/concert.png';
import vibeCodingImg from '../assets/images/home/vibe-coding.png';

// 💡 引入所有的獎狀與證明圖片
import tuitionCert from '../assets/images/home/tuition.jpg';
import timesYoungCert from '../assets/images/home/times-young-creative-awards.jpg';
import ieeeGcceCert from '../assets/images/home/ieeegcce-presentation.jpg';
import openhciCert from '../assets/images/home/best-demo.jpeg';
import uxdaCert from '../assets/images/home/uxda-nominated.jpg';
import innoconnectCert from '../assets/images/home/innoconnect-certificate.jpg';
import bigDataCert from '../assets/images/home/big-data-cup.jpg';
import ssimCert from '../assets/images/home/ssim-award.jpg';

export default function Home() {
  const { t } = useLanguage();
  // Graduation is Aug 2026, so the badge states a start date until then and
  // switches to an open-ended one after. Nothing to update by hand either way.
  const availableFromAug2026 = Date.now() < new Date('2026-08-01T00:00:00').getTime();
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    let ticking = false;

    const updatePositions = () => {
      const y = window.scrollY;
      if (heroRef.current) heroRef.current.style.transform = `translateY(${-(y / 15)}px)`;
      if (projectRef.current) projectRef.current.style.transform = `translateY(${-(y / 30)}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePositions);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updatePositions();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) return;

    const reveals = document.querySelectorAll('.reveal');

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      rootMargin: '-5% 0px -5% 0px',
      threshold: 0
    });

    reveals.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [visibleStats, setVisibleStats] = useState([0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  const playgroundItems = [
    {
      image: photographyCover,
      title: t('home.playground.photography.title'),
      desc: t('home.playground.photography.desc'),
      link: '/photography',
      linkType: 'internal' as const,
      label: t('common.explore'),
    },
    {
      image: concertImg,
      title: t('home.playground.music.title'),
      desc: t('home.playground.music.desc'),
      link: 'https://rose-musical-works.framer.website/',
      linkType: 'external' as const,
      label: t('home.playground.music.label'),
    },
    {
      image: vibeCodingImg,
      title: t('home.playground.vibeCoding.title'),
      desc: t('home.playground.vibeCoding.desc'),
      link: '/how-i-built-this',
      linkType: 'internal' as const,
      label: t('home.playground.vibeCoding.label'),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setCarouselIndex(i => (i - 1 + 3) % 3);
      if (e.key === 'ArrowRight') setCarouselIndex(i => (i + 1) % 3);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Stats count-up trigger
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsAnimated(true); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!statsAnimated) return;
    const targets = [48, 3, 3];
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVisibleStats(targets.map(t => Math.round(ease * t)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [statsAnimated]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !tileRefs.current.includes(el)) {
      tileRefs.current.push(el);
    }
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="hero" id="about">
        <div className="container hero-inner" ref={heroRef}>

          {/* Upper: text + photo */}
          <div className="hero-main-grid">
            <div className="hero-text reveal" ref={addToRefs}>
              <div className="avail-badge">
                <span className="avail-dot"></span>
                <span className="avail-label">{t(availableFromAug2026 ? 'home.hero.badgeBefore' : 'home.hero.badgeAfter')}</span>
              </div>
              <h1 className="name interactive-name">
                {t('home.hero.name').split("").map((char, index) => (
                  <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <h2 className="head">{t('home.hero.title')}</h2>
              <h3 className="sub-head text-primary">{t('home.hero.subtitle')}</h3>
              <p className="body muted hero-desc">{t('home.hero.desc')}</p>
              <div className="hero-buttons">
                <Link className="btn-pill btn--primary" to="/about">{t('home.hero.aboutBtn')}{' '}<span className="dot">→</span>
                </Link>
                <a className="btn-pill btn--secondary" href="#selected-works">{t('home.hero.viewWorkBtn')}{' '}<span className="dot">↓</span>
                </a>
              </div>
            </div>

            {/* Right: photo */}
            <div className="hero-photo">
              <motion.img
                src={openHciMe}
                alt={t('home.hero.photoAlt')}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 8px 32px var(--border))',
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Chartreuse Marquee Banner */}
      {/* 2. Selected Works */}
      <section className="section" id="selected-works" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container" ref={projectRef} style={{ maxWidth: '1200px' }}>
          <div className="section-header-flex">
            <h2 className="section-head">
              <Briefcase size={32} color="var(--accent-text)" />{t('home.works.heading')}</h2>
            <Link to="/projects" className="view-all-link">{t('home.works.viewAll')}</Link>
          </div>

          {/* Work-row list */}
          <div style={{ borderTop: '1px solid var(--text-primary)', borderBottom: '1px solid var(--text-primary)', marginTop: '32px' }}>

            {/* 01 — Sleep Guardian */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0, ease: [0.2, 0.8, 0.2, 1] }}>
              <Link to="/projects/sleep-guardian" className="reveal" ref={addToRefs}
                style={{ display: 'grid', gridTemplateColumns: '70px 1fr 260px 140px 60px', gap: '24px', padding: '28px 4px', borderBottom: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', transition: 'background .3s, padding .3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.paddingLeft = '16px'; el.style.paddingRight = '16px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'var(--surface-inverse)'; a.style.color = 'var(--accent-on-inverse)'; a.style.transform = 'rotate(-45deg)'; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.paddingLeft = '4px'; el.style.paddingRight = '4px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'transparent'; a.style.color = 'inherit'; a.style.transform = 'rotate(0deg)'; } }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '.1em', paddingTop: '6px' }}>/ 01</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,30px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 10px', textTransform: 'uppercase' }}>{t('home.works.sleepGuardian.titlePre')}{' '}<em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .1em' }}>{t('home.works.sleepGuardian.titleHighlight')}</em>{' '}{t('home.works.sleepGuardian.titlePost')}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0, maxWidth: '56ch' }}>{t('home.works.sleepGuardian.desc')}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {[t('home.works.sleepGuardian.tag1'), t('home.works.sleepGuardian.tag2'), t('home.works.sleepGuardian.tag3')].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--text-primary)', borderRadius: '999px' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--text-primary)', background: 'var(--bone-2,var(--surface-muted))' }}>
                  <img src={sleepGuardianCover} alt={t('home.works.sleepGuardian.imgAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-.02em', display: 'block', marginBottom: '4px' }}>2026</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{t('home.works.sleepGuardian.tag1')}</span>
                </div>
                <div className="work-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', border: '1px solid var(--text-primary)', borderRadius: '50%', alignSelf: 'center', transition: 'background .25s, color .25s, transform .35s', fontSize: '18px' }}>↗</div>
              </Link>

            </motion.div>

            {/* 02 — Oblivilight */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}>
              <Link to="/projects/oblivilight" className="reveal" ref={addToRefs}
                style={{ display: 'grid', gridTemplateColumns: '70px 1fr 260px 140px 60px', gap: '24px', padding: '28px 4px', borderBottom: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', transition: 'background .3s, padding .3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.paddingLeft = '16px'; el.style.paddingRight = '16px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'var(--surface-inverse)'; a.style.color = 'var(--accent-on-inverse)'; a.style.transform = 'rotate(-45deg)'; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.paddingLeft = '4px'; el.style.paddingRight = '4px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'transparent'; a.style.color = 'inherit'; a.style.transform = 'rotate(0deg)'; } }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '.1em', paddingTop: '6px' }}>/ 02</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,30px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 10px', textTransform: 'uppercase' }}>{t('home.works.oblivilight.titlePre')}{' '}<em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .1em' }}>{t('home.works.oblivilight.titleHighlight')}</em>{' '}{t('home.works.oblivilight.titlePost')}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0, maxWidth: '56ch' }}>{t('home.works.oblivilight.desc')}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {[t('home.works.oblivilight.tag1'), t('home.works.oblivilight.tag2'), t('home.works.oblivilight.tag3')].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--text-primary)', borderRadius: '999px' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--text-primary)', background: 'var(--bone-2,var(--surface-muted))' }}>
                  <img src={oblivilightCover} alt={t('home.works.oblivilight.imgAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-.02em', display: 'block', marginBottom: '4px' }}>2025</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500, whiteSpace: 'pre-line' }}>{t('home.works.oblivilight.status')}</span>
                </div>
                <div className="work-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', border: '1px solid var(--text-primary)', borderRadius: '50%', alignSelf: 'center', transition: 'background .25s, color .25s, transform .35s', fontSize: '18px' }}>↗</div>
              </Link>

            </motion.div>

            {/* 03 — Mù */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}>
              <Link to="/projects/mu" className="reveal" ref={addToRefs}
                style={{ display: 'grid', gridTemplateColumns: '70px 1fr 260px 140px 60px', gap: '24px', padding: '28px 4px', borderBottom: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', transition: 'background .3s, padding .3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.paddingLeft = '16px'; el.style.paddingRight = '16px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'var(--surface-inverse)'; a.style.color = 'var(--accent-on-inverse)'; a.style.transform = 'rotate(-45deg)'; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.paddingLeft = '4px'; el.style.paddingRight = '4px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'transparent'; a.style.color = 'inherit'; a.style.transform = 'rotate(0deg)'; } }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '.1em', paddingTop: '6px' }}>/ 03</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,30px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 10px', textTransform: 'uppercase' }}>{t('home.works.mu.titlePre')}{' '}<em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .1em' }}>{t('home.works.mu.titleHighlight')}</em>{' '}{t('home.works.mu.titlePost')}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0, maxWidth: '56ch' }}>{t('home.works.mu.desc')}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {[t('home.awards.uxda.title'), t('home.works.mu.tag2'), t('home.works.mu.tag3')].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--text-primary)', borderRadius: '999px' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--text-primary)', background: 'var(--bone-2,var(--surface-muted))' }}>
                  <img src={muCover} alt={t('home.works.mu.imgAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-.02em', display: 'block', marginBottom: '4px' }}>2024</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{t('home.works.mu.status')}</span>
                </div>
                <div className="work-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', border: '1px solid var(--text-primary)', borderRadius: '50%', alignSelf: 'center', transition: 'background .25s, color .25s, transform .35s', fontSize: '18px' }}>↗</div>
              </Link>

            </motion.div>

            {/* 04 — Innoconnect */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}>
              <Link to="/projects/innoconnect" className="reveal" ref={addToRefs}
                style={{ display: 'grid', gridTemplateColumns: '70px 1fr 260px 140px 60px', gap: '24px', padding: '28px 4px', borderBottom: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', transition: 'background .3s, padding .3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.paddingLeft = '16px'; el.style.paddingRight = '16px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'var(--surface-inverse)'; a.style.color = 'var(--accent-on-inverse)'; a.style.transform = 'rotate(-45deg)'; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.paddingLeft = '4px'; el.style.paddingRight = '4px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'transparent'; a.style.color = 'inherit'; a.style.transform = 'rotate(0deg)'; } }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '.1em', paddingTop: '6px' }}>/ 04</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,30px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 10px', textTransform: 'uppercase' }}>{t('home.works.innoconnect.titlePre')}{' '}<em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .1em' }}>{t('home.works.innoconnect.titleHighlight')}</em>{' '}{t('home.works.innoconnect.titlePost')}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0, maxWidth: '56ch' }}>{t('home.works.innoconnect.desc')}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {[t('home.works.innoconnect.tag1'), t('home.works.innoconnect.tag2'), t('home.works.innoconnect.tag3')].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--text-primary)', borderRadius: '999px' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--text-primary)', background: 'var(--bone-2,var(--surface-muted))' }}>
                  <img src={innoconnectCover} alt={t('home.works.innoconnect.imgAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-.02em', display: 'block', marginBottom: '4px' }}>2024</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{t('home.works.innoconnect.tag3')}</span>
                </div>
                <div className="work-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', border: '1px solid var(--text-primary)', borderRadius: '50%', alignSelf: 'center', transition: 'background .25s, color .25s, transform .35s', fontSize: '18px' }}>↗</div>
              </Link>

            </motion.div>

            {/* 05 — IEEE Research */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}>
              <Link to="/projects/hci-publications" className="reveal" ref={addToRefs}
                style={{ display: 'grid', gridTemplateColumns: '70px 1fr 260px 140px 60px', gap: '24px', padding: '28px 4px', alignItems: 'start', textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', transition: 'background .3s, padding .3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface)'; el.style.paddingLeft = '16px'; el.style.paddingRight = '16px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'var(--surface-inverse)'; a.style.color = 'var(--accent-on-inverse)'; a.style.transform = 'rotate(-45deg)'; } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.paddingLeft = '4px'; el.style.paddingRight = '4px'; const a = el.querySelector('.work-arrow') as HTMLElement; if (a) { a.style.background = 'transparent'; a.style.color = 'inherit'; a.style.transform = 'rotate(0deg)'; } }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '.1em', paddingTop: '6px' }}>/ 05</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(18px,2.2vw,30px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 10px', textTransform: 'uppercase' }}>{t('home.works.publications.titlePre')}{' '}<em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .1em' }}>{t('home.works.publications.titleHighlight')}</em>{' '}{t('home.works.publications.titlePost')}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0, maxWidth: '56ch' }}>{t('home.works.publications.desc')}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {[t('home.works.publications.tag1'), t('home.works.publications.tag2'), t('home.works.publications.tag3')].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--text-primary)', borderRadius: '999px' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--text-primary)', background: 'var(--bone-2,var(--surface-muted))' }}>
                  <img src={gcceCover} alt={t('home.works.publications.imgAlt')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.05)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-.02em', display: 'block', marginBottom: '4px' }}>2024</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{t('home.works.publications.tag3')}</span>
                </div>
                <div className="work-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', border: '1px solid var(--text-primary)', borderRadius: '50%', alignSelf: 'center', transition: 'background .25s, color .25s, transform .35s', fontSize: '18px' }}>↗</div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Research / Thesis Section */}
      <section style={{ background: 'var(--ink-2)', color: 'var(--bone)', borderTop: '2px solid color-mix(in srgb, var(--bone) 25%, transparent)', borderBottom: '2px solid color-mix(in srgb, var(--bone) 25%, transparent)', padding: '96px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px,2.2vw,32px)' }}>
          {/* Section header */}
          <h2 className="section-head" style={{ marginBottom: '48px', color: 'var(--bone)', borderBottom: '1px solid rgba(238,234,224,.2)', paddingBottom: '18px' }}>
            <BookOpen size={32} color="var(--bone)" />{t('home.research.heading')}</h2>
          {/* Two-column content */}
          <div className="research-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left */}
            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(32px,4.5vw,64px)', lineHeight: 1.02, letterSpacing: '-.03em', textTransform: 'uppercase', margin: '0 0 28px', color: 'var(--bone)' }}
              >
                {[t('home.research.headline.w1'), t('home.research.headline.w2'), '/', t('home.research.headline.w3')].map((word, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } } }} style={{ display: 'inline-block', marginRight: word === '/' ? '0' : '.25em', color: word === '/' ? 'var(--acid)' : 'inherit', fontStyle: word === '/' ? 'italic' : 'normal', fontWeight: word === '/' ? 400 : 500 }}>
                    {word}
                  </motion.span>
                ))}{' '}
                <motion.em variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } } }} style={{ fontStyle: 'normal', color: 'var(--on-accent)', background: 'var(--accent)', padding: '0 .1em', display: 'inline-block' }}>{t('home.research.headline.highlight')}</motion.em>{' '}
                <motion.span variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } } }} style={{ display: 'inline-block' }}>{t('home.research.headline.tail')}</motion.span>
              </motion.h3>
              <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(238,234,224,.78)', margin: '0 0 16px', maxWidth: '52ch' }}>{t('home.research.p1a')}{' '}<strong style={{ color: 'var(--bone)', fontWeight: 500 }}>{t('home.research.p1strong')}</strong>{' '}{t('home.research.p1b')}</p>
              <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(238,234,224,.78)', margin: 0, maxWidth: '52ch' }}>{t('home.research.p2')}</p>
              {/* Stats row — count-up */}
              <div ref={statsRef} className="research-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginTop: '40px', borderTop: '1px solid rgba(238,234,224,.25)', paddingTop: '24px' }}>
                {[
                  { n: visibleStats[0].toString().padStart(2, '0'), u: t('home.research.stat1.unit'), l: t('home.research.stat1.label') },
                  { n: visibleStats[1].toString().padStart(2, '0'), u: t('home.research.stat2.unit'), l: t('home.research.stat2.label') },
                  { n: visibleStats[2].toString().padStart(2, '0'), u: t('home.research.stat3.unit'), l: t('home.research.stat3.label') },
                  { n: '06/26', u: '', l: t('home.research.stat4.label') },
                ].map(({ n, u, l }) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '36px', lineHeight: 1, letterSpacing: '-.02em', color: 'var(--bone)' }}>
                      {n}{u && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 400, color: 'rgba(238,234,224,.6)', marginLeft: '4px', letterSpacing: '.08em' }}>{u}</span>}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(238,234,224,.7)', marginTop: '8px', lineHeight: 1.5 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — 2×2 Notification Conditions Matrix */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(238,234,224,.5)', marginBottom: '4px' }}>
                <span>{t('home.research.matrix.caption1')}</span>
                <span>{t('home.research.matrix.caption2')}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '10px', flex: 1 }}>
                {/* 左上：威脅訴求 */}
                <div style={{ border: '1px solid rgba(238,234,224,.2)', background: 'rgba(238,234,224,.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', gap: '12px' }}>
                  <img src={threatAppeal} alt={t('home.research.matrix.threat.imgAlt')} loading="lazy" style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'rgba(238,234,224,.9)', letterSpacing: '-.01em', marginBottom: '2px' }}>{t('home.research.matrix.threat.labelZh')}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(238,234,224,.45)' }}>{t('home.research.matrix.threat.labelEn')}</div>
                  </div>
                </div>
                {/* 右上：共情訴求 */}
                <div style={{ border: '1px solid rgba(238,234,224,.2)', background: 'rgba(238,234,224,.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', gap: '12px' }}>
                  <img src={empathyAppeal} alt={t('home.research.matrix.empathy.imgAlt')} loading="lazy" style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'rgba(238,234,224,.9)', letterSpacing: '-.01em', marginBottom: '2px' }}>{t('home.research.matrix.empathy.labelZh')}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(238,234,224,.45)' }}>{t('home.research.matrix.empathy.labelEn')}</div>
                  </div>
                </div>
                {/* 左下：設計摩擦 */}
                <div style={{ border: '1px solid rgba(238,234,224,.2)', background: 'rgba(238,234,224,.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', gap: '12px' }}>
                  <img src={designFriction} alt={t('home.research.matrix.friction.imgAlt')} loading="lazy" style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'rgba(238,234,224,.9)', letterSpacing: '-.01em', marginBottom: '2px' }}>{t('home.research.matrix.friction.labelZh')}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(238,234,224,.45)' }}>{t('home.research.matrix.friction.labelEn')}</div>
                  </div>
                </div>
                {/* 右下：一般通知 */}
                <div style={{ border: '1px solid rgba(238,234,224,.2)', background: 'rgba(238,234,224,.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', gap: '12px' }}>
                  <img src={controlNotif} alt={t('home.research.matrix.control.imgAlt')} loading="lazy" style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', color: 'rgba(238,234,224,.9)', letterSpacing: '-.01em', marginBottom: '2px' }}>{t('home.research.matrix.control.labelZh')}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(238,234,224,.45)' }}>{t('home.research.matrix.control.labelEn')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:960px){.research-grid{grid-template-columns:1fr!important;gap:40px!important}.research-stats{grid-template-columns:1fr 1fr!important}}`}</style>
        </div>
      </section>

      {/* 4. Streamlined Awards Section (Grid Layout with Certificates) */}
      <section className="section bg-light-gray" id="awards" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-head">
            <Award size={32} color="var(--accent-text)" />{t('home.awards.heading')}</h2>
          <div className="awards-grid reveal" ref={addToRefs}>

            {/* Award 1 */}
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.tuition.title')}</h4>
                  <button onClick={() => setLightbox(tuitionCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.tuition.desc')}</p>
              </div>
            </div>

            {/* Award 2 (NEW: UXDA) */}
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.uxda.title')}</h4>
                  <button onClick={() => setLightbox(uxdaCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.uxda.desc')}</p>
              </div>
            </div>

            {/* Award 3 */}
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.timesYoung.title')}</h4>
                  <button onClick={() => setLightbox(timesYoungCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.timesYoung.desc')}</p>
              </div>
            </div>

            {/* Award 4 */}
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.gcce.title')}</h4>
                  <button onClick={() => setLightbox(ieeeGcceCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.gcce.desc')}</p>
              </div>
            </div>

            {/* Award 5 */}
            <div className="award-item-clean">
              <span className="award-year">2025</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.openhci.title')}</h4>
                  <button onClick={() => setLightbox(openhciCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.openhci.desc')}</p>
              </div>
            </div>

            {/* Award 6 */}
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.innoconnect.title')}</h4>
                  <button onClick={() => setLightbox(innoconnectCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.innoconnect.desc')}</p>
              </div>
            </div>

            {/* Award 7 */}
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.bigData.title')}</h4>
                  <button onClick={() => setLightbox(bigDataCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.bigData.desc')}</p>
              </div>
            </div>

            {/* Award 8 */}
            <div className="award-item-clean">
              <span className="award-year">2024</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h4 style={{ margin: 0, marginBottom: '6px' }}>{t('home.awards.ssim.title')}</h4>
                  <button onClick={() => setLightbox(ssimCert)} className="cert-btn" aria-label="View Certificate">
                    <FileText size={12} /> <span>{t('common.certificate')}</span>
                  </button>
                </div>
                <p>{t('home.awards.ssim.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Playground / Besides Work (Texture & Hybrid Portfolio Trend) */}
      <section className="section playground-section" id="playground">
        <div className="noise-overlay"></div>
        <div className="container relative z-10">
          <h2 className="section-head" style={{ justifyContent: 'center' }}>
            <Sparkles size={32} color="var(--accent-text)" />{t('home.playground.heading')}</h2>
          <p className="contact-sub text-center mb-8">{t('home.playground.sub')}</p>
          <div className="reveal" ref={addToRefs} style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border, rgba(26,26,24,0.09))',
              background: 'var(--surface)',
            }}>
              {/* Image area */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={carouselIndex}
                    src={playgroundItems[carouselIndex].image}
                    alt={playgroundItems[carouselIndex].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                  />
                </AnimatePresence>
                {/* Prev arrow */}
                <button
                  onClick={e => { e.stopPropagation(); setCarouselIndex(i => (i - 1 + playgroundItems.length) % playgroundItems.length); }}
                  aria-label="Previous"
                  style={{
                    position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--card-glass)', border: '1px solid var(--border)',
                    cursor: 'pointer', fontSize: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >‹</button>
                {/* Next arrow */}
                <button
                  onClick={e => { e.stopPropagation(); setCarouselIndex(i => (i + 1) % playgroundItems.length); }}
                  aria-label="Next"
                  style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--card-glass)', border: '1px solid var(--border)',
                    cursor: 'pointer', fontSize: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >›</button>
              </div>

              {/* Text area */}
              <div style={{ padding: '20px 24px 16px' }}>
                <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 6px' }}>
                  {playgroundItems[carouselIndex].title}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                  {playgroundItems[carouselIndex].desc}
                </p>
                {(() => {
                  const item = playgroundItems[carouselIndex];
                  const linkStyle: React.CSSProperties = {
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px', letterSpacing: '.1em',
                    textTransform: 'uppercase', color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid currentColor',
                    paddingBottom: '1px',
                    marginTop: '12px',
                  };
                  return item.linkType === 'external' ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.link} style={linkStyle}>
                      {item.label}
                    </Link>
                  );
                })()}
              </div>

              {/* Dot indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '12px 0 16px' }}>
                {playgroundItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: i === carouselIndex ? '20px' : '8px',
                      height: '8px', borderRadius: '999px',
                      background: i === carouselIndex ? 'var(--accent-text)' : 'color-mix(in srgb, var(--text-primary) 18%, transparent)',
                      border: 'none', cursor: 'pointer',
                      transition: 'all 0.25s ease', padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* 5. Contact Section */}
      <section className="section" id="contact" style={{ paddingTop: '60px', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head" style={{ justifyContent: 'center' }}>
            <Mail size={32} color="var(--accent-text)" />{t('home.contact.heading')}</h2>
          <p className="contact-sub">{t('home.contact.sub')}</p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span>{t('home.contact.linkedin')}</span>
            </a>
            <a className="contact-pill contact-pill-lg" href="mailto:yuu07798@gmail.com">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              <span>yuu07798@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Global & Typography ── */
        .section-head { font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--accent-text); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px; }
        .view-all-link { font-size: 15px; font-weight: 600; color: var(--accent-text); text-decoration: none; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .view-all-link:hover { border-color: var(--accent-text); }
        .bg-light-gray { background-color: rgba(0,0,0,0.02); }
        .dark .bg-light-gray { background-color: rgba(255,255,255,0.02); }

        /* ── Hero ── */
        .hero { padding: 0 0 0; }
        .hero-inner { display: flex; flex-direction: column; gap: 0; }
        .hero-main-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: clamp(32px,5vw,80px); align-items: center; min-height: 85vh; padding: 80px 0 40px; }
        .hero-text { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
        .hero-photo { display: flex; align-items: flex-end; justify-content: center; height: 100%; min-height: 480px; }
        .hero-data-sheet { width: 100%; }
        .hero-desc { margin-top: 16px; line-height: 1.75; font-size: clamp(16px,1.2vw,20px); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

        /* Availability badge */
        .avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(42,157,110,0.08);
          border: 1px solid rgba(42,157,110,0.22);
          margin-bottom: 20px;
        }
        .avail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-text);
          flex-shrink: 0;
          animation: availPing 2s ease-in-out infinite;
        }
        .avail-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--accent-text);
          letter-spacing: 0.02em;
        }
        @keyframes ping { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.4)} }
        @keyframes availPing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(42,157,110,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(42,157,110,0); }
        }

        /* Name */
        .name {
          font-size: clamp(72px, 12vw, 108px) !important;
          font-weight: 700 !important;
          letter-spacing: -0.04em !important;
          line-height: 0.92 !important;
          color: var(--text-primary);
        }

        /* h2 head */
        .head {
          font-size: 22px !important;
          font-weight: 600 !important;
          color: var(--text-primary) !important;
          margin-top: 16px !important;
        }

        /* h3 sub-head */
        .sub-head {
          font-size: 15px !important;
          font-weight: 400 !important;
          color: var(--text-secondary) !important;
          margin-top: 6px !important;
          letter-spacing: 0.01em !important;
        }

        /* Buttons */
        .hero-buttons { display: flex; gap: 16px; margin-top: 24px; justify-content: center; flex-wrap: wrap; }
        .btn-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 30px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        .btn--primary {
          background: var(--accent);
          color: var(--on-accent);
          border: none;
        }
        .btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--acid) 45%, transparent);
        }
        .btn--secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1.5px solid color-mix(in srgb, var(--text-primary) 18%, transparent);
        }
        .btn--secondary:hover {
          background: rgba(26,26,24,0.04);
          border-color: rgba(26,26,24,0.3);
        }

        /* Venn */
        .venn-container { width: 100%; max-width: 350px; margin: 0 auto; }
        .venn circle { stroke: none; mix-blend-mode: multiply; filter: url(#softGlass); }
        .venn .c1 { fill: color-mix(in srgb, var(--acid) 35%, transparent); }
        .venn .c2 { fill: color-mix(in srgb, var(--acid) 35%, transparent); }
        .venn .c3 { fill: color-mix(in srgb, var(--acid) 35%, transparent); }

        @media (max-width: 768px) {
          .hero-main-grid { grid-template-columns: 1fr !important; min-height: auto !important; padding: 60px 0 24px !important; }
          .hero-photo { min-height: auto !important; }
          .hero-photo img { max-width: 260px !important; margin: 0 auto; display: block; }
          .hero-data-sheet > div { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Interactive Text */
        .interactive-name .char { display: inline-block; transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease; cursor: default; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        .interactive-name:hover .char:hover { transform: translateY(-8px) scale(1.1); color: var(--accent-text); }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Selected Works Layout ── */
        .selected-works-layout { display: flex; flex-direction: column; gap: 24px; }
        .works-row-full { width: 100%; }
        .works-row-half { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        /* ── Featured Card (Sleep Guardian) ── */
        .featured-card {
          display: grid;
          grid-template-columns: 2fr 3fr;
          min-height: 280px;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid color-mix(in srgb, var(--acid-ink) 25%, transparent);
          background: var(--card-glass);
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(59,91,219,0.12);
          border-color: color-mix(in srgb, var(--accent-text) 40%, transparent);
        }
        .featured-img {
          overflow: hidden;
          background: var(--surface-muted);
        }
        .featured-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .featured-card:hover .featured-img img { transform: scale(1.04); }
        .featured-info {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .featured-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .ftag {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.02em;
        }
        .ftag--blue {
          background: color-mix(in srgb, var(--acid) 25%, var(--background));
          color: var(--accent-text);
        }
        .ftag--solid {
          background: var(--accent);
          color: var(--on-accent);
          font-size: 11px;
        }
        .featured-title {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-primary);
          margin: 0 0 10px;
          transition: color 0.3s ease;
        }
        .featured-card:hover .featured-title { color: var(--accent-text); }
        .featured-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-tertiary);
          margin: 0;
        }
        .featured-desc strong { color: var(--text-primary); }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-text);
        }
        .featured-arrow { transition: transform 0.3s ease; }
        .featured-card:hover .featured-arrow { transform: translateX(4px); }

        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr; }
          .featured-img { aspect-ratio: 16/9; height: auto; }
          .featured-info { padding: 24px; }
          .featured-title { font-size: 20px; }
          .works-row-half { grid-template-columns: 1fr; }
        }

        /* ── Vertical Cards (Oblivilight, Mù, Innoconnect, IEEE) ── */
        .vcard {
          display: flex;
          flex-direction: column;
          gap: 0;
          text-decoration: none;
          color: inherit;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--card-glass);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .vcard:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.09);
          border-color: color-mix(in srgb, var(--text-primary) 18%, transparent);
        }
        .vcard-thumb {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: var(--surface-muted);
        }
        .vcard-thumb--wide { aspect-ratio: 16/9; }
        .vcard-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .vcard:hover .vcard-thumb img { transform: scale(1.05); }

        .vcard-tag {
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }
        .vcard-tag--green { background: var(--acid); color: var(--acid-ink); }
        .vcard-tag--blue { background: rgba(255,255,255,0.92); color: var(--acid-ink); border: 1px solid color-mix(in srgb, var(--acid-ink) 25%, transparent); }
        .vcard-tag--gold { background: var(--acid); color: var(--acid-ink); }

        .vcard-tags-row {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          gap: 6px;
          flex-wrap: nowrap;
          z-index: 2;
          align-items: center;
        }

        .vcard-info {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }
        .vcard-info h3 {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
          transition: color 0.3s ease;
        }
        .vcard--sm .vcard-info h3 { font-size: 17px; font-weight: 600; }
        .vcard:hover h3 { color: var(--accent-text); }
        .vcard-info p {
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-tertiary);
          margin: 0;
          flex-grow: 1;
        }
        .vcard--sm .vcard-info p { font-size: 13px; line-height: 1.6; }
        .vcard-info strong { color: var(--text-primary); }

        /* ── Shared explore-btn ── */
        .explore-btn { margin-top: 12px; font-size: 14px; font-weight: 600; color: var(--accent-text); display: flex; align-items: center; gap: 6px; }
        .explore-btn .arrow { transition: transform 0.3s ease; }
        .vcard:hover .explore-btn .arrow { transform: translateX(4px); }

        /* ── Awards Grid ── */
        .awards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .award-item-clean { display: flex; gap: 20px; padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .dark .award-item-clean { border-color: rgba(255,255,255,0.05); }
        .award-item-clean:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
        .award-year { font-family: monospace; font-size: 18px; font-weight: 700; color: var(--accent-text); opacity: 0.8; padding-top: 2px; }
        .award-item-clean h4 { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
        .award-item-clean p { font-size: 14px; color: var(--text-tertiary); line-height: 1.5; margin: 0; }
        @media (max-width: 768px) { .awards-grid { grid-template-columns: 1fr; } }
        
        /* ── Certificate Button CSS ── */
        .cert-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 100px;
          background: rgba(0,0,0,0.04);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cert-btn:hover {
          background: rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.15);
          transform: translateY(-1px);
        }
        .dark .cert-btn {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.1);
          color: var(--text);
        }
        .dark .cert-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        /* ── Playground ── */
        .playground-section { position: relative; padding: 80px 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.03)); overflow: hidden; }
        .dark .playground-section { background: linear-gradient(180deg, transparent, rgba(255,255,255,0.03)); }
        .noise-overlay { position: absolute; inset: 0; opacity: 0.4; pointer-events: none; z-index: 0; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
        .playground-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
        .play-card { position: relative; aspect-ratio: 1; border-radius: 24px; overflow: hidden; }
        .play-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; filter: grayscale(20%); }
        .play-card:hover img { transform: scale(1.08); filter: grayscale(0%); }
        .play-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 24px; opacity: 0; transition: opacity 0.3s ease; }
        .play-card:hover .play-overlay { opacity: 1; }
        .play-overlay span { color: white; font-weight: 600; font-size: 16px; transform: translateY(10px); transition: transform 0.3s ease; }
        .play-card:hover .play-overlay span { transform: translateY(0); }
        @media (max-width: 768px) { .playground-grid { grid-template-columns: 1fr; } .play-card { aspect-ratio: 16/9; } }

        /* ── Contact ── */
        .contact-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .contact-sub { font-size: 16px; color: var(--text-tertiary); margin-bottom: 32px; }
        .contact-pills { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .contact-pill { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 28px; background: var(--surface); border: 1px solid var(--border); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
        .dark .contact-pill { border-color: rgba(255,255,255,0.1); }
        .contact-pill:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); border-color: var(--accent-text); color: var(--accent-text); }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .avail-dot { animation: none !important; }
          .interactive-name .char { animation: none !important; transition: none !important; }
          .featured-card, .vcard, .award-item-clean, .play-card img, .featured-img img, .vcard-thumb img { transition: none !important; transform: none !important; }
          .featured-card:hover, .vcard:hover, .award-item-clean:hover { transform: none !important; }
        }
      `}</style>

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

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.88)',
            zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: '24px',
          }}
        >
          <img
            src={lightbox}
            alt={t('common.enlargedView')}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw', maxHeight: '88vh',
              objectFit: 'contain', borderRadius: '12px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: 'fixed', top: '24px', right: '24px',
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', fontSize: '20px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >✕</button>
        </div>
      )}
    </Layout>
  );
}