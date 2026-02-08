
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="border border-charcoal/5 p-8 hover:bg-charcoal hover:text-linen transition-all duration-500 group rounded-3xl bg-white/50 backdrop-blur-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-2 h-2 bg-clay rounded-full shadow-[0_0_10px_rgba(224,159,125,0.4)]"></div>
        <h4 className="text-xs font-black uppercase tracking-widest">{skill.name}</h4>
      </div>
      <p className="text-[11px] font-medium uppercase tracking-widest leading-relaxed text-charcoal/50 group-hover:text-linen/60 transition-colors">
        {skill.description}
      </p>
    </div>
  );
};

export default SkillBadge;
