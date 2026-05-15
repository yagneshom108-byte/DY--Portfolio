import React from 'react';
import { Youtube, Instagram, Mail, Layout, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-glow">
                <Layout className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter">
                YAGNESH<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              AI-Powered Video Editor specialized in high-performance cinematic storytelling for creators and brands.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Youtube, Mail].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 glass-dark rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4 text-muted-foreground">
              {['About', 'Services', 'Experience', 'Portfolio', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Location</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Available worldwide for remote collaborations and creative projects.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Mail size={18} />
              <a href="mailto:yagnesh6650@gmail.com" className="hover:underline">yagnesh6650@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <p className="text-sm text-muted-foreground">
            © 2026 Yagnesh Chavda. All Rights Reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary flex items-center gap-2"
          >
            Back to Top <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};
