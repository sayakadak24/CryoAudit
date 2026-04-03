
import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Share2, FileCheck, Zap } from 'lucide-react';

const featureList = [
  {
    title: 'Edge AI Verification',
    description: 'Our proprietary ML models detect anomalous cooling patterns before they lead to spoilage, triggering smart-contract alerts.',
    icon: <Cpu className="w-8 h-8 text-[#00e5ff]" />,
  },
  {
    title: 'Permissioned Ledger',
    description: 'Built on a high-throughput blockchain, ensuring every handoff is cryptographically signed and immutable.',
    icon: <Share2 className="w-8 h-8 text-[#00e5ff]" />,
  },
  {
    title: 'Automated Audit Logic',
    description: 'Real-time organization of data into audit-ready formats. Track deviations and exceptions automatically, reducing manual prep work.',
    icon: <FileCheck className="w-8 h-8 text-[#00e5ff]" />,
  },
  {
    title: 'Zero-Hardware Integration',
    description: 'Integrate directly with existing IoT sensors and loggers via our universal API. No expensive hardware replacement needed.',
    icon: <Zap className="w-8 h-8 text-[#00e5ff]" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 lg:px-12 bg-[#05090f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-[#00e5ff] font-display text-[0.7rem] tracking-[0.2em] uppercase mb-4">The Solution</div>
          <h2 className="font-display font-extrabold text-[2.5rem] lg:text-[3.5rem] text-white leading-tight">
            Deep Tech for <span className="text-[#00e5ff]">Real-World</span> Logistics
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6a8fa3] font-light text-[1.1rem]">
            A single, unified protocol for cold chain integrity, designed for the unique challenges of the Indian logistics landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureList.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="p-4 bg-white/[0.03] group-hover:bg-[#00e5ff]/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-[#6a8fa3] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
