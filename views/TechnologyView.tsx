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
      title: "Immutable Core",
      description: "A secure, permissioned distributed ledger designed for enterprise networks, ensuring data integrity without unnecessary complexity.",
      features: ["Secure Consensus", "Private Data Access", "Immutable Audit Trails", "Enterprise Scalability"]
    },
    {
      id: "ai-tier-1",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Tier 1: Edge Verification",
      description: "On-device verification running on standard smartphones. Works seamlessly even in areas with limited connectivity.",
      features: ["On-device Data Capture", "GPS-Tagged Evidence", "Offline Support", "Anti-Spoofing Measures"]
    },
    {
      id: "ai-tier-2",
      icon: <Cpu className="w-8 h-8" />,
      title: "Tier 2: Central Intelligence",
      description: "Real-time data correlation and risk analytics. Cross-references information against global logistics and environmental data.",
      features: ["Interoperability", "Predictive Analytics", "Explainable Insights", "Anomaly Detection"]
    },
    {
      id: "api-gateway",
      icon: <Globe className="w-8 h-8" />,
      title: "Integration Gateway",
      description: "The bridge to your existing systems. Connects legacy software with our secure network for a unified view of your supply chain.",
      features: ["Secure Authentication", "Key Management", "Event-Driven Logic", "Seamless Connectivity"]
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
              CryoTrack Solutions is a modern, scalable infrastructure designed to be lightweight at the edge but enterprise-grade at the core.
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
              <h2 className="text-3xl font-bold mb-8">Optimized Verification Protocol</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Traditional networks require complex, multi-step verification that can slow down high-velocity logistics. CryoTrack optimizes this to provide instant verification at the moment of handoff.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Instant Verification</h4>
                    <p className="text-sm text-slate-400">The receiver's verification is sufficient for initial ledger entry, ensuring zero-latency operations during handoffs.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Network className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Collaborative Consensus</h4>
                    <p className="text-sm text-slate-400">If an anomaly is detected, the protocol automatically triggers a higher security tier, requiring multi-party consensus for resolution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Verification Lifecycle</div>
              <div className="space-y-8">
                {[
                  { step: "Genesis", desc: "Asset digital twin created with compliance parameters" },
                  { step: "Handoff", desc: "Instant verification + Edge AI evidence capture" },
                  { step: "Evaluation", desc: "Central Intelligence data correlation" },
                  { step: "Commit", desc: "Secure ordering sequences record to ledger" }
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
