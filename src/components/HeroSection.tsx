import React from 'react';
import { LogoSymbol } from './Logo';
import { SystemStatus } from '../types';
import { Send, Calculator, ShieldCheck, ArrowRight, Zap, CheckCircle2, Sparkles, Globe } from 'lucide-react';

interface HeroSectionProps {
  systemStatus: SystemStatus;
  onExploreServices: () => void;
  onOpenEstimator: () => void;
  onOpenAiScout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onOpenEstimator,
  onOpenAiScout,
}) => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 md:px-8 relative text-center pt-28 pb-16">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-[#ddb7ff]/20 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      <div className="relative z-10 space-y-6 max-w-5xl mx-auto">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1e2020] border border-[#ddb7ff]/40 rounded-full font-mono text-[11px] text-[#ddb7ff] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(221,183,255,0.2)]">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span>OFFICIAL DOMAIN // NEONTOMYEVANGELION.SPACE</span>
        </div>

        {/* Emblem Logo */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto my-3 relative group">
          <LogoSymbol className="w-full h-full" />
        </div>

        {/* Headline */}
        <h1 className="font-display-xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter ethereal-glow leading-[0.95] uppercase font-extrabold text-[#e2e2e2]">
          BUILD THE FUTURE<br />OF THE WEB
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-xs sm:text-sm md:text-lg text-[#adc6ff] tracking-[0.15em] uppercase font-medium max-w-3xl mx-auto leading-relaxed">
          High-Fidelity Web Applications, Bespoke AI Agents, & Spatial UI Architecture for Ambitious Tech Teams.
        </p>

        {/* Key Selling Points Bullet Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-xs text-[#cfc2d6] pt-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#ddb7ff] rounded-full"></span>
            <span>100% Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#adc6ff] rounded-full"></span>
            <span>Starts at $599 / Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            <span>100/100 Core Web Vitals Guaranteed</span>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6">
          <button
            onClick={onOpenEstimator}
            className="octagonal bg-[#ddb7ff] text-[#490080] px-8 sm:px-10 py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:shadow-[0_0_30px_white] transition-all duration-300 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            CALCULATE PROJECT QUOTE
          </button>

          <button
            onClick={onExploreServices}
            className="octagonal border border-[#adc6ff] text-[#adc6ff] px-8 sm:px-10 py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:bg-[#adc6ff]/10 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            EXPLORE SERVICES ($599+)
          </button>

          <button
            onClick={onOpenAiScout}
            className="border border-white/20 bg-white/5 text-white px-6 py-4 rounded font-mono text-xs font-bold tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#ddb7ff]" />
            AI SCOUT
          </button>
        </div>
      </div>
    </section>
  );
};
