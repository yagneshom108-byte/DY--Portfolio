import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Play, Send } from 'lucide-react';

export const Hero: React.FC = () => {

  // ✅ Scroll to Portfolio
  const scrollToPortfolio = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Scroll to Contact
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-8 text-center lg:text-left"
        >
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest self-center lg:self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Powered Video Editor
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            Cinematic <br />
            <span className="gradient-text">Storytelling</span> <br />
            That Converts.
          </h1>

          {/* ✅ Only this paragraph modified */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            I am{' '}
            <span className="bg-yellow-400 text-black px-2 py-1 font-semibold">
               Yagnesh Chavda
            </span>
            , helping creators and brands dominate social media with high-performance, cinematic video content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            
            <Button
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-md font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2"
            >
              View Portfolio <Play size={18} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="px-8 h-14 text-md font-bold rounded-xl border-white/10 hover:bg-white/5 flex items-center gap-2"
            >
              Hire Me <Send size={18} />
            </Button>

          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
            {[
              { label: 'Experience', value: '1+ Year' },
              { label: 'Projects', value: '100+' },
              { label: 'Reviews', value: '4.9/5' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Visual Element (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[520px] h-[520px] mx-auto flex items-center justify-center">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-[400px] h-[400px] border border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <div className="absolute w-[480px] h-[480px] border border-primary/20 rounded-full animate-[spin_18s_linear_infinite]" />
            <div className="absolute w-[420px] h-[420px] border border-accent/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />

            <img
              src="/images/shape/Untitled.png"
              alt="Yagnesh Chavda - AI Video Editor"
              className="relative z-20 w-[340px] md:w-[380px] object-contain drop-shadow-[0_0_50px_rgba(255,106,0,0.45)]"
            />

            <div className="absolute top-1/4 right-0 w-4 h-4 bg-primary/40 blur-md rounded-full animate-bounce" />
            <div className="absolute bottom-1/4 left-0 w-6 h-6 bg-accent/30 blur-lg rounded-full animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};