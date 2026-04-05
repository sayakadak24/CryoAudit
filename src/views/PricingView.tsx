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
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
<span className="text-[0.6875rem] font-bold tracking-wider uppercase">Enterprise-Grade Security Protocol</span>
</div>
<h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-on-surface mb-6">
                    Automate Your <span className="text-primary">Compliance Economy.</span>
</h1>
<p className="text-lg text-secondary font-medium leading-relaxed max-w-2xl">
                    From small delivery fleets to massive port infrastructures, our pricing scales with your digitization goals and audit requirements.
                </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

<div className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-bold mb-2">Clinical</h3>
<p className="text-sm text-secondary">Ideal for fertility centers and regional biobanks.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-extrabold text-on-surface tracking-tight">$899</span>
<span className="text-secondary font-medium">/month</span>
</div>
<p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">Billed Annually</p>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Up to 500 Active Samples</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Real-time LN2 Monitoring</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Standard Compliance Reports</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">24/7 Automated Alerts</span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors">Start Trial</button>
</div>

<div className="relative group bg-primary rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] shadow-[0px_32px_64px_-12px_rgba(0,74,198,0.25)] flex flex-col overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-100 z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
<p className="text-sm text-blue-100">For multi-site hospital networks and research labs.</p>
</div>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest">Most Popular</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-extrabold text-white tracking-tight">$2,499</span>
<span className="text-blue-100 font-medium">/month</span>
</div>
<p className="text-xs font-bold text-blue-200 mt-2 uppercase tracking-widest">Custom Onboarding Included</p>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">check_circle</span>
<span className="text-sm font-medium text-white">Unlimited Biological Assets</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">check_circle</span>
<span className="text-sm font-medium text-white">Full API Data Integration</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">check_circle</span>
<span className="text-sm font-medium text-white">Multi-site Chain of Custody</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">check_circle</span>
<span className="text-sm font-medium text-white">SOC2 &amp; HIPAA Compliant Logs</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">check_circle</span>
<span className="text-sm font-medium text-white">Dedicated Success Manager</span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow-xl" onClick={onCtaClick}>Contact Sales</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-bold mb-2">Infrastructure</h3>
<p className="text-sm text-secondary">Global cold-chain logistics and hardware manufacturers.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-extrabold text-on-surface tracking-tight">Custom</span>
</div>
<p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">Volume-Based Pricing</p>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">White-label Firmware Integration</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Custom Telemetry Nodes</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Edge Computing Support</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-xl">check_circle</span>
<span className="text-sm font-medium text-on-surface-variant">Annual Infrastructure Audit</span>
</div>
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
<th className="p-6 text-sm font-bold text-on-surface uppercase tracking-wider">Security Module</th>
<th className="p-6 text-sm font-bold text-center">Clinical</th>
<th className="p-6 text-sm font-bold text-center">Enterprise</th>
<th className="p-6 text-sm font-bold text-center">Infrastructure</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
<tr>
<td className="p-6">
<div className="font-bold text-on-surface">Data Redundancy</div>
<div className="text-xs text-secondary mt-1">Geographically distributed cloud backups</div>
</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
</tr>
<tr>
<td className="p-6">
<div className="font-bold text-on-surface">Hardware Vaulting</div>
<div className="text-xs text-secondary mt-1">Physical sensor encryption keys</div>
</td>
<td className="p-6 text-center text-secondary">—</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
</tr>
<tr>
<td className="p-6">
<div className="font-bold text-on-surface">Audit Trail Ledger</div>
<div className="text-xs text-secondary mt-1">Immutable blockchain-based records</div>
</td>
<td className="p-6 text-center text-secondary">—</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
</tr>
<tr>
<td className="p-6">
<div className="font-bold text-on-surface">Custom Integrations</div>
<div className="text-xs text-secondary mt-1">Webhooks and enterprise middleware</div>
</td>
<td className="p-6 text-center text-secondary">—</td>
<td className="p-6 text-center text-on-surface-variant font-medium">Limited</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-tertiary">check_circle</span></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

<div className="md:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
<img alt="Cryogenic facility laboratory" className="absolute inset-0 w-full h-full object-cover" data-alt="Modern cryogenic storage facility with liquid nitrogen tanks and high-tech digital monitoring interfaces in a clinical laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABj04Lls4sDC42ADBR6VCETMPcglRn3-0UHhYGCCIZvT5KCAa0XfN1LbjVkinXNWFqHaQMkwWYEttp4JO4N6pwoLeKShhCKZWhyyM1IwJiFWUX3iJMq2mwqVnjkvSSm9SKo_7UVLlHFw6RI8FbJJKWWQAGjB0BORY1kfUrzlJ2vVOO8jF2JPht1kVQ_regnxogUbetthTphs59Pr-QlAqx0WfKKf26kH7f0SYbuykXeofqy15wU2U9jLVXyWixykMyxWZrfgBsI4w"/>
<div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
</div>

<div className="md:col-span-7 bg-surface-container-high rounded-[2.5rem] p-12 flex flex-col justify-center">
<h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">Secure Your Infrastructure Before the <span className="text-primary">Next Audit.</span></h2>
<p className="text-lg text-secondary mb-10 leading-relaxed">
                        Our specialized engineering team conducts deep-dive technical audits of your cold-chain infrastructure. We identify critical failure points in sensor arrays and data transmission protocols.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg scale-102 hover:transition-transform duration-200 shadow-xl shadow-primary/25" onClick={onCtaClick}>Schedule an Infrastructure Audit</button>
<button className="px-8 py-4 rounded-xl bg-white text-on-surface font-bold text-lg border border-outline-variant hover:bg-surface-container-lowest transition-colors">Download Sample Report</button>
</div>
</div>
</div>
</section>
</main>
  );
};

export default PricingView;
