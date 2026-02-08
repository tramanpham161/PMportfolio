import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  // Apply specific padding based on the project ID to optimize for different image aspect ratios
  const isFundingChecker = project.id === 'funding-checker';
  const paddingClass = isFundingChecker 
    ? "p-4 md:p-8"   // Minimal padding for the wide Childcare screenshot
    : "p-12 md:p-24"; // Slightly reduced padding for the tall Back to Work form

  const renderFeature = (feature: string) => {
    const colonIndex = feature.indexOf(':');
    // We check if the string starts with one of the key terms followed by a colon
    const keyTerms = ['Problem', 'Research', 'Solution', 'Key features', 'Impact', 'Future'];
    const potentialKey = feature.substring(0, colonIndex);
    
    if (colonIndex > -1 && keyTerms.includes(potentialKey)) {
      return (
        <p className="text-sm md:text-base font-medium leading-relaxed tracking-normal text-charcoal/70">
          <strong className="font-black text-charcoal">{potentialKey}:</strong>
          {feature.substring(colonIndex + 1)}
        </p>
      );
    }
    
    return (
      <p className="text-sm md:text-base font-medium leading-relaxed tracking-normal text-charcoal/70">
        {feature}
      </p>
    );
  };

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer block"
    >
      {/* Featured Photo Container - Project-specific padding for visual balance */}
      <div className={`aspect-[16/10] overflow-hidden bg-white border border-charcoal/5 rounded-2xl mb-10 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-clay/10 group-hover:-translate-y-2 flex items-center justify-center ${paddingClass}`}>
        <img 
          src={project.screenshots[0].url} 
          alt={project.name} 
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
        />
      </div>

      {/* Metadata & Summary */}
      <div className="space-y-4 px-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-sage">Personal Project</span>
          <div className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-linen transition-all duration-500">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.05em] leading-tight group-hover:text-clay transition-colors mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {project.name}
          </h3>
          {project.tagline && (
            <p className="text-base md:text-lg italic text-charcoal/60 font-medium leading-snug">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Short Summary Bullet Points - Showing full context for PM storytelling */}
        <div className="space-y-3 pt-2">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="mt-2.5 w-1.5 h-1.5 bg-clay rounded-full flex-shrink-0"></div>
              {renderFeature(feature)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;