
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Regulated Operations</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We focus on operators who need audit-ready records and absolute regulatory compliance. Our platform supports both food and pharmaceutical requirements in the Indian landscape.
            </p>
            
            <div className="space-y-4">
              {[
                'Cold Storage Operators',
                'Cold Chain Logistics Providers',
                'Pharmaceutical Logistics Partners',
                'Food Exporters & Agri-Cold Chains',
                'Refrigerated Warehouse Operators'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[4/3] rounded-3xl bg-blue-600 overflow-hidden shadow-2xl">
               <img 
                 src="https://picsum.photos/seed/coldchain/800/600" 
                 alt="Cold storage facility" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white w-full max-w-sm">
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-xs font-mono uppercase tracking-widest opacity-70">Compliance Health</span>
                     <span className="bg-green-500 text-[10px] px-2 py-0.5 rounded-full font-bold">STABLE</span>
                   </div>
                   <div className="space-y-4">
                     <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-400 w-[94%]"></div>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span>Records Verified</span>
                       <span>2,481</span>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span>Tamper Check</span>
                       <span className="text-blue-300">PASS</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
