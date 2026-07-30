import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { MapPin, Code, Cpu, Award, Shield } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center space-y-3">
        <span className="font-mono text-xs text-[#adc6ff] tracking-widest font-bold uppercase">
          [ HUMAN CREDIBILITY & LEADERSHIP ]
        </span>
        <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl text-white font-extrabold ethereal-glow tracking-tight uppercase">
          MEET OUR CORE ARCHITECTS & ENGINEERS
        </h2>
        <p className="text-[#cfc2d6] font-mono text-xs sm:text-sm max-w-2xl">
          Direct access to senior developers. No middle-managers, no outsourcing. You work directly with the principal architects who write every line of code.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="glass-panel p-6 rounded-lg border border-white/10 hover:border-[#ddb7ff]/50 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Avatar Image */}
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#ddb7ff]/40 shadow-[0_0_15px_rgba(221,183,255,0.3)]">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="text-center">
                <h3 className="font-display-lg text-lg text-white font-bold">
                  {member.name}
                </h3>
                <span className="text-[11px] font-mono text-[#ddb7ff] font-bold block mt-0.5">
                  {member.role}
                </span>
                <span className="text-[9px] font-mono text-[#adc6ff] block mt-1 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {member.location}
                </span>
              </div>

              {/* Bio */}
              <p className="text-[#cfc2d6] font-mono text-xs leading-relaxed text-center line-clamp-4">
                {member.bio}
              </p>
            </div>

            {/* Experience Badge & Specialties */}
            <div className="space-y-3 pt-3 border-t border-white/10 font-mono">
              <span className="block text-[9px] text-[#adc6ff] font-bold uppercase text-center bg-black/40 py-1 rounded">
                {member.experience}
              </span>

              <div className="flex flex-wrap gap-1 justify-center">
                {member.specialties.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#cfc2d6] rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
