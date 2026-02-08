import React from 'react';
import { Project } from '../types.ts';
import { X, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import Slideshow from './Slideshow.tsx';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const renderFeature = (feature: string) => {
    const colonIndex = feature.indexOf(':');
    const keyTerms = ['Problem', 'Research', 'Solution', 'Key features', 'Impact', 'Future'];
    const potentialKey = feature.substring(0, colonIndex);
    
    if (colonIndex > -1 && keyTerms.includes(potentialKey)) {
      return (
        <span className="text-[15px] font-bold tracking-normal leading-relaxed text-charcoal/80">
          <strong className="font-black text-charcoal">{potentialKey}:</strong>
          {feature.substring(colonIndex + 1)}
        </span>
      );
    }
    
    return (
      <span className="text-[15px] font-bold tracking-normal leading-relaxed text-charcoal/80">
        {feature}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-linen overflow-y-auto animate-in fade-in duration-500">
      {/* Header / Sticky Nav */}
      <nav className="sticky top-0 w-full z-10 bg-linen/90 backdrop-blur-md border-b border-charcoal/5 px-6 lg:px-12 h-16 flex items-center justify-between">
        <button 
          onClick={onClose}
          className="flex items-center space-x-4 font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-clay transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>
        <button 
          onClick={onClose}
          className="p-3 hover:bg-charcoal/5 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Project Hero Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sage mb-6 block">Case Study / Overview</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-4">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="text-xl md:text-2xl italic text-clay font-medium mb-10 leading-relaxed">
              {project.tagline}
            </p>
          )}
          <div className="space-y-4">
             <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-sage">The Problem</h4>
             <p className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-charcoal/90">
               {project.userProblem}
             </p>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-20">
          <div className="border border-charcoal/5 p-2 bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/5">
            <Slideshow screenshots={project.screenshots} />
          </div>
        </div>

        {/* Strategy Grid */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-7 space-y-20">
            {/* Context & Research */}
            <section className="space-y-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sage border-b border-charcoal/10 pb-4">Design Process & Strategy</h2>
              <div className="space-y-10">
                {project.decisions && (
                   <p className="text-lg md:text-xl font-medium leading-relaxed text-charcoal/80">
                    {project.decisions}
                  </p>
                )}
                {project.research && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-clay">Design Process</h4>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-charcoal/80">{project.research}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-clay">The Solution</h4>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-charcoal/80">{project.solution}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Strategic Outcomes */}
            {project.outcomes && (
              <section className="bg-charcoal text-linen p-8 md:p-12 rounded-[2rem] space-y-8">
                <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-clay">Results & Learnings</h2>
                <p 
                  className="text-xl md:text-2xl font-black uppercase tracking-[0.08em] leading-relaxed"
                  style={{ wordSpacing: '0.12em' }}
                >
                  {project.outcomes}
                </p>
              </section>
            )}

            {/* Skills Signal */}
            {project.skillsSignal && (
              <div className="pt-10 border-t border-charcoal/10">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="text-clay" size={24} />
                  <p className="text-sm font-bold uppercase tracking-widest text-sage">
                    Skills demonstrated: <span className="text-charcoal">{project.skillsSignal}</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-12">
            {/* Features Sidebar */}
            <div className="bg-[#F5F2ED] p-10 rounded-[2rem] border border-charcoal/5 space-y-8">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-sage">Key Features</h3>
              <div className="grid gap-5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-2.5 w-1.5 h-1.5 bg-clay rounded-full flex-shrink-0"></div>
                    {renderFeature(feature)}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="px-6 space-y-4">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30">Future Roadmap</h3>
              <p className="text-[15px] font-medium leading-relaxed text-charcoal/80">
                {project.nextSteps}
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a 
                href={project.url} 
                target="_blank" 
                className="w-full py-5 bg-charcoal text-linen rounded-full flex items-center justify-center space-x-4 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-clay transition-all shadow-xl shadow-clay/10 active:scale-[0.98]"
              >
                <span>Launch Live Project</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer in Modal */}
      <footer className="py-16 border-t border-charcoal/10 text-center">
        <button 
          onClick={onClose}
          className="font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal/40 hover:text-clay transition-colors"
        >
          Close Case Study
        </button>
      </footer>
    </div>
  );
};

export default ProjectDetail;
