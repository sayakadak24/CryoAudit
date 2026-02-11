
import React from 'react';

interface ProblemViewProps {
  onCtaClick: () => void;
}

const ProblemView: React.FC<ProblemViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">
              The Structural Failure of Cold Chain Compliance
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Why traditional data loggers and ERPs leave cold chain operators exposed to significant regulatory and financial risk.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm">1</span>
                  The Fragmentation Paradox
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Cold chain operators today are forced to juggle multiple vendors. You pay one vendor for sensors, another for storage, and a third for audit consultancy. 
                </p>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4">The Resulting Friction:</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5"></div>
                      <span className="text-slate-700"><strong>Manual Preparation:</strong> Teams spend weeks exporting Excel logs and manual temperature charts.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5"></div>
                      <span className="text-slate-700"><strong>Repeated Requests:</strong> Auditors and clients constantly ask for the same data in different formats.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5"></div>
                      <span className="text-slate-700"><strong>High Operational Costs:</strong> You pay multiple vendors but still do the manual work.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm">2</span>
                  The Integrity Gap
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Because records are stored in spreadsheets or generic ERPs, they are inherently <strong>editable</strong>. This creates a fundamental lack of trust.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <h5 className="font-bold text-slate-800 mb-2">Subjective Disputes</h5>
                    <p className="text-slate-600 text-sm">During client rejections or insurance claims, the lack of verifiable data makes disputes subjective and hard to win.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <h5 className="font-bold text-slate-800 mb-2">Audit Anxiety</h5>
                    <p className="text-slate-600 text-sm">Inspectors often question manual logs, leading to repeated data requests and the threat of compliance failure.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-red-900 mb-4">The Burden of Proof</h3>
                <p className="text-red-800 leading-relaxed font-medium">
                  Despite paying multiple vendors, the operator still carries the full risk when audits fail or data is questioned. The system is designed against the operator, not for them.
                </p>
              </div>

            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                  <h4 className="text-lg font-bold mb-4">Target Audience Pain</h4>
                  <p className="text-slate-400 text-sm mb-6">Are you facing these challenges in your facility?</p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      Food Export Compliance
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      Pharma Warehouse Audits
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      Insurance Claim Verification
                    </li>
                  </ul>
                  <button 
                    onClick={onCtaClick}
                    className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all"
                  >
                    Discuss Your Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemView;
