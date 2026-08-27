import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Layout from '../components/Layout';
import TypeIn from '../components/TypeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Briefcase, Mail } from 'lucide-react';
import { Separator } from '../components/ui/separator';

import sleepGuardianCover from '../assets/images/home/sleep-guardian-cover.webp';
import oblivilightCover from '../assets/images/home/Oblivilight-cover.webp';
import muCover from '../assets/images/home/mu-cover.webp';
import innoconnectCover from '../assets/images/home/innoconnect-cover.webp';
import gcceCover from '../assets/images/home/gcce-cover.webp';

import logoSsim from '../assets/images/awards/ssim.webp';
import logoOpenhci from '../assets/images/awards/openhci.webp';
import logoUxda from '../assets/images/awards/uxda.webp';
import logoGcce from '../assets/images/awards/ieee-gcce.webp';
import logoTimes from '../assets/images/awards/times-awards.webp';
import logoInnoconnect from '../assets/images/awards/innoconnect_logo.webp';

// 有 logo 的六項。大數據行銷競賽與傑出研究獎沒有可用 logo，靠 view-all 連結涵蓋。
const AWARD_LOGOS = [
  { src: logoSsim, k: 'ssim' },
  { src: logoOpenhci, k: 'openhci' },
  { src: logoUxda, k: 'uxda' },
  { src: logoGcce, k: 'gcce' },
  { src: logoTimes, k: 'timesYoung' },
  { src: logoInnoconnect, k: 'innoconnect' },
];

// 首頁只放五件作品。第一件是碩論，用全寬大卡；其餘四件 2×2。
// 每張卡的說明一律用 caption（帶結果與數字），不用 desc（描述流程）。
const getWorks = (t: (key: string) => string) => [
  { slug: 'sleep-guardian', k: 'sleepGuardian', year: '2026', kind: 'tag1', cover: sleepGuardianCover },
  { slug: 'oblivilight', k: 'oblivilight', year: '2025', kind: 'tag2', cover: oblivilightCover },
  { slug: 'mu', k: 'mu', year: '2025', kind: 'tag2', cover: muCover },
  { slug: 'innoconnect', k: 'innoconnect', year: '2024', kind: 'tag1', cover: innoconnectCover },
  { slug: 'hci-publications', k: 'publications', year: '2025', kind: 'tag2', cover: gcceCover },
].map(w => ({
  ...w,
  kindLabel: t(`home.works.${w.k}.${w.kind}`),
  titlePre: t(`home.works.${w.k}.titlePre`),
  titleHighlight: t(`home.works.${w.k}.titleHighlight`),
  titlePost: t(`home.works.${w.k}.titlePost`),
  caption: t(`home.works.${w.k}.caption`),
  imgAlt: t(`home.works.${w.k}.imgAlt`),
  exploreLabel: t('home.works.explore'),
}));

type Work = ReturnType<typeof getWorks>[number];

function WorkCard({ work, feature, index }: { work: Work; feature?: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link className={`work-card${feature ? ' work-card--feature' : ''}`} to={`/projects/${work.slug}`}>
        <div className="work-cover">
          <img src={work.cover} alt={work.imgAlt} loading={feature ? 'eager' : 'lazy'} />
        </div>
        <div className="work-body">
          <div className="work-meta">{work.year} · {work.kindLabel}</div>
          <h3 className="work-title">
            {work.titlePre}{' '}
            <em>{work.titleHighlight}</em>{' '}
            {work.titlePost}
          </h3>
          <p className="work-caption">{work.caption}</p>
          {/* 常駐的可點擊提示。整張卡本身就是 <a>，所以這裡只能是 span，
              不能再包一層連結，否則是不合法的巢狀連結。 */}
          <span className="work-cta">
            {work.exploreLabel}
            <span className="work-cta__arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const { t, locale } = useLanguage();
  // Graduation is Aug 2026, so the badge states a start date until then and
  // switches to an open-ended one after. Nothing to update by hand either way.
  const availableFromAug2026 = Date.now() < new Date('2026-08-01T00:00:00').getTime();

  useRevealOnScroll();

  const [showTop, setShowTop] = useState(false);
  const works = getWorks(t);
  const [feature, ...rest] = works;

  // Hero 隨捲動退場：字組緩緩上移並淡出，讓下一區推上來。
  // hero 固定在頁面最頂端，所以直接吃 window 的 scrollY，
  // 不用 useScroll 的 target 量測（那個版本在這個版面量不到進度）。
  // 級距對著 hero 約 500px 的高度抓，淡出比位移早收尾。
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 520], [0, -72]);
  const heroFade = useTransform(scrollY, [40, 430], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* 1. Hero — 文字單欄，照片留在 About。
          只留一句主張：subtitle 與長版 desc 的 i18n key 都還在，改回來只要換一行。 */}
      <section className="hero" id="about">
        {/* acid 單色呼吸光暈。純 radial-gradient，不經過 filter: blur，
            只跑 transform 與 opacity，不會拖累捲動。 */}
        <div className="hero-glow" aria-hidden="true">
          <span className="hero-glow__a" />
          <span className="hero-glow__b" />
        </div>

        <motion.div
          className="container hero-inner"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroFade }}
        >
          <div className="avail-badge">
            <span className="avail-dot"></span>
            <span className="avail-label">{t(availableFromAug2026 ? 'home.hero.badgeBefore' : 'home.hero.badgeAfter')}</span>
          </div>
          <h1 className="name interactive-name">
            {t('home.hero.name').split('').map((char, index) => (
              <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>
          <h2 className="head">{t('home.hero.title')}</h2>
          <p className="hero-lede">{t('home.hero.lede')}</p>
          <p className="hero-proof">{t('home.hero.proof')}</p>
          {/* 學經歷晶片：首屏唯一的「憑證」區塊，依序浮上來。
              內容全部對得上 Resume，不放任何無法查證的形容詞。 */}
          <ul className="hero-creds">
            {['chip1', 'chip2', 'chip3', 'chip4', 'chip5'].map((k, i) => (
              <li key={k} style={{ animationDelay: `${0.62 + i * 0.07}s` }}>
                {t(`home.hero.${k}`)}
              </li>
            ))}
          </ul>
          <div className="hero-buttons">
            {/* 舊的第二顆是 href="#selected-works"。全站走 HashRouter，網址列的 hash
                已經被路由佔用，錨點連結會被當成路由 /selected-works 而導不到任何地方。
                Selected Works 本來就在首屏正下方，不需要按鈕帶路，改指向履歷。 */}
            <Link className="btn-pill btn--primary" to="/about">{t('home.hero.aboutBtn')}{' '}<span className="dot">→</span></Link>
            <Link className="btn-pill btn--secondary" to="/resume">{t('home.hero.resumeBtn')}{' '}<span className="dot">→</span></Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Selected Works */}
      <section className="section" id="selected-works" style={{ paddingTop: '24px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-flex">
            <h2 className="section-head">
              <Briefcase size={32} color="var(--accent-text)" />{t('home.works.heading')}
            </h2>
            <Link to="/projects" className="view-all-link">{t('home.works.viewAll')}</Link>
          </div>

          <WorkCard work={feature} feature index={0} />

          <div className="work-grid">
            {rest.map((w, i) => <WorkCard key={w.slug} work={w} index={i + 1} />)}
          </div>
        </div>
      </section>

      {/* 2.5 How I work — 窄帶入口。刻意不進 Selected Works：
          那區是「我為別人解決了什麼問題」，這條是「我怎麼工作」。
          指向的兩頁同時對應 JD 高頻的 Design System 與 AI 工作流兩項。 */}
      <section className="section" id="how-i-work" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="container">
          <div className="how-i-work-band reveal">
            <div className="hiw-copy">
              <p className="text-meta-style hiw-label">{t('home.howIWork.label')}</p>
              <h2 className="hiw-title">
                <TypeIn
                  key={locale}
                  trigger="scroll"
                  delayMs={800}
                  charMs={locale === 'zh' ? 80 : 40}
                  segments={[{ text: t('home.howIWork.title') }]}
                />
              </h2>
              <p className="hiw-desc">{t('home.howIWork.desc')}</p>
            </div>
            <div className="hiw-links">
              <Link to="/design-system" className="hiw-link">{t('home.howIWork.ds')}</Link>
              <Link to="/how-i-built-this" className="hiw-link">{t('home.howIWork.built')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Awards — 一行摘要，完整清單在 Resume */}
      <section className="section" id="awards" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="container">
          <div className="awards-strip reveal">
            {/* logo 跑馬燈：軌道複製一份接續播放，滑鼠移入暫停 */}
            <div className="awards-marquee">
              <div className="awards-track">
                {[0, 1].map(dup => (
                  <div className="awards-set" key={dup} aria-hidden={dup === 1 || undefined}>
                    {AWARD_LOGOS.map(logo => (
                      <span className="awards-logo" key={`${dup}-${logo.k}`}>
                        <img src={logo.src} alt={dup === 0 ? t(`home.awards.${logo.k}.title`) : ''} loading="lazy" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Link to="/resume#awards" className="awards-link">{t('home.awards.viewAll')}</Link>
          </div>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* 4. Contact */}
      <section className="section" id="contact" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head reveal" style={{ justifyContent: 'center' }}>
            <Mail size={32} color="var(--accent-text)" />{t('home.contact.heading')}
          </h2>
          <p className="contact-sub">{t('home.contact.sub')}</p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span>{t('home.contact.linkedin')}</span>
            </a>
            <a className="contact-pill" href="mailto:yuu07798@gmail.com">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              <span>yuu07798@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Section chrome ── */
        .section-head { font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--text-primary); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; flex-wrap: wrap; gap: 16px; }
        /* The heading carries its own bottom margin for standalone use; inside the
           header row it would lift the title 32px above the link. */
        .section-header-flex .section-head { margin-bottom: 0; }
        .view-all-link { font-size: 15px; font-weight: 600; color: var(--accent-text); text-decoration: none; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .view-all-link:hover { border-color: var(--accent-text); }

        /* ── Hero ── */
        .hero { padding: 0; position: relative; isolation: isolate; }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* 呼吸光暈：兩顆 acid 色團在 hero 後方慢速漂移。
           容器左右貼齊視窗，裁切線就落在視窗邊緣所以看不出來；
           上下用遮罩淡出，避免在頁面中段出現一條硬邊。 */
        .hero-glow {
          position: absolute;
          inset: -22% 0 -16% 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 16%, #000 62%, transparent 100%);
                  mask-image: linear-gradient(to bottom, transparent 0%, #000 16%, #000 62%, transparent 100%);
        }
        .hero-glow span {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: radial-gradient(
            closest-side,
            color-mix(in srgb, var(--acid) var(--hero-glow-strength), transparent),
            transparent
          );
          will-change: transform, opacity;
        }
        .hero-glow__a {
          width: 54vw; height: 54vw; left: -12vw; top: -16vw;
          animation: heroGlowA 30s ease-in-out infinite;
        }
        .hero-glow__b {
          width: 42vw; height: 42vw; right: -8vw; top: 2vw;
          animation: heroGlowB 24s ease-in-out infinite;
        }
        @keyframes heroGlowA {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .8; }
          50%      { transform: translate3d(5vw, 4vh, 0) scale(1.14); opacity: 1; }
        }
        @keyframes heroGlowB {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1.08); opacity: 1; }
          50%      { transform: translate3d(-4vw, -3vh, 0) scale(.92); opacity: .75; }
        }

        /* 進場：姓名有自己的逐字動畫，其餘區塊依序浮上來。
           晶片是逐顆進場，delay 由 JSX 的 inline style 帶。 */
        .hero-inner > :not(.name), .hero-creds > li {
          animation: heroRise .75s cubic-bezier(.2,.8,.2,1) backwards;
        }
        .hero-inner > .avail-badge { animation-delay: .04s; }
        .hero-inner > .head { animation-delay: .36s; }
        .hero-inner > .hero-lede { animation-delay: .44s; }
        .hero-inner > .hero-proof { animation-delay: .52s; }
        /* 容器本身不再淡入，交給裡面的晶片各自進場 */
        .hero-inner > .hero-creds { animation: none; }
        .hero-inner > .hero-buttons { animation-delay: .92s; }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }
        /* .container 也是 (0,1,0) 且排在後面，會把 padding 歸零；用 .hero 前綴提高權重。
           上方留白要蓋過 fixed 導覽列的高度，否則徽章會貼在導覽列下緣。 */
        .hero .hero-inner {
          padding-top: clamp(32px, 4vw, 56px);
          padding-bottom: clamp(48px, 6vw, 80px);
        }

        /* 桌機雙欄：左欄身分與主張、右欄佐證與憑證。
           兩欄各自貼齊 .container 的左右邊界，所以換行點仍然落在頁面邊界上，
           但每一欄的行寬都回到易讀範圍（右欄約 60 字元）。
           佐證段 align-self:end 讓它的底線對齊職稱行，視覺上兩欄才咬得住。 */
        @media (min-width: 900px) {
          .hero-inner {
            display: grid;
            grid-template-columns: 1.25fr 1fr;
            column-gap: clamp(40px, 5vw, 72px);
          }
          /* grid item 預設 stretch，徽章會被拉滿整欄，得改回 shrink-to-fit */
          .hero-inner > .avail-badge  { grid-column: 1; grid-row: 1; justify-self: start; }
          .hero-inner > .name         { grid-column: 1; grid-row: 2; }
          .hero-inner > .head         { grid-column: 1; grid-row: 3; }
          .hero-inner > .hero-lede    { grid-column: 1; grid-row: 4; }
          .hero-inner > .hero-buttons { grid-column: 1; grid-row: 5; }
          .hero-inner > .hero-proof   { grid-column: 2; grid-row: 1 / 4; align-self: end; margin-top: 0; }
          .hero-inner > .hero-creds   { grid-column: 2; grid-row: 4 / 6; align-self: start; }
        }
        /* 主張句：首屏字級第二大，用 primary 色，讓它是讀完姓名後的下一個落點。
           刻意不設 max-width，換行點交給 .container 的 1200px 邊界，
           跟 Selected Works、How I work 對齊在同一條線上。 */
        .hero-lede {
          margin-top: 16px;
          line-height: 1.45;
          font-size: clamp(19px, 1.8vw, 26px);
          font-weight: 500;
          letter-spacing: -.01em;
          color: var(--text-primary);
        }
        /* 佐證段：帶數字與學歷，字級退回內文，同樣切齊容器邊界 */
        .hero-proof {
          margin-top: 14px;
          line-height: 1.7;
          font-size: clamp(15px, 1.1vw, 16.5px);
          color: var(--text-secondary);
        }

        /* 學經歷晶片 */
        .hero-creds {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }
        .hero-creds li {
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: .04em;
          line-height: 1.2;
          padding: 7px 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--surface);
          color: var(--text-secondary);
          white-space: nowrap;
        }
        /* 第一顆是學歷，用 acid 左緣標記出來 */
        .hero-creds li:first-child {
          border-left: 3px solid var(--accent);
          color: var(--text-primary);
        }
        @media (max-width: 560px) {
          .hero-creds li { white-space: normal; }
        }

        .avail-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; border-radius: 999px;
          background: color-mix(in srgb, var(--accent) 22%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
          margin-bottom: 20px;
        }
        .avail-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent-text); flex-shrink: 0;
          animation: availPing 2s ease-in-out infinite;
        }
        .avail-label { font-size: 12px; font-weight: 500; color: var(--accent-text); letter-spacing: 0.02em; }
        @keyframes availPing {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent-text) 40%, transparent); }
          50% { box-shadow: 0 0 0 6px transparent; }
        }

        .name {
          font-size: clamp(64px, 11vw, 104px) !important;
          font-weight: 700 !important;
          letter-spacing: -0.04em !important;
          line-height: 0.92 !important;
          color: var(--text-primary);
        }
        /* 職稱行退成次要資訊，主張句才是首屏第二落點 */
        .head { font-size: clamp(15px, 1.2vw, 17px) !important; font-weight: 500 !important; color: var(--text-secondary) !important; margin-top: 14px !important; letter-spacing: .01em !important; }

        .interactive-name .char { display: inline-block; transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease; cursor: default; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        .interactive-name:hover .char:hover { transform: translateY(-8px) scale(1.1); color: var(--accent-text); }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .hero-buttons { display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
        .btn-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 30px; border-radius: 999px;
          text-decoration: none; font-weight: 600; font-size: 15px;
          transition: all 0.3s ease;
        }
        .btn--primary { background: var(--accent); color: var(--on-accent); border: none; }
        .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px color-mix(in srgb, var(--acid) 45%, transparent); }
        .btn--secondary { background: transparent; color: var(--text-primary); border: 1.5px solid color-mix(in srgb, var(--text-primary) 18%, transparent); }
        .btn--secondary:hover { background: color-mix(in srgb, var(--text-primary) 5%, transparent); border-color: color-mix(in srgb, var(--text-primary) 32%, transparent); }

        /* ── Work cards ── */
        .work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3vw, 40px);
          margin-top: clamp(24px, 3vw, 40px);
        }
        .work-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
          height: 100%;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
        }
        .work-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 44px color-mix(in srgb, var(--text-primary) 12%, transparent);
          border-color: var(--border-strong);
        }
        .work-cover { overflow: hidden; background: var(--surface-muted); aspect-ratio: 16 / 10; }
        .work-cover img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }
        .work-card:hover .work-cover img { transform: scale(1.04); }

        .work-body { padding: clamp(20px, 2.2vw, 28px) clamp(22px, 2.4vw, 32px) clamp(24px, 2.6vw, 32px); }
        .work-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 12px;
        }
        .work-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(19px, 1.7vw, 24px);
          line-height: 1.25;
          letter-spacing: -.02em;
          margin: 0 0 12px;
          color: var(--text-primary);
        }
        .work-title em {
          font-style: normal;
          background: var(--accent);
          color: var(--on-accent);
          padding: 0 .12em;
        }
        .work-caption {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
          max-width: 62ch;
        }

        /* 常駐的「可點擊」提示。原本只有 hover 放大當線索，
           觸控裝置上完全沒有 hover，等於沒有提示。 */
        .work-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 18px;
          /* feature 卡的 .work-body 是 column flex，預設 stretch 會把底線拉滿整欄 */
          align-self: flex-start;
          width: fit-content;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: .09em;
          text-transform: uppercase;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-strong);
          padding-bottom: 3px;
          transition: color .25s ease, border-color .25s ease;
        }
        .work-cta__arrow {
          display: inline-block;
          transition: transform .25s cubic-bezier(.2, .8, .2, 1);
        }
        .work-card:hover .work-cta,
        .work-card:focus-visible .work-cta {
          color: var(--accent-text);
          border-color: var(--accent-text);
        }
        .work-card:hover .work-cta__arrow,
        .work-card:focus-visible .work-cta__arrow { transform: translateX(5px); }

        /* Feature card: cover left, copy right */
        .work-card--feature { display: grid; grid-template-columns: 1.15fr 1fr; align-items: stretch; }
        .work-card--feature .work-cover { aspect-ratio: auto; height: 100%; min-height: 340px; }
        .work-card--feature .work-body { display: flex; flex-direction: column; justify-content: center; padding: clamp(28px, 3.2vw, 48px); }
        .work-card--feature .work-title { font-size: clamp(24px, 2.6vw, 36px); }
        .work-card--feature .work-caption { font-size: clamp(15px, 1.1vw, 16.5px); }

        @media (max-width: 900px) {
          .work-card--feature { grid-template-columns: 1fr; }
          .work-card--feature .work-cover { aspect-ratio: 16 / 10; min-height: 0; }
          .work-grid { grid-template-columns: 1fr; }
        }

        /* ── Awards strip ── */
        .awards-strip {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }
        /* logo 一律放在固定的淺色晶片上，這樣深色 logo 在暗色模式也讀得到，
           不必為每個檔案個別調 filter。 */
        .awards-marquee {
          flex: 1 1 520px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .awards-track { display: flex; width: max-content; animation: awards-scroll 34s linear infinite; }
        .awards-marquee:hover .awards-track { animation-play-state: paused; }
        .awards-set { display: flex; align-items: center; gap: 14px; padding-right: 14px; }
        /* How I work 窄帶 */
        .how-i-work-band {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 28px;
          padding: 32px clamp(20px, 3vw, 40px);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius-lg);
          background: var(--surface);
        }
        .hiw-copy { flex: 1 1 420px; min-width: 0; }
        .hiw-label { color: var(--text-tertiary); margin: 0 0 10px; }
        .hiw-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(20px, 2.4vw, 28px); line-height: 1.25;
          letter-spacing: -.01em; margin: 0 0 8px; color: var(--text-primary);
        }
        .hiw-desc {
          font-size: 15px; line-height: 1.7; margin: 0;
          color: var(--text-secondary); max-width: 62ch;
        }
        .hiw-links { display: flex; flex-wrap: wrap; gap: 12px; flex-shrink: 0; }
        .hiw-link {
          font-family: var(--font-mono); font-size: 12px;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 11px 18px; text-decoration: none;
          color: var(--text-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-pill);
          transition: background .18s, color .18s;
        }
        .hiw-link:hover { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }

        @media (max-width: 640px) {
          .how-i-work-band { padding: 26px 20px; }
          .hiw-links { width: 100%; }
          .hiw-link { flex: 1 1 auto; text-align: center; }
        }

        .awards-logo {
          display: inline-flex; align-items: center; justify-content: center;
          height: 62px; width: 128px; flex-shrink: 0;
          padding: 10px 14px; border-radius: var(--radius-md);
          background: var(--bone-3, #F6F2E7);
          border: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
        }
        .awards-logo img { max-height: 100%; max-width: 100%; object-fit: contain; display: block; }
        @keyframes awards-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .awards-link {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 2px;
          white-space: nowrap;
        }
        .awards-link:hover { color: var(--accent-text); }

        /* ── Contact ── */
        .contact-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .contact-sub { font-size: 16px; color: var(--text-secondary); margin-bottom: 32px; }
        .contact-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .contact-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          padding: 12px 28px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--text-primary); text-decoration: none; font-weight: 500;
          transition: all 0.3s ease;
        }
        .contact-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px color-mix(in srgb, var(--text-primary) 10%, transparent);
          border-color: var(--accent-text);
          color: var(--accent-text);
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .awards-track { animation: none !important; }
          .awards-marquee { overflow-x: auto; }
          .avail-dot { animation: none !important; }
          .interactive-name .char { animation: none !important; transition: none !important; }
          /* 光暈留著當靜態背景，只停掉漂移；進場位移一併取消。
             捲動連動的位移由 useReducedMotion 在 JS 端跳過。 */
          .hero-glow span { animation: none !important; }
          .hero-inner > :not(.name), .hero-creds > li { animation: none !important; }
          .work-card, .work-cover img, .contact-pill, .btn-pill, .work-cta__arrow { transition: none !important; }
          .work-card:hover .work-cta__arrow { transform: none !important; }
          .work-card:hover, .contact-pill:hover, .btn--primary:hover { transform: none !important; }
          .work-card:hover .work-cover img { transform: none !important; }
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
    </Layout>
  );
}
