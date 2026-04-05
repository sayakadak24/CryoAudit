
import React, { useState } from 'react';

interface PilotFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotForm: React.FC<PilotFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // Use the URL provided by the user
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyuRino2-nzt2x5udcapY0_Cy5CrfY8WRHyo65oeeY7vT8Cl88g_l4PDJDQ7QCM4Yx7/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // POSTing with no-cors to avoid Google Script Redirect issues in development
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
      }, 3500);
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
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-slate-100">
        <div className="p-10 sm:p-12">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-28 h-28 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 text-5xl">
                ✅
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent</h3>
              <p className="text-slate-500 text-xl font-bold leading-relaxed">Our compliance expert will call you on your mobile shortly.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Request Callback</h3>
                  <p className="text-slate-500 font-bold text-lg">Leave your number, we'll talk.</p>
                </div>
                <button 
                  onClick={onClose} 
                  className="p-3 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-1">Your Full Name</label>
                  <input 
                    required 
                    type="text" 
                    autoFocus
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-8 py-6 bg-slate-50 border-4 border-slate-100 rounded-[2rem] focus:ring-8 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 text-2xl" 
                    placeholder="e.g. Rajesh Kumar" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-1">WhatsApp / Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-8 py-6 bg-slate-50 border-4 border-slate-100 rounded-[2rem] focus:ring-8 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 text-2xl" 
                    placeholder="+91 00000 00000" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-7 bg-blue-600 text-white text-2xl font-black rounded-[2rem] shadow-2xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-4 ${loading ? 'opacity-70 cursor-wait' : 'hover:bg-blue-700 hover:-translate-y-1'}`}
                >
                  {loading ? (
                    <svg className="animate-spin h-8 w-8 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Call Me Back'}
                </button>
                
                <div className="flex items-center gap-3 justify-center py-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">
                    100% Secure & Confidential
                  </span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PilotForm;
