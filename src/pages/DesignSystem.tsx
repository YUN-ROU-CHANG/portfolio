import { useState, useEffect, type CSSProperties } from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

/* ─── 資料層 ─────────────────────────────────────
   token 名稱與數值不抽 i18n：它們是程式碼識別字，不是文案。
   數值一律由 getComputedStyle 即時讀取，避免文件與實作漂移。 */

const PRIMITIVES = [
  { group: 'ink', vars: ['--ink', '--ink-2', '--ink-bright'] },
  { group: 'bone', vars: ['--bone', '--bone-2', '--bone-3'] },
  { group: 'acid', vars: ['--acid', '--acid-ink'] },
];

const SEMANTICS = [
  ['--background', '--surface', '--surface-muted', '--surface-inverse'],
  ['--text-primary', '--text-secondary', '--text-tertiary', '--text-on-inverse'],
  ['--border', '--border-strong', '--accent', '--accent-text'],
];

const FLIP_RULES = ['--accent', '--on-accent', '--accent-text', '--accent-on-inverse'];

const SPACE = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-10'];
const RADII = ['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-pill'];

const TYPE_SCALE = [
  { name: 'display', font: 'var(--font-display)', size: 'clamp(3.5rem, 8vw, 6.5rem)', weight: 700, lh: '0.95', ls: '-0.03em' },
  { name: 'h1', font: 'var(--font-display)', size: 'clamp(2.5rem, 5vw, 4rem)', weight: 700, lh: '1.05', ls: '-0.02em' },
  { name: 'h2', font: 'var(--font-display)', size: '2rem', weight: 700, lh: '1.2', ls: '0' },
  { name: 'h3', font: 'var(--font-display)', size: '1.5rem', weight: 700, lh: '1.3', ls: '0' },
  { name: 'body', font: 'var(--font-body)', size: '1.0625rem', weight: 400, lh: '1.7', ls: '0' },
  { name: 'caption', font: 'var(--font-body)', size: '0.8125rem', weight: 400, lh: '1.5', ls: '0' },
  { name: 'meta', font: 'var(--font-mono)', size: '0.75rem', weight: 400, lh: '1.5', ls: '0.08em' },
];

const BUTTON_STATES = ['default', 'hover', 'active', 'focus', 'disabled'] as const;

/* ─── 小元件 ───────────────────────────────────── */

function Rule() {
  return <div style={{ height: 1, background: 'var(--border)', margin: '0' }} />;
}

function SectionHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 10px' }}>{num}</p>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(24px, 3.2vw, 38px)', letterSpacing: '-.02em',
        textTransform: 'uppercase', margin: '0 0 10px', lineHeight: 1.1,
      }}>{title}</h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '68ch' }}>{sub}</p>
    </div>
  );
}

function Mono({ children, dim }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 12,
      color: dim ? 'var(--text-tertiary)' : 'var(--text-primary)',
    }}>{children}</span>
  );
}

/* ─── 主頁面 ───────────────────────────────────── */

export default function DesignSystem() {
  const { t } = useLanguage();
  const [resolved, setResolved] = useState<Record<string, string>>({});
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [showTop, setShowTop] = useState(false);

  useRevealOnScroll();

  // 即時讀取實際生效的 token 值，文件永遠等於實作
  useEffect(() => {
    const read = () => {
      const cs = getComputedStyle(document.documentElement);
      const all = [
        ...PRIMITIVES.flatMap(p => p.vars),
        ...SEMANTICS.flat(),
        ...FLIP_RULES,
        ...SPACE,
        ...RADII,
      ];
      const next: Record<string, string> = {};
      all.forEach(v => { next[v] = cs.getPropertyValue(v).trim(); });
      setResolved(next);
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const bp = width >= 1024 ? 'lg' : width >= 768 ? 'md' : width >= 640 ? 'sm' : 'base';

  const wrap: CSSProperties = { maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,2.2vw,32px)' };
  const section: CSSProperties = { padding: '72px 0' };

  return (
    <Layout>
      <div style={{ paddingTop: 88, minHeight: '100vh', background: 'var(--background)' }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ ...wrap, padding: '48px clamp(16px,2.2vw,32px) 32px', borderBottom: '2px solid var(--border-strong)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(40px, 7vw, 88px)', lineHeight: .9,
            letterSpacing: '-.04em', textTransform: 'uppercase', margin: '0 0 20px',
          }}>{t('designSystem.title1')}{' '}
            <em style={{ fontStyle: 'normal', background: 'var(--accent)', color: 'var(--on-accent)', padding: '0 .12em' }}>{t('designSystem.title2')}</em>
          </h1>
          <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 20px' }}>{t('designSystem.meta')}</p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-primary)', margin: 0, maxWidth: '62ch' }}>{t('designSystem.lede')}</p>
        </div>

        <div style={wrap}>

          {/* ── 01 三層架構 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="01" title={t('designSystem.layers.title')} sub={t('designSystem.layers.sub')} />

            <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 14px' }}>{t('designSystem.layers.l1')}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
              {PRIMITIVES.flatMap(p => p.vars).map(v => (
                <div key={v} style={{ width: 128 }}>
                  <div style={{
                    height: 64, background: `var(${v})`,
                    border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', marginBottom: 8,
                  }} />
                  <div><Mono>{v.replace('--', '')}</Mono></div>
                  <div><Mono dim>{resolved[v] || '…'}</Mono></div>
                </div>
              ))}
            </div>

            <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 14px' }}>{t('designSystem.layers.l2')}</p>
            <div style={{ display: 'grid', gap: 10, marginBottom: 36 }}>
              {SEMANTICS.map((row, i) => (
                <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {row.map(v => (
                    <div key={v} style={{
                      flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: 12,
                      padding: 12, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                    }}>
                      <span style={{
                        width: 32, height: 32, flexShrink: 0,
                        background: `var(${v})`, border: '1px solid var(--border)', borderRadius: 6,
                      }} />
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block' }}><Mono>{v.replace('--', '')}</Mono></span>
                        <span style={{ display: 'block' }}><Mono dim>{resolved[v] || '…'}</Mono></span>
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 10px' }}>{t('designSystem.layers.l3')}</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '68ch' }}>{t('designSystem.layers.l3desc')}</p>
          </section>

          <Rule />

          {/* ── 02 亮暗反轉 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="02" title={t('designSystem.flip.title')} sub={t('designSystem.flip.sub')} />
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr>
                    {[t('designSystem.flip.colToken'), t('designSystem.flip.colNow'), t('designSystem.flip.colRule')].map(h => (
                      <th key={h} className="text-meta-style" style={{
                        textAlign: 'left', padding: '10px 12px',
                        borderBottom: '2px solid var(--border-strong)', color: 'var(--text-tertiary)',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FLIP_RULES.map(v => (
                    <tr key={v}>
                      <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}><Mono>{v.replace('--', '')}</Mono></td>
                      <td style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ width: 20, height: 20, background: `var(${v})`, border: '1px solid var(--border)', borderRadius: 4 }} />
                          <Mono dim>{resolved[v] || '…'}</Mono>
                        </span>
                      </td>
                      <td style={{ padding: '12px', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {t(`designSystem.flip.${v.replace('--', '').replace(/-/g, '')}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 28 }}>
              <div style={{ flex: '1 1 240px', padding: 24, background: 'var(--accent)', borderRadius: 'var(--radius-lg)' }}>
                <p style={{ margin: 0, color: 'var(--on-accent)', fontWeight: 600 }}>{t('designSystem.flip.demoAcid')}</p>
              </div>
              <div style={{ flex: '1 1 240px', padding: 24, background: 'var(--surface-inverse)', borderRadius: 'var(--radius-lg)' }}>
                <p style={{ margin: 0, color: 'var(--accent-on-inverse)', fontWeight: 600 }}>{t('designSystem.flip.demoInverse')}</p>
              </div>
            </div>
          </section>

          <Rule />

          {/* ── 03 尺度 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="03" title={t('designSystem.scale.title')} sub={t('designSystem.scale.sub')} />
            <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div>
                <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 16px' }}>{t('designSystem.scale.spacing')}</p>
                {SPACE.map(v => (
                  <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                    <span style={{ width: 96, flexShrink: 0 }}><Mono>{v.replace('--', '')}</Mono></span>
                    <span style={{ height: 12, width: resolved[v] || 0, background: 'var(--accent)', flexShrink: 0 }} />
                    <Mono dim>{resolved[v] || '…'}</Mono>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 16px' }}>{t('designSystem.scale.radius')}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                  {RADII.map(v => (
                    <div key={v} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 72, height: 72, background: 'var(--surface-muted)',
                        border: '1px solid var(--border)', borderRadius: `var(${v})`, marginBottom: 8,
                      }} />
                      <div><Mono>{v.replace('--radius-', '')}</Mono></div>
                      <div><Mono dim>{resolved[v] || '…'}</Mono></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Rule />

          {/* ── 04 字級 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="04" title={t('designSystem.type.title')} sub={t('designSystem.type.sub')} />
            {TYPE_SCALE.map(ts => (
              <div key={ts.name} style={{
                display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 24,
                alignItems: 'baseline', padding: '18px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  fontFamily: ts.font, fontSize: ts.size, fontWeight: ts.weight,
                  lineHeight: ts.lh, letterSpacing: ts.ls,
                  textTransform: ts.name === 'meta' ? 'uppercase' : 'none',
                  color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{t('designSystem.type.specimen')}</div>
                <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <div><Mono>{ts.name}</Mono></div>
                  <div><Mono dim>{ts.size} / {ts.lh}</Mono></div>
                </div>
              </div>
            ))}
          </section>

          <Rule />

          {/* ── 05 元件狀態 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="05" title={t('designSystem.states.title')} sub={t('designSystem.states.sub')} />
            <div style={{ overflowX: 'auto' }}>
              <div style={{ display: 'flex', gap: 20, minWidth: 640, paddingBottom: 8 }}>
                {BUTTON_STATES.map(state => (
                  <div key={state} style={{ flex: 1, minWidth: 116 }}>
                    <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: '0 0 12px' }}>{state}</p>
                    <button
                      type="button"
                      disabled={state === 'disabled'}
                      style={{
                        width: '100%', padding: '12px 18px', marginBottom: 12,
                        fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                        background: 'var(--text-primary)', color: 'var(--background)',
                        border: '1px solid var(--text-primary)', borderRadius: 'var(--radius-md)',
                        cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
                        opacity: state === 'disabled' ? .4 : 1,
                        transform: state === 'hover' ? 'scale(1.06)' : state === 'active' ? 'scale(0.97)' : 'none',
                        outline: state === 'focus' ? '2px solid var(--accent-text)' : 'none',
                        outlineOffset: 3,
                      }}
                    >{t('designSystem.states.primary')}</button>
                    <button
                      type="button"
                      disabled={state === 'disabled'}
                      style={{
                        width: '100%', padding: '12px 18px',
                        fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                        background: 'transparent', color: 'var(--text-primary)',
                        border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
                        cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
                        opacity: state === 'disabled' ? .4 : 1,
                        transform: state === 'hover' ? 'scale(1.06)' : state === 'active' ? 'scale(0.97)' : 'none',
                        outline: state === 'focus' ? '2px solid var(--accent-text)' : 'none',
                        outlineOffset: 3,
                      }}
                    >{t('designSystem.states.secondary')}</button>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: '24px 0 0', maxWidth: '68ch' }}>{t('designSystem.states.note')}</p>
          </section>

          <Rule />

          {/* ── 06 斷點 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="06" title={t('designSystem.breakpoints.title')} sub={t('designSystem.breakpoints.sub')} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
              {[
                { k: 'base', label: '< 640' },
                { k: 'sm', label: '≥ 640' },
                { k: 'md', label: '≥ 768' },
                { k: 'lg', label: '≥ 1024' },
              ].map(b => (
                <div key={b.k} style={{
                  flex: '1 1 140px', padding: 16,
                  border: `1px solid ${bp === b.k ? 'var(--border-strong)' : 'var(--border)'}`,
                  background: bp === b.k ? 'var(--accent)' : 'transparent',
                  color: bp === b.k ? 'var(--on-accent)' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>{b.k}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: .75 }}>{b.label}px</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '68ch' }}>
              {t('designSystem.breakpoints.live')} <Mono>{width}px → {bp}</Mono>
            </p>
          </section>

          <Rule />

          {/* ── 07 稽核 ── */}
          <section className="reveal" style={section}>
            <SectionHead num="07" title={t('designSystem.audit.title')} sub={t('designSystem.audit.sub')} />
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { n: '45', k: 'dup', tag: 'fixed' },
                { n: '4', k: 'radius', tag: 'fixed' },
                { n: '2', k: 'scales', tag: 'fixed' },
                { n: '120', k: 'legacy', tag: 'open' },
              ].map(item => (
                <div key={item.k} style={{
                  display: 'grid', gridTemplateColumns: '88px 1fr auto', gap: 20,
                  alignItems: 'start', padding: '20px 0', borderTop: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
                    lineHeight: 1, letterSpacing: '-.03em', color: 'var(--accent-text)',
                  }}>{item.n}</div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px', color: 'var(--text-primary)' }}>{t(`designSystem.audit.${item.k}.title`)}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '62ch' }}>{t(`designSystem.audit.${item.k}.desc`)}</p>
                  </div>
                  <span className="text-meta-style" style={{
                    padding: '4px 10px', whiteSpace: 'nowrap',
                    borderRadius: 'var(--radius-pill)',
                    background: item.tag === 'fixed' ? 'var(--accent)' : 'var(--surface-muted)',
                    color: item.tag === 'fixed' ? 'var(--on-accent)' : 'var(--text-secondary)',
                  }}>{t(`designSystem.audit.tag.${item.tag}`)}</span>
                </div>
              ))}
            </div>
          </section>

          <Rule />

          {/* ── 08 Figma ── */}
          <section className="reveal" style={{ ...section, paddingBottom: 96 }}>
            <SectionHead num="08" title={t('designSystem.figma.title')} sub={t('designSystem.figma.sub')} />
            <p className="text-meta-style" style={{ color: 'var(--text-tertiary)', margin: 0 }}>{t('designSystem.figma.status')}</p>
          </section>
        </div>

        {/* Back / Top */}
        <button
          onClick={() => window.history.back()}
          aria-label="Go back"
          style={{
            position: 'fixed', top: 76, left: 24, width: 36, height: 36, borderRadius: '50%',
            background: 'color-mix(in srgb, var(--background) 95%, transparent)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            border: '1.5px solid color-mix(in srgb, var(--text-primary) 25%, transparent)',
            color: 'var(--text-primary)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, lineHeight: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', zIndex: 90,
          }}
        >←</button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: 32, right: 32, width: 48, height: 48, borderRadius: '50%',
            background: 'var(--surface-inverse)', color: 'var(--accent-on-inverse)', border: 'none',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, lineHeight: 1, boxShadow: '0 4px 20px rgba(0,0,0,.18)',
            transition: 'opacity .25s, transform .2s', zIndex: 999,
            opacity: showTop ? 1 : 0,
            pointerEvents: showTop ? 'auto' : 'none',
            transform: showTop ? 'translateY(0)' : 'translateY(8px)',
          }}
        >↑</button>
      </div>
    </Layout>
  );
}
