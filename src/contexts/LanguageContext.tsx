import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

type Locale = 'en' | 'zh';

const dictionaries: Record<Locale, unknown> = { en, zh };

// Resolves a dot-path key ("home.hero.title") in a nested dictionary.
// Empty strings count as missing so zh.json can be filled in gradually.
function lookup(dict: unknown, key: string): string | undefined {
  let cur: unknown = dict;
  for (const part of key.split('.')) {
    if (cur === null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === 'string' && cur !== '' ? cur : undefined;
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

  // Falls back to English when a zh key is missing or still empty,
  // and to the key itself if the key doesn't exist at all.
  const t = (key: string): string =>
    lookup(dictionaries[locale], key) ?? lookup(dictionaries.en, key) ?? key;

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
