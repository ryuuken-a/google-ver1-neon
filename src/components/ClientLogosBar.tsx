import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';
import { ShieldCheck, Award, Zap, Code } from 'lucide-react';

export const ClientLogosBar: React.FC = () => {
  return (
    <section className="bg-[#1a1c1c]/90 border-y border-white/10 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <p className="text-center font-mono text-[10px] sm:text-xs text-[#adc6ff] uppercase tracking-[0.25em] font-bold">
          TRUSTED BY INNOVATIVE TECH BRANDS, FINTECH LABS & AI STARTUPS
        </p>

        {/* Client Logos Ticker / Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-80">
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="font-display-lg text-sm sm:text-base md:text-lg font-extrabold text-[#e2e2e2] tracking-wider hover:text-[#ddb7ff] transition-colors cursor-default"
            >
              // {logo}
            </div>
          ))}
        </div>

        {/* Core Guarantee Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2.5 p-3 bg-black/40 rounded border border-white/5">
            <Zap className="w-5 h-5 text-[#ddb7ff]" />
            <div>
              <span className="block text-white font-bold">0.18s Avg Load</span>
              <span className="text-[10px] text-[#adc6ff]">Core Web Vitals 100/100</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-black/40 rounded border border-white/5">
            <Code className="w-5 h-5 text-[#adc6ff]" />
            <div>
              <span className="block text-white font-bold">Full Code Ownership</span>
              <span className="text-[10px] text-[#adc6ff]">TypeScript + Source Handoff</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-black/40 rounded border border-white/5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="block text-white font-bold">Milestone Guarantee</span>
              <span className="text-[10px] text-[#adc6ff]">Pay as deliverables pass QA</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-black/40 rounded border border-white/5">
            <Award className="w-5 h-5 text-amber-300" />
            <div>
              <span className="block text-white font-bold">Senior Engineers</span>
              <span className="text-[10px] text-[#adc6ff]">Direct communication in Slack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
