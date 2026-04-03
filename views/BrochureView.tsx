import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Database, Network, Zap, Lock, Smartphone, Globe, CheckCircle2, XCircle, Server, Activity, ArrowRight, Layers, BarChart3, TrendingUp, MessageSquare } from 'lucide-react';

interface BrochureViewProps {
  onCtaClick: () => void;
}

const BrochureView: React.FC<BrochureViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Technical Specification v1.0
            </div>
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 leading-tight">
              Technical Architecture & <span className="text-blue-500">Security Spec</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              A deep dive into the CryoTrack protocol: Hyperledger Fabric, RAFT Consensus, and Two-Tier AI Architecture.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onCtaClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
              >
                Apply for Pilot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Protocol Layer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Trust Layer</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CryoTrack is built on Hyperledger Fabric, an enterprise-grade permissioned blockchain that eliminates gas fees and tokenomics while providing deterministic finality.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Database className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">RAFT Consensus</h4>
                    <p className="text-sm text-slate-600">Crash Fault Tolerant (CFT) ordering service deployed across NIC-hosted enterprise environments for state-backed neutrality.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Deferred Endorsement</h4>
                    <p className="text-sm text-slate-600">Optimizes endorsement from O(N) to O(1) at handoff, enabling high-throughput logistics without compromising security.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Network Topology</div>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-sm">Ordering Service (MeitY NBF)</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-sm">Enterprise Peer Nodes</span>
                  <span className="text-xs text-slate-500">Anchor Peers</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-sm">Auditor Nodes (FSSAI/CDSCO)</span>
                  <span className="text-xs text-blue-400">Read-Only</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-sm">MSME Edge Clients</span>
                  <span className="text-xs text-slate-500">O(1) Signing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Architecture */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Two-Tier AI Architecture</h2>
            <p className="text-slate-600">Augmenting human judgment with intelligent verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tier 1: Edge Integrity</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Runs locally on MSME-tier smartphones. Digitizes paper logs via OCR and captures GPS-tagged photos.
              </p>
              <ul className="space-y-3">
                {["On-device OCR (Tesseract/BHASHINI)", "WORM-enforced local caching", "Anti-spoofing GPS bounding", "Offline cryptographic signatures"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tier 2: Central Intelligence</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Real-time oracle correlation and network-wide causal analytics using the DoWhy framework.
              </p>
              <ul className="space-y-3">
                {["ULIP/VAHAN API cross-referencing", "Weather & traffic signal correlation", "Explainable AI (XAI) plain-language alerts", "Causal risk modeling"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Identity */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900 text-white rounded-2xl">
                  <Lock className="w-6 h-6 text-blue-400 mb-4" />
                  <h4 className="font-bold mb-2">Embedded Wallets</h4>
                  <p className="text-xs text-slate-400">Self-custodial keys stored in hardware-backed Secure Enclave / TEE.</p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Identity Recovery</h4>
                  <p className="text-xs text-slate-600">MSP-driven certificate revocation and re-KYC binding for lost devices.</p>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <Server className="w-6 h-6 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Enterprise HSM</h4>
                  <p className="text-xs text-slate-600">Cloud-based HSM for high-throughput machine-to-machine signing.</p>
                </div>
                <div className="p-6 bg-slate-900 text-white rounded-2xl">
                  <Activity className="w-6 h-6 text-blue-400 mb-4" />
                  <h4 className="font-bold mb-2">WORM Records</h4>
                  <p className="text-xs text-slate-400">Write-Once-Read-Many enforcement prevents retrospective data manipulation.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Security & Identity</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CryoTrack prioritizes self-custodial security while abstracting complexity. Every liability transfer is cryptographically bound to a verified actor's device.
              </p>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  DPDP Act 2023 Compliance
                </h4>
                <p className="text-blue-800 text-sm">
                  Aggressive data minimization: No PII is stored on the immutable ledger. Only cryptographic hashes and compliance flags are anchored on-chain.
                </p>
              </div>
            </div>
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

          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
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
                  { area: "Data Entry", trad: "Manual free-text entry", cryo: "OCR digitisation & guided structured input" },
                  { area: "Verification", trad: "Assumes honest input", cryo: "Game-theoretic liability transfer at handoff" },
                  { area: "Fraud Prevention", trad: "Edits often untraceable", cryo: "Full timestamp & modification tracking" },
                  { area: "Connectivity", trad: "Requires constant network", cryo: "Offline caching with auto-ledger anchoring" },
                  { area: "Intelligence", trad: "Raw data only", cryo: "Two-tier AI with causal risk analysis" },
                  { area: "Regulatory", trad: "Fragmented paper logs", cryo: "Verified Compliance Records for FSSAI/CDSCO" }
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

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {[
              { area: "Data Integrity", trad: "Editable files, internal databases", cryo: "Tamper-evident, cryptographically secured records" },
              { area: "Audit Readiness", trad: "Manual preparation before inspections", cryo: "Always audit-ready, instantly verifiable" },
              { area: "Data Entry", trad: "Manual free-text entry", cryo: "OCR digitisation & guided structured input" },
              { area: "Verification", trad: "Assumes honest input", cryo: "Game-theoretic liability transfer at handoff" },
              { area: "Fraud Prevention", trad: "Edits often untraceable", cryo: "Full timestamp & modification tracking" },
              { area: "Connectivity", trad: "Requires constant network", cryo: "Offline caching with auto-ledger anchoring" },
              { area: "Intelligence", trad: "Raw data only", cryo: "Two-tier AI with causal risk analysis" },
              { area: "Regulatory", trad: "Fragmented paper logs", cryo: "Verified Compliance Records for FSSAI/CDSCO" }
            ].map((row, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 p-4 text-white font-bold text-sm">
                  {row.area}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Traditional System</div>
                    <div className="flex items-start gap-2 text-slate-600 text-sm">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{row.trad}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">CryoTrack Advantage</div>
                    <div className="flex items-start gap-2 text-blue-900 font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{row.cryo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to simplify your compliance?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Access our developer sandbox and start building on the CryoTrack protocol.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl"
          >
            Request API Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrochureView;
