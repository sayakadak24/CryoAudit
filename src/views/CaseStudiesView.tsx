import React from 'react';

interface CaseStudiesViewProps {
  onCtaClick?: () => void;
}

const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-8 mb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary mb-6 border border-tertiary/20">
<span className="material-symbols-outlined text-[18px]" data-icon="verified" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
<span className="text-[0.6875rem] font-bold tracking-wider uppercase">Audit-Verified Results</span>
</div>
<h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter mb-6 text-on-surface">The Human Cost of <span className="text-error">Infrastructure Failure.</span></h1>
<p className="text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">Case studies aren't just about success—they are about the lessons learned from global tragedies. We build CryoTrack to ensure these failures never happen again.</p>
</div>
<div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Modern laboratory clean room with automated cryogenic storage tanks and blue atmospheric lighting, clean and professional aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgyNi4yr7GKx7afZWrsxp7YJHOEvTapcMB-N6UAtntxleEcIX8zJ7IrsQAib-DQ13IvJ-jTKJCpd_OjraS1hJmYpOAOgFpUAwGzP9NroCszbC0VNObQc8JiV23CiuoO5gkcz59eKkP5I4kVqnvEFao62T38jnnno2d_0HTLP7Oao0YK024vIZ_Zz1V98y7dlsr0OLpuPe1eU-C5BH2OuFKlJr4NCCD03YoHs3G4FMpnesi86BZM0AZJrfnXvLB9r4T_iN2xwky4"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 mb-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_24px_48px_rgba(11,28,48,0.04)]">
<div className="text-primary font-headline text-4xl font-extrabold mb-1 tracking-tight">99.9%</div>
<div className="text-on-surface-variant text-sm font-medium">Stability Rating</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_24px_48px_rgba(11,28,48,0.04)]">
<div className="text-tertiary font-headline text-4xl font-extrabold mb-1 tracking-tight">0.00%</div>
<div className="text-on-surface-variant text-sm font-medium">Incident Rate</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_24px_48px_rgba(11,28,48,0.04)]">
<div className="text-primary font-headline text-4xl font-extrabold mb-1 tracking-tight">1.2M+</div>
<div className="text-on-surface-variant text-sm font-medium">Daily Telemetry Pings</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_24px_48px_rgba(11,28,48,0.04)]">
<div className="text-primary font-headline text-4xl font-extrabold mb-1 tracking-tight">&lt;3ms</div>
<div className="text-on-surface-variant text-sm font-medium">Alert Latency</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 mb-24">
<div className="bg-surface-container-low rounded-[2rem] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
<div className="text-error font-bold text-sm tracking-[0.2em] mb-4 uppercase">Tragedy Analysis: The Gambia 2022</div>
<h2 className="text-[2.5rem] leading-tight font-extrabold mb-6">The Fatal Entry: When Manual Logs Cost 70 Lives.</h2>
<p className="text-on-surface-variant mb-8 text-lg leading-relaxed">A standard shipment of pediatric medication became a death sentence due to falsified temperature logs and fragmented oversight. This is why we eliminate the human element in compliance.</p>
<div className="flex gap-12 mb-10">
<div>
<span className="block text-2xl font-bold text-on-surface">-196°C</span>
<span className="text-sm text-slate-500">Maintained Temp</span>
</div>
<div className="w-px bg-outline-variant h-full opacity-20"></div>
<div>
<span className="block text-2xl font-bold text-on-surface">14,200</span>
<span className="text-sm text-slate-500">Vials Monitored</span>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-outline-variant/10">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Portrait of a female scientist in a white lab coat looking focused in a high-tech lab setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOq7r3ncRpK85fVyKiYj063KdpGRiAX4PXzSKHyN3c--IluaaApdwL_dQQfs-r6AqWQjNDaAtF5NWDtcVx5_rmDWKN7GqrHyFMJT6KgI7Kvi2FXD5ndeJHo0s9gMB7JhylYoliVO2csiC3KRjChNEPoxsXNxgmm626N4mghL368h8d9zmc4UjwvzAoQSEdFwFgIJRFtGlFyJGJpiBwzYLfj1WWGq3aWNzdeWu6LXqrGf19CRD0QDFeNGXP-vt5rR85h-WczFgDnFk"/>
<div>
<p className="text-sm font-medium text-on-surface italic">"The Gambia tragedy wasn't a failure of medicine; it was a failure of data integrity. CryoTrack's mission is to move from reactive blame to proactive prevention."</p>
<p className="text-[0.6875rem] text-slate-500 font-bold uppercase tracking-wider mt-1">Global Health Safety Commission — 2023 Report</p>
</div>
</div>
</div>
<div className="lg:col-span-2 relative min-h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="Close up of high-tech stainless steel cryogenic storage containers with nitrogen frost and digital display panels" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCp_wSrCKzifALBToGqtpkvNNmrzEspISivihnJMi66aPnapwwgqyfgy2JkEwKXmI2Z2F7fUwWf4ZuH5jXdQ7O9wfnCtYD4gFyBgWOyGZvQVct6_MzaY-P0Z1Nd7czfRNOF7agZLrjolOxKH5gddxplf-TCIGC9SA07cxMhznyR235RSkS4nmCHNv5HeNmYNP01OA6rZFECZaHEoqHzCLc7hqIPXHJix66BAEDmJ0qeBaKAuuBmOKrg4HHuSKtmsttqWx1GwpEL00"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 mb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-7 bg-surface-container-high rounded-[2rem] p-12 flex flex-col justify-between">
<div>
<div className="inline-block px-4 py-1 bg-error/10 backdrop-blur-sm rounded-full text-[0.6875rem] font-bold text-error mb-6">RAMNAGAR 2020: A CALL FOR AUTOMATION</div>
<h3 className="text-3xl font-bold mb-4 tracking-tight">Breaking the "Black Hole" of Data.</h3>
<p className="text-on-surface-variant leading-relaxed">Investigation into the Ramnagar incident revealed a complete loss of visibility for 14 hours. We built the L-Band Satellite mesh specifically to illuminate these digital blind spots.</p>
</div>
<div className="mt-12">
<img className="w-full h-48 object-cover rounded-2xl shadow-lg mb-6" data-alt="Digital representation of complex data visualization showing blue glowing lines and hexagonal patterns representing security" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHE7w36hVBpJZsPTKSYQgQ13zjWTmPosARA5btqtodUmjjsHQ9Q24WrbW9Z-S9oibZVidBGdcOEwgBd5e7YrfFD-w6WzSX0qSzdk21ay3geaJJ1seiXs95j2bazEeC1pCDop_wOROXkxlDC37dXXRhemzh3QrM3P3_DpkhJjaxaFaEkB9QCtGaM8y5__UqdzVFIHJGtg62opc1qNNSSAcZYuWrajLGWABttKPxZUGp0HHt6sGqCVrW5iRbcFXgBhVAzUSW7IsWyuw"/>
<button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Read Full Report <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="md:col-span-5 grid grid-rows-2 gap-8">
<div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden group">
<div className="relative z-10">
<h4 className="text-xl font-bold mb-2">Omni-Channel Visibility</h4>
<p className="text-on-primary/80 text-sm">Real-time tracking across sea, air, and last-mile road transport.</p>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl rotate-12 group-hover:rotate-0 transition-transform duration-500" data-icon="satellite_alt">satellite_alt</span>
</div>
<div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-primary/5">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-tertiary text-4xl" data-icon="shield_lock" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
<div className="text-right">
<span className="text-xs font-bold text-slate-400 block uppercase tracking-tighter">Status</span>
<span className="text-tertiary text-sm font-bold">100% Secure</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mt-4">Every BIO-GENIX container is now equipped with our proprietary 'Seal-Sense' digital lock technology.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-8">
<div className="bg-gradient-to-r from-primary to-primary-container rounded-[2rem] p-12 lg:p-20 text-center text-on-primary relative overflow-hidden">
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tighter">Your Assets Shouldn't Be a Statistic.</h2>
<p className="text-lg opacity-90 mb-10">Stop relying on hope and manual entry. Join the network of institutions that prioritize human life through automated trust.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform" onClick={onCtaClick}>Request a Security Audit</button>
<button className="bg-primary-container border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Speak with an Engineer</button>
</div>
</div>

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
</div>
</section>
</main>
  );
};

export default CaseStudiesView;
