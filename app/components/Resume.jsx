'use client';
import ScrollReveal from './ScrollReveal';
import { FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '@mui/material';

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#121212] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden text-center">
            
            {/* Background ambient lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(255,107,0,0.14)_0%,transparent_70%)] blur-2xl pointer-events-none" />

            {/* Icon badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-[#FF8A00]/20 border border-white/[0.15] text-[#FF6B00] mb-6 shadow-lg">
              <FileText className="w-8 h-8" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
              Want to know more about <span className="text-gradient-orange">Sajun</span>?
            </h2>

            {/* Description */}
            <p className="text-[#B8B8B8] text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Download my resume to explore my technical skills, projects, education and professional experience.
            </p>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-xs sm:text-sm text-[#D4D4D4]">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>MERN Full-Stack</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                <span>Next.js & React</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>BE CSE 8.5 CGPA</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>Verified Credentials</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ExternalLink className="w-5 h-5" />}
                  sx={{
                    borderColor: 'rgba(255, 107, 0, 0.6)',
                    color: '#FF6B00',
                    py: '12px',
                    px: '28px',
                    fontWeight: 700,
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      borderColor: '#FF8A00',
                      backgroundColor: 'rgba(255, 107, 0, 0.1)',
                      boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)',
                    },
                  }}
                >
                  View Resume
                </Button>
              </a>

              <a
                href="/resume.pdf"
                download="Sajun_Palraj_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download className="w-5 h-5" />}
                  sx={{
                    background: 'linear-gradient(135deg, #FF6B00 0%, #FF8A00 100%)',
                    color: '#FFFFFF',
                    py: '12px',
                    px: '28px',
                    fontWeight: 700,
                    width: { xs: '100%', sm: 'auto' },
                    boxShadow: '0 4px 20px rgba(255, 107, 0, 0.35)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FF8A00 0%, #FFA033 100%)',
                      boxShadow: '0 6px 28px rgba(255, 107, 0, 0.55)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </a>
            </div>

            {/* File Info */}
            <div className="mt-6 text-xs text-[#888888]">
              Format: Standard PDF (A4) • Verified resume • Direct download
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
