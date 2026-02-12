
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
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4">
              <span className="uppercase tracking-widest">Deep Dive</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Compliance Analysis</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">
              Understanding the Cold Chain <span className="text-red-600">Compliance Gap</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Why traditional data loggers, generic spreadsheets, and legacy ERPs leave cold chain operators exposed to regulatory failure and client rejections.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-20">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold">1</span>
                  The Problem of Disconnected Systems
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    Cold chain operators face a structural problem: <strong>Data is captured by one vendor (sensors or loggers)</strong>, while records are stored in spreadsheets or generic accounting tools, and audits are conducted by a third party.
                  </p>
                  <p className="mb-6">
                    This fragmentation leads to:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                      <span><strong>Repeated Data Requests:</strong> Auditors ask for data you've already captured, but in a format you don't have.</span>
                    </li>
                    <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                      <span><strong>Manual Prep Fatigue:</strong> Your team spends hundreds of man-hours every year just "getting the data ready" for a visit.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm font-bold">2</span>
                  The Liability of Editable Records
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    In regulated food and pharmaceutical environments, <strong>integrity is everything</strong>. Because spreadsheets and ERP logs are editable, they carry an inherent "lack of trust" during:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-6 border border-slate-200 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Insurance Claims</h4>
                      <p className="text-sm">When cargo is damaged, insurers look for every reason to deny a claim. Unverifiable data is the easiest target.</p>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Regulatory Inspections</h4>
                      <p className="text-sm">Agencies like FSSAI or CDSCO require proof that data hasn't been back-filled or modified after a deviation occurred.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
                <h3 className="text-2xl font-bold mb-4">The Real Cost of Fractional Solutions</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Despite paying multiple vendors for loggers and storage, <strong>the operator still carries all the risk</strong>. If the data is questioned or an audit fails, the vendor who sold you the hardware isn't the one who pays the price.
                </p>
                <div className="flex items-center gap-4 py-4 border-t border-slate-800">
                  <div className="text-blue-400 font-bold">CryoAudit Insight:</div>
                  <div className="text-sm text-slate-400">If the system capturing data is different from the system auditing it, records will always be subjective.</div>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">India Context</h4>
                  <p className="text-sm text-blue-800/70 mb-6 leading-relaxed">
                    With tightening norms for pharma logistics (GSP) and food export requirements (APEDA), manual data management is becoming a critical business liability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-xs font-bold text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      ELIMINATE MANUAL LOGGING
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      SECURE AUDIT TRAILS
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-blue-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      REDUCE CLAIM DISPUTES
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h4 className="font-bold text-slate-900 mb-4">Next Step</h4>
                  <p className="text-sm text-slate-600 mb-6">
                    See how our compliance-first approach solves these structural problems.
                  </p>
                  <button 
                    onClick={onCtaClick}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95"
                  >
                    Discuss Your Compliance
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
