'use client';
import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@mui/material';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.10] shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-xl md:text-2xl font-extrabold tracking-tight font-outfit"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF8A00] flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(255,107,0,0.4)] group-hover:scale-105 transition-transform">
            SP
          </span>
          <span className="text-white">
            Sajun <span className="text-[#FF6B00]">Palraj</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-[#FF6B00] bg-[#FF6B00]/10 font-semibold shadow-[0_0_12px_rgba(255,107,0,0.15)]'
                    : 'text-[#B8B8B8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Resume Link / Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            <Button
              variant="outlined"
              size="small"
              startIcon={<FileText className="w-4 h-4" />}
              sx={{
                borderColor: 'rgba(255, 107, 0, 0.6)',
                color: '#FF6B00',
                '&:hover': {
                  borderColor: '#FF8A00',
                  backgroundColor: 'rgba(255, 107, 0, 0.1)',
                  boxShadow: '0 0 16px rgba(255, 107, 0, 0.3)',
                },
                fontSize: '0.85rem',
                py: '6px',
                px: '14px',
              }}
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-[#FF6B00] text-[#FF6B00]"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.10] text-[#B8B8B8] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-white/[0.10] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#FF6B00] bg-[#FF6B00]/15 font-semibold'
                    : 'text-[#B8B8B8] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] text-white font-bold text-center shadow-lg"
            >
              <FileText className="w-5 h-5" />
              View Resume (PDF)
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
