import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 sm:py-14 md:py-20 overflow-hidden mix-blend-difference"
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <h3 className="text-primary font-bold text-[9px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-4">
            Journey
          </h3>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-text-main mb-2 sm:mb-3 tracking-tighter">
            Experience
          </h2>

          <p className="text-text-muted text-[11px] sm:text-sm md:text-base font-light tracking-tight">
            Reflection of what I've been doing so far, so long.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting line — grows as the section comes into view */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: EXPERIENCES.length * 0.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="
              absolute left-[7px] sm:left-[9px]
              top-2 bottom-2
              w-px
              bg-white/10
            "
          />

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Node */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3, delay: idx * 0.5 + 0.15 }}
                  className="
                    absolute left-0 top-1
                    w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]
                    rounded-full
                    bg-background
                    border-2 border-primary/40
                    flex items-center justify-center
                  "
                >
                  <span className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-primary" />
                </motion.span>

                {/* Card */}
                <div
                  className="
                    bg-surface
                    border border-white/5
                    hover:border-primary/30
                    transition-colors
                    rounded-xl sm:rounded-2xl
                    p-4 sm:p-5
                    shadow-lg
                  "
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base sm:text-lg font-black text-primary tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-text-main mb-2">
                    {exp.role}
                  </p>

                  {exp.points?.[0] && (
                    <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed mb-3">
                      {exp.points[0]}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {exp.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="
                          px-1.5 py-0.5 sm:px-2 sm:py-1
                          bg-background
                          border border-white/5
                          rounded sm:rounded-md
                          text-[7px] sm:text-[8px] md:text-[9px]
                          font-bold
                          text-text-muted
                          uppercase
                          tracking-wider
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};