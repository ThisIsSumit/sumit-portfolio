
import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 sm:py-14 md:py-20 overflow-hidden mix-blend-difference"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-7 sm:mb-10 md:mb-14"
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

        {/* Experience Cards */}
        <div className="space-y-3 sm:space-y-5 md:space-y-7">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                bg-surface
                p-4
                sm:p-6
                md:p-9
                rounded-xl
                sm:rounded-2xl
                md:rounded-[28px]

                grid
                md:grid-cols-[0.8fr_2fr]

                gap-4
                sm:gap-6
                md:gap-10

                border border-white/5
                hover:border-primary/20
                transition-colors
                shadow-lg

                mx-0
                sm:mx-2
                md:mx-8
              "
            >

              {/* Company Info */}
              <div>
                <h3 className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-black
                  text-primary
                  mb-1
                  tracking-tight
                ">
                  {exp.company}
                </h3>

                <p className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-text-main
                  font-bold
                  mb-1
                ">
                  {exp.role}
                </p>

                <p className="
                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  font-bold
                  text-text-muted
                  uppercase
                  tracking-widest
                  mb-4
                  sm:mb-6
                ">
                  {exp.period}
                </p>

                {/* Stack */}
                <h4 className="
                  text-[8px]
                  sm:text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-text-muted
                  mb-2
                  sm:mb-3
                  font-bold
                ">
                  Stack
                </h4>

                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="
                        px-1.5
                        py-0.5
                        sm:px-2
                        sm:py-1
                        bg-background
                        border border-white/5
                        rounded
                        sm:rounded-md
                        text-[7px]
                        sm:text-[8px]
                        md:text-[9px]
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

             
{/* Experience Points */}
<ul className="
  hidden
  sm:block
  space-y-2
  sm:space-y-3
  md:space-y-4
">
  {exp.points.map((point, pIdx) => (
    <li
      key={pIdx}
      className="
        flex
        items-start
        text-xs
        md:text-sm
        text-text-muted
        leading-relaxed
        font-medium
      "
    >
      <span
        className="
          mt-[5px]
          mr-2
          w-[5px]
          h-[5px]
          rounded-full
          bg-primary
          shrink-0
          shadow-[0_0_8px_rgba(110,231,183,0.5)]
        "
      />

      <span>{point}</span>
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