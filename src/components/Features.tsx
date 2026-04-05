
import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, BarChart3, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-brand-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">The Solution</div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
            Enterprise Infrastructure for <span className="text-brand-600">Global</span> Logistics
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-slate-600 font-medium text-lg">
            A single, unified protocol for supply chain integrity, designed for high-trust enterprise environments.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Feature 1: Edge AI Verification (Large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-500 p-10 flex flex-col"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">Edge AI Verification</h3>
              <p className="text-slate-600 max-w-md leading-relaxed text-lg">
                Our proprietary ML models run directly on standard smartphones, detecting anomalies and verifying physical proofs at the moment of handoff.
              </p>
            </div>
            
            {/* Mini UI Simulation */}
            <div className="mt-8 relative h-64 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scanning Batch #8829</span>
                </div>
                <div className="px-2 py-1 rounded bg-emerald-50 text-[10px] font-bold text-emerald-600 border border-emerald-100">
                  LIABILITY ACCEPTED
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-24 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-1.5 w-16 bg-slate-100 rounded animate-pulse"></div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 gap-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-32 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-1.5 w-20 bg-slate-100 rounded animate-pulse"></div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </motion.div>

          {/* Feature 2: Automated Audit (Small) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-1 bg-brand-600 rounded-3xl p-8 text-white flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <BarChart3 className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2 font-display">Automated Audit</h3>
              <p className="text-brand-100 text-sm leading-relaxed">
                Real-time organization of data into audit-ready formats.
              </p>
            </div>
            <div className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity">99.9%</div>
          </motion.div>

          {/* Feature 3: Global Compliance (Small) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <ShieldCheck className="w-8 h-8 mb-4 text-emerald-400" />
              <h3 className="text-xl font-bold mb-2 font-display">Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pre-configured for GDP, FSSAI, and FDA standards.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              VERIFIED
            </div>
          </motion.div>

          {/* Feature 4: Universal API (Medium) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-12 md:row-span-1 bg-slate-50 rounded-3xl border border-slate-200 p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-xl transition-all duration-500"
          >
            <div className="max-w-md">
              <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center mb-4 text-slate-600">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Universal API Integration</h3>
              <p className="text-slate-600 text-sm">
                Connect legacy ERPs and IoT sensors directly to our secure network. No expensive hardware replacement needed.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-500 shadow-sm">
                GET /api/v1/shipment/audit
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-200 group-hover:translate-x-2 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
