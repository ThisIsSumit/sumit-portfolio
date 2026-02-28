import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';


export const Community = () => {
  return (
    <section
      id="community"
      className="w-full min-h-screen flex items-center justify-center py-20 px-6 md:px-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            {[
              { icon: GraduationCap, title: "NIT Hamirpur", sub: "B.Tech in Computer Science", period: "Jan 2022 - July 2027" },
              { icon: Award, title: "AWS APAC Solutions Architecture", sub: "Job Simulation Certification", period: "Certified" },
              { icon: BookOpen, title: "Flutter & Dart - Complete Guide", sub: "Professional Certification", period: "Certified" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-surface p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex items-center gap-6 md:gap-8 border border-white/5 hover:border-primary/20 transition-all shadow-lg"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background flex items-center justify-center border border-white/5 shrink-0">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-primary tracking-tight">{item.title}</h4>
                  <p className="text-base md:text-lg text-text-main font-bold">{item.sub}</p>
                  <p className="text-[10px] text-text-muted uppercase mt-2 font-bold tracking-widest">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-0">
            <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">Learning</h3>
            <h2 className="text-3xl md:text-5xl font-light text-text-main mb-6 tracking-tighter leading-none">Education & Certifications</h2>
            <p className="text-base text-text-muted italic mb-12 font-light tracking-tight">
              "Learning is a lifelong journey of growth and discovery."
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-6 font-bold">Key Certifications</h4>
                <ul className="space-y-6 text-sm text-text-muted leading-relaxed font-medium">
                  {[
                    "Java Course - Mastering the Fundamentals",
                    "Telstra AU - Software Engineering Job Simulation",
                    "AWS APAC - Solutions Architecture Job Simulation"
                  ].map((cert, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-primary mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(110,231,183,0.5)]" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-6 font-bold">Languages</h4>
                <div className="flex gap-4">
                  <div className="px-5 py-2.5 bg-surface rounded-xl text-xs font-bold border border-white/5 uppercase tracking-widest">English (Professional)</div>
                  <div className="px-5 py-2.5 bg-surface rounded-xl text-xs font-bold border border-white/5 uppercase tracking-widest">Hindi (Native)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
