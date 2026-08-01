import { useState, useEffect, type CSSProperties } from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const getSteps = (t: (key: string) => string) => [
  {
    num: '01',
    title: t('howIBuilt.design.title'),
    subtitle: t('howIBuilt.design.subtitle'),
    body: t('howIBuilt.design.body'),
    tags: [t('howIBuilt.design.tag1'), t('howIBuilt.design.tag2'), t('howIBuilt.design.tag3')],
  },
  {
    num: '02',
    title: t('howIBuilt.stack.title'),
    subtitle: t('howIBuilt.stack.subtitle'),
    body: t('howIBuilt.stack.body'),
    tags: [t('howIBuilt.stack.tag1'), t('howIBuilt.stack.tag2'), t('howIBuilt.stack.tag3'), t('howIBuilt.stack.tag4')],
  },
  {
    num: '03',
    title: t('howIBuilt.ai.title'),
    subtitle: t('howIBuilt.ai.subtitle'),
    body: t('howIBuilt.ai.body'),
    tags: [t('howIBuilt.ai.tag1'), t('howIBuilt.ai.tag2'), t('howIBuilt.ai.tag3')],
  },
  {
    num: '04',
    title: t('howIBuilt.deploy.title'),
    subtitle: t('howIBuilt.deploy.subtitle'),
    body: t('howIBuilt.deploy.body'),
    tags: [t('howIBuilt.deploy.tag1'), t('howIBuilt.deploy.tag2'), t('howIBuilt.deploy.tag3')],
  },
];

export default function HowIBuiltThis() {
  const { t } = useLanguage();
  const steps = getSteps(t);
  const [showTop, setShowTop] = useState(false);

  useRevealOnScroll();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--background)' }}>

        {/* Page header */}
        <div className="reveal" style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: '48px clamp(16px,2.2vw,32px) 32px',
          borderBottom: '2px solid var(--border-strong)',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(40px, 7vw, 88px)',
            lineHeight: .9, letterSpacing: '-.04em',
            textTransform: 'uppercase', margin: '0 0 20px',
          }}>{t('howIBuilt.title1')}{' '}
            <em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .12em' }}>{t('howIBuilt.title2')}</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px', letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--text-tertiary)', margin: 0,
          }}>{t('howIBuilt.meta')}</p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,2.2vw,32px) 96px' }}>
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{
              '--reveal-delay': `${i * 80}ms`,
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '40px',
              padding: '48px 0',
              borderBottom: '1px solid var(--border)',
              alignItems: 'start',
            } as CSSProperties}>
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500, fontSize: '56px',
                lineHeight: 1, letterSpacing: '-.04em',
                color: 'rgba(12,12,12,.15)',
              }}>{step.num}</div>

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)',
                  letterSpacing: '-.02em', textTransform: 'uppercase',
                  margin: '0 0 6px',
                }}>{step.title}</h2>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px', letterSpacing: '.1em',
                  textTransform: 'uppercase', color: 'var(--text-tertiary)',
                  margin: '0 0 16px',
                }}>{step.subtitle}</p>
                <p style={{
                  fontSize: '16px', lineHeight: 1.7,
                  color: 'var(--text-primary)', margin: '0 0 20px',
                  maxWidth: '60ch',
                }}>{step.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {step.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px', letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      padding: '5px 10px',
                      border: '1px solid var(--border-strong)',
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
            fontFamily: 'var(--font-mono)',
            fontSize: '12px', letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--text-tertiary)',
          }}>{t('howIBuilt.sourceNote')}{' '}
            <a
              href="https://github.com/YUN-ROU-CHANG/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-strong)', textDecoration: 'none' }}
            >{t('howIBuilt.githubLink')}</a>
          </div>
        </div>

        {/* Back to Top */}

      <button
        onClick={() => window.history.back()}
        aria-label="Go back"
        style={{
          position: 'fixed', top: '76px', left: '24px',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'color-mix(in srgb, var(--background) 95%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1.5px solid color-mix(in srgb, var(--text-primary) 25%, transparent)',
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

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: '32px', right: '32px',
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--surface-inverse)', color: 'var(--accent-on-inverse)', border: 'none',
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
