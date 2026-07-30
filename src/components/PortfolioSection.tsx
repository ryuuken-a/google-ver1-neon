import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/mockData';
import { ExternalLink, CheckCircle2, X, ArrowRight, Quote, Code2 } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center space-y-3">
        <span className="font-mono text-xs text-[#adc6ff] tracking-widest font-bold uppercase">
          [ PROVEN DELIVERABLES ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          SELECTED CASE STUDIES & WORK
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          Real clients, real engineering, and measurable metrics. Explore how our web applications and AI systems drive high conversion and ultra-fast performance.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            onClick={() => setSelectedCase(study)}
            className="glass-panel rounded-lg overflow-hidden border border-white/10 hover:border-[#ddb7ff]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div className="relative h-48 overflow-hidden bg-[#121414]">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0f] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded border border-white/20 font-mono text-[10px] text-[#ddb7ff] font-bold tracking-widest">
                {study.clientName}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-[10px] text-[#adc6ff] uppercase font-bold tracking-wider block mb-1">
                  {study.industry}
                </span>
                <h3 className="font-display-lg text-xl text-white font-bold group-hover:text-[#ddb7ff] transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-[#cfc2d6] font-mono text-xs leading-relaxed mt-3 line-clamp-3">
                  {study.summary}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 font-mono">
                {study.results.slice(0, 2).map((res, idx) => (
                  <div key={idx} className="bg-black/40 p-2 rounded border border-white/5">
                    <span className="text-[9px] text-[#adc6ff]/70 block font-bold">
                      {res.label}
                    </span>
                    <span className="text-sm font-extrabold text-[#ddb7ff]">
                      {res.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {study.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-[#cfc2d6] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#ddb7ff] group-hover:translate-x-1 transition-transform">
                <span>VIEW CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-3xl bg-[#0c0f0f] border border-[#ddb7ff]/50 rounded-lg p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] relative font-mono text-xs text-[#e2e2e2] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-2 text-[#cfc2d6] hover:text-white bg-white/5 hover:bg-white/10 rounded"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 mb-6 pr-8">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#ddb7ff]/20 border border-[#ddb7ff] text-[#ddb7ff] font-bold rounded text-[10px] tracking-widest uppercase">
                  {selectedCase.clientName}
                </span>
                <span className="text-[10px] text-[#adc6ff]">
                  // {selectedCase.industry}
                </span>
              </div>

              <h3 className="font-display-lg text-2xl md:text-3xl text-white font-extrabold leading-tight">
                {selectedCase.title}
              </h3>
            </div>

            {/* Results Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#1a1c1c] border border-white/10 rounded-lg mb-6">
              {selectedCase.results.map((r, idx) => (
                <div key={idx} className="text-center">
                  <span className="block text-[10px] text-[#adc6ff] uppercase font-bold mb-1">
                    {r.label}
                  </span>
                  <span className="font-display-lg text-2xl text-[#ddb7ff] font-extrabold ethereal-glow">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6 mb-6 leading-relaxed">
              <div>
                <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider flex items-center gap-1.5 text-[#adc6ff]">
                  <Code2 className="w-4 h-4" /> THE CHALLENGE
                </h4>
                <p className="text-[#cfc2d6] bg-[#121414] p-3 rounded border border-white/5">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider flex items-center gap-1.5 text-[#ddb7ff]">
                  <CheckCircle2 className="w-4 h-4" /> THE NEONTOMY SOLUTION
                </h4>
                <p className="text-[#cfc2d6] bg-[#121414] p-3 rounded border border-white/5">
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-6 space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#adc6ff]">
                KEY DELIVERABLES & TECHNICAL SCOPE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCase.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#121414] rounded text-xs text-[#e2e2e2]">
                    <span className="w-1.5 h-1.5 bg-[#ddb7ff] rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote */}
            {selectedCase.quote && (
              <div className="p-4 bg-[#1e2020] border-l-4 border-[#ddb7ff] rounded mb-6 space-y-2 italic">
                <p className="text-white text-xs">"{selectedCase.quote.text}"</p>
                <div className="text-[10px] text-[#adc6ff] font-bold not-italic">
                  — {selectedCase.quote.author}, <span className="text-[#cfc2d6]">{selectedCase.quote.role}</span>
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="octagonal bg-[#ddb7ff] text-[#490080] px-8 py-2.5 font-mono text-xs font-bold hover:shadow-[0_0_15px_white]"
              >
                CLOSE CASE STUDY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
