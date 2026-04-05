import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Activity, ShieldCheck } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Dashboard Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Shipment #CT-8829</h4>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Pharma Grade • Global Transit</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Immutable Audit Passed</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Stats & Graph */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Temperature</p>
                <p className="text-xl font-bold text-slate-900">4.2°C</p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  Within SLA
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Humidity</p>
                <p className="text-xl font-bold text-slate-900">48%</p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  Optimal
                </div>
              </div>
            </div>

            {/* Mock Graph */}
            <div className="h-32 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Real-time Telemetry</p>
                <Activity className="w-3 h-3 text-brand-500" />
              </div>
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <path 
                  d="M0 40 Q 20 35, 40 45 T 80 30 T 120 40 T 160 25 T 200 35" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="2"
                  className="animate-[dash_3s_linear_infinite]"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                />
                <style>{`
                  @keyframes dash {
                    to { strokeDashoffset: 0; }
                  }
                `}</style>
              </svg>
            </div>
          </div>

          {/* Right: Map & Timeline */}
          <div className="space-y-6">
            <div className="h-40 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden">
              {/* Mock Map */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:10px_10px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 animate-ping absolute -inset-0"></div>
                  <div className="w-12 h-12 rounded-full bg-brand-500/10 absolute -inset-0"></div>
                  <MapPin className="w-6 h-6 text-brand-600 relative z-10" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-200 flex items-center justify-between">
                <span className="text-[9px] font-bold text-slate-700">Current Location: Port of Rotterdam</span>
                <span className="text-[8px] text-slate-500">ETA: 4h 12m</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] text-slate-500 font-bold uppercase">Recent Handoffs</p>
              {[
                { label: "Warehouse Exit", time: "10:42 AM", status: "Verified" },
                { label: "Port Ingestion", time: "02:15 PM", status: "Verified" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-medium text-slate-700">{item.label}</span>
                  </div>
                  <span className="text-[9px] text-slate-500">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-xl border border-slate-100 hidden md:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase">Compliance</p>
            <p className="text-sm font-bold text-slate-900">100% GDP Ready</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
