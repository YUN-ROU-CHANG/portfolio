import { useState, useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';
import CjkText from '../components/CjkText';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import sleepGuardianCoverP from '../assets/images/home/sleep-guardian-cover.webp';
import oblivilightCoverP from '../assets/images/home/Oblivilight-cover.webp';
import muCoverP from '../assets/images/home/mu-cover.webp';
import innoconnectCoverP from '../assets/images/home/innoconnect-cover.webp';
import gcceCoverP from '../assets/images/home/gcce-cover.webp';
import timesYoungCover from '../assets/images/project/TimesYoungCreativeAwards/timesyoungcreativeawards-cover.webp';
import bigDataCupCover from '../assets/images/project/BigDataMarketingCup/big-data-cup-cover.webp';
import kdanCover from '../assets/images/project/AdnexInternship/ADNEX-social-cover.webp';
import pennStateCover from '../assets/images/project/ProjectArchive/penn-state-uni-cover.webp';

type ProjectCategory = 'award' | 'research-exp' | 'design';

type ProjectItem = {
  slug: string;
  image: string;
  period: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
};

const getProjectsData = (t: (key: string) => string): ProjectItem[] => [
  // Row 1
  {
    slug: 'sleep-guardian',
    image: sleepGuardianCoverP,
    period: t('projects.cards.sleepGuardian.period'),
    type: t('projects.cards.sleepGuardian.type'),
    title: t('projects.cards.sleepGuardian.title'),
    description: t('projects.cards.sleepGuardian.desc'),
    tags: [t('projects.cards.sleepGuardian.tag1'), t('projects.cards.sleepGuardian.tag2'), t('projects.cards.sleepGuardian.tag3')],
    category: 'research-exp'
  },
  {
    slug: 'innoconnect',
    image: innoconnectCoverP,
    period: t('projects.cards.innoconnect.period'),
    type: t('projects.cards.innoconnect.type'),
    title: t('projects.cards.innoconnect.title'),
    description: t('projects.cards.innoconnect.desc'),
    tags: [t('projects.cards.innoconnect.tag1'), t('projects.cards.innoconnect.tag2'), t('projects.cards.innoconnect.tag3')],
    category: 'award'
  },
  {
    slug: 'oblivilight',
    image: oblivilightCoverP,
    period: t('projects.cards.oblivilight.period'),
    type: t('projects.cards.oblivilight.type'),
    title: t('projects.cards.oblivilight.title'),
    description: t('projects.cards.oblivilight.desc'),
    tags: [t('projects.cards.oblivilight.tag1'), t('projects.cards.oblivilight.tag2'), t('projects.cards.oblivilight.tag3')],
    category: 'award'
  },
  // Row 2
  {
    slug: 'mu',
    image: muCoverP,
    period: t('projects.cards.mu.period'),
    type: t('projects.cards.mu.type'),
    title: t('projects.cards.mu.title'),
    description: t('projects.cards.mu.desc'),
    tags: [t('projects.cards.mu.tag1'), t('projects.cards.mu.tag2')],
    category: 'design'
  },
  {
    slug: 'hci-publications',
    image: gcceCoverP,
    period: t('projects.cards.publications.period'),
    type: t('projects.cards.publications.type'),
    title: t('projects.cards.publications.title'),
    description: t('projects.cards.publications.desc'),
    tags: [t('projects.cards.publications.type'), t('projects.cards.publications.tag2')],
    category: 'research-exp'
  },
  {
    slug: 'adnex-internship',
    image: kdanCover,
    period: t('projects.cards.kdan.period'),
    type: t('projects.cards.kdan.type'),
    title: t('projects.cards.kdan.title'),
    description: t('projects.cards.kdan.desc'),
    tags: [t('projects.cards.kdan.tag1'), t('projects.cards.kdan.tag2')],
    category: 'research-exp'
  },
  // Row 3
  {
    slug: 'times-awards',
    image: timesYoungCover,
    period: t('projects.cards.timesAwards.period'),
    type: t('projects.cards.timesAwards.type'),
    title: t('projects.cards.timesAwards.title'),
    description: t('projects.cards.timesAwards.desc'),
    tags: [t('projects.cards.timesAwards.tag1'), t('projects.cards.timesAwards.tag2'), t('projects.cards.timesAwards.tag3')],
    category: 'award'
  },
  {
    slug: 'big-data-cup',
    image: bigDataCupCover,
    period: t('projects.cards.bigDataCup.period'),
    type: t('projects.cards.bigDataCup.type'),
    title: t('projects.cards.bigDataCup.title'),
    description: t('projects.cards.bigDataCup.desc'),
    tags: [t('projects.cards.bigDataCup.tag1'), t('projects.cards.bigDataCup.tag2')],
    category: 'award'
  },
  {
    slug: 'project-archive',
    image: pennStateCover,
    period: t('projects.cards.archive.period'),
    type: t('projects.cards.archive.title'),
    title: t('projects.cards.archive.title'),
    description: t('projects.cards.archive.desc'),
    tags: [t('projects.cards.archive.tag1'), t('projects.cards.archive.tag2')],
    category: 'design'
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const projectsData = getProjectsData(t);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Re-observe when the filter swaps the grid out for a fresh set of cards.
  useRevealOnScroll([activeCategory]);

  return (
    <Layout>
      <div id="projects-page">
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h1 className="name" style={{ fontSize: '48px', lineHeight: '1.2', marginBottom: '16px' }}>{t('projects.header.title')}</h1>
              <p className="body muted" style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>{t('projects.header.sub')}</p>
            </div>

            <div className="tabs-container reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
              <div className="tabs" role="tablist" aria-label="Project Categories">
                <button
                  role="tab"
                  aria-selected={activeCategory === 'all'}
                  onClick={() => setActiveCategory('all')}
                  className={`tab ${activeCategory === 'all' ? 'active' : ''}`}
                >{t('projects.filters.all')}</button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'award'}
                  onClick={() => setActiveCategory('award')}
                  className={`tab ${activeCategory === 'award' ? 'active' : ''}`}
                >{t('projects.filters.awards')}</button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'research-exp'}
                  onClick={() => setActiveCategory('research-exp')}
                  className={`tab ${activeCategory === 'research-exp' ? 'active' : ''}`}
                >{t('projects.filters.research')}</button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'design'}
                  onClick={() => setActiveCategory('design')}
                  className={`tab ${activeCategory === 'design' ? 'active' : ''}`}
                >{t('projects.filters.design')}</button>
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, i) => (
                <div
                  key={project.slug}
                  className="project-card-wrapper reveal"
                  style={{ '--reveal-delay': `${Math.min(i, 5) * 80}ms` } as CSSProperties}
                >
                  <div className="project-card">
                    <div className="project-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="project-info">
                      <p className="project-meta">
                        {project.period} · {project.type}
                      </p>
                      <h3 className="project-title">
                        <CjkText>{project.title}</CjkText>
                      </h3>
                      <p className="project-description">
                        <CjkText>{project.description}</CjkText>
                      </p>
                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/projects/${project.slug}`} 
                        className="project-explore-btn"
                      >{t('common.explore')}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .tabs-container { display: flex; justify-content: center; margin-bottom: 48px; }
          .tabs { display: inline-flex; gap: 8px; padding: 6px; background: color-mix(in srgb, var(--surface) 62%, transparent); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
          .tab { position: relative; padding: 10px 24px; background: transparent; border: none; border-radius: var(--radius-md); font-size: 14px; font-weight: 600; color: var(--color-text-muted); cursor: pointer; transition: all 220ms cubic-bezier(0.2, 0.8, 0.2, 1); white-space: nowrap; }
          .tab:hover { color: var(--text-primary); background: rgba(0, 0, 0, 0.04); }
          .tab.active { color: var(--text-primary); background: linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent)); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); }
          .tab.active::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); width: 40%; height: 2px; background: var(--accent); border-radius: 2px; }
          .tab:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }

          .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; }
          .project-card-wrapper { position: relative; width: 100%; }
          .project-card { position: relative; width: 100%; height: 100%; background: var(--card-glass); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12); }
          .project-image { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: var(--surface-muted); }
          .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover .project-image img { transform: scale(1.05); }
          
          .project-info { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
          .project-meta { font-size: 14px !important; line-height: 1.4 !important; color: var(--color-text-muted); margin: 0; }
          .project-title { font-size: 20px; font-weight: 600; line-height: 1.3; color: var(--text-primary); margin: 0; }
          .project-description { font-size: 14px !important; line-height: 1.6 !important; color: var(--color-text-muted); margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
          .project-tag { padding: 4px 10px; font-size: 12px !important; line-height: 1.4 !important; color: var(--accent-text); background: linear-gradient(135deg, color-mix(in srgb, var(--acid) 30%, transparent), color-mix(in srgb, var(--acid) 8%, transparent)); border-radius: var(--radius-sm); white-space: nowrap; }
          
          .project-explore-btn { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 24px; margin-top: auto; background: var(--card-glass); border: 1px solid var(--border); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); overflow: hidden; transform: translateZ(0); align-self: flex-start; }
          .project-explore-btn::before { content: ''; position: absolute; inset: 0; background: var(--accent); opacity: 0; transition: opacity 0.3s ease; z-index: 0; }
          .project-explore-btn:hover { transform: scale(1.08) translateY(-2px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15); border-color: transparent; color: var(--text); }
          .project-explore-btn:hover::before { opacity: 0.12; }
          .project-explore-btn:active { transform: scale(0.98); }

          @media (max-width: 959px) and (min-width: 640px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .tabs { flex-wrap: wrap; gap: 6px; }
            .tab { padding: 8px 16px; font-size: 13px; }
          }
          @media (max-width: 639px) {
            .projects-grid { grid-template-columns: 1fr; gap: 16px; }
            .project-info { padding: 20px; }
            .project-title { font-size: 18px; }
            .project-description { font-size: 13px !important; }
            .tabs { flex-wrap: wrap; gap: 6px; padding: 4px; }
            .tab { padding: 8px 14px; font-size: 12px; }
            .tabs-container { margin-bottom: 32px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .project-card, .project-image img, .project-explore-btn, .project-explore-btn::before, .tab { transition: none !important; transform: none !important; }
            .project-card:hover, .project-card:hover .project-image img, .project-explore-btn:hover { transform: none !important; }
          }
        `}</style>
      </div>

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