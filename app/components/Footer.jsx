'use client';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050505] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold font-outfit text-white">
              Sajun <span className="text-[#FF6B00]">Palraj</span>
            </div>
            <div className="text-sm font-semibold text-[#888888] mt-1">
              MERN Full-Stack Developer
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm font-medium text-[#B8B8B8]">
            <a
              href="https://github.com/sajunpalraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FF6B00] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sajun-palraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FF8A00] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sajunpalraj2004@gmail.com"
              className="flex items-center gap-2 hover:text-[#FF6B00] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#141414] border border-white/[0.10] text-[#B8B8B8] hover:text-white hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <div>
            &copy; 2026 Sajun Palraj. All Rights Reserved.
          </div>
          <div className="text-[#888888]">
            Engineered with Next.js, React, Tailwind CSS, MUI & Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}
