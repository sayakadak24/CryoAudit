
import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, Scale, Zap, Lock, Users, Database } from 'lucide-react';

interface ApproachViewProps {
  onCtaClick: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  const steps = [
    {
      id: "genesis",
      title: "Asset Genesis",
      desc: "The digital twin is minted on the Hyperledger Fabric ledger. CDSCO/FSSAI compliance parameters are embedded as immutable smart contract rules.",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: "handoff",
      title: "Handoff Checkpoint",
      desc: "At every physical transfer, the receiver scans the batch. Tier 1 Edge AI extracts physical proofs (OCR, photos) to verify state against the ledger.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "liability",
      title: "Liability Transfer",
      desc: "Game-theoretic model: If the receiver accepts without dispute, they assume 100% legal and financial liability for the goods.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: "audit",
      title: "Verified Record",
      desc: "A regulatory-grade audit history is maintained. FSSAI and CDSCO gain access to a tamper-proof compliance record for instant auditing.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold sm:text-6xl mb-8 leading-tight">
              The <span className="text-blue-500">Checkpoint</span> Mechanism.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We move compliance from a manual task to an automated architectural layer using Game Theory and Blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* The Protocol Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Theory Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Targeting GIGO with Game Theory</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The "Handoff Liability" model neutralizes the Garbage In, Garbage Out vulnerability by making honest reporting the only rational choice.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Assumption of Liability</h4>
                    <p className="text-slate-600 text-sm">If an actor accepts a transfer without logging a dispute, they legally and financially assume 100% liability for the goods' state.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Self-Policing Network</h4>
                    <p className="text-slate-600 text-sm">Because no actor wants to bear the penalty for another's negligence, they are highly incentivized to verify the truth at every checkpoint.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Zero-Sum Model</h4>
                    <p className="text-slate-600 text-sm">The cost of collusion becomes inherently higher than the cost of compliance, forcing honesty across the entire chain.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Cryptographic Non-Repudiation</h4>
                    <p className="text-xs text-slate-400">Powered by Hyperledger Fabric</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                    <span className="text-sm">Actor A (Provider)</span>
                    <span className="text-[10px] font-mono text-blue-400">SIGNED_HASH_0x4F...</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                    <span className="text-sm">Actor B (Receiver)</span>
                    <span className="text-[10px] font-mono text-emerald-400">LIABILITY_ACCEPTED</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Once committed to the ledger, the state is immutable. No localized bribe or administrative override can alter the historical record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Integration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Regulatory Integration</h2>
            <p className="text-slate-600">Aligning with India's digital public infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">ULIP & VAHAN</h4>
              <p className="text-sm text-slate-600">Real-time validation of e-Way Bills, vehicle registries, and FASTag toll data at every handoff.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm">
              <Shield className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">FSSAI & CDSCO</h4>
              <p className="text-sm text-slate-600">Direct auditor nodes for regulators to access verified, tamper-proof compliance histories instantly.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">DPDP Act 2023</h4>
              <p className="text-sm text-slate-600">Strict data minimization principles ensuring no unnecessary PII is stored on the immutable ledger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your custody?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join the early pilot partners implementing the Checkpoint Mechanism today.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Apply for Pilot Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApproachView;
