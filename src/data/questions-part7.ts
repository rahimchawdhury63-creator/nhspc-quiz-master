// NHSPC Quiz Questions - Part 7: More Questions Across All Categories
import { Question } from './questions-part1';

export const moreQuestions: Question[] = [
  // More Computer Fundamentals
  {
    id: 801,
    questionBn: "BIOS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of BIOS?",
    options: [
      { bn: "বেসিক ইনপুট আউটপুট সিস্টেম", en: "Basic Input Output System" },
      { bn: "বাইনারি ইনপুট আউটপুট সিস্টেম", en: "Binary Input Output System" },
      { bn: "বেস্ট ইনপুট আউটপুট সিস্টেম", en: "Best Input Output System" },
      { bn: "বেসিক ইন্টার্নাল অপারেটিং সিস্টেম", en: "Basic Internal Operating System" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 802,
    questionBn: "POST এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of POST?",
    options: [
      { bn: "পাওয়ার অন সেলফ টেস্ট", en: "Power On Self Test" },
      { bn: "প্রাইমারি অন সিস্টেম টেস্ট", en: "Primary On System Test" },
      { bn: "প্রসেসর অন সেলফ টেস্ট", en: "Processor On Self Test" },
      { bn: "পাওয়ার অফ সিস্টেম টেস্ট", en: "Power Off System Test" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 803,
    questionBn: "কম্পিউটারের বুটিং প্রক্রিয়া কী?",
    questionEn: "What is computer booting process?",
    options: [
      { bn: "কম্পিউটার বন্ধ করা", en: "Shutting down computer" },
      { bn: "কম্পিউটার চালু করার প্রক্রিয়া", en: "Process of starting computer" },
      { bn: "প্রোগ্রাম ইনস্টল করা", en: "Installing programs" },
      { bn: "ফাইল ডিলিট করা", en: "Deleting files" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 804,
    questionBn: "মাদারবোর্ড কী?",
    questionEn: "What is a motherboard?",
    options: [
      { bn: "একটি সফটওয়্যার", en: "A software" },
      { bn: "কম্পিউটারের প্রধান সার্কিট বোর্ড", en: "Main circuit board of computer" },
      { bn: "একটি মনিটর", en: "A monitor" },
      { bn: "একটি প্রিন্টার", en: "A printer" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 805,
    questionBn: "GPU এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of GPU?",
    options: [
      { bn: "গ্রাফিক্স প্রসেসিং ইউনিট", en: "Graphics Processing Unit" },
      { bn: "জেনারেল প্রসেসিং ইউনিট", en: "General Processing Unit" },
      { bn: "গ্লোবাল প্রসেসিং ইউনিট", en: "Global Processing Unit" },
      { bn: "গ্রাফিক পাওয়ার ইউনিট", en: "Graphic Power Unit" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 806,
    questionBn: "পোর্টের কাজ কী?",
    questionEn: "What is the function of a port?",
    options: [
      { bn: "ডেটা প্রসেস করা", en: "Processing data" },
      { bn: "বাহ্যিক ডিভাইস সংযোগ করা", en: "Connecting external devices" },
      { bn: "ডেটা স্টোর করা", en: "Storing data" },
      { bn: "ডেটা ডিলিট করা", en: "Deleting data" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 807,
    questionBn: "HDMI এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of HDMI?",
    options: [
      { bn: "হাই ডেফিনিশন মাল্টিমিডিয়া ইন্টারফেস", en: "High Definition Multimedia Interface" },
      { bn: "হাই ডিসপ্লে মাল্টিমিডিয়া ইন্টারফেস", en: "High Display Multimedia Interface" },
      { bn: "হাই ডেটা মাল্টিমিডিয়া ইন্টারফেস", en: "High Data Multimedia Interface" },
      { bn: "হার্ড ডিস্ক মাল্টিমিডিয়া ইন্টারফেস", en: "Hard Disk Multimedia Interface" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 808,
    questionBn: "SMPS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of SMPS?",
    options: [
      { bn: "সুইচ মোড পাওয়ার সাপ্লাই", en: "Switch Mode Power Supply" },
      { bn: "সিম্পল মোড পাওয়ার সাপ্লাই", en: "Simple Mode Power Supply" },
      { bn: "স্ট্যান্ডার্ড মোড পাওয়ার সাপ্লাই", en: "Standard Mode Power Supply" },
      { bn: "স্পেশাল মোড পাওয়ার সাপ্লাই", en: "Special Mode Power Supply" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  // More Programming
  {
    id: 809,
    questionBn: "প্রোগ্রামিংয়ে সিনট্যাক্স এরর কী?",
    questionEn: "What is a syntax error in programming?",
    options: [
      { bn: "লজিক্যাল ভুল", en: "Logical mistake" },
      { bn: "ব্যাকরণগত ভুল", en: "Grammatical mistake" },
      { bn: "রানটাইম এরর", en: "Runtime error" },
      { bn: "কোনো ভুল নেই", en: "No mistake" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 810,
    questionBn: "ডিবাগিং কী?",
    questionEn: "What is debugging?",
    options: [
      { bn: "প্রোগ্রাম লেখা", en: "Writing program" },
      { bn: "প্রোগ্রামের ভুল খুঁজে সংশোধন করা", en: "Finding and fixing errors in program" },
      { bn: "প্রোগ্রাম রান করা", en: "Running program" },
      { bn: "প্রোগ্রাম ডিলিট করা", en: "Deleting program" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 811,
    questionBn: "IDE এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of IDE?",
    options: [
      { bn: "ইন্টিগ্রেটেড ডেভেলপমেন্ট এনভায়রনমেন্ট", en: "Integrated Development Environment" },
      { bn: "ইন্টারনাল ডেভেলপমেন্ট এনভায়রনমেন্ট", en: "Internal Development Environment" },
      { bn: "ইন্টারনেট ডেভেলপমেন্ট এনভায়রনমেন্ট", en: "Internet Development Environment" },
      { bn: "ইন্টেলিজেন্ট ডেভেলপমেন্ট এনভায়রনমেন্ট", en: "Intelligent Development Environment" }
    ],
    correctAnswer: 0,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 812,
    questionBn: "ভেরিয়েবল কী?",
    questionEn: "What is a variable?",
    options: [
      { bn: "স্থির মান", en: "Fixed value" },
      { bn: "ডেটা সংরক্ষণের জন্য নামকৃত মেমরি অবস্থান", en: "Named memory location for storing data" },
      { bn: "একটি ফাংশন", en: "A function" },
      { bn: "একটি লুপ", en: "A loop" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 813,
    questionBn: "কনস্ট্যান্ট কী?",
    questionEn: "What is a constant?",
    options: [
      { bn: "পরিবর্তনশীল মান", en: "Changeable value" },
      { bn: "অপরিবর্তনীয় মান", en: "Unchangeable value" },
      { bn: "ফাংশন", en: "Function" },
      { bn: "লুপ", en: "Loop" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 814,
    questionBn: "ফাংশন কী?",
    questionEn: "What is a function?",
    options: [
      { bn: "পুনরাবৃত্তি", en: "Repetition" },
      { bn: "নির্দিষ্ট কাজ সম্পাদনকারী কোড ব্লক", en: "Block of code that performs specific task" },
      { bn: "শর্ত", en: "Condition" },
      { bn: "ভেরিয়েবল", en: "Variable" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "easy"
  },
  {
    id: 815,
    questionBn: "প্যারামিটার কী?",
    questionEn: "What is a parameter?",
    options: [
      { bn: "ফাংশনে পাঠানো মান", en: "Value passed to function" },
      { bn: "লুপ", en: "Loop" },
      { bn: "শর্ত", en: "Condition" },
      { bn: "অ্যারে", en: "Array" }
    ],
    correctAnswer: 0,
    category: "Programming Languages",
    difficulty: "medium"
  },
  {
    id: 816,
    questionBn: "রিটার্ন ভ্যালু কী?",
    questionEn: "What is a return value?",
    options: [
      { bn: "ফাংশনে প্রবেশ করা মান", en: "Value entering function" },
      { bn: "ফাংশন থেকে ফেরত আসা মান", en: "Value returned from function" },
      { bn: "ভেরিয়েবল", en: "Variable" },
      { bn: "অ্যারে", en: "Array" }
    ],
    correctAnswer: 1,
    category: "Programming Languages",
    difficulty: "medium"
  },
  // More Number Systems
  {
    id: 817,
    questionBn: "(৫০)₁₀ এর বাইনারি মান কত?",
    questionEn: "What is the binary value of (50)₁₀?",
    options: [
      { bn: "১১০০১০", en: "110010" },
      { bn: "১১০১০০", en: "110100" },
      { bn: "১০১০১০", en: "101010" },
      { bn: "১১১১০০", en: "111100" }
    ],
    correctAnswer: 0,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 818,
    questionBn: "(১০০০০০)₂ এর ডেসিমাল মান কত?",
    questionEn: "What is the decimal value of (100000)₂?",
    options: [
      { bn: "১৬", en: "16" },
      { bn: "৩২", en: "32" },
      { bn: "৬৪", en: "64" },
      { bn: "১২৮", en: "128" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "medium"
  },
  {
    id: 819,
    questionBn: "হেক্সাডেসিমালে B এর মান কত?",
    questionEn: "What is the value of B in hexadecimal?",
    options: [
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" },
      { bn: "১২", en: "12" },
      { bn: "১৩", en: "13" }
    ],
    correctAnswer: 1,
    category: "Number Systems",
    difficulty: "easy"
  },
  {
    id: 820,
    questionBn: "হেক্সাডেসিমালে C এর মান কত?",
    questionEn: "What is the value of C in hexadecimal?",
    options: [
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" },
      { bn: "১২", en: "12" },
      { bn: "১৩", en: "13" }
    ],
    correctAnswer: 2,
    category: "Number Systems",
    difficulty: "easy"
  },
  // More Networking
  {
    id: 821,
    questionBn: "MAC অ্যাড্রেস কী?",
    questionEn: "What is MAC address?",
    options: [
      { bn: "সফটওয়্যার অ্যাড্রেস", en: "Software address" },
      { bn: "হার্ডওয়্যার অ্যাড্রেস", en: "Hardware address" },
      { bn: "ওয়েব অ্যাড্রেস", en: "Web address" },
      { bn: "ইমেইল অ্যাড্রেস", en: "Email address" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 822,
    questionBn: "নেটওয়ার্ক টোপোলজি কী?",
    questionEn: "What is network topology?",
    options: [
      { bn: "নেটওয়ার্কের গতি", en: "Network speed" },
      { bn: "নেটওয়ার্কের গঠন/বিন্যাস", en: "Network structure/arrangement" },
      { bn: "নেটওয়ার্কের আকার", en: "Network size" },
      { bn: "নেটওয়ার্কের রঙ", en: "Network color" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 823,
    questionBn: "স্টার টোপোলজিতে সেন্ট্রাল ডিভাইস কী?",
    questionEn: "What is the central device in star topology?",
    options: [
      { bn: "প্রিন্টার", en: "Printer" },
      { bn: "হাব/সুইচ", en: "Hub/Switch" },
      { bn: "মনিটর", en: "Monitor" },
      { bn: "কীবোর্ড", en: "Keyboard" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 824,
    questionBn: "বাস টোপোলজিতে সব ডিভাইস কিসের সাথে সংযুক্ত?",
    questionEn: "In bus topology, all devices are connected to what?",
    options: [
      { bn: "একটি সেন্ট্রাল হাব", en: "A central hub" },
      { bn: "একটি একক ক্যাবল/ব্যাকবোন", en: "A single cable/backbone" },
      { bn: "একটি রিং", en: "A ring" },
      { bn: "একটি মেশ", en: "A mesh" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 825,
    questionBn: "রিং টোপোলজিতে ডেটা কীভাবে প্রবাহিত হয়?",
    questionEn: "How does data flow in ring topology?",
    options: [
      { bn: "যেকোনো দিকে", en: "In any direction" },
      { bn: "বৃত্তাকারে একদিকে", en: "Circularly in one direction" },
      { bn: "সরাসরি", en: "Directly" },
      { bn: "র‍্যান্ডমলি", en: "Randomly" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  // More Security
  {
    id: 826,
    questionBn: "ব্রুট ফোর্স অ্যাটাক কী?",
    questionEn: "What is brute force attack?",
    options: [
      { bn: "ফিশিং", en: "Phishing" },
      { bn: "সব সম্ভাব্য পাসওয়ার্ড ট্রাই করা", en: "Trying all possible passwords" },
      { bn: "ভাইরাস ছড়ানো", en: "Spreading virus" },
      { bn: "ডেটা ব্যাকআপ", en: "Data backup" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 827,
    questionBn: "ফায়ারওয়ালের প্রধান কাজ কী?",
    questionEn: "What is the main function of firewall?",
    options: [
      { bn: "ডেটা স্টোর করা", en: "Storing data" },
      { bn: "অননুমোদিত অ্যাক্সেস রোধ করা", en: "Preventing unauthorized access" },
      { bn: "ইমেইল পাঠানো", en: "Sending email" },
      { bn: "ফাইল শেয়ার করা", en: "Sharing files" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 828,
    questionBn: "অ্যাডওয়্যার কী?",
    questionEn: "What is adware?",
    options: [
      { bn: "ভাইরাস", en: "Virus" },
      { bn: "বিজ্ঞাপন প্রদর্শনকারী সফটওয়্যার", en: "Software that displays advertisements" },
      { bn: "অ্যান্টিভাইরাস", en: "Antivirus" },
      { bn: "ওয়েব ব্রাউজার", en: "Web browser" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 829,
    questionBn: "বটনেট কী?",
    questionEn: "What is a botnet?",
    options: [
      { bn: "একটি রোবট", en: "A robot" },
      { bn: "ম্যালওয়্যার দ্বারা সংক্রমিত কম্পিউটারের নেটওয়ার্ক", en: "Network of malware-infected computers" },
      { bn: "একটি ব্রাউজার", en: "A browser" },
      { bn: "একটি সার্চ ইঞ্জিন", en: "A search engine" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "hard"
  },
  {
    id: 830,
    questionBn: "Man-in-the-Middle অ্যাটাক কী?",
    questionEn: "What is Man-in-the-Middle attack?",
    options: [
      { bn: "সরাসরি হ্যাকিং", en: "Direct hacking" },
      { bn: "দুই পক্ষের মধ্যে যোগাযোগে গোপনে ঢুকে পড়া", en: "Secretly intercepting communication between two parties" },
      { bn: "ভাইরাস ছড়ানো", en: "Spreading virus" },
      { bn: "ফাইল ডিলিট করা", en: "Deleting files" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "hard"
  },
  // More Logic
  {
    id: 831,
    questionBn: "NAND গেটের ট্রুথ টেবিল অনুযায়ী 1 NAND 1 = ?",
    questionEn: "According to NAND gate truth table, 1 NAND 1 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 832,
    questionBn: "NOR গেটের ট্রুথ টেবিল অনুযায়ী 0 NOR 0 = ?",
    questionEn: "According to NOR gate truth table, 0 NOR 0 = ?",
    options: [
      { bn: "১", en: "1" },
      { bn: "০", en: "0" },
      { bn: "১০", en: "10" },
      { bn: "১১", en: "11" }
    ],
    correctAnswer: 0,
    category: "Programming Logic",
    difficulty: "medium"
  },
  {
    id: 833,
    questionBn: "ডি মরগ্যানের থিওরেম অনুযায়ী NOT(A AND B) = ?",
    questionEn: "According to De Morgan's theorem, NOT(A AND B) = ?",
    options: [
      { bn: "NOT A AND NOT B", en: "NOT A AND NOT B" },
      { bn: "NOT A OR NOT B", en: "NOT A OR NOT B" },
      { bn: "A AND B", en: "A AND B" },
      { bn: "A OR B", en: "A OR B" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "hard"
  },
  {
    id: 834,
    questionBn: "হাফ অ্যাডার কী?",
    questionEn: "What is a half adder?",
    options: [
      { bn: "দুটি বিট যোগ করে সাম ও ক্যারি দেয়", en: "Adds two bits and gives sum and carry" },
      { bn: "তিনটি বিট যোগ করে", en: "Adds three bits" },
      { bn: "বিট বিয়োগ করে", en: "Subtracts bits" },
      { bn: "বিট গুণ করে", en: "Multiplies bits" }
    ],
    correctAnswer: 0,
    category: "Programming Logic",
    difficulty: "hard"
  },
  {
    id: 835,
    questionBn: "ফুল অ্যাডার কী?",
    questionEn: "What is a full adder?",
    options: [
      { bn: "দুটি বিট যোগ করে", en: "Adds two bits" },
      { bn: "তিনটি বিট যোগ করে (ক্যারি সহ)", en: "Adds three bits (including carry)" },
      { bn: "বিট বিয়োগ করে", en: "Subtracts bits" },
      { bn: "বিট গুণ করে", en: "Multiplies bits" }
    ],
    correctAnswer: 1,
    category: "Programming Logic",
    difficulty: "hard"
  },
  // More Data Structure
  {
    id: 836,
    questionBn: "সিঙ্গলি লিংকড লিস্টে প্রতিটি নোডে কী থাকে?",
    questionEn: "What does each node contain in a singly linked list?",
    options: [
      { bn: "শুধু ডেটা", en: "Only data" },
      { bn: "ডেটা ও পরবর্তী নোডের পয়েন্টার", en: "Data and pointer to next node" },
      { bn: "শুধু পয়েন্টার", en: "Only pointer" },
      { bn: "কিছুই না", en: "Nothing" }
    ],
    correctAnswer: 1,
    category: "Data Structure",
    difficulty: "medium"
  },
  {
    id: 837,
    questionBn: "ডাবলি লিংকড লিস্টে প্রতিটি নোডে কী থাকে?",
    questionEn: "What does each node contain in a doubly linked list?",
    options: [
      { bn: "শুধু ডেটা", en: "Only data" },
      { bn: "ডেটা ও একটি পয়েন্টার", en: "Data and one pointer" },
      { bn: "ডেটা, আগের ও পরের নোডের পয়েন্টার", en: "Data, pointers to previous and next nodes" },
      { bn: "শুধু পয়েন্টার", en: "Only pointers" }
    ],
    correctAnswer: 2,
    category: "Data Structure",
    difficulty: "medium"
  },
  {
    id: 838,
    questionBn: "সার্কুলার কিউ কী?",
    questionEn: "What is a circular queue?",
    options: [
      { bn: "সাধারণ কিউ", en: "Normal queue" },
      { bn: "শেষ ও শুরু সংযুক্ত কিউ", en: "Queue with end connected to start" },
      { bn: "স্ট্যাক", en: "Stack" },
      { bn: "অ্যারে", en: "Array" }
    ],
    correctAnswer: 1,
    category: "Data Structure",
    difficulty: "medium"
  },
  {
    id: 839,
    questionBn: "প্রায়োরিটি কিউ কী?",
    questionEn: "What is a priority queue?",
    options: [
      { bn: "FIFO কিউ", en: "FIFO queue" },
      { bn: "প্রায়োরিটি অনুযায়ী উপাদান বের হয়", en: "Elements come out according to priority" },
      { bn: "LIFO কিউ", en: "LIFO queue" },
      { bn: "র‍্যান্ডম কিউ", en: "Random queue" }
    ],
    correctAnswer: 1,
    category: "Data Structure",
    difficulty: "hard"
  },
  {
    id: 840,
    questionBn: "BST এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of BST?",
    options: [
      { bn: "বাইনারি সার্চ ট্রি", en: "Binary Search Tree" },
      { bn: "বেসিক সার্চ ট্রি", en: "Basic Search Tree" },
      { bn: "বাইনারি সিম্পল ট্রি", en: "Binary Simple Tree" },
      { bn: "বেস্ট সার্চ ট্রি", en: "Best Search Tree" }
    ],
    correctAnswer: 0,
    category: "Data Structure",
    difficulty: "medium"
  },
  // More Excel
  {
    id: 841,
    questionBn: "Excel এ TODAY() ফাংশন কী করে?",
    questionEn: "What does TODAY() function do in Excel?",
    options: [
      { bn: "গতকালের তারিখ দেয়", en: "Gives yesterday's date" },
      { bn: "আজকের তারিখ দেয়", en: "Gives today's date" },
      { bn: "আগামীকালের তারিখ দেয়", en: "Gives tomorrow's date" },
      { bn: "বছর দেয়", en: "Gives year" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 842,
    questionBn: "Excel এ NOW() ফাংশন কী করে?",
    questionEn: "What does NOW() function do in Excel?",
    options: [
      { bn: "শুধু তারিখ দেয়", en: "Gives only date" },
      { bn: "বর্তমান তারিখ ও সময় দেয়", en: "Gives current date and time" },
      { bn: "শুধু সময় দেয়", en: "Gives only time" },
      { bn: "বছর দেয়", en: "Gives year" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 843,
    questionBn: "Excel এ LEN() ফাংশন কী করে?",
    questionEn: "What does LEN() function do in Excel?",
    options: [
      { bn: "টেক্সট যোগ করে", en: "Adds text" },
      { bn: "টেক্সটের দৈর্ঘ্য গণনা করে", en: "Counts length of text" },
      { bn: "টেক্সট ডিলিট করে", en: "Deletes text" },
      { bn: "টেক্সট কপি করে", en: "Copies text" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 844,
    questionBn: "Excel এ TRIM() ফাংশন কী করে?",
    questionEn: "What does TRIM() function do in Excel?",
    options: [
      { bn: "অতিরিক্ত স্পেস সরায়", en: "Removes extra spaces" },
      { bn: "টেক্সট যোগ করে", en: "Adds text" },
      { bn: "সংখ্যা যোগ করে", en: "Adds numbers" },
      { bn: "সেল মার্জ করে", en: "Merges cells" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 845,
    questionBn: "Excel এ UPPER() ফাংশন কী করে?",
    questionEn: "What does UPPER() function do in Excel?",
    options: [
      { bn: "সব ছোট হাতের অক্ষরে রূপান্তর", en: "Converts to lowercase" },
      { bn: "সব বড় হাতের অক্ষরে রূপান্তর", en: "Converts to uppercase" },
      { bn: "সংখ্যা বাড়ায়", en: "Increases numbers" },
      { bn: "কিছুই না", en: "Nothing" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  // More History
  {
    id: 846,
    questionBn: "অ্যাবাকাস কী?",
    questionEn: "What is abacus?",
    options: [
      { bn: "আধুনিক কম্পিউটার", en: "Modern computer" },
      { bn: "প্রাচীন গণনা যন্ত্র", en: "Ancient calculating device" },
      { bn: "প্রিন্টার", en: "Printer" },
      { bn: "মনিটর", en: "Monitor" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "easy"
  },
  {
    id: 847,
    questionBn: "প্রথম মেকানিক্যাল ক্যালকুলেটর কে তৈরি করেন?",
    questionEn: "Who created the first mechanical calculator?",
    options: [
      { bn: "চার্লস ব্যাবেজ", en: "Charles Babbage" },
      { bn: "ব্লেইজ প্যাসকেল", en: "Blaise Pascal" },
      { bn: "অ্যালান টুরিং", en: "Alan Turing" },
      { bn: "বিল গেটস", en: "Bill Gates" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 848,
    questionBn: "চার্লস ব্যাবেজের তৈরি মেশিনের নাম কী?",
    questionEn: "What is the name of Charles Babbage's machine?",
    options: [
      { bn: "ENIAC", en: "ENIAC" },
      { bn: "অ্যানালিটিক্যাল ইঞ্জিন", en: "Analytical Engine" },
      { bn: "UNIVAC", en: "UNIVAC" },
      { bn: "IBM PC", en: "IBM PC" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 849,
    questionBn: "UNIVAC কী?",
    questionEn: "What is UNIVAC?",
    options: [
      { bn: "প্রথম বাণিজ্যিক কম্পিউটার", en: "First commercial computer" },
      { bn: "প্রথম পার্সোনাল কম্পিউটার", en: "First personal computer" },
      { bn: "প্রথম ল্যাপটপ", en: "First laptop" },
      { bn: "প্রথম স্মার্টফোন", en: "First smartphone" }
    ],
    correctAnswer: 0,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 850,
    questionBn: "Twitter কবে প্রতিষ্ঠিত হয়?",
    questionEn: "When was Twitter founded?",
    options: [
      { bn: "২০০৪", en: "2004" },
      { bn: "২০০৬", en: "2006" },
      { bn: "২০০৮", en: "2008" },
      { bn: "২০১০", en: "2010" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  }
];
