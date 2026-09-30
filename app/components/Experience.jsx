'use client';
import ScrollReveal from './ScrollReveal';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Java Intern',
    company: 'JCS Infotech',
    year: '2025',
    location: 'On-site, Nagercoil',
    type: 'Internship',
    accent: '#FF6B00',
    description: 'Focused on core Java object-oriented programming, data structures with the Collections framework, and JDBC database connectivity, architecting robust backend components wired to relational SQL databases.',
    bullets: [
      'Mastered object-oriented software patterns, encapsulation, and exception management in Java.',
      'Constructed JDBC data-access layers to execute complex SQL queries, transactions, and updates.',
      'Developed and tested modular backend business logic connected to relational databases.',
    ],
    technologies: ['Java', 'SQL', 'OOP', 'JDBC'],
  },
  {
    role: 'Web Development Internship',
    company: 'Shiro Software Solutions',
    year: '2024',
    location: 'On-site, Nagercoil',
    type: 'Internship',
    accent: '#FF8A00',
    description: 'Hands-on development building MERN stack web applications and Java solutions, encompassing frontend-backend integration, SQL database management, REST API workflows, and responsive UI/UX design.',
    bullets: [
      'Developed responsive user interfaces with HTML, CSS, JavaScript, and React.js.',
      'Collaborated on backend service architecture with Node.js, Express, and SQL database management.',
      'Built and integrated RESTful endpoints, validating data payloads and ensuring seamless client-server interaction.',
      'Refined understanding of Git version control, component lifecycles, and modern UI/UX standards.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'SQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF8A00] mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Work <span className="text-gradient-orange">Experience</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Professional internships where Sajun applied software engineering principles, backend database design, and modern full-stack web development.
          </p>
        </ScrollReveal>

        {/* Modern Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central/left spine line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-[#FF6B00] via-[#FF8A00] to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <ScrollReveal key={exp.role} delay={0.2 * idx}>
                  <div className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    
                    {/* Center Timeline Node */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121212] border-2 flex items-center justify-center shadow-lg z-20"
                         style={{ borderColor: exp.accent }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: exp.accent }} />
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full sm:w-[calc(50%-36px)] pl-12 sm:pl-0 ${isEven ? 'sm:text-left' : 'sm:text-left'}`}>
                      <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.10] relative group">
                        
                        {/* Top meta tags */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
                            style={{
                              backgroundColor: `${exp.accent}15`,
                              color: exp.accent,
                              border: `1px solid ${exp.accent}40`,
                            }}
                          >
                            {exp.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#888888]">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.year}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[#B8B8B8] font-medium mb-4">
                          <span className="text-white font-semibold flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-[#FF6B00]" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#888888]">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#D4D4D4] text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Bullets */}
                        <div className="space-y-2 mb-5">
                          {exp.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D4D4D4]">
                              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: exp.accent }} />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#B8B8B8]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
