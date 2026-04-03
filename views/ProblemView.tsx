
import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Users, ShieldAlert, Activity, FileWarning, CheckCircle2 } from 'lucide-react';

interface ProblemViewProps {
  onCtaClick: () => void;
}

const ProblemView: React.FC<ProblemViewProps> = ({ onCtaClick }) => {
  const stats = [
    { label: "Market Digitized", value: "6%", icon: <Activity className="w-5 h-5" /> },
    { label: "Unorganized Logistics", value: "90%", icon: <Users className="w-5 h-5" /> },
    { label: "Agri Production Loss", value: "40%", icon: <TrendingDown className="w-5 h-5" /> },
    { label: "Manual Entry Error", value: "1-5%", icon: <FileWarning className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-3 h-3" />
              The Infrastructure Gap
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl mb-6 leading-tight">
              The <span className="text-red-600">Integrity Gap</span> in Global Supply Chains.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Modern logistics remain heavily reliant on manual processes and fragmented systems. 
              This fragmentation creates a critical vulnerability: **The Data Integrity Gap.**
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-20">
              
              {/* Data Integrity Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  The Data Integrity Gap
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p className="mb-6">
                    Even when data is digitized, it often relies on manual entry or unverified inputs. 
                    In many logistics sectors, **over 70% of data points are still manually logged**, leading to significant risks.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-2xl">
                    <p className="text-red-900 font-medium italic">
                      "When data entry is manual and unverified, the system becomes vulnerable to errors and intentional falsification—creating a false sense of security."
                    </p>
                  </div>
                  <p>
                    This gap in verified data creates a blind spot that can lead to operational failures and safety risks across the entire chain.
                  </p>
                </div>
              </div>

              {/* Fatal Consequences */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Fatal Consequences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full"></div>
                    <h4 className="text-xl font-bold mb-4">The Gambia (2022)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      70+ children died. The supply chain was robust on paper, but the data was falsified at the source.
                    </p>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-widest">GIGO Breach</div>
                  </div>
                  <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full"></div>
                    <h4 className="text-xl font-bold mb-4">Ramnagar (2020)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      17 children died after consuming contaminated syrup. Industrial-grade chemicals were passed off as pharma-grade.
                    </p>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-widest">Manual Entry Fraud</div>
                  </div>
                </div>
              </div>

              {/* Limitations of Current Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Current Solutions Fail</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <ShieldAlert className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Hardware Dependency</h4>
                      <p className="text-slate-600">Reliance on expensive, enterprise-grade IoT devices that are not cost-effective for India's 6.3 crore MSMEs.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <ShieldAlert className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Trust Assumption</h4>
                      <p className="text-slate-600">Data integrity depends entirely on the source's honesty. There is no structural mechanism to challenge or verify data at the handoff.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl">
                  <h4 className="text-xl font-bold mb-4">The CryoTrack Shift</h4>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    We don't just record data; we enforce its integrity through protocol-level game theory.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      Zero-Friction Adoption
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      Immutable Audit Trails
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-300" />
                      100% Liability Transfer
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                  <h4 className="font-bold text-slate-900 mb-4">Next Step</h4>
                  <p className="text-sm text-slate-600 mb-6">
                    See how our Checkpoint Mechanism solves the GIGO problem.
                  </p>
                  <button 
                    onClick={onCtaClick}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all"
                  >
                    Discuss Your Use Case
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
