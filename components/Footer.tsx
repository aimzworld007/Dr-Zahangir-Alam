'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#212529] text-white pt-16 pb-8 border-t border-[#343a40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif text-white tracking-tight">{t.hero.name}</h3>
            <p className="text-[#adb5bd] mb-6 font-light leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#343a40] flex items-center justify-center text-[#adb5bd] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#343a40] flex items-center justify-center text-[#adb5bd] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#343a40] flex items-center justify-center text-[#adb5bd] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#343a40] flex items-center justify-center text-[#adb5bd] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors inline-block hover:translate-x-1 transform duration-300">{t.nav.home}</Link></li>
              <li><Link href="/about" className="text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors inline-block hover:translate-x-1 transform duration-300">{t.nav.about}</Link></li>
              <li><Link href="/services" className="text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors inline-block hover:translate-x-1 transform duration-300">{t.nav.services}</Link></li>
              <li><Link href="/appointment" className="text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors inline-block hover:translate-x-1 transform duration-300">{t.nav.bookAppointment}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-serif text-white">{t.footer.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="mt-1 bg-[#343a40] p-2 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#adb5bd] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="ml-4 text-[#adb5bd] font-light leading-relaxed">{t.contact.addressDesc}</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-[#343a40] p-2 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#adb5bd] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="tel:01609472942" className="ml-4 text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors font-light">01609472942</a>
              </li>
              <li className="flex items-center group">
                <div className="bg-[#343a40] p-2 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <MessageCircle className="w-4 h-4 text-[#adb5bd] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="https://wa.me/8801775193265" target="_blank" rel="noopener noreferrer" className="ml-4 text-[#adb5bd] hover:text-green-500 transition-colors font-light">+880 1775-193265 (WhatsApp)</a>
              </li>
              <li className="flex items-center group">
                <div className="bg-[#343a40] p-2 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#adb5bd] group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="mailto:zahangir.somc@gmail.com" className="ml-4 text-[#adb5bd] hover:text-[var(--color-primary)] transition-colors font-light">zahangir.somc@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#343a40] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[#6c757d] text-sm font-light">
          <p>&copy; {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">Designed with precision and care.</p>
        </div>
      </div>
    </footer>
  );
}
