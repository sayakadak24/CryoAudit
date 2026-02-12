
import React from 'react';

interface ApproachViewProps {
  onCtaClick: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black sm:text-7xl mb-8 leading-tight">
              From Farm Gate <br/>to Export Container.
            </h1>
            <p className="text-2xl text-blue-100 leading-relaxed font-medium">
              We are building a single digital thread for the entire Indian supply chain. 
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-6">The Supply Chain Roadmap</h2>
            <p className="text-xl text-slate-600 font-medium max-w-3xl">
              While our vision covers the whole journey, we are starting where the risk is highest: <span className="text-blue-600 font-bold">The Cold Storage.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 opacity-60">
              <div className="text-4xl mb-6">🚜</div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Phase 1: Farm Gate</h3>
              <p className="text-slate-600 font-medium">Capturing the first mile. Digital records of harvesting and first-point cooling.</p>
              <div className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Upcoming</div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-blue-50 border-4 border-blue-600 relative shadow-2xl">
              <div className="absolute -top-4 left-10 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Current Pilot</div>
              <div className="text-4xl mb-6">❄️</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Phase 2: Cold Storage</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-6">
                Tamper-proof storage data. MoFPI grant compliance. Audit-ready reports in one click. 
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-bold text-blue-700">✅ No Paper Logbooks</li>
                <li className="flex items-center gap-2 text-sm font-bold text-blue-700">✅ Ministry Approved Logic</li>
                <li className="flex items-center gap-2 text-sm font-bold text-blue-700">✅ 24/7 Monitoring</li>
              </ul>
              <button onClick={onCtaClick} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl">Join This Pilot</button>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 opacity-60">
              <div className="text-4xl mb-6">🚢</div>
              <h3 className="text-xl font-black text-slate-900 mb-4">Phase 3: Export</h3>
              <p className="text-slate-600 font-medium">Linking storage data to shipping containers for international buyer confidence.</p>
              <div className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Upcoming</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black mb-10">How It Works (Simpler than WhatsApp)</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-2xl font-black mb-3">Connect Your Sensors</h4>
                  <p className="text-slate-400 text-lg font-medium">We link to your existing temperature sensors. No need to buy new expensive hardware.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-2xl font-black mb-3">Data is Locked</h4>
                  <p className="text-slate-400 text-lg font-medium">Our system records the data in a way that NO ONE (not even you or our team) can change it. This is what auditors love.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-2xl font-black mb-3">Audit in 1-Click</h4>
                  <p className="text-slate-400 text-lg font-medium">When an auditor asks for reports, just click "Download" and get a professional, Ministry-ready document instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachView;
