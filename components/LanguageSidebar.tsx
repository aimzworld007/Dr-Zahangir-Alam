'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function LanguageSidebar() {
  const { lang, setLang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isInitialShow, setIsInitialShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = isHovered || isInitialShow;

  return (
    <motion.div 
      initial={{ x: 100 }}
      animate={{ 
        x: isVisible ? 0 : 35,
        opacity: isVisible ? 1 : 0.4
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col bg-white/60 backdrop-blur-md shadow-lg rounded-l-xl border border-[#dee2e6]/50 border-r-0 overflow-hidden"
    >
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-4 text-sm font-bold transition-colors ${
          lang === 'en' 
            ? 'bg-[var(--color-primary)]/90 text-white' 
            : 'text-[#495057] hover:bg-white/50 hover:text-[var(--color-primary)]'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <div className="h-[1px] bg-[#dee2e6]/50 w-full"></div>
      <button
        onClick={() => setLang('bn')}
        className={`px-3 py-4 text-sm font-bold transition-colors ${
          lang === 'bn' 
            ? 'bg-[var(--color-primary)]/90 text-white' 
            : 'text-[#495057] hover:bg-white/50 hover:text-[var(--color-primary)]'
        }`}
        aria-label="Bengali"
      >
        BN
      </button>
    </motion.div>
  );
}
