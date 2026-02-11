
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 bg-blue-50 mb-6">
            Pre-Product Pilot Phase: Now accepting early access partners in India
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
            Audit-Ready Cold Chain Data, <span className="text-blue-600">Simplified.</span>
          </h1>
          <p className="text-lg leading-8 text-slate-600 mb-10">
            A unified compliance platform for food and pharma cold chain operators. Replace fragmented records with tamper-proof, verifiable data that makes audits effortless.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
            >
              Join the Early Access Program
            </button>
            <a
              href="#problem"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all"
            >
              Understand the Problem
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale">
            <div className="flex items-center justify-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <span className="text-sm font-semibold">PHARMA COMPLIANT</span>
            </div>
            <div className="flex items-center justify-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <span className="text-sm font-semibold">GDPR READY</span>
            </div>
            <div className="flex items-center justify-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <span className="text-sm font-semibold">ISO ALIGNED</span>
            </div>
            <div className="flex items-center justify-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <span className="text-sm font-semibold">TAMPER-PROOF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
