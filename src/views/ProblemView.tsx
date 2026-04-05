import React from 'react';
import type { ViewProps } from '../types';
import PillBadge from '../components/ui/PillBadge';
import CtaBanner from '../components/ui/CtaBanner';

const STAT_MINI = [
  { value: '40%', label: 'Food lost annually in India\'s cold chain.', color: 'text-error' },
  { value: '70%', label: 'Cold storages still rely on manual temperature logs.', color: 'text-amber-600' },
  { value: '<6%', label: "Of India's logistics market is currently digitised.", color: 'text-primary' },
];

const COST_ITEMS = [
  {
    icon: 'child_care',
    iconColor: 'text-error',
    title: 'Lives Lost to Contaminated Drugs',
    desc: 'The 2022 Gambia cough syrup tragedy. The Ramnagar poisoning. In every case, the paperwork was clean.',
  },
  {
    icon: 'gavel',
    iconColor: 'text-primary',
    title: 'Regulatory Fines & Recalls',
    desc: 'Incomplete audit trails lead to massive penalties during FSSAI, CDSCO, or FDA inspections — even when the failure wasn\'t yours.',
  },
  {
    icon: 'trending_down',
    iconColor: 'text-amber-600',
    title: 'Margin Erosion for MSMEs',
    desc: "Small distributors absorb losses they didn't cause, because they can't prove who was responsible at the time of failure.",
  },
];

const CHART_ROWS = [
  { label: 'REAL-TIME VISIBILITY', badge: 'CRITICAL GAP', badgeColor: 'text-error', barColor: 'bg-error', width: '6%' },
  { label: 'AUDIT TRAIL INTEGRITY', badge: 'FAILING', badgeColor: 'text-error', barColor: 'bg-error', width: '30%' },
  { label: 'DIGITAL ADOPTION', badge: 'ONLY 6%', badgeColor: 'text-slate-400', barColor: 'bg-slate-300', width: '6%' },
];

const ProblemView: React.FC<ViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <PillBadge variant="error" icon="warning">Systemic Vulnerability</PillBadge>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              ₹2.5 Lakh Crore Lost Every Year.<br />
              <span className="text-error">And Someone Is Always "Not Responsible."</span>
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-2xl mb-10">
              India loses an estimated 40% of its food and agricultural produce before it reaches the shelf. In pharma, contaminated supply chains have cost children their lives — in India and abroad. And in every case, the paperwork looked fine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {STAT_MINI.map(({ value, label, color }) => (
                <div key={value} className="flex items-center p-4 bg-surface-container-low rounded-xl">
                  <span className={`text-4xl font-bold ${color} mr-3`}>{value}</span>
                  <span className="text-xs text-secondary font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-alt="Close-up of a frosted warehouse storage unit with temperature readout flashing an error red light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm99nnfCItYvpwEiSEYtojY3VclMAyLuKP_KNlDp8rcSfolIpKHuv0zww6M1OfWMywYRBaAvX8LTd2kGfZohzKxC122A_33Qb7xXJt7MhOFH8251GE5PEz3zY4-CgEsy4BwlXf5PBgYAsp4df8XjAS8i3oMDzUy8WP23yeZD_a6PKC9NjE-grQJhqEogILLVmcm2I8baFI0ZDwgm6v-tgCXLgx5uQ0g8_83-j8HAlWAcKKvFvYLZy1TNr30NgSym-Ky--ZDHBD1nk"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
              <span className="material-symbols-outlined text-error block mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>thermostat</span>
              <p className="text-sm font-semibold text-on-surface">Temperature Excursion Detected</p>
              <p className="text-xs text-secondary mt-1 italic">Last manual log: 14 hours ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* GIGO EXPLANATION */}
      <section className="somber-gradient py-24 px-8 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The GIGO Problem Is Everywhere</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Manual logs get faked. Cheap sensors get moved. Cold chain failures get hidden. And when something goes wrong, everyone points at someone else. This is{' '}
              <span className="text-white font-bold">Garbage In, Garbage Out</span> — and it silently runs through 94% of India's undigitised supply chain every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="md:col-span-2 bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 relative border border-white/5 overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-red-400 text-5xl mb-6">edit_note</span>
                <h3 className="text-2xl font-bold mb-4">The GIGO Breach</h3>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  "Garbage In, Garbage Out." Manual data entry allows for falsified logs. Historically, this has led to tragedies like{' '}
                  <span className="text-white font-bold">The Gambia (2022)</span> and{' '}
                  <span className="text-white font-bold">Ramnagar (2020)</span>, where batch integrity was compromised at the source — and the paperwork looked clean throughout.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Abstract heat map showing data manipulation risk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdnwxyoDKPx0MPpY7NY8QAKSAZs2o4PKShXUE00qsS7NgoYsaXavCEBfy20-kzR2VADS-6CE7_GCUbaix4rsQ2FTX0uy_avHWpMqwUO2Sd9Sv9Vl20E2EXSo-jlijAAtnfaZDhHFpvJCcUJ4MdqmAcjvYjJ8g_7Be-eeNL0WmnVAQA7JG195zjYcKVB0cxv3C46L0SeHi-6t7c__EkoynWC5-ouZyUmpFaXlyrr705fA-l2k9mN5VjwNjWBVKCrW4HbI4F4d8UpjM"
                />
              </div>
            </div>

            {[
              { icon: 'visibility_off', color: 'text-blue-400', title: 'The Handoff Black Hole', body: 'Every transfer between a transporter, a warehouse, and a distributor is a blind spot. If no one is forced to verify the state of goods, no one is accountable for what happens in between.' },
              { icon: 'assignment_late', color: 'text-amber-400', title: 'Zero Accountability', body: "When assets fail, legacy systems make it impossible to pinpoint the exact moment or person responsible. Compliance becomes a blame game, not a fact-finding exercise." },
            ].map(({ icon, color, title, body }) => (
              <div key={title} className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5">
                <span className={`material-symbols-outlined ${color} text-5xl mb-6`}>{icon}</span>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{body}</p>
              </div>
            ))}

            <div className="md:col-span-2 bg-slate-900/60 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/5">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">A Patchwork of Broken Systems</h3>
                <p className="text-slate-300 leading-relaxed">
                  Most supply chains use a combination of different sensors, WhatsApp messages, Excel sheets, and manual logbooks. This fragmentation is exactly where goods spoil, fraud hides, and accountability disappears.
                </p>
              </div>
              <div className="w-full md:w-64 h-40 bg-slate-800 rounded-2xl flex items-center justify-center p-4 overflow-hidden relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  data-alt="Complex fragmented supply chain warehouse"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ34YGyk0zTW57Z0lMZrzohqhTkXhK5O3raAXzxszeQ0T61INOY6TEW31N3V3q6TcXqR74xoF80LMA5AtXzgjxyzPKDoNxvXttuCbjSX8c8XK0h9M9joGIftJf-dfuWy8Ma3abqsPwOCnriK5Uuof5CwNc9e5rM8ZtWJ-mVEOwuc5a5_kLTfzMgxneCtoQfeW-rnKrOIsqpoL_Ezxssu1DLzImCMap2OQzD6z_PiHyByfNxT59iKU_bMZigAEWpAxfLEPe77GqP74"
                />
                <span className="material-symbols-outlined text-6xl text-slate-500 relative z-10">hub</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COST OF SILENCE */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8">The Cost Is Never Just Financial</h2>
              <div className="space-y-8">
                {COST_ITEMS.map(({ icon, iconColor, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <span className={`material-symbols-outlined ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{title}</h4>
                      <p className="text-sm text-secondary">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-white p-8 rounded-[2rem] shadow-[0px_24px_48px_rgba(11,28,48,0.06)]">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">India Supply Chain Audit</span>
                <span className="material-symbols-outlined text-error">analytics</span>
              </div>
              <div className="space-y-6">
                {CHART_ROWS.map(({ label, badge, badgeColor, barColor, width }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>{label}</span>
                      <span className={badgeColor}>{badge}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${barColor}`} style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-xs font-medium text-primary">India's supply chain is not underfunded — it's unaccountable. CryoTrack changes that.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">Stop Guessing. Start Knowing.</h2>
        <p className="text-lg text-secondary mb-10">The era of passive logging is over. It's time to secure your supply chain with active, verifiable intelligence.</p>
        <button
          onClick={onCtaClick}
          className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          See Our Solution
        </button>
      </section>
    </main>
  );
};

export default ProblemView;
