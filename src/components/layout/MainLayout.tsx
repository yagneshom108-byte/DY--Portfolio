import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import ParticleBackground from '@/components/ui/ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col selection:bg-primary/30 selection:text-white">
      <ParticleBackground />
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};
