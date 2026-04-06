import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import CryotrackAnimation from './CryotrackAnimation';

interface HeroProps {
  onCtaClick: () => void;
}

const INDUSTRIES = ['Pharma', 'Agriculture', 'Dairy', 'Logistics'];

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#020617] border-b border-slate-800 flex flex-col justify-center min-h-screen lg:min-h-[90vh]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Deep blue glowing orbs for background richness */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold leading-6 text-blue-300 ring-1 ring-inset ring-blue-500/30 bg-blue-900/40 backdrop-blur-md mb-6 shadow-sm">
            Now accepting early pilot partners
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] font-display">
            <span className="text-white">Scale with</span> <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Confidence.</span> <br/>
            <span className="text-white">Automate</span> <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">Trust.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-normal text-slate-300 mx-auto mb-8 max-w-3xl">
            The universal blockchain infrastructure securing supply chains
            <span className="block mt-1 md:mt-2">
              across{' '}
              <span className="inline-grid align-top text-center font-bold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="col-start-1 row-start-1 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
                  >
                    {INDUSTRIES[index]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible placeholder matching the widest text to maintain fixed inline width */}
                <span className="col-start-1 row-start-1 invisible whitespace-nowrap">Agriculture</span>
              </span>{' '}
              and beyond.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 z-20 relative">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all active:scale-95 border border-blue-400/50"
            >
              Apply for Pilot Access
            </button>
            <Link
              to="/approach"
              className="px-8 py-4 glass-dark text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center group"
            >
              View Our Approach
            </Link>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="glass-dark p-2 sm:p-4 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.15)] relative z-10 border border-white/10 bg-slate-900/60 backdrop-blur-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50">
               <CryotrackAnimation />
            </div>
            {/* Soft glow behind the glass panel */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl -z-10 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
