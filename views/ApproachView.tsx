
import React from 'react';

interface ApproachViewProps {
  onCtaClick: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <section className="pt-20 pb-16 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl mb-6">
              Our Approach: Compliance by Design
            </h1>
            <p className="text-xl text-blue-800/80 leading-relaxed">
              We built an integrated platform where data capture, storage, and audit logic exist in one unified layer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <div className="space-y-20">
                
                <div className="relative">
                  <div className="absolute -left-12 top-0 text-6xl font-black text-blue-50 opacity-50 select-none">01</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Unified Data Capture Layer</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    We don't force you to replace your hardware. CryoAudit sits on top of your existing sensors and loggers, centralizing all operational data without friction.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                      Direct Sensor Integration
                    </li>
                    <li className="flex items-center gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                      Legacy Logger Support
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -left-12 top-0 text-6xl font-black text-blue-50 opacity-50 select-none">02</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Tamper-Proof Data Storage</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Integrity is our core product. Once data is recorded, it cannot be edited or deleted. This creates verifiable, defensible records that build trust with auditors.
                  </p>
                  <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <div className="text-sm font-mono text-blue-400 mb-2 uppercase tracking-widest">Security Protocol</div>
                      <p className="text-sm text-slate-300">Write-once architecture ensures that even system administrators cannot modify historical temperature logs.</p>
                    </div>
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-12 top-0 text-6xl font-black text-blue-50 opacity-50 select-none">03</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Built-In Audit Logic</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Our system understands compliance. It automatically flags deviations, tracks exceptions, and organizes data into audit-ready formats before the inspector even arrives.
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Why Choose CryoAudit?</h4>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-lg flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">Single Vendor Efficiency</h5>
                      <p className="text-sm text-slate-600">Eliminate the mess of multiple data and compliance providers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-lg flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">Audit Speed</h5>
                      <p className="text-sm text-slate-600">Reduce manual preparation time from weeks to minutes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-lg flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">Clear Accountability</h5>
                      <p className="text-sm text-slate-600">One platform that stands behind your data during every inspection.</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={onCtaClick}
                  className="mt-12 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
                >
                  Join the Early Access Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachView;
