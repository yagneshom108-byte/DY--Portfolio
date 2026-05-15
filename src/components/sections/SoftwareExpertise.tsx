import React from 'react';
import { motion } from 'motion/react';

const tools = [
  { name: 'Adobe Premiere Pro', logo: 'public/images/Icons/premiere-pro.png' },
  { name: 'After Effects', logo: 'public/images/Icons/after-effects.png' },
  { name: 'Photoshop', logo: 'public/images/Icons/photoshop.png' },
  { name: 'DaVinci Resolve', logo: 'public/images/Icons/pngwing.com.png' },
  { name: 'Capcut', logo: 'public/images/Icons/capcut-icon.png' },
];

export const SoftwareExpertise: React.FC = () => {
  return (
    <section id="software" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            My Toolkit
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Software <br /> <span className="text-primary">Mastery.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-yellow-400/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Real Logo */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Yellow Name */}
              <p className="text-sm font-bold text-yellow-400 relative z-10 text-center uppercase tracking-widest">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};