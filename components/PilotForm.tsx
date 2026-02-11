
import React, { useState } from 'react';

interface PilotFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotForm: React.FC<PilotFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received</h3>
              <p className="text-slate-600">We'll be in touch shortly to discuss your cold chain compliance setup.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Pilot Phase</h3>
                  <p className="text-slate-600 text-sm">Be the first to secure your cold chain records with tamper-proof data.</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Email</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Arctic Logistics Pvt Ltd" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Compliance Area</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Pharmaceutical Cold Chain</option>
                    <option>Food & Agri Cold Chain</option>
                    <option>Multi-purpose Cold Storage</option>
                    <option>Other / Auditor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Compliance Pain Point</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Manual audit prep takes too long, or data disputes with clients..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                  Request Pilot Access
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PilotForm;
