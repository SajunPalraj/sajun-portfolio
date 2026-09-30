import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-white overflow-hidden selection:bg-[#FF6B00]/30 selection:text-[#FF8A00]">
      {/* 3D background animation with subtle rotating orange/white wireframe objects */}
      <TechBackground />

      {/* Sticky navigation bar with mobile drawer */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* About Sajun section */}
      <About />

      {/* Technical skills section */}
      <Skills />

      {/* Featured projects section */}
      <Projects />

      {/* Work experience timeline */}
      <Experience />

      {/* Education & Certifications */}
      <Education />

      {/* Dedicated Resume Download/View section */}
      <Resume />

      {/* Contact & Inquiry form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
