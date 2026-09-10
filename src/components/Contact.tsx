import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getEnv } from '../lib/env';
import resumePdf from '../assets/resume.pdf';
import {
  Mail,
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

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

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
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      className="
       w-full
    min-h-svh
    flex items-center justify-center
    px-[clamp(1rem,4vw,4rem)]
    py-[clamp(1.5rem,4vh,8rem)]
    overflow-hidden
      "
    >
      <div
        className="
          w-full
          max-w-[1400px]
          
          px-[clamp(1rem,4vw,4rem)]
          py-[clamp(1.5rem,8vh,8rem)]
        "
      >

        {/* Header */}
        <div
          className="
            mb-[clamp(2rem,5vh,5rem)]
            text-center
          "
        >
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
            Connect
          </h3>

          <h2
            className="
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-light
              text-text-main
              mb-3
              tracking-tighter
            "
          >
            Get in touch
          </h2>

          <p
            className="
              text-text-muted
              text-[clamp(0.8rem,1vw,1rem)]
              font-light
              tracking-tight
            "
          >
            Let's build something together :)
          </p>
        </div>

        {/* Main */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-[clamp(1.25rem,3vw,2.5rem)]
            items-center
            max-w-[1100px]
            mx-auto
          "
        >

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              bg-surface
              p-[clamp(1.25rem,2.5vw,2.5rem)]
              rounded-[clamp(1.25rem,2.5vw,2.5rem)]
              border border-white/5
              shadow-2xl
              emerald-glow
            "
          >
            <h3
              className="
                text-primary
                font-bold
                text-[clamp(0.6rem,0.7vw,0.75rem)]
                uppercase
                tracking-[0.2em]
                mb-[clamp(1rem,2vh,1.5rem)]
              "
            >
              Send a Message
            </h3>

            <form
              className="space-y-[clamp(1rem,2vh,1.5rem)]"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="
                    w-full
                    bg-background
                    border border-white/5
                    rounded-xl
                    px-[clamp(0.75rem,1.5vw,1.25rem)]
                    py-[clamp(0.65rem,1vh,1rem)]
                    text-[clamp(0.75rem,0.8vw,0.875rem)]
                    focus:outline-none
                    focus:border-primary/50
                    transition-all
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email address"
                  className="
                    w-full
                    bg-background
                    border border-white/5
                    rounded-xl
                    px-[clamp(0.75rem,1.5vw,1.25rem)]
                    py-[clamp(0.65rem,1vh,1rem)]
                    text-[clamp(0.75rem,0.8vw,0.875rem)]
                    focus:outline-none
                    focus:border-primary/50
                    transition-all
                  "
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can I help you?"
                  className="
                    w-full
                    bg-background
                    border border-white/5
                    rounded-xl
                    px-[clamp(0.75rem,1.5vw,1.25rem)]
                    py-[clamp(0.65rem,1vh,1rem)]
                    text-[clamp(0.75rem,0.8vw,0.875rem)]
                    focus:outline-none
                    focus:border-primary/50
                    transition-all
                    resize-none
                  "
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="
                      flex items-center gap-3
                      p-3 md:p-4
                      bg-emerald-500/10
                      border border-emerald-500/20
                      rounded-xl
                      text-emerald-500
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully!
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="
                      flex items-center gap-3
                      p-3 md:p-4
                      bg-red-500/10
                      border border-red-500/20
                      rounded-xl
                      text-red-500
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
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
                    className="
                      w-full
                      py-[clamp(0.7rem,1vh,1rem)]
                      bg-primary
                      text-background
                      font-black
                      rounded-xl
                      uppercase
                      tracking-widest
                      text-[10px]
                      shadow-lg
                      shadow-primary/20
                      hover:bg-primary-hover
                      transition-all
                      flex items-center
                      justify-center
                      gap-2
                      disabled:opacity-70
                    "
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
          <div className="space-y-[clamp(1rem,2vh,2rem)]">

            <a
              href={mailToLink}
              onClick={(e) => {
                e.preventDefault();
                globalThis.location.href = mailToLink;
              }}
              aria-label="Send email to Sumit"
              className="
                flex items-center justify-between
                p-[clamp(1rem,2vw,2rem)]
                bg-surface
                rounded-[clamp(1rem,2vw,2rem)]
                border border-white/5
                hover:border-primary/30
                transition-all
                group
                shadow-lg
              "
            >
              <div className="flex items-center gap-[clamp(0.75rem,1.5vw,1.5rem)] min-w-0">

                <div
                  className="
                    w-[clamp(2.5rem,4vw,3.5rem)]
                    h-[clamp(2.5rem,4vw,3.5rem)]
                    rounded-2xl
                    bg-primary/10
                    flex items-center
                    justify-center
                    text-primary
                    border border-primary/10
                    shrink-0
                  "
                >
                  <Mail
                    className="
                      w-[clamp(1rem,1.5vw,1.25rem)]
                      h-[clamp(1rem,1.5vw,1.25rem)]
                    "
                  />
                </div>

                <span
                  className="
                    text-[clamp(0.7rem,1vw,1.125rem)]
                    font-bold
                    text-text-muted
                    group-hover:text-text-main
                    transition-colors
                    tracking-tight
                    break-all
                  "
                >
                  {emailAddress}
                </span>
              </div>

              <ChevronRight
                className="
                  w-[clamp(1rem,1.5vw,1.125rem)]
                  h-[clamp(1rem,1.5vw,1.125rem)]
                  text-text-muted
                  group-hover:text-primary
                  transition-all
                  shrink-0
                "
              />
            </a>

            {/* Socials */}
            <div
              className="
                flex justify-center
                flex-wrap
                gap-[clamp(1rem,2vw,1.5rem)]
                pt-[clamp(1rem,2vh,2.5rem)]
              "
            >
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
                  <Icon
                    className="
                      w-[clamp(1rem,1.5vw,1.5rem)]
                      h-[clamp(1rem,1.5vw,1.5rem)]
                    "
                  />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};