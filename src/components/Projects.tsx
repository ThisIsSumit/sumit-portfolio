import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import * as Icons from 'lucide-react';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center bg-surface/30 px-8 md:px-16 py-24"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">

          <h3 className="text-2xl md:text-3xl font-black   mb-4 tracking-tighter text-primary ">
             Projects 
          </h3>
          <p className="text-text-muted text-lg font-light tracking-tight">
            Selected work I’ve built and optimized
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-surface rounded-[28px] overflow-hidden border border-white/5 hover:border-primary/30 transition-all shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-lg bg-background/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                  {project.type}
                </div>
              </div>


              <div className="p-6">
                <h3 className="text-md font-black mb-2 text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-6 "> {project.description}   </p>

                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, lIdx) => {
                    const Icon = (Icons as any)[link.icon] || Icons.ExternalLink;
                    return (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-bold  text-primary transition-colors uppercase tracking-widest"
                      >
                        <Icon size={14} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-24 text-center">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/ThisIsSumit?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold text-xs uppercase tracking-[0.3em] border-b-2 border-primary/20 pb-2 hover:border-primary transition-all"
          >
            Explore All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};