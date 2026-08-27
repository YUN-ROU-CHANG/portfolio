import { useEffect, useRef, useState, type CSSProperties } from 'react';

/**
 * 逐字打字進場，最後一段可指定 acid 高亮塊由左至右抹入。
 *
 * 版位處理：底層放一份 visibility:hidden 的完整文字當佔位，動畫層絕對定位
 * 疊在上面，所以逐字打的過程中容器高度不會變，不會推擠下方內文。
 *
 * 無障礙：兩個視覺層都 aria-hidden，另附一份 sr-only 的完整純文字給
 * 螢幕閱讀器與爬蟲讀。不使用 aria-live，避免每打一個字就播報一次。
 */

export type TypeSegment = {
  text: string;
  style?: CSSProperties;
  /** 這一段打完後，acid 底色抹入並把字色換成 --on-accent */
  highlight?: boolean;
};

type Props = {
  segments: TypeSegment[];
  /** 每字間隔，中文建議 80、英文 40 */
  charMs?: number;
  /**
   * mount：掛載就開始打，給首屏用。
   * scroll：進入視窗才開始，只播一次，給中段區塊用。
   */
  trigger?: 'mount' | 'scroll';
  /** 開始打字前的緩衝，讓區塊的 .reveal 淡入先落定 */
  delayMs?: number;
};

const HOLD_MS = 220;

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Segment({ seg, shown, wiped }: { seg: TypeSegment; shown: string; wiped: boolean }) {
  // 還沒打到的段落完全不渲染，否則空的高亮塊會先露出一顆 acid 疙瘩
  if (!shown) return null;
  if (!seg.highlight) return <span style={seg.style}>{shown}</span>;

  return (
    <em className="tw-hl" style={seg.style}>
      <span>{shown}</span>
      <span className={wiped ? 'tw-hl__wipe tw-hl__wipe--in' : 'tw-hl__wipe'} aria-hidden="true">
        <span className="tw-hl__fill" />
        <span className="tw-hl__text">{shown}</span>
      </span>
    </em>
  );
}

export default function TypeIn({ segments, charMs = 40, trigger = 'mount', delayMs = 0 }: Props) {
  const total = segments.reduce((n, s) => n + s.text.length, 0);
  const plain = segments.map((s) => s.text).join('');

  const rootRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(trigger !== 'scroll');
  const [typed, setTyped] = useState(() => (reduceMotion() ? total : 0));
  const [wiped, setWiped] = useState(reduceMotion);

  // 進入視窗才開始，看完就解除觀察，不重播。觀察器不可用時直接開始，
  // 否則標題會永遠停在空白。
  useEffect(() => {
    if (started) return;
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || typed >= total) return;
    const id = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? charMs + delayMs : charMs);
    return () => clearTimeout(id);
  }, [started, typed, total, charMs, delayMs]);

  useEffect(() => {
    if (typed < total || wiped) return;
    const id = setTimeout(() => setWiped(true), HOLD_MS);
    return () => clearTimeout(id);
  }, [typed, total, wiped]);

  const done = typed >= total;
  let offset = 0;

  return (
    <span ref={rootRef} style={{ position: 'relative', display: 'block' }}>
      <span aria-hidden="true" style={{ visibility: 'hidden', whiteSpace: 'pre-wrap' }}>
        {segments.map((seg, i) => (
          <Segment key={i} seg={seg} shown={seg.text} wiped />
        ))}
      </span>

      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, whiteSpace: 'pre-wrap' }}>
        {segments.map((seg, i) => {
          const shown = seg.text.slice(0, Math.max(0, Math.min(seg.text.length, typed - offset)));
          offset += seg.text.length;
          return <Segment key={i} seg={seg} shown={shown} wiped={wiped} />;
        })}
        <span className={done ? 'tw-caret tw-caret--out' : 'tw-caret'} />
      </span>

      <span className="sr-only">{plain}</span>
    </span>
  );
}
