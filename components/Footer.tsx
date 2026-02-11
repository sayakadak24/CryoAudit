
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CryoAudit</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              Building the future of cold chain data integrity. Our mission is to make compliance transparent, verifiable, and automatic for operators worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Platform Overview</button></li>
              <li><button onClick={() => onNavigate('problem')} className="hover:text-white transition-colors">The Problem</button></li>
              <li><button onClick={() => onNavigate('approach')} className="hover:text-white transition-colors">Our Approach</button></li>
              <li><a href="#pilot" className="hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Our Vision</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pilot Partnership</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 CryoAudit. Pilot Program Phase.</p>
          <div className="flex items-center gap-6">
            <span className="text-blue-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Pilot Phase Status: Active
            </span>
            <span>Origin: India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
