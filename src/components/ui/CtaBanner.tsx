import React from 'react';

interface CtaBannerProps {
  heading: React.ReactNode;
  subtext?: string;
  /** Primary (left) button label */
  primaryLabel?: string;
  onPrimary?: () => void;
  /** Secondary (right) button label; omit to hide */
  secondaryLabel?: string;
  onSecondary?: () => void;
  /** Use the darker surface variant instead of gradient */
  variant?: 'gradient' | 'surface';
  className?: string;
}

/**
 * Full-width CTA banner reused at the bottom of every view.
 * • variant="gradient" → primary→primary-container gradient with white text (default)
 * • variant="surface"  → surface-container-highest card (neutral)
 */
const CtaBanner: React.FC<CtaBannerProps> = ({
  heading,
  subtext,
  primaryLabel = 'Request a Demo',
  onPrimary,
  secondaryLabel,
  onSecondary,
  variant = 'gradient',
  className = '',
}) => {
  const isGradient = variant === 'gradient';

  return (
    <div
      className={`rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden ${
        isGradient
          ? 'bg-gradient-to-br from-primary-container to-primary text-white'
          : 'bg-surface-container-highest'
      } ${className}`}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight ${
            isGradient ? 'text-white' : 'text-on-surface'
          }`}
        >
          {heading}
        </h2>
        {subtext && (
          <p
            className={`text-lg mb-10 leading-relaxed ${
              isGradient ? 'text-blue-100' : 'text-secondary'
            }`}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryLabel && (
            <button
              onClick={onPrimary}
              className={`px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl ${
                isGradient
                  ? 'bg-white text-primary'
                  : 'bg-primary text-white shadow-primary/25'
              }`}
            >
              {primaryLabel}
            </button>
          )}
          {secondaryLabel && (
            <button
              onClick={onSecondary}
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-colors ${
                isGradient
                  ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                  : 'bg-white text-on-surface border border-outline-variant hover:bg-surface-container-lowest'
              }`}
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
