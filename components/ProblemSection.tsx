
import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, FileX, DatabaseZap } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="w-8 h-8 text-[#ff4d4d]" />,
      title: "Fragmented Data Silos",
      description: "Sensor data exists in isolated spreadsheets. When auditors ask for a unified report, MSMEs spend days manually reconciling logs from multiple sources."
    },
    {
      icon: <FileX className="w-8 h-8 text-[#ff4d4d]" />,
      title: "Editable Records",
      description: "Manual entries lack trust. Auditors increasingly reject editable logs that lack a cryptographically secure audit trail, leading to compliance failures."
    },
    {
      icon: <DatabaseZap className="w-8 h-8 text-[#ff4d4d]" />,
      title: "Delayed Compliance",
      description: "Compliance is currently an after-the-fact event. Real-time deviations are missed until the audit cycle begins, causing massive product wastage."
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 lg:px-12 bg-[#05090f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-[#00e5ff] font-display text-[0.7rem] tracking-[0.2em] uppercase mb-4">The Problem</div>
          <h2 className="font-display font-extrabold text-[2.5rem] lg:text-[3.5rem] text-white leading-tight">
            Why Cold Chain Audits Are <span className="text-[#ff4d4d]">Fragile</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-[#6a8fa3] font-light text-[1.1rem]">
            Traditional data logging leaves gaps in the chain of custody, making regulatory compliance a manual and high-risk burden for India's logistics sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="mb-6 p-4 inline-block bg-white/[0.03] group-hover:bg-[#ff4d4d]/10 transition-colors duration-300">
                {problem.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wider">{problem.title}</h3>
              <p className="text-[#6a8fa3] font-light leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
