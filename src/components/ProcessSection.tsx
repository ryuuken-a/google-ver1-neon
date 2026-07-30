import React from 'react';
import { AGENCY_PROCESS_STEPS } from '../data/mockData';
import { CheckCircle2, ShieldCheck, ArrowRight, Lock, Zap } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center space-y-3">
        <span className="font-mono text-xs text-[#adc6ff] tracking-widest font-bold uppercase">
          [ TRANSPARENT METHODOLOGY ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          OUR 4-STAGE SPRINT METHODOLOGY
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          From technical spec to production deployment in 14 days or less. Track progress every step of the way via live staging URLs.
        </p>
      </div>

      {/* 4 Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {AGENCY_PROCESS_STEPS.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-lg border border-white/10 hover:border-[#ddb7ff]/50 transition-all duration-300 relative space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-display-lg text-3xl font-extrabold text-[#ddb7ff] ethereal-glow">
                  {item.step}
                </span>
                <span className="font-mono text-[10px] text-[#adc6ff] bg-[#adc6ff]/10 px-2 py-0.5 rounded border border-[#adc6ff]/30 font-bold">
                  {item.timeframe}
                </span>
              </div>

              <h3 className="font-display-lg text-base text-white font-bold leading-tight">
                {item.title}
              </h3>

              <p className="text-[#cfc2d6] font-mono text-xs leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-1 text-[10px] text-[#ddb7ff] font-mono font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>DELIVERABLE QA VERIFIED</span>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee Banner */}
      <div className="mt-12 p-6 md:p-8 bg-[#1a1c1c] border border-emerald-500/30 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-12 h-12 text-emerald-400 shrink-0" />
          <div>
            <h4 className="font-display-lg text-lg text-white font-bold">
              THE NEONTOMY 100% SATISFACTION GUARANTEE
            </h4>
            <p className="font-mono text-xs text-[#cfc2d6] mt-1">
              You retain 100% source code ownership. Payments are tied to milestone sign-offs. If a deliverable fails to pass agreed technical specifications, we fix it immediately at no extra cost.
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-400 text-emerald-300 font-mono text-xs font-bold rounded uppercase tracking-wider">
            ZERO BUGS // ZERO FLUFF
          </div>
        </div>
      </div>
    </section>
  );
};
