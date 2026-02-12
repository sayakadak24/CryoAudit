
import React from 'react';
import { ViewType } from '../App';

interface ProblemSectionProps {
  onNavigate?: (view: ViewType) => void;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-sm font-black leading-7 text-blue-600 uppercase tracking-[0.2em]">The Big Headache</h2>
          <p className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Why Audits Feel Like a Nightmare
          </p>
          <p className="mt-6 max-w-2xl text-xl text-slate-600 lg:mx-auto font-medium">
            Running a cold storage is hard. Proving you did it right to auditors and the Ministry is even harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">
              ✍️
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">Manual Logbook Mess</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Relying on staff to write down temperatures every hour? It's slow, prone to mistakes, and auditors don't trust hand-written logs anymore.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">
              😱
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">Audit Panic</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              When an auditor visits, your team spends days digging through old files and spreadsheets. One missing page can cost you your grant or certification.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">
              💸
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">Rejected Claims</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              In case of a gas leak or power failure, if your data is "editable" (like Excel), insurance companies and exporters will refuse to pay your claims.
            </p>
          </div>
        </div>
        
        <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 text-8xl opacity-10 grayscale pointer-events-none">🏛️</div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h4 className="text-3xl font-black mb-6">Special Note for MoFPI Grant Holders</h4>
              <p className="text-slate-300 text-lg leading-relaxed font-medium mb-6">
                The Ministry now requires <strong>tamper-proof digital records</strong> for cold chain subsidies. If your data can be edited or deleted, your grant is at risk. CryoAudit locks your data the moment it's captured.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 border border-blue-500/50 rounded-xl text-blue-300 text-sm font-bold uppercase tracking-widest">
                Grant Protection Protocol Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
