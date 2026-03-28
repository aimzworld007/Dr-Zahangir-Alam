'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Activity, Bone, HeartPulse, MapPin, Phone, Mail, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const [text, setText] = useState('');
  const { t, lang } = useLanguage();
  const fullText = t.hero.typewriter;
  
  useEffect(() => {
    let i = 0;
    setText('');
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-10 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-bold text-[#212529] tracking-tighter leading-[1.1] font-serif"
              >
                {t.hero.name}
                <span className="block text-3xl md:text-5xl text-[#495057] font-medium mt-4 tracking-tight font-serif">
                  {t.hero.nameBangla}
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-[#6b6b6b] max-w-xl leading-relaxed font-light h-16"
              >
                <span className="text-[var(--color-primary)] font-medium">{text}</span>
                <span className="typewriter-cursor text-[var(--color-primary)]">|</span>
                <br />
                <span className="text-base mt-2 block">{t.hero.subtitle}</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/appointment"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors duration-300 shadow-lg shadow-[var(--color-primary)]/20"
                >
                  {t.hero.bookConsultation}
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full text-base font-medium text-[#212529] bg-white border border-[#dee2e6] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  {t.hero.viewProfile}
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto rounded-[2rem] overflow-hidden shadow-2xl animate-pulse-border">
                <Image
                  src="https://i.ibb.co.com/DfKVvCc7/dr-jahangir-alam.jpg"
                  alt="Dr. Md. Jahangir Alam"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-black/10 rounded-[2rem] pointer-events-none"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-[#dee2e6] max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    <Bone className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-[#212529] font-serif">{t.hero.badgeDegree}</div>
                </div>
                <p className="text-sm text-[#495057] font-medium">{t.hero.badgeSpecialty}</p>
                <p className="text-xs text-[#6b6b6b] mt-1">{t.hero.badgeStatus}</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-24 bg-white rounded-t-[3rem] border-t border-[#dee2e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-6 font-serif">{t.aboutSnippet.title}</h2>
              <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-6">
                {t.aboutSnippet.p1}
              </p>
              <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-8">
                {t.aboutSnippet.p2}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-hover)] transition-colors"
              >
                {t.aboutSnippet.readMore} <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-[#f8f9fa] p-8 rounded-[2rem] border border-[#dee2e6]">
                <BookOpen className="h-8 w-8 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-bold text-[#212529] mb-2 font-serif">{t.aboutSnippet.educationTitle}</h3>
                <p className="text-[#6b6b6b] font-light whitespace-pre-line">{t.aboutSnippet.educationDesc}</p>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-[2rem] border border-[#dee2e6]">
                <Award className="h-8 w-8 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-bold text-[#212529] mb-2 font-serif">{t.aboutSnippet.experienceTitle}</h3>
                <p className="text-[#6b6b6b] font-light whitespace-pre-line">{t.aboutSnippet.experienceDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minimal Features Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-6 font-serif">{t.expertise.title}</h2>
            <p className="text-lg text-[#6b6b6b] font-light">{t.expertise.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {t.expertise.items.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-[2rem] border border-[#dee2e6] hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#f8f9fa] border border-[#dee2e6] flex items-center justify-center text-[#212529] mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 group-hover:border-transparent">
                  {idx === 0 && <Activity className="h-6 w-6" />}
                  {idx === 1 && <HeartPulse className="h-6 w-6" />}
                  {idx === 2 && <Bone className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold text-[#212529] mb-3 font-serif">{feature.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#212529] rounded-[3rem] p-10 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[var(--color-primary)] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--color-primary)] rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">{t.cta.title}</h2>
                <p className="text-lg text-gray-300 font-light mb-8 max-w-lg">
                  {t.cta.subtitle}
                </p>
                <Link
                  href="/appointment"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full text-base font-medium text-[#212529] bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                  {t.cta.button}
                </Link>
              </div>
              
              <div className="flex flex-col space-y-6 lg:pl-12 lg:border-l border-gray-700">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.cta.callTitle}</h4>
                    <p className="text-gray-400 font-light">01609472942</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.cta.locationTitle}</h4>
                    <p className="text-gray-400 font-light">{t.cta.locationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
