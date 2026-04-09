// System Guidelines — Yun‑Rou Chang Portfolio (Plain Text, with Comments)
// Scope: Navbar, Inputs, Lists, Buttons, Radios, Checkboxes, Tabs, Modal
// Goal: Keep the current visual style (glassmorphism + gradients) while enforcing
//       semantic HTML, accessibility, maintainability, and consistent behavior.
//
// How to use this file:
// - These are rules, not suggestions. Keep it concise when prompting AI or writing code.
// - Copy/paste the code snippets directly. Tokens are centralized so colors/spacing/fonts
//   can be changed without hunting through components.

# 0) Quick Start (3 Steps)
// 1) Paste tokens: Add §1 Design Tokens and §15 Material roles into the global :root.
// 2) Apply base CSS and JS: Use §9 Minimum CSS and §10 Behavior Skeleton. Update your React
//    effects per §13 Project Patches (mouse follower, parallax, tilt, reveal).
// 3) Align structure: Verify classes/semantics via §12 Mapping (Navbar, Tabs, Modal, Timeline).

# 1) Design Tokens (Project + Glassmorphism + Layout)
// Purpose: centralize visual variables. Functional roles (primary/surface/error) live in §15.
CSS:
:root {
  /* — Colors (project-wide) — */
  --color-bg: #0e0f13;                 /* deep background (optional) */
  --color-surface: #16181f;            /* dark card surface (optional) */
  --color-primary: #5b8cff;            /* legacy brand primary (project use) */
  --color-primary-contrast: #ffffff;
  --color-text: #e6e9ef;
  --color-text-muted: #a7afc0;
  --color-border: #2a2f3a;
  --color-success: #22c55e;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;

  /* — Glassmorphism (decorative) — */
  --glass-bg: rgba(255, 255, 255, 0.06);
  --glass-border: 1px solid rgba(255, 255, 255, 0.12);
  --glass-blur: 10px;

  /* — Brand HSL accents (for blob/gframe/SVG gradients) — */
  --g1: 220 90% 66%;  /* blue */
  --g2: 200 85% 60%;  /* teal-blue */
  --g3: 260 80% 70%;  /* purple */
  --g4: 330 85% 70%;  /* magenta */
  --focus: hsl(var(--g4)/.55);

  /* — Spacing (8/4 scale) — */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;  --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px;  --space-10: 40px;

  /* — Radius & Shadow — */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;
  --shadow-1: 0 4px 12px rgba(0,0,0,0.25);

  /* — Typography — */
  --font-size-sm: 12px; --font-size: 14px; --font-size-lg: 16px; --font-size-xl: 20px;
  --line-height: 1.5;
}

NOTE:
- §15 adds Material role tokens (--md-*) used for functional color roles (primary/surface/error).
- Keep --g1..--g4 for decorative gradients, not for functional roles.

# 2) Global Structure & Accessibility
// Container and baseline accessibility. Respect user motion preferences.
Rules:
- Container: .container { max-width: 1200px; padding-inline: var(--space-4); margin: 0 auto; }
- Focus visible: :where(a,button,[role="button"]):focus-visible { outline:3px solid var(--focus); outline-offset:3px; }
- Touch target: minimum 40×40 px.
- RTL: prefer logical properties (margin-inline-start) over left/right.
- Reduced Motion: disable parallax/tilt/reveal when prefers-reduced-motion: reduce.
- Skip Link: Place <a class="skip-link" href="#about">Skip to content</a> at the root/top.

# 3) Naming Conventions
// BEM or functional naming is OK — be consistent.
// Existing project anchors: .gframe (gradient frame), .card (glass card), .tile (tilt target), .reveal (in-view).
// State classes: is-active, is-disabled, is-invalid, .reveal.in, .t-item.revealed.

# 4) Components

## 4.1 Navbar
Structure (semantic, accessible):
<header class="nav" role="banner">
  <div class="container nav-row">
    <div class="nav-brand">Yun-Rou Chang</div>
    <nav class="nav-links" aria-label="Primary">
      <a href="#about">About</a>
      <a href="#project">Projects</a>
      <a href="#bento">Besides Work</a>
      <a href="#resume">Resume</a>
    </nav>
    <a class="btn-pill interactive-button-base nav-cta" href="#contact">Contact <span class="dot">→</span></a>
  </div>
</header>
Rules:
- One primary nav per page.
- All links must have visible :focus-visible.
- Mobile collapsible menus must toggle aria-expanded and point to a controlled menu element.

## 4.2 Text Inputs / Textarea
HTML:
<div class="c-field">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" placeholder="name@example.com" required aria-describedby="email-hint email-error">
  <p id="email-hint" class="c-field__hint">We never share your email.</p>
  <p id="email-error" class="c-field__error" hidden>Invalid email.</p>
</div>
Rules:
- Label must be visible and bound by for/id.
- On error, set aria-invalid="true" and show error text — never color only.
- Placeholder is not a label.

## 4.3 Buttons
Base & variants:
- Base: .interactive-button-base
- Visual variants: .btn-pill, .contact-pill, .contact-pill-lg
- Functional variants (Material roles; see §15.E): .btn--primary, .btn--secondary, .btn--ghost, .btn--danger
Rules:
- type="submit" only for form submission; otherwise type="button".
- One primary action per section.
- Icon-only buttons must have aria-label.

## 4.4 Radio / 4.5 Checkbox
- Group related controls with <fieldset><legend>.
- Custom styling must keep the native <input> in the DOM (opacity:0/visually hidden) to preserve accessibility.

## 4.6 Lists
- Use ul/ol/li or dl/dt/dd as appropriate.
- Clickable rows should wrap content in <a> or <button> — do not simulate clicks on <li> via JS.

## 4.7 Tabs (WAI-ARIA)
HTML:
<div class="c-tabs" role="tablist" aria-label="Content switcher">
  <button role="tab" aria-selected="true" aria-controls="tab-1" id="tab-btn-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="tab-2" id="tab-btn-2">Tab 2</button>
</div>
<section id="tab-1" role="tabpanel" tabindex="0" aria-labelledby="tab-btn-1">...</section>
<section id="tab-2" role="tabpanel" tabindex="0" aria-labelledby="tab-btn-2" hidden>...</section>
Keyboard:
- Left/Right to move, Home/End to jump; only the selected tab has tabindex=0.

## 4.8 Modal / Dialog
HTML:
<div class="c-modal" role="dialog" aria-modal="true" aria-labelledby="m-title" aria-describedby="m-desc" hidden>
  <div class="c-modal__surface" role="document">
    <h2 id="m-title">Title</h2>
    <p id="m-desc">Description</p>
    <div class="c-modal__footer">
      <button class="c-button c-button--secondary" data-dismiss>Cancel</button>
      <button class="c-button c-button--primary">Confirm</button>
    </div>
  </div>
</div>
Behavior:
- Focus trap while open; Esc to close; lock body scroll; restore on close.

# 5) Forms & Validation
- Show field-level messages on blur; show a form-level error summary on submit (with anchor links).
HTML (summary):
<div class="c-error-summary" role="alert" aria-live="assertive">
  <p>Please fix the following fields:</p>
  <ul>
    <li><a href="#email">Email is invalid</a></li>
  </ul>
</div>

# 6) Status & Feedback
- Loading: show spinner + aria-busy="true" + disabled.
- Success: role="status"; Error: role="alert" (never color only).

# 7) Performance & Quality
- Correct image sizes; non-critical images use loading="lazy".
- Load JS only when needed; delegate events; remove listeners on unmount.
- Lighthouse/AXE Accessibility ≥ 90; clean ESLint (if used).

# 8) Do / Don’t (Quick Reference)
Do:
- Use semantic elements; ensure keyboard operability and visible focus.
- Manage color/spacing via tokens; keep a linear Tab order.
Don’t:
- Use <div> to mimic button/link.
- Convey information with color only.
- Place multiple Primary actions in one area.

# 9) Minimum CSS Baseline (Drop-in)
// NOTE: These are baseline styles that align with accessibility and the project’s look.
// Customize tokens instead of editing these rules whenever possible.
CSS:
.c-button {
  display:inline-flex; align-items:center; justify-content:center;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface); color: var(--color-text);
}
.c-button--primary { background: var(--color-primary); color: var(--color-primary-contrast); }
.c-button[disabled], .c-button.is-disabled { opacity:.5; cursor:not-allowed; }
.c-button:focus-visible { outline:2px solid var(--color-primary); outline-offset:2px; }

.c-field label { display:block; margin-bottom: var(--space-2); }
.c-field input, .c-field textarea {
  width:100%; padding: var(--space-3) var(--space-4);
  background: var(--glass-bg); backdrop-filter: blur(var(--glass-blur));
  border: var(--glass-border); border-radius: var(--radius-md);
  color: var(--color-text);
}
.c-field [aria-invalid="true"], .c-field input:invalid { border-color: var(--color-danger); }
.c-field__error { color: var(--color-danger); margin-top: var(--space-2); }

.c-navbar { position: sticky; top:0; display:flex; gap:var(--space-4); align-items:center;
  padding: var(--space-3) var(--space-4); background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)); border-bottom: var(--glass-border); }
.c-navbar__menu { display:flex; gap: var(--space-4); list-style:none; margin:0; padding:0; }
.c-navbar__toggle { display:none; }
@media (max-width: 768px){
  .c-navbar__toggle { display:inline-flex; }
  .c-navbar__menu[hidden] { display:none; }
  .c-navbar__menu { flex-direction: column; }
}

.c-tabs [role="tab"] { padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm); }
.c-tabs [role="tab"][aria-selected="true"] { background: var(--color-surface); }
[role="tabpanel"][hidden]{ display:none; }

.c-modal { position:fixed; inset:0; display:grid; place-items:center; background: rgba(0,0,0,.5); }
.c-modal[hidden]{ display:none; }
.c-modal__surface{ background: var(--glass-bg); backdrop-filter: blur(var(--glass-blur));
  border: var(--glass-border); border-radius: var(--radius-lg); padding: var(--space-6);
  box-shadow: var(--shadow-1); max-width: 520px; width: min(92vw, 520px); }

/* Skip Link */
.skip-link { position:absolute; left:-9999px; top:auto; background:#fff; color:#000; padding:8px 12px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.12); }
.skip-link:focus { left:16px; top:12px; z-index:9999; }

# 10) Behavior Skeleton (Tabs / Modal + Motion Guard)
// JS-only skeleton for vanilla usage. In React, adapt to useEffect and refs.
JS:
/* Tabs */
const tablist = document.querySelector('[role="tablist"]');
if (tablist) {
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
  function activate(i){
    tabs.forEach((t,idx)=>{
      const sel = idx===i; t.setAttribute('aria-selected', sel);
      t.tabIndex = sel ? 0 : -1; panels[idx].hidden = !sel;
    });
    tabs[i].focus();
  }
  tablist.addEventListener('keydown', e=>{
    const i = tabs.findIndex(t=>t===document.activeElement);
    if (['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) e.preventDefault();
    if (e.key==='ArrowRight') activate((i+1)%tabs.length);
    if (e.key==='ArrowLeft') activate((i-1+tabs.length)%tabs.length);
    if (e.key==='Home') activate(0);
    if (e.key==='End') activate(tabs.length-1);
  });
  tabs.forEach((t,i)=> t.addEventListener('click', ()=>activate(i)));
}

/* Modal */
function openModal(id){
  const m = document.getElementById(id); if(!m) return;
  m.hidden = false; document.body.style.overflow='hidden';
  const focusable = m.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  focusable?.focus();
  function onKey(e){ if(e.key==='Escape') closeModal(id); }
  m.dataset.listener='1'; document.addEventListener('keydown', onKey);
}
function closeModal(id){
  const m = document.getElementById(id); if(!m) return;
  m.hidden = true; document.body.style.overflow='';
  document.removeEventListener('keydown', onKey);
}

/* Motion Guard */
const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
if (rm.matches) {
  // Skip initializing parallax/tilt/reveal here
}

# 11) QA Checklist (General)
// Use this before shipping a view/feature.
- [ ] Mouse, keyboard, and touch can complete key flows.
- [ ] Tab order is logical; visible focus is clear.
- [ ] All interactive elements have names (visible or via aria-label).
- [ ] Error messages are announced (role="alert"/aria-live).
- [ ] Layout works at 320px and ≥1200px.
- [ ] Lighthouse Accessibility score ≥ 90.

# 12) Project Mapping (Existing Classes → This Guide)
// Aligns your current codebase with these conventions.
Navbar: header.nav → banner; .nav-links → <nav aria-label="Primary">; .nav-cta.btn-pill.interactive-button-base → CTA.
Buttons: .interactive-button-base (base), .btn-pill/.contact-pill(.contact-pill-lg) (visual). Add .btn--primary/secondary/ghost/danger for role coloring.
Surfaces: .gframe (gradient frame), .card + .pad (glass card).
Layout: #hero .hero-grid (hero; heroRef), #bento .row-3 (bento; bentoRef), #project .project-grid (projects; projectRef).
Motion: .reveal (in-view), .tile (tilt), .blob (mouse follower).
Resume PDF: #resume object[type="application/pdf"] (embedded viewer with “open in new window” fallback).
Timeline: .timeline → prefer <ol role="list">; .t-item → <li>; .t-dot → decorative (aria-hidden="true").

# 13) Project Patches (React/JS/CSS)

// 13.1 Mouse follower (cleanup + Reduced Motion)
React (useEffect):
const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
if (rm.matches) return;
let tx = 0, ty = 0, x = 0, y = 0, rafId = 0;
const handleMouseMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
const animate = () => { x += (tx - x) * 0.12; y += (ty - y) * 0.12; setMousePosition({ x, y }); rafId = requestAnimationFrame(animate); };
window.addEventListener('mousemove', handleMouseMove, { passive: true });
rafId = requestAnimationFrame(animate);
return () => { window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(rafId); };

// 13.2 Parallax (Reduced Motion guard) & Reveal
Parallax useEffect: add Reduced Motion guard and requestAnimationFrame throttling.
Reveal useEffect: add Reduced Motion guard and IntersectionObserver; toggle .in and .revealed classes.

// 13.3 3D Tilt (proper cleanup + pointer events)
React (useEffect):
const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
if (rm.matches) return;
const tiles = tileRefs.current.filter(Boolean);
const TILT = { perspective: '900px', maxX: 10, maxY: 12 };
const handlers = new Map();
tiles.forEach((tile) => {
  const onMove = (e: PointerEvent) => {
    const r = tile.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * TILT.maxY;
    const rx = (0.5 - py) * TILT.maxX;
    tile.style.transform = `perspective(${TILT.perspective}) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => { tile.style.transform = `perspective(${TILT.perspective}) rotateX(0) rotateY(0)`; };
  tile.addEventListener('pointermove', onMove);
  tile.addEventListener('pointerleave', onLeave);
  handlers.set(tile, { move: onMove, leave: onLeave });
});
return () => { handlers.forEach((h, tile) => {
  tile.removeEventListener('pointermove', h.move);
  tile.removeEventListener('pointerleave', h.leave);
}); };

// 13.4 Timeline semantics (Awards) — switch to <ol>/<li>/<time>
HTML:
<ol class="timeline" role="list">
  <li class="t-item reveal">
    <span class="t-dot" aria-hidden="true"></span>
    <div class="gframe">
      <div class="card pad">
        <div class="body muted"><time dateTime="2024">2024</time> · ABC Awards</div>
        <div style="font-weight:600; margin-top:6px;">Best Interaction Design</div>
        <p class="body muted" style="margin-top:6px;">Short description of the work and outcome.</p>
      </div>
    </div>
  </li>
</ol>

// 13.5 Misc
- Remove unused imports: ArrowRight, Linkedin, Mail.
- Avoid spaces in filenames: "Times Young Creative Awards.png" → "times-young-creative-awards.png".

# 14) Project-Specific QA Add-on
- [ ] --g1..--g4 defined; blob/gframe/SVG gradients render correctly.
- [ ] Parallax/Tilt/Reveal disabled under Reduced Motion.
- [ ] Tilt listeners removed on unmount (no sustained memory growth).
- [ ] Skip link focuses and jumps to #about.
- [ ] Awards years use <time>; .t-dot is decorative (aria-hidden="true").

# 15) Material Design (M2) Alignment — add-on
// Integrate Material roles without removing the current visual flavor.
// Use roles for function; keep gradients for decoration.

A) Role Tokens (Functional Colors)
CSS:
:root{
  --md-primary:#5B8CFF;    --md-on-primary:#ffffff;
  --md-secondary:#00A3A3;  --md-on-secondary:#ffffff;
  --md-surface:#ffffff;    --md-on-surface:#111111;
  --md-background:#F7F9FC; --md-on-background:#111111;
  --md-error:#E53935;      --md-on-error:#ffffff;
}
Usage:
- Primary actions → --md-primary/--md-on-primary
- Secondary actions → --md-secondary/--md-on-secondary
- Content surfaces → --md-surface/--md-on-surface
- Page background → --md-background/--md-on-background
- Errors → --md-error/--md-on-error

B) Layout & Spacing (8/4 scale + 4/8/12 columns)
CSS:
:root{ --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:20px; --space-6:24px; --space-8:32px; --space-10:40px; }
.container{max-width:1200px; padding-inline:16px; margin:0 auto;}
.grid{display:grid; gap:16px;}
@media (max-width:959px){ .grid.cols-4{grid-template-columns:repeat(4,1fr);} }
@media (min-width:960px){ .grid.cols-12{grid-template-columns:repeat(12,1fr);} }

C) Elevation (Limited Steps)
CSS:
:root{
  --elev-0: none;
  --elev-1: 0 1px 2px rgba(0,0,0,.12), 0 1px 3px rgba(0,0,0,.08);
  --elev-2: 0 2px 6px rgba(0,0,0,.14), 0 1px 3px rgba(0,0,0,.10);
  --elev-3: 0 4px 10px rgba(0,0,0,.16), 0 2px 6px rgba(0,0,0,.10);
  --elev-4: 0 8px 16px rgba(0,0,0,.18), 0 4px 8px rgba(0,0,0,.12);
}
.card{ box-shadow: var(--elev-2); background: var(--md-surface); color: var(--md-on-surface); }
.card--raised{ box-shadow: var(--elev-3); }
.dialog{ box-shadow: var(--elev-4); background: var(--md-surface); }

D) Motion
- Motion explains relationships, provides feedback, and guides focus — avoid decorative-only animation.
- Reduced Motion: disable Parallax/Tilt/Reveal.
- Timings: 180–280ms for enter/exit; 120–180ms for press. Easing: cubic-bezier(.2,.8,.2,1).
CSS:
@media (prefers-reduced-motion: reduce){
  .reveal, .gframe, .interactive-button-base { transition:none !important; transform:none !important; }
}

E) Integrating with the Current Style (non-breaking)
CSS (button role variants layered on .interactive-button-base):
.btn--primary{ background: var(--md-primary); color: var(--md-on-primary); border-color: transparent; }
.btn--secondary{ background: var(--md-secondary); color: var(--md-on-secondary); border-color: transparent; }
.btn--ghost{ background: transparent; color: var(--md-on-surface); border-color: rgba(0,0,0,.12); }
.btn--danger{ background: var(--md-error); color: var(--md-on-error); }
Example (Header CTA):
<a class="btn-pill interactive-button-base btn--primary nav-cta" href="#contact">Contact <span class="dot">→</span></a>

F) Material QA
- [ ] Primary/Secondary actions use proper --md-* with matching on-colors.
- [ ] Cards/dialogs use --md-surface with sufficient contrast.
- [ ] 8/4 spacing rhythm; 4/8/12 grid applied responsively.
- [ ] Elevation limited to 3–5 steps; temporary lift on interaction.
- [ ] Reduced Motion honored; errors present text/icon, not color alone.

# 16) What this document does (Summary)
// A practical contract for consistent, accessible UI in this codebase.
// - Maps your existing classes/structure to semantic patterns and ARIA.
// - Splits decorative colors (--g1..--g4) from functional roles (--md-*).
// - Ensures motion is purposeful, optional, and cleaned up.
// - Ships with paste-ready CSS/JS/React snippets and QA checklists.


