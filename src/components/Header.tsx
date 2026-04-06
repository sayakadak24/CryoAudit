import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-700 font-semibold border-b-2 border-blue-600'
    : 'text-slate-600 font-medium hover:text-blue-600 transition-colors';

const NAV_LINKS = [
  { to: '/problem', label: 'Problem' },
  { to: '/approach', label: 'Approach' },
  { to: '/platform', label: 'Platform' },
  { to: '/pricing', label: 'Pricing' },
];

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl shadow-[0px_24px_48px_rgba(11,28,48,0.06)]">
      <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="CryoTrack Logo" className="h-10 w-auto rounded-lg" />
            <span className="text-2xl font-bold  text-[#0F59A8]">CryoTrack</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={onCtaClick}
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-semibold hover:scale-102 transition-transform duration-200"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-600 hover:text-blue-600 transition-colors p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-lg">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-slate-600 hover:text-blue-600"
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { onCtaClick(); setIsMenuOpen(false); }}
            className="w-full bg-gradient-to-br from-primary to-primary-container text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-sm"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
