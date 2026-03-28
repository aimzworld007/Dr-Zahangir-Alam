'use client';

import { CheckCircle2, Award, BookOpen, MapPin, Briefcase, User, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">About Dr. Jahangir</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A dedicated medical professional with a focus on Orthopedic & Trauma Care, committed to improving patient lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Professional Profile</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Designation
                </p>
                <p className="text-slate-900 font-medium">Assistant Surgeon / Medical Officer</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Current Role
                </p>
                <p className="text-slate-900 font-medium">OSD (Additional), Study Deputation</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Organization
                </p>
                <p className="text-slate-900 font-medium">Directorate General of Health Services, Mohakhali, Banani, Dhaka</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Joining Date
                </p>
                <p className="text-slate-900 font-medium">01-06-2023</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> District
                </p>
                <p className="text-slate-900 font-medium">Khagrachari</p>
              </div>
            </div>
          </motion.div>

          {/* IDs Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-lg text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h2 className="text-xl font-bold mb-8 relative z-10">Registration Details</h2>
            
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-slate-400 text-sm mb-1">BCS Batch</p>
                <p className="text-2xl font-bold text-white">39<span className="text-blue-400 text-lg">th</span></p>
              </div>
              <div className="h-px w-full bg-slate-800"></div>
              <div>
                <p className="text-slate-400 text-sm mb-1">HRIS ID</p>
                <p className="text-xl font-mono text-slate-200 tracking-wider">166027</p>
              </div>
              <div className="h-px w-full bg-slate-800"></div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Code</p>
                <p className="text-xl font-mono text-slate-200 tracking-wider">138648</p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200/60 mt-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Education & Training</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">MBBS</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">2015</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Sylhet MAG Osmani Medical College</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-green-600 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">MS Orthopedic Surgery</h3>
                    <p className="text-green-600 font-medium text-sm mb-2">2020 - 2022</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Chattogram Medical College<br/>(Study Deputation)</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-green-600 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">MS Orthopedic Surgery</h3>
                    <p className="text-green-600 font-medium text-sm mb-2">2023 - 2026</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Chattogram Medical College<br/>(Study Deputation)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
