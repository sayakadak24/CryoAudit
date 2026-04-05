import React from 'react';

interface ProblemViewProps {
  onCtaClick?: () => void;
}

const ProblemView: React.FC<ProblemViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

<section className="px-8 py-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center space-x-2 bg-error-container/30 px-3 py-1 rounded-full mb-6">
<span className="material-symbols-outlined text-error text-sm" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
<span className="text-error font-semibold text-[0.6875rem] tracking-wider uppercase">Systemic Vulnerability</span>
</div>
<h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        The Integrity Gap in <br/><span className="text-gradient-primary">Global Supply Chains</span>
</h1>
<p className="text-lg text-secondary leading-relaxed max-w-2xl mb-10">
                        Traditional logistics are failing. With only 6% of the market digitized and 90% in the unorganized sector, the cost of manual oversight is measured in human lives.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-center p-4 bg-surface-container-low rounded-xl">
<span className="text-4xl font-bold text-primary mr-3">40%</span>
<span className="text-xs text-secondary font-medium leading-tight">Agri production loss across the supply chain.</span>
</div>
<div className="flex items-center p-4 bg-surface-container-low rounded-xl">
<span className="text-4xl font-bold text-primary mr-3">1-5%</span>
<span className="text-xs text-secondary font-medium leading-tight">Manual entry error rate in critical logbooks.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close-up of a frosted medical storage unit with digital temperature readout flashing an error red light in a dark lab environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm99nnfCItYvpwEiSEYtojY3VclMAyLuKP_KNlDp8rcSfolIpKHuv0zww6M1OfWMywYRBaAvX8LTd2kGfZohzKxC122A_33Qb7xXJt7MhOFH8251GE5PEz3zY4-CgEsy4BwlXf5PBgYAsp4df8XjAS8i3oMDzUy8WP23yeZD_a6PKC9NjE-grQJhqEogILLVmcm2I8baFI0ZDwgm6v-tgCXLgx5uQ0g8_83-j8HAlWAcKKvFvYLZy1TNr30NgSym-Ky--ZDHBD1nk"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
<span className="material-symbols-outlined text-error block mb-2" style={{fontVariationSettings: "'FILL' 1"}}>thermostat</span>
<p className="text-sm font-semibold text-on-surface">Thermal Excursion Detected</p>
<p className="text-xs text-secondary mt-1 italic">Last sync: 14 minutes ago via legacy logger</p>
</div>
</div>
</div>
</section>

<section className="somber-gradient py-24 px-8 text-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Traditional Methods Fail</h2>
<p className="text-slate-400">Legacy systems rely on reactive data. CryoTrack identifies the structural weaknesses that lead to asset catastrophic failure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 relative border border-white/5 overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-red-400 text-5xl mb-6">gavel</span>
<h3 className="text-2xl font-bold mb-4">The GIGO Breach</h3>
<p className="text-slate-300 leading-relaxed max-w-md">
                                "Garbage In, Garbage Out." Manual data entry allows for falsified logs. Historically, this has led to tragedies like <span className="text-white font-bold">The Gambia (2022)</span> and <span className="text-white font-bold">Ramnagar (2020)</span>, where batch integrity was compromised at the source.
                            </p>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
<img className="w-full h-full object-cover" data-alt="Abstract 3D heat map visualization showing turbulent red waves of temperature fluctuation against a dark grid background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdnwxyoDKPx0MPpY7NY8QAKSAZs2o4PKShXUE00qsS7NgoYsaXavCEBfy20-kzR2VADS-6CE7_GCUbaix4rsQ2FTX0uy_avHWpMqwUO2Sd9Sv9Vl20E2EXSo-jlijAAtnfaZDhHFpvJCcUJ4MdqmAcjvYjJ8g_7Be-eeNL0WmnVAQA7JG195zjYcKVB0cxv3C46L0SeHi-6t7c__EkoynWC5-ouZyUmpFaXlyrr705fA-l2k9mN5VjwNjWBVKCrW4HbI4F4d8UpjM"/>
</div>
</div>

<div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5">
<span className="material-symbols-outlined text-blue-400 text-5xl mb-6">leak_remove</span>
<h3 className="text-2xl font-bold mb-4">The Data "Black Hole"</h3>
<p className="text-slate-300 leading-relaxed text-sm">
                            Hand-offs between couriers, airports, and labs create blind spots where accountability vanishes. If data isn't continuous, the chain of custody is broken.
                        </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5">
<span className="material-symbols-outlined text-amber-400 text-5xl mb-6">assignment_late</span>
<h3 className="text-2xl font-bold mb-4">Zero Accountability</h3>
<p className="text-slate-300 leading-relaxed text-sm">
                            When an asset fails, legacy systems make it impossible to pinpoint the exact moment or person responsible. Compliance becomes a game of guesswork.
                        </p>
</div>

<div className="md:col-span-2 bg-slate-900/60 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/5">
<div className="flex-1">
<h3 className="text-2xl font-bold mb-4">Fragmented Infrastructure</h3>
<p className="text-slate-300 leading-relaxed">
                                Most companies use a patchwork of different sensors, platforms, and manual spreadsheets. This fragmentation is where biological assets go to die.
                            </p>
</div>
<div className="w-full md:w-64 h-40 bg-slate-800 rounded-2xl flex items-center justify-center p-4 overflow-hidden relative">
<img className="absolute inset-0 w-full h-full object-cover opacity-40" data-alt="Top down view of a complex shipping warehouse with many conveyor belts crossing over each other representing fragmented logistics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ34YGyk0zTW57Z0lMZrzohqhTkXhK5O3raAXzxszeQ0T61INOY6TEW31N3V3q6TcXqR74xoF80LMA5AtXzgjxyzPKDoNxvXttuCbjSX8c8XK0h9M9joGIftJf-dfuWy8Ma3abqsPwOCnriK5Uuof5CwNc9e5rM8ZtWJ-mVEOwuc5a5_kLTfzMgxneCtoQfeW-rnKrOIsqpoL_Ezxssu1DLzImCMap2OQzD6z_PiHyByfNxT59iKU_bMZigAEWpAxfLEPe77GqP74"/>
<span className="material-symbols-outlined text-6xl text-slate-500 relative z-10">hub</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface-container-low">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<h2 className="text-3xl font-bold mb-8">The Cost of Silence</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Scientific Setbacks</h4>
<p className="text-sm text-secondary">Years of research destroyed in a single weekend due to a faulty dry ice shipment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Regulatory Fines</h4>
<p className="text-sm text-secondary">Incomplete audit trails lead to massive penalties during FDA or EMA inspections.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Patient Risk</h4>
<p className="text-sm text-secondary">The ultimate cost: life-saving therapies that fail to reach the patient in viable condition.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 bg-white p-8 rounded-[2rem] shadow-[0px_24px_48px_rgba(11,28,48,0.06)]">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-bold tracking-widest uppercase text-slate-400">Vulnerability Audit</span>
<span className="material-symbols-outlined text-error">analytics</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>REAL-TIME VISIBILITY</span>
<span className="text-error">CRITICAL GAP</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-error w-[15%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>AUDIT TRAIL INTEGRITY</span>
<span className="text-error">FAILING</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-error w-[30%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>RESPONSE TIME</span>
<span className="text-slate-400">LATENT (24H+)</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-[45%]"></div>
</div>
</div>
</div>
<div className="mt-10 p-4 bg-primary/5 rounded-xl border border-primary/10">
<p className="text-xs font-medium text-primary">Traditional cold chain logic relies on 'Mean Kinetic Temperature'. We believe this is a dangerous abstraction that masks critical individual excursions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 text-center max-w-4xl mx-auto">
<h2 className="text-4xl font-extrabold mb-6">Stop guessing. Start knowing.</h2>
<p className="text-lg text-secondary mb-10">The era of passive logging is over. It’s time to secure your biological future with active intelligence.</p>
<button className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform">
                See Our Approach
            </button>
</section>
</main>
  );
};

export default ProblemView;
