import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-20">
          <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">Journey</h3>
          <h2 className="text-3xl md:text-5xl font-light text-text-main mb-4 tracking-tighter">Experience</h2>
          <p className="text-text-muted text-base font-light tracking-tight">Reflection of what I've been doing so far, so long.</p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-8 md:p-12 rounded-[32px] md:rounded-[40px] grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20 border border-white/5 hover:border-primary/20 transition-all shadow-xl"
            >
              <div>
                <h3 className="text-3xl font-black text-primary mb-2 tracking-tight">{exp.company}</h3>
                <p className="text-lg text-text-main font-bold mb-2">{exp.role}</p>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-10">{exp.period}</p>
                
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-6 font-bold">Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 bg-background border border-white/5 rounded-lg text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed font-medium">
                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(110,231,183,0.5)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};