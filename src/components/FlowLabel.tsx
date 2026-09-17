import type { ReactNode } from 'react';
import CjkText from './CjkText';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * 案例頁的敘事流程眉標。
 *
 * 每個案例頁的章節本來各自取名（Pilot Study、The Research Instrument、
 * Recognition & Impact…），讀者讀到一半不知道自己在案例的哪一拍。
 * 這道眉標把章節對回「問題 → 分析 → 解決方案 → 驗證 → 成效」。
 *
 * 刻意不編號：案例頁的順序未必是線性的，硬編會變成 05 → 05 → 01，
 * 看起來像壞掉。只標拍別，順序交給頁面自己說。
 *
 * note 用在章節原本就有眉標的頁面（Sleep Guardian），顯示成
 * 「成效 · 研究發現」，避免兩道眉標上下疊在一起。
 */

export type FlowBeat = 'problem' | 'analysis' | 'solution' | 'validation' | 'outcome';

type Props = {
  beat: FlowBeat;
  /** 接在拍別後面的原章節名，通常直接傳 t('….heading') */
  note?: string;
  /** 章節圖示，接在拍別前面 */
  icon?: ReactNode;
  /** 靜態深底區塊（Sleep Guardian 的 --sg-night）用 light */
  tone?: 'default' | 'light';
  /** 讓個別頁面覆寫字體與字距，例如 Sleep Guardian 的 flow-label--sg */
  className?: string;
};

export default function FlowLabel({ beat, note, icon, tone = 'default', className }: Props) {
  const { t } = useLanguage();

  const label = t(`project.flow.${beat}`);
  // 中文的 problem.heading 就叫「問題」，跟拍別一模一樣，接上去會變成
  // 「問題 · 問題」。同名就只留拍別。
  const showNote = note && note.trim() !== label.trim();

  const classes = ['flow-label'];
  if (tone === 'light') classes.push('flow-label--light');
  if (className) classes.push(className);

  return (
    <span className={classes.join(' ')}>
      {icon}
      {/* 這兩層 span 不能省：flow-label 是 flex 容器，CjkText 會把「解決方案」
          斷成兩個詞 span，少了這層就會各自變成 flex item 被 gap 拆成兩行。 */}
      <span className="flow-label__beat"><CjkText>{label}</CjkText></span>
      {showNote && (
        <>
          <span className="flow-label__sep" aria-hidden="true" />
          <span className="flow-label__note"><CjkText>{note}</CjkText></span>
        </>
      )}
    </span>
  );
}
