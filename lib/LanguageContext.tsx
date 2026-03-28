'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, bn } from './dictionaries';

type Language = 'en' | 'bn';
type Dictionary = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('preferred_lang', newLang);
  };

  const t = lang === 'en' ? en : bn;

  // Render children immediately to avoid hydration mismatch on server,
  // but use the default 'en' dictionary until mounted.
  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : 'en', setLang: handleSetLang, t: mounted ? t : en }}>
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
