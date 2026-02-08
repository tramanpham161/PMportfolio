
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ImageOff, Loader2, Info } from 'lucide-react';
import { Screenshot } from '../types';

interface SlideshowProps {
  screenshots: Screenshot[];
}

const Slideshow: React.FC<SlideshowProps> = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="relative group overflow-hidden bg-slate-50">
      <div className="min-h-[300px] md:min-h-[450px] max-h-[600px] overflow-hidden relative flex items-center justify-center">
        {loading && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-50 z-10">
            <Loader2 size={24} className="animate-spin mb-3 text-sage" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Generating Preview...</span>
          </div>
        )}
        
        {error ? (
          <div className="flex flex-col items-center justify-center text-slate-400 p-12 text-center bg-slate-50 h-full w-full">
            <ImageOff size={32} className="mb-4 text-slate-300" />
            <div className="text-xs font-medium uppercase tracking-widest opacity-50">
              Visual preview unavailable
            </div>
          </div>
        ) : (
          <img 
            src={screenshots[current].url} 
            alt={screenshots[current].caption}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
            className={`max-w-full max-h-[600px] w-auto h-auto object-contain transition-all duration-700 ${loading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
          />
        )}
      </div>
      
      {screenshots.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="p-4 rounded-2xl bg-white/95 text-charcoal shadow-xl hover:bg-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="p-4 rounded-2xl bg-white/95 text-charcoal shadow-xl hover:bg-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Caption Overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-8 md:p-10">
        <div className="flex items-start space-x-3 mb-4">
          <div className="p-1 bg-clay rounded text-white mt-0.5"><Info size={12} /></div>
          <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
            {screenshots[current].caption}
          </p>
        </div>
        <div className="flex space-x-2">
          {screenshots.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-clay shadow-[0_0_10px_rgba(224,159,125,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
