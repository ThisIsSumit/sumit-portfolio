
import React from 'react';
import { motion } from 'motion/react';
import { TECH_STACK } from '../constants';
import * as Icons from 'lucide-react';

export const TechStack = () => {
  return (
    <section
      id="tech"
      className="
        w-full
        min-h-screen
        flex
        justify-center
        px-4
        sm:px-6
        md:px-16
        py-12
        sm:py-16
        md:py-25
        overflow-hidden
      "
    >
      <div className="w-full max-w-7xl">

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Label */}
            <h3 className="
              text-primary
              font-bold
              text-[9px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              mb-2
              sm:mb-5
            ">
              Expertise
            </h3>

            {/* Title */}
            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-light
              text-text-main
              mb-3
              sm:mb-5
              tracking-tighter
            ">
              Tech Stack
            </h2>

            {/* Description */}
            <p className="
              text-text-muted
              max-w-xl
              text-sm
              sm:text-sm
              md:text-base
              font-light
              tracking-tight
              leading-relaxed
            ">
              Change is inevitable, so I keep on exploring new technology,
              learn it in a minimal possible way and then build something out
              of it to see how well I did :)
            </p>

            {/* Categories */}
            <div className="
              py-4
              sm:py-6
              md:p-12
              md:pl-0
              md:pr-0
            ">
              {TECH_STACK.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: 'easeOut'
                  }}
                >
                  {/* Category title */}
                  <h4 className="
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                    mt-4
                    sm:mt-5
                    mb-2
                    sm:mb-3
                    font-bold
                  ">
                    {category.title}
                  </h4>

                  {/* Skills */}
                  <div className="
                    flex
                    flex-wrap
                    gap-1.5
                    sm:gap-2
                  ">
                    {category.skills.map((skill, sIdx) => {
                      const Icon =
                        (Icons as any)[skill.icon] || Icons.Code;

                      return (
                        <motion.div
                          key={sIdx}
                          initial={{
                            opacity: 0,
                            scale: 0.9
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1
                          }}
                          viewport={{
                            once: true,
                            amount: 0.2
                          }}
                          transition={{
                            duration: 0.3,
                            delay: sIdx * 0.025
                          }}
                          whileHover={{
                            y: -4,
                            backgroundColor:
                              'rgba(110, 231, 183, 0.1)',
                            borderColor:
                              'rgba(110, 231, 183, 0.3)'
                          }}
                          className="
                            flex
                            items-center
                            gap-1.5
                            sm:gap-2
                            px-3
                            py-2
                            sm:px-3
                            sm:py-1.5
                            md:px-4
                            md:py-2
                            bg-surface
                            rounded-md
                            sm:rounded-lg
                            md:rounded-xl
                            border
                            border-white/5
                            text-[10px]
                            sm:text-[10px]
                            md:text-sm
                            font-semibold
                            transition-all
                            shadow-sm
                          "
                        >
                          <Icon
                            size={20}
                            className="
                              text-primary
                              sm:w-[13px]
                              sm:h-[13px]
                              md:w-[15px]
                              md:h-[15px]
                              shrink-0
                            "
                          />

                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="
              relative
              hidden
              md:block
              pl-10
              lg:pl-20
            "
          >
            <div className="
              bg-primary/5
              rounded-[32px]
              md:rounded-[40px]
              p-8
              md:p-12
              border
              border-primary/10
              emerald-glow
            ">
              <div className="aspect-square flex items-center justify-center">

                <div className="
                  relative
                  w-60
                  h-60
                  lg:w-80
                  lg:h-80
                ">

                  {/* Glow */}
                  <div className="
                    absolute
                    inset-0
                    bg-primary/10
                    rounded-full
                    blur-[80px]
                    animate-pulse
                  " />

                  {/* Monitor */}
                  <Icons.Monitor
                    className="
                      w-full
                      h-full
                      text-primary/20
                      relative
                      z-10
                    "
                    strokeWidth={0.8}
                  />

                  {/* GIF */}
                  <div className="
                    absolute
                    top-[18%]
                    left-[14%]
                    w-[72%]
                    h-[48%]
                    overflow-hidden
                    rounded-md
                    z-20
                  ">
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
