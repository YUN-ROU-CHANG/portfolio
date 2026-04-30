import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/Layout';
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

const projects = [
  {
    id: 1,
    title: 'Good-Rhythm Peanut (好韻花生)',
    category: 'Brand & Visual',
    type: 'Brand Identity & Packaging Campaign',
    role: 'Brand Visual, Web Design | Team of 4',
    pitch: 'Drawing on Hakka Tianchuan Day culture, we developed a youth-oriented rebrand for a long-established Miaoli food producer, elevating local specialty value through innovative packaging and visual identity.',
    awards: ['🥉 Miaoli Rural Youth Innovation Award — Bronze', '🥈 School Project Competition — 2nd Place'],
    tags: ['Brand Identity', 'Packaging', 'Web Design'],
    icon: <Palette size={20} />,
    imageClass: 'mock-peanut',
    image: archiveList[0],
    link: 'https://zany-team-187798.framer.app/Works_%E5%A5%BD%E9%9F%BB%E8%8A%B1%E7%94%9F_%E5%93%81%E7%89%8C%E8%A8%AD%E8%A8%88'
  },
  {
    id: 2,
    title: 'The Birth of Bass Spirit (鱸魚精の誕生)',
    category: 'Competitions',
    type: 'Creative Short-Video Marketing',
    role: 'Concept, Editing, Voice-over | Team of 2',
    pitch: 'Blending the "God created all things" internet meme with product features, we produced a humorous animated short that resonated with fatigued office workers, promoting a sea bass supplement brand.',
    awards: ['🥈 2023 The 8th TSC Marketing Symposium — Silver'],
    tags: ['Video Editing', 'Creative Strategy', 'Marketing'],
    icon: <PlayCircle size={20} />,
    imageClass: 'mock-video',
    image: archiveList[2],
    link: 'https://youtu.be/HPnfosmq2ow'
  },
  {
    id: 3,
    title: 'Financial Literacy App',
    category: 'Workshops',
    type: 'Innovation, Entrepreneurship & Design Thinking Proposal',
    role: 'UI/UX Designer | Cross-national Workshop',
    pitch: 'In the NTUT × PSU (Penn State Univ.) cross-national workshop, we combined Generative AI and Game-based Learning to design an innovative app proposal for improving financial literacy among young people.',
    awards: ['🏆 NTUT x Penn State Univ. Workshop Demo'],
    tags: ['UI/UX', 'GenAI', 'Design Thinking'],
    icon: <Smartphone size={20} />,
    imageClass: 'mock-psu',
    image: archiveList[5],
    link: 'https://docs.google.com/presentation/d/1ltS93B4zAjEJ-EFxTqK02QRNqeqsPv65NTgHELTq1tU/edit?usp=sharing'
  }
];

export default function ProjectArchive() {
  const [showTop, setShowTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // 篩選分類項目
  const filters = ['All', 'Competitions', 'Brand & Visual', 'Workshops'];

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
                <span>Explorations & Archive</span>
              </div>
              <h1 className="hero-title">Selected Works & Experiments</h1>
              <p className="hero-subtitle">
                A collection of award-winning marketing campaigns, brand identity designs, and cross-cultural workshop prototypes that highlight my interdisciplinary approach to problem-solving.
              </p>
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
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                >
                  {filter}
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
            --bg-color: #FAFAFA;
            --card-bg: #FFFFFF;
            --text-main: #111827;
            --text-muted: #6B7280;
            --border-color: #F3F4F6;
            --accent-color: #0F172A;
            --accent-hover: #374151;
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
            background: #F3F4F6;
            color: #4B5563;
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
            border: 1px solid #E5E7EB;
            border-radius: 100px;
            font-size: 15px;
            font-weight: 600;
            color: var(--text-muted);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .filter-btn:hover {
            border-color: #D1D5DB;
            color: var(--text-main);
          }

          .filter-btn.active {
            background: var(--text-main);
            color: white;
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
            background-color: #F1F5F9;
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
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            color: #111827;
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
            background: #F3F4F6;
          }

          .external-link-btn:hover {
            color: var(--text-main);
            background: #E5E7EB;
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
            background: #F3F4F6;
            color: #4B5563;
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
          background: 'rgba(238,234,224,0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(12,12,12,0.25)',
          color: '#0C0C0C', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', lineHeight: 1,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 90,
          transition: 'background .2s, box-shadow .2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = '#EEEAE0';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(238,234,224,0.95)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >←</button>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position:'fixed', bottom:'32px', right:'32px', width:'48px', height:'48px', borderRadius:'50%', background:'#111827', color: '#FFE699', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', lineHeight:1, boxShadow:'0 4px 20px rgba(0,0,0,0.18)', transition:'opacity 0.25s ease, transform 0.2s ease', zIndex:999, opacity:showTop?1:0, pointerEvents:showTop?'auto':'none', transform:showTop?'translateY(0)':'translateY(8px)' }} onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform='translateY(-3px)';}} onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform=showTop?'translateY(0)':'translateY(8px)';}}>↑</button>
    </Layout>
  );
}