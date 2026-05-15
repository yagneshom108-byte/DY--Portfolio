import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Lightbulb, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const experiences = [
    { icon: Clock, label: 'Freelancing', value: '1+ Year' },
    { icon: Trophy, label: 'The Franchise Insiider', value: '6 Months + Running' },
    { icon: Lightbulb, label: 'Focus', value: 'Data-Driven Creative' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            The Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Creative Mind <br /> Behind The <span className="text-primary">Glow.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Element (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute inset-0 glass rounded-[2rem] overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/20 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <img
                src="Thambnail/Yagnesh.jpg"
                alt="Yagnesh Chavda"
                className="absolute inset-0 w-full h-full object-cover object-center z-10"
              />
            </div>
            
            <div className="absolute -right-8 top-1/4 glass-dark p-6 rounded-2xl shadow-glow-lg border-l-primary/50 border-l-4">
               <Sparkles className="text-primary mb-2" />
               <p className="text-white font-bold">AI Expert</p>
               <p className="text-xs text-muted-foreground">Cutting-edge tools</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            
            {/* ✅ Paragraph Updated */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              I specialize in{' '}
              <span className="text-yellow-400 font-semibold">
                 high-impact video editing
              </span>{' '}
              that bridges the gap between creativity and conversion. Currently working at{' '}
              <span className="bg-yellow-400 text-black px-2 py-0.5 font-semibold">
                 The Franchise Insiider
              </span>
              , I turn raw footage into cinematic assets that drive measurable results.
            </motion.p>
            
            {/* Experience Cards (Same design) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-dark p-6 rounded-2xl border-t-primary/20 border-t hover:border-primary/50 transition-colors group"
                >
                  <exp.icon className="text-primary mb-4 w-6 h-6 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{exp.label}</p>
                  <p className="text-lg font-bold text-white leading-tight">{exp.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-dark border border-primary/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
              <p className="text-lg text-white font-medium italic relative z-10 leading-relaxed">
                "Every frame has a story. My goal is to make sure your audience feels it, remembers it, and acts on it."
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};