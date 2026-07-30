import React, { useState } from 'react';

export const TechStatsSection: React.FC = () => {
  const [latency, setLatency] = useState('0.4ms');
  const [pinging, setPinging] = useState(false);

  const triggerPing = () => {
    setPinging(true);
    setTimeout(() => {
      const randomMs = (0.2 + Math.random() * 0.3).toFixed(2);
      setLatency(`${randomMs}ms`);
      setPinging(false);
    }, 400);
  };

  return (
    <section className="bg-[#1a1c1c]/80 py-12 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Stat 1 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            99.9%
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] opacity-80 uppercase tracking-widest font-bold">
            System_Uptime
          </div>
        </div>

        {/* Stat 2 - Interactive Ping */}
        <div
          onClick={triggerPing}
          className="space-y-1 cursor-pointer group transition-all"
          title="Click to test live theta response ping"
        >
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow group-hover:scale-105 transition-transform flex items-center justify-center gap-1">
            {pinging ? (
              <span className="animate-spin text-sm text-[#adc6ff]">⚡</span>
            ) : (
              latency
            )}
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] opacity-80 uppercase tracking-widest font-bold group-hover:text-white">
            Response_Theta [PING]
          </div>
        </div>

        {/* Stat 3 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            ∞
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] opacity-80 uppercase tracking-widest font-bold">
            Neural_Scale
          </div>
        </div>

        {/* Stat 4 */}
        <div className="space-y-1">
          <div className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ddb7ff] tracking-tight ethereal-glow">
            128B
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#adc6ff] opacity-80 uppercase tracking-widest font-bold">
            Data_Points
          </div>
        </div>
      </div>
    </section>
  );
};
