
import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShieldCheck, Zap, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

interface BusinessModelViewProps {
  onCtaClick: () => void;
}

const BusinessModelView: React.FC<BusinessModelViewProps> = ({ onCtaClick }) => {
  const revenueStreams = [
    {
      title: "SaaS Subscription",
      desc: "Tiered pricing for MSMEs and Enterprise partners based on volume and feature access.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Transaction Fees",
      desc: "Micro-fees per liability transfer, ensuring the network scales with usage.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Data Insights",
      desc: "Anonymized, aggregated supply chain intelligence for market research and logistics optimization.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 leading-tight">
            Our <span className="text-blue-200">Business Model</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            CryoTrack Solutions is built on a sustainable, value-driven framework that aligns the interests of all supply chain participants.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Aligning Incentives</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                By transforming compliance from a cost center into a trust asset, we create a self-sustaining ecosystem where honesty is rewarded and risk is mitigated.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reduced Insurance Premiums</h4>
                    <p className="text-slate-600 text-sm">Verified audit trails allow companies to negotiate lower insurance rates based on proven compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Market Access</h4>
                    <p className="text-slate-600 text-sm">MSMEs gain access to premium global markets by proving adherence to international standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Revenue Streams</h3>
              <div className="space-y-8">
                {revenueStreams.map((stream, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                      {stream.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{stream.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{stream.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Growth */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scalable Ecosystem</h2>
            <p className="text-slate-400">Designed for rapid adoption across diverse industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">Network</div>
              <p className="text-sm text-slate-400">Value increases exponentially as more participants join the trust network.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">Interoperable</div>
              <p className="text-sm text-slate-400">Seamlessly integrates with existing ERPs and logistics software.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">Global</div>
              <p className="text-sm text-slate-400">Built to handle international trade and cross-border compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Partner with CryoTrack Solutions</h2>
          <p className="text-lg text-slate-600 mb-10">
            Discover how our business model can drive value for your supply chain operations.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl"
          >
            Explore Partnership
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessModelView;
