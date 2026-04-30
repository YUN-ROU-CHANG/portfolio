import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';
import sleepGuardianCoverP from '../assets/images/home/sleep-guardian-cover.png';
import oblivilightCoverP from '../assets/images/home/Oblivilight-cover.jpg';
import muCoverP from '../assets/images/home/mu-cover.jpg';
import innoconnectCoverP from '../assets/images/home/innoconnect-cover.jpg';
import gcceCoverP from '../assets/images/home/gcce-cover.jpg';
import timesYoungCover from '../assets/images/project/TimesYoungCreativeAwards/timesyoungcreativeawards-cover.png';
import bigDataCupCover from '../assets/images/project/BigDataMarketingCup/big-data-cup-cover.png';
import kdanCover from '../assets/images/project/AdnexInternship/ADNEX-social-cover.png';
import pennStateCover from '../assets/images/project/ProjectArchive/penn-state-uni-cover.jpeg';

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

const projectsData: ProjectItem[] = [
  // Row 1
  {
    slug: 'sleep-guardian',
    image: sleepGuardianCoverP,
    period: '2025 - 2026',
    type: 'HCI Research & App Design',
    title: 'Sleep Guardian | Notification Intervention Design',
    description: 'Lead Researcher & Designer: Planned and executed a controlled EMA user research study, designed interaction flows and prototypes for a React Native intervention app to study in-bed smartphone procrastination.',
    tags: ['M.S. Thesis', 'User Research Planning', 'EMA'],
    category: 'research-exp'
  },
  {
    slug: 'innoconnect',
    image: innoconnectCoverP,
    period: '2024 Oct - 2025 Mar',
    type: 'Service Design & UX',
    title: 'Innoconnect | Gift Service Optimization',
    description: '🏆 Gold Award Winner (1/186). Optimizing the O2O gifting experience for Hi-Life via gamification and social features.',
    tags: ['Gold Award', 'Service Design', 'Gamification'],
    category: 'award'
  },
  {
    slug: 'oblivilight',
    image: oblivilightCoverP,
    period: '2025 Jun - Aug',
    type: 'Interaction Design',
    title: "OpenHCI'25 | Oblivilight",
    description: '🏆 Best Demo Award Winner. A tangible interaction device built in a 6-day workshop exploring how AI "forgets".',
    tags: ['Best Demo Award', 'Tangible UI', 'Arduino'],
    category: 'award'
  },
  // Row 2
  {
    slug: 'mu',
    image: muCoverP,
    period: '2025 Jul - Dec',
    type: 'UX Design & Research',
    title: 'UX Design Awards｜Mú',
    description: "Nominated for UX Design Awards. A multisensory guide to Taiwan's endangered woods exploring emotional design.",
    tags: ['Nominated', 'Multisensory'],
    category: 'design'
  },
  {
    slug: 'hci-publications',
    image: gcceCoverP,
    period: '2025 Apr - Sep',
    type: 'HCI Research',
    title: 'HCI Research Publications',
    description: '🏆 SSIM 2024 Best Paper & IEEE GCCE 2025. Research on AI music & voice emotion.',
    tags: ['HCI Research', 'IEEE'],
    category: 'research-exp'
  },
  {
    slug: 'adnex-internship',
    image: kdanCover,
    period: '2024 Mar - Nov',
    type: 'Marketing & Data Analytics',
    title: 'KDAN | Marketing Intern',
    description: 'Optimized social workflow increasing IG growth by 101%. Led AI training.',
    tags: ['Marketing', 'Internship'],
    category: 'research-exp'
  },
  // Row 3
  {
    slug: 'times-awards',
    image: timesYoungCover,
    period: '2025 Apr - May',
    type: 'Advertising & Creative',
    title: '2025 34th Times Young Creative Awards',
    description: '🥉 National 3rd Place Winner. A multi-channel campaign (Video, Web, Audio) using "Gashapon" as a metaphor for job hunting.',
    tags: ['Advertising', 'Copywriting', 'Campaign'],
    category: 'award'
  },
  {
    slug: 'big-data-cup',
    image: bigDataCupCover,
    period: '2024 Sep - Nov',
    type: 'UI/UX Design & Research',
    title: 'Big Data Marketing Cup',
    description: '🥉 3rd Place Winner. Designed the UI/UX for "Taiwan Livestock" fitness app.',
    tags: ['UI Design', '3rd Place'],
    category: 'award'
  },
  {
    slug: 'project-archive',
    image: pennStateCover,
    period: '2022 - 2024',
    type: 'Academic Collaborations',
    title: 'Academic Collaborations',
    description: 'Includes the "Good Luck Peanut" branding project and the "Taipei Tech x Penn State GenAI Workshop".',
    tags: ['GenAI', 'Branding'],
    category: 'design'
  }
];

export default function Projects() {
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

  return (
    <Layout>
      <div id="projects-page">
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h1 className="name" style={{ fontSize: '48px', lineHeight: '1.2', marginBottom: '16px' }}>
                Projects
              </h1>
              <p className="body muted" style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                A collection of design work spanning awards, research, and creative projects.
              </p>
            </div>

            <div className="tabs-container">
              <div className="tabs" role="tablist" aria-label="Project Categories">
                <button
                  role="tab"
                  aria-selected={activeCategory === 'all'}
                  onClick={() => setActiveCategory('all')}
                  className={`tab ${activeCategory === 'all' ? 'active' : ''}`}
                >
                  All
                </button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'award'}
                  onClick={() => setActiveCategory('award')}
                  className={`tab ${activeCategory === 'award' ? 'active' : ''}`}
                >
                  Awards
                </button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'research-exp'}
                  onClick={() => setActiveCategory('research-exp')}
                  className={`tab ${activeCategory === 'research-exp' ? 'active' : ''}`}
                >
                  Research & Exp.
                </button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'design'}
                  onClick={() => setActiveCategory('design')}
                  className={`tab ${activeCategory === 'design' ? 'active' : ''}`}
                >
                  Design Projects
                </button>
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.slug} className="project-card-wrapper">
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
                        {project.title}
                      </h3>
                      <p className="project-description">
                        {project.description}
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
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .tabs-container { display: flex; justify-content: center; margin-bottom: 48px; }
          .tabs { display: inline-flex; gap: 8px; padding: 6px; background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(0, 0, 0, 0.06); border-radius: var(--radius-lg); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
          .tab { position: relative; padding: 10px 24px; background: transparent; border: none; border-radius: var(--radius-md); font-size: 14px; font-weight: 600; color: var(--color-text-muted); cursor: pointer; transition: all 220ms cubic-bezier(0.2, 0.8, 0.2, 1); white-space: nowrap; }
          .tab:hover { color: var(--md-on-surface); background: rgba(0, 0, 0, 0.04); }
          .tab.active { color: var(--md-on-surface); background: linear-gradient(135deg, hsl(var(--g1)/.12), hsl(var(--g2)/.12)); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); }
          .tab.active::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); width: 40%; height: 2px; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); border-radius: 2px; }
          .tab:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }

          .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; }
          .project-card-wrapper { position: relative; width: 100%; }
          .project-card { position: relative; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(0, 0, 0, 0.06); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12); }
          .project-image { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: #f5f5f5; }
          .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover .project-image img { transform: scale(1.05); }
          
          .project-info { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
          .project-meta { font-size: 14px !important; line-height: 1.4 !important; color: var(--color-text-muted); margin: 0; }
          .project-title { font-size: 20px; font-weight: 600; line-height: 1.3; color: var(--md-on-surface); margin: 0; }
          .project-description { font-size: 14px !important; line-height: 1.6 !important; color: var(--color-text-muted); margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
          .project-tag { padding: 4px 10px; font-size: 12px !important; line-height: 1.4 !important; color: hsl(var(--g3)); background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08)); border-radius: var(--radius-sm); white-space: nowrap; }
          
          .project-explore-btn { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 24px; margin-top: auto; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0,0,0,0.08); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); overflow: hidden; transform: translateZ(0); align-self: flex-start; }
          .project-explore-btn::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3))); opacity: 0; transition: opacity 0.3s ease; z-index: 0; }
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
          background: '#1A1A18',
          color: '#FFE699',
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