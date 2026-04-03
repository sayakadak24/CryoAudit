import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Network, Zap, Shield, Code, Server, Smartphone, Globe } from 'lucide-react';

interface TechnologyViewProps {
  onCtaClick: () => void;
}

const TechnologyView: React.FC<TechnologyViewProps> = ({ onCtaClick }) => {
  const techStack = [
    {
      id: "hyperledger",
      icon: <Database className="w-8 h-8" />,
      title: "Hyperledger Fabric",
      description: "The immutable core. A permissioned distributed ledger designed for enterprise B2B networks, eliminating gas fees and tokenomics.",
      features: ["RAFT Consensus", "Deferred Endorsement Policy", "Private Data Collections", "CouchDB World State"]
    },
    {
      id: "ai-tier-1",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Tier 1: Edge Intelligence",
      description: "On-device OCR and verification running on MSME-tier smartphones. Works in zero-connectivity environments with WORM caching.",
      features: ["On-device OCR", "GPS-Tagged Photos", "Offline Caching", "Anti-Spoofing Protocols"]
    },
    {
      id: "ai-tier-2",
      icon: <Cpu className="w-8 h-8" />,
      title: "Tier 2: Centralized Engine",
      description: "Real-time oracle correlation and causal analytics. Cross-references telemetry against weather, route, and traffic data.",
      features: ["ULIP Interoperability", "Causal ML (DoWhy)", "Explainable AI (XAI)", "Anomaly Detection"]
    },
    {
      id: "api-gateway",
      icon: <Globe className="w-8 h-8" />,
      title: "API & Integration Gateway",
      description: "The architectural middleware. Bridges legacy ERPs (SAP, Oracle) with the decentralized network using gRPC and GraphQL.",
      features: ["JWT/OAuth 2.0", "HSM Key Management", "Event-Driven Architecture", "Asynchronous Processing"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Code className="w-3 h-3" />
              Technical Architecture
            </div>
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 text-slate-900 leading-tight">
              The Infrastructure of <span className="text-blue-600">Trust</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              CryoTrack is a decoupled, microservices-based framework designed to be lightweight at the edge but enterprise-grade at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {techStack.map((tech) => (
              <motion.div 
                key={tech.id}
                whileHover={{ y: -5 }}
                className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{tech.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {tech.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Zap className="w-3 h-3 text-blue-600" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consensus Deep Dive */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Deferred Endorsement Policy</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Standard blockchain networks use O(N) endorsement, which is too slow for high-velocity logistics. CryoTrack optimizes this to O(1) at the moment of handoff.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Single-Signature Ingestion</h4>
                    <p className="text-sm text-slate-400">The receiving actor's signature is sufficient for initial ledger entry, ensuring zero-latency operations.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Network className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Multi-Signature Dispute</h4>
                    <p className="text-sm text-slate-400">If an anomaly is detected, the protocol automatically defers to its highest security tier, requiring auditor consensus.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Consensus Lifecycle</div>
              <div className="space-y-8">
                {[
                  { step: "Genesis", desc: "Asset twin minted with SLA parameters" },
                  { step: "Handoff", desc: "O(1) signature + Edge AI verification" },
                  { step: "Evaluation", desc: "Tier 2 Oracle correlation (ULIP/Weather)" },
                  { step: "Commit", desc: "RAFT ordering sequences block to ledger" }
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{s.step}</h5>
                      <p className="text-xs text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API-First Integration</h2>
            <p className="text-slate-600">Seamlessly bridge legacy systems with decentralized trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
              <Server className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Enterprise ERPs</h4>
              <p className="text-sm text-slate-600">Direct integration with SAP, Oracle, and Microsoft Dynamics via gRPC.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
              <Smartphone className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Edge Devices</h4>
              <p className="text-sm text-slate-600">Native mobile apps and PWAs for ground-level MSME adoption.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50">
              <Globe className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Gov Oracles</h4>
              <p className="text-sm text-slate-600">Real-time validation against ULIP, VAHAN, and FASTag toll data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to integrate?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Access our developer sandbox and start building on the CryoTrack protocol.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Request API Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyView;
