import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Logo className="text-white" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Compliance + Intelligence + Revenue Signaling Infrastructure for Global Supply Chains. Eliminating data vulnerabilities through protocol-level incentives.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Gurugram, India</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/platform" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Architecture</Link></li>
              <li><Link to="/approach" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Checkpoint Mechanism</Link></li>
              <li><Link to="/platform" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Business & Impact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/platform" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Global Standards</Link></li>
              <li><Link to="/case-studies" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/problem" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">The GIGO Problem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm mb-8">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href="mailto:contact@cryotrack.in" className="hover:text-blue-400 transition-colors">contact@cryotrack.in</a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/cryotrack-in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/CryoTrack" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 CryoTrack Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
