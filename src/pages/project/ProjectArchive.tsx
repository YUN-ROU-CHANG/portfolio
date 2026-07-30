import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Award, PlayCircle, Palette, Lightbulb, 
  ChevronRight, ExternalLink, Globe, Smartphone
} from 'lucide-react';

// 定義專案資料結構
const archivePhotos = import.meta.glob(
  '../../assets/images/project/ProjectArchive/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);
const archiveList = Object.values(archivePhotos) as string[];
// [0]=Yun-peanut-packaging.png [1]=Yun-peanut-web.png [2]=bass-spirit-video.png
// [3]=bilingual-center-cover.png [4]=palette.png [5]=penn-state-uni-cover.jpeg

const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    title: t('project.archive.peanut.title'),
    category: 'Brand & Visual',
    type: t('project.archive.peanut.type'),
    role: t('project.archive.peanut.role'),
    pitch: t('project.archive.peanut.pitch'),
    awards: [t('project.archive.peanut.award1'), t('project.archive.peanut.award2')],
    tags: [t('project.archive.peanut.tag1'), t('project.archive.peanut.tag2'), t('project.archive.peanut.tag3')],
    icon: <Palette size={20} />,
    imageClass: 'mock-peanut',
    image: archiveList[0],
    link: 'https://zany-team-187798.framer.app/Works_%E5%A5%BD%E9%9F%BB%E8%8A%B1%E7%94%9F_%E5%93%81%E7%89%8C%E8%A8%AD%E8%A8%88'
  },
  {
    id: 2,
    title: t('project.archive.bass.title'),
    category: 'Competitions',
    type: t('project.archive.bass.type'),
    role: t('project.archive.bass.role'),
    pitch: t('project.archive.bass.pitch'),
    awards: [t('project.archive.bass.award1')],
    tags: [t('project.archive.bass.tag1'), t('project.archive.bass.tag2'), t('project.archive.bass.tag3')],
    icon: <PlayCircle size={20} />,
    imageClass: 'mock-video',
    image: archiveList[2],
    link: 'https://youtu.be/HPnfosmq2ow'
  },
  {
    id: 3,
    title: t('project.archive.finlit.title'),
    category: 'Workshops',
    type: t('project.archive.finlit.type'),
    role: t('project.archive.finlit.role'),
    pitch: t('project.archive.finlit.pitch'),
    awards: [t('project.archive.finlit.award1')],
    tags: [t('project.archive.finlit.tag1'), t('project.archive.finlit.tag2'), t('project.archive.finlit.tag3')],
    icon: <Smartphone size={20} />,
    imageClass: 'mock-psu',
    image: archiveList[5],
    link: 'https://docs.google.com/presentation/d/1ltS93B4zAjEJ-EFxTqK02QRNqeqsPv65NTgHELTq1tU/edit?usp=sharing'
  }
];

export default function ProjectArchive() {
  const { t } = useLanguage();
  const projects = getProjects(t);
  const [showTop, setShowTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // 篩選分類項目（value 為邏輯值，label 為顯示文字）
  const filters = [
    { value: 'All', label: t('project.archive.filters.all') },
    { value: 'Competitions', label: t('project.archive.filters.competitions') },
    { value: 'Brand & Visual', label: t('project.archive.filters.brand') },
    { value: 'Workshops', label: t('project.archive.filters.workshops') },
  ];

  // 根據選擇的標籤過濾專案
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div id="project-archive-page">
        
        {/* Header Section */}
        <section className="archive-header">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="header-content"
            >
              <div className="eyebrow-tag">
                <Lightbulb size={16} />
                <span>{t('project.archive.header.eyebrow')}</span>
              </div>
              <h1 className="hero-title">{t('project.archive.header.title')}</h1>
              <p className="hero-subtitle">{t('project.archive.header.subtitle')}</p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="filter-container"
            >
              {filters.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="gallery-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.div layout className="bento-grid">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bento-card"
                  >
                    {/* 圖片展示區 */}
                    <div className={`card-image-area ${project.imageClass}`} style={{overflow:'hidden',position:'relative'}}>
                      {/* 榮譽標籤 */}
                      <div className="award-tags-container">
                        {project.awards.map((award, i) => (
                          <div key={i} className="award-tag-sm">
                            {award}
                          </div>
                        ))}
                      </div>
                      {(project as any).image
                        ? <img src={(project as any).image} alt={project.title}
                            loading="lazy"
                            style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',display:'block',zIndex:0}} />
                        : <div className="placeholder-overlay">
                            <span className="placeholder-text">[Insert image: {project.title}]</span>
                          </div>
                      }
                    </div>

                    {/* 卡片資訊區 */}
                    <div className="card-content">
                      <div className="card-header">
                        <div className="project-type">
                          {project.icon}
                          <span>{project.type}</span>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link-btn" aria-label="View Project">
                          <ExternalLink size={18} />
                        </a>
                      </div>

                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-role">{project.role}</div>
                      
                      <p className="project-pitch">{project.pitch}</p>

                      {/* 技能標籤區 */}
                      <div className="skill-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Styles */}
        <style>{`
          :root {
            --bg-color: var(--background);
            --card-bg: var(--card);
            --text-main: var(--text-primary);
            --text-muted: var(--text-tertiary);
            --border-color: var(--border);
            --accent-color: var(--text-primary);
            --accent-hover: var(--text-secondary);
          }

          #project-archive-page {
            background-color: var(--bg-color);
            min-height: 100vh;
            padding-bottom: 120px;
          }

          /* Header Section */
          .archive-header {
            padding: 140px 0 60px;
            text-align: center;
          }

          .header-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .eyebrow-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: var(--surface-muted);
            color: var(--text-secondary);
            border-radius: 100px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 24px;
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
            font-weight: 800;
            color: var(--text-main);
            letter-spacing: -0.02em;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 18px;
            line-height: 1.6;
            color: var(--text-muted);
            margin-bottom: 48px;
          }

          /* Filter Tabs */
          .filter-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 40px;
          }

          .filter-btn {
            padding: 10px 24px;
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 100px;
            font-size: 15px;
            font-weight: 600;
            color: var(--text-muted);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .filter-btn:hover {
            border-color: var(--border);
            color: var(--text-main);
          }

          .filter-btn.active {
            background: var(--text-main);
            color: var(--background);
            border-color: var(--text-main);
          }

          /* Bento Grid */
          .gallery-section {
            padding: 40px 0;
          }

          .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 32px;
            align-items: stretch;
          }

          .bento-card {
            background: var(--card-bg);
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .bento-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          }

          /* Card Image Area */
          .card-image-area {
            position: relative;
            width: 100%;
            aspect-ratio: 4/3;
            background-color: var(--surface-muted);
            overflow: hidden;
          }

          /* Placeholders for actual images */
          .mock-peanut { background: linear-gradient(135deg, #FDE68A 0%, #D97706 100%); }
          .mock-video { background: linear-gradient(135deg, #93C5FD 0%, #2563EB 100%); }
          .mock-psu { background: linear-gradient(135deg, #A7F3D0 0%, #059669 100%); }

          .placeholder-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(4px);
          }

          .placeholder-text {
            background: rgba(0,0,0,0.6);
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 500;
          }

          .award-tags-container {
            position: absolute;
            top: 16px;
            left: 16px;
            right: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            z-index: 10;
          }

          .award-tag-sm {
            background: var(--card-glass);
            backdrop-filter: blur(8px);
            color: var(--text-primary);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          /* Card Content Area */
          .card-content {
            padding: 32px 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }

          .project-type {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            font-size: 14px;
            font-weight: 600;
          }

          .external-link-btn {
            color: var(--text-muted);
            transition: color 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--surface-muted);
          }

          .external-link-btn:hover {
            color: var(--text-main);
            background: var(--surface-muted);
          }

          .project-title {
            font-size: 24px;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 8px;
          }

          .project-role {
            font-size: 14px;
            font-weight: 600;
            color: #8B5CF6; /* Elegant purple accent */
            margin-bottom: 16px;
          }

          .project-pitch {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-muted);
            margin-bottom: 24px;
            flex-grow: 1;
          }

          /* Skill Tags */
          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: auto;
          }

          .skill-tag {
            padding: 4px 12px;
            background: var(--surface-muted);
            color: var(--text-secondary);
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .archive-header { padding: 100px 0 40px; }
            .bento-grid { grid-template-columns: 1fr; }
            .hero-title { font-size: 32px; }
          }
        `}</style>
      </div>
      
      {/* Back to top button */}

      <button
        onClick={() => window.history.back()}
        aria-label="Go back"
        style={{
          position: 'fixed', top: '76px', left: '24px',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'color-mix(in srgb, var(--background) 95%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(12,12,12,0.25)',
          color: 'var(--text-primary)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', lineHeight: 1,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 90,
          transition: 'background .2s, box-shadow .2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'var(--background)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'color-mix(in srgb, var(--background) 95%, transparent)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >←</button>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#111827', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}