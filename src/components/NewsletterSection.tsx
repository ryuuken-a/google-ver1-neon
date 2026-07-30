import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
      <div className="glass-panel p-8 md:p-12 rounded-lg border border-[#ddb7ff]/40 shadow-[0_0_50px_rgba(168,85,247,0.2)] space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ddb7ff]/20 text-[#ddb7ff] border border-[#ddb7ff] rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
          <Calendar className="w-3.5 h-3.5" />
          FREE 30-MIN TECHNICAL DISCOVERY CALL
        </div>

        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight uppercase">
          READY TO BUILD YOUR NEXT WEB PLATFORM?
        </h2>

        <p className="font-mono text-xs sm:text-sm text-[#cfc2d6] max-w-2xl mx-auto leading-relaxed">
          Connect directly with our Lead Web Architect. Get a free technical roadmap, architecture recommendation, and fixed cost breakdown with zero obligation.
        </p>

        {submitted ? (
          <div className="p-8 bg-[#1a1c1c] border border-emerald-500/40 rounded-lg text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="font-display-lg text-xl text-white font-bold">
              DISCOVERY REQUEST LOGGED
            </h3>
            <p className="font-mono text-xs text-[#cfc2d6]">
              We have received your message from <span className="text-[#ddb7ff] font-bold">{email}</span>. A calendar invitation link will be sent to your email within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                setProjectDesc('');
              }}
              className="text-xs font-mono text-[#adc6ff] hover:underline"
            >
              SUBMIT ANOTHER REQUEST
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto text-left">
            <div>
              <label className="block font-mono text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                YOUR WORK EMAIL *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@yourtechcompany.com"
                className="w-full bg-[#121414] border border-white/20 px-4 py-3 font-mono text-xs text-white placeholder:text-white/30 rounded focus:outline-none focus:border-[#ddb7ff]"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                TELL US ABOUT YOUR PROJECT GOALS (OPTIONAL)
              </label>
              <textarea
                rows={3}
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                placeholder="What are you looking to build or redesign? Key features, timeline, or links to references..."
                className="w-full bg-[#121414] border border-white/20 px-4 py-3 font-mono text-xs text-white placeholder:text-white/30 rounded focus:outline-none focus:border-[#ddb7ff]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full octagonal bg-[#ddb7ff] text-[#490080] py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:shadow-[0_0_30px_white] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              BOOK FREE DISCOVERY CONSULTATION
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
