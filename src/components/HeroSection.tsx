import React from 'react';
import { ASSET_URLS } from '../data/mockData';
import { SystemStatus } from '../types';
import { Radio, Lock, ShieldCheck, Activity } from 'lucide-react';

interface HeroSectionProps {
  systemStatus: SystemStatus;
  onSyncClick: () => void;
  onViewArchiveClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  systemStatus,
  onSyncClick,
  onViewArchiveClick,
}) => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 md:px-8 relative text-center pt-24 pb-12">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none flex items-center justify-center">
        <div className="w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-[#ddb7ff]/20 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        {/* Emblem Logo */}
        <div className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-6 relative group">
          <img
            src={ASSET_URLS.LOGO_HERO}
            alt="NEONTOMYEVANGELION Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Ethereal Headline */}
        <h1 className="font-display-xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter ethereal-glow leading-none uppercase font-extrabold text-[#e2e2e2]">
          TRANSCENDS<br />PERFECTION
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm sm:text-base md:text-xl text-[#adc6ff] tracking-[0.25em] uppercase font-medium max-w-3xl mx-auto">
          Marketing. Web Architecture. AI Systems.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6">
          <button
            onClick={onSyncClick}
            className="octagonal bg-[#ddb7ff] text-[#490080] px-8 sm:px-12 py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:shadow-[0_0_30px_white] transition-all duration-300 flex items-center gap-2"
          >
            <Radio className="w-4 h-4 animate-ping" />
            SYNC_CONSCIOUSNESS
          </button>
          <button
            onClick={onViewArchiveClick}
            className="octagonal border border-[#adc6ff] text-[#adc6ff] px-8 sm:px-12 py-4 font-mono text-xs md:text-sm font-bold tracking-widest hover:bg-[#adc6ff]/10 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            VIEW_ARCHIVE
          </button>
        </div>
      </div>

      {/* HUD Corner Telemetry */}
      <div className="hidden lg:flex justify-between items-end absolute bottom-6 left-8 right-8 font-mono text-[10px] text-[#ddb7ff]/50 pointer-events-none">
        <div className="space-y-1 text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#ddb7ff] rounded-full animate-ping"></span>
            COORD: {systemStatus.coord}
          </div>
          <div>STATUS: {systemStatus.status}</div>
          <div>FREQ: {systemStatus.frequency}HZ // {systemStatus.quantumLocked ? 'QUANTUM_LOCKED' : 'UNLOCKED'}</div>
        </div>

        <div className="space-y-1 text-right">
          <div>SYS_LOAD: {systemStatus.systemLoad}</div>
          <div>UI_REV: 8.0.42_STABLE</div>
          <div className="flex items-center justify-end gap-1">
            <Lock className="w-3 h-3 text-[#ddb7ff]/60" />
            ENCRYPT: AES-8192_SHADOW
          </div>
        </div>
      </div>
    </section>
  );
};
