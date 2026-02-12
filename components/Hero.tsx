
import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  onCtaClick: () => void;
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold leading-6 text-blue-700 ring-1 ring-inset ring-blue-600/20 bg-blue-50 mb-8">
            🎯 Special Pilot for MoFPI Grant Holders & Cold Storage Owners
          </div>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl mb-8 leading-[1.1]">
            Make Your Cold Storage <br/>
            <span className="text-blue-600">"Audit-Proof"</span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
            Stop relying on manual logbooks. From <span className="text-slate-900 font-bold">Farm to Export</span>, we provide the tamper-proof records you need to keep your MoFPI grants safe and pass every inspection with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={onCtaClick}
              className="px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Apply for Pilot Access
            </button>
            <button
              onClick={() => onNavigate('approach')}
              className="px-10 py-5 bg-white text-slate-700 border-2 border-slate-200 text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm"
            >
              See Our "Farm to Export" Plan
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-2xl">📜</span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">MoFPI Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Grant Safety</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-2xl">📦</span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Seed to Shipment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
