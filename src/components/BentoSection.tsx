import React, { useState } from 'react';
import { ASSET_URLS } from '../data/mockData';
import { Terminal, Cpu, Database, TrendingUp, Maximize2, Zap } from 'lucide-react';

interface BentoSectionProps {
  onSelectEngram?: (id: string) => void;
  onExploreSystems?: () => void;
}

export const BentoSection: React.FC<BentoSectionProps> = ({
  onSelectEngram,
  onExploreSystems,
}) => {
  const [fullscreenImage, setFullscreenImage] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* NV-01 Core Systems Card */}
      <div
        onClick={onExploreSystems}
        className="md:col-span-8 glass-panel rounded-lg p-6 md:p-8 group hover:border-[#ddb7ff]/60 transition-all duration-300 cursor-pointer relative overflow-hidden"
      >
        <div className="flex justify-between items-start mb-8 md:mb-12">
          <span className="font-mono text-xs text-[#adc6ff] font-bold tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-[#adc6ff] rounded-full animate-pulse"></span>
            NV-01 // CORE_SYSTEMS
          </span>
          <Terminal className="w-5 h-5 text-[#ddb7ff] group-hover:scale-110 transition-transform" />
        </div>

        <h3 className="font-display-lg text-xl md:text-3xl text-white font-bold mb-4 tracking-tight">
          NEURAL_INFRASTRUCTURE
        </h3>

        <p className="text-[#cfc2d6] mb-8 max-w-xl font-mono text-xs sm:text-sm leading-relaxed">
          Architecting high-fidelity digital environments where AI agents and human interaction converge seamlessly. Built on an 8K-ready visual framework with zero-latency spatial memory.
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono text-[#adc6ff]">
            <span>STABILITY_INDEX</span>
            <span>99.98% OPTIMAL</span>
          </div>
          <div className="h-1.5 bg-white/10 w-full overflow-hidden rounded-full">
            <div className="h-full bg-[#ddb7ff] w-2/3 shadow-[0_0_12px_rgba(221,183,255,1)] group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>

      {/* NV-02 Engrams Card */}
      <div className="md:col-span-4 glass-panel rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-[#adc6ff]/50 transition-all duration-300">
        <div>
          <div className="font-mono text-xs text-[#adc6ff] font-bold tracking-widest mb-6 flex items-center justify-between">
            <span>NV-02 // ENGRAMS</span>
            <Zap className="w-4 h-4 text-[#adc6ff]" />
          </div>

          <div className="space-y-4">
            <div
              onClick={() => onSelectEngram && onSelectEngram('eng-101')}
              className="flex items-center gap-4 text-[#ddb7ff] p-2 hover:bg-white/5 rounded cursor-pointer transition-all"
            >
              <Cpu className="w-5 h-5 text-[#ddb7ff]" />
              <div>
                <span className="font-mono text-xs font-bold block tracking-wider">
                  COGNITIVE_MAPPING
                </span>
                <span className="text-[10px] text-[#cfc2d6]/60 font-mono">
                  128TB NEURAL_BUFFER
                </span>
              </div>
            </div>

            <div
              onClick={() => onSelectEngram && onSelectEngram('eng-102')}
              className="flex items-center gap-4 text-[#cfc2d6] p-2 hover:bg-white/5 rounded cursor-pointer transition-all"
            >
              <Database className="w-5 h-5 text-[#adc6ff]" />
              <div>
                <span className="font-mono text-xs font-bold block tracking-wider">
                  DATA_SYNOPSIS
                </span>
                <span className="text-[10px] text-[#cfc2d6]/60 font-mono">
                  REAL-TIME INDEXING
                </span>
              </div>
            </div>

            <div
              onClick={() => onSelectEngram && onSelectEngram('eng-103')}
              className="flex items-center gap-4 text-[#cfc2d6] p-2 hover:bg-white/5 rounded cursor-pointer transition-all"
            >
              <TrendingUp className="w-5 h-5 text-[#adc6ff]" />
              <div>
                <span className="font-mono text-xs font-bold block tracking-wider">
                  GROWTH_ALGORITHMS
                </span>
                <span className="text-[10px] text-[#cfc2d6]/60 font-mono">
                  PREDICTIVE RESONANCE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 font-mono text-[10px] text-[#adc6ff]/70 flex justify-between">
          <span>ACTIVE_NODES: 1,024</span>
          <span>LATENCY: 0.0004s</span>
        </div>
      </div>

      {/* Featured Cyberpunk Cityscape Hero Card */}
      <div className="md:col-span-12 relative h-[400px] md:h-[520px] rounded-lg overflow-hidden glass-panel group border border-white/10 hover:border-[#ddb7ff]/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/40 to-transparent z-10 pointer-events-none"></div>

        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url('${ASSET_URLS.HERO_IMAGE}')` }}
        />

        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setFullscreenImage(!fullscreenImage)}
            className="p-2 bg-black/60 backdrop-blur-md rounded border border-white/20 text-[#ddb7ff] hover:bg-black hover:scale-105 transition-all"
            title="Expand 8K Interface View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 space-y-2 max-w-2xl">
          <div className="inline-block px-3 py-1 bg-[#ddb7ff]/10 border border-[#ddb7ff]/40 rounded text-[10px] font-mono text-[#ddb7ff] tracking-widest font-bold uppercase mb-2">
            8K_NEURAL_CANVAS // ACTIVE
          </div>
          <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight uppercase leading-tight drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            THE_INTERFACE_OF_TOMORROW
          </h2>
          <p className="text-[#adc6ff] font-mono text-xs md:text-sm tracking-widest uppercase font-semibold">
            TRANSCENDING_LIMITS // 0.00ms_LATENCY
          </p>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(false)}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-lg border border-[#ddb7ff]/50 shadow-[0_0_50px_rgba(168,85,247,0.5)]">
            <img
              src={ASSET_URLS.HERO_IMAGE}
              alt="Cyberpunk 8K Interface"
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 right-4 bg-black/80 px-4 py-2 font-mono text-xs text-[#ddb7ff] border border-[#ddb7ff]/40 rounded">
              CLICK ANYWHERE TO CLOSE [8K VIEW]
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
