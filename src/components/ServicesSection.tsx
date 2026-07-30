import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/mockData';
import { Layout, Cpu, Sparkles, CheckCircle2, ArrowRight, X, Send, Clock, DollarSign } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenEstimator?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimator }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    userId: '',
    requirements: '',
    timeline: 'Standard (1-2 weeks)',
  });

  const handleOpenInquiry = (service: ServiceItem) => {
    setSelectedService(service);
    setSubmittedTicket(null);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `INQ_${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 text-center space-y-4">
        <span className="font-mono text-xs text-[#adc6ff] tracking-widest font-bold uppercase">
          [ AGENCY SERVICE CATALOG ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          OUR CORE AGENCY SERVICES
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          High-performance web architecture, custom Gemini AI agents, and futuristic brand identities. Fixed transparent pricing starting at $599.
        </p>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {SERVICES_LIST.map((svc) => {
          const isFeatured = svc.highlighted;
          return (
            <div
              key={svc.id}
              className={`glass-panel rounded-lg p-8 md:p-10 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between ${
                isFeatured
                  ? 'border-[#ddb7ff]/50 bg-[#ddb7ff]/5 md:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.25)]'
                  : 'hover:border-[#adc6ff]/50'
              }`}
            >
              {isFeatured && (
                <div className="absolute top-3 right-3 bg-[#ddb7ff] text-[#490080] text-[9px] font-mono font-bold px-2.5 py-1 rounded tracking-widest uppercase shadow-[0_0_10px_white]">
                  MOST POPULAR
                </div>
              )}

              <div>
                <span
                  className={`font-mono text-xs font-bold mb-4 block tracking-widest ${
                    isFeatured ? 'text-[#ddb7ff]' : 'text-[#adc6ff]'
                  }`}
                >
                  {svc.code}
                </span>

                <h3
                  className={`font-display-lg text-xl md:text-2xl font-bold mb-3 ${
                    isFeatured ? 'text-[#ddb7ff]' : 'text-white'
                  }`}
                >
                  {svc.title}
                </h3>

                <p className="text-[#cfc2d6] mb-6 font-mono text-xs md:text-sm leading-relaxed">
                  {svc.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-8 font-mono text-xs text-[#e2e2e2]">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${isFeatured ? 'text-[#ddb7ff]' : 'text-[#adc6ff]'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#adc6ff] block uppercase font-bold">
                      FIXED INVESTMENT
                    </span>
                    <span
                      className={`font-display-lg text-xl md:text-2xl font-extrabold tracking-tight ${
                        isFeatured ? 'text-[#ddb7ff]' : 'text-white'
                      }`}
                    >
                      {svc.startingPrice}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#adc6ff] flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {svc.timeline}
                  </span>
                </div>

                <button
                  onClick={() => handleOpenInquiry(svc)}
                  className={`w-full octagonal py-3 font-mono text-xs font-bold tracking-widest transition-all ${
                    isFeatured
                      ? 'bg-[#ddb7ff] text-[#490080] hover:shadow-[0_0_20px_white]'
                      : 'border border-[#adc6ff] text-[#adc6ff] hover:bg-[#adc6ff]/10'
                  }`}
                >
                  REQUEST PROPOSAL
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Inquiry Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#0c0f0f] border border-[#ddb7ff]/50 rounded-lg p-6 md:p-8 shadow-[0_0_40px_rgba(168,85,247,0.4)] relative font-mono text-xs text-[#e2e2e2]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#cfc2d6] hover:text-white bg-white/5 p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 mb-6">
              <span className="text-[#ddb7ff] font-bold text-xs">
                [{selectedService.code}]
              </span>
              <h3 className="font-display-lg text-xl md:text-2xl text-white font-bold">
                PROPOSAL REQUEST: {selectedService.title}
              </h3>
              <p className="text-[#cfc2d6]">
                Starting Price: <span className="text-[#ddb7ff] font-bold">{selectedService.startingPrice}</span> | Sprint: <span className="text-white font-bold">{selectedService.timeline}</span>
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-6 bg-[#1a1c1c] border border-emerald-500/40 rounded text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display-lg text-lg text-white font-bold">
                  PROPOSAL REQUEST RECEIVED
                </h4>
                <p className="text-[#cfc2d6]">
                  Reference ID: <span className="text-[#ddb7ff] font-bold">{submittedTicket}</span>
                </p>
                <p className="text-[11px] text-[#adc6ff]">
                  Our lead engineering team will review your specs and send a formal proposal within 2 hours.
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="octagonal bg-[#ddb7ff] text-[#490080] px-8 py-2.5 font-bold hover:shadow-[0_0_15px_white]"
                >
                  RETURN TO CATALOG
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    WORK EMAIL / CONTACT *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.userId}
                    onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                    placeholder="cto@techcompany.com"
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-white focus:outline-none focus:border-[#ddb7ff]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    TARGET TIMELINE
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-[#ddb7ff] focus:outline-none focus:border-[#ddb7ff]"
                  >
                    <option value="Urgent (1 week)">Urgent (1 week sprint)</option>
                    <option value="Standard (2 weeks)">Standard (2 weeks sprint)</option>
                    <option value="Flexible (1 month)">Flexible (1 month)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    PROJECT GOALS & SPECIFICATIONS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Describe your target application, key features, or design references..."
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-white focus:outline-none focus:border-[#ddb7ff]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full octagonal bg-[#ddb7ff] text-[#490080] py-3 font-mono font-bold tracking-widest hover:shadow-[0_0_20px_white] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT FORMAL INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
