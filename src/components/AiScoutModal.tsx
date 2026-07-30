import React, { useState } from 'react';
import { X, Bot, Sparkles, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

interface AiScoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProposal: () => void;
}

interface ScoutResult {
  recommendedArchitecture: string;
  estimatedCost: string;
  estimatedTimeline: string;
  deliverables: string[];
  technicalSpecs: string;
  nextSteps: string;
}

export const AiScoutModal: React.FC<AiScoutModalProps> = ({
  isOpen,
  onClose,
  onOpenProposal,
}) => {
  const [projectType, setProjectType] = useState('Web Application & AI Workflow');
  const [budget, setBudget] = useState('$1,000 - $3,000');
  const [timeline, setTimeline] = useState('2 Weeks Sprint');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [scoutResult, setScoutResult] = useState<ScoutResult | null>(null);

  if (!isOpen) return null;

  const handleScoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setScoutResult(null);

    try {
      const res = await fetch('/api/scout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectType, budget, timeline, description }),
      });
      const data = await res.json();
      setScoutResult(data);
    } catch (err) {
      console.warn('Scout API fallback:', err);
      // Fallback proposal if API is offline
      setScoutResult({
        recommendedArchitecture: 'High-Performance Spatial Web React App + Node API',
        estimatedCost: budget || '$1,500 - $3,500',
        estimatedTimeline: timeline || '14 Days Sprint',
        deliverables: [
          'Interactive WebGL Shader Canvas Interface',
          'Responsive Dark/Neon Tailwind v4 Theme',
          'Serverless Express / Gemini AI API Proxy',
          'Core Web Vitals Performance Audit (100/100)'
        ],
        technicalSpecs: 'React 19, TypeScript, Vite, Tailwind CSS v4, Node.js Express, and Gemini 2.5 API.',
        nextSteps: 'Schedule technical discovery call or submit formal quote proposal below.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[170] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-3xl bg-[#0c0f0f] border border-[#adc6ff]/50 rounded-lg p-6 md:p-8 shadow-[0_0_50px_rgba(5,102,217,0.4)] relative font-mono text-xs text-[#e2e2e2] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Bot className="w-6 h-6 text-[#adc6ff]" />
            <div>
              <h3 className="font-display-lg text-lg md:text-2xl text-white font-bold tracking-tight">
                GEMINI AI PROJECT SCOUTER
              </h3>
              <p className="text-[10px] text-[#adc6ff]">
                GET INSTANT TECHNICAL ARCHITECTURE & ESTIMATES FROM OUR AI SCOUT
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

        {scoutResult ? (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 bg-[#1a1c1c] border border-[#adc6ff]/40 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-[#adc6ff] font-bold">
                <Sparkles className="w-4 h-4" />
                <span className="uppercase tracking-wider">AI SCOUTER RECOMMENDED ARCHITECTURE</span>
              </div>
              <h4 className="font-display-lg text-xl text-white font-extrabold">
                {scoutResult.recommendedArchitecture}
              </h4>
              <p className="text-[#cfc2d6] text-xs leading-relaxed">
                {scoutResult.technicalSpecs}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="p-3 bg-black/40 border border-white/10 rounded">
                <span className="text-[9px] text-[#adc6ff] block uppercase font-bold">ESTIMATED COST</span>
                <span className="text-lg font-extrabold text-[#ddb7ff]">{scoutResult.estimatedCost}</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/10 rounded">
                <span className="text-[9px] text-[#adc6ff] block uppercase font-bold">ESTIMATED TIMELINE</span>
                <span className="text-lg font-extrabold text-white">{scoutResult.estimatedTimeline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#adc6ff] font-bold uppercase tracking-wider block">
                RECOMMENDED DELIVERABLES & MODULES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scoutResult.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#121414] rounded border border-white/5 text-xs text-[#e2e2e2]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#121414] rounded border border-white/10 text-xs space-y-1">
              <span className="text-[#adc6ff] font-bold uppercase block">RECOMMENDED NEXT STEP</span>
              <p className="text-[#cfc2d6]">{scoutResult.nextSteps}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-end">
              <button
                onClick={() => setScoutResult(null)}
                className="px-4 py-2 border border-white/20 text-[#cfc2d6] hover:bg-white/10 rounded font-bold"
              >
                SCOUT AGAIN
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenProposal();
                }}
                className="octagonal bg-[#ddb7ff] text-[#490080] px-6 py-2.5 font-bold hover:shadow-[0_0_15px_white] flex items-center gap-2"
              >
                <span>PROCEED TO FORMAL PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleScoutSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                  PROJECT CATEGORY
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-[#1e2020] border border-white/20 p-2.5 rounded text-[#ddb7ff] focus:outline-none focus:border-[#adc6ff]"
                >
                  <option value="Web Application & AI Workflow">Web Application & AI Workflow</option>
                  <option value="High-Fidelity WebGL Site">High-Fidelity WebGL Site</option>
                  <option value="Custom AI Agent System">Custom AI Agent System</option>
                  <option value="Brand Identity & Design System">Brand Identity & Design System</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                  TARGET BUDGET
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#1e2020] border border-white/20 p-2.5 rounded text-[#ddb7ff] focus:outline-none focus:border-[#adc6ff]"
                >
                  <option value="$599 - $1,200">$599 - $1,200 (Starter)</option>
                  <option value="$1,200 - $3,000">$1,200 - $3,000 (Growth)</option>
                  <option value="$3,000 - $7,000">$3,000 - $7,000 (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                  TARGET TIMELINE
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#1e2020] border border-white/20 p-2.5 rounded text-[#ddb7ff] focus:outline-none focus:border-[#adc6ff]"
                >
                  <option value="7 Days Express">7 Days Express</option>
                  <option value="2 Weeks Sprint">2 Weeks Sprint</option>
                  <option value="1 Month Enterprise">1 Month Enterprise</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-[#adc6ff] font-bold uppercase mb-1">
                DESCRIBE YOUR APPLICATION IDEA & GOALS *
              </label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: We need a cyberpunk dark-mode trading dashboard with real-time streaming charts and a custom Gemini customer service agent for our tech startup..."
                className="w-full bg-[#1e2020] border border-white/20 p-3 rounded text-white placeholder:text-white/20 focus:outline-none focus:border-[#adc6ff]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full octagonal bg-[#adc6ff] text-[#002e6a] py-3.5 font-mono font-bold tracking-widest hover:shadow-[0_0_20px_white] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  ANALYZING SPECIFICATIONS WITH GEMINI...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  GENERATE TECHNICAL SCOPE & QUOTE
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
