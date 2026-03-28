'use client';

import { useState } from 'react';
import { Activity, Bone, HeartPulse, ShieldPlus, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const icons = [
    <Bone key="0" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    <Activity key="1" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    <HeartPulse key="2" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    <ShieldPlus key="3" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    <Activity key="4" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    <HeartPulse key="5" className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
  ];

  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6 font-serif tracking-tight">{t.services.title}</h1>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto font-light leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedService(index)}
            >
              <div className="bg-[#f8f9fa] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{service.title}</h3>
              <p className="text-[#6b6b6b] leading-relaxed font-light flex-grow">
                {service.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-[var(--color-primary)] font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  {t.services.detailsLabels.learnMore} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 sm:p-8 overflow-y-auto">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  aria-label={t.services.detailsLabels.close}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] w-12 h-12 rounded-xl flex items-center justify-center">
                    {/* Render icon without group-hover classes for the modal */}
                    {(() => {
                      const IconComponent = [Bone, Activity, HeartPulse, ShieldPlus, Activity, HeartPulse][selectedService];
                      return <IconComponent className="w-6 h-6" />;
                    })()}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#212529] font-serif pr-8">
                    {services[selectedService].title}
                  </h2>
                </div>

                <p className="text-lg text-[#6b6b6b] mb-8 font-light leading-relaxed">
                  {services[selectedService].desc}
                </p>

                <div className="space-y-6">
                  <div className="bg-[#f8f9fa] p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-[#212529] mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {t.services.detailsLabels.conditionTreated}
                    </h4>
                    <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed pl-3.5">
                      {services[selectedService].conditionTreated}
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-[#212529] mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {t.services.detailsLabels.procedure}
                    </h4>
                    <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed pl-3.5">
                      {services[selectedService].procedure}
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-[#212529] mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {t.services.detailsLabels.benefits}
                    </h4>
                    <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed pl-3.5">
                      {services[selectedService].benefits}
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-semibold text-[#212529] mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {t.services.detailsLabels.recoveryExpectations}
                    </h4>
                    <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed pl-3.5">
                      {services[selectedService].recoveryExpectations}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {t.services.detailsLabels.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
