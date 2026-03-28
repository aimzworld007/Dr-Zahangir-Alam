'use client';

import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-[#dee2e6] overflow-hidden">
          <div className="p-10 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-12 border-b border-[#dee2e6] pb-8 font-serif tracking-tight">{t.about.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Profile Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-[#212529] mb-8 font-serif">Professional Profile</h2>
                <ul className="space-y-6 text-[#495057] font-light">
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">Name:</span>
                    <span>{t.hero.name} {t.hero.nameBangla}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">Designation:</span>
                    <span>Assistant Surgeon / Medical Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">Current Role:</span>
                    <span>{t.hero.badgeStatus}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">Organization:</span>
                    <span>Chittagong Medical College Hospital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">Joining Date:</span>
                    <span>01-06-2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">District:</span>
                    <span>Khagrachari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-36 flex-shrink-0 text-[#212529]">BCS Batch:</span>
                    <span>39</span>
                  </li>
                </ul>
              </div>

              {/* Education & Training */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-semibold text-[#212529] mb-8 font-serif">{t.aboutSnippet.educationTitle}</h2>
                  <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dee2e6] hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mt-0.5 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-[#212529] text-lg">MBBS (2015)</h3>
                        <p className="text-[#6b6b6b] font-light mt-1">Sylhet MAG Osmani Medical College</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#212529] mb-8 font-serif">Postgraduate / Training</h2>
                  <div className="space-y-6">
                    <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dee2e6] hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mt-0.5 mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-[#212529] text-lg">MS in Orthopedic Surgery ({t.hero.badgeStatus})</h3>
                          <p className="text-[#6b6b6b] font-light mt-1">Chattogram Medical College (2023 - 2026)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dee2e6] hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mt-0.5 mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-[#212529] text-lg">MS in Orthopedic Surgery ({t.hero.badgeStatus})</h3>
                          <p className="text-[#6b6b6b] font-light mt-1">Chattogram Medical College (2020 - 2022)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-[#dee2e6]">
              <h2 className="text-2xl font-semibold text-[#212529] mb-6 font-serif">{t.about.biography}</h2>
              <div className="space-y-6 text-[#495057] font-light leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>
            
            <div className="mt-12 bg-[#f8f9fa] rounded-2xl p-8 border border-[#dee2e6]">
              <h2 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{t.about.missionTitle}</h2>
              <p className="text-[#495057] font-light leading-relaxed italic">
                &quot;{t.about.missionDesc}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
