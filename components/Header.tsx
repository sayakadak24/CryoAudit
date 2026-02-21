
import React from 'react';
import { ViewType } from '../App';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onCtaClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CryoTrack</span>
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('problem')} 
              className={`text-sm font-medium transition-colors ${currentView === 'problem' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              The Problem
            </button>
            <button 
              onClick={() => onNavigate('approach')} 
              className={`text-sm font-medium transition-colors ${currentView === 'approach' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Our Approach
            </button>
            <button 
              onClick={() => onNavigate('brochure')} 
              className={`text-sm font-medium transition-colors ${currentView === 'brochure' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Brochure
            </button>
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Overview
            </button>
          </nav>

          <div className="flex items-center">
            <button
              onClick={onCtaClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              Apply for Pilot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
