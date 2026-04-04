import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, Zap, Shield, Globe, Cpu, Smartphone, MessageSquare, Database, Lock } from 'lucide-react';

interface PricingViewProps {
  onCtaClick: () => void;
}

const PricingView: React.FC<PricingViewProps> = ({ onCtaClick }) => {
  const plans = [
    {
      name: "Individual",
      description: "For small-scale farmers and independent transporters.",
      price: "Free",
      priceSub: "Forever",
      features: [
        "1 Location / 20 Events",
        "Standard Trade Items",
        "90-Day Data Retention",
        "Handoff Liability Logic",
        "Standard Ledger Access",
        "Mobile App Access",
        "Zero-Friction Wallet",
        "Community Support"
      ],
      cta: "Get Started",
      highlight: false,
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: "Essentials",
      description: "Ideal for SMEs and growing logistics providers.",
      price: "₹1,499",
      priceSub: "per month",
      features: [
        "5 Locations / 500 Events",
        "Custom Trade Items",
        "1-Year Data Retention",
        "Mobile OCR Data Capture",
        "Standard Ledger Access",
        "Mobile + Web Dashboard",
        "Basic Exporting (CSV)",
        "Email Support",
        "Standard Service Agreement"
      ],
      cta: "Start Free Trial",
      highlight: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Premium",
      description: "For mid-market enterprises with high-volume needs.",
      price: "₹7,499",
      priceSub: "per month",
      features: [
        "25 Locations / 5,000 Events",
        "Bulk Item Management",
        "3-Year Data Retention",
        "Dispute Verification Tools",
        "High-Throughput Ledger",
        "WhatsApp Bot Support",
        "API Webhooks (Basic)",
        "Priority Support",
        "Enhanced SLA"
      ],
      cta: "Go Premium",
      highlight: false,
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      description: "Custom infrastructure for global corporations.",
      price: "Custom",
      priceSub: "Quotation",
      features: [
        "Unlimited Locations & Events",
        "Global SKU Mapping",
        "Custom Data Retention",
        "Tier-2 AI (Reality Check)",
        "Private Data Collections",
        "Full API / ERP Access",
        "Gov Oracle Integrations",
        "Dedicated Account Manager",
        "Single Sign-On (SSO)",
        "Auditor Nodes (Read-Only)"
      ],
      cta: "Contact Sales",
      highlight: false,
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 text-slate-900 leading-tight font-display">
              Transparent Pricing for <span className="text-brand-600">Global Trust</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              From local Kiranas to global pharmaceutical giants, CryoTrack offers scalable pricing models designed to eliminate GIGO at any scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col p-8 rounded-3xl border transition-all hover:shadow-2xl ${
                  plan.highlight 
                    ? 'bg-slate-900 text-white border-slate-800 ring-4 ring-brand-600/20 scale-105 z-10' 
                    : 'bg-white text-slate-900 border-slate-200'
                }`}
              >
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.highlight ? 'bg-brand-600 text-white' : 'bg-slate-100 text-brand-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.priceSub}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand-400' : 'text-brand-600'}`} />
                      <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onCtaClick}
                  className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                    plan.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-900/20'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-display">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "How does the 'Liability Transfer' work in the Free plan?",
                a: "The core game-theoretic protocol is available on all plans. Even on the Free plan, every handoff is cryptographically signed, and liability is transferred to the receiver upon acceptance."
              },
              {
                q: "Can I upgrade my plan as my business grows?",
                a: "Yes, CryoTrack is designed to scale with you. You can upgrade from Essentials to Premium or Enterprise at any time without losing your historical ledger data."
              },
              {
                q: "What are 'Auditor Nodes'?",
                a: "Auditor Nodes are read-only access points for regulatory bodies (like FSSAI or CDSCO) or internal compliance teams to verify the entire supply chain history without being able to modify records."
              },
              {
                q: "Is there a setup fee for Enterprise clients?",
                a: "Enterprise setup involves custom ERP integration and HSM configuration. Contact our sales team for a detailed quotation based on your infrastructure needs."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-600" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Secure your supply chain today</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join thousands of actors building the future of transparent, high-trust logistics.
          </p>
          <button
            onClick={onCtaClick}
            className="px-10 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Get Started with CryoTrack
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingView;
