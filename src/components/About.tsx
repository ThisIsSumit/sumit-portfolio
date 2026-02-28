import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';
import c1Image from '../assets/c1.jpeg';
import c2Image from '../assets/c2.jpeg';
import c3Image from '../assets/c3.jpeg';
import c4Image from '../assets/c4.jpeg';

export const About = () => {
  const resumeUrl = resumePdf;

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={c1Image}
                className="rounded-2xl w-full aspect-[3/2] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={c2Image}
                className="rounded-2xl w-full aspect-[4/3] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-12">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={c3Image}
                className="rounded-2xl w-full aspect-[4/3] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={c4Image}
                className="rounded-2xl w-full aspect-[7/6] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">About Me</h3>
            <h2 className="text-3xl md:text-5xl font-light text-text-main mb-4 tracking-tighter">Hello! I'm Sumit</h2>
            <p className="text-base text-text-muted mb-6 font-light tracking-tight">
              A mobile-first software engineer building scalable systems
            </p>

            <p className="text-sm text-primary italic mb-10 font-light tracking-tight border-l-2 border-primary/30 pl-4">
              "If you fail to find yourself, create yourself !!."
            </p>
            
            <div className="space-y-6 text-text-muted leading-relaxed mb-12 text-[13px] font-light">
              <p>
                Software engineer passionate about building high-performance mobile and backend systems. I specialize in <span className="text-primary font-semibold">Flutter, Node.js </span> and <span className="text-primary font-semibold">Spring Boot</span>, developing real-time applications, admin platforms, automation systems, and scalable APIs that are production-ready and performance-driven.
              </p>
              <p>
                I've worked on real-world systems including live GPS tracking with 5-meter accuracy, Firebase-based messaging architectures with 99.9% uptime, and role-based admin dashboards managing 10,000+ products and 500+ daily orders. I focus on clean architecture, performance optimization, and reliable system design.
              </p>
              <p>
                Beyond internships, I've built full-stack platforms such as a social media automation system processing 1000+ weekly posts, a secure cross-platform database backup CLI with multi-cloud support, and analytics-driven finance and subscription management applications.
              </p>
              <p>
               Outside of technology, I enjoy UI/UX design, teaching, writing, gaming, video editing, and I’m a big marval  fan.
              </p>
              <p>
                Apart from coding, I enjoy UI/UX design, participating in hackathons, mentoring peers, and building tools that solve real-world problems.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={resumeUrl}
              download="Sumit-Resume.pdf"
              className="inline-flex px-8 py-4 bg-primary text-background rounded-xl font-bold text-sm items-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
