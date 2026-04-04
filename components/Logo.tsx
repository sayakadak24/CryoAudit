
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* The 'C' shape (Gray) - Hexagonal block structure */}
          <path 
            d="M75 32L50 17L18 35L18 65L50 83L82 65L82 50H70V58L50 70L30 58V42L50 30L65 39L75 32Z" 
            fill="#94A3B8" 
          />
          {/* The 'T' shape (Blue) - Centered and prominent */}
          <path 
            d="M38 36H62V48H56V72H44V48H38V36Z" 
            fill="#004797" 
          />
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-xl font-black tracking-tighter whitespace-nowrap">
          CRYO<span className="text-brand-600">TRACK</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
