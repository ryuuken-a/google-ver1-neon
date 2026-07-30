import React, { useState } from 'react';
import { NavTab, SystemStatus } from './types';
import { ShaderBackground } from './components/ShaderBackground';
import { TerminalOverlay } from './components/TerminalOverlay';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { ClientLogosBar } from './components/ClientLogosBar';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechStatsSection } from './components/TechStatsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { AiScoutModal } from './components/AiScoutModal';
import { ConsciousnessSyncModal } from './components/ConsciousnessSyncModal';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState<NavTab>('SERVICES');
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [estimatorModalOpen, setEstimatorModalOpen] = useState(false);
  const [aiScoutModalOpen, setAiScoutModalOpen] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);

  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    uptime: '99.9%',
    thetaLatency: '0.18s',
    activeClients: 18,
    projectsCompleted: 64,
    coord: '35.6895° N, 139.6917° E',
    frequency: 432,
    quantumLocked: true,
    systemLoad: '0.00018%',
  });

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'SERVICES') {
      const el = document.getElementById('agency-services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'WORK') {
      const el = document.getElementById('agency-portfolio-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'CALCULATOR') {
      setEstimatorModalOpen(true);
    } else if (tab === 'TEAM') {
      const el = document.getElementById('agency-team-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'PROCESS') {
      const el = document.getElementById('agency-process-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
      />

      {/* Main Site Container */}
      <div className={`transition-opacity duration-1000 ${booting ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Bar */}
        <TopNavBar
          activeTab={activeTab}
          onSelectTab={handleTabChange}
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onOpenAiScout={() => setAiScoutModalOpen(true)}
          onOpenEstimator={() => setEstimatorModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection
            systemStatus={systemStatus}
            onExploreServices={() => {
              const el = document.getElementById('agency-services-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenEstimator={() => setEstimatorModalOpen(true)}
            onOpenAiScout={() => setAiScoutModalOpen(true)}
          />

          {/* Social Proof Client Logos & Guarantee Bar */}
          <ClientLogosBar />

          {/* Core Services Section ($599+) */}
          <div id="agency-services-section">
            <ServicesSection onOpenEstimator={() => setEstimatorModalOpen(true)} />
          </div>

          {/* Portfolio & Case Studies Section */}
          <div id="agency-portfolio-section">
            <PortfolioSection />
          </div>

          {/* Agency Team & Human Architects Section */}
          <div id="agency-team-section">
            <TeamSection />
          </div>

          {/* 4-Sprint Process Section */}
          <div id="agency-process-section">
            <ProcessSection />
          </div>

          {/* Verified Client Reviews & Testimonials */}
          <TestimonialsSection />

          {/* Performance Stats */}
          <TechStatsSection />

          {/* Free Discovery Call Consultation Form */}
          <NewsletterSection />
        </main>

        {/* Footer */}
        <Footer
          onSelectTab={handleTabChange}
          onOpenEstimator={() => setEstimatorModalOpen(true)}
          onOpenAiScout={() => setAiScoutModalOpen(true)}
          onOpenTerminal={() => setTerminalModalOpen(true)}
        />

        {/* Cost Estimator Quote Modal */}
        <CostEstimatorModal
          isOpen={estimatorModalOpen}
          onClose={() => setEstimatorModalOpen(false)}
        />

        {/* AI Project Scout Modal */}
        <AiScoutModal
          isOpen={aiScoutModalOpen}
          onClose={() => setAiScoutModalOpen(false)}
          onOpenProposal={() => setEstimatorModalOpen(true)}
        />

        {/* Audio Feedback Demo Modal */}
        <ConsciousnessSyncModal
          isOpen={syncModalOpen}
          onClose={() => setSyncModalOpen(false)}
          frequency={systemStatus.frequency}
          onFrequencyChange={(freq) => setSystemStatus((prev) => ({ ...prev, frequency: freq }))}
          isLocked={systemStatus.quantumLocked}
          onToggleLock={() => setSystemStatus((prev) => ({ ...prev, quantumLocked: !prev.quantumLocked }))}
        />
      </div>
    </div>
  );
}
