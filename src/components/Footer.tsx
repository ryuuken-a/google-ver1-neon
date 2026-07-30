import React from 'react';
import { Logo } from './Logo';
import { NavTab } from '../types';
import { Mail, ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenEstimator: () => void;
  onOpenAiScout: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenEstimator,
  onOpenAiScout,
  onOpenTerminal,
}) => {
  return (
    <footer className="bg-[#0c0f0f] w-full py-16 px-4 md:px-8 border-t border-white/10 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
        {/* Col 1: Brand info */}
        <div className="md:col-span-5 space-y-4">
          <Logo
            size="md"
            showText={true}
            showDomain={true}
            onClick={() => onSelectTab('SERVICES')}
          />
          <p className="text-[#cfc2d6] text-xs leading-relaxed max-w-md">
            High-Performance Web Architecture, Gemini AI Agent Workflows, and Spatial UI Design Studio. Fixed pricing starting at $599 with 100% source code ownership.
          </p>
          <div className="flex items-center gap-2 text-[#adc6ff] text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-[#ddb7ff]" />
            <span>San Francisco • Tokyo • Remote Global</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-3 space-y-3">
          <span className="text-white font-bold text-xs uppercase tracking-wider block">AGENCY PAGES</span>
          <div className="flex flex-col gap-2 text-[#cfc2d6]">
            <button onClick={() => onSelectTab('SERVICES')} className="text-left hover:text-[#ddb7ff] transition-colors">
              • Core Agency Services
            </button>
            <button onClick={() => onSelectTab('WORK')} className="text-left hover:text-[#ddb7ff] transition-colors">
              • Portfolio & Case Studies
            </button>
            <button onClick={() => onSelectTab('TEAM')} className="text-left hover:text-[#ddb7ff] transition-colors">
              • Architects & Engineers
            </button>
            <button onClick={() => onSelectTab('PROCESS')} className="text-left hover:text-[#ddb7ff] transition-colors">
              • 4-Sprint Methodology
            </button>
          </div>
        </div>

        {/* Col 3: Tools & Direct Contact */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-white font-bold text-xs uppercase tracking-wider block">CLIENT TOOLS</span>
          <div className="flex flex-col gap-2">
            <button
              onClick={onOpenEstimator}
              className="text-left text-[#ddb7ff] hover:underline font-bold flex items-center gap-1.5"
            >
              → Interactive Project Quote Calculator
            </button>
            <button
              onClick={onOpenAiScout}
              className="text-left text-[#adc6ff] hover:underline flex items-center gap-1.5"
            >
              → Gemini AI Project Scouter
            </button>
            <button
              onClick={onOpenTerminal}
              className="text-left text-[#cfc2d6] hover:underline flex items-center gap-1.5"
            >
              → Developer CLI Diagnostics
            </button>
          </div>
          <div className="pt-2 text-[11px] text-[#adc6ff] flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#ddb7ff]" />
            <span>Inquiries: hello@neontomy.agency</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#cfc2d6]/60 text-[11px]">
        <div>
          © 2026 NEONTOMY EVANGELION DIGITAL AGENCY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>VERIFIED ENTERPRISE CODE GUARANTEE</span>
        </div>
      </div>
    </footer>
  );
};
