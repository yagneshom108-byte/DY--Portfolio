import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Freelance Video Editor',
    company: 'Self-Employed',
    date: '2025 - Present',
    location: 'Remote',
    desc: 'Working with independent creators and brands to deliver high-performance cinematic video content tailored for social media growth and conversion.',
    achievements: ['100+ projects completed', '4.9/5 average client rating', 'Specialized in AI-assisted workflows']
  },
  {
    title: 'Video Editor & Content Strategist',
    company: 'Franchise Insiider Ahmedabad',
    date: '2025 - Present',
    location: 'Ahmedabad, Gujarat',
    desc: 'Strategized and edited content for business franchises, focusing on brand storytelling and professional outreach.',
    achievements: ['Increased social media engagement by 40%', 'Managed full content production pipeline', 'Collaborated with marketing teams for strategy']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Professional <br /> <span className="text-primary">Timeline.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Light Beam */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary to-primary/5 hidden md:block">
             <div className="absolute top-0 w-full h-full bg-primary/20 blur-[4px]" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Milestone Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-dark border-2 border-primary flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] glass-dark p-8 rounded-3xl border border-white/5 relative group transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <Briefcase size={16} />
                        <span className="text-sm uppercase tracking-widest">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                        <Calendar size={14} />
                        {exp.date}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <MapPin size={14} />
                      {exp.location}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.desc}
                    </p>

                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achieve, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {achieve}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Light streak animation */}
                  <div className="absolute top-0 right-0 w-24 h-[2px] bg-gradient-to-r from-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-24 h-[2px] bg-gradient-to-l from-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
