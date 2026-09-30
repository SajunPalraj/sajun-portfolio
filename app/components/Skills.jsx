'use client';
import ScrollReveal from './ScrollReveal';
import { 
  Code, 
  Layers, 
  Database, 
  Wrench, 
  HeartHandshake, 
  CheckCircle,
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: Code,
    accent: '#FF6B00',
    skills: [
      { name: 'JavaScript', tag: 'ES6+' },
      { name: 'SQL', tag: 'Queries & Schemas' },
      { name: 'Python', tag: 'Scripting & Logic' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    accent: '#FF8A00',
    skills: [
      { name: 'React', tag: 'Components & Hooks' },
      { name: 'Next.js', tag: 'App Router & SSR' },
      { name: 'Tailwind CSS', tag: 'Modern Styling' },
      { name: 'MUI', tag: 'Material Components' },
      { name: 'Node.js', tag: 'Backend Runtime' },
      { name: 'Express', tag: 'REST APIs' },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    accent: '#FF6B00',
    skills: [
      { name: 'MongoDB', tag: 'NoSQL & Mongoose' },
      { name: 'MySQL', tag: 'Relational & Joins' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    accent: '#FFFFFF',
    skills: [
      { name: 'Visual Studio Code', tag: 'Primary IDE' },
      { name: 'Anti-Gravity AI', tag: 'Agentic Workflows' },
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'ChatGPT', tag: 'AI Assistance' },
      { name: 'Gemini', tag: 'AI Assistance' },
      { name: 'Claude', tag: 'AI Assistance' },
    ],
  },
  {
    category: 'Soft Skills',
    icon: HeartHandshake,
    accent: '#FF8A00',
    skills: [
      { name: 'Communication', tag: 'Clear & Proactive' },
      { name: 'Teamwork', tag: 'Collaborative' },
      { name: 'Adaptability', tag: 'Fast Learner' },
      { name: 'Collaboration', tag: 'Cross-functional' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-semibold uppercase tracking-widest text-[#FF8A00] mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
            Skills & <span className="text-gradient-orange">Expertise</span>
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            A comprehensive overview of programming languages, frameworks, database architectures, and developer tools Sajun utilizes to build production-grade web applications.
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.category} delay={0.1 * idx}>
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.10] h-full flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${cat.accent === '#FFFFFF' ? 'rgba(255,255,255,0.08)' : `${cat.accent}18`}`,
                            color: cat.accent,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold font-outfit text-white">
                          {cat.category}
                        </h3>
                      </div>
                      <span className="text-xs text-[#888888] font-mono">
                        {cat.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="px-3.5 py-2 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-[#FF6B00]/50 transition-all flex flex-col group/skill"
                        >
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                            <span className="text-sm font-semibold text-[#D4D4D4] group-hover/skill:text-white">
                              {skill.name}
                            </span>
                          </div>
                          {skill.tag && (
                            <span className="text-[10px] text-[#888888] pl-5">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom accent line */}
                  <div
                    className="h-1 w-12 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: cat.accent }}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
