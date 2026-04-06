import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const NAV_LINKS = [
  { to: '/problem', label: 'Problem' },
  { to: '/approach', label: 'Approach' },
  { to: '/platform', label: 'Platform' },
  { to: '/pricing', label: 'Pricing' },
];

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep it dark while inside the Hero section (100vh height roughly)
      setScrolled(window.scrollY > (window.innerHeight - 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    if (scrolled) {
      return isActive
        ? 'text-blue-700 font-semibold border-b-2 border-blue-600 pb-1'
        : 'text-slate-600 font-medium hover:text-blue-600 transition-colors pb-1';
    } else {
      return isActive
        ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1'
        : 'text-slate-300 font-medium hover:text-white transition-colors pb-1';
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-white/20' : 'bg-transparent pt-2'}`}>
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="CryoTrack Logo" className="h-10 w-auto rounded-lg shadow-sm" />
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-blue-800' : 'text-white'}`}>CryoTrack</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} className={getNavLinkClass}>{label}</NavLink>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className={`px-5 py-2 font-medium transition-colors opacity-90 hover:opacity-100 ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-300 hover:text-white'}`}>
            Client Login
          </button>
          <button 
            onClick={onCtaClick}
            className={`px-6 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-lg ${scrolled ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-blue-500/20' : 'bg-white text-blue-900 hover:bg-slate-100 shadow-white/10'}`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`transition-colors p-2 ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-300 hover:text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 py-4 px-4 space-y-4 shadow-xl">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white"
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { onCtaClick(); setIsMenuOpen(false); }}
            className="w-full bg-gradient-to-br from-blue-600 to-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-sm"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
