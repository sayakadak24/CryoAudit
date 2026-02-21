
import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Layers, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Activity,
  Cpu,
  Database,
  MessageSquare
} from 'lucide-react';

interface BrochureViewProps {
  onCtaClick: () => void;
}

const BrochureView: React.FC<BrochureViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-6 border border-blue-100 uppercase tracking-wider">
              The Future of Cold Chain Compliance
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Reduce Losses. <span className="text-blue-600">Increase Trust.</span> <br />
              Unlock Premium Revenue.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              CryoTrack is the definitive compliance and intelligence infrastructure for modern cold storage. We transform your facility from a cost center into a performance-certified asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onCtaClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Apply for Pilot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Download Technical Specs
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Positioning</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">More than just monitoring. We provide the infrastructure for trust, efficiency, and market advantage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Audit Shield",
                description: "Tamper-evident, cryptographically secured temperature and compliance logs that are always audit-ready."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Automation Layer",
                description: "WhatsApp-based instant querying and automated reporting reduces dependency on manual accounting."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                title: "Intelligence Layer",
                description: "Advanced analytics including stability scoring, spoilage risk detection, and benchmarking."
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Revenue Signaling",
                description: "Verified performance visibility for exporters, improving trust and enabling premium pricing."
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The CryoTrack Edge</h2>
            <p className="text-slate-600">How we outperform traditional accountant-based systems.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs">Area</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs">Traditional System</th>
                  <th className="p-6 font-semibold uppercase tracking-wider text-xs bg-blue-600">CryoTrack Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { area: "Data Integrity", trad: "Editable files, internal databases", cryo: "Tamper-evident, cryptographically secured records" },
                  { area: "Audit Readiness", trad: "Manual preparation before inspections", cryo: "Always audit-ready, instantly verifiable" },
                  { area: "Data Retrieval", trad: "Manual Excel reports", cryo: "Instant WhatsApp-based querying" },
                  { area: "Employee Dependency", trad: "3–4 people managing records", cryo: "Automation reduces manpower load" },
                  { area: "Fraud Prevention", trad: "Edits often untraceable", cryo: "Full timestamp & modification tracking" },
                  { area: "Multi-Branch Management", trad: "Fragmented reports", cryo: "Unified cross-branch dashboard" },
                  { area: "Operational Insight", trad: "Raw data only", cryo: "Analytics-driven insights & predictions" },
                  { area: "Energy Optimization", trad: "Manual cost tracking", cryo: "Energy efficiency analysis per MT" },
                  { area: "Revenue Signaling", trad: "No structured visibility", cryo: "Verified performance metrics for exporters" },
                  { area: "Market Positioning", trad: "Cost center", cryo: "Performance-certified facility" },
                  { area: "Data Portability", trad: "Risky migration", cryo: "Structured, encrypted, exportable data" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900 border-b border-slate-100">{row.area}</td>
                    <td className="p-6 text-slate-500 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> 
                        <span>{row.trad}</span>
                      </div>
                    </td>
                    <td className="p-6 text-blue-900 font-medium bg-blue-50/30 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> 
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

      {/* Intelligence Layer Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Advanced Intelligence Layer</h2>
              <p className="text-slate-400 text-lg mb-10">
                We don't just collect data; we turn it into actionable intelligence that drives operational excellence and reduces risk.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Activity className="w-6 h-6" />, title: "Temperature Stability Scoring", desc: "Quantify the consistency of your cooling environment." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Spoilage Risk Detection", desc: "Predictive alerts before thresholds are breached." },
                  { icon: <Cpu className="w-6 h-6" />, title: "Predictive Maintenance", desc: "Identify equipment fatigue before failure occurs." },
                  { icon: <Database className="w-6 h-6" />, title: "Energy Efficiency Metrics", desc: "Track energy consumption per metric ton of storage." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Live Analytics Dashboard</div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-40 bg-slate-900/50 rounded-xl border border-slate-700 flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className="flex-grow bg-blue-600 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1 uppercase">Stability Score</div>
                      <div className="text-2xl font-bold text-blue-400">98.4%</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1 uppercase">Energy/MT</div>
                      <div className="text-2xl font-bold text-emerald-400">12.2 kWh</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Exporter Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl font-bold mb-6">Revenue Signaling Infrastructure</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                CryoTrack enables verified performance visibility to exporters. By sharing immutable compliance records, you build radical transparency that justifies premium pricing and secures long-term contracts.
              </p>
              <ul className="space-y-4">
                {[
                  "Verified performance metrics for global buyers",
                  "Transparency-backed market differentiation",
                  "Automated compliance certificates for export",
                  "Reduced insurance premiums through data proof"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Exporter Access Portal</div>
                    <div className="text-sm text-blue-200">Verified by CryoTrack</div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg mb-4 border border-white/10">
                  <div className="text-xs text-blue-200 mb-2 uppercase tracking-wider">Batch #8829 Compliance</div>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl font-bold">100% Pass</div>
                    <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">SECURE</div>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Generate Shareable Link
                </button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Migration & Safety */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-8">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Migration Safety & Data Sovereignty</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We believe your data belongs to you. CryoTrack is built on principles of data portability and security. Even if you choose to discontinue our service, your historical records remain encrypted, structured, and fully exportable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Zero Lock-in</h4>
                  <p className="text-sm text-slate-500">Standardized formats (JSON/CSV) for all historical logs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">End-to-End Encryption</h4>
                  <p className="text-sm text-slate-500">Your data is secured at rest and in transit with bank-grade protocols.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <MessageSquare className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold mb-2">WhatsApp Query</h4>
                  <p className="text-xs text-slate-500">Instant status updates via familiar interfaces.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <Layers className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold mb-2">Multi-Branch</h4>
                  <p className="text-xs text-slate-500">Unified reporting across all your locations.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <Database className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold mb-2">Immutable Logs</h4>
                  <p className="text-xs text-slate-500">Cryptographically signed records for legal protection.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold mb-2">Benchmarking</h4>
                  <p className="text-xs text-slate-500">Compare performance across chambers and branches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Upgrade Your Infrastructure?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join the elite facilities using CryoTrack to drive efficiency and unlock new revenue streams.
            </p>
            <button 
              onClick={onCtaClick}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Apply for Pilot Program
            </button>
            <p className="mt-6 text-slate-400 text-sm">
              Limited slots available for MOFPI-certified projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrochureView;
