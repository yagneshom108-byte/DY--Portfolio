import React from 'react';
import { motion } from 'motion/react';
import { Film, Zap, Palette, Video, Share2, Youtube } from 'lucide-react';

const services = [
  { icon: Film, title: 'Video Editing', desc: 'Transforming raw footage into high-end cinematic content.' },
  { icon: Zap, title: 'Motion Graphics', desc: 'Dynamic animations and visual effects that pop.' },
  { icon: Palette, title: 'Color Grading', desc: 'Professional color correction for a premium look.' },
  { icon: Video, title: 'AI Editing', desc: 'Cutting-edge AI tools for enhanced speed and quality.' },
  { icon: Share2, title: 'Social Media Editing', desc: 'Short-form content optimized for engagement.' },
  { icon: Youtube, title: 'YouTube Editing', desc: 'Full-length video storytelling for creators.' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Premium Video <br /> <span className="text-primary">Services.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-300 hover:shadow-glow hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Glowing sweep effect on hover */}
              <div className="absolute -inset-[100%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 -z-10" />

              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                <service.icon className="text-primary group-hover:animate-pulse w-7 h-7 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Zap size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
