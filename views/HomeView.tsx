
import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import InsightSection from '../components/InsightSection';
import Features from '../components/Features';
import TargetAudience from '../components/TargetAudience';
import ComparisonSection from '../components/ComparisonSection';
import { ViewType } from '../App';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onCtaClick: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onCtaClick }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} onCtaClick={onCtaClick} />
      <ProblemSection onNavigate={onNavigate} />
      <InsightSection />
      <Features />
      <TargetAudience />
      <ComparisonSection />
      
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to simplify your compliance?</h2>
          <p className="text-xl text-blue-100 mb-10">
            We are looking for a limited number of early pilot partners to shape the future of cold chain data integrity.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Apply for Pilot Access
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeView;
