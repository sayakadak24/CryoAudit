
import React from 'react';
import { motion } from 'motion/react';
import { Database, Shield, Globe, Layers } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const layers = [
    {
      icon: <Database className="w-6 h-6 text-[#00e5ff]" />,
      title: "Data Ingestion Layer",
      description: "Universal API connectors for IoT, ERP, and manual edge-cases."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00e5ff]" />,
      title: "Integrity Layer",
      description: "Game-theoretic handoff protocol & cryptographic liability transfer."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#00e5ff]" />,
      title: "Consensus Layer",
      description: "Permissioned blockchain anchoring for immutable audit trails."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#00e5ff]" />,
      title: "Application Layer",
      description: "Audit-ready dashboards, predictive Edge AI, and regulatory reporting."
    }
  ];

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 bg-[#05090f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative p-8 border border-white/5 bg-white/[0.02] overflow-hidden">
              <div className="grid grid-cols-1 gap-4">
                {layers.map((layer, index) => (
                  <div key={index} className="p-6 bg-white/[0.03] border border-white/10 hover:border-[#00e5ff]/30 transition-all duration-300">
                    <div className="flex gap-4 items-center mb-2">
                      {layer.icon}
                      <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">{layer.title}</h4>
                    </div>
                    <p className="text-[#6a8fa3] text-xs font-light leading-relaxed">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="text-[#00e5ff] font-display text-[0.7rem] tracking-[0.2em] uppercase mb-4">The Stack</div>
            <h2 className="font-display font-extrabold text-[2.5rem] lg:text-[3.5rem] text-white leading-tight mb-8">
              Technical <span className="text-[#00e5ff]">Architecture</span>
            </h2>
            <p className="text-[#6a8fa3] font-light text-[1.1rem] leading-relaxed mb-8">
              CryoTrack isn't just a dashboard. It's a multi-layered integrity protocol that sits between your operations and your auditors.
            </p>
            <ul className="space-y-4 text-[#d6edf5] font-light">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#00e5ff]"></div>
                <span>Hyperledger Fabric based permissioned network</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#00e5ff]"></div>
                <span>Edge AI models for anomaly detection</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#00e5ff]"></div>
                <span>Cryptographic proof-of-handoff</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
