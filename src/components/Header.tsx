import React from 'react';

interface HeaderProps {
  language: 'bn' | 'en';
  setLanguage: (lang: 'bn' | 'en') => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home' },
    { id: 'quiz', labelBn: 'কুইজ', labelEn: 'Quiz' },
    { id: 'questions', labelBn: 'প্রশ্ন ব্যাংক', labelEn: 'Question Bank' },
    { id: 'learn', labelBn: 'শিখুন', labelEn: 'Learn' },
    { id: 'about', labelBn: 'সম্পর্কে', labelEn: 'About' },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">NHSPC Quiz Master</h1>
              <p className="text-xs text-white/80">
                {language === 'bn' ? '২০২৬ কুইজ প্রস্তুতি' : '2026 Quiz Preparation'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-white/20 shadow-inner'
                    : 'hover:bg-white/10'
                }`}
              >
                {language === 'bn' ? item.labelBn : item.labelEn}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-all"
            >
              {language === 'bn' ? 'EN' : 'বাং'}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-left text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {language === 'bn' ? item.labelBn : item.labelEn}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
