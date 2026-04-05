import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  /** Tailwind colour token class for the value, e.g. 'text-error' */
  valueColor?: string;
}

/** Single stat — large numeric value + description label */
const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  valueColor = 'text-primary',
}) => (
  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
    <div className={`font-extrabold text-3xl mb-1 tracking-tight ${valueColor}`}>
      {value}
    </div>
    <div className="text-on-surface-variant text-sm font-medium">{label}</div>
  </div>
);

export default StatCard;
