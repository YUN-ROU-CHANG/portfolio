import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const steps = [
  {
    num: '01',
    title: 'Design Direction',
    subtitle: 'index_v2 × brutalist research-notebook',
    body: 'I started from a Claude Design prototype — a brutalist, lab-notebook aesthetic using bone paper (#EEEAE0), chartreuse accent (#FFE699), and IBM Plex Mono for data labels. The design language reflects how I think: systematic, evidence-based, with a bit of personality.',
    tags: ['Claude Design', 'Figma', 'Brutalist UI'],
  },
  {
    num: '02',
    title: 'Tech Stack',
    subtitle: 'React + Vite + React Router',
    body: 'Built with React 18 + TypeScript, bundled with Vite for fast local development. Routing via React Router v6. No UI library — everything is hand-coded inline styles or CSS modules to keep the bundle small.',
    tags: ['React 18', 'TypeScript', 'Vite', 'React Router'],
  },
  {
    num: '03',
    title: 'AI-Assisted Development',
    subtitle: 'Claude Code as pair programmer',
    body: 'I used Claude Code throughout — from generating component scaffolding to debugging CSS layout issues. My workflow: design in Figma → describe the intent to Claude Code → review and refine → iterate. Every prompt was written by me; Claude wrote the code.',
    tags: ['Claude Code', 'Vibe Coding', 'AI Workflow'],
  },
  {
    num: '04',
    title: 'Deployment',
    subtitle: 'GitHub Pages / Vercel',
    body: 'Source code on GitHub. Deployed via Vercel for automatic preview deploys on every push. Custom domain connected. Build time under 30 seconds.',
    tags: ['GitHub', 'Vercel', 'CI/CD'],
  },
];

export default function HowIBuiltThis() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--bone, #EEEAE0)' }}>

        {/* Page header */}
        <div style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: '48px clamp(16px,2.2vw,32px) 32px',
          borderBottom: '2px solid #0C0C0C',
        }}>
          <h1 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(40px, 7vw, 88px)',
            lineHeight: .9, letterSpacing: '-.04em',
            textTransform: 'uppercase', margin: '0 0 20px',
          }}>
            How I Built{' '}
            <em style={{ fontStyle: 'normal', background: '#FFE699', color: '#7A5C00', padding: '0 .12em' }}>
              This.
            </em>
          </h1>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px', letterSpacing: '.1em',
            textTransform: 'uppercase', color: '#6B6A62', margin: 0,
          }}>
            Portfolio v6 · Rose Chang · 2025–2026 · React + Claude Code
          </p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,2.2vw,32px) 96px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '40px',
              padding: '48px 0',
              borderBottom: '1px solid rgba(12,12,12,.12)',
              alignItems: 'start',
            }}>
              {/* Number */}
              <div style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 500, fontSize: '56px',
                lineHeight: 1, letterSpacing: '-.04em',
                color: 'rgba(12,12,12,.15)',
              }}>{step.num}</div>

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)',
                  letterSpacing: '-.02em', textTransform: 'uppercase',
                  margin: '0 0 6px',
                }}>{step.title}</h2>
                <p style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '12px', letterSpacing: '.1em',
                  textTransform: 'uppercase', color: '#6B6A62',
                  margin: '0 0 16px',
                }}>{step.subtitle}</p>
                <p style={{
                  fontSize: '16px', lineHeight: 1.7,
                  color: '#1A1A1A', margin: '0 0 20px',
                  maxWidth: '60ch',
                }}>{step.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {step.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '10px', letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      padding: '5px 10px',
                      border: '1px solid #0C0C0C',
                      borderRadius: '4px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Source code link */}
          <div style={{
            paddingTop: '48px',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px', letterSpacing: '.1em',
            textTransform: 'uppercase', color: '#6B6A62',
          }}>
            Source code available on{' '}
            <a
              href="https://github.com/YUN-ROU-CHANG/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0C0C0C', borderBottom: '1px solid #0C0C0C', textDecoration: 'none' }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Back to Top */}

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

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: '32px', right: '32px',
            width: '48px', height: '48px', borderRadius: '50%',
            background: '#1A1A18', color: '#FFE699', border: 'none',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', lineHeight: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,.18)',
            transition: 'opacity .25s, transform .2s',
            zIndex: 999,
            opacity: showTop ? 1 : 0,
            pointerEvents: showTop ? 'auto' : 'none',
            transform: showTop ? 'translateY(0)' : 'translateY(8px)',
          }}
        >↑</button>

      </div>
    </Layout>
  );
}
