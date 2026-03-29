'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const visibleLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
  ];

  const dropdownLinks = [
    { name: t.nav.services, href: '/services' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 rounded-full px-6 py-3 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-white/20' 
            : 'bg-white/50 backdrop-blur-sm border border-white/20'
        }`}>
          
          {/* Desktop Left: Menu Links */}
          <div className="hidden md:flex flex-1 items-center space-x-1">
            {visibleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#495057] hover:text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-[#495057] hover:text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                More <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#dee2e6] py-2 overflow-hidden"
                  >
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Left: Hamburger */}
          <div className="flex md:hidden flex-1 items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-[#212529] hover:text-[var(--color-primary)] hover:bg-[#f8f9fa] focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

          {/* Center: Profile */}
          <div className="flex flex-1 justify-center items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[var(--color-primary)] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="https://www.shutterstock.com/image-vector/medical-snake-caduceus-logo-sign-600nw-1511110730.jpg" 
                  alt="Dr. Md. Jahangir Alam Logo" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold text-[#212529] font-serif tracking-tight whitespace-nowrap group-hover:text-[var(--color-primary)] transition-colors duration-300">
                <span className="sm:hidden">{t.hero.shortName}</span>
                <span className="hidden sm:inline">{t.hero.name}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Right: CTA */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <Link
              href="/appointment"
              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md shadow-[var(--color-primary)]/20 hover:shadow-lg hover:shadow-[var(--color-primary)]/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t.nav.bookAppointment}
            </Link>
          </div>

          {/* Mobile Right: Spacer */}
          <div className="flex md:hidden flex-1 justify-end">
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-[#dee2e6] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[...visibleLinks, ...dropdownLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-[#495057] hover:text-[var(--color-primary)] hover:bg-[#f8f9fa] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] px-4 py-3 rounded-xl text-base font-medium transition-colors shadow-md shadow-[var(--color-primary)]/20"
                >
                  {t.nav.bookAppointment}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
