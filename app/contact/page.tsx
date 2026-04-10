'use client';

import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import DynamicSEO from '@/components/DynamicSEO';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-24">
      <DynamicSEO page="contact" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6 font-serif tracking-tight">{t.contact.title}</h1>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#f8f9fa] text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{t.contact.address}</h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-6 pb-6 border-b border-[#dee2e6]">
              {t.contact.addressDesc}
            </p>
            <h3 className="text-xl font-semibold text-[#212529] mb-2 font-serif">{t.contact.newChamberTitle}</h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-2">
              {t.contact.newChamberDesc}
            </p>
            <a href="tel:01585875229" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors block">
              {t.contact.newChamberPhone}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#f8f9fa] text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{t.contact.phone}</h3>
            <div className="mb-6">
              <a href="tel:01609472942" className="text-xl font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors block">
                01609472942
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-[#dee2e6]">
              <p className="text-sm text-[#6b6b6b] mb-2 font-medium">{t.contact.whatsappEmergency}</p>
              <a href="https://wa.me/8801609472942" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-green-600 hover:text-green-700 transition-colors">
                +880 1609-472942
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#f8f9fa] text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{t.contact.email}</h3>
            <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
              {t.contact.emergencyDesc}
            </p>
            <a href="mailto:zahangir.somc@gmail.com" className="text-lg font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors break-all">
              zahangir.somc@gmail.com
            </a>
          </div>

          {/* Consultation Hours */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#f8f9fa] text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{t.contact.hours}</h3>
            <div className="flex flex-col gap-3 text-left">
              {t.contact.hoursList.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-[#dee2e6] pb-2 last:border-0 last:pb-0">
                  <span className="text-[#6b6b6b] font-medium">{item.day}</span>
                  <span className="text-[var(--color-primary)] font-semibold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 bg-white rounded-[2rem] p-12 shadow-lg shadow-black/5 border border-[#dee2e6] text-center">
          <h3 className="text-3xl font-bold text-[#212529] mb-8 font-serif">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/share/1DFeAA75qB/" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#6b6b6b] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#6b6b6b] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#6b6b6b] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#6b6b6b] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-[#dee2e6] overflow-hidden h-[400px] relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#e9ecef] transition-colors duration-500 group-hover:bg-[#dee2e6]">
            {/* Embed Google Maps iframe here in production */}
            <div className="w-full h-full flex flex-col items-center justify-center text-[#6b6b6b]">
              <MapPin className="h-12 w-12 mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500 group-hover:text-[var(--color-primary)]" />
              <p className="text-xl font-medium font-serif text-[#212529]">Interactive Map View</p>
              <p className="text-base font-light mt-2">{t.contact.addressDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
