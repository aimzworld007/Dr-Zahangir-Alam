'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-slate-200/20' : 'bg-white/50 backdrop-blur-md border border-slate-200/30'
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
              JA
            </div>
            <span className="text-lg font-semibold text-slate-900 tracking-tight hidden sm:block">
              Dr. Jahangir
            </span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/appointment"
            className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-md hover:scale-105 active:scale-95"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-xl rounded-3xl md:hidden pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-slate-900 text-white hover:bg-slate-800 px-4 py-3 rounded-2xl text-base font-medium transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
