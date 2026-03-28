'use client';

import AppointmentForm from '@/components/AppointmentForm';
import { useLanguage } from '@/lib/LanguageContext';

export default function AppointmentPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6 font-serif tracking-tight">{t.appointment.title}</h1>
          <p className="text-lg text-[#6b6b6b] font-light leading-relaxed">
            {t.appointment.subtitle}
          </p>
        </div>
        
        <AppointmentForm />
      </div>
    </div>
  );
}
