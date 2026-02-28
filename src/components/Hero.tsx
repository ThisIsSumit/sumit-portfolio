import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Github, Linkedin, Instagram, Twitter, BookOpen, Download, Play } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';
import heroImage from '../assets/me.jpeg';

const Typewriter = ({ roles, delay = 100, pause = 2000 }: { roles: string[]; delay?: number; pause?: number }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(role.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles, delay, pause]);

  return (
    <span className="min-h-[1.5em] inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [value, duration]);

  return <motion.span>{rounded}</motion.span>;
};

export const Hero = () => {
  const roles = [
    "Software Developer",
    "Java Developer",
    "Flutter Developer",
    "React Enthusiast",
    "Spring Boot Expert",
    "Microservices Architect"
  ];
   const socialLinks = [
      { Icon: Linkedin, href: 'https://www.linkedin.com/in/sumitthisside', label: 'LinkedIn' },
      { Icon: Github, href: 'https://github.com/ThisIsSumit', label: 'GitHub' },
      { Icon: Instagram, href: 'https://www.instagram.com/s.u.m.i.t_this_side', label: 'Instagram' },
      { Icon: Twitter, href: 'https://x.com/SumitKumar70774', label: 'X (Twitter)' },
      { Icon: BookOpen, href: 'https://www.linkedin.com/in/sumitthisside/details/certifications/', label: 'Certifications' },
      { Icon: Download, href: resumePdf, label: 'Download Resume', download: true }
    ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-20 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left ml-50"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2.5 rounded-md bg-primary text-background text-[10px] font-bold uppercase tracking-wider mb-6 md:mb-10"
          >
            Software Engineer
          </motion.div> 
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-main font-signature text-5xl md:text-7xl font-light"
          >
            Sumit
          </motion.h1>
        
          <motion.h4 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-muted font-signature text-lg md:text-xl ml-0 md:ml-40 mb-8 md:mb-12 font-light"
          >
            This Side
          </motion.h4>
        
          <div className="flex items-center justify-center md:justify-start gap-4 text-lg md:text-xl text-text-muted mb-4 h-10 font-light">
            <Play className="w-5 h-5 text-primary fill-primary shrink-0" />
            <Typewriter roles={roles} />
          </div>

          <div className="w-32 h-[1px] bg-white/10 mb-8 mx-auto md:mx-0" />

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12 md:mb-20">
             {socialLinks.map(({ Icon, href, label, download }) => (
                           <motion.a
                             key={label}
                             href={href}
                             target={download ? undefined : '_blank'}
                             rel={download ? undefined : 'noreferrer'}
                             download={download ? 'Sumit-Resume.pdf' : undefined}
                             aria-label={label}
                             whileHover={{ scale: 1.2, color: '#6ee7b7' }}
                             className="text-text-muted transition-colors"
                           >
                             <Icon size={24} />
                           </motion.a>
                         ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="text-primary font-bold tracking-[0.2em] text-[10px] border-b border-primary/30 pb-2 hover:border-primary transition-all uppercase inline-block"
          >
            LET'S CHAT!
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-center"
        >
          <div className="relative w-full max-w-[500px] md:max-w-[450px] aspect-square rounded-full overflow-hidden border border-white/5 emerald-glow">
            <img 
              src={heroImage}
              alt="Sumit Kumar" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          
          {/* Floating dots with wave motion */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[60%] left-[5%] w-2 md:w-3 h-2 md:h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(110,231,183,0.6)]" 
          />
          <motion.div 
            animate={{ 
              y: [0, 25, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-[65%] right-[0%] w-2 md:w-3 h-2 md:h-3 bg-primary/60 rounded-full" 
          />
        </motion.div>
      </div>

      {/* Stats bar responsive */}
      <div className="mt-20 md:mt-0 md:absolute md:bottom-16 left-60 right-0 pb-12 md:pb-0">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-24">
          <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-light text-text-main tracking-tighter">~<Counter value={1} /></span>
            <div className="text-[8px] text-text-muted uppercase tracking-[0.15em] leading-tight font-light">
              Years<br/>Experience
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-light text-text-main tracking-tighter"><Counter value={1500} />+</span>
            <div className="text-[8px] text-text-muted uppercase tracking-[0.15em] leading-tight font-light">
             open-soruce <br/>Contribuiton<br/> in 2025
            </div>
          </div>
          {/* <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-light text-text-main tracking-tighter">~<Counter value={130} />k</span>
            <div className="text-[8px] text-text-muted uppercase tracking-[0.15em] leading-tight font-light">
              Content<br/>Reach & Views
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
