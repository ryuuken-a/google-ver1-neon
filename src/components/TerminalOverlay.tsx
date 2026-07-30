import React, { useState, useEffect, useRef } from 'react';
import { TerminalLog } from '../types';
import { INITIAL_LOADING_LINES } from '../data/mockData';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

interface TerminalOverlayProps {
  booting: boolean;
  onBootComplete: () => void;
  isOpenModal: boolean;
  onCloseModal: () => void;
  onTriggerSync?: () => void;
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({
  booting,
  onBootComplete,
  isOpenModal,
  onCloseModal,
  onTriggerSync,
}) => {
  // Boot Sequence typewriter state
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [bootDone, setBootDone] = useState(false);

  // Interactive CLI Modal state
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'init-1',
      text: 'NEONTOMYEVANGELION SYSTEM CLI v8.0.42 [QUANTUM_LOCKED]',
      type: 'info',
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 'init-2',
      text: 'Type "help" to view available system protocols.',
      type: 'info',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Boot sequence logic
  useEffect(() => {
    if (!booting || bootDone) return;

    let isMounted = true;
    const runBoot = async () => {
      for (let i = 0; i < INITIAL_LOADING_LINES.length; i++) {
        if (!isMounted) break;
        const line = INITIAL_LOADING_LINES[i];
        setBootLines((prev) => [...prev, line]);
        await new Promise((r) => setTimeout(r, 180));
      }
      if (isMounted) {
        setBootDone(true);
        setTimeout(() => {
          onBootComplete();
        }, 800);
      }
    };

    runBoot();

    return () => {
      isMounted = false;
    };
  }, [booting, bootDone, onBootComplete]);

  // Scroll to bottom on log change
  useEffect(() => {
    if (isOpenModal) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpenModal]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const userLog: TerminalLog = {
      id: Date.now().toString(),
      text: `> ${cmd}`,
      type: 'input',
      timestamp: new Date().toLocaleTimeString(),
    };

    let responseLogs: TerminalLog[] = [];
    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'AVAILABLE PROTOCOLS:\n - status    : Display live neural infrastructure telemetry\n - sync      : Execute Quantum Consciousness Alignment\n - services  : Query high-fidelity spatial web & AI development packages\n - engrams   : Retrieve active memory logs and case files\n - clear     : Purge current terminal screen buffer\n - audit     : Run quantum latency & security diagnostics\n - exit      : Close interactive terminal modal',
          type: 'info',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (lower === 'status') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'SYS_STATUS: OPTIMAL_TRANSCENDENCE\nUPTIME: 99.9%\nLATENCY: 0.0004s THETA_RESPONSE\nFREQUENCY: 432 HZ // QUANTUM_LOCKED\nLOAD: 0.00042%',
          type: 'success',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (lower === 'sync') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'INITIATING CONSCIOUSNESS HARMONIC RESONANCE...',
          type: 'warn',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
      if (onTriggerSync) onTriggerSync();
    } else if (lower === 'services') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'CATALOG_FETCH:\n 01. High-Fidelity Web Dev (Starting from $599)\n 02. AI Systems Architecture (Starting from $1,299)\n 03. Strategic Neural Marketing (Starting from $899)',
          type: 'info',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (lower === 'engrams') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'ENGRAM_01: NEURAL_TRANSCENDENCE_KERNEL [99.98% STABILITY]\nENGRAM_02: QUANTUM_CONSCIOUSNESS_SYNC [432 Hz HARMONIC]\nENGRAM_03: PREDICTIVE_RESONANCE_MATRIX [14.2M IMPRESSIONS]',
          type: 'info',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (lower === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (lower === 'audit') {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: 'DIAGNOSTIC COMPLETE: Zero memory leaks detected. AES-8192 encryption active. Shader buffers 100% stable.',
          type: 'success',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (lower === 'exit') {
      onCloseModal();
      setInputVal('');
      return;
    } else {
      responseLogs = [
        {
          id: Date.now() + '-1',
          text: `Command not recognized: "${cmd}". Type "help" for a list of available protocols.`,
          type: 'error',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    }

    setLogs((prev) => [...prev, userLog, ...responseLogs]);
    setInputVal('');
  };

  // If initial booting typewriter screen is active
  if (booting) {
    return (
      <div className="fixed inset-0 bg-black z-[999] flex flex-col p-8 font-mono text-[#f0dbff] overflow-hidden select-none">
        <div className="max-w-3xl mx-auto w-full pt-12 space-y-2">
          {bootLines.map((line, idx) => (
            <p
              key={idx}
              className="text-sm md:text-base text-[#ddb7ff] terminal-cursor animate-fade-in tracking-wider"
            >
              {line}
            </p>
          ))}
          <div className="pt-8 flex justify-between items-center text-xs text-[#cfc2d6]/60">
            <span>PRESS ANYWHERE TO SKIP SEQUENCE</span>
            <button
              onClick={onBootComplete}
              className="octagonal bg-[#ddb7ff] text-[#490080] px-4 py-1 text-xs font-bold hover:shadow-[0_0_15px_white] transition-all"
            >
              SKIP_BOOT
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Interactive CLI Modal
  if (!isOpenModal) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="w-full max-w-4xl bg-[#0c0f0f] border border-[#ddb7ff]/30 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.3)] flex flex-col h-[80vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1a1c1c] border-b border-white/10">
          <div className="flex items-center gap-3">
            <TerminalIcon className="w-5 h-5 text-[#ddb7ff]" />
            <span className="font-mono text-xs md:text-sm font-bold text-[#ddb7ff] tracking-widest uppercase">
              NEONTOMY // CLI_SYSTEM_TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLogs([])}
              title="Clear terminal screen"
              className="p-1 text-[#cfc2d6]/70 hover:text-[#ddb7ff] hover:bg-white/5 rounded transition-all"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onCloseModal}
              className="p-1 text-[#cfc2d6]/70 hover:text-white hover:bg-white/10 rounded transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logs Output Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-3 font-mono text-xs md:text-sm text-[#e2e2e2]">
          {logs.map((log) => (
            <div key={log.id} className="whitespace-pre-wrap leading-relaxed">
              <span className="text-white/30 text-[10px] mr-2">
                [{log.timestamp}]
              </span>
              <span
                className={
                  log.type === 'input'
                    ? 'text-[#ddb7ff] font-bold'
                    : log.type === 'success'
                    ? 'text-emerald-400'
                    : log.type === 'warn'
                    ? 'text-amber-300'
                    : log.type === 'error'
                    ? 'text-rose-400'
                    : 'text-[#adc6ff]'
                }
              >
                {log.text}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Form Input */}
        <form
          onSubmit={handleCommandSubmit}
          className="p-4 bg-[#121414] border-t border-white/10 flex items-center gap-3"
        >
          <span className="text-[#ddb7ff] font-mono text-sm font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'status', 'services', 'sync', 'engrams', 'clear'..."
            className="flex-1 bg-transparent font-mono text-xs md:text-sm text-[#ddb7ff] placeholder:text-white/20 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="octagonal bg-[#ddb7ff] text-[#490080] px-4 py-2 text-xs font-mono font-bold hover:shadow-[0_0_15px_white] transition-all flex items-center gap-1"
          >
            EXEC
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
