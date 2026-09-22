import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Branded cursor, site-wide on fine-pointer devices.
 *
 * What replacing the system cursor costs, and how each cost is paid back:
 * - The hand cursor over links disappears, so the arrow grows over anything
 *   clickable (a, button, [role=button], label, summary) to keep the affordance.
 * - The I-beam over text fields matters for editing, so inputs, textareas and
 *   contenteditable hand the cursor back to the OS and the arrow hides.
 * - A modal <dialog> renders in the top layer, above any z-index, so while one
 *   is open the arrow would be hidden behind it with the system cursor also
 *   hidden: no cursor at all. An open dialog hands the cursor back too.
 * - Lagging the pointer makes every click feel imprecise, so the arrow tip sits
 *   exactly on the pointer. Only the label pill animates.
 *
 * Colours: acid fill with an ink outline. On the bone background acid alone is
 * about 1.2:1 and the ink outline carries it; on the dark theme the outline sinks
 * into the background and the acid fill carries it. One drawing reads in both
 * themes, so nothing flips. They are hard-coded for the same reason the card
 * overlay is: the arrow floats over photography as well as both themes.
 */

// 箭頭尖端在 SVG 裡的座標。translate 時扣掉，熱點才會落在真正的滑鼠位置上。
const TIP_X = 2;
const TIP_Y = 2;

// 1×1 全透明 PNG。Safari（WebKit）在點擊、焦點改變或重繪後，常把 cursor:none
// 的元素改回顯示系統游標，要等滑鼠移出再移回才又消失；改用一張透明圖片當游標
// 比 none 穩定。none 留在後面當備援，圖片載不到時仍然隱藏。
const BLANK_CURSOR =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGNgAAIAAAUAAXpeqz8AAAAASUVORK5CYII=") 0 0, none';

// 可點擊放大的圖片外框。這三個 class 是案例頁六個檔案共用的，
// 掛在它們身上就等於涵蓋全部 22 張圖，不必在每一處 JSX 補屬性，
// 之後新增的圖只要沿用同一個外框 class 也會自動有膠囊。
const ZOOMABLE = '.interactive-image-area, .interactive-image-container, .cert-figure';

const TEXT_ENTRY = 'input:not([type=button]):not([type=submit]):not([type=checkbox]):not([type=radio]):not([type=range]), textarea, select, [contenteditable=""], [contenteditable="true"]';
const CLICKABLE = 'a, button, [role="button"], label, summary';

export default function Cursor() {
  const { t } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const exploreText = t('common.cursorExplore');
  const zoomText = t('common.clickToZoom');

  useEffect(() => {
    // Touch and pen never get this. pointer: fine as well as hover keeps it off
    // devices that report a coarse pointer with hover emulation.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setEnabled(fine.matches);
    apply();
    fine.addEventListener('change', apply);
    return () => fine.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const label = labelRef.current;
    if (!root || !label) return;

    // 系統游標只有在這個 class 存在時才被隱藏。JS 沒跑起來的話 class 不會加上，
    // 系統游標就原封不動，不會出現「沒有游標」的情況。
    const html = document.documentElement;
    html.classList.add('has-custom-cursor');

    let frame = 0;
    let x = -100;
    let y = -100;
    let target: HTMLElement | null = null;
    let dragging = false;

    // 事件只記座標和目標，判斷與寫 DOM 一律集中到每幀一次。
    // 高回報率滑鼠一秒可以送上數百次 pointermove，每次都做 closest() 與
    // classList 是白費工。
    const paint = () => {
      frame = 0;
      // 取整數。clientX/Y 在縮放過的螢幕上是小數，直接拿去 translate 會讓
      // 膠囊落在像素格線之間，文字就糊掉了。箭頭尖端差半個像素看不出來，
      // 但那行小字看得很清楚。
      root.style.transform = `translate3d(${Math.round(x) - TIP_X}px, ${Math.round(y) - TIP_Y}px, 0)`;

      // 捲軸不屬於網頁內容，cursor:none 管不到，系統游標一定會出現；
      // 滑鼠一旦進入捲軸，頁面也收不到 pointermove，自訂箭頭會卡在邊緣。
      // 所以一碰到捲軸所在的邊緣就先把箭頭收起來，只留系統游標。
      const onScrollbar = x >= html.clientWidth || y >= html.clientHeight;
      const handBack =
        dragging ||
        onScrollbar ||
        !!document.querySelector('dialog[open]') ||
        !!target?.closest?.(TEXT_ENTRY);
      root.classList.toggle('is-visible', !handBack);
      if (handBack) {
        root.classList.remove('is-link', 'is-active');
        return;
      }

      // 膠囊的字由目標決定：作品卡等元素自己帶 data-cursor-label，
      // 可放大的圖片統一顯示「點擊放大」。
      const labelled = target?.closest?.('[data-cursor-label]');
      const text = labelled
        ? labelled.getAttribute('data-cursor-label') ?? ''
        : target?.closest?.(ZOOMABLE)
          ? zoomText
          : '';
      if (text && label.textContent !== text) label.textContent = text;
      root.classList.toggle('is-active', !!text);
      root.classList.toggle('is-link', !text && !!target?.closest?.(CLICKABLE));
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      target = e.target as HTMLElement | null;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    // Leaving the window has to clear it, or the arrow stays frozen on screen.
    // mouseleave does not bubble, so it goes on <html>, not document.
    // 同時取消還沒畫的那一幀，否則它會用最後的位置把箭頭又叫回來。
    const onLeave = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      root.classList.remove('is-visible', 'is-link', 'is-active');
    };

    // 移到捲軸或瀏覽器外框時，pointerout 的 relatedTarget 會是 null
    const onOut = (e: PointerEvent) => { if (!e.relatedTarget) onLeave(); };

    // 原生拖曳（例如按住作品卡的封面圖移動）期間，瀏覽器會顯示自己的拖曳游標，
    // 而且不再送 pointermove，所以拖曳時收起箭頭，放開後下一次移動再出現。
    const onDragStart = () => { dragging = true; onLeave(); };
    const onDragEnd = () => { dragging = false; };

    const onVisibility = () => { if (document.hidden) onLeave(); };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onMove, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    document.addEventListener('dragstart', onDragStart);
    document.addEventListener('dragend', onDragEnd);
    document.addEventListener('drop', onDragEnd);
    document.addEventListener('visibilitychange', onVisibility);
    html.addEventListener('mouseleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      html.classList.remove('has-custom-cursor');
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onMove);
      document.removeEventListener('pointerout', onOut);
      document.removeEventListener('dragstart', onDragStart);
      document.removeEventListener('dragend', onDragEnd);
      document.removeEventListener('drop', onDragEnd);
      document.removeEventListener('visibilitychange', onVisibility);
      html.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, [enabled, zoomText]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor" ref={rootRef} aria-hidden="true">
        <svg className="cursor__arrow" width="26" height="30" viewBox="0 0 26 30" fill="none">
          <path
            d="M2 2.2 L2 24.6 L8.2 18.9 L12.3 27.6 L16.6 25.6 L12.6 17.1 L21 16.6 Z"
            fill="#FFE699"
            stroke="#0C0C0C"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
        <span className="cursor__label" ref={labelRef}>{exploreText}</span>
      </div>

      <style>{`
        html.has-custom-cursor,
        html.has-custom-cursor * { cursor: ${BLANK_CURSOR} !important; }

        /* 桌機保留右上角的放大鏡 icon，只收掉它旁邊的文字，因為膠囊已經
           在講同一句話了。觸控裝置不會有 has-custom-cursor，文字照舊顯示。
           .expand-hint 在六個案例頁各自定義，用 !important 一次蓋掉。 */
        html.has-custom-cursor .expand-hint__label { display: none !important; }

        /* 文字輸入與開著的 modal 把游標還給作業系統（理由見元件頂端說明） */
        html.has-custom-cursor :is(${TEXT_ENTRY}) { cursor: text !important; }
        html.has-custom-cursor:has(dialog[open]),
        html.has-custom-cursor:has(dialog[open]) * { cursor: auto !important; }
        html.has-custom-cursor:has(dialog[open]) dialog[open] :is(${CLICKABLE}) { cursor: pointer !important; }

        .cursor {
          position: fixed;
          top: 0;
          left: 0;
          /* 站上最高的是 9999，游標要在所有東西之上 */
          z-index: 2147483647;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .15s ease;
          will-change: transform;
        }
        .cursor.is-visible { opacity: 1; }

        .cursor__arrow {
          display: block;
          flex-shrink: 0;
          /* 以尖端為原點縮放，放大時熱點不會跑掉 */
          transform-origin: ${TIP_X}px ${TIP_Y}px;
          transition: transform .18s cubic-bezier(.2,.8,.2,1);
        }
        /* 系統的手形游標不見了，改由箭頭放大提示「這裡可以點」 */
        .cursor.is-link .cursor__arrow,
        .cursor.is-active .cursor__arrow { transform: scale(1.18); }

        .cursor__label {
          display: inline-flex;
          align-items: center;
          height: 28px;
          margin-top: 18px;
          padding: 0 13px;
          border-radius: 999px;
          background: var(--acid);
          border: 1.5px solid var(--ink);
          color: var(--acid-ink);
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: .1em;
          text-transform: uppercase;
          white-space: nowrap;
          opacity: 0;
          transform: scale(.7);
          transform-origin: left center;
          transition: transform .22s cubic-bezier(.2,.8,.2,1), opacity .15s ease;
        }
        .cursor.is-active .cursor__label { opacity: 1; transform: none; }

        @media (prefers-reduced-motion: reduce) {
          .cursor, .cursor__arrow, .cursor__label { transition: none; }
        }
      `}</style>
    </>
  );
}
