import React from 'react';

interface HomeViewProps {
  onCtaClick?: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl aspect-[21/9] mb-12 rounded-[2rem] overflow-hidden bg-surface-container-low shadow-[0px_24px_48px_rgba(11,28,48,0.08)]">
          <img className="w-full h-full object-cover" data-alt="Futuristic supply chain warehouse with glowing data nodes, India logistics map, blue cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9s75Yb_KH1wGgCuVSddeHKE8tf21tXv9RYv4LCUqD_dFNyNYujESNv9c0CkeRee2_1fHndYUY5vVRTjvoRek4auWqb1rYnQXLYYKQ42p1dlAJan8xX3Rpm9mOawZ7df2pAYhAp4BLmDH0FKOy-U1I2_G6S1PbQOMca9NS6gZURqNHZLeLcxV6n-6w_znULiIriThIRT7b3MXAYJW2P_GXyXF-pcrsMef17a5NMCbztuqjPfiMPAiyiIqntElPH-UjaQ8polf93A" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Hyperledger Fabric</span>
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">ULIP Integrated</span>
            </div>
            <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">DPDP Act 2023 Compliant</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
            Your Supply Chain Is Only as Honest as <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Its Weakest Link.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            CryoTrack makes every handoff in your supply chain tamper-proof — from the cold storage to the last mile — so you always know who's responsible, and why.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onCtaClick} className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-lg font-bold text-primary hover:bg-surface-container-high transition-colors">
              See How It Works
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          <span className="text-sm font-bold tracking-widest uppercase">Built on Hyperledger Fabric</span>
          <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span>
          <span className="text-sm font-bold tracking-widest uppercase">FSSAI &amp; ULIP Aligned</span>
          <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span>
          <span className="text-sm font-bold tracking-widest uppercase">DPDP Act 2023</span>
          <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span>
          <span className="text-sm font-bold tracking-widest uppercase">NBF 2024</span>
        </div>
      </section>

      {/* PROBLEM STATS */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="text-6xl font-extrabold text-error mb-3">40%</div>
            <p className="text-on-surface font-bold text-lg mb-1">Food Lost Every Year</p>
            <p className="text-on-surface-variant text-sm">India's cold chain loses nearly half its agricultural produce before it reaches the shelf.</p>
          </div>
          <div className="group">
            <div className="text-6xl font-extrabold text-amber-600 mb-3">70%</div>
            <p className="text-on-surface font-bold text-lg mb-1">Still Using Manual Logs</p>
            <p className="text-on-surface-variant text-sm">Cold storages across India rely on paper records that can be faked, lost, or ignored.</p>
          </div>
          <div className="group">
            <div className="text-6xl font-extrabold text-primary mb-3">&lt;6%</div>
            <p className="text-on-surface font-bold text-lg mb-1">Logistics Digitised</p>
            <p className="text-on-surface-variant text-sm">Less than 6% of India's logistics market is currently digitised — the rest operates on trust and hope.</p>
          </div>
        </div>
      </section>

      {/* 3 CORE PILLARS */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">How It Works</span>
          <h2 className="text-4xl font-bold text-on-surface mt-2">We Don't Just Record What Happens.<br/>We Make Sure What's Recorded Is True.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
            <h3 className="text-2xl font-bold mb-4">Every Handoff is a Legal Checkpoint</h3>
            <p className="text-on-surface-variant leading-relaxed flex-grow">When goods change hands — warehouse to transporter, transporter to distributor — CryoTrack creates a cryptographic checkpoint. The moment the receiving party accepts, liability transfers. Automatically. Immutably. No disputes about "who knew what."</p>
          </div>

          <div className="bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            <h3 className="text-2xl font-bold mb-4">AI That Catches What Eyes Miss</h3>
            <p className="text-on-surface-variant leading-relaxed flex-grow">Before your team accepts a shipment, our AI cross-checks temperature data against live weather conditions, route timing, and your SLA thresholds — and explains in plain language what it found. Not an opaque score. A clear reason.</p>
          </div>

          <div className="bg-primary rounded-[2rem] p-10 flex flex-col text-white group hover:shadow-lg transition-shadow relative overflow-hidden">
            <span className="material-symbols-outlined text-white text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
            <h3 className="text-2xl font-bold mb-4">Works for a Farmer. Works for a Fortune 500.</h3>
            <p className="text-primary-fixed-dim leading-relaxed flex-grow">No enterprise software needed. A warehouse operator in Nashik uses the same network as a pharma distributor in Mumbai — through a simple mobile app that works even without internet.</p>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>

        </div>
      </section>

      {/* TRUST / GOVT FRAMEWORKS */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for India. Backed by the Right Frameworks.</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              We don't just say we're compliant. Our integrations are live, our frameworks are state-mandated, and our architecture is built for India's regulatory reality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'hub', title: 'Hyperledger Fabric', desc: 'The same enterprise blockchain used by Walmart and Maersk. Built India\'s most cost-efficient version.' },
              { icon: 'route', title: 'ULIP Integration', desc: 'We verify every shipment against e-Way Bills, VAHAN vehicle data, and FASTag route records in real time.' },
              { icon: 'policy', title: 'NBF 2024 Aligned', desc: 'CryoTrack is aligned with MeitY\'s national blockchain standards for enterprise supply chains.' },
              { icon: 'vaccines', title: 'FSSAI & CDSCO', desc: 'Compliance thresholds are embedded in every food and pharma shipment automatically.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <h4 className="font-bold text-on-surface text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL CTA */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">The Next Tragedy Won't Announce Itself.</h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">India's supply chain doesn't need another monitoring tool. It needs a system where faking data is harder than doing the right thing.</p>
            <button className="bg-white text-primary px-12 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-2xl" onClick={onCtaClick}>
              Request a Demo
            </button>
          </div>
          <div className="absolute inset-0 z-0 opacity-10">
            <img className="w-full h-full object-cover" data-alt="Geometric microscopic patterns tiled seamlessly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzPaaq6Ml0OK1n69dq7uRx5GstjjxNztAIUMgnOyzp0AoO6XVnFQ00ekkae1EuAPdJx6S9nIt4nPlzqN-zmV6HtGsAg3ddhPLs-OVG3-cwOJwIT9SZhQdNNL8Qy-NQMvLWGVmRGuykqIH-wyURENjCeiDkVAy_iSPk7-hEv6kLvZ6yfxMsknaZHjbooKYP6QkNoCZ3NC7ukI1X5fYOVUCcr7EwU8sgDE0WbRBL7gsU5LL8hpqoBqDfbOoTvuMAaO5yKpwg-GkpJvc" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomeView;
