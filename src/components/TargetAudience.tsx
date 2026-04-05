
import React from 'react';
import { motion } from 'motion/react';
import { Pill, Leaf, Truck } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const industries = [
    {
      icon: <Pill className="w-8 h-8 text-[#00e5ff]" />,
      title: "Pharmaceuticals",
      description: "Ensuring GDP compliance for life-saving vaccines and biologics with zero-gap temperature trails."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#00e5ff]" />,
      title: "Agriculture",
      description: "Reducing India's 40% post-harvest loss by providing MSME farmers with verifiable cold chain proof for export."
    },
    {
      icon: <Truck className="w-8 h-8 text-[#00e5ff]" />,
      title: "3PL Logistics",
      description: "Enabling logistics providers to offer 'Trust-as-a-Service' to their high-value enterprise clients."
    }
  ];

  return (
    <section id="industries" className="py-24 px-6 lg:px-12 bg-[#05090f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-[#00e5ff] font-display text-[0.7rem] tracking-[0.2em] uppercase mb-4">Market Focus</div>
          <h2 className="font-display font-extrabold text-[2.5rem] lg:text-[3.5rem] text-white leading-tight">
            Industry <span className="text-[#00e5ff]">Coverage</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6a8fa3] font-light text-[1.1rem]">
            CryoTrack is built to scale across the most sensitive segments of the Indian supply chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group text-center"
            >
              <div className="mb-8 p-6 inline-block bg-white/[0.03] group-hover:bg-[#00e5ff]/10 transition-colors duration-300 rounded-full">
                {industry.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wider">{industry.title}</h3>
              <p className="text-[#6a8fa3] font-light leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
