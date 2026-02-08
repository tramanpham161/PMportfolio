
import React from 'react';
import { FileText, Award, Brain, Layout, Sparkles, ExternalLink } from 'lucide-react';

interface AboutViewProps {
  onGoToResume?: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onGoToResume }) => {
  return (
    <main className="pt-20 max-w-[1400px] mx-auto px-6 lg:px-12 overflow-hidden animate-in fade-in duration-1000 pb-16">
      {/* Top Section - Identity / Role */}
      <section className="py-12 md:py-20 border-b border-charcoal/10">
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-sage mb-6 block">Identity / Role</span>
          <h1 className="text-huge font-black uppercase mb-10">
            About Me
          </h1>
          {/* Mission Statement - Now spanning the full width */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-charcoal/90 max-w-5xl">
            I look for where parenting feels harder than it should, and work out how to <span className="text-clay italic font-serif lowercase normal-case">make it better.</span>
          </p>
        </div>

        {/* Bio & Photo Grid - Photo starts where the detailed bio starts */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-charcoal/60 leading-relaxed font-medium">
            <p>
              I’m a UK-based product, research, and project-focused professional with an engineering background and experience delivering both physical and digital solutions across multiple industries. I hold a First Class degree in Civil Engineering from the University of Bristol and a PMP certification, which ground my work in structured planning, prioritisation, and disciplined delivery within complex systems.
            </p>
            <p>
              I am intentionally building my career in the parenting and early-years space. As a mother of two young children, I actively immerse myself in this ecosystem by participating in parenting communities and events, evaluating baby and family-related products and services, and closely following childcare systems and educational approaches. This continuous exposure helps me identify real, often overlooked pain points that only surface through lived experience.
            </p>
            <p>
              I bring a design- and research-led mindset to problem solving, combining qualitative insight from parent conversations and community research with strong project execution skills. My cross-cultural parenting experience further broadens my perspective, allowing me to challenge assumptions and design more inclusive, practical solutions.
            </p>
            <p>
              I’m drawn to roles at the intersection of <span className="font-bold text-charcoal/90">product thinking</span>, <span className="font-bold text-charcoal/90">user research</span>, and <span className="font-bold text-charcoal/90">project delivery</span>, where empathy, clarity, and execution come together to create meaningful impact for families.
            </p>
          </div>
          
          {/* Portrait Image Container - Polaroid Style aligned with Bio */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-[440px] bg-white p-3 rounded-[1.5rem] shadow-2xl shadow-charcoal/10 border border-charcoal/5 group transition-transform duration-700 hover:rotate-1">
              <div className="overflow-hidden rounded-[1rem] bg-charcoal/5">
                <img 
                  src="https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Portfolio%20profile%20picture.HEIC" 
                  alt="Portrait"
                  className="w-full h-auto block"
                  onError={(e) => {
                    // Fallback to the tractor review photo if HEIC is not supported by the browser
                    (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/tractor%20review.jpg";
                  }}
                />
              </div>
              <div className="pt-4 pb-2 px-1 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-charcoal/40">
                    Leyland, United Kingdom
                  </span>
                  <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-clay/40 mt-1">
                    Archived // 2026
                  </span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-clay/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-clay/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-clay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-12 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-24 border-b border-charcoal/10">
        <div className="lg:col-span-4 flex flex-col items-start">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-sage mb-8">Experiences</h2>
          <button 
            onClick={onGoToResume}
            className="group flex items-center space-x-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-all"
          >
            <div className="p-2 border border-clay group-hover:border-charcoal rounded-full transition-colors">
              <FileText size={14} />
            </div>
            <span className="border-b border-transparent group-hover:border-charcoal pb-0.5 transition-all">Full Resume</span>
          </button>
        </div>
        <div className="lg:col-span-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-charcoal/80">
              Selected roles relevant to product and project management. The past two years have been a <span className="italic font-serif">planned career pause</span> for early parenthood, alongside building personal products in the parenting space.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">Innovation Consultant</h3>
                <span className="font-mono text-[10px] font-bold text-sage">UNDP Vietnam (2021–2022)</span>
              </div>
              <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed uppercase tracking-widest font-bold">
                Problem framing, user research, early solution testing
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">Project Manager (Education)</h3>
                <span className="font-mono text-[10px] font-bold text-sage">Smarty Education, Vietnam (2019–2021)</span>
              </div>
              <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed uppercase tracking-widest font-bold">
                End-to-end programme delivery, cross-team coordination, consultancy
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">Project Manager (F&B Set-up)</h3>
                <span className="font-mono text-[10px] font-bold text-sage">Multiple restaurants, Vietnam (2017–2019)</span>
              </div>
              <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed uppercase tracking-widest font-bold">
                Physical product launches (restaurants), timelines, budgets, operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development & Learning Section */}
      <section className="py-12 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-24 border-b border-charcoal/10">
        <div className="lg:col-span-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-sage">Professional Development & Learning</h2>
        </div>
        <div className="lg:col-span-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-charcoal/80">
              Ongoing learning to strengthen my work in product, project management, and the early-years space.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* PMP Card */}
            <div className="p-8 border border-charcoal/5 bg-white/50 rounded-2xl hover:border-clay/30 transition-all group">
              <div className="flex items-center space-x-3 mb-5 text-clay">
                <Award size={24} />
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">PMP – Project Management Professional</h4>
              </div>
              <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-medium">
                Focus on structured delivery, planning, and stakeholder management for complex initiatives.
              </p>
            </div>

            {/* DfE Card */}
            <div className="p-8 border border-charcoal/5 bg-white/50 rounded-2xl hover:border-clay/30 transition-all group">
              <div className="flex items-center space-x-3 mb-5 text-clay">
                <Brain size={24} />
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">Early Years Child Development (DfE)</h4>
              </div>
              <div className="space-y-5">
                <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-medium">
                  Focus on evidence-based understanding of early development.
                </p>
                <a 
                  href="https://child-development-training.education.gov.uk" 
                  target="_blank" 
                  className="inline-flex items-center space-x-2 font-mono text-[10px] font-bold uppercase tracking-widest text-clay hover:text-charcoal transition-colors"
                >
                  <span>Verification</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* OpenLearn Card */}
            <div className="p-8 border border-charcoal/5 bg-white/50 rounded-2xl hover:border-clay/30 transition-all group">
              <div className="flex items-center space-x-3 mb-5 text-clay">
                <Layout size={24} />
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">OpenLearn (Early Years & Psychology)</h4>
              </div>
              <div className="space-y-5">
                <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-medium">
                  Focus on learning, cognition, and behaviour. 
                </p>
                <div className="pt-4 border-t border-charcoal/5">
                  <span className="text-[11px] font-bold text-sage tracking-widest mb-2 block">Courses include:</span>
                  <p className="text-[11px] text-charcoal/50 leading-relaxed font-medium tracking-wider">
                    Supporting babies and toddlers, Play and the brain, Children’s perspectives on play, Digital experiences, Children’s books.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Card */}
            <div className="p-8 border border-charcoal/5 bg-white/50 rounded-2xl hover:border-clay/30 transition-all group">
              <div className="flex items-center space-x-3 mb-5 text-clay">
                <Sparkles size={24} />
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-charcoal">Google Certified Educator (Level 1, 2, AI)</h4>
              </div>
              <p className="text-sm md:text-base text-charcoal/60 leading-relaxed font-medium">
                Focus on applying digital tools and AI in education and family contexts to reduce cognitive load.
              </p>
            </div>
          </div>

          {/* Other Skills Subsection */}
          <div className="pt-6 border-t border-charcoal/5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sage mb-6">Other Skills</h4>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {[
                "Microsoft Office (advanced)",
                "Power BI",
                "UX Design",
                "Adobe Illustrator and Photoshop",
                "Website design and management",
                "Customer relationship management (CRM)"
              ].map((skill, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-clay/40 rounded-full"></div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-charcoal/60">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="py-16 md:py-20 flex flex-col items-center text-center">
        <h2 className="text-xl md:text-2xl font-black mb-3 tracking-tight">
          Get in touch at <a href="mailto:tramanh.pham161@gmail.com" className="text-clay hover:underline">tramanh.pham161@gmail.com</a>
        </h2>
      </section>
    </main>
  );
};

export default AboutView;
