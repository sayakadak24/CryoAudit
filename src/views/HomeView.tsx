import React from 'react';
import type { ViewProps } from '../types';
import SectionHeader from '../components/ui/SectionHeader';
import CtaBanner from '../components/ui/CtaBanner';

const TRUST_BADGES = [
  { icon: 'verified_user', label: 'Hyperledger Fabric', color: 'text-tertiary' },
  { icon: 'account_balance', label: 'ULIP Integrated', color: 'text-primary' },
  { icon: 'gavel', label: 'DPDP Act 2023 Compliant', color: 'text-primary' },
];

const PILLAR_CARDS = [
  {
    icon: 'gavel',
    iconColor: 'text-primary',
    title: 'Every Handoff is a Legal Checkpoint',
    body: 'When goods change hands — warehouse to transporter, transporter to distributor — CryoTrack creates a cryptographic checkpoint. The moment the receiving party accepts, liability transfers. Automatically. Immutably. No disputes about "who knew what."',
    dark: false,
  },
  {
    icon: 'smart_toy',
    iconColor: 'text-tertiary',
    title: 'AI That Catches What Eyes Miss',
    body: 'Before your team accepts a shipment, our AI cross-checks temperature data against live weather conditions, route timing, and your SLA thresholds — and explains in plain language what it found. Not an opaque score. A clear reason.',
    dark: false,
  },
  {
    icon: 'smartphone',
    iconColor: 'text-white',
    title: 'Works for a Farmer. Works for a Fortune 500.',
    body: 'No enterprise software needed. A warehouse operator in Nashik uses the same network as a pharma distributor in Mumbai — through a simple mobile app that works even without internet.',
    dark: true,
  },
];

const FRAMEWORK_CARDS = [
  { icon: 'hub', title: 'Hyperledger Fabric', desc: "The same enterprise blockchain used by Walmart and Maersk. Built India's most cost-efficient version." },
  { icon: 'route', title: 'ULIP Integration', desc: 'We verify every shipment against e-Way Bills, VAHAN vehicle data, and FASTag route records in real time.' },
  { icon: 'policy', title: 'NBF 2024 Aligned', desc: "CryoTrack is aligned with MeitY's national blockchain standards for enterprise supply chains." },
  { icon: 'vaccines', title: 'FSSAI & CDSCO', desc: 'Compliance thresholds are embedded in every food and pharma shipment automatically.' },
];

const HomeView: React.FC<ViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl aspect-[21/9] mb-12 rounded-[2rem] overflow-hidden bg-surface-container-low shadow-[0px_24px_48px_rgba(11,28,48,0.08)]">
          <img
            className="w-full h-full object-fit"
            data-alt="Futuristic supply chain warehouse with glowing data nodes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9s75Yb_KH1wGgCuVSddeHKE8tf21tXv9RYv4LCUqD_dFNyNYujESNv9c0CkeRee2_1fHndYUY5vVRTjvoRek4auWqb1rYnQXLYYKQ42p1dlAJan8xX3Rpm9mOawZ7df2pAYhAp4BLmDH0FKOy-U1I2_G6S1PbQOMca9NS6gZURqNHZLeLcxV6n-6w_znULiIriThIRT7b3MXAYJW2P_GXyXF-pcrsMef17a5NMCbztuqjPfiMPAiyiIqntElPH-UjaQ8polf93A"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center">
            {TRUST_BADGES.map(({ icon, label, color }) => (
              <div key={label} className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
                <span className={`material-symbols-outlined ${color} text-sm`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
            Your Supply Chain Is Only as Honest as{' '}
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              Its Weakest Link.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            CryoTrack makes every handoff in your supply chain tamper-proof — from the cold storage to the last mile — so you always know who's responsible, and why.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-lg font-bold text-primary hover:bg-surface-container-high transition-colors">
              See How It Works
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {['Built on Hyperledger Fabric', 'FSSAI & ULIP Aligned', 'DPDP Act 2023', 'NBF 2024'].map((text, i, arr) => (
            <React.Fragment key={text}>
              <span className="text-sm font-bold tracking-widest uppercase">{text}</span>
              {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-on-surface-variant" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* PROBLEM STATS */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: '40%', label: 'Food Lost Every Year', desc: "India's cold chain loses nearly half its agricultural produce before it reaches the shelf.", color: 'text-error' },
            { value: '70%', label: 'Still Using Manual Logs', desc: 'Cold storages across India rely on paper records that can be faked, lost, or ignored.', color: 'text-amber-600' },
            { value: '<6%', label: 'Logistics Digitised', desc: "Less than 6% of India's logistics market is currently digitised — the rest operates on trust and hope.", color: 'text-primary' },
          ].map(({ value, label, desc, color }) => (
            <div key={label} className="group">
              <div className={`text-6xl font-extrabold ${color} mb-3`}>{value}</div>
              <p className="text-on-surface font-bold text-lg mb-1">{label}</p>
              <p className="text-on-surface-variant text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 CORE PILLARS */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="How It Works"
          title={<>We Don't Just Record What Happens.<br />We Make Sure What's Recorded Is True.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLAR_CARDS.map(({ icon, iconColor, title, body, dark }) => (
            <div
              key={title}
              className={`rounded-[2rem] p-10 flex flex-col group transition-shadow relative overflow-hidden ${
                dark
                  ? 'bg-primary text-white hover:shadow-lg'
                  : 'bg-surface-container-lowest shadow-sm border border-outline-variant/10 hover:shadow-md'
              }`}
            >
              <span
                className={`material-symbols-outlined text-4xl mb-6 ${iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {icon}
              </span>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className={`leading-relaxed flex-grow ${dark ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>
                {body}
              </p>
              {dark && <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />}
            </div>
          ))}
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Built for India. Backed by the Right Frameworks."
            subtitle="We don't just say we're compliant. Our integrations are live, our frameworks are state-mandated, and our architecture is built for India's regulatory reality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRAMEWORK_CARDS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <span
                  className="material-symbols-outlined text-primary text-3xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
                <h4 className="font-bold text-on-surface text-lg mb-2">{title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <CtaBanner
            heading="The Next Tragedy Won't Announce Itself."
            subtext="India's supply chain doesn't need another monitoring tool. It needs a system where faking data is harder than doing the right thing."
            primaryLabel="Request a Demo"
            onPrimary={onCtaClick}
          />
        </div>
      </section>

    </main>
  );
};

export default HomeView;
