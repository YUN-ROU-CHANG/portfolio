import { useState } from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';

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
  {
    slug: 'innoconnect',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1080',
    period: '2024',
    type: 'Service Design & UX',
    title: 'Innoconnect | Gift Service Optimization',
    description: '🏆 Gold Award Winner (1/186). Optimizing the O2O gifting experience for Hi-Life via gamification and social features.',
    tags: ['Gold Award', 'Service Design', 'Gamification'],
    category: 'award'
  },
  {
    slug: 'oblivilight',
    image: 'https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&w=1080',
    period: '2025 July',
    type: 'Interaction Design',
    title: "OpenHCI'25 | Oblivilight",
    description: '🏆 Best Demo Award Winner. A tangible interaction device built in a 6-day workshop exploring how AI "forgets".',
    tags: ['Best Demo Award', 'Tangible UI', 'Arduino'],
    category: 'award'
  },
  {
    slug: 'times-awards',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1080',
    period: '2024',
    type: 'Advertising & Creative',
    title: '2025 34th Times Young Creative Awards',
    description: '🥉 National 3rd Place Winner. A multi-channel campaign (Video, Web, Audio) using "Gashapon" as a metaphor for job hunting.',
    tags: ['Advertising', 'Copywriting', 'Campaign'],
    category: 'award'
  },
  {
    slug: 'kdan-internship',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080',
    period: '2024',
    type: 'Marketing & Data Analytics',
    title: 'KDAN Mobile | Marketing Intern',
    description: 'Optimized social workflow increasing IG growth by 101%. Led AI training.',
    tags: ['Marketing', 'Internship'],
    category: 'research-exp'
  },
  {
    slug: 'research-papers',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1080',
    period: '2024 - 2025',
    type: 'HCI Research',
    title: 'HCI Research Publications',
    description: '🏆 SSIM 2024 Best Paper & IEEE GCCE 2025. Research on AI music & voice emotion.',
    tags: ['HCI Research', 'IEEE'],
    category: 'research-exp'
  },
  {
    slug: 'mu-multisensory',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1080',
    period: '2024',
    type: 'UX Design & Research',
    title: 'UX Design Awards｜Mú',
    description: 'Nominated for UX Design Awards. A multisensory guide to Taiwan’s endangered woods exploring emotional design.',
    tags: ['Nominated', 'Multisensory'],
    category: 'design'
  },
  {
    slug: 'bilingual-center',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1080',
    period: '2023 - 2024',
    type: 'Project Management',
    title: 'Taipei Tech｜Part-Time Project Assistant @ Center for Bilingual Learning',
    description: 'Assisted in promoting bilingual education projects and managing administrative tasks at the Center for Bilingual Learning.',
    tags: ['Project Assistant', 'Management'],
    category: 'research-exp'
  },
  {
    slug: 'big-data-cup',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080',
    period: '2024',
    type: 'UI/UX Design & Research',
    title: 'Big Data Marketing Cup',
    description: '🥉 3rd Place Winner. Designed the UI/UX for "Taiwan Livestock" fitness app.',
    tags: ['UI Design', '3rd Place'],
    category: 'award'
  },
  {
    slug: 'academic-collaborations',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080',
    period: '2022 - 2024',
    type: 'Academic Collaborations',
    title: 'Taipei Tech Academic Collaborations',
    description: 'Includes the "Good Luck Peanut" branding project and the "Taipei Tech x Penn State GenAI Workshop".',
    tags: ['GenAI', 'Branding'],
    category: 'design'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

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
    </Layout>
  );
}