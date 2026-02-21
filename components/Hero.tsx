
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/20 bg-blue-50 mb-8">
            Now accepting early pilot partners
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8 leading-[1.1]">
            The trust layer for <br/>
            <span className="text-blue-600">Global Cold Chains</span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-600 mb-12 max-w-2xl mx-auto">
            Secure your food and pharma logistics with tamper-proof data records. CryoAudit unifies fragmented sensor data into audit-ready compliance trails.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Apply for Pilot Access
            </button>
            <Link
              to="/approach"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              View Our Approach
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Audit-Ready Logic</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Tamper-Proof Storage</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
              <span className="text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Unified Data Capture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
