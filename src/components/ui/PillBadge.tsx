import React from 'react';

interface PillBadgeProps {
  children: React.ReactNode;
  icon?: string;
  /** Colour variant — picks border/text colours from design tokens */
  variant?: 'primary' | 'tertiary' | 'error' | 'neutral';
  className?: string;
}

const variantClasses: Record<NonNullable<PillBadgeProps['variant']>, string> = {
  primary: 'bg-primary/10 text-primary',
  tertiary: 'bg-tertiary/10 text-tertiary',
  error: 'bg-error-container/20 text-error border border-error/20',
  neutral: 'bg-tertiary-container/10 text-tertiary-container',
};

/** Small pill-shaped eyebrow badge — used above section headings/heroes */
const PillBadge: React.FC<PillBadgeProps> = ({
  children,
  icon,
  variant = 'tertiary',
  className = '',
}) => (
  <div
    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.6875rem] font-bold tracking-wider uppercase mb-6 ${variantClasses[variant]} ${className}`}
  >
    {icon && (
      <span
        className="material-symbols-outlined text-[18px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
    )}
    {children}
  </div>
);

export default PillBadge;
