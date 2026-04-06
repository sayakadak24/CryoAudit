import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* TOP ROW — Logo + Nav + Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.jpeg" alt="CryoTrack Logo" className="h-8 w-auto rounded-md" />
            <span className="text-xl font-extrabold text-white tracking-tight">CryoTrack</span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'How It Works', to: '/approach' },
              { label: 'Platform', to: '/platform' },
              { label: 'Pricing', to: '/pricing' },
              { label: 'Contact', to: '#' },
            ].map((link) => (
              <Link key={link.label} to={link.to} className="text-slate-400 text-sm hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center group">
              <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center group">
              <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-slate-400 text-sm font-semibold">CryoTrack, <span className="text-slate-500 font-normal">Supply Chain Trust Infrastructure, Built for the Real World.</span></p>
            <p className="text-slate-600 text-xs mt-1 uppercase tracking-widest font-bold">GURUGRAM, INDIA · SERVING GLOBAL SUPPLY CHAINS</p>
          </div>
          <p className="text-slate-600 text-xs uppercase tracking-widest font-bold shrink-0">
            © 2026 CRYOTRACK SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
