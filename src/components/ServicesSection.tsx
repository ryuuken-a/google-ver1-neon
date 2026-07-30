import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/mockData';
import { Layout, Network, TrendingUp, CheckCircle2, ArrowRight, X, Send, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    userId: '',
    requirements: '',
    timeline: 'Immediate (1-2 weeks)',
  });

  const handleOpenInquiry = (service: ServiceItem) => {
    setSelectedService(service);
    setSubmittedTicket(null);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `TICKET_${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 text-center space-y-4">
        <span className="font-mono text-xs text-[#ddb7ff] tracking-widest font-bold">
          [ SVCS_CATALOG_V8 ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          CORE_TRANSCENDENCE_SERVICES
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          Engineered solutions for digital supremacy. Precision-crafted spatial web experiences starting at $599.
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
                  ? 'border-[#ddb7ff]/50 bg-[#ddb7ff]/5 md:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                  : 'hover:border-[#adc6ff]/50'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ddb7ff]/20 rounded-full blur-3xl group-hover:bg-[#ddb7ff]/40 transition-all pointer-events-none"></div>
              )}

              <div>
                <span
                  className={`font-mono text-xs font-bold mb-6 block tracking-widest ${
                    isFeatured ? 'text-[#ddb7ff]' : 'text-[#adc6ff]'
                  }`}
                >
                  {svc.code}
                </span>

                <h3
                  className={`font-display-lg text-xl md:text-2xl font-bold mb-4 ${
                    isFeatured ? 'text-[#ddb7ff]' : 'text-white'
                  }`}
                >
                  {svc.title}
                </h3>

                <p className="text-[#cfc2d6] mb-8 font-mono text-xs md:text-sm leading-relaxed">
                  {svc.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-8 font-mono text-xs text-[#e2e2e2]/80">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ddb7ff] rounded-full"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#adc6ff]/70 block uppercase mb-1">
                      Entry_Investment
                    </span>
                    <span
                      className={`font-display-lg text-xl md:text-2xl font-extrabold tracking-tight ${
                        isFeatured ? 'text-[#ddb7ff]' : 'text-white'
                      }`}
                    >
                      {svc.startingPrice}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#ddb7ff] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-6 h-6" />
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
                  INITIATE_SYSTEM_BUILD
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Inquiry Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#0c0f0f] border border-[#ddb7ff]/40 rounded-lg p-6 md:p-8 shadow-[0_0_40px_rgba(168,85,247,0.3)] relative font-mono text-xs text-[#e2e2e2]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#cfc2d6] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 mb-6">
              <span className="text-[#ddb7ff] font-bold text-xs">
                [{selectedService.code}]
              </span>
              <h3 className="font-display-lg text-xl md:text-2xl text-white font-bold">
                INITIATE: {selectedService.title}
              </h3>
              <p className="text-[#cfc2d6]">
                Investment Benchmark: <span className="text-[#ddb7ff] font-bold">{selectedService.startingPrice}</span>
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-6 bg-[#1a1c1c] border border-[#ddb7ff]/30 rounded text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#ddb7ff] mx-auto" />
                <h4 className="font-display-lg text-lg text-white font-bold">
                  TRANSMISSION_CONFIRMED
                </h4>
                <p className="text-[#cfc2d6]">
                  Ticket Reference ID: <span className="text-[#ddb7ff] font-bold">{submittedTicket}</span>
                </p>
                <p className="text-[10px] text-[#adc6ff]/70">
                  Our system architects have logged your request. Neural response node will sync within 0.04s.
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="octagonal bg-[#ddb7ff] text-[#490080] px-8 py-2 font-bold hover:shadow-[0_0_15px_white]"
                >
                  RETURN_TO_MAIN
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    USER_IDENTIFIER / EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.userId}
                    onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                    placeholder="architect@neontomy.sys"
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-[#ddb7ff] focus:outline-none focus:border-[#ddb7ff]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    PROJECT_TIMELINE
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-[#ddb7ff] focus:outline-none focus:border-[#ddb7ff]"
                  >
                    <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                    <option value="Standard (2-4 weeks)">Standard (2-4 weeks)</option>
                    <option value="Enterprise (1-2 months)">Enterprise (1-2 months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                    SYSTEM_REQUIREMENTS & SPECIFICATIONS
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Describe spatial UI layout, AI agent workflows, domain target, or custom 8K requirements..."
                    className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-[#ddb7ff] focus:outline-none focus:border-[#ddb7ff]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full octagonal bg-[#ddb7ff] text-[#490080] py-3 font-mono font-bold tracking-widest hover:shadow-[0_0_20px_white] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT_INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
