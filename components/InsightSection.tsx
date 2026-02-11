
import React from 'react';

const InsightSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L90 90M90 10L10 90" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
          
          <div className="px-8 py-16 md:px-16 md:py-24 max-w-4xl">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">Our Core Insight</h2>
            <p className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Compliance cannot be added <span className="text-blue-500">after the fact.</span>
            </p>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                If the system that captures cold chain data is different from the system that audits it, records will always be editable, audits will always be manual, and disputes will always be subjective.
              </p>
              <p>
                For audits to be reliable, the same platform must own the data, the record history, and the audit process. This is why generic tools like spreadsheets or ERPs are insufficient for highly regulated cold chain compliance.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-slate-800 pt-8">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" />
                </svg>
              </div>
              <span className="text-slate-100 font-medium">Compliance-first by architecture, not by add-on.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
