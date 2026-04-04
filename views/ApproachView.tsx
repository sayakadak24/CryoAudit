import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, Scale, Zap, Lock, Users, Database, Package, Truck, ClipboardCheck } from 'lucide-react';

interface ApproachViewProps {
  onCtaClick: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "shipment-created",
      title: "Shipment Created",
      desc: "A digital twin is initialized with specific compliance parameters (temperature, humidity, handling). These rules are locked into the audit trail.",
      icon: <Package className="w-6 h-6" />,
      ui: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-500">BATCH ID</span>
            <span className="text-xs font-mono font-bold text-brand-600">#CRYO-8829-X</span>
          </div>
          <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
            <div className="text-[10px] font-bold text-brand-600 uppercase mb-2">Compliance Rules</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Temp Range</span>
                <span className="font-bold text-slate-900">2°C - 8°C</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Max Humidity</span>
                <span className="font-bold text-slate-900">60%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "handoff",
      title: "Secure Handoff",
      desc: "At every physical transfer, the receiver scans the shipment. Our Edge AI verifies physical proofs to ensure the state matches the digital record.",
      icon: <Truck className="w-6 h-6" />,
      ui: (
        <div className="space-y-4">
          <div className="relative h-32 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            <div className="w-24 h-24 border-2 border-brand-500 rounded-lg relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-500 animate-scan"></div>
            </div>
            <span className="absolute bottom-2 left-2 text-[8px] font-bold text-white bg-brand-600 px-1 rounded">SCANNING PROOF</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            IDENTITY VERIFIED
          </div>
        </div>
      )
    },
    {
      id: "liability",
      title: "Liability Transfer",
      desc: "When the receiver accepts without dispute, they assume legal and financial liability. This ensures honesty is the most rational choice.",
      icon: <Scale className="w-6 h-6" />,
      ui: (
        <div className="space-y-4">
          <div className="p-4 bg-slate-900 rounded-xl text-white">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">Liability Shift</div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-[8px] text-slate-500 mb-1">PROVIDER</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">P</div>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-500" />
              <div className="text-center">
                <div className="text-[8px] text-slate-500 mb-1">RECEIVER</div>
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-[10px]">R</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 text-center">LIABILITY_ACCEPTED</div>
          </div>
        </div>
      )
    },
    {
      id: "audit",
      title: "Immutable Audit",
      desc: "A regulatory-grade history is maintained. Authorized bodies gain access to a tamper-proof record for instant, automated auditing.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      ui: (
        <div className="space-y-3">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Audit Trail</div>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300" style={{ width: `${100 - i * 20}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" />
              Operational Framework
            </div>
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-8 leading-tight text-slate-900 font-display">
              The <span className="text-brand-600">Checkpoint</span> Mechanism.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              We move compliance from a manual task to an automated architectural layer using structural incentives and tamper-proof records.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Timeline Steps */}
            <div className="lg:col-span-5 space-y-4">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-6 items-start group ${
                    activeStep === idx 
                      ? 'bg-white border-brand-200 shadow-xl shadow-brand-50 ring-1 ring-brand-100' 
                      : 'bg-transparent border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeStep === idx ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors ${
                      activeStep === idx ? 'text-slate-900' : 'text-slate-500'
                    }`}>{step.title}</h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      activeStep === idx ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive Graphic */}
            <div className="lg:col-span-7 sticky top-32">
              <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-200 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 w-full max-w-md"
                  >
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
                      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                          {steps[activeStep].icon}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {activeStep + 1}</div>
                          <div className="font-bold text-slate-900">{steps[activeStep].title}</div>
                        </div>
                      </div>
                      
                      {steps[activeStep].ui}

                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                          Audit Trail Status
                          <span className="text-emerald-600">SECURE</span>
                        </div>
                        <div className="flex gap-1">
                          {[0, 1, 2, 3].map(i => (
                            <div 
                              key={i} 
                              className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                                i <= activeStep ? 'bg-brand-500' : 'bg-slate-100'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-brand-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regulatory Integration */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Regulatory Integration</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Aligning with global digital infrastructure and safety standards to ensure high-trust operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
              <Users className="w-8 h-8 text-brand-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Logistics Networks</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Real-time validation of transport documents, vehicle registries, and toll data at every handoff.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
              <Shield className="w-8 h-8 text-brand-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Safety Standards</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Direct auditor nodes for regulators to access verified, tamper-proof compliance histories instantly.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
              <CheckCircle2 className="w-8 h-8 text-brand-600 mb-6" />
              <h4 className="font-bold text-slate-900 mb-2">Data Privacy</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Strict data minimization principles ensuring no unnecessary PII is stored on the immutable ledger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-display">Ready to secure your custody?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Join the early pilot partners implementing the Checkpoint Mechanism today.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Apply for Pilot Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApproachView;
