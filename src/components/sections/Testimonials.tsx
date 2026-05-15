import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rushin Panchal',
    role: 'Creative Director',
    text: 'Yagnesh has a unique eye for cinematic storytelling. His edits are clean, powerful, and truly elevate our brand content. Highly recommended for any professional creator.',
    rating: 5,
  },
  {
    name: 'Dhruvin Sathwara',
    role: 'Influencer & Host',
    text: 'The social media reels Yagnesh edited for me were incredible! He knows exactly how to capture attention in the first few seconds. His AI-powered workflow is so fast.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Client Reviews
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white"
          >
            Voices Of <br /> <span className="text-primary">Success.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-dark p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary shadow-glow" />
                ))}
              </div>

              <div className="relative mb-8">
                <Quote className="text-primary/20 w-16 h-16 absolute -top-4 -left-4 group-hover:text-primary transition-colors" />
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed relative z-10 italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 text-center md:text-left">
                <h4 className="text-lg font-bold text-yellow-400">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  {testimonial.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};