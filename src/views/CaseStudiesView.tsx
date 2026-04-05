import React from 'react';

interface CaseStudiesViewProps {
  onCtaClick?: () => void;
}

const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO — THE STAKES */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container/20 text-error mb-6 border border-error/20">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
              <span className="text-[0.6875rem] font-bold tracking-wider uppercase">The Human Cost</span>
            </div>
            <h1 className="text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter mb-6 text-on-surface">The Next Tragedy Won't <span className="text-error">Announce Itself.</span></h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              The 2022 Gambia cough syrup deaths. The Ramnagar poisoning. The Coldbest-PC case. In each of these, the paperwork was clean. The supply chain looked fine.
            </p>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-medium">
              India's supply chain doesn't need another monitoring tool. It needs a system where <span className="text-on-surface font-bold">faking data is harder than doing the right thing.</span>
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" data-alt="Modern supply chain warehouse with monitoring screens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZgyNi4yr7GKx7afZWrsxp7YJHOEvTapcMB-N6UAtntxleEcIX8zJ7IrsQAib-DQ13IvJ-jTKJCpd_OjraS1hJmYpUAwGzP9NroCszbC0VNObQc8JiV23CiuoO5gkcz59eKkP5I4kVqnvEFao62T38jnnno2d_0HTLP7Oao0YK024vIZ_Zz1V98y7dlsr0OLpuPe1eU-C5BH2OuFKlJr4NCCD03YoHs3G4FMpnesi86BZM0AZJrfnXvLB9r4T_iN2xwky4" />
            <div className="absolute inset-0 bg-gradient-to-t from-error/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: '₹2.5L Cr', label: 'Lost annually in India\'s supply chain' },
            { num: '70+', label: 'Children killed in the Gambia falsified drug case' },
            { num: '40%', label: 'Agricultural produce lost before reaching shelf' },
            { num: '0', label: 'Actors held financially accountable with today\'s systems' },
          ].map(s => (
            <div key={s.label} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
              <div className="text-primary font-headline text-3xl font-extrabold mb-1 tracking-tight">{s.num}</div>
              <div className="text-on-surface-variant text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY 1 — GAMBIA */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
              <div className="text-error font-bold text-sm tracking-[0.2em] mb-4 uppercase">Systemic Failure: The Gambia 2022</div>
              <h2 className="text-[2.5rem] leading-tight font-extrabold mb-6">The Fatal Entry: When Manual Logs Cost 70 Lives.</h2>
              <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                A global shipment of pediatric cough syrup was contaminated with diethylene glycol. The temperature logs were signed off. The batch documentation looked perfect. There was no accountability mechanism to flag that the paperwork was fabricated.
              </p>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                This is the GIGO problem in its most devastating form. With CryoTrack, every document at every handoff is verified independently by the receiving party — and their acceptance is legally binding on-chain. <span className="font-bold text-on-surface">Faking a record is no longer harmless.</span>
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>policy</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">"The Gambia tragedy wasn't a failure of medicine; it was a failure of data integrity."</p>
                  <p className="text-[0.6875rem] text-slate-500 font-bold uppercase tracking-wider mt-1">Global Health Safety Commission — 2023 Report</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative min-h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover" data-alt="Close up of pharmaceutical cold chain storage with temperature monitoring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCp_wSrCSwkihnJMi66aPnapwwgqyfgy2JkEwKXmI2Z2F7fUwWf4ZuH5jXdQ7O9wfnCtYD4gFyBgWOyGZvQVct6_MzaY-P0Z1Nd7czfRNOF7agZLrjolOxKH5gddxplf-TCIGC9SA07cxMhznyR235RSkS4nmCHNv5HeNmYNP01OA6rZFECZaHEoqHzCLc7hqIPXHJix66BAEDmJ0qeBaKAuuBmOKrg4HHuSKtmsttqWx1GwpEL00" />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 2 — RAMNAGAR */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-7 bg-surface-container-high rounded-[2rem] p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1 bg-error/10 backdrop-blur-sm rounded-full text-[0.6875rem] font-bold text-error mb-6">RAMNAGAR 2020: A CALL FOR AUTOMATION</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Breaking the "Black Hole" of Liability.</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                The Ramnagar food and medicine spoilage case revealed what happens when a supply chain has no enforced handoff verification. Goods changed hands multiple times with no actor accepting formal responsibility for condition at the point of transfer.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                CryoTrack's Game-Theoretic Checkpoints directly address this — every actor who accepts a handoff simultaneously accepts 100% financial and legal liability for the condition of that shipment. <span className="font-bold text-on-surface">Silence is no longer an option.</span>
              </p>
            </div>
            <div className="mt-12">
              <img className="w-full h-48 object-cover rounded-2xl shadow-lg mb-6" data-alt="Digital verification network visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHE7w36hVBpJZsPTKSYQgQ13zjWTmPosARA5btqtodUmjjsHQ9Q24WrbW9Z-S9oibZVidBGdcOEwgBd5e7YrfFD-w6WzSX0qSzdk21ay3geaJJ1seiXs95j2bazEeC1pCDop_wOROXkxlDC37dXXRhemzh3QrM3P3_DpkhJjaxaFaEkB9QCtGaM8y5__UqdzVFIHJGtg62opc1qNNSSAcZYuWrajLGWABttKPxZUGp0HHt6sGqCVrW5iRbcFXgBhVAzUSW7IsWyuw" />
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Read Full Analysis <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            <div className="bg-primary text-on-primary rounded-[2rem] p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Cryptographic Accountability</h4>
                <p className="text-on-primary/80 text-sm">Every handoff creates an immutable record of who accepted, what condition was verified, and what the AI flagged — permanently, on-chain.</p>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl rotate-12 group-hover:rotate-0 transition-transform duration-500">account_tree</span>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between border border-primary/5">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-tighter">Pilot Status</span>
                  <span className="text-tertiary text-sm font-bold">Live Testing</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mt-4">Pilot participants use our Zero-Friction Mobile OCR app to cryptographically verify handoffs — eliminating data forgery at the point of transfer.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-gradient-to-r from-primary to-primary-container rounded-[2rem] p-12 lg:p-20 text-center text-on-primary relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tighter">Your Supply Chain Shouldn't Be a Risk.</h2>
            <p className="text-lg opacity-90 mb-10">Stop relying on hope and manual logs. Join the network of businesses that treat supply chain accountability as a legal fact, not a prayer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform" onClick={onCtaClick}>Request a Demo</button>
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
