import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { motion, useScroll } from 'motion/react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Download, Linkedin, Github, Briefcase, GraduationCap, Award, Code, FileText } from 'lucide-react';

// 引入你指定的 PDF 檔案
import resumePdf from '../assets/images/Yun-Rou_Chang_Resume.pdf';

// 獎狀與證明圖片（2026/08 從首頁搬過來，首頁只留一行摘要）
import tuitionCert from '../assets/images/home/tuition.webp';
import timesYoungCert from '../assets/images/home/times-young-creative-awards.webp';
import ieeeGcceCert from '../assets/images/home/ieeegcce-presentation.webp';
import openhciCert from '../assets/images/home/best-demo.webp';
import uxdaCert from '../assets/images/home/uxda-nominated.webp';
import innoconnectCert from '../assets/images/home/innoconnect-certificate.webp';
import bigDataCert from '../assets/images/home/big-data-cup.webp';
import ssimCert from '../assets/images/home/ssim-award.webp';

// Types
type Experience = {
  id: string; year: string; title: string; company: string; period: string; description: string[]; badges: string[];
};

// Data
const getResumeData = (t: (key: string) => string) => ({
  lastUpdated: '2026-04-30',
  contact: { email: 'yuu07798@gmail.com', linkedin: 'https://www.linkedin.com/in/rose-chang0708', github: 'https://github.com' },
  experience: [
    {
      id: 'exp-1',
      year: t('resume.experience.bilingual.year'),
      title: t('resume.experience.bilingual.title'),
      company: t('resume.experience.bilingual.company'),
      period: t('resume.experience.bilingual.period'),
      description: [
        t('resume.experience.bilingual.d1'),
        t('resume.experience.bilingual.d2'),
        t('resume.experience.bilingual.d3'),
      ],
      badges: [t('resume.chips.socialMediaMgmt'), t('resume.chips.eventCoordination'), t('resume.chips.docHandling'), t('resume.chips.adminSupport'), t('resume.chips.canva')]
    },
    {
      id: 'exp-2',
      year: t('resume.experience.ra.year'),
      title: t('resume.experience.ra.title'),
      company: t('resume.experience.ra.company'),
      period: t('resume.experience.ra.period'),
      description: [
        t('resume.experience.ra.d1'),
        t('resume.experience.ra.d2'),
        t('resume.experience.ra.d3'),
        t('resume.experience.ra.d4'),
        t('resume.experience.ra.d5'),
      ],
      badges: [t('resume.chips.researchWriting'), t('resume.chips.proposalDev'), t('resume.chips.statSoftware'), t('resume.chips.qualInterview')]
    },
    {
      id: 'exp-3',
      year: t('resume.experience.kdan.year'),
      title: t('resume.experience.kdan.title'),
      company: t('resume.experience.kdan.company'),
      period: t('resume.experience.kdan.period'),
      description: [
        t('resume.experience.kdan.d1'),
        t('resume.experience.kdan.d2'),
        t('resume.experience.kdan.d3'),
        t('resume.experience.kdan.d4'),
        t('resume.experience.kdan.d5'),
        t('resume.experience.kdan.d6')
      ],
      badges: [t('resume.chips.socialMediaMgmt'), t('resume.chips.adCampaign'), t('resume.chips.creativeIdeation'), t('resume.chips.crossIndustry'), t('resume.chips.brandAwareness'), t('resume.chips.marketResearch')]
    },
    {
      id: 'exp-4',
      year: t('resume.experience.mengya.year'),
      title: t('resume.experience.mengya.title'),
      company: t('resume.experience.mengya.company'),
      period: t('resume.experience.mengya.period'),
      description: [
        t('resume.experience.mengya.d1'),
        t('resume.experience.mengya.d2'),
        t('resume.experience.mengya.d3'),
        t('resume.experience.mengya.d4'),
      ],
      badges: [t('resume.chips.adSales'), t('resume.chips.crm'), t('resume.chips.clientData'), t('resume.chips.docProcessing'), t('resume.chips.dataEntry'), t('resume.chips.adminSupport')]
    },
    {
      id: 'exp-5',
      year: t('resume.experience.wonlaiwon.year'),
      title: t('resume.experience.wonlaiwon.title'),
      company: t('resume.experience.wonlaiwon.company'),
      period: t('resume.experience.wonlaiwon.period'),
      description: [
        t('resume.experience.wonlaiwon.d1'),
        t('resume.experience.wonlaiwon.d2'),
        t('resume.experience.wonlaiwon.d3'),
      ],
      badges: [t('resume.chips.productPhoto'), t('resume.chips.bgRemoval'), t('resume.chips.adCopywriting'), t('resume.chips.docProcessing'), t('resume.chips.dataEntry'), t('resume.chips.photoshop'), t('resume.chips.illustrator')]
    },
  ],
  skills: [
    { category: t('resume.skills.catTools'), items: [t('resume.chips.figma'), t('resume.chips.maze'), t('resume.chips.photoshop'), t('resume.chips.illustrator'), t('resume.chips.premiere'), t('resume.chips.davinci'), t('resume.chips.ga'), t('resume.chips.canva'), t('resume.chips.sketchup')] },
    { category: t('resume.skills.catProgramming'), items: [t('resume.chips.html'), t('resume.chips.css'), t('resume.chips.javascript'), t('resume.chips.react')] },
    { category: t('resume.skills.catMethods'), items: [t('resume.chips.prototyping'), t('resume.chips.userResearch'), t('resume.chips.usabilityTesting'), t('resume.chips.designThinking'), t('resume.chips.wireframing'), t('resume.chips.designSystems')] }
  ],
  education: [
    { degree: t('resume.education.master.degree'), institution: t('resume.education.master.institution'), year: t('resume.education.master.year'), description: t('resume.education.master.desc') },
    { degree: t('resume.education.bachelor.degree'), institution: t('resume.education.bachelor.institution'), year: t('resume.education.bachelor.year'), description: t('resume.education.bachelor.desc') }
  ],
  certifications: [
    { name: t('resume.certs.python.name'), issuer: t('resume.certs.python.issuer'), year: t('resume.certs.python.year') },
  ]
});

function ExperienceItem({ experience }: { experience: Experience }) {
  const ref = useRef<HTMLLIElement>(null);
  // Grid Layout eliminates need for scroll transform logic for alignment
  return (
    <motion.li
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Left: Year */}
      <div className="timeline-left">
        <span className="timeline-year-text">{experience.year}</span>
      </div>

      {/* Center: Line & Dot */}
      <div className="timeline-divider">
        <div className="timeline-line"></div>
        <div className="timeline-dot"></div>
      </div>

      {/* Right: Content */}
      <div className="timeline-content">
        <Card className="timeline-card">
          <CardHeader className="resume-card-header">
            <div className="exp-icon-box">
              <Briefcase size={20} />
            </div>
            <div>
              <CardTitle className="exp-title">{experience.title}</CardTitle>
              <CardDescription className="exp-meta">{experience.company} · {experience.period}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="resume-card-content">
            <ul className="exp-desc-list">
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="exp-badges">
              {experience.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="exp-badge">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.li>
  );
}

// 獎項清單。原本在首頁是八段複製貼上的 JSX，搬過來時收成一個陣列。
const getAwards = (t: (key: string) => string) => [
  { year: '2025', key: 'tuition', cert: tuitionCert },
  { year: '2025', key: 'uxda', cert: uxdaCert },
  { year: '2025', key: 'timesYoung', cert: timesYoungCert },
  { year: '2025', key: 'gcce', cert: ieeeGcceCert },
  { year: '2025', key: 'openhci', cert: openhciCert },
  { year: '2024', key: 'innoconnect', cert: innoconnectCert },
  { year: '2024', key: 'bigData', cert: bigDataCert },
  { year: '2024', key: 'ssim', cert: ssimCert },
].map(a => ({ ...a, title: t(`home.awards.${a.key}.title`), desc: t(`home.awards.${a.key}.desc`) }));

export default function Resume() {
  const { t } = useLanguage();
  const resumeData = getResumeData(t);
  const awards = getAwards(t);
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { hash } = useLocation();

  useRevealOnScroll();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // HashRouter 已經吃掉一個 #，所以 /resume#awards 的錨點要自己捲。
  // 多次重試原本是為了蓋過內嵌 PDF 撐開高度造成的位移；PDF 檢視器已移除，
  // 但圖片與字型載入仍會微幅推動版面，所以保留幾次重新對位。
  useEffect(() => {
    if (hash !== '#awards') return;
    // 用 timeout 而非 rAF：背景分頁不會執行 rAF，但仍要能正確落在錨點上。
    const timers = [0, 150, 400, 900].map(delay =>
      window.setTimeout(() => {
        document.getElementById('awards')?.scrollIntoView({ block: 'start' });
      }, delay),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [hash]);

  return (
    <Layout>
      <div id="resume-page">
        <section className="section header-section">
          <div className="container">
            <div className="resume-header-content reveal">
              <div>
                <h1 className="name">{t('resume.header.title')}</h1>
                <p className="body muted">{t('resume.header.lastUpdated')}{' '}{resumeData.lastUpdated}</p>
              </div>
              <div className="resume-actions">
                <Button className="btn-pill interactive-button-base btn--primary" asChild>
                  <a href={resumePdf} download><Download size={18} />{' '}{t('resume.header.downloadPdf')}</a>
                </Button>
                {resumeData.contact.linkedin && (
                  <Button variant="outline" className="btn-pill interactive-button-base" asChild>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />{' '}{t('resume.header.linkedin')}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <Separator className="container-sep" />

        {/* 2026/08：原本這裡是內嵌 PDF 檢視器（object type="application/pdf"）。
            移除三個理由：iOS Safari 不支援內嵌 PDF（一律掉到 fallback）、
            桌機載入慢、而且它顯示的內容跟下面的 HTML 履歷完全重複。
            PDF 仍保留在頁首的下載按鈕，招募方要丟進 ATS 的檔案沒有少。 */}

        {/* Experience Timeline */}
        <section className="section">
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-head">{t('resume.experience.heading')}</h2>
              <p className="body muted" style={{ maxWidth: '600px', margin: '0 auto' }}>{t('resume.experience.sub')}</p>
            </div>
            <ol className="timeline-list">
              {resumeData.experience.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </ol>
          </div>
        </section>

        <Separator className="container-sep" />

        {/* Skills Section */}
        <section className="section" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div className="reveal" style={{ marginBottom: 'var(--space-10)' }}>
              <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Code size={32} color="var(--accent-text)" />{' '}{t('resume.skills.heading')}</h2>
            </div>

            <div className="skills-grid">
              {resumeData.skills.map((skillGroup) => (
                <Card key={skillGroup.category} style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <CardHeader style={{ padding: 'var(--space-6)', paddingBottom: 'var(--space-4)', gap: '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Code size={20} style={{ color: 'var(--accent-text)' }} aria-hidden="true" />
                      </div>
                      <CardTitle style={{
                        color: 'var(--text-primary)',
                        marginBottom: '0'
                      }}>
                        {skillGroup.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent style={{ padding: 'var(--space-6)', paddingTop: 0, gap: '0' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          style={{
                            padding: '6px 12px',
                            background: 'var(--surface-subtle)',
                            color: 'var(--text-primary)',
                            border: '1px solid rgba(0, 0, 0, 0.06)'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="container-sep" />

        {/* Education & Certifications */}
        <section className="section">
          <div className="container">
            <div className="education-cert-grid reveal">
              {/* Education */}
              <div>
                <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <GraduationCap size={32} color="var(--accent-text)" />{' '}{t('resume.education.heading')}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {resumeData.education.map((edu, index) => (
                    <Card key={index} style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                      <CardHeader style={{ padding: '24px' }}>
                        <CardTitle className="exp-title">{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution} · {edu.year}</CardDescription>
                        {edu.description && <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text-tertiary)' }}>{edu.description}</p>}
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Award size={32} color="var(--accent-text)" />{' '}{t('resume.certs.heading')}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {resumeData.certifications.map((cert, index) => (
                    <Card key={index} style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                      <CardHeader style={{ padding: '24px' }}>
                        <CardTitle className="exp-title">{cert.name}</CardTitle>
                        <CardDescription>{cert.issuer} · {cert.year}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="container-sep" />

        {/* Awards — 首頁只留一行摘要，完整清單與證書在這裡 */}
        <section className="section" id="awards" style={{ paddingBottom: 'var(--space-10)' }}>
          <div className="container">
            <h2 className="section-head" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={32} color="var(--accent-text)" />{' '}{t('resume.awards.heading')}</h2>
            <div className="awards-grid reveal">
              {awards.map(award => (
                <div className="award-item-clean" key={award.key}>
                  <span className="award-year">{award.year}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <h4 style={{ margin: 0, marginBottom: '6px' }}>{award.title}</h4>
                      <button onClick={() => setLightbox(award.cert)} className="cert-btn" aria-label="View Certificate">
                        <FileText size={12} /> <span>{t('common.certificate')}</span>
                      </button>
                    </div>
                    <p>{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

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

      <style>{`
        /* ── Awards (2026/08 從首頁搬過來) ── */
        .awards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .award-item-clean { display: flex; gap: 20px; padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .award-item-clean:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
        .award-year { font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: var(--accent-text); opacity: 0.8; padding-top: 2px; }
        .award-item-clean h4 { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--text-primary); }
        .award-item-clean p { font-size: 14px; color: var(--text-tertiary); line-height: 1.5; margin: 0; }
        @media (max-width: 768px) { .awards-grid { grid-template-columns: 1fr; } }

        .cert-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 100px;
          background: color-mix(in srgb, var(--text-primary) 4%, transparent);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-size: 12px; font-weight: 600; cursor: pointer;
          transition: all 0.25s ease; white-space: nowrap; flex-shrink: 0;
        }
        .cert-btn:hover {
          background: color-mix(in srgb, var(--text-primary) 8%, transparent);
          border-color: var(--border-strong);
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .award-item-clean { transition: none !important; }
          .award-item-clean:hover { transform: none !important; }
          .cert-btn:hover { transform: none !important; }
        }

        /* ==================================================
           原本的樣式 (完全不更動)
           ================================================== */
        .header-section { padding-top: 40px; padding-bottom: 40px; }
        .resume-header-content { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .resume-actions { display: flex; gap: 12px; }
        .container-sep { max-width: 1200px; margin: 0 auto; }
        
        /* Headings (Matches Home H2) */
        .section-head {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          /* 2026/08：同 Home / About，章節標題改用 ink。 */
          color: var(--text-primary);
          margin-bottom: 32px;
        }

        /* Grid Timeline Layout - The Fix */
        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }

        .timeline-item {
          display: grid;
          /* 100px Year | 40px Line | Content */
          grid-template-columns: 100px 40px 1fr;
          gap: 0;
          position: relative;
          padding-bottom: 48px; 
        }

        .timeline-left {
          text-align: right;
          padding-right: 16px;
          padding-top: 12px;
        }
        .timeline-year-text {
          font-weight: 700;
          font-size: 18px;
          color: var(--accent-text);
          font-variant-numeric: tabular-nums;
        }

        .timeline-divider {
          position: relative;
          display: flex;
          justify-content: center;
          height: 100%;
        }

        .timeline-line {
          position: absolute;
          top: 20px;
          bottom: -48px; /* Connect to next */
          width: 2px;
          background: color-mix(in srgb, var(--acid) 30%, transparent);
        }
        .timeline-item:last-child .timeline-line { display: none; }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent-text);
          box-shadow: 0 0 0 4px var(--background);
          z-index: 2;
          margin-top: 16px;
        }

        .timeline-card {
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .timeline-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--acid) 25%, transparent);
          border-color: var(--accent-text);
        }

        .resume-card-header { padding: 20px; padding-bottom: 12px; display: flex; gap: 16px; }
        .exp-icon-box {
          width: 40px; height: 40px; border-radius: 8px;
          background: color-mix(in srgb, var(--acid) 18%, transparent);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-text);
          flex-shrink: 0;
        }
        .exp-title { font-size: 18px; margin-bottom: 4px; font-weight: 600; }
        .exp-meta { font-size: 14px; color: var(--text-tertiary); }
        .resume-card-content { padding: 0 20px 20px 76px; }
        .exp-desc-list { 
          font-size: 15px; 
          line-height: 1.6; 
          margin-bottom: 16px; 
          color: var(--text-secondary);
          padding-left: 24px;
          margin-top: 0;
          list-style-type: disc; /* Circle bullet points */
        }
        .exp-desc-list li {
          margin-bottom: 8px;
          padding-left: 4px;
        }
        .exp-desc-list li::marker {
          color: var(--accent-text); /* Blue color for bullet points */
          font-size: 1.2em;
        }
        .exp-desc-list li:last-child {
          margin-bottom: 0;
        }
        .exp-badge { margin-right: 8px; margin-bottom: 8px; background: color-mix(in srgb, var(--acid) 14%, transparent); color: var(--accent-text); }

          /* Skills Grid */
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          /* Education & Certifications Grid */
          .education-cert-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-10);
          }
        
        .education-cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }

        @media (max-width: 768px) {
          .timeline-item { grid-template-columns: 24px 1fr; }
          .timeline-left { display: none; } /* Hide year on side for mobile */
          .timeline-divider { padding-left: 4px; justify-content: flex-start; }
          .resume-card-content { padding-left: 20px; }
          .resume-header-content { flex-direction: column; align-items: flex-start; }
          .skills-grid { grid-template-columns: 1fr; }
          .education-cert-grid { grid-template-columns: 1fr; gap: 32px; }
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