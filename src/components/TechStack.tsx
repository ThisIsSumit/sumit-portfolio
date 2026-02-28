import React from 'react';
import { motion } from 'motion/react';
import { TECH_STACK } from '../constants';
import * as Icons from 'lucide-react';

export const TechStack = () => {
  return (
    <section
      id="tech"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">Expertise</h3>
            <h2 className="text-3xl md:text-5xl font-light text-text-main mb-6 tracking-tighter">Tech Stack</h2>
            <p className="text-text-muted mb-12 max-w-xl text-base font-light tracking-tight">
              Change is inevitable, so I keep on exploring new technology, learn it in a minimal possible way and then build something out of it to see how well I did :)
            </p>

            <div className="py-6 md:p-12  ">
              {TECH_STACK.map((category, idx) => (
                <div key={idx}>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-5  mb-3 font-bold">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const Icon = (Icons as any)[skill.icon] || Icons.Code;
                      return (
                        <motion.div
                          key={sIdx}
                          whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)', borderColor: 'rgba(110, 231, 183, 0.3)' }}
                          className="flex items-center gap-3 px-4 py-2 bg-surface rounded-xl border border-white/5 text-sm font-semibold transition-all shadow-sm"
                        >
                          <Icon size={15} className="text-primary" />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden md:block pl-20"
          >
           <div className="bg-primary/5 rounded-[40px] p-12 border border-primary/10 emerald-glow">
  <div className="aspect-square flex items-center justify-center">
    <div className="relative w-80 h-80">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse" />

      {/* Monitor Frame */}
      <Icons.Monitor
        className="w-full h-full text-primary/20 relative z-10"
        strokeWidth={0.8}
      />

      {/* GIF Screen Overlay */}
     <div className="absolute top-[18%] left-[14%] w-[72%] h-[48%] overflow-hidden rounded-md z-20">
  <img
    src="https://cdn.dribbble.com/userupload/37093547/file/original-a81fda6343ddfd24ef52a33e0eaf0fd4.gif"
    alt="Project preview"
    className="w-full h-full object-cover"
  />
</div>

    </div>
  </div>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
