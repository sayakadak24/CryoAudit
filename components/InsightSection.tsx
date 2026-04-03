
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRightLeft, Lock } from 'lucide-react';

const InsightSection: React.FC = () => {
  const steps = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00e5ff]" />,
      title: "IoT Edge Capture",
      description: "Sensors stream encrypted data directly to the CryoTrack node. No manual entry possible."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-[#00e5ff]" />,
      title: "Liability Handoff",
      description: "At every transfer point, the receiver cryptographically accepts the previous leg's data."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00e5ff]" />,
      title: "Immutable Proof",
      description: "Data is hashed and anchored to the blockchain, creating a permanent, audit-ready record."
    }
  ];

  return (
    <section id="how" className="py-24 px-6 lg:px-12 bg-[#05090f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,229,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#00e5ff] font-display text-[0.7rem] tracking-[0.2em] uppercase mb-4">How It Works</div>
            <h2 className="font-display font-extrabold text-[2.5rem] lg:text-[3.5rem] text-white leading-tight mb-8">
              The Checkpoint <span className="text-[#00e5ff]">Mechanism</span>
            </h2>
            <p className="text-[#6a8fa3] font-light text-[1.1rem] leading-relaxed mb-12">
              We replace manual logs with a game-theoretic handoff protocol. If a driver delivers spoiled goods, the receiver's node automatically rejects the handoff, instantly pinpointing liability.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="mt-1 p-3 bg-white/[0.03] border border-white/5">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white uppercase tracking-wider mb-2">{step.title}</h3>
                    <p className="text-[#6a8fa3] font-light text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_8s_infinite_linear]"></div>
              
              <div className="relative h-full flex flex-col justify-center items-center">
                <div className="w-full max-w-md space-y-6">
                  <div className="p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[0.6rem] text-[#00e5ff] uppercase tracking-widest">Node: Warehouse_A</span>
                      <span className="text-[0.6rem] text-[#6a8fa3]">Status: Syncing...</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-[#00e5ff]"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-[#00e5ff] to-transparent"></div>
                  </div>

                  <div className="p-6 bg-[#00e5ff]/5 border border-[#00e5ff]/20 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[0.6rem] text-[#00e5ff] uppercase tracking-widest">Smart Contract Execution</span>
                      <span className="text-[0.6rem] text-[#00e5ff]">Verified</span>
                    </div>
                    <div className="text-xs text-[#d6edf5] font-mono opacity-60">
                      {`{ "action": "HANDOFF", "from": "TRUCK_42", "to": "WH_A", "temp_avg": 4.2, "integrity": 1.0 }`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
