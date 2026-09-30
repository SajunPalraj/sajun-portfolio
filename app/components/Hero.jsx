'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Database } from 'lucide-react';
import { Button } from '@mui/material';

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-24 lg:pb-0 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status / Role pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF8A00] text-xs sm:text-sm font-semibold mb-5 tracking-wide shadow-[0_0_20px_rgba(255,107,0,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span>Available for Full-Stack Opportunities</span>
            </motion.div>

            {/* Sub-greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg sm:text-xl font-medium text-[#B8B8B8] mb-1"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-outfit text-white mb-3"
            >
              Sajun <span className="text-gradient-orange">Palraj</span>
            </motion.h1>

            {/* Title / Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8A00] to-[#FF6B00]"
            >
              MERN Full-Stack Developer
            </motion.h2>

            {/* Concise Resume-derived Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed max-w-2xl mb-8"
            >
              Computer Science Engineering graduate passionate about building responsive, scalable full-stack web applications with <span className="text-white font-semibold">MongoDB</span>, <span className="text-white font-semibold">Express</span>, <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Node.js</span>, and <span className="text-[#FF6B00] font-semibold">Next.js</span>. Focused on clean architecture, seamless frontend-backend integration, and high performance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full sm:w-auto !py-3 !px-7 font-bold shadow-lg"
                >
                  View Projects
                </Button>
              </a>

              <a
                href="/resume.pdf"
                download="Sajun_Palraj_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<Download className="w-4 h-4 text-[#FF6B00]" />}
                  className="w-full sm:w-auto !py-3 !px-7 font-bold shadow-lg"
                >
                  Download Resume
                </Button>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="w-full sm:w-auto !py-3 !px-7 font-semibold"
                >
                  Contact Me
                </Button>
              </a>
            </motion.div>

            {/* Social Links & Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex items-center gap-6 pt-2 text-[#888888]"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-[#888888]">Connect:</span>
              <a
                href="https://github.com/sajunpalraj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-[#141414] border border-white/[0.10] text-[#B8B8B8] hover:text-[#FF6B00] hover:border-[#FF6B00]/60 hover:bg-[#FF6B00]/10 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sajun-palraj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-[#141414] border border-white/[0.10] text-[#B8B8B8] hover:text-[#FF6B00] hover:border-[#FF6B00]/60 hover:bg-[#FF6B00]/10 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sajunpalraj2004@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-full bg-[#141414] border border-white/[0.10] text-[#B8B8B8] hover:text-[#FF6B00] hover:border-[#FF6B00]/60 hover:bg-[#FF6B00]/10 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-xs font-medium text-[#B8B8B8] border-l border-white/[0.10] pl-4 py-1">
                📍 Nagercoil, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Sajun's Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px]">
              
              {/* Outer Glowing Warm Orange Rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FF6B00] via-[#FF8A00] to-white/20 opacity-30 blur-xl animate-pulse-slow" />
              
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#FF6B00] via-[#FF8A00] to-white/30 p-[2.5px] shadow-[0_0_35px_rgba(255,107,0,0.30)]">
                <div className="w-full h-full rounded-full bg-[#080808]" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#141414] shadow-2xl">
                <Image
                  src="/images/profile/sajun-profile.jpg"
                  alt="Sajun Palraj - MERN Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 390px"
                />
              </div>

              {/* Floating Tech Badge 1: MERN / React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:top-2 sm:left-0 px-3.5 py-2 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/[0.12] shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[#FF6B00]" />
                <div className="text-left">
                  <div className="text-[10px] text-[#888888] font-medium">Stack</div>
                  <div className="text-xs font-bold text-white">MERN & Next.js</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 2: Experience / Full Stack */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-0 px-3.5 py-2 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#FF6B00]/40 shadow-[0_8px_20px_rgba(255,107,0,0.25)] flex items-center gap-2"
              >
                <Database className="w-4 h-4 text-[#FF8A00]" />
                <div className="text-left">
                  <div className="text-[10px] text-[#888888] font-medium">Specialty</div>
                  <div className="text-xs font-bold text-white">Full-Stack Web</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 3: Engineering */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="hidden sm:flex absolute bottom-2 -left-6 px-3 py-1.5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/[0.12] shadow-[0_8px_20px_rgba(0,0,0,0.6)] items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="text-xs font-semibold text-white">BE CSE (8.5 CGPA)</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
