import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Md. Jahangir Alam | Orthopedic Surgeon',
  description: 'Personal portfolio and appointment booking website for Dr. Md. Jahangir Alam, Orthopedic Surgeon based in Dhaka, Bangladesh.',
  keywords: ['Doctor', 'Orthopedic Surgeon', 'Medical Officer', 'Dhaka', 'Bangladesh', 'Dr. Md. Jahangir Alam'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col selection:bg-blue-200 selection:text-blue-900`} suppressHydrationWarning>
        {/* Subtle background pattern */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
