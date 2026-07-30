import React, { useState } from 'react';
import { ESTIMATOR_FEATURES } from '../data/mockData';
import { X, Calculator, CheckSquare, Square, Send, CheckCircle2, Clock, DollarSign } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'feat-1', // React App
    'feat-2', // WebGL Shaders
  ]);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleFeature = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // Keep at least 1 selected
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedFeatures = ESTIMATOR_FEATURES.filter((f) => selectedIds.includes(f.id));
  const totalPrice = selectedFeatures.reduce((acc, f) => acc + f.price, 0);
  const maxDays = Math.max(...selectedFeatures.map((f) => f.days));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `QUOTE_${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <div className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-4xl bg-[#0c0f0f] border border-[#ddb7ff]/50 rounded-lg p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] relative font-mono text-xs text-[#e2e2e2] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-[#ddb7ff]" />
            <div>
              <h3 className="font-display-lg text-lg md:text-2xl text-white font-bold tracking-tight">
                TRANSPARENT PROJECT QUOTE BUILDER
              </h3>
              <p className="text-[10px] text-[#adc6ff]">
                SELECT YOUR DELIVERABLES FOR AN INSTANT ESTIMATE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#cfc2d6] hover:text-white hover:bg-white/10 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedTicket ? (
          <div className="p-8 bg-[#1a1c1c] border border-emerald-500/40 rounded text-center space-y-4 my-auto">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h4 className="font-display-lg text-xl text-white font-bold">
              ESTIMATE TRANSMITTED SUCCESSFULLY
            </h4>
            <p className="text-[#cfc2d6]">
              Quote Reference ID: <span className="text-[#ddb7ff] font-bold">{submittedTicket}</span>
            </p>
            <div className="p-4 bg-black/40 rounded border border-white/10 max-w-md mx-auto text-left space-y-2">
              <div className="flex justify-between text-xs text-[#adc6ff]">
                <span>TOTAL ESTIMATED COST:</span>
                <span className="text-white font-bold">${totalPrice} USD</span>
              </div>
              <div className="flex justify-between text-xs text-[#adc6ff]">
                <span>TIMELINE SPRINT:</span>
                <span className="text-white font-bold">{maxDays} Days</span>
              </div>
            </div>
            <p className="text-[11px] text-[#cfc2d6]">
              Our lead technical architect has received your spec sheet and will reach out to <span className="text-[#ddb7ff] font-bold">{email}</span> within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="octagonal bg-[#ddb7ff] text-[#490080] px-8 py-3 font-bold hover:shadow-[0_0_15px_white]"
            >
              RETURN TO AGENCY SITE
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 overflow-y-auto pr-2">
            {/* Left: Toggles List */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] text-[#adc6ff] font-bold uppercase tracking-widest block mb-2">
                1. CHOOSE YOUR FEATURE MODULES
              </span>

              {ESTIMATOR_FEATURES.map((feat) => {
                const isChecked = selectedIds.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded border cursor-pointer transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-[#ddb7ff]/10 border-[#ddb7ff] shadow-[0_0_15px_rgba(221,183,255,0.15)]'
                        : 'bg-[#121414] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="pt-0.5 text-[#ddb7ff]">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#ddb7ff]" />
                      ) : (
                        <Square className="w-4 h-4 text-[#cfc2d6]/40" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white text-xs">{feat.title}</span>
                        <span className="text-[#ddb7ff] font-extrabold text-xs">+${feat.price}</span>
                      </div>
                      <p className="text-[10px] text-[#cfc2d6]">{feat.description}</p>
                      <div className="mt-1 flex items-center gap-2 text-[9px] text-[#adc6ff]">
                        <Clock className="w-3 h-3" />
                        <span>+{feat.days} days sprint</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Summary & RFQ Form */}
            <div className="md:col-span-5 bg-[#121414] p-5 rounded border border-white/10 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="text-[10px] text-[#adc6ff] font-bold uppercase tracking-widest block">
                  2. REAL-TIME ESTIMATE SUMMARY
                </span>

                <div className="p-4 bg-black/60 rounded border border-[#ddb7ff]/30 text-center space-y-2">
                  <span className="text-[10px] text-[#adc6ff] block uppercase">ESTIMATED INVESTMENT</span>
                  <div className="font-display-lg text-3xl font-extrabold text-[#ddb7ff] ethereal-glow">
                    ${totalPrice} USD
                  </div>
                  <div className="text-[10px] text-[#cfc2d6] flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#adc6ff]" />
                    <span>Estimated Sprint: <strong className="text-white">{maxDays} Days</strong></span>
                  </div>
                </div>

                <div className="space-y-1 text-[10px] text-[#cfc2d6] border-y border-white/10 py-3">
                  <div className="flex justify-between">
                    <span>Selected Modules:</span>
                    <span className="text-white font-bold">{selectedFeatures.length} Items</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Source Code Ownership:</span>
                    <span className="text-emerald-400 font-bold">100% Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revisions & QA:</span>
                    <span className="text-emerald-400 font-bold">Unlimited</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[9px] text-[#adc6ff] font-bold uppercase mb-1">
                    YOUR WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@techfirm.com"
                    className="w-full bg-[#1e2020] border border-white/20 p-2.5 rounded text-white text-xs focus:outline-none focus:border-[#ddb7ff]"
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-[#adc6ff] font-bold uppercase mb-1">
                    ADDITIONAL NOTES (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specific design ideas or deadline targets..."
                    className="w-full bg-[#1e2020] border border-white/20 p-2.5 rounded text-white text-xs focus:outline-none focus:border-[#ddb7ff]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full octagonal bg-[#ddb7ff] text-[#490080] py-3 font-mono text-xs font-bold tracking-widest hover:shadow-[0_0_20px_white] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  SUBMIT ESTIMATE & LOCK PRICE
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
