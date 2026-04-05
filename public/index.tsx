import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wheat, Pill, Cpu, Snowflake } from 'lucide-react';

/**
 * CRYOTRACK ANIMATION COMPONENT
 * 
 * Requirements:
 * 1. Tailwind CSS
 * 2. lucide-react
 * 3. motion (framer-motion)
 * 
 * CSS Additions:
 * .glow-path { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5)); }
 * .glow-node { filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8)); }
 */

const icons = [
  { Icon: Wheat, label: 'Agri-Business', color: 'text-amber-400' },
  { Icon: Pill, label: 'Biopharma', color: 'text-emerald-400' },
  { Icon: Cpu, label: 'High-Tech Mfg', color: 'text-blue-400' },
  { Icon: Snowflake, label: 'Perishables', color: 'text-cyan-400' },
];

const IndustryMorpher = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = icons[index].Icon;

  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute ${icons[index].color}`}
        >
          <CurrentIcon size={48} strokeWidth={1.5} />
        </motion.div>
      </AnimatePresence>
      
      <motion.div 
        className="absolute w-20 h-20 border border-blue-500/30 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: 360
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export const CryotrackAnimation = () => {
  const pathPoints = "M 50,450 L 250,350 L 450,450 L 650,350 L 850,450";
  
  const checkpoints = [
    { x: 250, y: 350, label: "Source Integrity", sub: "Supplier Compliance" },
    { x: 450, y: 450, label: "Transit Visibility", sub: "Real-time Monitoring" },
    { x: 650, y: 350, label: "Proof of Delivery", sub: "Automated Settlement" }
  ];

  const industryNodes = [
    { x: 100, y: 480, label: "Agri-Business", color: "text-amber-400" },
    { x: 300, y: 300, label: "Biopharma", color: "text-emerald-400" },
    { x: 500, y: 500, label: "High-Tech Mfg", color: "text-blue-400" },
    { x: 750, y: 320, label: "Perishables", color: "text-cyan-400" }
  ];
  
  return (
    <div className="relative w-full max-w-5xl aspect-[2/1] mx-auto overflow-visible">
      <svg 
        viewBox="0 0 900 600" 
        className="w-full h-full overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="900" height="600" fill="url(#grid)" />

        {industryNodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="currentColor"
              className={node.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            <foreignObject x={node.x - 60} y={node.y + 10} width="120" height="40">
              <div className={`text-[10px] font-bold uppercase tracking-widest text-center opacity-40 ${node.color}`}>
                {node.label}
              </div>
            </foreignObject>
          </g>
        ))}

        <motion.path
          d={pathPoints}
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 12"
          className="glow-path"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.rect
            key={i}
            width="4"
            height="4"
            fill="#3b82f6"
            opacity="0.3"
            initial={{ offsetDistance: `${i * 5}%` }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            style={{
              offsetPath: `path("${pathPoints}")`,
            }}
          />
        ))}

        {checkpoints.map((point, i) => (
          <g key={i}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#0f172a"
              stroke="#3b82f6"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.5 }}
            />
            
            <foreignObject x={point.x - 60} y={point.y - 50} width="120" height="40">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">{point.label}</span>
                <span className="text-[8px] text-slate-500 uppercase tracking-widest">{point.sub}</span>
              </div>
            </foreignObject>

            <motion.circle
              cx={point.x}
              cy={point.y}
              r="10"
              stroke="#3b82f6"
              strokeWidth="0.5"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 2.5, opacity: [0.5, 0] }}
              transition={{ 
                delay: 1 + i * 0.5,
                duration: 2.5,
                repeat: Infinity
              }}
            />
          </g>
        ))}

        <motion.g
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            offsetPath: `path("${pathPoints}")`,
            offsetRotate: "0deg"
          }}
        >
          <circle r="8" fill="#3b82f6" className="glow-node" />
          <circle r="14" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          
          <path 
            d="M -12,-8 L 12,-8 L 16,0 L 12,8 L -12,8 L -16,0 Z" 
            fill="rgba(59, 130, 246, 0.1)" 
            stroke="#3b82f6" 
            strokeWidth="1" 
          />
          
          <foreignObject x="-40" y="-115" width="80" height="80">
            <div className="flex items-center justify-center w-full h-full">
              <IndustryMorpher />
            </div>
          </foreignObject>

          <motion.circle
            r="2"
            fill="#3b82f6"
            animate={{ opacity: [0, 1, 0], x: [-20, -40] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.g>
      </svg>
    </div>
  );
};
