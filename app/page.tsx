'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Activity, Bone, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] selection:bg-blue-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-10 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate-600"
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
                Accepting New Patients
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1]"
              >
                Dr. Md. Jahangir Alam
                <span className="block text-3xl md:text-5xl text-slate-500 font-medium mt-4 tracking-tight">
                  (মোঃ জাহাঙ্গীর আলম)
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-slate-600 max-w-xl leading-relaxed font-light"
              >
                Assistant Surgeon & Medical Officer specializing in Orthopedic Surgery and Trauma Care. Dedicated to restoring mobility and improving quality of life.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/appointment"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full text-base font-medium text-white bg-slate-900 hover:bg-blue-600 transition-colors duration-300"
                >
                  Book Consultation
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full text-base font-medium text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors duration-300"
                >
                  View Profile
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/doctor/800/1000"
                  alt="Dr. Md. Jahangir Alam"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-black/10 rounded-[2rem] pointer-events-none"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Bone className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">MS</div>
                </div>
                <p className="text-sm text-slate-600 font-medium">Orthopedic Surgery</p>
                <p className="text-xs text-slate-400 mt-1">Study Deputation</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Minimal Features Section */}
      <section className="py-24 bg-white rounded-t-[3rem] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {[
              {
                icon: <Activity className="h-6 w-6" />,
                title: "Expert Diagnosis",
                desc: "Comprehensive evaluation of musculoskeletal conditions with precision and care."
              },
              {
                icon: <HeartPulse className="h-6 w-6" />,
                title: "Trauma Care",
                desc: "Specialized management of fractures, dislocations, and complex injuries."
              },
              {
                icon: <Bone className="h-6 w-6" />,
                title: "Rehabilitation",
                desc: "Guided recovery plans to restore optimal function and mobility."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
