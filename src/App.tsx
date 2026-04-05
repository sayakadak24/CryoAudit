
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';
import ProblemView from './views/ProblemView';
import ApproachView from './views/ApproachView';
import CaseStudiesView from './views/CaseStudiesView';
import PlatformView from './views/PlatformView';
import PricingView from './views/PricingView';
import PilotForm from './components/PilotForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      <ScrollToTop />
      <Header 
        onCtaClick={toggleForm} 
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView onCtaClick={toggleForm} />} />
          <Route path="/problem" element={<ProblemView onCtaClick={toggleForm} />} />
          <Route path="/approach" element={<ApproachView onCtaClick={toggleForm} />} />
          <Route path="/case-studies" element={<CaseStudiesView />} />
          <Route path="/platform" element={<PlatformView onCtaClick={toggleForm} />} />
          <Route path="/pricing" element={<PricingView onCtaClick={toggleForm} />} />
        </Routes>
        
        <div id="pilot">
          <PilotForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
