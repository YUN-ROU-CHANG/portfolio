import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

type Locale = 'en' | 'zh';

const dictionaries: Record<Locale, unknown> = { en, zh };

// Resolves a dot-path key ("home.hero.title") in a nested dictionary.
// 回傳 undefined 代表這本字典裡沒有這個 key，空字串代表 key 在、值是空的。
// 兩者語意不同，見下方 t()。
function lookup(dict: unknown, key: string): string | undefined {
  let cur: unknown = dict;
  for (const part of key.split('.')) {
    if (cur === null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === 'string' ? cur : undefined;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('locale');
      if (saved === 'en' || saved === 'zh') return saved;
    } catch { /* noop */ }
    return 'en';
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try { localStorage.setItem('locale', next); } catch { /* noop */ }
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hant' : 'en';
  }, [locale]);

  // zh.json 的兩種「沒有中文」語意不同：
  //   值是空字串 → 刻意沿用英文（Rose Chang、Figma、論文標題這類專有名詞）。
  //   整個 key 不存在 → 中文頁不顯示這段，回傳空字串讓元件自己收掉。
  // 所以在 en.json 新增 key 時，zh.json 也要補上同一個 key（值可先留空字串），
  // 否則那段內容在中文頁會直接消失。
  const t = (key: string): string => {
    const own = lookup(dictionaries[locale], key);
    if (own) return own;
    const fallback = lookup(dictionaries.en, key);
    if (own === undefined && locale !== 'en' && fallback !== undefined) return '';
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
