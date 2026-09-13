import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import * as Icons from 'lucide-react';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="
        w-full min-h-screen
        flex flex-col 
        bg-surface/30
        px-[clamp(1rem,3vw,4rem)]
        py-[clamp(2rem,5vh,6rem)]
        overflow-visible
        [zoom:1]
        lg:[zoom:0.85]
        2xl:[zoom:0.7]
        [scroll-margin-top:calc(5rem+env(safe-area-inset-top))]
        [padding-left:max(clamp(1rem,3vw,4rem),env(safe-area-inset-left))]
        [padding-right:max(clamp(1rem,3vw,4rem),env(safe-area-inset-right))]
       
      "
    >
      <div className="w-full max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="text-center py-10">

          <h3
            className="
              text-[clamp(1.5rem,2.2vw,2rem)]
              font-black
              mb-[clamp(0.5rem,1vh,1rem)]
              tracking-tighter
              text-primary
            "
          >
            Projects
          </h3>

          <p
            className="
              text-text-muted
              text-[clamp(0.8rem,1.1vw,1.125rem)]
              font-light
              tracking-tight
            "
          >
            Selected work I’ve built and optimized
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            justify-items-center
            gap-6
            mx-auto
          "
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                w-full
                max-w-[400px]
                sm:max-w-[460px]
                bg-surface
                rounded-[22px]
                overflow-hidden
                border border-white/5
                hover:border-primary/30
                focus-within:border-primary/50
                focus-within:ring-2 focus-within:ring-primary/20
                transition-colors
                shadow-xl
                hover:shadow-2xl
                cursor-pointer
              "
            >

              {/* Image */}
              <div
                className="
                  relative
                  h-[clamp(9rem,14vw,14rem)]
                  overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                  referrerPolicy="no-referrer"
                />

                {/* Type */}
                <div
                  className="
                    absolute
                    top-[clamp(0.5rem,1vw,1.25rem)]
                    left-[clamp(0.5rem,1vw,1.25rem)]
                    px-[clamp(0.5rem,0.8vw,0.75rem)]
                    py-1
                    rounded-lg
                    bg-background/90
                    backdrop-blur
                    text-[clamp(0.5rem,0.65vw,0.625rem)]
                    font-bold
                    uppercase
                    tracking-wider
                    text-primary
                    border border-primary/20
                  "
                >
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div
                className="
                  p-[clamp(1rem,1.5vw,1.5rem)]
                "
              >
                <h3
                  className="
                    text-[clamp(0.85rem,1vw,1rem)]
                    font-black
                    mb-2
                    text-primary
                    transition-colors
                    tracking-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-text-muted
                    text-[clamp(0.7rem,0.85vw,0.875rem)]
                    mb-[clamp(1rem,1.5vw,1.5rem)]
                  "
                >
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-[clamp(0.5rem,0.8vw,1rem)] pt-3 border-t border-white/5">
                  {project.links.map((link, lIdx) => {
                    const Icon =
                      (Icons as any)[link.icon] || Icons.ExternalLink;

                    return (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex items-center
                          gap-1.5
                          text-[clamp(0.55rem,0.7vw,0.75rem)]
                          font-bold
                          text-primary
                          transition-colors
                          uppercase
                          tracking-widest
                          cursor-pointer
                          hover:text-primary/70
                          focus:outline-none
                          focus-visible:underline
                          focus-visible:underline-offset-4
                        "
                      >
                        <Icon
                          size={14}
                          className="w-[clamp(11px,0.9vw,14px)] h-[clamp(11px,0.9vw,14px)]"
                        />
                        {link.label}
                        <Icons.ArrowUpRight
                          size={12}
                          className="
                            -ml-1 opacity-0 -translate-x-1
                            transition-all duration-200
                            group-hover:opacity-100 group-hover:translate-x-0
                          "
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div
          className="
            mt-[clamp(2.5rem,6vh,6rem)]
            text-center
          "
        >
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/ThisIsSumit?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="
              text-primary
              font-bold
              text-[clamp(0.6rem,0.75vw,0.75rem)]
              uppercase
              tracking-[0.3em]
              border-b-2
              border-primary/20
              pb-2
              hover:border-primary
              cursor-pointer
              transition-all
              inline-block
            "
          >
            Explore All Projects
          </motion.a>
        </div>

      </div>
    </section>
  );
};