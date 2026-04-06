import React from 'react';
import type { ViewProps } from '../types';
import PillBadge from '../components/ui/PillBadge';
import SectionHeader from '../components/ui/SectionHeader';
import CheckList from '../components/ui/CheckList';
import CtaBanner from '../components/ui/CtaBanner';
import { FeatureList } from '../components/ui/FeatureItem';

const ENTERPRISE_FEATURES = [
  'SAP / Oracle ERP Integration via REST API',
  'Real-time compliance dashboard',
  'Verified audit trail for FDA, FSSAI, CDSCO',
  'Custom SLA enforcement per shipment',
  'Dedicated consensus node (Tier 3)',
];

const MSME_FEATURES = [
  'Free for individual actors (Tier 1)',
  'Works on any Android phone',
  'Full offline support for cold storages',
  'Auto-syncs when connection returns',
  'Aadhaar-backed mobile wallet',
];

const ARCH_FEATURES = [
  {
    icon: 'extension',
    title: 'Dynamic Industry Modules',
    description: 'Easily expand from Pharma to Agri. Pre-built SLAs for different asset classes dynamically adjust the AI and validation thresholds without custom development.',
  },
  {
    icon: 'api',
    title: 'API-First Gateway',
    description: 'Connect legacy ERPs (SAP, Oracle) directly to the network. Our API Gateway handles traffic routing, payload formatting, and ULIP/VAHAN cross-checks automatically.',
  },
  {
    icon: 'offline_bolt',
    title: 'Offline-First Resilience',
    description: 'Offline caching guarantees zero data loss in cold storages or remote transit. Proofs auto-anchor to the network the moment connectivity returns.',
  },
];

const PlatformView: React.FC<ViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="relative min-h-[921px] flex items-center px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <PillBadge variant="neutral" icon="verified_user">Unified Trust Protocol</PillBadge>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
              One Protocol.<br /><span className="gradient-text">Every Actor in Your Chain.</span>
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-lg mb-8 text-justify">
              Enterprises connect via API, while MSMEs connect via mobile app. Both use the same tamper-proof network, without either changing how they work today.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                onClick={onCtaClick}
              >
                Talk to Enterprise Team <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold hover:bg-surface-container-highest transition-colors">
                Download the App
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20 glass-card p-6 rounded-xl shadow-2xl border border-white/40">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-tertiary" />
                  <span className="font-bold text-sm">LIVE CHECKPOINT: IN-PROGRESS</span>
                </div>
                <div className="text-xs font-mono text-slate-500">Nashik → Mumbai · Pharma</div>
              </div>
              <img
                className="w-full rounded-lg shadow-inner mb-6"
                data-alt="Dashboard with live verification status and route map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzsReshr6xq1L64-gaItkC7DiE57E4Vem_cPcceS2reO-0KS6UTCvQkgMamVNpoXiOPTVc6wTlZ4yGOkrIcIRC5EOoEm-aIhL7vVGPMihQeTXqahpPunDrZLHyj7omrKe-XkChDcSJN5Ki08SfgNOf3J2yc0pKto--DXAG2uo48K4g5_UmhdbOZFVZeS6Lw8hLh7-ZcSfBUurTdTcWTt-1fNf_uDr5BgAyfrVl25EBwOlEfAtCi26XL57z9DNLqu5pwl7zGgCsZYs"
              />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'AI Verdict', value: 'VERIFIED', color: 'text-tertiary' },
                  { label: 'Liable Party', value: 'Transporter', color: 'text-primary' },
                  { label: 'Trace Time', value: '< 3s', color: 'text-secondary' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="p-3 bg-surface-container rounded-lg">
                    <div className="text-[0.6rem] text-slate-500 uppercase font-bold mb-1">{label}</div>
                    <div className={`text-xl font-headline font-bold ${color}`}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-tertiary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* ENTERPRISE vs MSME */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Two Paths. One Network."
            subtitle="CryoTrack works for the enterprise CFO who needs audit trails, and the Nashik warehouse manager who needs to hand off a truck. No compromise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-surface-container-lowest rounded-[2rem] p-12 flex flex-col justify-between shadow-sm border border-outline-variant/10">
              <div>
                <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold mb-8 uppercase tracking-widest">For Enterprises</div>
                <h3 className="text-3xl font-bold mb-4">Your ERP. Our Trust Layer.</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 text-justify">
                  Integrate CryoTrack directly with your existing ERP or warehouse management system via our API. Get a real-time dashboard, compliance reports, and verified audit trails, without changing how your team works.
                </p>
                <CheckList items={ENTERPRISE_FEATURES} className="mb-8" />
              </div>
              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors" onClick={onCtaClick}>
                Talk to Our Enterprise Team →
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-12 flex flex-col justify-between shadow-lg text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-bold mb-8 uppercase tracking-widest">For MSMEs & Ground Operators</div>
                <h3 className="text-3xl font-bold mb-4">Download. Scan. Done.</h3>
                <p className="text-blue-100 leading-relaxed mb-8 text-justify">
                  Download the app. Scan a QR. Accept or dispute a shipment. That's it. No IT team needed. Works on any Android phone. Works without internet in cold storages.
                </p>
                <CheckList items={MSME_FEATURES} iconColor="text-tertiary-fixed" textColor="text-blue-100" className="mb-8" />
              </div>
              <button className="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors relative z-10">
                Download the App →
              </button>
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* MODULAR ARCHITECTURE */}
      <section className="py-24 px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold mb-6">AGNOSTIC ARCHITECTURE</div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">
              Modular <br />'Plug-and-Play' Scale.
            </h2>
            <FeatureList items={ARCH_FEATURES} />
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="bg-slate-900 rounded-3xl p-4 shadow-3xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-2xl opacity-80"
                data-alt="Abstract tech network node diagram representing a modular blockchain architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnVL7GyIO0_afaZuBddgSEKI7Ymz7SfpHeg2GxLJAxbzIdr-8t3GDWsEoAE_sMtJOuPVdkRP4LLZOaubo9qsRkJKUL5O5OtDAJ8LQUbXmcnSIxqgxNKypjquYelKAhVwC7UjrakjxMSpxUsShq9JGzq7lkc0s1hEhWR9qYjhMTJAZW0mILcn96x-jy36zE6m3l1H1CfPUkEj0Ia8wPLKZzZJuBK2FnfAb-uVo9KDJlLEe3vIUvhHOQbRukql6PB4Ti_4Qum7NBDY"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              <div className="absolute top-10 left-10 p-4 glass-card rounded-xl border border-white/20 shadow-xl w-48">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">ULIP Check</div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                  <span className="font-bold text-on-surface text-sm">e-Way Bill Valid</span>
                </div>
              </div>
              <div className="absolute bottom-10 right-10 p-4 glass-card rounded-xl border border-white/20 shadow-xl w-48">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">AI Flag</div>
                <div className="text-2xl font-headline font-bold text-primary">CLEARED</div>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-tertiary h-full w-[94%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <CtaBanner
            heading={<>Ready to fortify your <br />global supply chain?</>}
            subtext="Join leading pharma corridors and major agricultural exporters already using CryoTrack."
            primaryLabel="Request Platform Demo"
            onPrimary={onCtaClick}
            secondaryLabel="See Pricing"
          />
        </div>
      </section>
    </main>
  );
};

export default PlatformView;
