import React, { useState } from 'react';
import { NavTab } from '../types';
import { ASSET_URLS } from '../data/mockData';
import { Menu, X, Terminal, Zap } from 'lucide-react';

interface TopNavBarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenTerminal: () => void;
  onInitiateAction: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeTab,
  onSelectTab,
  onOpenTerminal,
  onInitiateAction,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: NavTab; label: string }[] = [
    { id: 'SYSTEMS', label: 'SYSTEMS' },
    { id: 'STRATEGY', label: 'STRATEGY' },
    { id: 'ENGRAMS', label: 'ENGRAMS' },
    { id: 'TRANSCEND', label: 'TRANSCEND' },
    { id: 'SERVICES', label: 'SERVICES' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121414]/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <div
          onClick={() => onSelectTab('SYSTEMS')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={ASSET_URLS.LOGO}
            alt="NEONTOMYEVANGELION Logo"
            className="h-9 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(221,183,255,0.8)] group-hover:scale-105 transition-transform"
          />
          <div className="font-display-lg text-lg md:text-2xl tracking-tighter text-[#ddb7ff] drop-shadow-[0_0_10px_rgba(221,183,255,0.8)] font-bold">
            NEONTOMYEVANGELION
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 font-mono text-xs font-bold tracking-[0.2em] items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`py-1 transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#ddb7ff] border-b-2 border-[#ddb7ff] drop-shadow-[0_0_8px_rgba(221,183,255,0.8)]'
                    : 'text-[#cfc2d6]/70 hover:text-white hover:bg-white/5 px-2 rounded backdrop-blur-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            title="Open CLI Terminal"
            className="p-2 border border-[#ddb7ff]/30 text-[#ddb7ff] hover:bg-[#ddb7ff]/10 rounded transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden lg:inline">TERMINAL</span>
          </button>
          <button
            onClick={onInitiateAction}
            className="octagonal bg-[#ddb7ff] text-[#490080] px-6 py-2 font-mono text-xs font-bold tracking-widest hover:shadow-[0_0_20px_white] hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            INITIATE
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 text-[#ddb7ff] hover:bg-white/5 rounded"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#e2e2e2] hover:bg-white/5 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f0f]/95 border-b border-white/10 p-6 flex flex-col gap-4 font-mono text-xs tracking-widest">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onSelectTab(tab.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded ${
                activeTab === tab.id
                  ? 'bg-[#ddb7ff]/10 text-[#ddb7ff] font-bold border-l-2 border-[#ddb7ff]'
                  : 'text-[#cfc2d6]/80 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                onInitiateAction();
                setMobileMenuOpen(false);
              }}
              className="octagonal bg-[#ddb7ff] text-[#490080] py-3 text-center font-mono font-bold tracking-widest"
            >
              INITIATE SYSTEM SYNC
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
