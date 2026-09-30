'use client';
import ScrollReveal from './ScrollReveal';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'MERN Full Stack Development',
    issuer: 'Karka Software Academy',
    date: 'Jun 2026',
    description: 'Comprehensive specialization covering MongoDB database administration, Express.js REST APIs, React state architecture, Node.js asynchronous backends, and full-stack deployment.',
    badge: 'MERN Certified',
    accent: '#FF6B00',
  },
  {
    title: 'Prompt Engineering Certification',
    issuer: 'Infosys Springboard',
    date: 'Jul 2025',
    description: 'Mastery in constructing precision LLM prompts, agentic workflows, chain-of-thought orchestration, and AI-accelerated developer productivity.',
    badge: 'AI & Prompts',
    accent: '#FF8A00',
  },
  {
    title: 'Microsoft Office Essentials',
    issuer: 'Naan Mudhalvan',
    date: 'Jul 2025',
    description: 'Professional computing, productivity software suite, spreadsheet modeling, and technical documentation fundamentals.',
    badge: 'Productivity',
    accent: '#FFFFFF',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-3">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Education & <span className="text-gradient-orange">Certifications</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Academic foundation in Computer Science Engineering and industry-recognized certifications validating modern full-stack development skills.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/[0.10] relative overflow-hidden h-full">
                
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-xs font-bold text-[#FF8A00]">
                    Undergraduate Degree
                  </span>
                  <span className="text-xs font-semibold text-[#888888] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    2022 – 2026
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-outfit text-white mt-4 mb-1">
                  Bachelor of Engineering
                </h3>
                <div className="text-lg font-semibold text-[#FF8A00] mb-4">
                  Computer Science Engineering
                </div>

                <div className="space-y-3 text-sm text-[#D4D4D4] border-y border-white/[0.08] py-4 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="font-medium text-white">Ponjesly College of Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888888]">
                    <MapPin className="w-4 h-4 text-[#888888] shrink-0" />
                    <span>Nagercoil, Tamil Nadu, India</span>
                  </div>
                </div>

                {/* CGPA Highlight Box */}
                <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.10] flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#888888] font-semibold uppercase tracking-wider">Cumulative GPA</div>
                    <div className="text-2xl font-black text-white font-outfit">8.5 / 10.0</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#FF6B00] text-white font-extrabold text-xs shadow-md">
                    First Class
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Certifications Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={cert.title} delay={0.15 * idx} direction="left">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.10] relative group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: cert.accent === '#FFFFFF' ? 'rgba(255,255,255,0.08)' : `${cert.accent}18`,
                          color: cert.accent,
                        }}
                      >
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold font-outfit text-white leading-tight">
                          {cert.title}
                        </h4>
                        <div className="text-xs font-semibold text-[#888888] mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span
                        className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${cert.accent === '#FFFFFF' ? 'rgba(255,255,255,0.08)' : `${cert.accent}18`}`,
                          color: cert.accent,
                          border: `1px solid ${cert.accent === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : `${cert.accent}40`}`,
                        }}
                      >
                        {cert.badge}
                      </span>
                      <span className="text-xs text-[#888888] font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed pl-0 sm:pl-13">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
