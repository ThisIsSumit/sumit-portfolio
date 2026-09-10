import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Community = () => {
  return (
    <section
      id="community"
      className="
        w-full
        flex items-center justify-center
         px-[clamp(1rem,4vw,4rem)]
    py-[clamp(3rem,7vh,7rem)]
      "
    >
      <div className="w-full max-w-[1400px] mx-auto">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-[clamp(2rem,5vw,5rem)]
            items-center
          "
        >

          {/* LEFT — Education Cards */}
          <div className="space-y-[clamp(1rem,2vh,2rem)]">
            {[
              {
                icon: GraduationCap,
                title: 'NIT Hamirpur',
                sub: 'B.Tech in Computer Science',
                period: 'Jan 2022 - July 2027'
              },
              {
                icon: Award,
                title: 'AWS APAC Solutions Architecture',
                sub: 'Job Simulation Certification',
                period: 'Certified'
              },
              {
                icon: BookOpen,
                title: 'Flutter & Dart - Complete Guide',
                sub: 'Professional Certification',
                period: 'Certified'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="
                  bg-surface
                  p-[clamp(1rem,2vw,2rem)]
                  rounded-[clamp(1rem,2vw,2rem)]
                  flex items-center
                  gap-[clamp(1rem,2vw,2rem)]
                  border border-white/5
                  hover:border-primary/20
                  transition-all
                  shadow-lg
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-[clamp(3rem,5vw,5rem)]
                    h-[clamp(3rem,5vw,5rem)]
                    rounded-2xl
                    bg-background
                    flex items-center justify-center
                    border border-white/5
                    shrink-0
                  "
                >
                  <item.icon
                    className="
                      text-primary
                      w-[clamp(1.25rem,2vw,1.75rem)]
                      h-[clamp(1.25rem,2vw,1.75rem)]
                    "
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h4
                    className="
                      text-[clamp(0.9rem,1.5vw,1.5rem)]
                      font-black
                      text-primary
                      tracking-tight
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[clamp(0.75rem,1.1vw,1.125rem)]
                      text-text-main
                      font-bold
                    "
                  >
                    {item.sub}
                  </p>

                  <p
                    className="
                      text-[clamp(0.5rem,0.65vw,0.625rem)]
                      text-text-muted
                      uppercase
                      mt-1.5
                      font-bold
                      tracking-widest
                    "
                  >
                    {item.period}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

          {/* RIGHT — Learning */}
          <div className="mt-8 md:mt-0">

            <h3
              className="
                text-primary
                font-bold
                text-[clamp(0.6rem,0.7vw,0.75rem)]
                uppercase
                tracking-[0.2em]
                mb-[clamp(0.75rem,1.5vh,1.5rem)]
              "
            >
              Learning
            </h3>

            <h2
              className="
                text-[clamp(1.8rem,3.5vw,3rem)]
                font-light
                text-text-main
                mb-[clamp(1rem,2vh,1.5rem)]
                tracking-tighter
                leading-none
              "
            >
              Education & Certifications
            </h2>

            <p
              className="
                text-[clamp(0.75rem,1vw,1rem)]
                text-text-muted
                italic
                mb-[clamp(2rem,4vh,3rem)]
                font-light
                tracking-tight
              "
            >
              "Learning is a lifelong journey of growth and discovery."
            </p>

            <div className="space-y-[clamp(2rem,4vh,3rem)]">

              {/* Certifications */}
              <div>
                <h4
                  className="
                    text-[clamp(0.55rem,0.7vw,0.625rem)]
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                    mb-[clamp(1rem,2vh,1.5rem)]
                    font-bold
                  "
                >
                  Key Certifications
                </h4>

                <ul
                  className="
                    space-y-[clamp(0.75rem,1.5vh,1.5rem)]
                    text-[clamp(0.7rem,0.85vw,0.875rem)]
                    text-text-muted
                    leading-relaxed
                    font-medium
                  "
                >
                  {[
                    'Java Course - Mastering the Fundamentals',
                    'Telstra AU - Software Engineering Job Simulation',
                    'AWS APAC - Solutions Architecture Job Simulation'
                  ].map((cert, i) => (
                    <li key={i} className="flex gap-3">

                      <span
                        className="
                          text-primary
                          mt-1.5
                          shrink-0
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-primary
                          shadow-[0_0_10px_rgba(110,231,183,0.5)]
                        "
                      />

                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h4
                  className="
                    text-[clamp(0.55rem,0.7vw,0.625rem)]
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                    mb-4
                    font-bold
                  "
                >
                  Languages
                </h4>

                <div className="flex flex-wrap gap-[clamp(0.5rem,1vw,1rem)]">

                  <div
                    className="
                      px-[clamp(0.75rem,1.3vw,1.25rem)]
                      py-[clamp(0.5rem,0.7vw,0.625rem)]
                      bg-surface
                      rounded-xl
                      text-[clamp(0.55rem,0.7vw,0.75rem)]
                      font-bold
                      border border-white/5
                      uppercase
                      tracking-widest
                    "
                  >
                    English (Professional)
                  </div>

                  <div
                    className="
                      px-[clamp(0.75rem,1.3vw,1.25rem)]
                      py-[clamp(0.5rem,0.7vw,0.625rem)]
                      bg-surface
                      rounded-xl
                      text-[clamp(0.55rem,0.7vw,0.75rem)]
                      font-bold
                      border border-white/5
                      uppercase
                      tracking-widest
                    "
                  >
                    Hindi (Native)
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};