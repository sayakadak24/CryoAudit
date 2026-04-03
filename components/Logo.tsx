
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
        <img 
          src="/Cryotrack.png" 
          alt="CryoTrack Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if Cryotrack.png is not found
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-full flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path 
              d="M12 2L3 7V12C3 17.41 6.84 22.38 12 24C17.16 22.38 21 17.41 21 12V7L12 2Z" 
              fill="#2563eb" 
            />
            <path 
              d="M9 12L11 14L15 10" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {!iconOnly && (
        <span className="text-xl font-black tracking-tighter whitespace-nowrap">
          CryoTrack
        </span>
      )}
    </div>
  );
};

export default Logo;
