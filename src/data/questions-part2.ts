// NHSPC Quiz Questions - Part 2: Number Systems & Programming Logic
import { Question } from './questions-part1';

export const numberSystemQuestions: Question[] = [
  {
    id: 101,
    questionBn: "বাইনারি সংখ্যা পদ্ধতির বেস কত?",
    questionEn: "What is the base of binary number system?",
    options: [
      { bn: "২", en: "2" },
      { bn: "৮", en: "8" },
      { bn: "১০", en: "10" },
      { bn: "১৬", en: "16" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 102,
    questionBn: "ডেসিমাল সংখ্যা পদ্ধতির বেস কত?",
    questionEn: "What is the base of decimal number system?",
    options: [
      { bn: "২", en: "2" },
      { bn: "৮", en: "8" },
      { bn: "১০", en: "10" },
      { bn: "১৬", en: "16" }
    ],
    correctAnswer: 2,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 103,
    questionBn: "অক্টাল সংখ্যা পদ্ধতির বেস কত?",
    questionEn: "What is the base of octal number system?",
    options: [
      { bn: "২", en: "2" },
      { bn: "৮", en: "8" },
      { bn: "১০", en: "10" },
      { bn: "১৬", en: "16" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 104,
    questionBn: "হেক্সাডেসিমাল সংখ্যা পদ্ধতির বেস কত?",
    questionEn: "What is the base of hexadecimal number system?",
    options: [
      { bn: "২", en: "2" },
      { bn: "৮", en: "8" },
      { bn: "১০", en: "10" },
      { bn: "১৬", en: "16" }
    ],
    correctAnswer: 3,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 105,
    questionBn: "(১০)₁₀ এর বাইনারি মান কত?",
    questionEn: "What is the binary value of (10)₁₀?",
    options: [
      { bn: "১০১০", en: "1010" },
      { bn: "১০০০", en: "1000" },
      { bn: "১১১০", en: "1110" },
      { bn: "১০১১", en: "1011" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "easy",
    explanation: {
      bn: "১০ ÷ ২ = ৫ (অবশিষ্ট ০), ৫ ÷ ২ = ২ (অবশিষ্ট ১), ২ ÷ ২ = ১ (অবশিষ্ট ০), ১ ÷ ২ = ০ (অবশিষ্ট ১) = ১০১০",
      en: "10 ÷ 2 = 5 (rem 0), 5 ÷ 2 = 2 (rem 1), 2 ÷ 2 = 1 (rem 0), 1 ÷ 2 = 0 (rem 1) = 1010"
    }
  },
  {
    id: 106,
    questionBn: "(১১১১)₂ এর ডেসিমাল মান কত?",
    questionEn: "What is the decimal value of (1111)₂?",
    options: [
      { bn: "১৪", en: "14" },
      { bn: "১৫", en: "15" },
      { bn: "১৬", en: "16" },
      { bn: "১৭", en: "17" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "easy",
    explanation: {
      bn: "১×২³ + ১×২² + ১×২¹ + ১×২⁰ = ৮ + ৪ + ২ + ১ = ১৫",
      en: "1×2³ + 1×2² + 1×2¹ + 1×2⁰ = 8 + 4 + 2 + 1 = 15"
    }
  },
  {
    id: 107,
    questionBn: "(১০১০)₂ + (০১০১)₂ = ?",
    questionEn: "(1010)₂ + (0101)₂ = ?",
    options: [
      { bn: "(১১১০)₂", en: "(1110)₂" },
      { bn: "(১১১১)₂", en: "(1111)₂" },
      { bn: "(১০০০)₂", en: "(1000)₂" },
      { bn: "(১০১১)₂", en: "(1011)₂" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 108,
    questionBn: "হেক্সাডেসিমালে A এর মান কত?",
    questionEn: "What is the value of A in hexadecimal?",
    options: [
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" },
      { bn: "১২", en: "12" },
      { bn: "১৫", en: "15" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 109,
    questionBn: "হেক্সাডেসিমালে F এর মান কত?",
    questionEn: "What is the value of F in hexadecimal?",
    options: [
      { bn: "১০", en: "10" },
      { bn: "১২", en: "12" },
      { bn: "১৪", en: "14" },
      { bn: "১৫", en: "15" }
    ],
    correctAnswer: 3,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 110,
    questionBn: "(২৫৫)₁₀ এর হেক্সাডেসিমাল মান কত?",
    questionEn: "What is the hexadecimal value of (255)₁₀?",
    options: [
      { bn: "EE", en: "EE" },
      { bn: "FF", en: "FF" },
      { bn: "FE", en: "FE" },
      { bn: "EF", en: "EF" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 111,
    questionBn: "(১৭)₈ এর ডেসিমাল মান কত?",
    questionEn: "What is the decimal value of (17)₈?",
    options: [
      { bn: "১৫", en: "15" },
      { bn: "১৬", en: "16" },
      { bn: "১৭", en: "17" },
      { bn: "১৪", en: "14" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "medium",
    explanation: {
      bn: "১×৮¹ + ৭×৮⁰ = ৮ + ৭ = ১৫",
      en: "1×8¹ + 7×8⁰ = 8 + 7 = 15"
    }
  },
  {
    id: 112,
    questionBn: "১ বাইট সমান কত বিট?",
    questionEn: "How many bits are in 1 byte?",
    options: [
      { bn: "৪ বিট", en: "4 bits" },
      { bn: "৮ বিট", en: "8 bits" },
      { bn: "১৬ বিট", en: "16 bits" },
      { bn: "৩২ বিট", en: "32 bits" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 113,
    questionBn: "১ নিবল সমান কত বিট?",
    questionEn: "How many bits are in 1 nibble?",
    options: [
      { bn: "২ বিট", en: "2 bits" },
      { bn: "৪ বিট", en: "4 bits" },
      { bn: "৮ বিট", en: "8 bits" },
      { bn: "১৬ বিট", en: "16 bits" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 114,
    questionBn: "বাইনারি ১ + ১ = ?",
    questionEn: "Binary 1 + 1 = ?",
    options: [
      { bn: "২", en: "2" },
      { bn: "০", en: "0" },
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" }
    ],
    correctAnswer: 2,
    category: "Number Systems",
    difficulty: "easy",
    explanation: {
      bn: "বাইনারিতে ১ + ১ = ১০ (ক্যারি সহ)",
      en: "In binary, 1 + 1 = 10 (with carry)"
    }
  },
  {
    id: 115,
    questionBn: "(২০)₁₀ এর বাইনারি মান কত?",
    questionEn: "What is the binary value of (20)₁₀?",
    options: [
      { bn: "১০১০০", en: "10100" },
      { bn: "১০০১০", en: "10010" },
      { bn: "১১০০০", en: "11000" },
      { bn: "১০১১০", en: "10110" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 116,
    questionBn: "(১০০)₁₀ এর বাইনারি মান কত?",
    questionEn: "What is the binary value of (100)₁₀?",
    options: [
      { bn: "১১০০১০০", en: "1100100" },
      { bn: "১১০০০১০", en: "1100010" },
      { bn: "১০১০১০০", en: "1010100" },
      { bn: "১১১০০০০", en: "1110000" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "hard"
  },
  {
    id: 117,
    questionBn: "2's complement পদ্ধতিতে -৫ এর ৪ বিট উপস্থাপনা কী?",
    questionEn: "What is the 4-bit 2's complement representation of -5?",
    options: [
      { bn: "১০১১", en: "1011" },
      { bn: "১১০১", en: "1101" },
      { bn: "১১১০", en: "1110" },
      { bn: "১০১০", en: "1010" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "hard",
    explanation: {
      bn: "৫ = ০১০১, 1's complement = ১০১০, 2's complement = ১০১১",
      en: "5 = 0101, 1's complement = 1010, 2's complement = 1011"
    }
  },
  {
    id: 118,
    questionBn: "ASCII কোডে 'A' এর মান কত?",
    questionEn: "What is the ASCII value of 'A'?",
    options: [
      { bn: "৬৫", en: "65" },
      { bn: "৯৭", en: "97" },
      { bn: "৫৫", en: "55" },
      { bn: "৪৮", en: "48" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 119,
    questionBn: "ASCII কোডে 'a' এর মান কত?",
    questionEn: "What is the ASCII value of 'a'?",
    options: [
      { bn: "৬৫", en: "65" },
      { bn: "৯৭", en: "97" },
      { bn: "১২২", en: "122" },
      { bn: "৯০", en: "90" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 120,
    questionBn: "ASCII কোডে '0' এর মান কত?",
    questionEn: "What is the ASCII value of '0'?",
    options: [
      { bn: "০", en: "0" },
      { bn: "৪৮", en: "48" },
      { bn: "৫৭", en: "57" },
      { bn: "৬৫", en: "65" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 121,
    questionBn: "BCD এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of BCD?",
    options: [
      { bn: "বাইনারি কোডেড ডেসিমাল", en: "Binary Coded Decimal" },
      { bn: "বেসিক কোডেড ডেসিমাল", en: "Basic Coded Decimal" },
      { bn: "বাইনারি কম্পিউটার ডেসিমাল", en: "Binary Computer Decimal" },
      { bn: "বেস কোডেড ডিজিট", en: "Base Coded Digit" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 122,
    questionBn: "(১১০০)₂ × (১০)₂ = ?",
    questionEn: "(1100)₂ × (10)₂ = ?",
    options: [
      { bn: "(১১০০০)₂", en: "(11000)₂" },
      { bn: "(১১১০০)₂", en: "(11100)₂" },
      { bn: "(১০১০০)₂", en: "(10100)₂" },
      { bn: "(১১০১০)₂", en: "(11010)₂" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "hard"
  },
  {
    id: 123,
    questionBn: "Unicode কেন ব্যবহার করা হয়?",
    questionEn: "Why is Unicode used?",
    options: [
      { bn: "শুধু ইংরেজি বর্ণ লেখার জন্য", en: "For writing only English letters" },
      { bn: "বিশ্বের সকল ভাষার বর্ণ উপস্থাপনের জন্য", en: "For representing characters of all languages" },
      { bn: "শুধু সংখ্যা লেখার জন্য", en: "For writing only numbers" },
      { bn: "গ্রাফিক্স তৈরির জন্য", en: "For creating graphics" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 124,
    questionBn: "গ্রে কোডে ১০ এর মান কত?",
    questionEn: "What is the Gray code value of 10?",
    options: [
      { bn: "১১১০", en: "1110" },
      { bn: "১১১১", en: "1111" },
      { bn: "১১০১", en: "1101" },
      { bn: "১০০০", en: "1000" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "hard"
  },
  {
    id: 125,
    questionBn: "১ ওয়ার্ড সমান কত বাইট?",
    questionEn: "How many bytes are in 1 word?",
    options: [
      { bn: "১ বাইট", en: "1 byte" },
      { bn: "২ বাইট", en: "2 bytes" },
      { bn: "৪ বাইট", en: "4 bytes" },
      { bn: "কম্পিউটার নির্ভর", en: "Depends on computer" }
    ],
    correctAnswer: 3,
    category: "Number Systems",
    difficulty: "hard"
  }
];

export const programmingLogicQuestions: Question[] = [
  {
    id: 151,
    questionBn: "অ্যালগরিদম কী?",
    questionEn: "What is an algorithm?",
    options: [
      { bn: "একটি প্রোগ্রামিং ভাষা", en: "A programming language" },
      { bn: "সমস্যা সমাধানের ধাপে ধাপে নির্দেশনা", en: "Step by step instructions to solve a problem" },
      { bn: "একটি সফটওয়্যার", en: "A software" },
      { bn: "একটি হার্ডওয়্যার", en: "A hardware" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 152,
    questionBn: "ফ্লোচার্ট কী?",
    questionEn: "What is a flowchart?",
    options: [
      { bn: "একটি প্রোগ্রাম", en: "A program" },
      { bn: "অ্যালগরিদমের চিত্ররূপ উপস্থাপনা", en: "Pictorial representation of algorithm" },
      { bn: "একটি চার্ট টাইপ", en: "A chart type" },
      { bn: "গ্রাফিক্স সফটওয়্যার", en: "Graphics software" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 153,
    questionBn: "ফ্লোচার্টে সিদ্ধান্ত নেওয়ার জন্য কোন আকৃতি ব্যবহৃত হয়?",
    questionEn: "Which shape is used for decision making in flowchart?",
    options: [
      { bn: "আয়তক্ষেত্র", en: "Rectangle" },
      { bn: "রম্বস/ডায়মন্ড", en: "Diamond/Rhombus" },
      { bn: "বৃত্ত", en: "Circle" },
      { bn: "সমান্তরিক", en: "Parallelogram" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 154,
    questionBn: "ফ্লোচার্টে ইনপুট/আউটপুটের জন্য কোন আকৃতি ব্যবহৃত হয়?",
    questionEn: "Which shape is used for input/output in flowchart?",
    options: [
      { bn: "আয়তক্ষেত্র", en: "Rectangle" },
      { bn: "রম্বস", en: "Diamond" },
      { bn: "সমান্তরিক", en: "Parallelogram" },
      { bn: "বৃত্ত", en: "Circle" }
    ],
    correctAnswer: 2,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 155,
    questionBn: "ফ্লোচার্টে প্রসেস/কাজের জন্য কোন আকৃতি ব্যবহৃত হয়?",
    questionEn: "Which shape is used for process in flowchart?",
    options: [
      { bn: "আয়তক্ষেত্র", en: "Rectangle" },
      { bn: "রম্বস", en: "Diamond" },
      { bn: "সমান্তরিক", en: "Parallelogram" },
      { bn: "ডিম্বাকৃতি", en: "Oval" }
    ],
    correctAnswer: 0,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 156,
    questionBn: "ফ্লোচার্টে শুরু/শেষের জন্য কোন আকৃতি ব্যবহৃত হয়?",
    questionEn: "Which shape is used for start/end in flowchart?",
    options: [
      { bn: "আয়তক্ষেত্র", en: "Rectangle" },
      { bn: "রম্বস", en: "Diamond" },
      { bn: "সমান্তরিক", en: "Parallelogram" },
      { bn: "ডিম্বাকৃতি/ওভাল", en: "Oval" }
    ],
    correctAnswer: 3,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 157,
    questionBn: "if-else কোন ধরনের স্টেটমেন্ট?",
    questionEn: "What type of statement is if-else?",
    options: [
      { bn: "লুপ", en: "Loop" },
      { bn: "কন্ডিশনাল/শর্তমূলক", en: "Conditional" },
      { bn: "ফাংশন", en: "Function" },
      { bn: "ভেরিয়েবল", en: "Variable" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 158,
    questionBn: "for, while, do-while কোন ধরনের স্টেটমেন্ট?",
    questionEn: "What type of statements are for, while, do-while?",
    options: [
      { bn: "কন্ডিশনাল", en: "Conditional" },
      { bn: "লুপ/পুনরাবৃত্তি", en: "Loop/Iteration" },
      { bn: "ফাংশন", en: "Function" },
      { bn: "ডিক্লেয়ারেশন", en: "Declaration" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 159,
    questionBn: "প্রোগ্রামিংয়ে ++ অপারেটর কী করে?",
    questionEn: "What does the ++ operator do in programming?",
    options: [
      { bn: "১ কমায়", en: "Decrements by 1" },
      { bn: "১ বাড়ায়", en: "Increments by 1" },
      { bn: "গুণ করে", en: "Multiplies" },
      { bn: "ভাগ করে", en: "Divides" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 160,
    questionBn: "প্রোগ্রামিংয়ে == অপারেটর কী করে?",
    questionEn: "What does the == operator do in programming?",
    options: [
      { bn: "অ্যাসাইন করে", en: "Assigns" },
      { bn: "তুলনা করে (সমান কিনা)", en: "Compares (equals)" },
      { bn: "যোগ করে", en: "Adds" },
      { bn: "বিয়োগ করে", en: "Subtracts" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 161,
    questionBn: "AND গেটের আউটপুট কখন ১ হবে?",
    questionEn: "When will AND gate output be 1?",
    options: [
      { bn: "যেকোনো ইনপুট ১ হলে", en: "When any input is 1" },
      { bn: "সব ইনপুট ১ হলে", en: "When all inputs are 1" },
      { bn: "সব ইনপুট ০ হলে", en: "When all inputs are 0" },
      { bn: "যেকোনো ইনপুট ০ হলে", en: "When any input is 0" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 162,
    questionBn: "OR গেটের আউটপুট কখন ১ হবে?",
    questionEn: "When will OR gate output be 1?",
    options: [
      { bn: "সব ইনপুট ১ হলে", en: "When all inputs are 1" },
      { bn: "যেকোনো ইনপুট ১ হলে", en: "When any input is 1" },
      { bn: "সব ইনপুট ০ হলে", en: "When all inputs are 0" },
      { bn: "কখনোই না", en: "Never" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 163,
    questionBn: "NOT গেট কী করে?",
    questionEn: "What does NOT gate do?",
    options: [
      { bn: "ইনপুট অপরিবর্তিত রাখে", en: "Keeps input unchanged" },
      { bn: "ইনপুট উল্টে দেয়", en: "Inverts the input" },
      { bn: "ইনপুট দ্বিগুণ করে", en: "Doubles the input" },
      { bn: "ইনপুট অর্ধেক করে", en: "Halves the input" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 164,
    questionBn: "XOR গেটের আউটপুট কখন ১ হবে?",
    questionEn: "When will XOR gate output be 1?",
    options: [
      { bn: "সব ইনপুট সমান হলে", en: "When all inputs are same" },
      { bn: "ইনপুট ভিন্ন হলে", en: "When inputs are different" },
      { bn: "সব ইনপুট ১ হলে", en: "When all inputs are 1" },
      { bn: "সব ইনপুট ০ হলে", en: "When all inputs are 0" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 165,
    questionBn: "1 AND 0 = ?",
    questionEn: "1 AND 0 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "২", en: "2" },
      { bn: "নির্ধারিত নয়", en: "Undefined" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 166,
    questionBn: "1 OR 0 = ?",
    questionEn: "1 OR 0 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "২", en: "2" },
      { bn: "নির্ধারিত নয়", en: "Undefined" }
    ],
    correctAnswer: 0,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 167,
    questionBn: "NOT 1 = ?",
    questionEn: "NOT 1 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "-১", en: "-1" },
      { bn: "২", en: "2" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 168,
    questionBn: "1 XOR 1 = ?",
    questionEn: "1 XOR 1 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "২", en: "2" },
      { bn: "১০", en: "10" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "easy"
  },
  {
    id: 169,
    questionBn: "NAND গেট কী?",
    questionEn: "What is NAND gate?",
    options: [
      { bn: "NOT + OR", en: "NOT + OR" },
      { bn: "NOT + AND", en: "NOT + AND" },
      { bn: "NOT + XOR", en: "NOT + XOR" },
      { bn: "AND + OR", en: "AND + OR" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 170,
    questionBn: "NOR গেট কী?",
    questionEn: "What is NOR gate?",
    options: [
      { bn: "NOT + OR", en: "NOT + OR" },
      { bn: "NOT + AND", en: "NOT + AND" },
      { bn: "NOT + XOR", en: "NOT + XOR" },
      { bn: "AND + OR", en: "AND + OR" }
    ],
    correctAnswer: 0,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 171,
    questionBn: "কোন গেটকে ইউনিভার্সাল গেট বলা হয়?",
    questionEn: "Which gate is called universal gate?",
    options: [
      { bn: "AND", en: "AND" },
      { bn: "OR", en: "OR" },
      { bn: "NAND ও NOR", en: "NAND and NOR" },
      { bn: "XOR", en: "XOR" }
    ],
    correctAnswer: 2,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 172,
    questionBn: "একটি লুপে break স্টেটমেন্ট কী করে?",
    questionEn: "What does break statement do in a loop?",
    options: [
      { bn: "লুপ চালিয়ে যায়", en: "Continues the loop" },
      { bn: "লুপ থেকে বের হয়ে যায়", en: "Exits from the loop" },
      { bn: "লুপ পুনরায় শুরু করে", en: "Restarts the loop" },
      { bn: "কিছুই করে না", en: "Does nothing" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 173,
    questionBn: "একটি লুপে continue স্টেটমেন্ট কী করে?",
    questionEn: "What does continue statement do in a loop?",
    options: [
      { bn: "লুপ থেকে বের হয়ে যায়", en: "Exits from the loop" },
      { bn: "পরবর্তী iteration এ যায়", en: "Goes to next iteration" },
      { bn: "প্রোগ্রাম বন্ধ করে", en: "Stops the program" },
      { bn: "কিছুই করে না", en: "Does nothing" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 174,
    questionBn: "switch-case স্টেটমেন্ট কখন ব্যবহার করা হয়?",
    questionEn: "When is switch-case statement used?",
    options: [
      { bn: "একটি শর্ত পরীক্ষার জন্য", en: "For testing one condition" },
      { bn: "একাধিক শর্ত পরীক্ষার জন্য", en: "For testing multiple conditions" },
      { bn: "লুপের জন্য", en: "For looping" },
      { bn: "ফাংশন তৈরির জন্য", en: "For creating functions" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 175,
    questionBn: "রিকার্সন কী?",
    questionEn: "What is recursion?",
    options: [
      { bn: "লুপ ব্যবহার", en: "Using loop" },
      { bn: "ফাংশন যা নিজেকে কল করে", en: "Function that calls itself" },
      { bn: "ভেরিয়েবল ডিক্লেয়ার করা", en: "Declaring variables" },
      { bn: "ইনপুট নেওয়া", en: "Taking input" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "hard"
  }
];
