import React from 'react';

interface ApproachViewProps {
  onCtaClick?: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-32">

<section className="max-w-7xl mx-auto px-8 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block">The Digital Guardian Philosophy</span>
<h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-8 leading-tight">
                        Built for <span className="text-gradient">Scale</span>. Engineered for <span className="text-gradient">Integrity</span>.
                    </h1>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                        Logistics is chaos. CryoTrack brings order. Our multi-layered shield combines on-field mobile evidence with Gov-Oracle validation to eliminate paper trails and fraud.
                    </p>
<div className="flex gap-4">
<div className="flex items-center gap-3 bg-surface-container px-5 py-3 rounded-xl">
<span className="material-symbols-outlined text-tertiary" data-weight="fill">verified_user</span>
<span className="text-sm font-semibold">100% Legally Anchored</span>
</div>
<div className="flex items-center gap-3 bg-surface-container px-5 py-3 rounded-xl">
<span className="material-symbols-outlined text-primary" data-weight="fill">precision_manufacturing</span>
<span className="text-sm font-semibold">0% Manual Data Entry</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden relative shadow-2xl">
<img alt="Laboratory automation" className="object-cover w-full h-full mix-blend-overlay opacity-60" data-alt="Close-up of a high-tech robotic arm in a sterile blue-lit laboratory setting handling cryogenic vials with precise mechanical movements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZiK8NrlWTUyCvjzbPoGvbQmAEeawiyxxwe0anuVJU_DJZgD1jwieDWU9p1s73lXrahwhZZOEdh9YJbP1QNRERKj-eOTGjLrtY_82Pg8aV3hI8UozCTpbD92FYRASdZheN3mzLG1pT5HW5LLHyVY3WdrP883gSd0wzk2yeIshUM0aDIgQL1HmgeS0XfoJlyzNm_AncRELpAftSk2xIzPU7R8ukeKFR80Tvjy34hvWUixelE-Tvo17PhQyjx3nYELiJEKP2Ilx6Z14"/>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-4/5 h-4/5 opacity-80" viewBox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="#2563eb" stroke-dasharray="4 2" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" fill="none" r="50" stroke="#2563eb" strokeWidth="1"></circle>
<path d="M100 20 L100 180 M20 100 L180 100" stroke="#2563eb" strokeWidth="0.2"></path>
<rect className="fill-primary/20 stroke-primary" height="30" strokeWidth="1" width="30" x="85" y="85"></rect>
<circle className="fill-tertiary glow-dot" cx="100" cy="40" r="4"></circle>
<circle className="fill-tertiary glow-dot" cx="160" cy="100" r="4"></circle>
<circle className="fill-tertiary glow-dot" cx="100" cy="160" r="4"></circle>
<circle className="fill-tertiary glow-dot" cx="40" cy="100" r="4"></circle>
</svg>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl border border-white/20">
<div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tighter">Live Telemetry</div>
<div className="text-3xl font-bold text-primary">-196.2°C</div>
<div className="text-[10px] text-tertiary font-bold mt-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span> STABLE OPS
                        </div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-16 text-center">
<h2 className="text-3xl font-bold mb-4">Architectural Integrity</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Our multi-layered approach ensures that no single point of failure can ever compromise a specimen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6" data-weight="fill">shield_with_heart</span>
<h3 className="text-2xl font-bold mb-4">Proactive Monitoring</h3>
<p className="text-on-surface-variant max-w-md">Our AI doesn't just watch for failure; it predicts it. By analyzing micro-fluctuations in thermal insulation efficiency, we detect potential vacuum loss weeks before it happens.</p>
</div>
<div className="mt-12 flex items-end justify-between relative z-10">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-primary"></div>
</div>
<span className="text-[10px] font-bold text-primary">VACUUM INTEGRITY</span>
</div>
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-tertiary"></div>
</div>
<span className="text-[10px] font-bold text-tertiary">THERMAL DRIFT</span>
</div>
</div>
<span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Explore Engine <span className="material-symbols-outlined text-xs">arrow_forward</span></span>
</div>

<div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
<img alt="Data visualization" className="object-cover h-full" data-alt="Abstract glowing blue data stream and network lines on a dark background representing high-speed digital information flow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaUZ97OBvXAx0t3IUa754WifLBvYz4Tc3P_CU8uNJDH3dYbS0xqoPQEvg-U-gIRYeRMAWHqxoz-lqmC8IIFMJmr8mbi2m8mxvJyLiN63ZyBa44WX563imdOC6Wf_0J5jEgqfChE1AXRb3mawH8mH1lfbYogGjsIvAMhVfI6TQLBUJ0VVLTH1Sy-0-mlqZDsLT7iLRhT-QNhX_uR0wL_OJkWMD7yGe-LLU2gzXFF0wgayDC-D_h-bSpfU-uxBD7gqLQYuhQBmyLJUk"/>
</div>
</div>

<div className="bg-gradient-to-br from-primary to-primary-container p-10 rounded-2xl shadow-lg text-white flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-6">bolt</span>
<h3 className="text-2xl font-bold mb-4">Automated Response</h3>
<p className="text-blue-100 text-sm leading-relaxed">In the event of a deviation, CryoTrack initiates immediate mitigation: valve activation, secondary cooling triggers, and cascading alerts to the exact personnel required.</p>
</div>
<div className="bg-white/10 p-4 rounded-xl border border-white/20 mt-8">
<div className="text-[10px] font-bold uppercase opacity-70 mb-2">Protocol Status</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">settings_backup_restore</span>
<span className="text-xs font-semibold">Auto-Stabilization Active</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-transparent hover:border-primary/10 transition-colors">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6" data-weight="fill">security</span>
<h3 className="text-xl font-bold mb-4">Immutable Chain of Custody</h3>
<p className="text-on-surface-variant text-sm">Every temperature check, every door opening, and every alert is logged on a private ledger. Audit-ready reports are generated in real-time, eliminating manual compliance labor.</p>
</div>

<div className="md:col-span-2 bg-surface-container-highest p-10 rounded-2xl relative overflow-hidden flex items-center gap-12">
<div className="flex-1">
<h3 className="text-2xl font-bold mb-4">Laboratory-Scale Visibility</h3>
<p className="text-on-surface-variant">View your entire facility at a glance. From global logistics to individual vial locations, our 3D mapping engine provides a digital twin of your biological assets.</p>
<button className="mt-8 px-6 py-2 border border-primary/20 rounded-xl text-primary font-bold text-sm hover:bg-primary/5 transition-colors">Launch 3D Viewer</button>
</div>
<div className="hidden lg:block w-1/3 aspect-video bg-white/40 rounded-xl border border-white/60 relative">

<div className="absolute inset-0 flex items-center justify-center p-4">
<svg className="w-full h-full" viewBox="0 0 100 60">
<path d="M10 50 Q 30 10, 50 40 T 90 20" fill="none" stroke="#2563eb" strokeWidth="2"></path>
<circle cx="10" cy="50" fill="#2563eb" r="2"></circle>
<circle cx="90" cy="20" fill="#006242" r="2"></circle>
<text className="fill-slate-500" font-family="Inter" font-size="3" x="12" y="55">Origin</text>
<text className="fill-tertiary font-bold" font-family="Inter" font-size="3" x="75" y="15">Safe Arrival</text>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="h-48 bg-surface-container rounded-2xl p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary">sensors</span>
<div>
<div className="text-xs font-bold text-slate-500">EDGE SENSORS</div>
<div className="text-lg font-bold">Redundant I/O</div>
</div>
</div>
<div className="h-64 bg-primary text-white rounded-2xl p-6 flex flex-col justify-between">
<span className="material-symbols-outlined">hub</span>
<div>
<div className="text-xs font-bold text-blue-200">CENTRAL CORE</div>
<div className="text-lg font-bold">Neural Gateway</div>
</div>
</div>
</div>
<div className="space-y-4 pt-12">
<div className="h-64 bg-surface-container-highest rounded-2xl p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-tertiary">cloud_done</span>
<div>
<div className="text-xs font-bold text-slate-500">CLOUD LAYER</div>
<div className="text-lg font-bold">Global Sync</div>
</div>
</div>
<div className="h-48 bg-surface-container rounded-2xl p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary">smartphone</span>
<div>
<div className="text-xs font-bold text-slate-500">END USER</div>
<div className="text-lg font-bold">Instant UI</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl font-bold mb-6">The 3-Layer Shield</h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold border border-primary/5">01</div>
<div>
<h4 className="text-lg font-bold mb-2">Hardware-Integrated Sensors</h4>
<p className="text-on-surface-variant text-sm">We don't just stick sensors on tanks. Our hardware integrates directly with the cryo-vessel’s architecture to monitor internal vacuum pressures and liquid levels with surgical accuracy.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold border border-primary/5">02</div>
<div>
<h4 className="text-lg font-bold mb-2">Proprietary Mesh Network</h4>
<p className="text-on-surface-variant text-sm">Data is transmitted via a sub-GHz mesh network that penetrates industrial concrete and steel. No Wi-Fi dependencies. No downtime. Just constant connectivity.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary font-bold border border-primary/5">03</div>
<div>
<h4 className="text-lg font-bold mb-2">The Guardian AI Engine</h4>
<p className="text-on-surface-variant text-sm">Our server-side engine processes thousands of data points per second, identifying the subtle thermal signatures of hardware fatigue before failure occurs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 my-24">
<div className="bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-16 text-center text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl font-bold mb-6">Experience the Future of Asset Protection</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">See how CryoTrack’s architectural approach can transform your laboratory’s risk profile and operational efficiency.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors" onClick={onCtaClick}>Request Technical Deep-Dive</button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">View Platform Demo</button>
</div>
</div>

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
</div>
</section>
</main>
  );
};

export default ApproachView;
