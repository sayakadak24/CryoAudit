import React from 'react';

/** Single check-circle bullet used in feature / pricing lists */
interface CheckItemProps {
  children: React.ReactNode;
  /** Token class for the icon, e.g. 'text-tertiary' or 'text-tertiary-fixed' */
  iconColor?: string;
  /** Token class for the label text, e.g. 'text-on-surface-variant' */
  textColor?: string;
}

export const CheckItem: React.FC<CheckItemProps> = ({
  children,
  iconColor = 'text-tertiary',
  textColor = 'text-on-surface-variant',
}) => (
  <div className="flex items-start gap-3">
    <span
      className={`material-symbols-outlined ${iconColor} text-xl`}
      style={{ fontVariationSettings: "'FILL' 1" }}
    >
      check_circle
    </span>
    <span className={`text-sm font-medium ${textColor}`}>{children}</span>
  </div>
);

interface CheckListProps {
  items: string[];
  iconColor?: string;
  textColor?: string;
  className?: string;
}

/** Vertical stack of CheckItems */
const CheckList: React.FC<CheckListProps> = ({
  items,
  iconColor,
  textColor,
  className = '',
}) => (
  <div className={`space-y-3 ${className}`}>
    {items.map((item) => (
      <CheckItem key={item} iconColor={iconColor} textColor={textColor}>
        {item}
      </CheckItem>
    ))}
  </div>
);

export default CheckList;
