import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const photoModules = import.meta.glob(
  '../assets/images/photography/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true, import: 'default' }
);
const photoSrcs = Object.values(photoModules) as string[];

// Glob sorts alphabetically:
// [0] cat1.png  [1] cat2.png  [2] cat3.png  [3] house.JPG
// [4] marry.png [5] sea.JPG   [6] train-station.JPG  [7] wood.JPG
const photos = [
  { src: photoSrcs[5], alt: 'Sea', caption: 'Somewhere by the sea' },
  { src: photoSrcs[0], alt: 'Cat sleeping', caption: '' },
  { src: photoSrcs[1], alt: 'Cat in flowers', caption: '' },
  { src: photoSrcs[6], alt: 'Train station', caption: 'Train station, Taiwan' },
  { src: photoSrcs[3], alt: 'House and sky', caption: '' },
  { src: photoSrcs[2], alt: 'Cat in garden', caption: '' },
  { src: photoSrcs[7], alt: 'Wood texture', caption: '' },
  { src: photoSrcs[4], alt: 'Exhibition', caption: '' },
];

export default function Photography() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % photos.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox]);

  return (
    <Layout>
      <div style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--bone, #EEEAE0)' }}>

        {/* Page header */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px clamp(16px, 2.2vw, 32px) 32px' }}>
          <h1 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 500, fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: .9, letterSpacing: '-.04em',
            textTransform: 'uppercase', margin: '0 0 16px',
            color: '#0C0C0C',
          }}>
            Photography
          </h1>
          <p style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '12px', letterSpacing: '.1em',
            textTransform: 'uppercase', color: '#6B6A62',
            margin: 0,
          }}>
            35mm · Taiwan · 2023–2025 · {photos.length} frames
          </p>
          <div style={{ borderBottom: '2px solid #0C0C0C', marginTop: '24px' }} />
        </div>

        {/* Masonry Grid (CSS columns) */}
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 2.2vw, 32px) 96px' }}>
          <div style={{ columns: '3', columnGap: '16px' }} className="masonry-grid">
            {photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '16px',
                  cursor: 'zoom-in',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(12,12,12,.12)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    width: '100%', height: 'auto',
                    display: 'block',
                    filter: 'grayscale(8%) contrast(1.04)',
                    transition: 'transform .6s cubic-bezier(.2,.8,.2,1), filter .4s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)';
                    (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%) contrast(1.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(8%) contrast(1.04)';
                  }}
                />
                {photo.caption && (
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '32px 12px 10px',
                    background: 'linear-gradient(to top, rgba(0,0,0,.55), transparent)',
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '10px', letterSpacing: '.1em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,.85)',
                  }}>
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Masonry responsive */}
        <style>{`
          @media (max-width: 960px) { .masonry-grid { columns: 2 !important; } }
          @media (max-width: 560px) { .masonry-grid { columns: 1 !important; } }
        `}</style>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,.92)',
              zIndex: 1000, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              padding: '24px', cursor: 'zoom-out',
            }}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '90vw', maxHeight: '88vh',
                objectFit: 'contain',
                filter: 'grayscale(0%) contrast(1.05)',
              }}
            />

            {/* Prev arrow */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null); }}
              aria-label="Previous photo"
              style={{
                position: 'fixed', left: '24px', top: '50%', transform: 'translateY(-50%)',
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: 'white', fontSize: '20px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >‹</button>

            {/* Next arrow */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i + 1) % photos.length : null); }}
              aria-label="Next photo"
              style={{
                position: 'fixed', right: '24px', top: '50%', transform: 'translateY(-50%)',
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: 'white', fontSize: '20px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >›</button>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{
                position: 'fixed', top: '24px', right: '24px',
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: 'white', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >✕</button>

            {/* Counter */}
            <div style={{
              position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '11px', letterSpacing: '.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,.5)',
            }}>
              {lightbox + 1} / {photos.length}
            </div>
          </div>
        )}

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
