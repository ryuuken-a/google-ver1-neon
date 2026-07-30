import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center space-y-3">
        <span className="font-mono text-xs text-[#adc6ff] tracking-widest font-bold uppercase">
          [ CLIENT VERIFICATION ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          WHAT CLIENTS SAY ABOUT NEONTOMY
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          Don't take our word for it. Read verified feedback from CTOs, Product Leads, and Founders who built their web platforms with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="glass-panel p-6 rounded-lg border border-white/10 hover:border-[#ddb7ff]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-[#cfc2d6] font-mono text-xs leading-relaxed italic">
                "{t.content}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 font-mono">
              <img
                src={t.avatarUrl}
                alt={t.author}
                className="w-10 h-10 rounded-full object-cover border border-[#ddb7ff]"
              />
              <div>
                <span className="block text-white font-bold text-xs">{t.author}</span>
                <span className="text-[10px] text-[#adc6ff]">
                  {t.role}, <strong className="text-white">{t.company}</strong>
                </span>
                <span className="block text-[9px] text-[#ddb7ff] mt-0.5 font-semibold">
                  ✓ Verified Project: {t.projectType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
