import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getEnv } from '../lib/env';
import resumePdf from '../assets/resume.pdf';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  BookOpen, 
  Download, 
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const Contact = () => {
  const formspreeEndpoint =
    getEnv('VITE_FORMSPREE_ENDPOINT') || getEnv('VITE_FORMSPREE_URL');
  const emailAddress = getEnv('VITE_EMAIL_ADDRESS');
  const mailToLink = `mailto:${emailAddress}`;

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sumitthisside', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/ThisIsSumit', label: 'GitHub' },
    { Icon: Instagram, href: 'https://www.instagram.com/s.u.m.i.t_this_side', label: 'Instagram' },
    { Icon: Twitter, href: 'https://x.com/SumitKumar70774', label: 'X (Twitter)' },
    { Icon: BookOpen, href: 'https://www.linkedin.com/in/sumitthisside/details/certifications/', label: 'Certifications' },
    { Icon: Download, href: resumePdf, label: 'Download Resume', download: true }
  ];

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!formspreeEndpoint) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface/30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-20 text-center">
          <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">Connect</h3>
          <h2 className="text-3xl md:text-5xl font-light text-text-main mb-4 tracking-tighter">Get in touch</h2>
          <p className="text-text-muted text-base font-light tracking-tight">Let's build something together :)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/5 shadow-2xl emerald-glow"
          >
            <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-background border border-white/5 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-xs font-bold uppercase tracking-wider"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully!
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold uppercase tracking-wider"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please try again.
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-background font-black rounded-xl uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <a
              href={mailToLink}
              onClick={(e) => {
                e.preventDefault();
                globalThis.location.href = mailToLink;
              }}
              aria-label="Send email to Sumit"
              className="flex items-center justify-between p-6 md:p-8 bg-surface rounded-[24px] md:rounded-[32px] border border-white/5 hover:border-primary/30 transition-all group shadow-lg"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-sm md:text-lg font-bold text-text-muted group-hover:text-text-main transition-colors tracking-tight break-all">{emailAddress}</span>
              </div>
              <ChevronRight size={18} className="text-text-muted group-hover:text-primary transition-all shrink-0" />
            </a>

           

            <div className="flex justify-center gap-6 pt-6 md:pt-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};
