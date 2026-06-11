// NHSPC Quiz Questions - Part 1: Computer Fundamentals & Hardware
export interface Question {
  id: number;
  questionBn: string;
  questionEn: string;
  options: { bn: string; en: string }[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: { bn: string; en: string };
}

export const computerFundamentalsQuestions: Question[] = [
  // CPU & Processor
  {
    id: 1,
    questionBn: "CPU এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of CPU?",
    options: [
      { bn: "সেন্ট্রাল প্রসেসিং ইউনিট", en: "Central Processing Unit" },
      { bn: "কম্পিউটার প্রসেসিং ইউনিট", en: "Computer Processing Unit" },
      { bn: "সেন্ট্রাল প্রোগ্রাম ইউনিট", en: "Central Program Unit" },
      { bn: "কন্ট্রোল প্রসেসিং ইউনিট", en: "Control Processing Unit" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy",
    explanation: {
      bn: "CPU হলো Central Processing Unit যা কম্পিউটারের মস্তিষ্ক হিসেবে কাজ করে।",
      en: "CPU stands for Central Processing Unit, which acts as the brain of the computer."
    }
  },
  {
    id: 2,
    questionBn: "CPU এর কোন অংশ গাণিতিক ও যৌক্তিক কাজ করে?",
    questionEn: "Which part of CPU performs arithmetic and logical operations?",
    options: [
      { bn: "কন্ট্রোল ইউনিট", en: "Control Unit" },
      { bn: "ALU", en: "ALU" },
      { bn: "রেজিস্টার", en: "Register" },
      { bn: "ক্যাশ মেমরি", en: "Cache Memory" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy",
    explanation: {
      bn: "ALU (Arithmetic Logic Unit) গাণিতিক যোগ, বিয়োগ এবং যৌক্তিক AND, OR অপারেশন করে।",
      en: "ALU (Arithmetic Logic Unit) performs arithmetic operations like addition, subtraction and logical operations like AND, OR."
    }
  },
  {
    id: 3,
    questionBn: "কম্পিউটারের মস্তিষ্ক বলা হয় কোনটিকে?",
    questionEn: "Which component is called the brain of the computer?",
    options: [
      { bn: "মনিটর", en: "Monitor" },
      { bn: "র‍্যাম", en: "RAM" },
      { bn: "সিপিইউ", en: "CPU" },
      { bn: "হার্ডডিস্ক", en: "Hard Disk" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 4,
    questionBn: "মাইক্রোপ্রসেসর কত সালে আবিষ্কৃত হয়?",
    questionEn: "In which year was the microprocessor invented?",
    options: [
      { bn: "১৯৬৯", en: "1969" },
      { bn: "১৯৭১", en: "1971" },
      { bn: "১৯৭৫", en: "1975" },
      { bn: "১৯৮০", en: "1980" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium",
    explanation: {
      bn: "Intel 4004 প্রথম মাইক্রোপ্রসেসর ১৯৭১ সালে Intel কোম্পানি তৈরি করে।",
      en: "Intel 4004, the first microprocessor, was created by Intel Corporation in 1971."
    }
  },
  {
    id: 5,
    questionBn: "প্রথম মাইক্রোপ্রসেসরের নাম কী?",
    questionEn: "What is the name of the first microprocessor?",
    options: [
      { bn: "Intel 8086", en: "Intel 8086" },
      { bn: "Intel 4004", en: "Intel 4004" },
      { bn: "Intel 8080", en: "Intel 8080" },
      { bn: "AMD Ryzen", en: "AMD Ryzen" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  // Memory Types
  {
    id: 6,
    questionBn: "RAM এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of RAM?",
    options: [
      { bn: "র‍্যান্ডম অ্যাক্সেস মেমরি", en: "Random Access Memory" },
      { bn: "রিড অ্যাক্সেস মেমরি", en: "Read Access Memory" },
      { bn: "র‍্যাপিড অ্যাক্সেস মেমরি", en: "Rapid Access Memory" },
      { bn: "রিয়েল অ্যাক্সেস মেমরি", en: "Real Access Memory" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 7,
    questionBn: "কোন মেমরি বিদ্যুৎ বন্ধ হলে ডেটা হারিয়ে যায়?",
    questionEn: "Which memory loses data when power is turned off?",
    options: [
      { bn: "ROM", en: "ROM" },
      { bn: "RAM", en: "RAM" },
      { bn: "হার্ডডিস্ক", en: "Hard Disk" },
      { bn: "SSD", en: "SSD" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy",
    explanation: {
      bn: "RAM হলো volatile memory, বিদ্যুৎ বন্ধ হলে এর ডেটা মুছে যায়।",
      en: "RAM is volatile memory, its data is erased when power is turned off."
    }
  },
  {
    id: 8,
    questionBn: "ROM এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of ROM?",
    options: [
      { bn: "র‍্যান্ডম অনলি মেমরি", en: "Random Only Memory" },
      { bn: "রিড অনলি মেমরি", en: "Read Only Memory" },
      { bn: "রিয়েল অনলি মেমরি", en: "Real Only Memory" },
      { bn: "রিড আউটপুট মেমরি", en: "Read Output Memory" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 9,
    questionBn: "কোনটি Non-volatile মেমরি?",
    questionEn: "Which is Non-volatile memory?",
    options: [
      { bn: "SRAM", en: "SRAM" },
      { bn: "DRAM", en: "DRAM" },
      { bn: "ROM", en: "ROM" },
      { bn: "Cache", en: "Cache" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 10,
    questionBn: "BIOS কোন মেমরিতে সংরক্ষিত থাকে?",
    questionEn: "In which memory is BIOS stored?",
    options: [
      { bn: "RAM", en: "RAM" },
      { bn: "ROM", en: "ROM" },
      { bn: "হার্ডডিস্ক", en: "Hard Disk" },
      { bn: "Cache", en: "Cache" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium",
    explanation: {
      bn: "BIOS (Basic Input Output System) ROM এ সংরক্ষিত থাকে যা কম্পিউটার চালু করতে সাহায্য করে।",
      en: "BIOS (Basic Input Output System) is stored in ROM which helps boot the computer."
    }
  },
  // Input Devices
  {
    id: 11,
    questionBn: "নিচের কোনটি ইনপুট ডিভাইস?",
    questionEn: "Which of the following is an input device?",
    options: [
      { bn: "মনিটর", en: "Monitor" },
      { bn: "প্রিন্টার", en: "Printer" },
      { bn: "কীবোর্ড", en: "Keyboard" },
      { bn: "স্পিকার", en: "Speaker" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 12,
    questionBn: "স্ক্যানার কোন ধরনের ডিভাইস?",
    questionEn: "What type of device is a scanner?",
    options: [
      { bn: "আউটপুট", en: "Output" },
      { bn: "ইনপুট", en: "Input" },
      { bn: "স্টোরেজ", en: "Storage" },
      { bn: "প্রসেসিং", en: "Processing" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 13,
    questionBn: "মাউসের আবিষ্কারক কে?",
    questionEn: "Who invented the mouse?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "ডগলাস এঙ্গেলবার্ট", en: "Douglas Engelbart" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "চার্লস ব্যাবেজ", en: "Charles Babbage" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 14,
    questionBn: "QWERTY কী?",
    questionEn: "What is QWERTY?",
    options: [
      { bn: "একটি প্রোগ্রামিং ভাষা", en: "A programming language" },
      { bn: "কীবোর্ড লেআউট", en: "Keyboard layout" },
      { bn: "একটি সফটওয়্যার", en: "A software" },
      { bn: "একটি হার্ডওয়্যার", en: "A hardware" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 15,
    questionBn: "ওয়েবক্যাম কোন ধরনের ডিভাইস?",
    questionEn: "What type of device is a webcam?",
    options: [
      { bn: "আউটপুট", en: "Output" },
      { bn: "ইনপুট", en: "Input" },
      { bn: "স্টোরেজ", en: "Storage" },
      { bn: "নেটওয়ার্ক", en: "Network" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  // Output Devices
  {
    id: 16,
    questionBn: "নিচের কোনটি আউটপুট ডিভাইস?",
    questionEn: "Which of the following is an output device?",
    options: [
      { bn: "কীবোর্ড", en: "Keyboard" },
      { bn: "মাউস", en: "Mouse" },
      { bn: "প্রিন্টার", en: "Printer" },
      { bn: "স্ক্যানার", en: "Scanner" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 17,
    questionBn: "LCD এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of LCD?",
    options: [
      { bn: "লিকুইড ক্রিস্টাল ডিসপ্লে", en: "Liquid Crystal Display" },
      { bn: "লাইট ক্রিস্টাল ডিসপ্লে", en: "Light Crystal Display" },
      { bn: "লো কস্ট ডিসপ্লে", en: "Low Cost Display" },
      { bn: "লার্জ কালার ডিসপ্লে", en: "Large Color Display" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 18,
    questionBn: "LED এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of LED?",
    options: [
      { bn: "লাইট এমিটিং ডায়োড", en: "Light Emitting Diode" },
      { bn: "লো এনার্জি ডিসপ্লে", en: "Low Energy Display" },
      { bn: "লিকুইড এমিটিং ডায়োড", en: "Liquid Emitting Diode" },
      { bn: "লার্জ ইলেকট্রনিক ডিভাইস", en: "Large Electronic Device" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 19,
    questionBn: "কোন প্রিন্টার কালি ব্যবহার করে না?",
    questionEn: "Which printer does not use ink?",
    options: [
      { bn: "ইঙ্কজেট প্রিন্টার", en: "Inkjet Printer" },
      { bn: "লেজার প্রিন্টার", en: "Laser Printer" },
      { bn: "ডট ম্যাট্রিক্স প্রিন্টার", en: "Dot Matrix Printer" },
      { bn: "থার্মাল প্রিন্টার", en: "Thermal Printer" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium",
    explanation: {
      bn: "লেজার প্রিন্টার টোনার পাউডার ব্যবহার করে, কালি নয়।",
      en: "Laser printers use toner powder, not ink."
    }
  },
  {
    id: 20,
    questionBn: "প্লটার কী ধরনের ডিভাইস?",
    questionEn: "What type of device is a plotter?",
    options: [
      { bn: "ইনপুট", en: "Input" },
      { bn: "আউটপুট", en: "Output" },
      { bn: "স্টোরেজ", en: "Storage" },
      { bn: "প্রসেসিং", en: "Processing" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  // Storage Devices
  {
    id: 21,
    questionBn: "HDD এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of HDD?",
    options: [
      { bn: "হাই ডেফিনিশন ডিস্ক", en: "High Definition Disk" },
      { bn: "হার্ড ডিস্ক ড্রাইভ", en: "Hard Disk Drive" },
      { bn: "হাই ডেনসিটি ডিস্ক", en: "High Density Disk" },
      { bn: "হার্ড ডেটা ড্রাইভ", en: "Hard Data Drive" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 22,
    questionBn: "SSD এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of SSD?",
    options: [
      { bn: "সুপার স্টোরেজ ডিস্ক", en: "Super Storage Disk" },
      { bn: "সলিড স্টেট ড্রাইভ", en: "Solid State Drive" },
      { bn: "স্ট্যান্ডার্ড স্টোরেজ ডিভাইস", en: "Standard Storage Device" },
      { bn: "সিস্টেম স্টোরেজ ড্রাইভ", en: "System Storage Drive" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 23,
    questionBn: "১ কিলোবাইট সমান কত বাইট?",
    questionEn: "1 Kilobyte equals how many bytes?",
    options: [
      { bn: "১০০০ বাইট", en: "1000 bytes" },
      { bn: "১০২৪ বাইট", en: "1024 bytes" },
      { bn: "১০০ বাইট", en: "100 bytes" },
      { bn: "২০৪৮ বাইট", en: "2048 bytes" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy",
    explanation: {
      bn: "1 KB = 2^10 = 1024 bytes",
      en: "1 KB = 2^10 = 1024 bytes"
    }
  },
  {
    id: 24,
    questionBn: "১ গিগাবাইট সমান কত মেগাবাইট?",
    questionEn: "1 Gigabyte equals how many Megabytes?",
    options: [
      { bn: "১০০ MB", en: "100 MB" },
      { bn: "১০০০ MB", en: "1000 MB" },
      { bn: "১০২৪ MB", en: "1024 MB" },
      { bn: "৫১২ MB", en: "512 MB" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 25,
    questionBn: "CD-ROM এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of CD-ROM?",
    options: [
      { bn: "কম্প্যাক্ট ডিস্ক রিড অনলি মেমরি", en: "Compact Disc Read Only Memory" },
      { bn: "কম্পিউটার ডিস্ক রিড অনলি মেমরি", en: "Computer Disc Read Only Memory" },
      { bn: "সার্কুলার ডিস্ক রিড অনলি মেমরি", en: "Circular Disc Read Only Memory" },
      { bn: "কম্প্যাক্ট ডেটা রিড অনলি মেমরি", en: "Compact Data Read Only Memory" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 26,
    questionBn: "DVD এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of DVD?",
    options: [
      { bn: "ডিজিটাল ভিডিও ডিস্ক", en: "Digital Video Disc" },
      { bn: "ডিজিটাল ভার্সেটাইল ডিস্ক", en: "Digital Versatile Disc" },
      { bn: "ডাবল ভিডিও ডিস্ক", en: "Double Video Disc" },
      { bn: "উভয় ক ও খ", en: "Both A and B" }
    ],
    correctAnswer: 3,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 27,
    questionBn: "USB এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of USB?",
    options: [
      { bn: "ইউনিভার্সাল সিরিয়াল বাস", en: "Universal Serial Bus" },
      { bn: "ইউনিফাইড সিরিয়াল বাস", en: "Unified Serial Bus" },
      { bn: "আল্ট্রা স্পিড বাস", en: "Ultra Speed Bus" },
      { bn: "ইউনিক সিস্টেম বাস", en: "Unique System Bus" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 28,
    questionBn: "পেনড্রাইভ কোন ধরনের মেমরি?",
    questionEn: "What type of memory is a pen drive?",
    options: [
      { bn: "Volatile", en: "Volatile" },
      { bn: "Non-volatile", en: "Non-volatile" },
      { bn: "Cache", en: "Cache" },
      { bn: "Virtual", en: "Virtual" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 29,
    questionBn: "ব্লু-রে ডিস্কের সর্বোচ্চ ধারণক্ষমতা কত?",
    questionEn: "What is the maximum capacity of a Blu-ray disc?",
    options: [
      { bn: "৪.৭ GB", en: "4.7 GB" },
      { bn: "৮.৫ GB", en: "8.5 GB" },
      { bn: "২৫ GB", en: "25 GB" },
      { bn: "১২৮ GB", en: "128 GB" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "hard",
    explanation: {
      bn: "সিঙ্গেল লেয়ার ব্লু-রে ডিস্ক ২৫ GB ধারণ করতে পারে।",
      en: "Single layer Blu-ray disc can hold 25 GB."
    }
  },
  {
    id: 30,
    questionBn: "কোনটি সবচেয়ে বড় ডেটা ইউনিট?",
    questionEn: "Which is the largest data unit?",
    options: [
      { bn: "গিগাবাইট", en: "Gigabyte" },
      { bn: "টেরাবাইট", en: "Terabyte" },
      { bn: "পেটাবাইট", en: "Petabyte" },
      { bn: "এক্সাবাইট", en: "Exabyte" }
    ],
    correctAnswer: 3,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  // Software
  {
    id: 31,
    questionBn: "অপারেটিং সিস্টেম কোন ধরনের সফটওয়্যার?",
    questionEn: "What type of software is an operating system?",
    options: [
      { bn: "অ্যাপ্লিকেশন সফটওয়্যার", en: "Application Software" },
      { bn: "সিস্টেম সফটওয়্যার", en: "System Software" },
      { bn: "ইউটিলিটি সফটওয়্যার", en: "Utility Software" },
      { bn: "প্রোগ্রামিং সফটওয়্যার", en: "Programming Software" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 32,
    questionBn: "নিচের কোনটি অপারেটিং সিস্টেম?",
    questionEn: "Which of the following is an operating system?",
    options: [
      { bn: "MS Word", en: "MS Word" },
      { bn: "Chrome", en: "Chrome" },
      { bn: "Linux", en: "Linux" },
      { bn: "Photoshop", en: "Photoshop" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 33,
    questionBn: "Windows কোন ধরনের অপারেটিং সিস্টেম?",
    questionEn: "What type of operating system is Windows?",
    options: [
      { bn: "ওপেন সোর্স", en: "Open Source" },
      { bn: "ক্লোজড সোর্স/প্রোপ্রাইটরি", en: "Closed Source/Proprietary" },
      { bn: "ফ্রি সফটওয়্যার", en: "Free Software" },
      { bn: "শেয়ারওয়্যার", en: "Shareware" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 34,
    questionBn: "Linux অপারেটিং সিস্টেমের স্রষ্টা কে?",
    questionEn: "Who is the creator of Linux operating system?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "লিনাস টোরভাল্ডস", en: "Linus Torvalds" },
      { bn: "ডেনিস রিচি", en: "Dennis Ritchie" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 35,
    questionBn: "Android অপারেটিং সিস্টেম কোন কোম্পানির?",
    questionEn: "Which company owns Android operating system?",
    options: [
      { bn: "Apple", en: "Apple" },
      { bn: "Microsoft", en: "Microsoft" },
      { bn: "Google", en: "Google" },
      { bn: "Samsung", en: "Samsung" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 36,
    questionBn: "iOS অপারেটিং সিস্টেম কোন ডিভাইসে ব্যবহৃত হয়?",
    questionEn: "iOS operating system is used in which device?",
    options: [
      { bn: "Samsung ফোন", en: "Samsung phones" },
      { bn: "iPhone", en: "iPhone" },
      { bn: "Nokia ফোন", en: "Nokia phones" },
      { bn: "সকল মোবাইল", en: "All mobiles" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 37,
    questionBn: "MS Office কোন ধরনের সফটওয়্যার?",
    questionEn: "What type of software is MS Office?",
    options: [
      { bn: "সিস্টেম সফটওয়্যার", en: "System Software" },
      { bn: "অ্যাপ্লিকেশন সফটওয়্যার", en: "Application Software" },
      { bn: "ইউটিলিটি সফটওয়্যার", en: "Utility Software" },
      { bn: "ফার্মওয়্যার", en: "Firmware" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 38,
    questionBn: "Antivirus কোন ধরনের সফটওয়্যার?",
    questionEn: "What type of software is Antivirus?",
    options: [
      { bn: "সিস্টেম সফটওয়্যার", en: "System Software" },
      { bn: "অ্যাপ্লিকেশন সফটওয়্যার", en: "Application Software" },
      { bn: "ইউটিলিটি সফটওয়্যার", en: "Utility Software" },
      { bn: "ফার্মওয়্যার", en: "Firmware" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 39,
    questionBn: "ফার্মওয়্যার কী?",
    questionEn: "What is firmware?",
    options: [
      { bn: "হার্ডওয়্যার এবং সফটওয়্যারের মধ্যবর্তী", en: "Intermediate between hardware and software" },
      { bn: "শুধু হার্ডওয়্যার", en: "Only hardware" },
      { bn: "শুধু সফটওয়্যার", en: "Only software" },
      { bn: "ভাইরাস", en: "Virus" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "hard"
  },
  {
    id: 40,
    questionBn: "কম্পাইলার কী করে?",
    questionEn: "What does a compiler do?",
    options: [
      { bn: "প্রোগ্রাম রান করে", en: "Runs programs" },
      { bn: "সোর্স কোডকে মেশিন কোডে রূপান্তর করে", en: "Converts source code to machine code" },
      { bn: "ভাইরাস রিমুভ করে", en: "Removes viruses" },
      { bn: "ফাইল কপি করে", en: "Copies files" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  // Computer Generations
  {
    id: 41,
    questionBn: "প্রথম প্রজন্মের কম্পিউটারে কী ব্যবহৃত হতো?",
    questionEn: "What was used in first generation computers?",
    options: [
      { bn: "ট্রানজিস্টর", en: "Transistor" },
      { bn: "ভ্যাকুয়াম টিউব", en: "Vacuum Tube" },
      { bn: "ইন্টিগ্রেটেড সার্কিট", en: "Integrated Circuit" },
      { bn: "মাইক্রোপ্রসেসর", en: "Microprocessor" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 42,
    questionBn: "দ্বিতীয় প্রজন্মের কম্পিউটারে কী ব্যবহৃত হতো?",
    questionEn: "What was used in second generation computers?",
    options: [
      { bn: "ভ্যাকুয়াম টিউব", en: "Vacuum Tube" },
      { bn: "ট্রানজিস্টর", en: "Transistor" },
      { bn: "ইন্টিগ্রেটেড সার্কিট", en: "Integrated Circuit" },
      { bn: "মাইক্রোপ্রসেসর", en: "Microprocessor" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 43,
    questionBn: "তৃতীয় প্রজন্মের কম্পিউটারে কী ব্যবহৃত হতো?",
    questionEn: "What was used in third generation computers?",
    options: [
      { bn: "ভ্যাকুয়াম টিউব", en: "Vacuum Tube" },
      { bn: "ট্রানজিস্টর", en: "Transistor" },
      { bn: "ইন্টিগ্রেটেড সার্কিট (IC)", en: "Integrated Circuit (IC)" },
      { bn: "মাইক্রোপ্রসেসর", en: "Microprocessor" }
    ],
    correctAnswer: 2,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 44,
    questionBn: "চতুর্থ প্রজন্মের কম্পিউটারে কী ব্যবহৃত হয়?",
    questionEn: "What is used in fourth generation computers?",
    options: [
      { bn: "ভ্যাকুয়াম টিউব", en: "Vacuum Tube" },
      { bn: "ট্রানজিস্টর", en: "Transistor" },
      { bn: "ইন্টিগ্রেটেড সার্কিট", en: "Integrated Circuit" },
      { bn: "মাইক্রোপ্রসেসর (VLSI)", en: "Microprocessor (VLSI)" }
    ],
    correctAnswer: 3,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 45,
    questionBn: "পঞ্চম প্রজন্মের কম্পিউটারের বৈশিষ্ট্য কী?",
    questionEn: "What is the characteristic of fifth generation computers?",
    options: [
      { bn: "ভ্যাকুয়াম টিউব", en: "Vacuum Tube" },
      { bn: "কৃত্রিম বুদ্ধিমত্তা (AI)", en: "Artificial Intelligence (AI)" },
      { bn: "ট্রানজিস্টর", en: "Transistor" },
      { bn: "ইন্টিগ্রেটেড সার্কিট", en: "Integrated Circuit" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 46,
    questionBn: "ENIAC কোন প্রজন্মের কম্পিউটার?",
    questionEn: "ENIAC belongs to which generation of computers?",
    options: [
      { bn: "প্রথম", en: "First" },
      { bn: "দ্বিতীয়", en: "Second" },
      { bn: "তৃতীয়", en: "Third" },
      { bn: "চতুর্থ", en: "Fourth" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 47,
    questionBn: "IC এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of IC?",
    options: [
      { bn: "ইন্টারনাল সার্কিট", en: "Internal Circuit" },
      { bn: "ইন্টিগ্রেটেড সার্কিট", en: "Integrated Circuit" },
      { bn: "ইন্টারকানেক্টেড সার্কিট", en: "Interconnected Circuit" },
      { bn: "ইন্টেলিজেন্ট সার্কিট", en: "Intelligent Circuit" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "easy"
  },
  {
    id: 48,
    questionBn: "VLSI এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of VLSI?",
    options: [
      { bn: "ভেরি লার্জ স্কেল ইন্টিগ্রেশন", en: "Very Large Scale Integration" },
      { bn: "ভেরি লো স্পিড ইন্টিগ্রেশন", en: "Very Low Speed Integration" },
      { bn: "ভার্চুয়াল লার্জ সিস্টেম ইন্টিগ্রেশন", en: "Virtual Large System Integration" },
      { bn: "ভেরি লং স্ক্যান ইন্টিগ্রেশন", en: "Very Long Scan Integration" }
    ],
    correctAnswer: 0,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 49,
    questionBn: "প্রথম ইলেকট্রনিক কম্পিউটারের নাম কী?",
    questionEn: "What is the name of the first electronic computer?",
    options: [
      { bn: "UNIVAC", en: "UNIVAC" },
      { bn: "ENIAC", en: "ENIAC" },
      { bn: "EDVAC", en: "EDVAC" },
      { bn: "Mark I", en: "Mark I" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "medium"
  },
  {
    id: 50,
    questionBn: "ট্রানজিস্টর কে আবিষ্কার করেন?",
    questionEn: "Who invented the transistor?",
    options: [
      { bn: "চার্লস ব্যাবেজ", en: "Charles Babbage" },
      { bn: "জন বারডিন ও ওয়াল্টার ব্র্যাটেইন", en: "John Bardeen & Walter Brattain" },
      { bn: "অ্যালান টুরিং", en: "Alan Turing" },
      { bn: "টিম বার্নার্স-লি", en: "Tim Berners-Lee" }
    ],
    correctAnswer: 1,
    category: "Computer Fundamentals",
    difficulty: "hard"
  }
];
