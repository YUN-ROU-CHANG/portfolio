import { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Download, Linkedin, Github, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

// Types
type Experience = {
  id: string; year: string; title: string; company: string; period: string; description: string[]; badges: string[];
};

// Data
const resumeData = {
  lastUpdated: '2025-11-19',
  contact: { email: 'yuu07798@gmail.com', linkedin: 'https://www.linkedin.com/in/rose-chang0708', github: 'https://github.com' },
  experience: [
    { 
      id: 'exp-1',
      year: '2025 Sep',
      title: 'Part-Time Project Assistant',
      company: 'NTUT; Center for Bilingual Learning', 
      period: 'Sep 2025 – Present',
      description: [
        'Assisted the Center for Bilingual Learning at NTUT with social media management across Facebook, LINE, and the center’s website.',
        'Supported the execution of workshops, including venue setup, assisting international instructors, and coordinating students.',
        'Handled administrative tasks related to the Center for Bilingual Learning.',
      ],
      badges: ['Social Media Management', 'Event Coordination', 'Document Handling and File Management', 'Administrative Support', 'Canva'] 
    },
    { 
      id: 'exp-2',
      year: '2024 Sep',
      title: 'Research Assistant',
      company: 'NTUT', 
      period: 'Sep 2024 – Jul 2025',
      description: [
        'Assisted Prof. Chien-Wen Cheng in executing project-related tasks.',
        'Prepared funding applications for the Teaching Practice Research Program.',
        'Contributed to writing the 2025 Teaching Practice Research Proposal.',
        'Developed the project findings into a conference paper and submitted it to SSIM 2025, titled “Artificial Intelligence-Assisted Music and Interactive Design for University Students: Exploring Needs and Skill-Based Variations in Music Creation Experience.”',
        'Provided administrative support for project documentation and coordination.',
      ],
      badges: ['Research Report and Academic Paper Writing', 'Research Proposal Development and Project Execution', 'Statistical Software Proficiency', 'Qualitative Interview Techniques'] 
    },
    { 
      id: 'exp-3',
      year: '2024 Mar',
      title: 'Marketing Intern',
      company: 'KDAN｜ADNEX', 
      period: 'Mar 2024 – Nov 2024',
      description: [
        'Communicated with over 110 Key Option Leaders (KOL).',
        'Created over 15 promotional posts for Instagram and Facebook accounts.',
        'Increased official account followers by over 750.',
        'Analyzed monthly influencer data and submitted 15 reports for client and manager review.',
        'Trained 10 marketing staff on AI advertising picture generation.',
        'Designed over 5 website graphics of company product.'
      ],
      badges: ['Social Media Management', 'Ad Campaign Planning & Copywriting', 'Creative Advertising Ideation', 'Cross-Industry Partnership Planning', 'Brand Awareness Promotion', 'Market Research Planning & Execution']
    },
    { 
      id: 'exp-4',
      year: '2022 Jul',
      title: 'Corporate Training Project Intern',
      company: 'Meng Ya Management Consulting Co., Ltd.',
      period: 'Jul 2022 – Sep 2022',
      description: [
        'Served as the PM (project partner) for three companies, responsible for coordinating client requirements and acting as a bridge between the company and instructors; supported the preparation of over 17 corporate training sessions.',
        'Worked as a teaching assistant for corporate training programs, identifying clients’ potential needs during sessions and supporting client development and relationship maintenance.',
        'Assisted the sales team with pre-training preparations, including coordination between instructors and corporate clients, as well as handling related administrative tasks.',
        'Executed on-site corporate training services and supported post-training wrap-up and project closure.',
      ],
      badges: ['Advertising Sales Skills', 'Customer Relationship Management (CRM)', 'Client Data Updating and Maintenance', 'Document Processing and Layout Design','Data Entry and Document Filing','Administrative Support'] 
    },
    { 
      id: 'exp-5',
      year: '2022 Jan',
      title: 'Part-time worker',
      company: 'Won-Lai-Won Enterprise Group', 
      period: 'Jan 2022 – Feb 2022',
      description: [
        'Responsible for product photography, background removal, photo editing, and uploading product listings.',
        'Assisted in writing product descriptions and promotional copy.',
        'Assisted with document filing and record management for the company.',
      ],
      badges: ['Product Photography', 'Product Background Removal', 'Advertising Campaign Planning and Copywriting', 'Document Processing and Layout Design','Data Entry and Document Filing','Photoshop','Illustrator'] 
    },
  ],
  skills: [
    { category: 'Tools', items: ['Figma', 'Maze', 'Photoshop', 'Illustrator', 'Premiere', 'DaVinci Resolve', 'Google Analytics', 'Canva', 'SketchUp'] },
    { category: 'Programming Languages', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Methods', items: ['Prototyping', 'User Research', 'Usability Testing', 'Design Thinking', 'Wireframing', 'Design systems'] }
  ],
  education: [
    { degree: 'Master of Interaction Design', institution: 'National Taipei University of Technology', year: '2024 - Present', description: 'Specialized in Human-Computer Interaction and Interactive Design. Thesis: "Bedtime Procrastination"' },
    { degree: 'Bechelar of Culture Creativity and Digital Marketing', institution: 'National United University', year: '2020 - 2024', description: 'Focus on package design, digital design, typography, and user experience fundamentals.' }
  ],
  certifications: [
    { name: 'Information Technology Specialist - Python', issuer: 'Certiport - A Pearson VUE Business', year: '2023 Jan' },
  ]
};

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

export default function Resume() {
  return (
    <Layout>
      <div id="resume-page">
        <section className="section header-section">
          <div className="container">
            <div className="resume-header-content">
              <div>
                <h1 className="name">Resume</h1>
                <p className="body muted">Last updated: {resumeData.lastUpdated}</p>
              </div>
              <div className="resume-actions">
                <Button className="btn-pill interactive-button-base btn--primary" asChild>
                  <a href="/Resume_250808.pdf" download><Download size={18} /> Download PDF</a>
                </Button>
                {resumeData.contact.linkedin && (
                  <Button variant="outline" className="btn-pill interactive-button-base" asChild>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <Separator className="container-sep" />

        {/* PDF Embed Section */}
        <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-10)' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div className="resume-pdf-container">
              <object
                data="/Resume_250808.pdf#view=FitH"
                type="application/pdf"
                className="resume-pdf-object"
                aria-label="Resume PDF viewer"
              >
                {/* Fallback: Image + Download Button */}
                <div className="resume-pdf-fallback">
                  <div style={{ 
                    padding: 'var(--space-10)', 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--space-6)'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'linear-gradient(135deg, hsl(var(--g1)/.12), hsl(var(--g3)/.12))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Download size={40} style={{ color: 'hsl(var(--g1))' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-2)', color: 'var(--md-on-surface)' }}>
                        PDF Viewer Not Available
                      </h3>
                      <p className="body muted" style={{ maxWidth: '400px', margin: '0 auto var(--space-4)' }}>
                        Your browser doesn't support embedded PDFs. Please download the file to view it.
                      </p>
                    </div>
                    <Button 
                      className="interactive-button-base btn--primary"
                      style={{ 
                        gap: 'var(--space-2)',
                        padding: 'var(--space-3) var(--space-5)',
                        background: 'var(--md-primary)',
                        color: 'var(--md-on-primary)',
                        border: 'none'
                      }}
                      asChild
                    >
                      <a href="/Resume_250808.pdf" download>
                        <Download size={18} />
                        Download Resume PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </object>
              <p className="body muted" style={{ 
                textAlign: 'center', 
                marginTop: 'var(--space-4)'
              }}>
                Can't view the PDF? <a 
                  href="/Resume_250808.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'hsl(var(--g1))', textDecoration: 'underline' }}
                >
                  Open in new window
                </a>
              </p>
            </div>
          </div>
        </section>
        
        {/* Experience Timeline */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-head">Experience</h2>
              <p className="body muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                A chronological overview of my professional journey in Marketing and design.
              </p>
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
            <div style={{ marginBottom: 'var(--space-10)' }}>
              <h2 className="section-head" style={{textAlign:'left', display:'flex', alignItems:'center', gap:'12px'}}>
                <Code size={32} color="hsl(var(--g2))"/> Skills
              </h2>
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
                        background: 'linear-gradient(135deg, hsl(var(--g2)/.12), hsl(var(--g3)/.12))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Code size={20} style={{ color: 'hsl(var(--g2))' }} aria-hidden="true" />
                      </div>
                      <CardTitle style={{ 
                        color: 'var(--md-on-surface)',
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
                            background: 'rgba(255, 255, 255, 0.75)',
                            color: 'var(--md-on-surface)',
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
            <div className="education-cert-grid">
              {/* Education */}
              <div>
                 <h2 className="section-head" style={{textAlign:'left', display:'flex', alignItems:'center', gap:'12px'}}>
                   <GraduationCap size={32} color="var(--md-primary)"/> Education
                 </h2>
                 <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                   {resumeData.education.map((edu, index) => (
                     <Card key={index} style={{border:'1px solid rgba(0,0,0,0.06)'}}>
                       <CardHeader style={{padding:'24px'}}>
                         <CardTitle className="exp-title">{edu.degree}</CardTitle>
                         <CardDescription>{edu.institution} · {edu.year}</CardDescription>
                         {edu.description && <p style={{fontSize:'14px', marginTop:'8px', color:'#666'}}>{edu.description}</p>}
                       </CardHeader>
                     </Card>
                   ))}
                 </div>
              </div>

              {/* Certifications */}
              <div>
                 <h2 className="section-head" style={{textAlign:'left', display:'flex', alignItems:'center', gap:'12px'}}>
                   <Award size={32} color="hsl(var(--g3))"/> Certifications
                 </h2>
                 <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                   {resumeData.certifications.map((cert, index) => (
                     <Card key={index} style={{border:'1px solid rgba(0,0,0,0.06)'}}>
                       <CardHeader style={{padding:'24px'}}>
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
      </div>
      
      <style>{`
        .header-section { padding-top: 40px; padding-bottom: 40px; }
        .resume-header-content { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .resume-actions { display: flex; gap: 12px; }
        .container-sep { max-width: 1200px; margin: 0 auto; }
        
        /* Headings (Matches Home H2) */
        .section-head {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: var(--md-primary); /* Blue */
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
          color: var(--md-primary);
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
          background: rgba(91, 140, 255, 0.2);
        }
        .timeline-item:last-child .timeline-line { display: none; }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--md-primary);
          box-shadow: 0 0 0 4px #fff;
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
          box-shadow: 0 8px 24px rgba(91, 140, 255, 0.15);
          border-color: var(--md-primary);
        }

        .resume-card-header { padding: 20px; padding-bottom: 12px; display: flex; gap: 16px; }
        .exp-icon-box {
          width: 40px; height: 40px; border-radius: 8px;
          background: rgba(91, 140, 255, 0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--md-primary);
          flex-shrink: 0;
        }
        .exp-title { font-size: 18px; margin-bottom: 4px; font-weight: 600; }
        .exp-meta { font-size: 14px; color: #666; }
        .resume-card-content { padding: 0 20px 20px 76px; }
        .exp-desc-list { 
          font-size: 15px; 
          line-height: 1.6; 
          margin-bottom: 16px; 
          color: #333;
          padding-left: 24px;
          margin-top: 0;
          list-style-type: disc; /* Circle bullet points */
        }
        .exp-desc-list li {
          margin-bottom: 8px;
          padding-left: 4px;
        }
        .exp-desc-list li::marker {
          color: var(--md-primary); /* Blue color for bullet points */
          font-size: 1.2em;
        }
        .exp-desc-list li:last-child {
          margin-bottom: 0;
        }
        .exp-badge { margin-right: 8px; margin-bottom: 8px; background: rgba(91, 140, 255, 0.08); color: var(--md-primary); }

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
    </Layout>
  );
}