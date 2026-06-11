import React, { useState, useEffect } from 'react';
import { Question, categories, getQuestionsByCategory, getRandomQuestions } from '../data/questions-index';

interface QuizPageProps {
  language: 'bn' | 'en';
}

const QuizPage: React.FC<QuizPageProps> = ({ language }) => {
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'result'>('setup');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(30);
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showExplanation, setShowExplanation] = useState(false);

  // Timer
  useEffect(() => {
    if (quizState !== 'active' || showExplanation) return;
    
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, quizState, showExplanation]);

  const startQuiz = () => {
    let quizQuestions: Question[];
    if (selectedCategory === 'all') {
      quizQuestions = getRandomQuestions(questionCount);
    } else {
      const categoryQuestions = getQuestionsByCategory(selectedCategory);
      quizQuestions = [...categoryQuestions].sort(() => Math.random() - 0.5).slice(0, questionCount);
    }
    
    setQuestions(quizQuestions);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTimeLeft(timePerQuestion);
    setShowExplanation(false);
    setQuizState('active');
  };

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(timePerQuestion);
    } else {
      setQuizState('result');
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const resetQuiz = () => {
    setQuizState('setup');
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  // Setup Screen
  if (quizState === 'setup') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              {language === 'bn' ? '🎯 কুইজ সেটআপ' : '🎯 Quiz Setup'}
            </h1>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'বিষয় নির্বাচন করুন' : 'Select Category'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">{language === 'bn' ? 'সকল বিষয়' : 'All Categories'}</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Question Count */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'প্রশ্ন সংখ্যা' : 'Number of Questions'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 20, 30, 50].map((num) => (
                  <button
                    key={num}
                    onClick={() => setQuestionCount(num)}
                    className={`p-3 rounded-xl font-medium transition-all ${
                      questionCount === num
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Time per Question */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'প্রতি প্রশ্নে সময় (সেকেন্ড)' : 'Time per Question (seconds)'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[15, 30, 45, 60].map((num) => (
                  <button
                    key={num}
                    onClick={() => setTimePerQuestion(num)}
                    className={`p-3 rounded-xl font-medium transition-all ${
                      timePerQuestion === num
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {num}s
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              {language === 'bn' ? '🚀 কুইজ শুরু করুন' : '🚀 Start Quiz'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz
  if (quizState === 'active' && questions.length > 0) {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    return (
      <div className="min-h-screen bg-gray-50 py-4 md:py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                {language === 'bn' ? 'প্রশ্ন' : 'Question'} {currentIndex + 1}/{questions.length}
              </span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                timeLeft <= 10 ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
              }`}>
                ⏱️ {timeLeft}s
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
            <div className="mb-2 text-sm font-medium text-purple-600">
              {currentQuestion.category} • {currentQuestion.difficulty === 'easy' ? '🟢 Easy' : currentQuestion.difficulty === 'medium' ? '🟡 Medium' : '🔴 Hard'}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              {language === 'bn' ? currentQuestion.questionBn : currentQuestion.questionEn}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = 'w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ';
                
                if (selectedAnswer !== null) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += 'bg-green-100 border-green-500 text-green-800';
                  } else if (index === selectedAnswer && !isCorrect) {
                    buttonClass += 'bg-red-100 border-red-500 text-red-800';
                  } else {
                    buttonClass += 'bg-gray-50 border-gray-200 text-gray-500';
                  }
                } else {
                  buttonClass += 'bg-white border-gray-200 hover:border-purple-400 hover:bg-purple-50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <span className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold mr-3">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium">
                        {language === 'bn' ? option.bn : option.en}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && currentQuestion.explanation && (
              <div className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'}`}>
                <p className="font-medium text-gray-800">
                  💡 {language === 'bn' ? currentQuestion.explanation.bn : currentQuestion.explanation.en}
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {selectedAnswer !== null && (
            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all"
            >
              {currentIndex < questions.length - 1
                ? (language === 'bn' ? 'পরবর্তী ➔' : 'Next ➔')
                : (language === 'bn' ? 'ফলাফল দেখুন' : 'See Results')}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results
  if (quizState === 'result') {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : percentage >= 40 ? '👍' : '💪'}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {language === 'bn' ? 'কুইজ সম্পন্ন!' : 'Quiz Complete!'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'bn' ? 'আপনার ফলাফল' : 'Your Result'}
            </p>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 mb-6">
              <div className="text-5xl font-bold mb-2">{score}/{questions.length}</div>
              <div className="text-xl">{percentage}%</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-green-100 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-green-700">{language === 'bn' ? 'সঠিক' : 'Correct'}</div>
              </div>
              <div className="bg-red-100 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
                <div className="text-sm text-red-700">{language === 'bn' ? 'ভুল' : 'Wrong'}</div>
              </div>
              <div className="bg-purple-100 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{questions.length}</div>
                <div className="text-sm text-purple-700">{language === 'bn' ? 'মোট' : 'Total'}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={startQuiz}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                {language === 'bn' ? '🔄 আবার খেলুন' : '🔄 Play Again'}
              </button>
              <button
                onClick={resetQuiz}
                className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                {language === 'bn' ? '⚙️ নতুন সেটআপ' : '⚙️ New Setup'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizPage;
