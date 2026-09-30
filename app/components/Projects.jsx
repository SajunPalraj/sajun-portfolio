'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Github, ShoppingBag, Utensils, Check, Calendar, UserCheck } from 'lucide-react';
import { Button } from '@mui/material';

const projects = [
  {
    title: 'Tech Mart – Full-Stack E-Commerce Platform',
    role: 'Full-Stack Developer (MERN Stack)',
    duration: 'Apr 2026 – Jun 2026',
    image: '/images/projects/tech-mart.png',
    icon: ShoppingBag,
    accent: '#FF6B00',
    description: 'Tech Mart is a scalable, high-performance e-commerce solution engineered specifically for computer hardware and electronics. Built with modern MERN architecture and Next.js, it provides seamless catalog navigation, dynamic hardware filtering, and secure checkout workflows.',
    products: ['Gaming Laptops', 'Curved Monitors', 'CPUs & Processors', 'High-End GPUs', 'RGB Accessories'],
    highlights: [
      'Engineered complete hardware catalog with category filtering and real-time MongoDB queries.',
      'Implemented Clerk Authentication for seamless and secure customer sign-in.',
      'Designed responsive, high-aesthetic dark UI using Next.js, React, Material UI, and Tailwind CSS.',
      'Integrated shopping cart state management with Express.js backend RESTful endpoints.',
    ],
    technologies: [
      'React',
      'Next.js',
      'MUI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Clerk',
    ],
    github: 'https://github.com/sajunpalraj',
    demo: 'https://techmarts.duckdns.org/',
  },
  {
    title: 'Tasty – Food Delivery Platform',
    role: 'Frontend Developer',
    duration: 'Dec 2025',
    image: '/images/projects/tasty.png',
    icon: Utensils,
    accent: '#FF8A00',
    description: 'A responsive and intuitive food delivery web interface designed to provide an effortless customer journey from exploring appetizing restaurant menus to placing and tracking orders.',
    products: ['Gourmet Burgers', 'Artisanal Pizzas', 'Ramen Bowls', 'Fast Delivery Tracking'],
    highlights: [
      'Constructed highly responsive, mobile-first frontend with React and Tailwind CSS.',
      'Designed polished restaurant and meal showcase cards using Material UI primitives.',
      'Implemented interactive menu category filters and instant cart review workflows.',
      'Focused on ultra-fast page rendering and delightful micro-interactions.',
    ],
    technologies: [
      'HTML',
      'Tailwind CSS',
      'MUI',
      'React',
    ],
    github: 'https://github.com/sajunpalraj',
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-3">
            Featured Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Production-Grade <span className="text-gradient-orange">Projects</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Real-world full-stack and frontend applications built by Sajun, demonstrating architecture planning, robust API integration, modern UI aesthetics, and responsive performance.
          </p>
        </ScrollReveal>

        {/* Project Cards Stack */}
        <div className="space-y-14">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isReversed = idx % 2 === 1;

            return (
              <ScrollReveal key={project.title} delay={0.2 * idx}>
                <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.10] hover:border-[#FF6B00]/40 transition-all duration-300 relative overflow-hidden group">
                  
                  {/* Ambient subtle card glow */}
                  <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity"
                    style={{ backgroundColor: project.accent }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Project Preview Image */}
                    <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.10] shadow-2xl bg-[#121212] group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Project Category Tag */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#0D0D0D]/90 backdrop-blur-md border border-white/[0.15] text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                          <Icon className="w-3.5 h-3.5" style={{ color: project.accent }} />
                          <span>{project.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                      {/* Meta pills */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-[#888888] font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#888888]" />
                          {project.duration}
                        </span>
                        <span className="text-[#333333]">•</span>
                        <span className="flex items-center gap-1 font-semibold" style={{ color: project.accent }}>
                          <UserCheck className="w-3.5 h-3.5" />
                          {project.role}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Featured Products / Categories */}
                      {project.products && (
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-2">
                            Featured Hardware & Categories:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.products.map((prod) => (
                              <span
                                key={prod}
                                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-[#D4D4D4] font-medium"
                              >
                                {prod}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-1">
                        {project.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D4]">
                            <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: project.accent }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-[#161616] border border-white/[0.08] text-xs font-semibold text-[#D4D4D4]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              variant="outlined"
                              size="medium"
                              startIcon={<Github className="w-4 h-4" />}
                              sx={{
                                borderColor: 'rgba(255,255,255,0.22)',
                                color: '#FFFFFF',
                                borderRadius: '12px',
                                px: 3,
                                py: 1.1,
                                fontWeight: 600,
                                textTransform: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                '&:hover': {
                                  borderColor: '#FF6B00',
                                  color: '#FFFFFF',
                                  backgroundColor: 'rgba(255, 107, 0, 0.1)',
                                  boxShadow: '0 0 16px rgba(255, 107, 0, 0.3)',
                                  transform: 'scale(1.04)',
                                },
                              }}
                            >
                              GitHub
                            </Button>
                          </a>
                        )}

                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              variant="contained"
                              size="medium"
                              endIcon={<ExternalLink className="w-4 h-4 text-white" />}
                              sx={{
                                background: 'linear-gradient(135deg, #FF6B00 0%, #FF8A00 100%)',
                                color: '#FFFFFF',
                                fontWeight: 700,
                                borderRadius: '12px',
                                px: 3,
                                py: 1.1,
                                textTransform: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(255, 107, 0, 0.35)',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #FF8A00 0%, #FFA033 100%)',
                                  boxShadow: '0 6px 26px rgba(255, 107, 0, 0.65)',
                                  transform: 'scale(1.04)',
                                },
                              }}
                            >
                              Live Demo
                            </Button>
                          </a>
                        ) : (
                          <span className="text-xs text-[#888888] font-medium px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            Demo available on request / repository
                          </span>
                        )}
                      </div>

                    </div>

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
