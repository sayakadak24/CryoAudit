
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Clarifying Our Focus</h2>
          <p className="mt-4 text-slate-600">CryoAudit is a compliance-first data platform, not a replacement for your existing operational tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-3xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="p-10 bg-blue-50/30">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              What We Are
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-slate-700">A unified data management and audit platform.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-slate-700">A source of truth for compliance-ready records.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-slate-700">A bridge between operators and auditors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-slate-700">Software built specifically for regulated cold chains.</span>
              </li>
            </ul>
          </div>

          <div className="p-10 bg-slate-50/50">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              What We Are Not
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-slate-600">A sensor or hardware manufacturer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-slate-600">A generic ERP or accounting tool.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-slate-600">An audit-only consultancy agency.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-slate-600">A logistics marketplace or freight broker.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
