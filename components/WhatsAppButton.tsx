'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = '8801775193265';
  const message = 'Hello Doctor, I would like to book an appointment';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t.whatsapp.chat}
      </span>
    </Link>
  );
}
