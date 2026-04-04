import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Network, Zap, Shield, Code, Server, Smartphone, Globe, CheckCircle2, XCircle, ShieldCheck, Activity, ArrowRight, Lock } from 'lucide-react';

interface PlatformViewProps {
  onCtaClick: () => void;
}

const PlatformView: React.FC<PlatformViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Code className="w-3 h-3" />
              Platform Architecture
            </div>
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 text-slate-900 leading-tight font-display">
              The Infrastructure of <span className="text-brand-600">Trust</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              CryoTrack is a modern, scalable infrastructure designed to be lightweight at the edge but enterprise-grade at the core. We bridge the gap between physical handoffs and digital certainty.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Bento Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
            
            {/* Immutable Core */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 md:row-span-1 bg-white border border-slate-200 rounded-3xl p-10 flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Immutable Core</h3>
                <p className="text-slate-600 leading-relaxed text-sm max-w-md">
                  A secure, permissioned distributed ledger designed for enterprise networks, ensuring data integrity without unnecessary complexity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Secure Consensus", "Private Data Access", "Immutable Audit Trails"].map((f, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-wider">{f}</span>
                ))}
              </div>
            </motion.div>

            {/* Edge Verification */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 md:row-span-2 bg-brand-600 rounded-3xl p-10 text-white flex flex-col group hover:shadow-xl transition-all overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-6 border border-white/20">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Tier 1: Edge Verification</h3>
                <p className="text-brand-100 leading-relaxed text-sm mb-8">
                  On-device verification running on standard smartphones. Works seamlessly even in areas with limited connectivity.
                </p>
                <ul className="space-y-3">
                  {["On-device Data Capture", "GPS-Tagged Evidence", "Offline Support", "Anti-Spoofing Measures"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mock UI element */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 opacity-20" />
                </div>
              </div>
            </motion.div>

            {/* Central Intelligence */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 md:row-span-1 bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display">Tier 2: Central Intelligence</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Real-time data correlation and risk analytics. Cross-references information against global logistics and environmental data.
                  </p>
                </div>
                <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-center">
                  <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-4">Risk Analysis</div>
                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-brand-500"></div>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-emerald-500"></div>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-5/6 bg-brand-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Integration Gateway */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-12 md:row-span-1 bg-slate-50 border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between group hover:shadow-xl transition-all"
            >
              <div className="max-w-xl">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">Integration Gateway</h3>
                <p className="text-slate-600 leading-relaxed">
                  The bridge to your existing systems. Connects legacy software with our secure network for a unified view of your supply chain.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {["SAP", "Oracle", "Microsoft Dynamics", "Custom ERPs"].map((erp, i) => (
                  <div key={i} className="px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                    {erp}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section id="security" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3 h-3" />
                Enterprise Security
              </div>
              <h2 className="text-3xl font-bold mb-6 font-display">Clinical Security Standards</h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                We prioritize data integrity and regulatory readiness. Every liability transfer is cryptographically bound to a verified actor's device, ensuring absolute accountability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Lock className="w-6 h-6 text-brand-400 mb-4" />
                  <h4 className="font-bold mb-2">Hardware Security</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Keys stored in hardware-backed Secure Enclaves for maximum protection.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Activity className="w-6 h-6 text-brand-400 mb-4" />
                  <h4 className="font-bold mb-2">WORM Records</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Write-Once-Read-Many enforcement prevents retrospective data manipulation.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-400" />
                Global Compliance Mapping
              </h4>
              <div className="space-y-6">
                {[
                  { name: "GDP (Good Distribution Practice)", status: "Fully Supported" },
                  { name: "FSSAI Food Safety Standards", status: "Verified Audit Trails" },
                  { name: "FDA 21 CFR Part 11", status: "Compliant Records" },
                  { name: "DPDP Act 2023", status: "Privacy First" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-sm font-medium text-slate-300">{item.name}</span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">The CryoTrack Edge</h2>
            <p className="text-slate-600">How we outperform traditional accountant-based systems.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs">Area</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs">Traditional System</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs bg-brand-600">CryoTrack Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { area: "Data Integrity", trad: "Editable files, internal databases", cryo: "Tamper-evident, secured records" },
                  { area: "Audit Readiness", trad: "Manual prep before inspections", cryo: "Always audit-ready, instant" },
                  { area: "Verification", trad: "Assumes honest input", cryo: "Incentive-based liability transfer" },
                  { area: "Connectivity", trad: "Requires constant network", cryo: "Offline support with auto-sync" },
                  { area: "Intelligence", trad: "Raw data only", cryo: "Two-tier AI risk analysis" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors text-sm">
                    <td className="p-6 font-bold text-slate-900 border-b border-slate-100">{row.area}</td>
                    <td className="p-6 text-slate-500 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> 
                        <span>{row.trad}</span>
                      </div>
                    </td>
                    <td className="p-6 text-brand-900 font-medium bg-brand-50/30 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> 
                        <span>{row.cryo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Ready to simplify your compliance?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Access our developer sandbox and start building on the CryoTrack protocol today.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Request API Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlatformView;
