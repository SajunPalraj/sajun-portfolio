'use client';
import ScrollReveal from './ScrollReveal';
import { Layers, Lightbulb, CheckCircle2, Zap, Users, RefreshCw, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const valueCards = [
  {
    title: 'Full-Stack Development',
    description: 'Expertise in constructing end-to-end web architectures, bridging intuitive React/Next.js frontends with robust Node.js/Express backends.',
    icon: Layers,
    accent: '#FF6B00',
    borderClass: 'hover:border-[#FF6B00]/60',
    iconBg: 'bg-[#FF6B00]/10 text-[#FF6B00]',
  },
  {
    title: 'Problem Solving',
    description: 'Disciplined approach to analytical thinking, debugging complex application states, and architecting elegant algorithmic solutions.',
    icon: Lightbulb,
    accent: '#FF8A00',
    borderClass: 'hover:border-[#FF8A00]/60',
    iconBg: 'bg-[#FF8A00]/10 text-[#FF8A00]',
  },
  {
    title: 'Clean Code',
    description: 'Adherence to modular component patterns, maintainable folder structures, clear naming conventions, and industry standard best practices.',
    icon: CheckCircle2,
    accent: '#FFFFFF',
    borderClass: 'hover:border-white/40',
    iconBg: 'bg-white/10 text-white',
  },
  {
    title: 'Performance',
    description: 'Optimizing web vitals, server-side rendering, bundle splitting, and efficient database querying for lightning-fast responsiveness.',
    icon: Zap,
    accent: '#FF6B00',
    borderClass: 'hover:border-[#FF6B00]/60',
    iconBg: 'bg-[#FF6B00]/10 text-[#FF6B00]',
  },
  {
    title: 'Teamwork',
    description: 'Collaborative mindset with experience in agile workflows, clear communication, code reviews, and cross-functional team synergy.',
    icon: Users,
    accent: '#FF8A00',
    borderClass: 'hover:border-[#FF8A00]/60',
    iconBg: 'bg-[#FF8A00]/10 text-[#FF8A00]',
  },
  {
    title: 'Adaptability',
    description: 'Continuous learner eager to master modern web technologies, AI development workflows, and solve emerging software challenges.',
    icon: RefreshCw,
    accent: '#FFFFFF',
    borderClass: 'hover:border-white/40',
    iconBg: 'bg-white/10 text-white',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF8A00] mb-3">
            About Sajun Palraj
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Passionate About Crafting <span className="text-gradient-orange">Scalable Web Solutions</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            A results-oriented Full-Stack Developer with a foundational Computer Science Engineering background, dedicated to building responsive, modern user experiences and solid backend services.
          </p>
        </ScrollReveal>

        {/* Highlight Summary Box */}
        <ScrollReveal delay={0.2} className="mb-16">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/[0.10] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF6B00]/10 via-[#FF8A00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-[#D4D4D4] leading-relaxed text-base sm:text-lg">
                <p>
                  I am a <strong className="text-white">Computer Science and Engineering graduate</strong> from Ponjesly College of Engineering with an academic CGPA of <strong className="text-[#FF6B00]">8.5</strong>. My development journey revolves around mastering full-stack web technologies, with special emphasis on the <strong className="text-[#FF8A00]">MERN stack</strong> (MongoDB, Express, React, Node.js), <strong className="text-white">Next.js</strong>, <strong className="text-white">Tailwind CSS</strong>, and relational <strong className="text-white">SQL</strong> databases.
                </p>
                <p>
                  Through intensive internships at <strong className="text-white">Shiro Software Solutions</strong> and <strong className="text-white">JCS Infotech</strong>, as well as production-ready projects like <strong className="text-[#FF6B00]">Tech Mart</strong> and <strong className="text-white">Tasty</strong>, I have cultivated hands-on expertise in frontend-backend integration, authentication, state management, and responsive UI engineering.
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.10]">
                  <div className="flex items-center gap-2 text-[#FF6B00] mb-1">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#888888]">Education</span>
                  </div>
                  <div className="text-sm font-bold text-white">BE Computer Science</div>
                  <div className="text-xs text-[#B8B8B8]">8.5 CGPA</div>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.10]">
                  <div className="flex items-center gap-2 text-[#FF8A00] mb-1">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#888888]">Location</span>
                  </div>
                  <div className="text-sm font-bold text-white">Nagercoil</div>
                  <div className="text-xs text-[#B8B8B8]">Tamil Nadu, India</div>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.10]">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#888888]">Experience</span>
                  </div>
                  <div className="text-sm font-bold text-white">2 Internships</div>
                  <div className="text-xs text-[#B8B8B8]">MERN & Java SQL</div>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.10]">
                  <div className="flex items-center gap-2 text-[#FF6B00] mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#888888]">Focus</span>
                  </div>
                  <div className="text-sm font-bold text-white">Full-Stack Web</div>
                  <div className="text-xs text-[#B8B8B8]">MERN & Next.js</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Value Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={0.1 * idx}>
                <div
                  className={`h-full p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover border transition-all duration-300 flex flex-col justify-between ${card.borderClass}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit text-white mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-[#B8B8B8] text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
