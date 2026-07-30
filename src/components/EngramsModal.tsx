import React, { useState } from 'react';
import { EngramItem } from '../types';
import { ENGRAMS_LIST } from '../data/mockData';
import { X, Cpu, Database, Search, Tag, ExternalLink } from 'lucide-react';

interface EngramsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEngramId?: string | null;
}

export const EngramsModal: React.FC<EngramsModalProps> = ({
  isOpen,
  onClose,
  selectedEngramId,
}) => {
  const [filterTag, setFilterTag] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredEngrams = ENGRAMS_LIST.filter((item) => {
    const matchesTag = filterTag === 'ALL' || item.tags.includes(filterTag);
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-[140] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-4xl bg-[#0c0f0f] border border-[#adc6ff]/40 rounded-lg p-6 md:p-8 shadow-[0_0_50px_rgba(5,102,217,0.3)] relative font-mono text-xs text-[#e2e2e2] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-[#adc6ff] font-bold text-xs tracking-widest block mb-1">
              [ ARCHIVE_READOUT ]
            </span>
            <h3 className="font-display-lg text-xl md:text-3xl text-white font-bold tracking-tight">
              NEONTOMY // ENGRAM_MEMORY_BANKS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#cfc2d6] hover:text-white hover:bg-white/10 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#adc6ff]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH ENGRAM CODES OR KEYWORDS..."
              className="w-full bg-[#1e2020] border border-white/10 pl-9 pr-4 py-2 rounded text-[#ddb7ff] placeholder:text-white/20 focus:outline-none focus:border-[#adc6ff]"
            />
          </div>

          <div className="flex gap-2">
            {['ALL', 'SYSTEMS', 'TRANSCEND', 'STRATEGY'].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-2 rounded border font-mono text-xs font-bold transition-all ${
                  filterTag === tag
                    ? 'bg-[#adc6ff] text-[#002e6a] border-[#adc6ff]'
                    : 'bg-white/5 border-white/10 text-[#cfc2d6] hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Engrams List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {filteredEngrams.map((engram) => {
            const isSelected = selectedEngramId === engram.id;
            return (
              <div
                key={engram.id}
                className={`p-5 rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-[#ddb7ff]/10 border-[#ddb7ff] shadow-[0_0_20px_rgba(221,183,255,0.2)]'
                    : 'bg-[#1a1c1c] border-white/10 hover:border-[#adc6ff]/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#adc6ff]/20 text-[#adc6ff] rounded text-[10px] font-bold">
                      {engram.code}
                    </span>
                    <h4 className="font-display-lg text-base text-white font-bold">
                      {engram.title}
                    </h4>
                  </div>
                  <div className="text-[10px] text-[#adc6ff]/70 flex items-center gap-3">
                    <span>DATE: {engram.date}</span>
                    <span>LATENCY: {engram.latency}</span>
                  </div>
                </div>

                <p className="text-[#cfc2d6] mb-4 leading-relaxed">
                  {engram.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-3 bg-black/40 rounded mb-3">
                  {engram.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="block text-[9px] text-[#adc6ff]/60 uppercase">
                        {m.label}
                      </span>
                      <span className="text-sm font-bold text-[#ddb7ff]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex gap-2">
                  {engram.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#cfc2d6] rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-[#adc6ff]">
          <span>STATUS: ALL_ENGRAMS_DECRYPTED</span>
          <button
            onClick={onClose}
            className="octagonal bg-[#adc6ff] text-[#002e6a] px-6 py-2 font-bold hover:shadow-[0_0_15px_white]"
          >
            CLOSE_ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};
