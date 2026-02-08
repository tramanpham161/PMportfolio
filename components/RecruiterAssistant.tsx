
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import { askAssistant } from '../services/gemini';

const RecruiterAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I can answer questions about this candidate's product philosophy and childcare domain depth." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response || "I'm having a bit of trouble connecting right now." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="bg-linen rounded-[2rem] shadow-2xl border border-charcoal/10 w-[350px] sm:w-[400px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-500">
          {/* Header */}
          <div className="bg-charcoal p-8 text-linen flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Sparkles size={16} className="text-clay" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Product Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-8 space-y-6 bg-white/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-xs font-medium leading-relaxed uppercase tracking-wider ${
                  msg.role === 'user' 
                    ? 'bg-charcoal text-linen rounded-tr-none' 
                    : 'bg-white text-charcoal border border-charcoal/5 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl text-xs border border-charcoal/5 rounded-tl-none shadow-sm flex items-center space-x-3 text-charcoal/40">
                  <Loader2 size={16} className="animate-spin text-clay" />
                  <span className="font-mono font-bold uppercase tracking-widest">Analysing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-6 border-t border-charcoal/5 bg-linen">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about strategy..."
                className="flex-1 bg-white border-charcoal/10 focus:ring-1 focus:ring-clay rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest text-charcoal placeholder:text-charcoal/20"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-charcoal text-linen p-4 rounded-full hover:bg-clay disabled:opacity-50 transition-all shadow-lg shadow-clay/10"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-charcoal text-linen px-8 py-5 rounded-full shadow-2xl hover:bg-clay hover:scale-105 transition-all flex items-center space-x-4 group"
        >
          <div className="p-1 border border-clay rounded-full group-hover:border-linen transition-colors">
            <MessageSquare size={18} className="text-clay group-hover:text-linen" />
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Open Assistant</span>
        </button>
      )}
    </div>
  );
};

export default RecruiterAssistant;
