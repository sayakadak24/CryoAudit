
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">The Challenge</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Cold Chain Audits are Broken
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
            Today, operators carry the full risk of compliance while relying on a fragmented stack of disconnected vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Disconnected Data</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sensors, spreadsheets, and ERPs don't talk to each other. Manual data exports are prone to errors and version control issues.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Editable Records</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Spreadsheet records are inherently unverifiable. Auditors and clients naturally question the integrity of manual logs during disputes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Audit Preparation Drain</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Teams spend weeks preparing for regulatory inspections, stitching together data from multiple vendors while still facing potential rejections.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-blue-900 rounded-3xl text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-4">The Compliance Gap</h4>
              <p className="text-blue-100 leading-relaxed">
                When the vendor capturing data is different from the system auditing it, compliance becomes a subjective process full of friction. CryoAudit bridges this gap by unifying the entire lifecycle in one secure platform.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 gap-2 text-center text-xs font-mono uppercase tracking-widest text-blue-300">
              <div className="border border-blue-700/50 p-3 rounded bg-blue-800/50">Capture</div>
              <div className="border border-blue-700/50 p-3 rounded bg-blue-800/50">Store</div>
              <div className="border border-blue-700/50 p-3 rounded bg-blue-800/50">Verify</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
