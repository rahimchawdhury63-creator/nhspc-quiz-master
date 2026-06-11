import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import QuestionsPage from './components/QuestionsPage';
import LearnPage from './components/LearnPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
      case 'quiz':
        return <QuizPage language={language} />;
      case 'questions':
        return <QuestionsPage language={language} />;
      case 'learn':
        return <LearnPage language={language} />;
      case 'about':
        return <AboutPage language={language} />;
      default:
        return <HomePage language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
