import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="CryoTrack Logo" className="h-8 w-auto rounded-md" />
            <span className="text-xl font-bold text-blue-800">CryoTrack</span>
          </Link>
          <p className="text-slate-500 max-w-md">© 2024 CryoTrack. The Digital Guardian of Biological Assets. Protecting the future of science with precision and security.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">Legal</h4>
            <Link to="#" className="text-slate-500 text-[0.6875rem] font-medium hover:text-blue-600 underline transition-opacity opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 text-[0.6875rem] font-medium hover:text-blue-600 underline transition-opacity opacity-80 hover:opacity-100">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">Resources</h4>
            <Link to="#" className="text-slate-500 text-[0.6875rem] font-medium hover:text-blue-600 underline transition-opacity opacity-80 hover:opacity-100">Security Audit</Link>
            <Link to="#" className="text-slate-500 text-[0.6875rem] font-medium hover:text-blue-600 underline transition-opacity opacity-80 hover:opacity-100">API Documentation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
