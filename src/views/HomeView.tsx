import React from 'react';

interface HomeViewProps {
  onCtaClick?: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onCtaClick }) => {
  return (
    <main className="pt-20">

      <section className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl aspect-[21/9] mb-12 rounded-[2rem] overflow-hidden bg-surface-container-low shadow-[0px_24px_48px_rgba(11,28,48,0.08)]">
          <img className="w-full h-full object-cover" data-alt="Futuristic clean laboratory with glowing blue cryogenic storage tanks, holographic data screens floating in air, soft cinematic lighting, 8k render style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9s75Yb_KH1wGgCuVSddeHKE8tf21tXv9RYv4LCUqD_dFNyNYujESNv9c0CkeRee2_1fHndYUY5vVRTjvoRek4auWqb1rYnQXLYYKQ42p1dlAJan8xX3Rpm9mOawZ7df2pAYhAp4BLmDH0FKOy-U1I2_G6S1PbQOMca9NS6gZURqNHZLeLcxV6n-6w_znULiIriThIRT7b3MXAYJW2P_GXyXF-pcrsMef17a5NMCbztuqjPfiMPAiyiIqntElPH-UjaQ8polf93A" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Audit Grade: AAA+</span>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
            Scale with <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Confidence.</span> Automate <span className="bg-gradient-to-r from-tertiary to-tertiary-fixed-dim bg-clip-text text-transparent">Trust.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            The Trust Layer for Global Supply Chains. CryoTrack delivers absolute precision in cold-chain management, eliminating manual data entry and preventing compliance fines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onCtaClick} className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-lg font-bold text-primary hover:bg-surface-container-high transition-colors">
              View Compliance Specs
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">System Capabilities</span>
          <h2 className="text-4xl font-bold text-on-surface mt-2">Engineered for Absolute Zero Failure.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

          <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">view_in_ar</span>
              <h3 className="text-3xl font-bold mb-4">Edge AI Evidence</h3>
              <p className="text-on-surface-variant max-w-md">On-device OCR and photo evidence anchored to Hyperledger Fabric. Our mobile-first PWA ensures 100% financial and legal shifts at every physical handoff.</p>
            </div>
            <div className="relative z-10 mt-10 mb-2 grid grid-cols-3 gap-4 flex items-center justify-between"  >
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">MSME</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Mobile First</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="text-2xl font-bold text-tertiary">100%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Legal Shift</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary-container">ZERO</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Paper-work</div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
              <img className="w-full h-full object-cover object-left-top" data-alt="Abstract glowing circuit patterns and data nodes connecting in a 3d matrix, soft blue light on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv7d6qgig68KdsV-wldBq_G4lopAmkUPvDUBQpo3yXi2DXlzOpP_dJCRtAXmI93cOutisSuZEKCw9CFTS8Elv9XK3Vh03l3tVvYosY2YHwmyO-wohfO7HkcjZOnZPf9OkTMJI7FbEtK35euedo_m6H_pvF-CFFW7ThEElA1hKXMfP_OyB-S4gICBMdD3DjQ0X96UtigCe0CE8aXWQEG-IQgXbbTtjV48hV7MFkfWhsjUMGbyGwhio4mCntui0xi35FnpeDzBwF8qM" />
            </div>
          </div>

          <div className="md:col-span-4 bg-primary text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-white text-4xl mb-6">database</span>
              <h3 className="text-2xl font-bold mb-4">Gov Oracle Validation</h3>
              <p className="text-primary-fixed-dim">Real-time cross-validation against ULIP, VAHAN, and FSSAI databases for absolute regulatory certainty.</p>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed"></div>
                <span className="text-sm font-medium">ULIP Integrated</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed"></div>
                <span className="text-sm font-medium">VAHAN Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed"></div>
                <span className="text-sm font-medium">FSSAI Compliant</span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="md:col-span-4 bg-surface-container-highest rounded-[2rem] p-10 flex flex-col group cursor-pointer overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Remote Override</h3>
              <p className="text-sm text-on-surface-variant">Control entire cryo-farms from your mobile device with biometric authorization.</p>
            </div>
            <div className="flex-grow flex items-end justify-center">
              <img className="w-3/4 translate-y-10 group-hover:translate-y-4 transition-transform duration-500" data-alt="Sleek premium smartphone displaying a complex dashboard with dark mode UI, glowing graphs and security icons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJC24KZNGJ4-FukhARPifA2iexIIsLFWuIeUozFFs0PPvsNmZVmEhroKIH56HW5UDiNKpLthC7JrC490SdtOMqFVtv9YXJt9SVhek6S7W0o1xLlz8RO_Yhs7TwkAJduSThd-wmaDvfOMCIym9JbXTHAa171xMAK27rA3zasasqQe4jNPsb6Lyj20MtVMkoEl5a30eO8pC30JEL64r_kFzamjFofNYKt_vSw9UShaxNVSeYqa7wPosSl0JDKz_qTiCviG_7PMhloBE" />
            </div>
          </div>

          <div className="md:col-span-8 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-outline-variant/10">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Global Cold-Chain Mesh</h3>
              <p className="text-on-surface-variant mb-6">Seamlessly track assets moving across continents via our redundant satellite-linked network.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">public</span>
                  <span className="text-sm font-semibold">142 Countries Supported</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">satellite_alt</span>
                  <span className="text-sm font-semibold">Real-time GPS Sync</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full h-48 md:h-full bg-surface-container-low rounded-2xl overflow-hidden grayscale">
              <img className="w-full h-full object-cover" data-alt="Minimalist vector map of the world with glowing data nodes and connecting flight paths in technical blue" data-location="global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdsZ4sRgedn-7XFwRtCcApS29UQ1FcHlI5RVs0QoefjsCaTTxy8k1sgtS_mbYtoGKXGnKSdkvkR5X468rbGleBIKjam93i5Wzjscwlgjm00THf84v8OcldtUyMDRuUI_rZAcesriv2Mrc3lrixxnry8V2CylaC7TPicb776Mkj-soWOoF2BtTdU6PDzGIdYQ-7r-S4MMMe3YD3FBYMI9igyDBQMIAC43vUl66onFS2n7oHfQeAoy2Oola_5-42CnFjbUTAL_ZeYrI" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <div className="text-5xl font-extrabold text-primary mb-2">$4.2B+</div>
            <p className="text-on-surface-variant font-medium">Assets Under Protection</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-primary mb-2">0.00%</div>
            <p className="text-on-surface-variant font-medium">Critical Loss Incident Rate</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-primary mb-2">18ms</div>
            <p className="text-on-surface-variant font-medium">Average Response Latency</p>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-primary mb-2">24/7</div>
            <p className="text-on-surface-variant font-medium">SOC-Managed Surveillance</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Trusted by World-Class Institutions.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              From global pharmaceuticals to private research labs, CryoTrack is the standardized interface for high-stakes specimen monitoring and logistical integrity.
            </p>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black italic tracking-tighter">PHARMA-CORP</span>
              <span className="text-2xl font-black italic tracking-tighter">BIO-GENIX</span>
              <span className="text-2xl font-black italic tracking-tighter">HEAL-TECH</span>
              <span className="text-2xl font-black italic tracking-tighter">RESEARCH-ONE</span>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-[2rem] p-12 relative overflow-hidden">
            <span className="material-symbols-outlined text-primary text-6xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <p className="text-2xl font-medium text-on-surface italic mb-8 relative z-10">
              "CryoTrack hasn't just changed our monitoring; it's redefined our standard of care for irreplaceable biological research."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-slate-300"></div>
              <div>
                <div className="font-bold">Dr. Elena Rostova</div>
                <div className="text-sm text-on-surface-variant">Chief Research Officer, Global BioBank</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary-container to-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to secure the future?</h2>
            <p className="text-xl opacity-90 mb-12">Join over 1,200 facilities already protected by the Digital Guardian.</p>
            <button className="bg-white text-primary px-12 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-2xl" onClick={onCtaClick}>
              Schedule an Infrastructure Audit
            </button>
          </div>

          <div className="absolute inset-0 z-0 opacity-10">
            <img className="w-full h-full object-cover" data-alt="Geometric microscopic biological patterns tiled seamlessly with a technical aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzPaaq6Ml0OK1n69dq7uRx5GstjjxNztAIUMgnOyzp0AoO6XVnFQ00ekkae1EuAPdJx6S9nIt4nPlzqN-zmV6HtGsAg3ddhPLs-OVG3-cwOJwIT9SZhQdNNL8Qy-NQMvLWGVmRGuykqIH-wyURENjCeiDkVAy_iSPk7-hEv6kLvZ6yfxMsknaZHjbooKYP6QkNoCZ3NC7ukI1X5fYOVUCcr7EwU8sgDE0WbRBL7gsU5LL8hpqoBqDfbOoTvuMAaO5yKpwg-GkpJvc" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeView;
