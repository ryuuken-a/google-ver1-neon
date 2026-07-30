import React from 'react';
import { ASSET_URLS } from '../data/mockData';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenEngrams: () => void;
  onOpenSync: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerminal,
  onOpenEngrams,
  onOpenSync,
}) => {
  return (
    <footer className="bg-[#0c0f0f] w-full py-16 px-4 md:px-8 border-t border-white/5 transition-opacity duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={ASSET_URLS.LOGO}
            alt="NEONTOMYEVANGELION"
            className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 transition-all"
          />
          <div className="font-display-lg text-lg text-[#ddb7ff] opacity-60 font-bold">
            NEONTOMYEVANGELION
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 font-mono text-xs text-[#474646]">
          <button
            onClick={onOpenSync}
            className="hover:text-[#ddb7ff] transition-all"
          >
            NEURAL_LINK
          </button>
          <button
            onClick={onOpenEngrams}
            className="hover:text-[#ddb7ff] transition-all"
          >
            DATA_FEED
          </button>
          <button
            onClick={onOpenTerminal}
            className="hover:text-[#ddb7ff] transition-all"
          >
            TERMINAL
          </button>
        </div>

        {/* Copyright */}
        <div className="font-mono text-[11px] text-[#474646] text-center md:text-right">
          © 2026 NEONTOMYEVANGELION // STATUS: TRANSCENDENT
        </div>
      </div>
    </footer>
  );
};
