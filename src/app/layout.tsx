import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BackgroundGrid } from '@/components/ui/background-grid';

export const metadata: Metadata = {
  title: 'QuantCom | IEM Centre of Excellence in Quantum Computing',
  description:
    'Researching Post-Quantum Cryptography, Quantum Machine Learning, and next-gen computational architectures at Institute of Engineering & Management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-gray-100 min-h-screen relative flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-1 z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}