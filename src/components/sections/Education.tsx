import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'BCA (Computer Applications)',
    institution: 'swarnim startup & innovation university ',
    date: '2024 - Present',
    location: 'Gandhinagar, Gujarat',
    focus: 'Technology & Software Development'
  },
  {
    degree: 'Video Editing & Graphics Design',
    institution: 'Red & White Multimedia Education',
    date: '2024 - 2025',
    location: 'Ahmedabad, Gujarat',
    focus: 'Advanced Visual Storytelling'
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-black/60">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Learning Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Education & <br /> <span className="text-primary">Skills.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-dark p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                <GraduationCap className="text-primary w-8 h-8" />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mt-1 uppercase tracking-widest text-sm">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                    <Calendar size={14} className="text-primary" />
                    {edu.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                    <MapPin size={14} className="text-primary" />
                    {edu.location}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Main Focus</p>
                  <p className="text-white font-bold">{edu.focus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};