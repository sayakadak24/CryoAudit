
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Brain, TrendingUp, Network, ArrowRight, CheckCircle2, AlertTriangle, Globe, Smartphone, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeViewProps {
  onCtaClick: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      id: "compliance",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Compliance Infrastructure",
      description: "Eliminate GIGO vulnerabilities with protocol-enforced checkpoints and 100% liability transfer at every handoff.",
      color: "blue"
    },
    {
      id: "intelligence",
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Layer",
      description: "Two-tier AI architecture for real-time anomaly detection, causal risk analysis, and predictive maintenance.",
      color: "indigo"
    },
    {
      id: "revenue",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Signaling",
      description: "Verified performance visibility for exporters, enabling premium pricing and faster payment cycles.",
      color: "emerald"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-bold mb-8"
            >
              <Network className="w-4 h-4" />
              The Trust Layer for Global Cold Chains
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8 leading-[1.1]"
            >
              Reduce Losses. <br/>
              <span className="text-blue-600">Increase Trust.</span> <br/>
              Unlock Premium Revenue.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              CryoTrack is the first protocol-level compliance and intelligence infrastructure for fragmented logistics. 
              We eliminate the "Garbage In, Garbage Out" vulnerability using Hyperledger Fabric and Game Theory.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={onCtaClick}
                className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Apply for Pilot Access
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/approach"
                className="px-10 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Explore the Protocol
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Positioning Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <motion.div 
                key={pillar.id}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-blue-600`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The GIGO Problem Summary */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                <AlertTriangle className="w-3 h-3" />
                The GIGO Vulnerability
              </div>
              <h2 className="text-3xl font-bold mb-6">Why traditional tracking fails.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                India's logistics are 90% unorganized. Manual data entry carries a 1-5% error rate, but in cold storage, 70% of workers fake logs to avoid penalties. 
                This "Garbage In, Garbage Out" vulnerability isn't just a financial risk—it's fatal.
              </p>
              <div className="space-y-4">
                {[
                  "88-90% of operational time remains unlogged",
                  "Manual logs are faked after power failures",
                  "Unencrypted sensors provide a 'false sense of security'",
                  "Fragmented data silos prevent instant traceability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/problem" className="inline-flex items-center gap-2 mt-10 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Deep Dive into the Problem
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Case Study: Ramnagar (2019)</div>
              <p className="text-slate-300 mb-6 italic">
                "12 children died because industrial-grade DEG was substituted for pharma-grade PG. The paper trail was complete, but the data was garbage."
              </p>
              <Link to="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all inline-block">
                See How CryoTrack Intervenes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Checkpoint Mechanism */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Checkpoint Mechanism</h2>
            <p className="text-slate-600">Game-theoretic security for the real world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Smartphone />, title: "Mobile-First", desc: "Zero-friction adoption for MSME workers via native apps and PWAs." },
              { icon: <ShieldCheck />, title: "Liability Transfer", desc: "100% financial and legal liability shifts to the receiver at every handoff." },
              { icon: <Activity />, title: "Edge AI", desc: "On-device OCR and photo evidence anchored to the Hyperledger Fabric ledger." },
              { icon: <Globe />, title: "Gov Oracles", desc: "Real-time validation against ULIP, VAHAN, and FSSAI compliance databases." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-3xl bg-slate-50 text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your supply chain?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join the network that's building the digital public infrastructure for global logistics.
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

export default HomeView;
