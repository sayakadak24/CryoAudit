import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, Clock, ArrowRight, Activity, FileText } from 'lucide-react';

const CaseStudiesView: React.FC = () => {
  const cases = [
    {
      id: "ramnagar",
      title: "Ramnagar Case (2019–2020)",
      externalLink: "https://www.thehindu.com/news/national/other-states/12-children-die-in-jammu-after-consuming-adulterated-cough-syrup/article30847355.ece",
      tragedy: "A tragic incident where contaminated products led to multiple fatalities and permanent disabilities.",
      rootCause: "Industrial-grade materials were substituted for pharmaceutical-grade ingredients. Invoices explicitly stated the industrial nature but were ignored during manual intake.",
      intervention: [
        {
          title: "Intake Verification",
          description: "Advanced Edge AI uses on-device OCR to scan supplier invoices. The system flags industrial-grade materials against safety parameters, blocking the action instantly."
        },
        {
          title: "Asset Genesis",
          description: "Secure smart contracts enforce safety compliance. Assets are only created if verified safety parameters are met, preventing unverified batches from entering the chain."
        },
        {
          title: "Instant Traceability",
          description: "Centralized analytics query the ledger to isolate the origin lot and its distribution path, compressing a months-long trace into seconds."
        }
      ]
    },
    {
      id: "gambia",
      title: "The Gambia Case (2022)",
      externalLink: "https://www.reuters.com/business/healthcare-pharmaceuticals/gambia-cough-syrup-deaths-what-we-know-so-far-2022-10-14/",
      tragedy: "Dozens of children died from acute kidney injury linked to contaminated pediatric products.",
      rootCause: "Regulatory blindspot: Export batches didn't require mandatory testing. The supply chain was 'compliant on paper' but physically unsafe.",
      intervention: [
        {
          title: "Flagged Asset Creation",
          description: "Without a verified testing record, the smart contract automatically marks the digital twin with a permanent 'UNCERTIFIED' flag."
        },
        {
          title: "Terminal Verification",
          description: "Authorities scan the verification code. The mobile app visualizes the uncertified flag instantly, regardless of physical paper documents."
        },
        {
          title: "Liability Transfer",
          description: "Importers must use their secure key to sign for a flagged batch, immutably absorbing 100% liability if they choose to proceed."
        }
      ]
    },
    {
      id: "synthetic-milk",
      title: "Adulteration Syndicates",
      tragedy: "Widespread contamination of essential goods through engineered mixtures that mimic quality metrics.",
      rootCause: "Data isolation. Offline testing devices were bypassed, and falsified data was manually logged into legacy systems.",
      intervention: [
        {
          title: "Edge Data Capture",
          description: "Workers capture digital evidence of quality readouts. Advanced AI extracts metrics directly, bypassing manual entry."
        },
        {
          title: "Safety Enforcement",
          description: "Smart contracts map extracted data against global safety parameters. Anomalous levels typical of dilution trigger an immediate block."
        },
        {
          title: "Network Protection",
          description: "Overarching smart contracts block the integration of unverified batches into the main supply, protecting the entire chain."
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-3 h-3" />
              Root Cause Analysis
            </div>
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 leading-tight">
              Preventing the <span className="text-blue-500">Integrity Breach</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Official records were signed. Documents were approved. The paper trail said nothing was wrong. 
              See how CryoTrack's protocol would have intercepted some of the deadliest supply chain failures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {cases.map((c, index) => (
              <div key={c.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="sticky top-24">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{c.title}</h2>
                    <div className="p-6 bg-red-50 border border-red-100 rounded-2xl mb-8">
                      <h4 className="text-red-900 font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        The Tragedy
                      </h4>
                      <p className="text-red-800 text-sm leading-relaxed mb-4">{c.tragedy}</p>
                      {c.externalLink && (
                        <a 
                          href={c.externalLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                        >
                          Read External Article <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                      <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-600" />
                        The GIGO Breach
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{c.rootCause}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-grow bg-slate-200"></div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">CryoTrack Intervention</span>
                    <div className="h-px flex-grow bg-slate-200"></div>
                  </div>

                  {c.intervention.map((step, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      whileHover={{ x: 10 }}
                      className="flex gap-6 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                        {sIdx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}

                  <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6" />
                      Protocol Outcome
                    </h4>
                    <p className="text-blue-50 leading-relaxed">
                      By shifting the burden of trust from manual oversight to cryptographic certainty, CryoTrack transforms the detection question from "How do we trace what went wrong?" to "How do we mathematically prevent it from moving past the loading dock?"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Build a Safer Supply Chain</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join the network that's eliminating the GIGO vulnerability at the protocol level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">
              Request Pilot Access
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Read Technical Spec
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesView;
