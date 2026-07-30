import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showDomain?: boolean;
  className?: string;
  onClick?: () => void;
}

export const LogoSymbol: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_0_12px_rgba(221,183,255,0.7)] hover:drop-shadow-[0_0_18px_rgba(221,183,255,0.95)] transition-all duration-300`}
    >
      <defs>
        <linearGradient id="neonGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ddb7ff" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="cyanGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#adc6ff" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Outer Futuristic Octagonal Framing Shield */}
      <polygon
        points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
        stroke="url(#neonGlowGrad)"
        strokeWidth="3.5"
        fill="rgba(10, 10, 15, 0.65)"
      />

      {/* Inner Accent Octagon Wireframe */}
      <polygon
        points="34,12 66,12 88,34 88,66 66,88 34,88 12,66 12,34"
        stroke="url(#cyanGrad)"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        opacity="0.8"
      />

      {/* Stylized Interlocking 'N' and 'E' Vector Geometry */}
      {/* 'N' Diagonal & Pillars */}
      <path
        d="M26 72V28L48 56V28"
        stroke="url(#neonGlowGrad)"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* 'E' Horizontal Grid Bars */}
      <path
        d="M54 28H74M54 50H70M54 72H74"
        stroke="url(#cyanGrad)"
        strokeWidth="5"
        strokeLinecap="square"
      />

      {/* Center Quantum Pulse Node */}
      <circle cx="50" cy="50" r="3" fill="#ffffff" className="animate-pulse" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showDomain = true,
  className = '',
  onClick,
}) => {
  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-11 h-11',
    xl: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      <LogoSymbol className={`${symbolSizes[size]} group-hover:scale-105 transition-transform duration-300`} />

      {showText && (
        <div className="flex flex-col">
          <div className={`font-display-lg ${titleSizes[size]} font-extrabold tracking-tight text-white leading-none`}>
            NEONTOMY<span className="text-[#ddb7ff] ethereal-glow">EVANGELION</span>
          </div>
          {showDomain && (
            <span className="font-mono text-[9px] md:text-[10px] text-[#adc6ff] tracking-[0.2em] font-bold uppercase mt-1 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              NEONTOMYEVANGELION.SPACE
            </span>
          )}
        </div>
      )}
    </div>
  );
};
