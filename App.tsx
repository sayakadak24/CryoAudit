
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './views/HomeView';
import ProblemView from './views/ProblemView';
import ApproachView from './views/ApproachView';
import PilotForm from './components/PilotForm';
import Footer from './components/Footer';

export type ViewType = 'home' | 'problem' | 'approach';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // Simple "routing" based on hash or state
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'problem', 'approach'].includes(hash)) {
        setCurrentView(hash as ViewType);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      <Header 
        currentView={currentView} 
        onNavigate={navigateTo} 
        onCtaClick={toggleForm} 
      />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomeView onNavigate={navigateTo} onCtaClick={toggleForm} />}
        {currentView === 'problem' && <ProblemView onCtaClick={toggleForm} />}
        {currentView === 'approach' && <ApproachView onCtaClick={toggleForm} />}
        
        <div id="pilot">
          <PilotForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
