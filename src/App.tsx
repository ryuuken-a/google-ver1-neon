import React, { useState } from 'react';
import { NavTab, SystemStatus } from './types';
import { ShaderBackground } from './components/ShaderBackground';
import { TerminalOverlay } from './components/TerminalOverlay';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { BentoSection } from './components/BentoSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStatsSection } from './components/TechStatsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ConsciousnessSyncModal } from './components/ConsciousnessSyncModal';
import { EngramsModal } from './components/EngramsModal';

export default function App() {
  // Application State
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState<NavTab>('SYSTEMS');
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [engramsModalOpen, setEngramsModalOpen] = useState(false);
  const [selectedEngramId, setSelectedEngramId] = useState<string | null>(null);

  // System Status
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    uptime: '99.9%',
    thetaLatency: '0.4ms',
    neuralScale: '128B',
    dataPoints: '128TB',
    coord: '35.6895° N, 139.6917° E',
    frequency: 432,
    quantumLocked: true,
    systemLoad: '0.00042%',
  });

  // Handle Tab Change with auto scroll to appropriate section
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'ENGRAMS') {
      setEngramsModalOpen(true);
    } else if (tab === 'TRANSCEND') {
      setSyncModalOpen(true);
    } else if (tab === 'SERVICES') {
      const el = document.getElementById('services-catalog-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'SYSTEMS' || tab === 'STRATEGY') {
      const el = document.getElementById('bento-grid-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenEngramDetail = (id: string) => {
    setSelectedEngramId(id);
    setEngramsModalOpen(true);
  };

  const handleFrequencyChange = (freq: number) => {
    setSystemStatus((prev) => ({ ...prev, frequency: freq }));
  };

  const handleToggleLock = () => {
    setSystemStatus((prev) => ({ ...prev, quantumLocked: !prev.quantumLocked }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e2e2e2] relative font-mono selection:bg-[#ddb7ff] selection:text-[#490080]">
      {/* Global Scanline Overlay */}
      <div className="scanline" />

      {/* Deep Space WebGL Shader Background */}
      <ShaderBackground isSynced={systemStatus.quantumLocked || syncModalOpen} />

      {/* Boot & Terminal Overlay */}
      <TerminalOverlay
        booting={booting}
        onBootComplete={() => setBooting(false)}
        isOpenModal={terminalModalOpen}
        onCloseModal={() => setTerminalModalOpen(false)}
        onTriggerSync={() => {
          setTerminalModalOpen(false);
          setSyncModalOpen(true);
        }}
      />

      {/* Main Site Container (Fades in once boot sequence completes) */}
      <div className={`transition-opacity duration-1000 ${booting ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Bar */}
        <TopNavBar
          activeTab={activeTab}
          onSelectTab={handleTabChange}
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onInitiateAction={() => setSyncModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection
            systemStatus={systemStatus}
            onSyncClick={() => setSyncModalOpen(true)}
            onViewArchiveClick={() => setEngramsModalOpen(true)}
          />

          {/* Bento Grid Section */}
          <div id="bento-grid-section">
            <BentoSection
              onSelectEngram={handleOpenEngramDetail}
              onExploreSystems={() => setEngramsModalOpen(true)}
            />
          </div>

          {/* Services Section ($599 starting price high-fidelity web dev & AI architecture) */}
          <div id="services-catalog-section">
            <ServicesSection />
          </div>

          {/* Tech Stats Section */}
          <TechStatsSection />

          {/* Newsletter Section */}
          <NewsletterSection />
        </main>

        {/* Footer */}
        <Footer
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onOpenEngrams={() => setEngramsModalOpen(true)}
          onOpenSync={() => setSyncModalOpen(true)}
        />

        {/* Consciousness Sync Modal */}
        <ConsciousnessSyncModal
          isOpen={syncModalOpen}
          onClose={() => setSyncModalOpen(false)}
          frequency={systemStatus.frequency}
          onFrequencyChange={handleFrequencyChange}
          isLocked={systemStatus.quantumLocked}
          onToggleLock={handleToggleLock}
        />

        {/* Engrams Memory Archive Modal */}
        <EngramsModal
          isOpen={engramsModalOpen}
          onClose={() => setEngramsModalOpen(false)}
          selectedEngramId={selectedEngramId}
        />
      </div>
    </div>
  );
}
