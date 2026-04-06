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
    body: 'When goods change hands, from warehouse to transporter or transporter to distributor, CryoTrack creates a cryptographic checkpoint. The moment the receiving party accepts, liability transfers. Automatically. Immutably. No disputes about "who knew what."',
    dark: false,
  },
  {
    icon: 'smart_toy',
    iconColor: 'text-tertiary',
    title: 'AI That Catches What Eyes Miss',
    body: 'Before your team accepts a shipment, our AI cross-checks temperature data against live weather conditions, route timing, and your SLA thresholds, and explains in plain language what it found. Not an opaque score. A clear reason.',
    dark: false,
  },
  {
    icon: 'smartphone',
    iconColor: 'text-white',
    title: 'Works for a Farmer. Works for a Fortune 500.',
    body: 'No enterprise software needed. A warehouse operator in Nashik uses the same network as a pharma distributor in Mumbai through a simple mobile app that works even without internet.',
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
      {/* HERO */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Video — full section background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Balanced overlay — dark enough for readability, video still visible */}
        <div className="absolute inset-0 z-10 bg-slate-900/70" />

        {/* Sharp vignette edges for enterprise depth */}
        <div className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.3) 100%)'
          }}
        />

        {/* Content Container — Perfectly Centered */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">

          {/* Trust badges — tight row above headline */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {TRUST_BADGES.map(({ icon, label, color }) => (
              <div
                key={label}
                className="px-3 py-1.5 flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <span
                  className={`material-symbols-outlined ${color} text-sm`}
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: '14px' }}
                >
                  {icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Your Supply Chain Is Only as Honest as{' '}
            <span className="bg-gradient-to-r from-primary to-tertiary-fixed-dim bg-clip-text text-transparent">
              Its Weakest Link.
            </span>
          </h1>

          {/* Thin rule — enterprise detail */}
          <div className="w-16 h-px bg-white/20 mb-6" />

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            CryoTrack makes every handoff in your supply chain tamper-proof, from cold
            storage to the last mile, so you always know who\'s responsible and why.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-lg text-base font-bold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-primary/30"
            >
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-lg text-base font-bold text-white/80 tracking-wide border border-white/20 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all">
              See How It Works →
            </button>
          </div>

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
              className={`rounded-[2rem] p-10 flex flex-col group transition-shadow relative overflow-hidden ${dark
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
              <h3 className="text-2xl font-bold mb-4 text-justify">{title}</h3>
              <p className={`leading-relaxed flex-grow text-justify ${dark ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>
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
                  className="material-symbols-outlined text-primary text-3xl mb-4 text-justify"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
                <h4 className="font-bold text-on-surface text-lg mb-2 text-justify">{title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed text-justify">{desc}</p>
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
