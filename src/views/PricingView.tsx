import React from 'react';

interface PricingViewProps {
  onCtaClick?: () => void;
}

const PricingView: React.FC<PricingViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-32 pb-24">

      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary mb-6">
            <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
            <span className="text-[0.6875rem] font-bold tracking-wider uppercase">Trust-as-a-Service Pricing</span>
          </div>
          <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-on-surface mb-6">
            Zero-Fee for MSMEs. <span className="text-primary">Predictable Pricing for Enterprises.</span>
          </h1>
          <p className="text-lg text-secondary font-medium leading-relaxed max-w-2xl">
            Unlike traditional platforms that charge per transaction, CryoTrack runs on Hyperledger — meaning no gas fees, no variable costs, no surprises.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">

        <div className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Individual</h3>
            <p className="text-sm text-secondary">For farmers, kirana operators, and solo logistics actors.</p>
          </div>
          <div className="mb-8">
            <div className="text-4xl font-extrabold text-on-surface tracking-tight">Free</div>
            <p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">Zero Setup Cost</p>
          </div>
          <div className="space-y-3 mb-10 flex-grow">
            {['Mobile app (Android)', 'QR scan & photo verification', 'Handoff checkpoint participation', 'Full offline support'].map(f => (
              <div key={f} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-sm font-medium text-on-surface-variant">{f}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors">Download App</button>
        </div>

        <div className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Essentials (SME)</h3>
            <p className="text-sm text-secondary">For distributors and cold storage operators.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-on-surface tracking-tight">₹1,499</span>
              <span className="text-secondary font-medium">/month</span>
            </div>
            <p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">Billed Annually</p>
          </div>
          <div className="space-y-3 mb-10 flex-grow">
            {['All Individual features', 'Multi-actor shipment tracking', 'AI anomaly alerts', 'FSSAI compliance reports', 'Dispute resolution records'].map(f => (
              <div key={f} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-sm font-medium text-on-surface-variant">{f}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors" onClick={onCtaClick}>Start Free Trial</button>
        </div>

        <div className="relative group bg-primary rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] shadow-[0px_32px_64px_-12px_rgba(0,74,198,0.25)] flex flex-col overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-100 z-0"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                <p className="text-sm text-blue-100">For regional pharma and agri exporters.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest">Most Popular</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tracking-tight">₹7,499</span>
                <span className="text-blue-100 font-medium">/month</span>
              </div>
              <p className="text-xs font-bold text-blue-200 mt-2 uppercase tracking-widest">Billed Annually</p>
            </div>
            <div className="space-y-3 mb-10 flex-grow">
              {['All Essentials features', 'ULIP & VAHAN integration', 'Advanced Tier 2 AI analytics', 'SLA smart contract customisation', 'CDSCO / FDA audit trail', 'Priority support'].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span className="text-sm font-medium text-white">{f}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow-xl" onClick={onCtaClick}>Contact Sales</button>
          </div>
        </div>

        <div className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-sm text-secondary">For national networks and government bodies.</p>
          </div>
          <div className="mb-8">
            <div className="text-4xl font-extrabold text-on-surface tracking-tight">Custom</div>
            <p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">Enterprise Architecture</p>
          </div>
          <div className="space-y-3 mb-10 flex-grow">
            {['All Premium features', 'Dedicated Fabric consensus node', 'WORM compliance logs', 'Custom SLA smart contracts', 'White-label UI integration', 'Onsite pilot program'].map(f => (
              <div key={f} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-sm font-medium text-on-surface-variant">{f}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors" onClick={onCtaClick}>Request Quote</button>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Feature Breakdown</h2>
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-6 text-sm font-bold text-on-surface uppercase tracking-wider">Feature</th>
                <th className="p-6 text-sm font-bold text-center">Individual</th>
                <th className="p-6 text-sm font-bold text-center">Essentials</th>
                <th className="p-6 text-sm font-bold text-center text-primary">Premium</th>
                <th className="p-6 text-sm font-bold text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {[
                { f: 'Mobile App & Offline Support', v: [true, true, true, true] },
                { f: 'Handoff Liability Checkpoints', v: [true, true, true, true] },
                { f: 'AI Anomaly Alerts', v: [false, true, true, true] },
                { f: 'ULIP / VAHAN Integration', v: [false, false, true, true] },
                { f: 'FSSAI / CDSCO Audit Trail', v: [false, true, true, true] },
                { f: 'Custom SLA Contracts', v: [false, false, true, true] },
                { f: 'Dedicated Fabric Node', v: [false, false, false, true] },
              ].map(row => (
                <tr key={row.f}>
                  <td className="p-6 font-bold text-on-surface">{row.f}</td>
                  {row.v.map((v, i) => (
                    <td key={i} className="p-6 text-center">
                      {v
                        ? <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                        : <span className="text-secondary">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
            <img alt="India supply chain" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABj04Lls4sDC42ADBR6VCETMPcglRn3-0UHhYGCCIZvT5KCAa0XfN1LbjVkinXNWFqHaQMkwWYEttp4JO4N6pwoLeKShhCKZWhyyM1IwJiFWUX3iJMq2mwqVnjkvSSm9SKo_7UVLlHFw6RI8FbJJKWWQAGjB0BORY1kfUrzlJ2vVOO8jF2JPht1kVQ_regnxogUbetthTphs59Pr-QlAqx0WfKKf26kH7f0SYbuykXeofqy15wU2U9jLVXyWixykMyxWZrfgBsI4w" />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
          <div className="md:col-span-7 bg-surface-container-high rounded-[2.5rem] p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">Not Sure Which Plan? <span className="text-primary">We'll Map It For You.</span></h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              Tell us about your supply chain. We'll recommend the right plan and run a pilot with your team before a single rupee is spent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25" onClick={onCtaClick}>Request a Free Consultation</button>
              <button className="px-8 py-4 rounded-xl bg-white text-on-surface font-bold text-lg border border-outline-variant hover:bg-surface-container-lowest transition-colors">Download Pricing PDF</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingView;
