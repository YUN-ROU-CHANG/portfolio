import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface TranslationObject {
  en: string | ReactNode;
  zh: string | ReactNode;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translationObj: TranslationObject) => string | ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function that accepts objects with en/zh keys
  const t = (translationObj: TranslationObject): string | ReactNode => {
    return translationObj[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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