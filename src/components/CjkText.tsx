import { Fragment, useMemo } from 'react';

/**
 * 中文沒有空白，瀏覽器可以在任兩個漢字之間斷行，於是常常把一個詞攔腰切開
 * （「程式／碼」「最／佳論文」「永久記／住」）。CSS 沒有辦法修這件事：
 * word-break: auto-phrase 只對日文有效，text-wrap: pretty / balance 也擋不住。
 *
 * 這裡用瀏覽器內建的 Intl.Segmenter 斷詞，把每個多字詞包成不可斷行的 span，
 * 換行點就只會落在詞與詞之間。不改文案、不塞隱形字元，所以複製貼上、
 * Ctrl+F 搜尋與螢幕閱讀器讀到的都還是原本的字。
 */

const CJK = /[㐀-䶿一-鿿豈-﫿]/;

type Segment = { segment: string; isWordLike?: boolean };
type Segmenter = { segment(input: string): Iterable<Segment> };

// 建一次就好，之後所有段落共用。不支援的瀏覽器拿到 null，退回原本的逐字斷行。
let cached: Segmenter | null | undefined;
function getSegmenter(): Segmenter | null {
  if (cached === undefined) {
    cached =
      typeof Intl !== 'undefined' && 'Segmenter' in Intl
        ? (new (Intl as unknown as { Segmenter: new (l: string, o: object) => Segmenter })
            .Segmenter('zh-Hant', { granularity: 'word' }))
        : null;
  }
  return cached;
}

function segmentParts(text: string) {
  const segmenter = getSegmenter();
  // 沒有漢字的字串（英文模式、純數字、專有名詞）原樣送回，不多包一層。
  if (!segmenter || !CJK.test(text)) return null;
  return [...segmenter.segment(text)].map((s) => ({
    text: s.segment,
    keep: s.isWordLike === true && s.segment.length > 1 && CJK.test(s.segment),
  }));
}

function Segmented({ text }: { text: string }) {
  const parts = useMemo(() => segmentParts(text), [text]);
  if (!parts) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        part.keep ? (
          <span key={i} className="cjk-w">{part.text}</span>
        ) : (
          <Fragment key={i}>{part.text}</Fragment>
        )
      )}
    </>
  );
}

/**
 * 段落裡要加粗的詞，在 JSON 裡用 [[雙方括號]] 標起來，這裡轉成 <strong>。
 * 文案仍然只存在字典裡，元件不必為了一個粗體字拆成三個 key，也不用
 * dangerouslySetInnerHTML。
 *
 * 用 [[ ]] 而不是 Markdown 的 **：統計表的 sigNote 本來就寫著
 * 「* p<.05  ** p<.01」，用星號會把它誤判成粗體。
 */
const BOLD = /\[\[(.+?)\]\]/gs;

export default function CjkText({ children }: { children?: string | null }) {
  const chunks = useMemo(() => {
    const text = children ?? '';
    if (!text.includes('[[')) return null;
    const out: { text: string; bold: boolean }[] = [];
    let last = 0;
    for (const m of text.matchAll(BOLD)) {
      if (m.index! > last) out.push({ text: text.slice(last, m.index), bold: false });
      out.push({ text: m[1], bold: true });
      last = m.index! + m[0].length;
    }
    if (last < text.length) out.push({ text: text.slice(last), bold: false });
    return out;
  }, [children]);

  if (!chunks) return <Segmented text={children ?? ''} />;

  return (
    <>
      {chunks.map((c, i) =>
        c.bold ? (
          <strong key={i}><Segmented text={c.text} /></strong>
        ) : (
          <Fragment key={i}><Segmented text={c.text} /></Fragment>
        )
      )}
    </>
  );
}
