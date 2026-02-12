
import React, { useState } from 'react';

interface PilotFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotForm: React.FC<PilotFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // The Google Apps Script URL provided by the user
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyuRino2-nzt2x5udcapY0_Cy5CrfY8WRHyo65oeeY7vT8Cl88g_l4PDJDQ7QCM4Yx7/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', phone: '' });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                ✅
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Request Received</h3>
              <p className="text-slate-500 font-medium">We will call you back on your phone shortly.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Get Started</h3>
                  <p className="text-slate-500 font-medium">We'll call you for a quick talk.</p>
                </div>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Your Full Name</label>
                  <input 
                    required 
                    type="text" 
                    autoFocus
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.25rem] focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300 text-lg" 
                    placeholder="e.g. Rajesh Kumar" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">WhatsApp / Phone No.</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.25rem] focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300 text-lg" 
                    placeholder="+91 00000 00000" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-6 bg-blue-600 text-white text-xl font-black rounded-[1.25rem] shadow-xl shadow-blue-100 transition-all active:scale-95 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-wait' : 'hover:bg-blue-700 hover:-translate-y-0.5'}`}
                >
                  {loading ? (
                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Call Me Back'}
                </button>
                
                <p className="text-[11px] text-center text-slate-400 uppercase tracking-widest font-black leading-relaxed">
                  🔒 Your data is safe with us. No Spam.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PilotForm;
