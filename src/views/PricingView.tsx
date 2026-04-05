import React from 'react';
import type { ViewProps } from '../types';
import PillBadge from '../components/ui/PillBadge';
import CheckList from '../components/ui/CheckList';

const PLANS = [
  {
    id: 'individual',
    title: 'Individual',
    subtitle: 'For farmers, kirana operators, and solo logistics actors.',
    price: 'Free',
    priceNote: 'Zero Setup Cost',
    highlighted: false,
    features: ['Mobile app (Android)', 'QR scan & photo verification', 'Handoff checkpoint participation', 'Full offline support'],
    ctaLabel: 'Download App',
    ctaAction: undefined as (() => void) | undefined,
  },
  {
    id: 'essentials',
    title: 'Essentials (SME)',
    subtitle: 'For distributors and cold storage operators.',
    price: '₹1,499',
    priceUnit: '/month',
    priceNote: 'Billed Annually',
    highlighted: false,
    features: ['All Individual features', 'Multi-actor shipment tracking', 'AI anomaly alerts', 'FSSAI compliance reports', 'Dispute resolution records'],
    ctaLabel: 'Start Free Trial',
  },
  {
    id: 'premium',
    title: 'Premium',
    subtitle: 'For regional pharma and agri exporters.',
    price: '₹7,499',
    priceUnit: '/month',
    priceNote: 'Billed Annually',
    highlighted: true,
    badge: 'Most Popular',
    features: ['All Essentials features', 'ULIP & VAHAN integration', 'Advanced Tier 2 AI analytics', 'SLA smart contract customisation', 'CDSCO / FDA audit trail', 'Priority support'],
    ctaLabel: 'Contact Sales',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    subtitle: 'For national networks and government bodies.',
    price: 'Custom',
    priceNote: 'Enterprise Architecture',
    highlighted: false,
    features: ['All Premium features', 'Dedicated Fabric consensus node', 'WORM compliance logs', 'Custom SLA smart contracts', 'White-label UI integration', 'Onsite pilot program'],
    ctaLabel: 'Request Quote',
  },
];

const FEATURE_TABLE = [
  { f: 'Mobile App & Offline Support', v: [true, true, true, true] },
  { f: 'Handoff Liability Checkpoints', v: [true, true, true, true] },
  { f: 'AI Anomaly Alerts', v: [false, true, true, true] },
  { f: 'ULIP / VAHAN Integration', v: [false, false, true, true] },
  { f: 'FSSAI / CDSCO Audit Trail', v: [false, true, true, true] },
  { f: 'Custom SLA Contracts', v: [false, false, true, true] },
  { f: 'Dedicated Fabric Node', v: [false, false, false, true] },
];

const PricingView: React.FC<ViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="max-w-3xl">
          <PillBadge variant="neutral" icon="payments">Trust-as-a-Service Pricing</PillBadge>
          <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-on-surface mb-6">
            Zero-Fee for MSMEs. <span className="text-primary">Predictable Pricing for Enterprises.</span>
          </h1>
          <p className="text-lg text-secondary font-medium leading-relaxed max-w-2xl">
            Unlike traditional platforms that charge per transaction, CryoTrack runs on Hyperledger — meaning no gas fees, no variable costs, no surprises.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`group rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col relative overflow-hidden ${
              plan.highlighted
                ? 'bg-primary shadow-[0px_32px_64px_-12px_rgba(0,74,198,0.25)]'
                : 'bg-surface-container-lowest'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-100 z-0" />
            )}
            <div className={`${plan.highlighted ? 'relative z-10' : ''}`}>
              <div className="mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : ''}`}>{plan.title}</h3>
                    <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-secondary'}`}>{plan.subtitle}</p>
                  </div>
                  {plan.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest">
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-8">
                {'priceUnit' in plan ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold tracking-tight ${plan.highlighted ? 'text-white' : 'text-on-surface'}`}>{plan.price}</span>
                    <span className={plan.highlighted ? 'text-blue-100 font-medium' : 'text-secondary font-medium'}>{plan.priceUnit}</span>
                  </div>
                ) : (
                  <div className={`text-4xl font-extrabold tracking-tight ${plan.highlighted ? 'text-white' : 'text-on-surface'}`}>{plan.price}</div>
                )}
                <p className={`text-xs font-bold mt-2 uppercase tracking-widest ${plan.highlighted ? 'text-blue-200' : 'text-primary'}`}>{plan.priceNote}</p>
              </div>

              <CheckList
                items={plan.features}
                iconColor={plan.highlighted ? 'text-tertiary-fixed' : 'text-tertiary'}
                textColor={plan.highlighted ? 'text-white' : 'text-on-surface-variant'}
                className="mb-10 flex-grow"
              />

              <button
                onClick={onCtaClick}
                className={`w-full py-4 rounded-xl font-bold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-blue-50 shadow-xl'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                {plan.ctaLabel}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURE TABLE */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Feature Breakdown</h2>
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-6 text-sm font-bold text-on-surface uppercase tracking-wider">Feature</th>
                {['Individual', 'Essentials', 'Premium', 'Enterprise'].map((col, i) => (
                  <th key={col} className={`p-6 text-sm font-bold text-center ${i === 2 ? 'text-primary' : ''}`}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {FEATURE_TABLE.map((row) => (
                <tr key={row.f}>
                  <td className="p-6 font-bold text-on-surface">{row.f}</td>
                  {row.v.map((v, i) => (
                    <td key={i} className="p-6 text-center">
                      {v
                        ? <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        : <span className="text-secondary">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
            <img
              alt="India supply chain"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABj04Lls4sDC42ADBR6VCETMPcglRn3-0UHhYGCCIZvT5KCAa0XfN1LbjVkinXNWFqHaQMkwWYEttp4JO4N6pwoLeKShhCKZWhyyM1IwJiFWUX3iJMq2mwqVnjkvSSm9SKo_7UVLlHFw6RI8FbJJKWWQAGjB0BORY1kfUrzlJ2vVOO8jF2JPht1kVQ_regnxogUbetthTphs59Pr-QlAqx0WfKKf26kH7f0SYbuykXeofqy15wU2U9jLVXyWixykMyxWZrfgBsI4w"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          <div className="md:col-span-7 bg-surface-container-high rounded-[2.5rem] p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">
              Not Sure Which Plan? <span className="text-primary">We'll Map It For You.</span>
            </h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              Tell us about your supply chain. We'll recommend the right plan and run a pilot with your team before a single rupee is spent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25"
                onClick={onCtaClick}
              >
                Request a Free Consultation
              </button>
              <button className="px-8 py-4 rounded-xl bg-white text-on-surface font-bold text-lg border border-outline-variant hover:bg-surface-container-lowest transition-colors">
                Download Pricing PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingView;
