import React, { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Shield, Radio, Activity, Sparkles } from 'lucide-react';

interface ConsciousnessSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  frequency: number;
  onFrequencyChange: (freq: number) => void;
  isLocked: boolean;
  onToggleLock: () => void;
}

export const ConsciousnessSyncModal: React.FC<ConsciousnessSyncModalProps> = ({
  isOpen,
  onClose,
  frequency,
  onFrequencyChange,
  isLocked,
  onToggleLock,
}) => {
  const [audioActive, setAudioActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // WebAudio synth oscillator generator for harmonic frequency
  const toggleAudio = () => {
    if (audioActive) {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.3
        );
        setTimeout(() => {
          oscRef.current?.stop();
          setAudioActive(false);
        }, 300);
      } else {
        setAudioActive(false);
      }
    } else {
      try {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        audioCtxRef.current = ctx;
        oscRef.current = osc;
        gainRef.current = gain;
        setAudioActive(true);
      } catch (err) {
        console.warn('WebAudio not supported:', err);
      }
    }
  };

  useEffect(() => {
    if (audioActive && oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
    }
  }, [frequency, audioActive]);

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch {
          // ignore
        }
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0c0f0f] border border-[#ddb7ff]/50 rounded-lg p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] relative font-mono text-xs text-[#e2e2e2]">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-[#ddb7ff] animate-pulse" />
            <div>
              <h3 className="font-display-lg text-lg md:text-2xl text-white font-bold tracking-tight">
                QUANTUM_CONSCIOUSNESS_SYNC
              </h3>
              <p className="text-[10px] text-[#adc6ff]">
                HARMONIC_ALIGNMENT // FREQUENCY_SYNTH
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

        {/* Visualizer Wave & Audio controls */}
        <div className="space-y-6">
          <div className="p-6 bg-[#1a1c1c] border border-white/10 rounded-lg text-center space-y-4 relative overflow-hidden">
            <div className="flex justify-center items-center gap-4">
              <span className="font-display-lg text-4xl md:text-5xl text-[#ddb7ff] font-extrabold tracking-widest ethereal-glow">
                {frequency} HZ
              </span>
              <button
                onClick={toggleAudio}
                className={`p-3 rounded-full border transition-all ${
                  audioActive
                    ? 'bg-[#ddb7ff] text-[#490080] border-white shadow-[0_0_20px_white]'
                    : 'bg-white/5 text-[#ddb7ff] border-[#ddb7ff]/30 hover:bg-white/10'
                }`}
                title={audioActive ? 'Mute Quantum Harmonic Tone' : 'Play Quantum Harmonic Tone'}
              >
                {audioActive ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>

            {/* Audio Wave Visual Bars */}
            <div className="flex items-center justify-center gap-1.5 h-12 pt-2">
              {[40, 70, 30, 90, 60, 100, 45, 80, 20, 65, 85, 50, 95, 30, 75].map((h, i) => (
                <div
                  key={i}
                  className={`w-1.5 bg-[#ddb7ff] rounded-full transition-all duration-300 ${
                    audioActive ? 'animate-pulse' : 'opacity-30'
                  }`}
                  style={{
                    height: audioActive ? `${Math.max(10, Math.floor(h * Math.random()))}px` : `${Math.floor(h / 3)}px`,
                  }}
                />
              ))}
            </div>

            <p className="text-[10px] text-[#cfc2d6]/80">
              {audioActive
                ? 'Synthesizing continuous quantum harmonic sine wave at selected resonance frequency.'
                : 'Press volume button to initialize WebAudio synth frequency loop.'}
            </p>
          </div>

          {/* Preset Frequencies */}
          <div className="space-y-2">
            <label className="block text-[10px] text-[#adc6ff] font-bold uppercase tracking-widest">
              SELECT HARMONIC FREQUENCY PRESET
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { freq: 432, label: '432 Hz - Miracle Tuning' },
                { freq: 528, label: '528 Hz - Transformation' },
                { freq: 852, label: '852 Hz - Intuition' },
              ].map((item) => (
                <button
                  key={item.freq}
                  onClick={() => onFrequencyChange(item.freq)}
                  className={`py-3 px-2 rounded border font-mono text-xs font-bold transition-all ${
                    frequency === item.freq
                      ? 'bg-[#ddb7ff]/20 text-[#ddb7ff] border-[#ddb7ff] shadow-[0_0_15px_rgba(221,183,255,0.4)]'
                      : 'bg-white/5 border-white/10 text-[#cfc2d6] hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantum Lock State Toggle */}
          <div className="flex items-center justify-between p-4 bg-[#121414] border border-white/10 rounded">
            <div>
              <span className="font-bold text-white block">QUANTUM_LOCK_STATE</span>
              <span className="text-[10px] text-[#adc6ff]">
                {isLocked ? 'STATUS: QUANTUM_LOCKED (100% SECURE)' : 'STATUS: UNLOCKED (CALIBRATING)'}
              </span>
            </div>
            <button
              onClick={onToggleLock}
              className={`octagonal px-6 py-2 font-mono text-xs font-bold transition-all ${
                isLocked
                  ? 'bg-[#ddb7ff] text-[#490080] shadow-[0_0_15px_white]'
                  : 'border border-[#adc6ff] text-[#adc6ff] hover:bg-[#adc6ff]/10'
              }`}
            >
              {isLocked ? 'LOCKED' : 'LOCK_NOW'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="octagonal bg-white/10 text-white px-6 py-2 font-mono text-xs font-bold hover:bg-white/20"
          >
            DISMISS_CONSOLE
          </button>
        </div>
      </div>
    </div>
  );
};
