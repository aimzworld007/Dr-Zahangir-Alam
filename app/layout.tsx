import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LanguageSidebar from '@/components/LanguageSidebar';
import { LanguageProvider } from '@/lib/LanguageContext';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'Dr. Md. Jahangir Alam | Orthopedic Surgeon',
  description: 'Personal portfolio and appointment booking website for Dr. Md. Jahangir Alam, Orthopedic Surgeon based in Dhaka, Bangladesh.',
  keywords: ['Doctor', 'Orthopedic Surgeon', 'Medical Officer', 'Dhaka', 'Bangladesh', 'Dr. Md. Jahangir Alam'],
  icons: {
    icon: 'https://www.shutterstock.com/image-vector/medical-snake-caduceus-logo-sign-600nw-1511110730.jpg',
    apple: 'https://www.shutterstock.com/image-vector/medical-snake-caduceus-logo-sign-600nw-1511110730.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans bg-[#f8f9fa] text-[#212529] antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <LanguageSidebar />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
