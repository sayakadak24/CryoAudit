
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'The Problem', path: '/problem' },
    { name: 'The Protocol', path: '/approach' },
    { name: 'Technology', path: '/technology' },
    { name: 'Impact', path: '/case-studies' },
    { name: 'Technical Spec', path: '/brochure' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Logo className="text-slate-900" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={onCtaClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              Apply for Pilot
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `block text-base font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              onCtaClick();
              setIsMenuOpen(false);
            }}
            className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
          >
            Apply for Pilot
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
