import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, Clock, ArrowRight, Activity, FileText } from 'lucide-react';

const CaseStudiesView: React.FC = () => {
  const cases = [
    {
      id: "ramnagar",
      title: "Ramnagar Poisoning (2019–2020)",
      tragedy: "12 children died and 6 were permanently disabled due to DEG contamination in cough syrup.",
      rootCause: "Industrial-grade DEG was substituted for pharma-grade propylene glycol. Invoices explicitly stated 'for industrial use only' but were ignored by manual intake.",
      intervention: [
        {
          title: "Raw Material Intake",
          description: "Tier 1 Edge AI uses on-device OCR to scan supplier invoices. The system flags 'industrial use only' against pharma parameters, blocking the action instantly."
        },
        {
          title: "Batch Genesis",
          description: "Hyperledger smart contracts enforce CDSCO compliance. Assets are only minted if NABL/CDSCO API validation is received, preventing unverified batches from entering the chain."
        },
        {
          title: "Instant Recall",
          description: "Tier 2 Causal Analytics queries the ledger to isolate the origin lot and its digital twin bifurcations, compressing a 5-month trace into seconds."
        }
      ]
    },
    {
      id: "gambia",
      title: "The Gambia Tragedy (2022)",
      tragedy: "70+ children died from acute kidney injury linked to contaminated pediatric cough syrups.",
      rootCause: "Regulatory blindspot: Export batches didn't require mandatory DEG testing. The supply chain was 'compliant on paper' but chemically lethal.",
      intervention: [
        {
          title: "Flagged Asset Genesis",
          description: "Without an authenticated API handshake from a testing oracle, the smart contract automatically mints the digital twin with a permanent STATUS: UNCERTIFIED_FLAG."
        },
        {
          title: "Terminal Verification",
          description: "Port authorities in Gambia scan the QR code. The Tier 1 app visualizes the uncertified flag instantly, regardless of physical paper documents."
        },
        {
          title: "Liability Transfer",
          description: "Importers must use their self-custodial key to sign for a flagged batch, immutably absorbing 100% liability and self-incriminating if they proceed."
        }
      ]
    },
    {
      id: "synthetic-milk",
      title: "Synthetic Milk Syndicates (2019-2022)",
      tragedy: "Toxic mixtures of refined oil, detergent, and paint were engineered to mimic FAT/SNF readings, poisoning millions of liters of dairy.",
      rootCause: "Hardware isolation. Offline electronic milk testers were bypassed, and falsified data was manually logged into legacy ERPs.",
      intervention: [
        {
          title: "Edge OCR Bridging",
          description: "Workers must take a photo of the legacy tester's digital readout. Tier 1 AI extracts metrics directly from the display, bypassing manual entry."
        },
        {
          title: "SLA Enforcement",
          description: "Smart contracts map extracted data against FSSAI/NDDB parameters. Anomalous SNF levels typical of urea dilution trigger an immediate block."
        },
        {
          title: "Silo Protection",
          description: "National brands' overarching smart contracts block the dumping of unverified local batches into main cooling silos, protecting the entire batch."
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
              Preventing the <span className="text-blue-500">Lethal GIGO</span> Breach
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Official records were signed. Documents were approved. The paper trail said nothing was wrong. 
              See how CryoTrack's protocol would have intercepted India's deadliest supply chain failures.
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
                      <p className="text-red-800 text-sm leading-relaxed">{c.tragedy}</p>
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
