import React from 'react';
import { allQuestions, categories, getCategoryCount } from '../data/questions-index';

interface HomePageProps {
  language: 'bn' | 'en';
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, setCurrentPage }) => {
  const categoryCount = getCategoryCount();
  const totalQuestions = allQuestions.length;

  const features = [
    {
      icon: '📚',
      titleBn: '১০০০+ প্রশ্ন',
      titleEn: '1000+ Questions',
      descBn: 'বাংলা ও ইংরেজিতে বিস্তারিত MCQ প্রশ্ন',
      descEn: 'Detailed MCQ questions in Bangla & English'
    },
    {
      icon: '🎯',
      titleBn: 'সকল বিষয় কভার',
      titleEn: 'All Topics Covered',
      descBn: 'NCTB ICT সিলেবাস থেকে শুরু করে সব টপিক',
      descEn: 'From NCTB ICT syllabus to all topics'
    },
    {
      icon: '📖',
      titleBn: 'সম্পূর্ণ গাইড',
      titleEn: 'Complete Guide',
      descBn: '২০,০০০+ শব্দের বিস্তারিত শিক্ষণ গাইড',
      descEn: '20,000+ word detailed learning guide'
    },
    {
      icon: '🏆',
      titleBn: 'জাতীয় পর্যায়ে ১ম',
      titleEn: '1st at Nationals',
      descBn: 'শূন্য থেকে শীর্ষে যাওয়ার রোডম্যাপ',
      descEn: 'Roadmap from zero to the top'
    }
  ];

  const stats = [
    { valueBn: `${totalQuestions}+`, valueEn: `${totalQuestions}+`, labelBn: 'প্রশ্ন', labelEn: 'Questions' },
    { valueBn: `${categories.length}`, valueEn: `${categories.length}`, labelBn: 'ক্যাটাগরি', labelEn: 'Categories' },
    { valueBn: '২', valueEn: '2', labelBn: 'ভাষা', labelEn: 'Languages' },
    { valueBn: '১০০%', valueEn: '100%', labelBn: 'বিনামূল্যে', labelEn: 'Free' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full text-sm font-medium">
              🎓 {language === 'bn' ? 'NHSPC ২০২৬ কুইজ প্রতিযোগিতা' : 'NHSPC 2026 Quiz Competition'}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {language === 'bn' ? (
                <>
                  জাতীয় হাইস্কুল<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                    প্রোগ্রামিং কুইজ মাস্টার
                  </span>
                </>
              ) : (
                <>
                  National High School<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                    Programming Quiz Master
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {language === 'bn'
                ? 'বাংলাদেশের সবচেয়ে সম্পূর্ণ NHSPC কুইজ প্রস্তুতি প্ল্যাটফর্ম। ১০০০+ প্রশ্ন, বিস্তারিত গাইড এবং সাফল্যের রোডম্যাপ।'
                : "Bangladesh's most complete NHSPC quiz preparation platform. 1000+ questions, detailed guides, and roadmap to success."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('quiz')}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-200"
              >
                {language === 'bn' ? '🚀 কুইজ শুরু করুন' : '🚀 Start Quiz'}
              </button>
              <button
                onClick={() => setCurrentPage('learn')}
                className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                {language === 'bn' ? '📖 শিখতে শুরু করুন' : '📖 Start Learning'}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {language === 'bn' ? stat.valueBn : stat.valueEn}
                </div>
                <div className="text-gray-600 font-medium mt-1">
                  {language === 'bn' ? stat.labelBn : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'bn' ? 'কেন NHSPC Quiz Master?' : 'Why NHSPC Quiz Master?'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'bn'
                ? 'আমাদের প্ল্যাটফর্ম আপনাকে সম্পূর্ণ প্রস্তুতিতে সাহায্য করবে'
                : 'Our platform will help you prepare completely'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'bn' ? feature.titleBn : feature.titleEn}
                </h3>
                <p className="text-gray-600">
                  {language === 'bn' ? feature.descBn : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'bn' ? 'বিষয়ভিত্তিক প্রশ্ন' : 'Topic-wise Questions'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage('questions')}
                className="bg-white p-4 rounded-xl border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 group-hover:text-purple-600">
                    {category}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-medium">
                    {categoryCount[category] || 0}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'bn' ? 'আজই শুরু করুন!' : 'Start Today!'}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {language === 'bn'
              ? 'প্রতিদিন অনুশীলন করুন এবং NHSPC ২০২৬ কুইজে জাতীয় পর্যায়ে শীর্ষে উঠুন।'
              : 'Practice daily and reach the top at NHSPC 2026 Quiz national level.'}
          </p>
          <button
            onClick={() => setCurrentPage('quiz')}
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            {language === 'bn' ? '🎯 এখনই অনুশীলন শুরু করুন' : '🎯 Start Practice Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
