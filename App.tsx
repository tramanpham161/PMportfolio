import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ProjectDetail from './components/ProjectDetail.tsx';
import AboutView from './components/AboutView.tsx';
import { Project } from './types.ts';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  // Handle body scroll when project detail is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const goToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToAbout = () => {
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-clay selection:text-white">
      {/* Navigation - Minimal & Warm */}
      <nav className="fixed top-0 w-full z-50 bg-linen/90 backdrop-blur-md border-b border-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={goToHome}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-sage group-hover:text-clay transition-colors">PM.ARCHIVE // 2026</span>
            <div className="w-1.5 h-1.5 bg-clay rounded-full"></div>
            <span className="text-[11px] font-bold uppercase tracking-normal text-charcoal/60">Leyland — UK</span>
          </div>
          
          <div className="flex items-center space-x-8 md:space-x-12">
            <div className="hidden md:flex items-center space-x-10">
              <button 
                onClick={goToHome}
                className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${currentView === 'home' ? 'text-clay' : 'hover:text-clay'}`}
              >
                Home
              </button>
              <button 
                onClick={goToAbout}
                className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${currentView === 'about' ? 'text-clay' : 'hover:text-clay'}`}
              >
                About
              </button>
            </div>
            <a 
              href="https://www.linkedin.com/in/tramanhpham161/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-charcoal text-linen px-5 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-clay transition-all shadow-lg shadow-clay/10"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      {currentView === 'home' ? (
        <main className="pt-16 max-w-[1400px] mx-auto px-6 lg:px-12 overflow-hidden animate-in fade-in duration-700">
          {/* Hero Section */}
          <section className="py-12 md:py-20 border-b border-charcoal/10">
            <div className="flex flex-col space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sage">Early Years • Product Management</span>
              <h1 className="text-huge font-black uppercase tracking-[0.03em]">
                Designing for <br/>
                <span className="text-clay italic font-serif normal-case tracking-normal lowercase text-[0.7em] block mt-2">everyday realities.</span>
              </h1>
              <div className="max-w-4xl pt-4">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-charcoal/90">
                  Turning lived experience into practical solutions for everyday problems, especially in <span className="underline decoration-clay/30 underline-offset-[12px] decoration-2">parenting</span> and <span className="underline decoration-clay/30 underline-offset-[12px] decoration-2">early childhood.</span>
                </p>
              </div>
            </div>
          </section>

          {/* How I Work Section */}
          <section id="about" className="grid md:grid-cols-12 border-b border-charcoal/10 scroll-mt-24">
            <div className="md:col-span-4 p-8 md:p-12 lg:p-14 border-b md:border-b-0 md:border-r border-charcoal/10 bg-white">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-sage">How I work</h2>
              <h3 className="text-xl md:text-2xl font-black mb-4 leading-[1.2] tracking-[0.05em] max-w-xs">Empathy as a <br/>Technical <br/>Constraint.</h3>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed font-medium max-w-xs tracking-normal">
                My approach combines UK-based motherhood immersion with a cross-cultural lens to anticipate non-obvious parent friction.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 bg-[#F5F2ED]">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className={`p-8 md:p-10 lg:p-12 border-charcoal/5 ${idx % 2 === 0 ? 'sm:border-r' : ''} ${idx < 2 ? 'border-b' : ''} hover:bg-white transition-colors duration-500`}>
                  <span className="font-mono text-[9px] font-bold text-clay block mb-3 uppercase tracking-[0.2em]">FRAMEWORK / {idx + 1}</span>
                  <h4 className="text-lg md:text-xl font-black mb-2 leading-relaxed text-charcoal">{skill.name}</h4>
                  <p className="text-sm md:text-base text-charcoal/70 leading-relaxed font-medium">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="py-12 md:py-20 border-b border-charcoal/10">
            <div className="flex flex-col md:flex-row md:items-start justify-start mb-12 gap-8 md:gap-24">
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-[0.05em] min-w-fit">Projects</h2>
              <div className="max-w-xl font-mono text-base text-sage uppercase leading-relaxed tracking-[0.1em] font-bold pt-1">
                Practical challenges uncovered through everyday parenting life, translated into digital solutions.
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {PROJECTS.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={idx + 1} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </section>

          {/* Insights Section - Highly Compact Version */}
          <section id="insights" className="py-8 md:py-10 grid lg:grid-cols-12 gap-0 border-b border-charcoal/10 bg-charcoal text-linen -mx-6 lg:-mx-12 px-6 lg:px-12">
            <div className="lg:col-span-6 py-4 md:py-6 lg:pr-24 flex flex-col justify-center">
              <span className="font-mono text-xs font-bold text-clay uppercase tracking-[0.2em] block mb-2">Continuous Discovery</span>
              <h2 className="text-xl md:text-3xl font-black uppercase mb-3 leading-[1.2] tracking-[0.05em]">Product Learnings from <br/>Everyday Parenting</h2>
              
              <p className="text-base md:text-lg text-linen/70 font-medium mb-4 leading-relaxed max-w-2xl tracking-normal">
                Independent, non-commercial reviews of parenting products, services, and resources.
              </p>

              <div className="space-y-1.5 mb-6">
                {[
                  "Hands-on testing in real-life parenting contexts",
                  "Focus on usability, clarity, and everyday practicality",
                  "Honest reflections on what works and what doesn’t",
                  "Ongoing qualitative insight into parent needs and behaviour"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <div className="mt-1.5 w-1 h-1 bg-clay rounded-full group-hover:scale-150 transition-transform flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-linen/80 font-medium leading-tight tracking-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a 
                href="https://mumreview1.wordpress.com" 
                target="_blank" 
                className="inline-flex items-center space-x-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-clay hover:text-white transition-all group w-fit"
              >
                <span className="border-b border-transparent group-hover:border-white pb-1">Explore The Honest Mum Reviews blog</span>
                <div className="p-2 border border-clay rounded-full group-hover:bg-clay group-hover:text-charcoal transition-all"><ArrowRight size={14} /></div>
              </a>
            </div>
            
            <a 
              href="https://mumreview1.wordpress.com/2026/01/02/kids-12v-john-deere-ride-on-tractor-with-trailer-remote-control-the-perfect-gift/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-6 relative group overflow-hidden border-l border-linen/10 h-[220px] lg:h-[320px] block"
            >
              <img 
                src="https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/tractor%20review.jpg" 
                className="w-full h-full object-cover opacity-30 hover:opacity-60 transition-all duration-[2000ms] grayscale group-hover:grayscale-0"
                alt="Research"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent"></div>
              <div className="absolute bottom-6 left-8 right-8">
                <span className="font-mono text-[9px] text-clay uppercase tracking-[0.2em] block mb-1">Sample Blog Post</span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight max-w-md">Kids 12V John Deere ride-on Tractor with Trailer & Remote Control – the perfect gift!</h3>
              </div>
            </a>
          </section>

          {/* Contact/CTA */}
          <section className="py-16 md:py-20 flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl font-black mb-3 tracking-tight">
              Get in touch at <a href="mailto:tramanh.pham161@gmail.com" className="text-clay hover:underline">tramanh.pham161@gmail.com</a>
            </h2>
          </section>
        </main>
      ) : (
        <AboutView onGoToResume={goToAbout} />
      )}

      <footer className="bg-[#F5F2ED] border-t border-charcoal/5 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2">
             <span className="font-mono text-[10px] font-bold text-sage uppercase tracking-[0.3em]">© 2026 PRODUCT ARCHIVE // v1.2</span>
             <span className="text-[11px] font-bold uppercase tracking-normal text-charcoal/30">Designed by PM for PMs</span>
          </div>
          <div className="flex space-x-12">
            <span className="font-mono text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.2em]">Leyland, United Kingdom</span>
            <span className="font-mono text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.2em]">Early Years Domain Depth</span>
          </div>
        </div>
      </footer>

      {/* Full Page Project Detail Overlay */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
