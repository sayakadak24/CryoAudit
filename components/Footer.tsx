import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
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
              Compliance + Intelligence + Revenue Signaling Infrastructure for Global Cold Chains. Eliminating GIGO vulnerabilities through protocol-level game theory.
            </p>
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
                title="Twitter (X)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="contact@cryotrack.in" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">The Protocol</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/approach" className="hover:text-blue-400 transition-colors">Checkpoint Mechanism</Link></li>
              <li><Link to="/technology" className="hover:text-blue-400 transition-colors">Hyperledger Fabric</Link></li>
              <li><Link to="/technology" className="hover:text-blue-400 transition-colors">Two-Tier AI Architecture</Link></li>
              <li><Link to="/brochure" className="hover:text-blue-400 transition-colors">Technical Spec</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Impact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/problem" className="hover:text-blue-400 transition-colors">The GIGO Problem</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Global Safety Standards</Link></li>
              <li><Link to="/brochure" className="hover:text-blue-400 transition-colors">Revenue Signaling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contact@cryotrack.in</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 CryoTrack Infrastructure. All rights reserved.</p>
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
