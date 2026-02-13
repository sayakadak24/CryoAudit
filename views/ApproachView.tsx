
import React from 'react';

interface ApproachViewProps {
  onCtaClick: () => void;
}

const ApproachView: React.FC<ApproachViewProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold sm:text-6xl mb-8 leading-tight">
              A single source of truth for <span className="text-blue-500">chain of custody</span>.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We move compliance from a manual task to an automated architectural layer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-blue-600 font-bold mb-4">01. Capture</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Unified Integration</h3>
              <p className="text-slate-600 leading-relaxed">We interface with existing IoT sensors and manual touchpoints to centralize all cold chain data in real-time.</p>
            </div>
            <div>
              <div className="text-blue-600 font-bold mb-4">02. Secure</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Immutable Ledger</h3>
              <p className="text-slate-600 leading-relaxed">Data is written to a tamper-proof record history. Once a temperature is recorded, it cannot be altered or deleted.</p>
            </div>
            <div>
              <div className="text-blue-600 font-bold mb-4">03. Verify</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Auditing</h3>
              <p className="text-slate-600 leading-relaxed">Generate regulatory-compliant reports with one click. Give auditors direct, limited access to verify data integrity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachView;
