import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

export const Showreel: React.FC = () => {

  const [open, setOpen] = useState(false);

  return (

    <section
      id="showreel"
      className="py-24 relative overflow-hidden"
    >

      {/* Cinematic Spotlight Glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col items-center mb-16 text-center">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            The Masterpiece
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            2026 Showreel <br />
            <span className="text-primary">
              Impact.
            </span>
          </motion.h2>

        </div>

        {/* Thumbnail */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onClick={() => setOpen(true)}
          className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden glass-dark border border-white/10 group cursor-pointer shadow-glow-lg"
        >

          {/* Main Thumbnail */}

          <div className="aspect-video relative overflow-hidden">

            <img
              src="Thambnail/Showreel Thambnail.jpg"
              alt="2026 Showreel"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Play Button */}

            <div className="absolute inset-0 flex items-center justify-center">

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center relative shadow-glow"
              >

                <Play
                  fill="currentColor"
                  size={32}
                  className="ml-1"
                />

                {/* Ping Rings */}

                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" />

                <div className="absolute inset-0 rounded-full border border-primary animate-[ping_1.5s_linear_infinite] opacity-50" />

              </motion.button>

            </div>

            {/* Light Sweep */}

            <div className="absolute -inset-[100%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none" />

          </div>

          {/* Bottom Info */}

          <div className="p-10 glass-dark flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col gap-2">

              <h3 className="text-2xl font-black text-white">
                High-Octane Visuals
              </h3>

              <p className="text-muted-foreground max-w-md">
                Experience the collection of my best works across documentary, branding, and motion graphics.
              </p>

            </div>

            <div className="flex items-center gap-6">

              <div className="flex flex-col items-center">

                <span className="text-2xl font-black text-primary">
                  4K
                </span>

                <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                  Resolution
                </span>

              </div>

              <div className="w-[1px] h-10 bg-white/10" />

              <div className="flex flex-col items-center">

                <span className="text-2xl font-black text-primary">
                  60
                </span>

                <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
                  FPS
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Popup Video */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* Close */}

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 text-white text-2xl"
              >
                ✕
              </button>

              {/* YouTube Embed */}

              <iframe
                src="https://www.youtube.com/embed/LdFZpN9umMg?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );

};