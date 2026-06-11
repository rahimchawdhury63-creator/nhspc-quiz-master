// NHSPC Quiz Questions - Main Index
import { computerFundamentalsQuestions, Question } from './questions-part1';
import { numberSystemQuestions, programmingLogicQuestions } from './questions-part2';
import { networkingQuestions, cybersecurityQuestions } from './questions-part3';
import { programmingLanguagesQuestions, dataStructureQuestions } from './questions-part4';
import { cloudComputingQuestions, msExcelQuestions, historyQuestions } from './questions-part5';
import { nctbIctQuestions, databaseQuestions, additionalQuestions } from './questions-part6';
import { moreQuestions } from './questions-part7';
import { extraQuestions } from './questions-part8';
import { additionalQuestions2 } from './questions-part9';
import { finalQuestions } from './questions-part10';

export type { Question };

// Combine all questions
export const allQuestions: Question[] = [
  ...computerFundamentalsQuestions,
  ...numberSystemQuestions,
  ...programmingLogicQuestions,
  ...networkingQuestions,
  ...cybersecurityQuestions,
  ...programmingLanguagesQuestions,
  ...dataStructureQuestions,
  ...cloudComputingQuestions,
  ...msExcelQuestions,
  ...historyQuestions,
  ...nctbIctQuestions,
  ...databaseQuestions,
  ...additionalQuestions,
  ...moreQuestions,
  ...extraQuestions,
  ...additionalQuestions2,
  ...finalQuestions,
];

// Get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return allQuestions.filter(q => q.category === category);
};

// Get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  return allQuestions.filter(q => q.difficulty === difficulty);
};

// Get random questions
export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get categories
export const categories = [
  'Computer Fundamentals',
  'Number Systems',
  'Programming Logic',
  'Networking',
  'Cybersecurity',
  'Programming Languages',
  'Data Structure',
  'Cloud Computing',
  'MS Excel',
  'History',
  'NCTB ICT',
  'Database',
  'Logic & Patterns'
];

// Question count per category
export const getCategoryCount = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  allQuestions.forEach(q => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });
  return counts;
};
