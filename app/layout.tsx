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
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
