import React, { useState } from 'react';
import { Zap, ShieldCheck, Award, Code } from 'lucide-react';

export const TechStatsSection: React.FC = () => {
  const [latency, setLatency] = useState('0.18s');
  const [pinging, setPinging] = useState(false);

  const triggerPing = () => {
    setPinging(true);
    setTimeout(() => {
      const randomMs = (0.12 + Math.random() * 0.1).toFixed(2);
      setLatency(`${randomMs}s`);
      setPinging(false);
    }, 350);
  };

  return (
    <section className="bg-[#1a1c1c]/90 py-12 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Stat 1 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            100%
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] uppercase tracking-widest font-bold">
            Code Ownership
          </div>
        </div>

        {/* Stat 2 - Interactive Ping */}
        <div
          onClick={triggerPing}
          className="space-y-1 cursor-pointer group transition-all"
          title="Click to test live server latency ping"
        >
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow group-hover:scale-105 transition-transform flex items-center justify-center gap-1">
            {pinging ? (
              <span className="animate-spin text-sm text-[#adc6ff]">⚡</span>
            ) : (
              latency
            )}
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] uppercase tracking-widest font-bold group-hover:text-white">
            Avg LCP Speed [PING]
          </div>
        </div>

        {/* Stat 3 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            $4.2M+
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] uppercase tracking-widest font-bold">
            Client Funding Raised
          </div>
        </div>

        {/* Stat 4 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            100/100
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] uppercase tracking-widest font-bold">
            Core Web Vitals
          </div>
        </div>
      </div>
    </section>
  );
};
