'use client';

import { useState } from 'react';
import { Activity, Bone, HeartPulse, ShieldPlus, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: t.services.items[0].title,
      description: t.services.items[0].desc,
      details: t.services.items[0].details,
      icon: <Bone className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: t.services.items[1].title,
      description: t.services.items[1].desc,
      details: t.services.items[1].details,
      icon: <Activity className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: t.services.items[2].title,
      description: t.services.items[2].desc,
      details: t.services.items[2].details,
      icon: <HeartPulse className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: t.services.items[3].title,
      description: t.services.items[3].desc,
      details: t.services.items[3].details,
      icon: <ShieldPlus className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: t.services.items[4].title,
      description: t.services.items[4].desc,
      details: t.services.items[4].details,
      icon: <Activity className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: t.services.items[5].title,
      description: t.services.items[5].desc,
      details: t.services.items[5].details,
      icon: <HeartPulse className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />,
    }
  ];

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
              onClick={() => setSelectedService(index)}
              className="bg-white rounded-[2rem] p-10 shadow-lg shadow-black/5 border border-[#dee2e6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#f8f9fa] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#212529] mb-4 font-serif">{service.title}</h3>
              <p className="text-[#6b6b6b] leading-relaxed font-light mb-6">
                {service.description}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="text-[var(--color-primary)] font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  {t.services.detailsLabels.learnMore} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <div 
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#f8f9fa] w-12 h-12 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                  {services[selectedService].icon}
                </div>
                <h2 className="text-3xl font-bold text-[#212529] font-serif">{services[selectedService].title}</h2>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={t.services.detailsLabels.close}
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <p className="text-lg text-[#6b6b6b] mb-8 font-light leading-relaxed">
              {services[selectedService].description}
            </p>

            <div className="space-y-6">
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-[#212529] mb-2">{t.services.detailsLabels.conditionTreated}</h4>
                <p className="text-[#6b6b6b]">{services[selectedService].details.conditionTreated}</p>
              </div>
              
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-[#212529] mb-2">{t.services.detailsLabels.procedure}</h4>
                <p className="text-[#6b6b6b]">{services[selectedService].details.procedure}</p>
              </div>
              
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-[#212529] mb-2">{t.services.detailsLabels.benefits}</h4>
                <p className="text-[#6b6b6b]">{services[selectedService].details.benefits}</p>
              </div>
              
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-[#212529] mb-2">{t.services.detailsLabels.recoveryExpectations}</h4>
                <p className="text-[#6b6b6b]">{services[selectedService].details.recoveryExpectations}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
