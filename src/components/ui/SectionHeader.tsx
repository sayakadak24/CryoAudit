import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-on-surface ${eyebrow ? 'mt-2' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
