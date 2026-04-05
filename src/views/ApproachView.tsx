import React, { useState } from 'react';

interface ApproachViewProps {
  onCtaClick?: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      label: 'Pharmaceuticals & Healthcare',
      icon: 'vaccines',
      headline: 'A contaminated batch with clean paperwork is a tragedy waiting to happen.',
      body: 'CryoTrack embeds CDSCO and FSSAI compliance thresholds directly into every shipment\'s rules — so compliance isn\'t checked at the end, it\'s enforced throughout. From manufacturer to pharmacy, every step is verified and every actor is accountable.',
      quote: '"From manufacturer to pharmacy — every step verified, every actor accountable."',
    },
    {
      label: 'Food & Agriculture',
      icon: 'agriculture',
      headline: 'Your crop leaves the farm in perfect condition. What happens on the truck is invisible to you.',
      body: 'With CryoTrack, every transit leg is temperature-verified, route-validated, and dispute-ready — giving exporters and distributors a tamper-proof record from farm to shelf. Stop losing margins to supply chain failures you can\'t even see.',
      quote: '"Stop losing margins to supply chain failures you can\'t even see."',
    },
    {
      label: 'Cold Chain Logistics',
      icon: 'local_shipping',
      headline: 'Your reefer van\'s sensor says it was fine. But was it?',
      body: 'CryoTrack cross-references your telemetry against real-time weather data and transit duration — catching failures that manual logs never would. Every temperature record becomes a verified, time-stamped proof, not a figure someone typed in.',
      quote: '"The cold chain is only cold if someone can prove it."',
    },
  ];

  return (
    <main className="pt-32">

      {/* HERO — WHAT CRYOTRACK DOES */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block">India's First Supply Chain Trust Protocol</span>
            <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-8 leading-tight">
              We Don't Just Record What Happens. <span className="text-gradient">We Make Sure What's Recorded Is True.</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              CryoTrack is not a monitoring tool. It's a trust protocol — a system where faking data is harder than doing the right thing, for every actor in the chain.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-surface-container px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <span className="text-sm font-semibold">100% Legally Anchored</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
                <span className="text-sm font-semibold">Works Offline</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden relative shadow-2xl">
              <img alt="Supply chain verification" className="object-cover w-full h-full mix-blend-overlay opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZiK8NrlWTUyCvjzbPoGvbQmAEeawiyxxwe0anuVJU_DJZgD1jwieDWU9p1s73lXrahwhZZOEdh9YJbP1QNRERKj-eOTGjLrtY_82Pg8aV3hI8UozCTpbD92FYRASdZheN3mzLG1pT5HW5LLHyVY3WdrP883gSd0wzk2yeIshUM0aDIgQL1HmgeS0XfoJlyzNm_AncRELpAftSk2xIzPU7R8ukeKFR80Tvjy34hvWUixelE-Tvo17PhQyjx3nYELiJEKP2Ilx6Z14" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-4/5 h-4/5 opacity-80" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" fill="none" r="80" stroke="#2563eb" strokeDasharray="4 2" strokeWidth="0.5"></circle>
                  <circle cx="100" cy="100" fill="none" r="50" stroke="#2563eb" strokeWidth="1"></circle>
                  <path d="M100 20 L100 180 M20 100 L180 100" stroke="#2563eb" strokeWidth="0.2"></path>
                  <rect className="fill-primary/20 stroke-primary" height="30" strokeWidth="1" width="30" x="85" y="85"></rect>
                  <circle className="fill-tertiary" cx="100" cy="40" r="4"></circle>
                  <circle className="fill-tertiary" cx="160" cy="100" r="4"></circle>
                  <circle className="fill-tertiary" cx="100" cy="160" r="4"></circle>
                  <circle className="fill-tertiary" cx="40" cy="100" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-tighter">Live Checkpoint</div>
              <div className="text-3xl font-bold text-primary">Verified ✓</div>
              <div className="text-[10px] text-tertiary font-bold mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span> Liability Transferred
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP HOW IT WORKS */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Supply Chain Integrity in 3 Steps</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">No new hardware required. No IT team needed. Just a process that makes honesty the easiest path.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary font-black text-lg">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Digitise at Origin</h3>
                <p className="text-on-surface-variant">Goods are logged at source — with QR codes, photo proofs, and temperature readings. This creates an unalterable digital record of the shipment. No manual estimate. No fudged logbook.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-sm">qr_code_scanner</span> Scan. Log. Lock.
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-container p-10 rounded-2xl shadow-lg text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-black text-lg">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Verify at Every Handoff</h3>
                <p className="text-blue-100">At each transfer point, the receiving actor scans, verifies, and either accepts or flags. Our AI checks anomalies before acceptance. The ledger records everything — permanently. The moment you accept, you own the liability.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 mt-8">
                <div className="text-[10px] font-bold uppercase opacity-70 mb-2">Checkpoint Status</div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-xs font-semibold">Liability Transferred Automatically</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-transparent hover:border-primary/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-tertiary font-black text-lg">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Trace Instantly. Resolve Fairly.</h3>
                <p className="text-on-surface-variant">If something goes wrong, you know exactly where, when, and who was responsible — in seconds, not weeks. Disputes are settled with evidence, not arguments. No more "it was fine when it left us."</p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="text-sm font-bold text-tertiary">&lt; 5s trace time per incident</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRY TABS */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Built for the Industries Where Failure Is Not an Option</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Different products, different regulations, different failure modes. CryoTrack adapts to all of them.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === i ? 'bg-primary text-white shadow-md' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{ind.icon}</span>
              {ind.label}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-[2rem] p-12 shadow-sm border border-outline-variant/10">
          <h3 className="text-3xl font-bold mb-4 text-on-surface">{industries[activeTab].headline}</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-8 max-w-2xl">{industries[activeTab].body}</p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-on-surface text-xl font-medium">
            {industries[activeTab].quote}
          </blockquote>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-8 my-24">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">See CryoTrack in Your Supply Chain</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Request a pilot demonstration. We'll map CryoTrack to your specific handoff points and show you exactly where liability gaps exist today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors" onClick={onCtaClick}>Request a Demo</button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">See the Platform</button>
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
