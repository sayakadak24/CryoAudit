import React from 'react';

interface PlatformViewProps {
  onCtaClick?: () => void;
}

const PlatformView: React.FC<PlatformViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

<section className="relative min-h-[921px] flex items-center px-8 overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container/10 text-tertiary-container rounded-full text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                        Digital Guardian Verified
                    </div>
<h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
                        Unified <br/><span className="gradient-text">Trust Protocol.</span>
</h1>
<p className="text-lg text-secondary leading-relaxed max-w-lg mb-8">
                        The Operating System for Modern Logistics. Monitor thousands of telemetry nodes with sub-second latency and automated evidence generation.
                    </p>
<div className="flex gap-4">
<button className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-102 transition-transform">
                            Enter Dashboard <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold hover:bg-surface-container-highest transition-colors">
                            Watch Simulation
                        </button>
</div>
</div>
<div className="relative">

<div className="relative z-20 glass-card p-6 rounded-xl shadow-2xl border border-white/40">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="font-bold text-sm">LIVE SENSOR FEED: HK-992</span>
</div>
<div className="text-xs font-mono text-slate-500">LAT: 22.3193° N | LON: 114.1694° E</div>
</div>
<img className="w-full rounded-lg shadow-inner mb-6" data-alt="High-tech data visualization dashboard with blue neon UI elements, orbital satellite maps, and real-time biometric telemetry charts in a dark mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsReshr6xq1L64-gaItkC7DiE57E4Vem_cPcceS2reO-0KS6UTCvQkgMamVNpoXiOPTVc6wTlZ4yGOkrIcIRC5EOoEm-aIhL7vVGPMihQeTXqahpPunDrZLHyj7omrKe-XkChDcSJN5Ki08SfgNOf3J2yc0pKto--DXAG2uo48K4g5_UmhdbOZFVZeS6Lw8hLh7-ZcSfBUurTdTcWTt-1fNf_uDr5BgAyfrVl25EBwOlEfAtCi26XL57z9DNLqu5pwl7zGgCsZYs"/>
<div className="grid grid-cols-3 gap-4">
<div className="p-3 bg-surface-container rounded-lg">
<div className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">Internal Temp</div>
<div className="text-xl font-headline font-bold text-primary">-196.2°C</div>
</div>
<div className="p-3 bg-surface-container rounded-lg">
<div className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">Nitrogen Level</div>
<div className="text-xl font-headline font-bold text-tertiary">98.4%</div>
</div>
<div className="p-3 bg-surface-container rounded-lg">
<div className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">G-Force Alert</div>
<div className="text-xl font-headline font-bold text-secondary">0.02g</div>
</div>
</div>
</div>

<div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-tertiary/10 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-headline font-bold mb-4">A Zero-Loss Journey</h2>
<p className="text-secondary max-w-2xl mx-auto">From laboratory cryogenic storage to the surgical theater, CryoTrack maintains a digital handshake at every stage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
<h3 className="text-2xl font-headline font-bold mb-2">01. Lab Extraction</h3>
<p className="text-sm text-slate-500">Automated RFID tagging and initial molecular health scan.</p>
</div>
<img className="mt-8 rounded-lg group-hover:scale-105 transition-transform duration-500 h-48 object-cover" data-alt="Close-up of a robotic arm in a futuristic white laboratory handling a glowing blue cryogenic vial with frost and vapor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCsk7Ww-MqMdcn-G6J9nO5bSrXMnhbL-9MiJdOSajlWUbb9a0ThbATZjjCn3b_6_lvkNzqR5wde-Ldwwd6ZO7UXo635uKR47PDx9cTCX45FokWbuqceLxkculB3nBcFBbz6LyPMVZ9vLX8Bj2PqySruZ7O9XOxGuM0SU0JKWMtVqzXX6QYznQn4BNxCW2FYup1Kr7EygPLCWAytvCBsn7MWO32yqXAG1WNNucwj47HCef5aT_qqWPsYNw0Fwqnqze5ZqEKMOWpac"/>
</div>

<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="flex justify-between items-start">
<div className="max-w-sm">
<span className="material-symbols-outlined text-primary text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
<h3 className="text-2xl font-headline font-bold mb-2">02. Autonomous Global Transit</h3>
<p className="text-sm text-slate-500">Live telemetry sensors embedded in CryoPods communicate with low-earth orbit satellites to ensure continuous tracking even in signal-dead zones.</p>
</div>
<div className="hidden lg:block text-right">
<div className="text-xs font-mono text-primary font-bold">STATUS: EN ROUTE</div>
<div className="text-3xl font-headline font-bold">ETA: 02:14:55</div>
</div>
</div>
<div className="mt-8 h-64 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center relative">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A sleek white autonomous high-tech transport truck driving on a futuristic highway at night, glowing blue highlights on the chassis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41prk2hIk6COv4VfGXP4ccmlYfjP0-tqCB0LbIzs0UHKIvICNPh_lp_8Uiyup_WBsBC74UeLwVUjhHcZkSLSRx0f7ESxA_KpU9FKUQR0wmpKxDU-QrNilkhdhcHo3923a5Qk_q9Q2JAi2HR7p16CB7OKWxgZZ4SHIJ_1zHweqtcdEMMzHBCakTr5hPrm24LUsVhbiRmBLoqmhBhFQB1WXPlaRcsYlp08cdJwU1sI4chs4QXDkqnsgNe3Aq9bB0AqDQjmH0A9WSlU"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

<div className="absolute bottom-4 left-4 right-4 flex gap-2">
<div className="flex-1 h-1 bg-primary/40 rounded-full overflow-hidden">
<div className="h-full bg-primary w-2/3"></div>
</div>
<div className="flex-1 h-1 bg-primary/40 rounded-full"></div>
<div className="flex-1 h-1 bg-primary/40 rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-7 bg-primary text-white rounded-xl p-8 flex flex-col justify-between relative group">
<div className="z-10">
<span className="material-symbols-outlined text-white text-4xl mb-4">medical_services</span>
<h3 className="text-2xl font-headline font-bold mb-2">03. Clinical Integration</h3>
<p className="text-white/80 max-w-md">The final handshake. Our system unlocks the CryoPod only when biometric verification from the receiving surgical team is confirmed.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
<span className="material-symbols-outlined text-[200px]" style={{fontVariationSettings: "'wght' 100"}}>lock_open</span>
</div>
</div>

<div className="md:col-span-5 bg-tertiary text-white rounded-xl p-8 flex flex-col items-center justify-center text-center group">
<div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 scale-110">
<span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
</div>
<h3 className="text-2xl font-headline font-bold mb-2">The Digital Guardian</h3>
<p className="text-white/80 text-sm">Always active. Always vigilant. Any deviation triggers an immediate emergency response protocols.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2">
<div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold mb-6">SENSOR NETWORK</div>
<h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">Sophisticated <br/>Telemetry Sensors.</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>thermostat</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Thermal Precision</h4>
<p className="text-slate-500 text-sm">Sensors accurate to within 0.001°C, monitoring thermal gradients across the storage surface to prevent micro-thawing.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>vibration</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">G-Force &amp; Orientation</h4>
<p className="text-slate-500 text-sm">Real-time vibration and impact monitoring ensures delicate cellular structures remain undisturbed during flight or transport.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>cell_tower</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">L-Band Satellite Redundancy</h4>
<p className="text-slate-500 text-sm">Triple-redundant communication arrays ensure your assets never go offline, even in the middle of the Pacific.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="bg-slate-900 rounded-3xl p-4 shadow-3xl overflow-hidden aspect-square flex items-center justify-center">
<img className="w-full h-full object-cover rounded-2xl opacity-80" data-alt="Macro 3D render of a high-tech metallic sensor device with circular glowing blue light rings and intricate internal microchips, extremely detailed industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnVL7GyIO0_afaZuBddgSEKI7Ymz7SfpHeg2GxLJAxbzIdr-8t3GDWsEoAE_sMtJOuPVdkRP4LLZOaubo9qsRkJKUL5O5OtDAJ8LQUbXmcnSIxqgxNKypjquYelKAhVwC7UjrakjxMSpxUsShq9JGzq7lkc0s1hEhWR9qYjhMTJAZW0mILcn96x-jy36zE6m3l1H1CfPUkEj0Ia8wPLKZzZJuBK2FnfAb-uVo9KDJlLEe3vIUvhHOQbRukql6PB4Ti_4Qum7NBDY"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>

<div className="absolute top-10 left-10 p-4 glass-card rounded-xl border border-white/20 shadow-xl w-48">
<div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Signal Strength</div>
<div className="flex items-center gap-1">
<div className="w-1 h-4 bg-tertiary rounded-full"></div>
<div className="w-1 h-6 bg-tertiary rounded-full"></div>
<div className="w-1 h-3 bg-tertiary rounded-full"></div>
<div className="w-1 h-5 bg-tertiary rounded-full"></div>
<span className="ml-2 font-headline font-bold text-on-surface">-42 dBm</span>
</div>
</div>
<div className="absolute bottom-10 right-10 p-4 glass-card rounded-xl border border-white/20 shadow-xl w-48">
<div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Stability Index</div>
<div className="text-2xl font-headline font-bold text-primary">99.98%</div>
<div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full w-[99.98%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8">
<div className="max-w-5xl mx-auto bg-surface-container-highest rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 tracking-tight">Ready to fortify your <br/>biological supply chain?</h2>
<p className="text-secondary text-lg mb-12 max-w-xl mx-auto">Join the world's leading fertility clinics and research hospitals already using CryoTrack.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-10 py-5 bg-primary text-white rounded-xl font-bold shadow-2xl hover:scale-105 transition-transform" onClick={onCtaClick}>Request Platform Demo</button>
<button className="px-10 py-5 bg-white text-primary rounded-xl font-bold shadow-md hover:bg-slate-50 transition-colors">Download Security Whitepaper</button>
</div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -z-0"></div>
</div>
</section>
</main>
  );
};

export default PlatformView;
