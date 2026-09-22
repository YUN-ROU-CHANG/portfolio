import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { createLayout } from 'animejs';
import Layout from '../components/Layout';
import TypeIn from '../components/TypeIn';
import CjkText from '../components/CjkText';
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
// 卡片資訊層級：封面圖 → 專案名 → 三顆 tag。說明（caption）在桌機收進 hover
// 遮罩裡，觸控裝置沒有 hover，改成常駐顯示在標題下方（CSS 段落有說明）。
// titlePre / titleHighlight / titlePost 三個 key 目前休眠，改回整句標題只要換這裡。
const getWorks = (t: (key: string) => string) => [
  { slug: 'sleep-guardian', k: 'sleepGuardian', year: '2026', cover: sleepGuardianCover },
  { slug: 'oblivilight', k: 'oblivilight', year: '2025', cover: oblivilightCover },
  { slug: 'mu', k: 'mu', year: '2025', cover: muCover },
  { slug: 'innoconnect', k: 'innoconnect', year: '2024', cover: innoconnectCover },
  { slug: 'hci-publications', k: 'publications', year: '2025', cover: gcceCover },
].map(w => ({
  ...w,
  name: t(`home.works.${w.k}.name`),
  tags: ['tag1', 'tag2', 'tag3'].map(tag => t(`home.works.${w.k}.${tag}`)).filter(Boolean),
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
      <Link
        className={`work-card${feature ? ' work-card--feature' : ''}`}
        to={`/projects/${work.slug}`}
        data-cursor-label={work.exploreLabel}
      >
        <div className="work-cover">
          <img src={work.cover} alt={work.imgAlt} loading={feature ? 'eager' : 'lazy'} />
          {/* 桌機 hover／focus 時淡入的說明遮罩。整段文字在 .work-body 裡還有一份
              給輔助技術讀，所以這層一律 aria-hidden，避免同一段被唸兩次。 */}
          <div className="work-overlay" aria-hidden="true">
            <p className="work-overlay__text"><CjkText>{work.caption}</CjkText></p>
            <span className="work-cta">
              {work.exploreLabel}
              <span className="work-cta__arrow">→</span>
            </span>
          </div>
        </div>
        <div className="work-body">
          <div className="work-meta">{work.year}</div>
          <h3 className="work-title"><CjkText>{work.name}</CjkText></h3>
          {/* 桌機視覺上收起來（仍留在無障礙樹），觸控裝置常駐顯示 */}
          <p className="work-caption"><CjkText>{work.caption}</CjkText></p>
          <ul className="work-tags">
            {work.tags.map(tag => <li key={tag}><CjkText>{tag}</CjkText></li>)}
          </ul>
          {/* 觸控裝置看不到遮罩，需要一個常駐的可點擊提示。整張卡本身就是 <a>，
              所以這裡只能是 span，不能再包一層連結。 */}
          <span className="work-cta work-cta--inline">
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

  // 獎項 modal。anime.js 的 createLayout 量測「更新前」與「更新後」兩個版面，
  // 再把差值補成動畫，所以被點的那張卡要複製一份進 <dialog>，原本那張暫時隱藏。
  // dialog 直接掛在 body，不進 React 樹，避免 React 與 anime 互搶同一批節點。
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const layoutRef = useRef<ReturnType<typeof createLayout> | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const awardDuration = reduceMotion ? 0 : 500;

  useEffect(() => {
    const dialog = document.createElement('dialog');
    dialog.id = 'award-dialog';
    document.body.appendChild(dialog);
    const layout = createLayout(dialog, {
      children: ['.award-card', '.award-logo', '.award-text', '.award-title', '.award-desc'],
    });
    dialogRef.current = dialog;
    layoutRef.current = layout;

    const close = () => {
      const opener = openerRef.current;
      layout.update(() => {
        dialog.close();
        opener?.classList.remove('is-open');
      }, { duration: awardDuration });
      // 焦點送回原本那顆按鈕，鍵盤操作才不會掉到頁首
      opener?.focus();
      openerRef.current = null;
    };

    // Esc：先擋掉瀏覽器預設的瞬間關閉，改走同一套收合動畫
    const onCancel = (e: Event) => { e.preventDefault(); close(); };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target === dialog || target.closest('.award-dialog__close')) close();
    };
    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('click', onClick);

    return () => {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('click', onClick);
      layout.revert();
      dialog.remove();
      dialogRef.current = null;
      layoutRef.current = null;
    };
  }, [awardDuration]);

  const openAward = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const dialog = dialogRef.current;
    const layout = layoutRef.current;
    const item = e.currentTarget;
    const card = item.querySelector('.award-card');
    if (!dialog || !layout || !card) return;

    openerRef.current = item;
    dialog.setAttribute('aria-label', item.getAttribute('aria-label') ?? '');
    dialog.innerHTML = '';
    dialog.appendChild(card.cloneNode(true));

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'award-dialog__close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '×';
    dialog.appendChild(closeBtn);

    layout.update(() => {
      dialog.showModal();
      item.classList.add('is-open');
    }, { duration: awardDuration });
  }, [awardDuration]);

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
            <span className="avail-label"><CjkText>{t('home.hero.badgeAfter')}</CjkText></span>
          </div>
          <h1 className="name interactive-name">
            {t('home.hero.name').split('').map((char, index) => (
              <span key={index} className="char" style={{ animationDelay: `${index * 0.05}s` }}>
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>
          <h2 className="head"><CjkText>{t('home.hero.title')}</CjkText></h2>
          <p className="hero-lede"><CjkText>{t('home.hero.lede')}</CjkText></p>
          <p className="hero-proof"><CjkText>{t('home.hero.proof')}</CjkText></p>
          {/* 學經歷晶片：首屏唯一的「憑證」區塊，依序浮上來。
              內容全部對得上 Resume，不放任何無法查證的形容詞。 */}
          <ul className="hero-creds">
            {['chip1', 'chip2', 'chip3', 'chip4', 'chip5'].map((k, i) => (
              <li key={k} style={{ animationDelay: `${0.62 + i * 0.07}s` }}>
                <CjkText>{t(`home.hero.${k}`)}</CjkText>
              </li>
            ))}
          </ul>
          <div className="hero-buttons">
            {/* 舊的第二顆是 href="#selected-works"。全站走 HashRouter，網址列的 hash
                已經被路由佔用，錨點連結會被當成路由 /selected-works 而導不到任何地方。
                Selected Works 本來就在首屏正下方，不需要按鈕帶路，改指向履歷。 */}
            <Link className="btn-pill btn--primary" to="/about"><span><CjkText>{t('home.hero.aboutBtn')}</CjkText></span>{' '}<span className="dot">→</span></Link>
            <Link className="btn-pill btn--secondary" to="/resume"><span><CjkText>{t('home.hero.resumeBtn')}</CjkText></span>{' '}<span className="dot">→</span></Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Selected Works */}
      <section className="section" id="selected-works" style={{ paddingTop: '24px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-flex">
            <h2 className="section-head">
              <Briefcase size={32} color="var(--accent-text)" /><span><CjkText>{t('home.works.heading')}</CjkText></span>
            </h2>
            <Link to="/projects" className="view-all-link"><CjkText>{t('home.works.viewAll')}</CjkText></Link>
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
              <p className="text-meta-style hiw-label"><CjkText>{t('home.howIWork.label')}</CjkText></p>
              <h2 className="hiw-title">
                <TypeIn
                  key={locale}
                  trigger="scroll"
                  delayMs={800}
                  charMs={locale === 'zh' ? 80 : 40}
                  segments={[{ text: t('home.howIWork.title') }]}
                />
              </h2>
            </div>
            <div className="hiw-links">
              <Link to="/design-system" className="hiw-link"><CjkText>{t('home.howIWork.ds')}</CjkText></Link>
              <Link to="/how-i-built-this" className="hiw-link"><CjkText>{t('home.howIWork.built')}</CjkText></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Awards — 六個有 logo 的獎項，點開用 anime.js 的 layout 動畫展成 modal。
             完整清單（含沒有 logo 的兩項）在 Resume。 */}
      <section className="section" id="awards" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="container">
          <div className="awards-strip reveal">
            <div className="awards-head">
              <h2 className="awards-heading">
                <CjkText>{t('home.awards.heading')}</CjkText>
                <sup className="awards-count">8</sup>
              </h2>
              <Link to="/resume#awards" className="awards-link"><CjkText>{t('home.awards.viewAll')}</CjkText></Link>
            </div>
            <ul className="awards-row">
              {AWARD_LOGOS.map(logo => (
                <li key={logo.k}>
                  {/* 收起來時 .award-text 是 display:none，會連帶離開無障礙樹，
                      所以名字要靠 aria-label 帶，否則這顆按鈕會沒有可讀名稱。 */}
                  <button
                    type="button"
                    className="award-item"
                    aria-label={t(`home.awards.${logo.k}.title`)}
                    data-cursor-label={t('home.works.explore')}
                    onClick={openAward}
                  >
                    <span className="award-card">
                      <span className="award-logo">
                        <img src={logo.src} alt="" loading="lazy" />
                      </span>
                      <span className="award-text">
                        <span className="award-title">{t(`home.awards.${logo.k}.title`)}</span>
                        <span className="award-desc">{t(`home.awards.${logo.k}.desc`)}</span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator className="container-sep" />

      {/* 4. Contact */}
      <section className="section" id="contact" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="container contact-wrap">
          <h2 className="section-head reveal" style={{ justifyContent: 'center' }}>
            <Mail size={32} color="var(--accent-text)" /><span><CjkText>{t('home.contact.heading')}</CjkText></span>
          </h2>
          <p className="contact-sub"><CjkText>{t('home.contact.sub')}</CjkText></p>
          <div className="contact-pills">
            <a className="contact-pill" href="https://www.linkedin.com/in/rose-chang0708" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z" />
              </svg>
              <span><CjkText>{t('home.contact.linkedin')}</CjkText></span>
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
          position: relative;
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
        .work-cover { position: relative; overflow: hidden; background: var(--surface-muted); aspect-ratio: 16 / 10; }

        /* 說明遮罩。壓在照片上的深色罩子兩個模式都必須維持深色，否則暗色模式
           翻成亮底會讓照片消失，所以這裡刻意直接引用 primitive，與案例頁那些
           自帶深底的 mockup 是同一類例外。預設不顯示，只有在桌機且真的有
           hover 能力的裝置上才啟用（見下方 media query）。 */
        .work-overlay {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 22px;
          /* 下緣多留一段給右下角的 Learn more，避免長段落壓到它 */
          padding: clamp(28px, 3.4vw, 52px) clamp(28px, 3.4vw, 52px) clamp(60px, 5.2vw, 80px);
          background: color-mix(in srgb, var(--ink) 90%, transparent);
          color: var(--ink-bright);
        }
        /* 左右對齊。要給一個固定的行寬 justify 才有作用，
           align-items: center 之下的 flex item 是 shrink-to-fit。 */
        .work-overlay__text {
          margin: 0;
          width: 100%;
          max-width: 46ch;
          text-align: justify;
          text-justify: inter-character;
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.7;
          color: var(--ink-bright);
        }
        /* 右下角的 Learn more 刻意做成「標示」而不是「按鈕」：
           不加底線、不加框。底線與框都在說「只有這幾個字可以點」，
           但整張卡都是連結。可點的訊號改由整張卡本身承擔：遮罩蓋滿整張圖、
           卡片上浮、圖片放大、游標膠囊在卡上任何位置出現，
           Learn more 只負責說明「點下去會發生什麼」，箭頭跟著整張卡的 hover 右移。 */
        .work-overlay .work-cta {
          position: absolute;
          right: clamp(20px, 2.4vw, 32px);
          bottom: clamp(18px, 2.1vw, 28px);
          align-self: auto;
          margin-top: 0;
          padding-bottom: 0;
          border-bottom: 0;
          font-size: 13px;
          color: var(--acid);
        }
        .work-cover img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }
        .work-card:hover .work-cover img { transform: scale(1.04); }

        .work-body { padding: clamp(20px, 2.2vw, 28px) clamp(22px, 2.4vw, 32px) clamp(24px, 2.6vw, 32px); }
        .work-meta {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 12px;
        }
        .work-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(20px, 1.8vw, 26px);
          line-height: 1.25;
          letter-spacing: -.02em;
          margin: 0 0 10px;
          color: var(--text-primary);
        }

        .work-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .work-tags li {
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: .03em;
          line-height: 1.2;
          padding: 6px 11px;
          border-radius: var(--radius-pill);
          background: var(--surface-muted);
          color: var(--text-secondary);
        }
        /* 不另外設 max-width：行長已經由卡片本身決定。多加一道 62ch（約 567px）
           會比同一張卡的標題窄兩百多 px，單欄時右邊就留下一塊很明顯的空白。 */
        .work-caption {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 14px;
        }

        /* 只有真的有 hover 的大螢幕才把說明收進遮罩。觸控裝置永遠拿不到 hover，
           所以那邊維持說明常駐在標題下方，不做遮罩。 */
        @media (min-width: 901px) and (hover: hover) {
          .work-overlay {
            display: flex;
            opacity: 0;
            transition: opacity .35s cubic-bezier(.2,.8,.2,1);
          }
          .work-card:hover .work-overlay,
          .work-card:focus-visible .work-overlay { opacity: 1; }

          /* 視覺上收起來，但留在無障礙樹裡，螢幕閱讀器仍讀得到說明。
             用 clip-path 而不是 display:none，就是為了不把它移出無障礙樹。 */
          .work-body .work-caption {
            position: absolute;
            width: 1px; height: 1px;
            margin: 0; padding: 0;
            overflow: hidden;
            clip-path: inset(50%);
            white-space: nowrap;
          }

          /* 遮罩接手了提示，body 裡那顆就收掉。要用 .work-body 前綴把權重拉到
             (0,2,0)，否則會被後面才宣告的 .work-cta { display: inline-flex } 蓋掉。 */
          .work-body .work-cta--inline { display: none; }
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
        /* 刻意限定在 .work-body 底下。遮罩裡那顆是壓在深色罩子上的，
           accent-text 在亮色模式是深棕色 #7A5C00，套上去會讀不到。 */
        .work-card:hover .work-body .work-cta,
        .work-card:focus-visible .work-body .work-cta {
          color: var(--accent-text);
          border-color: var(--accent-text);
        }
        .work-card:hover .work-cta__arrow,
        .work-card:focus-visible .work-cta__arrow { transform: translateX(5px); }

        /* Feature card: cover left, copy right */
        .work-card--feature { display: grid; grid-template-columns: 1.15fr 1fr; align-items: stretch; }
        /* 2026/09：這張原本用 contain 加一層模糊墊底填滿留白，看起來不像滿版。
           改回與其餘四張一致的 cover。原圖 1800×1012（1.78:1）放進 1.52:1 的圖框，
           每邊裁掉約 130px，而畫面內容（1574px 寬）左右各有 113px 留白，
           實際只吃進內容約 17px，字與手機都還在。hover 放大沿用共用規則。 */
        .work-card--feature .work-cover { aspect-ratio: auto; height: 100%; min-height: 340px; }
        .work-card--feature .work-body { display: flex; flex-direction: column; justify-content: center; padding: clamp(28px, 3.2vw, 48px); }
        .work-card--feature .work-title { font-size: clamp(26px, 2.8vw, 38px); }
        .work-card--feature .work-caption { font-size: clamp(15px, 1.1vw, 16.5px); }
        .work-card--feature .work-overlay__text { font-size: clamp(17px, 1.5vw, 22px); max-width: 40ch; }

        @media (max-width: 900px) {
          .work-card--feature { grid-template-columns: 1fr; }
          .work-card--feature .work-cover { aspect-ratio: 16 / 10; min-height: 0; }
          .work-grid { grid-template-columns: 1fr; }
        }

        /* ── Awards ── */
        .awards-strip {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 22px 0 24px;
        }
        .awards-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .awards-heading {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(18px, 1.6vw, 22px);
          letter-spacing: -.01em;
          color: var(--text-primary);
        }
        /* 上標數字：告訴人點進去總共有幾項，八項裡有兩項沒有 logo */
        .awards-count {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 400;
          margin-left: 6px;
          color: var(--accent-text);
        }
        .awards-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        /* How I work 窄帶 */
        .how-i-work-band {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 28px;
          padding: 26px clamp(20px, 3vw, 40px);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius-lg);
          background: var(--surface);
        }
        /* 拿掉 desc 之後這一欄只剩 label + title，兩行就到底。
           basis 從 420px 收到 340px：標題單行放得下，links 也能晚一點才換行。 */
        .hiw-copy { flex: 1 1 340px; min-width: 0; }
        .hiw-label { color: var(--text-tertiary); margin: 0 0 8px; }
        /* margin-bottom 原本是用來隔開下方的 desc，desc 已移除，這裡收回 0，
           否則 copy 欄底部會多出一段對不到任何內容的空白。 */
        .hiw-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(20px, 2.4vw, 28px); line-height: 1.25;
          letter-spacing: -.01em; margin: 0; color: var(--text-primary);
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

        /* 按鈕外殼只負責點擊與焦點，視覺全部掛在 .award-card 上，
           因為進 modal 的是 .award-card 這一層（anime 要量測的就是它）。 */
        .award-item {
          display: block;
          padding: 0;
          border: 0;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-md);
        }
        .award-item.is-open { visibility: hidden; }
        .award-item:focus-visible { outline: 2px solid var(--accent-text); outline-offset: 3px; }

        .award-card {
          display: flex;
          align-items: center;
          gap: 14px;
          border-radius: var(--radius-md);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 8px;
          transition: border-color .25s ease, transform .25s cubic-bezier(.2,.8,.2,1);
        }
        .award-item:hover .award-card,
        .award-item:focus-visible .award-card {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        /* logo 一律放在固定的淺色晶片上，這樣深色 logo 在暗色模式也讀得到，
           不必為每個檔案個別調 filter。 */
        .award-logo {
          display: inline-flex; align-items: center; justify-content: center;
          height: 62px; width: 128px; flex-shrink: 0;
          padding: 10px 14px; border-radius: var(--radius-md);
          background: var(--bone-3, #F6F2E7);
          border: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
        }
        .award-logo img { max-height: 100%; max-width: 100%; object-fit: contain; display: block; }
        /* 收起來時不顯示，展開後由 #award-dialog 的規則打開 */
        .award-text { display: none; }
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

        /* 獎項 modal。dialog 掛在 body 不在 React 樹裡，所以這裡用 id 選擇器
           全域命中；Home 卸載時 effect 會把它移除。 */
        /* showModal() 的置中靠 UA 的 position:fixed + inset:0 + margin:auto。
           這裡改寫成 relative 會讓 dialog 掉回文件流，捲動後就飛到畫面外，
           所以要維持 fixed，並自己補上 inset / margin / height 讓它置中。 */
        #award-dialog {
          position: fixed;
          inset: 0;
          margin: auto;
          height: fit-content;
          max-height: calc(100vh - 80px);
          width: calc(100% - 40px);
          max-width: 520px;
          padding: clamp(22px, 3vw, 34px);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          background: var(--surface);
          color: var(--text-primary);
        }
        /* ::backdrop 拿不到 :root 的變數，這裡直接寫 ink 的字面值；
           遮罩本來就該在兩個模式都維持深色，與卡片遮罩同一類例外。 */
        #award-dialog::backdrop { background: rgba(12, 12, 12, 0.55); }
        #award-dialog .award-card {
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          padding: 0;
          border: 0;
          background: none;
          transform: none;
        }
        #award-dialog .award-logo { height: 76px; width: 156px; }
        #award-dialog .award-text { display: block; }
        #award-dialog .award-title {
          display: block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.3;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        #award-dialog .award-desc {
          display: block;
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .award-dialog__close {
          position: absolute;
          top: 10px; right: 12px;
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; line-height: 1;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: var(--surface);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .award-dialog__close:hover { color: var(--text-primary); border-color: var(--border-strong); }
        .award-dialog__close:focus-visible { outline: 2px solid var(--accent-text); outline-offset: 2px; }

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
          .award-card { transition: none !important; }
          .award-item:hover .award-card { transform: none !important; }
          .avail-dot { animation: none !important; }
          .interactive-name .char { animation: none !important; transition: none !important; }
          /* 光暈留著當靜態背景，只停掉漂移；進場位移一併取消。
             捲動連動的位移由 useReducedMotion 在 JS 端跳過。 */
          .hero-glow span { animation: none !important; }
          .hero-inner > :not(.name), .hero-creds > li { animation: none !important; }
          .work-card, .work-cover img, .contact-pill, .btn-pill, .work-cta__arrow, .work-overlay { transition: none !important; }
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
