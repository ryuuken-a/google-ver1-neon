import React, { useState } from 'react';
import { NavTab } from '../types';
import { Logo } from './Logo';
import { Menu, X, Terminal, Bot, Calculator, Send } from 'lucide-react';

interface TopNavBarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenTerminal: () => void;
  onOpenAiScout: () => void;
  onOpenEstimator: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeTab,
  onSelectTab,
  onOpenTerminal,
  onOpenAiScout,
  onOpenEstimator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: NavTab; label: string }[] = [
    { id: 'SERVICES', label: 'SERVICES' },
    { id: 'WORK', label: 'PORTFOLIO' },
    { id: 'CALCULATOR', label: 'ESTIMATOR' },
    { id: 'TEAM', label: 'OUR TEAM' },
    { id: 'PROCESS', label: 'PROCESS' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121414]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-3.5 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <Logo
          size="md"
          showText={true}
          showDomain={true}
          onClick={() => onSelectTab('SERVICES')}
        />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-5 lg:gap-7 font-mono text-xs font-bold tracking-widest items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`py-1.5 transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#ddb7ff] border-b-2 border-[#ddb7ff] drop-shadow-[0_0_8px_rgba(221,183,255,0.8)]'
                    : 'text-[#cfc2d6]/80 hover:text-white hover:bg-white/5 px-2 py-1 rounded backdrop-blur-sm'
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
            title="Open Developer Console"
            className="p-2 border border-[#ddb7ff]/30 text-[#ddb7ff] hover:bg-[#ddb7ff]/10 rounded transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden lg:inline">CLI</span>
          </button>

          <button
            onClick={onOpenAiScout}
            className="border border-[#adc6ff]/50 bg-[#adc6ff]/10 text-[#adc6ff] px-4 py-2 font-mono text-xs font-bold tracking-wider hover:bg-[#adc6ff]/20 hover:border-[#adc6ff] rounded transition-all flex items-center gap-1.5"
          >
            <Bot className="w-3.5 h-3.5" />
            AI SCOUT
          </button>

          <button
            onClick={onOpenEstimator}
            className="octagonal bg-[#ddb7ff] text-[#490080] px-5 py-2 font-mono text-xs font-bold tracking-widest hover:shadow-[0_0_20px_white] hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1.5"
          >
            <Calculator className="w-3.5 h-3.5" />
            GET QUOTE
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAiScout}
            className="p-2 text-[#adc6ff] hover:bg-white/5 rounded"
            title="AI Scout"
          >
            <Bot className="w-5 h-5" />
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
        <div className="md:hidden bg-[#0c0f0f]/98 border-b border-white/10 p-6 flex flex-col gap-4 font-mono text-xs tracking-widest animate-fade-in">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onSelectTab(tab.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2.5 px-3 rounded ${
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
                onOpenEstimator();
                setMobileMenuOpen(false);
              }}
              className="octagonal bg-[#ddb7ff] text-[#490080] py-3 text-center font-mono font-bold tracking-widest flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              BUILD INSTANT PROPOSAL
            </button>

            <button
              onClick={() => {
                onOpenAiScout();
                setMobileMenuOpen(false);
              }}
              className="border border-[#adc6ff] text-[#adc6ff] py-2.5 rounded text-center font-mono font-bold tracking-widest flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              CHAT WITH AI SCOUT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
