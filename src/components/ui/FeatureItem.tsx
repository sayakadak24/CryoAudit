import React from 'react';

interface FeatureItemProps {
  /** Material Symbols icon name */
  icon: string;
  title: string;
  description: string;
  /** Icon colour token class, e.g. 'text-primary' */
  iconColor?: string;
}

/** Single row — icon + title + description — used in modular architecture sections */
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  iconColor = 'text-primary',
}) => (
  <div className="flex gap-6">
    <div className="w-12 h-12 shrink-0 bg-surface-container-high rounded-xl flex items-center justify-center">
      <span
        className={`material-symbols-outlined ${iconColor}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
    </div>
    <div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-slate-500 text-sm text-justify">{description}</p>
    </div>
  </div>
);

interface FeatureListProps {
  items: { icon: string; title: string; description: string; iconColor?: string }[];
  className?: string;
}

/** Vertical stack of FeatureItems */
export const FeatureList: React.FC<FeatureListProps> = ({ items, className = '' }) => (
  <div className={`space-y-8 ${className}`}>
    {items.map((item) => (
      <FeatureItem key={item.title} {...item} />
    ))}
  </div>
);

export default FeatureItem;
