import React, { useState } from 'react';
import { allQuestions, categories, getCategoryCount } from '../data/questions-index';

interface QuestionsPageProps {
  language: 'bn' | 'en';
}

const QuestionsPage: React.FC<QuestionsPageProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 20;

  const categoryCount = getCategoryCount();

  // Filter questions
  const filteredQuestions = allQuestions.filter(q => {
    const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const searchMatch = searchQuery === '' || 
      q.questionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.questionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && difficultyMatch && searchMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const paginatedQuestions = filteredQuestions.slice(startIndex, startIndex + questionsPerPage);

  const toggleQuestion = (id: number) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">🟢 Easy</span>;
      case 'medium':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">🟡 Medium</span>;
      case 'hard':
        return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">🔴 Hard</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {language === 'bn' ? '📚 প্রশ্ন ব্যাংক' : '📚 Question Bank'}
          </h1>
          <p className="text-gray-600">
            {language === 'bn' 
              ? `মোট ${allQuestions.length}+ প্রশ্ন বাংলা ও ইংরেজিতে` 
              : `Total ${allQuestions.length}+ questions in Bangla & English`}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? '🔍 অনুসন্ধান' : '🔍 Search'}
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={language === 'bn' ? 'প্রশ্ন খুঁজুন...' : 'Search questions...'}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? '📁 বিষয়' : '📁 Category'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">{language === 'bn' ? 'সকল বিষয়' : 'All Categories'} ({allQuestions.length})</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat} ({categoryCount[cat] || 0})</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? '📊 কঠিনতা' : '📊 Difficulty'}
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">{language === 'bn' ? 'সকল' : 'All'}</option>
                <option value="easy">{language === 'bn' ? '🟢 সহজ' : '🟢 Easy'}</option>
                <option value="medium">{language === 'bn' ? '🟡 মাঝারি' : '🟡 Medium'}</option>
                <option value="hard">{language === 'bn' ? '🔴 কঠিন' : '🔴 Hard'}</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {language === 'bn' 
              ? `${filteredQuestions.length} টি প্রশ্ন পাওয়া গেছে`
              : `${filteredQuestions.length} questions found`}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {paginatedQuestions.map((question, index) => (
            <div
              key={question.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleQuestion(question.id)}
                className="w-full p-4 md:p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-purple-600">#{startIndex + index + 1}</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        {question.category}
                      </span>
                      {getDifficultyBadge(question.difficulty)}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {language === 'bn' ? question.questionBn : question.questionEn}
                    </h3>
                  </div>
                  <div className={`transform transition-transform ${expandedQuestions.has(question.id) ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedQuestions.has(question.id) && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-100 pt-4">
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-3 rounded-lg ${
                          optIndex === question.correctAnswer
                            ? 'bg-green-100 border border-green-300'
                            : 'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <span className={`font-medium ${
                          optIndex === question.correctAnswer ? 'text-green-700' : 'text-gray-700'
                        }`}>
                          {String.fromCharCode(65 + optIndex)}. {language === 'bn' ? option.bn : option.en}
                          {optIndex === question.correctAnswer && ' ✓'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {question.explanation && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800">
                        <span className="font-medium">💡 {language === 'bn' ? 'ব্যাখ্যা' : 'Explanation'}:</span>{' '}
                        {language === 'bn' ? question.explanation.bn : question.explanation.en}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              ◀
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === pageNum
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-50"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
