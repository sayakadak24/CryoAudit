import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wheat, Pill, Cpu, Snowflake, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

const icons = [
  { Icon: Pill, label: 'Biopharma', color: 'text-emerald-400', glow: 'shadow-[0_0_15px_rgba(52,211,153,0.5)]' },
  { Icon: Wheat, label: 'Agriculture', color: 'text-amber-400', glow: 'shadow-[0_0_15px_rgba(251,191,36,0.5)]' },
  { Icon: Snowflake, label: 'Cold Chain', color: 'text-cyan-400', glow: 'shadow-[0_0_15px_rgba(34,211,238,0.5)]' },
  { Icon: Cpu, label: 'High-Tech Mfg', color: 'text-blue-400', glow: 'shadow-[0_0_15px_rgba(96,165,250,0.5)]' },
];

const IndustryMorpher = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const Current = icons[index];
  const CurrentIcon = Current.Icon;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className={`relative flex items-center justify-center w-24 h-24 rounded-3xl bg-slate-900 ${Current.glow} ${Current.color} z-10 border border-slate-700`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute"
          >
            <CurrentIcon size={40} strokeWidth={1.5} />
          </motion.div>
        </AnimatePresence>
        
        {/* Pulsing ring around the morpher */}
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-current opacity-30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="mt-4 h-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={`text-sm font-bold uppercase tracking-widest ${Current.color}`}
          >
            {Current.label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

const CryotrackAnimation = () => {
  // SVG Path coordinates for data flow
  // From Left Node (Industry) to Center (CryoTrack) to Right (Ledger)
  const pathTop = "M 200,150 C 350,150 350,80 500,80 C 650,80 650,150 800,150";
  const pathMid = "M 200,150 L 500,150 L 800,150";
  const pathBot = "M 200,150 C 350,150 350,220 500,220 C 650,220 650,150 800,150";

  return (
    <div className="relative w-full max-w-5xl aspect-[21/9] mx-auto overflow-visible flex items-center justify-center bg-transparent rounded-[2rem]">
      
      <svg 
        viewBox="0 0 1000 300" 
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0"
        fill="none" 
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Base Paths */}
        <path d={pathTop} stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" />
        <path d={pathMid} stroke="url(#lineGrad)" strokeWidth="3" />
        <path d={pathBot} stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" />

        {/* Animated Data Packets Flowing */}
        {[pathTop, pathMid, pathBot].map((path, i) => (
          <g key={`data-${i}`}>
            {[0, 1, 2].map((delay) => (
              <motion.circle
                key={`p-${i}-${delay}`}
                r={i === 1 ? "5" : "4"}
                fill={i === 1 ? "#60a5fa" : "#a78bfa"}
                className={i === 1 ? "filter drop-shadow-[0_0_12px_rgba(96,165,250,1)]" : "filter drop-shadow-[0_0_12px_rgba(167,139,250,1)]"}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ 
                  offsetDistance: "100%", 
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: delay * 1.3 + i * 0.5
                }}
                style={{ offsetPath: `path("${path}")` }}
              />
            ))}
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-between px-[10%] z-10">
        
        {/* Left: Dynamic Industry Input */}
        <div className="w-48 flex justify-center">
          <IndustryMorpher />
        </div>

        {/* Center: CryoTrack Core / Blockchain */}
        <div className="flex flex-col items-center justify-center">
          <motion.div 
             className="relative flex items-center justify-center w-32 h-32 rounded-full glass-dark border-none bg-blue-900/30 backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.4)]"
             animate={{ boxShadow: ['0 0 20px rgba(37,99,235,0.2)', '0 0 60px rgba(37,99,235,0.6)', '0 0 20px rgba(37,99,235,0.2)'] }}
             transition={{ duration: 4, repeat: Infinity }}
          >
            <ShieldCheck className="w-16 h-16 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" strokeWidth={1.5} />
            <motion.div 
              className="absolute inset-0 border-2 border-blue-400/40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: 'dashed' }}
            />
             <motion.div 
              className="absolute inset-[-10px] border border-cyan-400/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: 'dashed' }}
            />
          </motion.div>
          <div className="mt-6 text-center">
            <span className="block text-sm font-black text-slate-200 uppercase tracking-widest drop-shadow-md">CryoTrack</span>
            <span className="block text-xs font-semibold text-blue-400 uppercase tracking-widest shadow-blue-500">Trust Layer</span>
          </div>
        </div>

        {/* Right: Checkpoints / Outputs */}
        <div className="flex flex-col gap-6 w-48 items-end">
           <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-700/50 shadow-lg w-full">
             <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
               <Database size={16} />
             </div>
             <div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">Immutable Ledger</div>
                <div className="text-[10px] text-slate-400">Tamper-proof storage</div>
             </div>
           </div>
           
           <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-700/50 shadow-lg w-full relative left-8">
             <div className="w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.3)]">
               <CheckCircle2 size={16} />
             </div>
             <div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">Audit-Ready</div>
                <div className="text-[10px] text-slate-400">Automated compliance</div>
             </div>
           </div>

           <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-700/50 shadow-lg w-full">
             <div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-[0_0_10px_rgba(129,140,248,0.3)]">
               <ShieldCheck size={16} />
             </div>
             <div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">Verified Chain</div>
                <div className="text-[10px] text-slate-400">End-to-end visibility</div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CryotrackAnimation;
